(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-componentsA-tag-index"],{"0336":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return o}));var o={uToast:i("981b").default,uTag:i("a21d").default,uSubsection:i("fc04").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-demo"},[i("v-uni-view",{staticClass:"u-demo-wrap"},[i("v-uni-view",{staticClass:"u-demo-title"},[t._v("演示效果")]),i("v-uni-view",{staticClass:"u-demo-area"},[i("u-toast",{ref:"uToast"}),i("u-tag",{attrs:{text:t.text,type:t.type,shape:t.shape,closeable:t.closeable,mode:t.mode,show:t.show,size:t.size},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"u-config-wrap"},[i("v-uni-view",{staticClass:"u-config-title u-border-bottom"},[t._v("参数配置")]),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("模式选择")]),i("u-subsection",{attrs:{list:["light","dark","plain"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.modeChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("显示内容")]),i("u-subsection",{attrs:{list:["蒹葭苍苍","白露为霜","在水一方"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.textChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("主题选择")]),i("u-subsection",{attrs:{current:"2",list:["primary","success","error","warning","info"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.typeChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("形状")]),i("u-subsection",{attrs:{list:["square","circle","circleLeft","circleRight"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.shapeChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("尺寸")]),i("u-subsection",{attrs:{list:["default","mini"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.sizeChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("关闭图标")]),i("u-subsection",{attrs:{list:["是","否"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.closeableChange.apply(void 0,arguments)}}})],1)],1)],1)},r=[]},"0882":function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-toast[data-v-070c62ba]{position:fixed;z-index:-1;-webkit-transition:opacity .3s;transition:opacity .3s;text-align:center;color:#fff;-webkit-border-radius:%?8?%;border-radius:%?8?%;background:#585858;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%;opacity:0;pointer-events:none;padding:%?18?% %?40?%}.u-toast.u-show[data-v-070c62ba]{opacity:1}.u-icon[data-v-070c62ba]{margin-right:%?10?%;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:normal}.u-position-center[data-v-070c62ba]{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);max-width:70%}.u-position-top[data-v-070c62ba]{left:50%;top:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-position-bottom[data-v-070c62ba]{left:50%;bottom:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-type-primary[data-v-070c62ba]{color:#2979ff;background-color:#ecf5ff;border:1px solid #d7eafe}.u-type-success[data-v-070c62ba]{color:#19be6b;background-color:#dbf1e1;border:1px solid #bef5c8}.u-type-error[data-v-070c62ba]{color:#fa3534;background-color:#fef0f0;border:1px solid #fde2e2}.u-type-warning[data-v-070c62ba]{color:#f90;background-color:#fdf6ec;border:1px solid #faecd8}.u-type-info[data-v-070c62ba]{color:#909399;background-color:#f4f4f5;border:1px solid #ebeef5}.u-type-default[data-v-070c62ba]{color:#fff;background-color:#585858}',""]),t.exports=e},"0ba7":function(t,e,i){"use strict";var o=i("fa6a"),n=i.n(o);n.a},"0f4c":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return o}));var o={uIcon:i("3366").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-toast",class:[t.isShow?"u-show":"","u-type-"+t.tmpConfig.type,"u-position-"+t.tmpConfig.position],style:{zIndex:t.uZIndex}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[t.tmpConfig.icon?i("u-icon",{staticClass:"u-icon",attrs:{name:t.iconName,size:30,color:t.tmpConfig.type}}):t._e()],1),i("v-uni-text",{staticClass:"u-text"},[t._v(t._s(t.tmpConfig.title))])],1)},r=[]},2156:function(t,e,i){"use strict";i.r(e);var o=i("d237"),n=i.n(o);for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);e["default"]=n.a},"2bad":function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-subsection[data-v-5d02c53e]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;position:relative}.u-item[data-v-5d02c53e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;font-size:%?26?%;height:100%;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#303133;padding:0 %?6?%}.u-item-bg[data-v-5d02c53e]{background-color:#2979ff;position:absolute;z-index:-1}.u-none-border-right[data-v-5d02c53e]{border-right:none!important}.u-item-first[data-v-5d02c53e]{-webkit-border-top-left-radius:%?8?%;border-top-left-radius:%?8?%;-webkit-border-bottom-left-radius:%?8?%;border-bottom-left-radius:%?8?%}.u-item-last[data-v-5d02c53e]{-webkit-border-top-right-radius:%?8?%;border-top-right-radius:%?8?%;-webkit-border-bottom-right-radius:%?8?%;border-bottom-right-radius:%?8?%}.u-item-text[data-v-5d02c53e]{-webkit-transition:all .35s;transition:all .35s;color:#303133;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;z-index:3}',""]),t.exports=e},5268:function(t,e,i){"use strict";var o=i("ed37"),n=i.n(o);n.a},5830:function(t,e,i){"use strict";var o=i("e7ff"),n=i.n(o);n.a},"5acd":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{text:"蒹葭苍苍",mode:"light",type:"error",size:"default",shape:"square",closeable:!0,show:!0}},methods:{modeChange:function(t){this.mode=0==t?"light":1==t?"dark":"plain"},textChange:function(t){this.text=0==t?"蒹葭苍苍":1==t?"白露为霜":"在水一方"},typeChange:function(t){this.type=0==t?"primary":1==t?"success":2==t?"error":3==t?"warning":"info"},shapeChange:function(t){this.shape=0==t?"square":1==t?"circle":2==t?"circleLeft":"circleRight"},sizeChange:function(t){this.size=0==t?"default":"mini"},closeableChange:function(t){this.closeable=0==t},click:function(t){this.$refs.uToast.show({title:"第".concat(t+1,"个标签被点击"),type:"success"})},close:function(t){this.$refs.uToast.show({title:"关闭图标被点击",type:"success"})}}};e.default=o},6341:function(t,e,i){"use strict";i.r(e);var o=i("fc73"),n=i.n(o);for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);e["default"]=n.a},"652c":function(t,e,i){"use strict";i.r(e);var o=i("0336"),n=i("b1cc");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("5268");var a,s=i("f0c5"),c=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"7b69c38c",null,!1,o["a"],a);e["default"]=c.exports},7039:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */',""]),t.exports=e},"7c70":function(t,e,i){"use strict";i.r(e);var o=i("7eee"),n=i.n(o);for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);e["default"]=n.a},"7eee":function(t,e,i){"use strict";i("99af"),i("d81d"),i("a9e3"),i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"u-subsection",props:{list:{type:Array,default:function(){return[]}},current:{type:[Number,String],default:0},activeColor:{type:String,default:"#303133"},inactiveColor:{type:String,default:"#606266"},mode:{type:String,default:"button"},fontSize:{type:[Number,String],default:28},animation:{type:Boolean,default:!0},height:{type:[Number,String],default:70},bold:{type:Boolean,default:!0},bgColor:{type:String,default:"#eeeeef"},buttonColor:{type:String,default:"#ffffff"},vibrateShort:{type:Boolean,default:!1}},data:function(){return{listInfo:[],itemBgStyle:{width:0,left:0,backgroundColor:"#ffffff",height:"100%",transition:""},currentIndex:this.current,buttonPadding:3,borderRadius:5,firstTimeVibrateShort:!0}},watch:{current:{immediate:!0,handler:function(t){this.currentIndex=t,this.changeSectionStatus(t)}}},created:function(){this.listInfo=this.list.map((function(t,e){if("object"!=typeof t){var i={width:0,name:t};return i}return t.width=0,t}))},computed:{noBorderRight:function(){var t=this;return function(e){if("subsection"==t.mode){var i="";return e<t.list.length-1&&(i+=" u-none-border-right"),0==e&&(i+=" u-item-first"),e==t.list.length-1&&(i+=" u-item-last"),i}}},textStyle:function(){var t=this;return function(e){var i={};return"subsection"==t.mode?e==t.currentIndex?i.color="#ffffff":i.color=t.activeColor:e==t.currentIndex?i.color=t.activeColor:i.color=t.inactiveColor,e==t.currentIndex&&t.bold&&(i.fontWeight="bold"),i.fontSize=t.fontSize+"rpx",i}},itemStyle:function(){var t=this;return function(e){var i={};return"subsection"==t.mode&&(i.borderColor=t.activeColor,i.borderWidth="1px",i.borderStyle="solid"),i}},subsectionStyle:function(){var t={};return t.height=uni.upx2px(this.height)+"px","button"==this.mode&&(t.backgroundColor=this.bgColor,t.padding="".concat(this.buttonPadding,"px"),t.borderRadius="".concat(this.borderRadius,"px")),t},itemBarStyle:function(){var t={};return t.backgroundColor=this.activeColor,t.zIndex=1,"button"==this.mode&&(t.backgroundColor=this.buttonColor,t.borderRadius="".concat(this.borderRadius,"px"),t.bottom="".concat(this.buttonPadding,"px"),t.height=uni.upx2px(this.height)-2*this.buttonPadding+"px",t.zIndex=0),Object.assign(this.itemBgStyle,t)}},mounted:function(){var t=this;setTimeout((function(){t.getTabsInfo()}),10)},methods:{changeSectionStatus:function(t){var e=this;"subsection"==this.mode&&(t==this.list.length-1&&(this.itemBgStyle.borderRadius="0 ".concat(this.buttonPadding,"px ").concat(this.buttonPadding,"px 0")),0==t&&(this.itemBgStyle.borderRadius="".concat(this.buttonPadding,"px 0 0 ").concat(this.buttonPadding,"px")),t>0&&t<this.list.length-1&&(this.itemBgStyle.borderRadius="0")),setTimeout((function(){e.itemBgLeft()}),10),this.vibrateShort&&this.firstTimeVibrateShort,this.firstTimeVibrateShort=!1},click:function(t){t!=this.currentIndex&&(this.currentIndex=t,this.changeSectionStatus(t),this.$emit("change",Number(t)))},getTabsInfo:function(){for(var t=this,e=uni.createSelectorQuery().in(this),i=0;i<this.list.length;i++)e.select(".u-item-"+i).boundingClientRect();e.exec((function(e){e.length||setTimeout((function(){t.getTabsInfo()}),10),e.map((function(e,i){t.listInfo[i].width=e.width})),("subsection"==t.mode||"button"==t.mode)&&(t.itemBgStyle.width=t.listInfo[0].width+"px"),t.itemBgLeft()}))},itemBgLeft:function(){var t=this;this.animation?this.itemBgStyle.transition="all 0.35s":this.itemBgStyle.transition="all 0s";var e=0;this.listInfo.map((function(i,o){o<t.currentIndex&&(e+=i.width)})),"subsection"==this.mode?this.itemBgStyle.left=e+"px":"button"==this.mode&&(this.itemBgStyle.left=e+this.buttonPadding+"px")}}};e.default=o},8487:function(t,e,i){"use strict";var o=i("852b"),n=i.n(o);n.a},"852b":function(t,e,i){var o=i("a6b2");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("0eed97b8",o,!0,{sourceMap:!1,shadowMode:!1})},9096:function(t,e,i){"use strict";var o;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return o}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-subsection",style:[t.subsectionStyle]},[t._l(t.listInfo,(function(e,o){return i("v-uni-view",{key:o,staticClass:"u-item u-line-1",class:[t.noBorderRight(o),"u-item-"+o],style:[t.itemStyle(o)],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click(o)}}},[i("v-uni-view",{staticClass:"u-item-text u-line-1",style:[t.textStyle(o)]},[t._v(t._s(e.name))])],1)})),i("v-uni-view",{staticClass:"u-item-bg",style:[t.itemBarStyle]})],2)},r=[]},"981b":function(t,e,i){"use strict";i.r(e);var o=i("0f4c"),n=i("6341");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("0ba7");var a,s=i("f0c5"),c=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"070c62ba",null,!1,o["a"],a);e["default"]=c.exports},a21d:function(t,e,i){"use strict";i.r(e);var o=i("a3ef"),n=i("2156");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("8487");var a,s=i("f0c5"),c=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"f9fc84c6",null,!1,o["a"],a);e["default"]=c.exports},a3ef:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return o}));var o={uIcon:i("3366").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-uni-view",{staticClass:"u-tag",class:[t.disabled?"u-disabled":"","u-size-"+t.size,"u-shape-"+t.shape,"u-mode-"+t.mode+"-"+t.type],style:[t.customStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickTag.apply(void 0,arguments)}}},[t._v(t._s(t.text)),i("v-uni-view",{staticClass:"u-icon-wrap",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[t.closeable?i("u-icon",{staticClass:"u-close-icon",style:[t.iconStyle],attrs:{size:"22",color:t.closeIconColor,name:"close"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}):t._e()],1)],1):t._e()},r=[]},a6b2:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-tag[data-v-f9fc84c6]{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-border-radius:%?6?%;border-radius:%?6?%;display:inline-block;line-height:1}.u-size-default[data-v-f9fc84c6]{font-size:%?22?%;padding:%?12?% %?22?%}.u-size-mini[data-v-f9fc84c6]{font-size:%?20?%;padding:%?6?% %?12?%}.u-mode-light-primary[data-v-f9fc84c6]{background-color:#ecf5ff;color:#2979ff;border:1px solid #a0cfff}.u-mode-light-success[data-v-f9fc84c6]{background-color:#dbf1e1;color:#19be6b;border:1px solid #71d5a1}.u-mode-light-error[data-v-f9fc84c6]{background-color:#fef0f0;color:#fa3534;border:1px solid #fab6b6}.u-mode-light-warning[data-v-f9fc84c6]{background-color:#fdf6ec;color:#f90;border:1px solid #fcbd71}.u-mode-light-info[data-v-f9fc84c6]{background-color:#f4f4f5;color:#909399;border:1px solid #c8c9cc}.u-mode-dark-primary[data-v-f9fc84c6]{background-color:#2979ff;color:#fff}.u-mode-dark-success[data-v-f9fc84c6]{background-color:#19be6b;color:#fff}.u-mode-dark-error[data-v-f9fc84c6]{background-color:#fa3534;color:#fff}.u-mode-dark-warning[data-v-f9fc84c6]{background-color:#f90;color:#fff}.u-mode-dark-info[data-v-f9fc84c6]{background-color:#909399;color:#fff}.u-mode-plain-primary[data-v-f9fc84c6]{background-color:#fff;color:#2979ff;border:1px solid #2979ff}.u-mode-plain-success[data-v-f9fc84c6]{background-color:#fff;color:#19be6b;border:1px solid #19be6b}.u-mode-plain-error[data-v-f9fc84c6]{background-color:#fff;color:#fa3534;border:1px solid #fa3534}.u-mode-plain-warning[data-v-f9fc84c6]{background-color:#fff;color:#f90;border:1px solid #f90}.u-mode-plain-info[data-v-f9fc84c6]{background-color:#fff;color:#909399;border:1px solid #909399}.u-disabled[data-v-f9fc84c6]{opacity:.55}.u-shape-circle[data-v-f9fc84c6]{-webkit-border-radius:%?100?%;border-radius:%?100?%}.u-shape-circleRight[data-v-f9fc84c6]{-webkit-border-radius:0 %?100?% %?100?% 0;border-radius:0 %?100?% %?100?% 0}.u-shape-circleLeft[data-v-f9fc84c6]{-webkit-border-radius:%?100?% 0 0 %?100?%;border-radius:%?100?% 0 0 %?100?%}.u-close-icon[data-v-f9fc84c6]{margin-left:%?14?%;font-size:%?22?%;color:#19be6b}.u-icon-wrap[data-v-f9fc84c6]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-transform:scale(.86);transform:scale(.86)}',""]),t.exports=e},b1cc:function(t,e,i){"use strict";i.r(e);var o=i("5acd"),n=i.n(o);for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);e["default"]=n.a},d237:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"u-tag",props:{type:{type:String,default:"primary"},disabled:{type:[Boolean,String],default:!1},size:{type:String,default:"default"},shape:{type:String,default:"square"},text:{type:[String,Number],default:""},bgColor:{type:String,default:""},color:{type:String,default:""},borderColor:{type:String,default:""},closeColor:{type:String,default:""},index:{type:[Number,String],default:""},mode:{type:String,default:"light"},closeable:{type:Boolean,default:!1},show:{type:Boolean,default:!0}},data:function(){return{}},computed:{customStyle:function(){var t={};return this.color&&(t.color=this.color),this.bgColor&&(t.backgroundColor=this.bgColor),"plain"==this.mode&&this.color&&!this.borderColor?t.borderColor=this.color:t.borderColor=this.borderColor,t},iconStyle:function(){if(this.closeable){var t={};return"mini"==this.size?t.fontSize="20rpx":t.fontSize="22rpx","plain"==this.mode||"light"==this.mode?t.color=this.type:"dark"==this.mode&&(t.color="#ffffff"),this.closeColor&&(t.color=this.closeColor),t}},closeIconColor:function(){return this.closeColor?this.closeColor:this.color?this.color:"dark"==this.mode?"#ffffff":this.type}},methods:{clickTag:function(){this.disabled||this.$emit("click",this.index)},close:function(){this.$emit("close",this.index)}}};e.default=o},e7ff:function(t,e,i){var o=i("2bad");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("e0353d9a",o,!0,{sourceMap:!1,shadowMode:!1})},ed37:function(t,e,i){var o=i("7039");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("ed38c3d8",o,!0,{sourceMap:!1,shadowMode:!1})},fa6a:function(t,e,i){var o=i("0882");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("152156d6",o,!0,{sourceMap:!1,shadowMode:!1})},fc04:function(t,e,i){"use strict";i.r(e);var o=i("9096"),n=i("7c70");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("5830");var a,s=i("f0c5"),c=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"5d02c53e",null,!1,o["a"],a);e["default"]=c.exports},fc73:function(t,e,i){"use strict";i("c975"),i("a9e3"),i("b64b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"u-toast",props:{zIndex:{type:[Number,String],default:""}},data:function(){return{isShow:!1,timer:null,config:{params:{},title:"",type:"",duration:2e3,isTab:!1,url:"",icon:!0,position:"center",callback:null,back:!1},tmpConfig:{}}},computed:{iconName:function(){if(["error","warning","success","info"].indexOf(this.tmpConfig.type)>=0&&this.tmpConfig.icon){var t=this.$u.type2icon(this.tmpConfig.type);return t}},uZIndex:function(){return this.isShow?this.zIndex?this.zIndex:this.$u.zIndex.toast:"999999"}},methods:{show:function(t){var e=this;this.tmpConfig=this.$u.deepMerge(this.config,t),this.timer&&(clearTimeout(this.timer),this.timer=null),this.isShow=!0,this.timer=setTimeout((function(){e.isShow=!1,clearTimeout(e.timer),e.timer=null,"function"===typeof e.tmpConfig.callback&&e.tmpConfig.callback(),e.timeEnd()}),this.tmpConfig.duration)},hide:function(){this.isShow=!1,this.timer&&(clearTimeout(this.timer),this.timer=null)},timeEnd:function(){if(this.tmpConfig.url){if("/"!=this.tmpConfig.url[0]&&(this.tmpConfig.url="/"+this.tmpConfig.url),Object.keys(this.tmpConfig.params).length){var t="";/.*\/.*\?.*=.*/.test(this.tmpConfig.url)?(t=this.$u.queryParams(this.tmpConfig.params,!1),this.tmpConfig.url=this.tmpConfig.url+"&"+t):(t=this.$u.queryParams(this.tmpConfig.params),this.tmpConfig.url+=t)}this.tmpConfig.isTab?uni.switchTab({url:this.tmpConfig.url}):uni.navigateTo({url:this.tmpConfig.url})}else this.tmpConfig.back&&this.$u.route({type:"back"})}}};e.default=o}}]);