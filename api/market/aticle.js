import {
    request
  } from '@/utils/request'
  
  
  // 
  export function PagedList(data) {
    return request('api/Market/Article/PagedList', 'get', data);
  }
  
    // 
    export function GetDetail(data) {
      return request('api/Market/Article/GetDetail', 'get', data);
    }

       // 
       export function GetRecommends(data) {
        return request('api/Market/Article/GetRecommends', 'get', data);
       }

      

         // 
        export function GetNextAndBefore(data) {
          return request('api/Market/Article/GetNextAndBefore', 'get', data);
        }