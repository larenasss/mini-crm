<template>
  <select
    id="status"
    @change="$emit('update:modelValue', $event.target.value)"
    :value="modelValue"
  >
    <option value="default" selected disabled>Выберите статус</option>
    <option value="done">Завершен</option>
    <option value="cancelled">Отменен</option>
    <option value="active">Активен</option>
    <option value="pending">Выполняется</option>
  </select>
</template>

<script>

export default {
  props: {
    modelValue: {
      type: String,
      default: 'default'
    }
  },
  emits: ['update:modelValue'],
  setup() {

  }
};
</script>