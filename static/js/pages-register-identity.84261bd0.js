(self["webpackChunkmy_projectinit"]=self["webpackChunkmy_projectinit"]||[]).push([[514],{8766:function(t,i,e){var a=e(3261);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);var n=e(56).Z;n("9f05fe0c",a,!0,{sourceMap:!1,shadowMode:!1})},9492:function(t,i,e){"use strict";var a;e.r(i),e.d(i,{default:function(){return f}});var n,o=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"content"},[a("img",{staticClass:"upload-title-photo",attrs:{src:e(2082),alt:""}}),a("div",{staticClass:"container"},[a("div",{staticClass:"container-padding"},[t._m(0),a("div",{staticClass:"upload-photo flex flexBetween"},[t._m(1),a("div",{staticClass:"photo-bg",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handlerUpload.apply(void 0,arguments)}}},[t.fileUrl?a("img",{staticClass:"photo-img",attrs:{src:t.fileUrl,alt:""}}):a("img",{staticClass:"photo-no-img",staticStyle:{width:"250rpx",height:"150rpx"},attrs:{src:e(1695),alt:""}})])]),a("div",{staticClass:"picture-title"},[t._v("拍摄标准")]),t._m(2),t._m(3),a("div",{staticClass:"info-container"},[a("div",{staticClass:"info-item flex"},[a("div",{staticClass:"info-name"},[t._v("姓名")]),t._v("："),a("div",{staticClass:"info-label"},[t._v(t._s(t.name))])]),a("div",{staticClass:"info-item flex"},[a("div",{staticClass:"info-name"},[t._v("身份证号")]),t._v("："),a("div",{staticClass:"info-label"},[t._v(t._s(t.idno))])]),a("div",{staticClass:"info-item flex"},[a("div",{staticClass:"info-name"},[t._v("有效期")]),t._v("："),a("div",{staticClass:"info-label"},[t._v(t._s(t.time[0])+" 至 "+t._s(t.time[1]))])])]),a("div",{staticClass:"next-btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.pageTo.apply(void 0,arguments)}}},[t._v("下一步")])])])])},s=[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"login-info-title flex flexBetween"},[a("div",{staticClass:"flex"},[a("div",{staticClass:"title-info"},[t._v("2")]),a("span",{staticClass:"title"},[t._v("身份证信息")])]),a("div",{staticClass:"flex login-info-next"},[a("img",{attrs:{src:e(3267),alt:""}}),a("span",[t._v("下一项 驾驶证信息")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"title"},[t._v("身份证")]),e("div",{staticClass:"info"},[t._v("上传你身份证头像面")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"picture-list flex flexAround"},[a("div",{staticClass:"picture-item"},[a("img",{attrs:{src:e(2965),alt:""}}),a("div",[t._v("标准拍摄")])]),a("div",{staticClass:"picture-item"},[a("img",{attrs:{src:e(7350),alt:""}}),a("div",[t._v("拍摄不全")])]),a("div",{staticClass:"picture-item"},[a("img",{attrs:{src:e(221),alt:""}}),a("div",[t._v("拍摄模糊")])]),a("div",{staticClass:"picture-item"},[a("img",{attrs:{src:e(8164),alt:""}}),a("div",[t._v("拍摄曝光")])])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"confirm-info-title flex"},[a("img",{attrs:{src:e(6251),alt:""}}),a("span",[t._v("请确认身份信息")])])}],l={data:function(){return{name:"王立军",idno:"12982367859463853469",time:["2018-05-22","2022-05-22"],fileUrl:""}},methods:{pageTo:function(){if(!this.fileUrl)return uni.showToast({title:"请上传身份证照片",icon:"none"});uni.navigateTo({url:"/pages/register/driving"})},handlerUpload:function(){var t=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(i){t.fileUrl=i.tempFilePaths[0]}})}}},d=l,c=(e(8766),e(9453)),r=(0,c.Z)(d,o,s,!1,null,"06b7d5e0",null,!1,a,n),f=r.exports},3261:function(t,i,e){"use strict";e.r(i);var a=e(3481),n=e.n(a),o=e(2400),s=e.n(o),l=e(8806),d=e.n(l),c=new URL(e(3520),e.b),r=new URL(e(3575),e.b),f=new URL(e(7759),e.b),v=s()(n()),g=d()(c),p=d()(r),u=d()(f);v.push([t.id,".container[data-v-06b7d5e0]{width:100%;margin:0 auto;text-align:left;margin-top:%?-70?%;position:relative;background:#fff;padding-bottom:%?30?%}.container .container-padding[data-v-06b7d5e0]{width:92%;margin:0 auto}.login-info-title[data-v-06b7d5e0]{z-index:99;padding-top:%?40?%;padding-bottom:%?40?%}.login-info-title .title-info[data-v-06b7d5e0]{width:%?44?%;height:%?44?%;background-size:100% 100%;color:#fff;font-family:c1;text-align:center;font-size:%?28?%;line-height:%?44?%}.login-info-title .title[data-v-06b7d5e0]{font-size:%?36?%;color:#286eec;margin-left:%?26?%;font-weight:600}.login-info-title .login-info-next[data-v-06b7d5e0]{font-size:%?24?%;color:#999}.login-info-title .login-info-next img[data-v-06b7d5e0]{height:%?16?%;width:%?20?%}.check-container[data-v-06b7d5e0]{font-size:%?28?%;color:#999;padding:0 %?40?% %?30?%}.check-container .uni-input[data-v-06b7d5e0]{color:#000}.upload-photo[data-v-06b7d5e0]{width:100%;height:%?268?%;background:#f2f7ff;border-radius:%?10?%;padding:0 %?30?%;box-sizing:border-box}.upload-photo .title[data-v-06b7d5e0]{font-size:%?36?%;padding-bottom:%?30?%}.upload-photo .info[data-v-06b7d5e0]{font-size:%?24?%;color:#999}.upload-photo .photo-bg[data-v-06b7d5e0]{width:%?290?%;height:%?180?%;background:url("+g+") no-repeat;background-size:100% 100%;display:flex;align-items:center;justify-content:center}.upload-photo .photo-bg .photo-no-img[data-v-06b7d5e0]{width:%?155?%;height:%?155?%}.upload-photo .photo-img[data-v-06b7d5e0]{object-fit:contain;height:96%;width:96%}.picture-title[data-v-06b7d5e0]{font-size:%?28?%;color:#666;padding:%?30?% 0}.picture-list img[data-v-06b7d5e0]{width:%?150?%;height:%?150?%}.picture-list div[data-v-06b7d5e0]{font-size:%?24?%;color:#666;text-align:center}.upload-title-photo[data-v-06b7d5e0]{height:-webkit-fit-content;height:fit-content;margin-top:%?-30?%}.confirm-info-title[data-v-06b7d5e0]{font-size:%?30?%;padding:%?30?% 0}.confirm-info-title img[data-v-06b7d5e0]{width:%?30?%;height:%?30?%;margin-right:%?20?%}.info-container[data-v-06b7d5e0]{font-size:%?26?%;padding-left:%?44?%;box-sizing:border-box}.info-container .info-item[data-v-06b7d5e0]{padding-top:%?30?%}.info-container .info-name[data-v-06b7d5e0]{width:%?106?%;text-align:justify;text-align-last:justify;color:#666}.title-info[data-v-06b7d5e0]{background:url("+p+") no-repeat}.picture-item img[data-v-06b7d5e0]{width:%?160?%;height:%?120?%}.info-container[data-v-06b7d5e0]{height:%?240?%;width:100%;background:url("+u+") no-repeat}",""]),i["default"]=v},2082:function(t,i,e){"use strict";t.exports=e.p+"static/img/头图.4957b215.png"},1695:function(t,i,e){"use strict";t.exports=e.p+"static/img/用户.e84ed3ee.png"}}]);