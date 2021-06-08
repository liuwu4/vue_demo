<template>
  <div :class="[classs, {loading}]">
    <span />
  </div>
</template>
<script>
export default {
  name: 'Loading',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: function(value) {
        return value || 'default';
      }
    },
    className: {
      type: String
    }
  },
  watch: {
    loading: function(newVal) {
      this.loading = newVal;
    },
    className: function(newVal) {
      this.className = newVal;
    }
  },
  data() {
    return {
      classs: {}
    };
  },
  created() {
    const tmp = { ...this.classs, [`loading-${this.size}`]: true };
    this.className && Object.assign(tmp, { [this.className]: true });
    this.classs = { ...tmp };
  }
};
</script>
<style lang="less" scoped>
@namespace: ~'.loading';
@baseHeight: 24px;
@baseWidth: 24px;
#size {
  &-default {
    height: @baseHeight;
    width: @baseWidth;
  }
  &-large {
    height: @baseHeight + 8;
    width: @baseWidth + 8;
  }
  &-small {
    height: @baseHeight - 8;
    width: @baseWidth - 8;
  }
}
@{namespace} {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-left: 4px;
  border-radius: 50%;
  #size();
  & > span {
    display: inline-block;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border: 2px solid #1890ff;
    border-right-color: #ffff;
    border-bottom-color: #ffff;
    border-left-color: #ffff;
    animation: loading 1s linear infinite;
  }
}
@keyframes loading {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
</style>