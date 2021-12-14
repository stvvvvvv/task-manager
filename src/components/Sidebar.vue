<script setup>
import { ref } from "vue"
import { storeToRefs } from 'pinia'

import { AddTaskStore } from '../store/addTaskModal' //Импортирование стора с модальным окном Задачи

//Объявление стора с мадальным окном Задачи
const addTaskStore = AddTaskStore() 
const { isAddTaskOpen } = storeToRefs(addTaskStore)


const isTasksDropdownOpen = ref(true); // Значение для дропдауна пункта "Задачи"


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
      <div class="nav__container">
        <li class="nav__item">
          <router-link to="/tasks" class="nav__link"><i class="fas fa-tasks"></i> Задачи</router-link>
        </li>
        <i 
          class="fas fa-chevron-down nav__dropdown"
          :class="{'nav__dropdown-active': isTasksDropdownOpen === true}"
          @click="toggleTasksDropdwon()"
        >
        </i>
      </div>
      <ul class="nav__tasks" :class="{'nav__tasks-active': isTasksDropdownOpen === true}">
        <li class="nav__tasks__item">Задача первая</li>
        <li class="nav__tasks__item">Задача вторая</li>
        <li class="nav__tasks__item">Задача третья</li>
        <li class="nav__tasks__add" @click="toggleAddTaskOpen()">
          <i class="fas fa-plus"></i> Добавить задачу
        </li>
      </ul>
      <li class="nav__item">
        <router-link to="/" class="nav__link"><i class="fas fa-bullseye"></i> Цели</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/" class="nav__link"><i class="fas fa-trophy"></i> Достижения</router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
</style>