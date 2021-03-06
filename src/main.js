// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
window.$=require('jquery')
window.JQuery=require('jquery')
import Vue from 'vue'
import App from './App'

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
import Promise from "promise-polyfill";
import {HasError, AlertError } from 'vform'
import Notifications from 'vue-notification' 
Vue.use(Notifications)
window.backend_endpoint='https://administration.samktravelandtour.com/'
 
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

var VueTruncate = require('vue-truncate-filter')
Vue.use(VueTruncate)
// To add to window
if (!window.Promise) {
  window.Promise = Promise;
}
/*http://localhost:8000/*/
window.BACKEND_ENDPOINT='https://administration.samktravelandtour.com/'
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
