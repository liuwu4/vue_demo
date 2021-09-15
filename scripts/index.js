/*
 * @Author: yj
 * @Date: 2021-06-08 10:11:56
 * @LastEditTime: 2021-06-08 11:38:52
 * @Description: 全局公用组件
 */
const path = require('path');
const fs = require('fs');
const root = path.resolve();
/**
 * 判断是否是vue组件
 * @param {*} filename 文件名
 * @returns true: 是， fals: 不是
 */
function vueSuffix(filename) {
  return path.extname(filename).toLowerCase() === '.vue';
}

// 公用模块路径
const files = fs
  .readdirSync(path.join(process.cwd(), '/src/common'))
  .filter((item) => vueSuffix(item))
  .map((item) => ({
    name: `${path.parse(item).name}`,
    path: path
      .join(root, '/src/common', item)
      .split(path.sep)
      .join('/')
  }));
let data = '';
let components = '';
files.forEach((item) => {
  data += `import ${item.name} from '${item.path}';\n`;
  components += `Vue.component('common-${item.name.toLocaleLowerCase()}', ${item.name});\n`;
});

data += `
export default {
  install(Vue) {
    ${components}
  }
};
`;
fs.writeFileSync(path.join(root, 'src/common/Commons.js'), `${data}`);
