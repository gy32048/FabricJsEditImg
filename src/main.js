import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './routers.js'
import App from './App.vue'
import htmlToPdf from '@/utils/htmlToPdf'
Vue.config.productionTip = false
Vue.use(htmlToPdf)
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import {Button} from 'ant-design-vue';
import './assets/iconfont/iconfont.css';
import './assets/iconfont/iconfont.js';
import Contextmenu from "vue-contextmenujs";
Vue.use(Antd);
Vue.use(Button);
Vue.use(Contextmenu);
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: routers
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
