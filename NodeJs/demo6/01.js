/*

            1、获取路径
            2、获取到扩展名
            3、加上时间戳
            4、fs rename 修改名称
            5、完成 上传

*/

var http = require("http");                 //加载http
var formidable = require("formidable");     //加载form表单处理插件
var path = require("path");                 //加载path模块，从而取得路径
var sd = require("silly-datetime");         //加载时间插件
var fs = require("fs");                     //加载fs模块

//创建服务器
http.createServer((req,res)=>{
    //创建表单请求
    //前端发送的请求路径如果是/dopost请求的话，并且请求方式是post
    if (req.url == '/dopost' && req.method.toUpperCase() == 'POST'){
        //实例form表单请求函数
        var form = new formidable.IncomingForm();
        //创建图片保存的路径
        form.uploadDir = "./文件上传/upload";   //定义上传文件时临时存放文件的地方。
        //解析form请求数据    err错误   fields文本域   files文件域
        form.parse(req,function(err,fields,files){
            //fields 文本域    输入框和redio的数据都在这里面
            //files  文件域     

            //获取扩展名
            var extname = path.extname(files.pic.name);
            //获取时间
            var tt = sd.format(new Date,"YYYY-MM-DD-HH-mm-ss");
            //获取原始本地路径     
            var oldpath = __dirname + "/" + files.pic.path; //__dirname绝对路径
            //获取新路径
            var newpath = __dirname + "/文件上传/upload/" + tt + extname;
            //修改上传文件的名称
            fs.rename(oldpath,newpath,function(err){
                if (err){
                    //抛出错误
                    throw err;
                } else{
                    res.writeHead(200,{"Content-type":"text/plain;charset=utf-8"});
                    res.end("改名成功");
                }
            })
        })
    }else{
        res.writeHead(200,{"Content-type":"text/plain;charset=utf-8"});
        res.end("修改失败");
    }
}).listen(3000,"127.0.0.1")        

//ejs   art-template jade