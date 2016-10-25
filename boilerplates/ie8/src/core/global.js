/**
 * Created by Administrator on 2016/8/9 0009.
 */
let fbModeMatch = window.location.href.match(/.*fbMode=(\d*)/);

export var fbMode = fbModeMatch?fbModeMatch[1]:5;

export function state(room,seat,person){
  return person===void(0) ? (room&seat)==seat : ((person?(room|=seat):(room&=~seat))||1 );
}

export function getHtmlArg(name,defaultValue){
    let match = window.location.href.match(new RegExp(name+'=([^&]*)'));
    return match?match[1]:defaultValue;
}