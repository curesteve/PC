//
//  FileManager.h
//  ProjectCard
//
//  Created by Jay.liu on 13-7-2.
//  Copyright (c) 2013年 Jay.liu. All rights reserved.
//
//引擎层文件管理器，直接提供给应用层使用，主要功能为沙盒文件的增删，以及一些资源文件路径的获取
#import <Foundation/Foundation.h>

@interface FileManager : NSObject
/**获取项目文件夹中的文件路径
@param fileName 文件名
@param fileType 文件类型（后缀名）
@return 路径
*/
+ (NSString *)getProjectFilePath:(NSString *)fileName fileType:(NSString *)fileType;
@end
