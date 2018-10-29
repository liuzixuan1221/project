/**
 * Created by liuzi on 2018/5/3.
 */
//var form = document.getElementById('form');
var input = document.querySelector('#form input');
var button = document.querySelector('#form button');
var icon1 = document.getElementsByClassName('icon1')[0];
var language = document.getElementById('language');
var lanBox = document.getElementById('lanBox');
var TwoLi = document.getElementById('ulTwo').getElementsByTagName('li');
var ycBox = document.querySelectorAll('.headerTwo #ulTwo .ycBox');
var login = document.getElementById('login');
var loginBox = document.getElementById('loginBox');
var img = document.querySelectorAll('#banner .img');
var dian = document.getElementById('dian').getElementsByTagName('li');
var tubiao = document.getElementById('tubiao');
var pop = document.getElementById('pop');
var popClose = document.getElementById('popClose');
var arrBrPa = document.querySelectorAll('.BoxRight p a');
var arrBrUl = document.querySelectorAll('.BoxRight ul li');
var arrBlLi = document.querySelectorAll('.BoxLeft li');
var arrBrDiv = document.querySelectorAll('.bannerBox .BoxRight');
var BrUlInp = document.getElementById('BrUlInp');
var inputBox = document.getElementById('inputBox');
var xxx = document.getElementById('xxx');
var topLi = document.querySelectorAll('.xx .topLeft li')
var BoxLi = document.querySelectorAll('.xx .xxBox li')
var zuCheTli = document.querySelectorAll('.zuChe .zuCheTop li');
var zuCheBli = document.querySelectorAll('.zuChe .zuCheBottom li');
console.log(zuCheBli);
console.log(zuCheTli);

input.onfocus = function(){
    input.parentNode.style.border = '1px solid #2b82f4';
    button.style.background = '#2b82f4';
    icon1.style.backgroundPosition = '-66px -635px';
};
input.onblur = function(){
    input.parentNode.style.border = '1px solid #a4cbff';
    button.style.background = '#a4cbff';
    icon1.style.backgroundPosition = '-66px -610px';
};
button.onmousemove = function(){
    button.style.background = '#299cff';
    icon1.style.backgroundPosition = '-66px -660px';
};
button.onmouseout = function(){
    if(input == document.activeElement){
        button.style.background = '#2b82f4';
        icon1.style.backgroundPosition = '-66px -635px';
    }else{
        button.style.background = '#a4cbff';
        icon1.style.backgroundPosition = '-66px -610px';
    }
};
language.onmousemove = function(){
    lanBox.style.display= 'block';
    language.className = 'lanBorder';
};
language.onmouseout = function(){
    lanBox.style.display= 'none';
    language.className = '';
};

//for(var j=0;j<TwoLi.length;j++) {
//    TwoLi[j].index = j;
//    TwoLi[j].onclick = function () {
//        for (var j = 0; j < ycBox.length; j++) {
//            TwoLi[j].style.background = '#2577e3';
//        }
//        TwoLi[this.index].style.background = '#0a56bb';
//        return false;
//    };
//}
//

for(var i=1;i<TwoLi.length;i++){
    TwoLi[i].index1 = i;
    TwoLi[i].onmouseenter = function(){
        setTimeout(function(){
            for(var i=1;i<ycBox.length;i++){
                TwoLi[i].style.background = '#2577e3';
            }
        },300);
            TwoLi[this.index1].style.background = '#0a56bb';
    };
    TwoLi[i].onmousemove = function(){
        for(var i=1;i<ycBox.length;i++){
            ycBox[i].style.display = 'none';
        }
        ycBox[this.index1].style.display = 'block';
        return false;
    };
    TwoLi[i].onmouseout = function(){
        ycBox[this.index1].style.display = 'none';
    }
}


login.onmousemove = function(){
        loginBox.style.display = 'block';
};
login.onmouseout = function(){
        loginBox.style.display = 'none';
};

for(var i=0;i<dian.length;i++){
    dian[i].index = i;
    dian[i].onmousemove = function(){
        for(var i=0;i<img.length;i++){
            img[i].style.display = 'none';
            dian[i].style.background = 'transparent';
        }
        dian[this.index].style.background = '#fff';
        img[this.index].style.display = 'block';
    }
}


tubiao.onclick = function(){
    tubiao.style.left = '-127px';
    setTimeout(function(){
        pop.style.left = '0';
    },400);
};
popClose.onclick = function(){
    setTimeout(function(){
        tubiao.style.left = '0';
    },1000);
    pop.style.left = '-100%';
};

for(var i=0;i<arrBrPa.length;i++){
    arrBrPa[i].index = i;
    arrBrPa[i].onclick = function(){
        for(var j=0;j<arrBrUl.length;j++){
            arrBrPa[j].className= '';
            arrBrUl[j].style.display = 'none';
        }
        arrBrPa[this.index].className = 'aaa';
        arrBrUl[this.index].style.display = 'block';
        return false;
    }
}

for(var i=0;i<arrBlLi.length;i++){
    arrBlLi[i].index = i;
    arrBlLi[i].onclick = function(){
        for(var j=0;j<arrBrDiv.length;j++){
            arrBrDiv[j].style.display = 'none';
            arrBlLi[j].className = '';
        }
        arrBlLi[this.index].className = 'lll';
        arrBrDiv[this.index].style.display = 'block';
    }
}


BrUlInp.onfocus = function(){
    inputBox.style.display = 'block';
}
xxx.onclick = function(){
    inputBox.style.display = 'none';
}


for(var i=0;i<topLi.length;i++){
    topLi[i].index = i;
    topLi[i].onclick = function(){
        for (var j=0;j<BoxLi.length;j++){
            BoxLi[j].style.display = 'none';
            topLi[j].className = '';
        }
        BoxLi[this.index].style.display = 'block';
        topLi[this.index].className = 'sanjiao';
    }
}


function tab(arrA,arrB){
    for(var i=0;i<arrA.length;i++){
    arrA[i].index = i;
    arrA[i].onclick = function(){
        for(var j=0;j<arrB.length;j++){
            arrA[j].classList.remove('now');
            arrB[j].classList.remove('now');
        }
        arrA[this.index].classList.add('now');
        arrB[this.index].classList.add('now');
        }
    }
}
tab(zuCheTli,zuCheBli);

//function tab (arrA,arrB){
//    for(var i=0;i<arrA.length;i++){
//        arrA[i].index = i;
//        arrA[i].onclick = function(){
//            for(var j=0;j<arrB.length;j++){
//                arrA[j].classList.remove('now');
//                arrB[j].classList.remove('now');
//            }
//        };
//        arrA[this.index].classList.add('now');
//        arrB[this.index].classList.add('now');
//    }
//}

