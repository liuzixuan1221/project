function GetRequest() {

    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

var Request = new Object();
Request = GetRequest();
var num = Request['id'];


$.get("js/fenleiJson.json",function(data){
    var _data = eval(data);
    $.each($(_data),function(i){
        var data = _data[i].list;
        $.each($(data),function(j){
            var id = data[j].id;
            if (num == id){
                //var $oText = $("<div class='text'></div>");
                var $oTitle = $("<h3 class='title'></h3>");
                var $oTit = $("<p class='tit'></p>");
                var $oTitSpan = $("<span class='titSpan'></span>");
                var $oPrice = $("<p class='price'></p>");
                var $oPriceSpan = $("<span class='priceSpan'>￥</span>");
                $(".text").append($oTitle);
                $(".text").append($oTit);
                $(".text").append($oPrice);

                $oTitle[0].innerHTML = data[j].name;
                $oTit[0].innerHTML = data[j].info;
                $oTitSpan[0].innerHTML = data[j].span;
                $oPrice[0].innerHTML = data[j].price;
                ($oTitSpan).prependTo($oTit);
                ($oPriceSpan).prependTo($oPrice);

                var idata = data[j].bannerImg;
                $.each($(idata),function(k){
                    var $oSwiperSlide = $("<div class='swiper-slide'></div>");
                    var $oImg = $("<img src="+idata[k].pic+" />");
                    $oSwiperSlide.append($oImg);
                    $(".swiper-wrapper").append($oSwiperSlide);
                    //$oImg.attr("class","banImg");
                })
            }
        })
    })

    var swiper1 = new Swiper('#swiper1', {
        pagination: {
            el: '.swiper-pagination'
        },
    });
});






var swiper2 = new Swiper('#swiper2', {
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});

$(window).scroll(function(){
    if ( $(document).scrollTop() > 100 ){
        $(".headerBox1").fadeOut(function(){
            $(".headerBox2").fadeIn();
        });
        $(".backTop").fadeIn();
    }
    else{
        $(".headerBox2").fadeOut(function(){
            $(".headerBox1").fadeIn();
        });
        $(".backTop").fadeOut();
    }
});
$(".backTop").on("click",function(){
    $('html ,body').animate({scrollTop: 0}, 200);
    return false;
});

var str = localStorage.getItem("buy");
window.localStorage.setItem("buy",str);


$(".add").on("click",function(){
    console.log(str);

    window.localStorage.setItem("buy",str+","+num);

});

$(".buy").on("click",function(){
    window.location.href = "gwc.html";
    return false;
});