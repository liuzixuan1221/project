var http = require("http");
var fs = require("fs");
var url = require("url");
var querystring = require("querystring")

http.createServer((req,res)=>{
    /*
    
        1、路径    url     方式      post/get
        2、接收
        3、存储
    
    */
   if(req.url == '/dopost' && req.method.toUpperCase()=="POST"){
        var allData = "";
        
        //开始接收的阶段
        /*
            传输数据时分片段区传输，防止数据量过大。卡奔进程
        */

        //开始接收数据 data固定不变
       req.addListener("data",function(chunk){
            allData += chunk;
       }) 
       //接收完毕
       req.addListener("end",function(){
           res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
           var dataObj = allData.toString();
           var obj = querystring.parse(dataObj)
           console.log(obj);
           var name = obj.username;
           var sex = obj.sex;
           var pic = obj.pic;
           res.end("姓名："+name+"性别："+sex+"图片："+pic);
       })
   }
   
   /**
    * 
    * 1、enctype     里面传递的东西
    * enctype 属性规定在将表单数据发送到服务器之前如何对其进行编码。
    * application   /x-www-form-urlencoded/默认。在发送前对所有字符进行编码（将空格转换为 "+" 符号，特殊字符转换为 ASCII HEX 值）。
    * multipart/form-data   /不对字符编码。当使用有文件上传控件的表单时，该值是必需的。
    * text/plain    /将空格转换为 "+" 符号，但不编码特殊字符。
    * 
    * 
    * 
    * 2、接收数据
    * 
    */
}).listen(3000,"127.0.0.1");