const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = {
    mode: 'development',
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },
    resolve: {
        extensions:['.tsx','.ts','.js','.json']
    },
    module: {
        rules:[
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.less$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options:{
                        }
                    },

                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename:"[name].css",
            chunkFilename:"[id].css"
        })
    ]
};