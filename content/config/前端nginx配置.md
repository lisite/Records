---
title: "前端nginx配置"
description: "前端开发必备技能之一"
date: 2018-09-19T22:16:52+08:00
draft: false
---

参考文章：
 
http://blog.51cto.com/leeyan/1865448

https://juejin.im/entry/5abaf4986fb9a028c42e3c46

#### nginx常用两大功能：
1、负载均衡：在生产环境的客户端请求很多的时候,动态的去分散给各个服务器,缓解服务器压力,充分利用资源<br>
2、反向代理：反向代理将字符串和相应的服务器和端口匹配上,从而获取用户想要获取的内容

### nginx location 匹配规则:
~ 波浪线表示执行一个正则匹配，区分大小写

~* 表示执行一个正则匹配，不区分大小写

^~ 表示普通字符匹配，如果该选项匹配，只匹配该选项，不匹配别的选项，一般用来匹配目录

= 进行普通字符精确匹配

@ 定义一个命名的 location，使用在内部定向时，例如 error_page, try_files

spa应用服务器部署：

```
 location / {
   root /www/home/build/;
   index index.html index.html index.php;
   try_files $uri $uri/ /index.html;
 }

  location ^~ /api/ {
    proxy_pass http://api.site;
  }
```






