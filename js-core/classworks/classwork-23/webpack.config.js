 const path = require('path');

 module.exports ={
 	entry: './app/main.js',
 	output: {
 		path: path.resolve('./dist'),
 		filename : 'bundle.js'

 	},
 	mode: 'development'
 }