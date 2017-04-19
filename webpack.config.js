var htmlplugin = require("html-webpack-plugin");

module.exports = {
	entry: ['./src/script/swiper-3.4.2.min.js','./src/script/index.js'],
	output:{
		path: __dirname +'/dist',
		filename: 'js/[name]-[chunkhash].js'
	},
	module: {
		loaders: [{
            test: /\.css$/,
            loader: "style-loader!css-loader"
        },{
            test: /\.scss$/,
            loader: "style-loader!css-loader!sass-loader"
        },{
            test: /\.(png|jpg|git|svg)$/i,
            loader: "file-loader",
            query:{
            	name:"img/[name]-[hash:5].[ext]"
            }
        }]
	},
	plugins:[
		new htmlplugin({template : "index.html"})
	]
}
