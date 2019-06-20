(function(){var aa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},k;
if("function"==typeof Object.setPrototypeOf)k=Object.setPrototypeOf;else{var l;a:{var ba={B:!0},ca={};try{ca.__proto__=ba;l=ca.B;break a}catch(a){}l=!1}k=l?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var da=k;
function ea(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(da)da(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.v=b.prototype}
var m=this||self;function n(a){return"string"==typeof a}
function p(a){a=a.split(".");for(var b=m,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function fa(){}
function q(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function ha(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ia(a,b,c){return a.call.apply(a.bind,arguments)}
function ja(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function t(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?t=ia:t=ja;return t.apply(null,arguments)}
function ka(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var la=Date.now||function(){return+new Date};
function u(a,b){var c=a.split("."),d=m;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function v(a,b){function c(){}
c.prototype=b.prototype;a.v=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.D=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;var w=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(n(a))return n(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},x=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=n(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};function ma(a,b){this.i=a;this.j=b;this.b=0;this.a=null}
ma.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.i();return a};function na(a){var b=y,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
;function z(a,b){this.a=a===oa&&b||"";this.b=pa}
z.prototype.toString=function(){return"Const{"+this.a+"}"};
var pa={},oa={},A=new z(oa,"");function B(){this.a="";this.b=qa}
var qa={};var ra=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function C(a,b){return a<b?-1:a>b?1:0}
;var D;a:{var sa=m.navigator;if(sa){var ta=sa.userAgent;if(ta){D=ta;break a}}D=""}function E(a){return-1!=D.indexOf(a)}
;function F(){this.a="";this.b=ua}
var ua={};function G(a){var b=new F;b.a=a;return b}
G("<!DOCTYPE html>");var H=G("");G("<br>");function va(a){var b=new B;b.a=A instanceof z&&A.constructor===z&&A.b===pa?A.a:"type_error:Const";a.src=(b instanceof B&&b.constructor===B&&b.b===qa?b.a:"type_error:TrustedResourceUrl").toString()}
;function wa(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})}
function xa(a){var b=n(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(c,d,e){return d+e.toUpperCase()})}
;function ya(a){m.setTimeout(function(){throw a;},0)}
var I;
function za(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var e=document.createElement("IFRAME");e.style.display="none";va(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(H instanceof F&&H.constructor===F&&H.b===ua?H.a:"type_error:SafeHtml");e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;
e=t(function(r){if(("*"==h||r.origin==h)&&r.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!E("Trident")&&!E("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.u;c.u=null;e()}};
return function(e){d.next={u:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var f=document.createElement("SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};
document.documentElement.appendChild(f)}:function(e){m.setTimeout(e,0)}}
;function J(){this.b=this.a=null}
var Aa=new ma(function(){return new K},function(a){a.reset()});
J.prototype.add=function(a,b){var c=Aa.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};
J.prototype.remove=function(){var a=null;this.a&&(a=this.a,this.a=this.a.next,this.a||(this.b=null),a.next=null);return a};
function K(){this.next=this.b=this.a=null}
K.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};
K.prototype.reset=function(){this.next=this.b=this.a=null};function Ba(a){L||Ca();Da||(L(),Da=!0);Ea.add(a,void 0)}
var L;function Ca(){if(m.Promise&&m.Promise.resolve){var a=m.Promise.resolve(void 0);L=function(){a.then(Fa)}}else L=function(){var b=Fa;
"function"!=q(m.setImmediate)||m.Window&&m.Window.prototype&&!E("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(I||(I=za()),I(b)):m.setImmediate(b)}}
var Da=!1,Ea=new J;function Fa(){for(var a;a=Ea.remove();){try{a.a.call(a.b)}catch(c){ya(c)}var b=Aa;b.j(a);100>b.b&&(b.b++,a.next=b.a,b.a=a)}Da=!1}
;function M(){this.i=this.i;this.j=this.j}
M.prototype.i=!1;M.prototype.dispose=function(){this.i||(this.i=!0,this.b())};
M.prototype.b=function(){if(this.j)for(;this.j.length;)this.j.shift()()};
function Ga(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Ha(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b],e=q(d);"array"==e||"object"==e&&"number"==typeof d.length?Ha.apply(null,d):Ga(d)}}
;function Ia(a,b){var c=Ja;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var Ka=E("Opera"),N=E("Trident")||E("MSIE"),La=E("Edge"),Ma=E("Gecko")&&!(-1!=D.toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),Na=-1!=D.toLowerCase().indexOf("webkit")&&!E("Edge"),Oa;a:{var Pa="",Qa=function(){var a=D;if(Ma)return/rv:([^\);]+)(\)|;)/.exec(a);if(La)return/Edge\/([\d\.]+)/.exec(a);if(N)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Na)return/WebKit\/(\S+)/.exec(a);if(Ka)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Qa&&(Pa=Qa?Qa[1]:"");if(N){var O,Ra=m.document;O=Ra?Ra.documentMode:void 0;if(null!=O&&O>parseFloat(Pa)){Oa=String(O);break a}}Oa=Pa}var Sa=Oa,Ja={};
function Ta(a){return Ia(a,function(){for(var b=0,c=ra(String(Sa)).split("."),d=ra(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=C(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||C(0==g[2].length,0==h[2].length)||C(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
;function P(a,b){this.width=a;this.height=b}
P.prototype.aspectRatio=function(){return this.width/this.height};
P.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
P.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
P.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ua(a){var b=document;b.getElementsByClassName?a=b.getElementsByClassName(a)[0]:(b=document,a=b.querySelectorAll&&b.querySelector&&a?b.querySelector(a?"."+a:""):Va(b,a)[0]||null);return a||null}
function Va(a,b){var c,d,e;if(a.querySelectorAll&&a.querySelector&&b)return a.querySelectorAll(b?"."+b:"");if(b&&a.getElementsByClassName){var f=a.getElementsByClassName(b);return f}f=a.getElementsByTagName("*");if(b){var g={};for(d=e=0;c=f[d];d++){var h=c.className,r;if(r="function"==typeof h.split)r=0<=w(h.split(/\s+/),b);r&&(g[e++]=c)}g.length=e;return g}return f}
function Wa(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Xa(){}
function Ya(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if("array"==q(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ya(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Za(d,c),c.push(":"),Ya(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Za(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var $a={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},ab=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Za(a,b){b.push('"',a.replace(ab,function(c){var d=$a[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),$a[c]=d);return d}),'"')}
;function Q(a){M.call(this);this.m=1;this.g=[];this.h=0;this.a=[];this.f={};this.o=!!a}
v(Q,M);Q.prototype.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.m;this.a[e]=a;this.a[e+1]=b;this.a[e+2]=c;this.m=e+3;d.push(e);return e};
Q.prototype.l=function(a){var b=this.a[a];if(b){var c=this.f[b];if(0!=this.h)this.g.push(a),this.a[a+1]=fa;else{if(c){var d=w(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.a[a];delete this.a[a+1];delete this.a[a+2]}}return!!b};
Q.prototype.s=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.o)for(e=0;e<c.length;e++){var g=c[e];bb(this.a[g+1],this.a[g+2],d)}else{this.h++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.a[g+1].apply(this.a[g+2],d)}finally{if(this.h--,0<this.g.length&&0==this.h)for(;c=this.g.pop();)this.l(c)}}return 0!=e}return!1};
function bb(a,b,c){Ba(function(){a.apply(b,c)})}
Q.prototype.clear=function(a){if(a){var b=this.f[a];b&&(x(b,this.l,this),delete this.f[a])}else this.a.length=0,this.f={}};
Q.prototype.b=function(){Q.v.b.call(this);this.clear();this.g.length=0};function cb(a,b,c){var d=db[c];if(!d){var e=wa(c);d=e;void 0===a.style[e]&&(e=(Na?"Webkit":Ma?"Moz":N?"ms":Ka?"O":null)+xa(e),void 0!==a.style[e]&&(d=e));db[c]=d}(c=d)&&(a.style[c]=b)}
var db={};function eb(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
function fb(a){var b=gb;a:{var c=9==a.nodeType?a:a.ownerDocument||a.document;if(c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))){c=c.display||c.getPropertyValue("display")||"";break a}c=""}c||(c=a.currentStyle?a.currentStyle.display:null);if("none"!=(c||a.style&&a.style.display))return b(a);c=a.style;var d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function gb(a){var b=a.offsetWidth,c=a.offsetHeight,d=Na&&!b&&!c;if((void 0===b||d)&&a.getBoundingClientRect){a:{try{var e=a.getBoundingClientRect()}catch(f){e={left:0,top:0,right:0,bottom:0};break a}N&&a.ownerDocument.body&&(a=a.ownerDocument,e.left-=a.documentElement.clientLeft+a.body.clientLeft,e.top-=a.documentElement.clientTop+a.body.clientTop)}return new P(e.right-e.left,e.bottom-e.top)}return new P(b,c)}
;var hb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;var R=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};u("yt.config_",R);function ib(a){var b=arguments;if(1<b.length)R[b[0]]=b[1];else{b=b[0];for(var c in b)R[c]=b[c]}}
function S(a,b){return a in R?R[a]:b}
;var jb=0;u("ytDomDomGetNextId",p("ytDomDomGetNextId")||function(){return++jb});function kb(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){lb(b)}}:a}
function lb(a,b){var c=p("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=S("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),ib("ERRORS",c))}
;var mb={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function T(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{a=a||window.event;if(!a)return;this.a=a}catch(c){return}for(var b in a)b in mb||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==
this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}
T.prototype.preventDefault=function(){this.a&&(this.a.returnValue=!1,this.a.preventDefault&&this.a.preventDefault())};
T.prototype.stopPropagation=function(){this.a&&(this.a.cancelBubble=!0,this.a.stopPropagation&&this.a.stopPropagation())};
T.prototype.stopImmediatePropagation=function(){this.a&&(this.a.cancelBubble=!0,this.a.stopImmediatePropagation&&this.a.stopImmediatePropagation())};var y=p("ytEventsEventsListeners")||{};u("ytEventsEventsListeners",y);var nb=p("ytEventsEventsCounter")||{count:0};u("ytEventsEventsCounter",nb);
function ob(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return na(function(e){var f="boolean"==typeof e[4]&&e[4]==!!d,g;if(g=ha(e[4])&&ha(d))a:{g=e[4];for(var h in g)if(!(h in d)||g[h]!==d[h]){g=!1;break a}for(h in d)if(!(h in g)){g=!1;break a}g=!0}return!!e.length&&e[0]==a&&e[1]==b&&e[2]==
c&&(f||g)})}
function pb(a){a&&("string"==typeof a&&(a=[a]),x(a,function(b){if(b in y){var c=y[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?qb()||"boolean"==typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete y[b]}}))}
var qb=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=!1;
try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function U(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=ob(a,b,c,d);if(!e){e=++nb.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new T(h);if(!Wa(h.relatedTarget,function(r){return r==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new T(h);
h.currentTarget=a;return c.call(a,h)};
g=kb(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),qb()||"boolean"==typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);y[e]=[a,b,c,g,d]}}}
;function V(a,b,c,d){M.call(this);this.h=b||null;this.w="*";this.l=c||null;this.a=null;this.f=d||null;this.A=!!a;this.s=t(this.C,this);window.addEventListener("message",this.s)}
ea(V,M);V.prototype.C=function(a){if(!("*"!=this.l&&a.origin!=this.l||this.h&&a.source!=this.h)&&n(a.data)){try{var b=JSON.parse(a.data)}catch(c){return}if(!(null==b||this.A&&(this.a&&this.a!=b.id||this.f&&this.f!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin&&(this.l=this.w=a.origin);this.h=a.source;this.a=b.id;this.g&&(this.g(),this.g=null);break;case "command":this.m&&(!this.o||0<=w(this.o,b.func))&&this.m(b.func,b.args,a.origin)}}};
V.prototype.sendMessage=function(a,b){var c=b||this.h;if(c){this.a&&(a.id=this.a);this.f&&(a.channel=this.f);try{var d=[];Ya(new Xa,a,d);c.postMessage(d.join(""),this.w)}catch(e){lb(e,"WARNING")}}};
V.prototype.b=function(){window.removeEventListener("message",this.s);M.prototype.b.call(this)};function rb(a,b,c){V.call(this,a,b,c||S("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.o=this.g=this.m=null}
ea(rb,V);function W(){var a=this.a=new rb(!!S("WIDGET_ID_ENFORCE")),b=t(this.h,this);a.m=b;a.o=null;this.a.f="widget";if(a=S("WIDGET_ID"))this.a.a=a;this.b=[];this.j=!1;this.i={}}
W.prototype.h=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.i[c]||"onReady"==c||(this.addEventListener(c,sb(this,c)),this.i[c]=!0)}};
function sb(a,b){return t(function(c){this.sendMessage(b,c)},a)}
W.prototype.addEventListener=function(){};
W.prototype.g=function(){this.j=!0;this.sendMessage("initialDelivery",null);this.sendMessage("onReady");x(this.b,this.f,this);this.b=[]};
W.prototype.f=function(a){this.j?this.a.sendMessage(a):this.b.push(a)};
W.prototype.sendMessage=function(a,b){this.f({event:a,info:void 0==b?null:b})};
W.prototype.dispose=function(){this.a=null};function tb(a){W.call(this);this.l=a;a=t(this.g,this);this.a.g=a}
v(tb,W);tb.prototype.addEventListener=function(a,b){this.l.subscribe(a,b)};la();function X(a){a=void 0===a?!1:a;M.call(this);this.a=new Q(a);a=ka(Ga,this.a);this.i?a():(this.j||(this.j=[]),this.j.push(a))}
v(X,M);X.prototype.subscribe=function(a,b,c){return this.i?0:this.a.subscribe(a,b,c)};
X.prototype.g=function(a,b){this.i||this.a.s.apply(this.a,arguments)};function Y(a,b,c){X.call(this);this.f=a;this.l=b;(a=c.match(hb)[3]||null)&&decodeURI(a);U(this.f,"click",t(this.h,this))}
v(Y,X);Y.prototype.h=function(){this.g("onClick",this.l)};
Y.prototype.b=function(){var a=this.f,b;for(b in y)y[b][0]==a&&pb(b);this.f=null};function Z(a,b){M.call(this);this.a=a;this.g=b;this.f(this.g.iurl,!0)}
v(Z,M);Z.prototype.f=function(a,b){N&&!Ta(10)?this.a.style.filter='progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+a+'", sizingMethod="scale")':b||(this.a.style.backgroundImage="url("+a+")")};
Z.prototype.b=function(){this.a=null};var ub=null,vb=null,wb=null;
function xb(){var a=Ua("yt-embed-thumbnail-container"),b=fb(a);if(!(b.width*b.height)){var c=xb;"function"==q(c)&&(c=kb(c));window.setTimeout(c,100)}c=window.document;c="CSS1Compat"==c.compatMode?c.documentElement:c.body;var d=new P(c.clientWidth,c.clientHeight);var e=new P(.1*d.width,.1*d.height);c=!1;var f=Math.min(Math.max(b.width,e.width),d.width);f!=b.width&&(c=!0,b.width=f);d=Math.min(Math.max(b.height,e.height),d.height);d!=b.height&&(c=!0,b.height=d);if(c){c=b;if(c instanceof P)d=c.height,
c=c.width;else throw Error("missing height argument");a.style.width=eb(c);a.style.height=eb(d)}c=vb;a=c.g;d=null;720<=b.height&&a.iurlmaxres?d=a.iurlmaxres:480<=b.height&&a.iurlsd?d=a.iurlsd:320<=b.height?d=a.iurlhq:180<=b.height&&(d=a.iurlmq);d&&(a=d,c=t(c.f,c,d,!1),d=new Image,d.onload=c,d.src=a);a=Ua("yt-embed-thumbnail-play");c=fb(a);b=Math.min(Math.max(.2*b.height,20),c.height)/c.height;if(N&&!Ta(9))a.style.zoom=b;else if(n("transform"))cb(a,"scale("+b+")","transform");else for(var g in"transform")cb(a,
"transform"[g],g);a.style.display="block"}
function yb(){Ha(ub,vb,wb)}
;u("yt.setConfig",ib);u("yt.config.set",ib);u("writeEmbed",function(){ub=new Y(document.body,S("VIDEO_ID",void 0),S("EURL",void 0));vb=new Z(Ua("yt-embed-thumbnail"),S("THUMBNAIL_URLS"));wb=new tb(ub);U(window,"load",xb);U(window,"resize",xb);U(window,"unload",yb)});}).call(this);
