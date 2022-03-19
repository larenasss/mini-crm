<template>
  <app-page title="Список заявок">
    <template #header>
      <button class="btn primary" @click="modal = true">Создать</button>
    </template>
    <request-table :requests="[]"></request-table>

    <teleport to="body">
      <app-modal v-if="modal" title="Создать заявку" @close="modal = false">
        <request-modal @created="modal = false"></request-modal>
      </app-modal>
    </teleport>
  </app-page>
</template>

<script>
import AppPage from '../components/ui/AppPage';
import RequestTable from '../components/request/RequestTable';
import AppModal from '../components/ui/AppModal';
import RequestModal from '../components/request/RequestModal';

import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
import store from '@/store';
export default {
  setup() {
    const modal = ref(false);

    const requests = computed(() => store.getters['requests']);

    return {
      modal,
      requests
    };
  },
  components: { AppPage, RequestTable, AppModal, RequestModal }
};
</script>
