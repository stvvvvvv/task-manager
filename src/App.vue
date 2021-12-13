<script setup>
import Sidebar from './components/Sidebar.vue'
import Topbar from './components/Topbar.vue'
// import { storeToRefs } from 'pinia'
// import { userAuthStore } from '../src/store/userAuth'
// const mainStore = userAuthStore()
// const { user } = storeToRefs(mainStore)

</script>

<template>
<main class="main">
  <Topbar/>
  <div class="main__wrapper">
    <Sidebar/>
    <router-view></router-view>
  </div>
</main>
</template>

<style lang="scss">
section {
  padding-top: 75px;
  height: 100vh;
}
</style>
