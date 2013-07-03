module.exports = function(app) {
  return new Handler(app);
};

var Handler = function(app) {
  this.app = app;
};
var AccountPlayer = require ('../../../../Models/AccountPlayer.js');
var GameEnum = require ('../../../../Models/GameEnum.js');
var db = require ('../../../../Manager/DBAccess/DBBasicManager');
var Players = require ('../../../../Models/Players.js');
/**
 * New client entry chat server.
 *
 * @param  {Object}   msg     request message
 * @param  {Object}   session current session object
 * @param  {Function} next    next stemp callback
 * @return {Void}
 */
Handler.prototype.entry = function(msg, session, next) {
    var player = new Players(10010,"steve");
    console.log(player.UId);
    next(null, {code: 200, msg: "test"});
};

insert = function(collection){
    var player = new AccountPlayer(123,"ddd",GameEnum.Sex.Male,GameEnum.AccountType.GuestAccount);
    collection.insert(player, {safe:true}, function(operateErr, result){
        if(!operateErr){
            console.log("123");
        }
        else{
            console.log("error");
        }
    });
}


