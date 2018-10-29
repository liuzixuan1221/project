var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// 适用开发和生产环境
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.methodOverride());
app.use(express.session({ secret: 'your secret here' }));
app.use(express.bodyParser());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// 只针对开发环境
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

//错误处理中间件应当在路由加载之后才能加载

if ('development' == app.get('env')) {
    app.use(errorHandler());
  }
  
  var server = http.createServer(app);
  server.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
  });