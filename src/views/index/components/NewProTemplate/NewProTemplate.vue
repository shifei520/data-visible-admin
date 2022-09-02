<template>
  <el-dialog
    title="创建数据大屏"
    center
    :visible="addDialogVisible"
    width="1025px"
    class="new-project-template"
    @close="closeDialog"
  >
    <!-- 新建模板的表单 -->
    <el-form
      ref="form"
      label-width="358px"
      :inline="true"
      :model="templateParam"
      :rules="rules"
    >
      <el-form-item
        label="数据大屏名称"
        prop="dataName"
      >
        <el-input
          v-model="templateParam.dataName"
          placeholder="请输入名称"
        />
      </el-form-item>
      <el-form-item
        label="大屏分组"
        prop="group"
      >
        <el-select
          v-model="templateParam.group"
          placeholder="请选择"
        >
          <el-option
            label="涉海关注人员实战应用平台"
            value="涉海关注人员实战应用平台"
          />
        </el-select>
      </el-form-item>
    </el-form>
    <!-- 搜索项目 -->
    <div class="search-info">
      <total-count :count="2">
        模板总数为
      </total-count>
      <search-input
        v-model="projectName"
        placeholder="搜索项目"
      />
    </div>
    <!-- 模板列表展示 -->
    <div class="temp-list">
      <!-- 新建模板 -->
      <div
        class="blank-temp"
        @click="addTemp"
      >
        <div class="inner-box">
          <div class="add-icon">
            <span>+</span>
            <p>新建空白模板</p>
          </div>
        </div>
      </div>
      <!-- 已添加模板 -->
      <project-item
        v-for="item in tempList"
        :key="item.id"
        :item="item"
      />
    </div>
  </el-dialog>
</template>

<script>
import TotalCount from '../TotalCount.vue';
import SearchInput from '@/components/SearchInput/SearchInput';
import ProjectItem from '../ProjectItem/ProjectItem.vue';
export default {
  name: 'NewProTemplate',
  components: {
    TotalCount,
    SearchInput,
    ProjectItem
  },
  props: {
    addDialogVisible: { 
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // 绑定的表单属性
      templateParam: {
        dataName: '',
        group: ''
      },
      projectName: '', // 搜索条件
      // 表单校验规则
      rules: {
        dataName: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ],
        group: [
          { required: true, message: '请选择分组', trigger: 'change' }
        ]
      },
      // 已建立的模板数据
      tempList: [
        {
          id: 2,
          urlImg: require('@/assets/imgs/pro.png'),
          pname: '涉海关注人员实战应用平台',
          time: ''
        },
        {
          id: 3,
          urlImg: require('@/assets/imgs/pro.png'),
          pname: '涉海关注人员实战应用平台',
          time: ''
        }
      ]
    };
  },
  methods: {
    // 弹框关闭触发的回调
    closeDialog() {
      // 关闭弹框时将表单中的值置空
      for (const key in this.templateParam) {
        this.templateParam[key] = '';
      }
      this.projectName = '';
      this.$emit('closeDialog', false);
    },
    // 点击新建项目添加项目模板
    addTemp() {
      this.$refs['form'].validate(valid => {
        if(!valid) return;
        /*
        发送请求。。。。。。。。。。。
        
        */
      });
    }
  }
};
</script>

<style lang="less" scoped src="./NewProTemplate.less"></style>