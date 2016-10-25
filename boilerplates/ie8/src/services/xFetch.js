//import 'es6-promise'
//import 'fetch-detector'
import 'fetch-ie8/fetch'; 
import fetchJsonp from 'fetch-jsonp';
import cookie from 'js-cookie';
import {fbMode,state} from '../core/global'
import {getInterface} from '../core/interfaces'

const errorMessages = (res) => `${res.status} ${res.statusText}`;

function check401(res) {
  if (res.status === 401) {
    location.href = '/401';
  }
  return res;
}

function check404(res) {
  if (res.status === 404) {
    return Promise.reject(errorMessages(res));
  }
  return res;
}

function jsonParse(res) {
  	return res.json().then(jsonResult => ({ ...res, jsonResult }));
}
function textParse(res) {
    return res.text().then(text => ({ ...res, text }));
}

function errorMessageParse(res) {
  const { success, message } = res.jsonResult;
  if (!success) {
    return Promise.reject(message);
  }
  return res;
}

function _xFetch(url,options) {
  const opts = { ...options };
  opts.headers = {
    ...opts.headers,
    authorization: cookie.get('authorization') || '',
  };
	
	switch(options.dataType){
		case 'text':
			return fetch(url,opts)
        .then(check401)
        .then(check404)
        .then(textParse)
			break;
		case 'jsonp':
		  if(opts.timeout===void(0)) opts.timeout = 5000
		  if(opts.jsonpCallback===void(0)) opts.jsonpCallback = 'jsoncallback'
			
			if(state(fbMode,16)){
				opts.jsonpCallbackFunction = 'jsonCallbackFunction'
			}
			
			return fetchJsonp(url,opts)
				.then(check401)
				.then(check404)
			  .then(jsonParse)	
			
			
			break;
		default://json
			return fetch(url,opts)
        .then(check401)
        .then(check404)
        .then(jsonParse)
			break;		
   }
   //.then(errorMessageParse);
}

export function xFetch(options){
    return _xFetch(getInterface(options),options)
                .catch((ex)=>{
                    if(state(fbMode,8)){
                        return _xFetch(getInterface(options,16),options)
                    }else{
                        console.log("接口请求失败："+ex);
                    }
                }); 
}

export default xFetch;
