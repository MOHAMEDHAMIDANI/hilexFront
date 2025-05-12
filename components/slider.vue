<template>
  <div class="c p-2 mt-2 rounded-xl w-full flex flex-col justify-around h-fit mx-auto">
    <div class="flex items-center justify-between">
      <h3
        class="text-2xl w-fit ml-10 capitalize relative after:content-[''] after:absolute after:w-5 after:h-10 after:rounded after:-left-8 after:-top-1 after:bg-highlight-2 text-highlight-dark">
        {{ title }}
      </h3>
    </div>

    <div class="flex items-center justify-between">
      <h3 class="text-2xl w-fit px-2 py-4 capitalize text-black">
        {{ description }}
      </h3>
      <div v-if="Slider && hasItems" class="flex items-center justify-between w-[80px]">
        <button @click="scrollLeft" type="button"
          class="font-medium inline-flex items-center focus:outline-hidden disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 transition-colors text-sm bg-zinc-200 cursor-pointer rounded-full p-0.5 hover:bg-zinc-300">
          <div class="relative inline-flex items-center justify-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="m7.85 13l2.85 2.85q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L4.7 12.7q-.3-.3-.3-.7t.3-.7l4.575-4.575q.3-.3.713-.287t.712.312q.275.3.288.7t-.288.7L7.85 11H19q.425 0 .713.288T20 12t-.288.713T19 13z" />
            </svg>
          </div>
        </button>
        <button @click="scrollRight" type="button"
          class="font-medium inline-flex items-center focus:outline-hidden disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 transition-colors text-sm bg-zinc-200 cursor-pointer rounded-full p-0.5 hover:bg-zinc-300">
          <div class="relative inline-flex items-center justify-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z" />
            </svg>
          </div>
        </button>
      </div>
    </div>

    <div v-if="!hasItems" class="w-full h-64 flex flex-col items-center justify-center bg-gray-50 rounded-lg">
      <svg class="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
      </svg>
      <h4 class="text-xl font-medium text-gray-600 mb-2">No items found</h4>
      <p class="text-gray-500 text-center max-w-md px-4">
        {{ emptyMessage || 'There are currently no items to display.' }}
      </p>
    </div>
    <div v-else ref="sliderRef"
      :class="[Slider ? 'overflow-x-auto flex-nowrap no-scrollbar' : 'flex-wrap justify-around']"
      class="w-full h-fit py-2 px-2 flex items-stretch gap-4">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';

const sliderRef = ref<HTMLElement | null>(null);
const childWidth = ref(0);
const gap = ref(16);

interface SliderProps {
  title: string;
  description: string;
  Slider: boolean;
  emptyMessage?: string;
  hasItems: boolean;
}

const props = defineProps<SliderProps>();
const scrollLeft = () => {
  if (!sliderRef.value) return;
  sliderRef.value.scrollBy({
    left: -(childWidth.value + gap.value),
    behavior: "smooth"
  });
};

const scrollRight = () => {
  if (!sliderRef.value) return;
  sliderRef.value.scrollBy({
    left: childWidth.value + gap.value,
    behavior: "smooth"
  });
};

onMounted(() => {
  nextTick(() => {
    if (sliderRef.value && props.Slider) {
      const firstChild = sliderRef.value.children[0] as HTMLElement;
      if (firstChild) {
        childWidth.value = firstChild.offsetWidth;
      }
      const style = window.getComputedStyle(sliderRef.value);
      gap.value = parseInt(style.gap || '16');
    }
  });
});
</script>

<style scoped>
.no-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x proximity;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar>* {
  flex: 0 0 auto;
  scroll-snap-align: start;
}
</style>