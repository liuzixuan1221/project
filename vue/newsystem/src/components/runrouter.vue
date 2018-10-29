<template>
    <div>
        {{$route.params.id}}
    </div>
</template>

<script>
export default {
    data(){
        return{
            id:""
        }
    },
    mounted(){
        this.id = this.$route.params.id
    },
    watch:{ //监听
        "$route"(to,from){
            console.log(arguments)
        }
    }
}
</script>
<style>

</style>
