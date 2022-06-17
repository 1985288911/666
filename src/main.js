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
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Select } from 'element-ui';/* 国际化 按需引入 */
import lang from 'element-ui/lib/locale/lang/en';/* 国际化 按需引入 */
import locale from 'element-ui/lib/locale';/* 国际化 按需引入 */
// import DonMessage from '@config/resetMessage.js'; /* 提示信息 */
// import VueAwesomeSwiper from 'vue-awesome-swiper'/* 轮播图 */
// import VueClipboard from 'vue-clipboard2';/* 剪贴板 */
import global_ from './config/global'/* 公共配置 */
import i18n from './i18n/index';


locale.use(lang);/* 国际化 按需引入 */// 设置语言
// VueClipboard.config.autoSetContainer = true;/* 剪贴板 *///点击复制
Vue.config.productionTip = false;//



Vue.component(Button.name, Button);/* 国际化 按需引入 */// 引入组件
Vue.component(Select.name, Select);/* 国际化 按需引入 */// 引入组件



Vue.use(ElementUi, { size: 'small', zIndex: 3000 });/* 国际化 按需引入 */
// Vue.use(VueAwesomeSwiper)
// Vue.use(VueClipboard);/* 剪贴板 */

// Vue.prototype.DonMessage=DonMessage;/* 提示信息 */
Vue.prototype.GLOBAL = global_;/* 公共配置 */



new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
