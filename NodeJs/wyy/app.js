//express   作用：配置路由，编写接口
var express = require("express");
var app = express();                            //调用express方法
var db = require("./model/db");                 //链接数据库
var session = require("express-session");       //缓存    储存文件        后期保存信息
var router = require("express-router");         //路由    路由中间插件    接口的跳转
var bodyparser = require("body-parser");        //处理post请求
var cookie = require("cookie-parser");          //处理cookie请求
var index = require("./index");                 //执行接口文件
var path = require("path");                     //解析路径
var url = require("url");
var qs = require("querystring");
var flash = require("connect-flash");

// app.use(session());
app.use(cookie());      //use  使用   使用cookie
app.use(flash());
//处理post请求
//处理json数据
app.use(bodyparser.json());
//处理字符串';
app.use(bodyparser.urlencoded({extended:true}))
app.use("/Handler",index);
//加载静态资源目录
app.use(express.static(path.join(__dirname,"static")))
//使用session
app.use(session({
    secret:"fcht",  //链接sessionid
    name:"fcht",    //session名称
    cookie:{        //最大储存数量
        maxAge:90000
    },
    resave:false,   //是否重新获取
    saveUninitialized:false     //是否自动保存为初始化的内容
}))
//node解决跨域问题
app.all("*",function(req,res,next){
    //响应头   允许所有网段请求
    res.header("Access-Control-Allow-Origin", "*");
    //响应头权限
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    //方式
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    //版本
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
})

module.exports = app;