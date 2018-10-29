/**
 * Created by liuzi on 2018/5/24.
 */
var dl = document.querySelector('header .dl');
var login = document.querySelector('.right .login');
var close = document.getElementById('X');
console.log(close);

dl.onmouseover = function(){
    login.style.display = 'block';
};
close.onclick = function(){
    login.style.display = 'none';
};