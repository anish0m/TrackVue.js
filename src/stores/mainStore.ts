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
    },

    actions: {
      showCount() {
        return `Hi ${this.username}! Your count is ${this.count}.`
      },
    },
});
