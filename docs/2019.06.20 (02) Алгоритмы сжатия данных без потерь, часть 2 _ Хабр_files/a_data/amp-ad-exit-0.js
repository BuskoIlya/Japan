(self.AMP=self.AMP||[]).push({n:"amp-ad-exit",v:"1906141418310",f:(function(AMP,_){
var aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},h;if("function"==typeof Object.setPrototypeOf)h=Object.setPrototypeOf;else{var l;a:{var ba={a:!0},m={};try{m.__proto__=ba;l=m.a;break a}catch(a){}l=!1}h=l?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var n=h;
function q(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(n)n(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.S=b.prototype}function t(a,b){this.name=a;this.type=b}t.prototype.filter=function(){};t.prototype.onLayoutMeasure=function(){};function ca(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function u(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var da=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function v(a){var b=Object.create(null);if(!a)return b;for(var c;c=da.exec(a);){var d=u(c[1],c[1]),e=c[2]?u(c[2],c[2]):"";b[d]=e}return b};var w="";
function x(){var a,b=a||self;if(b.AMP_MODE)var c=b.AMP_MODE;else{c=b;var d=self.AMP_CONFIG||{},e=!!d.test||!1,f=c.__karma__&&c.__karma__.config.amp.testOnIe,k=v(c.location.originalHash||c.location.hash);d=d.spt;var g=v(c.location.search);w||(w=c.AMP_CONFIG&&c.AMP_CONFIG.v?c.AMP_CONFIG.v:"011906141418310");c=b.AMP_MODE={localDev:!1,development:!("1"!=k.development&&!c.AMP_DEV_MODE),examiner:"2"==k.development,filter:k.filter,geoOverride:k["amp-geo"],userLocationOverride:k["amp-user-location"],minified:!0,
lite:void 0!=g.amp_lite,test:e,testIe:f,log:k.log,version:"1906141418310",rtvVersion:w,singlePassType:d}}return c};var ea=Object.prototype.toString;self.log=self.log||{user:null,dev:null,userForEmbed:null};var y=self.log;function z(){if(!y.user)throw Error("failed to call initLogConstructor");return y.user}function A(){if(y.dev)return y.dev;throw Error("failed to call initLogConstructor");}function B(a,b,c,d){z().assert(a,b,c,d,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function fa(a){var b,c=a.ownerDocument.defaultView,d=c!=C(c);if(d){if(D(c,"url-replace")){var e=E(c,"url-replace");if(e)return e}if(!b)return null}a=F(a);a=G(a);return D(a,"url-replace")?E(a,"url-replace"):null}function C(a){return a.__AMP_TOP||a}function F(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;b=C(b);a=E(b,"ampdoc").getAmpDoc(a)}return a}function G(a){a=F(a);return a.isSingleDoc()?a.win:a}
function E(a,b){D(a,b);var c=H(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function ha(a){var b;(b=H(a)["host-exit"])?b.promise?b=b.promise:(E(a,"host-exit"),b=b.promise=Promise.resolve(b.obj)):b=null;var c=b;if(c)return c;a=H(a);a["host-exit"]=ia();return a["host-exit"].promise}function H(a){var b=a.services;b||(b=a.services={});return b}function D(a,b){a=a.services&&a.services[b];return!(!a||!a.ctor&&!a.obj)}
function ia(){var a=new ca,b=a,c=b.promise,d=b.resolve;b=b.reject;c.catch(function(){});return{obj:null,promise:c,resolve:d,reject:b,context:null,ctor:null}};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function I(a,b,c){var d;try{var e=a.open(b,c,d)}catch(f){A().error("DOM","Failed to open url on target: ",c,f)}e||"_top"==c||a.open(b,"_top")};var J;function ja(a,b){var c=void 0,d=a,e=b;var f=function(a){try{return e(a)}catch(p){throw self.reportError(p),p;}};var k=ka(),g=!1;c&&(g=c.capture);d.addEventListener("message",f,k?c:g);return function(){d&&d.removeEventListener("message",f,k?c:g);f=d=e=null}}function ka(){if(void 0!==J)return J;J=!1;try{var a={get capture(){J=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return J};function la(a,b){return ja(a,b)};var K={bg:"https://tpc.googlesyndication.com/b4a/b4a-runner.html",moat:"https://z.moatads.com/ampanalytics093284/iframe.html"};Object.assign({},K,{bg:"https://tpc.googlesyndication.com/b4a/experimental/b4a-runner.html"});function ma(a){B("object"==typeof a);if(a.filters){var b=a.filters,c=["clickDelay","clickLocation","inactiveElement"],d;for(d in b)B("object"==typeof b[d],"Filter specification '%s' is malformed",d),B(-1!=c.indexOf(b[d].type),"Supported filters: "+c.join(", "))}else a.filters={};if(a.transport){b=a.transport;for(var e in b)B("beacon"==e||"image"==e,"Unknown transport option: '"+e+"'"),B("boolean"==typeof b[e])}else a.transport={};e=a.targets;B("object"==typeof e,"'targets' must be an object");for(var f in e)na(f,
e[f],a);return a}function na(a,b,c){B("string"==typeof b.finalUrl,"finalUrl of target '%s' must be a string",a);b.filters&&b.filters.forEach(function(a){B(c.filters[a],"filter '%s' not defined",a)});if(b.vars){a=/^_[a-zA-Z0-9_-]+$/;for(var d in b.vars)B(a.test(d),"'%s' must match the pattern '%s'",d,a)}}function L(a){return z().assertString(K[a],"Unknown or invalid vendor "+a+", note that vendor must use transport: iframe")};function M(a,b,c){t.call(this,a,b.type);B("clickDelay"==b.type&&"number"==typeof b.delay&&0<b.delay,"Invalid ClickDelay spec");this.spec=b;this.intervalStart=Date.now();b.startTimingEvent&&(c.performance&&c.performance.timing?void 0==c.performance.timing[b.startTimingEvent]?A().warn("amp-ad-exit","Invalid performance timing event type "+b.startTimingEvent+", falling back to now"):this.intervalStart=c.performance.timing[b.startTimingEvent]:A().warn("amp-ad-exit","Browser does not support performance timing, falling back to now"))}
q(M,t);M.prototype.filter=function(){return Date.now()-this.intervalStart>=this.spec.delay};function N(a){var b=1E3;return{type:"clickDelay",delay:b,startTimingEvent:a}};function O(a,b,c){t.call(this,a,b.type);B("clickLocation"==b.type&&("undefined"===typeof b.left||"number"===typeof b.left)&&("undefined"===typeof b.right||"number"===typeof b.right)&&("undefined"===typeof b.top||"number"===typeof b.top)&&("undefined"===typeof b.bottom||"number"===typeof b.bottom)&&("undefined"===typeof b.relativeTo||"string"===typeof b.relativeTo),"Invaid ClickLocation spec");this.N=b.left||0;this.O=b.right||0;this.R=b.top||0;this.L=b.bottom||0;this.G=b.relativeTo;this.I=c;this.h=
{top:0,right:0,bottom:0,left:0}}q(O,t);O.prototype.filter=function(a){return a.clientX>=this.h.left&&a.clientX<=this.h.right&&a.clientY>=this.h.top&&a.clientY<=this.h.bottom?!0:!1};
O.prototype.onLayoutMeasure=function(){var a=this;this.I.getVsync().measure(function(){var b=a.I.win;if(a.G){var c=b.document.querySelector(a.G);B(c,"relativeTo element "+a.G+" not found.");var d=c.getBoundingClientRect();a.h.left=d.left;a.h.top=d.top;a.h.bottom=d.bottom;a.h.right=d.right}else a.h.left=0,a.h.top=0,a.h.bottom=b.innerHeight,a.h.right=b.innerWidth;a.h.left+=a.N;a.h.top+=a.R;a.h.right-=a.O;a.h.bottom-=a.L})};function P(a,b){t.call(this,a,b.type);B("inactiveElement"==b.type&&"string"==typeof b.selector,"Invalid InactiveElementspec");this.P=b.selector}q(P,t);P.prototype.filter=function(a){a=a.target;var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return!(b&&b.call(a,this.P))};function Q(a,b,c){switch(b.type){case "clickDelay":return new M(a,b,c.win);case "clickLocation":return new O(a,b,c);case "inactiveElement":return new P(a,b)}};function oa(a,b){try{a:{var c=(a.ownerDocument||a).defaultView;if(c&&c!=b&&C(c)==b)try{var d=c.frameElement;break a}catch(f){}d=null}var e=d.parentElement;if("AMP-AD"==e.nodeName)return String(e.getResourceId())}catch(f){}return null};function R(){var a=100;this.M=a;this.D=this.H=0;this.o=Object.create(null)}R.prototype.has=function(a){return!!this.o[a]};R.prototype.get=function(a){var b=this.o[a];if(b)return b.access=++this.D,b.payload};R.prototype.put=function(a,b){this.has(a)||this.H++;this.o[a]={payload:b,access:this.D};if(!(this.H<=this.M)){A().warn("lru-cache","Trimming LRU cache");a=this.o;var c=this.D+1,d;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.H--)}};(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0,action:!0});var S,T;
function U(a){var b;S||(S=self.document.createElement("a"),T=self.UrlCache||(self.UrlCache=new R));var c=b?null:T,d=S;if(c&&c.has(a))a=c.get(a);else{d.href=a;d.protocol||(d.href=d.href);var e={href:d.href,protocol:d.protocol,host:d.host,hostname:d.hostname,port:"0"==d.port?"":d.port,pathname:d.pathname,search:d.search,hash:d.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=e.hostname;e.origin=
d.origin&&"null"!=d.origin?d.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;d=x().test&&Object.freeze?Object.freeze(e):e;c&&c.put(a,d);a=d}return a};function V(a){a=AMP.BaseElement.call(this,a)||this;a.J={};a.w=[];a.A={beacon:!0,image:!0};a.C={};a.registerAction("exit",a.exit.bind(a));a.K={};a.B=null;a.m=null;a.F={};return a}q(V,AMP.BaseElement);
V.prototype.exit=function(a){var b=this,c=a.args;a=a.event;var d=this.J[c.target];B(d,"Exit target not found: '"+c.target+"'");B(a,"Unexpected null event");a.preventDefault();if(W(this.w,a)&&W(d.filters,a)){var e=pa(this,c,a,d);d.trackingUrls&&d.trackingUrls.map(e).forEach(function(a){b.A.beacon&&b.win.navigator.sendBeacon&&b.win.navigator.sendBeacon(a,"")||!b.A.image||(b.win.document.createElement("img").src=a)});var f=e(d.finalUrl);if(F(this.getAmpDoc()).getHeadNode().querySelector("script[host-service]"))ha(G(this.getAmpDoc())).then(function(a){return a.openUrl(f)}).catch(function(a){a.fallback&&
I(b.win,f,"_blank")});else{var k=d.behaviors&&d.behaviors.clickTarget&&"_top"==d.behaviors.clickTarget?"_top":"_blank";I(this.win,f,k)}}};
function pa(a,b,c,d){var e={CLICK_X:function(){return c.clientX},CLICK_Y:function(){return c.clientY}},f=fa(a.element),k={RANDOM:!0,CLICK_X:!0,CLICK_Y:!0};if(d.vars){var g={},r;for(r in d.vars)g.j=r,"_"==g.j[0]&&(g.l=d.vars[g.j],g.l&&(e[g.j]=function(c){return function(){if(c.l.iframeTransportSignal){var d=f.expandStringSync(c.l.iframeTransportSignal,{IFRAME_TRANSPORT_SIGNAL:function(b,c){if(!b||!c)return"";var d=a.K[b];if(d&&c in d)return d[c]}});if(c.l.iframeTransportSignal=="IFRAME_TRANSPORT_SIGNAL"+
d)A().error("amp-ad-exit","Invalid IFRAME_TRANSPORT_SIGNAL format:"+d+" (perhaps there is a space after a comma?)");else if(""!=d)return d}return c.j in b?b[c.j]:c.l.defaultValue}}(g),k[g.j]=!0)),g={l:g.l,j:g.j}}return function(a){return f.expandUrlSync(a,e,void 0,k)}}function W(a,b){return a.every(function(a){var c=a.filter(b);z().info("amp-ad-exit","Filter '"+a.name+"': "+(c?"pass":"fail"));return c})}
V.prototype.buildCallback=function(){var a=this;this.element.setAttribute("aria-hidden","true");this.w.push(Q("minDelay",N(),this));this.w.push(Q("carouselBtns",{type:"inactiveElement",selector:".amp-carousel-button"},this));var b=this.element.children;B(1==b.length,"The tag should contain exactly one <script> child.");b=b[0];B("SCRIPT"==b.tagName&&b.hasAttribute("type")&&"APPLICATION/JSON"==b.getAttribute("type").toUpperCase(),'The amp-ad-exit config should be inside a <script> tag with type="application/json"');
try{var c=ma(JSON.parse(b.textContent));if("[object Object]"===ea.call(c.options)&&"string"===typeof c.options.startTimingEvent){var d=c.options.startTimingEvent;this.w.splice(0,1,Q("minDelay",N(c.options.startTimingEvent),this))}for(var e in c.filters){var f=c.filters[e];"clickDelay"==f.type&&(f.startTimingEvent=f.startTimingEvent||d);this.C[e]=Q(e,f,this)}for(var k in c.targets){var g=c.targets[k];this.J[k]={finalUrl:g.finalUrl,trackingUrls:g.trackingUrls||[],vars:g.vars||{},filters:(g.filters||
[]).map(function(b){return a.C[b]}).filter(function(a){return a}),behaviors:g.behaviors||{}};for(var r in g.vars)if(g.vars[r].iframeTransportSignal){var p=g.vars[r].iframeTransportSignal.match(/IFRAME_TRANSPORT_SIGNAL\(([^,]+)/);if(p&&!(2>p.length)){var Z=p[1],X=U(L(Z)).origin;this.F[X]=this.F[X]||Z}}}this.A.beacon=!1!==c.transport.beacon;this.A.image=!1!==c.transport.image}catch(Y){throw this.user().error("amp-ad-exit","Invalid JSON config",Y),Y;}qa(this)};V.prototype.resumeCallback=function(){qa(this)};
V.prototype.unlayoutCallback=function(){this.B&&(this.B(),this.B=null);return AMP.BaseElement.prototype.unlayoutCallback.call(this)};
function qa(a){"inabox"!=x().runtime&&(a.m=a.m||oa(a.element,C(a.win)),a.m?a.B=la(a.getAmpDoc().win,function(b){if(a.F[b.origin]){var c=b.data;if("string"==typeof c&&0==c.indexOf("amp-")&&-1!=c.indexOf("{")){var d=c.indexOf("{");try{var e=JSON.parse(c.substr(d))}catch(k){A().error("MESSAGING","Failed to parse message: "+c,k),e=null}}else e=null;var f=e;f&&"iframe-transport-response"==f.type&&(e=f,b=b.origin,B(e.message,"Received empty response from 3p analytics frame"),B(e.creativeId,"Received malformed message from 3p analytics frame: creativeId missing"),
B(e.vendor,"Received malformed message from 3p analytics frame: vendor missing"),c=U(L(e.vendor)),B(c&&c.origin==b,"Invalid origin for vendor "+(e.vendor+": "+b)),f.creativeId==a.m&&(a.K[f.vendor]=f.message))}}):z().warn("amp-ad-exit","No friendly parent amp-ad element was found for amp-ad-exit; not in inabox case."))}V.prototype.isLayoutSupported=function(){return!0};V.prototype.onLayoutMeasure=function(){for(var a in this.C)this.C[a].onLayoutMeasure()};
(function(a){a.registerElement("amp-ad-exit",V)})(self.AMP);
})});

//# sourceMappingURL=amp-ad-exit-0.1.js.map
