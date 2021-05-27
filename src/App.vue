<template>
  <div id="app">
    <HelloWorld msg="呼哈呼哈" />
    <Test msg="123" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Test from './components/Test.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Test
  }
};
</script>

<style lang="less">
@import './global.less';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
