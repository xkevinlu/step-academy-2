(function(t){function e(e){for(var a,n,i=e[0],l=e[1],u=e[2],c=0,d=[];c<i.length;c++)n=i[c],o[n]&&d.push(o[n][0]),o[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,n=1;n<r.length;n++){var i=r[n];0!==o[i]&&(a=!1)}a&&(s.splice(e--,1),t=l(l.s=r[0]))}return t}var a={},n={app:0},o={app:0},s=[];function i(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-7b0f27ee":"36a71ac4","chunk-7a9a7c03":"a549385d"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(t){var e=[],r={"chunk-7b0f27ee":1};n[t]?e.push(n[t]):0!==n[t]&&r[t]&&e.push(n[t]=new Promise(function(e,r){for(var a="css/"+({}[t]||t)+"."+{"chunk-7b0f27ee":"96e92bbb","chunk-7a9a7c03":"31d6cfe0"}[t]+".css",o=l.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===a||c===o))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],c=u.getAttribute("data-href");if(c===a||c===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete n[t],f.parentNode.removeChild(f),r(s)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){n[t]=0}));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise(function(e,r){a=o[t]=[e,r]});e.push(a[2]=s);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=i(t),u=function(e){c.onerror=c.onload=null,clearTimeout(d);var r=o[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+a+": "+n+")");s.type=a,s.request=n,r[1](s)}o[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:c})},12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(r,a,function(e){return t[e]}.bind(null,a));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/step-academy-2/",l.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("64a9"),n=r.n(a);n.a},4345:function(t,e,r){"use strict";var a=r("9a7e"),n=r.n(a);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("v-app",[r("v-navigation-drawer",{attrs:{app:"",absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",{staticClass:"pa-1"},[r("v-list-tile",{attrs:{avatar:""}},[r("v-list-tile-avatar",[r("img",{attrs:{src:"https://randomuser.me/api/portraits/men/85.jpg"}})]),r("v-list-tile-content",[r("v-list-tile-title",[t._v("Step Academy")])],1)],1)],1),r("v-list",{staticClass:"pt-0",attrs:{dense:""}},[r("v-divider"),t._l(t.menuItems,function(e){return r("v-list-tile",{key:e.title,attrs:{to:e.route}},[r("v-list-tile-action",[r("v-icon",[t._v(t._s(e.icon))])],1),r("v-list-tile-content",[r("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)})],2)],1),r("v-toolbar",{attrs:{app:"",dark:"",color:"primary"}},[r("v-toolbar-side-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),r("v-toolbar-title",{staticClass:"white--text"},[t._v(t._s(t.subheaderText))]),r("v-spacer")],1),r("router-view")],1)],1)},o=[],s={name:"App",computed:{subheaderText:function(){switch(this.$route.params.dance){case"waltz":return"Slow Waltz";case"tango":return"Tango";case"vwaltz":return"Viennese Waltz";case"foxtrot":return"Slow Foxtrot";case"quickstep":return"Quickstep";default:return"Home"}}},data:function(){return{drawer:null,menuItems:[{title:"Home",route:"/"},{title:"Waltz",route:"/waltz/Natural-Turn"},{title:"Tango",route:"/tango/Left-Foot-Walk"},{title:"Viennese Waltz",route:"/vwaltz//Natural-Turn-(1-3)"},{title:"Foxtrot",route:"/foxtrot/Feather-Step"},{title:"Quickstep",route:"/quickstep/Quarter-Turn-To-Right"}]}}},i=s,l=(r("034f"),r("2877")),u=Object(l["a"])(i,n,o,!1,null,null,null),c=u.exports,d=r("ce5b"),f=r.n(d),p=(r("bf40"),r("8c4f")),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("v-layout",[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("div",{staticClass:"feet-container"},[a("div",{staticClass:"foot",attrs:{id:"ML"}},[a("svg",{attrs:{viewBox:"0 0 70 185",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("title",[t._v("ML")]),a("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[a("g",{attrs:{id:"MH",transform:"translate(11.000000, 127.000000)",fill:"#069FE6","fill-rule":"nonzero"}},[a("path",{attrs:{d:"M0,6.56572385 C0,6.56572385 0.125093888,14.4845192 1.47905126,26.8913712 C3.73809971,47.4240459 14.5403249,60.141439 31.3764905,57.701474 C51.3326448,54.8178791 55.7256478,40.5773564 53.4592409,20.0372879 C52.0905666,7.62304199 49.654915,0 49.654915,0 L0,6.56572385 Z",id:"Path"}})]),a("g",{attrs:{id:"MT",fill:"#069FE6","fill-rule":"nonzero"}},[a("path",{attrs:{d:"M35.6263064,0.0344372048 C49.034781,-0.73455534 66.8329347,11.1920837 69.8150143,54.2919395 C71.1500572,73.5312624 64.9537167,88.5556356 61.0284003,101.004609 C59.4466646,106.010315 57.4948899,107.838486 53.3011138,106.83009 C41.8879479,104.06607 22.6168935,104.929373 10.3185361,107.845741 C6.90111644,108.658261 5.04366542,106.12639 4.48497897,103.405897 C-12.2393359,22.1175816 22.2250874,0.810684396 35.6263064,0.0344372048 Z",id:"Path"}})])])])]),a("div",{staticClass:"foot",attrs:{id:"MR"}},[a("svg",{attrs:{viewBox:"0 0 70 185",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[a("g",{attrs:{id:"MH",transform:"translate(32.000000, 156.000000) scale(-1, 1) translate(-32.000000, -156.000000) translate(5.000000, 127.000000)",fill:"#069FE6","fill-rule":"nonzero"}},[a("path",{attrs:{d:"M0,6.56572385 C0,6.56572385 0.125093888,14.4845192 1.47905126,26.8913712 C3.73809971,47.4240459 14.5403249,60.141439 31.3764905,57.701474 C51.3326448,54.8178791 55.7256478,40.5773564 53.4592409,20.0372879 C52.0905666,7.62304199 49.654915,0 49.654915,0 L0,6.56572385 Z",id:"Path"}})]),a("g",{attrs:{id:"MT",transform:"translate(35.000000, 54.000000) scale(-1, 1) translate(-35.000000, -54.000000) ",fill:"#069FE6","fill-rule":"nonzero"}},[a("path",{attrs:{d:"M35.6263064,0.0344372048 C49.034781,-0.73455534 66.8329347,11.1920837 69.8150143,54.2919395 C71.1500572,73.5312624 64.9537167,88.5556356 61.0284003,101.004609 C59.4466646,106.010315 57.4948899,107.838486 53.3011138,106.83009 C41.8879479,104.06607 22.6168935,104.929373 10.3185361,107.845741 C6.90111644,108.658261 5.04366542,106.12639 4.48497897,103.405897 C-12.2393359,22.1175816 22.2250874,0.810684396 35.6263064,0.0344372048 Z",id:"Path"}})])])])]),a("div",{staticClass:"foot",attrs:{id:"LL"}},[a("svg",{attrs:{viewBox:"0 0 70 185",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[a("g",{attrs:{id:"LH",transform:"translate(17.000000, 131.000000)",fill:"#FF51A6"}},[a("path",{attrs:{d:"M0,0 L34,0 L34,18 C34,35.3333333 28.3333333,44 17,44 C5.66666667,44 0,35.3333333 0,18 L0,0 Z",id:"Rectangle"}})]),a("g",{attrs:{id:"LT",transform:"translate(5.000000, 0.000000)",fill:"#FF51A6"}},[a("path",{attrs:{d:"M32.8036627,103 C50.9206254,103 59.8184438,90.0697256 59.8184438,72.5830328 C59.8184438,67.2630812 62.6374008,0 37.1128909,0 C11.5883811,0 4.54747351e-13,67.9662947 4.54747351e-13,71.3375418 C4.54747351e-13,88.8242346 14.6867001,103 32.8036627,103 Z",id:"Oval"}})])])])]),a("div",{staticClass:"foot",attrs:{id:"LR"}},[a("svg",{attrs:{viewBox:"0 0 70 185",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[a("g",{attrs:{id:"LH",transform:"translate(17.000000, 131.000000)",fill:"#FF51A6"}},[a("path",{attrs:{d:"M0,0 L34,0 L34,18 C34,35.3333333 28.3333333,44 17,44 C5.66666667,44 0,35.3333333 0,18 L0,0 Z",id:"Rectangle"}})]),a("g",{attrs:{id:"LT",transform:"translate(34.500000, 51.500000) scale(-1, 1) translate(-34.500000, -51.500000) translate(3.000000, 0.000000)",fill:"#FF51A6"}},[a("path",{attrs:{d:"M33.8791926,103 C52.5901541,103 61.7797042,90.0697256 61.7797042,72.5830328 C61.7797042,67.2630812 64.6910861,0 38.329707,0 C11.968328,0 4.54747351e-13,67.9662947 4.54747351e-13,71.3375418 C4.54747351e-13,88.8242346 15.1682312,103 33.8791926,103 Z",id:"Oval"}})])])])])]),a("h1",[t._v("Step Academy")]),a("h4",[t._v("Ballroom dancing steps visualized")]),t._l(t.dances,function(e){return a("v-card",[a("v-img",{attrs:{src:r("8389"),"aspect-ratio":"2.75"}}),a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"headline mb-0"},[t._v(t._s(e.name))]),a("div",[t._v(" "+t._s(e.desc)+" ")])])]),a("v-card-actions",[a("v-btn",{attrs:{flat:"",color:"orange",to:e.route}},[t._v("View Figures")])],1)],1)})],2)],1)],1)},m=[],h={name:"home",data:function(){return{dances:[{name:"Waltz",desc:"",imgsrc:"./../assets/WaltzImg.jpg",route:"/waltz/Natural-Turn"},{name:"Tango",desc:"",imgsrc:"TangoImg.gif",route:"/tango/Left-Foot-Walk"},{name:"Viennese Waltz",desc:"",imgsrc:"VwaltzImg.jpg",route:"/vwaltz//Natural-Turn-(1-3)"},{name:"Foxtrot",desc:"",imgsrc:"",route:'"/foxtrot/Feather-Step'},{name:"Quickstep",desc:"",imgsrc:"",route:"/quickstep/Quarter-Turn-To-Right"}]}}},g=h,w=(r("4345"),Object(l["a"])(g,v,m,!1,null,"c2081d8a",null)),C=w.exports;a["default"].use(p["a"]);var b=new p["a"]({routes:[{path:"/",name:"home",component:C},{path:"/:dance",name:"waltz",component:function(){return Promise.all([r.e("chunk-7b0f27ee"),r.e("chunk-7a9a7c03")]).then(r.bind(null,"3d89"))},children:[{path:"/:dance/:figure",name:"waltz-figures",component:function(){return r.e("chunk-7b0f27ee").then(r.bind(null,"cccf"))}}]}]});a["default"].use(f.a),a["default"].use(f.a,{iconfont:"fa"}),a["default"].config.productionTip=!1,new a["default"]({router:b,render:function(t){return t(c)}}).$mount("#app")},"64a9":function(t,e,r){},8389:function(t,e,r){t.exports=r.p+"img/WaltzImg.7014b0a8.jpg"},"9a7e":function(t,e,r){}});
//# sourceMappingURL=app.743cc9d8.js.map