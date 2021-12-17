<script setup>
import { ref, toRef } from "vue"
import { storeToRefs } from 'pinia'

//Firebase
import firebase from 'firebase/compat'
import { db } from '../database/firebaseinit'
import 'firebase/compat/storage'

//Объявление стора с мадальным окном Задачи
import { AddTaskStore } from '../store/addTaskModal'
const addTaskStore = AddTaskStore() 
const { isAddTaskOpen } = storeToRefs(addTaskStore)

//Закрытие модального окна новой Задачи
function toggleAddTaskOpen () {
  addTaskStore.isAddTaskOpen = false
}

//Отправка данных на сервер
const newTask = ref({
  header: '',
  description: '',
  color: '#000000',
  timer: '',
  date: ''
})

function uploadTask () {
      if (newTask.header !== '' && newTask.description !== '') {
        db.collection('tasks').doc().set({
            header: newTask.header,
            description: newTask.description
          })
      }
    }
</script>

<template>
  <div class="add-task">
    <div class="add-task__container">
      <div
        class="add-task__close"
        @click="toggleAddTaskOpen()"
      >
        <i class="fas fa-times"></i>
      </div>
      <form class="add-task__form">
        <h2 class="add-task__form__header">Добавление новой задачи</h2>
        <div class="add-task__form__group">
          <label for="inputTask" class="add-task__form__label">Введите задачу</label>
          <input
            type="text"
            class="add-task__form__input"
            id="inputTask"
            v-model="newTask.header"
          />
        </div>
        <div class="add-task__form__group">
          <label for="inputDescription" class="add-task__form__label">Введите описание задачи</label>
          <textarea
            type="text-area"
            class="add-task__form__input add-task__form__textarea"
            id="inputDescription"
            v-model="newTask.description"
          />
        </div>
        <div class="add-task__form__group">
          <label for="inputColor" class="add-task__form__label">Выберете цвет здачи</label>
          <input
            type="color" 
            class="add-task__form__input" 
            id="inputColor"
            v-model="newTask.color"
          />
        </div>
        <div class="add-task__form__group">
          <label for="inputTime" class="add-task__form__label">Таймер</label>
          <input
            type="time"
            class="add-task__form__input"
            id="inputTime"
            v-model="newTask.inputTime"  
          />
        </div>
        <div class="add-task__form__group">
          <label for="inputDate" class="add-task__form__label">Время выполнения</label>
          <input
            type="datetime-local"
            class="add-task__form__input"
            id="inputDate"
            v-model="newTask.inputDate"
          />
        </div>
        <button @click.prevent="uploadTask()" class="add-task__form__btn">Добавить задачу</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
</style>