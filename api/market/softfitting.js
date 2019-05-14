import {
    request
  } from '@/utils/request'
  
  
  // 
  export function PagedList(data) {
    return request('api/Market/Softfitting/PagedList', 'get', data);
  }
  
    // 
    export function GetDetail(data) {
      return request('api/Market/Softfitting/GetDetail', 'get', data);
    }