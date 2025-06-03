<template>
  <MainLayout>
    <div v-if="success" class="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
      <div class="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full mx-4 border border-green-100">
        <div class="flex flex-col items-center">
          <div class="bg-green-50 p-4 rounded-full mb-4">
            <Icon name="material-symbols:check-circle-rounded" class="w-10 h-10 text-green-500" />
          </div>
          <h3 class="text-2xl font-semibold text-gray-800 mb-2">Message Sent!</h3>
          <p class="text-gray-600 text-center mb-6">We've received your message and will get back to you soon.</p>
          <button @click="success = false"
            class="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all duration-300 hover:shadow-md">
            Got it!
          </button>
        </div>
      </div>
    </div>
    <div v-if="error" class="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
      <div class="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full mx-4 border border-red-100">
        <div class="flex flex-col items-center">
          <div class="bg-red-50 p-4 rounded-full mb-4">
            <Icon name="material-symbols:error-rounded" class="w-10 h-10 text-red-500" />
          </div>
          <h3 class="text-2xl font-semibold text-gray-800 mb-2">Oops!</h3>
          <p class="text-gray-600 text-center mb-6">{{ errorMessage }}</p>
          <button @click="error = false"
            class="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition-all duration-300 hover:shadow-md">
            Try Again
          </button>
        </div>
      </div>
    </div>
    <div v-if="waiting" class="fixed inset-0 flex items-center justify-center z-40 backdrop-blur-[1px]">
      <div class="bg-white p-6 rounded-xl shadow-md flex items-center gap-3 border border-gray-100">
        <div class="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-primary"></div>
        <span class="text-gray-700">Sending your message...</span>
      </div>
    </div>

    <div
      class="max-w-[1600px] w-full p-2 mt-2 rounded-xl flex flex-wrap gap-6 items-center justify-evenly min-h-[700px] h-fit mx-auto">
      <div
        class="w-[340px] min-w-[300px] h-[457px] border border-primary bg-white rounded-[4px] shadow-xl flex flex-col items-center justify-center">
        <div class="w-[270px] h-[366px] flex flex-col items-start justify-between">
          <div class="w-full flex flex-col gap-4">
            <div class="flex gap-3 items-center">
              <span class="rounded-full bg-primary size-[40px] flex justify-center items-center">
                <Icon name="solar:phone-calling-outline" class="size-[25px] text-white" />
              </span>
              <h3 class="font-medium text-[16px] capitalize">call to us</h3>
            </div>
            <div class="flex flex-col gap-2">
              <p class="text-[14px] font-[400]">
                We are available 24/7, 7 days a week.
              </p>
              <p class="text-[14px] font-[400]">Phone: +8801611112222</p>
            </div>
          </div>

          <hr class="w-full h-[1px] bg-gray-200" />

          <div class="flex flex-col gap-4">
            <div class="flex gap-3 items-center">
              <span class="rounded-full bg-primary size-[40px] flex justify-center items-center">
                <Icon name="material-symbols-light:mail-outline" class="size-[25px] text-white" />
              </span>
              <h3 class="font-medium text-[16px] capitalize">write to us</h3>
            </div>
            <div class="flex flex-col gap-2">
              <p class="text-[14px] font-[400]">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p class="text-[14px] font-[400]">
                Email: customer@exclusive.com
              </p>
              <p class="text-[14px] font-[400]">
                Email: customer@exclusive.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="w-[800px] min-w-[350px] h-[457px] bg-white border border-primary rounded-[4px] shadow-xl flex flex-col items-center justify-center">
        <form @submit.prevent="sendMessage"
          class="w-[90%] max-w-[737px] h-[377px] flex flex-col justify-between items-center">
          <div class="w-full flex flex-wrap gap-4 justify-between">
            <div class="relative w-[235px] flex-grow">
              <input v-model="fullName" type="text"
                class="block w-full rounded-t-lg px-2.5 pb-2.5 pt-5 text-sm text-gray-900 bg-gray-50 border-0 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " required />
              <label
                class="absolute text-sm capitalize text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                your name
              </label>
            </div>
            <div class="relative w-[235px] flex-grow">
              <input v-model="email" type="email"
                class="block w-full rounded-t-lg px-2.5 pb-2.5 pt-5 text-sm text-gray-900 bg-gray-50 border-0 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " required />
              <label
                class="absolute text-sm capitalize text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                your email
              </label>
            </div>
            <div class="relative w-[235px] flex-grow">
              <input v-model="phone" type="text"
                class="block w-full rounded-t-lg px-2.5 pb-2.5 pt-5 text-sm text-gray-900 bg-gray-50 border-0 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " required />
              <label
                class="absolute text-sm capitalize text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                your phone number
              </label>
            </div>
          </div>

          <div class="w-full h-[207px] mt-4">
            <textarea v-model="message" rows="4"
              class="resize-none p-2.5 w-full h-full text-sm text-gray-900 bg-gray-50 rounded-lg border outline-none border-gray-300 focus:ring-primary focus:border-primary"
              placeholder="Write your thoughts here..." required></textarea>
          </div>

          <button type="submit"
            class="text-white w-[215px] h-[56px] bg-primary hover:bg-primary-dark focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm mt-4"
            :disabled="waiting">
            <span v-if="!waiting">Send Message</span>
            <span v-else class="flex items-center justify-center gap-2">
              <Icon name="eos-icons:loading" class="w-5 h-5" />
              Sending...
            </span>
          </button>
        </form>
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "~/layouts/mainLayout.vue";

const fullName = ref("");
const email = ref("");
const phone = ref("");
const message = ref("");
const waiting = ref(false);
const success = ref(false);
const error = ref(false);
const errorMessage = ref("");

const sendMessage = async () => {
  try {
    // Check rate limiting
    const lastMessageAttempt = localStorage.getItem('lastMessageAttempt');
    const cooldownPeriod = 2 * 60 * 60 * 1000; // 2 hours in milliseconds
    const now = Date.now();

    if (lastMessageAttempt && (now - parseInt(lastMessageAttempt)) < cooldownPeriod) {
      const remainingTime = Math.ceil((cooldownPeriod - (now - parseInt(lastMessageAttempt))) / (60 * 1000));
      error.value = true;
      errorMessage.value = `Please wait ${remainingTime} minutes before sending another message.`;
      return;
    }

    waiting.value = true;
    error.value = false;
    success.value = false;

    const { $axios } = useNuxtApp();
    const response = await $axios.post("/inbox", {
      senderName: fullName.value,
      senderEmail: email.value,
      phoneNumber: phone.value,
      message: message.value,
    });

    if (response.status === 201) {
      // Store the successful message attempt timestamp
      localStorage.setItem('lastMessageAttempt', now.toString());
      success.value = true;
      fullName.value = "";
      email.value = "";
      phone.value = "";
      message.value = "";
    }
  } catch (err) {
    console.error("Error sending message:", err);
    error.value = true;
  } finally {
    waiting.value = false;
  }
};
</script>