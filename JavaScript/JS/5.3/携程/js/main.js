/**
 * Created by liuzi on 2018/5/3.
 */
//var form = document.getElementById('form');
var input = document.querySelector('#form input');
var button = document.querySelector('#form button');
var icon1 = document.getElementsByClassName('icon1')[0];

input.onfocus = function(){
    input.parentNode.style.border = '1px solid #2b82f4';
    button.style.background = '#2b82f4';
    icon1.style.backgroundPosition = '-66px -635px';
}
input.onblur = function(){
    input.parentNode.style.border = '1px solid #a4cbff';
    button.style.background = '#a4cbff';
    icon1.style.backgroundPosition = '-66px -610px';
}
button.onmousemove = function(){
    button.style.background = '#299cff';
    icon1.style.backgroundPosition = '-66px -660px';
}
button.onmouseout = function(){
    if(input.onfocus == false){
        button.style.background = '#2b82f4';
        icon1.style.backgroundPosition = '-66px -635px';
    }else{
        button.style.background = '#a4cbff';
        icon1.style.backgroundPosition = '-66px -610px';
    }
}