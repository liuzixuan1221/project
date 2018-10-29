var http = require("http");
var fs = require("fs");

http.createServer((req,res)=>{
    if (req.url == "/faction.ico"){
        return;
    }
    //fs.Stats 对象提供了一个文件的信息。
    fs.stat("./fs/stats.txt",function(err,stats){
        if (err){
            console.log("错误");
        }else {
            console.log(stats);
        }
        //如果 fs.Stats 对象表示一个块设备，则返回 true 。
        console.log(stats.isBlockDevice());
        //如果 fs.Stats 对象表示一个字符设备，则返回 true 。
        console.log(stats.isCharacterDevice());
        //如果 fs.Stats 对象表示一个文件系统目录，则返回 true 。
        console.log(stats.isDirectory());
    });
    //fs.lstat("./stats.txt",function(err,stat){
    //    if (err){
    //        console.log("错误");
    //    }else {
    //        console.log(stat);
    //    }
    //});
    //res.end();
    //fs.fstat("./stats.txt",function(err,stat){
    //    if (err){
    //        console.log("错误");
    //    }else {
    //        console.log(stat);
    //    }
    //});



    res.end();
}).listen(3000,"127.0.0.1");