<script setup>
import firebase from "firebase/compat/app"
import "firebase/compat/auth"

import { storeToRefs } from "pinia"
import { db } from "./database/firebaseinit"

// Сторы
import { AddTaskStore } from "./store/addTaskModal"
import { PopupStore } from "./store/popupStore" 
import { UserStore } from "./store/userStore"
import { GetTasksStore } from "./store/getTasks"

// Компоненты
import Sidebar from "./components/Sidebar.vue"
import Topbar from "./components/Topbar.vue"
import AddTask from "./components/AddTask.vue"
import Popup from "./components/Popup.vue"
import Loading from "./components/Loading.vue"

//Объявление стора с мадальным окном Задачи
const addTaskStore = AddTaskStore()
const { isAddTaskOpen } = storeToRefs(addTaskStore)

//Объявление стора с попапоми
const popupStore = PopupStore()
const { popupMsg, popupImg, isLoading, popupShow } = storeToRefs(popupStore)

// Объявление стора с информацией о пользователе
const userStore = UserStore()

const getTaskStore = GetTasksStore()

// Получение инофрмции о пользователе 
userStore.getUserInfo()
</script>

<template>
  <main class="main">
    <Topbar v-if="!$route.meta.hideTopbar" />
    <div class="main__wrapper">
      <Sidebar v-if="!$route.meta.hideSidebar" />
      <router-view></router-view>
      <transition name="route">
        <AddTask v-if="addTaskStore.isAddTaskOpen" />
      </transition>
      <transition name="popup-animation">
        <Popup v-if="popupShow" />
      </transition>
      <transition name="popup-animation">
        <Loading v-if="popupStore.isLoading || getTaskStore.tasks === null" />
      </transition>
    </div>
  </main>
</template>

<style lang="scss">
</style>
