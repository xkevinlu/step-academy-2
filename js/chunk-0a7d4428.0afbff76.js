(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a7d4428"],{"02f4":function(t,r,n){var o=n("4588"),e=n("be13");t.exports=function(t){return function(r,n){var i,a,s=String(e(r)),l=o(n),c=s.length;return l<0||l>=c?t?"":void 0:(i=s.charCodeAt(l),i<55296||i>56319||l+1===c||(a=s.charCodeAt(l+1))<56320||a>57343?t?s.charAt(l):i:t?s.slice(l,l+2):a-56320+(i-55296<<10)+65536)}}},"0390":function(t,r,n){"use strict";var o=n("02f4")(!0);t.exports=function(t,r,n){return r+(n?o(t,r).length:1)}},"0a49":function(t,r,n){var o=n("9b43"),e=n("626a"),i=n("4bf8"),a=n("9def"),s=n("cd1c");t.exports=function(t,r){var n=1==t,l=2==t,c=3==t,u=4==t,f=6==t,d=5==t||f,p=r||s;return function(r,s,v){for(var h,g,m=i(r),w=e(m),y=o(s,v,3),x=a(w.length),k=0,C=n?p(r,x):l?p(r,0):void 0;x>k;k++)if((d||k in w)&&(h=w[k],g=y(h,k,m),t))if(n)C[k]=g;else if(g)switch(t){case 3:return!0;case 5:return h;case 6:return k;case 2:C.push(h)}else if(u)return!1;return f?-1:c||u?u:C}}},"0aa9":function(t,r,n){"use strict";var o=n("6a2d"),e=n.n(o);e.a},"0bfb":function(t,r,n){"use strict";var o=n("cb7c");t.exports=function(){var t=o(this),r="";return t.global&&(r+="g"),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),t.unicode&&(r+="u"),t.sticky&&(r+="y"),r}},1169:function(t,r,n){var o=n("2d95");t.exports=Array.isArray||function(t){return"Array"==o(t)}},"214f":function(t,r,n){"use strict";n("b0c5");var o=n("2aba"),e=n("32e9"),i=n("79e5"),a=n("be13"),s=n("2b4c"),l=n("520a"),c=s("species"),u=!i(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,r=t.exec;t.exec=function(){return r.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,r,n){var d=s(t),p=!i(function(){var r={};return r[d]=function(){return 7},7!=""[t](r)}),v=p?!i(function(){var r=!1,n=/a/;return n.exec=function(){return r=!0,null},"split"===t&&(n.constructor={},n.constructor[c]=function(){return n}),n[d](""),!r}):void 0;if(!p||!v||"replace"===t&&!u||"split"===t&&!f){var h=/./[d],g=n(a,d,""[t],function(t,r,n,o,e){return r.exec===l?p&&!e?{done:!0,value:h.call(r,n,o)}:{done:!0,value:t.call(n,r,o)}:{done:!1}}),m=g[0],w=g[1];o(String.prototype,t,m),e(RegExp.prototype,d,2==r?function(t,r){return w.call(t,this,r)}:function(t){return w.call(t,this)})}}},"520a":function(t,r,n){"use strict";var o=n("0bfb"),e=RegExp.prototype.exec,i=String.prototype.replace,a=e,s="lastIndex",l=function(){var t=/a/,r=/b*/g;return e.call(t,"a"),e.call(r,"a"),0!==t[s]||0!==r[s]}(),c=void 0!==/()??/.exec("")[1],u=l||c;u&&(a=function(t){var r,n,a,u,f=this;return c&&(n=new RegExp("^"+f.source+"$(?!\\s)",o.call(f))),l&&(r=f[s]),a=e.call(f,t),l&&a&&(f[s]=f.global?a.index+a[0].length:r),c&&a&&a.length>1&&i.call(a[0],n,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(a[u]=void 0)}),a}),t.exports=a},"5f1b":function(t,r,n){"use strict";var o=n("23c6"),e=RegExp.prototype.exec;t.exports=function(t,r){var n=t.exec;if("function"===typeof n){var i=n.call(t,r);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==o(t))throw new TypeError("RegExp#exec called on incompatible receiver");return e.call(t,r)}},"6a2d":function(t,r,n){},7514:function(t,r,n){"use strict";var o=n("5ca1"),e=n("0a49")(5),i="find",a=!0;i in[]&&Array(1)[i](function(){a=!1}),o(o.P+o.F*a,"Array",{find:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(i)},a481:function(t,r,n){"use strict";var o=n("cb7c"),e=n("4bf8"),i=n("9def"),a=n("4588"),s=n("0390"),l=n("5f1b"),c=Math.max,u=Math.min,f=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,v=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,function(t,r,n,h){return[function(o,e){var i=t(this),a=void 0==o?void 0:o[r];return void 0!==a?a.call(o,i,e):n.call(String(i),o,e)},function(t,r){var e=h(n,t,this,r);if(e.done)return e.value;var f=o(t),d=String(this),p="function"===typeof r;p||(r=String(r));var m=f.global;if(m){var w=f.unicode;f.lastIndex=0}var y=[];while(1){var x=l(f,d);if(null===x)break;if(y.push(x),!m)break;var k=String(x[0]);""===k&&(f.lastIndex=s(d,i(f.lastIndex),w))}for(var C="",b=0,F=0;F<y.length;F++){x=y[F];for(var T=String(x[0]),S=c(u(a(x.index),d.length),0),H=[],L=1;L<x.length;L++)H.push(v(x[L]));var M=x.groups;if(p){var A=[T].concat(H,S,d);void 0!==M&&A.push(M);var O=String(r.apply(void 0,A))}else O=g(T,d,S,H,M,r);S>=b&&(C+=d.slice(b,S)+O,b=S+T.length)}return C+d.slice(b)}];function g(t,r,o,i,a,s){var l=o+t.length,c=i.length,u=p;return void 0!==a&&(a=e(a),u=d),n.call(s,u,function(n,e){var s;switch(e.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,o);case"'":return r.slice(l);case"<":s=a[e.slice(1,-1)];break;default:var u=+e;if(0===u)return n;if(u>c){var d=f(u/10);return 0===d?n:d<=c?void 0===i[d-1]?e.charAt(1):i[d-1]+e.charAt(1):n}s=i[u-1]}return void 0===s?"":s})}})},b0c5:function(t,r,n){"use strict";var o=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:o!==/./.exec},{exec:o})},cccf:function(t,r,n){"use strict";n.r(r);var o=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",[n("div",{staticClass:"top-controls"},[n("v-btn",{attrs:{icon:""},on:{click:function(r){t.rotation-=45}}},[n("v-icon",[t._v("rotate_left")])],1),n("v-btn",{attrs:{icon:""},on:{click:function(r){t.rotation+=45}}},[n("v-icon",[t._v("rotate_right")])],1),n("v-btn",{attrs:{icon:""},on:{click:function(r){t.zoom-=.1}}},[n("v-icon",[t._v("zoom_out")])],1),n("v-btn",{attrs:{icon:""},on:{click:function(r){t.zoom+=.1}}},[n("v-icon",[t._v("zoom_in")])],1),n("v-btn",{attrs:{icon:""},on:{click:t.setManOn}},[n("v-icon",{attrs:{color:t.lady?"":"blue"}},[t._v("fa-male")])],1),n("v-btn",{attrs:{icon:""},on:{click:t.setLadyOn}},[n("v-icon",{attrs:{color:t.man?"":"red"}},[t._v("fa-female")])],1),n("v-btn",{attrs:{icon:""},on:{click:t.setBothOn}},[n("v-icon",{attrs:{color:t.man&&t.lady?"purple":""}},[t._v("wc")])],1)],1),n("div",{staticClass:"player"},[n("div",{staticClass:"perspective",style:{transform:"rotate("+t.rotation+"deg) scale("+t.zoom+")"}},[n("div",{staticClass:"contents",style:{transform:"translate("+t.figure.offset[0]+"px,"+t.figure.offset[1]+"px)\n                      rotate("+t.figure.commenceFacing+"deg)"}},[n("div",{staticClass:"footarea ml",style:t.mlStyle},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.man,expression:"man"}],staticClass:"foot"},[n("svg",{attrs:{viewBox:"0 0 70 185",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("title",[t._v("ML")]),n("g",{attrs:{id:"ML",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[n("g",{class:t.mlhFootwork,attrs:{id:"MH",transform:"translate(11.000000, 127.000000)",fill:"#069FE6","fill-rule":"nonzero"}},[n("path",{attrs:{d:"M0,6.56572385 C0,6.56572385 0.125093888,14.4845192 1.47905126,26.8913712 C3.73809971,47.4240459 14.5403249,60.141439 31.3764905,57.701474 C51.3326448,54.8178791 55.7256478,40.5773564 53.4592409,20.0372879 C52.0905666,7.62304199 49.654915,0 49.654915,0 L0,6.56572385 Z",id:"Path"}})]),n("g",{class:t.mltFootwork,attrs:{id:"MT",fill:"#069FE6","fill-rule":"nonzero"}},[n("path",{attrs:{d:"M35.6263064,0.0344372048 C49.034781,-0.73455534 66.8329347,11.1920837 69.8150143,54.2919395 C71.1500572,73.5312624 64.9537167,88.5556356 61.0284003,101.004609 C59.4466646,106.010315 57.4948899,107.838486 53.3011138,106.83009 C41.8879479,104.06607 22.6168935,104.929373 10.3185361,107.845741 C6.90111644,108.658261 5.04366542,106.12639 4.48497897,103.405897 C-12.2393359,22.1175816 22.2250874,0.810684396 35.6263064,0.0344372048 Z",id:"Path"}})])])])])]),n("div",{staticClass:"footarea mr",style:t.mrStyle},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.man,expression:"man"}],staticClass:"foot"},[n("svg",{attrs:{viewBox:"0 0 70 185",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("g",{attrs:{id:"MR",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[n("g",{class:t.mrhFootwork,attrs:{id:"MH",transform:"translate(32.000000, 156.000000) scale(-1, 1) translate(-32.000000, -156.000000) translate(5.000000, 127.000000)",fill:"#069FE6","fill-rule":"nonzero"}},[n("path",{attrs:{d:"M0,6.56572385 C0,6.56572385 0.125093888,14.4845192 1.47905126,26.8913712 C3.73809971,47.4240459 14.5403249,60.141439 31.3764905,57.701474 C51.3326448,54.8178791 55.7256478,40.5773564 53.4592409,20.0372879 C52.0905666,7.62304199 49.654915,0 49.654915,0 L0,6.56572385 Z",id:"Path"}})]),n("g",{class:t.mrtFootwork,attrs:{id:"MT",transform:"translate(35.000000, 54.000000) scale(-1, 1) translate(-35.000000, -54.000000) ",fill:"#069FE6","fill-rule":"nonzero"}},[n("path",{attrs:{d:"M35.6263064,0.0344372048 C49.034781,-0.73455534 66.8329347,11.1920837 69.8150143,54.2919395 C71.1500572,73.5312624 64.9537167,88.5556356 61.0284003,101.004609 C59.4466646,106.010315 57.4948899,107.838486 53.3011138,106.83009 C41.8879479,104.06607 22.6168935,104.929373 10.3185361,107.845741 C6.90111644,108.658261 5.04366542,106.12639 4.48497897,103.405897 C-12.2393359,22.1175816 22.2250874,0.810684396 35.6263064,0.0344372048 Z",id:"Path"}})])])])])]),n("div",{staticClass:"footarea ll",style:t.llStyle},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.lady,expression:"lady"}],staticClass:"foot"},[n("svg",{attrs:{viewBox:"0 0 70 185",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("g",{attrs:{id:"LL",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[n("g",{class:t.llhFootwork,attrs:{id:"LH",transform:"translate(17.000000, 131.000000)",fill:"#FF51A6"}},[n("path",{attrs:{d:"M0,0 L34,0 L34,18 C34,35.3333333 28.3333333,44 17,44 C5.66666667,44 0,35.3333333 0,18 L0,0 Z",id:"Rectangle"}})]),n("g",{class:t.lltFootwork,attrs:{id:"LT",transform:"translate(5.000000, 0.000000)",fill:"#FF51A6"}},[n("path",{attrs:{d:"M32.8036627,103 C50.9206254,103 59.8184438,90.0697256 59.8184438,72.5830328 C59.8184438,67.2630812 62.6374008,0 37.1128909,0 C11.5883811,0 4.54747351e-13,67.9662947 4.54747351e-13,71.3375418 C4.54747351e-13,88.8242346 14.6867001,103 32.8036627,103 Z",id:"Oval"}})])])])])]),n("div",{staticClass:"footarea lr",style:t.lrStyle},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.lady,expression:"lady"}],staticClass:"foot"},[n("svg",{attrs:{viewBox:"0 0 70 185",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("g",{attrs:{id:"LR",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[n("g",{class:t.lrhFootwork,attrs:{id:"LH",transform:"translate(17.000000, 131.000000)",fill:"#FF51A6"}},[n("path",{attrs:{d:"M0,0 L34,0 L34,18 C34,35.3333333 28.3333333,44 17,44 C5.66666667,44 0,35.3333333 0,18 L0,0 Z",id:"Rectangle"}})]),n("g",{class:t.lrtFootwork,attrs:{id:"LT",transform:"translate(34.500000, 51.500000) scale(-1, 1) translate(-34.500000, -51.500000) translate(3.000000, 0.000000)",fill:"#FF51A6"}},[n("path",{attrs:{d:"M33.8791926,103 C52.5901541,103 61.7797042,90.0697256 61.7797042,72.5830328 C61.7797042,67.2630812 64.6910861,0 38.329707,0 C11.968328,0 4.54747351e-13,67.9662947 4.54747351e-13,71.3375418 C4.54747351e-13,88.8242346 15.1682312,103 33.8791926,103 Z",id:"Oval"}})])])])])])])])]),n("div",{staticClass:"controls"},[n("v-slider",{staticClass:"slider",attrs:{ticks:"",max:t.maxStep},model:{value:t.step,callback:function(r){t.step=r},expression:"step"}}),n("div",{staticClass:"instruction"},[n("h5",{staticClass:"headline"},[t._v(t._s(t.count)+". "+t._s(t.instruction))])]),n("div",{staticClass:"seek"},[n("v-btn",{attrs:{icon:""},on:{click:function(r){return t.$emit("prevFigure")}}},[n("i",{staticClass:"control fas fa-step-backward"})]),n("v-btn",{attrs:{icon:"",disabled:t.step<1},on:{click:function(r){t.step--}}},[n("i",{staticClass:"control fas fa-backward"})]),n("v-btn",{attrs:{icon:""}},[n("i",{staticClass:"fas large",class:{"fa-play":!t.isPlaying,"fa-pause":t.isPlaying},on:{click:function(r){return t.play()}}})]),n("v-btn",{attrs:{icon:"",disabled:t.step>=t.maxStep},on:{click:function(r){t.step++}}},[n("i",{staticClass:"control fas fa-forward"})]),n("v-btn",{attrs:{icon:""},on:{click:function(r){return t.$emit("nextFigure")}}},[n("i",{staticClass:"control fas fa-step-forward"})])],1)],1)])},e=[],i=(n("7514"),n("a481"),{name:"Player",data:function(){return{rotation:0,zoom:1,man:!0,lady:!0,step:0,isPlaying:!1,playTimer:null}},watch:{zoom:function(){this.zoom<.5?this.zoom=.5:this.zoom>1.5&&(this.zoom=1.5)},figure:function(){this.step=0}},methods:{wait:function(t){return new Promise(function(r){return setTimeout(r,t)})},play:function(){this.isPlaying=!this.isPlaying,this.step==this.maxStep?(this.step=0,this.playTimer=setInterval(this.next,1500)):this.isPlaying?(this.playTimer=setInterval(this.next,1500),this.next()):clearInterval(this.playTimer)},next:function(){this.step<this.maxStep?this.step++:(clearInterval(this.playTimer),this.isPlaying=!1)},setManOn:function(){this.man=!0,this.lady=!1},setLadyOn:function(){this.man=!1,this.lady=!0},setBothOn:function(){this.man=!0,this.lady=!0},figureName:function(t){return void 0==t?"Select a figure":t.replace(/-+/g," ")},updateFoot:function(t){return{x:void 0!=t.transX?t.transX:0,y:void 0!=t.transY?t.transY:0,rotation:void 0!=t.rotation?t.rotation:0,op:void 0!=t.opacity?t.opacity:1,origin:void 0!=t.transOrigin?t.transOrigin:"center 40px"}}},computed:{figure:function(){var t=this.$route.params.figure,r=t.replace(/-+/g," "),n=this.$parent.AllOneList.find(function(t){return t.title==r});return n},count:function(){return"undefined"!=typeof this.figure.steps[this.step].count?this.figure.steps[this.step].count:0},instruction:function(){return"undefined"!=typeof this.figure.steps?this.figure.steps[this.step].instructionBoth:"None"},maxStep:function(){return void 0!=this.figure.steps?this.figure.steps.length-1:10},mlStyle:function(){if(void 0!=this.figure.steps){var t=this.updateFoot(this.figure.steps[this.step].ml);return{transform:"translate(".concat(t.x,"px, ").concat(t.y,"px) rotate(").concat(t.rotation,"deg)"),opacity:t.op,transformOrigin:t.origin}}return null},mrStyle:function(){if(void 0!=this.figure.steps){var t=this.updateFoot(this.figure.steps[this.step].mr);return{transform:"translate(".concat(t.x,"px, ").concat(t.y,"px) rotate(").concat(t.rotation,"deg)"),opacity:t.op,transformOrigin:t.origin}}return null},llStyle:function(){if(void 0!=this.figure.steps){var t=this.updateFoot(this.figure.steps[this.step].ll);return{transform:"translate(".concat(t.x,"px, ").concat(t.y,"px) rotate(").concat(t.rotation,"deg)"),opacity:t.op,transformOrigin:t.origin}}return null},lrStyle:function(){if(void 0!=this.figure.steps){var t=this.updateFoot(this.figure.steps[this.step].lr);return{transform:"translate(".concat(t.x,"px, ").concat(t.y,"px) rotate(").concat(t.rotation,"deg)"),opacity:t.op,transformOrigin:t.origin}}return null},mlhFootwork:function(){var t=this.figure.steps[this.step];return{"man-on-no-delay":"HT"==t.ml.footwork,"man-on-delay":"TH"==t.ml.footwork}},mltFootwork:function(){var t=this.figure.steps[this.step];return{"man-on-delay":"HT"==t.ml.footwork,"man-on-no-delay":"TH"==t.ml.footwork||"T"==t.ml.footwork}},llhFootwork:function(){var t=this.figure.steps[this.step];return{"lady-on-no-delay":"HT"==t.ll.footwork,"lady-on-delay":"TH"==t.ll.footwork}},lltFootwork:function(){var t=this.figure.steps[this.step];return{"lady-on-delay":"HT"==t.ll.footwork,"lady-on-no-delay":"TH"==t.ll.footwork||"T"==t.ll.footwork}},mrhFootwork:function(){var t=this.figure.steps[this.step];return{"man-on-no-delay":"HT"==t.mr.footwork,"man-on-delay":"TH"==t.mr.footwork}},mrtFootwork:function(){var t=this.figure.steps[this.step];return{"man-on-delay":"HT"==t.mr.footwork,"man-on-no-delay":"TH"==t.mr.footwork||"T"==t.mr.footwork}},lrhFootwork:function(){var t=this.figure.steps[this.step];return{"lady-on-no-delay":"HT"==t.lr.footwork,"lady-on-delay":"TH"==t.lr.footwork}},lrtFootwork:function(){var t=this.figure.steps[this.step];return{"lady-on-delay":"HT"==t.lr.footwork,"lady-on-no-delay":"TH"==t.lr.footwork||"T"==t.lr.footwork}}}}),a=i,s=(n("0aa9"),n("2877")),l=Object(s["a"])(a,o,e,!1,null,"5b75ceb8",null);r["default"]=l.exports},cd1c:function(t,r,n){var o=n("e853");t.exports=function(t,r){return new(o(t))(r)}},e853:function(t,r,n){var o=n("d3f4"),e=n("1169"),i=n("2b4c")("species");t.exports=function(t){var r;return e(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!e(r.prototype)||(r=void 0),o(r)&&(r=r[i],null===r&&(r=void 0))),void 0===r?Array:r}}}]);
//# sourceMappingURL=chunk-0a7d4428.0afbff76.js.map