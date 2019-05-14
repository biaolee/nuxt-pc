import request from '~/utils/request'

// 
export function PagedList(data) {
    return request('/api/wap/Sites/PagedList', 'get', data);
}


//
export function GetDetail(data) {
    return request('/api/wap/Sites/Detail', 'get', data);
}
