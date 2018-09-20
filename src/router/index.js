import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import tags from '@/pages/tags'
import archive from '@/pages/archive'
import detail from '@/pages/detail'
import about from '@/pages/about'
import page from '@/pages/page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/page/:id',
      name: 'page',
      component: page,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/tags',
      name: 'tags',
      component: tags,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/tags/:name',
      name: 'tags',
      component: tags,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/archive',
      name: 'archive',
      component: archive,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/detail/:name',
      name: 'detail',
      component: detail
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta: {
        keepAlive: true // 需要被缓存
      }
    }
  ]
})
