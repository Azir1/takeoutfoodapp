import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { name: 'home', path: '/home', component: () => import('@/pages/home/home') },
    { name: 'detail', path: '/detail', component: () => import('@/pages/detail/detail') },
    { name: 'cart', path: '/cart', component: () => import('@/pages/cart/cart') },
    { name: 'user', path: '/user', component: () => import('@/pages/user/user') },
    { path: '*', redirect: '/detail' }
  ]
})