<template>
  <div>
    <div class="title_class">
      <h1>{{msg}}</h1>
    </div>

    <div class="search_class" style="margin-bottom: 10px">
      <label style="font-size: 20px">搜索</label>
      <i class="el-icon-search" slot="reference"></i>
      <el-input v-model="search" style="display: inline-block;width:200px" placeholder="请输入关键字"></el-input>
    </div>

    <div class="table_class">
      <el-table :data="tables.slice((currentPage-1)*PageSize,currentPage*PageSize)"
                border
                style="width:100%;border: #121313 solid 2px;"
                highlight-current-row
                :header-cell-style="{background:'#d9e1ea',color:'black'}">
        <el-table-column prop="id" label="编号"></el-table-column>
        <el-table-column prop="name" label="名字"></el-table-column>
      </el-table>
    </div>

    <div class="pagination_class">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="PageSize" layout="total, sizes, prev, pager, next,jumper"
        :total="dormitory.length">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name:"test1",
  data(){
    return{
      msg: '',
      dormitory: [],
      currentPage:1,
      pageSizes:[5,10,15,20],
      PageSize: 10,
      search: '',
    }
  },
  created() {
    this.getMessage();
    this.getTableData();
  },
  computed:{
    tables(){
      const search = this.search;
      if(search){
        return this.dormitory.filter(data=>{
          return Object.keys(data).some(key=>{
            return String(data[key]).indexOf(search) > -1
          })
        })
      }
      return this.dormitory;
    }

  },
  methods:{
    getMessage(){
      this.msg="这是一个标题"
    },
    getTableData(){
      this.dormitory=[
        {id:'1',name:'A'},
        {id:'2',name:'B'},
        {id:'3',name:'C'},
        {id:'4',name:'D'},
        {id:'5',name:'E'},
        {id:'6',name:'F'},
      ];
    },
    handleSizeChange(val){
      this.PageSize=val;
      this.currentPage=1;
    },
    handleCurrentChange(val){
      this.currentPage=val;
    }
  }
}
</script>

<style scoped>
.title_class{
  color:#08775b;
}
</style>
