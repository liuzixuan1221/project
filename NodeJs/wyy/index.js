//接口文件
var express = require("express");
var router = express.Router();          // 建立 Router 物件
var db = require("./model/db");
var crypto = require("crypto");
var objectId = require("mongodb").ObjectID;
var ejs = require("ejs");
var fs = require("fs");
router.get("/AdminHandler",function(req,res){
    
    var actions = req.query.action;
    
    switch(actions){
        case "logout":                                                                                                                                             
        if(req.flash.phone){
            req.flash.phone = {};
            res.send({"success":"退出成功","xxx":req.flash.phone})
        }
        break;
    }
})
router.post("/AdminLogin",function(req,res){
    var actions = req.query.action;
    switch(actions){
        case "login":
        db.find("wyy",{"phone":req.body.phone},function(err,doc){
            if(doc.length == 0){
                res.send({"err":"用户不存在"})
            }else{
                var md5 = crypto.createHash("md5");
                if(doc[0].password == md5.update(req.body.password).digest("base64")){
                    var user = doc[0];
                    req.flash.user = user;
                    res.send({"success":"登录成功","tokenId":user.tokenId})
                    return;
                }else{
                    res.send({"err":"密码或账号不正确"})
                    return;
                }
            } 
        })
        break;
        case "register":
         db.find("wyy",{"phone":req.body.phone},function(err,doc){
            if(doc.length!=0){
                res.send({"err":"该用户名已存在"})
            }else{
                db.find("wyy",{},function(err,arr){
                    if(err){
                        console.log("系统用户不存在")
                    }else{
                        var md5 = crypto.createHash("md5");
                        var obj = {
                            "phone":req.body.phone,
                            "password":md5.update(req.body.password).digest("base64"),   //base64    一种加密格式
                            "tokenId":arr[arr.length-1].tokenId + 1
                        }
                        db.add("wyy",obj,function(err,data){
                            if(err){
                                res.send({"err":"注册失败"})
                            }
                            res.send({"success":"注册成功",})
                        })    
                    }
                })
            }
        })
        break;
    }
})

module.exports = router;


