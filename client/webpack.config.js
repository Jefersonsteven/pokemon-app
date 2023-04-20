const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'bundle.js',
        publicPath:'/'
    },
		resolve:{
        extensions:['.js','.jsx']
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                }
            },
            {
                test:/\.html$/,
                use:{
                    loader:'html-loader',
                }
            },
            {
                test:/\.(s*)css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]            
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src', 'assets/images'),
                    to: 'assets/images'
                }
            ]
        })
    ],
    devServer:{
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 3006,
        open: true,
        historyApiFallback: true,
    }
}