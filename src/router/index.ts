import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Practice from '../components/Practice.vue'
import p2proute from '../components/SortingCeremony.vue'
import Gryffindor from '../components/Gryffindor.vue'
import Hufflepuff from '../components/Hufflepuff.vue'
import Ravenclaw from '../components/Ravenclaw.vue'
import Slytherin from '../components/Slytherin.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/practice',
    name: 'Practice',
    component: Practice
  },
  {
    path: '/hogwartspage',
    name: 'Hogwartspage',
    component: p2proute
  },
  {
    path: '/gryffindor',
    name: 'Gryffindor',
    component: Gryffindor
  },
  {
    path: '/hufflepuff',
    name: 'Hufflepuff',
    component: Hufflepuff
  },
  {
    path: '/ravenclaw',
    name: 'Ravenclaw',
    component: Ravenclaw
  },
  {
    path: '/slytherin',
    name: 'Slytherin',
    component: Slytherin
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
