(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aa70c06c"],{"06cd":function(e,o,t){"use strict";var n=t("8fb7"),a=t.n(n);a.a},3439:function(e,o){e.exports='<h1 id="复选框--dcheckbox">复选框  DCheckbox</h1>\n'},"4bd1":function(e,o){e.exports="<p>基本用法</p>\n"},"4f8a":function(e,o,t){"use strict";var n=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"code-box"},[t("section",{staticClass:"code-box-demo"},[e._t("demo")],2),t("markdown",{staticClass:"code-box-meta",attrs:{source:e.markdown}}),t("pre",{directives:[{name:"hljs",rawName:"v-hljs"},{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],staticClass:"code-box-code markdown-body clearfix"},[e._v("    "),t("ae-layout",[e._v("\n      "),t("ae-icon",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.code,expression:"code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.copied,expression:"copied",arg:"success"}],staticClass:"copy-btn",attrs:{type:"copy"}}),e._v("\n      "),t("code",{domProps:{textContent:e._s(e.code)}}),e._v("\n    ")],1),e._v("\n  ")],1),t("div",{staticClass:"show-code-btn"},[t("d-button",{staticStyle:{border:"none"},attrs:{block:"",icon:"plus"},on:{click:function(o){e.showCode=!e.showCode}}},[t("span",{domProps:{textContent:e._s(e.showCode?"隐藏代码":"显示代码")}})])],1)],1)},a=[],s=t("d225"),c=t("b0b4"),r=t("308d"),l=t("6bb5"),i=t("4e2b"),d=t("9ab4"),u=t("5365"),b=t("2f23"),p=t("e722"),v=t("8bbf"),m=t.n(v),h=t("65d9"),x=t.n(h),f=t("60a3");m.a.use(p["a"]),m.a.use(b["a"]),m.a.use(u["a"]);var k=function(e){function o(){var e;return Object(s["a"])(this,o),e=Object(r["a"])(this,Object(l["a"])(o).apply(this,arguments)),e.showCode=!1,e}return Object(i["a"])(o,e),Object(c["a"])(o,[{key:"copied",value:function(){this.$message.success("已复制")}}]),o}(m.a);d["a"]([Object(f["d"])(String)],k.prototype,"code",void 0),d["a"]([Object(f["d"])(String)],k.prototype,"markdown",void 0),k=d["a"]([x()({name:"CodeBox"})],k);var w=k,O=w,_=(t("06cd"),t("2877")),C=Object(_["a"])(O,n,a,!1,null,null,null);o["a"]=C.exports},"8fb7":function(e,o,t){},d547:function(e,o,t){},ea66:function(e,o,t){"use strict";t.r(o);var n=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("div",{staticClass:"toc-affix"},[t("d-anchor",{attrs:{"get-container":e.getContainer,"offset-top":20}},[t("d-anchor-link",{attrs:{href:"#basic",title:"基本"}}),t("d-anchor-link",{attrs:{href:"#demo",title:"示例"}}),t("d-anchor-link",{attrs:{href:"#demo1",title:"基本用法"}}),t("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#props",title:"属性"}}),t("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#events",title:"事件"}}),t("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#functions",title:"方法"}}),t("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#slots",title:"插槽"}})],1)],1),t("div",{attrs:{id:"basic"}},[t("markdown",{attrs:{source:e.title}})],1),e._m(0),t("demo1",{attrs:{id:"demo1"}})],1)},a=[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"markdown-body m-b",attrs:{id:"demo"}},[t("span"),t("h2",[e._v("示例代码")])])}],s=t("d225"),c=t("b0b4"),r=t("308d"),l=t("6bb5"),i=t("4e2b"),d=t("9ab4"),u=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"demo"},[t("code-box",{attrs:{code:e.code,markdown:e.md}},[t("demo-comp",{attrs:{slot:"demo"},slot:"demo"})],1)],1)},b=[],p="<template>\n  <div>\n    <div>\n      <d-checkbox-group button\n                        v-model=\"value\"\n                        :options=\"options\"></d-checkbox-group>\n    </div>\n    <div>\n      <d-checkbox-group v-model=\"value\"\n                        :options=\"options\"></d-checkbox-group>\n    </div>\n    <div>\n      <d-checkbox-group v-model=\"form.roles\"\n                        :options=\"roles\"/>\n    </div>\n    \x3c!--    <div class=\"m-t\">--\x3e\n    \x3c!--      <d-checkbox-group v-model=\"value2\"--\x3e\n    \x3c!--                        label-property=\"name\"--\x3e\n    \x3c!--                        value-property=\"id\"--\x3e\n    \x3c!--                        :options=\"options2\"></d-checkbox-group>--\x3e\n    \x3c!--    </div>--\x3e\n    \x3c!--    <div class=\"m-t\">--\x3e\n    \x3c!--      <d-checkbox-group>--\x3e\n    \x3c!--        <d-checkbox-button :value=\"1\">选项1</d-checkbox-button>--\x3e\n    \x3c!--        <d-checkbox-button :value=\"2\">选项2</d-checkbox-button>--\x3e\n    \x3c!--      </d-checkbox-group>--\x3e\n    \x3c!--    </div>--\x3e\n  </div>\n</template>\n<script lang=\"ts\">\n  import Vue from 'vue';\n  import Component from 'vue-class-component';\n  import DCheckbox from '../../index';\n\n  Vue.use(DCheckbox);\n  @Component({\n    name: 'Demo1'\n  })\n  export default class Demo1 extends Vue {\n\n    public options = [\n      {label: '选项1', value: 1},\n      {label: '选项2', value: 2}\n    ];\n\n    public options2 = [\n      {name: '选项1', id: 1},\n      {name: '选项2', id: 2}\n    ];\n\n    public roles = [\n      {label: '运维人员', value: 'OS_OP'},\n      {label: '运维管理员', value: 'OS_OP_MASTER'},\n      {label: '开发人员', value: 'OS_DEVELOPER'},\n      {label: 'ES管理员', value: 'OS_ES_MASTER'}\n    ];\n    private form = {\n      id: 0,\n      roles: null\n    };\n\n    public value = [];\n    public value2 = [];\n  }\n<\/script>\n<style scoped lang=\"less\">\n</style>\n",v=t("4bd1"),m=t.n(v),h=t("8bbf"),x=t.n(h),f=t("65d9"),k=t.n(f),w=t("4f8a"),O=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("div",[t("d-checkbox-group",{attrs:{button:"",options:e.options},model:{value:e.value,callback:function(o){e.value=o},expression:"value"}})],1),t("div",[t("d-checkbox-group",{attrs:{options:e.options},model:{value:e.value,callback:function(o){e.value=o},expression:"value"}})],1),t("div",[t("d-checkbox-group",{attrs:{options:e.roles},model:{value:e.form.roles,callback:function(o){e.$set(e.form,"roles",o)},expression:"form.roles"}})],1)])},_=[],C=t("5344");x.a.use(C["a"]);var j=function(e){function o(){var e;return Object(s["a"])(this,o),e=Object(r["a"])(this,Object(l["a"])(o).apply(this,arguments)),e.options=[{label:"选项1",value:1},{label:"选项2",value:2}],e.options2=[{name:"选项1",id:1},{name:"选项2",id:2}],e.roles=[{label:"运维人员",value:"OS_OP"},{label:"运维管理员",value:"OS_OP_MASTER"},{label:"开发人员",value:"OS_DEVELOPER"},{label:"ES管理员",value:"OS_ES_MASTER"}],e.form={id:0,roles:null},e.value=[],e.value2=[],e}return Object(i["a"])(o,e),o}(x.a);j=d["a"]([k()({name:"Demo1"})],j);var g=j,y=g,E=t("2877"),S=Object(E["a"])(y,O,_,!1,null,"b1382174",null),D=S.exports,N=function(e){function o(){var e;return Object(s["a"])(this,o),e=Object(r["a"])(this,Object(l["a"])(o).apply(this,arguments)),e.code=p,e.md=m.a,e}return Object(i["a"])(o,e),o}(x.a);N=d["a"]([k()({name:"Demo1",components:{CodeBox:w["a"],DemoComp:D}})],N);var P=N,$=P,R=Object(E["a"])($,u,b,!1,null,null,null),V=R.exports,A=t("847c"),M=t("3439"),T=t.n(M);x.a.use(A["a"]),x.a.use(C["a"]);var B=function(e){function o(){var e;return Object(s["a"])(this,o),e=Object(r["a"])(this,Object(l["a"])(o).apply(this,arguments)),e.title=T.a,e}return Object(i["a"])(o,e),Object(c["a"])(o,[{key:"getContainer",value:function(){return document.getElementById("app-content")}}]),o}(x.a);B=d["a"]([k()({name:"ComponentDemo",components:{demo1:V}})],B);var J=B,L=J,I=(t("fa07"),Object(E["a"])(L,n,a,!1,null,"60b636e8",null));o["default"]=I.exports},fa07:function(e,o,t){"use strict";var n=t("d547"),a=t.n(n);a.a}}]);
//# sourceMappingURL=chunk-aa70c06c.d520c7f6.js.map