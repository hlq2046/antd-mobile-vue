(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fc1bb04"],{"06cd":function(t,e,n){"use strict";var a=n("8fb7"),r=n.n(a);r.a},"083b":function(t,e){t.exports='<h1 id="徽标--m-badge">徽标  m-badge</h1>\n'},"0ad4":function(t,e){t.exports="<p>基本用法</p>\n"},"4f8a":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"code-box"},[n("section",{staticClass:"code-box-demo"},[t._t("demo")],2),n("markdown",{staticClass:"code-box-meta",attrs:{source:t.markdown}}),n("pre",{directives:[{name:"hljs",rawName:"v-hljs"},{name:"show",rawName:"v-show",value:t.showCode,expression:"showCode"}],staticClass:"code-box-code markdown-body clearfix"},[t._v("    "),n("ae-layout",[t._v("\n      "),n("ae-icon",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.code,expression:"code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copied,expression:"copied",arg:"success"}],staticClass:"copy-btn",attrs:{type:"copy"}}),t._v("\n      "),n("code",{domProps:{textContent:t._s(t.code)}}),t._v("\n    ")],1),t._v("\n  ")],1),n("div",{staticClass:"show-code-btn"},[n("d-button",{staticStyle:{border:"none"},attrs:{block:"",icon:"plus"},on:{click:function(e){t.showCode=!t.showCode}}},[n("span",{domProps:{textContent:t._s(t.showCode?"隐藏代码":"显示代码")}})])],1)],1)},r=[],o=n("d225"),s=n("b0b4"),d=n("308d"),i=n("6bb5"),l=n("4e2b"),m=n("9ab4"),c=n("5365"),p=n("2f23"),b=n("e722"),x=n("8bbf"),u=n.n(x),f=n("65d9"),g=n.n(f),h=n("60a3");u.a.use(b["a"]),u.a.use(p["a"]),u.a.use(c["a"]);var v=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(d["a"])(this,Object(i["a"])(e).apply(this,arguments)),t.showCode=!1,t}return Object(l["a"])(e,t),Object(s["a"])(e,[{key:"copied",value:function(){this.$message.success("已复制")}}]),e}(u.a);m["a"]([Object(h["d"])(String)],v.prototype,"code",void 0),m["a"]([Object(h["d"])(String)],v.prototype,"markdown",void 0),v=m["a"]([g()({name:"CodeBox"})],v);var w=v,y=w,C=(n("06cd"),n("2877")),k=Object(C["a"])(y,a,r,!1,null,null,null);e["a"]=k.exports},"5a3c":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"toc-affix"},[n("d-anchor",{attrs:{"get-container":t.getContainer,"offset-top":20}},[n("d-anchor-link",{attrs:{href:"#basic",title:"基本"}}),n("d-anchor-link",{attrs:{href:"#demo",title:"示例"}}),n("d-anchor-link",{attrs:{href:"#demo1",title:"基本用法"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],attrs:{href:"#props",title:"属性"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#events",title:"事件"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#functions",title:"方法"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#slots",title:"插槽"}})],1)],1),n("div",{attrs:{id:"basic"}},[n("markdown",{attrs:{source:t.title}})],1),t._m(0),n("demo1",{attrs:{id:"demo1"}}),t._m(1),n("markdown",{attrs:{source:t.props}})],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown-body m-b",attrs:{id:"demo"}},[n("span"),n("h2",[t._v("示例代码")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown-body",attrs:{id:"props"}},[n("span"),n("h2",[t._v("属性说明")])])}],o=n("d225"),s=n("b0b4"),d=n("308d"),i=n("6bb5"),l=n("4e2b"),m=n("9ab4"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo"},[n("code-box",{attrs:{code:t.code,markdown:t.md}},[n("demo-comp",{attrs:{slot:"demo"},slot:"demo"})],1)],1)},p=[],b="<template>\n  <div>\n    <m-list>\n      <m-list-item arrow=\"horizontal\"\n                   extra=\"extra content\">\n        <m-badge dot>\n          <span :style=\"{ width : '26px', height : '26px', background : '#ddd', display : 'inline-block' }\"/>\n        </m-badge>\n        <span :style=\"{ marginLeft : '12px' }\">Dot badge</span>\n      </m-list-item>\n      <m-list-item arrow=\"horizontal\"\n                   thumb=\"https://zos.alipayobjects.com/rmsportal/faMhXAxhCzLvveJ.png\">\n        <template>\n          <m-badge :overflowCount='55'\n                   slot=\"extra\"\n                   text='77'></m-badge>\n        </template>\n        Content\n      </m-list-item>\n      <m-list-item>\n        <m-badge corner\n                 text='促'>\n          <div class=\"corner-badge\">Use corner prop</div>\n        </m-badge>\n      </m-list-item>\n      <m-list-item class=\"special-badge\">\n        <m-badge slot=\"extra\"\n                 text=\"促\"/>\n        Custom corner\n      </m-list-item>\n      <m-list-item arrow=\"horizontal\"\n                   extra=\"extra\">\n\n        <m-badge text='0'\n                 :style=\"{ marginLeft : '12px' }\">\n          Text number 0\n        </m-badge>\n        <m-badge text='new'\n                 :style=\"{ marginLeft : '12px' }\"/>\n      </m-list-item>\n      <m-list-item>\n        Marketing:\n        <m-badge hot\n                 text=\"减\"\n                 :style=\"{ marginLeft : '12px' }\"/>\n        <m-badge hot\n                 text=\"惠\"\n                 :style=\"{ marginLeft : '12px' }\"/>\n        <m-badge hot\n                 text=\"免\"\n                 :style=\"{ marginLeft : '12px' }\"/>\n        <m-badge hot\n                 text=\"反\"\n                 :style=\"{ marginLeft : '12px' }\"/>\n        <m-badge hot\n                 text=\"HOT\"\n                 :style=\"{ marginLeft : '12px' }\"/>\n      </m-list-item>\n      <m-list-item>\n        Customize\n        <m-badge text=\"券\"\n                 :textStyle=\"{ marginLeft : '12px', padding : '0 3px', backgroundColor : '#f19736', borderRadius : '2px'\n                 }\"/>\n        <m-badge text=\"NEW\"\n                 :textStyle=\"{ marginLeft : '12px', padding : '0 3px', backgroundColor : '#21b68a', borderRadius : '2px'\n                 }\"/>\n        <m-badge text=\"自动缴费\"\n                 :textStyle=\"{\n               marginLeft : '12px',\n               padding : '0 3px',\n        backgroundColor : '#fff',\n        borderRadius : '2px',\n        color : '#f19736',\n        border : '1px solid #f19736'\n        }\"\n        />\n      </m-list-item>\n    </m-list>\n  </div>\n</template>\n<script lang=\"ts\">\n  import Vue from 'vue';\n  import Component from 'vue-class-component';\n  import MList from '../../../m-list';\n  import MBadge from '../../index';\n\n  Vue.use(MList);\n  Vue.use(MBadge);\n  @Component({\n    name: 'Demo1'\n  })\n  export default class Demo1 extends Vue {\n    // TODO\n  }\n<\/script>\n<style lang=\"less\">\n  .corner-badge {\n    height: 50px;\n    width: 200px;\n  }\n  .special-badge .am-list-line {\n    padding-right: 0;\n  }\n  .special-badge .am-list-line .am-list-extra {\n    padding: 0;\n    height: 44px;\n  }\n  .special-badge .am-badge {\n    transform: rotate(45deg);\n    transform-origin: right bottom;\n    right: 0;\n    top: 13px;\n    width: 50px;\n  }\n  .special-badge .am-badge-text {\n    border-radius: 1px;\n  }\n</style>\n",x=n("0ad4"),u=n.n(x),f=n("8bbf"),g=n.n(f),h=n("65d9"),v=n.n(h),w=n("4f8a"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("m-list",[n("m-list-item",{attrs:{arrow:"horizontal",extra:"extra content"}},[n("m-badge",{attrs:{dot:""}},[n("span",{style:{width:"26px",height:"26px",background:"#ddd",display:"inline-block"}})]),n("span",{style:{marginLeft:"12px"}},[t._v("Dot badge")])],1),n("m-list-item",{attrs:{arrow:"horizontal",thumb:"https://zos.alipayobjects.com/rmsportal/faMhXAxhCzLvveJ.png"}},[[n("m-badge",{attrs:{slot:"extra",overflowCount:55,text:"77"},slot:"extra"})],t._v("\n      Content\n    ")],2),n("m-list-item",[n("m-badge",{attrs:{corner:"",text:"促"}},[n("div",{staticClass:"corner-badge"},[t._v("Use corner prop")])])],1),n("m-list-item",{staticClass:"special-badge"},[n("m-badge",{attrs:{slot:"extra",text:"促"},slot:"extra"}),t._v("\n      Custom corner\n    ")],1),n("m-list-item",{attrs:{arrow:"horizontal",extra:"extra"}},[n("m-badge",{style:{marginLeft:"12px"},attrs:{text:"0"}},[t._v("\n        Text number 0\n      ")]),n("m-badge",{style:{marginLeft:"12px"},attrs:{text:"new"}})],1),n("m-list-item",[t._v("\n      Marketing:\n      "),n("m-badge",{style:{marginLeft:"12px"},attrs:{hot:"",text:"减"}}),n("m-badge",{style:{marginLeft:"12px"},attrs:{hot:"",text:"惠"}}),n("m-badge",{style:{marginLeft:"12px"},attrs:{hot:"",text:"免"}}),n("m-badge",{style:{marginLeft:"12px"},attrs:{hot:"",text:"反"}}),n("m-badge",{style:{marginLeft:"12px"},attrs:{hot:"",text:"HOT"}})],1),n("m-list-item",[t._v("\n      Customize\n      "),n("m-badge",{attrs:{text:"券",textStyle:{marginLeft:"12px",padding:"0 3px",backgroundColor:"#f19736",borderRadius:"2px"}}}),n("m-badge",{attrs:{text:"NEW",textStyle:{marginLeft:"12px",padding:"0 3px",backgroundColor:"#21b68a",borderRadius:"2px"}}}),n("m-badge",{attrs:{text:"自动缴费",textStyle:{marginLeft:"12px",padding:"0 3px",backgroundColor:"#fff",borderRadius:"2px",color:"#f19736",border:"1px solid #f19736"}}})],1)],1)],1)},C=[],k=n("3604"),_=n("99f8");g.a.use(k["a"]),g.a.use(_["a"]);var j=function(t){function e(){return Object(o["a"])(this,e),Object(d["a"])(this,Object(i["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(g.a);j=m["a"]([v()({name:"Demo1"})],j);var O=j,L=O,z=(n("f6d0"),n("2877")),N=Object(z["a"])(L,y,C,!1,null,null,null),S=N.exports,D=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(d["a"])(this,Object(i["a"])(e).apply(this,arguments)),t.code=b,t.md=u.a,t}return Object(l["a"])(e,t),e}(g.a);D=m["a"]([v()({name:"Demo1",components:{CodeBox:w["a"],DemoComp:S}})],D);var E=D,M=E,$=Object(z["a"])(M,c,p,!1,null,null,null),R=$.exports,B=n("847c"),T=n("083b"),J=n.n(T),V=n("ba22"),A=n.n(V);g.a.use(B["a"]),g.a.use(_["a"]);var H=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(d["a"])(this,Object(i["a"])(e).apply(this,arguments)),t.title=J.a,t.props=A.a,t}return Object(l["a"])(e,t),Object(s["a"])(e,[{key:"getContainer",value:function(){return document.getElementById("app-content")}}]),e}(g.a);H=m["a"]([v()({name:"ComponentDemo",components:{demo1:R}})],H);var P=H,U=P,W=(n("abce"),Object(z["a"])(U,a,r,!1,null,"2e70d1ee",null));e["default"]=W.exports},"8fb7":function(t,e,n){},abce:function(t,e,n){"use strict";var a=n("e3bb"),r=n.n(a);r.a},ba22:function(t,e){t.exports="<table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>corner</td>\n<td></td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>dot</td>\n<td>不展示数字，只有一个小红点</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>hot</td>\n<td>营销样式</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>overflowCount</td>\n<td>展示封顶的数字值</td>\n<td>number</td>\n<td>99</td>\n</tr>\n<tr>\n<td>prefixCls</td>\n<td>class前缀</td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>size</td>\n<td>大小</td>\n<td>&#39;large&#39; | &#39;small&#39;</td>\n<td></td>\n</tr>\n<tr>\n<td>text</td>\n<td>展示的数字或文案，当为数字时候，大于 overflowCount <br/> 时显示为 ${overflowCount}+，为 0 时隐藏</td>\n<td>any</td>\n<td></td>\n</tr>\n<tr>\n<td>textStyle</td>\n<td>文本样式</td>\n<td>object</td>\n<td></td>\n</tr>\n</tbody></table>\n"},e3bb:function(t,e,n){},f6d0:function(t,e,n){"use strict";var a=n("ff93"),r=n.n(a);r.a},ff93:function(t,e,n){}}]);
//# sourceMappingURL=chunk-2fc1bb04.562efb62.js.map