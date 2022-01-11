import router from "../router"
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import { db } from "../database/firebaseinit"
import { defineStore } from "pinia"
import { GetTasksStore } from "../store/getTasks";

export const UserStore = defineStore("user", {
  state: () => ({
    userData: null,
    getTaskStore: GetTasksStore()
  }),
  actions: {
    getUserInfo() { // Вызов происходит в App
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.userData = user
          this.getTaskStore.getTasks(user.uid);
        } else {
          router.push({ name: "Login" })
        }
      })
    }
  }
})
