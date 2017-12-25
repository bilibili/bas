import Vue from 'vue'
import ElementUI from 'element-ui'
import VueScrollTo from 'vue-scrollto'
import VueClipboards from 'vue-clipboards'

import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

import MainHeader from './components/Header'
import CodeBlock from './components/CodeBlock'
import Guide from './pages/guide.md'
import Docs from './pages/docs.md'
import Pages from './components/Pages'
import Playground from './components/Playground'
import PropTable from './components/PropTable'
import Editor from './components/Editor'

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
Vue.use(VueClipboards)

Vue.component('main-header', MainHeader)
Vue.component('code-block', CodeBlock)
Vue.component('guide', Guide)
Vue.component('docs', Docs)
Vue.component('pages', Pages)
Vue.component('playground', Playground)
Vue.component('prop-table', PropTable)
Vue.component('editor', Editor)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
