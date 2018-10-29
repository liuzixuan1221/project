/**
 * Created by liuzi on 2018/5/15.
 */
var allList = document.getElementById('allList')
var allListYcBox = document.getElementById('allListYcBox');
var icon = document.getElementById('icon');
var downloadBox = document.querySelector('.banner .download .downloadBox');
var gameI = document.querySelectorAll('.banner .gameCalendar i');
var iconBox = document.querySelectorAll('.banner .gameCalendar .iconBox');
var strong = document.querySelectorAll('.banner .gameCalendar i strong');
var newsImg = document.getElementById('newsImg');
var newsDian = document.querySelectorAll('.newsBox .newsDian a');
var newsWtopA = document.querySelectorAll('.newsWtop a');
var tempBox = document.getElementById('tempBox');
var newsBlBox = document.querySelectorAll('.newsWtop a .blueBox');
var WrapBox = document.querySelector('.shishenWrap .WrapBox');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var ssBoxTit = document.querySelectorAll('.ssBoxTit li a');
var shishenWrap = document.querySelectorAll('.ssBoxNav .shishenWrap');
var zjTabs = document.querySelectorAll('.zjTabs a');
var zjWrap = document.querySelectorAll('.zhuJue .zjWrap');
var shishenTopA = document.querySelectorAll('.shishenTop a');
var shishenBox = document.getElementsByClassName('shishenBox');
var ssbj1 = document.querySelectorAll('.shishenTop a .ssbj1');
var rBannerImg = document.querySelector('.rBannerImg .Img');
var rBannerAn = document.querySelectorAll('.rBanner .rBannerAn a');
var textLong = document.querySelector('.TextBox .TextLong');
var textA =document.querySelectorAll('.TextTitle a');
var ssbj2 = document.querySelectorAll('.TextTitle a .ssbj2');
var cosTopLi = document.querySelectorAll('.cos .cosTop ul li');
var cosNavBox = document.querySelector('.cos .cosNav .cosNavBox');
var ycTitle = document.getElementById('ycTitle');
var banTitle = document.querySelector('.banner .title');
var banLogo = document.querySelector('.banner .logo a img');
var gfqdBox = document.querySelector('#ycTitle .gfqdBox');



allList.onmouseover = function(){
    allListYcBox.style.height = '475px';
    allListYcBox.style.transition = 'all .3s ease 0s';
    };
allList.onmouseout = function(){
    allListYcBox.style.height = '0';
    allListYcBox.style.transition = 'none';
    };

icon.onclick = function(){
    if (icon.className=='icon222'){
        downloadBox.style.marginLeft = '0';
        downloadBox.style.transition = '.5s';
        icon.classList.remove('icon222');
        icon.classList.add('icon2');

    }else if (icon.className=='icon2'){
        downloadBox.style.marginLeft = '492px';
        downloadBox.style.transition = '.5s';
        icon.classList.remove('icon2');
        icon.classList.add('icon222');
    }
    return false;
};

for (var i=0;i<iconBox.length;i++){
    iconBox[i].index = i;
    iconBox[i].onmouseover = function(){
        for (var j=0;j<strong.length;j++){
            strong[j].classList.remove('iShow');
        }
        strong[this.index].classList.add('iShow');
    };
    iconBox[i].onmouseout = function(){
        strong[this.index].classList.remove('iShow');
    }
}


function hdlb(arrA,arrB,c,d){
    for(var i = 0;i < arrA.length; i++){
        arrA[i].index = i;
        arrA[i].onmouseover = function(){
            for(var j=0;j<arrA.length;j++) {
                arrA[j].classList.remove(c);
            }
            arrB.style.marginLeft = -(this.index * d)+"px";
            this.classList.add(c);
        }
    }
}
hdlb(newsDian,newsImg,'now',360);

        for(var i = 0;i < newsWtopA.length; i++){
            newsWtopA[i].index = i;
            newsWtopA[i].onmouseover = function(){
                for(var j=0;j<newsBlBox.length;j++) {
                    newsBlBox[j].classList.remove('new');
                }
                tempBox.style.marginLeft = -(this.index * 500)+"px";
                newsBlBox[this.index].classList.add('new');
            }
        }


for (var i=0;i<ssBoxTit.length;i++){
    ssBoxTit[i].index = i;
    ssBoxTit[i].onclick = function(){
        for (var j=0;j<shishenWrap.length;j++){
            ssBoxTit[j].classList.remove('now');
            shishenWrap[j].classList.remove('show');
        }
        shishenWrap[this.index].classList.add('show');
        this.classList.add('now');
        if (this.index == 0){
            next.classList.add('show');
        }else if(this.index != 0){
            next.classList.remove('show');
            prev.classList.remove('show');
        }
        return false;
    }
}

next.onclick = function(){
    WrapBox.style.marginLeft = (parseInt(WrapBox.style.marginLeft) - 828) +'px';
    if (WrapBox.style.marginLeft == '-7452px'){
        next.classList.remove('show');
    }
    else if(WrapBox.style.marginLeft == '0px'){
        prev.classList.remove('show');
    }
    else {
        prev.classList.add('show');
        next.classList.add('show');
    }
    return false;
};

prev.onclick = function(){
    WrapBox.style.marginLeft = (parseInt(WrapBox.style.marginLeft) + 828) +'px';
    if(WrapBox.style.marginLeft != '0px'){
        prev.classList.add('show');
        next.classList.add('show');
    }else if(WrapBox.style.marginLeft == '0px'){
        prev.classList.remove('show');
    }
    return false;
};

for (var i=0;i<zjTabs.length;i++){
    zjTabs[i].index = i;
    zjTabs[i].onclick = function(){
        for (var j=0;j<zjWrap.length;j++){
            zjTabs[j].classList.remove('zjA');
            zjWrap[j].classList.remove('show');
        }
        this.classList.add('zjA');
        zjWrap[this.index].classList.add('show');
        return false;
    }
}
for (var i=0;i<shishenTopA.length;i++){
    shishenTopA[i].index = i;
    shishenTopA[i].onclick = function(){
        for (var j=0;j<shishenBox.length;j++){
            shishenBox[j].classList.remove('show');
            ssbj1[j].classList.remove('now');
        }
        shishenBox[this.index].classList.add('show');
        ssbj1[this.index].classList.add('now');
        return false;
    }
}
rBannerAn[0].onmouseover = function(){
    rBannerImg.style.marginLeft = '0';
    rBannerAn[0].classList.add('now');
    rBannerAn[1].classList.remove('now');

};
rBannerAn[1].onmouseover = function(){
    rBannerImg.style.marginLeft = '-368px';
    rBannerAn[0].classList.remove('now');
    rBannerAn[1].classList.add('now');
};


for(var i=0;i<textA.length;i++){
    textA[i].index = i;
    textA[i].onmouseover = function(){
        for(var j=0;j<ssbj2.length;j++){
            ssbj2[j].classList.remove('now');
        }
        ssbj2[this.index].classList.add('now');
        textLong.style.marginLeft = -(this.index * 835)+"px";
    }
}


for(var i=0;i<cosTopLi.length-1;i++){
    cosTopLi[i].index = i;
    cosTopLi[i].onmouseover = function(){
        cosNavBox.style.marginLeft = -(this.index * 1220)+"px";
    }
}

window.onscroll=function() {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    if (t >= 100) {
        banTitle.style.opacity = ('0');
        ycTitle.style.opacity = ('1');
        banLogo.style.transform = ('scale(0)');
        ycTitle.style.zIndex = ('999');
    }else {
        banTitle.style.opacity = ('1');
        ycTitle.style.opacity = ('0');
        banLogo.style.transform = ('scale(1)');
        ycTitle.style.zIndex = ('-1');
    }
};

gfqd.onmouseover = function(){
    gfqdBox.style.height = ('200px');
};
gfqd.onmouseout = function(){
    gfqdBox.style.height = ('0');
};