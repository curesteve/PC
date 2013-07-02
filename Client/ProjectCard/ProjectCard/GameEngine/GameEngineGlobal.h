//
//  GameEngineGlobal.h
//  ProjectCard
//
//  Created by Jay.liu on 13-7-2.
//  Copyright (c) 2013年 Jay.liu. All rights reserved.
//
/**定义引擎层的一些全局宏*/

//debug时输出宏
#ifdef DEBUG
#define DLog(...) NSLog(@"%s %@", __PRETTY_FUNCTION__, [NSString stringWithFormat:__VA_ARGS__])
#else
#define DLog(...) do { } while(0)
#endif
