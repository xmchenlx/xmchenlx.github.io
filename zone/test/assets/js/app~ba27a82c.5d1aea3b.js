(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app~ba27a82c"],{"0395":function(e,t,a){"use strict";a("4d07")},1630:function(e,t,r){"use strict";r.r(t);var a=function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{attrs:{id:"pbc"}},[n("c-router-info-with-tree",{attrs:{parentRoutePath:"reportsOfBank"}},[n("div",{attrs:{slot:"routerContent"},slot:"routerContent"},[n("div",{staticClass:"card-box"},a._l(a.cardBoxData,function(e,t){return n("div",{key:"pbc_"+t,staticClass:"card"},[n("div",{staticClass:"flex-box"},[n("h3",{attrs:{id:"title"}},[n("router-link",{attrs:{to:{path:"/cbrcReport/newCustomerRisk"}}},[a._v(" "+a._s(e.name)+" ")])],1)]),n("div",{staticClass:"flex-box"},[n("div",[n("img",{staticStyle:{width:"70px",height:"50px"},attrs:{src:r("bcb2")}})])])])}),0)])])],1)},n=[],o={data:function(){return{cardBoxData:[]}},components:{},mounted:function(){this.cardBoxData=this.getData()},methods:{openRefsModel:function(e){this.$refs[e].isModalVisible=!0},getData:function(){return[{name:"金融统计"},{name:"人行支付"},{name:"利率报备"},{name:"个人账户报送"},{name:"跨境收付"},{name:"金融基础数据模块"},{name:"金标"}]}}},i=o,s=(r("9457"),r("2877")),l=Object(s["a"])(i,a,n,!1,null,"ff21dc48",null);t["default"]=l.exports},"1df5":function(e,t,a){"use strict";a("523a")},"1ec0":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-center white-back-box"},[a("div",[a("a-tabs",{style:{minHeight:"200px"},attrs:{"default-active-key":e.defaultKey,"tab-position":"left"}},[a("a-tab-pane",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:main:getPersonalInfo"],expression:"['system:main:getPersonalInfo']"}],key:"infoPage",attrs:{tab:"信息预览"}},[a("base-info")],1),a("a-tab-pane",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:main:updatePwd"],expression:"['system:main:updatePwd']"}],key:"editPwd",attrs:{tab:"修改密码"}},[a("edit-pwd")],1)],1)],1)])},r=[],o=a("3b61"),i=a("bc26"),s={data:function(){return{defaultKey:"infoPage"}},components:{editPwd:i["default"],baseInfo:o["default"]},created:function(){this.$route.query.to&&(this.defaultKey=this.$route.query.to)},mounted:function(){},methods:{}},l=s,d=a("2877"),c=Object(d["a"])(l,n,r,!1,null,"11479ab2",null);t["default"]=c.exports},"2df7":function(e,t,a){},"356d":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v(" qq "),a("a-table",{attrs:{bordered:""}},[a("a-table-column-group",[a("span",{attrs:{slot:"title"},slot:"title"},[e._v("附件3")]),a("a-table-column-group",{attrs:{colSpan:7}},[a("span",{attrs:{slot:"title"},slot:"title"},[e._v("上海市辖内XXXXXXXXXXXXXXXXXXXX XXXXX统计表")]),a("a-table-column",{key:"age",attrs:{title:"填报处室：兴业银行上海分行","data-index":"age"}})],1)],1),a("a-table-column-group",[a("span",{attrs:{slot:"title"},slot:"title"}),a("a-table-column-group",[a("span",{attrs:{slot:"title"},slot:"title"}),a("a-table-column",{key:"age",attrs:{title:"","data-index":"age"}})],1)],1),a("a-table-column-group",[a("span",{attrs:{slot:"title"},slot:"title"}),a("a-table-column-group",[a("span",{attrs:{slot:"title"},slot:"title"}),a("a-table-column",{key:"age",attrs:{title:"","data-index":"age"}})],1)],1),a("a-table-column-group",[a("span",{attrs:{slot:"title"},slot:"title"}),a("a-table-column-group",[a("span",{attrs:{slot:"title"},slot:"title"}),a("a-table-column",{key:"age",attrs:{title:"","data-index":"age"}})],1)],1),a("a-table-column-group",[a("span",{attrs:{slot:"title"},slot:"title"}),a("a-table-column-group",[a("span",{attrs:{slot:"title"},slot:"title"}),a("a-table-column",{key:"age",attrs:{title:"","data-index":"age"}})],1)],1),a("a-table-column-group",[a("span",{attrs:{slot:"title"},slot:"title"}),a("a-table-column-group",[a("span",{attrs:{slot:"title"},slot:"title"}),a("a-table-column",{key:"age",attrs:{title:"","data-index":"age"}})],1)],1),a("a-table-column-group",[a("span",{attrs:{slot:"title"},slot:"title"}),a("a-table-column-group",[a("span",{attrs:{slot:"title"},slot:"title"}),a("a-table-column",{key:"age",attrs:{title:"单位：万（元）","data-index":"age"}})],1)],1)],1)],1)},r=[],o=a("1da1"),i=(a("96cf"),a("c740"),a("d81d"),a("d3b7"),a("7558")),s={data:function(){var n=this.$createElement;return{searchParams:[],loadingFlag:!0,tableData:{pageSize:30,pageNum:1,content:[],totalSize:0,totalPages:0},selectTableKeys:[],tableColumns:[{title:"附件三",align:"left",dataIndex:"name",render:function(e,t,a){return n("a",[e])},colSpan:1,children:[{title:"统计表",dataIndex:"name",render:function(e,t,a){return n("a",[e])},colSpan:16,children:[{title:"填报处室",align:"left",dataIndex:"name",render:function(e,t,a){return n("a",[e])},colSpan:1,children:[{title:"Age",dataIndex:"age",onCell:[]}]},{title:"",align:"left",dataIndex:"name",render:function(e,t,a){return n("a",[e])},colSpan:1,children:[{title:"Age",dataIndex:"age",onCell:[]}]},{title:"",align:"left",dataIndex:"name",render:function(e,t,a){return n("a",[e])},colSpan:1,children:[{title:"Age",dataIndex:"age",onCell:[]}]},{title:"",align:"left",dataIndex:"name",render:function(e,t,a){return n("a",[e])},colSpan:1,children:[{title:"Age",dataIndex:"age",onCell:[]}]},{title:"",align:"left",dataIndex:"name",render:function(e,t,a){return n("a",[e])},colSpan:1,children:[{title:"Age",dataIndex:"age",onCell:[]}]},{title:"",align:"left",dataIndex:"name",render:function(e,t,a){return n("a",[e])},colSpan:1,children:[{title:"Age",dataIndex:"age",onCell:[]}]},{title:"",align:"left",dataIndex:"name",render:function(e,t,a){return n("a",[e])},colSpan:1,children:[{title:"Age",dataIndex:"age",onCell:[]}]},{title:"",align:"left",dataIndex:"name",render:function(e,t,a){return n("a",[e])},colSpan:1,children:[{title:"Age",dataIndex:"age",onCell:[]}]},{title:"",align:"left",dataIndex:"name",render:function(e,t,a){return n("a",[e])},colSpan:1,children:[{title:"Age",dataIndex:"age",onCell:[]}]},{title:"",align:"left",dataIndex:"name",render:function(e,t,a){return n("a",[e])},colSpan:1,children:[{title:"Age",dataIndex:"age",onCell:[]}]},{title:"",align:"left",dataIndex:"name",render:function(e,t,a){return n("a",[e])},colSpan:1,children:[{title:"Age",dataIndex:"age",onCell:[]}]},{title:"",align:"left",dataIndex:"name",render:function(e,t,a){return n("a",[e])},colSpan:1,children:[{title:"Age",dataIndex:"age",onCell:[]}]},{title:"",align:"left",dataIndex:"name",render:function(e,t,a){return n("a",[e])},colSpan:1,children:[{title:"Age",dataIndex:"age",onCell:[]}]},{title:"",align:"left",dataIndex:"name",render:function(e,t,a){return n("a",[e])},colSpan:1,children:[{title:"Age",dataIndex:"age",onCell:[]}]},{title:"单位",dataIndex:"name",render:function(e,t,a){return n("a",[e])},colSpan:1,children:[{title:"Age",dataIndex:"age",onCell:[]}]}]}]}]}},mounted:function(){},methods:{selectTableKeysChangeFromQFT:function(e){this.selectTableKeys=e},formQuery:function(e){this.loadTableData({},e)},reloadData:function(e){if("{}"!==JSON.stringify(e)){var t=e.pageNum,a=e.pageSize;this.tableData.pageNum=t,this.tableData.pageSize=a}var n=this.tableData,r=n.pageNum,o=n.pageSize;this.loadTableData({pageNum:r,pageSize:o},{})},convertCellStyle:function(t,e,a,n){var r=this.tableColumns.findIndex(function(e){return e.dataIndex===t}),o={};e.map(function(e){o[e.key]=e.value});var i=function(){return{style:o}};this.tableColumns[r]["customCell"]=i},convertCellMerge:function(r,e){var o=this,t=this.tableColumns.findIndex(function(e){return e.dataIndex===r});if(-1===t)return!1;var a=function(e,t,a){var n={children:e,attrs:{}};return o.rowSpanGroup[r].map(function(e){e.index===a&&(n.attrs.rowSpan=e.rowSpan)}),o.colSpanGroup[r].map(function(e){e.index===a&&(n.attrs.colSpan=e.colSpan)}),n};return this.tableColumns[t]["customRender"]=a,!0},loadTableData:function(e,t){var r=this;"{}"===JSON.stringify(e)&&(e.pageNum=this.tableData.pageNum,e.pageSize=this.tableData.pageSize),t.dataType||(t.dataType=this.info.dataType),t.reportInstSid||(t.reportInstSid=this.info.reportInstSid),this.selectTableKeys=[],this.loadingFlag=!0,Object(i["k"])(e.pageNum,e.pageSize,t).then(function(e){var t=r.tableData,a=t.totalSize,n=t.pageSize;r.$nextTick(function(){r.tableData.content=e.rows,r.tableData.totalSize=e.total,r.tableData.totalPages=Math.ceil(a/n)})}).finally(function(){r.loadingFlag=!1})},initTable:function(){var a=this;return Object(o["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a.info={dataType:"field",reportInstSid:"1"},t=a,a.loadingFlag=!0,e.next=5,Object(i["l"])("field","f1d3e6bd6007450f912d9b775e359a2b").then(function(e){t.tableColumns=e.data});case 5:return e.next=7,Object(i["j"])("field","f1d3e6bd6007450f912d9b775e359a2b").then(function(e){t.searchParams=e.data});case 7:return e.next=9,a.loadTableData({},{dataType:"field",reportInstSid:"f1d3e6bd6007450f912d9b775e359a2b"});case 9:a.loadingFlag=!1;case 10:case"end":return e.stop()}},e)}))()}}},l=s,d=a("2877"),c=Object(d["a"])(l,n,r,!1,null,null,null);t["default"]=c.exports},"3b61":function(e,t,a){"use strict";a.r(t);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-form-model",{ref:"userInfo",attrs:{"v-model":t.userInfo,labelCol:{span:6},wrapperCol:{span:18}}},[a("a-row",[a("a-col",{attrs:{span:12}},[a("a-form-model-item",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:main:getUserImg"],expression:"['system:main:getUserImg']"}],attrs:{label:"用户头像"}},[a("a-avatar",{attrs:{size:128,icon:"user",src:t.avatar}}),a("br"),a("a-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:main:imgUpload"],expression:"['system:main:imgUpload']"}],staticClass:"avatar-btn",attrs:{type:""},on:{click:t.handleOpenAvatarEditModal}},[t._v("更换头像")])],1)],1)],1),a("a-divider"),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"所属主机构"}},[t._v(t._s(t.userInfo.org?t.userInfo.org:"-"))])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"附属机构"}},[t._v(t._s(t.userInfo.org?t.userInfo.org:"-"))])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"所属角色"}},[t._v(t._s(t.userInfo.role?t.userInfo.role:"-"))])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"创建日期"}},[t._v(t._s(t.userInfo.createDate?t.userInfo.createDate:"-"))])],1),a("a-row",[a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"用户名称",prop:"userName"}},[a("a-input",{model:{value:t.userInfo.userName,callback:function(e){t.$set(t.userInfo,"userName",e)},expression:"userInfo.userName"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"用户昵称",prop:"nickName"}},[a("a-input",{model:{value:t.userInfo.nickName,callback:function(e){t.$set(t.userInfo,"nickName",e)},expression:"userInfo.nickName"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"用户电子邮箱",prop:"email"}},[a("a-input",{model:{value:t.userInfo.email,callback:function(e){t.$set(t.userInfo,"email",e)},expression:"userInfo.email"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"手机号码",prop:"tel"}},[a("a-input",{model:{value:t.userInfo.tel,callback:function(e){t.$set(t.userInfo,"tel",e)},expression:"userInfo.tel"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"电话号码",prop:"phone"}},[a("a-input",{model:{value:t.userInfo.phone,callback:function(e){t.$set(t.userInfo,"phone",e)},expression:"userInfo.phone"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"用户性别",prop:"sex"}},[a("a-radio-group",{attrs:{name:"radioGroup"},model:{value:t.userInfo.sex,callback:function(e){t.$set(t.userInfo,"sex",e)},expression:"userInfo.sex"}},[a("a-radio",{attrs:{value:"0"}},[t._v(" 女 ")]),a("a-radio",{attrs:{value:"1"}},[t._v(" 男 ")])],1)],1)],1)],1)],1),a("a-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:main:editBaseInfo"],expression:"['system:main:editBaseInfo']"}],attrs:{type:"primary",loading:t.isLoad},on:{click:t.handleUpdateInfo}},[t._v("更新")]),a("user-avatar-cropper",{ref:"userAvatarCropper"})],1)},r=[],d=a("aaad"),o=a("f5ef"),c=a("4360"),i=a("ffcc");function s(e,t){var a=new FileReader;a.addEventListener("load",function(){return t(a.result)}),a.readAsDataURL(e)}var l={data:function(){return{isLoad:!1,avatar:c["a"].getters.avatar,userInfo:c["a"].getters.baseInfo,loading:!1}},components:{userAvatarCropper:i["default"]},mounted:function(){var t=this;o["a"].$on("avatarChange",function(e){t.avatar=e}),this.getUserAvatar()},methods:{handleUpdateInfo:function(){var t=this,e=this.userInfo,a=e.userName,n=e.nickName,r=e.sex,o=e.tel,i=e.phone,s=e.email,l=e.sid;Object(d["g"])({userName:a,nickName:n,sex:r,tel:o,phone:i,email:s,sid:l}).then(function(e){t.$message.success("个人信息修改结果".concat(e.msg)),c["a"].dispatch("user/setBaseInfo",t.userInfo)})},getUserAvatar:function(){var t=this;""===this.userInfo.avatar&&Object(d["d"])().then(function(e){t.userInfo.avatar="data:image/png;base64,".concat(e.data)})},handleOpenAvatarEditModal:function(){this.$refs.userAvatarCropper.open()},handleAvatarChange:function(e){var t=this;"uploading"!==e.file.status?"done"===e.file.status&&s(e.file.originFileObj,function(e){t.imageUrl=e,t.loading=!1}):this.loading=!0},beforeUpload:function(e){var t="image/jpeg"===e.type||"image/png"===e.type;t||this.$message.error("You can only upload JPG file!");var a=e.size/1024/1024<2;return a||this.$message.error("Image must smaller than 2MB!"),t&&a}}},u=l,f=(a("5e5e"),a("2877")),p=Object(f["a"])(u,n,r,!1,null,"3df45f1e",null);t["default"]=p.exports},4357:function(e,t,a){},4458:function(e,t,a){"use strict";a("4d18")},"4d07":function(e,t,a){},"4d18":function(e,t,a){},"523a":function(e,t,a){},"57b7":function(e,t,a){"use strict";a("962e")},"5e5e":function(e,t,a){"use strict";a("2df7")},"8e18":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-frame theme-container",attrs:{id:"MainFrame"}},[a("global-setting-box"),a("a-layout",{staticClass:"main",attrs:{id:"layout"}},[a("nav-left"),a("a-layout",[a("vue-scroll",{attrs:{ops:e.tableScrollOps}},[a("a-layout-header",{directives:[{name:"show",rawName:"v-show",value:e.globalSetting.topNav,expression:"globalSetting.topNav"}],staticClass:"header"},[a("nav-top")],1),a("div",{staticClass:"muti-tab"},[a("tag-bar",{attrs:{"keep-alive-component-instance":e.keepAliveComponentInstance}})],1),a("a-layout-content",{staticClass:"content-layout"},[a("div",{ref:"keepAliveContainer"},[e.$route.meta.keepAlive?a("keep-alive",[a("transition",{attrs:{name:"slide-fade",appear:"",mode:"out-in"}},[a("router-view",{key:e.$route.fullPath,staticClass:"router-view"})],1)],1):e._e()],1),a("nav-bottom")],1)],1)],1)],1)],1)},r=[],o=a("f5ef"),i=a("41d0"),s=a("2901"),l=a.n(s),d=a("98b1"),c=a("c7f7"),u=a("26f1"),f=a("25ad"),p={components:{tagBar:i["a"],globalSettingBox:d["a"],navTop:c["a"],navLeft:u["a"],navBottom:f["a"],vueScroll:l.a},data:function(){return{globalMap:[],keepAliveComponentInstance:null,collapsed:!1,isFullScreen:!1,globalSetting:{},currentSelect:[],tableScrollOps:{vuescroll:{mode:"native",sizeStrategy:"percent",detectResize:!0},scrollPanel:{initialScrollY:!1,initialScrollX:!1,scrollingX:!1,scrollingY:!0,speed:1e3,easing:"easeOutCubic",verticalNativeBarPos:"right",maxHeight:void 0,maxWidth:void 0},rail:{background:"rgba(68, 68, 68, 0.226)",opacity:.5,size:"6px",specifyBorderRadius:!1,gutterOfEnds:null,gutterOfSide:"0px",keepShow:!1},bar:{showDelay:1500,onlyShowBarOnScroll:!0,keepShow:!1,background:"#fcfcfc",opacity:1,hoverStyle:!1,specifyBorderRadius:!1,minSize:!1,size:"60px",disable:!1}}}},methods:{},mounted:function(){var t=this;this.$refs.keepAliveContainer&&(this.keepAliveComponentInstance=this.$refs.keepAliveContainer.childNodes[0].__vue__);var a=this;o["a"].$on("globalSettings",function(e){this.$nextTick(function(){a.globalSetting=e})}),o["a"].$on("changeMenuOpenStatus",function(e){setTimeout(function(){a.collapsed=e},500)}),o["a"].$on("changeMenuOpenStatus",function(e){t.collapsed=e}),"/"===this.$route.path&&this.$router.push({path:"index"})},watch:{"$store.state.notifyMessages.unReadCount":function(){this.notificationCount=this.$store.state.notifyMessages.unReadCount}}},m=p,v=(a("0395"),a("2877")),b=Object(v["a"])(m,n,r,!1,null,"f00f837a",null);t["default"]=b.exports},9457:function(e,t,a){"use strict";a("4357")},"962e":function(e,t,a){},b067:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div")},r=[],o=a("2877"),i={},s=Object(o["a"])(i,n,r,!1,null,null,null);t["default"]=s.exports},b9c5:function(e,t,a){},bc26:function(e,t,a){"use strict";a.r(t);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-form-model",{ref:"addForm",attrs:{model:t.addForm,labelCol:{span:3},wrapperCol:{span:21},rules:t.addFormRule}},[a("a-form-model-item",{attrs:{label:"原密码",prop:"oldPwd"}},[a("a-input-password",{model:{value:t.addForm.oldPwd,callback:function(e){t.$set(t.addForm,"oldPwd",e)},expression:"addForm.oldPwd"}})],1),a("a-form-model-item",{attrs:{label:"新的密码",prop:"newPwd"}},[a("a-input-password",{model:{value:t.addForm.newPwd,callback:function(e){t.$set(t.addForm,"newPwd",e)},expression:"addForm.newPwd"}})],1),a("a-form-model-item",{attrs:{label:"重复新密码",prop:"newPwdRepeat"}},[a("a-input-password",{model:{value:t.addForm.newPwdRepeat,callback:function(e){t.$set(t.addForm,"newPwdRepeat",e)},expression:"addForm.newPwdRepeat"}})],1),a("a-form-model-item",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:main:updatePwd"],expression:"['system:main:updatePwd']"}]},[a("a-button",{staticClass:"margin-btn",attrs:{type:"primary",loading:t.isLoad},on:{click:t.handleChangePwd}},[t._v("提交更改")]),a("a-button",{staticClass:"margin-btn"},[t._v("重置")])],1)],1)],1)},r=[],o=(a("d3b7"),a("aaad")),i={data:function(){var n=this,e=function(e,t,a){""===t?a(new Error("请重复一遍新的密码")):t!==n.addForm.newPwd?a(new Error("两次新密码输入结果不一致！")):a()};return{isLoad:!1,addForm:{oldPwd:"",newPwd:"",newPwdRepeat:""},addFormRule:{oldPwd:[{required:!0,message:"请输入原始的密码",trigger:"blur"},{min:6,max:20,message:"密码的长度需在6~20字符以内",trigger:"blur"}],newPwd:[{required:!0,message:"请输入新的密码",trigger:"blur"},{min:6,max:20,message:"密码的长度需在6~20字符以内",trigger:"blur"}],newPwdRepeat:[{validator:e,trigger:"change"},{min:6,max:20,message:"密码的长度需在6~20字符以内",trigger:"blur"}]}}},methods:{handleChangePwd:function(){var r=this;this.$refs.addForm.validate(function(e){if(e){r.isLoad=!0;var t=r.addForm,a=t.oldPwd,n=t.newPwd;Object(o["i"])({oldPwd:a,newPwd:n}).then(function(e){r.$message.success(e.msg),r.$refs.addForm.resetFields()}).catch(function(e){r.$message.error("修改失败！原因：".concat(e.message))}).finally(function(){r.isLoad=!1})}})}}},s=i,l=a("2877"),d=Object(l["a"])(s,n,r,!1,null,null,null);t["default"]=d.exports},d9d1:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"pbcas"}},[a("c-router-info-with-tree",{attrs:{parentRoutePath:"reportsOfBank",pageRoutes:e.pageRoutesList,pageRoutePathList:e.pageRouteMatched}},[a("div",{attrs:{slot:"routerContent"},slot:"routerContent"},[a("menu-preview-box",{attrs:{menuData:e.menuDataList}})],1)])],1)},r=[],o=a("ed08"),i=a("1fc4"),s={data:function(){return{isLoading:!0,cardBoxData:[],menuDataList:[],pageRoutesList:this.$router.options.routes[2].children,pageRouteMatched:this.$route.matched}},components:{MenuPreviewBox:i["default"]},mounted:function(){this.cardBoxData=this.getData(),this.getMenuList()},methods:{openRefsModel:function(e){this.$refs[e].isModalVisible=!0},getData:function(){return Object(o["i"])(this.pageRoutesList,this.pageRouteMatched,null)[0].children},getMenuList:function(){var e=this.$router.options.routes[2].children,t=this.$route.matched;e=Object(o["i"])(e,t)[0].children,this.menuDataList=e}}},l=s,d=(a("57b7"),a("2877")),c=Object(d["a"])(l,n,r,!1,null,"371abaf6",null);t["default"]=c.exports},da62:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"white-back-box",attrs:{id:"newCustomerRisk"}},[a("h2",[e._v(e._s(e.pageTitle))]),a("c-query-form-table",{attrs:{tableColumns:e.tableColumns,tableData:e.tableData,searchParams:e.searchParams,needTableCheckList:!0,selectTableKeys:e.selectTableKeys,qftHandleQuery:e.qftHandleQuery},on:{selectTableKeysChangeFromQFT:e.selectTableKeysChangeFromQFT}},[a("div",{attrs:{slot:"functionBtnBox"},slot:"functionBtnBox"},[a("text-merry-go-round",{attrs:{lists:e.noticeList}}),a("div",{attrs:{id:"btn-box"}},[a("a-button",{staticClass:"margin-btn",attrs:{type:"primary",icon:"check"},on:{click:e.openAuditModal}},[e._v("审核")]),a("a-button",{staticClass:"margin-btn",attrs:{type:"primary",icon:"check"}},[e._v("提交")]),a("a-button",{staticClass:"margin-btn",attrs:{type:"primary",icon:"unlock"}},[e._v("报表解锁")]),a("a-button",{staticClass:"margin-btn",attrs:{type:"primary",icon:"export"}},[e._v("批量导出报表")]),a("a-button",{staticClass:"margin-btn",attrs:{type:"primary",icon:"import"}},[e._v("批量导入报表")]),a("a-button",{staticClass:"margin-btn",attrs:{type:"primary",icon:"fund"},on:{click:e.openExportStasticModal}},[e._v("导出统计")]),a("a-button",{staticClass:"margin-btn",attrs:{type:"primary",icon:"slack"}},[e._v("生成报表")]),a("a-button",{staticClass:"margin-btn",attrs:{type:"primary",icon:"import"}},[e._v("反馈报文导入")]),a("a-button",{staticClass:"margin-btn",attrs:{type:"primary",icon:"export"}},[e._v("反馈报文导出")])],1)],1),a("span",{attrs:{slot:"tableActionBox"},slot:"tableActionBox"},[a("a-button",{attrs:{type:"link",size:"small"},on:{click:e.openReportDetail}},[e._v("查看")]),a("a-button",{attrs:{type:"link",size:"small"}},[e._v("校验")]),a("a-button",{attrs:{type:"link",size:"small"}},[e._v("流程")]),a("a-button",{attrs:{type:"link",size:"small"}},[e._v("协办")]),a("a-button",{attrs:{type:"link",size:"small"}},[e._v("转办")])],1)])],1)},r=[],o=(a("b0c0"),a("160b")),i={components:{TextMerryGoRound:o["default"]},data:function(){return{pageTitle:"",tableColumns:[{title:"报表编号",dataIndex:"rid",key:"rid"},{title:"报表名称",dataIndex:"rname",key:"rname"},{title:"报表机构",dataIndex:"rorg",key:"rorg"},{title:"档期日期",dataIndex:"rdate",key:"rdate"},{title:"报送频度",dataIndex:"rfre",key:"rfre"},{title:"状态",dataIndex:"rstate",key:"rstate"},{title:"节点",dataIndex:"rpnode",key:"rpnode"}],tableData:[],searchParams:[{name:"rid",label:"报表编号",type:"input"},{name:"rname",label:"报表名称",type:"input"},{name:"rorg",label:"报表机构",type:"select",selectList:["总行","分行","支行"]},{name:"rgdate",label:"归档日期",type:"input"},{name:"rstate",label:"状态",type:"select",selectList:["数据未生成","数据已生成未效验","效验未通过","效验通过未提交"]}],selectTableKeys:[],noticeList:[]}},computed:{routes:function(){for(var e={children:this.$router.options.routes[2].children},t=this.$route.matched,a=0;a<t.length-1;a++)if(void 0!=t[a].name)for(var n in e.children){var r=e.children[n];if(r.name===t[a].name){e=r;break}}return e}},mounted:function(){this.getPageTitle(),this.getTableData(),this.getNotiData()},watch:{"$route.path":function(e){}},methods:{getNotiData:function(){var e=this;setTimeout(function(){e.noticeList=["厦门银行厦门市故宫路支行的报表已提交，请你尽快审核！ ","中国专家召集制定的首项ISO可持续金融国际标准正式发布","人民银行鹰潭市中支召开“学党史、践初心、优服务、办实事”涉外企业LEI编码宣讲会","人民银行宜丰县支行多措并举推动辖内LEI赋码工作稳步进行","人民银行拉萨中支开展全球法人识别编码推广宣传活动","人民银行金昌市中支召开全球法人识别编码（LEI）应用推进工作会议"]},2e3)},getTableData:function(){var e=this,t={id:999,rname:"xxx"};t="v1"==this.$route.params.dtName?[{id:1241,rid:"NCRS1",rname:"报表AA",rorg:"故宫路支行",rdate:"2021-06-30",rfre:"日",rstate:1,rpnode:1,children:[{id:1324,rid:"NCRS1-1",rname:"报表AA",rorg:"故宫路支行",rdate:"2021-06-30",rfre:"日",rstate:1,rpnode:2}]}]:[{id:34,rid:"NCRS3",rname:"报表AA",rorg:"思北支行",rdate:"2021-06-30",rfre:"日",rstate:1,rpnode:1,children:[{id:87,rid:"NCRS3-1",rname:"报表AA",rorg:"思北支行",rdate:"2021-06-30",rfre:"日",rstate:1,rpnode:2}]}],this.$nextTick(function(){e.tableData=t})},getPageTitle:function(){for(var e in this.routes.children){var t=this.routes.children[e];if(t.children){var a=t.children;for(var n in a)if(a[n].path===this.$route.path)return void(this.pageTitle=a[n].meta.title)}}},selectTableKeysChangeFromQFT:function(e){this.selectTableKeys=e},openAuditModal:function(){this.$refs.ModalReportAudit.openModal()},openExportStasticModal:function(){this.$refs.ModalExportStastic.open()},jointCustomRoute:function(e){var t=this.$route.matched,a=[];for(var n in t)a.push({meta:{title:t[n]["meta"]["title"]},path:t[n].path});return a.push({meta:{title:e},path:"/cbrcReport/newCustomerRisk/detail"}),a},openReportDetail:function(){var e="对公及同业客户授信和表内业务统计表",t=this.jointCustomRoute(e),a=this.$router.resolve({name:"cbrsReportDetail"});localStorage.setItem("openCbrsRD",JSON.stringify(t)),window.open(a.href,"_blank")},qftHandleQuery:function(){this.$message.info("触发了父组件的查询功能！！！！")}}},s=i,l=(a("4458"),a("2877")),d=Object(l["a"])(s,n,r,!1,null,"5ee74d24",null);t["default"]=d.exports},e6d4:function(e,t,a){"use strict";a("b9c5")},fa59:function(e,t,r){"use strict";r.r(t);var a=function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{attrs:{id:"pbc"}},[n("div",{staticClass:"card-box",staticStyle:{height:"100vh"}},[a.cardBoxData.length<1?[n("a-empty",{staticStyle:{margin:"auto auto"},attrs:{description:"该部分暂无子项信息"}})]:a._l(a.cardBoxData,function(e,t){return n("div",{key:"pbclist_"+t,staticClass:"card"},[n("div",{staticClass:"flex-box"},[n("h3",{attrs:{id:"title"}},[n("router-link",{attrs:{to:{path:""+e.path}}},[a._v(" "+a._s(e.meta.title)+" ")])],1)]),n("div",{staticClass:"flex-box"},[n("div",[n("img",{staticStyle:{width:"70px",height:"50px"},attrs:{src:r("bcb2")}})])])])})],2)])},n=[],o=(r("7db0"),r("b0c0"),{data:function(){return{cardBoxData:[],pageTitle:""}},components:{},mounted:function(){this.cardBoxData=this.getData()},computed:{routes:function(){for(var e={children:this.$router.options.routes},t=this.$route.matched,a=0;a<t.length-1;a++)e=e.children.find(function(e){return e.name==t[a].name});return e}},methods:{getData:function(){for(var e in this.routes.children)if(this.routes.children[e].path===this.$route.path)return this.$route.meta.title=this.routes.children[e].meta.title,this.routes.children[e].children?this.routes.children[e].children:[];return[]}}}),i=o,s=(r("1df5"),r("2877")),l=Object(s["a"])(i,a,n,!1,null,"f437aa34",null);t["default"]=l.exports},feda:function(e,t,a){"use strict";a.r(t);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" 123123123"),a("a-button",{on:{click:t.ada}},[t._v("选中文件名")]),a("a-input",{ref:"aas",model:{value:t.aas,callback:function(e){t.aas=e},expression:"aas"}})],1)},r=[],o=a("1da1"),i=(a("96cf"),a("99af"),a("c740"),a("d81d"),a("d3b7"),a("7558")),c=3,u=2,s=1,f=[],l=function a(e,t,n){for(var r=t||"0",o=n||f,i=[],s=0;s<c;s++){var l="".concat(r,"-").concat(s);o.push({title:l,key:l,scopedSlots:{title:"title"}}),s<u&&i.push(l)}if(e<0)return o;var d=e-1;i.forEach(function(e,t){return o[t].children=[],a(d,e,o[t].children)})};l(s);var d=[],p=function e(t){for(var a=0;a<t.length;a++){var n=t[a],r=n.key;d.push({key:r,title:r}),n.children&&e(n.children)}};p(f);var m={data:function(){return{aas:"焦迈奇.txt",searchParams:[],loadingFlag:!0,selectedKeys:[],gData:f,tableData:{pageSize:30,pageNum:1,content:[],totalSize:0,totalPages:0},treeData:[],selectTableKeys:[]}},mounted:function(){},methods:{ada:function(){var t=this;this.$nextTick(function(){var e=t.$refs.aas.$el;e.select(),e.selectionEnd=3})},rightClickMenuItem:function(e,t){switch(t){case"insert":this.handleAdd(e);break;case"edit":this.handleEdit(e);break;case"delete":this.handleDelete([e]);break}},onTreeSelect:function(e,t){var a=t.node.dataRef.param,n={sidType:a};"report"==a?n.reportNumber=t.node._props.dataRef.code:n["sid"]=e[0],this.formQuery(n)},selectTableKeysChangeFromQFT:function(e){this.selectTableKeys=e},formQuery:function(e){this.loadTableData({},e)},reloadData:function(e){if("{}"!==JSON.stringify(e)){var t=e.pageNum,a=e.pageSize;this.tableData.pageNum=t,this.tableData.pageSize=a}var n=this.tableData,r=n.pageNum,o=n.pageSize;this.loadTableData({pageNum:r,pageSize:o},{})},convertCellStyle:function(t,e,a,n){var r=this.tableColumns.findIndex(function(e){return e.dataIndex===t}),o={};e.map(function(e){o[e.key]=e.value});var i=function(){return{style:o}};this.tableColumns[r]["customCell"]=i},convertCellMerge:function(r,e){var o=this,t=this.tableColumns.findIndex(function(e){return e.dataIndex===r});if(-1===t)return!1;var a=function(e,t,a){var n={children:e,attrs:{}};return o.rowSpanGroup[r].map(function(e){e.index===a&&(n.attrs.rowSpan=e.rowSpan)}),o.colSpanGroup[r].map(function(e){e.index===a&&(n.attrs.colSpan=e.colSpan)}),n};return this.tableColumns[t]["customRender"]=a,!0},loadTableData:function(e,t){var r=this;"{}"===JSON.stringify(e)&&(e.pageNum=this.tableData.pageNum,e.pageSize=this.tableData.pageSize),t.dataType||(t.dataType=this.info.dataType),t.reportInstSid||(t.reportInstSid=this.info.reportInstSid),this.selectTableKeys=[],this.loadingFlag=!0,Object(i["k"])(e.pageNum,e.pageSize,t).then(function(e){var t=r.tableData,a=t.totalSize,n=t.pageSize;r.$nextTick(function(){r.tableData.content=e.rows,r.tableData.totalSize=e.total,r.tableData.totalPages=Math.ceil(a/n)})}).finally(function(){r.loadingFlag=!1})},initTable:function(){var a=this;return Object(o["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a.info={dataType:"field",reportInstSid:"1"},t=a,a.loadingFlag=!0,e.next=5,Object(i["j"])("field","f1d3e6bd6007450f912d9b775e359a2b").then(function(e){t.searchParams=e.data});case 5:return e.next=7,a.loadTableData({},{dataType:"field",reportInstSid:"f1d3e6bd6007450f912d9b775e359a2b"});case 7:a.loadingFlag=!1;case 8:case"end":return e.stop()}},e)}))()}}},v=m,b=a("2877"),h=Object(b["a"])(v,n,r,!1,null,null,null);t["default"]=h.exports},ffcc:function(e,t,a){"use strict";a.r(t);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("c-resizable-modal",{ref:"crm",attrs:{modalWidth:"60%",title:"编辑头像"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("a-row",[a("a-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[a("vue-cropper",{ref:"cropper",attrs:{img:t.options.img,info:!0,autoCrop:t.options.autoCrop,autoCropWidth:t.options.autoCropWidth,autoCropHeight:t.options.autoCropHeight,fixedBox:t.options.fixedBox},on:{realTime:t.realTime}})],1),a("a-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[a("div",{staticClass:"avatar-upload-preview"},[a("img",{style:t.previews.img,attrs:{src:t.previews.url}})])])],1),a("br"),a("a-row",[a("a-col",{attrs:{lg:2,md:2}},[a("a-upload",{attrs:{action:"#","http-request":t.requestUpload,"show-file-list":!1,showUploadList:!1,accept:".jpg,.jpeg,.png","before-upload":t.beforeUpload}},[a("a-button",{attrs:{icon:"cloud-upload"}},[t._v(" 选择 ")])],1)],1),a("a-col",{attrs:{lg:{span:1,offset:2},md:2}},[a("a-button",{attrs:{icon:"plus"},on:{click:function(e){return t.changeScale(1)}}})],1),a("a-col",{attrs:{lg:{span:1,offset:1},md:2}},[a("a-button",{attrs:{icon:"minus"},on:{click:function(e){return t.changeScale(-1)}}})],1),a("a-col",{attrs:{lg:{span:1,offset:1},md:2}},[a("a-button",{attrs:{icon:"left"},on:{click:function(e){return t.rotateLeft()}}})],1),a("a-col",{attrs:{lg:{span:1,offset:1},md:2}},[a("a-button",{attrs:{icon:"right"},on:{click:function(e){return t.rotateRight()}}})],1)],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("a-button",{attrs:{type:""},on:{click:t.handleClose}},[t._v("取 消")]),a("a-button",{attrs:{type:"primary",loading:t.loading},on:{click:function(e){return t.uploadImg()}}},[t._v("保存头像")])],1)])],1)},r=[],o=(a("d3b7"),a("7e79")),i=a("aaad"),s=a("4360"),l=a("f5ef"),d={data:function(){return{previews:{url:"",img:""},loading:!1,options:{img:s["a"].getters.avatar,autoCrop:!0,autoCropWidth:200,autoCropHeight:200,fixedBox:!0}}},components:{VueCropper:o["VueCropper"]},mounted:function(){},methods:{handleClose:function(){this.$refs.crm.close()},open:function(){this.$refs.crm.open(),this.loading=!1},realTime:function(e){this.previews=e},requestUpload:function(){},rotateLeft:function(){this.$refs.cropper.rotateLeft()},rotateRight:function(){this.$refs.cropper.rotateRight()},changeScale:function(e){e=e||1,this.$refs.cropper.changeScale(e)},beforeUpload:function(e){var t=this;if(-1==e.type.indexOf("image/"))this.$message.error("文件格式错误，请上传图片类型,如：JPG，PNG后缀的文件。");else{var a=new FileReader;a.readAsDataURL(e),a.onload=function(){t.options.img=a.result}}},uploadImg:function(){var a=this;this.loading=!0,this.$refs.cropper.getCropBlob(function(e){var t=new FormData;t.append("file",e),Object(i["h"])(t).then(function(e){Object(i["d"])().then(function(e){s["a"].dispatch("user/setAvatar","data:image/png;base64,".concat(e.data)),l["a"].$emit("avatarChange","data:image/png;base64,".concat(e.data))}),a.$message.success(e.msg),a.$refs.crm.close()}).finally(function(){a.loading=!1})})}}},c=d,u=(a("e6d4"),a("2877")),f=Object(u["a"])(c,n,r,!1,null,"5f2be8fa",null);t["default"]=f.exports}},[[0,"runtime","vendor~253ae210","vendor~3b38e777","vendor~0b3b47da","vendor~2a42e354","vendor~9c5e1296","vendor~4125916c","vendor~5ea6e0dc","vendor~ac50015d","vendor~9617957a","vendor~5f8813c1","vendor~8840ee4a","vendor~4acf2f4a","vendor~13aea4f0","vendor~0e24d1a3","vendor~8a89a640","vendor~2b38b85e","vendor~64a379b4","vendor~3f03297a","vendor~1a7f21e9","vendor~f99c446b","vendor~5cf44f0f","vendor~d0d0374e","vendor~9652a3bb","vendor~1ce92aa8","vendor~85ffde94","vendor~c55a91f5","vendor~f0e05b3a","vendor~3892bf8f","vendor~59f1fb37","vendor~22a8cb01","vendor~5fcfb518","vendor~99af934a","vendor~93acefaf","vendor~31c671ca","vendor~0cf8aeef","vendor~ea9a0a0f","vendor~064cb7a5","vendor~9187ef67","vendor~37934312","vendor~2119ef82","vendor~ea8127ba","vendor~ec219104","vendor~ef785825","vendor~6c1eb3d2","vendor~c2224056","vendor~ad52ea04","vendor~72027c3a","vendor~b274b36f","vendor~41ff223c","vendor~95168f36","vendor~1c1164d9","vendor~8fb3d06a","vendor~789f5969","vendor~0b805abf","vendor~473ebb57","vendor~222838c1","vendor~a813af4b","vendor~a89c3d74","vendor~26197e6c","vendor~64e68313","vendor~3a9e799d","vendor~18ddbf7f","vendor~60da9140","vendor~e80252b6","vendor~588225d9","vendor~c74e00d9","vendor~c4952506","vendor~3ad4b9f2","vendor~a37ed105","vendor~ecdca1e7","vendor~55db3a44","vendor~c259bd06","vendor~ef4b7b69","vendor~cb4c84df","vendor~ff44cc97","vendor~626f894d","vendor~8b2ceec7","vendor~5db1123e","vendor~d1c0166e","vendor~f6fcfd69","vendor~0874f110","vendor~defe4c64","vendor~981bc102","vendor~63864dff","vendor~2e5e1226","vendor~fb4848d4","vendor~9a1e433a","vendor~502dbbab","vendor~f48ca179","vendor~e784143d","vendor~c8a08488","vendor~2ac6f476","vendor~03002afc","vendor~fdae9842","vendor~925f507c","vendor~abe214b7","vendor~b87c6592","vendor~24fcc914","vendor~aaa65e5d","vendor~055df0ed","vendor~7d359b94","vendor~70aabc29","vendor~9349e14a","vendor~9c5b28f6","vendor~01459462","vendor~ee6f6234","vendor~399b027d","vendor~e258e298","vendor~9f874da7","vendor~d22b72d1","vendor~8eeb4602","vendor~de133801","vendor~4a989124","vendor~15f0789d","vendor~cc99a214","vendor~0a56fd24","vendor~678f84af","vendor~af5921f9","vendor~1cf68095","vendor~5068d5f8","vendor~205977d4","vendor~d2305125","vendor~ac5a775b","vendor~11d63f3e","vendor~d073d0b1","vendor~0e467392","vendor~cfcd6536","vendor~f538a826","vendor~86eb0c16","vendor~fd542d86","vendor~ef1497bc","vendor~cf44736e","styles~f71cff67","app~d0ae3f07","app~06837ae4","app~5a11b65b","app~c4aa8f83","app~83ffe34e","app~33d48c78","app~8a3a4320","app~c7395cee","app~65100c9f","app~5d9831ae","app~1f1973f5","app~24fa57cd","app~cc57c3fc","app~ef845efb","app~72e117c4","app~33adf126","app~9fba6aeb","app~744abbd2","app~11aa7348","app~e9c13407","app~24dfc3d6","app~7f57ed48","app~b2956387","app~a47dcf85","app~a16421e0","app~ec53d98c","app~8a51b5ed","app~d44a7288","app~13bd4982","app~d4218bd2"]]]);