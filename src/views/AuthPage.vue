<template>
  <form class="card" @submit.prevent="onSubmit">
    <h1>Войти в систему</h1>

    <div :class="['form-control', { invalid: eError }]">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" @blur="eBlur">
      <small v-if="eError"> {{ eError }} </small>
    </div>

    <div :class="['form-control', { invalid: pError }]">
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" @blur="pBlur">
      <small v-if="pError"> {{ pError }} </small>
    </div>

    <button type="submit" class="btn primary" :disabled="isSubmitting">Войти</button>
  </form>
</template>

<script>
import { useLoginForm } from '@/use/login-form';
export default {
  setup() {
    return { ...useLoginForm() };
  }
};
</script>