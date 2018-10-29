var num = localStorage.getItem('xinghao');
var oNavList = document.getElementsByClassName('navList')[0];
var oNavBox = oNavList.parentNode;
var oPlease = document.getElementsByClassName('please')[0];
var oZengPin = document.getElementsByClassName('zengPin')[0];
if (!localStorage.getItem('xinghao')){
    console.log(1);
    oNavList.classList.add('now');
    oZengPin.style.display = 'none';
    oNavList.innerHTML = '购物车中没有商品呦,到处逛逛吧~';
}else{
    oZengPin.style.display = 'block';
    oNavList.classList.remove('now');
    oNavList.innerHTML = '';
    ajax('js/shangcheng.json',function(data){
        var _data = eval("("+data+")");
        let str = ``;
        let str1 = ``;
        oNavList.classList.remove('now');
        oNavList.innerHTML = "";
        for (var i = 0; i < _data.length; i++) {
            var xingHao = _data[i].xinghao;
            if(num == xingHao){
                var oListBox = document.createElement('div');


                oListBox.className = 'listBox clearfix';

                oNavList.appendChild(oListBox);

                var youhui = parseInt(_data[i].oldPrice - _data[i].nowPrice);
                var oldPirce = _data[i].oldPrice;
                var xiaoji = _data[i].nowPrice;
                console.log(oldPirce);
                console.log(youhui);
                str= `<div class="label fl">
                <i class="checkbox now"></i>
                </div>
                <div class="pic fl">
                <a href="">
                <img src=${_data[i].smallImg[0].pic} alt="">
                </a>
                </div>
                <div class="name fl">
                <a href="">${_data[i].name}</a>
            <br />
            <div class="choose">
                <div class="text fl">

                选择手机服务

                </div>
                </div>
                </div>
                <div class="price fl">${_data[i].oldPrice}</div>
                <div class="quantity fl">
                <span class="numBox">
                <a href="">-</a>
                <input class="number" type="tel" min="1" value="1">
                <a href="">+</a>
                </span>
                </div>
                <div class="favorable fl">${youhui}</div>
                <div class="integral fl">${_data[i].nowPrice}</div>
                <div class="totalPrice fl">${_data[i].price}</div>
                <div class="operating fl">
                <a href="">加入到收藏夹</a>
                <br />
                <a href="" class="delete">删除</a>
                </div>`

                oListBox.innerHTML = str;



                var oNumBox = document.getElementsByClassName('numBox')[0];
                var btnJian = oNumBox.firstElementChild;
                var btnJia = oNumBox.lastElementChild;
                var oNumber = document.getElementsByClassName('number')[0];
                var oPrice = document.getElementsByClassName('price')[0];
                var oFavorable = document.getElementsByClassName('favorable')[0];
                var oIntegral = document.getElementsByClassName('integral')[0];
                var oTotalPrice = document.getElementsByClassName('totalPrice')[0];
                var number = 1;

                var oInner = document.createElement('div');

                oPlease.appendChild(oInner);
                str1 = `<div class="pleaseBox">
                    <div class="left fl">
                        <ul class="fl">
                            <li><i class="checkbox now"></i></li>
                            <li><a href="">全选</a></li>
                            <li><a href="" class="allDelete">删除选中的商品</a></li>
                            <li><a href="">移入收藏夹</a></li>
                        </ul>
                    </div>
                    <div class="right fr">
                        <div class="text fl">
                            <p>
                                已选商品
                                <span class="yixuan">${oNumber.value}</span>
                                件，合计（不含运费）：
                                <b class="heji">￥${_data[i].nowPrice}</b>
                            </p>
                            <p style="color: gray;" class="zjyh">
                                ( 商品总价：¥ ${_data[i].oldPrice} 优惠：-¥${youhui}.00 )
                            </p>
                        </div>
                        <div class="pleaseBtn fr">
                            <button>
                                去结算
                            </button>
                        </div>
                    </div>
                </div>`

                oInner.innerHTML = str1;

                var oYixuan = document.getElementsByClassName('yixuan')[0];
                var oHeji = document.getElementsByClassName('heji')[0];
                var oZjyh = document.getElementsByClassName('zjyh')[0];

                btnJian.onclick = function(){
                    number--;
                    if (number <= 1){
                        number = 1;
                    }
                    oNumber.value = number;
                    oPrice.innerHTML = oldPirce * oNumber.value;
                    oFavorable.innerHTML = youhui * oNumber.value;
                    oIntegral.innerHTML = xiaoji * oNumber.value;
                    oTotalPrice.innerHTML = xiaoji * oNumber.value + '.00';
                    oYixuan.innerHTML = oNumber.value;
                    oHeji.innerHTML = oIntegral.innerHTML;
                    oZjyh.innerHTML = "( 商品总价：¥ " + oPrice.innerHTML + " 优惠：-¥" + oFavorable.innerHTML + ".00 )"
                    return false;
                };
                btnJia.onclick = function(){
                    number++;
                    if (number >= 10){
                        number = 10;
                    }
                    oNumber.value = number;
                    oPrice.innerHTML = oldPirce * oNumber.value;
                    oFavorable.innerHTML = youhui * oNumber.value;
                    oIntegral.innerHTML = xiaoji * oNumber.value;
                    oTotalPrice.innerHTML = xiaoji * oNumber.value + '.00';
                    oYixuan.innerHTML = oNumber.value;
                    oHeji.innerHTML = oIntegral.innerHTML;
                    oZjyh.innerHTML = "( 商品总价：¥ " + oPrice.innerHTML + " 优惠：-¥" + oFavorable.innerHTML + ".00 )"
                    return false;
                };

                var oCheckbox = document.getElementsByClassName('checkbox');
                var oDelete = document.getElementsByClassName('delete')[0];
                var oAllDelete = document.getElementsByClassName('allDelete')[0];
                var flag = false;
                for (var c = 0; c < oCheckbox.length; c++) {
                    oCheckbox[c].onclick = function(){
                        if (flag){
                            for (var j = 0; j < oCheckbox.length; j++) {
                                oCheckbox[j].classList.add('now');
                                oYixuan.innerHTML = oNumber.value;
                                oHeji.innerHTML = oIntegral.innerHTML;
                                oZjyh.innerHTML = "( 商品总价：¥ " + oPrice.innerHTML + " 优惠：-¥" + oFavorable.innerHTML + ".00 )"

                                flag = false;
                            }
                        }else{
                            for (var j = 0; j < oCheckbox.length; j++) {
                                oCheckbox[j].classList.remove('now');
                                oYixuan.innerHTML = 0;
                                oHeji.innerHTML = 0;
                                oZjyh.innerHTML = "( 商品总价：¥0  优惠：-¥ 00.00 )";
                                flag = true;
                            }
                        }
                    }
                }

                oAllDelete.onclick = function(){
                    if (!flag){
                        oNavList.removeChild(oListBox);
                        oNavBox.removeChild(oZengPin);
                        oNavList.classList.add('now');
                        oNavList.innerHTML = '购物车中没有商品呦,到处逛逛吧~';
                        for (var d = 0; d < oCheckbox.length; d++) {
                            oCheckbox[d].classList.remove('now');
                            oYixuan.innerHTML = 0;
                            oHeji.innerHTML = 0;
                            oZjyh.innerHTML = "( 商品总价：¥0  优惠：-¥ 00.00 )";
                        }
                        localStorage.clear();
                    }
                    return false;
                };

                oDelete.onclick = function(){
                    oNavList.removeChild(oListBox);
                    oNavBox.removeChild(oZengPin);
                    oNavList.classList.add('now');
                    oNavList.innerHTML = '购物车中没有商品呦,到处逛逛吧~';
                    for (var j = 0; j < oCheckbox.length; j++) {
                        oCheckbox[j].classList.remove('now');
                        oYixuan.innerHTML = 0;
                        oHeji.innerHTML = 0;
                        oZjyh.innerHTML = "( 商品总价：¥0  优惠：-¥ 00.00 )";
                    }
                    localStorage.clear();
                    return false;
                }

            }
        }


    },function(){});
}







