import Vue from 'vue'
import Router from 'vue-router'
import Pages from '@/components/Pages'
import Playground from '@/components/Playground'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/docs'
    },
    {
      path: '/guide',
      component: Pages,
      props: {
        type: 'guide'
      },
      meta: {
        name: '指南'
      }
    },
    {
      path: '/docs',
      component: Pages,
      props: {
        type: 'docs'
      },
      meta: {
        name: '文档'
      }
    },
    {
      path: '/playground',
      component: Playground,
      meta: {
        name: '试验室'
      }
    }
  ]
})

router.afterEach(route => {
  if (route.meta) {
    document.title = `${route.meta.name} | bas`
  }
})

export default router
