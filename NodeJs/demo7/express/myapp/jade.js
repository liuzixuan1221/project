var express = require('express');
var app = express();
app.set ('view engine','jade');

app.get('/',function(req,res){
    res.render('index',{title:'Hey',message:'Hello there!'});
}).listen(3000);
