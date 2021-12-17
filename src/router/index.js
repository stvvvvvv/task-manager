import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Tasks from '../views/Tasks.vue'
import Login from '../views/Login.vue'

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
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Вход',
      hideTopbar: true,
      hideSidebar: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router