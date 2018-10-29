$("#bottomBox").load("bottomBox.html");

var HLFlag = true;

$("#headerList").on("click",function(){
    if (HLFlag){
        $(this).children().addClass("now");
        $(".headerYcBox1").height("calc(100% - 100px)");
        $("header").addClass("now");
        HLFlag = false;
    }else {
        $(this).children().removeClass("now");
        $(".headerYcBox1").height("0");
        $(".headerYcBox2").height("0");
        $("header").removeClass("now");
        $(".person")[0].style.opacity = '1';
        $(".search")[0].style.transform = 'translateX(0)';
        $(".logo").get(0).style.display = 'block';
        $(".headerForm").removeClass("now");
        setTimeout(function(){
            $(".logo").removeClass("now");
        },10);
        HLFlag = true;
    }
});

$(".search").on("click",function(){
    $("#headerList").children().addClass("now");
        $(".logo").addClass("now");
        $(".headerYcBox2").height("calc(100% - 100px)");
    $(".person")[0].style.opacity = '0';
    $(this)[0].style.transform = 'translateX(-30px)';
    HLFlag = false;
        setTimeout(function(){
            $(".logo").get(0).style.display = 'none';
            $(".headerForm").addClass("now");
        },600)
});

$(".person").on("click",function(){
    $(".ycBox").fadeIn();
    $(".BG").fadeIn();
    event.stopPropagation();
});
$("html,body").on("click",function(){
    $(".ycBox").fadeOut();
    $(".BG").fadeOut();
});
var mySwiper = new Swiper ('.swiper-container', {
    //direction: 'vertical',
    loop: true,
    autoplay:{
        disableOnInteraction: false
    },
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination'
    }
});

$.get("js/indexJson.json",function(data){
    var _data = eval(data);
    $.each(_data,function(i){
        var oDiv = document.createElement("div");
        var oH2 = document.createElement("h2");
        var oUl = document.createElement("ul");


        oDiv.className = "nav_" + $(_data)[i].page;
        oH2.className = "title";
        oUl.className = "contain";

        $(oDiv).appendTo($(".nav"));
        $(oH2).appendTo($(oDiv));
        $(oUl).appendTo($(oDiv));

        oH2.innerHTML = _data[i].title;

        if (_data[i].page == 3){
            var oFLi = document.createElement("li");
            var oA = document.createElement("a");
            var oImg = document.createElement("img");
            oUl.classList.add("first");
            oFLi.className = "first";
            $(oFLi).appendTo($(oUl));
            $(oA).appendTo($(oFLi));
            $(oImg).appendTo($(oA));

            oImg.src = _data[i].lImg;
            var data = _data[i].list;
            $.each(data,function(j){
                var oLi = document.createElement("li");
                var oA = document.createElement("a");
                var oImg = document.createElement("img");

                $(oLi).appendTo($(oUl));
                $(oA).appendTo($(oLi));
                $(oImg).appendTo($(oA));

                oImg.src = data[j].img;
            })
        }
        else {
            var oFLi = document.createElement("li");
            var oA = document.createElement("a");
            var oImg = document.createElement("img");
            var oMore = document.createElement("div");
            var oAm = document.createElement("a");

            oMore.className = "more";
            oFLi.className = "first";
            $(oAm).appendTo($(oMore));
            $(oMore).appendTo($(".nav"));
            $(oFLi).appendTo($(oUl));
            $(oA).appendTo($(oFLi));
            $(oImg).appendTo($(oA));

            oAm.innerHTML = _data[i].more;
            oImg.src = _data[i].lImg;
            var data = _data[i].list;

            $.each(data,function(j){
                var oLi = document.createElement("li");
                var oA = document.createElement("a");
                var oImg = document.createElement("img");
                var oH3 = document.createElement("h3");
                var oP = document.createElement("p");
                var oSpan = document.createElement("span");

                $(oLi).appendTo($(oUl));
                $(oA).appendTo($(oLi));
                $(oImg).appendTo($(oA));
                $(oH3).appendTo($(oA));
                $(oP).appendTo($(oA));
                $(oSpan).appendTo($(oA));

                oImg.src = data[j].img;
                oH3.innerHTML = data[j].tit;
                oP.innerHTML = data[j].text;
                oSpan.innerHTML = "￥" + data[j].price;
            })
        }
    })
});

