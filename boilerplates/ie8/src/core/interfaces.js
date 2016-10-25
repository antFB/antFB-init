import {fbMode,state} from './global';

//接口配置
let _interfaces = {
    todos:'${server}todos${nameSuffix}${suffix}',
    todosP:'${server}todosP${nameSuffix}${suffix}'
}
//接口配置结束

//关于options的说明  
export function getInterface(options,mode=fbMode){
	  
    let suffix = ''
    let server = 'api/'
    let nameSuffix = ''
	  let url = ''
	  let param = '';
	  
	  if(options && (!options.method || options.method.toLowerCase()=='get')){
        param = "?"
        let params = [];
        Object.keys(options.body).map(p=>{
            params.push(`${p}=${options.body[p]}`);
        })
        param += params.join('&');
    }
	  
	  if(options.name){
	    if(state(mode,16)){
		    	if(options.dataType=='jsonp'){
		        suffix = '.jsonp'
		      }else if(options.dataType=='json'){
		      	suffix = '.json'
		      }
	        nameSuffix = options.nameSuffix?options.nameSuffix:'';
	    }
	    
	    url = _interfaces[options.name].replace('${server}',server).replace('${nameSuffix}',nameSuffix).replace('${suffix}',suffix)
    }else if(options.url){
    		url=options.url;
    }else{
    		alert('请求配置中"url"和"name"两个选项不能同时为空');
    }
    
    
    return `${url}${param}`;
}
