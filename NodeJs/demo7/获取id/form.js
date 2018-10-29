var express = require("express");
var app = express();
app.get(/^\/student\/([\d]{9})$/,(req,res)=>{
    console.log(req.params);
    res.send("该学生的id为"+req.params[0])
})
app.get("/teacher/:gonghao",function(req,res){
    res.send("该老师的工号为"+req.params.gonghao)
})

app.listen(3000)
