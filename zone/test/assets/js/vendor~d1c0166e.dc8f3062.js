(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vendor~d1c0166e"],{"217d":function(t,n){function i(t,n){var i,s=0,e=t.length;for(s;s<e;s++)if(i=n(t[s],s),!1===i)break}function s(t){return"[object Array]"===Object.prototype.toString.apply(t)}function e(t){return"function"===typeof t}t.exports={isFunction:e,isArray:s,each:i}},"8e95":function(t,n,i){var s=i("c195");t.exports=new s},9020:function(t,n){function i(t){this.options=t,!t.deferSetup&&this.setup()}i.prototype={constructor:i,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},t.exports=i},bcf7:function(t,n,i){var s=i("9020"),e=i("217d").each;function o(t,n){this.query=t,this.isUnconditional=n,this.handlers=[],this.mql=window.matchMedia(t);var i=this;this.listener=function(t){i.mql=t.currentTarget||t,i.assess()},this.mql.addListener(this.listener)}o.prototype={constuctor:o,addHandler:function(t){var n=new s(t);this.handlers.push(n),this.matches()&&n.on()},removeHandler:function(i){var s=this.handlers;e(s,function(t,n){if(t.equals(i))return t.destroy(),!s.splice(n,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){e(this.handlers,function(t){t.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var n=this.matches()?"on":"off";e(this.handlers,function(t){t[n]()})}},t.exports=o},c195:function(t,n,i){var o=i("bcf7"),s=i("217d"),r=s.each,c=s.isFunction,h=s.isArray;function e(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}e.prototype={constructor:e,register:function(n,t,i){var s=this.queries,e=i&&this.browserIsIncapable;return s[n]||(s[n]=new o(n,e)),c(t)&&(t={match:t}),h(t)||(t=[t]),r(t,function(t){c(t)&&(t={match:t}),s[n].addHandler(t)}),this},unregister:function(t,n){var i=this.queries[t];return i&&(n?i.removeHandler(n):(i.clear(),delete this.queries[t])),this}},t.exports=e}}]);