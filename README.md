# Webpack-Test 
#### 用于学习webpack配置的小demo，[参考文章](https://segmentfault.com/a/1190000006178770)

### 准备  
#### 安装  
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
#### 文件夹
1.app  
    存放原始数据和将写的JavaScript模块  
2.public  
    存放之后供浏览器读取的文件(使用webpack打包生成的js文件+index.html)  

### 通过命令行使用webpack  
```
# { entry file } 处填写入口文件的路径，本文中即main.js的路径,默认打包到dist文件夹  
# 填写路径时不必加{}  
webpack { entry file }  
```  
###### 注：
执行此语句后可能会需要安装webpack-cli,如果webpack是全局安装的，则对应的webpack-cli也需要全局安装  
`npm install --save-dev webpack-cli -g`

指定入口文件后，webpack可以自动识别所依赖的其他文件  
###### 注：
若webpack非全局安装，则需在终端额外指定其在node_modules中的地址(windows系统可能会报错，推荐全局安装webpack)  
`node_modules/.bin/webpack app/main.js public/bundle.js` 

### 通过配置文件使用webpack  
配置文件就是一个简单的JavaScript模块，用于存放打包相关的信息  
在根目录下新建webpack.config.js文件,配置内容  
配置好之后，在终端运行`webpack`即可（非全局安装需运行`node_modules/.bin/webpack`）,它会自动根据webpack.config.js中的配置进行打包    
###### 更快捷的执行打包任务：
非全局安装webpack是命令行语句较为繁琐，可通过npm配置后，在命令行中使用`npm start`替换该语句，这自然是极好的。在package.json中对scripts对象设置"start"字段即可  
###### 注：
start命令为特殊脚本名称，命令行中使用`npm start`即可，其他命令则不同，需使用`npm run { script name }`方可   

### webpack的强大功能
#### 生成Source Maps（便于调试）
在webpack的配置文件中配置source maps，需要配置**devtool**，有四种不同的配置方法：
1. source-map
2. cheap-module-source-map
3. eval-source-map
4. cheap-module-eval-source-map
从上到下打包速度逐渐变快，但是负面问题也越来越多。对于小到中型项目，可以选择eval-source-map，但只应该在**开发阶段**使用

#### 使用webpack构建本地服务器
webpack可提供一个可选的本地开发服务器（基于node.js构建），不过它是一个单独的组件，在webpack中配置之前需将其安装为项目依赖  
`npm install --save-dev webpack-dev-server`  
**devServer**配置选项，[更多选项](https://webpack.js.org/configuration/dev-server/):
1. contentBase: 本地服务器提供服务的文件夹，默认为根文件夹
2. port：端口号，默认为“8080”
3. inline：设置为true，当源文件改变时自动刷新页面
4. historyApiFallback： 依赖于HTML5 history API，若设置为true，所有跳转将指向index.html
在webpack.config.js中配置好devServer后，在package.json中配置“scripts”对象的“server”字段以开启本地服务器：  
`"server": "webpack-dev-server --open"`  
命令行输入“npm run server”即可在本地对应端口查看结果
