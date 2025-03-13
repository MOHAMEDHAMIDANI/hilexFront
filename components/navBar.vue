<template>
  <div
    class="h-16 shrink-0 flex items-center lg:justify-around px-4 sm:px-6 gap-1.5 w-full bg-white/30 backdrop-blur-md border border-white/20 rounded-lg shadow-lg justify-between"
  >
    <div class="flex items-center gap-1.5 min-w-0">
      <svg
        width="150"
        height="50"
        viewBox="0 0 300 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#1E3A8A" />
            <stop offset="100%" stop-color="#3B82F6" />
          </linearGradient>
          <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#EA580C" />
            <stop offset="100%" stop-color="#F97316" />
          </linearGradient>
        </defs>
        <text
          x="10"
          y="70"
          font-size="60"
          font-family="Arial"
          font-weight="bold"
          fill="url(#blueGradient)"
        >
          H
        </text>
        <circle cx="65" cy="40" r="5" fill="url(#orangeGradient)" />
        <rect x="60" y="50" width="10" height="30" fill="url(#blueGradient)" />
        <text
          x="80"
          y="70"
          font-size="60"
          font-family="Arial"
          font-weight="bold"
          fill="url(#blueGradient)"
        >
          L
        </text>
        <text
          x="115"
          y="70"
          font-size="60"
          font-family="Arial"
          font-weight="bold"
          fill="url(#orangeGradient)"
        >
          e
        </text>
        <text
          x="150"
          y="70"
          font-size="60"
          font-family="Arial"
          font-weight="bold"
          fill="url(#orangeGradient)"
        >
          x
        </text>
      </svg>
    </div>

    <div
      class="lg:flex items-center shrink-0 gap-3 h-[70%] px-4 w-[500px] hidden"
    >
      <ul
        class="flex justify-between items-center h-full w-full text-primary-dark"
      >
        <li>
          <nuxt-link
            to="#"
            class="relative after:block after:content-[''] after:w-0 after:h-[2px] after:bg-highlight-dark after:transition-all after:duration-300 hover:after:w-full"
          >
            <h1 class="capitalize font-Montserrat">home</h1>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="#"
            class="relative after:block after:content-[''] after:w-0 after:h-[2px] after:bg-highlight-dark after:transition-all after:duration-300 hover:after:w-full"
          >
            <h1 class="capitalize font-Montserrat">contact</h1>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="#"
            class="relative after:block after:content-[''] after:w-0 after:h-[2px] after:bg-highlight-dark after:transition-all after:duration-300 hover:after:w-full"
          >
            <h1 class="capitalize font-Montserrat">about</h1>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="#"
            class="relative after:block after:content-[''] after:w-0 after:h-[2px] after:bg-highlight-dark after:transition-all after:duration-300 hover:after:w-full"
          >
            <h1 class="capitalize font-Montserrat">services</h1>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="#"
            class="relative after:block after:content-[''] after:w-0 after:h-[2px] after:bg-highlight-dark after:transition-all after:duration-300 hover:after:w-full"
          >
            <h1 class="capitalize font-Montserrat">products</h1>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="flex items-center shrink-0 gap-3 h-[70%] px-4 sm:w-[300px]">
      <form class="max-w-md w-full">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >Search</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <svg
              class="w-3 h-3 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full focus:ring-primary outline-none focus:border-primary"
            placeholder="what are you looking for"
            required
          />
        </div>
      </form>
      <button 
        @click="openMenu = !openMenu"
        type="button"
        aria-haspopup="menu"
        aria-expanded="false"
        data-state="closed"
        class="font-medium lg:hidden inline-flex items-center focus:outline-hidden disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 transition-colors text-sm gap-1.5 bg-primary hover:bg-primary/80 cursor-pointer disabled:bg-primary aria-disabled:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary p-1 rounded-full"
      >
        <svg
          class="text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"
          />
        </svg>
      </button>
      <div v-if="openMenu" class="absolute bg-white bg px-10  backdrop-blur-lg border lg:hidden border-white/15 rounded-xl p-6 shadow-xl h-[200px] py-5 top-16 right-10">
        <ul
          class="flex flex-col justify-evenly items-center h-full w-full text-primary-dark"
        >
          <li>
            <nuxt-link
              to="#"
              class="relative after:block after:content-[''] after:w-0 after:h-[2px] after:bg-highlight-dark after:transition-all after:duration-300 hover:after:w-full"
            >
              <h1 class="capitalize font-Montserrat">home</h1>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="#"
              class="relative after:block after:content-[''] after:w-0 after:h-[2px] after:bg-highlight-dark after:transition-all after:duration-300 hover:after:w-full"
            >
              <h1 class="capitalize font-Montserrat">contact</h1>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="#"
              class="relative after:block after:content-[''] after:w-0 after:h-[2px] after:bg-highlight-dark after:transition-all after:duration-300 hover:after:w-full"
            >
              <h1 class="capitalize font-Montserrat">about</h1>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="#"
              class="relative after:block after:content-[''] after:w-0 after:h-[2px] after:bg-highlight-dark after:transition-all after:duration-300 hover:after:w-full"
            >
              <h1 class="capitalize font-Montserrat">services</h1>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="#"
              class="relative after:block after:content-[''] after:w-0 after:h-[2px] after:bg-highlight-dark after:transition-all after:duration-300 hover:after:w-full"
            >
              <h1 class="capitalize font-Montserrat">products</h1>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const openMenu = ref(false);
</script>

<style scoped>
</style>