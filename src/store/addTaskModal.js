import { defineStore } from "pinia"

export const AddTaskStore = defineStore('addTask', {
    state: () => ({
        isAddTaskOpen: false
    })
})