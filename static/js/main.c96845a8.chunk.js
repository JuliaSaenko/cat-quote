(this["webpackJsonpcat-quote"]=this["webpackJsonpcat-quote"]||[]).push([[0],{22:function(e,t,a){e.exports=a(52)},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),i=a(3),u=a(21),s=a(9),l=a.n(s);a(50);var E=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.quote})),a=(t.isLoading,t.item),c=Object(n.useState)("img/1.JPG"),o=Object(u.a)(c,2),s=o[0],E=o[1];Object(n.useEffect)((function(){e(function(){var e={headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,POST"}};return l.a.defaults.headers.get["Access-Control-Allow-Origin"]="*",function(t){t({type:"FETCH_QUOTES_REQUEST"}),l.a.get("https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&json=parseQuote",e).then((function(e){return t(function(e){return{type:"FETCH_QUOTES_SUCCESS",payload:e.data}}(e))})).catch((function(e){return t(function(e){return{type:"FETCH_QUOTES_ERROR",payload:e.response}}(e))}))}}()),m()}),[e]);var m=function(){setInterval((function(){var e=Math.floor(104*Math.random()+1);E("img/".concat(e,".JPG"))}),864e5)};return r.a.createElement("div",{className:"cat-quote"},r.a.createElement("div",{className:"cat-quote__wrapper"},r.a.createElement("img",{className:"cat-quote__img",src:s}),r.a.createElement("p",{className:"cat-quote__text"},a.quoteText)))},m=a(2),d=a(20),O=a(4);var p=Object(m.c)({quote:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,item:"",error:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_QUOTES_REQUEST":return Object(O.a)(Object(O.a)({},e),{},{error:null,isLoading:!0});case"FETCH_QUOTES_SUCCESS":return Object(O.a)(Object(O.a)({},e),{},{isLoading:!1,item:t.payload});case"FETCH_QUOTES_ERROR":return{isLoading:!1,item:"",error:t.payload};default:return e}}}),_=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.d,f=Object(m.e)(p,_(Object(m.a)(d.a)));a(51);var S=function(){return r.a.createElement(i.a,{store:f},r.a.createElement("div",{className:"main"},r.a.createElement(E,null)))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.c96845a8.chunk.js.map