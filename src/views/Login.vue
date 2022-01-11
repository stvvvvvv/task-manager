<script setup>
import router from '../router'
import useVuelidate from "@vuelidate/core";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

import { ref, reactive, computed } from "vue";
import { storeToRefs } from 'pinia'
import { required, email, minLength, sameAs } from "@vuelidate/validators"
import { db } from '../database/firebaseinit'

import { PopupStore } from '../store/popupStore'

// Store
const popupStore = PopupStore()
const { popupMsg, popupImg, isLoading } = storeToRefs(popupStore)
// /Store



// Валидация
const state = reactive({
  log: {
    email: '',
    password: ''
  },
  reg: {
    name: '',
    email: '',
    password: '',
    passConfirm: ''
  }
})

const rules = computed(() => {
  return {
    log: {
      email: { required, email },
      password: { required, minLength: minLength(8) }
    },
    reg: {
      name: { required },
      email: { required, email },
      password: { required, minLength: minLength(8) },
      passConfirm: { required, minLength: minLength(8), sameAsPassword: sameAs(state.reg.password) }
    }
  }
})

const v$ = reactive(useVuelidate(rules, state))
// /Конец валидации


// Навигация между регистрацией и входом
let isRegActive = ref(false)

function toggleLog() {
  this.isRegActive = false
}

function toggleReg() {
  this.isRegActive = true
}
// /Конец навигации между регистрацией и входом


// Регистрация нового пользователя
function regNewUser () {
  popupStore.isLoading = true
  firebase
    .auth()
    .createUserWithEmailAndPassword(state.reg.email, state.reg.password)
    .then((results) => {
      db.collection('users').doc(results.user.uid)
        .set({
          name: state.reg.name,
          email: state.reg.email
        })
        popupStore.isLoading = false
        router.push({ name: "Home" })
    })
    .catch(error => {
      console.log(error)
    })
}
// /Конец регистрации нового пользователя


// Вход пользователя
function logInUser () {
  popupStore.isLoading = true
  firebase
    .auth()
    .signInWithEmailAndPassword(state.log.email, state.log.password)
    .then(() => {
      popupStore.isLoading = false
      router.push({ name: "Home" })
    })
    .catch(error => {
      console.log(error)
    })
}
// /Конец входа
</script>

<template>
  <div class="login">
    <div class="login__nav">
      <span
        class="login__nav-log"
        :class="{ 'login_active-link': isRegActive === false }"
        @click="toggleLog()"
      >
        Войти в аккаунт
      </span>
      <span
        class="login__nav-reg"
        :class="{ 'login_active-link': isRegActive === true }"
        @click="toggleReg()"
      >
        Создать аккаунт
      </span>
    </div>
    <div class="form__container login__form__container">
      <transition name="log-transition">
        <form action="" class="login__form form" v-if="isRegActive === false">
          <h2 class="form__header">Вход</h2>
          <div class="login__group form__group">
            <div class="form__input-group">
              <i
                class="fas fa-envelope input-icon"
                :class="{ 'input-icon_error': v$.log.email.$error === true }"
              ></i>
              <input
                type="email"
                placeholder="E-mail"
                class="login__input input-email"
                :class="{ login__input_error: v$.log.email.$error === true }"
                id="loginEmail"
                v-model="state.log.email"
                @blur="v$.log.email.$touch"
              />
            </div>
          </div>
          <div class="login__group form__group">
            <div class="form__input-group">
              <i
                class="fas fa-lock input-icon"
                :class="{ 'input-icon_error': v$.log.password.$error === true }"
              ></i>
              <input
                type="password"
                placeholder="Пароль"
                class="login__input input-password"
                :class="{ login__input_error: v$.log.password.$error === true }"
                id="loginPassword"
                v-model="state.log.password"
                @blur="v$.log.password.$touch"
              />
            </div>
          </div>
          <button
            class="form__btn-submit login__btn"
            :disabled="v$.log.$invalid"
            @click.prevent="logInUser()"
          >
            Войти
          </button>
          <p class="form__note-end">
            Забыли пароль?
            <router-link to="/login/reminder">Востановить</router-link>
          </p>
        </form>
      </transition>
      <transition name="log-transition">
        <form v-if="isRegActive" action="" class="reg__form form">
          <h2 class="form__header">Регистрация</h2>
          <div class="reg__group form__group">
            <div class="form__input-group">
              <i
                class="fas fa-user input-icon"
                :class="{ 'input-icon_error': v$.reg.name.$error === true }"
              ></i>
              <input
                type="text"
                placeholder="Ваше имя"
                class="reg-input input-name"
                :class="{ login__input_error: v$.reg.name.$error === true }"
                id="regName"
                v-model="state.reg.name"
                @blur="v$.reg.name.$touch"
              />
            </div>
          </div>
          <div class="reg__group form__group">
            <div class="form__input-group">
              <i
                class="fas fa-envelope input-icon"
                :class="{ 'input-icon_error': v$.reg.email.$error === true }"
              ></i>
              <input
                type="text"
                placeholder="E-mail"
                class="form__input-def reg-input input-email"
                :class="{ login__input_error: v$.reg.email.$error === true }"
                id="regMail"
                v-model="state.reg.email"
                @blur="v$.reg.email.$touch"
              />
            </div>
          </div>
          <div class="reg__group form__group">
            <div class="form__input-group">
              <i
                class="fas fa-lock input-icon"
                :class="{ 'input-icon_error': v$.reg.password.$error === true }"
              ></i>
              <input
                type="password"
                placeholder="Пароль"
                class="form__input-def reg-input input-password"
                :class="{ login__input_error: v$.reg.password.$error === true }"
                id="regPass"
                v-model="state.reg.password"
                @blur="v$.reg.password.$touch"
              />
            </div>
          </div>
          <div class="reg__group form__group">
            <div class="form__input-group">
              <i
                class="fas fa-check input-icon"
                :class="{
                  'input-icon_error': v$.reg.passConfirm.$error === true,
                }"
              >
              </i>
              <input
                type="password"
                placeholder="Подтвердите пароль"
                class="form__input-def reg-input input-password-confirm"
                :class="{
                  login__input_error: v$.reg.passConfirm.$error === true,
                }"
                id="regPassConf"
                v-model="state.reg.passConfirm"
                @blur="v$.reg.passConfirm.$touch"
              />
            </div>
          </div>
          <button
            class="reg__btn form__btn-submit" 
            :disabled="v$.reg.$invalid"
            @click.prevent="regNewUser()"
          >
            Зарегестрироваться
          </button>
        </form>
      </transition>
    </div>
  </div>
</template>

<style>
</style>