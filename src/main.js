import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import 'babel-polyfill'  //ie11打开空白
Vue.config.productionTip = true
axios.defaults.withCredentials = true
Vue.prototype.$http = axios
Vue.prototype.$http.defaults.headers.EasySecret=store.state.easysecret;
Vue.prototype.$http.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          break;
      }
    }
    //全局处理错误后返回成功一个undefined 免去每次使用 async await 都try catch
    console.error(error.response);
    return Promise.resolve();
  });
/* eslint-disable no-new */

// Vue.prototype.$http = axios

// 设置axios请求的token
// axios.defaults.headers.common['token'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJlYXN5LWNhc2luby1jb2RlIiwiY29kZSI6Ijg3NTgiLCJleHAiOjE1MjMxNzkwNjJ9.n18yr7jQxu1CZg9VfAHz6mwAgMNpw2c_g1B1f5PGd5M'
//设置请求头
// axios.defaults.headers.post["Content-type"] = "application/x-www-form-urlencoded"

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
