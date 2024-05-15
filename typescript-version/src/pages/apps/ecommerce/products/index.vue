<script setup lang="ts">
const router = useRouter()
const { data: products } = await useFetch('/api/ecommerce/products').json()
</script>

<template>
  <div>
    <div class="d-flex flex-wrap gap-6 justify-center">
      <template
        v-for="(product, index) in products"
        :key="index"
      >
        <VCard width="300">
          <VImg
            :src="product.image"
            cover
          />
          <VCardItem>
            <VCardTitle>{{ product.productName }}</VCardTitle>
            <VCardSubtitle>Price: {{ product.price }}</VCardSubtitle>
          </VCardItem>
          <VCardText>
            <p class="mb-0">
              {{ product.productDescription }}
            </p>
            <VRating
              :model-value="product.rating"
              readonly
              density="compact"
            />
          </VCardText>
          <VCardActions>
            <VBtn
              block
              @click="() => router.push({ path: `/apps/ecommerce/products/${product.id}` })"
            >
              Buy Now
            </VBtn>
          </VCardActions>
        </VCard>
      </template>
    </div>
  </div>
</template>
