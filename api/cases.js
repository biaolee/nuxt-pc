import request from '~/utils/request'

import axios from 'axios';


// 
export function PagedList(data) {
  const url = 'https://api.ejiadg.cn/api/wap/Cases/PagedList';
  //添加属性
  data["SubjectId"] = 26162;

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data);
  });
  //return request('/api/wap/Cases/PagedList', 'get', data);
}


//
export function GetDetail(data) {
  return request('/api/wap/Cases/Detail', 'get', data);
}
