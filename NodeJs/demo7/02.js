/**
 * 
 * 静态资源     static      public
 * 
 * 
 */

 var express = require("express");
 var app = express();
 //静态资源的加载
 app.use("/",express.static("./public"));
 app.listen(3000);