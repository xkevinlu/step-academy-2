(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a9a7c03"],{"0a49":function(t,o,n){var e=n("9b43"),r=n("626a"),a=n("4bf8"),i=n("9def"),s=n("cd1c");t.exports=function(t,o){var n=1==t,c=2==t,F=3==t,l=4==t,u=6==t,m=5==t||u,f=o||s;return function(o,s,g){for(var d,p,v=a(o),L=r(v),y=e(s,g,3),B=i(L.length),h=0,R=n?f(o,B):c?f(o,0):void 0;B>h;h++)if((m||h in L)&&(d=L[h],p=y(d,h,v),t))if(n)R[h]=p;else if(p)switch(t){case 3:return!0;case 5:return d;case 6:return h;case 2:R.push(d)}else if(l)return!1;return u?-1:F||l?l:R}}},1169:function(t,o,n){var e=n("2d95");t.exports=Array.isArray||function(t){return"Array"==e(t)}},"3d89":function(t,o,n){"use strict";n.r(o);var e=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[n("v-btn",{attrs:{block:"",flat:"",large:"",color:"primary"},on:{click:function(o){t.selectDance=!0}}},[n("h2",[t._v(t._s(t.headerText))]),n("v-icon",{attrs:{right:""}},[t._v("arrow_drop_down")])],1),n("Player",{attrs:{figure:t.figure},on:{nextFigure:function(o){t.selectNext=!0},prevFigure:function(o){t.selectPrev=!0}}}),n("v-dialog",{attrs:{scrollable:"",fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.selectDance,callback:function(o){t.selectDance=o},expression:"selectDance"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(o){t.selectDance=!1}}},[n("v-icon",[t._v("close")])],1),n("v-toolbar-title",[t._v("Select a Figure:")])],1),n("v-divider"),n("v-card-text",{staticStyle:{height:"100%"}},[n("SyllabusList",{attrs:{All:t.danceList},on:{figurePicked:function(o){t.selectDance=!1}}})],1),n("v-divider")],1)],1),n("v-dialog",{attrs:{scrollable:"","max-width":"300px"},model:{value:t.selectPrev,callback:function(o){t.selectPrev=o},expression:"selectPrev"}},[n("v-card",[n("v-card-title",[t._v("Preceding "+t._s(t.figure.title)+":")]),n("v-divider"),n("v-card-text",{staticStyle:{"max-height":"400px"}},[n("v-radio-group",{attrs:{column:""},model:{value:t.targetPrev,callback:function(o){t.targetPrev=o},expression:"targetPrev"}},t._l(t.precedingFigures,function(t){return n("v-radio",{attrs:{label:t.title,value:t.title}})}),1)],1),n("v-divider"),n("v-card-actions",[n("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(o){t.selectPrev=!1}}},[t._v("Close")]),n("v-btn",{attrs:{color:"blue darken-1",flat:"",to:t.getRoute(t.targetPrev)},on:{click:function(o){t.selectPrev=!1}}},[t._v("Go")])],1)],1)],1),n("v-dialog",{attrs:{scrollable:"","max-width":"300px"},model:{value:t.selectNext,callback:function(o){t.selectNext=o},expression:"selectNext"}},[n("v-card",[n("v-card-title",[t._v("Following "+t._s(t.figure.title)+":")]),n("v-divider"),n("v-card-text",{staticStyle:{"max-height":"400px"}},[n("v-radio-group",{attrs:{column:""},model:{value:t.targetNext,callback:function(o){t.targetNext=o},expression:"targetNext"}},t._l(t.followingFigures,function(t){return n("v-radio",{attrs:{label:t.title,value:t.title}})}),1)],1),n("v-divider"),n("v-card-actions",[n("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(o){t.selectNext=!1}}},[t._v("Close")]),n("v-btn",{attrs:{color:"blue darken-1",flat:"",to:t.getRoute(t.targetNext)},on:{click:function(o){t.selectNext=!1}}},[t._v("Go")])],1)],1)],1)],1)},r=[],a=(n("a481"),n("7514"),function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("v-list",t._l(t.All,function(o){return n("v-list-group",{key:o.title,attrs:{"no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-tile",[n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(o.title))])],1)],1)]},proxy:!0}],null,!0),model:{value:o.active,callback:function(n){t.$set(o,"active",n)},expression:"item.active"}},[n("v-icon",{attrs:{slot:"prependIcon",medium:"",color:t.levelColor(o)},slot:"prependIcon"},[t._v("star")]),t._l(o.figures,function(o){return n("v-list-tile",{key:o.title,attrs:{to:t.figureRoute(o.title)},on:{click:function(o){return t.$emit("figurePicked")}}},[n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(o.title))])],1),n("v-list-tile-action",[n("v-icon",[t._v(t._s(o.action))])],1)],1)})],2)}),1)}),i=[],s={name:"SyllabusList",props:{All:Array},methods:{levelColor:function(t){switch(t.title){case"Newcomer":return"green lighten-2";case"Bronze":return"brown";case"Silver":return"blue-grey lighten-3";case"Gold":return"yellow darken-3"}},figureRoute:function(t){return"".concat(t.replace(/\s+/g,"-"))}}},c=s,F=n("2877"),l=Object(F["a"])(c,a,i,!1,null,null,null),u=l.exports,m=n("cccf"),f={name:"dance",components:{SyllabusList:u,Player:m["default"]},computed:{figure:function(){var t=this;return this.$route.params.figure?this.dance.find(function(o){return o.title==t.$route.params.figure.replace(/-+/g," ")}):this.defaultFigure},headerText:function(){return this.figure?this.figure.title:"No figure selected"},dance:function(){switch(this.$route.params.dance){case"waltz":return this.waltzAll;case"tango":return this.tangoAll;case"vwaltz":return this.vwaltzAll;case"foxtrot":return this.foxtrotAll;case"quickstep":return this.quickstepAll;default:return null}},danceList:function(){switch(this.$route.params.dance){case"waltz":return this.waltzLevelList;case"tango":return this.tangoLevelList;case"vwaltz":return this.vwaltzLevelList;case"foxtrot":return this.foxtrotLevelList;case"quickstep":return this.quickstepLevelList;default:return null}},precedingFigures:function(){var t=this;return void 0!=this.figure?this.dance.filter(function(o){return o.endFoot==t.figure.startFoot}):void 0},followingFigures:function(){var t=this;return void 0!=this.figure?this.dance.filter(function(o){return o.startFoot==t.figure.endFoot}):void 0},waltzLevelList:function(){return[{title:"Newcomer",figures:this.waltzNewcomer},{title:"Bronze",figures:this.waltzBronze},{title:"Silver",figures:this.waltzSilver},{title:"Gold",figures:this.waltzGold}]},waltzAll:function(){return this.waltzNewcomer.concat(this.waltzBronze).concat(this.waltzSilver).concat(this.waltzGold)},tangoLevelList:function(){return[{title:"Newcomer",figures:this.tangoNewcomer},{title:"Bronze",figures:this.tangoBronze},{title:"Silver",figures:this.tangoSilver},{title:"Gold",figures:this.tangoGold}]},tangoAll:function(){return this.tangoNewcomer.concat(this.tangoBronze).concat(this.tangoSilver).concat(this.tangoGold)},vwaltzLevelList:function(){return[{title:"Bronze",figures:this.vwaltzBronze},{title:"Silver",figures:this.vwaltzSilver},{title:"Gold",figures:this.vwaltzGold}]},vwaltzAll:function(){return this.vwaltzBronze.concat(this.vwaltzSilver).concat(this.vwaltzGold)},foxtrotLevelList:function(){return[{title:"Newcomer",figures:this.foxtrotNewcomer},{title:"Bronze",figures:this.foxtrotBronze},{title:"Silver",figures:this.foxtrotSilver},{title:"Gold",figures:this.foxtrotGold}]},foxtrotAll:function(){return this.foxtrotNewcomer.concat(this.foxtrotBronze).concat(this.foxtrotSilver).concat(this.foxtrotGold)},quickstepLevelList:function(){return[{title:"Newcomer",figures:this.quickstepNewcomer},{title:"Bronze",figures:this.quickstepBronze},{title:"Silver",figures:this.quickstepSilver},{title:"Gold",figures:this.quickstepGold}]},quickstepAll:function(){return this.quickstepNewcomer.concat(this.quickstepBronze).concat(this.quickstepSilver).concat(this.quickstepGold)}},methods:{getRoute:function(t){return t.replace(/\s+/g,"-")}},data:function(){return{selectDance:!1,selectNext:!1,selectPrev:!1,targetNew:" ",targetNext:" ",targetPrev:" ",defaultFigure:{title:"Select a figure...",commenceFacing:0,offset:[0,0],startFoot:"RFF",endFoot:"LFF",steps:[{count:0,instructionBoth:"Instructions will appear here",instructionMan:"Begin on LF",instructionLady:"Begin on RF",ml:{transX:0,transY:0,rotation:0,opacity:1},mr:{transX:0,transY:0,rotation:0,opacity:1},ll:{transX:0,transY:0,rotation:180,opacity:1},lr:{transX:0,transY:0,rotation:180,opacity:1}}]},waltzNewcomer:[{title:"RF Closed Change",commenceFacing:0,offset:[0,0],startFoot:"RFF",endFoot:"LFF",steps:[{count:0,instructionBoth:"Prepare to move DW",instructionMan:"Begin on LF",instructionLady:"Begin on RF",ml:{transX:0,transY:0,rotation:0,opacity:1},mr:{transX:0,transY:0,rotation:0,opacity:.2},ll:{transX:0,transY:0,rotation:180,opacity:.2},lr:{transX:0,transY:0,rotation:180,opacity:1}},{count:1,instructionBoth:"Moving DW",instructionMan:"RF forward (HT)",instructionLady:"LF back (TH)",ml:{transX:0,transY:0,rotation:0,opacity:.2},mr:{transX:0,transY:-80,rotation:0,opacity:1,footwork:"HT"},ll:{transX:0,transY:-80,rotation:180,opacity:1,footwork:"TH"},lr:{transX:0,transY:0,rotation:180,opacity:.2}},{count:1.5,instructionBoth:"Moving DW",instructionMan:"RF forward (HT)",instructionLady:"LF back (TH)",ml:{transX:0,transY:-80,rotation:0,opacity:.2},mr:{transX:0,transY:-80,rotation:0,opacity:1},ll:{transX:0,transY:-80,rotation:180,opacity:1},lr:{transX:0,transY:-80,rotation:180,opacity:.2}},{count:2,instructionBoth:"Moving DW",instructionMan:"RF forward (HT)",instructionLady:"LF back (TH)",ml:{transX:-80,transY:-80,rotation:0,opacity:1,footwork:"T"},mr:{transX:0,transY:-80,rotation:0,opacity:.2},ll:{transX:0,transY:-80,rotation:180,opacity:.2},lr:{transX:-80,transY:-80,rotation:180,opacity:1,footwork:"T"}},{count:3,instructionBoth:"Moving DW",instructionMan:"RF forward (HT)",instructionLady:"LF back (TH)",ml:{transX:-80,transY:-80,rotation:0,opacity:.2},mr:{transX:-80,transY:-80,rotation:0,opacity:1,footwork:"T"},ll:{transX:-80,transY:-80,rotation:180,opacity:1,footwork:"T"},lr:{transX:-80,transY:-80,rotation:180,opacity:.2}}]},{title:"LF Closed Change",offset:[-80,80],commenceFacing:0,startFoot:"LFF",endFoot:"RFF",steps:[{count:0,instructionBoth:"Prepare to move DW",instructionMan:"Begin on RF",instructionLady:"Begin on LF",ml:{transX:0,transY:0,rotation:0,opacity:.2},mr:{transX:0,transY:0,rotation:0,opacity:1},ll:{transX:0,transY:0,rotation:180,opacity:1},lr:{transX:0,transY:0,rotation:180,opacity:.2}},{count:1,instructionBoth:"Moving DC",instructionMan:"LF Fwd",instructionLady:"RF Fwd",ml:{transX:0,transY:-80,rotation:0,opacity:1,footwork:"HT"},mr:{transX:0,transY:0,rotation:0,opacity:.2},ll:{transX:0,transY:0,rotation:180,opacity:.2},lr:{transX:0,transY:-80,rotation:180,opacity:1,footwork:"TH"}},{count:1.5,instructionBoth:"Prepare to move DW",instructionMan:"Begin on RF",instructionLady:"Begin on LF",ml:{transX:0,transY:-80,rotation:0,opacity:1},mr:{transX:0,transY:-80,rotation:0,opacity:.2},ll:{transX:0,transY:-80,rotation:180,opacity:.2},lr:{transX:0,transY:-80,rotation:180,opacity:1}},{count:2,instructionBoth:"Prepare to move DW",instructionMan:"Begin on RF",instructionLady:"Begin on LF",ml:{transX:0,transY:-80,rotation:0,opacity:.2},mr:{transX:80,transY:-80,rotation:0,opacity:1,footwork:"T"},ll:{transX:80,transY:-80,rotation:180,opacity:1,footwork:"T"},lr:{transX:0,transY:-80,rotation:180,opacity:.2}},{count:3,instructionBoth:"Prepare to move DW",instructionMan:"Begin on RF",instructionLady:"Begin on LF",ml:{transX:80,transY:-80,rotation:0,opacity:1,footwork:"T"},mr:{transX:80,transY:-80,rotation:0,opacity:.2},ll:{transX:80,transY:-80,rotation:180,opacity:.2},lr:{transX:80,transY:-80,rotation:180,opacity:1,footwork:"T"}}]},{title:"Natural Turn",offset:[-80,-80],commenceFacing:135,startFoot:"RFF",endFoot:"LFB",steps:[{count:0,instructionBoth:"Prepare to move DW",instructionMan:"Begin on LF",instructionLady:"Begin on RF",ml:{transX:0,transY:0,rotation:0,opacity:1},mr:{transX:0,transY:0,rotation:0,opacity:.2},ll:{transX:0,transY:0,rotation:180,opacity:.2},lr:{transX:0,transY:0,rotation:180,opacity:1}},{count:1,instructionBoth:"Moving DW",instructionMan:"Begin on LF",instructionLady:"Begin on RF",ml:{transX:0,transY:0,rotation:0,opacity:.2},mr:{transX:10,transY:-80,rotation:0,opacity:1,footwork:"HT"},ll:{transX:20,transY:-60,rotation:180,opacity:1,footwork:"TH"},lr:{transX:0,transY:0,rotation:180,opacity:.2}},{count:2,instructionBoth:"Moving DW",instructionMan:"Begin on LF",instructionLady:"Begin on RF",ml:{transX:35,transY:-185,rotation:90,opacity:1,footwork:"T"},mr:{transX:10,transY:-80,rotation:90,opacity:.2},ll:{transX:20,transY:-125,rotation:180,opacity:.2,transOrigin:"center 70px"},lr:{transX:30,transY:-160,rotation:315,opacity:1,footwork:"T"}},{count:3,instructionBoth:"Moving DW",instructionMan:"Begin on LF",instructionLady:"Begin on RF",ml:{transX:43,transY:-188,rotation:135,opacity:.2,transition:"2s ease-out"},mr:{transX:0,transY:-175,rotation:135,opacity:1,footwork:"T",transition:"2s ease-out"},ll:{transX:10,transY:-155,rotation:315,opacity:1,footwork:"T",transOrigin:"center 70px",transition:"2s ease-out"},lr:{transX:30,transY:-160,rotation:315,opacity:.2}}]},{title:"Reverse Turn",offset:[-40,40],commenceFacing:45,startFoot:"LFF",endFoot:"RFB",steps:[{count:0,instructionBoth:"Prepare to move DX",instructionMan:"Begin on RF",instructionLady:"Begin on LF",ml:{transX:0,transY:0,rotation:0,opacity:.2},mr:{transX:0,transY:0,rotation:0,opacity:1},ll:{transX:0,transY:0,rotation:180,opacity:1},lr:{transX:0,transY:0,rotation:180,opacity:.2}},{count:1,instructionBoth:"Prepare to move DX",instructionMan:"LF Fwd",instructionLady:"RF Fwd",ml:{transX:-10,transY:-80,rotation:-45,opacity:1,footwork:"HT"},mr:{transX:0,transY:0,rotation:0,opacity:.2},ll:{transX:0,transY:0,rotation:180,opacity:.2},lr:{transX:-40,transY:-80,rotation:135,opacity:1,footwork:"TH"}},{count:2,instructionBoth:"Moving DC",instructionMan:"RF to side",instructionLady:"LF to side",ml:{transX:-10,transY:-80,rotation:-90,opacity:.2},mr:{transX:-40,transY:-170,rotation:-90,opacity:1,footwork:"T"},ll:{transX:-70,transY:-150,rotation:90,opacity:1,footwork:"T"},lr:{transX:-40,transY:-80,rotation:90,opacity:.2}},{count:3,instructionBoth:"Moving DC",instructionMan:"LF close to RF",instructionLady:"RF close to LF",ml:{transX:0,transY:-160,rotation:-135,opacity:1,footwork:"T"},mr:{transX:-40,transY:-170,rotation:-135,opacity:.2},ll:{transX:-70,transY:-150,rotation:45,opacity:.2},lr:{transX:-30,transY:-140,rotation:45,opacity:1,footwork:"T"}}]},{title:"Spin Turn",offset:[0,0],commenceFacing:-90,startFoot:"LFB",endFoot:"LFB",steps:[{count:0,instructionBoth:"Prepare to move DW",instructionMan:"Begin on LF",instructionLady:"Begin on RF",ml:{transX:0,transY:0,rotation:0,opacity:.2},mr:{transX:0,transY:0,rotation:0,opacity:1,transOrigin:"center 100px"},ll:{transX:0,transY:0,rotation:180,opacity:1},lr:{transX:0,transY:0,rotation:180,opacity:.2}},{count:1,instructionBoth:"Prepare to move DW",instructionMan:"Begin on LF",instructionLady:"Begin on RF",ml:{transX:-20,transY:60,rotation:22.5,opacity:1,footwork:"T"},mr:{transX:0,transY:0,rotation:0,opacity:.2,transOrigin:"center 100px"},ll:{transX:0,transY:0,rotation:180,opacity:.2},lr:{transX:-10,transY:90,rotation:180,opacity:1,footwork:"HT"}},{count:2,instructionBoth:"Prepare to move DW",instructionMan:"Begin on LF",instructionLady:"Begin on RF",ml:{transX:-20,transY:60,rotation:135,opacity:.2},mr:{transX:-50,transY:20,rotation:135,opacity:1,transOrigin:"center 100px",footwork:"T"},ll:{transX:-25,transY:160,rotation:315,opacity:1,transition:"all 1s ease-in",footwork:"T"},lr:{transX:-10,transY:90,rotation:315,opacity:.2}},{count:2.5,instructionBoth:"Lady brush LF to RF",instructionMan:"Begin on LF",instructionLady:"Begin on RF",ml:{transX:60,transY:90,rotation:215,opacity:.2},mr:{transX:40,transY:20,rotation:215,opacity:1,transOrigin:"center 100px"},ll:{transX:-25,transY:160,rotation:395,opacity:1,transition:"all 1s ease-in"},lr:{transX:20,transY:170,rotation:395,opacity:.2,transition:"all 1.2s"}},{count:3,instructionBoth:"Prepare to move DW",instructionMan:"Begin on LF",instructionLady:"Begin on RF",ml:{transX:120,transY:80,rotation:215,opacity:1,footwork:"T"},mr:{transX:40,transY:20,rotation:215,opacity:.2,transOrigin:"center 100px"},ll:{transX:-25,transY:160,rotation:395,opacity:.2,transition:"all 1s ease-in ease-in"},lr:{transX:85,transY:105,rotation:395,opacity:1,footwork:"T"}},{count:3.5,instructionBoth:"Collect",instructionMan:"Begin on LF",instructionLady:"Begin on RF",ml:{transX:120,transY:80,rotation:215,opacity:1},mr:{transX:110,transY:-40,rotation:215,opacity:.2,transOrigin:"center 100px"},ll:{transX:40,transY:95,rotation:395,opacity:.2},lr:{transX:85,transY:105,rotation:395,opacity:1}}]},{title:"Whisk",commenceFacing:135,offset:[0,0],startFoot:"LFF",endFoot:"PP",steps:[{count:0,instructionBoth:"Prepare to move DW",instructionMan:"Begin on LF",instructionLady:"Begin on RF",ml:{transX:0,transY:0,rotation:0,opacity:.2},mr:{transX:0,transY:0,rotation:0,opacity:1},ll:{transX:0,transY:0,rotation:180,opacity:1},lr:{transX:0,transY:0,rotation:180,opacity:.2}},{count:1,instructionBoth:"Prepare to move DW",instructionMan:"Begin on LF",instructionLady:"Begin on RF",ml:{transX:0,transY:-80,rotation:0,opacity:1,footwork:"HT"},mr:{transX:0,transY:0,rotation:0,opacity:.2},ll:{transX:0,transY:0,rotation:180,opacity:.2},lr:{transX:0,transY:-80,rotation:180,opacity:1,footwork:"TH"}},{count:1.5,instructionBoth:"Prepare to move DW",instructionMan:"Begin on LF",instructionLady:"Begin on RF",ml:{transX:0,transY:-80,rotation:0,opacity:1},mr:{transX:0,transY:-80,rotation:0,opacity:.2},ll:{transX:0,transY:-80,rotation:180,opacity:.2},lr:{transX:0,transY:-80,rotation:180,opacity:1}},{count:2,instructionBoth:"Prepare to move DW",instructionMan:"Begin on LF",instructionLady:"Begin on RF",ml:{transX:0,transY:-80,rotation:0,opacity:.2},mr:{transX:40,transY:-40,rotation:0,opacity:1,footwork:"T"},ll:{transX:55,transY:-25,rotation:270,opacity:1,footwork:"T"},lr:{transX:0,transY:-80,rotation:270,opacity:.2}},{count:3,instructionBoth:"Prepare to move DW",instructionMan:"Begin on LF",instructionLady:"Begin on RF",ml:{transX:85,transY:-15,rotation:0,opacity:1,footwork:"T"},mr:{transX:40,transY:-40,rotation:0,opacity:.2},ll:{transX:55,transY:-25,rotation:270,opacity:.2},lr:{transX:105,transY:-10,rotation:270,opacity:1,footwork:"T"}}]},{title:"Chasse from PP",offset:[0,100],commenceFacing:0,startFoot:"PP",endFoot:"RFF",steps:[{count:0,instructionBoth:"Prepare to move DC",instructionMan:"Begin on RF",instructionLady:"Begin on LF",ml:{transX:0,transY:0,rotation:0,opacity:.2},mr:{transX:0,transY:0,rotation:0,opacity:1},ll:{transX:0,transY:0,rotation:180,opacity:1},lr:{transX:0,transY:0,rotation:180,opacity:.2}},{count:1,instructionBoth:"Prepare to move DC",instructionMan:"Begin on RF",instructionLady:"Begin on LF",ml:{transX:0,transY:-80,rotation:-45,opacity:.2},mr:{transX:0,transY:0,rotation:0,opacity:1},ll:{transX:0,transY:0,rotation:180,opacity:1},lr:{transX:0,transY:-80,rotation:135,opacity:.2}}]}],waltzBronze:[{title:"Closed Impetus",commenceFacing:-90,startFoot:"LFB",endFoot:"LFB"},{title:"Hesitation Change",commenceFacing:-90,startFoot:"LFB",endFoot:"LFF"},{title:"Outside Change",commenceFacing:-90,startFoot:"LFB",endFoot:"RFF"},{title:"Reverse Corte",commenceFacing:-90,startFoot:"RFB",endFoot:"LFB"},{title:"Back Whisk",commenceFacing:0,startFoot:"LFB",endFoot:"PP"},{title:"Basic Weave",commenceFacing:0,startFoot:"RFB",endFoot:"RFF"},{title:"Double Reverse Spin",commenceFacing:0,startFoot:"LFF",endFoot:"LFF"},{title:"Reverse Pivot",commenceFacing:0,startFoot:"RFB",endFoot:"LFF"},{title:"Back Lock",commenceFacing:0,startFoot:"LFB",endFoot:"LFB"},{title:"Progressive Chasse to Right",commenceFacing:45,startFoot:"LFF",endFoot:"LFB"}],waltzSilver:[{title:"Weave from Promenade Position",commenceFacing:0,startFoot:"PP",endFoot:"RFF"},{title:"Closed Telemark",commenceFacing:0,startFoot:"LFF",endFoot:"RFF"},{title:"Open Telemark",commenceFacing:0,startFoot:"LFF",endFoot:"PP"},{title:"Open Impetus",commenceFacing:0,startFoot:"LFB",endFoot:"PP"},{title:"Cross Hesitation",commenceFacing:0,startFoot:"PP",endFoot:"LFF"},{title:"Wing",commenceFacing:0,startFoot:"PP",endFoot:"LFF"},{title:"Outside Spin",commenceFacing:0,startFoot:"LFB",endFoot:"RFF"},{title:"Turning Lock to L",commenceFacing:0,startFoot:"RFB",endFoot:"RFF"},{title:"Drag Hesitation",commenceFacing:0,startFoot:"LFF",endFoot:"LFB"}],waltzGold:[{title:"Left Whisk",commenceFacing:0,startFoot:"RFB",endFoot:"LFB"},{title:"Contra Check",commenceFacing:0,startFoot:"LFF",endFoot:"PP"},{title:"Closed Wing",commenceFacing:0,startFoot:"RFF",endFoot:"LFF"},{title:"Turning Lock to Right",commenceFacing:0,startFoot:"RFB",endFoot:"PP"},{title:"Fallaway Reverse & Slip Pivot",commenceFacing:0,startFoot:"LFF",endFoot:"LFF"},{title:"Hover Corte",commenceFacing:0,startFoot:"RFB",endFoot:"LFB"}],tangoNewcomer:[{title:"Left Foot Walk",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"RFF"},{title:"Right Foot Walk",commenceFacing:0,offset:[0,0],startFoot:"RFF",endFoot:"LFF"},{title:"Progressive Side Step",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"LFF"},{title:"Point to PP",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"PP"},{title:"Progressive Link",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"PP"},{title:"Closed Promenade",commenceFacing:0,offset:[0,0],startFoot:"PP",endFoot:"LFF"},{title:"Rock Turn",commenceFacing:0,offset:[0,0],startFoot:"RFF",endFoot:"LFF"},{title:"Open Reverse Turn",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"LFF"},{title:"Back Corte",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"LFF"}],tangoBronze:[{title:"Open Promenade",commenceFacing:0,offset:[0,0],startFoot:"PP",endFoot:"LFF"},{title:"Progressive Side Step Reverse Turn",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"LFF"},{title:"Left Foot Rock",commenceFacing:0,offset:[0,0],startFoot:"LFB",endFoot:"RFB"},{title:"Right Foot Rock",commenceFacing:0,offset:[0,0],startFoot:"RFB",endFoot:"LFB"},{title:"Natural Twist Turn",commenceFacing:0,offset:[0,0],startFoot:"PP",endFoot:"PP"},{title:"Natural Promenade Turn",commenceFacing:0,offset:[0,0],startFoot:"PP",endFoot:"PP"}],tangoSilver:[{title:"Promenade Link",commenceFacing:0,offset:[0,0],startFoot:"PP",endFoot:"LFF"},{title:"Four Step",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"PP"},{title:"Back Open Promenade",commenceFacing:0,offset:[0,0],startFoot:"PP",endFoot:"LFF"},{title:"Outside Swivel",commenceFacing:0,offset:[0,0],startFoot:"LFB",endFoot:"LFF"},{title:"Reverse Outside Swivel",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"LFF"},{title:"Fallaway Promenade",commenceFacing:0,offset:[0,0],startFoot:"PP",endFoot:"PP"},{title:"Four Step Change",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"LFF"},{title:"Brush Tap",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"LFF"}],tangoGold:[{title:"Fallaway Four Step",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"PP"},{title:"Oversway",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"RFF"},{title:"Basic Reverse Turn",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"LFF"},{title:"The Chase",commenceFacing:0,offset:[0,0],startFoot:"PP",endFoot:"PP"},{title:"Fallaway Reverse & Slip Pivot",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"LFF"},{title:"Five Step",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"PP"},{title:"Overturned Five Step",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"PP"},{title:"Contra Check",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"PP"}],vwaltzBronze:[{title:"Reverse Turn (1-3)",commenceFacing:0,offset:[0,0],startFoot:"RFB",endFoot:"LFF"},{title:"Reverse Turn (4-6)",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"RFB"},{title:"Natural Turn (1-3)",commenceFacing:0,offset:[0,0],startFoot:"RFF",endFoot:"LFB"},{title:"Natural Turn (4-6)",commenceFacing:0,offset:[0,0],startFoot:"LFB",endFoot:"RFF"},{title:"Forward Change, Natural to Reverse",commenceFacing:0,offset:[0,0],startFoot:"RFF",endFoot:"LFF"},{title:"Forward Change, Reverse to Natural",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"RFF"},{title:"Backward Change, Natural to Reverse",commenceFacing:0,offset:[0,0],startFoot:"LFB",endFoot:"RFB"},{title:"Backward Change, Reverse to Natural",commenceFacing:0,offset:[0,0],startFoot:"RFB",endFoot:"LFB"}],vwaltzSilver:[{title:"Reverse Fleckerl",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"LFF"}],vwaltzGold:[{title:"Natural Fleckerl",commenceFacing:0,offset:[0,0],startFoot:"LFB",endFoot:"RFF"},{title:"Contra Check",commenceFacing:0,offset:[0,0],startFoot:"RFF",endFoot:"LFB"}],foxtrotNewcomer:[{title:"Feather Step",commenceFacing:0,offset:[0,0],startFoot:"RFF",endFoot:"LFF"},{title:"Three Step",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"RFF"},{title:"Natural Turn",commenceFacing:0,offset:[0,0],startFoot:"RFF",endFoot:"LFF"},{title:"Reverse Turn",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"LFB"},{title:"Feather Finish",commenceFacing:0,offset:[0,0],startFoot:"LFB",endFoot:"LFF"},{title:"Closed Impetus & Feather Finish",commenceFacing:0,offset:[0,0],startFoot:"RFB",endFoot:"LFF"}],foxtrotBronze:[{title:"Natural Weave",commenceFacing:0,offset:[0,0],startFoot:"RFF",endFoot:"LFF"},{title:"Change of Direction",commenceFacing:0,offset:[0,0],startFoot:"RFB",endFoot:"RFF"},{title:"Basic Weave",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"LFF"}],foxtrotSilver:[{title:"Closed Telemark",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"RFF"},{title:"Open Telemark",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"PP"},{title:"Feather Ending",commenceFacing:0,offset:[0,0],startFoot:"PP",endFoot:"LFF"},{title:"Top Spin",commenceFacing:0,offset:[0,0],startFoot:"LFB",endFoot:"LFF"},{title:"Hover Feather",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"LFF"},{title:"Hover Telemark",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"RFF"},{title:"Natural Telemark",commenceFacing:0,offset:[0,0],startFoot:"RFF",endFoot:"LFF"},{title:"Hover Cross",commenceFacing:0,offset:[0,0],startFoot:"RFF",endFoot:"LFF"},{title:"Open Natural Turn",commenceFacing:0,offset:[0,0],startFoot:"RFF",endFoot:"LFB"},{title:"Outside Swivel",commenceFacing:0,offset:[0,0],startFoot:"LFB",endFoot:"PP"},{title:"Open Impetus",commenceFacing:0,offset:[0,0],startFoot:"LFB",endFoot:"PP"},{title:"Weave from Promenade Position",commenceFacing:0,offset:[0,0],startFoot:"PP",endFoot:"LFF"},{title:"Reverse Wave",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"RFF"}],foxtrotGold:[{title:"Natural Twist Turn",commenceFacing:0,offset:[0,0],startFoot:"RFF",endFoot:"LFF"},{title:"Curved Feather",commenceFacing:0,offset:[0,0],startFoot:"RFF",endFoot:"LFB"},{title:"Back Feather",commenceFacing:0,offset:[0,0],startFoot:"LFB",endFoot:"RFB"},{title:"Natural Zig Zag from Promenade Position",commenceFacing:0,offset:[0,0],startFoot:"PP",endFoot:"LFF"},{title:"Fallaway Reverse & Slip Pivot",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"LFF"},{title:"Natural Hover Telemark",commenceFacing:0,offset:[0,0],startFoot:"RFF",endFoot:"LFF"},{title:"Bounce Fallaway with Weave Ending",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"LFF"}],quickstepNewcomer:[{title:"Quarter Turn to Right",commenceFacing:0,offset:[0,0],startFoot:"RFF",endFoot:"RFB"},{title:"Natural Turn",commenceFacing:0,offset:[0,0],startFoot:"RFF",endFoot:"LFB"},{title:"Natural Turn with Hesitation",commenceFacing:0,offset:[0,0],startFoot:"RFF",endFoot:"RFF"},{title:"Natural Pivot Turn",commenceFacing:0,offset:[0,0],startFoot:"RFF",endFoot:"RFF"},{title:"Natural Spin Turn",commenceFacing:0,offset:[0,0],startFoot:"RFF",endFoot:"RFB"},{title:"Progressive Chasse",commenceFacing:0,offset:[0,0],startFoot:"RFB",endFoot:"RFF"},{title:"Chasse Reverse Turn",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"RFB"},{title:"Forward Lock",commenceFacing:0,offset:[0,0],startFoot:"RFF",endFoot:"RFF"}],quickstepBronze:[{title:"Closed Impetus",commenceFacing:0,offset:[0,0],startFoot:"RFB",endFoot:"LFB"},{title:"Back Lock",commenceFacing:0,offset:[0,0],startFoot:"LFB",endFoot:"LFB"},{title:"Reverse Pivot",commenceFacing:0,offset:[0,0],startFoot:"RFB",endFoot:"LFF"},{title:"Progressive Chasse to Right",commenceFacing:0,offset:[0,0],startFoot:"RFF",endFoot:"LFB"},{title:"Tipple Chasse to Right",commenceFacing:0,offset:[0,0],startFoot:"LFB",endFoot:"LFF"},{title:"Running Finish",commenceFacing:0,offset:[0,0],startFoot:"LFB",endFoot:"RFF"},{title:"Double Reverse Spin",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"LFF"},{title:"Cross Chasse",commenceFacing:0,offset:[0,0],startFoot:"LFB",endFoot:"RFF"},{title:"Change of Direction",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"LFF"}],quickstepSilver:[{title:"Quick Open Reverse",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"RFB"},{title:"Fishtail",commenceFacing:0,offset:[0,0],startFoot:"RFF",endFoot:"RFF"},{title:"Running Right Turn",commenceFacing:0,offset:[0,0],startFoot:"RFF",endFoot:"RFF"},{title:"Four Quick Run",commenceFacing:0,offset:[0,0],startFoot:"RFB",endFoot:"RFF"},{title:"V6",commenceFacing:0,offset:[0,0],startFoot:"LFB",endFoot:"RFF"},{title:"Closed Telemark",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"RFF"}],quickstepGold:[{title:"Cross Swivel",commenceFacing:0,offset:[0,0],startFoot:"LFF",endFoot:"RFF"},{title:"Six Quick Run",commenceFacing:0,offset:[0,0],startFoot:"RFB",endFoot:"RFF"},{title:"Rumba Cross",commenceFacing:0,offset:[0,0],startFoot:"RFF",endFoot:"RFF"},{title:"Tipsy to Right",commenceFacing:0,offset:[0,0],startFoot:"LFB",endFoot:"LFF"},{title:"Tipsy to Left",commenceFacing:0,offset:[0,0],startFoot:"RFF",endFoot:"RFB"},{title:"Hover Corte",commenceFacing:0,offset:[0,0],startFoot:"RFB",endFoot:"LFB"}]}}},g=f,d=Object(F["a"])(g,e,r,!1,null,null,null);o["default"]=d.exports},7514:function(t,o,n){"use strict";var e=n("5ca1"),r=n("0a49")(5),a="find",i=!0;a in[]&&Array(1)[a](function(){i=!1}),e(e.P+e.F*i,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(a)},cd1c:function(t,o,n){var e=n("e853");t.exports=function(t,o){return new(e(t))(o)}},e853:function(t,o,n){var e=n("d3f4"),r=n("1169"),a=n("2b4c")("species");t.exports=function(t){var o;return r(t)&&(o=t.constructor,"function"!=typeof o||o!==Array&&!r(o.prototype)||(o=void 0),e(o)&&(o=o[a],null===o&&(o=void 0))),void 0===o?Array:o}}}]);
//# sourceMappingURL=chunk-7a9a7c03.2b5ebb07.js.map