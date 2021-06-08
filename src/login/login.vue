<template>
  <div class="login">
    <Input
      title="用户名"
      inputType="text"
      placeholder="请输入用户名"
      :value="userName"
      @change="handleChange"
      @blur="handleEnter"
    />
    <Input title="密码" inputType="password" placeholder="请输入用户名" :value="password" />
    <div
      :class="[{container:true, 'login-button': !loading},loading &&'disabled',]"
      @click="loginBtn"
    >
      <common-icon name="icon-scan" />
      <span>登录</span>
      <common-loading :loading="loading" />
    </div>
  </div>
</template>
<script>
import Input from './input.vue';
export default {
  components: {
    Input
  },
  data() {
    return {
      userName: '',
      password: '',
      loading: false
    };
  },
  methods: {
    handleChange(event) {
      console.log('赋值：', event);
    },
    handleEnter(event) {
      console.log('完成', event);
    },
    loginBtn: function() {
      if (this.loading) {
        return;
      }
      const self = this;
      this.loading = !this.loading;
      setTimeout(() => {
        self.loading = false;
      }, 500);
    }
  }
};
</script>

<style lang="less" scoped>
@import './styles/index.less';
</style>
