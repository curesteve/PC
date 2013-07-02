//
//  NetPomeloManager.h
//  ProjectCard
//
//  Created by Jay.liu on 13-7-2.
//  Copyright (c) 2013年 Jay.liu. All rights reserved.
//
//引擎层控制pomelo的管理器，提供给应用层直接使用
#import <Foundation/Foundation.h>
#import "Pomelo.h"
#import "PomeloProtocol.h"
#import "NetEndPoint.h"
@interface NetPomeloManager : NSObject<PomeloDelegate>
{
    /**pomelo实例*/
    Pomelo*                 _pomelo;
    
    /**当前连接到的服务器端点*/
    NetEndPoint*            _curConnectEndPoint;
}

/**获取管理器单例
 @return NetPomeloManager 管理器的单例
*/
+ (NetPomeloManager *)shareNetPomeloManager;

/**连接到配置中的服务器
*/
- (void)connectToServer;

/**中断和服务器的连接
*/
- (void)disConnectFromServer;

/**发送消息到服务器
@param route 远程调用的方法
@param params 发送的数据
@param callback 发送之后的回调
*/
- (void)sendMessageToServer:(NSString *)route params:(NSDictionary *)params callback:(PomeloCallback)callback;

/**让某个对象接受某类route类型的消息
@param 接受和处理消息的route
@param 可以处理该消息的对象
*/
- (void)onServerMessage:(NSString *)onRoute receiveGameObject:(id)gameObject;
@end
