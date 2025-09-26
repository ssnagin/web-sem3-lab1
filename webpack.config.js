const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// WORKBOX

const {GenerateSW} = require('workbox-webpack-plugin');
const workboxConfig = require('./workbox-config');

module.exports = {
    mode: "development",
    // mode: "production",
    entry: {
        script: path.resolve(__dirname, './public_html/src/ts_out/index.js'),
        style: path.resolve(__dirname, './public_html/src/sass/style.sass'),
    },
    module: {
        rules: [
            {
                test: /\.(scss|css|sass)$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        sourceType: 'module',
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".css", ".scss", ".sass"]
    },
    output: {
        path: path.resolve(__dirname, './public_html/dist/'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css',
            chunkFilename: '[id].css',
        }),
        new GenerateSW(
            workboxConfig
        )
  ],
}