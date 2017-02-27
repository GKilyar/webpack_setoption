
var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
    context:__dirname,
    entry: './src/app.js',
    output: {
        path: 'dist',
        filename: 'js/[name].bundle.js',
    },
    module: {
        loaders:[
            {
                test:/\.js$/,
                loader:'babel',
                //tigao 打包速度
                exclude:path.resolve(__dirname, "node_modules"),
                include:path.resolve(__dirname, "./src"),
                query:{
                    presets:['latest']
                }
            },
            {
                test: /\.html$/, 
                loader: "html-loader"
            },
            {
                test: /\.tpl$/, 
                loader: "ejs-loader"
            },
            {
                test: /\.css$/, 
                loader: "style-loader!css-loader?importLoaders=1!postcss-loader"
            },
            {
                test: /\.less$/, 
                loader: "style-loader!css-loader!postcss-loader!less-loader"
            },
            {
                test: /\.scss$/, 
                loader: "style-loader!css-loader!postcss-loader!sass-loader"
            },
            {
                test:/\.(png|jpg|gif|svg)$/i,
                loaders:["url-loader?limit=100&name=assets/[name]-[hash:5].[ext]","image-webpack-loader"]     
            }
        ]
    },
 postcss: () => {
    return [
      require('autoprefixer')
    ];
  }
    ,
    plugins: [
        new htmlWebpackPlugin({
            // filename: 'index-[hash].html',
            filename: 'index.html',
            template: 'index.html',
            inject: 'body'
        })
    ]
}