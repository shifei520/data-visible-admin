<template>
  <div class="index-page">
    <!-- 顶部tab切换栏 -->
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
    >
      <el-tab-pane
        label="我的可视化"
        name="1"
      >
        <!-- 可视化页面顶部操作区域 -->
        <div class="action-info">
          <total-count :count="2">
            应用总数为
          </total-count>
          <search-input
            v-model="projectName"
            placeholder="搜索项目"
          />
          <!-- <sort-select
            v-model="sortCondition"
            icon="el-icon-caret-bottom"
            :options="selectList"
          /> -->
          <el-dropdown
            trigger="click"
            @command="handleCommand"
          >
            <span class="el-dropdown-link">
              {{ sortCondition || '请选择排序方式' }}<i class="el-icon-caret-bottom" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-for="item in selectList"
                :key="item"
                :command="item"
              >
                {{ item }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <!-- 可视化页面列表展示区域 -->
        <div class="list-content">
          <project-item @open="open" />
          <project-item
            v-for="item in projectList"
            :key="item.id"
            :is-blank="false"
            :item="item"
          />
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="我的数据"
        name="2"
      >
        我的数据
      </el-tab-pane>
      <el-tab-pane
        label="我的资产"
        name="3"
      >
        我的资产
      </el-tab-pane>
    </el-tabs>
    <el-button
      type="primary"
      size="small"
      class="add-pro-btn"
      @click="openAddDialog"
    >
      +新建项目
    </el-button>
    <new-pro-template
      :add-dialog-visible="addDialogVisible"
      @closeDialog="closeDialog"
    />
  </div>
</template>

<script>
import ProjectItem from './components/ProjectItem/ProjectItem.vue';
import NewProTemplate from './components/NewProTemplate/NewProTemplate.vue';
import TotalCount from './components/TotalCount.vue';
import SearchInput from '@/components/SearchInput/SearchInput.vue';

export default {
  name: 'Index',
  components: {
    ProjectItem,
    NewProTemplate,
    TotalCount,
    SearchInput
  },
  data (){
    return {
      activeName: '1', // 当前激活的tab
      projectName: '', // 项目名称
      selectList: ['按新建日期排序', '按热度排序', '按距离排序'], // 排序条件数据
      sortCondition: '', // 当前的搜索条件
      projectList: [ // 项目数据
        {
          id: 2,
          urlImg: require('@/assets/imgs/pro.png'),
          pname: '涉海关注人员实战应用平台',
          time: '2022.08.17 12:00'
        },
        {
          id: 3,
          urlImg: require('@/assets/imgs/pro.png'),
          pname: '涉海关注人员实战应用平台',
          time: '2022.08.17 12:00'
        },
        {
          id: 4,
          urlImg: require('@/assets/imgs/pro.png'),
          pname: '涉海关注人员实战应用平台',
          time: '2022.08.17 12:00'
        },
        {
          id: 5,
          urlImg: require('@/assets/imgs/pro.png'),
          pname: '涉海关注人员实战应用平台',
          time: '2022.08.17 12:00'
        },
        {
          id: 6,
          urlImg: require('@/assets/imgs/pro.png'),
          pname: '涉海关注人员实战应用平台',
          time: '2022.08.17 12:00'
        }
      ],
      addDialogVisible: false // 控制创建模板弹出框的显示与隐藏
    };
  },
  methods: {
    handleClick() {

    },
    // 点击新建模板
    openAddDialog() {
      this.addDialogVisible = true;
    },
    // 关闭创建数据大屏弹出框
    closeDialog() {
      this.addDialogVisible = false;
    },
    open() {
      this.addDialogVisible = true;
    },
    // 点击选择方式菜单项触发的事件
    handleCommand(val) {
      this.sortCondition = val;
    }
  }
};
</script>

<style lang="less" scoped>
.index-page {
  /deep/ .el-tabs {
    .el-tabs__item {
      font-size: 18px;
    }
  }
  .add-pro-btn {
    position: absolute;
    top: 79px;
    right: 45px;
  }

  .action-info {
    display: flex;
    align-items: center;
    .total-count {
      margin-right: auto;
      font-size: 14px;
      > i {
        margin: 0 4px;
        color: #007cee;
      }
    }
    .el-input {
      margin-right: 25px;
    }
    .el-dropdown {
      cursor: pointer;
    }
  }

  .list-content {
    display: flex;
    flex-wrap: wrap;
  }
}

</style>