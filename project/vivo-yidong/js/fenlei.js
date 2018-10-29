$("#bottomBox").load("bottomBox.html");
var swiper1 = new Swiper('#leftSwiper', {
    direction: 'vertical',
    slidesPerView: 'auto',
    freeMode: true,
    mousewheel: true,
    observer:true,
    observeParents:true
});
var oRightSwiperSlide = document.getElementById('Right-Swiper-Slide');

$.get("js/fenleiJson.json",function(data){
    var _data = eval(data);
    $.each($(_data),function(i){
        var oListItem = document.createElement("div");
        var oBanner = document.createElement("div");
        var oBa = document.createElement("a");
        var oBimg = document.createElement("img");
        var oTitle = document.createElement("div");
        var oText = document.createElement("span");
        var oGroup = document.createElement("div");
        var oGroupUl = document.createElement("ul");

        oListItem.className = "list-item";
        oBanner.className = "banner";
        oTitle.className = "title";
        oText.className = "text";
        oGroup.className = "group";
        oGroupUl.className = "group-ul";

        $(oListItem).appendTo($(oRightSwiperSlide));
        $(oBanner).appendTo($(oListItem));
        $(oBa).appendTo($(oBanner));
        $(oBimg).appendTo($(oBa));
        $(oTitle).appendTo($(oListItem));
        $(oText).appendTo($(oTitle));
        $(oGroup).appendTo($(oListItem));
        $(oGroupUl).appendTo($(oGroup));

        oBimg.src = _data[i].lImg;
        oText.innerHTML = _data[i].fenlei;

        var data = _data[i].list;
        $.each($(data),function(j){
            var oGroupLi = document.createElement("li");
            var oGa = document.createElement("a");
            var oPic = document.createElement("p");
            var oPicImg = document.createElement("img");
            var oName = document.createElement("p");
            var oInfo = document.createElement("p");
            var oPrice = document.createElement("p");

            oPic.className = "pic";
            oName.className = "name";
            oInfo.className = "info";
            oPrice.className = "price";

            $(oGroupLi).appendTo($(oGroupUl));
            $(oGa).appendTo($(oGroupLi));
            $(oPic).appendTo($(oGa));
            $(oPicImg).appendTo($(oPic));
            $(oName).appendTo($(oGa));
            $(oInfo).appendTo($(oGa));
            $(oPrice).appendTo($(oGa));

            oPicImg.src = data[j].img;
            oName.innerHTML = data[j].name;
            oInfo.innerHTML = data[j].info;
            oPrice.innerHTML = "￥" + data[j].price;

            $(oGroupLi).on("click",function(){
                window.localStorage.setItem("id",data[j].id);
                window.location.href = "xqy.html?id="+data[j].id;
            })
        })
    });
    var swiper2 = new Swiper('#rightSwiper', {
        observer:true,
        observeParents:true,
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
            el: '.swiper-scrollbar'
        },
        mousewheel: true
    });
});


var listF = true;
$("#list").on("click",function(){
    if (listF){
        $("#BG").fadeIn();
        $("#ycList").fadeIn("slow");
        setTimeout(function(){
            $("#ycList>a").slideDown("fast");
        },500);
        listF = false;
    }
    else{
        $("#BG").fadeOut();
        $("#ycList").fadeOut("slow");
        $("#ycList>a").slideUp("fast");
        listF = true;
    }
    return false;
    event.stopPropagation();
});
$("html,body").on("click",function(){
    $("#ycList").fadeOut();
    $("#BG").fadeOut();
    $("#ycList>a").slideUp("fast");
    listF = true;
});

$(".leftSwiper li>a").on("click",function(){
    $(".leftSwiper li>a").attr("style","color:#000");
    var h = $(this).position().top;
    $(".leftBorder").css("top",h);
    $(this).attr("style","color:#3ea5bb");
    var index = $(".leftSwiper li>a").index($(this));
    var H = $(".list-item").eq(index).position().top;
    $(".rightSwiper .swiper-wrapper").attr("style","transform:translate3d(0px,-"+H+"px,0px)");
    return false;
});



//
//$(".rightSwiper").mouseup(function(){
//    console.log(1);
//});

//var x,y;
//var oRightSwiper = document.getElementsByClassName('rightSwiper')[0];
//oRightSwiper.onmousedown = function(){
//    oRightSwiper.onmousemove = function(){
//        x = event.pageX;
//        y = event.pageY;
//    }
//};
//oRightSwiper.onmouseup = function(){
//    console.log(x, y);
//};

//var x,y;
//$(document).mousedown(function(event){ //获取鼠标按下的位置
//    x = event.pageX;
//    y = event.pageY;
//    console.log(x, y);
//});

$(".swiper-wrapper").scroll = function(){
    console.log(1);
}