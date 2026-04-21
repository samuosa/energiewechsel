import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LeistungenView from '@/views/LeistungenView.vue'
import UeberMichView from '@/views/UeberMichView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Energiewechsel am Main — Maik Seufert' }
  },
  {
    path: '/leistungen',
    name: 'leistungen',
    component: LeistungenView,
    meta: { title: 'Leistungen — Energiewechsel am Main' }
  },
  {
    path: '/ueber-mich',
    name: 'ueber-mich',
    component: UeberMichView,
    meta: { title: 'Über mich — Energiewechsel am Main' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return new Promise(resolve => {
        setTimeout(() => resolve({ el: to.hash, behavior: 'smooth', top: 90 }), 100)
      })
    }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
