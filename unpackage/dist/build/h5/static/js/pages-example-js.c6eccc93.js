(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-example-js"],{"02a2":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.nav-wrap[data-v-7f35e9bd]{padding:15px;position:relative}.lang[data-v-7f35e9bd]{position:absolute;top:15px;right:15px}.nav-title[data-v-7f35e9bd]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.nav-info[data-v-7f35e9bd]{margin-left:15px}.nav-title__text[data-v-7f35e9bd]{display:-webkit-box;display:-webkit-flex;display:flex;color:#303133;font-size:25px;font-weight:700}.logo[data-v-7f35e9bd]{width:70px;height:auto}.nav-slogan[data-v-7f35e9bd]{color:#909399;font-size:14px}.nav-desc[data-v-7f35e9bd]{margin-top:10px;font-size:14px;color:#606266}',""]),t.exports=e},"0540":function(t,e,n){"use strict";var i=n("2a97"),a=n.n(i);a.a},"0d6d":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-gap",style:[t.gapStyle]})},o=[]},"2a97":function(t,e,n){var i=n("5675");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("7e63d132",i,!0,{sourceMap:!1,shadowMode:!1})},"33ad":function(t,e,n){"use strict";n.r(e);var i=n("0d6d"),a=n("f5ca");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("6c92");var r,l=n("f0c5"),u=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"0c45c33e",null,!1,i["a"],r);e["default"]=u.exports},"3bfa":function(t,e,n){"use strict";var i=n("6d9c"),a=n.n(i);a.a},4354:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={pageNav:n("7106").default,uCellGroup:n("fba5").default,uCellItem:n("150e").default,uGap:n("33ad").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"wrap"},[n("page-nav",{attrs:{desc:t.desc,title:"nav.js"}}),n("v-uni-view",{staticClass:"list-wrap"},t._l(t.list,(function(e,i){return n("u-cell-group",{key:i,attrs:{"title-bg-color":"rgb(243, 244, 246)",title:t.getGroupTitle(e)}},t._l(e.list,(function(e,i){return n("u-cell-item",{key:i,attrs:{titleStyle:{fontWeight:500},title:t.getFieldTitle(e)},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.openPage(e.path)}}},[n("v-uni-image",{staticClass:"u-cell-icon",attrs:{slot:"icon",src:t.getIcon(e.icon),mode:"widthFix"},slot:"icon"})],1)})),1)})),1),n("u-gap",{attrs:{height:"70"}})],1)},o=[]},5571:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uIcon:n("3366").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"nav-wrap"},[n("v-uni-view",{staticClass:"nav-title"},[n("v-uni-image",{staticClass:"logo",attrs:{src:"https://cdn.uviewui.com/uview/common/logo.png",mode:"widthFix"}}),n("v-uni-view",{staticClass:"nav-info"},[n("v-uni-view",{staticClass:"nav-title__text"},[t._v(t._s(t.$t("common.title")))]),n("v-uni-view",{staticClass:"nav-slogan"},[t._v(t._s(t.$t("common.intro")))])],1)],1),n("v-uni-view",{staticClass:"nav-desc"},[t._v(t._s(t.desc))]),n("v-uni-view",{staticClass:"lang",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchLang.apply(void 0,arguments)}}},[n("u-icon",{attrs:{size:"46",color:"warning",name:t.lang}})],1)],1)},o=[]},5675:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* page {\n\tbackground-color: rgb(240, 242, 244);\n} */",""]),t.exports=e},"5e46":function(t,e,n){"use strict";n.r(e);var i=n("7c61"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"6c92":function(t,e,n){"use strict";var i=n("d1ef"),a=n.n(i);a.a},"6d9c":function(t,e,n){var i=n("f81c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("91f5bb08",i,!0,{sourceMap:!1,shadowMode:!1})},7106:function(t,e,n){"use strict";n.r(e);var i=n("5571"),a=n("c505");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("ea20");var r,l=n("f0c5"),u=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"7f35e9bd",null,!1,i["a"],r);e["default"]=u.exports},"7c61":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("7eb4")),o={data:function(){return{list:a.default}},computed:{getIcon:function(){return function(t){return"https://cdn.uviewui.com/uview/example/"+t+".png"}},desc:function(){return this.$t("js.desc")}},onShow:function(){uni.setNavigationBarTitle({title:this.$t("nav.js")})},methods:{openPage:function(t){this.$u.route({url:"/pages/library/"+t+"/index"})},getGroupTitle:function(t){return"zh"==this.$i18n.locale?t.groupName:t.groupName_en},getFieldTitle:function(t){return"zh"==this.$i18n.locale?t.title:t.title_en}}};e.default=o},"7da5":function(t,e,n){var i=n("02a2");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("c2eb6784",i,!0,{sourceMap:!1,shadowMode:!1})},"7eb4":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=[{groupName:"网络",groupName_en:"Network",list:[{path:"http",icon:"http",title:"Http 请求",title_en:"Http"}]},{groupName:"全局变量",groupName_en:"Global variable",list:[{path:"globalVariable",icon:"globalVariable",title:"GlobalVariable 全局变量",title_en:"GlobalVariable"}]},{groupName:"工具库",groupName_en:"Tool library",list:[{path:"debounce",icon:"debounce",title:"Throttle | Debounce 节流防抖",title_en:"Throttle | Debounce"},{path:"deepMerge",icon:"deepMerge",title:"DeepMerge 对象深度合并",title_en:"DeepMerge"},{path:"deepClone",icon:"deepClone",title:"DeepClone 对象深度克隆",title_en:"DeepClone"},{path:"timeFormat",icon:"timeFormat",title:"TimeFormat 时间格式化",title_en:"TimeFormat"},{path:"timeFrom",icon:"timeFrom",title:"TimeFrom 多久之前",title_en:"TimeFrom"},{path:"guid",icon:"guid",title:"Guid 全局唯一id",title_en:"Guid"},{path:"route",icon:"route",title:"Route 路由跳转",title_en:"Route"},{path:"randomArray",icon:"randomArray",title:"RandomArray 数组乱序",title_en:"RandomArray"},{path:"colorSwitch",icon:"colorSwitch",title:"ColorSwitch 颜色转换",title_en:"ColorSwitch"},{path:"color",icon:"color",title:"Color 颜色值",title_en:"Color"},{path:"queryParams",icon:"queryParams",title:"QueryParams 对象转URL参数",title_en:"QueryParams"},{path:"test",icon:"test",title:"Test 规则校验",title_en:"Test"},{path:"md5",icon:"md5",title:"Md5 md5加密",title_en:"Md5"},{path:"random",icon:"random",title:"Random 随机数值",title_en:"Random"},{path:"trim",icon:"trim",title:"Trim 去除空格",title_en:"Trim"},{path:"getRect",icon:"getRect",title:"GetRect 节点信息",title_en:"GetRect"},{path:"mpShare",icon:"mpShare",title:"MpShare 小程序分享",title_en:"MpShare"}]}];e.default=i},aaa3:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */',""]),t.exports=e},bfea:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{desc:String,title:String},computed:{lang:function(){return"zh"==this.$i18n.locale?"zh":"en"}},methods:{switchLang:function(){this.$i18n.locale="en"==this.$i18n.locale?"zh":"en",this.vuex_tabbar[0].text=this.$t("nav.components"),this.vuex_tabbar[1].text=this.$t("nav.js"),this.vuex_tabbar[2].text=this.$t("nav.template"),uni.setNavigationBarTitle({title:this.$t(this.title)})}}};e.default=i},c20e:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-gap",props:{bgColor:{type:String,default:"transparent "},height:{type:[String,Number],default:30},marginTop:{type:[String,Number],default:0},marginBottom:{type:[String,Number],default:0}},computed:{gapStyle:function(){return{backgroundColor:this.bgColor,height:this.height+"rpx",marginTop:this.marginTop+"rpx",marginBottom:this.marginBottom+"rpx"}}}};e.default=i},c505:function(t,e,n){"use strict";n.r(e);var i=n("bfea"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},d1ef:function(t,e,n){var i=n("aaa3");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("84ee7f7e",i,!0,{sourceMap:!1,shadowMode:!1})},e83f:function(t,e,n){"use strict";n.r(e);var i=n("4354"),a=n("5e46");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("0540"),n("3bfa");var r,l=n("f0c5"),u=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"42cd07fe",null,!1,i["a"],r);e["default"]=u.exports},ea20:function(t,e,n){"use strict";var i=n("7da5"),a=n.n(i);a.a},f5ca:function(t,e,n){"use strict";n.r(e);var i=n("c20e"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},f81c:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-cell-icon[data-v-42cd07fe]{width:%?36?%;height:%?36?%;margin-right:%?8?%}',""]),t.exports=e}}]);