<template>
    <div class="w-full">
        <hr class="w-full border-gray-300 my-4">
        <div class="flex justify-between items-center w-full">
            <h3 class="capitalize font-bold text-lg">{{ title }}</h3>
            <button @click="$emit('toggle')" class="text-gray-400 hover:text-gray-600 duration-300 focus:outline-none"
                :aria-label="`${isOpen ? 'Collapse' : 'Expand'} ${title} section`">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                    :class="isOpen ? 'rotate-180' : ''" class="transition-transform duration-300">
                    <path fill="currentColor"
                        d="M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0" />
                </svg>
            </button>
        </div>
        <div v-if="isOpen" class="mt-4">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true
    },
    isOpen: {
        type: Boolean,
        default: true
    }
});

defineEmits(['toggle']);
</script>