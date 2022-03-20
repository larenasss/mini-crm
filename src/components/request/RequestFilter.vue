<template>
  <div class="filter">
    <div class="form-control">
      <input type="text" placeholder="Начните писать имя" v-model="name">
    </div>
    <div class="form-control">
      <app-select-status v-model="status"></app-select-status>
    </div>
    <button class="btn warning" v-if="isActive" @click="reset">Очистить</button>
  </div>
</template>

<script>
import AppSelectStatus from '@/components/ui/AppSelectStatus.vue';
import { computed, ref, watch } from 'vue';
export default {
  emits: ['update:modelValue'],
  props: ['modelValue'],
  setup(_, { emit }) {
    const name = ref();
    const status = ref();

    watch([name, status], values => {
      emit('update:modelValue', {
        name: values[0],
        status: values[1]
      });
    });

    const isActive = computed(() => name.value || status.value);

    const reset = () => {
      name.value = '';
      status.value = 'default';
    };

    return {
      name,
      status,
      isActive,
      reset
    };
  },
  components: { AppSelectStatus }
};
</script>

<style>

</style>