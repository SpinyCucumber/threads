(()=>{var t={307:t=>{t.exports=function t(e,i,o){function s(n,a){if(!i[n]){if(!e[n]){if(r)return r(n,!0);var h=new Error("Cannot find module '"+n+"'");throw h.code="MODULE_NOT_FOUND",h}var l=i[n]={exports:{}};e[n][0].call(l.exports,(function(t){return s(e[n][1][t]||t)}),l,l.exports,t,e,i,o)}return i[n].exports}for(var r=void 0,n=0;n<o.length;n++)s(o[n]);return s}({1:[function(t,e,i){var o,s,r,n,a,h={}.hasOwnProperty;o=t("./PriorityQueue/AbstractPriorityQueue"),s=t("./PriorityQueue/ArrayStrategy"),n=t("./PriorityQueue/BinaryHeapStrategy"),r=t("./PriorityQueue/BHeapStrategy"),(a=function(t){function e(t){t||(t={}),t.strategy||(t.strategy=n),t.comparator||(t.comparator=function(t,e){return(t||0)-(e||0)}),e.__super__.constructor.call(this,t)}return function(t,e){for(var i in e)h.call(e,i)&&(t[i]=e[i]);function o(){this.constructor=t}o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype}(e,t),e}(o)).ArrayStrategy=s,a.BinaryHeapStrategy=n,a.BHeapStrategy=r,e.exports=a},{"./PriorityQueue/AbstractPriorityQueue":2,"./PriorityQueue/ArrayStrategy":3,"./PriorityQueue/BHeapStrategy":4,"./PriorityQueue/BinaryHeapStrategy":5}],2:[function(t,e,i){e.exports=function(){function t(t){var e;if(null==(null!=t?t.strategy:void 0))throw"Must pass options.strategy, a strategy";if(null==(null!=t?t.comparator:void 0))throw"Must pass options.comparator, a comparator";this.priv=new t.strategy(t),this.length=(null!=t&&null!=(e=t.initialValues)?e.length:void 0)||0}return t.prototype.queue=function(t){this.length++,this.priv.queue(t)},t.prototype.dequeue=function(t){if(!this.length)throw"Empty queue";return this.length--,this.priv.dequeue()},t.prototype.peek=function(t){if(!this.length)throw"Empty queue";return this.priv.peek()},t.prototype.clear=function(){return this.length=0,this.priv.clear()},t}()},{}],3:[function(t,e,i){var o;o=function(t,e,i){var o,s,r;for(s=0,o=t.length;s<o;)i(t[r=s+o>>>1],e)>=0?s=r+1:o=r;return s},e.exports=function(){function t(t){var e;this.options=t,this.comparator=this.options.comparator,this.data=(null!=(e=this.options.initialValues)?e.slice(0):void 0)||[],this.data.sort(this.comparator).reverse()}return t.prototype.queue=function(t){var e;e=o(this.data,t,this.comparator),this.data.splice(e,0,t)},t.prototype.dequeue=function(){return this.data.pop()},t.prototype.peek=function(){return this.data[this.data.length-1]},t.prototype.clear=function(){this.data.length=0},t}()},{}],4:[function(t,e,i){e.exports=function(){function t(t){var e,i,o,s,r,n,a,h;for(this.comparator=(null!=t?t.comparator:void 0)||function(t,e){return t-e},this.pageSize=(null!=t?t.pageSize:void 0)||512,this.length=0,a=0;1<<a<this.pageSize;)a+=1;if(1<<a!==this.pageSize)throw"pageSize must be a power of two";for(this._shift=a,this._emptyMemoryPageTemplate=e=[],i=0,r=this.pageSize;0<=r?i<r:i>r;0<=r?++i:--i)e.push(null);if(this._memory=[],this._mask=this.pageSize-1,t.initialValues)for(o=0,s=(n=t.initialValues).length;o<s;o++)h=n[o],this.queue(h)}return t.prototype.queue=function(t){this.length+=1,this._write(this.length,t),this._bubbleUp(this.length,t)},t.prototype.dequeue=function(){var t,e;return t=this._read(1),e=this._read(this.length),this.length-=1,this.length>0&&(this._write(1,e),this._bubbleDown(1,e)),t},t.prototype.peek=function(){return this._read(1)},t.prototype.clear=function(){this.length=0,this._memory.length=0},t.prototype._write=function(t,e){var i;for(i=t>>this._shift;i>=this._memory.length;)this._memory.push(this._emptyMemoryPageTemplate.slice(0));return this._memory[i][t&this._mask]=e},t.prototype._read=function(t){return this._memory[t>>this._shift][t&this._mask]},t.prototype._bubbleUp=function(t,e){var i,o,s,r;for(i=this.comparator;t>1&&(o=t&this._mask,t<this.pageSize||o>3?s=t&~this._mask|o>>1:o<2?(s=t-this.pageSize>>this._shift,s+=s&~(this._mask>>1),s|=this.pageSize>>1):s=t-2,!(i(r=this._read(s),e)<0));)this._write(s,e),this._write(t,r),t=s},t.prototype._bubbleDown=function(t,e){var i,o,s,r,n;for(n=this.comparator;t<this.length;)if(t>this._mask&&!(t&this._mask-1)?i=o=t+2:t&this.pageSize>>1?(i=(t&~this._mask)>>1,o=1+(i=1+(i|=t&this._mask>>1)<<this._shift)):o=(i=t+(t&this._mask))+1,i!==o&&o<=this.length)if(s=this._read(i),r=this._read(o),n(s,e)<0&&n(s,r)<=0)this._write(i,e),this._write(t,s),t=i;else{if(!(n(r,e)<0))break;this._write(o,e),this._write(t,r),t=o}else{if(!(i<=this.length))break;if(!(n(s=this._read(i),e)<0))break;this._write(i,e),this._write(t,s),t=i}},t}()},{}],5:[function(t,e,i){e.exports=function(){function t(t){var e;this.comparator=(null!=t?t.comparator:void 0)||function(t,e){return t-e},this.length=0,this.data=(null!=(e=t.initialValues)?e.slice(0):void 0)||[],this._heapify()}return t.prototype._heapify=function(){var t,e,i;if(this.data.length>0)for(t=e=1,i=this.data.length;1<=i?e<i:e>i;t=1<=i?++e:--e)this._bubbleUp(t)},t.prototype.queue=function(t){this.data.push(t),this._bubbleUp(this.data.length-1)},t.prototype.dequeue=function(){var t,e;return e=this.data[0],t=this.data.pop(),this.data.length>0&&(this.data[0]=t,this._bubbleDown(0)),e},t.prototype.peek=function(){return this.data[0]},t.prototype.clear=function(){this.length=0,this.data.length=0},t.prototype._bubbleUp=function(t){for(var e,i;t>0&&(e=t-1>>>1,this.comparator(this.data[t],this.data[e])<0);)i=this.data[e],this.data[e]=this.data[t],this.data[t]=i,t=e},t.prototype._bubbleDown=function(t){var e,i,o,s,r;for(e=this.data.length-1;s=1+(i=1+(t<<1)),o=t,i<=e&&this.comparator(this.data[i],this.data[o])<0&&(o=i),s<=e&&this.comparator(this.data[s],this.data[o])<0&&(o=s),o!==t;)r=this.data[o],this.data[o]=this.data[t],this.data[t]=r,t=o},t}()},{}]},{},[1])(1)}},e={};function i(o){var s=e[o];if(void 0!==s)return s.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,i),r.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var o in e)i.o(e,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";class t{constructor(t=0,e=0){this.x=t,this.y=e}sum(e){return new t(this.x+e.x,this.y+e.y)}diff(e){return new t(this.x-e.x,this.y-e.y)}scaledBy(e){return new t(e*this.x,e*this.y)}perp(){return new t(-this.y,this.x)}toString(){return`(${this.x}, ${this.y})`}}class e{constructor(t,e){this.vector=t,this.index=e}get opposite(){return r[(this.index+4)%8]}}class o{constructor(e,i,o){this.width=e,this.height=i,this.cells=[...Array(i).keys()].map((i=>[...Array(e).keys()].map((e=>o(new t(e,i))))))}get(t){return this.cells[t.y][t.x]}isValidPosition(t){return t.x>=0&&t.y>=0&&t.x<this.width&&t.y<this.height}map(t){return new o(this.width,this.height,(e=>t(this.get(e))))}}function s(t){return t.reduce(((t,e)=>t+e),0)}const r=Array.from(function*(){let e=new t(-1,-1),i=new t(1,0);for(let t=0;t<4;t++){for(let t=0;t<2;t++)yield e,e=e.sum(i);i=i.perp()}}()).map(((t,i)=>new e(t,i)));var n=i(307),a=i.n(n);class h{constructor(t,e,i){this.connections=new Set(r.filter((({index:e})=>t>>e&1))),this.weight=e,this.weightLogWeight=e*Math.log2(e),this.index=i}}class l{constructor(t){Object.assign(this,t)}get entropy(){return Math.log2(this.weightSum)-this.weightLogWeightSum/this.weightSum+this.entropyNoise}chooseTile(){let t=Math.floor(Math.random()*this.weightSum);for(const e of this.possibleTiles){const{weight:i}=e;if(!(t>=i))return e;t-=i}}removeTile(t){this.possibleTiles.delete(t),this.weightSum-=t.weight,this.weightLogWeightSum-=t.weightLogWeight}}const u=[[8,1],[136,4],[9,1],[72,1],[132,1],[144,1],[17,1],[68,1],[128,1]].map((([t,e],i)=>new h(t,e,i))),p=new class{constructor(t,e,i,n){this.removals=[],this.minEntropy=new(a())({comparator:(t,e)=>t.entropy-e.entropy}),this.uncollapsedCells=t*e,this.tilesWithConnection=r.map((t=>new Set(i.filter((e=>e.connections.has(t)))))),this.tilesWithoutConnection=r.map((t=>new Set(i.filter((e=>!e.connections.has(t))))));const h=s(i.map((t=>t.weight))),u=s(i.map((t=>t.weightLogWeight))),p=this.tilesWithConnection.map((t=>t.size)),c=this.tilesWithoutConnection.map((t=>t.size));this.grid=new o(t,e,(t=>{const e=new l({position:t,possibleTiles:new Set(i),weightSum:h,weightLogWeightSum:u,enablers:[...p],disablers:[...c],entropyNoise:n()});return this.minEntropy.queue(e),e}))}run(){for(console.debug("Collapsing grid!"),console.log(r);this.uncollapsedCells>0;){const t=this.chooseCell();this.collapseCell(t),this.propagate(),this.uncollapsedCells-=1}return this.grid.map((t=>t.value))}chooseCell(){let t;for(;t=this.minEntropy.dequeue();)if(void 0===t.value)return t}collapseCell(t){console.debug(`Collapsing cell ${t.position}`),t.value=t.chooseTile(),console.debug(`Cell ${t.position} collapsed to tile ${t.value.index}`);for(const e of t.possibleTiles)e!==t.value&&this.removals.push({cell:t,tile:e})}propagate(){let t;for(;t=this.removals.pop();){const{tile:e,cell:i}=t;console.debug(`Propagating removal of tile ${e.index} from cell ${i.position}`);for(const t of r){const o=i.position.sum(t.vector);if(!this.grid.isValidPosition(o))continue;const s=this.grid.get(o);if(void 0!==s.value)continue;const r=t.opposite.index;if(e.connections.has(t)){if(console.debug(`Decrementing enablers of cell ${s.position} for connection ${t.opposite.vector}`),s.enablers[r]-=1,0===s.enablers[r])for(const t of this.tilesWithConnection[r])s.possibleTiles.has(t)&&(console.debug(`Removing tile ${t.index} from cell ${s.position}`),s.removeTile(t),this.minEntropy.queue(s),this.removals.push({cell:s,tile:t}))}else if(console.debug(`Decrementing disablers of cell ${s.position} for connection ${t.opposite.vector}`),s.disablers[r]-=1,0===s.disablers[r])for(const t of this.tilesWithoutConnection[r])s.possibleTiles.has(t)&&(console.debug(`Removing tile ${t.index} from cell ${s.position}`),s.removeTile(t),this.minEntropy.queue(s),this.removals.push({cell:s,tile:t}))}}}}(8,8,u,(()=>0)),c=p.run(),f=[" x-","---"," \\--","/--","--/","--\\"," \\ "," / ","-x "];for(let e=0;e<8;e++)console.log([...Array(8).keys()].map((i=>{const o=c.get(new t(i,e));return f[o.index]})).join(" "))})()})();