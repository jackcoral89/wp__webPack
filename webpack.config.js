const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const entryPoint = {
    index: './src/app/index.js',
    about: './src/app/about/about.js',
    globalCss: './src/app/global.scss',
    myComponent: './src/app/my-component/my-component.js'
}

const pathResolve = path.resolve(__dirname, './public');

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        return {
            mode: 'development',
            entry: entryPoint,
            watch: true,
            output: {
                path: pathResolve
            },
            module: {
                rules: [
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /(node_modules)/,
                        use: ['babel-loader']
                    },
                    {
                        test: /\global.scss$/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            'css-loader',
                            'sass-loader'
                        ],
                    },
                    {
                        test: /\.s[ac]ss$/i,
                        exclude: [/\global.scss$/],
                        use: [
                            'style-loader', // creates style nodes from JS strings
                            'css-loader', // translates CSS into CommonJS
                            'sass-loader' // compiles Sass to CSS, using Node Sass by default
                        ]
                    },
                ]
            },
            plugins: [
                new MiniCssExtractPlugin({
                    filename: '[name].css',
                    chunkFilename: '[name].css'
                }),
                new BrowserSyncPlugin({
                    host: 'localhost',
                    port: 3000,
                    proxy: 'http://localhost:' + 3903,
                    files:
                        [
                            './*.php',
                            './page-templates/*.php',
                            './shared/*.php'
                        ]
                })
            ]
        }
    } else if (argv.mode === 'production') {
        return {
            mode: 'production',
            entry: entryPoint,
            output: {
                path: pathResolve
            },
            module: {
                rules: [
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /(node_modules)/,
                        use: ['babel-loader']
                    },
                    {
                        test: /\global.scss$/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            'css-loader',
                            'sass-loader'
                        ],
                    },
                    {
                        test: /\.scss$/,
                        exclude: [/\global.scss$/],
                        use: [
                            'style-loader',
                            'css-loader',
                            'sass-loader'
                        ]
                    },
                ]
            },
            plugins: [
                new MiniCssExtractPlugin({
                    filename: '[name].css',
                    chunkFilename: '[name].[hash].css'
                })
            ]
        }
    }
}

