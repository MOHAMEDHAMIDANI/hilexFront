<template>
  <MainLayout>
    <div
      class="max-w-[1600px] w-full p-2 mt-2 rounded-xl flex flex-wrap gap-6 items-center justify-evenly min-h-[700px] h-fit mx-auto"
    >
      <div
        class="w-[340px] min-w-[300px] h-[457px] border border-primary bg-white rounded-[4px] shadow-xl flex flex-col items-center justify-center"
      >
        <div
          class="w-[270px] h-[366px] flex flex-col items-start justify-between"
        >
          <div class="w-full flex flex-col gap-4">
            <div class="flex gap-3 items-center">
              <span
                class="rounded-full bg-primary size-[40px] flex justify-center items-center"
              >
                <Icon
                  name="solar:phone-calling-outline"
                  class="size-[25px] text-white"
                />
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
              <span
                class="rounded-full bg-primary size-[40px] flex justify-center items-center"
              >
                <Icon
                  name="material-symbols-light:mail-outline"
                  class="size-[25px] text-white"
                />
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
        class="w-[800px] min-w-[350px] h-[457px] bg-white border border-primary rounded-[4px] shadow-xl flex flex-col items-center justify-center"
      >
        <form
          class="w-[90%] max-w-[737px] h-[377px] flex flex-col justify-between items-center"
        >
          <div class="w-full flex flex-wrap gap-4 justify-between">
            <div class="relative w-[235px] flex-grow">
              <input
                type="text"
                class="block w-full rounded-t-lg px-2.5 pb-2.5 pt-5 text-sm text-gray-900 bg-gray-50 border-0 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                class="absolute text-sm capitalize text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                your name
              </label>
            </div>
            <div class="relative w-[235px] flex-grow">
              <input
                type="email"
                class="block w-full rounded-t-lg px-2.5 pb-2.5 pt-5 text-sm text-gray-900 bg-gray-50 border-0 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                class="absolute text-sm capitalize text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                your email
              </label>
            </div>
            <div class="relative w-[235px] flex-grow">
              <input
                type="text"
                class="block w-full rounded-t-lg px-2.5 pb-2.5 pt-5 text-sm text-gray-900 bg-gray-50 border-0 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                class="absolute text-sm capitalize text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                your phone number
              </label>
            </div>
          </div>

          <div class="w-full h-[207px] mt-4">
            <textarea
              rows="4"
              class="resize-none p-2.5 w-full h-full text-sm text-gray-900 bg-gray-50 rounded-lg border outline-none border-gray-300 focus:ring-primary focus:border-primary"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>

          <button
            type="submit"
            class="text-white w-[215px] h-[56px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm mt-4"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "~/layouts/mainLayout.vue";
</script>

<style scoped></style>
