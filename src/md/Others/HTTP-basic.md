---
title: HTTP 基本知识
description: 网址，准确地说是 URL（Uniform Resource Locator，统一资源定位符）。
meta: Web
---

## 从 URL 入手

网址，准确地说是 URL（Uniform Resource Locator，统一资源定位符）。URL 开头的文字表示浏览器应当使用的访问方法，也可以理解为访问时用的协议类型。例如:以'http:'开头表示访问时采用 http 协议。
一个常见的 URL 可以拆分为 3 部分：协议，web 服务器域名，表示数据源文件的路径名。以`http://www.example.com/dir/index.html`为例，`http:`表示访问数据源的机制，也就是协议,`www.example.com`表示服务器的名称,`/dir/index.html`表示文件路径名，这个 URL 的意思就是使用 http 协议访问`www.example.com`服务器下，dir 目录下的 index.html 文件。

## HTTP 的基本思路

解析玩 URL 后，我们就知道应该要访问的目标在哪里了。HTTP 的基本思路可以用以下的图来说明：
![HTTP的基本思路.png](../../assets/images/md/http-basic.png)
HTTP 协议定义了客户端和服务器之间交互的消息内容和步骤，其基本思路非常简单。

1. 首先，客户端会向服务器发送请求消息，请求消息种包含两个部分内容，分别是‘对什么’和‘进行怎样的操作’。其中‘对什么’的部分称为 URI，Uniform Resource Identifier，统一资源定位符。‘进行怎么样的操作’的部分称为方法。HTTP 的主要方法有：
   - GET：获取 URI 指定的信息
   - POST：从客户端向服务器发送数据
   - HEAD：和 GET 类似，不过只返回 http 的消息头
   - OPTIONS：用于通知或查询通信选项
   - PUT：替换 URI 指定的服务器上的文件
   - DELETE：删除 URI 指定的服务器上的文件
   - TRACE：将服务器收到的请求行和头部直接返回给客户端。用于在使用代理的环境中检查改写请求的情况
   - CONNECT：使用代理传输加密消息时使用的方法
2. 收到请求消息后，Web 服务器会对其中的内容进行解析，根据要求完成自己的工作，并将结果存放在响应消息中返回给客户端。
