// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
window.$=require('jquery')
window.JQuery=require('jquery')
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import router from './router'
import vueSmoothScroll from 'vue2-smooth-scroll'

import VueWow from 'vue-wow'

Vue.use(VueWow)
Vue.use(vueSmoothScroll)
Vue.config.productionTip = false
Vue.use(Vuetify)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
