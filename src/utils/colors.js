/*
 * @Author: yj
 * @Date: 2021-06-08 15:28:14
 * @LastEditTime: 2021-06-08 15:35:20
 * @Description: 色彩转换
 */

const { color } = require('../colour.js');
const fs = require('fs');
const path = require('path');
const writePath = path.resolve('src', 'colors.less');
let data = '';
color.forEach((item) => {
  const keys = Object.keys(item)[0];
  data += `@${keys}: ${item[keys]};
`;
});
fs.writeFileSync(writePath, data);
