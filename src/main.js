import Vue from 'vue';
import Antd from 'ant-design-vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import less from 'less';
import 'ant-design-vue/dist/antd.css';

import '../mock';
import { routers } from './router';
Vue.use(less);
Vue.use(Antd);
Vue.use(VueRouter);
Vue.config.productionTip = false;
const router = new VueRouter({
  routes: routers,
  mode: 'history'
});
router.beforeEach((to, from, next) => {
  next();
});
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
