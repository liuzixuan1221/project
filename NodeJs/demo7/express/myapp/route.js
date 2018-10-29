var express = require("express");
var app = express();

//路径在一个地方指定，这样做有助于创建模块化的路由，而且减少了代码冗余和拼写错误。
app.route('/book')
    .get(function(req,res){
        res.send('Get a random book');
    })
    .post(function(req,res){
        res.send('Add a book');
    })
    .put(function(req,res){
        res.send('Update the book');
    })

app.listen(3000);