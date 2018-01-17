const ERR_OK = '1';

import axios from "axios";
import qs from "qs";
import Vue from '../main.js';

const Axios = axios.create({
  baseURL: "/", //反向代理
  timeout: 10000,
  responseType: "json",
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  }
});

//POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(
  config => {
    // 在发送请求之前做某件事
    if (
      config.method === "post" ||
      config.method === "put" ||
      config.method === "delete"
    ) {
      // 序列化
      config.data = qs.stringify(config.data);
    }

    // 若是有做鉴权token , 就给头部带上token
    // if (localStorage.token) {
    //   config.headers.Authorization = localStorage.token;
    // }
    return config;
  },
  error => {

  	console.log(error);
    return Promise.reject(error.data.error.message);

  }
);

//返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(
  res => {

    //对响应数据做些事
    if (res.data && res.data.status !== ERR_OK) {
    	Vue.$Message.error(res.data.info);
        return Promise.reject(res.data.info);
    }
    return res.data;
  },
  error => {

  	console.warn(error)

    if (error.response.status === 403) {
    	Vue.$router.push({
    		name: "error-403"
    	});
    }
    if (error.response.status === 500) {
    	Vue.$router.push({
    		name: "error-500"
    	});
    }
    if (error.response.status === 502) {
    	Vue.$router.push({
    		name: "error-502"
    	});
    }
    if (error.response.status === 404) {
    	Vue.$router.push({
    		name: "error-404"
    	});
    }

    // 返回 response 里的错误信息
    let errorInfo =  error.data.error ? error.data.error.message : error.data;
    return Promise.reject(errorInfo);
  }
);


export default Axios;

