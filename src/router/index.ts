import { createRouter, createMemoryHistory, useRoute } from 'vue-router'
import HomeView from '@/views/home/_index.vue'
const route = useRoute()

const router = createRouter({
  history: createMemoryHistory(`${route?.fullPath || '/'}`),
  linkActiveClass: 'active-link',
  routes: [
    {
      path: `${route?.fullPath || '/'}`,
      name: 'home',
      component: HomeView
    },
    {
      path: `${route?.fullPath || '/'}projetos`,
      name: 'projects',
      component: () => import('@/views/projects/_index.vue')
    },
    {
      path: `${route?.fullPath || '/'}experiencias`,
      name: 'experiences',
      component: () => import('@/views/experiences/_index.vue')
    },
    {
      path: `${route?.fullPath || '/'}curriculo`,
      name: 'curriculum',
      component: () => import('@/views/curriculum/_index.vue')
    }
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
