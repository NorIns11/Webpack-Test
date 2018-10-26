# Webpack-Test 
### 用于学习webpack配置的小demo，[参考文章](https://segmentfault.com/a/1190000006178770)

**准备**

1.安装  
*生成package.json*  
`npm init`

package.json文件就绪后，我们在本项目中安装Webpack作为依赖包 

*生成node_modules、package-lock.json*  
`npm install --save-dev webpack` 

2.文件夹  
（1）app  
    存放原始数据和将写的JavaScript模块  
（2）public  
    存放之后供浏览器读取的文件(使用webpack打包生成的js文件+index.html)
