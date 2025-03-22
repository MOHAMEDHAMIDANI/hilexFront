<template>
    <div 
    :class="active ? 'bg-primary-dark2 text-white border-0' : 'bg-white text-black'"
     class="w-[170px] shrink-0 h-[145px] border-1 rounded-[4px]  flex justify-center flex-col items-center duration-300 cursor-pointer hover:bg-primary-dark2 hover:text-white hover:border-0">
        <Icon name="tabler:category-2" class="size-[56px] m-2" />
        <h1 class=" font-[400] text-[16px]">{{ title }}</h1>
    </div>
</template>

<script setup lang="ts">
const title = ref("title");
const active = ref(false);

</script>

<style scoped>

</style>