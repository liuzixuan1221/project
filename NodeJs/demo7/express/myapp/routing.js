var express = require("express");
var app = express();




//对网站首页的访问返回"Hello World!"字样
app.get('/get',function(req,res){
    res.send('Hello World');
});

//网站首页接收 POST 请求
app.post('/post',function(req,res){
    res.end('Got a POST request');
});

// /user 节点接收 PUT 请求
app.put("/put",function(req,res){
    res.send('Got a PUT request at /user');
})

// /user 节点接收 DELETE 请求
app.delete("/delete",function(req,res){
    res.send('Got a DELETE request at /user');
})

app.all('/secret',function(req,res,next){
    console.log('Accessing the secret section ...');
    next()
    //pass control to the next handler
})

var cb0 = function(req,res,next){
    console.log('CB0');
    next();
}
var cb1 = function(req,res,next){
    console.log('CB1');
    next();
}
var cb2 = function(req,res){
    res.send('hello from c!');
}

app.get('/example/c',[cb0,cb1,cb2]);


var ab0 = function(req,res,next){
    console.log('AB0');
    next();
}
var ab1 = function(req,res,next){
    console.log('AB1');
    next();
}

app.get('/example/d', [ab0, ab1], function (req, res, next) {
    console.log('response will be sent by the next function ...');
    next();
}, function (req, res) {
    res.send('Hello from D!');
});


app.listen(3000);

