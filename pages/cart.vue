<template>
  <MainLayout>
    <div v-if="store.cart.length === 0" class="container mx-auto h-[70vh] flex flex-col items-center justify-center">
      <div class="text-center">
        <Icon name="mdi:cart-outline" class="w-20 h-20 text-gray-400 mx-auto mb-4" />
        <h2 class="text-2xl font-semibold text-gray-700 mb-2">Your cart is empty</h2>
        <p class="text-gray-500 mb-6">Looks like you haven't added any items to your cart yet</p>
        <nuxtLink 
          :to="{ name: 'index' }"
          class="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition"
        >
          Continue Shopping
        </nuxtLink>
      </div>
    </div>
    <div v-else class="container mx-auto h-fit flex justify-evenly flex-wrap gap-5">
      <div class="w-full h-full mt-1">
        <table class="w-full h-fit border-separate border-spacing-y-4">
          <tr class="w-full h-[72px] rounded-[4px] shadow-[0px_1px_13px_0px_#0000000D]">
            <th class="capitalize leading-[24px] text-[16px] font-[400]">product</th>
            <th class="capitalize leading-[24px] text-[16px] font-[400]">price</th>
            <th class="capitalize leading-[24px] text-[16px] font-[400]">quantity</th>
            <th class="capitalize leading-[24px] text-[16px] font-[400]">subtotal</th>
          </tr>
          <tr v-for="product in store.cart" :key="product.id"
            class="w-full h-[72px] rounded-[4px] shadow-[0px_1px_13px_0px_#0000000D]">
            <td class="w-1/4 h-full group">
              <div class="flex items-center space-x-3 w-fit mx-auto">
                <div class="w-10 h-10 flex-shrink-0 relative">
                  <div
                  @click="store.removeFromCart(product)"
                    class="absolute -top-1.5 cursor-pointer hidden group-hover:flex hover:bg-highlight-dark duration-200 -left-5 size-[24px] text-white bg-highlight-2 justify-center items-center rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                      <path fill="currentColor"
                        d="m12 13.4l-2.917 2.925q-.277.275-.704.275t-.704-.275q-.275-.275-.275-.7t.275-.7L10.6 12L7.675 9.108Q7.4 8.831 7.4 8.404t.275-.704q.275-.275.7-.275t.7.275L12 10.625L14.892 7.7q.277-.275.704-.275t.704.275q.3.3.3.713t-.3.687L13.375 12l2.925 2.917q.275.277.275.704t-.275.704q-.3.3-.712.3t-.688-.3z" />
                    </svg>
                  </div>
                  <img class="w-full h-full object-contain" :src=" 'http://localhost:3000/uploads/Product/'+ product.image[0]" alt="Product Image">
                </div>
                <span class="text-gray-700 font-medium text-sm sm:text-base">{{ product.productName }}</span>
              </div>
            </td>
            <td class="w-1/4 h-full text-center">
              <span class="text-gray-900 text-sm sm:text-base">DZD {{ product.price }}</span>
            </td>
            <td class="w-1/4 h-full">
              <div
                class="flex items-center border border-gray-400 rounded-md py-2 px-3 w-[72px] h-[44px] justify-between mx-auto">
                <span class="text-lg">{{ product.quantity < 10 ? "0" + product.quantity : product.quantity }}</span>
                    <div class="flex flex-col items-center justify-between  w-[16px] h-[32px]">
                      <button @click="store.incrementQuantity(product)"
                        class="text-sm focus:outline-none cursor-pointer h-1/2 w-full flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                          <path fill="currentColor"
                            d="m12 10.8l-3.9 3.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.6-4.6q.3-.3.7-.3t.7.3l4.6 4.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275z" />
                        </svg>
                      </button>
                      <button @click="store.decrementQuantity(product)"
                        class="text-sm focus:outline-none cursor-pointer h-1/2 w-full flex justify-center items-center"><svg
                          xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                          <path fill="currentColor"
                            d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062" />
                        </svg></button>
                    </div>
              </div>
            </td>
            <td class="w-1/4 h-full text-center">
              <span class="text-gray-900 text-sm sm:text-base"> DZD {{ product.price * product.quantity }}</span>
            </td>
          </tr>
        </table>
        <div class="w-full h-[56px] flex justify-center items-center mb-5">
          <nuxtLink :to="{ name: 'index' }"
            class="h-full w-[218px] hover:bg-gray-200 duration-200  border border-gray-400 rounded-[4px] flex justify-center items-center">
            <span class="text-gray-900 text-sm sm:text-base w-full text-center">Return To Shop</span>
          </nuxtLink>
        </div>
        <div class="w-full flex justify-end items-center">
          <div class="w-[470px] h-fit border border-gray-300 rounded-md p-6">
            <h2 class="text-lg font-bold text-gray-900 mb-4">Cart Total</h2>

            <div class="space-y-4">
              <div class="flex justify-between text-sm sm:text-base">
                <span class="text-gray-600 ">Subtotal:</span>
                <span class="text-gray-900">DZD {{store.cart.reduce((total, product) => total + product.price * product.quantity, 0) }}</span>
              </div>

              <div class="flex justify-between text-sm sm:text-base border-t pt-3">
                <span class="text-gray-600">Shipping:</span>
                <span class="text-gray-900">Free</span>
              </div>

              <div class="flex justify-between text-lg  border-t pt-3">
                <span class="text-gray-700">Total:</span>
                <span class="text-gray-900">DZD {{store.cart.reduce((total, product) => total + product.price * product.quantity, 0) }}</span>
              </div>
            </div>

            <div class="w-full flex justify-center mt-6">
              <button 
                @click="openCheckoutModal"
                :disabled="isProcessing"
                class="w-[218px] h-[48px] bg-highlight-2  text-white text-base font-medium rounded-md hover:bg-highlight-dark transition cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                <span v-if="!isProcessing">Proceed to checkout</span>
                <span v-else class="flex items-center justify-center gap-2">
                  <Icon name="eos-icons:loading" class="w-5 h-5 animate-spin" />
                  Processing...
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showCheckoutModal" class="fixed inset-0 bg-black/60 z-10 flex justify-center items-center p-4">
      <button
        class="absolute cursor-pointer top-5 right-5 bg-primary hover:bg-primary-dark2 duration-300 size-[44px] rounded flex items-center justify-center"
        @click="closeModal"
        :disabled="isProcessing"
      >
        <div class="relative inline-flex items-center justify-center p-2 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="m12 12.727l-3.592 3.592q-.16.16-.354.15T7.7 16.3t-.16-.364q0-.203.16-.363L11.273 12l3.592-3.567q-.16-.16-.15-.364t.169-.363t.364-.16q.203 0 .363.16L12 11.298l3.567-3.592q.277-.275.704-.275t.704.275q.3.3.3.713t-.3.687L13.375 12l3.592 3.592q.275.277.275.704t-.275.704q-.3.3-.712.3t-.688-.3z" />
          </svg>
        </div>
      </button>
      <div ref="checkoutModal"
        class="bg-gray-100 p-6 rounded-md shadow-md w-full max-w-2xl md:max-w-3xl lg:max-w-4xl flex flex-col space-y-6 max-h-[79vh] overflow-auto">
                <div v-if="orderSuccess" class="text-center py-8">
          <div class="bg-green-50 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <Icon name="material-symbols:check-circle-rounded" class="w-12 h-12 text-green-500" />
          </div>
          <h3 class="text-2xl font-semibold text-gray-800 mb-2">Order Confirmed!</h3>
          <p class="text-gray-600 mb-6">We've received your order and will contact you shortly to confirm the details.</p>
          <button 
            @click="closeModal"
            class="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition"
          >
            Continue Shopping
          </button>
        </div>
        <div v-else-if="orderError" class="text-center py-8">
          <div class="bg-red-50 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <Icon name="material-symbols:error-rounded" class="w-12 h-12 text-red-500" />
          </div>
          <h3 class="text-2xl font-semibold text-gray-800 mb-2">Order Failed</h3>
          <p class="text-gray-600 mb-6">{{ errorMessage || 'Something went wrong. Please try again.' }}</p>
          <button 
            @click="resetOrderState"
            class="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition"
          >
            Try Again
          </button>
        </div>
        <template v-else>
          <h3 class="font-[500] text-[36px] leading-[30px] capitalize">billing details</h3>
          <div class="w-full h-full flex justify-between lg:flex-row flex-col-reverse gap-5 mt-5 items-center">
            <form @submit.prevent="submitOrder" class="flex flex-col md:w-fit lg:w-fit w-full h-full">
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-5 group">
                  <input v-model="form.firstName" type="text" id="floating_first_name"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />
                  <label for="floating_first_name"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    First name
                  </label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <input v-model="form.familyName" type="text" id="floating_last_name"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />
                  <label for="floating_last_name"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Family name
                  </label>
                </div>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input v-model="form.email" type="email" id="floating_email"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />
                  <label for="floating_email"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Email address
                  </label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input v-model="form.phoneNumber" type="tel" id="floating_phone"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" " required />
                <label for="floating_phone"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Phone number
                </label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input v-model="form.address" type="text" id="floating_address"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" " required />
                <label for="floating_address"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Address
                </label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input v-model="form.city" type="text" id="floating_city"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" " required />
                <label for="floating_city"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Town/City
                </label>
              </div>
              <button type="submit" :disabled="isProcessing"
                class="text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                <span v-if="!isProcessing">Place Order</span>
                <span v-else class="flex items-center justify-center gap-2">
                  <Icon name="eos-icons:loading" class="w-5 h-5 animate-spin" />
                  Processing...
                </span>
              </button>
            </form>
            <div class="max-w-sm flex justify-end items-center">
              <div class="w-[470px] h-fit border border-gray-300 rounded-md p-6">
                <h2 class="text-lg font-bold text-gray-900 mb-4">Order Summary</h2>
                <div class="flex items-center justify-between pb-2" v-for="product in store.cart" :key="product.id">
                  <div class="flex items-center space-x-3">
                    <div class="w-16 h-16 flex-shrink-0">
                      <img class="w-full h-full object-contain" :src="'http://localhost:3000/uploads/Product/' + product.image[0]" alt="Product Image">
                    </div>
                    <span class="text-gray-700 font-medium text-sm sm:text-base">{{ product.productName }}</span>
                  </div>
                  <span class="text-gray-900 font-semibold text-sm sm:text-base">DZD {{ product.price }} x {{ product.quantity }}</span>
                </div>
                <div class="space-y-4">
                  <div class="flex justify-between text-sm sm:text-base border-t pt-3">
                    <span class="text-gray-600">Subtotal:</span>
                    <span class="text-gray-900">DZD {{ totalPrice }}</span>
                  </div>
                  <div class="flex justify-between text-sm sm:text-base border-t pt-3">
                    <span class="text-gray-600">Shipping:</span>
                    <span class="text-gray-900">Free</span>
                  </div>
                  <div class="flex justify-between text-lg border-t pt-3">
                    <span class="text-gray-700">Total:</span>
                    <span class="text-gray-900">DZD {{ totalPrice }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "~/layouts/mainLayout.vue";
import type { ProductType } from '~/types'
import { useFavCartStore } from '~/stores/FavCart'
import { ref, computed, reactive } from 'vue'
import { onClickOutside } from '@vueuse/core'

// Define the expected structure for order items sent to the backend
interface OrderItemDto {
    productId: string;
    quantity: number;
    priceAtOrder: number;
    nameAtOrder: string;
}

const store = useFavCartStore();
const checkoutModal = ref(null);
const showCheckoutModal = ref(false);
const isProcessing = ref(false);
const orderSuccess = ref(false);
const orderError = ref(false);
const errorMessage = ref('');

const totalPrice = computed(() => {
  return store.cart.reduce((total: number, product: ProductType) => total + product.price * product.quantity, 0);
});

const form = reactive({
  firstName: '',
  familyName: '',
  email: '',
  phoneNumber: '',
  address: '',
  city: ''
});

const openCheckoutModal = () => {
  if (store.cart.length === 0) return;
  showCheckoutModal.value = true;
};

const closeModal = () => {
  if (isProcessing.value) return;
  showCheckoutModal.value = false;
  resetOrderState();
};

const resetOrderState = () => {
  orderSuccess.value = false;
  orderError.value = false;
  errorMessage.value = '';
};

const submitOrder = async () => {
  try {
    // Check rate limiting
    const lastOrderAttempt = localStorage.getItem('lastOrderAttempt');
    const cooldownPeriod = 2 * 60 * 60 * 1000; // 2 hours in milliseconds
    const now = Date.now();

    if (lastOrderAttempt && (now - parseInt(lastOrderAttempt)) < cooldownPeriod) {
      const remainingTime = Math.ceil((cooldownPeriod - (now - parseInt(lastOrderAttempt))) / (60 * 1000));
      errorMessage.value = `Please wait ${remainingTime} minutes before placing another order.`;
      orderError.value = true;
      return;
    }

    isProcessing.value = true;
    orderError.value = false;
    
    const orderDto = {
      firstName: form.firstName,
      familyName: form.familyName,
      email: form.email,
      phoneNumber: form.phoneNumber,
      address: form.address + ', ' + form.city,
      totalPrice: totalPrice.value,
      products: store.cart.map((product: ProductType): OrderItemDto => ({
          productId: product.id,
          quantity: product.quantity,
          priceAtOrder: product.price,
          nameAtOrder: product.productName
      })),
      shipping: {
          method: 'Standard',
          cost: 0,
          address: form.address + ', ' + form.city,
          city: form.city,
          state: '',
          zip: '',
          country: 'Algeria',
          tracking: '',
      },
      payment: {
          method: 'Cash on Delivery',
          status: 'pending',
      },
      customer: {
          name: form.firstName + ' ' + form.familyName,
          email: form.email,
          phone: form.phoneNumber,
          avatar: '',
          isVIP: false,
      },
      subtotal: totalPrice.value,
      tax: 0,
      discount: 0,
    };

    const { $axios } = useNuxtApp();
    const response = await $axios.post('/order', orderDto);
    
    // Store the successful order attempt timestamp
    localStorage.setItem('lastOrderAttempt', now.toString());
    
    orderSuccess.value = true;
    store.clearCart(); 
  } catch (error: any) {
    orderError.value = true;
    errorMessage.value = error.message || 'An error occurred while placing your order';
    console.error('Order submission error:', error);
  } finally {
    isProcessing.value = false;
  }
};

onClickOutside(checkoutModal, () => {
  if (!isProcessing.value) {
    closeModal();
  }
});
</script>

<style>
</style>