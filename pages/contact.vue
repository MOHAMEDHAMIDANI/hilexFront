<template>
  <MainLayout>
    <div
      class="xl:w-11/12 lg:w-8/12 md:w-9/12 sm:w-11/12 p-2 mt-2 rounded-xl w-full flex flex-wrap items-center justify-evenly h-[600px] mx-auto"
    >
      <div
        class="w-[340px] h-[457px] bg-white rounded-[4px] shadow-xl flex flex-col items-center justify-center"
      >
        <div
          class="w-[270px] h-[366px] flex flex-col items-start justify-between"
        >
          <div
            class="w-[262px] h-[122px] flex flex-col justify-between items-start"
          >
            <div class="w-[135px] h-[40px] flex justify-around items-center">
              <span
                class="rounded-full bg-primary size-[40px] flex justify-center items-center"
              >
                <Icon
                  name="solar:phone-calling-outline"
                  class="size-[25px] text-white"
                />
              </span>
              <h3 class="font-[500] text-[16px] capitalize">call to us</h3>
            </div>
            <div
              class="h-[58px] w-[262px] flex flex-col justify-between items-start"
            >
              <p class="w-full h-[21px] text-[14px] font-[400]">
                We are available 24/7, 7 days a week.
              </p>
              <p class="w-full h-[21px] text-[14px] font-[400]">
                Phone: +8801611112222
              </p>
            </div>
          </div>
          <hr class="w-[262px] h-[1px] bg-gray-200" />
          <div
            class="w-[262px] h-[180px] flex flex-col justify-between items-start"
          >
            <div class="w-full h-[40px] flex justify-start gap-2 items-center">
              <span
                class="rounded-full bg-primary size-[40px] flex justify-center items-center"
              >
                <Icon
                  name="material-symbols-light:mail-outline"
                  class="size-[25px] text-white"
                />
              </span>
              <h3 class="font-[500] text-[16px] w-fit capitalize">
                write to us
              </h3>
            </div>
            <div
              class="h-[116px] w-[250px] flex flex-col justify-between items-start"
            >
              <p class="w-full h-[42px] text-[14px] font-[400]">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p class="w-full h-[21px] text-[14px] font-[400]">
                Emails: customer@exclusive.com
              </p>
              <p class="w-full h-[21px] text-[14px] font-[400]">
                Emails: customer@exclusive.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-[800px] h-[457px] bg-white rounded-[4px] shadow-xl flex flex-col items-center justify-center"
      >
        <form
          class="w-[737px] h-[377px] flex flex-col justify-between items-center"
        >
          <div
            class="w-[737px] h-[50px] flex items-center justify-between flex-wrap"
          >
            <div class="relative">
              <input
                type="text"
                id="default_filled"
                class="block rounded-t-lg  px-2.5 pb-2.5 pt-5 text-sm text-gray-900 w-[235px] bg-gray-50 dark:bg-gray-700 border-0 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="default_filled"
                class="absolute text-sm capitalize text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >your name</label
              >
            </div>
            <div class="relative">
              <input
                type="text"
                id="default_filled"
                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-[235px] text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="default_filled"
                class="absolute text-sm capitalize text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                your email</label
              >
            </div>
            <div class="relative">
              <input
                type="text"
                id="default_filled"
                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-[235px] text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="default_filled"
                class="absolute text-sm capitalize text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >your phone number</label
              >
            </div>
          </div>
          <div class="w-full h-[207px]">
            <textarea
              id="message"
              rows="4"
              class="block resize-none p-2.5 w-full h-full text-sm text-gray-900 bg-gray-50 rounded-lg border outline-none border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <button
            type="submit"
            class="text-white  cursor-pointer w-[215px] h-[56px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  dark:bg-primary dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Send Massage
          </button>
        </form>
      </div>
    </div>
  </MainLayout>
</template>
    
    <script setup lang="ts">
import MainLayout from "~/layouts/mainLayout.vue";
</script>
    
    <style scoped>
</style>