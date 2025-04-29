<template>
    <MainLayout>
        <div class="container mx-auto w-full my-4">
            <div class="w-full min-h-[100px] max-w-[1000px] mx-auto my-4 flex items-center justify-center">
                <form @submit.prevent="search" class="mx-auto w-full">
                    <label for="default-search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" v-model="searchQuery"
                            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                            placeholder="Search by product name" required />
                        <button type="submit"
                            class="text-white duration-300 cursor-pointer absolute end-2.5 bottom-2.5 outline-none bg-primary hover:bg-primary-dark  font-medium rounded-lg text-sm px-4 py-2">Search</button>
                    </div>
                </form>
            </div>
            <div class="w-full flex justify-end gap-4">
                <div class="max-w-[295px] w-full h-fit flex flex-col items-center shadow-md bg-white rounded-lg py-4 px-6">
                    <div class="flex justify-between items-center w-full">
                        <h3 class="capitalize font-bold text-lg">filters</h3>
                        <svg @click="openFilters = !openFilters"
                            class="text-gray-400 cursor-pointer hover:text-gray-600 duration-300"
                            xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="-2 -4 24 24">
                            <path fill="currentColor"
                                d="M9 12V1a1 1 0 1 1 2 0v11h1a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-2 0v-1H8a1 1 0 0 1 0-2zm7-10V1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2h-1v11a1 1 0 0 1-2 0V4h-1a1 1 0 0 1 0-2zM4 5h1a1 1 0 1 1 0 2H4v8a1 1 0 0 1-2 0V7H1a1 1 0 1 1 0-2h1V1a1 1 0 1 1 2 0z" />
                        </svg>
                    </div>
                    <div v-if="openFilters" class="h-fit w-full">
                        <hr class="w-full border-gray-300  my-6">
                        <div class="flex justify-between items-center w-full mt-6">
                            <h3 class="capitalize font-bold text-lg">categories</h3>
                            <svg @click="openCategories = !openCategories" :class="openCategories ? 'rotate-180' : ''"
                                class="text-gray-400 cursor-pointer hover:text-gray-600 duration-300"
                                xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0" />
                            </svg>
                        </div>
                        <div v-if="openCategories" class="mt-4 w-full h-fit flex flex-wrap gap-2">
                            <div v-for="category in categories" :key="category"
                                class="w-fit px-4 h-8 flex items-center justify-center border bg-gray-100 rounded-full cursor-pointer duration-300 hover:bg-gray-200"
                                :class="selectedCategory === category ? 'border-primary' : 'border-transparent'"
                                @click="selectCategory(category)">
                                {{ category }}
                            </div>
                        </div>
                        <hr class="w-full border-gray-300  my-6">
                        <div class="flex justify-between items-center w-full mt-6">
                            <h3 class="capitalize font-bold text-lg">Colors</h3>
                            <svg @click="openColors = !openColors" :class="openColors ? 'rotate-180' : ''"
                                class="text-gray-400 cursor-pointer hover:text-gray-600 duration-300"
                                xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0" />
                            </svg>
                        </div>
                        <div v-if="openColors" class="mt-4 w-full h-fit flex flex-wrap gap-2">
                            <div v-for="color in colors" :key="color"
                                :class="['w-8 h-8 rounded-full cursor-pointer outline-1 ', selectedColor === color ? 'outline-black' : 'outline-white']"
                                :style="{ backgroundColor: color }" @click="selectColor(color)">
                            </div>
                        </div>
                        <hr class="w-full border-gray-300  my-6">
                        <div class="flex justify-between items-center w-full mt-6">
                            <h3 class="capitalize font-bold text-lg">Sizes</h3>
                            <svg @click="openSizes = !openSizes" :class="openSizes ? 'rotate-180' : ''"
                                class="text-gray-400 cursor-pointer hover:text-gray-600 duration-300"
                                xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0" />
                            </svg>
                        </div>
                        <div v-if="openSizes" class="mt-4 w-full h-fit flex flex-wrap gap-2">
                            <div v-for="size in sizes" :key="size"
                                class="w-fit px-4 h-8 flex items-center justify-center border bg-gray-100 rounded-full cursor-pointer duration-300 hover:bg-gray-200"
                                :class="selectedSize === size ? 'border-primary' : 'border-transparent'"
                                @click="selectSize(size)">
                                {{ size }}
                            </div>
                        </div>
                        <hr class="w-full border-gray-300 my-6">
                        <div class="w-full flex justify-between items-center">
                            <h3 class="capitalize font-bold text-lg">Price Range</h3>
                            <svg @click="openPriceRange = !openPriceRange" :class="openPriceRange ? 'rotate-180' : ''"
                                class="text-gray-400 cursor-pointer hover:text-gray-600 duration-300"
                                xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0" />
                            </svg>
                        </div>
                        <div v-if="openPriceRange" class="mt-4 w-full">
                            <input type="range" v-model="priceRange" min="0" max="1000" step="10"
                                class="w-full mt-4 bg-gray-100 border border-gray-300 rounded-md h-2 focus:outline-none" />
                            <div class="flex justify-between mt-2">
                                <span>0</span>
                                <span>{{ priceRange }}</span>
                                <span>1000</span>
                            </div>
                        </div>
                        <hr class="w-full border-gray-300 my-6">
                        <div class="mt-6 w-full">
                            <button @click="submitFilters"
                                class="w-full py-2 bg-primary duration-300 cursor-pointer text-white rounded-lg hover:bg-primary-dark focus:outline-none">
                                Apply Filters
                            </button>
                        </div>
                    </div>
                </div>
                <div class="w-full">
                    <slider title="results" :description=" searchQuery ? 'results for :' + searchQuery : `results based on your filters`" >
                        <Product v-for="product in medicalProducts" :key="product.id" :product="product" :gap="false" />
                    </slider>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "~/layouts/MainLayout.vue";

const openFilters = ref(true);
const openCategories = ref(true);
const openColors = ref(true);
const openSizes = ref(true);
const openPriceRange = ref(true);

const categories = ['Health', 'Technology', 'Finance', 'Education', 'Entertainment'];
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'black', 'white'];
const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
const selectedCategory = ref<string | null>(null);
const selectedColor = ref<string | null>(null);
const selectedSize = ref<string | null>(null);
const priceRange = ref(500);

const selectCategory = (category: string) => {
    selectedCategory.value = category;
};

const selectColor = (color: string) => {
    selectedColor.value = color;
};

const selectSize = (size: string) => {
    selectedSize.value = size;
};

const submitFilters = () => {
    console.log('Filters applied with: ', selectedCategory.value, selectedColor.value, selectedSize.value, priceRange.value);
};

const searchQuery = ref("");

const search = () => {
    console.log("Searching for:", searchQuery.value);
};
</script>

<style scoped></style>
