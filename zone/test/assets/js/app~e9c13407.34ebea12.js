(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app~e9c13407"],{"12b1":function(e,t,a){"use strict";a("7c5b")},1989:function(e,t,a){"use strict";a.r(t);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("c-resizable-modal",{ref:"crm",attrs:{modalWidth:"65%",title:("insert"==t.mode?"新增":"编辑")+"系统参数"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("a-spin",{attrs:{spinning:t.spin}},[a("a-form-model",{ref:"addForm",attrs:{model:t.addForm,labelCol:{span:6},wrapperCol:{span:18},rules:t.addFormRule}},[a("a-row",{attrs:{gutter:15}},[a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"排序",prop:"sort"}},[a("a-input-number",{staticStyle:{width:"100%"},model:{value:t.addForm.sort,callback:function(e){t.$set(t.addForm,"sort",e)},expression:"addForm.sort"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"参数名称",prop:"configName"}},[a("a-input",{model:{value:t.addForm.configName,callback:function(e){t.$set(t.addForm,"configName",e)},expression:"addForm.configName"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"参数键名",prop:"configKey"}},[a("a-input",{model:{value:t.addForm.configKey,callback:function(e){t.$set(t.addForm,"configKey",e)},expression:"addForm.configKey"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"参数键值",prop:"configValue"}},[a("a-input",{model:{value:t.addForm.configValue,callback:function(e){t.$set(t.addForm,"configValue",e)},expression:"addForm.configValue"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"是否内置角色",prop:"builtIn",labelCol:{span:3},wrapperCol:{span:21}}},[a("a-radio-group",{attrs:{name:"radioGroup","default-value":0},model:{value:t.addForm.builtIn,callback:function(e){t.$set(t.addForm,"builtIn",e)},expression:"addForm.builtIn"}},[a("a-radio",{attrs:{value:"0"}},[t._v(" 否 ")]),a("a-radio",{attrs:{value:"1"}},[t._v(" 是 ")])],1)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"创建者编号",prop:"creatorSid"}},[a("a-input",{attrs:{disabled:""},model:{value:t.addForm.creatorSid,callback:function(e){t.$set(t.addForm,"creatorSid",e)},expression:"addForm.creatorSid"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"创建时间",prop:"createTime"}},[a("a-date-picker",{staticStyle:{width:"100%"},attrs:{disabled:""},model:{value:t.addForm.createTime,callback:function(e){t.$set(t.addForm,"createTime",e)},expression:"addForm.createTime"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"修改者编号",prop:"editorSid"}},[a("a-input",{attrs:{disabled:""},model:{value:t.addForm.editorSid,callback:function(e){t.$set(t.addForm,"editorSid",e)},expression:"addForm.editorSid"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"修改时间",prop:"updateTime"}},[a("a-date-picker",{staticStyle:{width:"100%"},attrs:{disabled:""},model:{value:t.addForm.updateTime,callback:function(e){t.$set(t.addForm,"updateTime",e)},expression:"addForm.updateTime"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"备注",prop:"note",labelCol:{span:3},wrapperCol:{span:21}}},[a("a-input",{attrs:{type:"textarea"},model:{value:t.addForm.remark,callback:function(e){t.$set(t.addForm,"remark",e)},expression:"addForm.remark"}})],1)],1)],1)],1)],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("a-button",{staticClass:"margin-btn",attrs:{type:"info",icon:"close"},on:{click:t.handleCancel}},[t._v("取 消")]),a("a-button",{staticClass:"margin-btn",attrs:{type:"primary",icon:"check",loading:t.saveLoading},on:{click:t.handleSave}},[t._v("保存")])],1)])],1)},i=[],s=(a("d3b7"),a("7bec")),n=a("c0c3"),o=a("f5ef"),l=s["a"].SHOW_PARENT,d={data:function(){return{mode:"read",isRead:!1,SHOW_PARENT:l,isModalVisible:!1,saveLoading:!1,spin:!1,addForm:{sid:"",sort:"",configName:"",configKey:"",configValue:"",builtIn:0,creatorSid:"",createTime:"",editorSid:"",updateTime:"",remark:""},addFormRule:{configKey:[{required:!0,message:"参数键名不能为空",trigger:"blur"}],configName:[{required:!0,message:"参数名称不能为空",trigger:"blur"}],configValue:[{required:!0,message:"参数键值不能为空",trigger:"blur"}],builtIn:[{required:!0,message:"请给定内置系统参数标志",trigger:"blur"}]}}},methods:{open:function(e){this.mode=e.mode,this.$refs.crm.open(),this.reset(),"edit"===e.mode&&this.loadData(e.sid)},reset:function(){var e=this;this.$nextTick(function(){e.$refs.addForm.resetFields()}),this.addForm={sid:"",sort:"",configName:"",configKey:"",configValue:"",builtIn:0,creatorSid:"",createTime:"",editorSid:"",updateTime:"",remark:""}},loadData:function(e){var t=this;this.spin=!0,Object(n["d"])(e).then(function(e){t.addForm=e.data}).finally(function(){t.spin=!1})},handleSave:function(){var t=this;this.$refs["addForm"].validate(function(e){e&&(t.saveLoading=!0,"insert"===t.mode?t.createSPD():t.updateSPD())})},createSPD:function(){var t=this;Object(n["a"])(this.addForm).then(function(e){t.$message.success("系统参数信息已创建成功"),o["a"].$emit("reloadData"),t.$refs.crm.close()}).finally(function(){return t.saveLoading=!1})},updateSPD:function(){var t=this;Object(n["g"])(this.addForm).then(function(e){t.$message.success("系统参数信息已更新成功"),o["a"].$emit("reloadData"),t.$refs.crm.close()}).finally(function(){return t.saveLoading=!1})},handleCancel:function(){var e=this;e.$refs.crm.close()}}},c=d,m=a("2877"),u=Object(m["a"])(c,r,i,!1,null,"31ad5d16",null);t["default"]=u.exports},2450:function(e,t,a){"use strict";a.r(t);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"tkadd"}},[a("c-resizable-modal",{ref:"crm",attrs:{modalWidth:"75%",title:("insert"==t.mode?"新增":"编辑")+"系统字典数据"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("a-form-model",{ref:"addForm",attrs:{model:t.addForm,labelCol:{span:6},wrapperCol:{span:18},rules:t.addFormRule}},[a("a-row",{attrs:{gutter:3}},[a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"排序",prop:"sort",labelCol:{span:3},wrapperCol:{span:21}}},[a("a-input",{model:{value:t.addForm.sort,callback:function(e){t.$set(t.addForm,"sort",e)},expression:"addForm.sort"}})],1)],1)],1),a("a-row",{attrs:{gutter:15}},[a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"字典类型编号",prop:"dictSid"}},[a("a-input",{model:{value:t.addForm.dictSid,callback:function(e){t.$set(t.addForm,"dictSid",e)},expression:"addForm.dictSid"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"字典标签",prop:"dictLabel"}},[a("a-input",{model:{value:t.addForm.dictLabel,callback:function(e){t.$set(t.addForm,"dictLabel",e)},expression:"addForm.dictLabel"}})],1)],1)],1),a("a-row",{attrs:{gutter:15}},[a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"字典键值",prop:"dictValue"}},[a("a-input",{model:{value:t.addForm.dictValue,callback:function(e){t.$set(t.addForm,"dictValue",e)},expression:"addForm.dictValue"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"字典状态",prop:"status"}},[a("a-radio-group",{attrs:{name:"radioGroup"},model:{value:t.addForm.status,callback:function(e){t.$set(t.addForm,"status",e)},expression:"addForm.status"}},[a("a-radio",{attrs:{value:"0"}},[t._v(" 正常 ")]),a("a-radio",{attrs:{value:"1"}},[t._v(" 停用 ")])],1)],1)],1)],1),a("a-row",{attrs:{gutter:15}},[a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"创建者编号",prop:"creatorSid"}},[a("a-input",{attrs:{disabled:""},model:{value:t.addForm.creatorSid,callback:function(e){t.$set(t.addForm,"creatorSid",e)},expression:"addForm.creatorSid"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"创建时间",prop:"createTime"}},[a("a-date-picker",{staticStyle:{width:"100%"},attrs:{showTime:{format:"HH:mm:ss"},allowClear:"",valueFormat:"YYYY-MM-DD HH:mm:ss",disabled:""},model:{value:t.addForm.createTime,callback:function(e){t.$set(t.addForm,"createTime",e)},expression:"addForm.createTime"}})],1)],1)],1),a("a-row",{attrs:{gutter:15}},[a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"修改者编号",prop:"editorSid"}},[a("a-input",{attrs:{disabled:""},model:{value:t.addForm.editorSid,callback:function(e){t.$set(t.addForm,"editorSid",e)},expression:"addForm.editorSid"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"修改时间",prop:"updateTime"}},[a("a-date-picker",{staticStyle:{width:"100%"},attrs:{showTime:{format:"HH:mm:ss"},valueFormat:"YYYY-MM-DD HH:mm:ss",disabled:""},model:{value:t.addForm.updateTime,callback:function(e){t.$set(t.addForm,"updateTime",e)},expression:"addForm.updateTime"}})],1)],1)],1),a("a-row",{attrs:{gutter:6}},[a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"备注",prop:"note",labelCol:{span:3},wrapperCol:{span:21}}},[a("a-input",{attrs:{type:"textarea"},model:{value:t.addForm.remark,callback:function(e){t.$set(t.addForm,"remark",e)},expression:"addForm.remark"}})],1)],1)],1)],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("a-button",{staticClass:"margin-btn",attrs:{type:"info",icon:"close"},on:{click:t.handleCancel}},[t._v("取 消")]),a("a-button",{staticClass:"margin-btn",attrs:{type:"primary",icon:"check",loading:t.saveLoading},on:{click:t.handleSave}},[t._v("保存")])],1)])],1)},i=[],s=a("7bec"),n=a("c24f"),o=s["a"].SHOW_PARENT,l={data:function(){return{mode:"read",isRead:!1,SHOW_PARENT:o,currentStep:0,isModalVisible:!1,saveLoading:!1,treeOrgArray:[],treeReportArray:[],treeAuthArray:[],fromRoleTreeData:[],fromOrgTreeData:[],addForm:{sid:"",sort:"",dictLabel:"",dictValue:"",dictSid:"",status:"0",creatorSid:"",createTime:"",editorSid:"",updateTime:"",remark:""},addFormRule:{dictLabel:[{required:!0,message:"标签不允许为空",trigger:"blur"}],dictValue:[{required:!0,message:"键值不允许为空",trigger:"blur"}],dictSid:[{required:!0,message:"编号不允许为空",trigger:"blur"}],status:[{required:!0,message:"必须给定一个状态值",trigger:"blur"}]}}},watch:{mode:function(e){this.isRead="insert"!==e}},methods:{open:function(e){this.addForm={},this.mode=e.mode,this.$refs.crm.open(),"edit"==this.mode&&this.getUserDataBySid(e.sid),this.isModalVisible=!0},getUserDataBySid:function(e){var t=this;Object(n["a"])({sid:e}).then(function(e){t.addForm=e.data[0]})},handleSave:function(){var t=this,a=this;this.$refs.addForm.validate(function(e){e&&(t.saveLoading=!0,setTimeout(function(){a.saveLoading=!1,a.$refs.crm.close()},2e3),t.$message.success("触发保存事件"))})},handlePrev:function(){this.currentStep<1||this.currentStep--},handleNext:function(){this.currentStep>3||this.currentStep++},handleCancel:function(){var e=this;e.$refs.crm.close()}},mounted:function(){}},d=l,c=a("2877"),m=Object(c["a"])(d,r,i,!1,null,null,null);t["default"]=m.exports},"24c9":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"tkadd"}},[a("c-resizable-modal",{ref:"crm",attrs:{title:"新增码表类型"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("a-form-model",{attrs:{labelCol:{span:4},wrapperCol:{span:14}}},[0==e.currentStep?a("div",[a("a-form-item",{attrs:{label:"类型编号"}},[a("a-input")],1),a("a-form-item",{attrs:{label:"类型名称"}},[a("a-input")],1),a("a-form-item",{attrs:{label:"业务数据标志"}},[a("a-select",{attrs:{"default-value":"业务值"}},[a("a-select-option",{attrs:{value:"业务值"}},[e._v(" 业务值 ")]),a("a-select-option",{attrs:{value:"技术值"}},[e._v(" 技术值 ")])],1)],1),a("a-form-item",{attrs:{label:"状态"}},[a("a-radio-group",{attrs:{name:"radioGroup","default-value":1}},[a("a-radio",{attrs:{value:1}},[e._v(" 启用 ")]),a("a-radio",{attrs:{value:2}},[e._v(" 关闭 ")])],1)],1),a("a-form-item",{attrs:{label:"备注"}},[a("a-input",{attrs:{type:"textarea"}})],1)],1):e._e()])],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("a-button",{staticClass:"margin-btn",attrs:{type:"info",icon:"close"},on:{click:e.handleCancel}},[e._v("取 消")]),a("a-button",{staticClass:"margin-btn",attrs:{type:"primary",icon:"check",loading:e.saveLoading},on:{click:e.handleSave}},[e._v("保存")])],1)])],1)},i=[],s=(a("ed08"),{data:function(){return{currentStep:0,isModalVisible:!1,saveLoading:!1,treeOrgArray:[],treeReportArray:[],treeAuthArray:[]}},methods:{open:function(){this.$refs.crm.open()},handleSave:function(){var e=this;this.saveLoading=!0,setTimeout(function(){e.saveLoading=!1,e.$refs.crm.close()},2e3),this.$message.success("触发保存事件")},handlePrev:function(){this.currentStep<1||this.currentStep--},handleNext:function(){this.currentStep>3||this.currentStep++},handleCancel:function(){var e=this;this.$confirm({title:"表单存在内容",content:"表单上已有输入的信息，关闭后信息会清空，确认关闭吗？",onOk:function(){e.$message.info("触发关闭事件"),e.$refs.crm.close()},onCancel:function(){}})}},mounted:function(){}}),n=s,o=a("2877"),l=Object(o["a"])(n,r,i,!1,null,null,null);t["default"]=l.exports},4501:function(e,t,a){"use strict";a.r(t);var r=function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("div",{staticClass:" system-parameter-config white-back-box"},[r("c-query-form-table",{attrs:{searchParams:a.par,tableData:a.tableData,tableColumns:a.tableColumns,needTableCheckList:!0,selectTableKeys:a.selectTableKeys,loadingFlag:a.loadingFlag},on:{selectTableKeysChangeFromQFT:a.selectTableKeysChangeFromQFT,reloadData:a.reloadData,formQuery:a.formQuery,dbClick:a.dbClick},scopedSlots:a._u([{key:"builtIn",fn:function(e){return[r("span",[a._v(a._s(a.builtInParam[e.data.builtIn]))])]}},{key:"tableActionBox",fn:function(t){return[r("a-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:config:edit"],expression:"['system:config:edit']"}],attrs:{type:"link"},on:{click:function(e){return a.handleEdit(t.data.sid)}}},[a._v("修改")]),r("c-more-btn-collect",[r("span",{attrs:{slot:"content"},slot:"content"},[r("a-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:config:delete"],expression:"['system:config:delete']"}],attrs:{type:"link"},on:{click:function(e){return a.handleDelete([t.data.sid])}}},[a._v("删除")]),r("a-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:config:refreshCacheBySid"],expression:"['system:config:refreshCacheBySid']"}],attrs:{type:"link",size:"small"},on:{click:function(e){return a.handleRefreshCache([t.data.sid])}}},[a._v("刷新缓存")])],1)])]}}])},[r("template",{staticClass:"btn-box",slot:"functionBtnBox"},[r("a-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:config:add"],expression:"['system:config:add']"}],staticClass:"margin-btn",attrs:{type:"primary",icon:"plus"},on:{click:function(e){return a.handleAdd(null)}}},[a._v("新增")]),r("a-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:config:edit"],expression:"['system:config:edit']"}],staticClass:"margin-btn",attrs:{type:"primary",icon:"edit",disabled:1!==a.selectTableKeys.length},on:{click:function(e){return a.handleEdit(a.selectTableKeys[0])}}},[a._v("修改")]),r("a-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:config:delete"],expression:"['system:config:delete']"}],staticClass:"margin-btn",attrs:{type:"primary",icon:"delete",disabled:a.selectTableKeys.length<1},on:{click:function(e){return a.handleDelete(a.selectTableKeys)}}},[a._v("删除")]),r("a-button",{directives:[{name:"show",rawName:"v-show",value:0===a.selectTableKeys.length,expression:"selectTableKeys.length ===0"},{name:"hasPermi",rawName:"v-hasPermi",value:["system:config:refreshcache"],expression:"['system:config:refreshcache']"}],staticClass:"margin-btn",attrs:{type:"primary",icon:"reload",loading:a.refreshRedisFlag},on:{click:function(e){return a.handleGlobalRefreshCache()}}},[a._v("刷新所有缓存")])],1)],2),r("system-parameter-detail",{ref:"systemParameterDetail"})],1)},i=[],s=(a("d3b7"),a("25f0"),a("9fc2")),n=a("ed08"),o=a("c0c3"),l=a("1989"),d=a("f5ef"),c={data:function(){return{builtInParam:s["builtInParam"],par:[{name:"sort",label:"排序",type:"input"},{name:"configName",label:"参数名称",type:"input"},{name:"configKey",label:"参数键名",type:"input"},{name:"configValue",label:"参数键值",type:"input"},{name:"builtIn",label:"是否内置角色",type:"select",selectList:[{key:"1",value:"是"},{key:"0",value:"否"}]},{name:"creator_code",label:"创建者编号",type:"input"},{name:"createTime",label:"创建时间",type:"datetime"},{name:"editor_code",label:"修改者编号",type:"input"},{name:"updateTime",label:"修改时间",type:"datetime"},{name:"remark",label:"备注",type:"input"}],tableData:{content:[]},tableColumns:[{key:"sid",dataIndex:"sid",title:"编号"},{key:"sort",dataIndex:"sort",title:"排序"},{key:"configName",dataIndex:"configName",title:"参数名称"},{key:"configKey",dataIndex:"configKey",title:"参数键名"},{key:"configValue",dataIndex:"configValue",title:"参数键值"},{key:"builtIn",dataIndex:"builtIn",title:"是否内置角色"},{key:"creatorSid",dataIndex:"creatorSid",title:"创建者编号"},{key:"createTime",dataIndex:"createTime",title:"创建时间"},{key:"editorSid",dataIndex:"editorSid",title:"修改者编号"},{key:"updateTime",dataIndex:"updateTime",title:"修改时间"},{key:"remark",dataIndex:"remark",title:"备注"}],selectTableKeys:[],loadingFlag:!1,refreshRedisFlag:!1}},mounted:function(){var e=this,t=this.tableData,a=t.pageNum,r=t.pageSize;this.handleLoadData({pageNum:a,pageSize:r},{delFlag:"0"}),d["a"].$on("reloadData",function(){e.reloadData({},{delFlag:"0"})})},methods:{clickTreeMenu:function(e){},handleLoadData:function(e,t){var a=this;this.selectTableKeys=[],"{}"===JSON.stringify(e)&&(e.pageNum=this.tableData.pageNum,e.pageSize=this.tableData.pageSize),this.loadingFlag=!0,Object(o["c"])(e.pageNum,e.pageSize,t).then(function(e){a.$nextTick(function(){a.tableData.content=e.rows,a.tableData.totalSize=e.total,a.tableData.totalPages=Math.ceil(a.tableData.totalSize/a.tableData.pageSize)})}).finally(function(){setTimeout(function(){a.loadingFlag=!1},500)})},handleDelete:function(e){var t=this,a=this.$createElement,r=a("div",null,[a("p",null,[a("span",null,"即将以"),a("span",{style:"color:red"},"物理删除方式 "),a("span",null,"删除".concat(e.length,"项数据，确认删除？"))])]);this.$confirm({title:"删除数据确认",content:r,okType:"danger",closable:!0,onOk:function(){t.confirmOkToDelete(e)}})},confirmOkToDelete:function(t){var a=this,r=this;Object(o["b"])({ids:t.toString(),countNum:t.length}).then(function(e){if(!Object(n["l"])(e))throw new Error(e.msg);r.reloadData({}),r.$message.success("已删除".concat(t.length,"项数据"))}).catch(function(e){a.$message.error("请求错误："+e.message)})},openIntModal:function(e){this.$refs.ModalMenuI18N.open(e)},reloadData:function(e){if("{}"!==JSON.stringify(e)){var t=e.pageNum,a=e.pageSize;this.tableData.pageNum=t,this.tableData.pageSize=a}this.handleLoadData({},null)},formQuery:function(e){this.handleLoadData({},e)},dbClick:function(e){this.handleEdit(e.sid)},handleAdd:function(){this.$refs.systemParameterDetail.open({mode:"insert"})},handleEdit:function(e){this.$refs.systemParameterDetail.open({mode:"edit",sid:e})},selectTableKeysChangeFromQFT:function(e){this.selectTableKeys=e},handleGlobalRefreshCache:function(){var t=this;this.refreshRedisFlag=!0,Object(o["e"])().then(function(e){t.$message.success("已执行全局缓存刷新操作")}).catch(function(e){t.$message.error(e.message)}).finally(function(){t.refreshRedisFlag=!1})},handleRefreshCache:function(e){var t=this;Object(o["f"])(e).then(function(e){t.$message.success("已执行刷新缓存操作")}).catch(function(e){t.$message.error(e.message)})}},components:{systemParameterDetail:l["default"]}},m=c,u=(a("967f"),a("2877")),p=Object(u["a"])(m,r,i,!1,null,"1e039a20",null);t["default"]=p.exports},"633f":function(e,t,a){"use strict";a.r(t);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"tkadd"}},[a("c-resizable-modal",{ref:"crm",attrs:{modalWidth:"75%",title:("insert"==t.mode?"新增":"编辑")+"系统字典类型"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("a-form-model",{ref:"addForm",attrs:{model:t.addForm,labelCol:{span:6},wrapperCol:{span:18},rules:t.addFormRule}},[a("a-row",{attrs:{gutter:15}},[a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"排序",prop:"sort"}},[a("a-input",{model:{value:t.addForm.sort,callback:function(e){t.$set(t.addForm,"sort",e)},expression:"addForm.sort"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"字典名称",prop:"dictName"}},[a("a-input",{model:{value:t.addForm.dictName,callback:function(e){t.$set(t.addForm,"dictName",e)},expression:"addForm.dictName"}})],1)],1)],1),a("a-row",{attrs:{gutter:15}},[a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"字典类型",prop:"dictType"}},[a("a-input",{model:{value:t.addForm.dictType,callback:function(e){t.$set(t.addForm,"dictType",e)},expression:"addForm.dictType"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"字典状态",prop:"status"}},[a("a-radio-group",{attrs:{name:"radioGroup"},model:{value:t.addForm.status,callback:function(e){t.$set(t.addForm,"status",e)},expression:"addForm.status"}},[a("a-radio",{attrs:{value:"0"}},[t._v(" 正常 ")]),a("a-radio",{attrs:{value:"1"}},[t._v(" 停用 ")])],1)],1)],1)],1),a("a-row",{attrs:{gutter:15}},[a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"创建者编号",prop:"creatorSid"}},[a("a-input",{attrs:{disabled:""},model:{value:t.addForm.creatorSid,callback:function(e){t.$set(t.addForm,"creatorSid",e)},expression:"addForm.creatorSid"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"创建时间",prop:"createTime"}},[a("a-date-picker",{staticStyle:{width:"100%"},attrs:{showTime:{format:"HH:mm:ss"},allowClear:"",valueFormat:"YYYY-MM-DD HH:mm:ss",disabled:""},model:{value:t.addForm.createTime,callback:function(e){t.$set(t.addForm,"createTime",e)},expression:"addForm.createTime"}})],1)],1)],1),a("a-row",{attrs:{gutter:15}},[a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"修改者编号",prop:"editorSid"}},[a("a-input",{attrs:{disabled:""},model:{value:t.addForm.editorSid,callback:function(e){t.$set(t.addForm,"editorSid",e)},expression:"addForm.editorSid"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"修改时间",prop:"updateTime"}},[a("a-date-picker",{staticStyle:{width:"100%"},attrs:{showTime:{format:"HH:mm:ss"},valueFormat:"YYYY-MM-DD HH:mm:ss",disabled:""},model:{value:t.addForm.updateTime,callback:function(e){t.$set(t.addForm,"updateTime",e)},expression:"addForm.updateTime"}})],1)],1)],1),a("a-row",{attrs:{gutter:6}},[a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"备注",prop:"note",labelCol:{span:3},wrapperCol:{span:21}}},[a("a-input",{attrs:{type:"textarea"},model:{value:t.addForm.remark,callback:function(e){t.$set(t.addForm,"remark",e)},expression:"addForm.remark"}})],1)],1)],1)],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("a-button",{staticClass:"margin-btn",attrs:{type:"info",icon:"close"},on:{click:t.handleCancel}},[t._v("取 消")]),a("a-button",{staticClass:"margin-btn",attrs:{type:"primary",icon:"check",loading:t.saveLoading},on:{click:t.handleSave}},[t._v("保存")])],1)])],1)},i=[],s=a("7bec"),n=a("c24f"),o=s["a"].SHOW_PARENT,l={data:function(){return{mode:"read",isRead:!1,SHOW_PARENT:o,currentStep:0,isModalVisible:!1,saveLoading:!1,treeOrgArray:[],treeReportArray:[],treeAuthArray:[],fromRoleTreeData:[],fromOrgTreeData:[],addForm:{sid:"",sort:"",dictName:"",dictType:"",status:"0",creatorSid:"",createTime:"",editorSid:"",updateTime:"",remark:""},addFormRule:{dictName:[{required:!0,message:"名称不允许为空",trigger:"blur"}],dictType:[{required:!0,message:"类型不允许为空",trigger:"blur"}],status:[{required:!0,message:"必须给定一个状态值",trigger:"blur"}]}}},watch:{mode:function(e){this.isRead="insert"!==e}},methods:{open:function(e){this.addForm={},this.mode=e.mode,this.$refs.crm.open(),"edit"==this.mode&&this.getUserDataBySid(e.sid),this.isModalVisible=!0},getUserDataBySid:function(e){var t=this;Object(n["a"])({sid:e}).then(function(e){t.addForm=e.data[0]})},handleSave:function(){var t=this,a=this;this.$refs.addForm.validate(function(e){e&&(t.saveLoading=!0,setTimeout(function(){a.saveLoading=!1,a.$refs.crm.close()},2e3),t.$message.success("触发保存事件"))})},handlePrev:function(){this.currentStep<1||this.currentStep--},handleNext:function(){this.currentStep>3||this.currentStep++},handleCancel:function(){var e=this;e.$refs.crm.close()}},mounted:function(){}},d=l,c=a("2877"),m=Object(c["a"])(d,r,i,!1,null,null,null);t["default"]=m.exports},7312:function(e,t,a){"use strict";a.r(t);var r=function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("div",{attrs:{id:"authConfig"}},[r("c-resizable-modal",{ref:"crm",attrs:{title:"报表权限模板配置"}},[r("div",{attrs:{slot:"content"},slot:"content"},[r("a-steps",{attrs:{current:a.currentStep,size:"small"}},a._l(a.stepDescriptionList,function(e,t){return r("a-step",{key:t},[r("template",{slot:"title"},[a._v(" "+a._s(e.title)+" ")]),r("span",{attrs:{slot:"description"},slot:"description"},[a._v(a._s(e.desc))])],2)}),1),r("a-form-model",{attrs:{labelCol:{span:4},wrapperCol:{span:14}}},[0==a.currentStep?r("div",[r("a-form-item",{attrs:{label:"模板名称"}},[r("a-input")],1),r("a-form-item",{attrs:{label:"模板别名"}},[r("a-input")],1),r("a-form-item",{attrs:{label:"状态"}},[r("a-radio-group",{attrs:{name:"radioGroup","default-value":1}},[r("a-radio",{attrs:{value:1}},[a._v(" 启用 ")]),r("a-radio",{attrs:{value:2}},[a._v(" 关闭 ")])],1)],1),r("a-form-item",{attrs:{label:"模板归类"}},[r("a-select",{attrs:{"default-value":"银监报表"}},[r("a-select-option",{attrs:{value:"银监报表"}},[a._v(" 银监报表 ")]),r("a-select-option",{attrs:{value:"人行报表"}},[a._v(" 人行报表 ")])],1)],1),r("a-form-item",{attrs:{label:"模板所属项目"}},[r("a-select",{attrs:{"default-value":"金融统计"}},[r("a-select-option",{attrs:{value:"金融统计"}},[a._v(" 金融统计 ")]),r("a-select-option",{attrs:{value:"金标"}},[a._v(" 金标 ")])],1)],1),r("a-form-item",{attrs:{label:"角色名称"}},[r("a-select",{attrs:{"default-value":"角色A"}},[r("a-select-option",{attrs:{value:"角色A"}},[a._v(" 角色A ")]),r("a-select-option",{attrs:{value:"角色B"}},[a._v(" 角色B ")])],1)],1)],1):a._e(),1==a.currentStep?r("div",[r("a-form-item",{attrs:{label:"补录报表"}},[r("c-check-tree")],1)],1):a._e(),2==a.currentStep?r("div",[r("a-form-item",{attrs:{label:"补录机构"}},[r("c-check-tree")],1)],1):a._e(),3==a.currentStep?r("div",[r("a-form-item",{attrs:{label:"菜单权限"}},[r("c-check-tree")],1)],1):a._e()])],1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("a-button",{staticClass:"margin-btn",attrs:{type:"info",icon:"close"},on:{click:a.handleCancel}},[a._v("取 消")]),r("a-button",{staticClass:"margin-btn",attrs:{type:"info",icon:"left",disabled:0==a.currentStep},on:{click:a.handlePrev}},[a._v("上一部分")]),r("a-button",{staticClass:"margin-btn",attrs:{type:"primary",icon:"right",disabled:!(a.currentStep<3)},on:{click:a.handleNext}},[a._v("下一部分")]),r("a-button",{staticClass:"margin-btn",attrs:{type:"primary",icon:"check",loading:a.saveLoading},on:{click:a.handleSave}},[a._v(a._s(3==a.currentStep?"全部":"直接")+"保存")])],1)])],1)},i=[],s=(a("ed08"),void 0),n={data:function(){return{currentStep:0,isModalVisible:!1,saveLoading:!1,treeOrgArray:[],treeReportArray:[],treeAuthArray:[],stepDescriptionList:[{title:"角色",desc:"请选择角色"},{title:"补录报表",desc:"请选择对应的补录报表"},{title:"补录机构",desc:"请选择对应的补录机构"},{title:"菜单权限",desc:"请选择对应的补录菜单权限"}]}},methods:{open:function(){this.saveLoading=!1,this.currentStep=0,this.$refs.crm.open()},handleSave:function(){var e=this;this.saveLoading=!0,setTimeout(function(){e.saveLoading=!1,e.$refs.crm.close()},2e3),this.$message.success("触发保存事件")},handlePrev:function(){this.currentStep<1||this.currentStep--},handleNext:function(){this.currentStep>3||this.currentStep++},handleCancel:function(){this.$confirm({title:"表单存在内容",content:"表单上已有输入的信息，关闭后信息会清空，确认关闭吗？",onOk:function(){s.$message.info("触发关闭事件"),s.$refs.crm.close()},onCancel:function(){}})}},mounted:function(){}},o=n,l=a("2877"),d=Object(l["a"])(o,r,i,!1,null,null,null);t["default"]=d.exports},"7c5b":function(e,t,a){},"967f":function(e,t,a){"use strict";a("9e1d")},"9e1d":function(e,t,a){},"9fc2":function(e,t,a){"use strict";a.r(t),a.d(t,"builtInParam",function(){return r});var r={0:"否",1:"是"}},bf00:function(e,t,a){"use strict";a.r(t);var r=function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("div",{attrs:{id:"codeDetail"}},[r("c-resizable-modal",{ref:"crm",attrs:{title:"码表明细"}},[r("div",{attrs:{slot:"content"},slot:"content"},[r("h4",[r("span",[a._v(" 类型编号：XXXXXX "),r("a-divider",{attrs:{type:"vertical"}}),a._v(" 类型名称：XXXXXX ")],1)]),r("c-query-form-table",{attrs:{searchParams:a.par,tableData:a.tableData,tableColumns:a.tableColumns,needTableCheckList:!0,selectTableKeys:a.selectTableKeys},on:{selectTableKeysChangeFromQFT:a.selectTableKeysChangeFromQFT},scopedSlots:a._u([{key:"status",fn:function(e){return[r("span",[a._v(a._s(a.statusParam[e.data.status]))])]}},{key:"tableActionBox",fn:function(t){return[r("c-more-btn-collect",[r("span",{attrs:{slot:"content"},slot:"content"},[r("a-button",{attrs:{type:"link",size:"small"},on:{click:function(e){return a.handleOpenKeyDataDetail("edit",t.data.sid)}}},[a._v("修改")]),r("a-button",{attrs:{type:"link",size:"small"}},[a._v("删除")])],1)])]}}])},[r("template",{staticClass:"btn-box",slot:"functionBtnBox"})],2)],1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("a-button",{staticClass:"margin-btn",attrs:{type:"info",icon:"close"},on:{click:a.handleCancel}},[a._v("取 消")]),r("a-button",{staticClass:"margin-btn",attrs:{type:"primary",icon:"check",loading:a.saveLoading},on:{click:a.handleSave}},[a._v("保存")])],1)]),r("modalKeyDataDetail",{ref:"modalKeyDataDetail"})],1)},i=[],s=a("ef45"),n=a("2450"),o=void 0,l={data:function(){return{statusParam:s["statusParam"],currentStep:0,isModalVisible:!1,saveLoading:!1,treeOrgArray:[],treeReportArray:[],treeAuthArray:[],par:[{name:"sid",label:"编号",type:"input"},{name:"sort",label:"排序",type:"input"},{name:"dictLabel",label:"字典标签",type:"input"},{name:"dictValue",label:"字典键值",type:"input"},{name:"dictSid",label:"字典类型编号",type:"input"},{name:"status",label:"字典数据状态",type:"select",selectList:[{key:"0",value:"正常"},{key:"1",value:"停用"}]},{name:"creatorSid",label:"创建者编号",type:"input"},{name:"createTime",label:"创建时间",type:"datetime"},{name:"editorSid",label:"修改者编号",type:"input"},{name:"updateTime",label:"修改时间",type:"datetime"},{name:"remark",label:"备注",type:"input"}],tableData:{content:[{sid:"1",dictLabel:"统一用户认证集成",dictValue:"技术值",paramBuiltIn:"统一用户认证集成：",status:"1",sort:"1",creatorSid:"SR01",createTime:"2021-01-01 13:30:30"}],pageSize:10,pageNum:1,totalPages:1,totalSize:1},tableColumns:[{key:"sid",dataIndex:"sid",title:"编号"},{key:"sort",dataIndex:"sort",title:"排序"},{key:"dictLabel",dataIndex:"dictLabel",title:"字典标签"},{key:"dictValue",dataIndex:"dictValue",title:"字典键值"},{key:"status",dataIndex:"status",title:"字典数据状态",hasSlot:!0},{key:"creatorSid",dataIndex:"creatorSid",title:"创建者编号"},{key:"createTime",dataIndex:"createTime",title:"创建时间"},{key:"editorSid",dataIndex:"editorSid",title:"修改者编号"},{key:"updateTime",dataIndex:"updateTime",title:"修改时间"},{key:"remark",dataIndex:"remark",title:"备注"}],selectTableKeys:[]}},methods:{handleOpenKeyDataDetail:function(e,t){this.$refs.modalKeyDataDetail.open({mode:e,sid:t})},selectTableKeysChangeFromQFT:function(e){this.selectTableKeys=e},open:function(e){this.$refs.crm.open()},handleSave:function(){this.saveLoading=!0,setTimeout(function(){o.saveLoading=!1,o.$refs.crm.close()},2e3),this.$message.success("触发保存事件")},handlePrev:function(){this.currentStep<1||this.currentStep--},handleNext:function(){this.currentStep>3||this.currentStep++},handleCancel:function(){this.$confirm({title:"表单存在内容",content:"表单上已有输入的信息，关闭后信息会清空，确认关闭吗？",onOk:function(){o.$message.info("触发关闭事件"),o.$refs.crm.close()},onCancel:function(){}})}},mounted:function(){},components:{modalKeyDataDetail:n["default"]}},d=l,c=a("2877"),m=Object(c["a"])(d,r,i,!1,null,null,null);t["default"]=m.exports},dc9b:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"authConfig"}},[a("c-resizable-modal",{ref:"crm",attrs:{title:"添加系统参数"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("a-form-model",{attrs:{labelCol:{span:4},wrapperCol:{span:14}}},[a("a-form-item",{attrs:{label:"参数代码"}},[a("a-input")],1),a("a-form-item",{attrs:{label:"参数名称"}},[a("a-input")],1),a("a-form-item",{attrs:{label:"参数分类"}},[a("a-select",{attrs:{"default-value":"系统参数"}},[a("a-select-option",{attrs:{value:"系统参数"}},[e._v(" 系统参数 ")]),a("a-select-option",{attrs:{value:"业务参数"}},[e._v(" 业务参数 ")]),a("a-select-option",{attrs:{value:"其他参数"}},[e._v(" 其他参数 ")])],1)],1),a("a-form-item",{attrs:{label:"系统内置"}},[a("a-radio-group",{attrs:{name:"radioGroup","default-value":1}},[a("a-radio",{attrs:{value:1}},[e._v(" 是 ")]),a("a-radio",{attrs:{value:2}},[e._v(" 否 ")])],1)],1),a("a-form-item",{attrs:{label:"描述"}},[a("a-input",{attrs:{type:"textarea"}})],1)],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("a-button",{staticClass:"margin-btn",attrs:{type:"info",icon:"close"},on:{click:e.handleCancel}},[e._v("取 消")]),a("a-button",{staticClass:"margin-btn",attrs:{type:"primary",icon:"check",loading:e.saveLoading},on:{click:e.handleSave}},[e._v("保存")])],1)])],1)},i=[],s=(a("ed08"),{data:function(){return{currentStep:0,isModalVisible:!1,saveLoading:!1,treeOrgArray:[],treeReportArray:[],treeAuthArray:[],stepDescriptionList:[{title:"角色",desc:"请选择角色"},{title:"补录报表",desc:"请选择对应的补录报表"},{title:"补录机构",desc:"请选择对应的补录机构"},{title:"菜单权限",desc:"请选择对应的补录菜单权限"}]}},methods:{open:function(){this.saveLoading=!1,this.currentStep=0,this.$refs.crm.open()},handleSave:function(){var e=this;this.saveLoading=!0,setTimeout(function(){e.saveLoading=!1,e.$refs.crm.close()},1e3),this.$message.success("触发保存事件")},handlePrev:function(){this.currentStep<1||this.currentStep--},handleNext:function(){this.currentStep>3||this.currentStep++},handleCancel:function(){var e=this;this.$confirm({title:"表单存在内容",content:"表单上已有输入的信息，关闭后信息会清空，确认关闭吗？",onOk:function(){e.$message.info("触发关闭事件"),e.$refs.crm.close()},onCancel:function(){}})}},mounted:function(){}}),n=s,o=a("2877"),l=Object(o["a"])(n,r,i,!1,null,null,null);t["default"]=l.exports},ef45:function(e,t,a){"use strict";a.r(t),a.d(t,"statusParam",function(){return r});var r={0:"正常",1:"停用"}},f871:function(e,t,a){"use strict";a.r(t);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-key white-back-box",attrs:{id:"tableKey"}},[a("c-query-form-table",{attrs:{searchParams:t.par,tableData:t.tableData,tableColumns:t.tableColumns,needTableCheckList:!0,selectTableKeys:t.selectTableKeys},on:{selectTableKeysChangeFromQFT:t.selectTableKeysChangeFromQFT,formQuery:t.formQuery,dbClick:t.dbClick},scopedSlots:t._u([{key:"status",fn:function(e){return[a("span",[t._v(t._s(t.statusParam[e.data.status]))])]}}])},[a("template",{staticClass:"btn-box",slot:"functionBtnBox"},[a("a-button",{staticClass:"margin-btn",attrs:{type:"primary",icon:"plus"},on:{click:t.createNew}},[t._v("新增")]),a("a-button",{staticClass:"margin-btn",attrs:{type:"primary",icon:"edit",disabled:t.selectTableKeys.length<1}},[t._v("修改")]),a("a-button",{staticClass:"margin-btn",attrs:{type:"primary",icon:"delete",disabled:t.selectTableKeys.length<1}},[t._v("删除")]),a("a-button",{staticClass:"margin-btn",attrs:{type:"primary",icon:"delete"},on:{click:function(e){return t.handleOpenKeyData("1")}}},[t._v("码表明细")])],1),a("template",{slot:"tableActionBox"},[a("a-button",{attrs:{type:"link",size:"small"},on:{click:t.handleOpenDetailModal}},[t._v("码表明细")]),a("c-more-btn-collect",[a("span",{attrs:{slot:"content"},slot:"content"},[a("a-button",{attrs:{type:"link",size:"small"}},[t._v("修改")]),a("a-button",{attrs:{type:"link",size:"small"}},[t._v("删除")])],1)])],1)],2),a("modalAdd",{ref:"modalAdd"}),a("modalKeyData",{ref:"modalKeyData"}),a("modalKeyTypeDetail",{ref:"modalKeyTypeDetail"})],1)},i=[],s=a("63a1"),n=a("ef45"),o=a("24c9"),l=a("bf00"),d=a("633f"),c={data:function(){return{statusParam:n["statusParam"],par:[{name:"sid",label:"编号",type:"input"},{name:"sort",label:"排序",type:"input"},{name:"dictName",label:"字典名称",type:"input"},{name:"dictType",label:"字典类型",type:"input"},{name:"status",label:"字典状态",type:"select",selectList:[{key:"0",value:"正常"},{key:"1",value:"停用"}]},{name:"creatorSid",label:"创建者编号",type:"input"},{name:"createTime",label:"创建时间",type:"datetime"},{name:"editorSid",label:"修改者编号",type:"input"},{name:"updateTime",label:"修改时间",type:"datetime"},{name:"remark",label:"备注",type:"input"}],tableData:{content:[{sid:"1",dictName:"统一用户认证集成",dictType:"技术值",paramBuiltIn:"统一用户认证集成：",status:"0",sort:"1",creatorSid:"SR01",createTime:"2021-01-01 13:30:30"}],pageSize:10,pageNum:1,totalPages:1,totalSize:1},orgTree:[],value:void 0,treeData:[],tableColumns:[{key:"sid",dataIndex:"sid",title:"编号"},{key:"sort",dataIndex:"sort",title:"排序"},{key:"dictName",dataIndex:"dictName",title:"字典名称"},{key:"dictType",dataIndex:"dictType",title:"字典类型"},{key:"status",dataIndex:"status",title:"字典状态",hasSlot:!0},{key:"creatorSid",dataIndex:"creatorSid",title:"创建者编号"},{key:"createTime",dataIndex:"createTime",title:"创建时间"},{key:"editorSid",dataIndex:"editorSid",title:"修改者编号"},{key:"updateTime",dataIndex:"updateTime",title:"修改时间"},{key:"remark",dataIndex:"remark",title:"备注"}],selectTableKeys:[]}},created:function(){var t=this;Object(s["l"])().then(function(e){t.treeData=e.data})},methods:{createNew:function(){this.$refs.modalKeyTypeDetail.open({mode:"insert"})},handleOpenKeyData:function(e){this.$refs.modalKeyData.open(e)},handleOpenDetailModal:function(e){this.$refs.modalKeyTypeDetail.open({mode:"edit",sid:e})},selectTableKeysChangeFromQFT:function(e){this.selectTableKeys=e},dbClick:function(e){this.handleOpenDetailModal(e.sid)},formQuery:function(){}},components:{modalAdd:o["default"],modalKeyData:l["default"],modalKeyTypeDetail:d["default"]}},m=c,u=(a("12b1"),a("2877")),p=Object(u["a"])(m,r,i,!1,null,"67e56130",null);t["default"]=p.exports}}]);