(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vendor~cb4c84df"],{"18c0":function(t,e,n){"use strict";var i=n("7fae"),r=n("e0d8"),a=n("8e43"),o=n("944e"),c=n("6d8b"),s=function(r){function t(t){var e=r.call(this,t)||this;e.type="ordinal";var n=e.getSetting("ordinalMeta");return n||(n=new a["a"]({})),Object(c["isArray"])(n)&&(n=new a["a"]({categories:Object(c["map"])(n,function(t){return Object(c["isObject"])(t)?t.value:t})})),e._ordinalMeta=n,e._extent=e.getSetting("extent")||[0,n.categories.length-1],e}return Object(i["b"])(t,r),t.prototype.parse=function(t){return"string"===typeof t?this._ordinalMeta.getOrdinal(t):Math.round(t)},t.prototype.contain=function(t){return t=this.parse(t),o["a"](t,this._extent)&&null!=this._ordinalMeta.categories[t]},t.prototype.normalize=function(t){return t=this._getTickNumber(this.parse(t)),o["d"](t,this._extent)},t.prototype.scale=function(t){return t=Math.round(o["e"](t,this._extent)),this.getRawOrdinalNumber(t)},t.prototype.getTicks=function(){var t=[],e=this._extent,n=e[0];while(n<=e[1])t.push({value:n}),n++;return t},t.prototype.getMinorTicks=function(t){},t.prototype.setSortInfo=function(t){if(null!=t){for(var e=t.ordinalNumbers,n=this._ordinalNumbersByTick=[],r=this._ticksByOrdinalNumber=[],i=0,a=this._ordinalMeta.categories.length,o=Math.min(a,e.length);i<o;++i){var c=e[i];n[i]=c,r[c]=i}for(var s=0;i<a;++i){while(null!=r[s])s++;n.push(s),r[s]=i}}else this._ordinalNumbersByTick=this._ticksByOrdinalNumber=null},t.prototype._getTickNumber=function(t){var e=this._ticksByOrdinalNumber;return e&&t>=0&&t<e.length?e[t]:t},t.prototype.getRawOrdinalNumber=function(t){var e=this._ordinalNumbersByTick;return e&&t>=0&&t<e.length?e[t]:t},t.prototype.getLabel=function(t){if(!this.isBlank()){var e=this.getRawOrdinalNumber(t.value),n=this._ordinalMeta.categories[e];return null==n?"":n+""}},t.prototype.count=function(){return this._extent[1]-this._extent[0]+1},t.prototype.unionExtentFromData=function(t,e){this.unionExtent(t.getApproximateExtent(e))},t.prototype.isInExtentRange=function(t){return t=this._getTickNumber(t),this._extent[0]<=t&&this._extent[1]>=t},t.prototype.getOrdinalMeta=function(){return this._ordinalMeta},t.prototype.niceTicks=function(){},t.prototype.niceExtent=function(){},t.type="ordinal",t}(r["a"]);r["a"].registerClass(s),e["a"]=s},"216a":function(t,e,n){"use strict";var r=n("7fae"),v=n("3842"),S=n("f876"),i=n("944e"),a=n("89e3"),o=n("e0d8"),D=n("6d8b"),c=function(t,e,n,r){while(n<r){var i=n+r>>>1;t[i][1]<e?n=i+1:r=i}return n},s=function(n){function t(t){var e=n.call(this,t)||this;return e.type="time",e}return Object(r["b"])(t,n),t.prototype.getLabel=function(t){var e=this.getSetting("useUTC");return Object(S["h"])(t.value,S["i"][Object(S["l"])(Object(S["m"])(this._minLevelUnit))]||S["i"].second,e,this.getSetting("locale"))},t.prototype.getFormattedLabel=function(t,e,n){var r=this.getSetting("useUTC"),i=this.getSetting("locale");return Object(S["r"])(t,e,n,i,r)},t.prototype.getTicks=function(t){var e=this._interval,n=this._extent,r=[];if(!e)return r;r.push({value:n[0],level:0});var i=this.getSetting("useUTC"),a=l(this._minLevelUnit,this._approxInterval,i,n);return r=r.concat(a),r.push({value:n[1],level:0}),r},t.prototype.niceExtent=function(t){var e=this._extent;if(e[0]===e[1]&&(e[0]-=S["a"],e[1]+=S["a"]),e[1]===-1/0&&e[0]===1/0){var n=new Date;e[1]=+new Date(n.getFullYear(),n.getMonth(),n.getDate()),e[0]=e[1]-S["a"]}this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval)},t.prototype.niceTicks=function(t,e,n){t=t||10;var r=this._extent,i=r[1]-r[0];this._approxInterval=i/t,null!=e&&this._approxInterval<e&&(this._approxInterval=e),null!=n&&this._approxInterval>n&&(this._approxInterval=n);var a=u.length,o=Math.min(c(u,this._approxInterval,0,a),a-1);this._interval=u[o][1],this._minLevelUnit=u[Math.max(o-1,0)][0]},t.prototype.parse=function(t){return"number"===typeof t?t:+v["o"](t)},t.prototype.contain=function(t){return i["a"](this.parse(t),this._extent)},t.prototype.normalize=function(t){return i["d"](this.parse(t),this._extent)},t.prototype.scale=function(t){return i["e"](t,this._extent)},t.type="time",t}(a["a"]),u=[["second",S["d"]],["minute",S["c"]],["hour",S["b"]],["quarter-day",6*S["b"]],["half-day",12*S["b"]],["day",1.2*S["a"]],["half-week",3.5*S["a"]],["week",7*S["a"]],["month",31*S["a"]],["quarter",95*S["a"]],["half-year",S["e"]/2],["year",S["e"]]];function j(t,e,n,r){var i=v["o"](e),a=v["o"](n),o=function(t){return Object(S["n"])(i,t,r)===Object(S["n"])(a,t,r)},c=function(){return o("year")},s=function(){return c()&&o("month")},u=function(){return s()&&o("day")},l=function(){return u()&&o("hour")},f=function(){return l()&&o("minute")},h=function(){return f()&&o("second")},p=function(){return h()&&o("millisecond")};switch(t){case"year":return c();case"month":return s();case"day":return u();case"hour":return l();case"minute":return f();case"second":return h();case"millisecond":return p()}}function N(t,e){return t/=S["a"],t>16?16:t>7.5?7:t>3.5?4:t>1.5?2:1}function B(t){var e=30*S["a"];return t/=e,t>6?6:t>3?3:t>2?2:1}function w(t){return t/=S["b"],t>12?12:t>6?6:t>3.5?4:t>2?2:1}function A(t,e){return t/=e?S["c"]:S["d"],t>30?30:t>20?20:t>15?15:t>10?10:t>5?5:t>2?2:1}function C(t){return v["m"](t,!0)}function F(t,e,n){var r=new Date(t);switch(Object(S["m"])(e)){case"year":case"month":r[Object(S["x"])(n)](0);case"day":r[Object(S["g"])(n)](1);case"hour":r[Object(S["p"])(n)](0);case"minute":r[Object(S["v"])(n)](0);case"second":r[Object(S["A"])(n)](0),r[Object(S["t"])(n)](0)}return r.getTime()}function l(t,h,p,v){var e=1e4,n=S["B"],r=0;function d(t,e,n,r,i,a,o){var c=new Date(e),s=e,u=c[r]();while(s<n&&s<=v[1])o.push({value:s}),u+=t,c[i](u),s=c.getTime();o.push({value:s,notAdd:!0})}function i(t,e,n){var r=[],i=!e.length;if(!j(Object(S["m"])(t),v[0],v[1],p)){i&&(e=[{value:F(new Date(v[0]),t,p)},{value:v[1]}]);for(var a=0;a<e.length-1;a++){var o=e[a].value,c=e[a+1].value;if(o!==c){var s=void 0,u=void 0,l=void 0,f=!1;switch(t){case"year":s=Math.max(1,Math.round(h/S["a"]/365)),u=Object(S["j"])(p),l=Object(S["k"])(p);break;case"half-year":case"quarter":case"month":s=B(h),u=Object(S["w"])(p),l=Object(S["x"])(p);break;case"week":case"half-week":case"day":s=N(h,31),u=Object(S["f"])(p),l=Object(S["g"])(p),f=!0;break;case"half-day":case"quarter-day":case"hour":s=w(h),u=Object(S["o"])(p),l=Object(S["p"])(p);break;case"minute":s=A(h,!0),u=Object(S["u"])(p),l=Object(S["v"])(p);break;case"second":s=A(h,!1),u=Object(S["z"])(p),l=Object(S["A"])(p);break;case"millisecond":s=C(h),u=Object(S["s"])(p),l=Object(S["t"])(p);break}d(s,o,c,u,l,f,r),"year"===t&&n.length>1&&0===a&&n.unshift({value:n[0].value-s})}}for(a=0;a<r.length;a++)n.push(r[a]);return r}}for(var a=[],o=[],c=0,s=0,u=0;u<n.length&&r++<e;++u){var l=Object(S["m"])(n[u]);if(Object(S["q"])(n[u])){i(n[u],a[a.length-1]||[],o);var f=n[u+1]?Object(S["m"])(n[u+1]):null;if(l!==f){if(o.length){s=c,o.sort(function(t,e){return t.value-e.value});for(var g=[],y=0;y<o.length;++y){var b=o[y].value;0!==y&&o[y-1].value===b||(g.push(o[y]),b>=v[0]&&b<=v[1]&&c++)}var x=(v[1]-v[0])/h;if(c>1.5*x&&s>x/1.5)break;if(a.push(g),c>x||t===n[u])break}o=[]}}}var m=Object(D["filter"])(Object(D["map"])(a,function(t){return Object(D["filter"])(t,function(t){return t.value>=v[0]&&t.value<=v[1]&&!t.notAdd})}),function(t){return t.length>0}),_=[],k=m.length-1;for(u=0;u<m.length;++u)for(var E=m[u],O=0;O<E.length;++O)_.push({value:E[O].value,level:k-u});_.sort(function(t,e){return t.value-e.value});var M=[];for(u=0;u<_.length;++u)0!==u&&_[u].value===_[u-1].value||M.push(_[u]);return M}o["a"].registerClass(s),e["a"]=s},"89e3":function(t,e,n){"use strict";var r=n("7fae"),i=n("3842"),a=n("eda2"),o=n("e0d8"),c=n("944e"),h=i["v"],s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="interval",t._interval=0,t._intervalPrecision=2,t}return Object(r["b"])(t,e),t.prototype.parse=function(t){return t},t.prototype.contain=function(t){return c["a"](t,this._extent)},t.prototype.normalize=function(t){return c["d"](t,this._extent)},t.prototype.scale=function(t){return c["e"](t,this._extent)},t.prototype.setExtent=function(t,e){var n=this._extent;isNaN(t)||(n[0]=parseFloat(t)),isNaN(e)||(n[1]=parseFloat(e))},t.prototype.unionExtent=function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1]),this.setExtent(e[0],e[1])},t.prototype.getInterval=function(){return this._interval},t.prototype.setInterval=function(t){this._interval=t,this._niceExtent=this._extent.slice(),this._intervalPrecision=c["b"](t)},t.prototype.getTicks=function(t){var e=this._interval,n=this._extent,r=this._niceExtent,i=this._intervalPrecision,a=[];if(!e)return a;var o=1e4;n[0]<r[0]&&(t?a.push({value:h(r[0]-e,i)}):a.push({value:n[0]}));var c=r[0];while(c<=r[1]){if(a.push({value:c}),c=h(c+e,i),c===a[a.length-1].value)break;if(a.length>o)return[]}var s=a.length?a[a.length-1].value:r[1];return n[1]>s&&(t?a.push({value:h(s+e,i)}):a.push({value:n[1]})),a},t.prototype.getMinorTicks=function(t){for(var e=this.getTicks(!0),n=[],r=this.getExtent(),i=1;i<e.length;i++){var a=e[i],o=e[i-1],c=0,s=[],u=a.value-o.value,l=u/t;while(c<t-1){var f=h(o.value+(c+1)*l);f>r[0]&&f<r[1]&&s.push(f),c++}n.push(s)}return n},t.prototype.getLabel=function(t,e){if(null==t)return"";var n=e&&e.precision;null==n?n=i["g"](t.value)||0:"auto"===n&&(n=this._intervalPrecision);var r=h(t.value,n,!0);return a["a"](r)},t.prototype.niceTicks=function(t,e,n){t=t||5;var r=this._extent,i=r[1]-r[0];if(isFinite(i)){i<0&&(i=-i,r.reverse());var a=c["c"](r,t,e,n);this._intervalPrecision=a.intervalPrecision,this._interval=a.interval,this._niceExtent=a.niceTickExtent}},t.prototype.niceExtent=function(t){var e=this._extent;if(e[0]===e[1])if(0!==e[0]){var n=e[0];t.fixMax||(e[1]+=n/2),e[0]-=n/2}else e[1]=1;var r=e[1]-e[0];isFinite(r)||(e[0]=0,e[1]=1),this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval);var i=this._interval;t.fixMin||(e[0]=h(Math.floor(e[0]/i)*i)),t.fixMax||(e[1]=h(Math.ceil(e[1]/i)*i))},t.type="interval",t}(o["a"]);o["a"].registerClass(s),e["a"]=s},"8c2a":function(t,e,n){"use strict";var r=n("7fae"),a=n("6d8b"),i=n("e0d8"),o=n("3842"),c=n("944e"),s=n("89e3"),u=i["a"].prototype,l=s["a"].prototype,f=o["v"],h=Math.floor,p=Math.ceil,v=Math.pow,d=Math.log,g=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="log",t.base=10,t._originalScale=new s["a"],t._interval=0,t}return Object(r["b"])(t,e),t.prototype.getTicks=function(t){var e=this._originalScale,r=this._extent,i=e.getExtent(),n=l.getTicks.call(this,t);return a["map"](n,function(t){var e=t.value,n=o["v"](v(this.base,e));return n=e===r[0]&&this._fixMin?b(n,i[0]):n,n=e===r[1]&&this._fixMax?b(n,i[1]):n,{value:n}},this)},t.prototype.setExtent=function(t,e){var n=this.base;t=d(t)/d(n),e=d(e)/d(n),l.setExtent.call(this,t,e)},t.prototype.getExtent=function(){var t=this.base,e=u.getExtent.call(this);e[0]=v(t,e[0]),e[1]=v(t,e[1]);var n=this._originalScale,r=n.getExtent();return this._fixMin&&(e[0]=b(e[0],r[0])),this._fixMax&&(e[1]=b(e[1],r[1])),e},t.prototype.unionExtent=function(t){this._originalScale.unionExtent(t);var e=this.base;t[0]=d(t[0])/d(e),t[1]=d(t[1])/d(e),u.unionExtent.call(this,t)},t.prototype.unionExtentFromData=function(t,e){this.unionExtent(t.getApproximateExtent(e))},t.prototype.niceTicks=function(t){t=t||10;var e=this._extent,n=e[1]-e[0];if(!(n===1/0||n<=0)){var r=o["r"](n),i=t/n*r;i<=.5&&(r*=10);while(!isNaN(r)&&Math.abs(r)<1&&Math.abs(r)>0)r*=10;var a=[o["v"](p(e[0]/r)*r),o["v"](h(e[1]/r)*r)];this._interval=r,this._niceExtent=a}},t.prototype.niceExtent=function(t){l.niceExtent.call(this,t),this._fixMin=t.fixMin,this._fixMax=t.fixMax},t.prototype.parse=function(t){return t},t.prototype.contain=function(t){return t=d(t)/d(this.base),c["a"](t,this._extent)},t.prototype.normalize=function(t){return t=d(t)/d(this.base),c["d"](t,this._extent)},t.prototype.scale=function(t){return t=c["e"](t,this._extent),v(this.base,t)},t.type="log",t}(i["a"]),y=g.prototype;function b(t,e){return f(t,o["g"](e))}y.getMinorTicks=l.getMinorTicks,y.getLabel=l.getLabel,i["a"].registerClass(g),e["a"]=g},"944e":function(t,e,n){"use strict";n.d(e,"c",function(){return r}),n.d(e,"b",function(){return f}),n.d(e,"a",function(){return a}),n.d(e,"d",function(){return o}),n.d(e,"e",function(){return c});var u=n("3842"),l=u["v"];function r(t,e,n,r){var i={},a=t[1]-t[0],o=i.interval=u["m"](a/e,!0);null!=n&&o<n&&(o=i.interval=n),null!=r&&o>r&&(o=i.interval=r);var c=i.intervalPrecision=f(o),s=i.niceTickExtent=[l(Math.ceil(t[0]/o)*o,c),l(Math.floor(t[1]/o)*o,c)];return h(s,t),i}function f(t){return u["g"](t)+2}function i(t,e,n){t[e]=Math.max(Math.min(t[e],n[1]),n[0])}function h(t,e){!isFinite(t[0])&&(t[0]=e[0]),!isFinite(t[1])&&(t[1]=e[1]),i(t,0,e),i(t,1,e),t[0]>t[1]&&(t[0]=t[1])}function a(t,e){return t>=e[0]&&t<=e[1]}function o(t,e){return e[1]===e[0]?.5:(t-e[0])/(e[1]-e[0])}function c(t,e){return t*(e[1]-e[0])+e[0]}},"97ac":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("dc20");function i(t){t.registerPainter("svg",r["a"])}},c533:function(t,e,n){"use strict";var r=["#37A2DA","#32C5E9","#67E0E3","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#E062AE","#E690D1","#e7bcf3","#9d96f5","#8378EA","#96BFFF"];e["a"]={color:r,colorLayer:[["#37A2DA","#ffd85c","#fd7b5f"],["#37A2DA","#67E0E3","#FFDB5C","#ff9f7f","#E062AE","#9d96f5"],["#37A2DA","#32C5E9","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#e7bcf3","#8378EA","#96BFFF"],r]}},d15d:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("6d8b"),y=n("3842");function i(t){var a=Object(r["createHashMap"])();t.eachSeries(function(t){var e=t.get("stack");if(e){var n=a.get(e)||a.set(e,[]),r=t.getData(),i={stackResultDimension:r.getCalculationInfo("stackResultDimension"),stackedOverDimension:r.getCalculationInfo("stackedOverDimension"),stackedDimension:r.getCalculationInfo("stackedDimension"),stackedByDimension:r.getCalculationInfo("stackedByDimension"),isStackedByIndex:r.getCalculationInfo("isStackedByIndex"),data:r,seriesModel:t};if(!i.stackedDimension||!i.isStackedByIndex&&!i.stackedByDimension)return;n.length&&r.setCalculationInfo("stackedOnSeries",n[n.length-1].seriesModel),n.push(i)}}),a.each(o)}function o(g){Object(r["each"])(g,function(l,f){var h=[],p=[NaN,NaN],t=[l.stackResultDimension,l.stackedOverDimension],v=l.data,d=l.isStackedByIndex,e=v.map(t,function(t,e,n){var r,i,a=v.get(l.stackedDimension,n);if(isNaN(a))return p;d?i=v.getRawIndex(n):r=v.get(l.stackedByDimension,n);for(var o=NaN,c=f-1;c>=0;c--){var s=g[c];if(d||(i=s.data.rawIndexOf(s.stackedByDimension,r)),i>=0){var u=s.data.getByRawIndex(s.stackResultDimension,i);if(a>=0&&u>0||a<=0&&u<0){a=Object(y["b"])(a,u),o=u;break}}}return h[0]=a,h[1]=o,h});v.hostModel.setData(e),l.data=e})}},d3f4:function(t,e,n){"use strict";function r(t){return{seriesType:t,reset:function(t,e){var r=e.findComponents({mainType:"legend"});if(r&&r.length){var i=t.getData();i.filterSelf(function(t){for(var e=i.getName(t),n=0;n<r.length;n++)if(!r[n].isSelected(e))return!1;return!0})}}}}n.d(e,"a",function(){return r})},e0d8:function(t,e,n){"use strict";var r=n("625e"),i=function(){function t(t){this._setting=t||{},this._extent=[1/0,-1/0]}return t.prototype.getSetting=function(t){return this._setting[t]},t.prototype.unionExtent=function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1])},t.prototype.unionExtentFromData=function(t,e){this.unionExtent(t.getApproximateExtent(e))},t.prototype.getExtent=function(){return this._extent.slice()},t.prototype.setExtent=function(t,e){var n=this._extent;isNaN(t)||(n[0]=t),isNaN(e)||(n[1]=e)},t.prototype.isInExtentRange=function(t){return this._extent[0]<=t&&this._extent[1]>=t},t.prototype.isBlank=function(){return this._isBlank},t.prototype.setBlank=function(t){this._isBlank=t},t}();r["c"](i),e["a"]=i},f219:function(t,e,n){"use strict";var r="#B9B8CE",i="#100C2A",a=function(){return{axisLine:{lineStyle:{color:r}},splitLine:{lineStyle:{color:"#484753"}},splitArea:{areaStyle:{color:["rgba(255,255,255,0.02)","rgba(255,255,255,0.05)"]}},minorSplitLine:{lineStyle:{color:"#20203B"}}}},o=["#4992ff","#7cffb2","#fddd60","#ff6e76","#58d9f9","#05c091","#ff8a45","#8d48e3","#dd79ff"],c={darkMode:!0,color:o,backgroundColor:i,axisPointer:{lineStyle:{color:"#817f91"},crossStyle:{color:"#817f91"},label:{color:"#fff"}},legend:{textStyle:{color:r}},textStyle:{color:r},title:{textStyle:{color:"#EEF1FA"},subtextStyle:{color:"#B9B8CE"}},toolbox:{iconStyle:{borderColor:r}},dataZoom:{borderColor:"#71708A",textStyle:{color:r},brushStyle:{color:"rgba(135,163,206,0.3)"},handleStyle:{color:"#353450",borderColor:"#C5CBE3"},moveHandleStyle:{color:"#B0B6C3",opacity:.3},fillerColor:"rgba(135,163,206,0.2)",emphasis:{handleStyle:{borderColor:"#91B7F2",color:"#4D587D"},moveHandleStyle:{color:"#636D9A",opacity:.7}},dataBackground:{lineStyle:{color:"#71708A",width:1},areaStyle:{color:"#71708A"}},selectedDataBackground:{lineStyle:{color:"#87A3CE"},areaStyle:{color:"#87A3CE"}}},visualMap:{textStyle:{color:r}},timeline:{lineStyle:{color:r},label:{color:r},controlStyle:{color:r,borderColor:r}},calendar:{itemStyle:{color:i},dayLabel:{color:r},monthLabel:{color:r},yearLabel:{color:r}},timeAxis:a(),logAxis:a(),valueAxis:a(),categoryAxis:a(),line:{symbol:"circle"},graph:{color:o},gauge:{title:{color:r},axisLine:{lineStyle:{color:[[1,"rgba(207,212,219,0.2)"]]}},axisLabel:{color:r},detail:{color:"#EEF1FA"}},candlestick:{itemStyle:{color:"#f64e56",color0:"#54ea92",borderColor:"#f64e56",borderColor0:"#54ea92"}}};c.categoryAxis.splitLine.show=!1,e["a"]=c},f95e:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("0698");function i(t){t.registerPainter("canvas",r["a"])}},fdde:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var v={average:function(t){for(var e=0,n=0,r=0;r<t.length;r++)isNaN(t[r])||(e+=t[r],n++);return 0===n?NaN:e/n},sum:function(t){for(var e=0,n=0;n<t.length;n++)e+=t[n]||0;return e},max:function(t){for(var e=-1/0,n=0;n<t.length;n++)t[n]>e&&(e=t[n]);return isFinite(e)?e:NaN},min:function(t){for(var e=1/0,n=0;n<t.length;n++)t[n]<e&&(e=t[n]);return isFinite(e)?e:NaN},nearest:function(t){return t[0]}},d=function(t){return Math.round(t.length/2)};function r(t){return{seriesType:t,reset:function(t,e,n){var r=t.getData(),i=t.get("sampling"),a=t.coordinateSystem,o=r.count();if(o>10&&"cartesian2d"===a.type&&i){var c=a.getBaseAxis(),s=a.getOtherAxis(c),u=c.getExtent(),l=n.getDevicePixelRatio(),f=Math.abs(u[1]-u[0])*(l||1),h=Math.round(o/f);if(h>1){"lttb"===i&&t.setData(r.lttbDownSample(r.mapDimension(s.dim),1/h));var p=void 0;"string"===typeof i?p=v[i]:"function"===typeof i&&(p=i),p&&t.setData(r.downSample(r.mapDimension(s.dim),1/h,p,d))}}}}}}}]);