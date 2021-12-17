import { defineStore } from "pinia"
import { db } from '../database/firebaseinit'
import 'firebase/compat/storage'

export const SendNewTaskStore = defineStore('addTask', {
  state: () => ({
    inputTask: '',
    inputDescription: '',
    inputColor: '#rrggbb',
    inputTime: '',
    inputDate: ''
  }),
  actions: {
    uploadTask() {
      console.log('Y')
      if (true) {
        db.collection('posts').doc()
        .add({
          inputTask: this.$state.inputTask,
          inputDescription: this.$state.inputDescription,
          inputColor: this.$state.inputColor,
          inputTime: this.$state.inputTime
        })
      }
    }
  }
})