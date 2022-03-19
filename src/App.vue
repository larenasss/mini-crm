<template>
  <component :is="layoutName + '-layout'" v-if="layoutName"></component>
</template>

<script>
import MainLayout from '@/layout/MainLayout.vue';
import AuthLayout from '@/layout/AuthLayout.vue';

import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const layoutName = computed(() => route.meta.layout);

    return {
      layoutName
    };
  },
  components: {
    MainLayout,
    AuthLayout
  }
};
</script>

<style>
</style>
