<template>
  <div class="total-count">
    <slot /><i>{{ count }}</i>个
  </div>
</template>

<script>
export default {
  name: 'TotalCount',
  props: {
    count: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="less" scoped>
.total-count {
  margin-right: auto;
  font-size: 14px;
  > i {
    margin: 0 4px;
    color: #007cee;
  }
}
</style>