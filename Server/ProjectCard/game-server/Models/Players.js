/**
 * Created with JetBrains WebStorm.
 * User: steve
 * Date: 13-7-3
 * Time: 下午4:13
 * To change this template use File | Settings | File Templates.
 */
var Users=require('./Users.js');
var GameAI=require('../Manager/AI/GameAI.js');


//构造函数
module.exports = function(uId,nickName){
    //实例化User对象，用于继承
    this.User = new Users(uId,nickName);
    this.UId=this.User.UId;
    this.NickName = this.User.NickName;
    this.AnalysisCardType = GameAI.AnalysisCardType("aaaa");
}