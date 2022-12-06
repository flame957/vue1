<template>
  <el-dialog :visible.sync="localShow" :title="title" :before-close="beforeClose">
    <div style="width:100%;height:100px;border:#121313 solid 2px">
      <div style="margin-top: 20px">
        <label>父组件传来的值：{{parent_message}}</label>
      </div>

      <div>
        <el-input v-model="input" placeholder="请输入内容" style="width:200px;margin-right: 20px;margin-top: 5px"></el-input>
        <el-button type="primary" @click="handleClick()">向父组件传值</el-button>
      </div>
    </div>

  </el-dialog>
</template>


<script>
export default {
  name:"childDialog",
  props:{
    show:{
      type:Boolean,
      default: false,
    },
    title:{
      type:String,
      default: '子组件',
    },
    parent_message:{
      require:true,
      default: '无',
    },
  },
  data(){
    return{
      localShow:this.show,
      input:''
    }
  },

  watch:{
    show(val){
      this.localShow=val;
    }
  },
  methods:{
    handleClick(){
      this.$emit('func',this.input);
      this.close();
    },

    beforeClose(){
      this.close();
    },

    close(){
      this.$emit('close');
    }
  }

}
</script>
