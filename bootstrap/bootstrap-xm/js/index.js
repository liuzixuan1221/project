$(function(){
    var flag = true;
    $("#btnYc").click(function(){
        if (flag){
            $("#collapse").attr("style","display:block!important");
            flag = false;
        }
        else{
            $("#collapse").attr("style","display:none!important");
            flag = true;
        }
    });
    $("#xjt").click(function(){
        $("html,body").animate({"scrollTop":($(".fuwuBox").offset().top) + "px"});
        return false;
    });

    function fade(){
        $.each($(".fwBox"),function(i){
            setTimeout(function(){
                ($(".fwBox")).eq(i).addClass("now");
            },i*5+"00");
        })
    }
    //if (){
    //
    //}

    window.onscroll = function(){
        var H = document.body.scrollTop||document.documentElement.scrollTop;
        if (H > $(".card>div").offset().top && H< $(".zhanshiBox").offset().top){
            fade();
        }
        if (H > ($(".aboutUs").offset().top - 600)){
            setTimeout(function(){
                $(".aboutUsBox>h1").addClass("now");
            },0);
            setTimeout(function(){
                $(".aboutUsBox>p").addClass("now");
            },500);
            setTimeout(function(){
                $(".aboutUsBox>h4").addClass("now");
                $(".aboutUsBox>address").addClass("now");
            },1000);
            setTimeout(function(){
                $(".aboutUsBox>.city").addClass("now");
            },1500)
        }
        if (H > $(".user").offset().top){
            $(".erWeiMa").addClass("now");
        }
    };


    var swiper2 = new Swiper('#swiper2', {
        pagination: {
            el: '.swiper-pagination',
            clickable :true
        }
    });
});

$.get("js/index.json",function(data) {
    var _data = eval(data);
    var $oGrid = $("<div class='grid'></div>");
    $(".gridBox").append($oGrid);

    $.each($(_data),function(i){
        var $oA = $("<a class='grid-item col-md-4 col-sm-6 col-xs-12' data-toggle='modal' data-target='.myModal'></a>");
        var $oImg = $("<img src=" + _data[i].img + " />");
        var $oHoverMark = $("<div class='hover-mark'></div>");
        var $oH2 = $("<h2></h2>");
        var $oP1 = $("<p></p>");
        var $oModal = $("<div class='modal fade' tabindex='-1' aria-labelledby='myModalLabel'>");
        var $oModalBox = $("<div class='modal-dialog modalBox' role='document'>");
        var $oModalContent = $("<div class='modal-content'>");
        var $oSwiper1 = $("<div class='swiper-container swiper1'>");
        var $oSwiperWrapper = $("<div class='swiper-wrapper'>");
        var $oH1 = $("<h1></h1>");
        var $oP2 = $("<p></p>");

        $oA.attr("data-target",".myModal"+_data[i].id);
        $oModal.addClass("myModal"+_data[i].id);

        $(".grid").append($oA);
        ($oA).append($oImg);
        ($oA).append($oHoverMark);
        ($oHoverMark).append($oH2);
        ($oHoverMark).append($oP1);
        ($oA).append($oModal);
        ($oModal).append($oModalBox);
        ($oModalBox).append($oModalContent);
        ($oModalContent).append($oSwiper1);
        ($oSwiper1).append($oSwiperWrapper);
        ($oSwiper1).append($oH1);
        ($oSwiper1).append($oP2);

        $oH2[0].innerHTML = _data[i].h2;
        $oH1[0].innerHTML = _data[i].h2;
        $oP1[0].innerHTML = _data[i].p;
        $oP2[0].innerHTML = _data[i].p;

        var data = _data[i].banImg;
        $.each($(data),function(j){
            var $oSwiperSlide = $("<div class='swiper-slide'></div>");
            var $oBanImg = $("<img src=" + data[j].pic +">");

            ($oSwiperWrapper).append($oSwiperSlide);
            ($oSwiperSlide).append($oBanImg);
        })
    });

    ($oGrid).masonry({
        // options
        itemSelector: '.grid-item'
        //columnWidth: 200
    });

    var swiper1 = new Swiper ('.swiper1', {
        observer: true,
        observeParents:true,
        direction:"horizontal",
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            clickable :true
        }
    });
});





