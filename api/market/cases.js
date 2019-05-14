import {
    request
  } from '@/utils/request'
  
  
  // 
  export function PagedList(data) {
    return request('api/Market/Cases/PagedList', 'get', data);
  }
  
    // 
    export function GetDetail(data) {
      return request('api/Market/Cases/GetDetail', 'get', data);
    }

    // 
    export function GetComments(data) {
      return request('api/Market/Cases/GetComments', 'get', data);
    }


    // 
    export function GetRecommends(data) {
      return request('api/Market/Cases/GetRecommends', 'get', data);
    }

      // 
      export function GetEffectdiagrams(data) {
        return request('api/Market/Cases/GetEffectdiagrams', 'get', data);
      }