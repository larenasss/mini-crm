<template>
  <div v-if="message" :class="['alert', message.type]">
    <p class="alert-title">{{ title }}</p>
    <p>{{ message.value }}</p>
    <span class="alert-close" @click="close">&times;</span>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();
    const message = computed(() => store.state.infoAlerts.message);
    const title = computed(() => message.value ? TITLE_MAP[message.value.type] : null);

    const TITLE_MAP = {
      primary: 'Успешно!',
      danger: 'Ошибка!',
      warning: 'Внимание'
    };

    return {
      message,
      title,
      close: () => {
        store.commit('infoAlerts/clearMessage');
      }
    };
  },
};
</script>