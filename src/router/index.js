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
      component: index
    },
    {
      path: '/page/:id',
      name: 'page',
      component: page
    },
    {
      path: '/tags',
      name: 'tags',
      component: tags
    },
    {
      path: '/tags/:name',
      name: 'tags',
      component: tags
    },
    {
      path: '/archive',
      name: 'archive',
      component: archive
    },
    {
      path: '/detail/:name',
      name: 'detail',
      component: detail
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
