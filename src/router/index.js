import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Gallery from '@/components/Gallery'
import About from '@/components/About'
Vue.use(Router)

export default new Router({

  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/gallery',
      name:'Gallery',
      component:Gallery
    },
    {
      path:'/about',
      name:'About',
      component:About
    }

  ]
})
