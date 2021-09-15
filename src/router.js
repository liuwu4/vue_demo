export const routers = [
  {
    path: '/home',
    name: '首页',
    component: () => import('./layout/index.vue')
  },
  {
    path: '/',
    name: '登录',
    component: () => import('./login/index.vue')
  }
];
