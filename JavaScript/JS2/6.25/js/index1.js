let listBox = document.getElementById('list'),
    productList = listBox.getElementsByTagName('li');
let headerBox = document.getElementById('header').getElementsByTagName('a');
console.log(headerBox);

//query data获取绑定/bind data绑定数据
(function(){
//    创建ajax
    let productData = null;
    //打开与浏览器的链接
    let xhr = new XMLHttpRequest();
    //做出相应
    xhr.open('GET','json/product.json',false);
    xhr.onreadystatechange = function(){
    //    onreadystatechange 准备接收服务器改变

        xhr.readyState === 4 && xhr.status === 200 ? productData = xhr.responseText : null;

        productData ? productData = JSON.parse(productData) : null;
    };
    xhr.send(null);
    console.log(typeof productData);
//    bind data 获取请求数据
//    ``模板字符串
    let str=``;
    for(let i = 0;i < productData.length;i++){
        let {title,price,time,hot,img} = productData[i];
        //解构出来的title===productData[i].title


        //模板字符串只能用Js的语言
        //${time} time就是解构出来的time

        //<li data-time="${time}" data-price="${price}" data-hot="${hot}">盒子整个排序
        //str += 所有的li
        str += `<li data-time="${time}" data-price="${price}" data-hot="${hot}"><a href="javascript:;">
            <img src="${img}" alt="">
            <p>${title}</p>
            <span>￥${price}</span><br/>
            <span>时间：${time}</span><br/>
            <span>热度：${hot}</span>
        </a></li>`;
    }

    listBox.innerHTML = str;

})();

//=>HANDLE CLICK
(function(){
    let sortList = function (){
        //点击谁 this就是谁
        let {index: _index, flag: _flag} = this;
            //将productList类数组转换成productAry数组
            //productAry = [].slice.call(productList); ES5
            //productAry = Array.from(productList); ES6
            //productAry = [...productList];    ...展开运算符
            //[...productAry] = productList;    ...剩余运算符
            productAry = [].slice.call(productList);

        productAry.sort((a,b) => {
            //'data-time', 'data-price', 'data-hot'尽量与上面顺序相同    与页面上的相同 索引对应
            let ary = ['data-time', 'data-price', 'data-hot'];
            //getAttribute获取属性
            //通过getAttribute方法获取到ary[_index]属性
            let aInn = a.getAttribute(ary[_index]),
                bInn = b.getAttribute(ary[_index]);
            if (_index === 0) {
                //去除-   2017-1-1    --> 201711  g-->全局匹配
                aInn = aInn.replace(/-/g, '');
                bInn = bInn.replace(/-/g, '');
            }
            return (aInn - bInn) * _flag;
        });
        for (let i = 0; i < productAry.length; i++) {
            let curLi = productAry[i];
            listBox.appendChild(curLi);
        }
    };

    for (let i = 0; i < headerBox.length; i++){
        let curLink = headerBox[i];
        curLink.index = i;
        curLink.flag = -1;
        curLink.onclick = function(){
            //=>点击当前的A标签，我们需要让其余的A标签的FLAG回归原始值-1，这样下次再点击某个A标签
            //还是从-1开始乘，变为1，也就是从升序开始的
            for (let j = 0; j < headerBox.length; j++){
                let item = headerBox[j];
                if (item !== this) {
                    item.flag = -1;
                }
            }
            this.flag *= -1;
            sortList.call(this);
        };
    }
})();

