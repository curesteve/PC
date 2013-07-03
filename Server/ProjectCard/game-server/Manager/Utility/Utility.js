/**
 * Created with JetBrains WebStorm.
 * User: steve
 * Date: 13-7-3
 * Time: 下午10:41
 * To change this template use File | Settings | File Templates.
 */
//排序算法
module.exports.sort = function(Arr){
    //冒泡排序法
    function BubbleSort(){
        var n=Arr.length;
        for(var i=0;i<n-1;i++){
            var flag=false;
            for(var j=0;j<n-i;j++){
                var temp;
                if(Arr[j]<Arr[j+1]){
                    temp=Arr[j+1];
                    Arr[j+1]=Arr[j];
                    Arr[j]=temp;
                }
                flag=true;
            }
            if(!flag) return;
        }
    }
}
