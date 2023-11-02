import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/_index.vue'
const path = window?.location.pathname

const router = createRouter({
  history: createWebHistory(path ?? ''),
  linkActiveClass: 'active-link',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: `/projetos`,
      name: 'projects',
      component: () => import('@/views/projects/_index.vue')
    },
    {
      path: `/experiencias`,
      name: 'experiences',
      component: () => import('@/views/experiences/_index.vue')
    },
    {
      path: `/curriculo`,
      name: 'curriculum',
      component: () => import('@/views/curriculum/_index.vue')
    }
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
