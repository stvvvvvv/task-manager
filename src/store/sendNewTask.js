import { defineStore } from "pinia"

export const SendNewTaskStore = defineStore('addTask', {
    state: () => ({
        inputTask: '',
        inputDescription: '',
        inputColor: '#rrggbb',
        inputTime: '',
        inputDate: ''
    })
})