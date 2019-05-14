import request from '~/utils/request'

// 
export function LoadHomeData(data) {
     //添加属性
     data["id"] = 26162;
    return request('/api/wap/Index/LoadHomeData', 'get', data);
}