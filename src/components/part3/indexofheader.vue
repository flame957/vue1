<template>
  <div v-title data-title="ForFun Find Yourself">
    <el-container>

      <el-main class="me-articles">
        <article-scroll-page></article-scroll-page>
      </el-main>

      <el-aside>

        <card-me class="me-area"></card-me>
        <card-tag :tags="hotTags"></card-tag>

        <card-article cardHeader="最热文章" :articles="hotArticles"></card-article>

        <card-archive cardHeader="文章归档" :archives="archives"></card-archive>

<!--        <card-article cardHeader="最新文章" :articles="newArticles"></card-article>-->

      </el-aside>

    </el-container>
  </div>
</template>

<script>
import CardTag from "../card/Cardtag";
import CardMe from "../card/Cardme";
import CardArticle from "../card/Cardarticle";
import CardArchive from "../card/Cardarchive";
import ArticleScrollPage from "../../views/Article/ArticleScrollPage";
import axios from "axios";

export default {
  name: "indexOfHeader",
  components:{
    'card-tag':CardTag,
    'card-me': CardMe,
    'card-article': CardArticle,
    'card-archive': CardArchive,
    'article-scroll-page': ArticleScrollPage,
  },
  data(){
    return {
      hotTags:[],
      hotArticles:[],
      archives:[],
    }
  },
  created() {
    this.getHotTags()
    this.getHotArtices()
    this.getNewArtices()
    // this.listArchives()
  },
  methods:{
    getHotTags(){
      axios.get("/api/getUser",{
        params:{
          id:1
        }}).then(data =>{
        this.hotTags.push(data.username)
      }).catch(function (error) {
        console.log(error);
      });
    },
    getHotArtices(){
      axios.get("/api/getUser",{
        params:{
          id:1
        }}).then(data =>{
          this.hotArticles.push(data)
      }).catch(function(error){
        console.log(error);
      });
    },
    getNewArtices(){
      axios.get("/api/getUser",{
        params:{
          id:1
        }}).then(data =>{
        this.hotArticles.push(data)
      }).catch(function(error){
        console.log(error);
      });
    },
  }

}
</script>
<style scoped>
.el-container {
  width: 1460px;
}
.el-aside {
  margin-left: 20px;
  width: 260px;
}
.el-card:not(:first-child) {
  margin-top: 20px;
}
</style>
