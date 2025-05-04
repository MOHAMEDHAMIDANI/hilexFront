import { defineStore } from 'pinia'
import type { ProductType } from '~/types'

export const useFavCartStore = defineStore('FavCart', {
    state: () => ({
        Fav: [] as ProductType[],
        cart: [] as ProductType[],
        selectedProduct: {} as ProductType
    }),
    getters: {
        favCounterStore: (state) => state.Fav.length,
        CartCounterStore: (state) => state.cart.length
    },
    actions: {
        addToFav(product: ProductType) {
            const exists = this.Fav.some(item => item.id === product.id);
            if (!exists) {
                this.Fav.push(product);
            }
        },
        removeFromFav(product: ProductType) {
            this.Fav = this.Fav.filter(item => item.id !== product.id);
        },
        addToCart(product: ProductType) {
            const item = this.cart.find(item => item.id === product.id);
            if (!item) {
                this.cart.push({ ...product, quantity: 1 });
            } else {
                item.quantity++;
            }
        },
        removeFromCart(product: ProductType) {
            this.cart = this.cart.filter(item => item.id !== product.id);
        },
        incrementQuantity(product: ProductType) {
            const item = this.cart.find(item => item.id === product.id);
            if (item) {
                item.quantity++;
            }
        },
        decrementQuantity(product: ProductType) {
            const item = this.cart.find(item => item.id === product.id);
            if (item && item.quantity > 1) {
                item.quantity--;
            }
        },
        setActiveProduct(product: ProductType) {
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
