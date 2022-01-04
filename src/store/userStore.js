import router from "../router"
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import { db } from "../database/firebaseinit"
import { defineStore } from "pinia"

export const UserStore = defineStore("user", {
  state: () => ({
    userData: null
  }),
  actions: {
    getUserInfo() { // Вызов происходит в App
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.userData = user
        } else {
          router.push({ name: "Login" })
        }
      })
    }
  }
})
