import axios from "axios";
import Element from "element-ui";
import store from "./store";
import router from "./router";


axios.interceptors.request.use(config => {
  // config.headers['Content-Type'] = 'application/json;charset=utf-8';
  // config.headers['Access-Control-Allow-Origin']='*';

  // config.headers['token'] = user.token;  // 设置请求头
  return config
}, error => {
  return Promise.reject(error)
});

// response 拦截器
// 可以在接口响应后统一处理结果
// axios.interceptors.response.use(
//   response => {
//     let res = response.data;
//     // 如果是返回的文件
//     if (response.config.responseType === 'blob') {
//       return res
//     }
//     // 兼容服务端返回的字符串数据
//     if (typeof res === 'string') {
//       res = res ? JSON.parse(res) : res
//     }
//     return res;
//   },
//   error => {
//     console.log('err' + error); // for debug
//     return Promise.reject(error)
//   }
// );


axios.interceptors.response.use(response => {
    console.log(response)
    let res = response;

    console.log("=================")
    console.log(res.data)
    console.log("=================")

    if (res.status === 200) {
      return response
    } else {

      Element.Message.error('错了哦，这是一条错误消息', {duration: 3 * 1000})

      return Promise.reject(response.data.msg)
    }
  },
  error => {
    console.log(error)
    if(error.response.data) {
      error.message = error.response.data.msg
    }

    if(error.response.status === 401) {
      store.commit("REMOVE_INFO")
      router.push("/login")
    }

    Element.Message.error(error.message, {duration: 3 * 1000})
    return Promise.reject(error)
  }
);
