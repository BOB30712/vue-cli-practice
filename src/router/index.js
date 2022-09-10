import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Order',
    name: 'Order',
    component: () => import('../views/Order.vue')
  },
  {
    path: '/UserBoard',
    name: 'UserBoard',
    component: () => import('../views/UserBoard.vue'),
    children: [
      {
        path: 'UserCart',
        component: () => import('../views/UserCart.vue')
      },
      {
        path: 'UserProduct/:productId',
        component: () => import('../views/UserProduct.vue')
      },
      {
        path: 'SendOrder',
        component: () => import('../views/SendOrder.vue')
      },
      {
        path: 'UserCheckOut/:UserCartId',
        component: () => import('../views/UserCheckOut.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LogIn.vue')
  },
  {
    path: '/dashborder',
    name: 'dashborder',
    component: () => import('../views/DashBorder.vue'),
    children: [
      {
        path: 'productlist',
        component: () => import('../views/ProductList.vue')
      },
      {
        path: 'Coupons',
        component: () => import('../views/Coupons.vue')
      },
      {
        path: 'Order',
        component: () => import('../views/Order.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active text-white bg-dark'
})

export default router
