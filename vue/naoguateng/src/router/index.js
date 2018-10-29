import Vue from 'vue'
import Router from 'vue-router'
import Indexs from '@/components/index'
import Answer from '@/components/answer'
import Score from '@/components/Score'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/index',
      component:Indexs
    },{
      path: '/answer',
      component:Answer
    },{
      path: '/score',
      component:Score
    }
  ]
})
