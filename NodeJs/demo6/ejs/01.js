var http = require("http");
var ejs = require("ejs");
var fs = require("fs");

http.createServer((req,res)=>{
    fs.readFile("./index.ejs",function(err,data){
        console.log(data)
        var template = data.toString();
        var dictionary = {
            news:[
                {title:"新闻",temp:10},
                {title:"关于",temp:15},
                {title:"时间",temp:12}
            ]
        }
        var html = ejs.render(template,dictionary)
        console.log(html);
        res.end(html);
    })
}).listen(3000,"127.0.0.1");