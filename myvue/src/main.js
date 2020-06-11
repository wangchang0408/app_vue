// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/icon/iconfont.css'
import axios from "axios";
import { Tabbar, TabbarItem} from 'vant';
import { Search } from 'vant';
import 'vue-search-bar/dist/vue-search-bar.min.css';
import { SearchBar } from 'vue-search-bar';
Vue.use(SearchBar);
Vue.use(Search);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.prototype.$axios = axios;

// 注册element-ui
Vue.use(ElementUI)

Vue.config.productionTip = false

/*Vue.prototype.$http=axios

this.$http.get("接口地址","参数").then(res => {
  //回调函数
});
this.$http.post("接口地址","参数").then(res => {
  //回调函数
});*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
