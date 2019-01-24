import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import iView from 'iview';


//YDUI自适应
import 'vue-ydui/dist/ydui.rem.css';
import 'vue-ydui/dist/ydui.rem.js';
import 'vue-ydui/dist/ydui.flexible.js';

//iView主UI框架
import 'iview/dist/styles/iview.css';

//公共css文件
import './assets/css/public.css';

//redis启动
// import './../redis/api.ts';
//db启动
// import './../db/config.ts';
Vue.config.productionTip = false;

Vue.use(iView, {
  transfer: true,
  size: 'large'
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');