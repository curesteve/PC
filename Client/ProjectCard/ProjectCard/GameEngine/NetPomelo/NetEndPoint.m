//
//  NetEndPoint.m
//  ProjectCard
//
//  Created by Jay.liu on 13-7-2.
//  Copyright (c) 2013年 Jay.liu. All rights reserved.
//

#import "NetEndPoint.h"

@implementation NetEndPoint
@synthesize host = _host;
@synthesize port = _port;
#pragma mark - LifeCycle
- (NetEndPoint *)initEndPointWithHost:(NSString *)host port:(int)port
{
    self = [super init];
    if(self){
        self.host = host;
        _port = port;
    }
    return self;
}

- (void)dealloc
{
    [_host release];
    [super dealloc];
}

#pragma mark - 公有方法
#pragma mark 获取当前配置中的端点
+ (NetEndPoint *)getCurConfigEndPoint
{
    NSDictionary *configDic = [NSDictionary dictionaryWithContentsOfFile:[FileManager getProjectFilePath:@"pomeloConfig" fileType:@"plist"]];
    NSString *host = [configDic objectForKey:@"host"];
    int port = [[configDic objectForKey:@"port"]intValue];
    NetEndPoint *configEndPoint = [[NetEndPoint alloc]initEndPointWithHost:host port:port];
    return [configEndPoint autorelease];
}
@end
