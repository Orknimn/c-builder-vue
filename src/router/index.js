import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BuilderView from '../views/BuilderView.vue'
import BackgroundView from '../views/BackgroundView.vue'
import StatsRoller from '../views/StatsRoller.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/builder',
    name: 'builder',
    component: BuilderView
  },
  {
    path: '/background',
    name: 'background',
    component: BackgroundView
  },
  {
    path: '/stat-roller',
    name: 'roller',
    component: StatsRoller
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
