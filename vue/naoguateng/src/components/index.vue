<template>
    <div class="container">
        <div class="content">
            <div class="icon">
                <div class="title"></div>
                <div class="firstWeek">
                   <span>第一周</span>
                </div>
                <router-link to="/answer">
                    <div class="button"></div>
                </router-link>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.container{
    width: 100%;
    height: 100%;
}
.content{
    background: url("../assets/images/1-1.jpg") no-repeat;
    width: 100%;
    height: 100%;
    background-size: cover;
}
.content .icon{
    position: relative;
    width: 100%;
    height: 100%;
}
.content .icon .title{
    background: url("../assets/images/1-2.png");
    position: absolute;
    width: 526px;
    height: 465px;
    margin: auto;
    top: -360px;
    left: 0;
    right: 0;
    bottom: 0;
}
.content .icon .firstWeek{
    background: url("../assets/images/WechatIMG2.png");
    position: absolute;
    width: 148px;
    height: 296px;
    margin: auto;
    top: -70px;
    right: 60px;
}
.content .icon .firstWeek span{
    position: absolute;
    bottom: 40px;
    right: 30px;
    font-size: 26px;
    color: rgb(175, 96, 32);
}
.content .icon .button{
    background: url("../assets/images/1-4.png");
    position: absolute;
    width: 173px;
    height: 84px;
    margin: auto;
    top: 300px;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>
