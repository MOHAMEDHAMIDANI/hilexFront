<template>
    <div 
      :class="active ? 'bg-primary-dark2 text-white border-0' : 'bg-white text-black'"
      class="w-[150px] h-[130px] shrink-0 border mx-2 rounded-md flex flex-col items-center justify-center duration-300 cursor-pointer hover:bg-primary-dark2 hover:text-white hover:border-0"
    >
      <Icon name="tabler:category-2" class="w-12 h-12 mb-2" />
      <h1 class="font-medium text-[15px] text-center">{{ title }}</h1>
    </div>
  </template>
  
  <script setup lang="ts">
  const title = ref("Category");
  const active = ref(false);
  </script>
  
  <style scoped>
  </style>
F  