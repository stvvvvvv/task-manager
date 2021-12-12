import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Tasks from '../views/Tasks.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Главная'
    }
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks,
    meta: {
      title: 'Задачи'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router