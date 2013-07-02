//
//  NetPomeloManager.m
//  ProjectCard
//
//  Created by Jay.liu on 13-7-2.
//  Copyright (c) 2013年 Jay.liu. All rights reserved.
//

#import "NetPomeloManager.h"
static NetPomeloManager *_netPomeloManager = nil;
@implementation NetPomeloManager

#pragma mark - LifeCycle
- (id)init
{
    self = [super init];
    if(self){
        _pomelo = [[Pomelo alloc]initWithDelegate:self];
    }
    return self;
}

- (void)dealloc
{
    [super dealloc];
}

#pragma mark － 公有方法
#pragma mark 获取静态实例的方法
+ (NetPomeloManager *)shareNetPomeloManager
{
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        _netPomeloManager = [[NetPomeloManager alloc]init];
    });
    return _netPomeloManager;
}

#pragma mark 连接到服务器
- (void)connectToServer
{
    //先断开
    [self disConnectFromServer];
    //再连接
    _curConnectEndPoint = [[NetEndPoint getCurConfigEndPoint]retain];
    _pomelo = [[Pomelo alloc]initWithDelegate:self];
    [_pomelo connectToHost:_curConnectEndPoint.host onPort:_curConnectEndPoint.port];
}

#pragma mark 主动关闭服务器连接
- (void)disConnectFromServer
{
    [_pomelo disconnect];
    
    if(_curConnectEndPoint){
        [_curConnectEndPoint release];
        _curConnectEndPoint = nil;
    }
}

#pragma mark 对象接受消息
- (void)onServerMessage:(NSString *)onRoute receiveGameObject:(id)gameObject
{
    [[NSNotificationCenter defaultCenter]addObserver:gameObject selector:@selector(onRoute:) name:onRoute object:nil];
}

#pragma mark 发送消息到服务器
- (void)sendMessageToServer:(NSString *)route params:(NSDictionary *)params callback:(PomeloCallback)callback
{
    [_pomelo requestWithRoute:route andParams:params andCallback:callback];
}

#pragma mark - delegates
#pragma mark pomelo 连接成功的回调
- (void)PomeloDidConnect:(Pomelo *)pomelo
{
    DLog(@"connect");
}

#pragma mark pomelo 断开连接的回调
- (void)PomeloDidDisconnect:(Pomelo *)pomelo withError:(NSError *)error
{
    DLog(@"disconnect");
}

#pragma mark pomelo 收到服务器消息的回调
- (void)Pomelo:(Pomelo *)pomelo didReceiveMessage:(NSArray *)message
{
    DLog(@"%@",message);
}

#pragma mark pomelo 报错的回调
- (void)PomeloOnError:(NSError *)error
{
    DLog(@"%@",error);
}
@end
