(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-565a7747"],{"02a9":function(n,e,t){},"119c":function(n,e){n.exports='<h4 id="基本用法">基本用法</h4>\n'},"2c30":function(n,e,t){"use strict";var a=t("ac3d"),o=t.n(a);o.a},"655b":function(n,e,t){"use strict";t.r(e);var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("div",{staticClass:"toc-affix"},[t("d-anchor",{attrs:{"get-container":n.getContainer,"offset-top":20}},[t("d-anchor-link",{attrs:{href:"#basic",title:"基本"}}),t("d-anchor-link",{attrs:{href:"#demo",title:"示例"}}),t("d-anchor-link",{attrs:{href:"#demo1",title:"基本用法"}}),t("d-anchor-link",{attrs:{href:"#demo2",title:"异步加载选项"}}),t("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],attrs:{href:"#props",title:"属性"}}),t("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#events",title:"事件"}}),t("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#functions",title:"方法"}}),t("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#slots",title:"插槽"}})],1)],1),t("div",{attrs:{id:"basic"}},[t("markdown",{attrs:{source:n.title}})],1),n._m(0),t("demo1",{attrs:{id:"demo1"}}),t("demo2",{attrs:{id:"demo2"}}),n._m(1),t("markdown",{attrs:{source:n.props}})],1)},o=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"markdown-body m-b",attrs:{id:"demo"}},[t("span"),t("h2",[n._v("示例代码")])])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"markdown-body",attrs:{id:"props"}},[t("span"),t("h2",[n._v("属性说明")])])}],l=t("d225"),s=t("b0b4"),r=t("308d"),i=t("6bb5"),c=t("4e2b"),d=t("9ab4"),u=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"demo"},[t("code-box",{attrs:{code:n.code,markdown:n.md}},[t("demo-comp",{attrs:{slot:"demo"},slot:"demo"})],1)],1)},p=[],m="<template>\n  <div id=\"components-cascader-demo\">\n    <d-cascader placeholder=\"请选择\"\n                :load-data=\"loadOptions\"\n                :options=\"options\"\n                @change=\"onChange\"/>\n  </div>\n</template>\n<script lang=\"ts\">\n  import Vue from 'vue';\n  import Component from 'vue-class-component';\n  import DCascader from '../../index';\n\n  Vue.use(DCascader);\n  @Component({\n    name: 'Demo'\n  })\n  export default class Demo extends Vue {\n    public null;\n\n    public options = [\n      {\n      value: 'zhejiang',\n      label: '浙江',\n      isLeaf: false,\n      loading: false,\n      children: [{\n        label: '杭州', value: 'hz'\n      }, {\n        label: '温州', value: 'wz'\n      }]\n    }, {\n      value: 'jiangsu',\n      label: '江苏',\n      isLeaf: false,\n      loading: false,\n      children: [{\n        label: '南京', value: 'nj'\n      }, {\n        label: '苏州', value: 'sz'\n      }]\n    }];\n\n    public mounted() {\n    }\n\n    public async loadOptions(selectedOptions: any) {\n      const targetOption = selectedOptions[selectedOptions.length - 1];\n      targetOption.loading = true;\n      setTimeout(() => {\n        targetOption.loading = false;\n        targetOption.children = [{\n          label: '南京', value: 'nj'\n        }, {\n          label: '广州', value: 'gz'\n        }];\n      }, 1000);\n    }\n\n    public onChange(value) {\n      console.log(value);\n    }\n  }\n<\/script>\n<style>\n  #components-cascader-demo .ant-cascader-picker {\n    width: 300px;\n  }\n</style>\n",h=t("119c"),f=t.n(h),v=t("8bbf"),b=t.n(v),g=t("65d9"),O=t.n(g),j=t("4f8a"),w=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"components-cascader-demo"}},[t("d-cascader",{attrs:{placeholder:"请选择","load-data":n.loadOptions,options:n.options},on:{change:n.onChange}})],1)},k=[],x=(t("96cf"),t("3b8d")),C=t("6eab");b.a.use(C["a"]);var y=function(n){function e(){var n;return Object(l["a"])(this,e),n=Object(r["a"])(this,Object(i["a"])(e).apply(this,arguments)),n.options=[{value:"zhejiang",label:"浙江",isLeaf:!1,loading:!1,children:[{label:"杭州",value:"hz"},{label:"温州",value:"wz"}]},{value:"jiangsu",label:"江苏",isLeaf:!1,loading:!1,children:[{label:"南京",value:"nj"},{label:"苏州",value:"sz"}]}],n}return Object(c["a"])(e,n),Object(s["a"])(e,[{key:"mounted",value:function(){}},{key:"loadOptions",value:function(){var n=Object(x["a"])(regeneratorRuntime.mark(function n(e){var t;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:t=e[e.length-1],t.loading=!0,setTimeout(function(){t.loading=!1,t.children=[{label:"南京",value:"nj"},{label:"广州",value:"gz"}]},1e3);case 3:case"end":return n.stop()}},n)}));function e(e){return n.apply(this,arguments)}return e}()},{key:"onChange",value:function(n){console.log(n)}}]),e}(b.a);y=d["a"]([O()({name:"Demo"})],y);var _=y,D=_,z=(t("942a"),t("2877")),E=Object(z["a"])(D,w,k,!1,null,null,null),L=E.exports,$=function(n){function e(){var n;return Object(l["a"])(this,e),n=Object(r["a"])(this,Object(i["a"])(e).apply(this,arguments)),n.code=m,n.md=f.a,n}return Object(c["a"])(e,n),e}(b.a);$=d["a"]([O()({name:"Demo1",components:{CodeBox:j["a"],DemoComp:L}})],$);var V=$,N=V,R=Object(z["a"])(N,u,p,!1,null,null,null),T=R.exports,B=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"demo"},[t("code-box",{attrs:{code:n.code,markdown:n.md}},[t("demo-comp",{attrs:{slot:"demo"},slot:"demo"})],1)],1)},J=[],I="<template>\n  <div id=\"components-cascader-demo\">\n    <d-cascader placeholder=\"请选择\"\n                :load-data=\"loadOptions\"\n                :options=\"options\"\n                @change=\"onChange\"/>\n  </div>\n</template>\n<script lang=\"ts\">\n  import Vue from 'vue';\n  import Component from 'vue-class-component';\n  import DCascader from '../../index';\n\n  Vue.use(DCascader);\n  @Component({\n    name: 'Demo'\n  })\n  export default class Demo extends Vue {\n    public null;\n\n    public options = [{\n      value: 'zhejiang',\n      label: '浙江',\n      isLeaf: false,\n      loading: false\n    }, {\n      value: 'jiangsu',\n      label: '江苏',\n      isLeaf: false,\n      loading: false\n    }];\n\n    public mounted() {\n    }\n\n    public async loadOptions(selectedOptions: any) {\n      const targetOption = selectedOptions[selectedOptions.length - 1];\n      targetOption.loading = true;\n      setTimeout(() => {\n        targetOption.loading = false;\n        targetOption.children = [{\n          label: '南京', value: 'nj'\n        }, {\n          label: '广州', value: 'gz'\n        }];\n      }, 1000);\n    }\n\n    public onChange(value) {\n      console.log(value);\n    }\n  }\n<\/script>\n<style>\n  #components-cascader-demo .ant-cascader-picker {\n    width: 300px;\n  }\n</style>\n",q=t("dfb0"),A=t.n(q),F=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"components-cascader-demo"}},[t("d-cascader",{attrs:{placeholder:"请选择","load-data":n.loadOptions,options:n.options},on:{change:n.onChange}})],1)},G=[];b.a.use(C["a"]);var H=function(n){function e(){var n;return Object(l["a"])(this,e),n=Object(r["a"])(this,Object(i["a"])(e).apply(this,arguments)),n.options=[{value:"zhejiang",label:"浙江",isLeaf:!1,loading:!1},{value:"jiangsu",label:"江苏",isLeaf:!1,loading:!1}],n}return Object(c["a"])(e,n),Object(s["a"])(e,[{key:"mounted",value:function(){}},{key:"loadOptions",value:function(){var n=Object(x["a"])(regeneratorRuntime.mark(function n(e){var t;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:t=e[e.length-1],t.loading=!0,setTimeout(function(){t.loading=!1,t.children=[{label:"南京",value:"nj"},{label:"广州",value:"gz"}]},1e3);case 3:case"end":return n.stop()}},n)}));function e(e){return n.apply(this,arguments)}return e}()},{key:"onChange",value:function(n){console.log(n)}}]),e}(b.a);H=d["a"]([O()({name:"Demo"})],H);var K=H,M=K,P=(t("ee8d"),Object(z["a"])(M,F,G,!1,null,null,null)),Q=P.exports,S=function(n){function e(){var n;return Object(l["a"])(this,e),n=Object(r["a"])(this,Object(i["a"])(e).apply(this,arguments)),n.code=I,n.md=A.a,n}return Object(c["a"])(e,n),e}(b.a);S=d["a"]([O()({name:"Demo2",components:{CodeBox:j["a"],DemoComp:Q}})],S);var U=S,W=U,X=Object(z["a"])(W,B,J,!1,null,null,null),Y=X.exports,Z=t("847c"),nn=t("668e"),en=t.n(nn),tn=t("f944"),an=t.n(tn);b.a.use(Z["a"]),b.a.use(C["a"]);var on=function(n){function e(){var n;return Object(l["a"])(this,e),n=Object(r["a"])(this,Object(i["a"])(e).apply(this,arguments)),n.title=en.a,n.props=an.a,n}return Object(c["a"])(e,n),Object(s["a"])(e,[{key:"getContainer",value:function(){return document.getElementById("app-content")}}]),e}(b.a);on=d["a"]([O()({name:"ComponentDemo",components:{demo1:T,demo2:Y}})],on);var ln=on,sn=ln,rn=(t("2c30"),Object(z["a"])(sn,a,o,!1,null,"3724feb5",null));e["default"]=rn.exports},"668e":function(n,e){n.exports='<h1 id="级联组件--d-cascader">级联组件  d-cascader</h1>\n'},"942a":function(n,e,t){"use strict";var a=t("bcc5"),o=t.n(a);o.a},ac3d:function(n,e,t){},bcc5:function(n,e,t){},dfb0:function(n,e){n.exports='<h4 id="异步加载选项">异步加载选项</h4>\n'},ee8d:function(n,e,t){"use strict";var a=t("02a9"),o=t.n(a);o.a},f944:function(n,e){n.exports="<table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>placeholder</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n</tbody></table>\n"}}]);
//# sourceMappingURL=chunk-565a7747.0648e45f.js.map