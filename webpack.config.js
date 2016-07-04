module.exports={
	entry: '.',
	output:{
		path:'.',
		publicPath:'/',
		filename:'main.js'
	},
	module:{
		loaders:[
			{
				test: /\.js/,
				loader:'babel',
				include: __dirname,
				query:{
		          presets: ['react', 'es2015', 'react-hmre']
		        }
			}
		]
	}
}