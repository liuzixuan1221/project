//引用http模块 require 加载
var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){

    console.log(req.url);
    res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
    if (req.url == "/red"){
        fs.readFile("./yanse/red.html",function(err,data){
            res.end(data)
        });
    } else if(req.url == "/green") {
        fs.readFile("./yanse/green.html", function (err,data) {
            res.end(data)
        });
    }
    else if (req.url == "/red.css"){
        fs.readFile("./yanse/red.css", function (err,data) {
            res.writeHead(200,{"Content-type":"text/css"});
            res.end(data);
        });
    }
    else if (req.url == "/jm.jpg"){
        fs.readFile("./yanse/jm.jpg", function (err,data) {
            res.writeHead(200,{"Content-type":"image/jpg"});
            res.end(data);
        });
    }
    else {
        res.end("错误");
    }
});

server.listen(3000,"localhost");