<template>
  <div :class="['context']">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Context'
};
</script>