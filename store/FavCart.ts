export const useCounterStore = defineStore('FavCart', {
    state: () => ({ 
        count: 0,
        name: 'Eduardo'  ,
        Fav : [] as [string] | [],
        Fav : [] as [string] | []

    }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
        },
    },
})