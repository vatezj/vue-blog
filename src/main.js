// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
require('./mock.js')

Vue.config.productionTip = false
Vue.directive('drag',//自定义指令                                      JS
  {
    bind: function (el, binding) {
      let oDiv = el;   //当前元素
      let self = this;  //上下文
      oDiv.onmousedown = function (e) {
        //鼠标按下，计算当前元素距离可视区的距离
        let disX = e.clientX - oDiv.offsetLeft;
        let disY = e.clientY - oDiv.offsetTop;

        document.onmousemove = function (e) {
          //通过事件委托，计算移动的距离 
          let l = e.clientX - disX;
          let t = e.clientY - disY;
          //移动当前元素  
          oDiv.style.left = l + 'px';
          oDiv.style.top = t + 'px';
          //将此时的位置传出去
          binding.value({ x: e.pageX, y: e.pageY })
        };
        document.onmouseup = function (e) {

          document.onmousemove = null;
          document.onmouseup = null;
        };
      };
    }
  }
);

router.afterEach((to, from, next) => {
  setTimeout(() => {
    var _hmt = _hmt || [];
    (function () {
      //每次执行前，先移除上次插入的代码
      document.getElementById('baidu_tj') && document.getElementById('baidu_tj').remove();
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?801299d5547d13759c950d66e6153932";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
  }, 0);
});
Vue.filter('getYMD', function (input) {
  return input.split(' ')[0];
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
