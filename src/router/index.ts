import { createRouter, createMemoryHistory } from 'vue-router'
import HomeView from '@/views/home/_index.vue'

const base = (path: string) => `neo-portfolio/${path}`

const router = createRouter({
  history: createMemoryHistory(),
  linkActiveClass: 'active-link',
  routes: [
    {
      path: base('/'),
      name: 'home',
      component: HomeView
    },
    {
      path: base('/projetos'),
      name: 'projects',
      component: () => import('@/views/projects/_index.vue')
    },
    {
      path: base('/experiencias'),
      name: 'experiences',
      component: () => import('@/views/experiences/_index.vue')
    },
    {
      path: base('/curriculo'),
      name: 'curriculum',
      component: () => import('@/views/curriculum/_index.vue')
    }
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
