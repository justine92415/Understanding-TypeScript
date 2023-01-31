const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.ts',
    output: {
        filename: 'bundel.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './'),
        },
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
};
