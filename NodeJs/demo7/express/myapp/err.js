var express = require("express");
var app = express();

app.use(function(err,req,res,next){
    console.error(err,stack);
    res.status(500).send('Something broke!');
}).listen(3000);



var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(bodyParser());
app.use(methodOverride());
app.use(function(err,req,res,next){
    //业务逻辑
})


app.use(bodyParser());
app.use(methodOverride());
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

function logErrors(err,req,res,next){
    console.error(err.stack);
    next(err);
}
function clientErrorHandler(err,req,res,next){
    if(req.xhr){
        res.status(500).send({ error:'Something blew up!'});
    }else{
        next(err);
    }
}

function errorHandler(err,req,res,next){
    res.status(500);
    res.render('error',{ error:err});
}

app.get('/a_route_behind_paywall', 
  function checkIfPaidSubscriber(req, res, next) {
    if(!req.user.hasPaid) { 
      // 继续处理该请求
      next('route');
    }
  }, function getPaidContent(req, res, next) {
    PaidContent.find(function(err, doc) {
      if(err) return next(err);
      res.json(doc);
    });
  });