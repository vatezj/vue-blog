<template>
  <div class="index-middle">
    <!-- Main Content -->
    <div id='tag_cloud' class="tags">
      <span v-for="tag in tags" :title="tag.name" rel="3" @click="changeTag(tag.name,tag.id)" :data-name="tag.name" :data-id="tag.id">{{tag.name}}</span>
    </div>

    <!-- 标签列表 -->
    <div class="one-tag-list">
      <span class="fa fa-tag listing-seperator" id="centOS">
        <span class="tag-text">{{tag}}</span>
      </span>
      <div class="post-preview" v-for="post in post_preview_lists">
        <router-link :to="'/detail/'+post.title">
          <h2 class="post-title">
            {{post.title}}
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
      tags: {},
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
      api.get('http://localhost/api/tags').then(res => {
        if (res.tags) {
          this.tags = res.tags
          this.tag = res.tags[0].name
          this.getPostsByTag(res.tags[0].id)
        } else {
        }
      })
    },
    getPostsByTag: function(id) {
      api.get('http://localhost/api/posts/tag/' + id).then(res => {
        if (res.result) {
          this.post_preview_lists = res.result
        } else {
        }
      })
    },
    changeTag(name,id)
    {
      this.tag = name
      this.getPostsByTag(id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
</style>
