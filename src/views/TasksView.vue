<template>
  <div>
    <div class="tasks-header">
      <h3 class="text-white">Всего действующих задач: {{ taskCount }}</h3>
      <div class="tasks-header__select">
        <strong class="text-white">Cортировка: </strong>
        <select
          class="form-control select-css"
          @change="onSelectedSort"
          ref="selectSort"
        >
          <option
            v-for="(item, key) in stateStore"
            :key="item.className"
            :data-obj-key="key"
          >
            {{ item.text }}
          </option>
        </select>
      </div>
    </div>
    <div class="card" v-for="task in tasks" :key="task.id">
      <h2 class="card-title">
        {{ task.title }}
        <AppStatus :type="task.status" />
      </h2>
      <p>
        <strong>
          <small>
            {{ task.deadline }}
          </small>
        </strong>
      </p>
      <button class="btn primary" @click="showTask(task.id)">Посмотреть</button>
    </div>
    <h1 v-if="!tasks.length" class="text-white center">Задач пока нет</h1>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import Status from '../models/status';

import AppStatus from '../components/AppStatus';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const tasks = ref(store.getters.getAllTasks);
    const stateStore = store.getters.getStateStatus;
    stateStore.all = new Status('_', 'Все');
    const taskCount = computed(() => store.getters.getCountActiveTasks);
    const selectSort = ref(null);

    const showTask = (id) => router.push(`/task/${id}`);

    function onSelectedSort() {
      const select = selectSort.value;
      const currentOption = select[select.selectedIndex];
      const sortValue = currentOption.getAttribute('data-obj-key');
      if (sortValue === 'all') {
        tasks.value = store.getters.getAllTasks;
      } else {
        tasks.value = store.getters.getAllTaskByStatus(sortValue);
      }
    }

    return {
      tasks,
      taskCount,
      showTask,
      stateStore,
      onSelectedSort,
      selectSort
    };
  },
  components: { AppStatus }
};
</script>

<style lang="scss" scoped>
.tasks-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__select {
    display: flex;
    align-items: center;

    & strong {
      margin-right: 10px;
    }
  }
}
</style>
