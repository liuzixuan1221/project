// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Axios from 'axios'
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"

Vue.use(ElementUI)
//原型指向     全局都用的到的东西放在这里
Vue.prototype.$http = Axios


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
})
// 全局前置守卫
// 路由判断登录 根据路由配置文件的参数
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) { // 判断该路由是否需要登录权限
    console.log('需要登录');
    if (localStorage.tokenId) { // 判断当前的token是否存在 ； 登录存入的token
      console.log("2")
      next();
    }else {
      next({
        path: '/',
        // query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }else {
    console.log("3")
    next();
  }
});