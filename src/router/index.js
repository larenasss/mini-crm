import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';
import Home from '@/views/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('../views/HelpPage.vue'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/AuthPage.vue'),
    meta: {
      layout: 'auth',
      auth: false
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const requiredAuth = to.meta.auth;
  const isAuth = store.getters['auth/isAuthenticated'];

  console.log(isAuth);

  if (requiredAuth && isAuth) {
    next();
  } else if (requiredAuth && !isAuth) {
    next('/auth?message=auth');
  } else {
    next();
  }
});

export default router;
