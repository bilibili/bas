import Vue from 'vue'
import ElementUI from 'element-ui'
import VueScrollTo from 'vue-scrollto'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

import MainHeader from './components/Header'
import DemoBlock from './components/DemoBlock'
import Guide from './pages/guide.md'
import Docs from './pages/docs.md'
import Pages from './components/Pages'
import PropTable from './components/PropTable'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueScrollTo, {
  container: '.container-scroll .el-scrollbar__wrap',
  duration: 500,
  easing: 'ease',
  offset: -20,
  cancelable: true,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

Vue.component('main-header', MainHeader)
Vue.component('demo-block', DemoBlock)
Vue.component('guide', Guide)
Vue.component('docs', Docs)
Vue.component('pages', Pages)
Vue.component('prop-table', PropTable)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
