// axios封装
/**
  * get方法，对应get请求
  * @param {String} url [请求的url地址]
  * @param {Object} params [请求时携带的参数]
  */
 import axios from 'axios'
 export function get(url, params){
  return new Promise((resolve, reject) =>{
      axios.get(url, {
          params: params
      })
      .then(res => {
          resolve(res.data);
      })
      .catch(err => {
          reject(err.data)
      })
  });
}

/**
  * post方法，对应post请求
  * @param {String} url [请求的url地址]
  * @param {Object} params [请求时携带的参数]
  */
 import QS from 'qs'
 export function post(url, params) {
  return new Promise((resolve, reject) => {
        axios.post(url, QS.stringify(params))
      .then(res => {
          resolve(res.data);
      })
      .catch(err =>{
          reject(err.data)
      })
  });
}

  
// 配置编译环境和线上环境之间的切换
if (process.env.NODE_ENV == 'development') {
	axios.defaults.baseURL = 'https://elm.cangdu.org';}
else if (process.env.NODE_ENV == 'debug') {
	axios.defaults.baseURL = 'https://www.ceshi.com';
}
else if (process.env.NODE_ENV == 'production') {
	axios.defaults.baseURL = 'https://www.production.com';
}
