(self["webpackChunkmy_projectinit"]=self["webpackChunkmy_projectinit"]||[]).push([[528],{3566:function(i,t,a){var e=a(8281);e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[i.id,e,""]]),e.locals&&(i.exports=e.locals);var o=a(56).Z;o("2ba0b47e",e,!0,{sourceMap:!1,shadowMode:!1})},6737:function(i,t,a){"use strict";var e;a.r(t),a.d(t,{default:function(){return p}});var o,n=function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("div",{staticClass:"content"},[a("div",{staticClass:"result-container flex flexBetween"},[a("div",[i._v("审核结果:")]),a("div",{class:["result-state","state-"+i.resultState]},["success"==i.resultState?a("span",[i._v("审核通过")]):i._e(),"error"==i.resultState?a("span",[i._v("审核失败")]):i._e(),"normal"==i.resultState?a("span",[i._v("未审核")]):i._e()])]),a("div",{staticClass:"container"},[a("div",{staticClass:"verification-info flex"},[a("div",[a("img",{attrs:{src:i.imgUrl,alt:""}}),a("div",{staticClass:"verification-name"},[i._v(i._s(i.info.name))])]),a("div",{staticClass:"verification-info-container"},[a("div",{staticClass:"verification-item flex"},[a("div",{staticClass:"verification-item-name"},[i._v("登记时间")]),a("div",{staticClass:"verification-item-value"},[i._v(i._s(i.info.time))])]),a("div",{staticClass:"verification-item flex"},[a("div",{staticClass:"verification-item-name"},[i._v("手机号码")]),a("div",{staticClass:"verification-item-value"},[i._v(i._s(i.info.phone))])]),a("div",{staticClass:"verification-item flex"},[a("div",{staticClass:"verification-item-name"},[i._v("所属部门")]),a("div",{staticClass:"verification-item-value"},[i._v(i._s(i.info.unit))])]),a("div",{staticClass:"verification-item flex"},[a("div",{staticClass:"verification-item-name"},[i._v("证件号码")]),a("div",{staticClass:"verification-item-value"},[i._v(i._s(i.info.no))])])])]),a("div",{staticClass:"card-container"},[a("div",{class:["card-list card-photo",i.photoMap.userError&&"card-error"],staticStyle:{"margin-top":"12rpx"}},[a("img",{attrs:{src:i.photoMap.userPhoto,alt:""}}),a("div",{staticClass:"tip"},[i._v("证件照")])]),a("div",{class:["card-list card-id",i.photoMap.idError&&"card-error"]},[a("img",{attrs:{src:i.photoMap.idPhoto,alt:""}}),a("div",{staticClass:"tip"},[i._v("身份证")])]),a("div",{class:["card-list card-driver",i.photoMap.driverError&&"card-error"]},[a("img",{attrs:{src:i.photoMap.driverPhoto,alt:""}}),a("div",{staticClass:"tip"},[i._v("驾驶证")])])]),a("div",{staticClass:"footer-tip"},[i._v("温馨提示：标红区域信息错误，可进行修改重新上传")])]),"normal"==i.resultState?a("div",{staticClass:"next-btn",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.handlerPageTo.apply(void 0,arguments)}}},[i._v("重新提交")]):i._e()])},c=[],A={data:function(){return{resultState:"normal",imgUrl:"https://img01.yzcdn.cn/vant/cat.jpeg",photoMap:{userPhoto:"/static/img/审核结果/证件照.png",idPhoto:"/static/img/审核结果/身份证.png",driverPhoto:"/static/img/审核结果/驾驶证.png",userError:!0,idError:!1,driverError:!0},state:"",info:{name:"王罗浩",sex:"男",time:"2018-0620",phone:"18329878777",unit:"机电部",no:"192873926965726943"}}},methods:{handlerPageTo:function(){uni.navigateTo({url:"/pages/register/index"})},verify:function(){var i=this;"done"===this.state?(uni.showToast({title:"核检已完成,即将跳转至首页",icon:"loading"}),setTimeout((function(){uni.navigateTo({url:"/pages/index/index"})}),1200)):(this.$refs.popup.open(),setTimeout((function(){i.$refs.popup.close()}),2e3))},handlerChange:function(i){i.show||(this.state="done")}}},r=A,l=(a(3566),a(9453)),s=(0,l.Z)(r,n,c,!1,null,"43906ccc",null,!1,e,o),p=s.exports},8281:function(i,t,a){"use strict";a.r(t);var e=a(3481),o=a.n(e),n=a(2400),c=a.n(n),A=a(8806),r=a.n(A),l=new URL(a(5813),a.b),s=new URL(a(8646),a.b),p=new URL(a(7297),a.b),d=c()(o()),g=r()(l),S=r()(s),U=r()(p);d.push([i.id,".content[data-v-43906ccc]{background:#f1f1f1;text-align:left;height:auto;overflow:hidden}.container[data-v-43906ccc]{width:96%;margin:0 auto;padding-top:%?20?%}.verification-info[data-v-43906ccc]{height:%?316?%;background:url("+g+") no-repeat;background-size:100% 100%;font-size:%?24?%}.verification-info img[data-v-43906ccc]{width:%?170?%;height:%?210?%;margin-left:%?40?%;border-radius:%?10?%}.verification-info .verification-name[data-v-43906ccc]{font-size:%?34?%;text-align:center;margin-left:%?24?%}.verification-info .verification-info-container[data-v-43906ccc]{align-items:flex-end;padding-left:%?30?%;margin-top:%?-40?%}.verification-info .verification-item-name[data-v-43906ccc]{width:%?118?%;text-align:left}.verification-info-title[data-v-43906ccc]{align-items:flex-end;padding-bottom:%?12?%}.verification-info-title .verification-sex[data-v-43906ccc]{padding-left:%?30?%}.tip[data-v-43906ccc]{font-size:%?28?%;margin-top:%?20?%;margin-bottom:%?12?%;padding:0 %?40?%}.tip-content[data-v-43906ccc]{font-size:%?24?%;color:#666;letter-spacing:1px;padding:0 %?40?%}.verification-photo[data-v-43906ccc]{width:%?280?%;height:%?524?%;margin:%?50?% auto 0;background:url("+S+") no-repeat;background-size:100% 100%;display:flex;align-items:center;justify-content:center}.verification-photo img[data-v-43906ccc]{width:90%;height:90%}.popup-container[data-v-43906ccc]{width:%?400?%;height:%?310?%;background:url("+U+") no-repeat;background-size:100% 100%}.popup-container .label[data-v-43906ccc]{color:#24c065;text-align:center;padding-top:%?210?%;font-family:en;font-size:%?40?%}.verification-item[data-v-43906ccc]{line-height:%?50?%}.card-container[data-v-43906ccc]{padding:0 %?12?%}.card-list[data-v-43906ccc]{height:%?390?%;width:100%;background:#fff;border-radius:%?16?%;margin-top:%?24?%;display:flex;align-items:center;justify-content:center;position:relative}.card-list img[data-v-43906ccc]{width:%?590?%;height:%?280?%}.card-list .tip[data-v-43906ccc]{position:absolute;width:100%;text-align:center;bottom:%?20?%}.result-container[data-v-43906ccc]{height:%?100?%;background:#fff;padding:0 %?36?%;font-size:%?28?%}.result-state[data-v-43906ccc]{font-family:en;font-size:%?34?%;border:1px solid red;border-radius:%?10?%;padding:%?6?% %?10?%}.state-success[data-v-43906ccc]{color:#03ae5f;border-color:#03ae5f}.state-error[data-v-43906ccc]{color:#ae0303;border-color:#ae0303}.state-normal[data-v-43906ccc]{color:#666;border-color:#666}.next-btn[data-v-43906ccc]{margin-top:%?30?%;width:%?500?%}.footer-tip[data-v-43906ccc]{color:#ae0303;font-size:%?24?%;padding:%?20?% %?20?% 0}.card-error[data-v-43906ccc]{border:1px solid #ae0303}",""]),t["default"]=d},5813:function(i,t,a){"use strict";i.exports=a.p+"static/img/卡片背景.83450421.png"},8646:function(i){"use strict";i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARUAAAIICAYAAABATno6AAAJJElEQVR4nO3czattZQHH8d8tszTwLciEHBQlIjisaFj0auisSVAZTWpSkxr0HwQVNAsSGhlCwwpr0AsNAhs0qYReBg5q4CRNIUHTjC3n1mGf673X6xdU+nzgwOFZz1p7n2ef82WtvRfn3K33PrrLcPW2N1/OxAt4/OwQ8Aq78Qoe/p/bnjkzeuSqMyP/c8e2z2/72LbbLjH3Ys5dZBvwynjsCh712W1/3vbTbd/b9vCZGYc/+Aucqdyw7dvbPr3tdWf2eOlEBV59nn+Zz+jf2+7f9uVt/zi94Tga79r2222fvcA2gNPt+MxJL247vSqnL2lu3vbLbW9/kWV7cttzZ0aB16KX+l7n67ddd2Z0e+e2n297z7ZHj6Ny3wWC8rttX9/24LYnzhwOeK266Qqe9/Xb7tr2tW13nho/dOO72+7ZqUucD2y7++gAh+ul9257QFCAkw48cHJWcv/Rgtx90pH/RuVLRxN+ve3ebU9bSeDIoQufO+nEaS905BCVa7Z95GjjV7x/AlzEsyedOO3QkWsOUXn3tmtPbXhk20MvfiyAFzx00ovzDh257RCVtx2tz1+sF3CZ/nQ07ZZDVN5wNPgvqwlcpuM7c29ygxuQEhUgJSpASlSAlKgAKVEBUqICpEQFSIkKkBIVICUqQOpC//ga4Io5UwFSogKkRAVIiQqQEhUgJSpASlSAlKgAKVEBUqICpEQFSIkKkBIVICUqQEpUgJSoAClRAVKiAqREBUiJCpASFSAlKkBKVICUqAApUQFSogKkRAVIiQqQEhUgJSpASlSAlKgAKVEBUqICpEQFSIkKkBIVICUqQEpUgJSoAClRAVKiAqREBUiJCpASFSAlKkBKVICUqAApUQFSogKkRAVIiQqQEhUgJSpASlSAlKgAKVEBUqICpEQFSIkKkBIVICUqQEpUgJSoAClRAVKiAqREBUiJCpASFSAlKkBKVICUqAApUQFSogKkRAVIiQqQEhUgJSpASlSAlKgAKVEBUqICpEQFSIkKkBIVICUqQEpUgJSoAClRAVKiAqREBUiJCpASFSAlKkBKVICUqAApUQFSogKkRAVIiQqQEhUgJSpASlSAlKgAKVEBUqICpEQFSIkKkBIVICUqQEpUgJSoAClRAVKiAqREBUiJCpASFSAlKkBKVICUqAApUQFSogKkRAVIiQqQEhUgJSpASlSAlKgAKVEBUqICpEQFSIkKkBIVICUqQEpUgJSoAClRAVKiAqREBUiJCpASFSAlKkBKVICUqAApUQFSogKkRAVIiQqQEhUgJSpASlSAlKgAKVEBUqICpEQFSIkKkBIVICUqQEpUgJSoAClRAVKiAqREBUiJCpASFSAlKkBKVICUqAApUQFSogKkRAVIiQqQEhUgJSpASlSAlKgAKVEBUqICpEQFSIkKkBIVICUqQEpUgJSoAClRAVKiAqREBUiJCpASFSAlKkBKVICUqAApUQFSogKkRAVIiQqQEhUgJSpASlSAlKgAKVEBUqICpEQFSIkKkBIVICUqQEpUgJSoAClRAVKiAqREBUiJCpASFSAlKkBKVICUqAApUQFSogKkRAVIiQqQEhUgJSpASlSAlKgAKVEBUqICpEQFSIkKkBIVICUqQEpUgJSoAClRAVKiAqREBUiJCpASFSAlKkBKVICUqAApUQFSogKkRAVIiQqQEhUgJSpASlSAlKgAKVEBUqICpEQFSIkKkBIVICUqQEpUgJSoAClRAVKiAqREBUiJCpASFSAlKkBKVICUqAApUQFSogKkRAVIiQqQEhUgJSpASlSAlKgAKVEBUqICpEQFSIkKkBIVICUqQEpUgJSoAClRAVKiAqREBUiJCpASFSAlKkBKVICUqAApUQFSogKkRAVIiQqQEhUgJSpASlSAlKgAKVEBUqICpEQFSIkKkBIVICUqQEpUgJSoAClRAVKiAqREBUiJCpASFSAlKkBKVICUqAApUQFSogKkRAVIiQqQEhUgJSpASlSAlKgAKVEBUqICpEQFSIkKkBIVICUqQEpUgJSoAClRAVKiAqREBUiJCpASFSAlKkBKVICUqAApUQFSogKkRAVIiQqQEhUgJSpASlSAlKgAKVEBUqICpEQFSIkKkBIVICUqQEpUgJSoAClRAVKiAqREBUiJCpASFSAlKkBKVICUqAApUQFSogKkRAVIiQqQEhUgJSpASlSAlKgAKVEBUqICpEQFSIkKkBIVICUqQEpUgJSoAClRAVKiAqREBUiJCpASFSAlKkBKVICUqAApUQFSogKkRAVIiQqQEhUgJSpASlSAlKgAKVEBUqICpEQFSIkKkBIVICUqQEpUgJSoAClRAVKiAqREBUiJCpASFSAlKkBKVICUqAApUQFSogKkRAVIiQqQEhUgJSpASlSAlKgAKVEBUqICpEQFSIkKkBIVICUqQEpUgJSoAClRAVKiAqREBUiJCpASFSAlKkBKVICUqAApUQFSogKkRAVIiQqQEhUgJSpASlSAlKgAKVEBUqICpEQFSIkKkBIVICUqQEpUgJSoAClRAVKiAqREBUiJCpASFSAlKkBKVICUqAApUQFSogKkRAVIiQqQEhUgJSpASlSAlKgAKVEBUqICpEQFSIkKkBIVICUqQEpUgJSoAClRAVKHqHxi2/Onvn5siYHL9P2jfnzKmQqQEhUgJSpASlSAlKgAKVEBUqICpEQFSIkKkBIVICUqQEpUgJfj3NG+z18oKm86MwJwYW89Gn3yEJW/Hg3e6QwGuAyHs5Q7jqb97RCPh7c9dmrwUJ67rChwCR/fdsupKYeOPHyIynPbfni07ze2XX/x4wH/xw59+NbRj/+jbc+ev8z55klczrt920+23ey3Bjhy80kfbj81/NxJR3bVycDhEui+bV84Nen92/647TsnBXpk29NnDn9pj3tF4FXnxpf4hN647R3b7t72xW03HG0/9OMPh2/O3Xrvo+cHr932i23vO3O4l+f4Iyfglfd8+Ax+s+2D257a0ac8h4GPbnvwzC4AF/arkzdsnzq/9fij4ye23bPtqy5bgIt4/KQTHzpuxenLn2PXbfvktg+f3Lvylm1Xn5l1aTd5ZeBV5/RtJJfjmW1/3/b7bT/b9oPDjW5ndtz2H8fJdQzAoZeeAAAAAElFTkSuQmCC"},7297:function(i,t,a){"use strict";i.exports=a.p+"static/img/通过.dbcdf267.png"}}]);