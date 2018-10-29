////方式一：通过id获取元素
//var li1 = document.getElementById('li1');
//console.log(li1);
//
////方式二：通过上下文获取元素
//var bottom = document.getElementById('bottom');
//var arrUl = bottom.getElementsByTagName('ul')[0];
//
////方式三：通过标签名获取元素 getElementsByTagName
//var arrUl = bottom.getElementsByTagName('ul')[0];
//
////方式四：通过类名获取元素  getElementsByClassName
//var arrLi1 = document.getElementsByClassName('box');
////不兼容      后面我们自己封装一个函数 解决他的兼容
//
////方式五：通过标准选择器方式获取   一般用于移动端
//var arrLi2 = document.querySelector('.box>li');
////var arrLi2 = document.querySelector(选择器)
////获取的是box下面的第一个子元素li
//
//var arrLi3 = document.querySelectorAll('.box>li');
////var arrLi3 = document.querySelectorAll(选择器)
////获取的是box下面的所有子元素li


////方式六：获取整个html文档    获取html等价获取body  由于不兼容   产生两种写法
//document.documentElement    获取html
//document.body               获取body

//获取一屏幕的高度
document.body.clientHeight||document.documentElement.clientHeight;
//获取一屏幕的宽度
document.body.clientWidth||document.documentElement.clientWidth;


//方式六：通过name获取
var Li = document.getElementsByName('title');
