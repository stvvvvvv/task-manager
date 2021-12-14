<script setup>
import { ref } from "vue"
import { storeToRefs } from 'pinia'

import { AddTaskStore } from '../store/addTaskModal' //Импортирование стора с модальным окном новой Задачи
import { SendNewTaskStore } from '../store/sendNewTask' //Отправка на сервер новой Задачи

//Объявление стора с мадальным окном Задачи
const addTaskStore = AddTaskStore() 
const { isAddTaskOpen } = storeToRefs(addTaskStore)

const sendNewTaskStore = SendNewTaskStore()
const { inputTask, inputDescription, inputColor, inputTime, inputDate } = storeToRefs(sendNewTaskStore)

//Закрытие модального окна новой Задачи
function toggleAddTaskOpen () {
  addTaskStore.isAddTaskOpen = false
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
            v-model="sendNewTaskStore.inputTask"
          />
        </div>
        <div class="add-task__form__group">
          <label for="inputDescription" class="add-task__form__label">Введите описание задачи</label>
          <textarea
            type="text-area"
            class="add-task__form__input add-task__form__textarea"
            id="inputDescription"
            v-model="sendNewTaskStore.inputDescription"
          />
        </div>
        <div class="add-task__form__group">
          <label for="inputColor" class="add-task__form__label">Выберете цвет здачи</label>
          <input
            type="color" 
            class="add-task__form__input" 
            id="inputColor"
            v-model="sendNewTaskStore.inputColor"
          />
        </div>
        <div class="add-task__form__group">
          <label for="inputTime" class="add-task__form__label">Таймер</label>
          <input
            type="time"
            class="add-task__form__input"
            id="inputTime"
            v-model="sendNewTaskStore.inputTime"  
          />
        </div>
        <div class="add-task__form__group">
          <label for="inputDate" class="add-task__form__label">Время выполнения</label>
          <input
            type="datetime-local"
            class="add-task__form__input"
            id="inputDate"
            v-model="sendNewTaskStore.inputDate"
          />
        </div>
        <button class="add-task__form__btn">Добавить задачу</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
</style>