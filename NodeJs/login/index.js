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
        case "veri":
            /**
         * 获取验证码
         * 1、生成随机数  Math.random()   封装函数
         * 2、
         */
        var randomNum = function(min,max){
            return Math.floor(Math.random()*(max-min))+min
        }
        var str = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890qwertyuiopasdfghjklzxcvbnm";
        var returntxt = "";
        for(var i = 0; i < 4; i++){
            var txt = str[randomNum(0,str.length-1)];
            returntxt += txt;
        }
        req.flash.veri = returntxt;
        res.send({"success":returntxt})
        break;
        case "checkveri":
            if(req.query.veri == req.flash.veri){
                res.send({"success":"成功"})
            }else{
                res.send({"err":"失败"})
            }
        break;
        case "returninfo":
        if(req.flash.user){
            var sessionId = new objectId(req.flash.user._id);
            db.find("login",{"_id":sessionId},function(err,data){
                res.send({"success":"获取成功","data":data[0]})
            })
        }
        break;
        
        case "logout":
        if(req.flash.user){
            req.flash.user = {};
            // res.redirect('http://127.0.0.1:3000/login.html')
            res.send({"success":"退出成功","xxx":req.flash.user})
        }
        break;
        case "getAdminList":
        db.find("login",{},function(err,arr){
            console.log(arr.length)
            //  页数  pagestart   条数  总条数 
            var selector = !req.query.searchText?{
                tokenId:{
                    $gt:parseInt(req.query.pageStart) * 3 -3,
                    $lte:parseInt(req.query.pageStart) * 3
                }
            }:{
                username: {
                    $regex: '.*' + req.query.searchText + '.*',
                    $options: 'i'
                }
            };
            db.find("login",selector,function(err,data){
                console.log(selector)
                if(data.length == 0){
                    res.send({"err":"没有此用户"})
                }else{
                    var result = {
                        success:"成功",
                        data:{
                            pageSize:3,
                            count:arr.length,
                            list:data
                        }
                    }
                    res.send(result)
                }
            })
        })
        break;
    }
})
router.post("/AdminLogin",function(req,res){
    var actions = req.query.action;
    switch(actions){
        case "login":
        db.find("login",{"username":req.body.username},function(err,doc){
            // console.log(req.body.username);
            if(doc.length == 0){
                res.send({"err":"用户不存在"})
            }else{
                // if(req.body.veri == req.flash.veri){
                    var md5 = crypto.createHash("md5");
                    if(doc[0].password == md5.update(req.body.password).digest("base64")){
                        var user = doc[0];
                        req.flash.user = user;
                        // res.redirect('http://127.0.0.1:3000/index.html')
                        res.send({"success":"登录成功","tokenId":user.tokenId})
                        return;
                    }else{
                        res.send({"err":"密码或账号不正确"})
                        return;
                    }
                // }
                // else{
                //     res.send({"err":"验证码不正确"})
                // }
            } 
        })
        break;
        case "register":
        // case "add":
        /**
         * 
         * 用户名 username 
         * 姓名 name 
         * 手机 phone    
         * 密码 password  
         * 邮箱 
         * 权限 
         * 系统管理员 
         * 课程管理员 
         * 权限编码 0 1
         * 
         */ 

            
         var regDH = /^1[34568]\d{9}$/;
         var regYX = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;

         db.find("login",{"username":req.body.username},function(err,doc){
            if(doc.length!=0){
                res.send({"err":"该用户名已存在"})
            }else{
                // if(!regDH.test(req.body.phone)){
                //     res.send({"err":"请输入正确的手机号"});
                // }
                // else if(!regYX.test(req.body.email)){
                //     res.send({"err":"请输入正确的邮箱"});
                // }
                db.find("login",{},function(err,arr){
                    if(err){
                        console.log("系统用户不存在")
                    }else{
                        var md5 = crypto.createHash("md5");
                        var obj = {
                            "username":req.body.username,
                            "password":md5.update(req.body.password).digest("base64"),   //base64    一种加密格式
                            "name":req.body.name,
                            "phone":req.body.phone,
                            "e-mail":req.body.email,
                            "power":req.body.powerCode == 0?"系统管理员":"课程管理员",
                            "powerCode":req.body.powerCode,
                            "createAt":new Date(),
                            "upDateAt":new Date(),
                            "tokenId":arr[arr.length-1].tokenId + 1
                        }
                        db.add("login",obj,function(err,data){
                            if(err){
                                res.send({"err":"注册失败"})
                            }
                            res.send({"success":"注册成功",})
                            // res.redirect('http://127.0.0.1:3000/login.html')
                        })    
                    }
                })
            }
        })
        break;
        case "update":
        if(req.flash.user){
            var sessionPassword = req.flash.user.password;
            var md5 = crypto.createHash("md5");
            var oldPass = md5.update(req.body.oldPass).digest("base64");
            if(sessionPassword == oldPass){
                var md55 = crypto.createHash("md5");
                var newPass = md55.update(req.body.newPass).digest("base64");
                db.update("login",{"username":req.flash.user.username},{$set:{"password":newPass,"upDateAt":new Date()}},function(err,data){
                    if(err){
                        res.send({"err":"修改失败"})
                    }
                    res.send({"success":"修改成功"})
                })  
            }else{
                res.send({"err":"原密码错误"})
            }
        }
        break;
        case "delete":
            db.find("login",{"tokenId":req.body.del},function(err,doc){
                if(doc.length != 0){
                    db.remove("login",{"tokenId":req.body.del},function(err,doc){
                        if(err){
                            res.send({"err":"删除失败"})
                        }
                        else{
                            // db.find("login",{},function(err,arr){
                            //     for(var i = 0; i < arr.length; i++){
                            //         arr[i].tokenId - 1;
                            //     }
                            // })
                            res.send({"success":"删除成功"});
                        }
                    })
                }else{
                    res.send({"err":"没有可删除的ID"})
                }
            })
        break;
    }
})

module.exports = router;


