(function(t){function e(e){for(var n,c,i=e[0],s=e[1],u=e[2],f=0,p=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,i=1;i<r.length;i++){var s=r[i];0!==a[s]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},o=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/catfacts/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=s;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=(r("d3b7"),r("bc3a")),o=r.n(a),c={},i=o.a.create(c);i.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),i.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){t.axios=i,window.axios=i,Object.defineProperties(t.prototype,{axios:{get:function(){return i}},$axios:{get:function(){return i}}})},n["a"].use(Plugin);Plugin;var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"grey darken-3",dark:""}},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:r("cf05"),transition:"scale-transition",width:"70"}}),n("div",{staticClass:"display-1 text-uppercase font-weight-light"},[t._v("Catfacts")]),n("v-spacer"),n("v-btn",{attrs:{href:"https://documenter.getpostman.com/view/1946054/S11HvKSz?version=latest",target:"_blank",text:""}},[n("span",{staticClass:"mr-2"},[t._v("Cat facts API")]),n("v-icon",[t._v("mdi-open-in-new")])],1)],1),n("v-content",[n("Content")],1)],1)},u=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-card",[r("v-toolbar",{staticClass:"elevation-1",attrs:{dense:"",color:"grey lighten-5"}},[r("v-icon",[t._v("mdi-cat")]),r("v-toolbar-title",{staticClass:"pl-3"},[t._v("1000 random cat facts")])],1),r("v-card-text",[t.errored?r("v-alert",{attrs:{text:"",type:"error"}},[t._v(t._s(t.error))]):t._e(),t.loading?r("div",{staticClass:"text-center"},[r("v-progress-circular",{staticClass:"mt-7",attrs:{color:"grey",indeterminate:""}})],1):t._e(),t._l(t.facts,(function(e,n){return r("div",{key:n},[r("v-card",{staticClass:"pa-3 my-2"},[t._v(t._s(e.fact))])],1)}))],2)],1)],1)},f=[],p=r("5530"),d=r("2f62"),v={data:function(){return{}},computed:Object(p["a"])({},Object(d["b"])(["facts","errored","loading","error"])),created:function(){this.$store.dispatch("getFacts")}},g=v,_=r("2877"),b=r("6544"),m=r.n(b),h=r("0798"),y=r("b0af"),C=r("99d9"),A=r("a523"),O=r("132d"),T=r("490a"),E=r("71d9"),S=r("2a7f"),w=Object(_["a"])(g,l,f,!1,null,null,null),x=w.exports;m()(w,{VAlert:h["a"],VCard:y["a"],VCardText:C["a"],VContainer:A["a"],VIcon:O["a"],VProgressCircular:T["a"],VToolbar:E["a"],VToolbarTitle:S["a"]});var V={name:"App",components:{Content:x},data:function(){return{}}},j=V,P=r("7496"),R=r("40dc"),k=r("8336"),G=r("a75b"),N=r("adda"),D=r("2fa4"),I=Object(_["a"])(j,s,u,!1,null,null,null),F=I.exports;m()(I,{VApp:P["a"],VAppBar:R["a"],VBtn:k["a"],VContent:G["a"],VIcon:O["a"],VImg:N["a"],VSpacer:D["a"]});var H=r("f309");n["a"].use(H["a"]);var $=new H["a"]({});n["a"].use(d["a"]);var L=new d["a"].Store({state:{facts:null,errored:!1,error:{},loading:!0},getters:{FACTS:function(t){return t.facts}},mutations:{SET_FACTS:function(t,e){t.facts=e},ADD_FACT:function(t,e){t.facts.push(e)},CHANGE_LOADING_STATE:function(t,e){t.loading=e},CHANGE_ERRORED_STATE:function(t,e){t.errored=e},SAVE_ERROR:function(t,e){var r=e.error;t.error=r}},actions:{getFacts:function(t){var e=t.commit;o.a.get("https://catfact.ninja/facts?limit=1000").then((function(t){e("SET_FACTS",t.data.data),e("CHANGE_LOADING_STATE",!1)})).catch((function(t){console.log(t),e("CHANGE_ERRORED_STATE",!0),e("SAVE_ERROR",{error:t}),e("CHANGE_LOADING_STATE",!1)}))}}});n["a"].config.productionTip=!1,new n["a"]({vuetify:$,store:L,render:function(t){return t(F)}}).$mount("#app")},cf05:function(t,e,r){t.exports=r.p+"img/logo.53aa1c93.png"}});
//# sourceMappingURL=app.e04b19bc.js.map