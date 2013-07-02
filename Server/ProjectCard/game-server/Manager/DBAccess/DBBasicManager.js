/**
 * Created with JetBrains WebStorm.
 * User: Jay
 * Date: 13-7-1
 * Time: 上午11:21
 * To change this template use File | Settings | File Templates.
 */
//基本的DB操作
var mongoSql=require('mongodb');
var dbHost = "127.0.0.1";
var dbPort =  27017;
var dbName = 'ProjectCard';
module.exports.operateCollection = function(collectionName,operate){
    var dbServer = new mongoSql.Server(dbHost,dbPort,{});
    var dbConnector = new mongoSql.Db(dbName,dbServer,{safe:true});
    dbConnector.open(function(dbErr,db){
        if(!dbErr){
             db.collection(collectionName,{safe:true},function(collectionErr,collection){
                 if(!collectionErr){
                     operate(collection);
                 }
                 else{
                     console.log(collectionErr);
                 }
             });
        }
        else{
            console.log(dbErr);
        }
        db.close();
    });
}