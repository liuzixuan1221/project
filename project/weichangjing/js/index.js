var swiper = new Swiper('#swiper', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }
});
var sj = [
    {p:[{x:0,y:30},{x:0,y:0},{x:30,y:0}],color:"#e4306d"},
    {p:[{x:30,y:30},{x:30,y:0},{x:0,y:0}],color:"#05a5de"},
    {p:[{x:0,y:0},{x:0,y:30},{x:30,y:30}],color:"#fef105"},
    {p:[{x:30,y:0},{x:30,y:30},{x:0,y:30}],color:"#29b470"}
];


var aSiJiao = document.getElementsByClassName('siJiao');

for (var i = 0; i < aSiJiao.length; i++) {
    var aSj = aSiJiao[i].getContext("2d");
    aSj.beginPath();
    aSj.moveTo(sj[i].p[0].x,sj[i].p[0].y);
    for(var j=1; j<sj[i].p.length; j++){
        aSj.lineTo(sj[i].p[j].x,sj[i].p[j].y);
    }
    aSj.strokeStyle = sj[i].color;
    aSj.lineWidth = 20;
    aSj.stroke();
}

    //var swiperWrapper = document.getElementsByClassName('swiper-wrapper')[0];

var aSwiperSlide = document.getElementsByClassName('swiper-slide');
window.touchend = function(){
    console.log(1);
    for (var i = 0; i < aSwiperSlide.length; i++) {
        for (var j = 0; j < aSwiperSlide.length; j++) {
            aSwiperSlide[j].style.display = 'none';
        }
        if (aSwiperSlide[i].classList.contains('swiper-slide-active') == true){
            aSwiperSlide[i].style.display = 'block';
        }
    }
};

var oBgm = document.getElementById('bgm');
var oAudio = document.getElementById('audio');

var flag = true;
oBgm.onclick = function(){
    if (flag){
        oBgm.classList.remove("now");
        oAudio.pause();
        flag = false;
    }
    else{
        oBgm.classList.add("now");
        oAudio.play();
        flag = true;
    }
}

