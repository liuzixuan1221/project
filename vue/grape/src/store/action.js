export default{

    /**
     * 为什么id不需要放在大括号里面?
     * vuex es6 {}  解构  为什么能够解构？    因为此字段存在于vuex中
     */
    // funUse({commit,state},arr,chengji){
    //     commit('fun',arr,chengji)
    // },
    addNum({commit,state},id){
        commit('remberId',id)
        //什么情况下应该执行addItemNum?
        //
        if(state.itemNum<state.itemDetail.length){
            commit("addItemNum",1)
        }
    },
    startFun({commit}){
        commit('clock')
    },
    endFun({commit}){
        commit('stopClock')
    }
}