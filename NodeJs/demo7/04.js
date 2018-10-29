/**
 * 
 * 讲解res的属性     还有地址栏的规定
 * 
 */
var express =require("express");
var app = express();

app.get("/Ab",(req,res)=>{
    res.send("data");
})
app.get("/student/:id",(req,res)=>{
    var id = req.params.id;
    var reg = /^\d{5}$/.test(id)
    if(reg){
        res.send("学生id为:"+id)
    }else{
        res.send("查无此人")
    }
})
app.get("/:username/:id",(req,res)=>{
    var username = req.params.username;
    var uid = req.params.id;
    res.write(username);
    //如果写成send会报 Can't set headers after they are sent.
    // res.send(uid);
    res.end(uid);
})

app.listen(3000)