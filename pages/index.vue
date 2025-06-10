<template>
  <MainLayout>
    <hero-section />
    <div>
      <slider :hasItems="categoryStore.categories?.length ? true : false" title="Categories"
        description="Discover our product categories" :Slider="true">
        <category v-for="category in categoryStore.categories" :key="category.id" :category="category" />
      </slider>
      <slider :hasItems="productStore.Products?.length ? true : false" title="Products"
        description="discover our Products" :Slider="true">
        <Product v-for="product in productStore.Products" :key="product.id" :product="product" />
      </slider>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "~/layouts/mainLayout.vue";
import { useHead } from 'nuxt/app';
const productStore = useProductStore();
const categoryStore = useCategoryStore();

onMounted(async () => {
  await productStore.getProducts();
  await categoryStore.getCategories();
  const { $axios } = useNuxtApp();
  await $axios.post('/sales/record-visit')
    .then(response => console.log('Visit recorded:', response))
    .catch(error => console.error('Error recording visit:', error));
});

useHead({
  title: 'Home | Hilex',
  meta: [
    { name: 'description', content: 'Welcome to Hilex - your trusted partner for quality products and services.' },
    { property: 'og:title', content: 'Home | Hilex' },
    { property: 'og:description', content: 'Welcome to Hilex - your trusted partner for quality products and services.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:title', content: 'Home | Hilex' },
    { name: 'twitter:description', content: 'Welcome to Hilex - your trusted partner for quality products and services.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://hilex.com/' }
  ],
  script: [
    {
      type: 'application/ld+json',
      textContent: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Hilex',
        url: 'https://hilex.com/'
      })
    }
  ]
});
</script>

<style scoped></style>