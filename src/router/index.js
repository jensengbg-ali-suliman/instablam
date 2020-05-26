import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ImageFiltering from '../views/ImageFiltering.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/image',
    name: 'ImageFiltering',
    component: ImageFiltering,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
