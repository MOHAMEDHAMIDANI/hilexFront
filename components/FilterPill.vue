<template>
    <button @click="$emit('click')"
        class="w-fit px-4 h-8 flex items-center justify-center border rounded-full cursor-pointer duration-300" :class="[
            active
                ? 'border-primary bg-primary-light text-primary-dark'
                : 'border-transparent bg-gray-100 hover:bg-gray-200'
        ]" :aria-pressed="active">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
defineProps({
    active: {
        type: Boolean,
        default: false
    }
});

defineEmits(['click']);
</script>