import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'admin',
      component: () => import('@/layouts/MainLayout.vue'),
      children: [
        {
          path: '',
          name: 'AdminView',
          component: () => import('../views/AdminView.vue'),
          meta: {
            screen: 'IndexView',
            hasPermission: '',
          },
        },
        {
          path: '/appearance',
          name: 'AppearanceView',
          component: () => import('../views/AppearanceView.vue'),
          meta: {
            screen: 'IndexView',
            hasPermission: '',
          },
        },
      ],
    },
  ],
})

export default router
