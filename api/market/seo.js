import {
    request
  } from '@/utils/request'
  
  
  // 
  export function GetSeoInfo(data) {
    return request('api/Market/Seo/GetDetail', 'get', data);
  }