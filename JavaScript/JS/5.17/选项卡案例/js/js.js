/**
 * Created by Administrator on 2018/5/17.
 */

var arrTit = document.querySelectorAll("#tab li"),
    arrCont = document.querySelectorAll("#tab div");
function fn(index) {
    for (var i = 0; i < arrTit.length; i++) {
        arrTit[i].classList.remove('active');
        arrCont[i].classList.remove('active');
    }
    arrTit[index].classList.add('active');
    arrCont[index].classList.add('active');
}


/*
 //直接获取索引
 for (var i = 0; i < arrTit.length; i++) {
 arrTit[i].onclick = function(){
 console.log(i)  //3
 //fn()
 }

 }*/

/*
 //自定义属性获取当前索引
 for (var i = 0; i < arrTit.length; i++) {
 arrTit[i].index = i;
 arrTit[i].onclick = function(){
 //console.log(this.index)  //3
 fn(this.index);
 }

 }*/

/*//es6  获取当前索引
 for (let i = 0; i < arrTit.length; i++) {
 arrTit[i].onclick = function(){
 fn(i);
 }

 }*/

//利用闭包 获取当前索引
/*for (var i = 0; i < arrTit.length; i++) {
    arrTit[i].onclick = (function (i) {
        return function (){
            fn(i);
        }
    })(i)
}*/

//利用闭包 获取当前索引
for (var i = 0; i < arrTit.length; i++) {
    ~function(i){
        arrTit[i].onclick = function () {
                fn(i);
        }
    }(i)
}
