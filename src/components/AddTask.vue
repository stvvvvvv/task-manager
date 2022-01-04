<script setup>
//Firebase
import firebase from "firebase/compat/app"
import 'firebase/compat/storage'

import { ref, reactive, toRef } from "vue"
import { storeToRefs } from 'pinia'
import { db } from '../database/firebaseinit'

//Store
import { AddTaskStore } from '../store/addTaskModal'
import { PopupStore } from '../store/popupStore'
import { UserStore } from '../store/userStore'


//Объявление стора с мадальным окном Задачи
const addTaskStore = AddTaskStore() 
const { isAddTaskOpen } = storeToRefs(addTaskStore)


// Попап стор
const popupStore = PopupStore()
const { popupMsg, popupImg, isLoading } = storeToRefs(popupStore)

// User стор
const userStore = UserStore()



//Закрытие модального окна новой Задачи
function toggleAddTaskOpen () {
  addTaskStore.isAddTaskOpen = false
}

//Счетчик шага формы
let formStepCounter = ref(0)


//Категории задач

//Отправка данных на сервер
const newTask = reactive({
  header: '',
  description: '',
  category: '',
  color: '#000000',
  timer: '',
  date: ''
})

function uploadTask () {
  if (userStore.userData) {
    db.collection('users').doc(userStore.userData.uid).collection('tasks')
    .add ({
      header: newTask.header,
      description: newTask.description,
      color: newTask.color,
      timer: newTask.timer,
      date: newTask.date
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
        <div class="add-task__form__first-step add-task__form__step" v-if="formStepCounter === 0">
          <div class="add-task__form__input-gr">
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
              <label for="inputCategory" class="add-task__form__label">Выберете категорию</label>
              <div class="add-task__form__category-group">
                <input
                  class="form__cbx-mass"
                  type="checkbox"
                  name="react"
                  id="react"
                />
                <label class="form__cbx-label" @click="activeVue = !activeVue" :class="{ active: activeVue }"  for="work">Работа</label>
                <input
                  class="form__cbx-mass"
                  type="checkbox"
                  name="work"
                  id="work"
                />
                <label  class="form__cbx-label" @click="activeAngular = !activeAngular" :class="{ active: activeAngular }"  for="learning">Учеба</label>
                <input
                  class="form__cbx-mass"
                  type="checkbox"
                  name="learning"
                  id="learning"
                />
                <label  class="form__cbx-label" @click="activeNode = !activeNode" :class="{ active: activeNode }"  for="node">Финансы</label>
                <input
                  class="form__cbx-mass"
                  type="checkbox"
                  name="finance"
                  id="finance"
                />
                <label class="form__cbx-label" @click="activeJs = !activeJs" :class="{ active: activeJs }"  for="js">Отдых</label>
                <input
                  class="form__cbx-mass"
                  type="checkbox"
                  name="js"
                  id="js"
                />
                <label class="form__cbx-label" @click="activePhp = !activePhp" :class="{ active: activePhp }" for="php"></label>
                <input
                  class="form__cbx-mass"
                  type="checkbox"
                  name="php"
                  id="php"
                />
              </div>
            </div>
          </div>
          <div class="form__btn-gruop">
            <button class="form__btn-next" @click.prevent="formStepCounter++">Далее</button>
          </div>
        </div>

        <div class="add-task__form__second-step add-task__form__step" v-if="formStepCounter === 1">
          <div class="add-task__form__input-group">
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
          </div>
          <div class="form__btn-group">
            <button class="form__btn-prev" @click.prevent="formStepCounter--">Назад</button>
            <button class="form__btn-next" @click.prevent="formStepCounter++">Далее</button>
          </div>
          
          <!-- <button @click.prevent="uploadTask()" class="add-task__form__btn">Добавить задачу</button> -->
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
</style>