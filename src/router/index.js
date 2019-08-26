import Vue from 'vue'
import Router from 'vue-router'

import singer from '@/components/singer'
import list from '@/components/list'
import index from '@/components/index'
import mv from '@/components/mv'
import musiclist from '@/components/musiclist'
import login from '@/components/login'
import register from '@/components/register'
import playmusic from '@/components/playmusic'
import playMV from '@/components/playMV'
import danmu from '@/components/danmu'
Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
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
    },
    {
      path: '/musiclist',
      name: 'musiclist',
      component: musiclist
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
     {
      path: '/playmusic',
      name: 'playmusic',
      component: playmusic
    },
    {
      path: '/playMV',
      name: 'playMV',
      component: playMV
    },
    {
      path: '/danmu',
      name: 'danmu',
      component:danmu
    }
  ]
})
