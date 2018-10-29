var express = require('express');
var app = express();

//没有挂载路径的中间件，应用的每个请求都会执行该中间件
app.use(function (req,res,next){
    console.log('Time:',Date.now());
    next();
})

//挂载至 /user/:id 的中间件，任何指向 /user/:id 的请求都会执行它
app.use('/user/:id',function(req,res,next){
    console.log('Request Type',req.method);
    next();
});

//路由和句柄函数(中间件系统),处理指向 /user/:id 的 GET 请求
app.get('/user/:id', function(req,res,next){
    console.log('USER');
    next();
})

//一个中间件栈，对任何指向 /user/:id 的 HTTP 请求打印出相关信息
app.use('user/:id',function(req,res,next){
    console.log('Request URL:',req.originalUrl);
    next();
}),function(req,res,next){
    console.log('Request Type:',req.method);
    next();
}

//一个中间件栈，处理指向 /user/:id 的 GET 请求
app.get('/user/:id',function(req,res,next){
    console.log('ID',req.params.id);
    next();
},function(req,res,next) {
    res.send('User Info')
});

//处理 /user/:id, 打印出用户 id
app.get('/user/:id',function(req,res,next){
    res.end(req.params.id);
})



// 一个中间件栈，处理指向 /pass/:id 的 GET 请求
app.get('/pass/:id', function (req, res, next) {
    // 如果 pass id 为 0, 跳到下一个路由
    if (req.params.id == 0) next('route');
    // 否则将控制权交给栈中下一个中间件
    else next(); //
  }, function (req, res, next) {
    // 渲染常规页面
    res.render('regular');
  });
  
  // 处理 /pass/:id， 渲染一个特殊页面
  app.get('/pass/:id', function (req, res, next) {
    res.render('special');
  });



app.listen(3000);
