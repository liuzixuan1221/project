/**
 * Created by Administrator on 2018/7/14.
 */
var headerNav = document.getElementById('headerNav');
var headerNavLi = document.getElementById('headerNav').getElementsByTagName('li');
var headerNavA = document.querySelectorAll('#headerNav li a');
var hNavBox = document.getElementById('hNavBox');
var bigBox = document.getElementById('bigBox');
var bigBoxUl = bigBox.getElementsByTagName('ul');
var bigBoxLi = document.querySelectorAll('#bigBox li');
var list1Li = document.getElementById('list1').getElementsByTagName('li');
var list2Li = document.getElementById('list2').getElementsByTagName('li');
var list3Li = document.getElementById('list3').getElementsByTagName('li');
var searchBtn = document.getElementById('searchBtn');
var geRen = document.getElementById('geRen');
var searchInput = document.getElementById('searchInput');
var gerenBox = document.getElementById('gerenBox');
var searchClose = document.getElementById('searchClose');
var gerenBoxLi = document.getElementById('gerenBox').getElementsByTagName('li');
var searchBox = document.getElementById('searchBox');
var searchNav = document.getElementById('searchNav');
var headerRight = document.getElementById('headerRight');
var zhiFu = document.getElementById('zhiFu');


for (let i = 0; i < headerNavLi.length; i++) {
    if (i < 3) {
        headerNavLi[i].onmouseenter = function () {
            bigBox.classList.add('now');
            for (var j = 0; j < bigBoxUl.length; j++) {
                bigBoxUl[j].classList.remove('now');
            }
            bigBoxUl[i].classList.add('now');
            if (i == 0) {
                for (var k = 0; k < list1Li.length; k++) {
                    list1Li[k].style.transition = (k + 1) * (0.3) + 's ease .3s';
                    list1Li[k].classList.add('now');
                }
                for (var v = 0; v < list2Li.length; v++) {
                    list2Li[v].style.transition = 0 + 's ease .3s';
                    list2Li[v].classList.remove('now');
                }
                for (var x = 0; x < list3Li.length; x++) {
                    list3Li[x].style.transition = 0 + 's ease .3s';
                    list3Li[x].classList.remove('now');
                }
            }
            else if (i == 1) {
                for (var v = 0; v < list2Li.length; v++) {
                    list2Li[v].style.transition = (v + 1) * (0.3) + 's ease .3s';
                    list2Li[v].classList.add('now');
                }
                for (var k = 0; k < list1Li.length; k++) {
                    list1Li[k].style.transition = 0 + 's ease .3s';
                    list1Li[k].classList.remove('now');
                }
                for (var x = 0; x < list3Li.length; x++) {
                    list3Li[x].style.transition = 0 + 's ease .3s';
                    list3Li[x].classList.remove('now');
                }
            }
            else if (i == 2) {
                for (var x = 0; x < list3Li.length; x++) {
                    list3Li[x].style.transition = (x + 1) * (0.3) + 's ease .3s';
                    list3Li[x].classList.add('now');
                }
                for (var v = 0; v < list2Li.length; v++) {
                    list2Li[v].style.transition = 0 + 's ease .3s';
                    list2Li[v].classList.remove('now');
                }
                for (var k = 0; k < list1Li.length; k++) {
                    list1Li[k].style.transition = 0 + 's ease .3s';
                    list2Li[k].classList.remove('now');
                }
            }
        };
        bigBox.onmouseleave = function () {
            bigBox.classList.remove('now');
            for (var j = 0; j < bigBoxLi.length; j++) {
                bigBoxLi[j].style.transition = 0 + 's ease .3s';
                bigBoxLi[j].classList.remove('now');
            }
        }
    }else if(i>=3){
        headerNavLi[i].onmouseenter = function () {
            bigBox.classList.remove('now');
            for (var j = 0; j < bigBoxLi.length; j++) {
                bigBoxLi[j].style.transition = 0 + 's ease .3s';
                bigBoxLi[j].classList.remove('now');
            }
        }
    }
}


searchBtn.onclick = function(){
    headerNav.style.left = '-720px';
    searchBtn.style.marginLeft = '-50px';
    geRen.classList.add('now');
    searchClose.classList.add('now');
    searchInput.classList.add('now');
    BG.style.display = 'block';
    searchNav.style.display = 'block';
    return false;
};
searchClose.onclick = function(){
    headerNav.style.left = '0px';
    searchBtn.style.marginLeft = '0';
    geRen.classList.remove('now');
    searchClose.classList.remove('now');
    searchInput.classList.remove('now');
    BG.style.display = 'none';
    searchNav.style.display = 'none';
    return false;
};

geRen.onmouseenter = function(){
    BG.style.display = 'block';
    gerenBox.style.display = 'block';
    for (var i = 0; i < gerenBoxLi.length; i++){
        gerenBoxLi[i].style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
        gerenBoxLi[i].style.transition = (i + 1) * (0.4) + 's ease .3s';
    }
    return false;
};

gerenBox.onmouseleave = function(){
    BG.style.display = 'none';
    gerenBox.style.display = 'none';
    for (var i = 0; i < gerenBoxLi.length; i++){
        gerenBoxLi[i].style.transform = 'matrix(1, 0, 0, 1, 0, -25)';
        gerenBoxLi[i].style.transition = 0 + 's ease .3s';
    }
    return false;
};
