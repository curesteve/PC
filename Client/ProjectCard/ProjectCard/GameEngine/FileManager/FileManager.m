//
//  FileManager.m
//  ProjectCard
//
//  Created by Jay.liu on 13-7-2.
//  Copyright (c) 2013年 Jay.liu. All rights reserved.
//

#import "FileManager.h"

@implementation FileManager
#pragma mark - 静态方法
#pragma mark 获取项目中的文件文件路径
+ (NSString *)getProjectFilePath:(NSString *)fileName fileType:(NSString *)fileType
{
    return  [[NSBundle mainBundle]pathForResource:fileName ofType:fileType];
}
@end
