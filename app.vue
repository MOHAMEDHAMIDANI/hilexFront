<template>
  <div class=" w-full h-full  bg-white">
    <MainLoader />
    <nuxtPage />
  </div>
</template>
<script setup lang="ts">
import MainLoader from "~/components/MainLoader.vue";
</script>
<style>
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance: none;
  display: none;
}
</style>