import xFetch from './xFetch';
export function getAll(dataType='json') {
	return xFetch({name:dataType=='json'?'todos':'todosP',method:'get',body:{'name':'kkkk'},dataType:dataType});
}
