<template>
  <MainLayout>
    <div>
      <slider class="pg">
        <category />
        <category />
        <category />
        <category />
        <category />
        <category />
        <category />
        <category />
      </slider>
      <slider>
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