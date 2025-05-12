import { defineStore } from 'pinia'
import type { Product } from '~/types'

export const useProductStore = defineStore('product', {
    state: () => ({
        Products: [] as Product[],
        ProductsWithFilters: [] as Product[],
        error: null as string | null,
        loading: false as boolean
    }),

    getters: {

    },

    actions: {
        async initialize() {
            if (this.Products.length === 0) {
                await this.getProducts()
            }
        },
        async getProducts() {
            const { $axios } = useNuxtApp()
            this.loading = true
            this.error = null
            try {
                const response = await $axios.get('/products')
                this.Products = response.data
                console.log(this.Products)
                return this.Products
            } catch (err: any) {
                this.error = err.response?.data?.message || 'Failed to fetch categories'
                throw err
            } finally {
                this.loading = false
            }
        },
        async getAttributes() {
            const { $axios } = useNuxtApp()
            this.loading = true
            this.error = null
            try {
                const response = await $axios.get('/products/attributes/colors-and-sizes')
                this.Products = response.data
                return this.Products
            } catch (err: any) {
                this.error = err.response?.data?.message || 'Failed to fetch categories'
                throw err
            } finally {
                this.loading = false
            }
        },
        async getProductsWithFilters(filters: {
            productName: string | null,
            categoryId: string | null,
            color: string | null,
            size: string | null,
            maxPrice: number | null,
            minPrice?: number,  
        }) {
            const { $axios } = useNuxtApp();
            this.loading = true;
            this.error = null;
            
            try {
                const cleanedFilters = Object.fromEntries(
                    Object.entries(filters).filter(([_, value]) => value !== null && value !== undefined)
                );
                const response = await $axios.get('/search/products', {
                    params: cleanedFilters,
                    paramsSerializer: (params) => {
                        return Object.entries(params)
                            .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
                            .join('&');
                    }
                });
        
                this.ProductsWithFilters = response.data.items;
                return this.ProductsWithFilters;
            } catch (err: any) {
                this.error = err.response?.data?.message || 'Failed to fetch products';
                throw err;
            } finally {
                this.loading = false;
            }
        },
        async getProductById(id: string) {
            const { $axios } = useNuxtApp()
            this.loading = true
            this.error = null
            try {
                const response = await $axios.get(`/products/${id}`)
                return response.data
            } catch (err: any) {
                this.error = err.response?.data?.message || 'Failed to fetch product'
                throw err
            } finally {
                this.loading = false
            }
        },
    }
})