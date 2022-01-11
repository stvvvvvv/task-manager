<script setup>
import { storeToRefs } from 'pinia'

import { AddTaskStore } from '../store/addTaskModal' //Импортирование стора с модальным окном Задачи


//Объявление стора с мадальным окном Задачи
const addTaskStore = AddTaskStore() 
const { isAddTaskOpen } = storeToRefs(addTaskStore)

//Функция для изменения значения дропдауна пункта "Задачи"
function toggleTasksDropdwon () {
  this.isTasksDropdownOpen = !this.isTasksDropdownOpen;
}

//Открытие модального окна новой Задачи
function toggleAddTaskOpen () {
  addTaskStore.isAddTaskOpen = true
}
</script>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <router-link to="/" class="nav__link"><i class="fas fa-home"></i> Главная</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/tasks" class="nav__link"><i class="fas fa-tasks"></i> Задачи</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/" class="nav__link"><i class="fas fa-bullseye"></i> Цели</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/" class="nav__link"><i class="far fa-chart-bar"></i> Мое время</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/" class="nav__link"><i class="fas fa-trophy"></i> Достижения</router-link>
      </li>
      <li class="nav__tasks__add nav__item" @click="toggleAddTaskOpen()">
        <i class="fas fa-plus"></i> Добавить задачу
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
</style>