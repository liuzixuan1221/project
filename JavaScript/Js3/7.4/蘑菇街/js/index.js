/**
 * Created by liuzi on 2018/7/4.
 */
var sHistory = document.getElementById('sHistory');
var inputText = document.getElementById('inputText');

inputText.onfocus = function(){
    setTimeout(function(){
        sHistory.style.display = 'block';
    },300)
};
inputText.onblur = function(){
    sHistory.style.display = 'none'
};
var oBanPic = document.getElementById('banPic');
var aBanPicc = document.getElementById('banPic').getElementsByClassName('banPicc');
var aBanBtn = document.getElementById('banBtn').getElementsByTagName('a');
var BGbox = document.getElementById('BGbox');
var banText = document.getElementById('banText');
var aBanTextLi = document.querySelectorAll('#banText ul li');
var navBox = document.querySelector('#banText ul .navBox');
var aBanTextNb = navBox.querySelectorAll('#banText ul .navBox .nBox');

var len = aBanPicc.length;
var index = 0;

var timer = null;

for(let i=0;i< len;i++){
    aBanBtn[i].onmouseover = function(){
        index = i;
        for (var j = 0; j<len ;j++){
            aBanPicc[j].classList.remove('now');
            aBanBtn[j].classList.remove('now');
        }
        aBanPicc[i].classList.add('now');
        aBanBtn[i].classList.add('now');
        BG();
        return false;
    }
}
timer = setInterval(js,2000);

function js(){
    if(index < len){
        for (let i = 0; i < len; i++){
            aBanPicc[i].classList.remove('now');
            aBanBtn[i].classList.remove('now');
        }
        aBanPicc[index].classList.add('now');
        aBanBtn[index].classList.add('now');
        BG();
        index++;
    }else{
        index = 0;
    }
}
oBanPic.onmousemove = function(){
    clearInterval(timer);
};
oBanPic.onmousemout = function(){
    clearInterval(timer);
    timer = setInterval(js,600);
};


function BG(){
    if (index == 0){
        BGbox.style.backgroundColor = 'rgb(39, 229, 255)';
    }else if (index == 1){
        BGbox.style.backgroundColor = 'rgb(0, 138, 248)';
    }
}
banText.onmousemove = function(){
    navBox.style.display = 'block';
};
banText.onmouseout = function(){
    navBox.style.display = 'none';
};
for (let i = 0; i < aBanTextLi.length; i++){
    aBanTextLi[i].onmouseover = function(){
        for (let j = 0; j < aBanTextLi.length; j++){
            aBanTextNb[j].classList.remove('now');
        }
        aBanTextNb[i].classList.add('now');
    }
}

