import { defineStore } from 'pinia'
import type { Category } from '~/types'

export const useCategoryStore = defineStore('category', {
    state: () => ({
        categories: [] as Category[],
        error: null as string | null,
        loading: false as boolean
    }),

    getters: {
        categoryNames: (state) => state.categories.map(c => c.categoryName),
        getCategoryById: (state) => (id: string) =>
            state.categories.find(c => c.id === id)
    },

    actions: {
        async initialize() {
            if (this.categories.length === 0) {
                await this.getCategories()
            }
        },
        async getCategories() {
            const { $axios } = useNuxtApp()
            this.loading = true
            this.error = null

            try {
                const response = await $axios.get('/category')
                this.categories = response.data
                return this.categories
            } catch (err: any) {
                this.error = err.response?.data?.message || 'Failed to fetch categories'
                throw err
            } finally {
                this.loading = false
            }
        }
    }
})