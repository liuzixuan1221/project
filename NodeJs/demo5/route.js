/*

     功能：根据对应的路由跳转页面
     页面：首页  学生页 404页

*/
exports.showIndex = showIndex;
exports.showStudent = showStudent;
exports.show404 = show404;


function showIndex(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    res.end("首页");
}
//学生页
function showStudent(req,res){
    /*
        1、取到id  截取
    */
   res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
   var id = req.url.substr(9,3)
   res.end("学生的id:"+id);
}

function show404(req,res){
    res.end("404");
}