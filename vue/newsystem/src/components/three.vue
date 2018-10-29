<template>
    <div>
        three
        <!-- 命名式路由  动态路由跳转  $route.push() -->
        <router-link :to="{name:'twotwo',params:{id:2}}">跳转</router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>
