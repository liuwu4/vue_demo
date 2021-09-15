<template>
  <div class="home">
    <!-- <Test #children="{header}">123---{{header}}</Test> -->
    <!-- <Test v-slot:children="{header}">122---{{header}}</Test> -->
    <Test>
      <!-- <test-fun></test-fun> -->
    </Test>
  </div>
</template>
<script>
const testMinxin = {
  data() {
    return {
      foo: '123'
    };
  }
};
import Test from './test.vue';
export default {
  name: 'Home',
  mixins: [testMinxin],
  components: {
    Test
  }
};
</script>