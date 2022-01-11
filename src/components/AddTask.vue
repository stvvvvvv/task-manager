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
import { GetTasksStore } from "../store/getTasks"

import AddTaskOption from "./AddTaskOption.vue"
import AddTaskStage from "./AddTaskStage.vue"

//Объявление стора с мадальным окном Задачи
const addTaskStore = AddTaskStore() 
const { isAddTaskOpen } = storeToRefs(addTaskStore)


// Попап стор
const popupStore = PopupStore()
let { popupMsg, popupImg, isLoading, popupShow } = storeToRefs(popupStore)

// User стор
const userStore = UserStore()

// Task store
const getTaskStore = GetTasksStore()

//Закрытие модального окна новой Задачи
function toggleAddTaskOpen () {
  addTaskStore.isAddTaskOpen = false
}

//Счетчик шага формы
let formStepCounter = ref(0)


//Категории задач
const categories = reactive(['Работа', 'Учеба', 'Финансы', 'Отдых'])
let optionValue = ref('')


//Удаление категории по клику
function deliteStage (index) {
  newTask.stages.splice(index, 1)
}


//Отправка данных на сервер
const newTask = reactive({
  header: '',         // Название задачи
  description: '',    // Описание задачи
  category: '',       // Категория задачи
  deadline: '',       // Дедлайн
  color: '#000000',   // Цвет задачи
  stages: [],         // Этапы задачи
})

async function uploadTask () {
  if (userStore.userData) {
    const timestamp = await Date.now()
    popupStore.isLoading = true
    await db.collection('users').doc(userStore.userData.uid).collection('tasks')
    .add ({
      header: newTask.header,
      description: newTask.description,
      category: newTask.category,
      color: newTask.color,
      stages: newTask.stages,
      deadline: newTask.deadline,
      taskDate: timestamp
    })
    await getTaskStore.getTasks(userStore.userData.uid)
    popupStore.isLoading = false
    popupStore.popupMsg = "Задача успешно создана!"
    popupStore.popupImg = true
    popupStore.popupShow = true
    setTimeout(() => {
      popupStore.popupMsg = ""
      popupStore.popupImg = false
      popupStore.popupShow = false
    }, 2000)
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
          <div class="add-task__form__input-group">
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
              <select name="inputCategory" id="inputCategory" v-model="newTask.category">
                <AddTaskOption
                  v-for="(category, index) in categories"
                  :key="index"
                  :category="category"
                />
              </select>
              <div class="add-task__form__group p-relative">
                <input
                  type="text"
                  placeholder="Добавить свою категорию"
                  class="add-task__form__input"
                  v-model="optionValue"
                >
                <button
                  class="add-task__form__btn-add"
                  @click.prevent="categories.unshift(optionValue), optionValue = ''"
                >
                  Добавить
                </button>
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
            <div class="add-task__form__group p-relative">
                <input
                  type="text"
                  placeholder="Добавить этап"
                  class="add-task__form__input"
                  v-model="stage"
                >
                <button
                  class="add-task__form__btn-add"
                  @click.prevent="newTask.stages.unshift(stage), stage = ''"
                >
                  Добавить
                </button>
                <div class="add-task__form__stages mt-05" v-if="newTask.stages">
                  <AddTaskStage 
                    v-for="(stage, index) in newTask.stages"
                    :key="index"
                    :stage="stage"
                    :index="index"
                    @deliteStage="deliteStage"
                  />
                </div>
              </div>
            <div class="add-task__form__group">
              <label for="inputDate" class="add-task__form__label">Дедлайн</label>
              <input
                type="datetime-local"
                class="add-task__form__input"
                id="inputDate"
                v-model="newTask.deadline"
              />
            </div>
          </div>
          <div class="form__btn-group">
            <button class="form__btn-prev" @click.prevent="formStepCounter--">Назад</button>
            <button @click.prevent="uploadTask()" class="add-task__form__btn">Добавить задачу</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
</style>