/**
 * Created by liuzi on 2018/5/14.
 */
var left = document.getElementById('left');
var right = document.getElementById('right');
var box1 = document.getElementsByClassName('box')[0];
var box2 = document.getElementsByClassName('box')[1];
var boxTop = document.getElementsByClassName('boxTop')[0];


left.onclick = function(){
    left.classList.add('color');
    right.classList.remove('color');
    box1.classList.add('now');
    box2.classList.remove('now');
    boxTop.style.backgroundPositionY = ('0');
};
right.onclick = function(){
    right.classList.add('color');
    left.classList.remove('color');
    box2.classList.add('now');
    box1.classList.remove('now');
    boxTop.style.backgroundPositionY = ('-36px');

}