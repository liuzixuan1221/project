<template>
    <div class="container">
        <div class="content">   
            <div class="scoreBox">
                <div class="score">
                    <p>{{score}}</p>
                    <span>{{text}}</span>
                </div>
            </div>
            <div class="share"></div>
            <div class="attention">
                <p>关注葡萄之家，获取答案。</p>
                <div class="erweima">
                    <img src="../assets/images/erweima.gif" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            score:"20分！",
            text:"你说，是不是把知识都还给小学老师了？"
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
    background: url("../assets/images/4-1.jpg") no-repeat;
    width: 100%;
    height: 100%;
    background-size: cover;
    position: relative;
}
.content .scoreBox{
    background: url("../assets/images/4-2.png") no-repeat;
    position: absolute;
    width: 388px;
    height: 364px;
    margin: auto;
    top: -700px;
    left: 0;
    right: 0;
    bottom: 0;
}
.scoreBox .score{
    position: absolute;
    top: 200px;
    left: 40px;
    width: 330px;
    height: 144px;
}
.scoreBox .score p{
    font-size: 55px;
    color: rgb(131, 13, 13);
    font-weight: 600;
    text-shadow: 2px 2px 3px #000;
    text-align: center;
}
.scoreBox .score span{
    display: block;
    font-size: 26px;
    text-align: center;
}
.content .share{
    background: url("../assets/images/4-3.png") no-repeat;
    position: absolute;
    width: 233px;
    height: 96px;
    margin: auto;
    top: -170px;
    left: 0;
    right: 0;
    bottom: 0;
}
.content .attention{
    position: absolute;
    width: 240px;
    height: 280px;
    margin: auto;
    top: 340px;
    left: 0;
    right: 0;
    bottom: 0;
}
.content .attention p{
    font-size: 20px;
}
.content .attention .erweima{
    position: absolute;
    bottom: 0;
    left: 12px;
    width: 90%;
    height: 216px;
}
.content .attention .erweima img{
    width: 100%;
    height: 100%;
}
</style>
