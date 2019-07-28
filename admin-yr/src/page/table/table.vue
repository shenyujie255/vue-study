<template>
<div class="table_container">
  <div class="table_box">
    <!-- 表格头部 -->
    <div class="content_head">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="icon-font yrbiaoge"></i>基础表格</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content_main">
      <!-- 操作 -->
      <div class="operate">
          <el-button type="primary" icon="el-icon-delete" @click="delAll">批量删除</el-button>
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
    <!-- 编辑弹出框 -->
    <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
        <el-form ref="form" :model="form" label-width="50px">
            <el-form-item label="日期">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item label="姓名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="地址">
                <el-input v-model="form.address"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="editVisible = false">取 消</el-button>
            <el-button type="primary" @click="saveEdit">确 定</el-button>
        </span>
    </el-dialog>

    <!-- 删除提示框 -->
    <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
        <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="delVisible = false">取 消</el-button>
            <el-button type="primary" @click="deleteRow">确 定</el-button>
        </span>
    </el-dialog>
  </div>
</div>
</template>

<script>
import { tableDate } from "../../service/getDate";
  export default {
    name: 'basetable',
    data () {
      return {
        search_input:'',  //搜索内容
        tableData: [],  //表格数据
        cur_page: 1,  //分页导航
        multipleSelection: [],  //选中状态时的数组
        del_list: [],
        is_search: false,
        editVisible: false,
        delVisible: false,
        form: {
            name: '',
            date: '',
            address: ''
        },
        idx: 0,
        id: -1
      }
    },
    created () {
      this.initData();
    },
    methods: {
      // 获取mock模拟数据
      async initData(){
        let date = await tableDate({
          page: this.cur_page,
          }).then(res=>{
          this.tableData = res.data;
        })
      },
      // 分页导航
      handleCurrentChange(val){
        this.cur_page = val;
        this.initData();
      },
      // 选项发生变化时触发
      handleSelectionChange(val){
        this.multipleSelection = val;
      },
      // 删除单个
      handleDelete(index, row) {
          this.idx = index;
          this.id = row.id;
          this.delVisible = true;
      },
      formatter(row, column) {
          return row.address;
      },
      handleEdit(index, row) {
          this.idx = index;
          this.id = row.id;
          this.form = {
              id: row.id,
              name: row.name,
              date: row.date,
              address: row.address
          }
          this.editVisible = true;
      },
      delAll(){
          const length = this.multipleSelection.length;
          let str = '';
          this.del_list = this.del_list.concat(this.multipleSelection);
          for (let i = 0; i < length; i++) {
              str += this.multipleSelection[i].name + ' ';
          }
          console.log(this.del_list)
          this.$message.error('删除了' + str);
          this.multipleSelection = [];
          console.log(this.multipleSelection);
      },
      // 保存编辑
      saveEdit() {
        this.editVisible = false;
        this.$message.success(`修改第 ${this.idx+1} 行成功`);
        if(this.tableData[this.idx].id === this.id){
            this.$set(this.tableData, this.idx, this.form);
        }else{
          for(let i = 0; i < this.tableData.length; i++){
              if(this.tableData[i].id === this.id){
                  this.$set(this.tableData, i, this.form);
                  return ;
              }
          }
        }
      },
      // 确定删除
      deleteRow(){
          this.$message.success('删除成功');
          this.delVisible = false;
          if(this.tableData[this.idx].id === this.id){
              this.tableData.splice(this.idx, 1);
          }else{
              for(let i = 0; i < this.tableData.length; i++){
                  if(this.tableData[i].id === this.id){
                      this.tableData.splice(i, 1);
                      return ;
                  }
              }
          }
      }
    },
    computed: {
      data() {
          return this.tableData.filter((d) => {
              let is_del = false;
              for (let i = 0; i < this.del_list.length; i++) {
                  if (d.name === this.del_list[i].name) {
                      is_del = true;
                      break;
                  }
              }
              if (!is_del) {
                  if (d.address.indexOf(this.select_cate) > -1 &&
                      (d.name.indexOf(this.select_word) > -1 ||
                          d.address.indexOf(this.select_word) > -1)
                  ) {
                      return d;
                  }
              }
          })
      }
    }
  }
</script>

<style lang='scss' scoped>
@import '../../style/mixin.scss';
.table_container{
  width: 100%;
  font-size: 14px;
}
.table_box{
  .content_head{
    .yrbiaoge{
      margin-right: 5px;
    }
  }
  .content_main{
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