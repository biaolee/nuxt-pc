import {
    request
  } from '@/utils/request'
  
  
  // 
  export function PagedList(data) {
    return request('api/Market/Vr/PagedList', 'get', data);
  }
  
    // 
    export function GetDetail(data) {
      return request('api/Market/Vr/GetDetail', 'get', data);
    }