(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-componentsA-topTips-index"],{"03c16":function(t,e,i){"use strict";var n=i("427c"),r=i.n(n);r.a},"1b68":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */uni-view[data-v-7795cb2e]{-webkit-box-sizing:border-box;box-sizing:border-box}.u-tips[data-v-7795cb2e]{width:100%;position:fixed;z-index:1;padding:%?20?% %?30?%;color:#fff;font-size:%?28?%;left:0;right:0;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;opacity:0;-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:all .35s linear;transition:all .35s linear}.u-tip-show[data-v-7795cb2e]{-webkit-transform:translateY(0);transform:translateY(0);opacity:1;z-index:99}.u-primary[data-v-7795cb2e]{background:#2979ff}.u-success[data-v-7795cb2e]{background:#19be6b}.u-warning[data-v-7795cb2e]{background:#f90}.u-error[data-v-7795cb2e]{background:#fa3534}.u-info[data-v-7795cb2e]{background:#909399}',""]),t.exports=e},"2af5":function(t,e,i){"use strict";var n=i("6d54b"),r=i.n(n);r.a},"2bad":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-subsection[data-v-5d02c53e]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;position:relative}.u-item[data-v-5d02c53e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;font-size:%?26?%;height:100%;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#303133;padding:0 %?6?%}.u-item-bg[data-v-5d02c53e]{background-color:#2979ff;position:absolute;z-index:-1}.u-none-border-right[data-v-5d02c53e]{border-right:none!important}.u-item-first[data-v-5d02c53e]{-webkit-border-top-left-radius:%?8?%;border-top-left-radius:%?8?%;-webkit-border-bottom-left-radius:%?8?%;border-bottom-left-radius:%?8?%}.u-item-last[data-v-5d02c53e]{-webkit-border-top-right-radius:%?8?%;border-top-right-radius:%?8?%;-webkit-border-bottom-right-radius:%?8?%;border-bottom-right-radius:%?8?%}.u-item-text[data-v-5d02c53e]{-webkit-transition:all .35s;transition:all .35s;color:#303133;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;z-index:3}',""]),t.exports=e},"3f96":function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uTopTips:i("9502").default,uSubsection:i("fc04").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-demo"},[i("v-uni-view",{staticClass:"u-demo-wrap"},[i("v-uni-view",{staticClass:"u-demo-title"},[t._v("演示效果")]),i("v-uni-view",{staticClass:"u-demo-area"},[i("u-top-tips",{ref:"uTips"}),i("v-uni-text",{staticClass:"u-no-demo-here"},[t._v("点击参数配置查看效果")])],1)],1),i("v-uni-view",{staticClass:"u-config-wrap"},[i("v-uni-view",{staticClass:"u-config-title u-border-bottom"},[t._v("参数配置")]),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("主题选择")]),i("u-subsection",{attrs:{list:["primary","success","error","warning","info"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.typeChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("显示时间")]),i("u-subsection",{attrs:{current:"1",list:["长","正常","短"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.durationChange.apply(void 0,arguments)}}})],1)],1)],1)},o=[]},"427c":function(t,e,i){var n=i("1b68");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("8cb7dd76",n,!0,{sourceMap:!1,shadowMode:!1})},5830:function(t,e,i){"use strict";var n=i("e7ff"),r=i.n(n);r.a},"6d54b":function(t,e,i){var n=i("a286");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("5cf98a66",n,!0,{sourceMap:!1,shadowMode:!1})},7406:function(t,e,i){"use strict";i.r(e);var n=i("3f96"),r=i("e569");for(var o in r)"default"!==o&&function(t){i.d(e,t,(function(){return r[t]}))}(o);i("2af5");var a,s=i("f0c5"),u=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"5ade6260",null,!1,n["a"],a);e["default"]=u.exports},"7c70":function(t,e,i){"use strict";i.r(e);var n=i("7eee"),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},"7eee":function(t,e,i){"use strict";i("99af"),i("d81d"),i("a9e3"),i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-subsection",props:{list:{type:Array,default:function(){return[]}},current:{type:[Number,String],default:0},activeColor:{type:String,default:"#303133"},inactiveColor:{type:String,default:"#606266"},mode:{type:String,default:"button"},fontSize:{type:[Number,String],default:28},animation:{type:Boolean,default:!0},height:{type:[Number,String],default:70},bold:{type:Boolean,default:!0},bgColor:{type:String,default:"#eeeeef"},buttonColor:{type:String,default:"#ffffff"},vibrateShort:{type:Boolean,default:!1}},data:function(){return{listInfo:[],itemBgStyle:{width:0,left:0,backgroundColor:"#ffffff",height:"100%",transition:""},currentIndex:this.current,buttonPadding:3,borderRadius:5,firstTimeVibrateShort:!0}},watch:{current:{immediate:!0,handler:function(t){this.currentIndex=t,this.changeSectionStatus(t)}}},created:function(){this.listInfo=this.list.map((function(t,e){if("object"!=typeof t){var i={width:0,name:t};return i}return t.width=0,t}))},computed:{noBorderRight:function(){var t=this;return function(e){if("subsection"==t.mode){var i="";return e<t.list.length-1&&(i+=" u-none-border-right"),0==e&&(i+=" u-item-first"),e==t.list.length-1&&(i+=" u-item-last"),i}}},textStyle:function(){var t=this;return function(e){var i={};return"subsection"==t.mode?e==t.currentIndex?i.color="#ffffff":i.color=t.activeColor:e==t.currentIndex?i.color=t.activeColor:i.color=t.inactiveColor,e==t.currentIndex&&t.bold&&(i.fontWeight="bold"),i.fontSize=t.fontSize+"rpx",i}},itemStyle:function(){var t=this;return function(e){var i={};return"subsection"==t.mode&&(i.borderColor=t.activeColor,i.borderWidth="1px",i.borderStyle="solid"),i}},subsectionStyle:function(){var t={};return t.height=uni.upx2px(this.height)+"px","button"==this.mode&&(t.backgroundColor=this.bgColor,t.padding="".concat(this.buttonPadding,"px"),t.borderRadius="".concat(this.borderRadius,"px")),t},itemBarStyle:function(){var t={};return t.backgroundColor=this.activeColor,t.zIndex=1,"button"==this.mode&&(t.backgroundColor=this.buttonColor,t.borderRadius="".concat(this.borderRadius,"px"),t.bottom="".concat(this.buttonPadding,"px"),t.height=uni.upx2px(this.height)-2*this.buttonPadding+"px",t.zIndex=0),Object.assign(this.itemBgStyle,t)}},mounted:function(){var t=this;setTimeout((function(){t.getTabsInfo()}),10)},methods:{changeSectionStatus:function(t){var e=this;"subsection"==this.mode&&(t==this.list.length-1&&(this.itemBgStyle.borderRadius="0 ".concat(this.buttonPadding,"px ").concat(this.buttonPadding,"px 0")),0==t&&(this.itemBgStyle.borderRadius="".concat(this.buttonPadding,"px 0 0 ").concat(this.buttonPadding,"px")),t>0&&t<this.list.length-1&&(this.itemBgStyle.borderRadius="0")),setTimeout((function(){e.itemBgLeft()}),10),this.vibrateShort&&this.firstTimeVibrateShort,this.firstTimeVibrateShort=!1},click:function(t){t!=this.currentIndex&&(this.currentIndex=t,this.changeSectionStatus(t),this.$emit("change",Number(t)))},getTabsInfo:function(){for(var t=this,e=uni.createSelectorQuery().in(this),i=0;i<this.list.length;i++)e.select(".u-item-"+i).boundingClientRect();e.exec((function(e){e.length||setTimeout((function(){t.getTabsInfo()}),10),e.map((function(e,i){t.listInfo[i].width=e.width})),("subsection"==t.mode||"button"==t.mode)&&(t.itemBgStyle.width=t.listInfo[0].width+"px"),t.itemBgLeft()}))},itemBgLeft:function(){var t=this;this.animation?this.itemBgStyle.transition="all 0.35s":this.itemBgStyle.transition="all 0s";var e=0;this.listInfo.map((function(i,n){n<t.currentIndex&&(e+=i.width)})),"subsection"==this.mode?this.itemBgStyle.left=e+"px":"button"==this.mode&&(this.itemBgStyle.left=e+this.buttonPadding+"px")}}};e.default=n},"8a67":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-top-tips",props:{navbarHeight:{type:[Number,String],default:44},zIndex:{type:[Number,String],default:""}},data:function(){return{timer:null,isShow:!1,title:"",type:"primary",duration:2e3}},computed:{uZIndex:function(){return this.zIndex?this.zIndex:this.$u.zIndex.topTips}},methods:{show:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};clearTimeout(this.timer),e.duration&&(this.duration=e.duration),e.type&&(this.type=e.type),this.title=e.title,this.isShow=!0,this.timer=setTimeout((function(){t.isShow=!1,clearTimeout(t.timer),t.timer=null}),this.duration)}}};e.default=n},9096:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-subsection",style:[t.subsectionStyle]},[t._l(t.listInfo,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-item u-line-1",class:[t.noBorderRight(n),"u-item-"+n],style:[t.itemStyle(n)],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click(n)}}},[i("v-uni-view",{staticClass:"u-item-text u-line-1",style:[t.textStyle(n)]},[t._v(t._s(e.name))])],1)})),i("v-uni-view",{staticClass:"u-item-bg",style:[t.itemBarStyle]})],2)},o=[]},9502:function(t,e,i){"use strict";i.r(e);var n=i("ec22"),r=i("d560");for(var o in r)"default"!==o&&function(t){i.d(e,t,(function(){return r[t]}))}(o);i("03c16");var a,s=i("f0c5"),u=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"7795cb2e",null,!1,n["a"],a);e["default"]=u.exports},a286:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */',""]),t.exports=e},d560:function(t,e,i){"use strict";i.r(e);var n=i("8a67"),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},e569:function(t,e,i){"use strict";i.r(e);var n=i("f102"),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},e7ff:function(t,e,i){var n=i("2bad");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("e0353d9a",n,!0,{sourceMap:!1,shadowMode:!1})},ec22:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-tips",class:["u-"+t.type,t.isShow?"u-tip-show":""],style:{top:t.navbarHeight+"px",zIndex:t.uZIndex}},[t._v(t._s(t.title))])},o=[]},f102:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{duration:2e3,title:"忽如一夜春风来，千树万树梨花开",type:"primary"}},methods:{showTips:function(){this.$refs.uTips.show({duration:this.duration,title:this.title,type:this.type})},typeChange:function(t){this.type=0==t?"primary":1==t?"success":2==t?"error":3==t?"warning":"info",this.showTips()},durationChange:function(t){this.duration=0==t?4e3:1==t?2e3:500,this.showTips()}}};e.default=n},fc04:function(t,e,i){"use strict";i.r(e);var n=i("9096"),r=i("7c70");for(var o in r)"default"!==o&&function(t){i.d(e,t,(function(){return r[t]}))}(o);i("5830");var a,s=i("f0c5"),u=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"5d02c53e",null,!1,n["a"],a);e["default"]=u.exports}}]);