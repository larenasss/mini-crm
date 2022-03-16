<template>
  <span :class="['badge', className]">{{ text }}</span>
</template>

<script>
import { ref, watch } from 'vue';
import { useStore } from 'vuex';

export default {
  props: {
    type: String,
    validator(value) {
      return ['active', 'done', 'pending', 'cancelled'].includes(value);
    }
  },
  setup(props) {
    if (!props.type) return;
    const store = useStore();
    const stateStatus = store.getters.getStateStatus;

    const className = ref(stateStatus[props.type].className);
    const text = ref(stateStatus[props.type].text);

    watch(props, val => {
      className.value = stateStatus[val.type].className;
      text.value = stateStatus[val.type].text;
    });

    return {
      className,
      text
    };
  }
};
</script>
