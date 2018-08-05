const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //入口文件
    entry: './src/index.jsx',
    //输出文件
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle-[hash].js"
    },
    //sourceMap模式
    devtool: 'source-map',
    //开发服务器配置
    devServer: {
        contentBase: './dist',
        port: 8081,
        hot: true,
        inline: true,
        historyApiFallback: true,
    },
    //模块
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: ["env", "react", "stage-0"],
                    plugins: ["transform-runtime"]
                }
            }]
        }, {
            test: /\.css$/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader', options: { importLoaders: 1 } },
                { loader: 'postcss-loader' }
            ]
        }]
    },
    //插件
    plugins: [
        //热加载插件
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            lang: "zh-cn",
            title: "比乐综合管理",
            filename: "index.html",
            hash: true,
            template: './html/template.html'
        })
    ]
}