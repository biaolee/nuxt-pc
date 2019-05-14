import {
    request
  } from '@/utils/request'
  
  
  // 
  export function PagedList(data) {
    return request('api/Mall/Product/PagedList', 'get', data);
  }
  
  // 
  export function GetDetail(data) {
    return request('api/Mall/Product/GetDetail', 'get', data);
  }
    // 
    export function GetComments(data) {
      return request('api/Mall/Product/GetComments', 'get', data);
    }
    // 
    export function GetLovelys(data) {
      return request('api/Mall/Product/GetLovelys', 'get', data);
    }
    // 
    export function GetRecommends(data) {
      return request('api/Mall/Product/GetRecommends', 'get', data);
    }
        
    
    // 
    export function GetUsageScenes(data) {
      return request('api/Mall/Product/GetUsageScenes', 'get', data);
    }
        