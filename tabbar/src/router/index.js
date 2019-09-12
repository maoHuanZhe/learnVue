import Vue from 'vue'
import Router from 'vue-router'

import category from '../views/category/category'
import home from '../views/home/home'
import profile from '../views/profile/profile'
import shopcart from '../views/shopcart/shopcart'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/shopcart',
    component: shopcart
  },
]

export default new Router({
  routes,
  mode: 'history'
})
