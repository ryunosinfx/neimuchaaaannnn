const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	module: {
		rules: [{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "ts-loader"
				}
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loaders: ['style-loader', 'css-loader?modules'],
			},
		],
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 8080,
		open: false,
	},
};