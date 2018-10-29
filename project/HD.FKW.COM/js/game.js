$(function () {
    dragPanelMove('#imgContainer','.imgContainer');
    function dragPanelMove(downDiv,moveDiv){
        $(downDiv).mousedown(function (e) {
            var isMove = true;
            var div_x = e.pageX - $(moveDiv).offset().left;
            var div_y = e.pageY - $(moveDiv).offset().top;
            $(document).mousemove(function (e) {
                if (isMove) {
                    var obj = $(moveDiv);
                    obj.css({"left":e.pageX - div_x, "top":e.pageY - div_y});
                }
            });
            $(document).mouseup(function () {
                isMove = false;
            });
        });

    }
    function stopPropagation(e) {
        if (e.stopPropagation)
            e.stopPropagation();//停止冒泡  非ie
        else
            e.cancelBubble = true;//停止冒泡 ie
    }
    $("#ruleImg").click(function (e) {
        $("#ruleImgEdit").addClass("now");
        stopPropagation(e);
        return false;
    });
    $("#home").click(function () {
        $("#ruleImgEdit").removeClass("now");
    })
});

// https://blog.csdn.net/lxiang222/article/details/72904157
// https://bbs.csdn.net/topics/391063407?page=1