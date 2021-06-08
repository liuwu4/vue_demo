/*
 * @Author: yj
 * @Date: 2021-05-27 16:33:34
 * @LastEditTime: 2021-06-08 14:23:33
 * @Description:配置路由
 */
export const routers = [
  {
    path: '/',
    name: '登录',
    component: () => import('@/login/login')
  },
  {
    path: '/layout',
    name: '布局页面',
    component: () => import('@/layout/index'),
    children: [
      {
        path: '/home',
        component: () => import('@/home')
      }
    ]
  }
];
