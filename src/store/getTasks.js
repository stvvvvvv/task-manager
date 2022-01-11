import { defineStore } from "pinia"
import { db } from "../database/firebaseinit"

import "firebase/compat/storage"

export const GetTasksStore = defineStore("getTasksStore", {
  state: () => ({
    tasks: null,
    tasksLoaded: false
  }),
  actions: {
    getTasks(userId) {        //Первичное вызов при запуске приложения происходит в userStore
      db.collection("users")
      .doc(userId)
      .collection("tasks")
      .orderBy("taskDate", "desc")
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          console.log("Empty posts[]. View store actions.")
        } else {
          this.tasks = []
          querySnapshot.forEach((task) => {
          this.tasks.push(task.data())
        })
          this.tasksLoaded = true;
        }
      })
    }
  }
})
