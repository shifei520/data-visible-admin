<!--
 * @Author: shifei shifei200004@163.com
 * @Date: 2022-08-30 14:44:37
 * @LastEditors: shifei shifei200004@163.com
 * @LastEditTime: 2022-08-30 16:02:40
 * @FilePath: \2.0\src\components\SortSelect\SortSelect.vue
 * @Description: 选择排序方式的选择组件
-->
<template>
  <div
    class="sort-mode-selection"
    :style="{ fontSize, color }"
  >
    <!-- 已选中的选项展示 -->
    <span @click="selectMode">{{ value || '请选择排序方式' }}<i
      v-if="isShowIcon"
      :class="icon"
    /></span>

    <transition name="el-zoom-in-top">
      <!-- 下拉框 -->
      <div
        v-show="isShow"
        class="select-dropdown"
      >
        <div
          v-for="(item, index) in options"
          :key="index"
          class="sort-item"
          @click="changeMode(item)"
        >
          {{ item }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SortSelect',
  props: {
    value: {
      type: String,
      default: ''
    },
    // 控制字体大小
    fontSize: {
      type: String,
      default: '14px'
    },
    // 控制字体颜色
    color: {
      type: String,
      default: '#333333'
    },
    // 传入的尾部图标
    icon: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      isShow: false // 控制选择框的显示与隐藏
    };
  },
  computed: {
    isShowIcon() {
      return !!this.icon;
    }
  },
  methods: {
    // 点击下拉选择框触发事件
    selectMode() {
      this.isShow = !this.isShow;
    },
    // 点击选择框中具体某一项触发事件
    changeMode(value) {
      this.$emit('input', value);
      this.$emit('change', value);
      this.isShow = false;
    }
  }
};
</script>

<style lang="less" scoped>
.sort-mode-selection {
  position: relative;
  > span {
    cursor: pointer;
  }
  .select-dropdown {  
    position: absolute;
    top: 140%;
    right: 0;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #e4e7ed;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    overflow: hidden;
    transition: all .5s;
    .sort-item {
      padding: 0 20px;
      height: 40px;
      line-height: 40px;
      cursor: pointer;
      white-space: nowrap;
      transition: all .5s;
      &:hover {
        background-color: #f5f7fa;
      }
    }
    &::after {
      content: "";
      position: absolute;
      top: -10px;
      left: calc(50% - 20px);
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-bottom-color: #fff;
    }
  }
}
</style>