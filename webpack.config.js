import path from 'path';
import { fileURLToPath } from 'url';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathResolve = path.join(__dirname, './public');

export default () => {
	return {
		mode: process.env.NODE_ENV,
		watch: process.env.NODE_ENV == "development" ? true : false,
		entry: {
			index: './src/index.js',
			about: './src/pages/about/about.js',
			style: './src/index.scss',
			myComponent: './src/shared/components/my-component/my-component.js'
		},
		output: {
			path: pathResolve
		},
		module: {
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
					test: /\.s[ac]ss$/i,
					use: [
						MiniCssExtractPlugin.loader,
						"css-loader",
						"sass-loader"
					],
				},
				{
					test: /.(ttf|otf|eot|woff|woff2?|png|jpe?g|gif|svg|ico)$/,
					use: {
						loader: 'url-loader',
					},
				},
			]
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: "[name].css"
			}),
		]
	}
}