<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const { data: product } = await useFetch(`/api/ecommerce/products/${route.params.id}`).json()
const quantity = ref(0)
</script>

<template>
  <VCard class="pa-10">
    <VRow>
      <VCol
        md="4"
        cols="12"
      >
        <div class="py-10 bg-background d-flex justify-center">
          <VImg
            :src="product.image"
            width="auto"
            max-height="40vh"
          />
        </div>
      </VCol>

      <VCol
        md="8"
        cols="12"
      >
        <div>
          <div class="text-h3 mb-4">
            {{ product.productName }}
          </div>

          <div class="text-h4 mb-4">
            {{ product.price }}
          </div>

          <div>
            <p>{{ product.productDescription }} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor eum quam dolore ratione aspernatur nobis. Assumenda dicta voluptatibus reiciendis repudiandae?</p>

            <VRating
              :model-value="product.rating"
              readonly
              density="compact"
              class="mb-2 d-block"
            />

            <VList>
              <VListItem>
                <template #prepend>
                  <VIcon
                    icon="ri-circle-fill"
                    size="10"
                  />
                </template>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, deserunt!
              </VListItem>
              <VListItem>
                <template #prepend>
                  <VIcon
                    icon="ri-circle-fill"
                    size="10"
                  />
                </template>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, deserunt!
              </VListItem>
              <VListItem>
                <template #prepend>
                  <VIcon
                    icon="ri-circle-fill"
                    size="10"
                  />
                </template>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, deserunt!
              </VListItem>
              <VListItem>
                <template #prepend>
                  <VIcon
                    icon="ri-circle-fill"
                    size="10"
                  />
                </template>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, deserunt!
              </VListItem>
            </VList>

            <!--
              <div
              v-if="quantity"
              class="d-flex gap-1 align-center mb-4"
              >
              <VBtnToggle density="compact">
              <VBtn
              icon="ri-subtract-line"
              rounded
              density="compact"
              size="small"
              @click="quantity > 0 ? quantity -= 1 : 1"
              />
              <VBtn variant="text">
              {{ quantity }}
              </VBtn>
              <VBtn
              icon="ri-add-line"
              rounded
              @click="quantity += 1"
              />
              </VBtnToggle>
              </div>
            -->

            <VBtn
              prepend-icon="ri-shopping-cart-line"
              class="text-center"
              size="large"
              @click="quantity += 1"
            >
              Add to Cart
            </VBtn>
          </div>
        </div>
      </VCol>
    </VRow>
  </VCard>
  <div class="text-center">
    <VBtn
      class="my-6 text-center"
      @click="() => router.push({ path: '/apps/ecommerce/products' })"
    >
      Continue Shopping
    </VBtn>
  </div>
</template>
