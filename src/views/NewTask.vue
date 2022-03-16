<template>
  <form class="card" @submit.prevent="addNewTask">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="task.title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="deadline" v-model="task.deadline">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="task.description"></textarea>
    </div>

    <button class="btn primary" type="submit" :disabled="!isValid">Создать</button>
  </form>
</template>

<script>
import { reactive, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

import Task from '../models/task';

export default {
  setup() {
    const task = reactive(new Task());

    const isValid = computed(() => task.title && task.description);

    const router = useRouter();
    const store = useStore();

    const addNewTask = () => {
      if (new Date(task.deadline) < new Date()) {
        task.status = 'cancelled';
      }

      store.commit('addNewTask', task);
      router.push('/');
    };

    return {
      addNewTask,
      task,
      isValid
    };
  }
};
</script>
