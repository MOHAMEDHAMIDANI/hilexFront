<template>
    <MainLayout>
        <div class="container mx-auto w-full my-4 px-4">
            <div class="w-full max-w-3xl mx-auto my-6 px-4">
                <form @submit.prevent="handleSearch" class="relative">
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input id="product-search" v-model="searchQuery" type="search"
                            aria-label="Search medical products" placeholder="Search medicines..."
                            class="block w-full pl-10 pr-24 py-3 text-base text-gray-900 placeholder-gray-400 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-150"
                            @input="handleSearch">
                        <button v-if="searchQuery" type="button" @click="clearSearch"
                            class="absolute inset-y-0 right-20 flex items-center pr-2 text-gray-400 hover:text-gray-600"
                            aria-label="Clear search">
                            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <button type="submit"
                            class="absolute inset-y-0 right-0 flex items-center px-4 bg-primary text-white text-sm font-medium rounded-r-lg hover:bg-primary-dark transition-colors"
                            aria-label="Search">
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
                        :description="searchQuery ? `Results for: ${searchQuery}` : 'Results based on your filters'" >
                        <Product v-for="product in ProductStore.ProductsWithFilters" :key="product.id" loading="true"
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
const priceRange = ref(Number(route.query.maxPrice) || attributes.value.maxPrice );
const searchQuery = ref(route.query.q as string || "");

onMounted(async () => {
    categories.value = await CategoryStore.getCategories();
    const attrs = await ProductStore.getAttributes();
    attributes.value = {
        colors: attrs.colors,
        sizes: attrs.sizes,
        maxPrice: attrs.maxPrice
    };
    priceRange.value = Number(route.query.maxPrice) || attrs.maxPrice;
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
    selectedCategory.value = newQuery.category as string || null; selectedColor.value = newQuery.color as string || null;
    selectedSize.value = newQuery.size as string || null;
    priceRange.value = Number(newQuery.maxPrice) || 500;
    searchQuery.value = newQuery.q as string || "";
    applyFilters();
}, { immediate: true });

const clearSearch = () => {
    searchQuery.value = '';
    handleSearch();
};
</script>