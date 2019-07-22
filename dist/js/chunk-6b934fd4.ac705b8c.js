(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b934fd4"],{"06cd":function(t,e,n){"use strict";var a=n("8fb7"),o=n.n(a);o.a},"3ec8":function(t,e,n){"use strict";var a=n("7087"),o=n.n(a);o.a},"4f8a":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"code-box"},[n("section",{staticClass:"code-box-demo"},[t._t("demo")],2),n("markdown",{staticClass:"code-box-meta",attrs:{source:t.markdown}}),n("pre",{directives:[{name:"hljs",rawName:"v-hljs"},{name:"show",rawName:"v-show",value:t.showCode,expression:"showCode"}],staticClass:"code-box-code markdown-body clearfix"},[t._v("    "),n("ae-layout",[t._v("\n      "),n("ae-icon",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.code,expression:"code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copied,expression:"copied",arg:"success"}],staticClass:"copy-btn",attrs:{type:"copy"}}),t._v("\n      "),n("code",{domProps:{textContent:t._s(t.code)}}),t._v("\n    ")],1),t._v("\n  ")],1),n("div",{staticClass:"show-code-btn"},[n("d-button",{staticStyle:{border:"none"},attrs:{block:"",icon:"plus"},on:{click:function(e){t.showCode=!t.showCode}}},[n("span",{domProps:{textContent:t._s(t.showCode?"隐藏代码":"显示代码")}})])],1)],1)},o=[],s=n("d225"),r=n("b0b4"),d=n("308d"),i=n("6bb5"),c=n("4e2b"),l=n("9ab4"),u=n("5365"),b=n("2f23"),p=n("e722"),m=n("8bbf"),h=n.n(m),f=n("65d9"),v=n.n(f),y=n("60a3");h.a.use(p["a"]),h.a.use(b["a"]),h.a.use(u["a"]);var k=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(d["a"])(this,Object(i["a"])(e).apply(this,arguments)),t.showCode=!1,t}return Object(c["a"])(e,t),Object(r["a"])(e,[{key:"copied",value:function(){this.$message.success("已复制")}}]),e}(h.a);l["a"]([Object(y["d"])(String)],k.prototype,"code",void 0),l["a"]([Object(y["d"])(String)],k.prototype,"markdown",void 0),k=l["a"]([v()({name:"CodeBox"})],k);var g=k,w=g,x=(n("06cd"),n("2877")),C=Object(x["a"])(w,a,o,!1,null,null,null);e["a"]=C.exports},7087:function(t,e,n){},"824b":function(t,e){t.exports='<h1 id="穿梭框--d-transfer">穿梭框  d-transfer</h1>\n<h2 id="扩展说明">扩展说明</h2>\n<ol>\n<li>支持v-model</li>\n<li>国际化文案使用中文</li>\n</ol>\n'},"8fb7":function(t,e,n){},"92bc":function(t,e){t.exports="<table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>dataSource</td>\n<td></td>\n<td>Array&lt;{ key: string, title: string, description: string, disabled: boolean }&gt;</td>\n<td></td>\n</tr>\n<tr>\n<td>keyProperty</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>locale</td>\n<td></td>\n<td>object</td>\n<td></td>\n</tr>\n<tr>\n<td>render</td>\n<td></td>\n<td>(option: any) =&gt; any</td>\n<td>option</td>\n</tr>\n<tr>\n<td>renderLabel</td>\n<td></td>\n<td>(option: any) =&gt; any</td>\n<td>option</td>\n</tr>\n<tr>\n<td>searchable</td>\n<td>是否可搜索</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>selectedKeys</td>\n<td>左侧默认选中的值</td>\n<td>any[]</td>\n<td></td>\n</tr>\n</tbody></table>\n"},b715:function(t,e){t.exports="<p>基本用法</p>\n"},f531:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"toc-affix"},[n("d-anchor",{attrs:{"get-container":t.getContainer,"offset-top":20}},[n("d-anchor-link",{attrs:{href:"#basic",title:"基本"}}),n("d-anchor-link",{attrs:{href:"#demo",title:"示例"}}),n("d-anchor-link",{attrs:{href:"#demo1",title:"基本用法"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],attrs:{href:"#props",title:"属性"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#events",title:"事件"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#functions",title:"方法"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],attrs:{href:"#slots",title:"插槽"}})],1)],1),n("div",{attrs:{id:"basic"}},[n("markdown",{attrs:{source:t.title}})],1),t._m(0),n("demo1",{attrs:{id:"demo1"}}),t._m(1),n("markdown",{attrs:{source:t.props}}),t._m(2),n("markdown",{attrs:{source:t.slots}})],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown-body m-b",attrs:{id:"demo"}},[n("span"),n("h2",[t._v("示例代码")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown-body",attrs:{id:"props"}},[n("span"),n("h2",[t._v("属性说明")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown-body",attrs:{id:"slots"}},[n("span"),n("h2",[t._v("插槽说明")])])}],s=n("d225"),r=n("b0b4"),d=n("308d"),i=n("6bb5"),c=n("4e2b"),l=n("9ab4"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo"},[n("code-box",{attrs:{code:t.code,markdown:t.md}},[n("demo-comp",{attrs:{slot:"demo"},slot:"demo"})],1)],1)},b=[],p='<template>\n  <div>\n    <div>\n      <d-transfer searchable\n                  v-model="selectedKeys"\n                  :data-source="mockData"\n                  :disabled="disabled"\n                  :titles="[\'Source\', \'Target\']"\n                  @change="valueChanged">\n        <d-switch v-model="disabled"\n                  slot="footer"\n                  style="margin-top: 16px"/>\n        <div slot="left-footer">\n          <d-button @click="selectAll">全选</d-button>\n        </div>\n        <div slot="right-footer">\n          这是右边\n        </div>\n      </d-transfer>\n    </div>\n  </div>\n</template>\n<script lang="ts">\n  import DButton from \'@/packages/d-button\';\n  import Switch from \'@/packages/d-switch\';\n  import Vue from \'vue\';\n  import Component from \'vue-class-component\';\n  import DTransfer from \'../../index\';\n\n  Vue.use(DButton);\n  Vue.use(Switch);\n  Vue.use(DTransfer);\n  @Component({\n    name: \'Demo1\'\n  })\n  export default class Demo1 extends Vue {\n\n    public disabled: boolean = false;\n    public mockData = [];\n    public selectedKeys: string[] = [\'1\', \'4\'];\n    public targetKeys: any[] = [];\n\n    public created() {\n      const mockData = [];\n      for (let i = 0; i < 20; i++) {\n        mockData.push({\n          key: i.toString(),\n          title: `content${i + 1}`,\n          description: `description of content${i + 1}`,\n          disabled: i % 3 < 1\n        });\n      }\n      const oriTargetKeys = mockData\n        .filter(item => +item.key % 3 > 1)\n        .map(item => item.key);\n      this.mockData = mockData;\n      this.targetKeys = oriTargetKeys;\n    }\n\n    public selectAll() {\n      this.selectedKeys = this.mockData.map(it => it.key);\n    }\n\n    public valueChanged(v) {\n      console.log(\'value changed: \' + v);\n    }\n  }\n<\/script>\n<style scoped lang="less">\n</style>\n',m=n("b715"),h=n.n(m),f=n("8bbf"),v=n.n(f),y=n("65d9"),k=n.n(y),g=n("4f8a"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("d-transfer",{attrs:{searchable:"","data-source":t.mockData,disabled:t.disabled,titles:["Source","Target"]},on:{change:t.valueChanged},model:{value:t.selectedKeys,callback:function(e){t.selectedKeys=e},expression:"selectedKeys"}},[n("d-switch",{staticStyle:{"margin-top":"16px"},attrs:{slot:"footer"},slot:"footer",model:{value:t.disabled,callback:function(e){t.disabled=e},expression:"disabled"}}),n("div",{attrs:{slot:"left-footer"},slot:"left-footer"},[n("d-button",{on:{click:t.selectAll}},[t._v("全选")])],1),n("div",{attrs:{slot:"right-footer"},slot:"right-footer"},[t._v("\n        这是右边\n      ")])],1)],1)])},x=[],C=(n("6b54"),n("2f23")),_=n("5657"),j=n("16ba");v.a.use(C["a"]),v.a.use(_["a"]),v.a.use(j["a"]);var O=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(d["a"])(this,Object(i["a"])(e).apply(this,arguments)),t.disabled=!1,t.mockData=[],t.selectedKeys=["1","4"],t.targetKeys=[],t}return Object(c["a"])(e,t),Object(r["a"])(e,[{key:"created",value:function(){for(var t=[],e=0;e<20;e++)t.push({key:e.toString(),title:"content".concat(e+1),description:"description of content".concat(e+1),disabled:e%3<1});var n=t.filter(function(t){return+t.key%3>1}).map(function(t){return t.key});this.mockData=t,this.targetKeys=n}},{key:"selectAll",value:function(){this.selectedKeys=this.mockData.map(function(t){return t.key})}},{key:"valueChanged",value:function(t){console.log("value changed: "+t)}}]),e}(v.a);O=l["a"]([k()({name:"Demo1"})],O);var D=O,K=D,S=n("2877"),$=Object(S["a"])(K,w,x,!1,null,"443da468",null),E=$.exports,N=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(d["a"])(this,Object(i["a"])(e).apply(this,arguments)),t.code=p,t.md=h.a,t}return Object(c["a"])(e,t),e}(v.a);N=l["a"]([k()({name:"Demo1",components:{CodeBox:g["a"],DemoComp:E}})],N);var T=N,A=T,B=Object(S["a"])(A,u,b,!1,null,null,null),V=B.exports,P=n("847c"),J=n("824b"),I=n.n(J),L=n("92bc"),q=n.n(L),z=n("fbe6"),F=n.n(z);v.a.use(P["a"]),v.a.use(j["a"]);var G=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(d["a"])(this,Object(i["a"])(e).apply(this,arguments)),t.title=I.a,t.props=q.a,t.slots=F.a,t}return Object(c["a"])(e,t),Object(r["a"])(e,[{key:"getContainer",value:function(){return document.getElementById("app-content")}}]),e}(v.a);G=l["a"]([k()({name:"ComponentDemo",components:{demo1:V}})],G);var H=G,M=H,Q=(n("3ec8"),Object(S["a"])(M,a,o,!1,null,"a929eaac",null));e["default"]=Q.exports},fbe6:function(t,e){t.exports="<table>\n<thead>\n<tr>\n<th>插槽名称</th>\n<th>插槽类型</th>\n<th>插槽描述</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>left-footer</td>\n<td>scoped-slot</td>\n<td>左侧底部渲染内容</td>\n</tr>\n<tr>\n<td>right-footer</td>\n<td>scoped-slot</td>\n<td>右侧底部渲染内容</td>\n</tr>\n</tbody></table>\n"}}]);
//# sourceMappingURL=chunk-6b934fd4.ac705b8c.js.map