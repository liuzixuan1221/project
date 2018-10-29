window.onload = function(){

var arrBoxSpan = document.getElementById('titleBox').getElementsByTagName('span');
var arrSortUl = document.getElementById('sort').getElementsByTagName('ul');

    for( var i=0;i<arrBoxSpan.length;i++){
        arrBoxSpan[i].index = i;
        arrBoxSpan[i].onmousemove = function(){
            for(var i=0;i<arrSortUl.length;i++){
                arrSortUl[i].style.display = 'none';
                arrBoxSpan[i].style.color = '#000';

            }
            arrSortUl[this.index].style.display = 'block';
            arrBoxSpan[this.index].style.color = '#009af3';
        }
    }

var arrPage1 = document.getElementsByClassName('page1');
var arrPage2 = document.getElementsByClassName('page2');
var Icon1 = document.getElementById('icon3');
var Icon2 = document.getElementById('icon4');

    Icon1.onclick = function(){
        for(var i=0; i<arrPage1.length;i++){
            arrPage1[i].style.display = 'block';
            arrPage2[i].style.display = 'none';
        }
    }
    Icon2.onclick = function(){
        for(var i=0; i<arrPage1.length;i++){
            arrPage2[i].style.display = 'block';
            arrPage1[i].style.display = 'none';
        }
    }

}