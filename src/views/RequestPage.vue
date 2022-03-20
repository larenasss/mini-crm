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

    <div class="form-control">
      <select id="status" v-model="status">
        <option disabled selected>Выберите статус</option>
        <option value="done">Завершен</option>
        <option value="cancelled">Отменен</option>
        <option value="active">Активен</option>
        <option value="pending">Выполняется</option>
      </select>
    </div>

    <button class="btn danger" @click="remove">Удалить</button>
    <button class="btn" v-if="hasChanges" @click="update">Обновить</button>
  </app-page>
  <h3 v-else class="text-center text-white">
    Заявки с ID = {{ id }} нет
  </h3>
</template>

<script>
import AppPage from '@/components/ui/AppPage';
import AppLoader from '@/components/ui/AppLoader';
import AppStatus from '@/components/ui/AppStatus';
import { useRoute, useRouter } from 'vue-router';
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

import { currency } from '@/utils/currency-formater';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const loading = ref(true);
    const request = ref({});
    const id = route.params.id;
    const status = ref();

    onMounted(async () => {
      loading.value = true;
      request.value = await store.dispatch('request/loadById', id);
      status.value = request.value?.status;
      loading.value = false;
    });

    const hasChanges = computed(() => request.value.status != status.value);

    const remove = async () => {
      await store.dispatch('request/remove', id);
      router.push('/');
    };

    const update = async () => {
      const data = { ...request.value, status: status.value, id };
      await store.dispatch('request/update', data);
      request.value.status = status.value;
    };

    return {
      loading,
      request,
      id,
      status,
      hasChanges,
      remove,
      update,
      currencyFormat: currency('re-Ru', {currency: 'RUB', style: 'currency'})
    };
  },
  components: { AppPage, AppLoader, AppStatus }
};
</script>