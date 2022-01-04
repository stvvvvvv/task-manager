<script>
</script>

<template>
  <div class="popup">
    <div class="popup-container">
      <div class="popup__img-container">
        <img
          class="popup__img"
          src="../assets/icons/check.svg"
          alt="Успешно"
          v-if="popupData.img === true"
        />
        <img
          class="popup__img"
          src="../assets/icons/cross.svg"
          alt="Ошибка"
          v-else
        />
      </div>
      <div class="popup__msg">
        <p>{{ popupData.msg }}</p>
      </div>
    </div>
  </div>
</template>