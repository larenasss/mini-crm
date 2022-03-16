import { createRouter, createWebHistory } from 'vue-router';

import New from '../views/NewTask.vue';
import Task from '../views/TaskItem.vue';
import Tasks from '../views/TasksView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/tasks',
      component: Tasks,
      alias: '/'
    },
    {
      path: '/new',
      component: New
    },
    {
      path: '/task/:id',
      component: Task,
      props: true
    },
    {
      path: '/:notFound(.*)',
      redirect: '/'
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
});

export default router;
