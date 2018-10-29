var oConBox = document.getElementById('conBox');
ajax('js/shangcheng.json',function(data){
    var _data = eval("("+data+")");
    for (var i = 0; i < _data.length; i++) {
        var aLi = document.createElement('li');
        var oA = document.createElement('a');
        var oCrnerGood = document.createElement('div');
        oCrnerGood.className = 'crner-good';
        var oImg1 = document.createElement('img');
        var oFigure = document.createElement('div');
        oFigure.className = 'figure';
        var oImg2 = document.createElement('img');
        var oSpuInfo = document.createElement('div');
        oSpuInfo.className = 'spu-info';
        var oName = document.createElement('p');
        oName.className = 'name';
        var oFeature = document.createElement('p');
        oFeature.className = 'feature';
        var oPrice = document.createElement('p');
        oPrice.className = 'price';

        oConBox.appendChild(aLi);
        aLi.appendChild(oA);
        oA.appendChild(oCrnerGood);
        oCrnerGood.appendChild(oImg1);
        oA.appendChild(oFigure);
        oFigure.appendChild(oImg2);
        oA.appendChild(oSpuInfo);
        oSpuInfo.appendChild(oName);
        oSpuInfo.appendChild(oFeature);
        oSpuInfo.appendChild(oPrice);


        oImg1.src = _data[i].hdImg;
        oImg2.src = _data[i].picImg;
        oName.innerHTML = _data[i].name;
        oFeature.innerHTML = _data[i].title;
        oPrice.innerHTML = "￥" + _data[i].price;


        var xinghao = _data[i].xinghao;
        aLi.setAttribute("xinghao",xinghao);

        aLi.onclick = function(){
            var xh = this.getAttribute('xinghao');
            window.open("buy.html?xinghao="+xh);
        }

    }
},function(){})


var aBottomA = document.getElementsByClassName('bottomA');
for (var i = 0; i < aBottomA.length; i++) {
    aBottomA[i].index = i;
    aBottomA[i].onclick = function(){
        for (var j = 0; j < aBottomA.length; j++) {
            aBottomA[j].classList.remove('now');
        }
        this.classList.add('now');

        var typeName = this.getAttribute('type');
        oConBox.innerHTML = '';

        ajax('js/shangcheng.json',function(data){
            var _data = eval("("+data+")");
            for (var i = 0; i < _data.length; i++) {
                if (_data[i].type == typeName){
                    var aLi = document.createElement('li');
                    var oA = document.createElement('a');
                    var oCrnerGood = document.createElement('div');
                    oCrnerGood.className = 'crner-good';
                    var oImg1 = document.createElement('img');
                    var oFigure = document.createElement('div');
                    oFigure.className = 'figure';
                    var oImg2 = document.createElement('img');
                    var oSpuInfo = document.createElement('div');
                    oSpuInfo.className = 'spu-info';
                    var oName = document.createElement('p');
                    oName.className = 'name';
                    var oFeature = document.createElement('p');
                    oFeature.className = 'feature';
                    var oPrice = document.createElement('p');
                    oPrice.className = 'price';

                    oConBox.appendChild(aLi);
                    aLi.appendChild(oA);
                    oA.appendChild(oCrnerGood);
                    oCrnerGood.appendChild(oImg1);
                    oA.appendChild(oFigure);
                    oFigure.appendChild(oImg2);
                    oA.appendChild(oSpuInfo);
                    oSpuInfo.appendChild(oName);
                    oSpuInfo.appendChild(oFeature);
                    oSpuInfo.appendChild(oPrice);


                    oImg1.src = _data[i].hdImg;
                    oImg2.src = _data[i].picImg;
                    oName.innerHTML = _data[i].name;
                    oFeature.innerHTML = _data[i].title;
                    oPrice.innerHTML = "￥" + _data[i].price;

                    var xinghao = _data[i].xinghao;
                    aLi.setAttribute("xinghao",xinghao);

                    aLi.onclick = function() {
                        var xh = this.getAttribute('xinghao');
                        console.log(xh);
                        window.open("buy.html?xinghao=" + xh);
                    }

                }
                else if (typeName == "all"){
                    var aLi = document.createElement('li');
                    var oA = document.createElement('a');
                    var oCrnerGood = document.createElement('div');
                    oCrnerGood.className = 'crner-good';
                    var oImg1 = document.createElement('img');
                    var oFigure = document.createElement('div');
                    oFigure.className = 'figure';
                    var oImg2 = document.createElement('img');
                    var oSpuInfo = document.createElement('div');
                    oSpuInfo.className = 'spu-info';
                    var oName = document.createElement('p');
                    oName.className = 'name';
                    var oFeature = document.createElement('p');
                    oFeature.className = 'feature';
                    var oPrice = document.createElement('p');
                    oPrice.className = 'price';

                    oConBox.appendChild(aLi);
                    aLi.appendChild(oA);
                    oA.appendChild(oCrnerGood);
                    oCrnerGood.appendChild(oImg1);
                    oA.appendChild(oFigure);
                    oFigure.appendChild(oImg2);
                    oA.appendChild(oSpuInfo);
                    oSpuInfo.appendChild(oName);
                    oSpuInfo.appendChild(oFeature);
                    oSpuInfo.appendChild(oPrice);


                    oImg1.src = _data[i].hdImg;
                    oImg2.src = _data[i].picImg;
                    oName.innerHTML = _data[i].name;
                    oFeature.innerHTML = _data[i].title;
                    oPrice.innerHTML = "￥" + _data[i].price;

                        var xinghao = _data[i].xinghao;
                        aLi.setAttribute("xinghao",xinghao);

                        aLi.onclick = function() {
                            var xh = this.getAttribute('xinghao');
                            console.log(xh);
                            window.open("buy.html?xinghao=" + xh);
                        }
                }
            }
        },function(){});



        return false;
    }
}
