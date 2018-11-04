// __dirname是node.js中的一个全局变量，指向当前执行脚本所在的目录
module.exports = {
  entry: __dirname + "/app/main.js",  // 入口文件
  output: {
    path: __dirname + "/public",        // 打包后的文件存放的地方
    filename: "bundle.js"               // 打包后输出文件的文件名
    // firename: "bundle-[hash].js"     // 缓存命名
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
      },
      // css-loader、style-loader、Sass-loader
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },{
            loader: "css-loader",
            options: {
              modules: true,      // 启用css modules
              localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
            }
          },{
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  // 插件，是一个数组！！！！
  plugins: [
    // 版权声明插件
    new webpack.BannerPlugin('版权所有，翻版必究')
  ]
}