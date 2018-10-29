window.onload = function(){
    var arrLi = document.getElementById('hahaha').getElementsByTagName('li');
    var arrImg = document.getElementById('banner').getElementsByTagName('img');
    var bBox = document.getElementsByClassName('bBox');

        for(var i=0;i<arrLi.length;i++){
            arrLi[i].index = i;
            arrLi[i].onclick =function(){
            for(i=0;i<arrLi.length;i++){
                arrImg[i].style.display = 'none';
                arrLi[i].style.color = '#000';
            }
            arrImg[this.index].style.display = 'block';
                this.style.color = '#e53935';
        }
            //arrLi[i].onmousemove = function() {
            //    for (var i = 0; i < arrLi.length; i++) {
            //        arrLi[i].style.color = '#000';
            //    }
            //    this.style.color = '#e53935';
            //}
    }
    var arrAnniu1 =document.getElementsByClassName('anniu1');
    var Box1 = document.getElementById('box1');
    var Box2 = document.getElementById('box2');

    arrAnniu1[0].onclick = function(){
        Box1.style.display = 'block';
        Box2.style.display = 'none';
        arrAnniu1[0].style.color= '#ac1a1b';
        arrAnniu1[1].style.color= '#000';
    }
    arrAnniu1[1].onclick = function() {
        Box2.style.display = 'block';
        Box1.style.display = 'none';
        arrAnniu1[1].style.color= '#ac1a1b';
        arrAnniu1[0].style.color= '#000';
    }
}