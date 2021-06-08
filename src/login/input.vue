<template>
  <div :class="['input', {[`input-${size}`]:true, 'input-focus': focus}]">
    <label>{{title}}</label>
    <input
      :type="inputType"
      :placeholder="placeholder"
      :value="value"
      @input="handleInput"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
    />
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    size: {
      type: String,
      default: function(val) {
        return val || 'middle';
      }
    },
    title: {
      type: String
    },
    placeholder: {
      type: String
    },
    value: {
      type: String
    },
    inputType: {
      type: String,
      default: 'text'
    }
  },
  data() {
    return {
      focus: false
    };
  },
  methods: {
    handleFocus() {
      this.focus = true;
    },
    handleBlur() {
      this.focus = false;
    },
    // 输入框内容变化
    handleInput(event) {
      this.$emit('change', event.target.value);
    },
    // 输入框内容变化后切换
    handleChange(event) {
      this.$emit('blur', event.target.value);
    }
  }
};
</script>
<style lang="less" scoped>
@import './styles/input.less';
</style>