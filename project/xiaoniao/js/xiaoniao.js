var oDonghua = document.getElementById('donghua');
var oMain = document.getElementById('main');
var oHeaderNav = document.getElementById('headerNav');
var aHeaderNavLi = oHeaderNav.getElementsByTagName('li');
var aHeaderNavTit = oHeaderNav.getElementsByTagName('h6');
var oMainBox = document.getElementById('mainBox');
var aMainBoxDiv = oMainBox.getElementsByClassName('mainDiv');

var windowH = parseInt(getStyle(oMain, "height"));

function getStyle(obj,attr) {
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,false)[attr];
    }
}
var index = 0;
var len = aMainBoxDiv.length;

for (var i = 0; i < len; i++) {
    aHeaderNavLi[i].index = i;
    aHeaderNavLi[i].onclick = function (){
        for (var j = 0; j < len; j++) {
            aHeaderNavTit[j].classList.remove('now');
        }
        if ( this.index == 3){

            aHeaderNavTit[4].classList.add('now');
        }
        aHeaderNavTit[this.index].classList.add('now');
        index = this.index;
        if (index == 4){
            index -= 1;
        }
        if (index != 5){
            index = this.index + 1;
        }

        $("#mainBox").animate({"top":-windowH * index + "px"},500)
    }
}

var timer;
function timerFn(){
    timer = setTimeout(function () {
        $("#donghua").animate({"height":"0"},500);

        qpgd()

    },6000);
}


function qpgd(){
    $("#donghua").animate({"height":"0"},0);
    var scrollFn = function (e) {
        e = e || window.event;
        if (e.wheelDelta) {
            if (e.wheelDelta > 0) {
                xiagun();
            }
            if (e.wheelDelta < 0) {
                shanggun();
            }
        }else if (e.detail) {
            if (e.detail > 0){
                xiagun();
            }
            if (e.detail < 0){
                shanggun();
            }
        }
    };
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll',scrollFn, false);
    }
    window.onmousewheel = document.onmousewheel = scrollFn;


    function xiagun(){
        if ($("#mainBox").is(':animated')) {
            return;
        }
        index--;
        if(index<0){
            index=0;
        }

        $("#mainBox").animate({"top": -windowH * index + "px"},500);
        for (var j = 0; j < len; j++) {
            aHeaderNavTit[j].classList.remove('now');

        }
        if(index >= 1){
            aHeaderNavTit[index-1].classList.add('now');
        }
        if(index < 1){
            aHeaderNavTit[index].classList.add('now');
        }
    }



    function shanggun(){
        if ($("#mainBox").is(":animated")){
            return;
        }
        index++;
        if(index >= 4){
            index = 4;

        }
        $("#mainBox").animate({"top": -windowH * index + "px"},500);


        for (var j = 0; j < len; j++) {
            aHeaderNavTit[j].classList.remove('now');
        }

        if(index>0){
            aHeaderNavTit[index-1].classList.add('now');
        }
        if(index == 4){
            aHeaderNavTit[index].classList.add('now');
        }

    }


    var oDonext = document.getElementsByClassName('donext')[0];
    oDonext.onclick = function(){
        index++;
        $("#mainBox").animate({"top": -windowH * index + "px"},500);
        for (var j = 0; j < len; j++) {
            aHeaderNavTit[j].classList.remove('now');
        }
        aHeaderNavTit[index-1].classList.add('now');
    };
}


var oGaishu_slider = document.getElementsByClassName('gaishu_slider')[0];
var oGaishu_goleft = document.getElementsByClassName('gaishu_goleft')[0];
var oGaishu_goright = document.getElementsByClassName('gaishu_goright')[0];

var gaishuIndex = 0;

oGaishu_goleft.onclick = function () {
    gaishuIndex--;
    if (gaishuIndex <= 0){
        gaishuIndex = 0;
        oGaishu_goleft.style.opacity = '.3';
    }
    oGaishu_slider.style.left = gaishuIndex * -100 +'%';
};

oGaishu_goright.onclick = function () {
    gaishuIndex++;
    if (gaishuIndex >= 2){
        gaishuIndex = 2;
        oGaishu_goright.style.opacity = '.3';
    }
    oGaishu_slider.style.left = gaishuIndex * -100 +'%';
};



var oYun_slider = document.getElementsByClassName('yun_slider')[0];
var oYunmove_left = document.getElementsByClassName('yunmove_btn_left')[0];
var oYunmove_right = document.getElementsByClassName('yunmove_btn_right')[0];
var oYunmove_btnL = document.getElementsByClassName('yunmove_btn')[0];
var oYunmove_btnR = document.getElementsByClassName('yunmove_btn')[1];

oYunmove_left.onclick = function (){
    oYun_slider.style.left = '0';
    oYunmove_btnL.classList.add('now');
    oYunmove_btnR.style.left = '-78px';
    setTimeout(function(){
        oYunmove_btnL.style.left = '0';
    },500)
};
oYunmove_right.onclick = function (){
    oYun_slider.style.left = '-910px';
    oYunmove_btnR.classList.add('now');
    oYunmove_btnL.style.left = '78px';
    setTimeout(function(){
        oYunmove_btnR.style.left = '0';
    },500)
};


function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

var Request = new Object();
Request = GetRequest();
var num = Request['num'];


if(num == 1){
    timerFn();
} else{
    qpgd();
}

for (var j = 0; j < len; j++) {
    aHeaderNavTit[j].classList.remove('now');
}
index = num-1;

if (index > 0){
    aHeaderNavTit[index-1].classList.add('now');
}
if (index == 4){
    aHeaderNavTit[index].classList.add('now');
}

$("#mainBox").animate({"top":-windowH * index+"px"},0);