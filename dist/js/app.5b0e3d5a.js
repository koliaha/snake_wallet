(function(){"use strict";var t={5001:function(t,s,e){var i=e(6369),n=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"app"}},[t._m(0),s("GameCard",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},a=[function(){var t=this,s=t._self._c;return s("a",{attrs:{href:"https://twitter.com"}},[s("img",{staticStyle:{position:"fixed",right:"10px",top:"10px"},attrs:{width:"70px",src:e(2667),alt:""}})])}],r=function(){var t=this,s=t._self._c;return s("div",{staticClass:"game"},[t._m(0),s("canvas",{staticClass:"wrap",attrs:{id:"snake",width:"320",height:"320",tabindex:"1"}}),s("div",{attrs:{id:"gameover"}},[s("img",{attrs:{width:"50%",src:e(1336),alt:""}}),t._m(1),s("FormInput"),t._m(2),t._m(3)],1),s("div",{attrs:{id:"setting"}},[s("img",{staticStyle:{"margin-bottom":"10%"},attrs:{width:"90%",id:"newgame_setting",src:e(3546)}}),s("div",{staticClass:"settings_item2"},[t._m(4),s("div",{staticClass:"setting_sets"},[s("div",{staticClass:"setting_sets_item",class:{setting_active:120==t.speed}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.speed,expression:"speed"}],attrs:{id:"speed1",type:"radio",name:"speed",value:"120",checked:""},domProps:{checked:t._q(t.speed,"120")},on:{change:function(s){t.speed="120"}}}),t._m(5)]),s("div",{staticClass:"setting_sets_item",class:{setting_active:75==t.speed}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.speed,expression:"speed"}],attrs:{id:"speed2",type:"radio",name:"speed",value:"75"},domProps:{checked:t._q(t.speed,"75")},on:{change:function(s){t.speed="75"}}}),t._m(6)]),s("div",{staticClass:"setting_sets_item",class:{setting_active:35==t.speed}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.speed,expression:"speed"}],attrs:{id:"speed3",type:"radio",name:"speed",value:"35"},domProps:{checked:t._q(t.speed,"35")},on:{change:function(s){t.speed="35"}}}),t._m(7)])])]),s("div",{staticClass:"settings_item2"},[t._m(8),s("div",{staticClass:"setting_sets"},[s("div",{staticClass:"setting_sets_item",class:{setting_active:1==t.wall}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.wall,expression:"wall"}],attrs:{id:"wallon",type:"radio",name:"wall",value:"1",checked:""},domProps:{checked:t._q(t.wall,"1")},on:{change:function(s){t.wall="1"}}}),t._m(9)]),s("div",{staticClass:"setting_sets_item",class:{setting_active:0==t.wall}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.wall,expression:"wall"}],attrs:{id:"walloff",type:"radio",name:"wall",value:"0"},domProps:{checked:t._q(t.wall,"0")},on:{change:function(s){t.wall="0"}}}),t._m(10)])])])]),t._m(11),s("ControlBtn")],1)},o=[function(){var t=this,s=t._self._c;return s("header",{staticClass:"wrap"},[s("div",{staticClass:"score",staticStyle:{display:"flex","flex-direction":"column","align-items":"center",margin:"0px auto"}},[s("img",{staticStyle:{"margin-bottom":"20px"},attrs:{width:"60%",src:e(9977),alt:""}}),s("div",{staticClass:"score_counter",attrs:{id:"score_value"}},[s("img",{staticClass:"score_counter_item",attrs:{src:e(4977)}}),s("img",{staticClass:"score_counter_item",attrs:{src:e(4977)}})])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"settings_item settings_item_wide"},[s("img",{attrs:{src:e(7844),alt:""}})])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"settings_item"},[s("img",{attrs:{id:"newgame_gameover",src:e(3546),alt:""}})])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"settings_item"},[s("img",{attrs:{src:e(2594),id:"setting_gameover"}})])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"setting_header"},[s("img",{attrs:{src:e(6158),alt:""}})])},function(){var t=this,s=t._self._c;return s("label",{attrs:{for:"speed1"}},[s("img",{staticClass:"setting_sets_img",attrs:{src:e(1802),alt:""}})])},function(){var t=this,s=t._self._c;return s("label",{attrs:{for:"speed2"}},[s("img",{staticClass:"setting_sets_img",attrs:{src:e(9127),alt:""}})])},function(){var t=this,s=t._self._c;return s("label",{attrs:{for:"speed3"}},[s("img",{staticClass:"setting_sets_img",attrs:{src:e(6072),alt:""}})])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"setting_header"},[s("img",{attrs:{src:e(9302),alt:""}})])},function(){var t=this,s=t._self._c;return s("label",{attrs:{for:"wallon"}},[s("img",{staticClass:"setting_sets_img",attrs:{src:e(5349),alt:""}})])},function(){var t=this,s=t._self._c;return s("label",{attrs:{for:"walloff"}},[s("img",{staticClass:"setting_sets_img",attrs:{src:e(9451),alt:""}})])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"settings_list",attrs:{id:"menu"}},[s("img",{staticClass:"settings_item",attrs:{src:e(1336),alt:""}}),s("img",{staticClass:"settings_item",attrs:{id:"newgame_menu",src:e(3546)}}),s("img",{staticClass:"settings_item",attrs:{src:e(2594),id:"setting_menu"}})])}],c=function(){var t=this,s=t._self._c;return s("form",{staticClass:"form_wrapper",on:{submit:function(s){return s.preventDefault(),t.send.apply(null,arguments)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.wallet_input,expression:"wallet_input"}],staticClass:"form_input",attrs:{type:"text",placeholder:"0x000000000000000000000000000000",required:""},domProps:{value:t.wallet_input},on:{input:function(s){s.target.composing||(t.wallet_input=s.target.value)}}}),t._m(0)])},l=[function(){var t=this,s=t._self._c;return s("button",{staticClass:"form_btn",attrs:{type:"submit"}},[s("img",{attrs:{src:e(4492),alt:"send"}})])}],u={name:"FormInput",data(){return{wallet_input:"",url:"https://script.google.com/macros/s/AKfycbwsxpn44AiO2RmRzsTETjI2fE94aaWTcDxxlU1ZwT4InsxMaWOjJFMwAQiBpHflrqkglQ/exec"}},methods:{async send(){const t={wallet:this.wallet_input},s=JSON.stringify(t),e=await fetch(this.url,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:s});console.log("res",e)}}},m=u,d=e(1001),p=(0,d.Z)(m,c,l,!1,null,null,null),g=p.exports,f=function(){var t=this;t._self._c;return t._m(0)},_=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"controller"},[s("div",{staticClass:"control-item"},[s("button",{staticClass:"control_btn",attrs:{id:"btn_up"}},[s("img",{attrs:{src:e(4731),alt:"controls"}})])]),s("div",{staticClass:"control-item item-second"},[s("button",{staticClass:"control_btn",attrs:{id:"btn_left"}},[s("img",{attrs:{src:e(6258),alt:"controls"}})]),s("button",{staticClass:"control_btn",attrs:{id:"btn_right"}},[s("img",{attrs:{src:e(6965),alt:"controls"}})])]),s("div",{staticClass:"control-item"},[s("button",{staticClass:"control_btn",attrs:{id:"btn_down"}},[s("img",{attrs:{src:e(6608),alt:"controls"}})])])])}],v={},h=v,w=(0,d.Z)(h,f,_,!1,null,null,null),b=w.exports,x={name:"GameCard",components:{FormInput:g,ControlBtn:b},props:{msg:String},data(){return{speed:75,wall:1,get score(){return localStorage.getItem("snakeScore")||0},set score(t){localStorage.setItem("snakeScore",t)}}}},C=x,y=(0,d.Z)(C,r,o,!1,null,null,null),k=y.exports,O={name:"App",components:{GameCard:k}},P=O,S=(0,d.Z)(P,n,a,!1,null,null,null),j=S.exports;i.ZP.config.productionTip=!1,new i.ZP({render:t=>t(j)}).$mount("#app")},4977:function(t,s,e){t.exports=e.p+"img/0.7c85367f.svg"},6608:function(t,s,e){t.exports=e.p+"img/down.be7c4451.svg"},6258:function(t,s,e){t.exports=e.p+"img/left.40cdc59b.svg"},6965:function(t,s,e){t.exports=e.p+"img/right.2a120173.svg"},4731:function(t,s,e){t.exports=e.p+"img/up.6f53e6b0.svg"},6072:function(t,s,e){t.exports=e.p+"img/fast.5c3bd060.svg"},1336:function(t,s,e){t.exports=e.p+"img/loadens.910e427a.svg"},3546:function(t,s,e){t.exports=e.p+"img/new-game.2852e412.svg"},9127:function(t,s,e){t.exports=e.p+"img/normal.b2d63556.svg"},9451:function(t,s,e){t.exports=e.p+"img/off.36a9db90.svg"},5349:function(t,s,e){t.exports=e.p+"img/on.0c0a7192.svg"},9977:function(t,s,e){t.exports=e.p+"img/score.afa399e4.svg"},4492:function(t,s,e){t.exports=e.p+"img/send.13d3e8f5.svg"},2594:function(t,s,e){t.exports=e.p+"img/setings.8bb3c59d.svg"},1802:function(t,s,e){t.exports=e.p+"img/slow.853a479a.svg"},6158:function(t,s,e){t.exports=e.p+"img/speed.cdd52fa9.svg"},9302:function(t,s,e){t.exports=e.p+"img/wall.eeffb393.svg"},7844:function(t,s,e){t.exports=e.p+"img/wdywb.1fa08b92.svg"},2667:function(t,s,e){t.exports=e.p+"img/твитер.a287d7fe.svg"}},s={};function e(i){var n=s[i];if(void 0!==n)return n.exports;var a=s[i]={exports:{}};return t[i](a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(s,i,n,a){if(!i){var r=1/0;for(u=0;u<t.length;u++){i=t[u][0],n=t[u][1],a=t[u][2];for(var o=!0,c=0;c<i.length;c++)(!1&a||r>=a)&&Object.keys(e.O).every((function(t){return e.O[t](i[c])}))?i.splice(c--,1):(o=!1,a<r&&(r=a));if(o){t.splice(u--,1);var l=n();void 0!==l&&(s=l)}}return s}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[i,n,a]}}(),function(){e.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(s,{a:s}),s}}(),function(){e.d=function(t,s){for(var i in s)e.o(s,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:s[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){e.p=""}(),function(){var t={143:0};e.O.j=function(s){return 0===t[s]};var s=function(s,i){var n,a,r=i[0],o=i[1],c=i[2],l=0;if(r.some((function(s){return 0!==t[s]}))){for(n in o)e.o(o,n)&&(e.m[n]=o[n]);if(c)var u=c(e)}for(s&&s(i);l<r.length;l++)a=r[l],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(u)},i=self["webpackChunksnakegame"]=self["webpackChunksnakegame"]||[];i.forEach(s.bind(null,0)),i.push=s.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(5001)}));i=e.O(i)})();
//# sourceMappingURL=app.5b0e3d5a.js.map