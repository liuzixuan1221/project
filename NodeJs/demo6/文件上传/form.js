var http = require("http"); //http服务器
var formidable = require('formidable'); //处理form表单的请求数据
var util = require("util"); //实用工具

http.createServer((req,res)=>{
    if (req.url == '/dopost' && req.method.toLowerCase() == 'POST'){
        var form = new formidable.IncomingForm();
        form.uploadDir = "./upload"
        form.parse(req,function(err,fields,file){
            if(err){
                throw err;
            }
            //fields    文本域
            console.log(fields);
            console.log(file);
            res.end("success")
        })

        /*

            1、获取路径
            2、获取到扩展名
            3、加上时间戳
            4、fs rename 修改名称
            5、完成 上传

        */
    }

}).listen(3000,"127.0.0.1");