(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-418576d8"],{"02f4":function(t,n,o){var r=o("4588"),e=o("be13");t.exports=function(t){return function(n,o){var i,a,c=String(e(n)),s=r(o),l=c.length;return s<0||s>=l?t?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===l||(a=c.charCodeAt(s+1))<56320||a>57343?t?c.charAt(s):i:t?c.slice(s,s+2):a-56320+(i-55296<<10)+65536)}}},"0390":function(t,n,o){"use strict";var r=o("02f4")(!0);t.exports=function(t,n,o){return n+(o?r(t,n).length:1)}},"0a49":function(t,n,o){var r=o("9b43"),e=o("626a"),i=o("4bf8"),a=o("9def"),c=o("cd1c");t.exports=function(t,n){var o=1==t,s=2==t,l=3==t,u=4==t,F=6==t,v=5==t||F,f=n||c;return function(n,c,d){for(var p,g,m=i(n),y=e(m),h=r(c,d,3),L=a(y.length),B=0,x=o?f(n,L):s?f(n,0):void 0;L>B;B++)if((v||B in y)&&(p=y[B],g=h(p,B,m),t))if(o)x[B]=g;else if(g)switch(t){case 3:return!0;case 5:return p;case 6:return B;case 2:x.push(p)}else if(u)return!1;return F?-1:l||u?u:x}}},"0bfb":function(t,n,o){"use strict";var r=o("cb7c");t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},1169:function(t,n,o){var r=o("2d95");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"214f":function(t,n,o){"use strict";o("b0c5");var r=o("2aba"),e=o("32e9"),i=o("79e5"),a=o("be13"),c=o("2b4c"),s=o("520a"),l=c("species"),u=!i(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),F=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var o="ab".split(t);return 2===o.length&&"a"===o[0]&&"b"===o[1]}();t.exports=function(t,n,o){var v=c(t),f=!i(function(){var n={};return n[v]=function(){return 7},7!=""[t](n)}),d=f?!i(function(){var n=!1,o=/a/;return o.exec=function(){return n=!0,null},"split"===t&&(o.constructor={},o.constructor[l]=function(){return o}),o[v](""),!n}):void 0;if(!f||!d||"replace"===t&&!u||"split"===t&&!F){var p=/./[v],g=o(a,v,""[t],function(t,n,o,r,e){return n.exec===s?f&&!e?{done:!0,value:p.call(n,o,r)}:{done:!0,value:t.call(o,n,r)}:{done:!1}}),m=g[0],y=g[1];r(String.prototype,t,m),e(RegExp.prototype,v,2==n?function(t,n){return y.call(t,this,n)}:function(t){return y.call(t,this)})}}},"520a":function(t,n,o){"use strict";var r=o("0bfb"),e=RegExp.prototype.exec,i=String.prototype.replace,a=e,c="lastIndex",s=function(){var t=/a/,n=/b*/g;return e.call(t,"a"),e.call(n,"a"),0!==t[c]||0!==n[c]}(),l=void 0!==/()??/.exec("")[1],u=s||l;u&&(a=function(t){var n,o,a,u,F=this;return l&&(o=new RegExp("^"+F.source+"$(?!\\s)",r.call(F))),s&&(n=F[c]),a=e.call(F,t),s&&a&&(F[c]=F.global?a.index+a[0].length:n),l&&a&&a.length>1&&i.call(a[0],o,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(a[u]=void 0)}),a}),t.exports=a},"5f1b":function(t,n,o){"use strict";var r=o("23c6"),e=RegExp.prototype.exec;t.exports=function(t,n){var o=t.exec;if("function"===typeof o){var i=o.call(t,n);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return e.call(t,n)}},7514:function(t,n,o){"use strict";var r=o("5ca1"),e=o("0a49")(5),i="find",a=!0;i in[]&&Array(1)[i](function(){a=!1}),r(r.P+r.F*a,"Array",{find:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}}),o("9c6c")(i)},a481:function(t,n,o){"use strict";var r=o("cb7c"),e=o("4bf8"),i=o("9def"),a=o("4588"),c=o("0390"),s=o("5f1b"),l=Math.max,u=Math.min,F=Math.floor,v=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g,d=function(t){return void 0===t?t:String(t)};o("214f")("replace",2,function(t,n,o,p){return[function(r,e){var i=t(this),a=void 0==r?void 0:r[n];return void 0!==a?a.call(r,i,e):o.call(String(i),r,e)},function(t,n){var e=p(o,t,this,n);if(e.done)return e.value;var F=r(t),v=String(this),f="function"===typeof n;f||(n=String(n));var m=F.global;if(m){var y=F.unicode;F.lastIndex=0}var h=[];while(1){var L=s(F,v);if(null===L)break;if(h.push(L),!m)break;var B=String(L[0]);""===B&&(F.lastIndex=c(v,i(F.lastIndex),y))}for(var x="",X=0,Y=0;Y<h.length;Y++){L=h[Y];for(var b=String(L[0]),w=l(u(a(L.index),v.length),0),k=[],R=1;R<L.length;R++)k.push(d(L[R]));var P=L.groups;if(f){var T=[b].concat(k,w,v);void 0!==P&&T.push(P);var S=String(n.apply(void 0,T))}else S=g(b,v,w,k,P,n);w>=X&&(x+=v.slice(X,w)+S,X=w+b.length)}return x+v.slice(X)}];function g(t,n,r,i,a,c){var s=r+t.length,l=i.length,u=f;return void 0!==a&&(a=e(a),u=v),o.call(c,u,function(o,e){var c;switch(e.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(s);case"<":c=a[e.slice(1,-1)];break;default:var u=+e;if(0===u)return o;if(u>l){var v=F(u/10);return 0===v?o:v<=l?void 0===i[v-1]?e.charAt(1):i[v-1]+e.charAt(1):o}c=i[u-1]}return void 0===c?"":c})}})},b0c5:function(t,n,o){"use strict";var r=o("520a");o("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},c2a9:function(t,n,o){"use strict";o.r(n);var r=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("h4",[t._v("Waltz")]),o("a",[o("h1",{on:{click:function(n){t.selectDance=!0}}},[t._v(t._s(t.headerText))])]),o("router-view",{on:{nextFigure:function(n){t.selectNext=!0},prevFigure:function(n){t.selectPrev=!0}}}),o("v-dialog",{attrs:{scrollable:"",fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.selectDance,callback:function(n){t.selectDance=n},expression:"selectDance"}},[o("v-card",[o("v-toolbar",{attrs:{dark:"",color:"primary"}},[o("v-btn",{attrs:{icon:"",dark:""},on:{click:function(n){t.selectDance=!1}}},[o("v-icon",[t._v("close")])],1),o("v-toolbar-title",[t._v("Select a Figure:")])],1),o("v-divider"),o("v-card-text",{staticStyle:{height:"100%"}},[o("SyllabusList",{attrs:{All:t.All},on:{figurePicked:function(n){t.selectDance=!1}}})],1),o("v-divider")],1)],1),o("v-dialog",{attrs:{scrollable:"","max-width":"300px"},model:{value:t.selectPrev,callback:function(n){t.selectPrev=n},expression:"selectPrev"}},[o("v-card",[o("v-card-title",[t._v("Select Preceding Figure:")]),o("v-divider"),o("v-card-text",{staticStyle:{"max-height":"400px"}},[o("v-radio-group",{attrs:{column:""},model:{value:t.targetPrev,callback:function(n){t.targetPrev=n},expression:"targetPrev"}},t._l(t.precedingFigures,function(t){return o("v-radio",{attrs:{label:t.title,value:t.title}})}),1)],1),o("v-divider"),o("v-card-actions",[o("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(n){t.selectPrev=!1}}},[t._v("Close")]),o("v-btn",{attrs:{color:"blue darken-1",flat:"",to:t.getRoute(t.targetPrev)},on:{click:function(n){t.selectPrev=!1}}},[t._v("Go")])],1)],1)],1),o("v-dialog",{attrs:{scrollable:"","max-width":"300px"},model:{value:t.selectNext,callback:function(n){t.selectNext=n},expression:"selectNext"}},[o("v-card",[o("v-card-title",[t._v("Select Following Figure:")]),o("v-divider"),o("v-card-text",{staticStyle:{"max-height":"400px"}},[o("v-radio-group",{attrs:{column:""},model:{value:t.targetNext,callback:function(n){t.targetNext=n},expression:"targetNext"}},t._l(t.followingFigures,function(t){return o("v-radio",{attrs:{label:t.title,value:t.title}})}),1)],1),o("v-divider"),o("v-card-actions",[o("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(n){t.selectNext=!1}}},[t._v("Close")]),o("v-btn",{attrs:{color:"blue darken-1",flat:"",to:t.getRoute(t.targetNext)},on:{click:function(n){t.selectNext=!1}}},[t._v("Go")])],1)],1)],1)],1)},e=[],i=(o("7514"),o("a481"),o("dd5e")),a={name:"App",components:{SyllabusList:i["a"]},computed:{headerText:function(){return void 0==this.figure?"Select a Figure":this.figure},figureId:function(){return this.$route.params.figure},figure:function(){return void 0!=this.figureId?this.$route.params.figure.replace(/-+/g," "):void 0},precedingFigures:function(){var t=this;if(void 0!=this.figureId){var n=this.AllOneList.find(function(n){return n.title==t.figure});return this.AllOneList.filter(function(t){return t.endFoot==n.startFoot})}},followingFigures:function(){var t=this;if(void 0!=this.figureId){var n=this.AllOneList.find(function(n){return n.title==t.figure});return this.AllOneList.filter(function(t){return t.startFoot==n.endFoot})}},All:function(){return[{title:"Newcomer",figures:this.waltzNewcomer},{title:"Bronze",figures:this.waltzBronze},{title:"Silver",figures:this.waltzSilver},{title:"Gold",figures:this.waltzGold}]},AllOneList:function(){return this.waltzNewcomer.concat(this.waltzBronze).concat(this.waltzSilver).concat(this.waltzGold)}},methods:{getRoute:function(t){return t.replace(/\s+/g,"-")}},data:function(){return{selectDance:!1,selectNext:!1,selectPrev:!1,targetNew:" ",targetNext:" ",targetPrev:" ",waltzNewcomer:[{title:"RF Closed Change",commenceFacing:0,offset:[0,0],startFoot:"RFF",endFoot:"LFF",steps:[{count:0,instructionBoth:"Prepare to move DW",instructionMan:"Begin on LF",instructionLady:"Begin on RF",ml:{transX:0,transY:0,rotation:0,opacity:1},mr:{transX:0,transY:0,rotation:0,opacity:.2},ll:{transX:0,transY:0,rotation:180,opacity:.2},lr:{transX:0,transY:0,rotation:180,opacity:1}},{count:1,instructionBoth:"Moving DW",instructionMan:"RF forward (HT)",instructionLady:"LF back (TH)",ml:{transX:0,transY:0,rotation:0,opacity:.2},mr:{transX:0,transY:-80,rotation:0,opacity:1,footwork:"HT"},ll:{transX:0,transY:-80,rotation:180,opacity:1,footwork:"TH"},lr:{transX:0,transY:0,rotation:180,opacity:.2}},{count:1.5,instructionBoth:"Moving DW",instructionMan:"RF forward (HT)",instructionLady:"LF back (TH)",ml:{transX:0,transY:-80,rotation:0,opacity:.2},mr:{transX:0,transY:-80,rotation:0,opacity:1},ll:{transX:0,transY:-80,rotation:180,opacity:1},lr:{transX:0,transY:-80,rotation:180,opacity:.2}},{count:2,instructionBoth:"Moving DW",instructionMan:"RF forward (HT)",instructionLady:"LF back (TH)",ml:{transX:-80,transY:-80,rotation:0,opacity:1,footwork:"T"},mr:{transX:0,transY:-80,rotation:0,opacity:.2},ll:{transX:0,transY:-80,rotation:180,opacity:.2},lr:{transX:-80,transY:-80,rotation:180,opacity:1,footwork:"T"}},{count:3,instructionBoth:"Moving DW",instructionMan:"RF forward (HT)",instructionLady:"LF back (TH)",ml:{transX:-80,transY:-80,rotation:0,opacity:.2},mr:{transX:-80,transY:-80,rotation:0,opacity:1,footwork:"T"},ll:{transX:-80,transY:-80,rotation:180,opacity:1,footwork:"T"},lr:{transX:-80,transY:-80,rotation:180,opacity:.2}}]},{title:"LF Closed Change",offset:[-80,-80],commenceFacing:0,startFoot:"LFF",endFoot:"RFF",steps:[{count:0,instructionBoth:"Prepare to move DW",instructionMan:"Begin on RF",instructionLady:"Begin on LF",ml:{transX:0,transY:0,rotation:0,opacity:.2},mr:{transX:0,transY:0,rotation:0,opacity:1},ll:{transX:0,transY:0,rotation:180,opacity:1},lr:{transX:0,transY:0,rotation:180,opacity:.2}},{count:1,instructionBoth:"Moving DC",instructionMan:"LF Fwd",instructionLady:"RF Fwd",ml:{transX:0,transY:-80,rotation:0,opacity:1,footwork:"HT"},mr:{transX:0,transY:0,rotation:0,opacity:.2},ll:{transX:0,transY:0,rotation:180,opacity:.2},lr:{transX:0,transY:-80,rotation:180,opacity:1,footwork:"TH"}},{count:1.5,instructionBoth:"Prepare to move DW",instructionMan:"Begin on RF",instructionLady:"Begin on LF",ml:{transX:0,transY:-80,rotation:0,opacity:1},mr:{transX:0,transY:-80,rotation:0,opacity:.2},ll:{transX:0,transY:-80,rotation:180,opacity:.2},lr:{transX:0,transY:-80,rotation:180,opacity:1}},{count:2,instructionBoth:"Prepare to move DW",instructionMan:"Begin on RF",instructionLady:"Begin on LF",ml:{transX:0,transY:-80,rotation:0,opacity:.2},mr:{transX:80,transY:-80,rotation:0,opacity:1,footwork:"T"},ll:{transX:80,transY:-80,rotation:180,opacity:1,footwork:"T"},lr:{transX:0,transY:-80,rotation:180,opacity:.2}},{count:3,instructionBoth:"Prepare to move DW",instructionMan:"Begin on RF",instructionLady:"Begin on LF",ml:{transX:80,transY:-80,rotation:0,opacity:1,footwork:"T"},mr:{transX:80,transY:-80,rotation:0,opacity:.2},ll:{transX:80,transY:-80,rotation:180,opacity:.2},lr:{transX:80,transY:-80,rotation:180,opacity:1,footwork:"T"}}]},{title:"Natural Turn",offset:[-80,-80],commenceFacing:135,startFoot:"RFF",endFoot:"LFB",steps:[{count:0,instructionBoth:"Prepare to move DW",instructionMan:"Begin on LF",instructionLady:"Begin on RF",ml:{transX:0,transY:0,rotation:0,opacity:1},mr:{transX:0,transY:0,rotation:0,opacity:.2},ll:{transX:0,transY:0,rotation:180,opacity:.2},lr:{transX:0,transY:0,rotation:180,opacity:1}},{count:1,instructionBoth:"Moving DW",instructionMan:"Begin on LF",instructionLady:"Begin on RF",ml:{transX:0,transY:0,rotation:0,opacity:.2},mr:{transX:10,transY:-80,rotation:0,opacity:1,footwork:"HT"},ll:{transX:20,transY:-50,rotation:180,opacity:1,footwork:"TH"},lr:{transX:0,transY:0,rotation:180,opacity:.2}},{count:2,instructionBoth:"Moving DW",instructionMan:"Begin on LF",instructionLady:"Begin on RF",ml:{transX:45,transY:-180,rotation:90,opacity:1,footwork:"T"},mr:{transX:10,transY:-80,rotation:90,opacity:.2},ll:{transX:20,transY:-50,rotation:180,opacity:.2},lr:{transX:35,transY:-145,rotation:315,opacity:1,footwork:"T"}},{count:3,instructionBoth:"Moving DW",instructionMan:"Begin on LF",instructionLady:"Begin on RF",ml:{transX:45,transY:-180,rotation:135,opacity:.2},mr:{transX:5,transY:-170,rotation:135,opacity:1,footwork:"T"},ll:{transX:-5,transY:-135,rotation:315,opacity:1,footwork:"T"},lr:{transX:35,transY:-145,rotation:315,opacity:.2}}]},{title:"Reverse Turn",offset:[0,0],commenceFacing:45,startFoot:"LFF",endFoot:"RFB",steps:[{count:0,instructionBoth:"Prepare to move DW",instructionMan:"Begin on LF",instructionLady:"Begin on RF",ml:{transX:0,transY:0,rotation:0,opacity:1},mr:{transX:0,transY:0,rotation:0,opacity:.2},ll:{transX:0,transY:0,rotation:180,opacity:.2},lr:{transX:0,transY:0,rotation:180,opacity:1}}]},{title:"Spin Turn",offset:[0,0],commenceFacing:-90,startFoot:"LFB",endFoot:"LFB",steps:[{count:0,instructionBoth:"Prepare to move DW",instructionMan:"Begin on LF",instructionLady:"Begin on RF",ml:{transX:0,transY:0,rotation:0,opacity:1},mr:{transX:0,transY:0,rotation:0,opacity:.2},ll:{transX:0,transY:0,rotation:180,opacity:.2},lr:{transX:0,transY:0,rotation:180,opacity:1}}]},{title:"Whisk",commenceFacing:135,offset:[0,0],startFoot:"LFF",endFoot:"PP",steps:[{count:0,instructionBoth:"Prepare to move DW",instructionMan:"Begin on LF",instructionLady:"Begin on RF",ml:{transX:0,transY:0,rotation:0,opacity:1},mr:{transX:0,transY:0,rotation:0,opacity:.2},ll:{transX:0,transY:0,rotation:180,opacity:.2},lr:{transX:0,transY:0,rotation:180,opacity:1}}]},{title:"Chasse from Promenade Position",offset:[0,0],commenceFacing:135,startFoot:"PP",endFoot:"RFF",steps:[{count:0,instructionBoth:"Prepare to move DW",instructionMan:"Begin on LF",instructionLady:"Begin on RF",ml:{transX:0,transY:0,rotation:0,opacity:1},mr:{transX:0,transY:0,rotation:0,opacity:.2},ll:{transX:0,transY:0,rotation:180,opacity:.2},lr:{transX:0,transY:0,rotation:180,opacity:1}}]}],waltzBronze:[{title:"Closed Impetus",commenceFacing:-90,startFoot:"LFB",endFoot:"LFB"},{title:"Hesitation Change",commenceFacing:-90,startFoot:"LFB",endFoot:"LFF"},{title:"Outside Change",commenceFacing:-90,startFoot:"LFB",endFoot:"RFF"},{title:"Reverse Corte",commenceFacing:-90,startFoot:"RFB",endFoot:"LFB"},{title:"Back Whisk",commenceFacing:0,startFoot:"LFB",endFoot:"PP"},{title:"Basic Weave",commenceFacing:0,startFoot:"RFB",endFoot:"RFF"},{title:"Double Reverse Spin",commenceFacing:0,startFoot:"LFF",endFoot:"LFF"},{title:"Reverse Pivot",commenceFacing:0,startFoot:"RFB",endFoot:"LFF"},{title:"Back Lock",commenceFacing:0,startFoot:"LFB",endFoot:"LFB"},{title:"Progressive Chasse to Right",commenceFacing:45,startFoot:"LFF",endFoot:"LFB"}],waltzSilver:[{title:"Weave from Promenade Position",commenceFacing:0,startFoot:"PP",endFoot:"RFF"},{title:"Closed Telemark",commenceFacing:0,startFoot:"LFF",endFoot:"RFF"},{title:"Open Telemark",commenceFacing:0,startFoot:"LFF",endFoot:"PP"},{title:"Open Impetus",commenceFacing:0,startFoot:"LFB",endFoot:"PP"},{title:"Cross Hesitation",commenceFacing:0,startFoot:"RFF",endFoot:"LFF"},{title:"Wing",commenceFacing:0,startFoot:"RFF",endFoot:"LFF"},{title:"Outside Spin",commenceFacing:0,startFoot:"LFB",endFoot:"RFF"},{title:"Turning Lock to L",commenceFacing:0,startFoot:"RFB",endFoot:"RFF"},{title:"Drag Hesitation",commenceFacing:0,startFoot:"LFF",endFoot:"LFB"}],waltzGold:[{title:"Left Whisk",commenceFacing:0,startFoot:"RFB",endFoot:"LFB"},{title:"Contra Check",commenceFacing:0,startFoot:"LFF",endFoot:"PP"},{title:"Closed Wing",commenceFacing:0,startFoot:"RFF",endFoot:"LFF"},{title:"Turning Lock to Right",commenceFacing:0,startFoot:"RFB",endFoot:"PP"},{title:"Fallaway Reverse & Slip Pivot",commenceFacing:0,startFoot:"LFF",endFoot:"LFF"},{title:"Hover Corte",commenceFacing:0,startFoot:"RFB",endFoot:"LFB"}]}}},c=a,s=o("2877"),l=Object(s["a"])(c,r,e,!1,null,null,null);n["default"]=l.exports},cd1c:function(t,n,o){var r=o("e853");t.exports=function(t,n){return new(r(t))(n)}},dd5e:function(t,n,o){"use strict";var r=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("v-list",t._l(t.All,function(n){return o("v-list-group",{key:n.title,attrs:{"no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[o("v-list-tile",[o("v-list-tile-content",[o("v-list-tile-title",[t._v(t._s(n.title))])],1)],1)]},proxy:!0}],null,!0),model:{value:n.active,callback:function(o){t.$set(n,"active",o)},expression:"item.active"}},[o("v-icon",{attrs:{slot:"prependIcon",medium:"",color:t.levelColor(n)},slot:"prependIcon"},[t._v("star")]),t._l(n.figures,function(n){return o("v-list-tile",{key:n.title,attrs:{to:t.figureRoute(n.title)},on:{click:function(n){return t.$emit("figurePicked")}}},[o("v-list-tile-content",[o("v-list-tile-title",[t._v(t._s(n.title))])],1),o("v-list-tile-action",[o("v-icon",[t._v(t._s(n.action))])],1)],1)})],2)}),1)},e=[],i=(o("a481"),{name:"SyllabusList",props:{All:Array},methods:{levelColor:function(t){switch(t.title){case"Newcomer":return"green lighten-2";case"Bronze":return"brown";case"Silver":return"blue-grey lighten-3";case"Gold":return"yellow darken-3"}},figureRoute:function(t){return"".concat(t.replace(/\s+/g,"-"))}}}),a=i,c=o("2877"),s=Object(c["a"])(a,r,e,!1,null,null,null);n["a"]=s.exports},e853:function(t,n,o){var r=o("d3f4"),e=o("1169"),i=o("2b4c")("species");t.exports=function(t){var n;return e(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!e(n.prototype)||(n=void 0),r(n)&&(n=n[i],null===n&&(n=void 0))),void 0===n?Array:n}}}]);
//# sourceMappingURL=chunk-418576d8.731775bf.js.map