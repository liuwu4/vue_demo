import Icon from '/Users/yujie/development/lesson/lesson_vue/src/common/Icon.vue';
import Loading from '/Users/yujie/development/lesson/lesson_vue/src/common/Loading.vue';

export default {
  install(Vue) {
    Vue.component('common-icon', Icon);
    Vue.component('common-loading', Loading);
  }
};
