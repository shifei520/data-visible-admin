<template>
  <div class="vi-header">
    <!-- 左侧log0样式 -->
    <div class="logo">
      <img
        src="~@/assets/imgs/logo.png"
        alt="数据可视化平台"
      >
      <h4>数据可视化</h4>
    </div>
    <!-- 右侧用户信息 -->
    <div class="user-info">
      <img src="~@/assets/imgs/admin.png">
      <div>admin <i class="el-icon-caret-bottom" /></div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="less">
.vi-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 21px 0 18px;
  width: 1920px;
  height: 56px;
  background-color: #000;
  
  .logo {
    display: flex;
    img {
      width: 40px;
      height: 40px;
    }
    h4 {
      color: #f7f7f7;
      font-weight: 400;
      font-size: 24px;
      line-height: 40px;
    }
  }

  .user-info {
    display: flex;
    align-items: center;
    img {
      margin-right: 12px;
      width: 37px;
      height: 37px;
      border-radius: 50%;
    }
    color: #a6a6a6;
  }
}
</style>