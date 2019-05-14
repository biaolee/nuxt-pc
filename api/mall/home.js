import {
    request
  } from '@/utils/request'
  
  
  // 
  export function Configure(data) {
    return request('api/Mall/Home/Configure', 'get', data);
  }