import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/origin',
    name: 'origin',
    component: () => import('@/views/OriginView.vue'),
  },
  {
    path: '/seven-sages',
    name: 'seven-sages',
    component: () => import('@/views/SevenSagesView.vue'),
  },
  {
    path: '/thirteen-clans',
    name: 'thirteen-clans',
    component: () => import('@/views/ThirteenClansView.vue'),
  },
  {
    path: '/poem',
    name: 'poem',
    component: () => import('@/views/PoemView.vue'),
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
