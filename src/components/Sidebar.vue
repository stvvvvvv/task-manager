<script setup>
import { ref } from "vue";

const isTasksDropdownOpen = ref(true);

function toggleTasksDropdwon() {
  this.isTasksDropdownOpen = !this.isTasksDropdownOpen;
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
        <li class="nav__tasks__add">
          <i class="fas fa-plus"></i> Добавить задачу
        </li>
      </ul>
      <li class="nav__item">
        <router-link to="/" class="nav__link"><i class="fas fa-bullseye"></i> Цели</router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
</style>