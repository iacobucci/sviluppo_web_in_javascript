import { createRouter, createWebHistory } from 'vue-router'
import HomepageView from '../views/HomepageView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomepageView
  }, // questo componente viene caricato subito
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import('../views/AboutView.vue')
    } // questa funzione fa il lazy loading del componente
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import('../views/Login.vue')
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
