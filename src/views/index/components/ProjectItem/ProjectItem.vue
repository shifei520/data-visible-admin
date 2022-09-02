<template>
  <div
    class="project-item"
    @click.stop="clickItem"
  >
    <div :class="['item-image', blankTabStyle]">
      <img :src="item.urlImg">
      <!-- 鼠标悬浮出现操作按钮们 -->
      <div
        v-if="!isBlank"
        class="options-btns"
      >
        <div
          v-for="(btn ,index) in btnsInfoList"
          :key="index"
          :class="btn.className"
          @mousemove="showText(btn)"
          @mouseleave="hideText"
        >
          <transition name="el-fade-in">
            <div
              v-show="btnCurrentShow === btn.className"
              class="transition-box"
            >
              {{ btn.titleText }}
            </div>
          </transition>
          <img
            :src="btn.imgPath"
          >
        </div>
      </div>
    </div>
    <div class="pro-info">
      <p>{{ item.pname }}</p>
      <p>{{ item.time }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectItem',
  props: {
    // 切换是否是空白模板
    isBlank: {
      type: Boolean,
      default: true
    },
    // 项目数据
    item: {
      type: Object,
      default: () => ({
        urlImg: require('@/assets/imgs/add-pro.png'),
        pname: '新建项目',
        time: '2022.08.17 12:00'
      })
    }
  },
  data () {
    return {
      btnCurrentShow: '', // 控制字体和图标的切换
      btnsInfoList: [ // 按钮们的信息，便于便利生成
        {
          className: 'edit',
          titleText: '编辑',
          imgPath: require('@/assets/imgs/edit.png')
        },
        {
          className: 'full',
          titleText: '全屏',
          imgPath: require('@/assets/imgs/full.png')
        },
        {
          className: 'copy',
          titleText: '复制',
          imgPath: require('@/assets/imgs/copy.png')
        },
        {
          className: 'delete',
          titleText: '删除',
          imgPath: require('@/assets/imgs/del.png')
        }
      ]
    };
  },
  computed: {
    // 空白模板的图片和已添加项目的图片尺寸样式不同
    blankTabStyle() {
      if(this.isBlank) {
        return 'item-blank-image';
      } else {
        return '';
      }
    }
  },
  methods: {
    // 鼠标移入移出时按钮字体和图标的切换
    showText(item) {
      this.btnCurrentShow = item.className;
    },
    hideText() {
      this.btnCurrentShow = '';
    },
    // 点击模板选项卡时触发事件
    clickItem() {
      this.$emit('open');
    }
  }
};
</script>

<style lang="less" scoped src="./ProjectItem.less">

</style>