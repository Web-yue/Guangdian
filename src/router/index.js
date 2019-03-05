import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['../components/common/Home.vue'], resolve),
    },
    {
      path: '/SlideLeft',
      component: resolve => require(['../components/common/SlideLeft.vue'], resolve),

    },
    {
      path: '/404',
      component: resolve => require(['../components/page/404.vue'], resolve),
      meta: { title: '404' }
    },
    {
      path: '*',
      redirect: '/404' //重定向 指向之前出现过的路由
    }
  ]
})
