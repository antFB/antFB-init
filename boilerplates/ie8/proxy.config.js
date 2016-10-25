// Learn more on how to config.
// - https://github.com/dora-js/dora-plugin-proxy#规则定义
var fs = require( 'fs' )
function getJsonFromJsonP(data){
	var start = data.indexOf('{');
	var end   = data.lastIndexOf('}')+1;
	var json =  data.substring(start,end);
	return JSON.parse(json);
}

module.exports = { 
	'/api/todos':'src/public/api/todos.js',
	'/api/todosP':function(req, res) {
	 		fs.readFile(process.cwd()+'/src/public/api/todosP.jsonp','utf8',function(err,data){
	 			res.jsonp(getJsonFromJsonP(data),'jsoncallback'); 
			}) 
	} 
};
