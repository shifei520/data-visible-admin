<template>
  <div class="left-menu">
    <div class="menu-title">
      <div>我的分组</div>
      <i class="add-btn">+</i>
    </div>
    <div class="menu-group">
      <el-menu
        default-active="/index"
        router
      >
        <el-submenu index="/">
          <template slot="title">
            <span>全部应用</span>
          </template>    
          <el-menu-item index="/index">
            未标题1
          </el-menu-item>
          <el-menu-item index="1-2">
            未标题2
          </el-menu-item>
          <el-menu-item index="1-3">
            未标题3
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="2">
          <span slot="title">我的收藏</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftMenu'
};
</script>

<style lang="less" scoped>
.left-menu {
  margin-bottom: 8px;
  padding-top: 30px;
  width: 263px;
  background-color: #fff;
  box-shadow: 0px 2px 10px 0px 
		rgba(3, 10, 33, 0.18);
  .menu-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 24px;
    padding-right: 20px;
    height: 37px;
    font-size: 18px;
    color: #262626;
    border-bottom: 1px solid #e5e5e5;
    .add-btn {
      height: 20px;
      width: 20px;
      text-align: center;
      line-height: 20px;
      cursor: pointer;
    }
  }
}
</style>