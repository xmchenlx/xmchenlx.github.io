(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5163ae28"],{1911:function(e,t,r){"use strict";r("cc72")},3669:function(e,t,r){},5779:function(e,t,r){"use strict";r("876b")},"68f6":function(e,t,r){"use strict";r("a9e2")},"876b":function(e,t,r){},a9e2:function(e,t,r){},cc72:function(e,t,r){},cf7d:function(e,t,r){"use strict";r.r(t);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"loginPage"}},[t._m(0),r("div",{attrs:{id:"main"}},[r("div",{attrs:{id:"main-left"}}),r("div",{attrs:{id:"main-login"}},[r("div",{attrs:{id:"login-top-logo"}}),r("div",{attrs:{id:"login-top-intermediate"}},[r("p",{attrs:{id:"title"}},[t._v("ESRS统一监管报送平台")]),t.formLocked?r("a-result",{staticStyle:{height:"240px","margin-top":"-50px"},attrs:{status:"success",title:"登陆成功"}},[r("p",{attrs:{slot:"subTitle"},slot:"subTitle"},[r("a-icon",{attrs:{type:"loading"}}),t._v(" "+t._s(t.loginTip))],1)]):r("a-form-model",{ref:"loginForm",attrs:{model:t.loginForm,rules:t.loginFormRules,"label-col":{span:0},"wrapper-col":{span:20,offset:2}}},[r("a-form-model-item",{attrs:{prop:"loginName"}},[r("a-input",{ref:"loginNameInput",staticClass:"loginInput",attrs:{size:"large",placeholder:"输入用户名（admin）"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login.apply(null,arguments)}},model:{value:t.loginForm.loginName,callback:function(e){t.$set(t.loginForm,"loginName",e)},expression:"loginForm.loginName"}},[r("a-icon",{attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),r("a-form-model-item",{attrs:{prop:"password"}},[r("a-input-password",{attrs:{placeholder:"输入密码（任意1位以上字符）",size:"large"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login.apply(null,arguments)}},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}},[r("a-icon",{attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),r("a-form-model-item",{attrs:{"wrapper-col":{span:20,offset:2}}},[r("div",{staticClass:"btnArea"},[r("a-button",{attrs:{type:"primary",block:"",loading:t.isLoginLoad},on:{click:function(e){return t.login()}}},[t._v("登录 ")]),r("a-button",{attrs:{type:"primary",block:""},on:{click:function(e){return t.reset()}}},[t._v("重置 ")])],1)])],1)],1),r("div",{attrs:{id:"login-top-tail"}})]),r("div",{attrs:{id:"main-right"}})])])},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"top"}},[r("strong",[e._v("ESRS统一监管报送平台")])])}],o=r("1da1"),a=r("5530"),s=(r("96cf"),r("b64b"),r("d81d"),r("d3b7"),r("a6dc"),r("323e")),l=r.n(s);r("a5d8");l.a.configure({showSpinner:!1});var u={data:function(){return{loginForm:{loginName:"admin",password:"123456"},loginTip:"正在加载所需资源，请稍后...",isLoginLoad:!1,redirect:void 0,formLocked:!1,loginFormRules:{loginName:[{required:!0,message:"必须输入用户名！",trigger:"blur"},{min:2,max:20,message:"用户名的长度需在2~20字符以内",trigger:"blur"}],password:[{required:!0,message:"必须输入密码!!",trigger:"blur"},{min:6,max:20,message:"密码的长度需在6~20字符以内",trigger:"blur"}]}}},watch:{$route:{handler:function(e){var t=e.query;t&&(this.redirect=t.redirect,this.otherQuery=this.getOtherQuery(t))},immediate:!0}},mounted:function(){var e=this;this.$nextTick(function(){e.$refs.loginNameInput.focus()})},methods:{reset:function(){this.$refs["loginForm"].resetFields()},getOtherQuery:function(r){return Object.keys(r).reduce(function(e,t){return"redirect"!==t&&(e[t]=r[t]),e},{})},convertTreeData:function(e){var r=this;if(e.length<1)return[];var n=[];return e.map(function(e){var t={};t={path:e.routingAddress,meta:Object(a["a"])(Object(a["a"])({},e.meta),{},{key:e.key}),component:e.componentPath,menuType:e.menuType,code:e.code,children:[]},e.children&&e.children.length>0&&(t.children=r.convertTreeData(e.children)),n.push(t)}),n},loginIN:function(){this.$router.push({path:this.redirect||"/index",query:this.otherQuery})},login:function(){var r=this;return Object(o["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:r.$refs["loginForm"].validate(function(e){if(!e)return!1;r.isLoginLoad=!0,l.a.start();var t={username:r.loginForm.loginName,password:r.loginForm.password};r.$store.dispatch("user/login",t).then(function(){r.formLocked=!0,l.a.set(.6),r.$store.dispatch("router/GetAndSetRouter").then(function(){l.a.set(.8),r.$router.push({path:r.redirect||"/index",query:r.otherQuery}),l.a.done()})}).catch(function(e){l.a.done(),r.$message.error(e.message)}).finally(function(){r.loading=!1,r.isLoginLoad=!1})});case 1:case"end":return e.stop()}},e)}))()}}},c=u,d=(r("68f6"),r("5779"),r("1911"),r("e662"),r("2877")),p=Object(d["a"])(c,n,i,!1,null,"5ed39503",null);t["default"]=p.exports},e662:function(e,t,r){"use strict";r("3669")}}]);