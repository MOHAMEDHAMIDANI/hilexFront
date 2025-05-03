<template>
    <MainLayout>
        <div class="container mx-auto w-full my-4 px-4">
            <div class="w-full min-h-[100px] max-w-[1000px] mx-auto my-4 flex items-center justify-center">
                <form @submit.prevent="handleSearch" class="mx-auto w-full">
                    <label for="product-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search
                        products</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="product-search" v-model="searchQuery"
                            aria-label="Search medical products"
                            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            placeholder="Search by product name" required />
                        <button type="submit"
                            class="text-white duration-300 cursor-pointer absolute end-2.5 bottom-2.5 outline-none bg-primary hover:bg-primary-dark font-medium rounded-lg text-sm px-4 py-2"
                            aria-label="Submit search">
                            Search
                        </button>
                    </div>
                </form>
            </div>

            <div class="w-full flex flex-col lg:flex-row justify-end gap-4">
                <div
                    class="lg:max-w-[295px] w-full h-fit flex flex-col items-center shadow-md bg-white rounded-lg py-4 px-6">
                    <div class="flex justify-between items-center w-full">
                        <h2 class="capitalize font-bold text-lg">Filters</h2>
                        <button @click="openFilters = !openFilters" aria-label="Toggle filters"
                            class="text-gray-400 hover:text-gray-600 duration-300 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="-2 -4 24 24">
                                <path fill="currentColor"
                                    d="M9 12V1a1 1 0 1 1 2 0v11h1a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-2 0v-1H8a1 1 0 0 1 0-2zm7-10V1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2h-1v11a1 1 0 0 1-2 0V4h-1a1 1 0 0 1 0-2zM4 5h1a1 1 0 1 1 0 2H4v8a1 1 0 0 1-2 0V7H1a1 1 0 1 1 0-2h1V1a1 1 0 1 1 2 0z" />
                            </svg>
                        </button>
                    </div>

                    <div v-if="openFilters" class="h-fit w-full">
                        <FilterSection title="Categories" :isOpen="openCategories"
                            @toggle="openCategories = !openCategories">
                            <div class="mt-4 w-full h-fit flex flex-wrap gap-2">
                                <FilterPill v-for="category in categories" :key="category.id"
                                    :active="selectedCategory === category.id" @click="selectCategory(category.id)">
                                    {{ category.categoryName }}
                                </FilterPill>
                            </div>
                        </FilterSection>

                        <FilterSection title="Colors" :isOpen="openColors" @toggle="openColors = !openColors">
                            <div class="mt-4 w-full h-fit flex flex-wrap gap-2">
                                <div v-for="(color) in attributes.colors" :key="color.value"
                                    class="w-8 h-8 rounded-full cursor-pointer outline-1 outline-offset-2 transition-all"
                                    :class="[selectedColor === color.value ? 'outline-black' : 'outline-white']"
                                    :style="{ backgroundColor: color.hex }" @click="selectColor(color.value)"
                                    :aria-label="`Select ${color} color`" :title="color.value" />
                            </div>
                        </FilterSection>

                        <FilterSection title="Sizes" :isOpen="openSizes" @toggle="openSizes = !openSizes">
                            <div class="mt-4 w-full h-fit flex flex-wrap gap-2">
                                <FilterPill v-for="size in attributes.sizes" :key="size" :active="selectedSize === size"
                                    @click="selectSize(size)">
                                    {{ size }}
                                </FilterPill>
                            </div>
                        </FilterSection>

                        <FilterSection title="Price Range" :isOpen="openPriceRange"
                            @toggle="openPriceRange = !openPriceRange">
                            <div class="mt-4 w-full">
                                <input type="range" v-model="priceRange" :min="0" :max="attributes.maxPrice" step="10"
                                    aria-label="Price range filter"
                                    class="w-full mt-4 bg-gray-100 border border-gray-300 rounded-md h-2 focus:outline-none" />
                                <div class="flex justify-between mt-2 text-sm">
                                    <span>$0</span>
                                    <span class="font-medium">${{ priceRange }}</span>
                                    <span>${{ attributes.maxPrice }}</span>
                                </div>
                            </div>
                        </FilterSection>

                        <div class="mt-6 w-full">
                            <button @click="applyFilters"
                                class="w-full py-2 bg-primary duration-300 cursor-pointer text-white rounded-lg hover:bg-primary-dark focus:outline-none"
                                aria-label="Apply filters">
                                Apply Filters
                            </button>
                        </div>
                    </div>
                </div>

                <div class="w-full">
                    <Slider :title="'Results'"
                        :description="searchQuery ? `Results for: ${searchQuery}` : 'Results based on your filters'">
                        <Product v-for="product in ProductStore.ProductsWithFilters" :key="product.id"
                            :product="product" :gap="false" />
                    </Slider>
                </div>
            </div>
        </div>
    </MainLayout>
</template>
<script setup lang="ts">
import MainLayout from "~/layouts/MainLayout.vue";
import FilterSection from "~/components/FilterSection.vue";
import FilterPill from "~/components/FilterPill.vue";
import { type Product, type Category } from "~/types";
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
const openFilters = ref(true);
const openCategories = ref(true);
const openColors = ref(true);
const openSizes = ref(true);
const openPriceRange = ref(true);
const categories = ref<Category[]>([]);
const products = ref<Product[]>([]);
const attributes = ref<{ colors: { value: string; hex: string }[]; sizes: string[], maxPrice: number; }>({
    colors: [],
    sizes: [],
    maxPrice: Infinity,
});
const selectedCategory = ref<string | null>(route.query.category as string || null);
const selectedColor = ref<string | null>(route.query.color as string || null);
const selectedSize = ref<string | null>(route.query.size as string || null);
const priceRange = ref(Number(route.query.maxPrice) || attributes.value.maxPrice);
const searchQuery = ref(route.query.q as string || "");

onMounted(async () => {
    categories.value = await CategoryStore.getCategories();
    const attrs = await ProductStore.getAttributes();
    attributes.value = {
        colors: attrs.colors,
        sizes: attrs.sizes,
        maxPrice: attrs.maxPrice
    };
    priceRange.value = Number(route.query.maxPrice) || Math.floor(attrs.maxPrice / 2);
    await applyFilters();
});
const ProductStore = useProductStore();
const CategoryStore = useCategoryStore();

const selectCategory = (category: string) => {
    selectedCategory.value = selectedCategory.value === category ? null : category;
    updateUrlAndSearch();
};

const selectColor = (color: string) => {
    selectedColor.value = selectedColor.value === color ? null : color;
    updateUrlAndSearch();
};
const selectSize = (size: string) => {
    selectedSize.value = selectedSize.value === size ? null : size;
    updateUrlAndSearch();
};
const handleSearch = () => {
    updateUrlAndSearch();
};
const updateUrlAndSearch = () => {
    router.push({
        query: {
            q: searchQuery.value || undefined,
            category: selectedCategory.value || undefined,
            color: selectedColor.value || undefined,
            size: selectedSize.value || undefined,
            maxPrice: priceRange.value || undefined
        }
    });
    applyFilters();
};

const applyFilters = async () => {
    const filters = {
        productName: searchQuery.value,
        categoryId: selectedCategory.value,
        color: selectedColor.value,
        size: selectedSize.value,
        maxPrice: priceRange.value
    };

    products.value = await ProductStore.getProductsWithFilters(filters);
};

watch(() => route.query, (newQuery) => {
    selectedCategory.value = newQuery.category as string || null;
    selectedColor.value = newQuery.color as string || null;
    selectedSize.value = newQuery.size as string || null;
    priceRange.value = Number(newQuery.maxPrice) || 500;
    searchQuery.value = newQuery.q as string || "";
    applyFilters();
}, { immediate: true });
</script>