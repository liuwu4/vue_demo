/*
 * @Author: yj
 * @Date: 2021-05-27 16:33:34
 * @LastEditTime: 2021-06-07 10:04:39
 * @Description:配置路由
 */
import Exit from '@/components/HelloWorld';
export const routers = [
  {
    path: '/',
    name: '登录',
    component: () => import('@/login/login')
  },
  {
    path: '/exit',
    name: '退出登录',
    component: Exit
  }
];
