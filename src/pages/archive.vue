<template>

  <div class="index-middle">
    <!-- Main Content -->

    <!-- 归档列表 -->

    <div class="archives-container">

      <div class="one-tag-list" v-for="(post, key, index) in evenPostLists">
        <span class="fa fa-calendar-times-o listing-seperator" id="2018">
          <span class="tag-text">{{post.archive}}</span>
        </span>
        <ul>
          <li v-for="(list, key, index) in post.posts">
            <span>{{list.createdAt}}</span>
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>
            <router-link :to="'/detail/'+list.title">
              <span>
                {{list.title}}
              </span>
            </router-link>

          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
import api from '../axios/api.js'
export default {
  name: 'archive',

  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      postLists: []
    }
  },
  created() {
    this.setNewsApi()
  },
  computed: {
    evenPostLists: function() {
      return this.postLists.reverse()
    }
  },
  methods: {
    setNewsApi: function() {
      api.get('api/posts/archive', 'page=0').then(res => {
        // console.log(res.result)

        if (res.result) {
          var arr = []
          for (var i in res.result) {
            arr.push(res.result[i]) //属性
          }
          // console.log(arr)
          if (arr.length > 0) {
            console.log(arr)
            this.postLists = arr
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
