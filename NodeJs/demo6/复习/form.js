var http = require("http");     //加载http
var fs = require("fs");         //加载fs文件操作模块
var path = require("path");     //加载 路径模块
var formidable = require("formidable");     //加载表单处理插件
var sd = require("silly-datetime");         //加载时间插件

http.createServer((req,res)=>{      //创建服务器

    if(req.url == "/dopost" && req.method.toUpperCase() == "POST"){     //判断前端请求路径 如果是dopost且请求方式为POST时
        var form = new formidable.IncomingForm();               //实例form表单请求函数
        form.uploadDir = "./upload";                            //创建图片保存路径
        form.parse(req,function(err,fields,files){              //解析form请求数据    err错误   fields文本域   files文件域
            var extname = path.extname(files.pic.name);         //获取后缀名
            var tt = sd.format(new Date,"YYYYMMDDHHmmss");      //获取时间
            var oldPath = __dirname + "/" + files.pic.path;     //获取旧本地地址
            var newPath = __dirname + "/upload" + tt + extname; //获取新地址             //__dirname 绝对路径

            fs.rename(oldPath,newPath,function(err){            //给图片重新命名
                if(err){
                    throw err;
                }else{
                    res.writeHead(200,{"Content-type":"text/plain;charset=utf-8"})
                    res.end("改名成功");
                }
            })

        })
    }

}).listen(3000,"127.0.0.1");