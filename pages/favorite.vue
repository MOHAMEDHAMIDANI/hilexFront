<template>
  <MainLayout>
    <div class="container mx-auto h-fit flex justify-evenly flex-wrap gap-5">
      <slider :hasItems="store.Fav?.length ? true : false" title="favorites" description="" :Slider="false">
        <Product v-for="product in store.Fav" :key="product.id" :product="product" />
        <div v-if="!store.Fav.length">
          <h3 class="text-center capitalize text-4xl w-full h-full">looks empty here</h3>
        </div>
      </slider>
      <slider :hasItems="productStore.Products?.length ? true : false" title="Products" description="discover our Products" :Slider="true">
        <Product v-for="product in productStore.Products" :key="product.id" :product="product" />
      </slider>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '~/layouts/mainLayout.vue';
import { useHead } from 'nuxt/app';
const store = useFavCartStore();
const productStore = useProductStore();

useHead({
  title: 'Favorites | Hilex',
  meta: [
    { name: 'description', content: 'View your favorite products at Hilex.' },
    { property: 'og:title', content: 'Favorites | Hilex' },
    { property: 'og:description', content: 'View your favorite products at Hilex.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:title', content: 'Favorites | Hilex' },
    { name: 'twitter:description', content: 'View your favorite products at Hilex.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://hilex.com/favorite' }
  ],
  script: [
    {
      type: 'application/ld+json',
      textContent: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Favorites',
        description: 'View your favorite products at Hilex.'
      })
    }
  ]
});
</script>

<style scoped></style>