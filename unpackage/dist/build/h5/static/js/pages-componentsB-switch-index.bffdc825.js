(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-componentsB-switch-index"],{"35ea":function(i,t,e){"use strict";var n=e("9bbb"),a=e.n(n);a.a},"3e9e":function(i,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return s})),e.d(t,"a",(function(){return n}));var n={uSwitch:e("1d2f").default,uSubsection:e("fc04").default},a=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",{staticClass:"u-demo"},[e("v-uni-view",{staticClass:"u-demo-wrap"},[e("v-uni-view",{staticClass:"u-demo-title"},[i._v("演示效果")]),e("v-uni-view",{staticClass:"u-demo-area"},[e("u-switch",{attrs:{loading:i.loading,size:i.size,"active-color":i.activeColor,disabled:i.disabled,activeValue:100,inactiveValue:1},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.change.apply(void 0,arguments)}},model:{value:i.checked,callback:function(t){i.checked=t},expression:"checked"}})],1)],1),e("v-uni-view",{staticClass:"u-config-wrap"},[e("v-uni-view",{staticClass:"u-config-title u-border-bottom"},[i._v("参数配置")]),e("v-uni-view",{staticClass:"u-config-item"},[e("v-uni-view",{staticClass:"u-item-title"},[i._v("状态")]),e("u-subsection",{attrs:{list:["关闭","打开"]},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.modelChange.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"u-config-item"},[e("v-uni-view",{staticClass:"u-item-title"},[i._v("颜色")]),e("u-subsection",{attrs:{list:["primary","error","warning","success"]},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.colorChange.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"u-config-item"},[e("v-uni-view",{staticClass:"u-item-title"},[i._v("尺寸(单位rpx)")]),e("u-subsection",{attrs:{current:"1",list:["40","60","80"]},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.sizeChange.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"u-config-item"},[e("v-uni-view",{staticClass:"u-item-title"},[i._v("加载中")]),e("u-subsection",{attrs:{list:["否","是"]},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.loadingChange.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"u-config-item"},[e("v-uni-view",{staticClass:"u-item-title"},[i._v("禁用")]),e("u-subsection",{attrs:{current:"1",list:["是","否"]},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.disabledChange.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"u-config-item"},[e("v-uni-view",{staticClass:"u-item-title"},[i._v("异步控制")]),e("u-subsection",{attrs:{list:["关闭","打开"]},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.asyncChange.apply(void 0,arguments)}}})],1)],1)],1)},s=[]},"608c":function(i,t,e){"use strict";e.r(t);var n=e("3e9e"),a=e("a8a9");for(var s in a)"default"!==s&&function(i){e.d(t,i,(function(){return a[i]}))}(s);e("35ea");var c,u=e("f0c5"),o=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"620ac6c0",null,!1,n["a"],c);t["default"]=o.exports},"9bbb":function(i,t,e){var n=e("e184");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var a=e("4f06").default;a("0a291fda",n,!0,{sourceMap:!1,shadowMode:!1})},a8a9:function(i,t,e){"use strict";e.r(t);var n=e("c5a7"),a=e.n(n);for(var s in n)"default"!==s&&function(i){e.d(t,i,(function(){return n[i]}))}(s);t["default"]=a.a},c5a7:function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{checked:!1,activeColor:"#2979ff",size:50,loading:!1,disabled:!1}},methods:{modelChange:function(i){this.checked=!!i},colorChange:function(i){var t=0==i?"primary":1==i?"error":2==i?"warning":"success";this.activeColor=this.$u.color[t]},sizeChange:function(i){this.size=0==i?"40":1==i?"60":"80"},loadingChange:function(i){this.loading=!!i},disabledChange:function(i){this.disabled=0==i},asyncChange:function(i){var t=this;if(this.checked&&1==i)this.$u.toast("请先关闭选择器");else if(this.checked||0!=i){var e=0==i?"是否要关闭？":"是否要打开？";this.loading=!0;var n=this.checked;this.checked=!0,uni.showModal({title:"提示",content:e,complete:function(i){t.loading=!1,i.confirm?t.checked=!n:t.checked=!!n}})}else this.$u.toast("请先打开选择器")},change:function(i){}}};t.default=n},e184:function(i,t,e){var n=e("24fb");t=n(!1),t.push([i.i,'@charset "UTF-8";/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */',""]),i.exports=t}}]);