(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-componentsC-progress-index"],{"04dd":function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={uLineProgress:i("3a52").default,uCircleProgress:i("68a7").default,uSubsection:i("fc04").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-demo"},[i("v-uni-view",{staticClass:"u-demo-wrap"},[i("v-uni-view",{staticClass:"u-demo-title"},[t._v("演示效果")]),i("v-uni-view",{staticClass:"u-demo-area"},["line"==t.mode?i("u-line-progress",{attrs:{percent:t.percent,"active-color":t.activeColor,striped:t.striped,stripedActive:t.stripedActive}}):i("u-circle-progress",{attrs:{percent:t.percent,"active-color":t.activeColor,"bg-color":"rgb(250, 250, 250)"}},[i("v-uni-view",{staticClass:"u-progress-content"},[i("v-uni-view",{staticClass:"u-progress-dot"}),i("v-uni-text",{staticClass:"u-progress-info"},[t._v("查找中")])],1)],1)],1)],1),i("v-uni-view",{staticClass:"u-config-wrap"},[i("v-uni-view",{staticClass:"u-config-title u-border-bottom"},[t._v("参数配置")]),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("模式选择")]),i("u-subsection",{attrs:{current:t.current,list:["线型","圆型"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.modeChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("增减")]),i("u-subsection",{attrs:{list:["减少30%","增加30%"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.calcChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("自定义样式(线型时有效)")]),i("u-subsection",{attrs:{current:"1",list:["是","否"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.styleChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("动态条纹(线型时有效)")]),i("u-subsection",{attrs:{current:"1",list:["是","否"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.stripedChange.apply(void 0,arguments)}}})],1)],1)],1)},s=[]},1242:function(t,e,i){"use strict";i.r(e);var n=i("04dd"),r=i("246f");for(var s in r)"default"!==s&&function(t){i.d(e,t,(function(){return r[t]}))}(s);i("8895");var a,o=i("f0c5"),u=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"672d2051",null,!1,n["a"],a);e["default"]=u.exports},"15d3":function(t,e,i){"use strict";var n=i("a347"),r=i.n(n);r.a},"237c":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-progress-content[data-v-672d2051]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.u-progress-dot[data-v-672d2051]{width:%?16?%;height:%?16?%;-webkit-border-radius:50%;border-radius:50%;background-color:#fb9126}.u-progress-info[data-v-672d2051]{font-size:%?28?%;padding-left:%?16?%;letter-spacing:%?2?%}',""]),t.exports=e},"246f":function(t,e,i){"use strict";i.r(e);var n=i("479d"),r=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=r.a},"2bad":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-subsection[data-v-5d02c53e]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;position:relative}.u-item[data-v-5d02c53e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;font-size:%?26?%;height:100%;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#303133;padding:0 %?6?%}.u-item-bg[data-v-5d02c53e]{background-color:#2979ff;position:absolute;z-index:-1}.u-none-border-right[data-v-5d02c53e]{border-right:none!important}.u-item-first[data-v-5d02c53e]{-webkit-border-top-left-radius:%?8?%;border-top-left-radius:%?8?%;-webkit-border-bottom-left-radius:%?8?%;border-bottom-left-radius:%?8?%}.u-item-last[data-v-5d02c53e]{-webkit-border-top-right-radius:%?8?%;border-top-right-radius:%?8?%;-webkit-border-bottom-right-radius:%?8?%;border-bottom-right-radius:%?8?%}.u-item-text[data-v-5d02c53e]{-webkit-transition:all .35s;transition:all .35s;color:#303133;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;z-index:3}',""]),t.exports=e},"39f3":function(t,e,i){"use strict";i.r(e);var n=i("eddb"),r=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=r.a},"3a52":function(t,e,i){"use strict";i.r(e);var n=i("83cb"),r=i("a589");for(var s in r)"default"!==s&&function(t){i.d(e,t,(function(){return r[t]}))}(s);i("15d3");var a,o=i("f0c5"),u=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"7a31a046",null,!1,n["a"],a);e["default"]=u.exports},"3d3d":function(t,e,i){var n=i("6475");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("773bc794",n,!0,{sourceMap:!1,shadowMode:!1})},"451c":function(t,e,i){"use strict";var n=i("3d3d"),r=i.n(n);r.a},"479d":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{percent:50,mode:"line",activeColor:"#19be6b",striped:!1,stripedActive:!1,current:0}},methods:{modeChange:function(t){this.current=t,this.mode=0==t?"line":"circle"},calcChange:function(t){this.percent=0==t?this.percent-30:this.percent+30,this.percent>100&&(this.percent=100),this.percent<0&&(this.percent=0)},styleChange:function(t){this.activeColor=0==t?this.$u.color["error"]:"#19be6b",0==t&&(this.mode="line",this.current=0)},stripedChange:function(t){this.striped=0==t,this.stripedActive=this.striped,0==t&&(this.mode="line",this.current=0)}}};e.default=n},5830:function(t,e,i){"use strict";var n=i("e7ff"),r=i.n(n);r.a},6475:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-circle-progress[data-v-5e3ea806]{position:relative;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.u-canvas-bg[data-v-5e3ea806]{position:absolute}.u-canvas[data-v-5e3ea806]{position:absolute}',""]),t.exports=e},"68a7":function(t,e,i){"use strict";i.r(e);var n=i("ec32"),r=i("39f3");for(var s in r)"default"!==s&&function(t){i.d(e,t,(function(){return r[t]}))}(s);i("451c");var a,o=i("f0c5"),u=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"5e3ea806",null,!1,n["a"],a);e["default"]=u.exports},"7c70":function(t,e,i){"use strict";i.r(e);var n=i("7eee"),r=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=r.a},"7eee":function(t,e,i){"use strict";i("99af"),i("d81d"),i("a9e3"),i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-subsection",props:{list:{type:Array,default:function(){return[]}},current:{type:[Number,String],default:0},activeColor:{type:String,default:"#303133"},inactiveColor:{type:String,default:"#606266"},mode:{type:String,default:"button"},fontSize:{type:[Number,String],default:28},animation:{type:Boolean,default:!0},height:{type:[Number,String],default:70},bold:{type:Boolean,default:!0},bgColor:{type:String,default:"#eeeeef"},buttonColor:{type:String,default:"#ffffff"},vibrateShort:{type:Boolean,default:!1}},data:function(){return{listInfo:[],itemBgStyle:{width:0,left:0,backgroundColor:"#ffffff",height:"100%",transition:""},currentIndex:this.current,buttonPadding:3,borderRadius:5,firstTimeVibrateShort:!0}},watch:{current:{immediate:!0,handler:function(t){this.currentIndex=t,this.changeSectionStatus(t)}}},created:function(){this.listInfo=this.list.map((function(t,e){if("object"!=typeof t){var i={width:0,name:t};return i}return t.width=0,t}))},computed:{noBorderRight:function(){var t=this;return function(e){if("subsection"==t.mode){var i="";return e<t.list.length-1&&(i+=" u-none-border-right"),0==e&&(i+=" u-item-first"),e==t.list.length-1&&(i+=" u-item-last"),i}}},textStyle:function(){var t=this;return function(e){var i={};return"subsection"==t.mode?e==t.currentIndex?i.color="#ffffff":i.color=t.activeColor:e==t.currentIndex?i.color=t.activeColor:i.color=t.inactiveColor,e==t.currentIndex&&t.bold&&(i.fontWeight="bold"),i.fontSize=t.fontSize+"rpx",i}},itemStyle:function(){var t=this;return function(e){var i={};return"subsection"==t.mode&&(i.borderColor=t.activeColor,i.borderWidth="1px",i.borderStyle="solid"),i}},subsectionStyle:function(){var t={};return t.height=uni.upx2px(this.height)+"px","button"==this.mode&&(t.backgroundColor=this.bgColor,t.padding="".concat(this.buttonPadding,"px"),t.borderRadius="".concat(this.borderRadius,"px")),t},itemBarStyle:function(){var t={};return t.backgroundColor=this.activeColor,t.zIndex=1,"button"==this.mode&&(t.backgroundColor=this.buttonColor,t.borderRadius="".concat(this.borderRadius,"px"),t.bottom="".concat(this.buttonPadding,"px"),t.height=uni.upx2px(this.height)-2*this.buttonPadding+"px",t.zIndex=0),Object.assign(this.itemBgStyle,t)}},mounted:function(){var t=this;setTimeout((function(){t.getTabsInfo()}),10)},methods:{changeSectionStatus:function(t){var e=this;"subsection"==this.mode&&(t==this.list.length-1&&(this.itemBgStyle.borderRadius="0 ".concat(this.buttonPadding,"px ").concat(this.buttonPadding,"px 0")),0==t&&(this.itemBgStyle.borderRadius="".concat(this.buttonPadding,"px 0 0 ").concat(this.buttonPadding,"px")),t>0&&t<this.list.length-1&&(this.itemBgStyle.borderRadius="0")),setTimeout((function(){e.itemBgLeft()}),10),this.vibrateShort&&this.firstTimeVibrateShort,this.firstTimeVibrateShort=!1},click:function(t){t!=this.currentIndex&&(this.currentIndex=t,this.changeSectionStatus(t),this.$emit("change",Number(t)))},getTabsInfo:function(){for(var t=this,e=uni.createSelectorQuery().in(this),i=0;i<this.list.length;i++)e.select(".u-item-"+i).boundingClientRect();e.exec((function(e){e.length||setTimeout((function(){t.getTabsInfo()}),10),e.map((function(e,i){t.listInfo[i].width=e.width})),("subsection"==t.mode||"button"==t.mode)&&(t.itemBgStyle.width=t.listInfo[0].width+"px"),t.itemBgLeft()}))},itemBgLeft:function(){var t=this;this.animation?this.itemBgStyle.transition="all 0.35s":this.itemBgStyle.transition="all 0s";var e=0;this.listInfo.map((function(i,n){n<t.currentIndex&&(e+=i.width)})),"subsection"==this.mode?this.itemBgStyle.left=e+"px":"button"==this.mode&&(this.itemBgStyle.left=e+this.buttonPadding+"px")}}};e.default=n},"83cb":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-progress",style:{borderRadius:t.round?"100rpx":0,height:t.height+"rpx",backgroundColor:t.inactiveColor}},[i("v-uni-view",{staticClass:"u-active",class:[t.type?"u-type-"+t.type+"-bg":"",t.striped?"u-striped":"",t.striped&&t.stripedActive?"u-striped-active":""],style:[t.progressStyle]},[t.$slots.default||t.$slots.$default?t._t("default"):t.showPercent?[t._v(t._s(t.percent+"%"))]:t._e()],2)],1)},s=[]},8878:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-progress[data-v-7a31a046]{overflow:hidden;height:15px;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;-webkit-border-radius:%?100?%;border-radius:%?100?%}.u-active[data-v-7a31a046]{width:0;height:100%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\njustify-items:flex-end;-webkit-justify-content:space-around;justify-content:space-around;font-size:%?20?%;color:#fff;-webkit-transition:all .4s ease;transition:all .4s ease}.u-striped[data-v-7a31a046]{background-image:-webkit-linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:39px 39px}.u-striped-active[data-v-7a31a046]{-webkit-animation:progress-stripes-data-v-7a31a046 2s linear infinite;animation:progress-stripes-data-v-7a31a046 2s linear infinite}@-webkit-keyframes progress-stripes-data-v-7a31a046{0%{background-position:0 0}100%{background-position:39px 0}}@keyframes progress-stripes-data-v-7a31a046{0%{background-position:0 0}100%{background-position:39px 0}}',""]),t.exports=e},8895:function(t,e,i){"use strict";var n=i("ff35"),r=i.n(n);r.a},9096:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-subsection",style:[t.subsectionStyle]},[t._l(t.listInfo,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-item u-line-1",class:[t.noBorderRight(n),"u-item-"+n],style:[t.itemStyle(n)],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click(n)}}},[i("v-uni-view",{staticClass:"u-item-text u-line-1",style:[t.textStyle(n)]},[t._v(t._s(e.name))])],1)})),i("v-uni-view",{staticClass:"u-item-bg",style:[t.itemBarStyle]})],2)},s=[]},a347:function(t,e,i){var n=i("8878");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("7de92ba4",n,!0,{sourceMap:!1,shadowMode:!1})},a589:function(t,e,i){"use strict";i.r(e);var n=i("c78b"),r=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=r.a},c78b:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-line-progress",props:{round:{type:Boolean,default:!0},type:{type:String,default:""},activeColor:{type:String,default:"#19be6b"},inactiveColor:{type:String,default:"#ececec"},percent:{type:Number,default:0},showPercent:{type:Boolean,default:!0},height:{type:[Number,String],default:28},striped:{type:Boolean,default:!1},stripedActive:{type:Boolean,default:!1}},data:function(){return{}},computed:{progressStyle:function(){var t={};return t.width=this.percent+"%",this.activeColor&&(t.backgroundColor=this.activeColor),t}},methods:{}};e.default=n},e7ff:function(t,e,i){var n=i("2bad");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("e0353d9a",n,!0,{sourceMap:!1,shadowMode:!1})},ec32:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-circle-progress",style:{width:t.widthPx+"px",height:t.widthPx+"px",backgroundColor:t.bgColor}},[i("v-uni-canvas",{staticClass:"u-canvas-bg",style:{width:t.widthPx+"px",height:t.widthPx+"px"},attrs:{"canvas-id":t.elBgId,id:t.elBgId}}),i("v-uni-canvas",{staticClass:"u-canvas",style:{width:t.widthPx+"px",height:t.widthPx+"px"},attrs:{"canvas-id":t.elId,id:t.elId}}),t._t("default")],2)},s=[]},eddb:function(t,e,i){"use strict";i("c975"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-circle-progress",props:{percent:{type:Number,default:0,validator:function(t){return t>=0&&t<=100}},inactiveColor:{type:String,default:"#ececec"},activeColor:{type:String,default:"#19be6b"},borderWidth:{type:[Number,String],default:14},width:{type:[Number,String],default:200},duration:{type:[Number,String],default:1500},type:{type:String,default:""},bgColor:{type:String,default:"#ffffff"}},data:function(){return{elBgId:this.$u.guid(),elId:this.$u.guid(),widthPx:uni.upx2px(this.width),borderWidthPx:uni.upx2px(this.borderWidth),startAngle:-Math.PI/2,progressContext:null,newPercent:0,oldPercent:0}},watch:{percent:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t>100&&(t=100),t<0&&(i=0),this.newPercent=t,this.oldPercent=i,setTimeout((function(){e.drawCircleByProgress(i)}),50)}},created:function(){this.newPercent=this.percent,this.oldPercent=0},computed:{circleColor:function(){return["success","error","info","primary","warning"].indexOf(this.type)>=0?this.$u.color[this.type]:this.activeColor}},mounted:function(){var t=this;setTimeout((function(){t.drawProgressBg(),t.drawCircleByProgress(t.oldPercent)}),50)},methods:{drawProgressBg:function(){var t=uni.createCanvasContext(this.elBgId,this);t.setLineWidth(this.borderWidthPx),t.setStrokeStyle(this.inactiveColor),t.beginPath();var e=this.widthPx/2;t.arc(e,e,e-this.borderWidthPx,0,2*Math.PI,!1),t.stroke(),t.draw()},drawCircleByProgress:function(t){var e=this,i=this.progressContext;i||(i=uni.createCanvasContext(this.elId,this),this.progressContext=i),i.setLineCap("round"),i.setLineWidth(this.borderWidthPx),i.setStrokeStyle(this.circleColor);var n=Math.floor(this.duration/100),r=2*Math.PI/100*t+this.startAngle;i.beginPath();var s=this.widthPx/2;if(i.arc(s,s,s-this.borderWidthPx,this.startAngle,r,!1),i.stroke(),i.draw(),this.newPercent>this.oldPercent){if(t++,t>this.newPercent)return}else if(t--,t<this.newPercent)return;setTimeout((function(){e.drawCircleByProgress(t)}),n)}}};e.default=n},fc04:function(t,e,i){"use strict";i.r(e);var n=i("9096"),r=i("7c70");for(var s in r)"default"!==s&&function(t){i.d(e,t,(function(){return r[t]}))}(s);i("5830");var a,o=i("f0c5"),u=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"5d02c53e",null,!1,n["a"],a);e["default"]=u.exports},ff35:function(t,e,i){var n=i("237c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("168bc3ab",n,!0,{sourceMap:!1,shadowMode:!1})}}]);