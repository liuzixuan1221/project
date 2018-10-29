var express = require("express");
var app = express();

app.use(express.static('public'));  
// express.static 中间件   public文件存放的目录
//所有文件的路径都是相对于存放目录的，因此，存放静态文件的目录名不会出现在 URL 中。
app.listen(3000)