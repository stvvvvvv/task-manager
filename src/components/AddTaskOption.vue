<script setup>
const props = defineProps({
  category: String
})

</script>

<template>
  <option :value="category"> {{ category }} </option>
</template>