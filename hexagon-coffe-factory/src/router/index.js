import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path:'/test',
    name:'test',
    component: () => import('../views/TestView.vue')
  },
  {
    path:'/',
    name:'homepage',
    component: () => import('../views/HomePage.vue')
  },
  {
    path:'/UserBoard',
    name:'UserBoard',
    component: () => import('../views/UserBoard.vue'),
    children:[
      {
        path:'UserCart',
        component: () => import('../views/UserCart.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
