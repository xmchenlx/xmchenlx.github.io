(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vendor~0874f110"],{1020:function(e,n){var t={exports:{}};function a(t){return t instanceof Map?t.clear=t.delete=t.set=function(){throw new Error("map is read-only")}:t instanceof Set&&(t.add=t.clear=t.delete=function(){throw new Error("set is read-only")}),Object.freeze(t),Object.getOwnPropertyNames(t).forEach(function(e){var n=t[e];"object"!=typeof n||Object.isFrozen(n)||a(n)}),t}t.exports=a,t.exports.default=a;var k=t.exports;class H{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function o(n,...e){const t=Object.create(null);for(const e in n)t[e]=n[e];return e.forEach(function(n){for(const e in n)t[e]=n[e]}),t}const i="</span>",g=e=>!!e.kind,s=(n,{prefix:t})=>{if(n.includes(".")){const e=n.split(".");return[`${t}${e.shift()}`,...e.map((e,n)=>`${e}${"_".repeat(n+1)}`)].join(" ")}return`${t}${n}`};class c{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=r(e)}openNode(e){if(!g(e))return;let n=e.kind;n=e.sublanguage?"language-"+n:s(n,{prefix:this.classPrefix}),this.span(n)}closeNode(e){g(e)&&(this.buffer+=i)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class u{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){while(this.closeNode());}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(n,e){return"string"===typeof e?n.addText(e):e.children&&(n.openNode(e),e.children.forEach(e=>this._walk(n,e)),n.closeNode(e)),n}static _collapse(e){"string"!==typeof e&&e.children&&(e.children.every(e=>"string"===typeof e)?e.children=[e.children.join("")]:e.children.forEach(e=>{u._collapse(e)}))}}class O extends u{constructor(e){super(),this.options=e}addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){const e=new c(this,this.options);return e.value()}finalize(){return!0}}function l(e){return e?"string"===typeof e?e:e.source:null}function N(e){return P("(?=",e,")")}function j(e){return P("(?:",e,")*")}function D(e){return P("(?:",e,")?")}function P(...e){const n=e.map(e=>l(e)).join("");return n}function d(e){const n=e[e.length-1];return"object"===typeof n&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function C(...e){const n=d(e),t="("+(n.capture?"":"?:")+e.map(e=>l(e)).join("|")+")";return t}function h(e){return new RegExp(e.toString()+"|").exec("").length-1}function $(e,n){const t=e&&e.exec(n);return t&&0===t.index}const f=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function p(e,{joinWith:n}){let r=0;return e.map(e=>{r+=1;const n=r;let t=l(e),a="";while(t.length>0){const e=f.exec(t);if(!e){a+=t;break}a+=t.substring(0,e.index),t=t.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?a+="\\"+String(Number(e[1])+n):(a+=e[0],"("===e[0]&&r++)}return a}).map(e=>`(${e})`).join(n)}const b=/\b\B/,L="[a-zA-Z]\\w*",m="[a-zA-Z_]\\w*",w="\\b\\d+(\\.\\d+)?",x="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",y="\\b(0b[01]+)",E="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",_=(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=P(n,/.*\b/,e.binary,/\b.*/)),o({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},v={begin:"\\\\[\\s\\S]",relevance:0},S={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[v]},M={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[v]},R={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},A=function(e,n,t={}){const a=o({scope:"comment",begin:e,end:n,contains:[]},t);a.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const r=C("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return a.contains.push({begin:P(/[ ]+/,"(",r,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),a},I=A("//","$"),T=A("/\\*","\\*/"),B=A("#","$"),U={scope:"number",begin:w,relevance:0},z={scope:"number",begin:x,relevance:0},K={scope:"number",begin:y,relevance:0},W={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[v,{begin:/\[/,end:/\]/,relevance:0,contains:[v]}]}]},q={scope:"title",begin:L,relevance:0},X={scope:"title",begin:m,relevance:0},G={begin:"\\.\\s*"+m,relevance:0},F=function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})};var Z=Object.freeze({__proto__:null,MATCH_NOTHING_RE:b,IDENT_RE:L,UNDERSCORE_IDENT_RE:m,NUMBER_RE:w,C_NUMBER_RE:x,BINARY_NUMBER_RE:y,RE_STARTERS_RE:E,SHEBANG:_,BACKSLASH_ESCAPE:v,APOS_STRING_MODE:S,QUOTE_STRING_MODE:M,PHRASAL_WORDS_MODE:R,COMMENT:A,C_LINE_COMMENT_MODE:I,C_BLOCK_COMMENT_MODE:T,HASH_COMMENT_MODE:B,NUMBER_MODE:U,C_NUMBER_MODE:z,BINARY_NUMBER_MODE:K,REGEXP_MODE:W,TITLE_MODE:q,UNDERSCORE_TITLE_MODE:X,METHOD_GUARD:G,END_SAME_AS_BEGIN:F});function J(e,n){const t=e.input[e.index-1];"."===t&&n.ignoreMatch()}function V(e,n){void 0!==e.className&&(e.scope=e.className,delete e.className)}function Y(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=J,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function Q(e,n){Array.isArray(e.illegal)&&(e.illegal=C(...e.illegal))}function ee(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function ne(e,n){void 0===e.relevance&&(e.relevance=1)}const te=(n,e)=>{if(!n.beforeMatch)return;if(n.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},n);Object.keys(n).forEach(e=>{delete n[e]}),n.keywords=t.keywords,n.begin=P(t.beforeMatch,N(t.begin)),n.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},n.relevance=0,delete t.beforeMatch},ae=["of","and","for","in","not","or","if","then","parent","list","value"],re="keyword";function ie(n,a,e=re){const r=Object.create(null);return"string"===typeof n?t(e,n.split(" ")):Array.isArray(n)?t(e,n):Object.keys(n).forEach(function(e){Object.assign(r,ie(n[e],a,e))}),r;function t(t,e){a&&(e=e.map(e=>e.toLowerCase())),e.forEach(function(e){const n=e.split("|");r[n[0]]=[t,ge(n[0],n[1])]})}}function ge(e,n){return n?Number(n):se(e)?0:1}function se(e){return ae.includes(e.toLowerCase())}const oe={},ce=e=>{console.error(e)},ue=(e,...n)=>{console.log("WARN: "+e,...n)},le=(e,n)=>{oe[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),oe[`${e}/${n}`]=!0)},de=new Error;function he(e,n,{key:t}){let a=0;const r=e[t],i={},g={};for(let e=1;e<=n.length;e++)g[e+a]=r[e],i[e+a]=!0,a+=h(n[e-1]);e[t]=g,e[t]._emit=i,e[t]._multi=!0}function fe(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw ce("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),de;if("object"!==typeof e.beginScope||null===e.beginScope)throw ce("beginScope must be object"),de;he(e,e.begin,{key:"beginScope"}),e.begin=p(e.begin,{joinWith:""})}}function pe(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw ce("skip, excludeEnd, returnEnd not compatible with endScope: {}"),de;if("object"!==typeof e.endScope||null===e.endScope)throw ce("endScope must be object"),de;he(e,e.end,{key:"endScope"}),e.end=p(e.end,{joinWith:""})}}function be(e){e.scope&&"object"===typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,delete e.scope)}function Le(e){be(e),"string"===typeof e.beginScope&&(e.beginScope={_wrap:e.beginScope}),"string"===typeof e.endScope&&(e.endScope={_wrap:e.endScope}),fe(e),pe(e)}function me(r){function i(e,n){return new RegExp(l(e),"m"+(r.case_insensitive?"i":"")+(r.unicodeRegex?"u":"")+(n?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=h(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map(e=>e[1]);this.matcherRe=i(p(e,{joinWith:"|"}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e);if(!n)return null;const t=n.findIndex((e,n)=>n>0&&void 0!==e),a=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,a)}}class t{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const t=new n;return this.rules.slice(e).forEach(([e,n])=>t.addRule(e,n)),t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;let t=n.exec(e);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}function g(e){const n=new t;return e.contains.forEach(e=>n.addRule(e.begin,{rule:e,type:"begin"})),e.terminatorEnd&&n.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}function s(n,t){const a=n;if(n.isCompiled)return a;[V,ee,Le,te].forEach(e=>e(n,t)),r.compilerExtensions.forEach(e=>e(n,t)),n.__beforeBegin=null,[Y,Q,ne].forEach(e=>e(n,t)),n.isCompiled=!0;let e=null;return"object"===typeof n.keywords&&n.keywords.$pattern&&(n.keywords=Object.assign({},n.keywords),e=n.keywords.$pattern,delete n.keywords.$pattern),e=e||/\w+/,n.keywords&&(n.keywords=ie(n.keywords,r.case_insensitive)),a.keywordPatternRe=i(e,!0),t&&(n.begin||(n.begin=/\B|\b/),a.beginRe=i(a.begin),n.end||n.endsWithParent||(n.end=/\B|\b/),n.end&&(a.endRe=i(a.end)),a.terminatorEnd=l(a.end)||"",n.endsWithParent&&t.terminatorEnd&&(a.terminatorEnd+=(n.end?"|":"")+t.terminatorEnd)),n.illegal&&(a.illegalRe=i(n.illegal)),n.contains||(n.contains=[]),n.contains=[].concat(...n.contains.map(function(e){return xe("self"===e?n:e)})),n.contains.forEach(function(e){s(e,a)}),n.starts&&s(n.starts,t),a.matcher=g(a),a}if(r.compilerExtensions||(r.compilerExtensions=[]),r.contains&&r.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return r.classNameAliases=o(r.classNameAliases||{}),s(r)}function we(e){return!!e&&(e.endsWithParent||we(e.starts))}function xe(n){return n.variants&&!n.cachedVariants&&(n.cachedVariants=n.variants.map(function(e){return o(n,{variants:null},e)})),n.cachedVariants?n.cachedVariants:we(n)?o(n,{starts:n.starts?o(n.starts):null}):Object.isFrozen(n)?o(n):n}var ye="11.3.1";class Ee extends Error{constructor(e,n){super(e),this.name="HTMLInjectionError",this.html=n}}const _e=r,ve=o,ke=Symbol("nomatch"),Oe=7,Ne=function(a){const S=Object.create(null),r=Object.create(null),i=[];let M=!0;const R="Could not find the language '{}', did you forget to load/include a language module?",g={disableAutodetect:!0,name:"Plain text",contains:[]};let A={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:O};function s(e){return A.noHighlightRe.test(e)}function o(e){let n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=A.languageDetectRe.exec(n);if(t){const n=B(t[1]);return n||(ue(R.replace("{}",t[1])),ue("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}return n.split(/\s+/).find(e=>s(e)||B(e))}function c(e,n,t){let a="",r="";"object"===typeof n?(a=e,t=n.ignoreIllegals,r=n.language):(le("10.7.0","highlight(lang, code, ...args) has been deprecated."),le("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),r=e,a=n),void 0===t&&(t=!0);const i={code:a,language:r};_("before:highlight",i);const g=i.result?i.result:I(i.language,i.code,t);return g.code=i.code,_("after:highlight",g),g}function I(a,i,r,e){const g=Object.create(null);function s(e,n){return e.keywords[n]}function o(){if(!y.keywords)return void _.addText(v);let a=0;y.keywordPatternRe.lastIndex=0;let r=y.keywordPatternRe.exec(v),i="";while(r){i+=v.substring(a,r.index);const n=m.case_insensitive?r[0].toLowerCase():r[0],t=s(y,n);if(t){const[a,e]=t;if(_.addText(i),i="",g[n]=(g[n]||0)+1,g[n]<=Oe&&(k+=e),a.startsWith("_"))i+=r[0];else{const i=m.classNameAliases[a]||a;_.addKeyword(r[0],i)}}else i+=r[0];a=y.keywordPatternRe.lastIndex,r=y.keywordPatternRe.exec(v)}i+=v.substr(a),_.addText(i)}function n(){if(""===v)return;let e=null;if("string"===typeof y.subLanguage){if(!S[y.subLanguage])return void _.addText(v);e=I(y.subLanguage,v,!0,E[y.subLanguage]),E[y.subLanguage]=e._top}else e=T(v,y.subLanguage.length?y.subLanguage:null);y.relevance>0&&(k+=e.relevance),_.addSublanguage(e._emitter,e.language)}function c(){null!=y.subLanguage?n():o(),v=""}function u(t,a){let r=1;while(void 0!==a[r]){if(!t._emit[r]){r++;continue}const e=m.classNameAliases[t[r]]||t[r],n=a[r];e?_.addKeyword(n,e):(v=n,o(),v=""),r++}}function l(e,n){return e.scope&&"string"===typeof e.scope&&_.openNode(m.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(_.addKeyword(v,m.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),v=""):e.beginScope._multi&&(u(e.beginScope,n),v="")),y=Object.create(e,{parent:{value:y}}),y}function d(e,n,t){let a=$(e.endRe,t);if(a){if(e["on:end"]){const t=new H(e);e["on:end"](n,t),t.isMatchIgnored&&(a=!1)}if(a){while(e.endsParent&&e.parent)e=e.parent;return e}}if(e.endsWithParent)return d(e.parent,n,t)}function h(e){return 0===y.matcher.regexIndex?(v+=e[0],1):(j=!0,0)}function f(e){const n=e[0],t=e.rule,a=new H(t),r=[t.__beforeBegin,t["on:begin"]];for(const H of r)if(H&&(H(e,a),a.isMatchIgnored))return h(n);return t.skip?v+=n:(t.excludeBegin&&(v+=n),c(),t.returnBegin||t.excludeBegin||(v=n)),l(t,e),t.returnBegin?0:n.length}function p(e){const n=e[0],t=i.substr(e.index),a=d(y,e,t);if(!a)return ke;const r=y;y.endScope&&y.endScope._wrap?(c(),_.addKeyword(n,y.endScope._wrap)):y.endScope&&y.endScope._multi?(c(),u(y.endScope,e)):r.skip?v+=n:(r.returnEnd||r.excludeEnd||(v+=n),c(),r.excludeEnd&&(v=n));do{y.scope&&_.closeNode(),y.skip||y.subLanguage||(k+=y.relevance),y=y.parent}while(y!==a.parent);return a.starts&&l(a.starts,e),r.returnEnd?0:n.length}function t(){const n=[];for(let e=y;e!==m;e=e.parent)e.scope&&n.unshift(e.scope);n.forEach(e=>_.openNode(e))}let b={};function L(e,n){const t=n&&n[0];if(v+=e,null==t)return c(),0;if("begin"===b.type&&"end"===n.type&&b.index===n.index&&""===t){if(v+=i.slice(n.index,n.index+1),!M){const e=new Error(`0 width match regex (${a})`);throw e.languageName=a,e.badRule=b.rule,e}return 1}if(b=n,"begin"===n.type)return f(n);if("illegal"===n.type&&!r){const a=new Error('Illegal lexeme "'+t+'" for mode "'+(y.scope||"<unnamed>")+'"');throw a.mode=y,a}if("end"===n.type){const a=p(n);if(a!==ke)return a}if("illegal"===n.type&&""===t)return 1;if(N>1e5&&N>3*n.index){const a=new Error("potential infinite loop, way more iterations than matches");throw a}return v+=t,t.length}const m=B(a);if(!m)throw ce(R.replace("{}",a)),new Error('Unknown language: "'+a+'"');const w=me(m);let x="",y=e||w;const E={},_=new A.__emitter(A);t();let v="",k=0,O=0,N=0,j=!1;try{for(y.matcher.considerAll();;){N++,j?j=!1:y.matcher.considerAll(),y.matcher.lastIndex=O;const a=y.matcher.exec(i);if(!a)break;const S=i.substring(O,a.index),r=L(S,a);O=a.index+r}return L(i.substr(O)),_.closeAllNodes(),_.finalize(),x=_.toHTML(),{language:a,value:x,relevance:k,illegal:!1,_emitter:_,_top:y}}catch(e){if(e.message&&e.message.includes("Illegal"))return{language:a,value:_e(i),illegal:!0,relevance:0,_illegalBy:{message:e.message,index:O,context:i.slice(O-100,O+100),mode:e.mode,resultSoFar:x},_emitter:_};if(M)return{language:a,value:_e(i),illegal:!1,relevance:0,errorRaised:e,_emitter:_,_top:y};throw e}}function u(e){const n={value:_e(e),illegal:!1,relevance:0,_top:g,_emitter:new A.__emitter(A)};return n._emitter.addText(e),n}function T(n,e){e=e||A.languages||Object.keys(S);const t=u(n),a=e.filter(B).filter(x).map(e=>I(e,n,!1));a.unshift(t);const r=a.sort((e,n)=>{if(e.relevance!==n.relevance)return n.relevance-e.relevance;if(e.language&&n.language){if(B(e.language).supersetOf===n.language)return 1;if(B(n.language).supersetOf===e.language)return-1}return 0}),[i,g]=r,s=i;return s.secondBest=g,s}function l(e,n,t){const a=n&&r[n]||t;e.classList.add("hljs"),e.classList.add("language-"+a)}function n(e){let n=null;const t=o(e);if(s(t))return;if(_("before:highlightElement",{el:e,language:t}),e.children.length>0&&(A.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/issues/2886"),console.warn(e)),A.throwUnescapedHTML)){const n=new Ee("One of your code blocks includes unescaped HTML.",e.innerHTML);throw n}n=e;const a=n.textContent,r=t?c(a,{language:t,ignoreIllegals:!0}):T(a);e.innerHTML=r.value,l(e,t,r.language),e.result={language:r.language,re:r.relevance,relevance:r.relevance},r.secondBest&&(e.secondBest={language:r.secondBest.language,relevance:r.secondBest.relevance}),_("after:highlightElement",{el:e,result:r,text:a})}function e(e){A=ve(A,e)}const t=()=>{f(),le("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function d(){f(),le("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let h=!1;function f(){if("loading"===document.readyState)return void(h=!0);const e=document.querySelectorAll(A.cssSelector);e.forEach(n)}function p(){h&&f()}function b(n,e){let t=null;try{t=e(a)}catch(e){if(ce("Language definition for '{}' could not be registered.".replace("{}",n)),!M)throw e;ce(e),t=g}t.name||(t.name=n),S[n]=t,t.rawDefinition=e.bind(null,a),t.aliases&&w(t.aliases,{languageName:n})}function L(e){delete S[e];for(const S of Object.keys(r))r[S]===e&&delete r[S]}function m(){return Object.keys(S)}function B(e){return e=(e||"").toLowerCase(),S[e]||S[r[e]]}function w(e,{languageName:n}){"string"===typeof e&&(e=[e]),e.forEach(e=>{r[e.toLowerCase()]=n})}function x(e){const n=B(e);return n&&!n.disableAutodetect}function y(n){n["before:highlightBlock"]&&!n["before:highlightElement"]&&(n["before:highlightElement"]=e=>{n["before:highlightBlock"](Object.assign({block:e.el},e))}),n["after:highlightBlock"]&&!n["after:highlightElement"]&&(n["after:highlightElement"]=e=>{n["after:highlightBlock"](Object.assign({block:e.el},e))})}function E(e){y(e),i.push(e)}function _(e,n){const t=e;i.forEach(function(e){e[t]&&e[t](n)})}function v(e){return le("10.7.0","highlightBlock will be removed entirely in v12.0"),le("10.7.0","Please use highlightElement now."),n(e)}"undefined"!==typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",p,!1),Object.assign(a,{highlight:c,highlightAuto:T,highlightAll:f,highlightElement:n,highlightBlock:v,configure:e,initHighlighting:t,initHighlightingOnLoad:d,registerLanguage:b,unregisterLanguage:L,listLanguages:m,getLanguage:B,registerAliases:w,autoDetection:x,inherit:ve,addPlugin:E}),a.debugMode=function(){M=!1},a.safeMode=function(){M=!0},a.versionString=ye,a.regex={concat:P,lookahead:N,either:C,optional:D,anyNumberOfTimes:j};for(const H in Z)"object"===typeof Z[H]&&k(Z[H]);return Object.assign(a,Z),a};var je=Ne({});e.exports=je,je.HighlightJS=je,je.default=je},1487:function(e,n,t){var a=t("1020");a.registerLanguage("1c",t("f71c")),a.registerLanguage("abnf",t("b528")),a.registerLanguage("accesslog",t("998d")),a.registerLanguage("actionscript",t("f9f0")),a.registerLanguage("ada",t("01ac")),a.registerLanguage("angelscript",t("dbcc")),a.registerLanguage("apache",t("f0aa")),a.registerLanguage("applescript",t("7bc1")),a.registerLanguage("arcade",t("305e")),a.registerLanguage("arduino",t("944e7")),a.registerLanguage("armasm",t("a33c")),a.registerLanguage("xml",t("8dcb")),a.registerLanguage("asciidoc",t("0290")),a.registerLanguage("aspectj",t("9814")),a.registerLanguage("autohotkey",t("0481")),a.registerLanguage("autoit",t("ef99")),a.registerLanguage("avrasm",t("a6fb")),a.registerLanguage("awk",t("1069")),a.registerLanguage("axapta",t("a885")),a.registerLanguage("bash",t("f0f8")),a.registerLanguage("basic",t("a15aa")),a.registerLanguage("bnf",t("75da")),a.registerLanguage("brainfuck",t("5921")),a.registerLanguage("c",t("1fe5")),a.registerLanguage("cal",t("7781")),a.registerLanguage("capnproto",t("4a5e")),a.registerLanguage("ceylon",t("ba76")),a.registerLanguage("clean",t("51ab")),a.registerLanguage("clojure",t("b884")),a.registerLanguage("clojure-repl",t("149d")),a.registerLanguage("cmake",t("eaab")),a.registerLanguage("coffeescript",t("a995")),a.registerLanguage("coq",t("80b3")),a.registerLanguage("cos",t("8261")),a.registerLanguage("cpp",t("0209")),a.registerLanguage("crmsh",t("c8e5")),a.registerLanguage("crystal",t("294a")),a.registerLanguage("csharp",t("98af")),a.registerLanguage("csp",t("42724")),a.registerLanguage("css",t("ee8c")),a.registerLanguage("d",t("8d6d")),a.registerLanguage("markdown",t("04b0")),a.registerLanguage("dart",t("7c46")),a.registerLanguage("delphi",t("1f8a")),a.registerLanguage("diff",t("48b8")),a.registerLanguage("django",t("d248")),a.registerLanguage("dns",t("8a86")),a.registerLanguage("dockerfile",t("44b5")),a.registerLanguage("dos",t("7cff")),a.registerLanguage("dsconfig",t("b91e")),a.registerLanguage("dts",t("b0cf")),a.registerLanguage("dust",t("f4da")),a.registerLanguage("ebnf",t("1b4d")),a.registerLanguage("elixir",t("7727")),a.registerLanguage("elm",t("5051")),a.registerLanguage("ruby",t("82cb")),a.registerLanguage("erb",t("1367")),a.registerLanguage("erlang-repl",t("f492")),a.registerLanguage("erlang",t("b3c5")),a.registerLanguage("excel",t("f5cf")),a.registerLanguage("fix",t("2b22")),a.registerLanguage("flix",t("a14e4")),a.registerLanguage("fortran",t("485f")),a.registerLanguage("fsharp",t("0215")),a.registerLanguage("gams",t("7d9d")),a.registerLanguage("gauss",t("ae7a")),a.registerLanguage("gcode",t("94a2")),a.registerLanguage("gherkin",t("351a")),a.registerLanguage("glsl",t("df06")),a.registerLanguage("gml",t("e6ea")),a.registerLanguage("go",t("0b22")),a.registerLanguage("golo",t("919d")),a.registerLanguage("gradle",t("9544")),a.registerLanguage("groovy",t("1f64")),a.registerLanguage("haml",t("4f4a")),a.registerLanguage("handlebars",t("e55c")),a.registerLanguage("haskell",t("3f38")),a.registerLanguage("haxe",t("7c71")),a.registerLanguage("hsp",t("c22d")),a.registerLanguage("http",t("c01d")),a.registerLanguage("hy",t("8667")),a.registerLanguage("inform7",t("2e5d")),a.registerLanguage("ini",t("2a93")),a.registerLanguage("irpf90",t("074e")),a.registerLanguage("isbl",t("bb43")),a.registerLanguage("java",t("332f")),a.registerLanguage("javascript",t("4dd1")),a.registerLanguage("jboss-cli",t("04a8")),a.registerLanguage("json",t("5ad2")),a.registerLanguage("julia",t("2265")),a.registerLanguage("julia-repl",t("b7aa")),a.registerLanguage("kotlin",t("a941")),a.registerLanguage("lasso",t("25bd")),a.registerLanguage("latex",t("1555")),a.registerLanguage("ldif",t("1a06")),a.registerLanguage("leaf",t("2e9b")),a.registerLanguage("less",t("1846")),a.registerLanguage("lisp",t("9b32")),a.registerLanguage("livecodeserver",t("1beb")),a.registerLanguage("livescript",t("2e11")),a.registerLanguage("llvm",t("7c30")),a.registerLanguage("lsl",t("28ad")),a.registerLanguage("lua",t("ecfe")),a.registerLanguage("makefile",t("7a5e")),a.registerLanguage("mathematica",t("ef7a")),a.registerLanguage("matlab",t("8ca5")),a.registerLanguage("maxima",t("399d")),a.registerLanguage("mel",t("bb7e")),a.registerLanguage("mercury",t("2425")),a.registerLanguage("mipsasm",t("a342")),a.registerLanguage("mizar",t("0f16")),a.registerLanguage("perl",t("6a51")),a.registerLanguage("mojolicious",t("66ba")),a.registerLanguage("monkey",t("a710")),a.registerLanguage("moonscript",t("b1b9")),a.registerLanguage("n1ql",t("f4c8")),a.registerLanguage("nestedtext",t("6e79")),a.registerLanguage("nginx",t("f54f0")),a.registerLanguage("nim",t("861d1")),a.registerLanguage("nix",t("46ae")),a.registerLanguage("node-repl",t("0118")),a.registerLanguage("nsis",t("b322")),a.registerLanguage("objectivec",t("9bf21")),a.registerLanguage("ocaml",t("ee6c")),a.registerLanguage("openscad",t("02c4")),a.registerLanguage("oxygene",t("6de8")),a.registerLanguage("parser3",t("3728")),a.registerLanguage("pf",t("767a")),a.registerLanguage("pgsql",t("f851")),a.registerLanguage("php",t("2907")),a.registerLanguage("php-template",t("e05a")),a.registerLanguage("plaintext",t("44e5")),a.registerLanguage("pony",t("95d0")),a.registerLanguage("powershell",t("508e")),a.registerLanguage("processing",t("afba")),a.registerLanguage("profile",t("b90a")),a.registerLanguage("prolog",t("4396")),a.registerLanguage("properties",t("56b2")),a.registerLanguage("protobuf",t("2e8e")),a.registerLanguage("puppet",t("5027")),a.registerLanguage("purebasic",t("1b02")),a.registerLanguage("python",t("9510")),a.registerLanguage("python-repl",t("4168")),a.registerLanguage("q",t("5dfb")),a.registerLanguage("qml",t("612a")),a.registerLanguage("r",t("26bc")),a.registerLanguage("reasonml",t("e990")),a.registerLanguage("rib",t("0faf")),a.registerLanguage("roboconf",t("f50f")),a.registerLanguage("routeros",t("d959")),a.registerLanguage("rsl",t("a0a7")),a.registerLanguage("ruleslanguage",t("8aba")),a.registerLanguage("rust",t("2ce7")),a.registerLanguage("sas",t("40f4")),a.registerLanguage("scala",t("9f7fc")),a.registerLanguage("scheme",t("4108")),a.registerLanguage("scilab",t("ea4d")),a.registerLanguage("scss",t("6113")),a.registerLanguage("shell",t("b65b")),a.registerLanguage("smali",t("1b1c")),a.registerLanguage("smalltalk",t("8d4f")),a.registerLanguage("sml",t("dc41")),a.registerLanguage("sqf",t("e2a7")),a.registerLanguage("sql",t("de09")),a.registerLanguage("stan",t("8931")),a.registerLanguage("stata",t("d4b5")),a.registerLanguage("step21",t("0081")),a.registerLanguage("stylus",t("bd88")),a.registerLanguage("subunit",t("02ac")),a.registerLanguage("swift",t("2a39")),a.registerLanguage("taggerscript",t("2468")),a.registerLanguage("yaml",t("2e7b")),a.registerLanguage("tap",t("06b4")),a.registerLanguage("tcl",t("a27d")),a.registerLanguage("thrift",t("adf9")),a.registerLanguage("tp",t("a613")),a.registerLanguage("twig",t("f46e")),a.registerLanguage("typescript",t("af44")),a.registerLanguage("vala",t("f122")),a.registerLanguage("vbnet",t("89e7")),a.registerLanguage("vbscript",t("5a3e")),a.registerLanguage("vbscript-html",t("f45a")),a.registerLanguage("verilog",t("e10f")),a.registerLanguage("vhdl",t("310f")),a.registerLanguage("vim",t("3c69")),a.registerLanguage("wasm",t("41c8")),a.registerLanguage("wren",t("aa44")),a.registerLanguage("x86asm",t("a154")),a.registerLanguage("xl",t("2639")),a.registerLanguage("xquery",t("268a")),a.registerLanguage("zephir",t("9f0c")),a.HighlightJS=a,a.default=a,e.exports=a}}]);