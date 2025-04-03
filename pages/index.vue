<template>
  <MainLayout>
    <div>
      <slider title="category" description="discover our categories" :Slider="true">
        <category v-for="product in medicalProducts" :key="product.id" :product="product"/>
      </slider>
      <slider title="Products" description="discover our Products" :Slider="true">
        <Product v-for="product in medicalProducts" :key="product.id" :product="product" />
      </slider>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import ServiceHighlights from "~/components/ServiceHighlights .vue";
import MainLayout from "~/layouts/mainLayout.vue";
</script>

<style scoped>
</style>