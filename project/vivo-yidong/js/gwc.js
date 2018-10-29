if (localStorage.getItem("buy")){
    $(".notBox").attr("style","display:none");
    $(".hasBox").attr("style","display:block");
}else{
    $(".notBox").attr("style","display:block");
    $(".hasBox").attr("style","display:none");
}


var str = localStorage.getItem("buy");
console.log(str);

var arr = str.split(',');
console.log(arr);



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

var buy = window.localStorage.getItem("buy");

$.get("js/fenleiJson.json",function(data){
    var _data = eval(data);
    $.each($(_data),function(i){
        var data = _data[i].list;
        $.each($(data),function(j){
            var id = data[j].id;
            $.each($(arr),function(i){
                if (($(arr)[i]) == id){
                    var oLi = $("<li class='listItem'></li>");
                    oLi.html('<div class="wrapper">'+
                        '<div class="checkBox">'+
                        '<b class="check now"></b>'+
                        '</div>'+
                        '<div class="picBox">'+
                        '<img src='+data[j].bannerImg[0].pic+' alt="">'+
                        '</div>'+
                        '<div class="infoBox">'+
                        '<h2>'+data[j].name+'</h2>'+
                        '<p>'+data[j].info+'</p>'+
                        '<p class="price">￥'+data[j].price+'.00</p>'+
                        '<div class="number">'+
                        '<div class="jian">-</div>'+
                        '<input type="text" value="1" readonly>'+
                        '<div class="jia">+</div>'+
                        '</div>'+
                        '<div class="del">'+
                        '<a href="">'+
                        '<img src="images/icon-delete_b18b164.png" alt="">'+
                        '</a>'+
                        '</div>'+
                        '</div>'+
                        '</div>');
                    $(".hasBox>ul").append(oLi);

                    $(".del").on("click",function(){
                        $("#BG").fadeIn();
                        $("#del").fadeIn();
                        $("#del .qd").on("click",function(){
                            window.localStorage.removeItem("buy");
                            $("#BG").fadeOut();
                            $("#del").fadeOut();
                            $(".notBox").attr("style","display:block");
                            $(".hasBox").attr("style","display:none");
                        });
                        $("#del .qx").on("click",function(){
                            $("#BG").fadeOut();
                            $("#del").fadeOut();
                        });

                        return false;
                    });

                    var flag = true;
                    $(".check").on("click",function(){
                        if (flag){
                            $(this).removeClass("now");
                            flag = false;
                        }else {
                            $(this).addClass("now");
                            flag = true;
                        }
                    });

                    var aFlag = true;
                    $(".allCheck>b").on("click",function(){
                        if (aFlag){
                            $(this).removeClass("now");
                            $.each($(".check"),function(i){
                                $(".check").removeClass("now");
                            });
                            aFlag = false;
                        }else {
                            $(this).addClass("now");
                            $.each($(".check"),function(i){
                                $(".check").addClass("now");
                            });
                            aFlag = true;
                        }
                    });
                    var sl =1;
                    $(".jia").on("click",function(){
                        sl++;
                        if ( sl >=5){
                            sl=5;
                        }
                        $("input").val(sl);
                        $(".redSpan").html(sl*data[j].price+".00");
                    })
                    $(".jian").on("click",function(){
                        sl--;
                        if ( sl <=1){
                            sl=1;
                        }
                        $("input").val(sl);
                        $(".redSpan").html(sl*data[j].price+".00");

                    })

                }
            });

        })
    })
});