<script setup>
import Sidebar from './components/Sidebar.vue'
// import { storeToRefs } from 'pinia'
// import { userAuthStore } from '../src/store/userAuth'
// const mainStore = userAuthStore()
// const { user } = storeToRefs(mainStore)

</script>

<template>
<main class="main">
  <Sidebar/>
  <router-view></router-view>
</main>
</template>

<style lang="scss">
.main {
  display: flex;
}
.content {
  margin-left: 200px;
}
section {
  height: 100vh;
}
</style>
