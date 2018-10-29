$(function(){
    //载入头部和尾部
    //$("#header").load("header.html")
    //$("#footer").load("footer.html")
    //载入json数据
    $.get("js/listData.json",function(c){
        var a=eval(c)
        var data00=a[0].data.list
        loadData(data00)
    })
    function loadData(data){
        $.each(data,function(i){
            var l_img=data[i].coverImg;
            var l_h3=data[i].title;
            var l_time=data[i].creatAt.substr(0,10);
            var l_p=data[i].describe;
            var l_sys=data[i].sysId;
            $("<li haha="+l_sys+">" +
                "<img src='"+l_img+"'/>" +
                "<h3>"+l_h3+"</h3>" +
                "<p>"+l_time+"</p>" +
                "<p>"+l_p+"</p>" +
                "<span></span>" +
                "</li>").appendTo($(".main-box ul"))
        })
    }
    //更多按钮点击
    var num=0;
    $(".main-box .list-more").click(function(){
        if(num==0){
            $.get("js/listData.json",function(c){
                var a=eval(c)
                var data00=a[1].data.list
                loadData(data00)
            })
            num++;
        }else if(num==1){
            $.get("js/listData.json",function(c){
                var a=eval(c)
                var data00=a[2].data.list
                loadData(data00)
            })
            $(this).css("opacity","0")
            $(".main-box .more-img").attr("src","images/list_gomore_bg_nomore.jpg")
        }
    })
    //打开动态消息页面
    $(".clearfix>li").live("click",function(){
        window.open("article.html?xixi=xiaoniaoNews&heihei="+$(this).attr("haha"))
    })
})












