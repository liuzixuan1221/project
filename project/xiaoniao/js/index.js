$(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});

window.onload = function () {


    //大banner
    var oBanner = document.getElementsByClassName('banner')[0];
    var aBannerPic = oBanner.children;
    var oBannerBtn = document.getElementById('bannerBtn');
    var oBanBtnLeft = oBannerBtn.firstElementChild;
    var oBanBtnRight = oBannerBtn.lastElementChild;
    var oBanBtnCenter = document.getElementsByClassName('center')[0];
    var aBanBtnCenterSpan = oBanBtnCenter.children;

    var index = null;
    for (var i = 0; i < aBanBtnCenterSpan.length; i++) {
        aBanBtnCenterSpan[i].index = i;
        aBanBtnCenterSpan[i].onclick = function(){
            lunBo(aBannerPic,aBanBtnCenterSpan,i,this.index);
            //font();
            index = this.index;
            return index;
        }
    }
    oBanBtnLeft.onclick = function () {
        index--;
        if (index < 0){
            index = aBannerPic.length-1;
        }
        lunBo(aBannerPic,aBanBtnCenterSpan,i,index);
        //font();
    };

    oBanBtnRight.onclick = function () {
        index++;
        if (index >= aBannerPic.length){
            index = 0;
        }
        lunBo(aBannerPic,aBanBtnCenterSpan,i,index);

        //font();z
    };


    //主要产品banner
    var cpLineLi = document.getElementById('cpLine').getElementsByTagName('li');
    var cpNavLi = document.getElementById('cpNav').getElementsByTagName('li');
    var changeLineBtn = document.getElementById('changeLine').children;
    var cpNavpic = document.getElementsByClassName('cpNavpic');
    var cpNavtxt = document.getElementsByClassName('cpNavtxt');
    var changeLine = document.getElementById('changeLine');
    var changePrev = changeLine.firstElementChild;
    var changeNext = changeLine.lastElementChild;
    var concel = 0;



    for (var i = 0; i < cpLineLi.length; i++) {
        cpLineLi[i].index = i;
        cpLineLi[i].onclick = function(){
            lunBo(cpNavLi,cpLineLi,i,this.index);
            var temp = this.index;
            if (concel < temp){
                cpNavpic[this.index].classList.add('left');
                cpNavtxt[this.index].classList.add('left');
                concel = temp;
            }
            else if (concel > temp){
                cpNavpic[this.index].classList.add('right');
                cpNavtxt[this.index].classList.add('right');
                concel = temp;
            }
        }
    }
    changePrev.onclick = function () {
        cpNavpic[concel].classList.remove('right');
        cpNavtxt[concel].classList.remove('right');
        concel--;
        if (concel < 0){
            concel = cpNavLi.length-1;
        }

        lunBo(cpNavLi,cpLineLi,i,concel);

        cpNavpic[concel].classList.add('right');
        cpNavtxt[concel].classList.add('right');

    };

    changeNext.onclick = function(){
        cpNavpic[concel].classList.remove('left');
        cpNavtxt[concel].classList.remove('left');
        concel++;
        if (concel >= cpNavLi.length){
            concel = 0;
        }

        lunBo(cpNavLi,cpLineLi,i,concel);

        cpNavpic[concel].classList.add('left');
        cpNavtxt[concel].classList.add('left');
    };


    //业务范围收缩盒子
    var shousuo = document.getElementsByClassName('shousuo');
    var centerImg = document.getElementsByClassName('centerImg');
    var ycNav = document.getElementsByClassName('ycNav');


    for (var x = 0; x < centerImg.length; x++) {
        centerImg[x].index = x;
        centerImg[x].onclick = function () {
            var ycNavH = getCss(ycNav[this.index],"height");
            for (var i = 0; i < ycNav.length; i++) {
                ycNav[i].classList.remove('now');
                shousuo[i].classList.remove('now');

            }
            ycNav[this.index].classList.add('now');
            shousuo[this.index].classList.add('now');
            if (ycNavH != '0'){
                ycNav[this.index].classList.remove('now');
                shousuo[this.index].classList.remove('now');
            }
        };
        shousuo[x].index = x;
        shousuo[x].onclick = function () {
            var ycNavH = getCss(ycNav[this.index],"height");
            for (var i = 0; i < ycNav.length; i++) {
                ycNav[i].classList.remove('now');
                shousuo[i].classList.remove('now');
            }
            ycNav[this.index].classList.add('now');
            shousuo[this.index].classList.add('now');
            if (ycNavH != '0'){
                ycNav[this.index].classList.remove('now');
                shousuo[this.index].classList.remove('now');

            }
        }
    }
    //团队介绍轮播
    var LongMove = document.getElementById('LongMove');
    var twoTeamWrap = LongMove.getElementsByClassName('twoTeamWrap');
    var teamBtn = document.getElementById('teamBtn');
    var teamLeftBtn = teamBtn.firstElementChild;
    var teamRightBtn = teamBtn.lastElementChild;
    var teamCenBtn = teamBtn.getElementsByTagName('div')[0];
    var teamCenBtns = teamCenBtn.getElementsByTagName('span');
    var teamContent = document.getElementById('teamContent');
    var m = 0;

    LongMove.style.left = '-1130px';
    teamLeftBtn.onclick = function() {
        LongMove.style.left = '-1070px';
        LongMove.style.transition = '0.4s';

        m--;
        if (m < 0){
            m = teamCenBtns.length-1;
        }

        for (var i = 0; i < teamCenBtns.length; i++) {
            teamCenBtns[i].classList.remove('now');
        }
        teamCenBtns[m].classList.add('now');

        setTimeout(function(){
            LongMove.style.left = '-2260px';
            LongMove.style.transition = '0.4s';

            var newTTW = LongMove.firstElementChild.cloneNode(true);
            LongMove.removeChild(LongMove.firstElementChild);
            LongMove.appendChild(newTTW);

            setTimeout(function(){
                LongMove.style.transition = '0s';
                LongMove.style.left = '-1130px';
            },400);
        },400);
    };

    teamRightBtn.onclick = function() {
        LongMove.style.left = '-1190px';
        LongMove.style.transition = '0.4s';

        m++;
        if (m >= teamCenBtns.length){
            m = 0;
        }

        for (var i = 0; i < teamCenBtns.length; i++) {
            teamCenBtns[i].classList.remove('now');
        }
        teamCenBtns[m].classList.add('now');

        setTimeout(function(){
            LongMove.style.left = '0';
            LongMove.style.transition = '0.4s';

            var newTTW = LongMove.lastElementChild.cloneNode(true);
            LongMove.removeChild(LongMove.lastElementChild);
            LongMove.prepend(newTTW);
            setTimeout(function(){
                LongMove.style.transition = '0s';
                LongMove.style.left = '-1130px';
            },400);
        },400);


    };


    var teamBannerTimer;
    teamTimer();
    function teamTimer(){
        teamBannerTimer = setInterval(function (){
            LongMove.style.left = '-1190px';
            LongMove.style.transition = '0.4s';

            m++;
            if (m >= teamCenBtns.length){
                m = 0;
            }

            for (var i = 0; i < teamCenBtns.length; i++) {
                teamCenBtns[i].classList.remove('now');
            }
            teamCenBtns[m].classList.add('now');

            setTimeout(function(){
                LongMove.style.left = '0';
                LongMove.style.transition = '0.4s';

                var newTTW = LongMove.lastElementChild.cloneNode(true);
                LongMove.removeChild(LongMove.lastElementChild);
                LongMove.prepend(newTTW);
                setTimeout(function(){
                    LongMove.style.transition = '0s';
                    LongMove.style.left = '-1130px';
                },400);
            },400);
        },3000);

    }

    teamContent.onmouseover = function () {
        clearInterval(teamBannerTimer);
    };
    teamContent.onmouseout = function () {
        teamTimer();
    };

    //input聚焦
    var inputBox = document.getElementsByClassName('inputBox');

    var inputs = document.getElementsByClassName('inputs');

    function inputFn () {
        for (var input1 = 0; input1 < inputs.length; input1++) {
            inputs[input1].index = input1;
            inputs[input1].onfocus = function () {
                inputBox[this.index].classList.add('now');
            }
        }
        for (var input2 = 0; input2 < inputs.length; input2++) {
            inputs[input2].index = input2;
            inputs[input2].onblur = function () {
                inputBox[this.index].classList.remove('now');
            }
        }
    }
    inputFn();




    //返回顶部

    var backTop = document.getElementById('backTop');
    var oScrollTop = backTop.firstElementChild;
    var clientH = document.documentElement.clientHeight || document.body.clientHeight;
    var btTimer = null;
    var isTop = true;


    window.onscroll = function() {
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (osTop >= clientH) {
            backTop.style.opacity = '1';
        }else{
            backTop.style.opacity = '0';
        }

        if (!isTop) {
            clearInterval(btTimer);
        }
        isTop = false;
    };

    oScrollTop.onclick = function(){

        btTimer = setInterval(function(){
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;  //同时兼容了ie和Chrome浏览器

            var isSpeed = Math.floor(-osTop / 10);
            document.documentElement.scrollTop = document.body.scrollTop = osTop + isSpeed;
            if (osTop == 0) {
                clearInterval(btTimer);
            }
            isTop = true;
        },20);
    };



    var oXialaBox = document.getElementById('xialaBox');
    //var aXialaBoxLi = oXialaBox.getElementsByTagName('li');

    //轮播封装
    var lunBo = function (pic,btn,i,index) {
        for (var i = 0; i < pic.length; i++) {
            pic[i].classList.remove('now');
            btn[i].classList.remove('now');
        }
        pic[index].classList.add('now');
        btn[index].classList.add('now');
    };


    //获取css样式
    function getCss(ele, attr) {
        var res = null;
        if (window.getComputedStyle) {
            res = window.getComputedStyle(ele, null)[attr];
        } else {//ie6~8
            if (attr == "opacity") {
                res = ele.currentStyle.filter;//"alpha(opacity = 50)"
                var reg = /^alpha\(opacity\s*=\s*(\d+(?:\.\d+)?)\)$/;
                res = reg.test(res) ? RegExp.$1 / 100 : 1;
            } else {
                res = ele.currentStyle[attr];
            }
        }
        //字符串里包含是数值|数值+单位 提取出数值部分  "100px"->100 "100"->100  "red"(原值返回)
        reg = /^[+-]?(?:\d|[1-9]\d+)(?:\.\d+)?(?:px|pt|rem|em)?$/;
        return reg.test(res) ? parseFloat(res) : res;
    }


};