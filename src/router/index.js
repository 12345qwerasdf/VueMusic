import Vue from 'vue'
import Router from 'vue-router'

import singerlist from '@/components/singerlist'
import singerDetail from '@/components/singerDetail'
import singerAlbum from '@/components/singerAlbum'
import albumDetail from '@/components/albumDetail'
import allAlbum from '@/components/allAlbum'

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
<<<<<<< HEAD
      path: '/',
      name: 'index',
      component: index
=======
      path: '/singerlist',
      name: 'singerlist',
      component: singerlist
>>>>>>> 5504df7c010218784ae82701d223c297c7f17887
    },
    {
      path: '/singerDetail',
      name: 'singerDetail',
      component: singerDetail
    },
    {
      path: '/singerAlbum',
      name: 'singerAlbum',
      component: singerAlbum
    },
    {
      path: '/albumDetail',
      name: 'albumDetail',
      component: albumDetail
    },
    {
      path: '/allAlbum',
      name: 'allAlbum',
      component: allAlbum
		},
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
<<<<<<< HEAD
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
=======

>>>>>>> 5504df7c010218784ae82701d223c297c7f17887
    }
    
  ]
})
