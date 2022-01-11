<script setup>
import { GetTasksStore } from '../store/getTasks'

import Task from '../components/Task.vue'
import Loading from '../components/Loading.vue'


const getTasksStore = GetTasksStore()

</script>

<template>
<div class="page tasks">
    <h1>Задачи</h1>
    <div class="tasks__container">
      <Task
        v-for="(task, index) in getTasksStore.tasks"
        :key="index"
        :task="task"
      />
    </div>
</div>
</template>