/*
* 1、响应头案例   知识点     js  indexof
*       node没有web容器的概念
* 2、模块  exports module.export
* 3、模板引擎  ejs jade    art-template
*
* */


var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");
http.createServer((req,res)=>{
    var pathname = url.parse(req.url).pathname;
    //判断地址栏里面输入的是文件地址还是文件夹地址
    if (pathname.indexOf(".") == -1){
        pathname +="index.html"
    }
    var fileurl = "./"+path.normalize("./static"+pathname);
    console.log(fileurl);
    var extanme = path.extname(pathname);
    fs.readFile(fileurl,(err,data)=>{
        console.log(data);
        if (err){
            res.end("404,页面未找到")
        } else{
            getmime(extanme,(mime)=>{
                res.writeHead(200,{"Content-type":mime});
                res.end(data);
            })
        }
    });
}).listen(3000,"127.0.0.1");

function getmime(extname,callback){
    fs.readFile("./mime.json",(err,data)=>{
        var mimeJson = JSON.parse(data);
        console.log(mimeJson);
        var mime = mimeJson[extname] || "text/plain";
        callback(mime);
    })
}

