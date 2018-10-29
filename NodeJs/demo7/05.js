/**
 * 
 * app.use及默认路径
 * 
 */

 var express = require("express");
 var app = express();
 //如果路径里面没有任何东西时，那么默认的路径为"/"        
 app.use((req,res,next)=>{
    console.log(new Date);
    next();                 //next 执行函数
 })

app.get("/admin",(req,res)=>{
    console.log(req.originalUrl)        //  /后面所有的地址
    console.log(req.baseUrl)            //  空白的
    console.log(req.path)               //  /后面?之前的
})

 app.listen(3000)