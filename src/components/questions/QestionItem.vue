<template>
  <div class="question">
    <div class="question-title" @click="isOpen = !isOpen">
      {{ question.title }}
    </div>
    <div class="question-text" v-if="isOpen">
      {{ question.text }}
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  props: ['question'],
  setup() {
    return {
      isOpen: ref(false)
    };
  }
};
</script>

<style>

</style>