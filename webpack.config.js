const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

isProduction = process.env.NODE_ENV === 'production'

module.exports = {
	entry: !isProduction ? './src/index.js' : ['@babel/polyfill', './src/index.js'],
	mode: 'development',
	optimization: {
		minimize: isProduction,
		minimizer: [
			new UglifyJsPlugin(),
			new OptimizeCSSAssetsPlugin({})
		],
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'all'
				}
			}
		}
	},
	devtool: isProduction ? '' : 'source-map',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[hash].js'
	},
	devServer: {
		contentBase: './dist',
		hot: true
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: isProduction ? /(node_modules)/ : /.*/i,
			use: {
				loader: 'babel-loader'
			}
		}, {
			test: /(\.scss|\.sass|\.css)$/,
			use: [
				'vue-style-loader',
				isProduction ? MiniCssExtractPlugin.loader : {
					loader: 'style-loader',
					options: {
						sourceMap: !isProduction
					}
				},
				{
					loader: 'css-loader',
					options: {
						sourceMap: !isProduction,
						minimize: isProduction
					}
				},
				{
					loader: 'postcss-loader',
					options: {
						sourceMap: !isProduction
					}
				},
				{
					loader: 'sass-loader',
					options: {
						sourceMap: !isProduction
					}
				}
			]
		}, {
			test: /\.vue$/,
			loader: 'vue-loader'
		}],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new CleanWebpackPlugin('dist', {}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			hash: true
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
			chunkFilename: '[id].css'
		}),
		new VueLoaderPlugin()
	]
}
