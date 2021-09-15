const Mock = require('mockjs');
// 使用mockjs模拟数据
let data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|1-10': [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1,
      'name|+1': ['admin', 'Test', 'up']
    }
  ]
});
Mock.mock('/api/data', 'get', () => {
  return {
    success: true,
    data: data,
    msg: '成功'
  };
});

Mock.mock('/api/login', 'post', (req) => {
  const { body } = req;
  const { username, password } = JSON.parse(body);
  if (username === 'admin' && password === 'admin') {
    return {
      success: true,
      data: '465sfd2e2sa131===|',
      msg: '成功'
    };
  }
  return {
    success: false,
    data: null,
    msg: '用户不存在'
  };
});
