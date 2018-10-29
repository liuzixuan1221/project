var http = require("http");
var ejs = require("ejs");
var fs = require("fs");

http.createServer((req,res)=>{

    fs.readFile("./ejs.ejs",(err,data)=>{
        var type = data.toString;
        var dictionary = {
            news:[
                {title:"小明",temp:10},
                {title:"小红",temp:11},
                {title:"小刚",temp:12}
            ]
        }
        //  render  渲染
    var html = ejs.render(type,dictionary);
    res.end(html);
    })
    

}).listen(3000,"127.0.0.1");