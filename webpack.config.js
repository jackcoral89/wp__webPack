const path = require("path");

module.exports = {
    mode: 'development',
    entry: {
        index: './src/app/index.js'
    },
    output: {
        path: path.resolve(__dirname, './public/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};