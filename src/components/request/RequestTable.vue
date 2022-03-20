<template>
  <h4 v-if="!requests.length" class="text-center">Заявок пока нет</h4>
  <table v-else class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>ФИО</th>
        <th>Телефон</th>
        <th>Сумма</th>
        <th>Статус</th>
        <th>Действие</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(request, idx) in requests" :key="request.id">
        <td> {{ idx + 1 }} </td>
        <td> {{ request.fio }} </td>
        <td> {{ request.phone }} </td>
        <td> {{ currencyFormat(request.amount) }} </td>
        <td>
          <app-status :type="request.status"></app-status>
        </td>
        <td>
          <router-link
            v-slot="{navigate}"
            custom
            :to="{name: 'Request', params:{ id: request.id }}"
          >
            <button class="btn" @click="navigate">Открыть</button>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import AppStatus from '@/components/ui/AppStatus';
import { currency } from '@/utils/currency-formater';
export default {
  props: ['requests'],
  setup() {
    return {
      currencyFormat: currency('re-Ru', {currency: 'RUB', style: 'currency'})
    };
  },
  components: { AppStatus }
};
</script>