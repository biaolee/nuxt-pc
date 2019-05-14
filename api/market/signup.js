import {
    request
  } from '@/utils/request'
  
  
  // 
  export function Submission(data) {
    return request('api/Market/Signup/Submission', 'post', data);
  }