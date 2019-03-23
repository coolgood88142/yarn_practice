const path = require('path');

module.exports = {
	entry: './app.js',						//入口指定entry.js檔案
    output: {
        filename: 'bundle.js',					//輸出bundle.js檔案
        path: path.resolve(__dirname, './'),
    },
	//------------------------------------------------------
	//解釋以下這段在webpack是怎麼運作的?
	//寫了註錄要想為什麼這樣寫?如何驗證?從哪裡得到的資訊?
	
	//使用css檔進行編譯，轉成webpack看的懂，先轉成command JS在轉成javascript
	//自訂模組
	module:{
		//建立模組規則
		rules:[
			{
				//test欄位用來測試哪個檔名，要寫檔名路徑
				//註明為什麼要寫[$]
				//test命名的用意是什麼，路徑要怎麼寫
				//test為rules.resource.test，resource主要是檔案路徑使用resolve規則
				//test的命名方式是正規化表示法
				test:/\.css$/,
				
				//use欄位使用哪些loader套件進行編譯，順序是從由下而上，css-loader先將css編譯為js檔，style-loader在進行解析可執行在瀏覽器上
				//loader指定webpack安裝的套件
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
	//使用require有用css會代替成./src/css/style.css
	//webpack在執行時使用解析將模組做修改
	resolve: {
		//建立require 別名引入想要的路徑
        alias: {
			css: "./src/css/style.css"
        }
    }
	//------------------------------------------------------
};

//