<template>
  <div :class="['side']">
    side
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Side'
};
</script>