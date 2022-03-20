<template>
  <app-loader v-if="loading"></app-loader>
  <app-page title="Заявка" :back="true" v-else-if="request">
    <p>
      <strong>Имя владельца</strong>: {{request.fio}}
    </p>
    <p>
      <strong>Телефон</strong>: {{request.phone}}
    </p>
    <p>
      <strong>Сумма</strong>: {{currencyFormat(request.amount)}}
    </p>
    <p>
      <strong>Статус</strong>: <app-status :type="request.status"></app-status>
    </p>
  </app-page>
  <h3 v-else class="text-center text-white">
    Заявки с ID = {{ id }} нет
  </h3>
</template>

<script>
import AppPage from '@/components/ui/AppPage';
import AppLoader from '@/components/ui/AppLoader';
import AppStatus from '@/components/ui/AppStatus';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';

import { currency } from '@/utils/currency-formater';

export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    const loading = ref(true);
    const request = ref({});
    const id = route.params.id;

    onMounted(async () => {
      loading.value = true;
      request.value = await store.dispatch('request/loadById', id);
      loading.value = false;
    });

    return {
      loading,
      request,
      id,
      currencyFormat: currency('re-Ru', {currency: 'RUB', style: 'currency'})
    };
  },
  components: { AppPage, AppLoader, AppStatus }
};
</script>