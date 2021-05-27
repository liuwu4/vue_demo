import Vue from 'vue';
import less from 'less';
import App from './App.vue';

Vue.use(less);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount('#app');
