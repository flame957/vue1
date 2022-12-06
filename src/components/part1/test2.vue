<template>
  <div>
  <div>
    <h2>父子组件传值</h2>
    <div>
      <label>
        子组件传值:{{child_message}}
      </label>
    </div>
  </div>

  <div>
    <el-input v-model="input" placeholder="请输入内容" style="width:200px;margin-right: 20px;margin-top: 5px"></el-input>
    <el-button type="primary" @click="handleClick()">向子组件传值</el-button>
  </div>
  <!--引用子组件-->

  <div>
    <childDialog :show="childShow"
                 title="test2子组件"
                 @close="closeChildDialog"
                 @func="getChildData"
                 v-bind:parent_message="parent_message"
    ></childDialog>
  </div>

  </div>

</template>

<script>
  import childDialog from "../part1/child.vue";

  export default {
    name:"test2",
    components:{childDialog},
    data(){
      return{
        input:'',
        child_message:'无',
        parent_message:'无',
        childShow:false,
      }
    },

    methods:{
      handleClick(){
        this.childShow=true;
        this.parent_message=this.input;
      },

      closeChildDialog(){
        this.childShow=false;
      },

      getChildData(data){
        this.child_message=data;
      }
    }

  }
</script>
