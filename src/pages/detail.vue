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
<!-- 
                <span class="attr">标签：/

                    <a class="tag" href="/tags/#javascript" title="javascript">javascript</a>
                    <span>/</span>

                    <a class="tag" href="/tags/#前端监控" title="前端监控">前端监控</a>
                    <span>/</span>

                </span> -->
                <!-- <span class="attr">访问：
                    <span id="busuanzi_value_page_pv">{{ post.viewCount }}</span>
                </span> -->

            </div>
           <div class="post-content " v-html="post.htmlContent">
              
           </div>

           <div class="donate" style="text-align:center">
              文章写的好不好
              <br>
              <input name="Fruit" type="radio" value="" @click="goods($event,1)"/>好  
              <input name="Fruit" type="radio" value=""  @click="goods($event,2)"/>不好

              <div class="" v-show="good">
                  写的好！支援下，会写的更好<br>
                  <img src="http://image.vate.ren/image/N6Y8Bwr98npRFLRGHNxUlySPkZrtPm4VBmFt5pbc.jpeg" alt="" srcset="" style="width:200px">
                  <img src="http://image.vate.ren/image/IR9pWlFVVb4oHSOo6tuuXrgwEwMTUxmHZBUqqDSI.png" alt="" srcset="" style="width:200px">
              </div>
              <div class="" v-show="nogood">
                  写的不好！支援下，会写好的<br>
                    <img src="http://image.vate.ren/image/IR9pWlFVVb4oHSOo6tuuXrgwEwMTUxmHZBUqqDSI.png" alt="" srcset="" style="width:200px">
                  <img src="http://image.vate.ren/image/N6Y8Bwr98npRFLRGHNxUlySPkZrtPm4VBmFt5pbc.jpeg" alt="" srcset="" style="width:200px">
                
              </div>
           </div>
        </div>
        <div class="ad">
          <div>关注回复编程，获取编程视频</div>
          <img src="http://image.vate.ren/image/IVRrniIvggcZoDmheiKPRNP5ugAZMEc8AJ52cHvW.jpeg" alt="" srcset="" style="width:200px">
        </div>
        <vueToTop type="12" size="30"></vueToTop>
    </div>
</template>

<script>
import vueLoading from 'vue-loading-template'
import vueToTop from 'vue-totop'
import api from '../axios/api.js'
export default {
  name: 'index',
  components: {
    vueLoading,
    vueToTop
  },
  data() {
    return {
      nogood:false,
      good:false,
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
    goods($event,type)
    {
      if(type == 1){
        if($event.target.checked){
          this.nogood = false
          this.good = true
        }
      }else{
        if($event.target.checked){
           this.nogood = true
          this.good = false
        }
      }
   
    },
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
.ad{
  position: fixed;
  right: 40px;
  top: 200px;
  font-size: 14px;
}
</style>
  
  
  
  