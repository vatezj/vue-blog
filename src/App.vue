<template>

  <div id="app">
    <!-- <div class="site-nav-toggle" id="site-nav-toggle"> -->
      <div class="mobile-menu" v-show="show">
        <circle-menu type="left" :number='4'  btn circle animate="animated rubberBand" :colors="[ 'rgb(220,220,220)', '#DCDCDC', '#DCDCDC', '#DCDCDC', '#DCDCDC']">
          <router-link to="/" slot="item_1" class="iconfont icon-shouye1"></router-link>
          <router-link to="/tags" slot="item_2" class="iconfont icon-biaoqian1"></router-link>
          <router-link to="/archive" slot="item_3" class="iconfont icon-guidang2"></router-link>
          <router-link to="/about" slot="item_4" class="iconfont icon-guanyu2"></router-link>
        </circle-menu>
      </div>
    <!-- </div> -->

    <div class="index-about">
      <i> sometimes code， sometimes play </i>
    </div>

    <div class="index-container">

      <div class="index-left">

        <div class="nav" id="nav">
          <div class="avatar-name">
            <div class="avatar">
              <img src="http://ontzi4vtc.bkt.clouddn.com/logo.png" />
            </div>
            <div class="name">
              <i>vate hu</i>
            </div>
          </div>
          <div class="contents" id="nav-content">
            <ul>

              <li :class="routeActive=='index' || routeActive=='page'?'active':''">
                <router-link to="/">
                  <i class="iconfont icon-shouye1"></i>
                  <span>主页</span>
                </router-link>
              </li>
              <li :class="routeActive=='tags'?'active':''">
                <router-link to="/tags">
                  <i class="iconfont icon-biaoqian1"></i>
                  <span>标签</span>
                </router-link>
              </li>
              <li :class="routeActive=='archive'?'active':''">
                <router-link to="/archive">
                  <i class="iconfont icon-guidang2"></i>
                  <span>存档</span>
                </router-link>
              </li>
              <li :class="routeActive=='about'?'active':''">
                <router-link to="/about">
                  <i class="iconfont icon-guanyu2"></i>
                  <span>关于</span>
                </router-link>
              </li>

              <!-- <li>
                <a id="search">
                    <i class="iconfont icon-sousuo1"></i>
                    <span>搜索</span>
                </a>
            </li> -->

            </ul>
          </div>

        </div>

        <div class="search-field" id="search-field">
          <div class="search-container">
            <div class="search-input">
              <span id="esc-search">
                <i class="icon-fanhui iconfont"></i>
              </span>
              <input id="search-input" />
              <span id="begin-search">搜索</span>
            </div>
            <div class="search-result-container" id="search-result-container">
            </div>
          </div>
        </div>
        <div class="index-about-mobile">
          <i> sometimes code， sometimes play</i>
        </div>
      </div>
      <router-view></router-view>
    </div>
    <footer class="footer">
      <ul class="list-inline text-center">
        <li>
          <a target="_blank" href="https://twitter.com/iconie_alloy">
            <span class="fa-stack fa-lg">
              <i class="iconfont icon-twitter"></i>
            </span>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.zhihu.com/people/ai-er-lan-xue-da">
            <span class="fa-stack fa-lg">
              <i class="iconfont icon-zhihu"></i>
            </span>
          </a>
        </li>
        <li>
          <a target="_blank" href="http://weibo.com/3286578617">
            <span class="fa-stack fa-lg">
              <i class="iconfont icon-weibo"></i>
            </span>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.facebook.com/xiaotao.nie.5">
            <span class="fa-stack fa-lg">
              <i class="iconfont icon-facebook"></i>
            </span>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/AirCloud">
            <span class="fa-stack fa-lg">
              <i class="iconfont icon-github"></i>
            </span>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/小涛-聂-80964aba">
            <span class="fa-stack fa-lg">
              <i class="iconfont icon-linkedin"></i>
            </span>
          </a>
        </li>

      </ul>
      <p>
        Created By
        <a href="https://www.vate.ren/">vate</a>
      </p>
    </footer>
  </div>
</template>

<script>
import animate from 'animate.css'
import CircleMenu from 'vue-circle-menu'
import draggable from 'vuedraggable'

export default {
  components: {
    CircleMenu,
    draggable
  },
  name: 'App',
  data() {
    return {
      tags: '',
      show: true,
      routeActive: '/',
      val: '125',
      drag_style: {
        width: '100px',
        height: '100px',
        background: 'aqua',
        position: 'absolute',
        right: '30px',
        top: 0
      },
    
    }
  },
  created: function() {
    this.routeActive = this.$route.name
    console.log('created')
    console.log(this.$route.name)
    if (this.$route.name == 'page') {
      this.routeActive = 'index'
    }
  },
  updated: function() {
    // console.log(this.$route.name)
    this.routeActive = this.$route.name
    // if (this.$route.name == 'page') {
    //   this.routeActive = 'index'
    // }
  },
  methods: {
    
  }
}
</script>

<style>
@import './assets/css/aircloud.css'; /*引入公共样式*/
@import './assets/css/gitment.css'; /*引入公共样式*/
@import './assets/css/icon.css'; /*引入公共样式*/
.oy-menu-group {
  position: relative;
  float: left;
  transition: 0.2s;
}
.btn-list a {
  color: #fff;
}
</style>
