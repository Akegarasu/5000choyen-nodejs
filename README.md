# 5000choyen-nodejs
A server side tool to generate 5000choyen style image with node.js

一个服务端调用canvas生成5000choyen样式图片的工具

![](https://ftp.bmp.ovh/imgs/2021/03/dbb16b0d3641343b.png)

### 项目来源

这图太沙雕了，群友都想要bot生成这玩意，于是就移植了一个 nodejs 版本的方便给 bot 调用。

从 [5000choyen](https://github.com/yurafuca/5000choyen) 项目修改而来，

配合中文修改了字体，增加了直接保存图片以及返回 base64 的webapi，优化了一部分代码。

### 食用方法

#### 部署

确保你已经配制好git、nodejs、npm

```
git clone https://github.com/Akegarasu/5000choyen-nodejs.git
cd 5000choyen-nodejs
npm install
node ./webapi.js
```

本项目提供了一个 webapi 可以直接调用，返回生成图片的 base64

本项目的默认端口是`3000`，你也可以在`webapi.js`中修改端口和 api 的终结点。

```
http://127.0.0.1:3000/api/5000choyen?top=谁来带我&bottom=上大分
```

