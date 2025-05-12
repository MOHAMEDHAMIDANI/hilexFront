<template>
  <div :class="[
    'w-full sm:w-[180px] h-[140px]',
    'border-2 rounded-lg flex flex-col items-center justify-center',
    'transition-all duration-200 cursor-pointer',
    'hover:bg-primary-light hover:border-primary-dark',
    active ? 'bg-primary-light border-primary-dark text-primary-dark shadow-sm' : 'bg-white text-gray-700 border-gray-200'
  ]" @click="navigateToCategory" @keydown.enter="navigateToCategory" tabindex="0" role="button"
    aria-label="View products in category">
    <div class="w-12 h-12 mb-3 flex items-center justify-center rounded-full"
      :class="active ? 'bg-primary-dark text-white' : 'bg-gray-100 text-primary-dark'">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path
          d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
      </svg>
    </div>
    <h2 class="font-medium text-base text-center px-2 line-clamp-2">
      {{ props.category.categoryName }}
    </h2>
  </div>
</template>

<script setup lang="ts">
import type { Category } from "~/types";
import { useRouter } from 'vue-router';
import { computed } from 'vue';

const router = useRouter();
const props = defineProps({
  category: {
    type: Object as () => Category,
    required: true,
  }
});

const active = computed(() => {
  return router.currentRoute.value.query.category === props.category.id;
});

const navigateToCategory = () => {
  router.push({
    path: '/products',
    query: {
      category: props.category.id,
      ...router.currentRoute.value.query
    }
  });
};
</script>