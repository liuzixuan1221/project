    $(function(){

    $('#activeName').bind('input porpertychange',function () {
        $("#actName").text($('#activeName').val());
    });

    $('#virtualJoinNum').bind('input porpertychange',function () {
        $("#gamePreviewPage").contents().find('#joinNum').text($('#virtualJoinNum').val());
    })
});


