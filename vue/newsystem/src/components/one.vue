<template>
    <div>one
        <button @click="link">跳转</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg:"12321"
        }
    },
    methods:{
        link(){
            // 字符串 this.$router.push("/child/two");
            // 对象 this.$router.push({ path: "two"})
            // 命名式 this.$router.push({ name:"twotwo",params:{id:1} })
            // this.$router.push({name:"twotwo",query:{id:1,pass:123}})
            // this.$router.go(-1);
            this.$router.push({ name:"twotwo",params:{id:this.msg} })
        }
    }
}
</script>

<style>

</style>
