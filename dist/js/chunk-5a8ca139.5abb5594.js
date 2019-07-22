(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a8ca139"],{"0131":function(t,e,n){"use strict";var a=n("345d"),o=n.n(a);o.a},"06cd":function(t,e,n){"use strict";var a=n("8fb7"),o=n.n(a);o.a},"345d":function(t,e,n){},4135:function(t,e){t.exports="<p>基本用法</p>\n"},"4f8a":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"code-box"},[n("section",{staticClass:"code-box-demo"},[t._t("demo")],2),n("markdown",{staticClass:"code-box-meta",attrs:{source:t.markdown}}),n("pre",{directives:[{name:"hljs",rawName:"v-hljs"},{name:"show",rawName:"v-show",value:t.showCode,expression:"showCode"}],staticClass:"code-box-code markdown-body clearfix"},[t._v("    "),n("ae-layout",[t._v("\n      "),n("ae-icon",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.code,expression:"code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copied,expression:"copied",arg:"success"}],staticClass:"copy-btn",attrs:{type:"copy"}}),t._v("\n      "),n("code",{domProps:{textContent:t._s(t.code)}}),t._v("\n    ")],1),t._v("\n  ")],1),n("div",{staticClass:"show-code-btn"},[n("d-button",{staticStyle:{border:"none"},attrs:{block:"",icon:"plus"},on:{click:function(e){t.showCode=!t.showCode}}},[n("span",{domProps:{textContent:t._s(t.showCode?"隐藏代码":"显示代码")}})])],1)],1)},o=[],s=n("d225"),r=n("b0b4"),c=n("308d"),i=n("6bb5"),d=n("4e2b"),l=n("9ab4"),u=n("5365"),m=n("2f23"),p=n("e722"),h=n("8bbf"),b=n.n(h),v=n("65d9"),f=n.n(v),w=n("60a3");b.a.use(p["a"]),b.a.use(m["a"]),b.a.use(u["a"]);var x=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(c["a"])(this,Object(i["a"])(e).apply(this,arguments)),t.showCode=!1,t}return Object(d["a"])(e,t),Object(r["a"])(e,[{key:"copied",value:function(){this.$message.success("已复制")}}]),e}(b.a);l["a"]([Object(w["d"])(String)],x.prototype,"code",void 0),l["a"]([Object(w["d"])(String)],x.prototype,"markdown",void 0),x=l["a"]([f()({name:"CodeBox"})],x);var C=x,j=C,O=(n("06cd"),n("2877")),_=Object(O["a"])(j,a,o,!1,null,null,null);e["a"]=_.exports},"8fb7":function(t,e,n){},9818:function(t,e){t.exports="<table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>prefixCls</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>size</td>\n<td></td>\n<td>&#39;xs&#39; | &#39;sm&#39; | &#39;md&#39; | &#39;lg&#39; | &#39;xl&#39;</td>\n<td></td>\n</tr>\n</tbody></table>\n"},d03c:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"toc-affix"},[n("d-anchor",{attrs:{"get-container":t.getContainer,"offset-top":20}},[n("d-anchor-link",{attrs:{href:"#basic",title:"基本"}}),n("d-anchor-link",{attrs:{href:"#demo",title:"示例"}}),n("d-anchor-link",{attrs:{href:"#demo1",title:"基本用法"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],attrs:{href:"#props",title:"属性"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#events",title:"事件"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#functions",title:"方法"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#slots",title:"插槽"}})],1)],1),n("div",{attrs:{id:"basic"}},[n("markdown",{attrs:{source:t.title}})],1),t._m(0),n("demo1",{attrs:{id:"demo1"}}),t._m(1),n("markdown",{attrs:{source:t.props}})],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown-body m-b",attrs:{id:"demo"}},[n("span"),n("h2",[t._v("示例代码")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown-body",attrs:{id:"props"}},[n("span"),n("h2",[t._v("属性说明")])])}],s=n("d225"),r=n("b0b4"),c=n("308d"),i=n("6bb5"),d=n("4e2b"),l=n("9ab4"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo"},[n("code-box",{attrs:{code:t.code,markdown:t.md}},[n("demo-comp",{attrs:{slot:"demo"},slot:"demo"})],1)],1)},m=[],p="<template>\n  <div>\n  </div>\n</template>\n<script lang=\"ts\">\n  import MWhiteSpace from '../../index';\n  import Vue from 'vue';\n  import Component from 'vue-class-component';\n\n  Vue.use(MWhiteSpace);\n  @Component({\n    name: 'Demo1'\n  })\n  export default class Demo1 extends Vue {\n    // TODO\n  }\n<\/script>\n<style lang=\"less\" scoped>\n</style>\n",h=n("4135"),b=n.n(h),v=n("8bbf"),f=n.n(v),w=n("65d9"),x=n.n(w),C=n("4f8a"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},O=[],_=n("b7f2");f.a.use(_["a"]);var k=function(t){function e(){return Object(s["a"])(this,e),Object(c["a"])(this,Object(i["a"])(e).apply(this,arguments))}return Object(d["a"])(e,t),e}(f.a);k=l["a"]([x()({name:"Demo1"})],k);var y=k,g=y,N=n("2877"),D=Object(N["a"])(g,j,O,!1,null,"4d97edaf",null),E=D.exports,$=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(c["a"])(this,Object(i["a"])(e).apply(this,arguments)),t.code=p,t.md=b.a,t}return Object(d["a"])(e,t),e}(f.a);$=l["a"]([x()({name:"Demo1",components:{CodeBox:C["a"],DemoComp:E}})],$);var S=$,B=S,V=Object(N["a"])(B,u,m,!1,null,null,null),J=V.exports,M=n("847c"),P=n("ec71"),W=n.n(P),z=n("9818"),I=n.n(z);f.a.use(M["a"]),f.a.use(_["a"]);var T=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(c["a"])(this,Object(i["a"])(e).apply(this,arguments)),t.title=W.a,t.props=I.a,t}return Object(d["a"])(e,t),Object(r["a"])(e,[{key:"getContainer",value:function(){return document.getElementById("app-content")}}]),e}(f.a);T=l["a"]([x()({name:"ComponentDemo",components:{demo1:J}})],T);var q=T,A=q,F=(n("0131"),Object(N["a"])(A,a,o,!1,null,"3519c50b",null));e["default"]=F.exports},ec71:function(t,e){t.exports='<h1 id="上下留白--m-white-space">上下留白  m-white-space</h1>\n'}}]);
//# sourceMappingURL=chunk-5a8ca139.5abb5594.js.map