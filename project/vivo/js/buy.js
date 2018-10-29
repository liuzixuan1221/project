var bigPicBox = document.getElementById('img');
var smallPicBox = document.getElementById('cl');
var oCrumbs = document.getElementsByClassName('crumbs')[0];
var oNavRight = document.getElementsByClassName('navRight')[0];
var oPLeft = document.getElementsByClassName('pLeft')[0];
var oPRightTable = document.getElementsByClassName('table')[0];



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
var num = Request['xinghao'];


ajax('js/shangcheng.json',function(data){
    var _data = eval("("+data+")");
    for (var i = 0; i < _data.length; i++) {


        var xingHao = _data[i].xinghao;
        if(num == xingHao){
            var oCruSpan = document.createElement('span');
            var oH1 = document.createElement('h1');
            var oP = document.createElement('P');
            var oNowSpan = document.createElement('span');
            var oOldSpan = document.createElement('span');
            var oTableDiv = document.createElement('div');

            oNavRight.prepend(oP);
            oNavRight.prepend(oH1);
            oCrumbs.appendChild(oCruSpan);
            oPLeft.appendChild(oNowSpan);
            oNowSpan.className = 'now';
            oPLeft.appendChild(oOldSpan);
            oOldSpan.className = 'old';
            oPRightTable.appendChild(oTableDiv);



            oCruSpan.innerHTML = _data[i].type + "系列";
            oNowSpan.innerHTML = "<dfn>￥</dfn>" + _data[i].nowPrice;
            oOldSpan.innerHTML = "<dfn style='font-size: 20px;'>￥</dfn>" + _data[i].oldPrice;
            oH1.innerHTML = _data[i].name;
            oP.innerHTML = _data[i].titP + "<span>" + _data[i].titS + "</span>";
            oTableDiv.innerHTML = "购买即送" + _data[i].nowPrice + "积分";

            for (var j = 0; j < _data[i].bigImg.length; j++) {
                var oBigImgLi = document.createElement('li');
                var oBigImages = document.createElement('img');

                bigPicBox.appendChild(oBigImgLi);
                oBigImgLi.appendChild(oBigImages);
                bigPicBox.firstElementChild.classList.add('now');
                oBigImgLi.setAttribute('page',j);

                oBigImages.src = _data[i].bigImg[j].pic;

                var oSmallImgLi = document.createElement('li');
                var oSmallImgA = document.createElement('a');
                var oSmallImages = document.createElement('img');

                smallPicBox.appendChild(oSmallImgLi);
                oSmallImgLi.appendChild(oSmallImgA);
                oSmallImgA.appendChild(oSmallImages);
                oSmallImgLi.setAttribute('page',j);


                oSmallImages.src = _data[i].smallImg[j].pic;
                var liList = bigPicBox.getElementsByTagName("li");

                oSmallImgLi.onmouseover = function(){
                    var page = this.getAttribute('page');

                   for (var y = 0; y < liList.length; y++){
                       liList[y].classList.remove('now');
                   }
                   liList[page].classList.add('now');
                }
            }
        }
    }
},function(){});



var aRl = document.getElementsByClassName('rl');
for (var r = 0; r < aRl.length; r++) {
    aRl[r].index = r;
    aRl[r].onclick = function(){
        for (var i = 0; i < aRl.length; i++) {
            aRl[i].classList.remove('now');
        }
        this.classList.add('now');
    }
}

var oBtn1 = document.getElementsByClassName('btn1')[0];
var oBtn2 = document.getElementsByClassName('btn2')[0];

oBtn1.onclick = function(){
    localStorage.setItem('xinghao',num)
};
oBtn2.onclick = function(){
    window.location.href = "gwc.html";
};