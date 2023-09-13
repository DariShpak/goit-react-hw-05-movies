/*! For license information please see 959.026d5bfe.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[959],{8959:function(t,r,e){e.r(r),e.d(r,{default:function(){return G}});var n=e(3433),o=e(5861),i=e(9439),a=e(2791),c=e(1243),u=e(3957);function f(){f=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(Z){u=function(t,r,e){return t[r]=e}}function s(t,r,e,o){var i=r&&r.prototype instanceof p?r:p,a=Object.create(i.prototype),c=new k(o||[]);return n(a,"_invoke",{value:L(t,e,c)}),a}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(Z){return{type:"throw",arg:Z}}}t.wrap=s;var h={};function p(){}function v(){}function d(){}var y={};u(y,i,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(O([])));m&&m!==r&&e.call(m,i)&&(y=m);var w=d.prototype=p.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function b(t,r){function o(n,i,a,c){var u=l(t[n],t,i);if("throw"!==u.type){var f=u.arg,s=f.value;return s&&"object"==typeof s&&e.call(s,"__await")?r.resolve(s.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):r.resolve(s).then((function(t){f.value=t,a(f)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}})}function L(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=E(a,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=l(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function E(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,E(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function _(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function O(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return v.prototype=d,n(w,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:v,configurable:!0}),v.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===v||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(b.prototype),u(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new b(s(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),u(w,c,"Generator"),u(w,i,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=O,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;_(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:O(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}var s,l,h,p,v,d=function(){var t=(0,o.Z)(f().mark((function t(r){var e;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/credits?api_key=").concat(u.$,"&language=en-US"));case 3:return e=t.sent,t.abrupt("return",e);case 7:throw t.prev=7,t.t0=t.catch(0),console.error("Error fetching cast:",t.t0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(r){return t.apply(this,arguments)}}(),y=d,g=e(7689),m=e(168),w=e(5867),x=w.ZP.section(s||(s=(0,m.Z)(["\n  max-width: 1000px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 24px;\n"]))),b=w.ZP.ul(l||(l=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 20px;\n"]))),L=w.ZP.li(h||(h=(0,m.Z)(["\n  width: 140px;\n\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n"]))),E=w.ZP.img(p||(p=(0,m.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: var(--border-radius);\n"]))),j=w.ZP.p(v||(v=(0,m.Z)(["\n  margin-top: 8px;\n  font-size: 12px;\n"]))),_=e(9228),k=e(184),O=function(t){var r=t.name,e=t.photo;return(0,k.jsxs)(L,{children:[(0,k.jsx)(E,{src:"".concat(_.Z).concat(e),alt:r,width:"100",height:"140",loading:"lazy",onError:function(t){t.target.src="https://www.plasticheal.dk/images/slider-placeholder380X412.png"}}),(0,k.jsx)(j,{children:r})]})},Z=e(2197),P=e(7072);function S(){S=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(O){u=function(t,r,e){return t[r]=e}}function f(t,r,e,o){var i=r&&r.prototype instanceof h?r:h,a=Object.create(i.prototype),c=new _(o||[]);return n(a,"_invoke",{value:b(t,e,c)}),a}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(O){return{type:"throw",arg:O}}}t.wrap=f;var l={};function h(){}function p(){}function v(){}var d={};u(d,i,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(k([])));g&&g!==r&&e.call(g,i)&&(d=g);var m=v.prototype=h.prototype=Object.create(d);function w(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function x(t,r){function o(n,i,a,c){var u=s(t[n],t,i);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"==typeof l&&e.call(l,"__await")?r.resolve(l.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):r.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}})}function b(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=L(a,e);if(c){if(c===l)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=s(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function L(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,L(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),l;var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,l;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,l):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,l)}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return p.prototype=v,n(m,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:p,configurable:!0}),p.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===p||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},w(x.prototype),u(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new x(f(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(m),u(m,c,"Generator"),u(m,i,(function(){return this})),u(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),l},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),l}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:k(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),l}},t}var G=function(){var t=(0,g.UO)().movieId,r=(0,a.useState)([]),e=(0,i.Z)(r,2),c=e[0],u=e[1],f=(0,a.useState)(!1),s=(0,i.Z)(f,2),l=s[0],h=s[1],p=(0,a.useState)(null),v=(0,i.Z)(p,2),d=v[0],m=v[1];return(0,a.useEffect)((function(){var r=function(){var r=(0,o.Z)(S().mark((function r(){var e,o;return S().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,h(!0),r.next=4,y(t);case 4:e=r.sent,0===(o=e.data.cast).length?(m("Oooops, there are no cast found for this movie"),u([])):(u((0,n.Z)(o)),m(null)),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),m(r.t0);case 12:return r.prev=12,h(!1),r.finish(12);case 15:case"end":return r.stop()}}),r,null,[[0,9,12,15]])})));return function(){return r.apply(this,arguments)}}();r()}),[t]),(0,k.jsxs)(x,{children:[l&&(0,k.jsx)(Z.c,{}),d&&(0,k.jsx)(P.Z,{error:d}),(0,k.jsx)(b,{children:c&&c.map((function(t){var r=t.id,e=t.name,n=t.profile_path;return(0,k.jsx)(O,{name:e,photo:n},r)}))})]})}},7072:function(t,r,e){e.d(r,{Z:function(){return s}});e(2791);var n,o,i=e(168),a=e(5867),c=a.ZP.div(n||(n=(0,i.Z)(["\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),u=a.ZP.h1(o||(o=(0,i.Z)(["\n  font-size: 14px;\n  background-color: var(--section-background);\n  border-radius: var(--border-radius);\n  padding: 20px;\n"]))),f=e(184),s=function(t){var r=t.error;return(0,f.jsx)(c,{children:(0,f.jsx)(u,{children:r})})}},2197:function(t,r,e){e.d(r,{c:function(){return u}});var n,o=e(8881),i=e(168),a=e(5867).ZP.div(n||(n=(0,i.Z)(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),c=e(184),u=function(){return(0,c.jsx)(a,{children:(0,c.jsx)(o.s5,{strokeColor:"#ffffff",strokeWidth:"5",animationDuration:"0.75",width:"76",visible:!0})})}},3957:function(t,r,e){e.d(r,{$:function(){return n}});var n="c44bc15ca1931b55e279cdae9c283603"},9228:function(t,r,e){e.d(r,{Z:function(){return n}});var n="https://image.tmdb.org/t/p/w500"}}]);
//# sourceMappingURL=959.026d5bfe.chunk.js.map