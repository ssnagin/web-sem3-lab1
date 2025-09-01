const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    entry: {
        script: path.resolve(__dirname, './public_html/src/js/index.js'),
        style: path.resolve(__dirname, './public_html/src/sass/style.sass')
    },
    module: {
        rules: [
            {
                test: /\.(scss|css|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js']
    },
    output: {
        path: path.resolve(__dirname, './public_html/dist/'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
  ],
}