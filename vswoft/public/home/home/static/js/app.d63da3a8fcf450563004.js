webpackJsonp([2],{"0nQ+":function(t,e){},"639i":function(t,e){},CBBt:function(t,e){},MbtE:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("xd7I"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=s("C7Lr")({name:"App"},n,!1,function(t){s("639i")},null,null).exports,o=s("3XdE");s("0nQ+");var r={name:"CirleMenu",props:{type:{type:String,required:!0},number:{type:Number,required:!0,validator:function(t){return t>1&&t<=5}},animate:String,mask:String,circle:Boolean,btn:Boolean,open:{type:Boolean},colors:Array},data:function(){return{BtnColor:"",Item1Color:"",Item2Color:"",Item3Color:"",Item4Color:"",Item5Color:""}},methods:{toggle:function(){this.$emit("toggle")}},computed:{AnimateClass:function(){return this.toggleAnimate?this.animate:""},isShow:function(){return 3!==this.number?4===this.number:"middle"!==this.type&&"middle-around"!==this.type||void console.error("when type is 'middle' or 'middle-around',this number can not 3 ---VueCircleMenu")}},mounted:function(){if(this.colors)for(var t=0,e=this.colors.length;t<e;t++)this.BtnColor=this.colors[0],this.Item1Color=this.colors[1],this.Item2Color=this.colors[2],this.Item3Color=this.colors[3],this.Item4Color=this.colors[4],this.Item5Color=this.colors[5]}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"CircleMenu"}},[s("div",{class:t.type,attrs:{animate:t.animate}},["black"===t.mask?s("div",{directives:[{name:"show",rawName:"v-show",value:t.MaskToggle,expression:"MaskToggle"}],staticClass:"oy-mask-black",on:{click:t.toggle}}):t._e(),t._v(" "),"white"===t.mask?s("div",{directives:[{name:"show",rawName:"v-show",value:t.MaskToggle,expression:"MaskToggle"}],staticClass:"oy-mask-white",on:{click:t.toggle}}):t._e(),t._v(" "),s("div",{staticClass:"oy-menu-group",class:{open:t.open}},[s("button",{staticClass:"oy-menu-btn btn-toggle pink",class:{"oy-menu-btn-Circle":t.circle},style:{background:t.BtnColor},on:{click:t.toggle}},[t.btn?s("i",{staticClass:"icon-bars"}):t._e(),t._v(" "),t._t("item_btn")],2),t._v(" "),s("div",{staticClass:"btn-list"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.number>1&&t.number<=5,expression:"number > 1 && number <= 5"}],staticClass:"oy-menu-item oy-menu-item_1 yellow",class:t.AnimateClass,style:{background:t.Item1Color}},[t._t("item_1")],2),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.number>1&&t.number<=5,expression:"number > 1 && number <= 5"}],staticClass:"oy-menu-item oy-menu-item_2 purple",class:t.AnimateClass,style:{background:t.Item2Color}},[t._t("item_2")],2),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.number>1&&t.number<=5,expression:"number > 1 && number <= 5"}],staticClass:"oy-menu-item oy-menu-item_3 green",class:t.AnimateClass,style:{background:t.Item3Color}},[t._t("item_3")],2),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.number>1&&t.number<=5,expression:"number > 1 && number <= 5"}],staticClass:"oy-menu-item oy-menu-item_4 blue",class:t.AnimateClass,style:{background:t.Item4Color}},[t._t("item_4")],2),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.number>1&&t.number<=5,expression:"number > 1 && number <= 5"}],staticClass:"oy-menu-item oy-menu-item_5 blue",class:t.AnimateClass,style:{background:t.Item5Color}},[t._t("item_5")],2)])])])])},staticRenderFns:[]};var l=s("C7Lr")(r,c,!1,function(t){s("SDyw")},null,null).exports,u=s("CkdP"),m={components:{CircleMenus:l,draggable:s.n(u).a},name:"App",data:function(){return{toggleAnimate:!1,MaskToggle:!1,tags:"",open:!1,show:!0,routeActive:"/",val:"125",drag_style:{width:"100px",height:"100px",background:"aqua",position:"absolute",right:"30px",top:0}}},created:function(){this.routeActive=this.$route.name,console.log(this.$route.name),"page"==this.$route.name&&(this.routeActive="index")},updated:function(){this.routeActive=this.$route.name},methods:{toggle:function(){this.open=!this.open,this.toggleAnimate=!this.toggleAnimate,this.MaskToggle=!this.MaskToggle},runto:function(t){this.open=!1,this.$router.push(t.target.dataset.to)}}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"mobile-menu"},[s("circle-menus",{attrs:{type:"left",number:5,toggleAnimate:t.toggleAnimate,MaskToggle:t.MaskToggle,open:t.open,btn:"",circle:"",animate:"animated rubberBand",colors:["rgb(220,220,220)","#DCDCDC","#DCDCDC","#DCDCDC","#DCDCDC","#DCDCDC"]},on:{toggle:t.toggle,"update:toggleAnimate":function(e){t.toggleAnimate=e},"update:toggle-animate":function(e){t.toggleAnimate=e},"update:MaskToggle":function(e){t.MaskToggle=e},"update:mask-toggle":function(e){t.MaskToggle=e},"update:open":function(e){t.open=e}}},[s("a",{staticClass:"iconfont icon-shouye1",attrs:{slot:"item_1",href:"javascript:void('0')","data-to":"/"},on:{click:function(e){return t.runto(e)}},slot:"item_1"}),t._v(" "),s("a",{staticClass:"iconfont icon-biaoqian1",attrs:{slot:"item_2",href:"javascript:void('0')","data-to":"/tags"},on:{click:function(e){return t.runto(e)}},slot:"item_2"}),t._v(" "),s("a",{staticClass:"iconfont icon-guidang2",attrs:{slot:"item_3",href:"javascript:void('0')","data-to":"/archive"},on:{click:function(e){return t.runto(e)}},slot:"item_3"}),t._v(" "),s("a",{staticClass:"iconfont icon-guanyu2",attrs:{slot:"item_4",href:"javascript:void('0')","data-to":"/about"},on:{click:function(e){return t.runto(e)}},slot:"item_4"}),t._v(" "),s("a",{staticClass:"iconfonts icon-xiangce",attrs:{slot:"item_5",href:"javascript:void('0')","data-to":"/photo"},on:{click:function(e){return t.runto(e)}},slot:"item_5"})])],1),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"index-container"},[s("div",{staticClass:"index-left"},[s("div",{staticClass:"nav",attrs:{id:"nav"}},[t._m(1),t._v(" "),s("div",{staticClass:"contents",attrs:{id:"nav-content"}},[s("ul",[s("li",{class:"index"==t.routeActive||"page"==t.routeActive?"active":""},[s("router-link",{attrs:{to:"/"}},[s("i",{staticClass:"iconfont icon-shouye1"}),t._v(" "),s("span",[t._v("主页")])])],1),t._v(" "),s("li",{class:"tags"==t.routeActive?"active":""},[s("router-link",{attrs:{to:"/tags"}},[s("i",{staticClass:"iconfont icon-biaoqian1"}),t._v(" "),s("span",[t._v("标签")])])],1),t._v(" "),s("li",{class:"archive"==t.routeActive?"active":""},[s("router-link",{attrs:{to:"/archive"}},[s("i",{staticClass:"iconfont icon-guidang2"}),t._v(" "),s("span",[t._v("存档")])])],1),t._v(" "),s("li",{class:"about"==t.routeActive?"active":""},[s("router-link",{attrs:{to:"/about"}},[s("i",{staticClass:"iconfont icon-guanyu2"}),t._v(" "),s("span",[t._v("关于")])])],1)])])]),t._v(" "),t._m(2),t._v(" "),t._m(3)]),t._v(" "),s("keep-alive",[t.$route.meta.keepAlive?s("router-view",{staticStyle:{"min-height":"100%"}}):t._e()],1),t._v(" "),t.$route.meta.keepAlive?t._e():s("router-view",{staticStyle:{"min-height":"100%"}})],1),t._v(" "),t._m(4)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index-about"},[e("i",[this._v(" sometimes code， sometimes play ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"avatar-name"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:"http://image.vate.ren/logo.jpg"}})]),this._v(" "),e("div",{staticClass:"name"},[e("i",[this._v("胡木木")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"search-field",attrs:{id:"search-field"}},[e("div",{staticClass:"search-container"},[e("div",{staticClass:"search-input"},[e("span",{attrs:{id:"esc-search"}},[e("i",{staticClass:"icon-fanhui iconfont"})]),this._v(" "),e("input",{attrs:{id:"search-input"}}),this._v(" "),e("span",{attrs:{id:"begin-search"}},[this._v("搜索")])]),this._v(" "),e("div",{staticClass:"search-result-container",attrs:{id:"search-result-container"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index-about-mobile"},[e("i",[this._v(" sometimes code， sometimes play")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer"},[s("ul",{staticClass:"list-inline text-center"},[s("li",[s("a",{attrs:{target:"_blank",href:"https://weibo.com/5979985307"}},[s("span",{staticClass:"fa-stack fa-lg"},[s("i",{staticClass:"iconfont icon-weibo"})])])]),t._v(" "),s("li",[s("a",{attrs:{target:"_blank",href:"https://github.com/vatezj"}},[s("span",{staticClass:"fa-stack fa-lg"},[s("i",{staticClass:"iconfont icon-github"})])])])]),t._v(" "),s("p",[s("span",[t._v("/")]),t._v(" "),s("span",[s("a",{attrs:{href:"http://www.taoquan.ink/",target:"_blank"}},[t._v("淘券")])]),t._v(" "),s("span",[t._v("/")]),t._v(" "),s("span",[s("a",{attrs:{href:"http://cioeo.com/",target:"_blank"}},[t._v("赤橙")])]),t._v(" "),s("span",[t._v("/")]),t._v(" "),s("span",[s("a",{attrs:{href:"http://www.sansi.ren/",target:"_blank"}},[t._v("仨思")])]),t._v(" "),s("span",[t._v("/")]),t._v(" "),s("span",[s("a",{attrs:{href:"https://www.lovchun.com",target:"_blank"}},[t._v("lovchun")])]),t._v(" "),s("span",[t._v("/")])]),t._v(" "),s("p",[t._v("\n      Created By\n      "),s("a",{attrs:{href:"https://www.vate.ren/",target:"_blank"}},[t._v("胡木木")]),t._v("\n      Powered by \n      "),s("a",{attrs:{href:"https://www.swoft.org/",target:"_blank"}},[t._v("swoft")]),t._v(" "),s("span",[t._v("/")]),t._v(" "),s("a",{attrs:{href:"https://www.docker.com/",target:"_blank"}},[t._v("docker")]),t._v(" "),s("span",[t._v("/")]),t._v(" "),s("a",{attrs:{href:"http://nginx.org/",target:"_blank"}},[t._v("nginx")]),t._v(" "),s("span",[t._v("/")]),t._v(" "),s("a",{attrs:{href:"https://cn.vuejs.org/",target:"_blank"}},[t._v("vue")]),t._v(" "),s("span",[t._v("/")]),t._v(" "),s("a",{attrs:{href:"http://www.miitbeian.gov.cn",target:"_blank"}},[t._v("粤ICP备16067937号-2")])])])}]};var p=s("C7Lr")(m,v,!1,function(t){s("CBBt")},null,null).exports,g=s("c2Ch"),d={name:"tags",data:function(){return{tags:{},msg:"Welcome to Your Vue.js App",post_preview_lists:[],tag:""}},created:function(){this.setNewsApi()},methods:{setNewsApi:function(){var t=this;g.a.get("api/tags").then(function(e){e.tags&&(t.tags=e.tags,t.tag=e.tags[0].name,t.getPostsByTag(e.tags[0].id))})},getPostsByTag:function(t){var e=this;g.a.get("api/posts/tag/"+t).then(function(t){t.result&&(e.post_preview_lists=t.result)})},changeTag:function(t,e){this.tag=t,this.getPostsByTag(e)}}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index-middle"},[s("div",{staticClass:"tags",attrs:{id:"tag_cloud"}},t._l(t.tags,function(e){return s("span",{attrs:{title:e.name,rel:"3","data-name":e.name,"data-id":e.id},on:{click:function(s){return t.changeTag(e.name,e.id)}}},[t._v(t._s(e.name))])}),0),t._v(" "),s("div",{staticClass:"one-tag-list"},[s("span",{staticClass:"fa fa-tag listing-seperator",attrs:{id:"centOS"}},[s("span",{staticClass:"tag-text"},[t._v(t._s(t.tag))])]),t._v(" "),t._l(t.post_preview_lists,function(e){return s("div",{staticClass:"post-preview"},[s("router-link",{attrs:{to:"/detail/"+e.title}},[s("h2",{staticClass:"post-title"},[t._v("\n          "+t._s(e.title)+"\n        ")])]),t._v(" "),s("p",{staticClass:"post-meta"})],1)})],2)])},staticRenderFns:[]};var _=s("C7Lr")(d,h,!1,function(t){s("Q+ia")},null,null).exports,f={name:"archive",data:function(){return{msg:"Welcome to Your Vue.js App",postLists:[]}},created:function(){this.setNewsApi()},computed:{evenPostLists:function(){return this.postLists.reverse()}},methods:{setNewsApi:function(){var t=this;g.a.get("api/posts/archive","page=0").then(function(e){if(e.result){var s=[];for(var a in e.result)s.push(e.result[a]);s.length>0&&(console.log(s),t.postLists=s)}})}}},C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index-middle"},[s("div",{staticClass:"archives-container"},t._l(t.evenPostLists,function(e,a,n){return s("div",{staticClass:"one-tag-list"},[s("span",{staticClass:"fa fa-calendar-times-o listing-seperator",attrs:{id:"2018"}},[s("span",{staticClass:"tag-text"},[t._v(t._s(e.archive))])]),t._v(" "),s("ul",t._l(e.posts,function(e,a,n){return s("li",[s("span",[t._v(t._s(e.createdAt))]),t._v(" "),s("i",{staticClass:"fa fa-angle-double-right",attrs:{"aria-hidden":"true"}}),t._v(" "),s("router-link",{attrs:{to:"/detail/"+e.title}},[s("span",[t._v("\n              "+t._s(e.title)+"\n            ")])])],1)}),0)])}),0)])},staticRenderFns:[]};var b=s("C7Lr")(f,C,!1,function(t){s("TMB3")},null,null).exports,w=s("4b1K"),k=s.n(w),y=s("pLbY"),x=s.n(y),A={name:"index",components:{vueLoading:k.a,vueToTop:x.a},data:function(){return{nogood:!1,good:!1,msg:"Welcome to Your Vue.js App",postLists:{},post:{}}},created:function(){this.detail(),console.log(this.$route.params.name)},methods:{goods:function(t,e){1==e?t.target.checked&&(this.nogood=!1,this.good=!0):t.target.checked&&(this.nogood=!0,this.good=!1)},detail:function(){var t=this;g.a.get("api/posts/detail/"+this.$route.params.name,"").then(function(e){console.log(e),e.result&&(t.post=e.result)})}}},N={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index-middle"},[s("div",{staticClass:"post-container"},[s("div",{staticClass:"post-title"},[t._v("\n                "+t._s(t.post.title)+"\n            ")]),t._v(" "),s("div",{staticClass:"post-meta"},[s("span",{staticClass:"attr"},[t._v("发布于：\n                    "),s("span",[t._v(" "+t._s(t.post.publishedAt))])])]),t._v(" "),s("div",{staticClass:"post-content ",domProps:{innerHTML:t._s(t.post.htmlContent)}}),t._v(" "),s("div",{staticClass:"donate",staticStyle:{"text-align":"center"}},[t._v("\n              文章写的好不好\n              "),s("br"),t._v(" "),s("input",{attrs:{name:"Fruit",type:"radio",value:""},on:{click:function(e){return t.goods(e,1)}}}),t._v("好  \n              "),s("input",{attrs:{name:"Fruit",type:"radio",value:""},on:{click:function(e){return t.goods(e,2)}}}),t._v("不好\n\n              "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.good,expression:"good"}]},[t._v("\n                  写的好！支援下，会写的更好"),s("br"),t._v(" "),s("img",{staticStyle:{width:"200px"},attrs:{src:"http://image.vate.ren/image/N6Y8Bwr98npRFLRGHNxUlySPkZrtPm4VBmFt5pbc.jpeg",alt:"",srcset:""}}),t._v(" "),s("img",{staticStyle:{width:"200px"},attrs:{src:"http://image.vate.ren/image/IR9pWlFVVb4oHSOo6tuuXrgwEwMTUxmHZBUqqDSI.png",alt:"",srcset:""}})]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.nogood,expression:"nogood"}]},[t._v("\n                  写的不好！支援下，会写好的"),s("br"),t._v(" "),s("img",{staticStyle:{width:"200px"},attrs:{src:"http://image.vate.ren/image/IR9pWlFVVb4oHSOo6tuuXrgwEwMTUxmHZBUqqDSI.png",alt:"",srcset:""}}),t._v(" "),s("img",{staticStyle:{width:"200px"},attrs:{src:"http://image.vate.ren/image/N6Y8Bwr98npRFLRGHNxUlySPkZrtPm4VBmFt5pbc.jpeg",alt:"",srcset:""}})])])]),t._v(" "),t._m(0),t._v(" "),s("vueToTop",{attrs:{type:"12",size:"30"}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ad"},[e("div",[this._v("关注回复编程，获取编程视频")]),this._v(" "),e("img",{attrs:{src:"http://image.vate.ren/image/IVRrniIvggcZoDmheiKPRNP5ugAZMEc8AJ52cHvW.jpeg",alt:"",srcset:""}})])}]};var j=s("C7Lr")(A,N,!1,function(t){s("xpSY")},null,null).exports,T={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index-middle"},[s("div",{staticClass:"post-content "},[s("blockquote",[s("p",[t._v("大多数时候，都在思考自己该走向何方")])]),t._v(" "),s("p",[t._v("Mail: "),s("a",{attrs:{href:"mailto:vate96@foxmail.com",target:"_blank",rel:"noopener"}},[t._v("vate96@foxmail.com")])]),t._v(" "),s("p",[s("strong",[t._v("技术栈")])]),t._v(" "),s("p",[s("strong",[t._v("服务端相关：")])]),t._v(" "),s("div",{staticClass:"xiaoshujiang_code_container"},[s("pre",[t._v("  PHP（Codeigniter、Laravel、ThinkPHP、Swoole、Swoft） \n  \n  Nginx、Mysql、Memcache、Redis\n          ")])]),t._v(" "),s("div",{staticClass:"line_item line_item_display xiaoshujiang_element",attrs:{"data-line":"10"}}),t._v(" "),s("p",[s("strong",[t._v("客户端相关：")])]),t._v(" "),s("div",{staticClass:"line_item line_item_display xiaoshujiang_element",attrs:{"data-line":"12"}}),t._v(" "),s("div",{staticClass:"xiaoshujiang_code_container"},[s("pre",[t._v(" Javascript（Vuejs、jQuery） \n \n CSS (less)\n \n 小程序开发(wepy,原生)\n")])]),t._v(" "),s("div",{staticClass:"line_item line_item_display xiaoshujiang_element",attrs:{"data-line":"19"}}),t._v(" "),s("p",[s("strong",[t._v("联系我")])]),t._v(" "),s("div",{staticClass:"line_item line_item_display xiaoshujiang_element",attrs:{"data-line":"21"}}),t._v(" "),s("p",[t._v("邮箱：vate96@foxmail.com")]),t._v(" "),s("div",{staticClass:"line_item line_item_display xiaoshujiang_element",attrs:{"data-line":"23"}}),t._v(" "),s("p",[t._v("博客："),s("a",{attrs:{href:"https://www.vate.ren"}},[t._v("https://www.vate.ren")])]),t._v(" "),s("div",{staticClass:"line_item line_item_display xiaoshujiang_element",attrs:{"data-line":"25"}}),t._v(" "),s("p",[t._v("Git： "),s("a",{attrs:{href:"https://github.com/vatezj"}},[t._v("https://github.com/vatezj")])])])])}]};var M=s("C7Lr")({name:"about",data:function(){return{msg:"Welcome to Your Vue.js App"}}},T,!1,function(t){s("Y1T2")},null,null).exports,D={name:"index",components:{vueLoading:k.a},data:function(){return{msg:"Welcome to Your Vue.js App",postLists:{},next:!1,previous:"/"}},created:function(){console.log(this.$route.params.id),this.nextPage=this.$route.params.id+1,this.setNewsApi()},methods:{setNewsApi:function(){var t=this;g.a.get("api/posts/home?page="+this.$route.params.id,"").then(function(e){t.postLists=e.result,10==e.result.length&&(t.next=!0),t.$route.params.id-1>0&&(t.previous="/page/"+(t.$route.params.id+1))})}}},I={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index-middle"},[s("div",{staticClass:"post-preview-container",staticStyle:{"min-height":"576px"}},t._l(t.postLists,function(e){return s("div",{staticClass:"post-preview"},[s("div",{staticClass:"post-time"},[t._v(t._s(e.post_time))]),t._v(" "),s("div",{staticClass:"post-info"},[s("router-link",{attrs:{to:"/detail/"+e.title}},[s("h3",[t._v("\n            "+t._s(e.title)+"\n          ")])]),t._v(" "),s("p",[s("span",[t._v("/")]),t._v(" "),t._l(e.tags,function(e){return s("span",[s("router-link",{attrs:{to:"/tags/"+e.name}},[s("a",{staticClass:"tag",attrs:{href:"javascript::void(0)",title:"tag.tag_name"}},[t._v(t._s(e.name))])]),t._v(" "),s("span",[t._v("/")])],1)})],2)],1)])}),0),t._v(" "),s("ul",{staticClass:"pager"},[s("li",{staticClass:"previous"},[s("router-link",{attrs:{to:t.previous}},[t._v("← Newer Posts")])],1),t._v(" "),s("li",{directives:[{name:"show",rawName:"v-show",value:t.next,expression:"next"}],staticClass:"next"},[s("router-link",{attrs:{to:"/page/"+t.nextPage}},[t._v("Older Posts →")])],1)])])},staticRenderFns:[]};var $=s("C7Lr")(D,I,!1,function(t){s("OtQH")},null,null).exports,P=s("8ybk"),S=s.n(P),E=(s("MbtE"),s("zOHI")),L=s.n(E);a.default.use(S.a);var B={name:"photo",components:{vueWaterfallEasy:L.a,CircleMenus:l},props:{gap:{type:Number,default:20},preview:{type:Number,default:1},timeOut:{type:Number,default:500},height:{type:String,default:"100%"}},data:function(){return{msg:"Welcome to Your Vue.js App",type:"right",loop:0,toggleAnimate:!1,MaskToggle:!1,open:!1,initNum:21,begNum:10,pageNum:8,postLists:{},next:!1,imgsArr:[],drag_style:{width:"100px",height:"100px",background:"aqua",position:"absolute",right:"30px",top:0},fetchImgsArr:[]}},created:function(){console.log(this.IsPC()),this.IsPC()?(this.type="right",this.begNum=16):(this.type="left",this.begNum=10),this.imgsArr=this.initImgsArr(this.initNum,this.begNum)},methods:{inited:function(t){this.$viewer=t},toggle:function(){this.open=!this.open,this.toggleAnimate=!this.toggleAnimate,this.MaskToggle=!this.MaskToggle},runto:function(t){this.open=!1,this.$router.push(t.target.dataset.to)},show:function(){this.$viewer.show()},clickFn:function(t,e){var s=e.index,a=e.value;t.preventDefault(),"img"==t.target.tagName.toLowerCase()&&console.log("img clicked",s,a)},initImgsArr:function(t,e){for(var s=[],a=0;a<e;a++)s.push({id:t-a,src:"http://ontzi4vtc.bkt.clouddn.com/image/vate/photo/"+(t-a)+".jpg",link:"https:/",info:"一些图片描述文字"});return s},addImgsArr:function(t){console.log(t);for(var e=[],s=this.initNum-t*this.loop-this.begNum,a=0;a<t;a++)s-a<=0?e.push({id:s-a,src:"http://ontzi4vtc.bkt.clouddn.com/image/vate/photo/"+this.randomNum(this.initNum,1)+".jpg",link:"https:/",info:"一些图片描述文字"}):e.push({id:s-a,src:"http://ontzi4vtc.bkt.clouddn.com/image/vate/photo/"+(s-a)+".jpg",link:"https:/",info:"一些图片描述文字"});return console.log(e),e},randomNum:function(t,e){return parseInt(Math.random()*(t-e+1)+e)},fetchImgsData:function(){this.imgsArr=this.imgsArr.concat(this.addImgsArr(this.pageNum)),this.loop+=1,console.log(this.loop)},IsPC:function(){for(var t=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],s=!0,a=0;a<e.length;a++)if(t.indexOf(e[a])>0){s=!1;break}return s}}},R={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"warp"},[s("div",{staticClass:"muent"},[s("circle-menus",{attrs:{type:"left",number:5,toggleAnimate:t.toggleAnimate,MaskToggle:t.MaskToggle,open:t.open,btn:"",circle:"",animate:"animated rubberBand",colors:["rgb(220,220,220)","#DCDCDC","#DCDCDC","#DCDCDC","#DCDCDC","#DCDCDC"]},on:{toggle:t.toggle,"update:toggleAnimate":function(e){t.toggleAnimate=e},"update:toggle-animate":function(e){t.toggleAnimate=e},"update:MaskToggle":function(e){t.MaskToggle=e},"update:mask-toggle":function(e){t.MaskToggle=e},"update:open":function(e){t.open=e}}},[s("a",{staticClass:"iconfont icon-shouye1",attrs:{slot:"item_1",href:"javascript:void('0')","data-to":"/"},on:{click:function(e){return t.runto(e)}},slot:"item_1"}),t._v(" "),s("a",{staticClass:"iconfont icon-biaoqian1",attrs:{slot:"item_2",href:"javascript:void('0')","data-to":"/tags"},on:{click:function(e){return t.runto(e)}},slot:"item_2"}),t._v(" "),s("a",{staticClass:"iconfont icon-guidang2",attrs:{slot:"item_3",href:"javascript:void('0')","data-to":"/archive"},on:{click:function(e){return t.runto(e)}},slot:"item_3"}),t._v(" "),s("a",{staticClass:"iconfont icon-guanyu2",attrs:{slot:"item_4",href:"javascript:void('0')","data-to":"/about"},on:{click:function(e){return t.runto(e)}},slot:"item_4"}),t._v(" "),s("a",{staticClass:"iconfonts icon-xiangce",attrs:{slot:"item_5",href:"javascript:void('0')","data-to":"/photo"},on:{click:function(e){return t.runto(e)}},slot:"item_5"})])],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),s("vue-waterfall-easy",{staticClass:"images",staticStyle:{width:"100%"},attrs:{imgsArr:t.imgsArr,preview:1},on:{scrollReachBottom:t.fetchImgsData},scopedSlots:t._u([{key:"default",fn:function(t){return[s("img",{attrs:{src:t.value.src,alt:"",preview:"1"}})]}}])})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index-about"},[e("i",[this._v(" sometimes code， sometimes play ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index-about-mobile"},[e("i",[this._v(" sometimes code， sometimes play")])])}]};var F=s("C7Lr")(B,R,!1,function(t){s("qQMy")},null,null).exports;a.default.use(o.a);var q=new o.a({routes:[{path:"/",component:p,children:[{path:"/",component:function(){return s.e(0).then(s.bind(null,"2NXm"))},name:"index"},{path:"/page/:id",name:"page",component:$},{path:"/tags",name:"tags",component:_,meta:{keepAlive:!0}},{path:"/tags/:name",name:"tags",component:_,meta:{keepAlive:!0}},{path:"/archive",name:"archive",component:b,meta:{keepAlive:!0}},{path:"/detail/:name",name:"detail",component:j},{path:"/about",name:"about",component:M,meta:{keepAlive:!0}}]},{path:"/photo",name:"photo",component:F}]});s("txPn"),a.default.config.productionTip=!1,a.default.directive("drag",{bind:function(t,e){var s=t;s.onmousedown=function(t){var a=t.clientX-s.offsetLeft,n=t.clientY-s.offsetTop;document.onmousemove=function(t){var i=t.clientX-a,o=t.clientY-n;s.style.left=i+"px",s.style.top=o+"px",e.value({x:t.pageX,y:t.pageY})},document.onmouseup=function(t){document.onmousemove=null,document.onmouseup=null}}}}),q.afterEach(function(t,e,s){setTimeout(function(){!function(){document.getElementById("baidu_tj")&&document.getElementById("baidu_tj").remove();var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?801299d5547d13759c950d66e6153932";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}()},0)}),a.default.filter("getYMD",function(t){return t.split(" ")[0]}),new a.default({el:"#app",router:q,components:{App:i},template:"<App/>"})},OtQH:function(t,e){},"Q+ia":function(t,e){},SDyw:function(t,e){},TMB3:function(t,e){},Y1T2:function(t,e){},c2Ch:function(t,e,s){"use strict";var a=s("rVsN"),n=s.n(a),i=s("aozt"),o=s.n(i);function r(t,e){return new n.a(function(s,a){o.a.post(t,e).then(function(t){s(t)}).catch(function(t){a(t)})})}o.a.defaults.baseURL="https://blog.vate.ren/",o.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",o.a.interceptors.request.use(function(t){return t},function(t){return n.a.reject(t)}),o.a.interceptors.response.use(function(t){var e=t.data;return e},function(t){if(t&&t.response)switch(t.response.status){case 400:t.message="请求错误";break;case 401:t.message="未授权，请登录";break;case 403:t.message="拒绝访问";break;case 404:t.message="请求地址出错: "+t.response.config.url;break;case 408:t.message="请求超时";break;case 500:t.message="服务器内部错误";break;case 501:t.message="服务未实现";break;case 502:t.message="网关错误";break;case 503:t.message="服务不可用";break;case 504:t.message="网关超时";break;case 505:t.message="HTTP版本不受支持"}return n.a.reject(t)}),e.a={JH_news:function(t,e){return r(t,e)},post:function(t,e){return r(t,e)},get:function(t,e){return function(t,e){return new n.a(function(s,a){o.a.get(t,e).then(function(t){s(t)}).catch(function(t){a(t)})})}(t,e)}}},qQMy:function(t,e){},txPn:function(t,e,s){var a=s("cLQA"),n=a.Random;a.mock("/news/index","post",function(){for(var t=[],e=0;e<100;e++){var s={title:n.csentence(5,30),thumbnail_pic_s:n.dataImage("300x250","mock的图片"),author_name:n.cname(),date:n.date()+" "+n.time()};t.push(s)}return{articles:t}}),a.mock("/post/lists","get",function(){for(var t={code:"000",post_preview_lists:[]},e=0;e<8;e++){var s={post_info:n.csentence(5,30),tags:[{tag_name:n.cname()}],post_time:n.date()};t.post_preview_lists.push(s)}return t}),a.mock("/tags/lists","get",function(){for(var t={code:"000",tags:[],posts:{tag:"centos",post_preview_lists:[]}},e=0;e<8;e++){var s={tag_name:n.cname(3,10)};t.tags.push(s)}for(var a=0;a<10;a++){var i={post_info:n.csentence(5,30)};t.posts.post_preview_lists.push(i)}return t})},xpSY:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d63da3a8fcf450563004.js.map