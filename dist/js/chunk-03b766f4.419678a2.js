(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03b766f4"],{"0373":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("demo")],1)},r=[],s=n("d225"),i=n("308d"),o=n("6bb5"),c=n("4e2b"),u=n("9ab4"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"toc-affix"},[n("d-anchor",{attrs:{"get-container":e.getContainer,"offset-top":20}},[n("d-anchor-link",{attrs:{href:"#basic",title:"基本"}}),n("d-anchor-link",{attrs:{href:"#demo",title:"示例"}}),n("d-anchor-link",{attrs:{href:"#demo1",title:"## 定义全局接口"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#props",title:"属性"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#events",title:"事件"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#functions",title:"方法"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#slots",title:"插槽"}})],1)],1),n("div",{attrs:{id:"basic"}},[n("markdown",{attrs:{source:e.title}})],1),e._m(0),n("demo1",{attrs:{id:"demo1"}})],1)},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"markdown-body",attrs:{id:"demo"}},[n("span"),n("h2",[e._v("示例代码")])])}],m=n("b0b4"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo"},[n("code-box",{attrs:{code:e.code,markdown:e.md}},[n("demo-comp",{attrs:{slot:"demo"},slot:"demo"})],1)],1)},f=[],h="<template>\n  <div>\n    <div>\n      <m-button type=\"info\"\n                :block=\"false\"\n                @click=\"registerAPI\">注册API\n      </m-button>\n      <m-button v-if=\"showRequest\"\n                class=\"m-l\"\n                type=\"info\"\n                :block=\"false\"\n                @click=\"requestAPI\">测试接口请求\n      </m-button>\n    </div>\n    <div class=\"m-t\">\n      <div v-codemirror.format=\"code\"\n           v-if=\"apiResult\"\n           type=\"json\">\n      </div>\n    </div>\n  </div>\n</template>\n<script lang=\"ts\">\n  import HttpMethod from '@/packages/api-proxy/src/method';\n  import AegisUI from '@/packages/global';\n  import MButton from '@/packages/m-button/src/index.vue';\n  import {message} from 'ant-design-vue';\n  import Vue from 'vue';\n  import Component from 'vue-class-component';\n  import {ApiResponse} from '../../../../../types';\n  import Codemirror from '../../../codemirror-directive';\n\n  Vue.use(Codemirror);\n\n  @Component({\n    name: 'Demo1',\n    components: {MButton}\n  })\n  export default class Demo1 extends Vue {\n    private apiResult: any = null;\n    private showRequest: boolean = false;\n\n    get code() {\n      if (this.apiResult) {\n        return JSON.stringify(this.apiResult);\n      } else {\n        return '';\n      }\n    }\n\n    public registerAPI() {\n      AegisUI.proxyAPI({\n        user: {\n          get: {\n            url: 'https://oa.aegis-info.com/api/management/info',\n            method: HttpMethod.GET\n          }\n        }\n      }, {\n        basePath: '/api',\n        httpStatusErrorHandler: () => {\n        },\n        logicErrorHandler: (data: ApiResponse<any>, code: number): boolean => {\n          return false;\n        },\n        pathSuffix: ''\n      });\n      if (this.$api) {\n        this.showRequest = true;\n      }\n    }\n\n    public async requestAPI() {\n      try {\n        this.apiResult = await this.$api['user']['get'].r();\n      } catch (e) {\n        message.success('接口请求完成');\n        this.apiResult = e;\n      } finally {\n\n      }\n    }\n\n  }\n<\/script>\n",v=n("e830"),b=n.n(v),g=n("8bbf"),w=n.n(g),y=n("65d9"),k=n.n(y),j=n("4f8a"),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("m-button",{attrs:{inline:"",size:"small",type:"info"},on:{click:e.registerAPI}},[e._v("注册API\n    ")]),e.showRequest?n("m-button",{staticClass:"m-l",attrs:{inline:"",size:"small",type:"info"},on:{click:e.requestAPI}},[e._v("测试接口请求\n    ")]):e._e()],1),n("div",{staticClass:"m-t"},[e.apiResult?n("div",{directives:[{name:"codemirror",rawName:"v-codemirror.format",value:e.code,expression:"code",modifiers:{format:!0}}],attrs:{type:"json"}}):e._e()])])},O=[],R=n("f499"),A=n.n(R),C=(n("96cf"),n("3b8d")),I=n("e722"),P=n("3cd0"),_=n("48e5"),E=n("1eed"),q=n("6038");w.a.use(I["a"]),w.a.use(q["a"]);var $=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(i["a"])(this,Object(o["a"])(t).apply(this,arguments)),e.apiResult=null,e.showRequest=!1,e}return Object(c["a"])(t,e),Object(m["a"])(t,[{key:"registerAPI",value:function(){P["a"].proxyAPI({user:{get:{url:"https://oa.aegis-info.com/api/management/info",method:_["a"].GET}}},{basePath:"/api",httpStatusErrorHandler:function(){},logicErrorHandler:function(e,t){return!1},pathSuffix:""}),this.$api&&(this.showRequest=!0)}},{key:"requestAPI",value:function(){var e=Object(C["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$api["user"]["get"].r();case 3:this.apiResult=e.sent,e.next=10;break;case 6:e.prev=6,e.t0=e["catch"](0),this.$message.success("接口请求完成"),this.apiResult=e.t0;case 10:return e.prev=10,e.finish(10);case 12:case"end":return e.stop()}},e,this,[[0,6,10,12]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"code",get:function(){return this.apiResult?A()(this.apiResult):""}}]),t}(w.a);$=u["a"]([k()({name:"Demo1",components:{MButton:E["a"]}})],$);var H=$,D=H,G=n("2877"),M=Object(G["a"])(D,x,O,!1,null,null,null),N=M.exports,B=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(i["a"])(this,Object(o["a"])(t).apply(this,arguments)),e.code=h,e.md=b.a,e}return Object(c["a"])(t,e),t}(w.a);B=u["a"]([k()({name:"Demo1",components:{CodeBox:j["a"],DemoComp:N}})],B);var S=B,J=S,T=Object(G["a"])(J,d,f,!1,null,null,null),V=T.exports,z=n("847c"),U=n("d2aa"),F=n.n(U);w.a.use(z["a"]);var K=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(i["a"])(this,Object(o["a"])(t).apply(this,arguments)),e.title=F.a,e}return Object(c["a"])(t,e),Object(m["a"])(t,[{key:"getContainer",value:function(){return document.getElementById("app-content")}}]),t}(w.a);K=u["a"]([k()({name:"ComponentDemo",components:{demo1:V}})],K);var L=K,Q=L,W=(n("9ad5"),Object(G["a"])(Q,l,p,!1,null,"73e82f08",null)),X=W.exports,Y=function(e){function t(){return Object(s["a"])(this,t),Object(i["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),t}(w.a);Y=u["a"]([k()({name:"Global",components:{demo:X}})],Y);var Z=Y,ee=Z,te=Object(G["a"])(ee,a,r,!1,null,null,null);t["default"]=te.exports},"262e":function(e,t,n){},"9ad5":function(e,t,n){"use strict";var a=n("262e"),r=n.n(a);r.a},d2aa:function(e,t){e.exports='<h1 id="全局工具类">全局工具类</h1>\n<h2 id="用法">用法</h2>\n<h3 id="接口对象代理">接口对象代理</h3>\n<pre><code class="language-typescript">import {Global, AppConfig} from &#39;aegis-ui&#39;;\n\nconst apiObj = {\n  user: {\n    get: {\n      url: &#39;/user/:id&#39;,\n      method: HttpMethod.GET\n    }\n  }\n}\nconst appConfig: AppConfig = {\n  basePath: &#39;/api&#39;\n}\nGlobal.proxyAPI(apiObj, appConfig)</code></pre>\n'},e830:function(e,t){e.exports='<h2 id="定义全局接口">定义全局接口</h2>\n'}}]);
//# sourceMappingURL=chunk-03b766f4.419678a2.js.map