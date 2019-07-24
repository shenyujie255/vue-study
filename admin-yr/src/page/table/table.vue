<template>
<div class="table_container">
  <div class="table">
    <!-- 表格头部 -->
    <div class="table_head">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="icon-font yrbiaoge"></i>基础表格</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="table_content">
      <!-- 操作 -->
      <div class="operate">
          <el-button type="primary" icon="el-icon-delete">批量删除</el-button>
          <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="search_input" class="select_input">
          </el-input>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </div>
      <!-- 表格内容 -->
      <el-table :data="tableData" border class="table_data" ref="multipleTable" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" align="center">
        </el-table-column>
        <el-table-column prop="date" label="日期" sortable width="150">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址" :formatter="formatter">
        </el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">添加</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination @current-change="handleCurrentChange" background layout="prev, pager, next" :total="1000" >
        </el-pagination>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { tableDate } from "../../service/getDate";
  export default {
    name: 'table',
    data () {
      return {
        search_input:'',  //搜索内容
        tableData: [],  //表格数据
        cur_page: 1,  //分页导航
        multipleSelection: [],  //选中状态时的数组
      }
    },
    mounted () {
      this.initData();
    },
    methods: {
      // 获取mock模拟数据
      async initData(){
        let date = await tableDate({
          page: this.cur_page,
          }).then(res=>{
          this.tableData = res.data;
          console.log(res);
        })
      },
      // 分页导航
      handleCurrentChange(val){
        this.cur_page = val;
        this.initData();
      },
      // 选项发生变化时触发
      handleSelectionChange(){
        this.multipleSelection = val;
      },
      // 删除单个
      handleDelete(){

      }
    },
    computed: {
      
    }
  }
</script>

<style lang='scss' scoped>
@import '../../style/mixin.scss';
.table_container{
  width: 100%;
  font-size: 14px;
}
.table{
  .table_head{
    margin: 10px 0;
    .yrbiaoge{
      margin-right: 5px;
    }
  }
  .table_content{
    background-color: #fff;
    padding: 30px;
    border: 1px solid #ddd;
    .operate{
      margin-bottom: 20px;
      .select_input{
        width: 300px;
        margin: 0 10px;
      }
    }
    .table_data{
      @include sc(14px,#000);
    }
    .pagination{
        text-align: right;
        padding: 20px 0;
    }
  }
}
</style>