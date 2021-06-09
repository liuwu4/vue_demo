<template>
  <div>测试页面{{foo}}</div>
</template>
<script>
const testMinxin = {
  data() {
    return {
      foo: '123'
    };
  },
  methods: {}
};
export default {
  name: 'Home',
  mixins: [testMinxin],
  created() {
    this.say();
  }
};
</script>