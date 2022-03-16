<template>
  <div class="card" v-if="task">
    <h2>{{ task.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="task.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ task.deadline }}</p>
    <p><strong>Описание</strong>: {{ task.description }}</p>
    <div>
      <button
        class="btn"
        @click="changeStatus(task.id, 'pending')">Взять в работу</button>
      <button
        class="btn primary"
        @click="changeStatus(task.id, 'done')">Завершить</button>
      <button
        class="btn danger"
         @click="changeStatus(task.id, 'cancelled')">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ taskId }}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus';
import { useStore } from 'vuex';

export default {
  props: ['id'],
  setup(props) {
    const store = useStore();

    // eslint-disable-next-line vue/no-setup-props-destructure
    const taskId = props.id;
    const task = store.getters.getTaskById(taskId);

    const changeStatus = (taskId, newStatus) => {
      store.commit('changeTaskStatus', { taskId, newStatus });
    };

    return {
      task,
      taskId,
      changeStatus
    };
  },
  components: { AppStatus }
};
</script>

<style scoped>
</style>
