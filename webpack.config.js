import path from 'path';
import { fileURLToPath } from 'url';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// import { ENV } from './config';

const entryPoint = {
	index: './src/index.js',
	about: './src/pages/about/about.js',
	globalCss: './src/global.scss',
	myComponent: './src/shared/components/my-component/my-component.js'
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathResolve = path.join(__dirname, './public');

const ENV = {
	_host: "localhost",
	_proxy: "http://localhost:3903"
}

const moduleRules = {
	rules: [
		{
			test: /\.(js|jsx|tsx)$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader',
				options: {
					"presets": [
						"@babel/preset-env",
						"@babel/preset-typescript",
						"@babel/preset-react"
					],
					"plugins": [
						"@babel/plugin-syntax-dynamic-import",
						"@babel/plugin-proposal-class-properties"
					]
				}
			}
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
			test: [/\.s[ac]ss$/i, /\.css$/i],
			exclude: [/\global.scss$/],
			use: [
				'style-loader', // creates style nodes from JS strings
				'css-loader', // translates CSS into CommonJS
				'sass-loader' // compiles Sass to CSS, using Node Sass by default
			]
		},
		{
			test: /.(ttf|otf|eot|woff|woff2?|png|jpe?g|gif|svg|ico)$/,
			use: {
				loader: 'url-loader',
			},
		},
	]
}

export default function ModuleExport(env, argv) {
	if (argv.mode === 'development') {
		return {
			mode: 'development',
			entry: entryPoint,
			watch: true,
			output: {
				path: pathResolve
			},
			module: moduleRules,
			plugins: [
				new MiniCssExtractPlugin({
					filename: '[name].css',
					chunkFilename: '[name].css'
				}),
				new BrowserSyncPlugin({
					host: ENV._host,
					proxy: ENV._proxy,
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
			module: moduleRules,
			plugins: [
				new MiniCssExtractPlugin({
					filename: '[name].css',
					chunkFilename: '[name].[hash].css'
				})
			]
		}
	}
}

