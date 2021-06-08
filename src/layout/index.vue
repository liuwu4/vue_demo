<template>
  <div class="layout">
    <Header />
    <div class="view">
      <Side />
      <div class="center">
        <Context>
          <router-view />
        </Context>
        <div class="footer">123</div>
      </div>
    </div>
  </div>
</template>
<script>
import Side from './side.vue';
import Header from './header.vue';
import Context from './context.vue';
export default {
  name: 'Layout',
  components: {
    Side,
    Header,
    Context
  }
};
</script>


<style lang="less" scoped>
@import './styles/index.less';
</style>