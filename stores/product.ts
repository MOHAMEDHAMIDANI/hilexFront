import { defineStore } from 'pinia'
import type { Product } from '~/types'

export const useProductStore = defineStore('product', {
    state: () => ({
        Products: [] as Product[],
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
                return this.Products
            } catch (err: any) {
                this.error = err.response?.data?.message || 'Failed to fetch categories'
                throw err
            } finally {
                this.loading = false
            }
        }
    }
})