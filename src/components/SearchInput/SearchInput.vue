<template>
  <el-input
    :value="value"
    :placeholder="placeholder"
    prefix-icon="el-icon-search"
    @input="searchInput"
  />
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  methods: {
    searchInput(e) {
      this.$emit('input', e);
    }
  }
};
</script>

<style lang="less" scoped>
.el-input {
  width: 241px;
  /deep/ .el-input__inner {
    height: 33px;
    line-height: 33px;
  }
  /deep/ .el-input__prefix i {
    line-height: 33px;
  }
}
</style>