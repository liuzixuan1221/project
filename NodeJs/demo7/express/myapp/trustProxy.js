var express = require('express');
var app = express;
app.set('trust proxy','loopback')   //  指定唯一子网
app.set('trust proxy','loopback,123.123.123.123')// 指定子网和IP地址
app.set('trust proxy','loopback,linklocal,uniquelocal')// 指定多个子网
app.set('trust proxy',['loopback,123.123.123.123'])// 使用数组指定多个子网


app.set('trust proxy',function(ip){
    if (ip === '127.0.0.1'|| ip === '123.123.123.123') return true;//受信的IP地址
    else return false;
})

app.listen(3000);