/**
 * Created by liuzi on 2018/7/12.
 */
window.onload=function(){

    var aBj = document.getElementById('bj');
    var oX = document.getElementById('x');
    var aDiv = oX.querySelectorAll(".x>div");
    var aDiv12 = oX.querySelectorAll('.x>div>div');

    for(let i=0;i<aDiv.length;i++){
        aDiv[i].onmouseover=function(){
            for(let j=0;j<aDiv12.length;j++){
                aDiv12[j].style.display='none';
            }
            aDiv12[i].style.display='block';
            aBj.style.display='block';
        }
        aDiv[i].onmouseout=function(){
            for(let j=0;j<aDiv12.length;j++){

            }
            aDiv12[i].style.display='none';
            aBj.style.display='none';
        };
    }

















}