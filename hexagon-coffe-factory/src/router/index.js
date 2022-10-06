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
    path:'/HomePage',
    name:'homepage',
    component: () => import('../views/HomePage.vue')
  },
  {
    path:'/',
    name:'UserBoard',
    component: () => import('../views/UserBoard.vue'),
    children:[
      {
        path:'UserCart',
        component: () => import('../views/UserCart.vue')
      },
      {
        path:'UserCartList',
        component: () => import('../views/UserCartList.vue')
      }
    ]
  },
  {
    path:'/AcompPage',
    name:'acomppage',
    component: () => import('../views/AcompPage.vue'),
    children:[
      {
        path:'AcompPage2',
        components:{
          left:() => import('../views/AcompPage1.vue'),
          right:() => import('../views/AcompPage2.vue')
        } 
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
