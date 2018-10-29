<template>
    <div>compar{{haha}}{{$route.params.haha}}</div>
</template>
<script>
export default {
    props:["haha"],
    // 组件内部守卫
    beforeRouteEnter (to,from,next){
        console.log("beforeRouteEnter");
        next();
    },
    beforeRouteUpdate (to,from,next){
        console.log("beforeRouteUpdate");
    },
    beforeRouteLeave (to,from,next){
        console.log("beforeRouteLeave");
    }
}
</script>
<style>

</style>
