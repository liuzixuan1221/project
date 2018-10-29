
//var http = require("http");
//var urlLib = require("url");
//
//http.createServer((req,res)=>{
//
//    if (req.url == "/favicon.ico"){
//        return;
//    }
//    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
//    var pathname = urlLib.parse(req.url).pathname;
//    var query = urlLib.parse(req.url,true).query;
//    console.log(query);
//    console.log(pathname);
//    if (pathname == "/student"&&((query.id).length) == 4){
//        res.end("介学生的ID为"+query.id);
//    }
//    if (pathname == "/teacher"&&((query.id).length) == 4){
//        res.end("介老师的ID为"+query.id);
//    }
//    else {
//        res.end("无此id");
//    }
//}).listen(3000,"127.0.0.1");



var http = require("http");
http.createServer((req,res)=>{
    if (req.url == "/favicon.ico"){
        return;
    }
    var url = req.url;
    /*

        1.根据地址栏信息 eg:/student/  显示学员信息  并且限制Id长度
            1.1 req.url 获取地址栏字段
            1.2 通过正则匹配
        2.根据地址栏信息 eg:/teacher/  显示教师信息  并且限制Id长度
        3.如果匹配不到，显示无此人员
            substring: 含头不含尾
            substr:    长度

     */

    if (url.substring(0,9) == '/student/'){
        var studentId = url.substr(9);
        if ((/^\d{5}$/).test(studentId)){
            console.log("学员id：" + studentId);
        }else {
            console.log("id不正确");
        }
    }
    else if (url.substring(0,9) == '/teacher/'){
        var teacherId = url.substr(9);
        if ((/^\d{5}$/).test(teacherId)){
            console.log("教师id：" + teacherId);
        }else {
            console.log("id不正确");
        }
    }
    else {
        console.log("查无此人");
    }
    res.end();
}).listen(3001);
var http = require("http");
var urlLib = require("url");

http.createServer((req,res)=>{

    if (req.url == "/favicon.ico"){
        return;
    }
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    var pathname = urlLib.parse(req.url).pathname;
    var query = urlLib.parse(req.url,true).query;
    console.log(query);
    console.log(pathname);
    if (pathname == "/student"&&((query.id).length) == 4){
        res.end("介学生的ID为"+query.id);
    }
    if (pathname == "/teacher"&&((query.id).length) == 4){
        res.end("介老师的ID为"+query.id);
    }
    else {
        res.end("无此id");
    }
}).listen(3000,"127.0.0.1");

