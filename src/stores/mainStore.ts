import { defineStore } from 'pinia';

export const useMainStore = defineStore('mainStore', {
    state: () => ({
        count: 0,
        username: 'anish0m'
    }),

    getters: {
        doubledCount: (state) => {
            return state.count * 2
        }
    }
});
