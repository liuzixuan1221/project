<template>
    <div class="container">
        <div class="content">   
            <div class="subject">
                <span>{{subject1}}</span>
            </div>
            <div class="problem">
                <p class="title">{{title1}}</p>
                <div class="timuBox">
                    <div class="timu" v-for="(item,index) in answer" :key="index"  @click="active" >
                        <p :class="{ now:isClass }">{{item.bh}}</p>
                        <span>{{item.da}}</span>
                    </div>
                </div>
            </div>
            <div class="next"></div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            subject1:"题目1",
            title1:"题目一",
            answer:[
                {bh:"A",da:"答案aaaa"},
                {bh:"B",da:"正确答案"},
                {bh:"C",da:"答案cccc"},
                {bh:"D",da:"答案dddd"}
            ],
            isClass:false,
            
        }
    },
    methods:{
        active(){
            this.isClass = !this.isClass;
        }
    }
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
    position: relative;
}
.content .subject{
    background: url("../assets/images/WechatIMG2.png");
    position: absolute;
    width: 148px;
    height: 296px;
    margin: auto;
    top: -70px;
    right: 60px;
}
.content .subject span{
    position: absolute;
    bottom: 40px;
    right: 30px;
    font-size: 26px;
    color: rgb(175, 96, 32);
}
.content .problem{
    background: url("../assets/images/2-1.png");
    position: absolute;
    width: 528px;
    height: 466px;
    margin: auto;
    top: -360px;
    left: 0;
    right: 0;
    bottom: 0;
}
.content .problem .title{
    position: absolute;
    color: #fff;
    font-size: 30px;
    left: 120px;
    top: 90px;
}
.content .next{
    background: url("../assets/images/2-2.png");
    position: absolute;
    width: 173px;
    height: 84px;
    margin: auto;
    top: 300px;
    left: 0;
    right: 0;
    bottom: 0;
}
.content .problem .timuBox{
    position: absolute;
    top: 140px;
    left: 120px;
    color: #fff;
    font-size: 30px; 
}
.content .problem .timu{
    margin: 10px 0;
}
.content .problem .timu p{
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 2px #fff solid;
    box-sizing: border-box;
    border-radius: 50%;
    font-size: 22px;
    text-align: center;
    line-height: 30px;
}
.content .problem .timu p.now{
    background: rgb(247, 132, 25);
}
.content .problem .timu span{
    display: inline-block;
}
</style>
