$(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});


//获取页面url传过来的参数
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
var type = Request['type'];


function loadData(d){
    $("#bigTitle").html(d.data.typeTitle)
    $("#typeEntitle").html(d.data.typeEntitle)
    $("#articleTitle").html(d.data.title)
    $("#updateTime").html(d.data.updateAt)
    $("#author").html(d.data.updateByFullName)
    $("#cover").attr("src",d.data.coverImg)
    $("#content").html(d.data.content)
}
if (type == 'companyIdea'){
    loadData(articleData.companyIdea);
}


if (type == 'companyCulture'){
    loadData(articleData.companyCulture);
}


if (type == 'companyEnvironment'){
    loadData(articleData.companyEnvironment);
}


if (type == 'talents'){
    loadData(articleData.talents);
}


if (type == 'team'){
    loadData(articleData.team);
}


if (type == 'joinUs'){
    loadData(articleData.joinUs);
}

if (type == 'telUs'){
    loadData(articleData.telUs);
}

if (type == 'xiaoniaoNews1'){
    loadData(articleData.xiaoniaoNews1);
}

if (type == 'xiaoniaoNews2'){
    loadData(articleData.xiaoniaoNews2);
}

if (type == 'xiaoniaoNews3'){
    loadData(articleData.xiaoniaoNews3);
}

if (type == 'xiaoniaoNews4'){
    loadData(articleData.xiaoniaoNews4);
}


var oLikeBtn = document.getElementById('likeBtn');
var oLikeNum = document.getElementById('likeNum');
var likeNum = 20;
oLikeBtn.onclick = function(){
    likeNum++;
    oLikeNum.innerHTML = '喜欢（'+ likeNum + '）';
};

var oBi = document.getElementById('bi');
oBi.onclick = function(){
    this.parentElement.classList.add('now');
    setTimeout(function(){
        oBi.parentElement.classList.remove('now');
    },1010)
};