<template>
  <MainLayout>
    <hero-section />
    <div>
      <slider :hasItems="categoryStore.categories?.length ? true : false" title="Categories" description="Discover our product categories"
        :Slider="true">
        <category v-for="category in categoryStore.categories" :key="category.id" :category="category" />
      </slider>
      <slider :hasItems="productStore.Products?.length ? true : false" title="Products" description="discover our Products" :Slider="true">
        <Product v-for="product in productStore.Products" :key="product.id" :product="product" />
      </slider>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "~/layouts/mainLayout.vue";
const productStore = useProductStore();
const categoryStore = useCategoryStore();

onMounted(() => {
  productStore.getProducts();
  categoryStore.getCategories();
});
</script>

<style scoped></style>