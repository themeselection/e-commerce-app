<template>
  <div class="layout-wrapper layout-blank">
    <RouterView #="{Component}">
      <Suspense :timeout="0">
        <Component :is="Component" />
      </Suspense>
    </RouterView>
  </div>
</template>

<style>
.layout-wrapper.layout-blank {
  flex-direction: column;
}
</style>
