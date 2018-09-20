<template>

  <div class="index-middle">
    <!-- Main Content -->

    <div class="post-preview-container" style="min-height: 576px">

      <div class="post-preview" v-for="post in postLists">
        <div class="post-time">{{post.post_time}}</div>
        <div class="post-info">
          <router-link :to="'/detail/'+post.title">
            <h3>
              {{post.title}}
            </h3>
          </router-link>
          <p>

            <span>/</span>
            <span v-for="tag in post.tags">
              <router-link :to="'/tags/'+tag.name">
                  <a class="tag" href="javascript::void(0)" title="tag.tag_name">{{tag.name}}</a>
               </router-link>
              <span>/</span>
            </span>

            <!-- <a class="tag" href="/tags/#前端监控" title="前端监控">前端监控</a>
            <span>/</span> -->

          </p>
        </div>
      </div>

    </div>
    <ul class="pager">

      <li class="next">
        <router-link to="/page/1">Older Posts &rarr;</router-link>
      </li>

    </ul>

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
      postLists: {}
    }
  },
  created() {
    this.setNewsApi()
  },
  methods: {
    setNewsApi: function() {
      api.get('http://localhost/api/posts/home', 'page=0').then(res => {
        console.log(res)
        if (res.result) {
          if (res.result.length > 0) {
            this.postLists = res.result
          }
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
