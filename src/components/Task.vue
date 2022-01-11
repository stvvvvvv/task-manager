<script setup>
const props = defineProps({
  task: Object,
})

const taskColor = props.task.color
</script>

<template>
  <div class="task">
    <div class="task__topbar">
      <div class="task__category__container">
        <span class="task__category">
          {{ task.category }}
        </span>
      </div>
    </div>
    <div class="task__container">
      <div class="task__header__container">
        <div class="task__header">
          <span class="task__border">{{ task.header }}</span>
        </div>
        <div class="task__start"></div>
      </div>
      <div class="task__deadline">
        <span> {{ task.deadline }}</span>
      </div>
      <div class="task__description">
        <span>{{ task.description }}</span>
      </div>
      <div class="tasks__stages__wrapper">
        <div class="task__stages__header">
          <span class="task__border">Этапы</span>
        </div>
        <div class="task__stages__container">
          <div
            class="task__stages"
            v-for="(stage, index) in task.stages"
            :key="index"
          >
            {{ stage }}
          </div>
        </div>
      </div>
    </div>
    <button class="task__btn">
        Перейти к задаче
      </button>
  </div>
</template>

<style>
.task__topbar {
  background-color: v-bind(taskColor);
}

.task__border {
  border-bottom: 2px solid v-bind(taskColor);
}
</style>