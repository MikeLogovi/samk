// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
window.$=require('jquery')
window.JQuery=require('jquery')
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import router from './router'
import vueSmoothScroll from 'vue2-smooth-scroll'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Pusher from 'pusher-js'
import Echo from "laravel-echo"
import axios from 'axios'
import {store} from './store/store'
import VueWow from 'vue-wow'
import mixin from './mixin/mixin'
import {mapState} from 'vuex'
window.BACKEND_ENDPOINT='http://localhost:8000/'
window.axios=axios
window.Echo = new Echo({
  broadcaster: 'pusher',
  key: '3062ab08c9fe06452a5b',
  cluster: 'eu',
  forceTLS: true
});

Vue.use(BootstrapVue)
Vue.use(Viewer)

Vue.use(VueWow)
Vue.use(vueSmoothScroll)
Vue.config.productionTip = false
Vue.use(Vuetify)
window.mapStated=mapState
/* eslint-disable no-new */
Vue.mixin(mixin)
new Vue({
  
  store:store,
  mapState:mapState,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
