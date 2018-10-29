var express = require("express");
var app = express();

app.use(function(req,res,next){
    res.status(404).send('Sorry can find that!');
}).listen(3000);