const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCss = require("mini-css-extract-plugin");

module.exports = {
    mode: "production",
    target: 'browserslist',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        clean: true,
        filename: "main.[contenthash].js", 
        assetModuleFilename: 'assets/[name]-[hash][ext]',
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
              },
              {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    "style-loader", 
                    "css-loader", 
                    "sass-loader"
                ],
              },
            {
                test: /\.(jpeg|jpg|png|svg|gif)$/i,
                type: 'asset/resource'
            }, 
            {
                test: /\.(ttf|woff2?)$/i,
                type: "asset/resource",
                generator: {
                    filename: "fonts/[name]-[hash].[ext]"
                }
            }
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        }),
        // new MiniCss({
        //     filename: "[name].[contenthash].css",
        //   })
    ],

    devServer: {
        compress: false,
        open: true,
        port: 5004,
        // static: './public',
        hot: true,
    },
};
