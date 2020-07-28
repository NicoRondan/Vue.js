import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '@/views/Contact'
import User from '@/views/User'
import Login from '@/views/Login'
import Signup from '@/views/Signup'
import Products from '@/views/products/Index.vue'
import Detail from '@/views/products/Detail'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    //Ingresamos un parametro
    path: '/user/:id',
    name: 'User',
    component: User
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/register',
    redirect: '/signup'
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/product-detail/:id',
    name: 'Product',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
