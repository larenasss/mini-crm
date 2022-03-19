<template>
  <div class="navbar">
    <h3>Online Bank</h3>
    <ul class="navbar-menu">
      <li>
        <router-link to="/">Заявки</router-link>
      </li>
      <li>
        <router-link to="/help">Помощь</router-link>
      </li>
      <li>
        <a href="#">Сообщения</a>
      </li>
      <li>
        <a href="#" @click.prevent="logOut">Выход</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
export default {
  setup() {
    const router = useRouter();
    const store = useStore();

    return {
      logOut: () => {
        store.commit('auth/logOut');
        router.push('/auth');
      }
    };
  },
};
</script>