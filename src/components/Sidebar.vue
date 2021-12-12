<script setup>
</script>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item"><a href="#">Главная</a></li>
      <li class="nav__item">
        <a href="#">Задачи</a>
        <ul>
          <li><a href="" class="nav__link">Первая</a></li>
          <li><a href="" class="nav__link">Вторая</a></li>
          <li><a href="" class="nav__link">Третья</a></li>
        </ul>
      </li>
      <li class="nav__item"><a href="#">Цели</a></li>
      
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
  .nav {
    background-color: #000;
    position: fixed;
    width: 200px;
    height: 100vh;
    &__list {

    }
  }
</style>