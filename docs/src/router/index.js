import Vue from 'vue'
import Router from 'vue-router'
import Pages from '@/components/Pages'

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
    }
  ]
})

router.afterEach(route => {
  if (route.meta) {
    document.title = `${route.meta.name} | bas`
  }
})

export default router
