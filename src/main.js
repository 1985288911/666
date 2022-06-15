/* 
  定义:main.js是项目的入口文件，项目中所有的页面都会加载main.js。

  主要有三个作用：
  1.实例化Vue。
  2.放置项目中经常会用到的插件和CSS样式。
  3.存储全局变量。 
*/
import Vue from 'vue'
import App from './App.vue'

import router from '@/config/router'
import store from './store/index';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
