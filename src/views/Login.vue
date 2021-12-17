<script setup>
</script>

<template>
  <div class="login">
    <div class="login__nav">
      <span class="login__nav-log">Войти в аккаунт</span>
      <span class="login__nav-reg">Создать аккаунт</span>
    </div>
    <div class="form__container">
      <form action="" class="login__form form">
        <h2 class="form__header">Вход</h2>
        <div class="login__group form__group">
          <label for="loginEmail" class="login__label">E-mail</label>
          <input type="email" class="login__input" id="loginEmail">
        </div>
        <div class="login__group form__group">
          <label for="loginPassword" class="login__label">Пароль</label>
          <input type="password" class="login__input" id="loginPassword">
        </div>
        <button class="form__btn-submit login__btn">Войти</button>
        <p class="form__note-end">Забыли пароль? <router-link to="/login/reminder">Востановить</router-link></p>
      </form>
    </div>
    <div class="form__container" v-if="false">
      <form action="" class="reg__form form">
        <h2 class="form__header">Регистрация</h2>
        <div class="reg__group form__group">
          <label for="regName" class="form__label-def">Ваше имя</label>
          <input type="text" class="form__input-def" id="regName">
        </div>
        <div class="reg__group form__group">
          <label for="regMail" class="form__label-def">E-mail</label>
          <input type="text" class="form__input-def" id="regMail">
        </div>
        <div class="reg__group form__group">
          <label for="regPass" class="form__label-def">Пароль</label>
          <input type="text" class="form__input-def" id="regPass">
        </div>
        <div class="reg__group form__group">
          <label for="regPassConf" class="form__label-def">Повторите пароль</label>
          <input type="text" class="form__input-def" id="regPassConf">
        </div>
        <button class="reg__btn form__btn-submit">Зарегестрироваться</button>
      </form>
    </div>
  </div>
</template>

<style>
</style>