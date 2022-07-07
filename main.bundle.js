(()=>{"use strict";var t={192:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([t.id,"html,body{height:100%;margin:0;overflow-y:hidden}body{background-color:#1a2330}",""]);const s=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],s=0;s<t.length;s++){var c=t[s],u=r.base?c[0]+r.base:c[0],d=i[u]||0,p="".concat(u," ").concat(d);i[u]=d+1;var h=n(p),l={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(l);else{var f=o(l,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var s=n(i[a]);e[s].references--}for(var c=r(t,o),u=0;u<i.length;u++){var d=n(i[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t,e=new Uint8Array(16);function r(){if(!t&&!(t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(e)}const o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,i=function(t){return"string"==typeof t&&o.test(t)};for(var a=[],s=0;s<256;++s)a.push((s+256).toString(16).substr(1));const c=function(t,e,n){var o=(t=t||{}).random||(t.rng||r)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e){n=n||0;for(var s=0;s<16;++s)e[n+s]=o[s];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(a[t[e+0]]+a[t[e+1]]+a[t[e+2]]+a[t[e+3]]+"-"+a[t[e+4]]+a[t[e+5]]+"-"+a[t[e+6]]+a[t[e+7]]+"-"+a[t[e+8]]+a[t[e+9]]+"-"+a[t[e+10]]+a[t[e+11]]+a[t[e+12]]+a[t[e+13]]+a[t[e+14]]+a[t[e+15]]).toLowerCase();if(!i(n))throw TypeError("Stringified UUID is invalid");return n}(o)};var u,d,p,h,l,f=function(t){this.v=0,Object.assign(this,t),this.id=c()},v=function(){function t(t){this.threads=[],this.elapsedTime=0,Object.assign(this,t)}return t.prototype.populate=function(){this.threads.push(new f({y:this.height/2}))},t.prototype.update=function(t){this.elapsedTime+=t;for(var e=0,n=this.threads;e<n.length;e++){var r=n[e];r.y+=t*r.v}},t}(),m=function(){function t(t){this.ctxOptions={strokeStyle:"white",lineWidth:5,lineCap:"round"},this.lastY=new Map,this.speed=.05,Object.assign(this,t)}return t.prototype.reset=function(){this.lastX=0},t.prototype.render=function(t){this.ctx.save(),Object.assign(this.ctx,this.ctxOptions);var e=this.lastX+t*this.speed;if(this.lastX)for(var n=0,r=this.threads.threads;n<r.length;n++){var o=r[n],i=o.y,a=o.id,s=this.lastY.get(a);s&&(this.ctx.beginPath(),this.ctx.moveTo(this.lastX,s),this.ctx.lineTo(e,i),this.ctx.stroke()),this.lastY.set(a,i)}this.lastX=e,this.ctx.restore()},t}(),y=n(379),g=n.n(y),w=n(795),b=n.n(w),x=n(569),C=n.n(x),T=n(565),S=n.n(T),E=n(216),O=n.n(E),j=n(589),I=n.n(j),M=n(192),A={};function R(t){var e=t-l;l=t,p.update(e),h.render(e),window.requestAnimationFrame(R),u.width<h.lastX&&function(t,e,n){var r=document.createElement("canvas");r.width=t.width,r.height=t.height,r.getContext("2d").drawImage(t,0,0),t.width=e,t.height=n,t.getContext("2d").drawImage(r,0,0)}(u,2*u.width,u.height)}A.styleTagTransform=I(),A.setAttributes=S(),A.insert=C().bind(null,"head"),A.domAPI=b(),A.insertStyleElement=O(),g()(M.Z,A),M.Z&&M.Z.locals&&M.Z.locals,window.addEventListener("load",(function(){(u=document.querySelector("canvas")).width=document.body.clientWidth,u.height=document.body.clientHeight,d=u.getContext("2d"),p=new v({height:u.height,numThreads:1}),h=new m({ctx:d,threads:p}),l=window.performance.now(),p.populate(),h.reset(),window.requestAnimationFrame(R)}))})()})();