<script setup>
import { storeToRefs } from 'pinia'
import { PopupStore } from '../store/popupStore'

const popupStore = PopupStore()
const { popupMsg, popupImg } = storeToRefs(popupStore)

</script>

<template>
  <div class="popup">
    <div class="popup-container">
      <div class="popup__img-container">
        <img
          class="popup__img"
          src="../assets/icons/check.svg"
          alt="Успешно"
          v-if="popupStore.popupImg === true"
        />
        <img
          class="popup__img"
          src="../assets/icons/cross.svg"
          alt="Ошибка"
          v-else
        />
      </div>
      <div class="popup__msg">
        <p>{{ popupStore.popupMsg }}</p>
      </div>
    </div>
  </div>
</template>