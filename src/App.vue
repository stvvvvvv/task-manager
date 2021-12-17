<script setup>
import Sidebar from './components/Sidebar.vue'
import Topbar from './components/Topbar.vue'
import AddTask from './components/AddTask.vue';

import { storeToRefs } from 'pinia'

import { AddTaskStore } from './store/addTaskModal' //Импортирование стора с модальным окном Задачи

//Объявление стора с мадальным окном Задачи
const addTaskStore = AddTaskStore() 
const { isAddTaskOpen } = storeToRefs(addTaskStore)

</script>

<template>
<main class="main">
  <Topbar v-if="!$route.meta.hideTopbar"/>
  <div class="main__wrapper">
    <Sidebar v-if="!$route.meta.hideSidebar"/>
    <router-view></router-view>
    <transition name="route">
      <AddTask v-if="addTaskStore.isAddTaskOpen"/>
    </transition>
  </div>
</main>
</template>

<style lang="scss">
</style>
