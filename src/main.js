// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import ElementUI from 'element-ui';
import Container from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import axios from 'axios'
import '@/assets/icon/iconfont.css'

import './axios.js'


Vue.prototype.$axios=axios

Vue.use(ElementUI)
Vue.use(Container)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: { App },
  template: '<App/>'
})
