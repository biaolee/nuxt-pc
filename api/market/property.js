import {
    request
  } from '@/utils/request'
  
  
  // 
  export function PagedList(data) {
    return request('api/Market/Property/PagedList', 'get', data);
  }
  
    // 
    export function GetDetail(data) {
      return request('api/Market/Property/GetDetail', 'get', data);
    }