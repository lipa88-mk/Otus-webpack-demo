const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCss = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    // target: 'web',
    // devtool: 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        // path: __dirname + '/public',
        path: path.resolve(__dirname, 'public'),
        clean: true, // очистка папки каждый раз при запуске
        
        filename: "main.js",
        // filename: "main.[contenthash].js", - хеширование при сохранении
        
        // assetModuleFilename: 'assets/[name][ext]',
        // assetModuleFilename: 'assets/[name]-[hash][ext]'
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
              },
              {
                test: /\.css$/i,
                use: [MiniCss.loader, "style-loader", "css-loader"],
              },
            // {
            //     test: /\.(jpeg|jpg|png|svg|gif)$/i,
            //     type: 'asset/resource'
            // }, 
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        }),
        new MiniCss({
            filename: "style.css",
          })
    ],

    // devServer: {
    //     compress: false,
    //     open: "/",
    //     port: 5004,
    //     static: './public',
    //     hot: true,
    // },
};
