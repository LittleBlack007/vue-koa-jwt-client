import Router from 'vue-router';
import Vue from 'vue';
Vue.use(Router);


const routes =  [
  {
    path: '/',
    name: '主页',
    component: () => import('../pages/home')
  },
  {
    path: '/login',
    name: '登录',
    component: () => import('../pages/login')
  },
]

const router = new Router({
  routes
})

export default router;