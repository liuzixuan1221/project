 var arr = [
    {
        //1
        "position": "absolute",
        "overflow": "hidden",
        "width": 350,
        "height": 350,
        "margin-top": 20,
        "left": -240,
        "z-index": -1,
        "opacity": .6,
        "top":0
    },
    {
        //2
        "position": "absolute",
        "overflow": "hidden",
        "width": 350,
        "height": 350,
        "margin-top": 20,
        "z-index": 1,
        "top":"80",
        "opacity": 1,
        "left":0
    },
    {
        //3
        "position": "absolute",
        "overflow": "hidden",
        "width": 350,
        "height": 350,
        "margin-top": 20,
        "left": 240,
        "z-index": -1,
        "top":0,
        "opacity": .6
    }
];



var rightBox = document.getElementsByClassName('rightBox')[0];
var pImg = rightBox.children;
var colorBox = document.getElementsByClassName('colorBox')[0];
var colorBtn = colorBox.children;
var colorShadow = document.getElementsByClassName('colorShadow');
var flag = true;

autoPlay();


colorShadow[1].onclick = function () {
     if(flag){
         //点击之后，控制器立刻进制点击。
         //把开关闭合。animate方法执行完毕之后打开。
         flag = false;
         //如果等于true,那么就调用arr.push(arr.shift());
         autoPlay(true);
     }
 };


colorShadow[0].onclick = function () {
     //4.点击右侧三角，删除第一个数组元素，添加进最末尾。
     //如果等于false,那么就调用arr.unshift(arr.pop());
     autoPlay(false);
 };


 function autoPlay(bool){
     //调用autoPlay什么也没有传，那么不需要操作数组。
     if(bool !== undefined){
         //判断
         if(bool){
             arr.push(arr.shift());
         }else{
             arr.unshift(arr.pop());
         }
     }

     // 操作完数组后，按照数组样式，使用animate方法，给所有的li指定样式。
     for(var i=0;i<pImg.length;i++){
         animate(pImg[i],arr[i], function () {
             flag = true;
         });
     }
 }




 var productColor = document.getElementsByClassName('productColor');
 var lcty = document.getElementById('lcty');
 var lctyLi = lcty.children;

 var leader = 0;var target = 0;var timer = null;
 var temp = 0;


 for(var i=0;i<lctyLi.length;i++){
     //自定义属性绑定
     lctyLi[i].index = i;
     lctyLi[i].onclick = function () {
         //立刻获取目标位置。(点击一次ol中的li,获取到ul中的li，距离顶部的距离)
         target = productColor[this.index].offsetTop;
         //定时器系列
         leader = productColor[temp].offsetTop;
         clearInterval(timer);
         timer = setInterval(function () {
             var step = (target-leader)/10;
             step = step>0?Math.ceil(step):Math.floor(step);
             leader = leader + step;
             if(target - leader <= step){
                 leader = target;
             }
             window.scrollTo(0,leader);
             if(leader == target){
                 clearInterval(timer);
             }
         },30);


         for (var j = 0; j < lctyLi.length; j++) {
             lctyLi[j].classList.remove('now');
         }
         this.classList.add('now');
     };
 }

