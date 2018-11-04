// __dirname是node.js中的一个全局变量，指向当前执行脚本所在的目录
module.exports = {
  entry: __dirname + "/app/main.js",  // 入口文件
  output: {
    path: __dirname + "/public",        // 打包后的文件存放的地方
    filename: "bundle.js"               // 打包后输出文件的文件名
  },
  devtool: 'eval-source-map',         // 配置source map
  devServer: {
    contentBase: "./public",           // 本地服务器所加载的页面所在的目录
    // historyApiFallBack: true,     // 不跳转
    inline: true          // 实时刷新
  },
  module: {
    rules: [
      // 配置Babel，经过如下配置项目可使用ES6和JSX语法
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "env", 'react'
            ]
          }
        },
        exclude: /node_modules/
      },
      // 使用.babelrc配置babel
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      }
    ]
  }
}