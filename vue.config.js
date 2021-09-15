/*
 * @Author: yj
 * @Date: 2021-05-24 15:41:15
 * @LastEditTime: 2021-06-09 10:05:15
 * @Description: vue 配置文件
 */
const path = require('path');
module.exports = {
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      less: {
        // lessOptions: {
        //   modifyVars: {
        //     'primary-color': '#1DA57A',
        //     'link-color': '#1DA57A',
        //     'border-radius-base': '2px'
        //   },
        //   javascriptEnabled: true
        // }
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        //这里最好有一个 /
        target: 'http://127.0.0.1:8080', // 后台接口域名
        ws: true, //如果要代理 websockets，配置这个参数
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, //是否跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  }
};
