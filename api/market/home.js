import {
    request
  } from '@/utils/request'
  
  
  // 
  export function Configure(data) {
    return request('api/Market/Home/Configure', 'get', data);
  }

  export function GetNews(data) {
    return request('api/Market/Home/GetNews', 'get', data);
  }

  export function GetCases(data) {
    return request('api/Market/Home/GetCases', 'get', data);
  }

  export function GetClientWitness(data) {
    return request('api/Market/Home/GetClientWitness', 'get', data);
  }

  export function GetSites(data) {
    return request('api/Market/Home/GetSites', 'get', data);
  }
  
  export function GetPropertys(data) {
    return request('api/Market/Home/GetPropertys', 'get', data);
  }

  export function GetVrs(data) {
    return request('api/Market/Home/GetVrs', 'get', data);
  }

  export function GetDesigners(data) {
    return request('api/Market/Home/GetDesigners', 'get', data);
  }