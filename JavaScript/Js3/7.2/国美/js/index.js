/**
 * Created by Administrator on 2018/7/2.
 */
var oClear = document.getElementById('clear');
var oTopIcon = document.getElementById('topIcon');

oClear.onclick = function(){
    oTopIcon.style.display = 'none';
    return false;
};