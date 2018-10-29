var express = require('express');
var app = express;

app.use('/book/:id',function(req,res,next){
    console.log('ID:',req.params.id);
    next();
})

app.route('/book')
    .get(function(req,res){
        res.send('Get a random book');
    })
    .post(function(req,res){
        res.send('Add a book');
    })
    .put(function(req,res){
        res.send('Update the book');
    });

    var express = require('express');
    var router = express.Router();

    //特针对于该路由的中间件
    router.use(function timeLog(req,res,next){
        console.log('Time:',Date.now());
        next();
    })

    // 定义网站主页的路由
    router.get('/', function(req, res) {
        res.send('Birds home page');
    });

    // 定义 about 页面的路由
    router.get('/about', function(req, res) {
        res.send('About birds');
    });
  
    module.exports = router;

    var birds = require('./birds');

    app.use('/birds', birds);