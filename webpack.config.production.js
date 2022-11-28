const webpack = require('webpack');
// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCss = require("mini-css-extract-plugin");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: __dirname + '/public',
        filename: "main.js",
        assetModuleFilename: 'assets/images/[name]-[hash][ext]'
    },
    module: {
        rules: [
            {
                test: /\.(jpeg|jpg|png|svg|gif)$/i,
                type: 'asset/resource'
            },

            {
                test: /\.(s*)css$/,
                use: [
                    MiniCss.loader,
                    "css-loader",
                    "sass-loader"
                ],
            },
            // {
            //     test: /\.(js)$/,
            //     exclude: /node_modules/,
            //     use: "babel-loader"
            // },

            // {
            //     test: /(\.css)$/,
            //     use: [
            //         "style-loader",
            //         "css-loader",
            //         {
            //             loader: "postcss-loader",
            //             options: {
            //                 postcssOptions: {
            //                     plugins: [
            //                         "autoprefixer",
            //                         "postcss-preset-env",
            //                         "postcss-deadcss",
            //                         "at-rule-packer",
            //                         "postcss-import",
            //                         // "cssnano"
            //                     ],
            //                 },
            //             },
            //         },
            //     ]
            // },

            // {
            //     test: /\.css$/,
            //     use: [
            //         "style-loader",
            //         "css-loader",
            //         {
            //             loader: "postcss-loader",
            //             options: {
            //                 postcssOptions: {
            //                     plugins: [
            //                         [
            //                             "postcss-preset-env",
            //                             "postcss-deadcss",
            //                             "at-rule-packer",
            //                             "postcss-import",
            //                             "cssnano"
            //                         ]
            //                     ]
            //                 }
            //             }
            //         }
            //     ],
            // },


            
            
        ],
    },

    plugins: [
        // new HtmlWebpackPlugin({
            // inject: true,
            // hash: true,
            // filename: "index.html",
            // template: "./public/index.html"
        // }),
        new MiniCss({
            filename: "style.css",
          })
    ],

    devServer: {
        compress: false,
        open: "/",
        port: 5004,
        static: './public',
        hot: true,
    },
};
