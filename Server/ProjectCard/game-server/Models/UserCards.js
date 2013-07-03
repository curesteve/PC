/**
 * Created with JetBrains WebStorm.
 * User: steve
 * Date: 13-7-3
 * Time: 下午6:13
 * To change this template use File | Settings | File Templates.
 */

var SuitEnum=require('./GameEnum.js');
var Utility = require('../Manager/Utility/Utility.js');
var UserCardsArr= new array();

module.exports = function(uId){
    this.UId = uId;
    //按花色整理牌
    this.CardsHeart = _getCardsBySuit(UserCardsArr,SuitEnum.Suit.Heart);
    this.CardsSpade = _getCardsBySuit(UserCardsArr,SuitEnum.Suit.Spade);
    this.CardsClub = _getCardsBySuit(UserCardsArr,SuitEnum.Suit.Club);
    this.CardsDiamond = _getCardsBySuit(UserCardsArr,SuitEnum.Suit.Diamond);
    //增加牌到队列
    this.add = function(Card){
        UserCardsArr[UserCardsArr.length-1] = Card;
    }
    //对个花色的牌进行排序
    this.sort = function(){
        Utility.sort(this.CardsHeart)
        Utility.sort(this.CardsSpade)
        Utility.sort(this.CardsClub)
        Utility.sort(this.CardsDiamond)

    }
}

//按照不同花色归类
var _getCardsBySuit = function(Arr,suit){
    var resultArr = new array();
    for (var i=0;i< Arr.length;i++){
        if(Arr[i].Suit == suit){
            resultArr[resultArr.length-1] = Arr[i];
        }
    }
    return resultArr;
}

