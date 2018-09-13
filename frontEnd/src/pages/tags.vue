<template>
  <div class="index-middle">
    <!-- Main Content -->
    <div id='tag_cloud' class="tags">
      <span v-for="tag in tags" :title="tag.tag_name" rel="3">{{tag.tag_name}}</span>
    </div>

    <!-- 标签列表 -->
    <div class="one-tag-list">
      <span class="fa fa-tag listing-seperator" id="centOS">
        <span class="tag-text">{{tag}}</span>
      </span>
      <div class="post-preview" v-for="post in post_preview_lists">
        <router-link :to="'/detail/'+post.post_info">
          <h2 class="post-title">
            {{post.post_info}}
          </h2>
        </router-link>
        <p class="post-meta"></p>
      </div>
    </div>

  </div>
</template>

<script>
import api from '../axios/api.js'
export default {
  name: 'tags',

  data() {
    return {
      tags: [],
      msg: 'Welcome to Your Vue.js App',
      post_preview_lists: [],
      tag: ''
    }
  },
  created() {
    this.setNewsApi()
  },
  methods: {
    setNewsApi: function() {
      api.get('/tags/lists', 'type=top&key=123456').then(res => {
        this.tags = res.tags
        this.tag = res.posts.tag
        this.post_preview_lists = res.posts.post_preview_lists
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
</style>
