import Vue from 'vue'
import Router from 'vue-router'

import singer from '@/components/singer'
import list from '@/components/list'
import index from '@/components/index'
import mv from '@/components/mv'
Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'singer',
      component: singer
    },
    {
      path: '/singer',
      name: 'singer',
      component: singer
    }
    ,
    {
      path: '/list',
      name: 'list',
      component: list
    }
    ,
    {
      path: '/index',
      name: 'index',
      component: index
    }
    ,
    {
      path: '/mv',
      name: 'mv',
      component: mv
    }
  ]
})
