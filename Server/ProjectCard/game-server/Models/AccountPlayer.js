/**
 * Created with JetBrains WebStorm.
 * User: Jay
 * Date: 13-7-1
 * Time: 上午9:26
 * To change this template use File | Settings | File Templates.
 */
var PlayerGameInfo = require('./PlayerGameInfo.js');
//游戏中用户帐户的类，所有用户类的基类
module.exports = function(userId,userNickName,sex,accountType){
    //private
    return playerGameInfo.init(userId,userNickName,sex,accountType);
}

var playerGameInfo = {
    userId : "",
    userNickName : "",
    sex : "",
    accountType : "",
    userAvatarImageUrl : "",
    userGameInfo : "",
    init : function(userId,userNickName,sex,accountType){
        return{
            userId : userId,
            userNickName : userNickName,
            sex : sex,
            accountType : accountType,
            userGameInfo : new PlayerGameInfo()
        }
    }
}