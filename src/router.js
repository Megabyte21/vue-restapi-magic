/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'

const routes = [
  { path: '/vue-restapi-magic/', name: 'Home', component: HomePage },
  {
    path: '/cards/:_id',
    name: 'Facts',
    component: () => import('@/views/CharacterDetails.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
