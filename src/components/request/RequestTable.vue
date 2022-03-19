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
      <tr v-for="request in requests" :key="request.id">
        <td> {{ request }} </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['requests'],
};
</script>