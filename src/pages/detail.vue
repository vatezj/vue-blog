<template>
    <div class="index-middle">
        <!-- Main Content -->

        <div class="post-container">
            <div class="post-title">
                {{ post.title }}
            </div>

            <div class="post-meta">
                <span class="attr">发布于：
                    <span> {{ post.publishedAt }}</span>
                </span>

                <span class="attr">标签：/

                    <a class="tag" href="/tags/#javascript" title="javascript">javascript</a>
                    <span>/</span>

                    <a class="tag" href="/tags/#前端监控" title="前端监控">前端监控</a>
                    <span>/</span>

                </span>
                <span class="attr">访问：
                    <span id="busuanzi_value_page_pv">{{ post.viewCount }}</span>
                </span>

            </div>
           <div class="post-content " v-html="post.htmlContent">
              
           </div>
        </div>
    </div>
</template>

<script>
import vueLoading from 'vue-loading-template'
import api from '../axios/api.js'
export default {
  name: 'index',
  components: {
    vueLoading
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      postLists: {},
      post:{}
    }
  },
  created() {
    this.detail()
    console.log(this.$route.params.name)
  },
  methods: {
    detail: function() {
      api.get('api/posts/detail/'+this.$route.params.name, '').then(res => {
        console.log(res)
        if (res.result) {
            this.post = res.result
        } else {
        }
        // this.postLists = res.post_preview_lists
      })
    }
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
</style>
  
  
  
  