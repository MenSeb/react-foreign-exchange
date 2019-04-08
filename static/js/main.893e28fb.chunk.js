(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(34)},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a(5),u=a.n(o),i=a(8),l=a(9),s=function(e){var t=e.tooltipTime,a=Object(n.useRef)(["clipboard","clipboard-valid"]).current,r=Object(n.useRef)(["clipboard","clipboard-error"]).current,c=Object(n.useRef)(navigator.clipboard).current,o=Object(n.useRef)(),s=Object(n.useCallback)(function(e){var n,c=e.error,u=e.target,i=c?r:a;(n=u.classList).add.apply(n,Object(l.a)(i)),o.current=setTimeout(function(){var e;(e=u.classList).remove.apply(e,Object(l.a)(i)),o.current=null},t)},[]),m=Object(n.useCallback)(function(e){return e.textContent},[]);return{writeClipboard:Object(n.useCallback)(function(){var e=Object(i.a)(u.a.mark(function e(t){var a,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.target,!o.current){e.next=4;break}return e.abrupt("return");case 4:return n=!1,e.prev=5,e.next=8,c.writeText(m(a));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(5),n=!0;case 13:s({error:n,target:a});case 14:case"end":return e.stop()}},e,null,[[5,10]])}));return function(t){return e.apply(this,arguments)}}(),[])}},m=a(2),b=a(3),f=function(e){var t=e.base,a=e.rates,r=Object(n.useRef)({conversion:"Conversion will be here",valid:!0}).current,c=Object(n.useRef)({conversion:"Missing amount or currencies",valid:!1}).current,o=Object(n.useState)(r),u=Object(b.a)(o,2),i=u[0],l=u[1],s=Object(n.useCallback)(function(e){var n=e.from,r=e.into,c=a[r];if(n===t)return c;var o=1/a[n];return r===t?o:c*o},[t,a]),f=Object(n.useCallback)(function(e){var t=e.hasChange,a=e.validValues,n=e.values;l(function(e){var r=e.valid;if(!a&&r)return c;if(!t||!a&&!r)return e;var o=n.amount,u=s(n);return Object(m.a)({conversion:o*u,valid:!0},n)})},[]);return Object(m.a)({},i,{convert:f})},d=function(){var e=Object(n.useRef)({style:"currency",minimumFractionDigits:2}).current,t=Object(n.useRef)(new Map);return{formatCurrency:Object(n.useCallback)(function(a){var n=a.conversion,r=a.into;if(isNaN(n))return n;var c=t.current,o=c.get(r);if(o)return o.format(n);var u=new Intl.NumberFormat(void 0,Object(m.a)({},e,{currency:r}));return c.set(r,u).get(r).format(n)},[])}},v=a(1),O=function(e){var t=e.url,a=e.endpoint,r=e.init,c=e.key,o=e.lifetime,l=e.delay,s=e.raw,f=void 0!==s&&s,d=e.save,O=void 0===d||d,j=Object(n.useRef)("Error trying to get ressources").current,p=Object(n.useRef)({loading:!0}).current,g=Object(n.useState)(function(){var e=localStorage.getItem(c);if(e){var t={data:e,loading:!1};if(f)return t;var a=JSON.parse(e),n=a.timeStampFetch,r=Object(v.a)(a,["timeStampFetch"]);if(new Date-new Date(n)<o)return Object(m.a)({},t,{data:r})}return p}),E=Object(b.a)(g,2),h=E[0],C=h.data,k=h.error,N=h.loading,w=E[1],x=Object(n.useCallback)(function(e){return setTimeout(function(){return w(Object(m.a)({},e,{loading:!1}))},l)},[l]),y=Object(n.useCallback)(function(){return Object(i.a)(u.a.mark(function e(){var n,o,i,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(t,"/").concat(a),r);case 3:return n=e.sent,e.next=6,n.json();case 6:if(o=e.sent,i=n.ok,l=o.error,i&&!l){e.next=11;break}return e.abrupt("return",x({error:l||j}));case 11:x({data:o}),O&&localStorage.setItem(c,JSON.stringify(Object(m.a)({},o,{timeStampFetch:new Date}))),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),x({error:e.t0});case 18:case"end":return e.stop()}},e,null,[[0,15]])}))()},[t,a,r]),R=Object(n.useCallback)(function(){w(p),y()},[]);return Object(n.useEffect)(function(){C||y()},[]),{data:C,error:k,loading:N,reload:R}},j=function(){return Object(n.useContext)(A)},p=a(4),g=function(e){var t=Object(n.useRef)(),a=Object(n.useRef)(),r=Object(n.useRef)(),c=Object(n.useCallback)(function(){return e.reduce(function(e,a){return Object(m.a)({},e,Object(p.a)({},a,t.current[a]))},{})},[e]),o=Object(n.useCallback)(function(){return Object.entries(a.current).reduce(function(e,t){var a=Object(b.a)(t,2),n=a[0],r=a[1].value;return Object(m.a)({},e,Object(p.a)({},n,r))},{})},[e]),u=Object(n.useCallback)(function(e){var t=e.prevValues,a=e.nextValues;return Object.entries(a).some(function(e){var a=Object(b.a)(e,2),n=a[0],r=a[1];return t[n]!==r})},[]),i=Object(n.useCallback)(function(e){return!Object.values(e).some(function(e){return!e})},[]);Object(n.useEffect)(function(){a.current=c(),r.current=o()},[]);var l=Object(n.useCallback)(function(){var e=r.current,t=o(),a=i(t),n=u({prevValues:e,nextValues:t}),c=e;return n&&(r.current=t,c=t),{hasChange:n,validValues:a,values:c}},[]);return{refForm:t,getFormData:l}};var E=function(e){var t=Object(n.useRef)({value:"",focus:!1}).current,a=Object(n.useRef)(["onChange","onBlur","onFocus"]).current,c=Object(n.useState)(t),o=Object(b.a)(c,2),u=o[0],i=u.value,l=u.focus,s=o[1],f=Object(n.useMemo)(function(){return r.a.createElement("option",{value:i,label:i},i)},[i]),d=Object(n.useMemo)(function(){return l?e:f},[l]),O=Object(n.useCallback)(function(e){var t=e.type,a=e.target.value;switch(t){case"blur":case"focus":return s(function(e){var t=e.focus,a=Object(v.a)(e,["focus"]);return Object(m.a)({},a,{focus:!t})});case"change":return s(function(e){return Object(m.a)({},e,{value:a})});default:return}},[]),j=Object(n.useMemo)(function(){return a.reduce(function(e,t){return Object(m.a)({},e,Object(p.a)({},t,O))},{})},[]);return{value:i,content:d,listeners:j}};function h(e){var t=e.children,a=Object(v.a)(e,["children"]);return r.a.createElement("input",Object.assign({},a,{type:"button",value:t}))}function C(e){var t=e.legend,a=e.children,n=Object(v.a)(e,["legend","children"]);return r.a.createElement("fieldset",n,r.a.createElement("legend",null,t),a)}function k(e){var t=e.id,a=e.label,n=e.control,c=e.Control,o=Object(v.a)(e,["id","label","control","Control"]);return r.a.createElement("section",o,r.a.createElement("label",{htmlFor:t},a,r.a.createElement(c,Object.assign({},n,{id:t}))))}function N(e){var t=e.initialValue,a=e.validation,c=Object(v.a)(e,["initialValue","validation"]),o=function(e){var t=e.validation,a=e.initialValue,r=void 0===a?"":a,c=Object(n.useState)(r),o=Object(b.a)(c,2),u=o[0],i=o[1];return{value:u,changeValue:Object(n.useCallback)(function(e){var a=e.target.value;i(function(e){return t.test(a)?a:e})},[t])}}({initialValue:t,validation:a}),u=o.value,i=o.changeValue;return r.a.createElement("input",Object.assign({},c,{value:u,onChange:i}))}function w(e){return r.a.createElement(k,Object.assign({},e,{Control:N}))}function x(e){var t=e.output,a=e.tooltipTime,n=void 0===a?2e3:a,c=Object(v.a)(e,["output","tooltipTime"]),o=s({tooltipTime:n}).writeClipboard;return r.a.createElement(C,c,r.a.createElement("section",null,r.a.createElement("output",{onClick:o},t)))}function y(e){return r.a.createElement(k,Object.assign({},e,{Control:R}))}function R(e){var t=e.options,a=Object(v.a)(e,["options"]),n=E(t),c=n.value,o=n.content,u=n.listeners;return r.a.createElement("select",Object.assign({},a,u,{value:c}),o)}function F(e){return r.a.createElement("img",Object.assign({},e,{src:"logo.svg",alt:"Foreign Exchange Logo"}))}var S=a(15);function V(e){var t=e.components,a=e.transition,c=e.transitions;return Object(n.useMemo)(function(){return t.map(function(e){var t=Object(b.a)(e,2),n=t[0],o=t[1];return r.a.createElement(S.Transition,Object.assign({},a,{in:c[n],key:n}),function(e){return r.a.createElement("div",{className:"layout animation animation-".concat(e)},r.a.createElement("h2",{className:"title animated-top"},"Foreign Exchange"),r.a.createElement(o,null))})})},[c])}var T=Object.entries({data:function(){var e=j().data,t=e.base,a=e.rates,c=Object(n.useRef)({type:"text",autoComplete:"off",placeholder:"Amount...",validation:/^([1-9]\d*|0?)((\.|,)\d{0,2})?$/}).current,o=Object(n.useMemo)(function(){return Object.keys(a).sort().map(function(e){return r.a.createElement("option",{value:e,label:e,key:e},e)})},[a]),u=g(["amount","from","into"]),i=u.refForm,l=u.getFormData,s=f({base:t,rates:a}),m=s.convert,b=Object(v.a)(s,["convert"]),O=d().formatCurrency,p=Object(n.useCallback)(function(e){e.preventDefault();var t=l();m(t)},[]),E=Object(n.useMemo)(function(){return O(b)},[b]);return r.a.createElement("form",{id:"ForeignData",ref:i},r.a.createElement(C,{legend:"Enter amount",className:"animated-left"},r.a.createElement(w,{id:"amount",label:"Amount",control:c})),r.a.createElement(C,{legend:"Set currencies",className:"animated-right"},r.a.createElement("div",{className:"currencies"},r.a.createElement(y,{id:"from",label:"From",control:{options:o}}),r.a.createElement(y,{id:"into",label:"Into",control:{options:o}}))),r.a.createElement(h,{className:"animated-scale",onClick:p},"Convert"),r.a.createElement(x,{legend:"Get conversion",output:E,className:"conversion animated-bottom"}))},error:function(){var e=j(),t=e.error,a=e.reload;return r.a.createElement("form",{id:"ForeignError"},r.a.createElement(x,{legend:"Error description",output:"Error while loading",className:"animated-left"}),r.a.createElement(x,{legend:"Error solution",output:"Reload with the button below",className:"animated-right"}),r.a.createElement(h,{className:"animated-scale",onClick:a},"Reload"),r.a.createElement(x,{legend:"Error details",output:"".concat(t),className:"animated-bottom"}))},loading:function(){return r.a.createElement("section",{id:"ForeignLoading"},r.a.createElement("div",{className:"loader"},r.a.createElement("div",{className:"slot animated-left"}),r.a.createElement("div",{className:"dollar animated-fall"},r.a.createElement(F,{className:"animated-scale"})),r.a.createElement("div",{className:"slot animated-right"})),r.a.createElement("p",{className:"animated-bottom"},"Loading exchange rates"))}}),M={key:"OPEN_EXCHANGE_RATES_STORAGE_KEY",url:"https://openexchangerates.org/api",endpoint:"latest.json?app_id=".concat("7020df9878e641ac845a0978f6206bf9"),lifetime:864e5,delay:3e3},D={appear:!0,unmountOnExit:!0,timeout:500},A=Object(n.createContext)(),I=A.Provider;A.Consumer;function L(e){var t=O(M),a=t.data,c=t.error,o=t.loading,u=Object(n.useMemo)(function(){return{data:!!a,error:!!c,loading:o}},[a,c,o]);return r.a.createElement(I,Object.assign({},e,{value:{data:a,error:c,loading:o}}),r.a.createElement("main",{id:"ForeignExchange",className:"wrapper"},r.a.createElement(V,{components:T,transition:D,transitions:u})))}a(33);Object(c.render)(r.a.createElement(function(){return r.a.createElement("div",{className:"App"},r.a.createElement(L,null))},null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.893e28fb.chunk.js.map