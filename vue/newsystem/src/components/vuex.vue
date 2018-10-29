<template>
    <div>
        <!-- <button @click="$store.commit('add')">+</button>
        {{num}}
        <button @click="$store.commit('less')">-</button> -->
        <!-- <button @click="add">+</button>
        {{num}}
        <button @click="less">-</button> -->

        <!-- <button @click="add">+</button>
        {{count }}
        <button @click="less">-</button> -->

        <button @click="addAction">+</button>
        {{count }}
        <button @click="lessAction">-</button>
    </div>
</template>

<script>
import store from "../store"
import {mapState,mapMutations,mapGetters,mapActions} from "vuex"
export default {
    // computed:{      //计算属性  setter  getter
    //     num(){
    //         return store.state.num
    //     }
    // }

    // computed:{
    //     num(){
    //         return this.$store.state.num
    //     }
    // }

    // computed:mapState({
    //     // num:state=>state.num
    //     num(state){
    //         return state.num
    //     }
    // })

    // computed:mapState(["num"]),

    // methods:{
    //     ...mapMutations(["add","less"]),       //  ...扩展运算符
        
    // },

    methods:mapActions(["addAction","lessAction"]),

    computed:{
        // count(state){
        //     return state.count
        // }
        ...mapGetters(["count"])
    }
    // computed:mapGetters(["count"])

}
</script>

<style>

</style>
