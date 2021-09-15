import Vue from 'vue';
import less from 'less';
import App from './App';
import VueRouter from 'vue-router';
import { routers } from './routers/router';
import '../assets/iconfont.css';
import Commons from './common/Commons';
Vue.use(less);
Vue.use(VueRouter);
Vue.use(Commons);
Vue.config.productionTip = false;
Vue.component('test-fun', {
  render: function(createElement) {
    return createElement('div', [
      createElement('div', [this.$slots.header]),
      createElement('div', [this.$scopedSlots.default({ user: 'tome' })]),
      createElement('div', [this.$slots.footer])
    ]);
  }
});
const vueRouter = new VueRouter({
  mode: 'history',
  routes: routers
});
// 路由拦截
vueRouter.beforeEach((to, from, next) => {
  const isLogin = JSON.parse(localStorage.getItem('isLogin') || false);
  if (isLogin && to.path === '/') {
    next('/home');
    return;
  }
  next();
});
new Vue({
  router: vueRouter,
  render: (h) => h(App)
}).$mount('#app');
