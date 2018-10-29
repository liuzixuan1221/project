var express = require("express");
var app = express();
app.get("/aa",(req,res)=>{
    res.send("data")
}).listen(3000)


var http = require("http");
http.createServer((req,res)=>{
    if(req.url == "/aa"){
        res.end("data")
    }
})


/**
 * 
 * 1、res.send({})   如果涉及到动态数据的时候用此方法
 * 2、res.end()      涉及到静态数据用此方法
 * 
 */