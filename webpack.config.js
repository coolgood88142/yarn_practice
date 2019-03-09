const path = require('path');

module.exports = {
	entry: './app.js',						//入口指定entry.js檔案
    output: {
        filename: 'bundle.js',					//輸出bundle.js檔案
        path: path.resolve(__dirname, './'),
    },
	//使用css檔進行編譯
	module:{
		rules:[
			{
				test:/\.css$/,
				use:[
					{
						loader:'style-loader'
					},
					{
						loader:'css-loader'
					}
				]
			}
		]
	},
	//使用require有用css會替換成./src/css/style.css
	resolve: {
        alias: {
			css: "./src/css/style.css"
        }
    }
};

//