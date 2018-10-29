var mongodb =require("mongodb").MongoClient;
var setting = require("./setting");
function connectDb(){
    var url = setting.url;
    mongodb.connect(url,function(err,db){
        if(err){
            callback(err,null);
        }
        callback(err,db);
    })
}

/**
 * insert
 * insert({},function(){})
 */

 exports.add = function(collection,json,callback){
     connectDb(function(err,db){
        var dbBase = db.db("text1");
         dbBase.collection(collection).insertOne(json,function(err,data){
             console.log("插入成功");
             db.close();
         })
     })
 }
 exports.remove = function(collection,json,callback){
     connectDb(function(err,db){
        var dbBase = db.db("text1");
         dbBase.collection(collection).remove(json,function(err,data){
             console.log("删除成功");
             db.close();
         })
     })
 }
 exports.update = function(collection,json1,json2,callback){
    connectDb(function(err,db){
        var dbBase = db.db("text1");
        dbBase.collection(collection).update(json1,json2,function(err,data){
            console.log("更新成功");
            db.close();
        })
    })
}
exports.find = function(collection,callback){
    connectDb(function(err,db){
        var dbBase = db.db("text1");
        dbBase.collection(collection).find().toArray(function(err,data){
            console.log(data);
            db.close();
        })
    })
}



