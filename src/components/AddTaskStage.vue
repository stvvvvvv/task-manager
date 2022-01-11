<script setup>
const props = defineProps({
  stage: String,
  index: Number
})

const emits = defineEmits([
  'deliteStage'
])
</script>

<template>
  <span class="add-task__form__stage">
   {{ stage }} <i class="fas fa-times" @click="emits('deliteStage', index)"></i>
  </span>
</template>