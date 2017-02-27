//去官网了解webpack.config.js的api
//common.js

var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // context:,
    entry: {
        main:'./src/js/main.js',
        bain: './src/js/bain.js'
    },
    output: {
        path: './dist',
        //这里的[hash][chunkhash]指的其实就是版本号，MD5算法保证文件的唯一性
        filename: 'js/[name]-[chunkhash].js',
        //代码发布时的 地址
        publicPath: 'http://aili.com/'
    },
    
    plugins: [
        new htmlWebpackPlugin({
            // filename: 'index-[hash].html',
            filename: 'index.html',
            template: 'index.html',
            inject: 'body',
            title:'webpack is fuck',
            date: new Date(),
            minify:{
                removeComments:true,
                collapseWhitespace: true
            }
        })
    ]
}