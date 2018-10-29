/**
 * Created by Administrator on 2018/7/9 0009.
 */
window.onload = function () {


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

 var oDiv=document.getElementById('banner_list_in');
var aLi=document.querySelectorAll('.banner_list_in li p');
    var aImg=document.querySelectorAll('.banner_list_in img');
    for(let i=0;i<aLi.length;i++){
        aLi[i].onmouseover=function(){
            for (let j=0;j<aImg.length;j++){
                aLi[j].className='';
                aImg[j].className='';
            }
            aLi[i].className='now';
            aImg[i].className='now';
        }
    }

    timer();
    var ding;
    var num=0;
    function timer(){
        ding = setInterval(function(){
            if(num<aImg.length){
                for(let i=0;i<aImg.length;i++){
                    aLi[i].className='';
                    aImg[i].className='';
                }
                aLi[num].className='now';
                aImg[num].className='now';
                num++;
            }
              else{
                num=0;
            }
        },1000)
    }


    oDiv.onmouseover = function(){
        clearInterval(ding);
    };

    oDiv.onmouseout = function(){
        clearInterval(ding);
        timer();
    }


  var aDiv1=document.getElementsByClassName('container-1');
  var aDiv2=document.getElementsByClassName('container-1_in');
    var aDiv3=document.getElementsByClassName('main-con_img-1');
    var aDiv4=document.getElementsByClassName('main-con_img-1_in');
    var aDiv5=document.getElementsByClassName('main-con_img-2-1');
    var aDiv6=document.getElementsByClassName('main-con_img-2_in');
    var aDiv7=document.getElementsByClassName('main-con_img-3-1');
    var aDiv8=document.getElementsByClassName('main-con_img-3-1_in');
    var aDiv9=document.getElementsByClassName('nav-img-1');
    var aDiv10=document.getElementsByClassName('nav-img-1_in');

    function s (x,y){
   for(let i=0;i<x.length;i++){
       for(let j=0;j<y.length;j++){
           x[j].onmouseover=function(){
              y[j].style.transform="translateY(-55px)";
           };
           x[i].onmouseout=function(){
               y[i].style.transform="translateY(0)";
           }
       }

   }

}
s(aDiv1,aDiv2)
s(aDiv3,aDiv4)
s(aDiv5,aDiv6)
s(aDiv7,aDiv8)
s(aDiv9,aDiv10)


    var oD1 = document.getElementsByClassName("nav-img-1");
    //var oD1 = document.getElementsByClassName("nav-img-1")[0];
    //var oD2 = document.getElementsByClassName("nav-img-1")[1];
    //var oD3 = document.getElementsByClassName("nav-img-1")[2];
    //var oD4 = document.getElementsByClassName("nav-img-1")[3];
    //var oD5 = document.getElementsByClassName("nav-img-1")[4];
    //var oD6 = document.getElementsByClassName("nav-img-1")[5];
    //var oD7 = document.getElementsByClassName("nav-img-1")[6];
    //var oD8 = document.getElementsByClassName("nav-img-1")[7];
    //var oD9 = document.getElementsByClassName("nav-img-1")[8];
    //var oD10 = document.getElementsByClassName("nav-img-1")[9];

        window.onscroll=function(){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            console.log(scrollTop)
            //if(scrollTop>1950){
            //    oD1.classList.add('change')
            //    oD2.classList.add('change')
            //    oD3.classList.add('change')
            //    oD4.classList.add('change')
            //    oD5.classList.add('change')
            //    oD6.classList.add('change')
            //    oD7.classList.add('change')
            //    oD8.classList.add('change')
            //    oD9.classList.add('change')
            //    oD10.classList.add('change')
            //}else if(scrollTop<1950){
            //    oD1.classList.remove('change')
            //    oD2.classList.remove('change')
            //    oD3.classList.remove('change')
            //    oD4.classList.remove('change')
            //    oD5.classList.remove('change')
            //    oD6.classList.remove('change')
            //    oD7.classList.remove('change')
            //    oD8.classList.remove('change')
            //    oD9.classList.remove('change')
            //    oD10.classList.remove('change')
            //}

            for(var i=0; i<oD1.length;i++){
                if(scrollTop>=1700){
                    oD1[i].classList.add('change')
                }else if (scrollTop<1700){
                    oD1[i].classList.remove('change')
                }
            }


    }



}






