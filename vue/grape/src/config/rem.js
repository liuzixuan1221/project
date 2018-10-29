(function(doc,win){
    //获取所有元素
    var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? "orientationchange" : "resize",
    //计算窗口宽度和字体大小的转换
    recale = function(){
        var clientWidth = docEl.clientWidth;
        if(!clientWidth) return
        docEl.style.fontSize = 100 * (clientWidth/640) + "px"
        //监听设备的改变
    } 
        if(!doc.addEventListener) return
        win.addEventListener(resizeEvt,recale,false)
        doc.addEventListener('DOMContentLoaded',recale,false)
    
})(document,window)