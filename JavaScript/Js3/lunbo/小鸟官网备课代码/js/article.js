$(function(){
    //载入头部和尾部
    //$("#header").load("header.html")
    //$("#footer").load("footer.html")

    //获取页面url传过来的参数
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
    var num1 = Request['xixi'];
    var num2 = Request['heihei'];

    var result = articleData[num1+num2]
    console.log(result)
    //载入数据
    loadData(result)
    //载入数据
    function loadData(d){
        $("#head").html(d.data.typeTitle)
        $("#subhead").html(d.data.typeEntitle)
        $("#title").html(d.data.title)
        $("#time").html(d.data.updateAt)
        $("#author").html(d.data.updateByFullName)
        $("#cover").attr("src",d.data.coverImg)
        $("#content").html(d.data.content)
    }
    //喜欢加一
    var likeNum=20;
    $(".main-box .like_btn_wrap .like_btn").click(function(){
        likeNum++;
        $(this).next().html("&nbsp;喜欢("+likeNum+")")
    })
})