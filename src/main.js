import Vue from 'vue';
import less from 'less';
import App from './App';
import VueRouter from 'vue-router';
import { routers } from './routers/router';
Vue.use(less);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const vueRouter = new VueRouter({
  mode: 'history',
  routes: routers
});
new Vue({
  router: vueRouter,
  render: (h) => h(App)
}).$mount('#app');
