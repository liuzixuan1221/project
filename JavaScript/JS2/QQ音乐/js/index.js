let headerTitleLi = document.getElementById('headerTitle').getElementsByTagName('li');
let headerTitleA = document.getElementById('headerTitle').getElementsByTagName('a');
let headerBottomLi = document.querySelectorAll('.headerBottom li');
let headerBottomA = document.querySelectorAll('.headerBottom li a');
let search = document.getElementById('search');
let searchBox = document.getElementById('searchBox');
let login = document.getElementById('login');
let close = document.getElementById('close');
let loginBox = document.getElementById('loginBox');
let topA = document.querySelectorAll('.loginBox .top a');
let qq =  document.getElementById('qq');
let weixin = document.getElementById('weixin');


for(let i = 0;i < headerTitleLi.length; i++){
    headerTitleLi[i].onclick = function(){
        for(var j=0;j<headerTitleA.length;j++) {
            headerTitleA[j].classList.remove('now');
        }
        headerTitleA[i].classList.add('now');
        return false
    };
    //headerTitleLi[i].onmousemove = function(){
    //    if (headerTitleA[i].className == "now"){
    //        headerTitleA[i].style.color = "#fff";
    //    }else {
    //        headerTitleA[i].style.color = "#31c27c";
    //    }
    //};
    //headerTitleLi[i].onmouseout = function(){
    //    if (headerTitleA[i].className == "now"){
    //        headerTitleA[i].style.color = "#fff";
    //    }else {
    //        headerTitleA[i].style.color = "#000";
    //    }
    //}
}


search.onfocus = function(){
    searchBox.style.height = '238px';
    searchBox.style.transition = 'all .3s ease 0s';
};
search.onblur = function(){
    //setTimeout(function(){
        searchBox.style.height = '0';
        searchBox.style.transition = 'all .3s ease 0.5s';
    //},500)
};
login.onclick = function(){
    BG.style.display = "block";
    loginBox.style.display = "block";
    return false;
};
close.onclick = function(){
    BG.style.display = "none";
    loginBox.style.display = "none";
};

topA[0].onclick = function(){
    topA[0].classList.add('now');
    topA[1].classList.remove('now');
    qq.classList.add('now');
    weixin.classList.remove('now');
    return false
};
topA[1].onclick = function(){
    topA[1].classList.add('now');
    topA[0].classList.remove('now');
    qq.classList.remove('now');
    weixin.classList.add('now');
    return false
}