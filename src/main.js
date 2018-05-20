import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import alert from "@/components/base/alert"
import "@/obj/util"
import {Dialog,Button,Form,FormItem,DatePicker,Select,Option,Pagination,Input} from 'element-ui';
import 'element-ui/lib/theme-chalk/form-item.css';
import 'element-ui/lib/theme-chalk/form.css';
import 'element-ui/lib/theme-chalk/dialog.css';
import 'element-ui/lib/theme-chalk/button.css';
import 'element-ui/lib/theme-chalk/date-picker.css';
import 'element-ui/lib/theme-chalk/select.css';
import 'element-ui/lib/theme-chalk/option.css';
import 'element-ui/lib/theme-chalk/pagination.css';
import 'element-ui/lib/theme-chalk/input.css';
import './assets/css/iconfont.css';
import 'babel-polyfill'  //ie11打开空白
/*import Es6Promise from 'es6-promise'
Es6Promise.polyfill();*/
import route from "@/router";
Vue.use(Dialog);
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(DatePicker);
Vue.use(Select);
Vue.use(Option);
Vue.use(Pagination);
Vue.use(Input);
//公共样式
// Vue.prototype.$layer = layer(Vue);
Vue.config.productionTip = false;
axios.defaults.withCredentials = true;
Vue.prototype.$http = axios;
window.wAlert=(msg,fn)=>{//挂到全局中(同域iframe可调用)
  store.commit("ROOTBOX",{
    open: true,
    compt: alert,
    props: {
      tit: "提示",
      msg: msg,
      msgstyle: {}
    },
    handles: {
      confirm() {
        store.commit("ROOTBOX",{
          open: false
        });
        if (fn) fn(async ()=>{//第一个参数是退出登录的函数
          let res = await Vue.prototype.$http.post('/api/user/logout');
          if (!res) return;
          if (res.data.code != 0) {
            wAlert(res.data.msg);
            return;
          }
          store.commit("EASYSECRET","");
          localStorage.clear();
          Vue.prototype.$http.defaults.headers.EasySecret = undefined;
          router.push({name:"Header"});
        });
      },
      close() {
        store.commit("ROOTBOX",{
          open: false
        });
      }
    }
  });
}
Vue.component("DatePicker", DatePicker);
Vue.config.productionTip = true
axios.defaults.withCredentials = true
Vue.prototype.$http.defaults.headers.EasySecret=store.state.easysecret;
Vue.prototype.$http.interceptors.request.use(request=>{
  if(request.method=="get"){//添加时间戳
    /*request.config.url=request.config.url.indexOf("?")!=-1?(request.config.url+"&t="+Date.now()):(request.config.url+"?t="+Date.now());
      request.config.data={...request.config.data,"t":Date.now()} */
    request.params={
      t:Date.now(),
      ...request.params
    }
  };
  return request;
});
Vue.prototype.$http.interceptors.response.use(
  response => {
    if(response.status!=200){//不确定所有非200状态都进入error 所以价格判断
      store.commit("LOADING",false);
      console.error(error.response);
      return Promise.resolve();
    }else{
      if(response.data.code==2){
        store.commit("ROOTBOX",{
          open:true,
          compt:alert,
          props:{
            tit:"提示",
            msg:"您还未登录或登录过期!"
          },
          handles:{
            confirm(){
              Vue.prototype.$http.defaults.headers.EasySecret=undefined;
              if(store.state.easysecret){ //没有登录或者token过期 清空之前状态跳到登录页
                store.commit("EASYSECRET","");
                localStorage.clear();
              }
              router.push({name:"Login",params:{hback:router.currentRoute.name,params:router.currentRoute.params}});
              store.commit("ROOTBOX",{
                open:false
              });
            },
            close(){
              store.commit("ROOTBOX",{
                open:false
              });
            }
          }
        });
        //return response;
      }else{
        return response;
      }
    }
  },
  error => {
    if (error.response&&error.response.status) {
      switch (error.response.status) {//根据状态码提示对应消息
        case 401:
          break;
        case 404:
          wAlert("请求未找到");
          break;
        case 504:
          wAlert("请求超时");
          break;
        default:
          wAlert("请求错误");

      }
    }else{
      //全局处理错误后返回成功一个undefined 免去每次使用 async await 都try catch
      console.error(error.response,"错误");
      store.commit("LOADING",false);//报错时关闭loading
      wAlert("请求错误");
      return Promise.resolve();
    }
  });
/* eslint-disable no-new */

// Vue.prototype.$http = axios

// 设置axios请求的token
// axios.defaults.headers.common['token'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJlYXN5LWNhc2luby1jb2RlIiwiY29kZSI6Ijg3NTgiLCJleHAiOjE1MjMxNzkwNjJ9.n18yr7jQxu1CZg9VfAHz6mwAgMNpw2c_g1B1f5PGd5M'
//设置请求头
// axios.defaults.headers.post["Content-type"] = "application/x-www-form-urlencoded"
window.cwvue=new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
window.str=store;
