import { defineStore } from 'pinia'
import type { Product } from '~/types'

export const useFavCartStore = defineStore('FavCart', {
    state: () => ({
        Fav: [] as Product[],
        cart: [] as Product[],
        selectedProduct: {} as Product
    }),
    getters: {
        favCounterStore: (state) => state.Fav.length,
        CartCounterStore: (state) => state.cart.length
    },
    actions: {
        addToFav(product: Product) {
            const exists = this.Fav.some(item => item.id === product.id);
            if (!exists) {
                this.Fav.push(product);
            }
        },
        removeFromFav(product: Product) {
            this.Fav = this.Fav.filter(item => item.id !== product.id);
        },
        addToCart(product: Product) {
            const item = this.cart.find(item => item.id === product.id);
            if (!item) {
                this.cart.push({ ...product, quantity: 1 });
            } else {
                item.quantity++;
            }
        },
        removeFromCart(product: Product) {
            this.cart = this.cart.filter(item => item.id !== product.id);
        },
        incrementQuantity(product: Product) {
            const item = this.cart.find(item => item.id === product.id);
            if (item) {
                item.quantity++;
            }
        },
        decrementQuantity(product: Product) {
            const item = this.cart.find(item => item.id === product.id);
            if (item && item.quantity > 1) {
                item.quantity--;
            }
        },
        setActiveProduct(product: Product) {
            this.selectedProduct = product;
        },
        clearCart() {
            this.cart = [];
        },
    },
    persist : {
        enabled: true
    }
});
