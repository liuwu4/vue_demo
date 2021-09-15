<template>
  <div>
    <div class="bg" />
    <div class="login">
      <a-form
        id="components-form-demo-normal-login"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 15 }"
        class="login-form"
      >
        <a-form-item label="用户名">
          <a-input id="error" placeholder="" v-model="username" />
        </a-form-item>
        <a-form-item label="密码">
          <a-input id="error" placeholder="" v-model="password" />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 5, offset: 5 }">
          <a-button type="primary" @click="login">
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script>
import Request from '../utils/Request';
export default {
  data: function() {
    return {
      username: 'admin',
      password: 'admin'
    };
  },
  methods: {
    login: function() {
      Request.post('/api/login', { username: this.username, password: this.password }).then((res) => {
        const { success, data } = res;
        success && localStorage.setItem('token', data);
        success && this.$router.push({ path: '/home', query: { id: '1' } });
      });
    }
  }
};
</script>
<style lang="less" scoped>
@import './login.less';
</style>
