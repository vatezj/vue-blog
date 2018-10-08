import Vue from 'vue'
import Router from 'vue-router'
import container from '@/pages/container'
import tags from '@/pages/tags'
import archive from '@/pages/archive'
import detail from '@/pages/detail'
import about from '@/pages/about'
import page from '@/pages/page'
import photo from '@/pages/photo'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      component: container,
      children: [
        {
          path: '/',
          component: () => import('@/pages/index'),
          name: 'index',

        },
        {
          path: '/page/:id',
          name: 'page',
          component: page,
          // meta: {
          //   keepAlive: true // 需要被缓存
          // }
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
        },
      ]
    },
    // {
    //   path: '/',
    //   name: 'index',
    //   component: index,
    //   meta: {
    //     keepAlive: true // 需要被缓存
    //   }
    // },

    {
      path: '/photo',
      name: 'photo',
      component: photo
    }
  ]
})
