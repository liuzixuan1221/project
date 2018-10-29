import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login'
import Home from '../components/home'
import Info from '../components/info'
import Register from '../components/register'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      component:Login
    },
    {
      path:'/home',
      component:Home,
      meta:{
        requireAuth:true
      }
    },
    {
      path:'/info',
      component:Info
    },
    {
      path:'/register',
      component:Register
    }
  ]
})
