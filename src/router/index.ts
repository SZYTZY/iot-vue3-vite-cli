import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue'),
      meta: {
        keepAlive: false,
        noSupport: false
      }
    }
  ]
});
router.beforeEach((to, from, next) => {
  next();
});
export default router;
