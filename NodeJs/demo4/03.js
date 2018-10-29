//var People = require("./bar/bar.js");
var People = require("bar.js");     //如果在node_modules文件夹里,则不用先前缀
var xiaoming = new People("小明",22,"男");
xiaoming.sayHello();