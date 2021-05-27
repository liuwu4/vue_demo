/*
 * @Author: yj
 * @Date: 2021-05-27 16:33:34
 * @LastEditTime: 2021-05-27 17:20:07
 * @Description:配置路由
 */
import Exit from '@/components/HelloWorld';
import Test from '@/components/Test';
export const routers = [
  {
    path: '/login',
    name: '登录',
    component: Test
  },
  {
    path: '/exit',
    name: '退出登录',
    component: Exit
  }
];
