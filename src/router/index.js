import Vue from 'vue'
import Router from 'vue-router'
import singerlist from '@/components/singerlist'
import singerDetail from '@/components/singerDetail'
import singerAlbum from '@/components/singerAlbum'
import albumDetail from '@/components/albumDetail'
import allAlbum from '@/components/allAlbum'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/singerlist',
      name: 'singerlist',
      component: singerlist
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
    }
  ]
})
