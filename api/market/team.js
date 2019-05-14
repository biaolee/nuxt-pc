import {
    request
  } from '@/utils/request'
  
  
  // 
  export function PagedDesigner(data) {
    return request('api/Market/Teams/PagedDesigner', 'get', data);
  }
  
    //
    export function PagedPm(data) {
      return request('api/Market/Teams/PagedPm', 'get', data);
    }

      
    //
    export function PagedQc(data) {
        return request('api/Market/Teams/PagedQc', 'get', data);
      } 

        //
        export function GetDetail(data) {
          return request('api/Market/Teams/GetDetail', 'get', data);
        }