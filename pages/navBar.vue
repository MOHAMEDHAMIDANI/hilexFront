<template>
  <div
    class="h-16 sticky  shrink-0 flex items-center lg:justify-around px-4 sm:px-6 gap-1.5 w-full bg-white/30 backdrop-blur-md border border-white/20 rounded-lg shadow-lg justify-between"
  >
    <nuxtLink :to="{ name: 'index' }" class="w-[100px] lg:w-[150px]">
      <svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
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
    </nuxtLink>

    <div
      class="lg:flex items-center shrink-0 gap-3 h-[70%] px-4 md:w-md hidden"
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
    <div class="flex items-center shrink-0 gap-3 h-[70%] px-4 w-fit">
      <form class="max-w-md w-full hidden sm:block">
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
            class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full focus:ring-primary outline-none focus:border-primary xl:w-sm lg:w-2xs md:w-sm sm:w-3xs"
            placeholder="what are you looking for"
            required
          />
        </div>
      </form>
      <button
        type="button"
        data-state="closed"
        data-grace-area-trigger=""
        class="font-medium border border-gray-300 rounded-full sm:hidden inline-flex items-center focus:outline-hidden disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 transition-colors text-sm hover:bg-zinc-200 cursor-pointer hover:disabled:bg-transparent dark:hover:disabled:bg-transparent hover:aria-disabled:bg-transparent dark:hover:aria-disabled:bg-transparent p-1"
      >
        <div class="relative inline-flex items-center justify-center shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.52 6.52 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5"
            />
          </svg>
        </div>
      </button>
      <nuxtLink :to="{name : 'favorite'}"
        type="button"
        data-state="closed"
        data-grace-area-trigger=""
        class="rounded font-medium inline-flex items-center focus:outline-hidden disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 transition-colors text-sm gap-1.5 hover:bg-zinc-200 cursor-pointer hover:disabled:bg-transparent dark:hover:disabled:bg-transparent hover:aria-disabled:bg-transparent dark:hover:aria-disabled:bg-transparent p-1.5"
      >
        <div class="relative inline-flex items-center justify-center shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 20.325q-.35 0-.712-.125t-.638-.4l-1.725-1.575q-2.65-2.425-4.788-4.812T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.325 0 2.5.562t2 1.538q.825-.975 2-1.537t2.5-.563q2.35 0 3.925 1.575T22 8.15q0 2.875-2.125 5.275T15.05 18.25l-1.7 1.55q-.275.275-.637.4t-.713.125M11.05 6.75q-.725-1.025-1.55-1.563t-2-.537q-1.5 0-2.5 1t-1 2.5q0 1.3.925 2.763t2.213 2.837t2.65 2.575T12 18.3q.85-.775 2.213-1.975t2.65-2.575t2.212-2.837T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2 .538T12.95 6.75q-.175.25-.425.375T12 7.25t-.525-.125t-.425-.375m.95 4.725"
            />
          </svg>
          <span
            class="rounded-full ring ring-primary bg-primary flex items-center justify-center font-medium whitespace-nowrap h-[8px] min-w-[8px] text-[8px] top-0 right-0 absolute"
          ></span>
        </div>
      </nuxtLink>
      <nuxtLink :to="{name : 'cart'}"
        type="button"
        data-state="closed"
        data-grace-area-trigger=""
        class="rounded font-medium inline-flex items-center focus:outline-hidden disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 transition-colors text-sm gap-1.5 hover:bg-zinc-200 cursor-pointer hover:disabled:bg-transparent dark:hover:disabled:bg-transparent hover:aria-disabled:bg-transparent dark:hover:aria-disabled:bg-transparent p-1.5"
      >
        <div class="relative inline-flex items-center justify-center shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7 22q-.825 0-1.412-.587T5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22M6.15 6l2.4 5h7l2.75-5zM5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.737.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.987t-.05-1.963L6.6 11.6L3 4H1V2h3.25zm3.35 7h7z"
            />
          </svg>
          <span
            class="rounded-full ring ring-primary bg-primary flex items-center justify-center font-medium whitespace-nowrap h-[8px] min-w-[8px] text-[8px] top-0 right-0 absolute"
          ></span>
        </div>
      </nuxtLink>
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
      <Transition name="slide-fade">
        <div
          v-if="openMenu"
          class="absolute bg-white bg px-10 backdrop-blur-lg border lg:hidden border-white/15 rounded-xl p-6 shadow-xl h-[200px] py-5 top-16 right-10"
        >
          <ul
            ref="Navigation"
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
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
const openMenu = ref(false);
const target = useTemplateRef<HTMLElement>("Navigation");
onClickOutside(target, (event: PointerEvent) => {
  openMenu.value = false;
});
</script>


<style>
.dot-drop {
  opacity: 0;
  transform: translateY(-20px);
  animation: dropDot 0.6s forwards;
}
@keyframes dropDot {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.text-animate {
  fill: none;
  stroke-width: 2;
  stroke: #1e3a8a;
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  animation: draw 1s forwards;
}
.text-animate:nth-of-type(3) {
  animation-delay: 0.8s;
}
.text-animate:nth-of-type(4) {
  animation-delay: 1.6s;
}
.text-animate:nth-of-type(5) {
  animation-delay: 2.4s;
}
.text-animate:nth-of-type(6) {
  animation-delay: 3.2s;
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}
.blue {
  animation: draw 1s forwards, fillBlue 0.5s forwards;
  animation-delay: 0s, 4s;
}
.orange {
  animation: draw 1s forwards, fillOrange 0.5s forwards;
  animation-delay: 0s, 4s;
}

@keyframes fillBlue {
  to {
    fill: url(#blueGradient);
    stroke: none;
  }
}

@keyframes fillOrange {
  to {
    fill: url(#orangeGradient);
    stroke: none;
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>