<template>
  <MainLayout>
    <div class="container mx-auto h-fit flex justify-evenly flex-wrap gap-5">
      <slider title="favorites" description="" :Slider="false">
        <Product v-for="product in store.Fav" :key="product.id" :product="product" />
        <div v-if="!store.Fav.length">
        <h3 class="text-center capitalize text-4xl w-full h-full">looks empty here</h3>
        </div>
      </slider>
      <slider title="just for you" description="items based on your choices" :Slider="true">
        <Product v-for="product in medicalProducts" :key="product.id" :product="product" />
      </slider>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '~/layouts/mainLayout.vue';
const store = useFavCartStore();

</script>

<style scoped></style>