$(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});



var oNav = document.getElementById('nav');
var oMoreBtn = document.getElementById('moreBtn');
var oMoreImg = document.getElementById('moreImg');

    function ajaxFn(num){
        ajax("js/listData.json",function(data){
            var _data = eval("("+data+")");
            let str = ``;
            function loadData(data,num){
                var data = _data[num].data.list;

                for ( let i = 0; i < data.length; i++) {

                    let {
                        creatAt,
                        describe,
                        title,
                        coverImg,
                        } = data[i];

                    str += `<div class="navBox" onclick="javascript:window.open('xiangqing.html?type=xiaoniaoNews'+${data[i].sysId})">
            <div class="left">
                <img src="${data[i].coverImg}" alt="">
            </div>
            <div class="right">
                <div class="title">${data[i].title}</div>
                <div class="date">${data[i].creatAt}</div>
                <p>${data[i].describe}</p>
            </div>
        </div>`
                }
            }
            loadData(data,num);
            oNav.innerHTML += str;
        },function(){});
    }
    ajaxFn(0);

var index = 0;
oMoreBtn.onclick = function (){
    if (index == 0){
        ajaxFn(1);
        index++;
    }
    else if( index == 1){
        ajaxFn(2);
        oMoreImg.src = "images/list_gomore_bg_nomore.jpg";
        this.style.opacity = '0';
    }
};

var oBi = document.getElementById('bi');
oBi.onclick = function(){
        this.parentElement.classList.add('now');
        setTimeout(function(){
            oBi.parentElement.classList.remove('now');
        },1010)
};