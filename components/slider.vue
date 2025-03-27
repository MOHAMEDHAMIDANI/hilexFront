<template >
  <div
    class="xl:w-11/12 lg:w-8/12 md:w-9/12 sm:w-11/12 p-2 mt-2 rounded-xl w-full flex flex-col justify-around  h-fit mx-auto"
  >
    <div class="flex items-center justify-between">
      <h3
        class="text-2xl w-fit ml-10 relative after:content-[''] after:absolute after:w-5 after:h-10 after:rounded after:-left-8 after:-top-1 after:bg-highlight-2 text-primary-dark2"
      >
        Products
      </h3>
    </div>
    <div class="flex items-center justify-between">
      <h3 class="text-2xl w-fit px-2 py-4 capitalize text-black">
        discover our products
      </h3>
      <div class="flex items-center justify-between w-[80px]">
        <button
          @click="scrollRight"
          type="button"
          data-state="closed"
          data-grace-area-trigger=""
          class="font-medium inline-flex items-center focus:outline-hidden disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 transition-colors text-sm bg-zinc-200 cursor-pointer rounded-full p-0.5 hover:bg-zinc-300 hover:disabled:bg-transparent dark:hover:disabled:bg-transparent hover:aria-disabled:bg-transparent dark:hover:aria-disabled:bg-transparent"
        >
          <div
            class="relative inline-flex items-center justify-center shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m7.85 13l2.85 2.85q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L4.7 12.7q-.3-.3-.3-.7t.3-.7l4.575-4.575q.3-.3.713-.287t.712.312q.275.3.288.7t-.288.7L7.85 11H19q.425 0 .713.288T20 12t-.288.713T19 13z"
              />
            </svg>
          </div>
        </button>
        <button
          @click="scrollLeft"
          type="button"
          data-state="closed"
          data-grace-area-trigger=""
          class="font-medium inline-flex items-center focus:outline-hidden disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 transition-colors text-sm bg-zinc-200 cursor-pointer rounded-full p-0.5 hover:bg-zinc-300 hover:disabled:bg-transparent dark:hover:disabled:bg-transparent hover:aria-disabled:bg-transparent dark:hover:aria-disabled:bg-transparent"
        >
          <div
            class="relative inline-flex items-center justify-center shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
    <div
      ref="sliderRef"
      class="w-full h-fit py-2 px-2 flex gap-[30px] items-center overflow-x-auto flex-nowrap no-scrollbar"
    >
      <slot></slot>
    </div>

  </div>
</template>

<script setup lang="ts">
const sliderRef = ref<HTMLElement | null>(null);
const childrenCount = ref(0);
const SliderWidth = ref(0);
const childWidth = ref(0);
const gap = ref(0);

onMounted(() => {
  nextTick(() => {
    if (sliderRef.value) {
      const slider = sliderRef.value;
      childrenCount.value = slider.children.length;
      SliderWidth.value = slider.offsetWidth;

      const firstChild = slider.children[0] as HTMLElement;
      if (firstChild) {
        childWidth.value = firstChild.offsetWidth;
      }
      const style = window.getComputedStyle(slider);
      const gapValue = style.columnGap || style.gap || "0px";
      gap.value = parseInt(gapValue);

      console.log("Child Width:", childWidth.value);
      console.log("Gap:", gap.value);
    }
  });
});

const scrollLeft = () => {
  sliderRef.value?.scrollTo({
    left: (sliderRef.value?.scrollLeft || 0) + childWidth.value + gap.value,
    behavior: "smooth",
  });
};

const scrollRight = () => {
  sliderRef.value?.scrollTo({
    left: (sliderRef.value?.scrollLeft || 0) - childWidth.value - gap.value,
    behavior: "smooth",
  });
};
</script>

<style scoped>
.no-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>