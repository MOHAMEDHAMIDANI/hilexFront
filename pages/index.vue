<template>
  <MainLayout>
    <div>
      <slider :allowArrows="true" title="category" description="discover our categories" :Slider="true">
        <category />
        <category />
        <category />
        <category />
        <category />
        <category />
        <category />
        <category />
        <category />
        <category />
        <category />
        <category />
        <category />
      </slider>
      <slider :allowArrows="true" title="Products" description="discover our Products" :Slider="true">
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
import ServiceHighlights from "~/components/ServiceHighlights .vue";
import MainLayout from "~/layouts/mainLayout.vue";
</script>

<style scoped>
</style>