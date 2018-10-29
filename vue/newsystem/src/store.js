/**
 * vuex 是什么？
 * vuex是一种数据状态管理模式
 * 应用场景？
 * 管理vue中的数据
 * 
 * vuex中的方法
 * state
 * mutation
 * getters
 * actions
 * module
 */

import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);
const state = {
    num: 1,
    age: 12,
    username: "3434",
    count: 43
}
// const mutations = {
//     add(state) {
//         state.num++
//     },
//     less(state) {
//         state.num--
//     }
// }

const mutations = {
    add(state) {
        state.count++
    },
    less(state) {
        state.count--
    }
}

const getters = {    //  计算属性
    count(state){
        return state.count
    }
}
const actions = {   //处理分发事件
    addAction({commit}){        //{xxx} ES6解构
        commit("add")
    },
    lessAction(cntext){       //ES6未解构
        cntext.commit("less")
    }
}
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})