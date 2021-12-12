import { defineStore } from "pinia"
// import { FirebaseApp } from "firebase/app"

export const userAuthStore = defineStore('user', {
    state: () => ({
        user: null,
    }),
    actions: {
    }
})