let listBox = document.getElementById('list'),
    productList = listBox.getElementsByTagName('li');
let headerBox = document.getElementById('header').getElementsByTagName('a');


(function () {
    //=>AJAX
    let productData = null;

    //=>创建AJAX实例
    let xhr = new XMLHttpRequest();

    //打开与浏览器的链接
    //get/post open(数据请求方式，接口，同步/异步)
    //=>打开一个请求的地址
    //(一般地址都是服务器提供好的，会给我们一个API接口文档)
    //最后一个参数是设置同步还是异步(FALSE:同步 TRUE:异步)
    //真实项目中最常使用的是异步，我们今天为了简单使用同步
    //

    xhr.open('GET','json/product.json',false);

    //服务器做出响应
    //xhr.onreadystatechange = () => {
    //    if (xhr.readyState === 4 && xhr.status ===200) {
    //        productData = xhr.responseText;
    //    }
    //};

    //后台做出的相应
    xhr.onreadystatechange = () => {
        //如果服务器的状态值===4 并且 状态码===200 表示服务器返回数据成功
        xhr.readyState === 4 && xhr.status === 200
        //用变量productData接收服务器的返回数据
        ? productData = xhr.responseText : null;
        //如果productData存在 通过JSON.parse把字符串的productData转化为json格式的productData
        productData ? productData = JSON.parse(productData) : null;
    };
    //发送数据
    xhr.send(null);
    //=>BIND DATA
    //建立一个空模板
    let str = ``;
    //找到productData中的每一项
    for (let i = 0;i < productData.length;i++){
        //第一步 解构赋值 找到所有的键
        let {
            title,
            img,
            price,
            time,
            hot
            } = productData[i];
        //第二步 模板字符串的拼接
        str += `<li data-time="${time}"
                    data-price="${price}"
                    data-hot="${hot}">
        <a href="javascript:;">
            <img src="${img}" alt="">
            <p>${title}</p>
            <span>￥${price}</span><br />
            <span>时间：${time}</span><br />
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
                //去除-   2017-1-1    --> 201711  g--> global 全局匹配
                aInn = aInn.replace(/-/g, '');
                bInn = bInn.replace(/-/g, '');
            }
            return (aInn - bInn) * _flag;
        });

        //for (let i = 0; i < productAry.length; i++) {
        //    let curLi = productAry[i];
        //    listBox.appendChild(curLi);
        //}
        //文档碎片 避免回流
        let frg = document.createDocumentFragment();
        console.log(frg);
        for (let i = 0; i < productAry.length; i++) {
            frg.appendChild(productAry[i]);
            console.log(frg);
        }
        listBox.appendChild(frg);
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
