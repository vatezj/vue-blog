<template>

  <div class="warp">
 <div class="index-about">
      <i> sometimes code， sometimes play </i>
    </div>
     <div class="index-about-mobile">
          <i> sometimes code， sometimes play</i>
        </div>
    <!-- Main Content -->
    <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="fetchImgsData" style="width:100%;" class="images" :preview="1">
      <template slot-scope="props">
         <img :src="props.value.src" alt="" preview="1"/>
    
      </template>
    </vue-waterfall-easy>
  </div>
</template>

<script>
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
import Vue from 'vue'

Vue.use(preview)
import vueWaterfallEasy from 'vue-waterfall-easy'

export default {
  name: 'photo',
  components: {
    vueWaterfallEasy
  },
  props: {
    gap: {
      // 图片间隔
      type: Number,
      default: 20
    },
    preview:{
 type: Number,
      default: 1
    },
    //    imgWidth: { // 指定图片的统一宽度
    //    type: Number,
    //  default: 240
    //},
    timeOut: {
      // 预加载事件小于500毫秒就不显示加载动画，增加用户体验
      type: Number,
      default: 500
    },
    height: {
      type: String,
      default: '100%'
    }
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      postLists: {},
      next: false,
      imgsArr: [],
      fetchImgsArr: [] //存放每次滚动时下一批要加载的图片的数组
    }
  },
  created() {
    this.imgsArr = this.initImgsArr(0, 20) //初始化第一次（即页面加载完毕时）要加载的图片数据
    this.fetchImgsArr = this.initImgsArr(7, 16) // 模拟每次请求的下一批新的图片的数据数据
  },
  methods: {
    inited(viewer) {
      this.$viewer = viewer
    },
    show() {
      this.$viewer.show()
    },
    clickFn(event, { index, value }) {
      // 阻止a标签跳转
      event.preventDefault()
      // 只有当点击到图片时才进行操作
      if (event.target.tagName.toLowerCase() == 'img') {
        console.log('img clicked', index, value)
      }
    },
    initImgsArr(n, m) {
      //初始化图片数组的方法，把要加载的图片装入
      var arr = []
      for (var i = n; i < m; i++) {
        var y = i
        if (i >= 7) {
          y = i % 7
        }
        arr.push({
          id: i,
          src: `http://ontzi4vtc.bkt.clouddn.com/image/jpg/${y + 1}.jpg`,
          link: 'https:/',
          info: '一些图片描述文字'
        })

        //src为加载的图片的地址、link为超链接的链接地址、
        //info为自定义的图片展示信息，请根据自己的情况自行填写
      }
      return arr
    },
    fetchImgsData() {
      //获取新的图片数据的方法，用于页面滚动满足条件时调用
      this.imgsArr = this.imgsArr.concat(this.fetchImgsArr) //数组拼接，把下一批要加载的图片放入所有图片的数组中
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import '../assets/css/aircloud.css'; /*引入公共样式*/
@import '../assets/css/gitment.css'; /*引入公共样式*/
.warp {
  height: 100%;
  width: 100%;
}
#app,
body,
html {
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
#app {
  overflow: auto;
  position: relative;
}
#app #content {
  position: absolute;
  top: 32px;
  bottom: 0;
  width: 100%;
}
h1,
a {
  color: #42b983;
}
.vue-waterfall-easy {
  position: relative;
  width: 100%;
}
.img-box {
  display: inline-block;
  width: 50%;
  box-sizing: border-box;
  float: left;
  transition: left 1s, top 1s;
}
.img-inner-box {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.img-wraper {
  width: 100%;
  background: yellow;
}
img {
  width: 100%;
  vertical-align: bottom;
}
.vue-waterfall-easy-container .vue-waterfall-easy-scroll {
  overflow-y: auto !important;
}
.vue-waterfall-easy-container .vue-waterfall-easy .alink.img-wraper
{
  display: none;
}
.index-about-mobile {

    margin-bottom: 20px;
    padding-top: 20px;
}
</style>
