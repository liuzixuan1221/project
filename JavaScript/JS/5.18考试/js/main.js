/**
 * Created by liuzi on 2018/5/18.
 */
var topNav = document.querySelector('.header .topNav');
var topNavBox = document.querySelector('.header .topNav .topNavBox');
var searchInp = document.querySelector('#searchBox input');
var promoInner = document.getElementById('promoInner');
var promoTrigger = document.getElementById('promoTrigger');
var TriggerSpan = promoTrigger.getElementsByTagName('span');
var newsLi = document.querySelectorAll('.contentNav .newsTop li');
var newsNav = document.querySelectorAll('.contentNav .newsNavBox .newsNav');



function hide(a,b,c){
    a.onmouseover = function(){
        b.classList.add(c);
    };
    a.onmouseout = function(){
        b.classList.remove(c);
    }
}

hide(topNav,topNavBox,'show');


searchClick.onclick = function(){
    searchBox.style.display = 'block';
};
searchInp.onfocus = function(){
    searchSpan.style.display = 'none';
    searchInp.classList.add('inputBorder');
};
searchInp.onblur = function(){
    searchSpan.style.display = 'block';
    searchInp.classList.remove('inputBorder');
};
searchClose.onclick = function(){
    searchBox.style.display = 'none';
};
topLoginBox.onmouseover = function(){
    LoginYcBox.style.display = 'block';
    topLoginBox.style.backgroundColor = 'rgba(27,27,27)';
};
topLoginBox.onmouseout = function(){
    LoginYcBox.style.display = 'none';
    topLoginBox.style.backgroundColor = '#0b0b0b';
};


for(var i = 0;i < TriggerSpan.length; i++){
    TriggerSpan[i].index = i;
    TriggerSpan[i].onmouseover = function(){
        for(var j=0;j<TriggerSpan.length;j++){
            if(this.index == 0){
                promoInner.style.marginLeft = '0';
            }
            else if(this.index == 1){
                promoInner.style.marginLeft = '-820px';
            }
            else if(this.index == 2){
                promoInner.style.marginLeft = '-1640px';
            }
            else if(this.index == 3){
                promoInner.style.marginLeft = '-2460px';
            }
            else if(this.index == 4){
                promoInner.style.marginLeft = '-3280px';
            }
            TriggerSpan[j].classList.remove('now');
        }
        this.classList.add('now');
    }
}

for(var i=0;i<newsLi.length;i++){
    newsLi[i].index = i;
    newsLi[i].onmouseover = function(){

        for(var j=0; j<newsNav.length; j++){
            newsNav[j].classList.remove('show');
        }
        newsNav[this.index].classList.add('show');
    }
}



//
//var timer = null;
//var num=0;
//for(var i=0;i<newsLi.length;i++){
//    newsLi[i].index = i;
//    newsLi[i].onmouseover = function(){
//        clearInterval(timer);
//        num = this.index;
//        tab_change();
//    };
//    newsLi[i].onmouseout =function(){
//        autoplay();
//    }
//}
//function tab_change(){
//    for(var i=0;i<newsLi.length;i++){
//        newsLi[i].style.display = 'none';
//        newsNav[i].classList.remove('show');
//    }
//    newsLi[num].style.display = 'block';
//    newsNav[num].classList.add('show');
//}
//
//function autoplay(){
//    timer = setInterval(function(){
//        num++;
//        if(num>=newsLi.length) num=0;
//        tab_change();
//    },1000);
//}
//autoplay();

