<script lang="ts" setup>
import type { NavLink } from '@layouts/types'

const props = defineProps<{
  item: NavLink
}>()

const router = useRouter()

const isRouteActive = computed(() => {
  let name: any = props.item.to
  if (props.item.to && typeof props.item.to !== 'string')
    name = router.resolve(props.item.to).name

  return router.currentRoute.value.name && router.currentRoute.value.name === name
})
</script>

<template>
  <li
    class="nav-link"
    :class="{ disabled: item.disable }"
  >
    <Component
      :is="item.to ? 'RouterLink' : 'a'"
      :to="item.to"
      :href="item.href"
      :target="item.target"
      :class="{ 'router-link-active router-link-exact-active': isRouteActive }"
    >
      <VIcon
        :icon="item.icon || 'ri-checkbox-blank-circle-line'"
        class="nav-item-icon"
      />
      <!-- 👉 Title -->
      <span class="nav-item-title">
        {{ item.title }}
      </span>
      <span
        class="nav-item-badge"
        :class="item.badgeClass"
      >
        {{ item.badgeContent }}
      </span>
    </Component>
  </li>
</template>

<style lang="scss">
.layout-vertical-nav {
  .nav-link a {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
}
</style>
