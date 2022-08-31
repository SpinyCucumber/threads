(()=>{var t={192:(t,e,i)=>{"use strict";i.d(e,{Z:()=>a});var o=i(81),r=i.n(o),n=i(645),s=i.n(n)()(r());s.push([t.id,"html,body{height:100%;margin:0;overflow-y:hidden}body{background-color:#000}.full-height{height:100%}.vbox{display:flex;flex-direction:column}.vbox.align-center{align-items:center}.vbox.justify-center{justify-content:center}.vbox.grow{flex-grow:1}",""]);const a=s},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i="",o=void 0!==e[5];return e[4]&&(i+="@supports (".concat(e[4],") {")),e[2]&&(i+="@media ".concat(e[2]," {")),o&&(i+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),i+=t(e),o&&(i+="}"),e[2]&&(i+="}"),e[4]&&(i+="}"),i})).join("")},e.i=function(t,i,o,r,n){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(o)for(var a=0;a<this.length;a++){var h=this[a][0];null!=h&&(s[h]=!0)}for(var l=0;l<t.length;l++){var u=[].concat(t[l]);o&&s[u[0]]||(void 0!==n&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=n),i&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=i):u[2]=i),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),e.push(u))}},e}},81:t=>{"use strict";t.exports=function(t){return t[1]}},307:t=>{t.exports=function t(e,i,o){function r(s,a){if(!i[s]){if(!e[s]){if(n)return n(s,!0);var h=new Error("Cannot find module '"+s+"'");throw h.code="MODULE_NOT_FOUND",h}var l=i[s]={exports:{}};e[s][0].call(l.exports,(function(t){return r(e[s][1][t]||t)}),l,l.exports,t,e,i,o)}return i[s].exports}for(var n=void 0,s=0;s<o.length;s++)r(o[s]);return r}({1:[function(t,e,i){var o,r,n,s,a,h={}.hasOwnProperty;o=t("./PriorityQueue/AbstractPriorityQueue"),r=t("./PriorityQueue/ArrayStrategy"),s=t("./PriorityQueue/BinaryHeapStrategy"),n=t("./PriorityQueue/BHeapStrategy"),(a=function(t){function e(t){t||(t={}),t.strategy||(t.strategy=s),t.comparator||(t.comparator=function(t,e){return(t||0)-(e||0)}),e.__super__.constructor.call(this,t)}return function(t,e){for(var i in e)h.call(e,i)&&(t[i]=e[i]);function o(){this.constructor=t}o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype}(e,t),e}(o)).ArrayStrategy=r,a.BinaryHeapStrategy=s,a.BHeapStrategy=n,e.exports=a},{"./PriorityQueue/AbstractPriorityQueue":2,"./PriorityQueue/ArrayStrategy":3,"./PriorityQueue/BHeapStrategy":4,"./PriorityQueue/BinaryHeapStrategy":5}],2:[function(t,e,i){e.exports=function(){function t(t){var e;if(null==(null!=t?t.strategy:void 0))throw"Must pass options.strategy, a strategy";if(null==(null!=t?t.comparator:void 0))throw"Must pass options.comparator, a comparator";this.priv=new t.strategy(t),this.length=(null!=t&&null!=(e=t.initialValues)?e.length:void 0)||0}return t.prototype.queue=function(t){this.length++,this.priv.queue(t)},t.prototype.dequeue=function(t){if(!this.length)throw"Empty queue";return this.length--,this.priv.dequeue()},t.prototype.peek=function(t){if(!this.length)throw"Empty queue";return this.priv.peek()},t.prototype.clear=function(){return this.length=0,this.priv.clear()},t}()},{}],3:[function(t,e,i){var o;o=function(t,e,i){var o,r,n;for(r=0,o=t.length;r<o;)i(t[n=r+o>>>1],e)>=0?r=n+1:o=n;return r},e.exports=function(){function t(t){var e;this.options=t,this.comparator=this.options.comparator,this.data=(null!=(e=this.options.initialValues)?e.slice(0):void 0)||[],this.data.sort(this.comparator).reverse()}return t.prototype.queue=function(t){var e;e=o(this.data,t,this.comparator),this.data.splice(e,0,t)},t.prototype.dequeue=function(){return this.data.pop()},t.prototype.peek=function(){return this.data[this.data.length-1]},t.prototype.clear=function(){this.data.length=0},t}()},{}],4:[function(t,e,i){e.exports=function(){function t(t){var e,i,o,r,n,s,a,h;for(this.comparator=(null!=t?t.comparator:void 0)||function(t,e){return t-e},this.pageSize=(null!=t?t.pageSize:void 0)||512,this.length=0,a=0;1<<a<this.pageSize;)a+=1;if(1<<a!==this.pageSize)throw"pageSize must be a power of two";for(this._shift=a,this._emptyMemoryPageTemplate=e=[],i=0,n=this.pageSize;0<=n?i<n:i>n;0<=n?++i:--i)e.push(null);if(this._memory=[],this._mask=this.pageSize-1,t.initialValues)for(o=0,r=(s=t.initialValues).length;o<r;o++)h=s[o],this.queue(h)}return t.prototype.queue=function(t){this.length+=1,this._write(this.length,t),this._bubbleUp(this.length,t)},t.prototype.dequeue=function(){var t,e;return t=this._read(1),e=this._read(this.length),this.length-=1,this.length>0&&(this._write(1,e),this._bubbleDown(1,e)),t},t.prototype.peek=function(){return this._read(1)},t.prototype.clear=function(){this.length=0,this._memory.length=0},t.prototype._write=function(t,e){var i;for(i=t>>this._shift;i>=this._memory.length;)this._memory.push(this._emptyMemoryPageTemplate.slice(0));return this._memory[i][t&this._mask]=e},t.prototype._read=function(t){return this._memory[t>>this._shift][t&this._mask]},t.prototype._bubbleUp=function(t,e){var i,o,r,n;for(i=this.comparator;t>1&&(o=t&this._mask,t<this.pageSize||o>3?r=t&~this._mask|o>>1:o<2?(r=t-this.pageSize>>this._shift,r+=r&~(this._mask>>1),r|=this.pageSize>>1):r=t-2,!(i(n=this._read(r),e)<0));)this._write(r,e),this._write(t,n),t=r},t.prototype._bubbleDown=function(t,e){var i,o,r,n,s;for(s=this.comparator;t<this.length;)if(t>this._mask&&!(t&this._mask-1)?i=o=t+2:t&this.pageSize>>1?(i=(t&~this._mask)>>1,o=1+(i=1+(i|=t&this._mask>>1)<<this._shift)):o=(i=t+(t&this._mask))+1,i!==o&&o<=this.length)if(r=this._read(i),n=this._read(o),s(r,e)<0&&s(r,n)<=0)this._write(i,e),this._write(t,r),t=i;else{if(!(s(n,e)<0))break;this._write(o,e),this._write(t,n),t=o}else{if(!(i<=this.length))break;if(!(s(r=this._read(i),e)<0))break;this._write(i,e),this._write(t,r),t=i}},t}()},{}],5:[function(t,e,i){e.exports=function(){function t(t){var e;this.comparator=(null!=t?t.comparator:void 0)||function(t,e){return t-e},this.length=0,this.data=(null!=(e=t.initialValues)?e.slice(0):void 0)||[],this._heapify()}return t.prototype._heapify=function(){var t,e,i;if(this.data.length>0)for(t=e=1,i=this.data.length;1<=i?e<i:e>i;t=1<=i?++e:--e)this._bubbleUp(t)},t.prototype.queue=function(t){this.data.push(t),this._bubbleUp(this.data.length-1)},t.prototype.dequeue=function(){var t,e;return e=this.data[0],t=this.data.pop(),this.data.length>0&&(this.data[0]=t,this._bubbleDown(0)),e},t.prototype.peek=function(){return this.data[0]},t.prototype.clear=function(){this.length=0,this.data.length=0},t.prototype._bubbleUp=function(t){for(var e,i;t>0&&(e=t-1>>>1,this.comparator(this.data[t],this.data[e])<0);)i=this.data[e],this.data[e]=this.data[t],this.data[t]=i,t=e},t.prototype._bubbleDown=function(t){var e,i,o,r,n;for(e=this.data.length-1;r=1+(i=1+(t<<1)),o=t,i<=e&&this.comparator(this.data[i],this.data[o])<0&&(o=i),r<=e&&this.comparator(this.data[r],this.data[o])<0&&(o=r),o!==t;)n=this.data[o],this.data[o]=this.data[t],this.data[t]=n,t=o},t}()},{}]},{},[1])(1)},379:t=>{"use strict";var e=[];function i(t){for(var i=-1,o=0;o<e.length;o++)if(e[o].identifier===t){i=o;break}return i}function o(t,o){for(var n={},s=[],a=0;a<t.length;a++){var h=t[a],l=o.base?h[0]+o.base:h[0],u=n[l]||0,c="".concat(l," ").concat(u);n[l]=u+1;var p=i(c),f={css:h[1],media:h[2],sourceMap:h[3],supports:h[4],layer:h[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var d=r(f,o);o.byIndex=a,e.splice(a,0,{identifier:c,updater:d,references:1})}s.push(c)}return s}function r(t,e){var i=e.domAPI(e);return i.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;i.update(t=e)}else i.remove()}}t.exports=function(t,r){var n=o(t=t||[],r=r||{});return function(t){t=t||[];for(var s=0;s<n.length;s++){var a=i(n[s]);e[a].references--}for(var h=o(t,r),l=0;l<n.length;l++){var u=i(n[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}n=h}}},569:t=>{"use strict";var e={};t.exports=function(t,i){var o=function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(i)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,i)=>{"use strict";t.exports=function(t){var e=i.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(i){!function(t,e,i){var o="";i.supports&&(o+="@supports (".concat(i.supports,") {")),i.media&&(o+="@media ".concat(i.media," {"));var r=void 0!==i.layer;r&&(o+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),o+=i.css,r&&(o+="}"),i.media&&(o+="}"),i.supports&&(o+="}");var n=i.sourceMap;n&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,i)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function i(o){var r=e[o];if(void 0!==r)return r.exports;var n=e[o]={id:o,exports:{}};return t[o](n,n.exports,i),n.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var o in e)i.o(e,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.nc=void 0,(()=>{"use strict";class t{constructor(t=0,e=0){this.x=t,this.y=e}sum(e){return new t(this.x+e.x,this.y+e.y)}diff(e){return new t(this.x-e.x,this.y-e.y)}scaledBy(e){return new t(e*this.x,e*this.y)}perp(){return new t(-this.y,this.x)}toString(){return`(${this.x}, ${this.y})`}}class e{constructor(t,e){this.vector=t,this.index=e}get opposite(){return n[(this.index+4)%8]}}class o{constructor(e,i,o){this.width=e,this.height=i,this.cells=[...Array(i).keys()].map((i=>[...Array(e).keys()].map((e=>o(new t(e,i))))))}get(t){return this.cells[t.y][t.x]}isValidPosition(t){return t.x>=0&&t.y>=0&&t.x<this.width&&t.y<this.height}*entries(){for(let e=0;e<this.height;e++)for(let i=0;i<this.width;i++)yield[new t(i,e),this.cells[e][i]]}map(t){return new o(this.width,this.height,(e=>t(this.get(e))))}}function r(t){return t.reduce(((t,e)=>t+e),0)}const n=Array.from(function*(){let e=new t(-1,-1),i=new t(1,0);for(let t=0;t<4;t++){for(let t=0;t<2;t++)yield e,e=e.sum(i);i=i.perp()}}()).map(((t,i)=>new e(t,i)));var s=i(307),a=i.n(s);class h{constructor(t,e,i){this.connections=new Set(n.filter((({index:e})=>t>>e&1))),this.weight=e,this.weightLogWeight=e*Math.log2(e),this.index=i}}class l{constructor(t){Object.assign(this,t)}get entropy(){return Math.log2(this.weightSum)-this.weightLogWeightSum/this.weightSum+this.entropyNoise}chooseTile(){let t=Math.floor(Math.random()*this.weightSum);for(const e of this.possibleTiles){const{weight:i}=e;if(!(t>=i))return e;t-=i}}removeTile(t){this.possibleTiles.delete(t),this.weightSum-=t.weight,this.weightLogWeightSum-=t.weightLogWeight}}function u(e){const i=new t(0,0),o=Array.from(e.connections).map((t=>t.vector));return[o.pop(),i,i,o.pop()||i]}class c{constructor({tiles:t,scaleX:e,scaleY:i}){this.scaleX=e,this.scaleY=i,this.bakedTiles=new Map(t.map((t=>[t,u(t)])))}run(t,e){const i=t.map((t=>this.bakedTiles.get(t)));for(const[t,o]of i.entries())this.renderCurve(o,t,e)}renderCurve(t,e,i){console.debug(`Rendering curve at ${e}`),i.save(),i.scale(this.scaleX/2,this.scaleY/2),i.translate(2*e.x+1,2*e.y+1),i.beginPath(),i.moveTo(t[0].x,t[0].y),i.bezierCurveTo(t[1].x,t[1].y,t[2].x,t[2].y,t[3].x,t[3].y),i.stroke(),i.restore()}}var p=i(379),f=i.n(p),d=i(795),g=i.n(d),y=i(569),m=i.n(y),v=i(565),b=i.n(v),w=i(216),_=i.n(w),x=i(589),S=i.n(x),C=i(192),k={};k.styleTagTransform=S(),k.setAttributes=b(),k.insert=m().bind(null,"head"),k.domAPI=g(),k.insertStyleElement=_(),f()(C.Z,k),C.Z&&C.Z.locals&&C.Z.locals;const T=[[8,1],[136,8],[9,4],[72,4],[132,4],[144,4],[17,4],[68,4],[128,1]].map((([t,e],i)=>new h(t,e,i))),P=new class{constructor({width:t,height:e,tiles:i,noiseFunction:s}){this.removals=[],this.minEntropy=new(a())({comparator:(t,e)=>t.entropy-e.entropy}),this.uncollapsedCells=t*e,this.tilesWithConnection=n.map((t=>new Set(i.filter((e=>e.connections.has(t)))))),this.tilesWithoutConnection=n.map((t=>new Set(i.filter((e=>!e.connections.has(t))))));const h=r(i.map((t=>t.weight))),u=r(i.map((t=>t.weightLogWeight))),c=this.tilesWithConnection.map((t=>t.size)),p=this.tilesWithoutConnection.map((t=>t.size));this.grid=new o(t,e,(t=>{const e=new l({position:t,possibleTiles:new Set(i),weightSum:h,weightLogWeightSum:u,enablers:[...c],disablers:[...p],entropyNoise:s()});return this.minEntropy.queue(e),e}))}run(){for(console.debug("Collapsing grid!");this.uncollapsedCells>0;){const t=this.chooseCell();this.collapseCell(t),this.propagate(),this.uncollapsedCells-=1}return this.grid.map((t=>t.value))}chooseCell(){let t;for(;t=this.minEntropy.dequeue();)if(void 0===t.value)return t}collapseCell(t){console.debug(`Collapsing cell ${t.position}`),t.value=t.chooseTile(),console.debug(`Cell ${t.position} collapsed to tile ${t.value.index}`);for(const e of t.possibleTiles)e!==t.value&&this.removals.push({cell:t,tile:e})}propagate(){let t;for(;t=this.removals.pop();){const{tile:e,cell:i}=t;console.debug(`Propagating removal of tile ${e.index} from cell ${i.position}`);for(const t of n){const o=i.position.sum(t.vector);if(!this.grid.isValidPosition(o))continue;const r=this.grid.get(o);if(void 0!==r.value)continue;const n=t.opposite.index;if(e.connections.has(t)){if(console.debug(`Decrementing enablers of cell ${r.position} for connection ${t.opposite.vector}`),r.enablers[n]-=1,0===r.enablers[n])for(const t of this.tilesWithConnection[n])r.possibleTiles.has(t)&&(console.debug(`Removing tile ${t.index} from cell ${r.position}`),r.removeTile(t),this.minEntropy.queue(r),this.removals.push({cell:r,tile:t}))}else if(console.debug(`Decrementing disablers of cell ${r.position} for connection ${t.opposite.vector}`),r.disablers[n]-=1,0===r.disablers[n])for(const t of this.tilesWithoutConnection[n])r.possibleTiles.has(t)&&(console.debug(`Removing tile ${t.index} from cell ${r.position}`),r.removeTile(t),this.minEntropy.queue(r),this.removals.push({cell:r,tile:t}))}}}}({width:20,height:20,tiles:T,noiseFunction:()=>.1*Math.random()}),q=P.run();window.onload=()=>{const t=document.querySelector("#canvas"),e=t.getContext("2d");e.lineWidth=.3,e.strokeStyle="white",e.lineCap="round",new c({tiles:T,scaleX:t.width/20,scaleY:t.height/20}).run(q,e)}})()})();