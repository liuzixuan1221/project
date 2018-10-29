var http = require("http");
var fs = require("fs");

http.createServer((req,res)=>{
    fs.readdir("./albm",(err,files)=>{
        var arr = [];
        console.log(files);
        for (let i = 0; i < files.length; i++) {
            fs.stat("./albm/"+files[i],(err,stats)=>{
                if (stats.isDirectory()){
                    arr.push(files[i]);
                    console.log(arr);
                }
            })
        }
        res.end();
    });
}).listen(3000,"127.0.0.1");