(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shiyanbaogao-add-or-update"],{"200f":function(e,r,t){var i=t("24fb");r=i(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-7d0b3145]{padding:%?20?%}.content[data-v-7d0b3145]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-7d0b3145]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-7d0b3145]{width:%?180?%}.avator[data-v-7d0b3145]{width:%?150?%;height:%?60?%}.right-input[data-v-7d0b3145]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-7d0b3145]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-7d0b3145]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-7d0b3145]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-7d0b3145]{border:0}.cu-form-group uni-input[data-v-7d0b3145]{padding:0 %?30?%}.uni-input[data-v-7d0b3145]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-7d0b3145]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-7d0b3145]::after{line-height:%?88?%}.select .uni-input[data-v-7d0b3145]{line-height:%?88?%}.input .right-input[data-v-7d0b3145]{line-height:%?110?%}',""]),e.exports=r},"23db":function(e,r,t){"use strict";var i=t("78f3"),o=t.n(i);o.a},"78f3":function(e,r,t){var i=t("200f");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=t("4f06").default;o("775c8b8b",i,!0,{sourceMap:!1,shadowMode:!1})},cd80:function(e,r,t){"use strict";t.r(r);var i=t("f12c"),o=t("f83f");for(var a in o)"default"!==a&&function(e){t.d(r,e,(function(){return o[e]}))}(a);t("23db");var n,s=t("f0c5"),u=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"7d0b3145",null,!1,i["a"],n);r["default"]=u.exports},f12c:function(e,r,t){"use strict";var i={"w-picker":t("e2b1").default},o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("课程名称")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:e.ro.kechengmingcheng,placeholder:"课程名称"},model:{value:e.ruleForm.kechengmingcheng,callback:function(r){e.$set(e.ruleForm,"kechengmingcheng",r)},expression:"ruleForm.kechengmingcheng"}})],1),t("v-uni-view",{staticClass:"cu-form-group",class:"left"==e.left?"":"active",style:{boxShadow:"0 0 4rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.xueshengbaogaoTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("学生报告")]),t("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[e.ruleForm.xueshengbaogao?t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:e.ruleForm.xueshengbaogao,mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("教师账号")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:e.ro.jiaoshizhanghao,placeholder:"教师账号"},model:{value:e.ruleForm.jiaoshizhanghao,callback:function(r){e.$set(e.ruleForm,"jiaoshizhanghao",r)},expression:"ruleForm.jiaoshizhanghao"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("教师姓名")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:e.ro.jiaoshixingming,placeholder:"教师姓名"},model:{value:e.ruleForm.jiaoshixingming,callback:function(r){e.$set(e.ruleForm,"jiaoshixingming",r)},expression:"ruleForm.jiaoshixingming"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("提交时间")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{placeholder:"提交时间"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.toggleTab("tijiaoshijian")}},model:{value:e.ruleForm.tijiaoshijian,callback:function(r){e.$set(e.ruleForm,"tijiaoshijian",r)},expression:"ruleForm.tijiaoshijian"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("学号")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:e.ro.xuehao,placeholder:"学号"},model:{value:e.ruleForm.xuehao,callback:function(r){e.$set(e.ruleForm,"xuehao",r)},expression:"ruleForm.xuehao"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("姓名")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:e.ro.xingming,placeholder:"姓名"},model:{value:e.ruleForm.xingming,callback:function(r){e.$set(e.ruleForm,"xingming",r)},expression:"ruleForm.xingming"}})],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"#409EFF",borderColor:"#409EFF",borderRadius:"8rpx",color:"#fff",borderWidth:"2rpx",width:"160rpx",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),t("w-picker",{ref:"tijiaoshijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(r){arguments[0]=r=e.$handleEvent(r),e.tijiaoshijianConfirm.apply(void 0,arguments)}}})],1)},a=[];t.d(r,"b",(function(){return o})),t.d(r,"c",(function(){return a})),t.d(r,"a",(function(){return i}))},f6df:function(e,r,t){"use strict";var i=t("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,t("ac6a"),t("96cf");var o=i(t("3b8d")),a=i(t("e2b1")),n={data:function(){return{ruleForm:{kechengmingcheng:"",xueshengbaogao:"",jiaoshizhanghao:"",jiaoshixingming:"",tijiaoshijian:"",xuehao:"",xingming:"",userid:""},user:{},ro:{kechengmingcheng:!1,xueshengbaogao:!1,jiaoshizhanghao:!1,jiaoshixingming:!1,tijiaoshijian:!1,xuehao:!1,xingming:!1,userid:!1}}},components:{wPicker:a.default},computed:{},onLoad:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(r){var t,i,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.tijiaoshijian=this.$utils.getCurDateTime(),t=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(t);case 4:if(i=e.sent,this.user=i.data,this.ruleForm.xuehao=this.user.xuehao,this.ruleForm.xingming=this.user.xingming,this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){e.next=16;break}return this.ruleForm.id=r.id,e.next=14,this.$api.info("shiyanbaogao",this.ruleForm.id);case 14:i=e.sent,this.ruleForm=i.data;case 16:if(!r.cross){e.next=55;break}o=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(o);case 19:if((e.t1=e.t0()).done){e.next=55;break}if(a=e.t1.value,"kechengmingcheng"!=a){e.next=25;break}return this.ruleForm.kechengmingcheng=o[a],this.ro.kechengmingcheng=!0,e.abrupt("continue",19);case 25:if("xueshengbaogao"!=a){e.next=29;break}return this.ruleForm.xueshengbaogao=o[a],this.ro.xueshengbaogao=!0,e.abrupt("continue",19);case 29:if("jiaoshizhanghao"!=a){e.next=33;break}return this.ruleForm.jiaoshizhanghao=o[a],this.ro.jiaoshizhanghao=!0,e.abrupt("continue",19);case 33:if("jiaoshixingming"!=a){e.next=37;break}return this.ruleForm.jiaoshixingming=o[a],this.ro.jiaoshixingming=!0,e.abrupt("continue",19);case 37:if("tijiaoshijian"!=a){e.next=41;break}return this.ruleForm.tijiaoshijian=o[a],this.ro.tijiaoshijian=!0,e.abrupt("continue",19);case 41:if("xuehao"!=a){e.next=45;break}return this.ruleForm.xuehao=o[a],this.ro.xuehao=!0,e.abrupt("continue",19);case 45:if("xingming"!=a){e.next=49;break}return this.ruleForm.xingming=o[a],this.ro.xingming=!0,e.abrupt("continue",19);case 49:if("userid"!=a){e.next=53;break}return this.ruleForm.userid=o[a],this.ro.userid=!0,e.abrupt("continue",19);case 53:e.next=19;break;case 55:this.styleChange();case 56:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},tijiaoshijianConfirm:function(e){console.log(e),this.ruleForm.tijiaoshijian=e.result,this.$forceUpdate()},xueshengbaogaoTap:function(){var e=this;this.$api.upload((function(r){e.ruleForm.xueshengbaogao=e.$base.url+"upload/"+r.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.id){e.next=5;break}return e.next=3,this.$api.update("shiyanbaogao",this.ruleForm);case 3:e.next=7;break;case 5:return e.next=7,this.$api.add("shiyanbaogao",this.ruleForm);case 7:this.$utils.msgBack("提交成功");case 8:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,t=r.getFullYear(),i=r.getMonth()+1,o=r.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,o=o>9?o:"0"+o,"".concat(t,"-").concat(i,"-").concat(o)},toggleTab:function(e){this.$refs[e].show()}}};r.default=n},f83f:function(e,r,t){"use strict";t.r(r);var i=t("f6df"),o=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(r,e,(function(){return i[e]}))}(a);r["default"]=o.a}}]);