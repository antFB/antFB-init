var serve = require('koa-static')
module.exports = {
	name:'static',
	'middleware':function(){
		return serve('./src/public')
	},
	'server.after':()=>{
		console.log('dora-static ready!')
	}
	
}
