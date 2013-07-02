//
//  NetEndPoint.h
//  ProjectCard
//
//  Created by Jay.liu on 13-7-2.
//  Copyright (c) 2013年 Jay.liu. All rights reserved.
//
//表示一个网络的连接端点
#import <Foundation/Foundation.h>

@interface NetEndPoint : NSObject
{
    /**端点的ip地址*/
    NSString*               _host;
    /**端点的端口号*/
    int                     _port;
}
@property(nonatomic,retain)NSString *host;
@property(nonatomic,assign)int port;
/**获取当前配置中的端点
@return NetEndPoint 端点对象
*/
+ (NetEndPoint *)getCurConfigEndPoint;

/**通过host和port作为参数的构造函数
@param host 所需端点的ip地址
@param port 所需端点的端口号
@return NetEndPoint 端点对象 
*/
- (NetEndPoint *)initEndPointWithHost:(NSString *)host port:(int)port;
@end
