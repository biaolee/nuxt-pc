import {
    request
  } from '@/utils/request'
  
  
  // 
  export function DiaryPagedList(data) {
    return request('api/Market/Sites/DiaryPagedList', 'get', data);
  }
  
    // 
    export function GetRecommends(data) {
      return request('api/Market/Sites/GetRecommends', 'get', data);
    }