<template>
  <div class="layout-page">
    <nav-header />
    <main>
      <left-menu />
      <div class="page-content">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import NavHeader from '@/components/NavHeader/NavHeader';
import LeftMenu from './components/LeftMenu/LeftMenu';
export default {
  name: 'Layout',
  components: {
    NavHeader,
    LeftMenu
  }
};
</script>

<style lang="less" scoped>
.layout-page {
  background-color: #f6f6f6;
  main {
    display: flex;
    min-height: calc(100vh - 56px);
    width: 1920px;
    .page-content {
      flex: 1;
      padding: 22px;
    }
  }
}
</style>