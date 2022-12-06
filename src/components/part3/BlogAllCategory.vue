<template>
  <div class="me-blog-all-cate" >
    <el-container class="me-blog-all-container">
      <el-main class="me-blog-all-main">
<!--        <el-tabs >-->
<!--          <el-tab-pane label="日期攻略" name="category">-->
<!--            <ul class="me-blog-all-data-items">-->
<!--              <li @click="view" class="me-blog-all-item">-->
<!--                <div class="me-blog-all-content">-->
<!--                  <a class="me-blog-all-info">-->
<!--                    <img class="me-allct-img" src="@/assets/items/months/1月.png"/>-->
<!--                    <h4 class="me-allct-name">1月</h4>-->

<!--                  </a>-->

<!--&lt;!&ndash;                  <div class="me-allct-meta">&ndash;&gt;-->
<!--&lt;!&ndash;                    <span>{{c.articles}} 文章</span>&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--                </div>-->
<!--              </li>-->
<!--            </ul>-->
<!--          </el-tab-pane>-->

<!--          <el-tab-pane>-->

<!--          </el-tab-pane>-->
<!--        </el-tabs>-->

        <el-timeline>

          <el-timeline-item :timestamp="blog.created" placement="top" v-for="blog in blogs">
            <el-card>
              <h4>
                <router-link :to="{name: 'BlogDetail', params: {blogId: blog.id}}">
                  {{blog.title}}
                </router-link>
              </h4>
              <p>{{blog.description}}</p>
            </el-card>
          </el-timeline-item>

        </el-timeline>

      </el-main>
    </el-container>
  </div>
</template>


<script>

export default {
  name: 'BlogAllCategoryTag',

  created() {
    this.page(1)
  },
  data() {
    return {
      blogs: {},
      currentPage: 1,
      total: 0,
      pageSize: 5
    }
  },
  methods:{
    page(currentPage) {
      const _this = this
      _this.$axios.get("/blogs?currentPage=" + currentPage).then(res => {
        console.log(res)
        _this.blogs = res.data.data.records
        _this.currentPage = res.data.data.current
        _this.total = res.data.data.total
        _this.pageSize = res.data.data.size

      })
    }
  }
}

</script>
