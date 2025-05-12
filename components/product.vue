<template>
  <div v-if="loading" class="w-[270px] mx-2 h-[350px] flex-shrink-0 rounded flex flex-col justify-between items-center overflow-hidden">
    <div class="w-full h-[250px] bg-gray-200 animate-pulse rounded-t-md"></div>
    <div class="w-full h-[85px] p-4 space-y-2">
      <div class="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
      <div class="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
    </div>
  </div>
  <div v-else
    class="w-[270px] mx-2 h-[350px] flex-shrink-0 rounded flex flex-col justify-between items-center overflow-hidden">
    <div class="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center relative cursor-pointer"
      @mouseenter="show = true" @mouseleave="show = false">
      <div v-if="product.hasPromotion"
        class="w-[55px] h-[25px] py-[4px] px-[12px] absolute top-[12px] left-[12px] bg-highlight-2 rounded-[4px] flex items-center justify-center">
        <span class="w-[31px] h-[18px] text-white font-[400] text-[12px] line-[18px]">{{ product.promotionPercentage
        }}</span>
      </div>
      <div
        class="w-[34px] h-[76px] absolute top-[12px] left-[224px] flex flex-col justify-between items-center gap-[8px]">
        <button v-if="!store.Fav.includes(product)" @click="store.addToFav(product)" type="button" data-state="closed"
          data-grace-area-trigger=""
          class="font-medium inline-flex items-center transition-colors text-sm bg-white cursor-pointer rounded-full hover:bg-zinc-100 hover:disabled:bg-transparent ">
          <div class="relative inline-flex items-center justify-center shrink-0 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path fill="currentColor" fill-rule="evenodd"
                d="M3.25 10.03c0-2.7 2.37-4.78 5.15-4.78c1.433 0 2.695.672 3.6 1.542c.905-.87 2.166-1.542 3.6-1.542c2.78 0 5.15 2.08 5.15 4.78c0 1.85-.789 3.476-1.882 4.852c-1.09 1.372-2.518 2.537-3.884 3.484c-.523.362-1.05.695-1.534.941c-.453.231-.975.443-1.45.443s-.996-.212-1.45-.443a14 14 0 0 1-1.533-.941c-1.367-.947-2.794-2.112-3.885-3.484C4.039 13.506 3.25 11.88 3.25 10.03M8.4 6.75c-2.08 0-3.65 1.53-3.65 3.28c0 1.403.596 2.71 1.556 3.918c.962 1.21 2.257 2.279 3.565 3.185c.495.343.96.634 1.36.838c.428.218.676.279.769.279s.341-.061.77-.28a12 12 0 0 0 1.36-.837c1.307-.906 2.602-1.974 3.564-3.185c.96-1.208 1.556-2.515 1.556-3.918c0-1.75-1.57-3.28-3.65-3.28c-1.194 0-2.31.713-3.005 1.619a.75.75 0 0 1-1.19 0C10.71 7.463 9.595 6.75 8.4 6.75"
                clip-rule="evenodd" />
            </svg>
          </div>
        </button>
        <button v-else @click="store.removeFromFav(product)" type="button" data-state="closed"
          data-grace-area-trigger=""
          class="font-medium inline-flex items-center transition-colors text-sm bg-white cursor-pointer rounded-full hover:bg-zinc-100 hover:disabled:bg-transparent dsize-[34px]">
          <div class="relative inline-flex items-center justify-center shrink-0 p-2 text-highlight-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path fill="currentColor" fill-rule="evenodd"
                d="M3.25 10.03c0-2.7 2.37-4.78 5.15-4.78c1.433 0 2.695.672 3.6 1.542c.905-.87 2.166-1.542 3.6-1.542c2.78 0 5.15 2.08 5.15 4.78c0 1.85-.789 3.476-1.882 4.852c-1.09 1.372-2.518 2.537-3.884 3.484c-.523.362-1.05.695-1.534.941c-.453.231-.975.443-1.45.443s-.996-.212-1.45-.443a14 14 0 0 1-1.533-.941c-1.367-.947-2.794-2.112-3.885-3.484C4.039 13.506 3.25 11.88 3.25 10.03M8.4 6.75c-2.08 0-3.65 1.53-3.65 3.28c0 1.403.596 2.71 1.556 3.918c.962 1.21 2.257 2.279 3.565 3.185c.495.343.96.634 1.36.838c.428.218.676.279.769.279s.341-.061.77-.28a12 12 0 0 0 1.36-.837c1.307-.906 2.602-1.974 3.564-3.185c.96-1.208 1.556-2.515 1.556-3.918c0-1.75-1.57-3.28-3.65-3.28c-1.194 0-2.31.713-3.005 1.619a.75.75 0 0 1-1.19 0C10.71 7.463 9.595 6.75 8.4 6.75"
                clip-rule="evenodd" />
            </svg>
          </div>
        </button>
        <nuxtLink :to="{ name: 'products-id', params: { id: product.id } }" type="button" data-state="closed"
          data-grace-area-trigger=""
          class="font-medium inline-flex items-center transition-colors text-sm bg-white cursor-pointer rounded-full hover:bg-zinc-100 hover:disabled:bg-transparent ">
          <div class="relative inline-flex items-center justify-center shrink-0 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3" />
            </svg>
          </div>
        </nuxtLink>
      </div>
      <Transition name="fade">
        <div v-if="show"
          class="w-[270px] h-[41px] cursor-pointer bg-black absolute top-[209px] rounded-t-[4px] flex justify-center items-center">
          <h3 @click="store.addToCart(product)" v-if="!store.cart.some(p => p.id === product.id)"
            class="text-white w-full h-[24px] text-center capitalize">
            add to cart
          </h3>
          <h3 @click="store.removeFromCart(product)" v-else class="text-white w-full text-center h-[24px] capitalize">
            added to cart
          </h3>
        </div>
      </Transition>

      <div class="w-[190px] h-[190px]">
        <img :src="'http://localhost:3000/uploads/Product/' + product.image[0]" alt=""
          class="w-full h-full object-center" />
      </div>
    </div>
    <div class="w-full h-[85px] flex justify-start items-start flex-col">
      <h3 class="text-[16px] font-[500] w-full h-[24px] p-1 text-start truncate text-wrap">
        {{ product.productName }}
      </h3>
      <div class="flex items-center justify-start gap-[12px] w-full h-[24px] px-2">

        <div v-if="product.hasPromotion" class="flex items-center gap-2">
          <span class="text-lg font-semibold text-red-600">
            {{ product.promotionPrice }}
          </span>
          <span class="text-sm font-medium line-through text-gray-400">
            {{ product.price }}
          </span>
        </div>
        <div v-else class="text-lg font-semibold text-gray-800">
          {{ product.price }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types';
const store = useFavCartStore();
const show = ref(false);

interface ProductProps {
  product: Product;
  loading?: boolean; 
}

const { product, loading = false } = defineProps<ProductProps>();

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>