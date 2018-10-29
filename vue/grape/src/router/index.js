import Vue from "vue"
import VueRouter from "vue-router"
import App from "../App"


Vue.use(VueRouter)

export default new VueRouter({
  mode: "history",
  base: __dirname,
  routes:[
    {
      path:"/",
      component:App,
      children:[
        {
          path:"",
          component:r=>require.ensure([],()=>r(require("../page/home")),"home"),

          // component:function(r){
          //   return require.ensure([], function(){
          //     return r(require("../page/home")),"home"
          //   })
          // }

        },{
          path:"/answer",
          component:r=>require.ensure([],()=>r(require("../page/answer")),"answer")
        },{
          path:"/score",
          component:r=>require.ensure([],()=>r(require("../page/score")),"score")
        }
      ]
    }
  ]
})