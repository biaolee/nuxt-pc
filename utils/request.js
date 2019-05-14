import axios from 'axios'
import qs from 'qs'
import cache from '@/utils/localstorage'
import config from '@/config/api.config'
import md5 from 'js-md5';

// 创建axios实例
export const instance = axios.create({
  baseURL: config.BASE_API, // api的base_url
  timeout: 10 * 8000 // 请求超时时间
})
// request拦截器
instance.interceptors.request.use(config => {
  var token = cache.getCookie('token');
  config.headers = { // 初始化默认post header
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  //default 自定义请求头 token 时间戳 随机字符串
  const configHeaders = {
    'timestamp': Date.parse(new Date()) / 1000,
    'signature': "fcsaas_lee",
    'Authorization': `Bearer ${token}`,
    'fc_port': 'fc_yx_sys' //请求接口 所在端口
  }
  Object.assign(config.headers, configHeaders);
  return config
}, error => {
  Promise.reject(error)
})

// respone拦截器
instance.interceptors.response.use(response => {
  const res = response.data
  if (res && res.error) {
    return Promise.reject(res.error)
  }
  if (res && (res.StatusCode == 405 || res.StatusCode == 403)) {
    //token 生效提示
    return Promise.reject(res.error)
  }
  return response
}, error => {
  console.log('接口服务器繁忙，请稍后重试');
  return Promise.reject(error)
})


export const request = async (url = '', type = 'GET', data = {}) => {
  console.log("===所请求数据===");
  console.log(url);
  console.log(JSON.stringify(data))
  let result
  type = type.toUpperCase()
  var timestamp = new Date().getTime();
  url += `?appkey=${config.appkey}&timestamp=${timestamp}&sign=${md5(config.appsecret + config.appkey + timestamp)}`;
  if (type === 'GET') {
    await instance.get(url, {
        params: data
      }).then(res => {
        result = res.data
    })
  } else if (type === 'POST') {
    await instance.post(url, qs.stringify(data))
      .then(res => {
        result = res.data
    })
  }
  return result
}
