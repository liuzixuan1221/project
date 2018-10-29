var topNav = document.getElementsByClassName('topNav')[0];
var headerBox = document.getElementsByClassName('headerBox')[0];
var vivoContainer = document.getElementsByClassName('vivoContainer')[0];
var oAllScreen = vivoContainer.children[0];
var arrScreen = oAllScreen.children;
var screenW, screenH;
var page = 0;


window.onscroll=function(){
    var scrollTop= document.documentElement.scrollTop||document.body.scrollTop;
    if(scrollTop>headerBox.offsetHeight){
        topNav.classList.add('fixed');
    }else{
        topNav.classList.remove('fixed');
    }
};


function resize(){
    // 获取屏幕宽高
    screenW = document.documentElement.clientWidth;
    screenH = document.documentElement.clientHeight;
    // 设置宽高    总轮播图    大盒子    每一屏
    oAllScreen.style.width = vivoContainer.style.width = screenW + "px";
    vivoContainer.style.height = screenH + "px";
    oAllScreen.style.height = screenH * arrScreen.length + "px";
    for (var i = 0; i < arrScreen.length; i++) {
        arrScreen[i].style.width = screenW + "px";
        arrScreen[i].style.height = screenH + "px";
    }

    oAllScreen.style.top = -page * screenH + "px";
}
resize();
window.onresize = resize;
//            节流阀 阀门关闭
var isRunning = false; // 儅isRunning 為true  鼠標滾軸不管事
// 儅isRunning 為false  鼠標滾軸管事
function scrollUp() {
    if(!isRunning){
        isRunning = true;
        // 設置定時器  儅1秒之後  滾軸繼續可以使用
        setTimeout(function(){
            isRunning = false;
        },1000);
        if (page > 0) {
            page--;
            oAllScreen.style.top = -page * screenH + "px";
        }
    }
}

function scrollDown() {
    if(!isRunning) {
        isRunning = true;
        setTimeout(function(){
            isRunning = false;

        },1000);
        if (page < arrScreen.length - 1) {
            page++;
            oAllScreen.style.top = -page * screenH + "px";
        }
    }
}



// chrome   ie
//window.onmousewheel=function(){}
addEvent(window, "mousewheel", mouseWheel);
// ff
addEvent(window, "DOMMouseScroll", mouseWheel);



// 滚轴事件函数
function mouseWheel(ev) {
    var oEvent = window.event || ev;
    if (oEvent.detail) {
        if (oEvent.detail > 0) {  // 下滚动
            scrollDown()
        } else {   //   向上
            scrollUp()
        }
    } else if (oEvent.wheelDelta) {// chrome ie
        if (oEvent.wheelDelta > 0) {  // 上滚动
            scrollUp()
        } else {   //   向下
            scrollDown()
        }
    }
}
function addEvent(ele, type, listener) {
    if (ele.addEventListener) {   //  click
        ele.addEventListener(type, listener);
    } else {               //  onclick
        ele.attachEvent("on" + type, listener);
    }
}


