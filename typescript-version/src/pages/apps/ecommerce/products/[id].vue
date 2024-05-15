<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const { data: product } = await useFetch(`/api/ecommerce/products/${route.params.id}`).json()
</script>

<template>
  <VCard class="pa-10">
    <VRow>
      <VCol md="5">
        <div class="py-10">
          <VImg
            :src="product.image"
            width="auto"
          />
        </div>
      </VCol>

      <VCol md="7">
        <div class="py-10">
          <div class="text-h3 mb-4">
            {{ product.productName }}
          </div>
          <div class="text-h4 mb-4">
            {{ product.price }}
          </div>
          <div>
            <p>{{ product.productDescription }}</p>
            <VRating
              :model-value="product.rating"
              readonly
              density="compact"
              class="mb-4 d-block"
            />

            <VBtn
              prepend-icon="ri-shopping-cart-line"
              class="text-center"
            >
              Add to Cart
            </VBtn>
          </div>
        </div>
      </VCol>
    </VRow>

    <div class="text-center">
      <VBtn
        class="my-6 text-center"
        @click="() => router.push({ path: '/apps/ecommerce/products' })"
      >
        Continue Shopping
      </VBtn>
    </div>
  </VCard>
</template>
