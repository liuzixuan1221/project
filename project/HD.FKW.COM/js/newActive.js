$(function(){
    var swiper = new Swiper('#bannerSwiper', {
        observer: true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents: true,//修改swiper的父元素时，自动初始化swiper
        autoplay:true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    });

    var aNavBox = document.getElementsByClassName('navBox');
    var aNavBoxA = document.getElementsByClassName('navBoxA');
    var oJrBox1 = document.getElementById('jrBox1');
    var oJrBox2 = document.getElementById('jrBox2');
    var oSanjiao1 = document.getElementsByClassName('sanjiao')[0];
    var oSanjiao2 = document.getElementsByClassName('sanjiao')[1];
    var oSanjiao3 = document.getElementsByClassName('sanjiao')[2];
    var oMoreNavJr = document.getElementById('moreNavJr');
    var oMoreJr = document.getElementById('moreJr');


    for (var i = 0; i < aNavBox.length; i++) {
        aNavBox[i].index = i;
        aNavBox[i].onclick = function () {
            for (var j = 0; j < aNavBoxA.length; j++) {
                aNavBox[j].classList.remove('now');
                aNavBoxA[j].classList.remove('now');
                oJrBox1.classList.remove('now');
                oJrBox2.classList.remove('now');
                oSanjiao1.classList.remove('now');
                oSanjiao2.classList.remove('now');
            }
            aNavBoxA[this.index].classList.add('now');
            if (this.index == 1){
                aNavBox[this.index].classList.add('now');
                oJrBox1.classList.add('now');
                oSanjiao1.classList.add('now');
            }
            if (this.index == 3){
                aNavBox[this.index].classList.add('now');
                oJrBox2.classList.add('now');
                oSanjiao2.classList.add('now');
            }

            $("#actContentUl").html("");
            var oType = $(this).attr('type');
            $.get('js/index.json',function(data){
                var _data = eval(data);
                $.each(_data,function(i){
                    if (oType == _data[i].type){
                        ajaxJson(_data[i]);
                    }else if (oType == 'all') {
                        ajaxJson(_data[i]);
                    }
                })
            });
            return false;
        }
    }
    var moreFlag = true;
    oMoreNavJr.onclick = function () {
        if (moreFlag){
            oSanjiao3.classList.add('now');
            oMoreJr.classList.add('now');
            moreFlag = false;
        } else {
            oSanjiao3.classList.remove('now');
            oMoreJr.classList.remove('now');
            moreFlag = true;
        }
    return false;
    };


    $.get('js/index.json',function(data){
        var _data = eval(data);
        $.each(_data,function(i){
            ajaxJson(_data[i]);
        })
    });

    $(".navJr").on("click",function () {
        $("#actContentUl").html("");
        var oType = $(this).attr('type');
        $.get('js/index.json',function(data){
            var _data = eval(data);
            $.each(_data,function(i){
                if (oType == _data[i].jrType){
                    ajaxJson(_data[i]);

                }else if (oType == _data[i].type) {
                    ajaxJson(_data[i]);
                }
            })
        });
        return false;
    });

    $(".navYx").on("click",function () {
        $("#actContentUl").html("");
        var oType = $(this).attr('type');
        $.get('js/index.json',function(data){
            var _data = eval(data);
            $.each(_data,function(i){
                if (oType == _data[i].yxType){
                    ajaxJson(_data[i]);
                }else if (oType == _data[i].type) {
                    ajaxJson(_data[i]);
                }
            })
        });
        return false;
    });
   var oPDM =  window.parent.document.getElementById('bg-mark');
   var oAcM = window.parent.document.getElementById('activeMark');
    function ajaxJson(x){
        var oActLi = $("<li class='actContentLi'></li>");
        oActLi.html(
            "<div class='actPic'>"+
            "<img class='showPic' src='"+x.pic+"' />"+
            "<img class='hoverGif' src='"+x.gif+"' />"+
            "</div>"+
            "<div class='actHot'></div>"+
            "<div class='actTxt'>"+
            "<div class='actName'>"+
            "<span>"+x.name+"</span>"+
            "</div>"+
            "<div class='actCreateImg'></div>"+
            "</div>"
        );
        $("#actContentUl").append(oActLi);

        $(oActLi).on("click",function(){
            $(".leftBox",window.parent.document).html("");
            $(oPDM).addClass('now');
            $(oAcM).addClass('now');

            var oIframe = $("<iframe src='"+x.src+"' frameborder=\"0\"></iframe>");
            var oLb = window.parent.document.getElementsByClassName('leftBox')[0];
            $(oLb).append(oIframe);
            var oMarkName = window.parent.document.getElementsByClassName('markName')[0];
            $(oMarkName).html(x.name);
            var oMarkTxt = window.parent.document.getElementsByClassName('markTxt')[0];
            $(oMarkTxt).html(x.txt);
            var oMkB = window.parent.document.getElementsByClassName('markBtn')[0];
            $(oMkB).on("click",function () {
                console.log(1);
            })
        });
        var oMkC = window.parent.document.getElementsByClassName('markClose')[0];
        $(oMkC).on("click",function(){
            $(oPDM).removeClass('now');
            $(oAcM).removeClass('now');
        });
        $(oPDM).on("click",function () {
            $(oPDM).removeClass('now');
            $(oAcM).removeClass('now');
        });
    }
});


