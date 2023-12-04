import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import Login from '../views/Login.vue'
import Registrazione from '../views/Registrazione.vue'

const routes = [
  {
    path: '/',
    component: Homepage
  },
  {
    path: '/login',
    component: function () {
      return import('../views/Login.vue')
    }
  },
  {
    path: '/registrazione',
    component: function () {
      return import('../views/Registrazione.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
