(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4cfb44e0"],{"02f4":function(e,t,r){var n=r("4588"),i=r("be13");e.exports=function(e){return function(t,r){var l,o,a=String(i(t)),c=n(r),u=a.length;return c<0||c>=u?e?"":void 0:(l=a.charCodeAt(c),l<55296||l>56319||c+1===u||(o=a.charCodeAt(c+1))<56320||o>57343?e?a.charAt(c):l:e?a.slice(c,c+2):o-56320+(l-55296<<10)+65536)}}},"0390":function(e,t,r){"use strict";var n=r("02f4")(!0);e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},"0bfb":function(e,t,r){"use strict";var n=r("cb7c");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"214f":function(e,t,r){"use strict";r("b0c5");var n=r("2aba"),i=r("32e9"),l=r("79e5"),o=r("be13"),a=r("2b4c"),c=r("520a"),u=a("species"),s=!l(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),v=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();e.exports=function(e,t,r){var f=a(e),p=!l(function(){var t={};return t[f]=function(){return 7},7!=""[e](t)}),d=p?!l(function(){var t=!1,r=/a/;return r.exec=function(){return t=!0,null},"split"===e&&(r.constructor={},r.constructor[u]=function(){return r}),r[f](""),!t}):void 0;if(!p||!d||"replace"===e&&!s||"split"===e&&!v){var h=/./[f],g=r(o,f,""[e],function(e,t,r,n,i){return t.exec===c?p&&!i?{done:!0,value:h.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),b=g[0],x=g[1];n(String.prototype,e,b),i(RegExp.prototype,f,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}}},"4fd0":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h4",[e._v("Slow Foxtrot")]),r("router-view"),r("SyllabusList",{attrs:{All:e.All}})],1)},i=[],l=r("dd5e"),o={name:"App",components:{SyllabusList:l["a"]},data:function(){return{drawer:null,Newcomer:[{title:"Feather Step"},{title:"Three Step"},{title:"Natural Turn"},{title:"Reverse Turn & Feather Finish"},{title:"Closed Impetus & Feather Finish"}],Bronze:[{title:"Natural Weave"},{title:"Change of Direction"},{title:"Basic Weave"}],Silver:[{title:"Closed Telemark"},{title:"Open Telemark"},{title:"Feather Ending"},{title:"Top Spin"},{title:"Hover Feather"},{title:"Hover Telemark"},{title:"Natural Telemark"},{title:"Hover Cross"},{title:"Open Natural Turn"},{title:"Outside Swivel"},{title:"Open Impetus"},{title:"Weave from Promenade Position"},{title:"Reverse Wave"}],Gold:[{title:"Natural Twist Turn"},{title:"Curved Feather"},{title:"Back Feather"},{title:"Natural Zig Zag from Promenade Position"},{title:"Fallaway Reverse & Slip Pivot"},{title:"Natural Hover Telemark"},{title:"Bounce Fallaway with Weave Ending"}]}},computed:{All:function(){return[{title:"Newcomer",figures:this.Newcomer},{title:"Bronze",figures:this.Bronze},{title:"Silver",figures:this.Silver},{title:"Gold",figures:this.Gold}]},AllOneList:function(){return this.Newcomer.concat(this.Bronze).concat(this.Silver).concat(this.Gold)}}},a=o,c=r("2877"),u=Object(c["a"])(a,n,i,!1,null,null,null);t["default"]=u.exports},"520a":function(e,t,r){"use strict";var n=r("0bfb"),i=RegExp.prototype.exec,l=String.prototype.replace,o=i,a="lastIndex",c=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e[a]||0!==t[a]}(),u=void 0!==/()??/.exec("")[1],s=c||u;s&&(o=function(e){var t,r,o,s,v=this;return u&&(r=new RegExp("^"+v.source+"$(?!\\s)",n.call(v))),c&&(t=v[a]),o=i.call(v,e),c&&o&&(v[a]=v.global?o.index+o[0].length:t),u&&o&&o.length>1&&l.call(o[0],r,function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(o[s]=void 0)}),o}),e.exports=o},"5f1b":function(e,t,r){"use strict";var n=r("23c6"),i=RegExp.prototype.exec;e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var l=r.call(e,t);if("object"!==typeof l)throw new TypeError("RegExp exec method returned something other than an Object or null");return l}if("RegExp"!==n(e))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},a481:function(e,t,r){"use strict";var n=r("cb7c"),i=r("4bf8"),l=r("9def"),o=r("4588"),a=r("0390"),c=r("5f1b"),u=Math.max,s=Math.min,v=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,d=function(e){return void 0===e?e:String(e)};r("214f")("replace",2,function(e,t,r,h){return[function(n,i){var l=e(this),o=void 0==n?void 0:n[t];return void 0!==o?o.call(n,l,i):r.call(String(l),n,i)},function(e,t){var i=h(r,e,this,t);if(i.done)return i.value;var v=n(e),f=String(this),p="function"===typeof t;p||(t=String(t));var b=v.global;if(b){var x=v.unicode;v.lastIndex=0}var m=[];while(1){var w=c(v,f);if(null===w)break;if(m.push(w),!b)break;var y=String(w[0]);""===y&&(v.lastIndex=a(f,l(v.lastIndex),x))}for(var S="",k=0,_=0;_<m.length;_++){w=m[_];for(var A=String(w[0]),E=u(s(o(w.index),f.length),0),T=[],R=1;R<w.length;R++)T.push(d(w[R]));var F=w.groups;if(p){var N=[A].concat(T,E,f);void 0!==F&&N.push(F);var $=String(t.apply(void 0,N))}else $=g(A,f,E,T,F,t);E>=k&&(S+=f.slice(k,E)+$,k=E+A.length)}return S+f.slice(k)}];function g(e,t,n,l,o,a){var c=n+e.length,u=l.length,s=p;return void 0!==o&&(o=i(o),s=f),r.call(a,s,function(r,i){var a;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(c);case"<":a=o[i.slice(1,-1)];break;default:var s=+i;if(0===s)return r;if(s>u){var f=v(s/10);return 0===f?r:f<=u?void 0===l[f-1]?i.charAt(1):l[f-1]+i.charAt(1):r}a=l[s-1]}return void 0===a?"":a})}})},b0c5:function(e,t,r){"use strict";var n=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},dd5e:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-list",e._l(e.All,function(t){return r("v-list-group",{key:t.title,attrs:{"no-action":""},scopedSlots:e._u([{key:"activator",fn:function(){return[r("v-list-tile",[r("v-list-tile-content",[r("v-list-tile-title",[e._v(e._s(t.title))])],1)],1)]},proxy:!0}],null,!0),model:{value:t.active,callback:function(r){e.$set(t,"active",r)},expression:"item.active"}},[r("v-icon",{attrs:{slot:"prependIcon",medium:"",color:e.levelColor(t)},slot:"prependIcon"},[e._v("star")]),e._l(t.figures,function(t){return r("v-list-tile",{key:t.title,attrs:{to:e.figureRoute(t.title)},on:{click:function(t){return e.$emit("figurePicked")}}},[r("v-list-tile-content",[r("v-list-tile-title",[e._v(e._s(t.title))])],1),r("v-list-tile-action",[r("v-icon",[e._v(e._s(t.action))])],1)],1)})],2)}),1)},i=[],l=(r("a481"),{name:"SyllabusList",props:{All:Array},methods:{levelColor:function(e){switch(e.title){case"Newcomer":return"green lighten-2";case"Bronze":return"brown";case"Silver":return"blue-grey lighten-3";case"Gold":return"yellow darken-3"}},figureRoute:function(e){return"".concat(e.replace(/\s+/g,"-"))}}}),o=l,a=r("2877"),c=Object(a["a"])(o,n,i,!1,null,null,null);t["a"]=c.exports}}]);
//# sourceMappingURL=chunk-4cfb44e0.e5da49f3.js.map