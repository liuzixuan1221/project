<<<<<<< HEAD
var http = require("http");
var urlLib = require("demo2");

http.createServer((req,res)=>{
    if (req.url == '/favicon.ico'){
        return
    }
    //demo2.parse();      Json.parse()    字符串转化为Json对象    stringify()    json转化为字符串
    //pathname  /red    斜杠后面的
    //query     ?       ?后面的
    var pathname = urlLib.parse(req.url).pathname;
    console.log(pathname);
    //var query = urlLib.parse(req.demo2).query;
    var query = urlLib.parse(req.url,true).query;
    //query时如果第二个参数传true,会生成一个对象

    console.log(query);
    res.end("hehe");
=======
var http = require("http");
var urlLib = require("demo2");

http.createServer((req,res)=>{
    if (req.url == '/favicon.ico'){
        return
    }
    //demo2.parse();      Json.parse()    字符串转化为Json对象    stringify()    json转化为字符串
    //pathname  /red    斜杠后面的
    //query     ?       ?后面的
    var pathname = urlLib.parse(req.url).pathname;
    console.log(pathname);
    //var query = urlLib.parse(req.demo2).query;
    var query = urlLib.parse(req.url,true).query;
    //query时如果第二个参数传true,会生成一个对象

    console.log(query);
    res.end("hehe");
>>>>>>> 76592da2cfb7668198e37fb6f09d3f758697680c
}).listen(3000,"127.0.0.1");