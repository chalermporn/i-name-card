import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  linkExactActiveClass: 'active',
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'admin',
      component: () => import('@/layouts/MainLayout.vue'),
      children: [
        {
          path: '',
          name: 'DashboardView',
          component: () => import('@/views/DashboardView.vue'),
          meta: {
            screen: 'IndexView',
            hasPermission: '',
          },
        },
        {
          path: '/team',
          name: 'TeamView',
          component: () => import('@/views/TeamView.vue'),
          meta: {
            screen: 'IndexView',
            hasPermission: '',
          },
        },
        {
          path: '/appearance',
          name: 'AppearanceView',
          component: () => import('@/views/AppearanceView.vue'),
          meta: {
            screen: 'IndexView',
            hasPermission: '',
          },
        },
        {
          path: '/setting',
          name: 'SettingView',
          component: () => import('@/views/SettingView.vue'),
          meta: {
            screen: 'IndexView',
            hasPermission: '',
          },
        },
        {
          path: '/:pathMatch(.*)*',
          name: 'NotFoundView',
          component: () => import('@/views/NotFoundView.vue'),
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
