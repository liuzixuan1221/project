/**
 * Created by liuzi on 2018/4/28.
 */
var topInput = document.getElementById('topInput');
var formBj = document.getElementById('form');
var formBox = document.getElementById('formBox');
var bannerLi = document.getElementById('bannerUl').getElementsByTagName('li');
var bannerA = document.getElementById('bannerBox').getElementsByTagName('a');
var firstPlayLi = document.getElementById('firstPlayUl').getElementsByTagName('li');
var navUl = document.getElementById('nav').getElementsByTagName('ul');
var anniuLeft = document.getElementById('anniuLeft');
var anniuRight = document.getElementById('anniuRight');
var ulOne = document.getElementById('ulOne');

    topInput.onclick = function(){
        formBox.style.display = 'block';
        formBj.style.backgroundColor = '#fff';
        topInput.style.backgroundColor = '#fff';
    }


    for(var i=0;i<bannerLi.length;i++){
        bannerA[i].index = i;
        bannerA[i].onmousemove = function (){
            for(var i=0;i<bannerA.length;i++){
                bannerLi[i].style.display = 'none';
            }
            bannerLi[this.index].style.display = 'block';
            return false;
        }
    }


    for(var j=0;j<navUl.length;j++){
        firstPlayLi[j].indexx = j
        firstPlayLi[j].onclick = function(){
            for(var j=0;j<navUl.length;j++){
                navUl[j].style.display = 'none';
                firstPlayLi[j].style.color = '#333';
                firstPlayLi[j].style.borderBottom = '2px solid transparent';
            }
            navUl[this.indexx].style.display = 'block';
            firstPlayLi[this.indexx].style.color = '#52e2c0';
            firstPlayLi[this.indexx].style.borderBottom = '2px solid #52e2c0';
            return false;
        }
    }

    anniuRight.onclick = function(){
        if(ulOne.style.left == '-1500px'){
            ulOne.style.left = '-3000px';
            anniuRight.style.display = 'block';
        }else if(ulOne.style.left =='-3000px'){
            ulOne.style.left = '-3000px'
            anniuRight.style.display = 'none';
        }
        else{
            ulOne.style.left = '-1500px';
            anniuRight.style.display = 'block';
        }
    }
    anniuLeft.onclick = function(){
        if(ulOne.style.left == '-3000px'){
            ulOne.style.left = '-1500px';
        }else{
            ulOne.style.left = '0';
        }
    }