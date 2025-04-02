<template>
  <MainLayout>
    <div class="container mx-auto h-fit flex justify-evenly flex-wrap gap-5">
      <slider :allowArrows="false" title="favorites" description="" :Slider="false">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </slider>
      <slider :allowArrows="true" title="just for you" description="items based on your choices" :Slider="true">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </slider>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '~/layouts/mainLayout.vue';

</script>

<style scoped></style>