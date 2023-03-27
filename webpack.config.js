var path = require("path")
var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = {
	entry: {
		app: './src/index.js'
	},
	output: {
		path: path.join(__dirname, "/dist"),
		assetModuleFilename: 'images/[hash][ext][query]',
		filename: "main.js"
	},
	
	mode: "development",
	
	devServer: {

		static: {
			directory: path.join(__dirname, "/dist")
		  },
	
		port: 9000,
	
		devMiddleware: {
			writeToDisk: true,
		  },
		open: true,
	
	  },

	module: {
		rules: [
			  
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						// options: {
						//   minimize: true,
						// }
					},
				],
			},
		
			{

				test: /\.(png|svg|jpe?g|gif)$/,
		
				use: [
		
				  {
		
					loader: "file-loader", 
		
					options: {
		
					  name: '[name].[ext]',
		
					  outputPath: "IMG",
					

					}
					
		
				  }
		
				]
		
	
},

{

	test: require.resolve('jquery'),

	loader: 'expose-loader',

	options: {

	  exposes: ['$', 'jQuery'],

	}

  },
  
  
  {

	test: /\.(sa|sc|c)ss$/,

	use: [

		  {

			loader: MiniCssExtractPlugin.loader, 

			options: {

			  publicPath: '../' 

			}

		  },

		  'css-loader',

		  'sass-loader'

		]
    
  },
]
    
},
module: {
    rules: [
      {
        test: /\.png/,
        type: 'asset/resource'
      }
    ]
  },


	  
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "./src/HTML/index.html",
		}),
		new HtmlWebpackPlugin({
			filename: "search.html",
			template: "./src/HTML/search.html",
		}),
		new HtmlWebpackPlugin({
			filename: "contact.html",
			template: "./src/HTML/contact.html",
		}),
		new HtmlWebpackPlugin({
			filename: "activety.html",
			template: "./src/HTML/activety.html",
		}),
		new HtmlWebpackPlugin({
			filename: "about-us.html",
			template: "./src/HTML/about-us.html",
		}),
		new HtmlWebpackPlugin({
			filename: "school_star.html",
			template: "./src/HTML/school_star.html",
		}),
		new MiniCssExtractPlugin({ filename: "style.css" }),
		new OptimizeCssAssetsPlugin({}),
	]

};