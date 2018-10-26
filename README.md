# Webpack-Test 
### 用于学习webpack配置的小demo，[参考文章](https://segmentfault.com/a/1190000006178770)

**准备**

1.安装

*生成 package.json*  
`npm init`  
package.json文件就绪后，我们在本项目中安装Webpack作为依赖包  
*生成 node_modules、package-lock.json*  
```  
#安装到项目目录  
npm install --save-dev webpack  
#全局安装  
npm install -g webpack
```
2.文件夹

（1）app  
    存放原始数据和将写的JavaScript模块  
（2）public  
    存放之后供浏览器读取的文件(使用webpack打包生成的js文件+index.html)

**通过命令行使用webpack**

```
# { entry file } 处填写入口文件的路径，本文中即main.js的路径,默认打包到dist文件夹  
# 填写路径时不必加{}  
webpack { entry file }  
```  
*注：*  
执行此语句后可能会需要安装webpack-cli,如果webpack是全局安装的，则对应的webpack-cli也需要全局安装  
`npm install --save-dev webpack-cli -g`

指定入口文件后，webpack可以自动识别所依赖的其他文件  
*注：*  
若webpack非全局安装，则需在终端额外指定其在node_modules中的地址(windows系统可能会报错，推荐全局安装webpack)  
`node_modules/.bin/webpack app/main.js public/bundle.js`

**通过配置文件使用webpack**
