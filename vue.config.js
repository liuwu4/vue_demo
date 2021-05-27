/*
 * @Author: yj
 * @Date: 2021-05-24 15:41:15
 * @LastEditTime: 2021-05-27 17:19:53
 * @Description: vue 配置文件
 */
const path = require('path');
module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', 'json'],
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  }
};
