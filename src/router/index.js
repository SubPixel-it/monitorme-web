/* eslint-disable indent */
import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import globals from '@/globals'

// Layouts
import Layout1 from '@/layout/Layout1'

Vue.use(Router)
Vue.use(Meta)

const router = new Router({
  base: '/',
  mode: 'history',
  routes: [{
    path: '/',
    component: Layout1,
    children: [{
      path: '',
      name: 'home',
      component: () => import('@/components/Home')
    }]
  },
  {
    path: '/',
    component: Layout1,
    children: [{
      path: '/error/404',
      name: '404',
      component: () => import('@/components/errors/404')
    },
    {
      path: '*',
      name: '404',
      component: () => import('@/components/errors/404')
    }]
  }]
})

router.afterEach(() => {
  // Scroll to top of the page
  globals().scrollTop(0, 0)
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
