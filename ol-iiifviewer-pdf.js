/*
 * IiifViewer; Copyright (C) 2014 - Klokan Technologies GmbH
 * Powered by OpenLayers 3
 */
var h,m=m||{},n=this;function aa(){}
function p(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function q(a){return"array"==p(a)}function r(a){var b=p(a);return"array"==b||"object"==b&&"number"==typeof a.length}function u(a){return"string"==typeof a}var ba="closure_uid_"+(1E9*Math.random()>>>0),ca=0;function da(a,b,c){return a.call.apply(a.bind,arguments)}
function ea(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function v(a,b,c){v=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?da:ea;return v.apply(null,arguments)}
function y(a,b){var c=a.split("."),d=n;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b}function z(a,b){function c(){}c.prototype=b.prototype;a.Y=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Aa=function(a,c,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[c].apply(a,g)}};var fa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function A(a,b){return a<b?-1:a>b?1:0};var C=Array.prototype,ga=C.indexOf?function(a,b,c){return C.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(u(a))return u(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ha=C.forEach?function(a,b,c){C.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function ia(a){var b;a:{b=ja;for(var c=a.length,d=u(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:u(a)?a.charAt(b):a[b]};var D;a:{var ka=n.navigator;if(ka){var la=ka.userAgent;if(la){D=la;break a}}D=""};function ma(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function na(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function oa(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return c}var pa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<pa.length;f++)c=pa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var ra=-1!=D.indexOf("Opera")||-1!=D.indexOf("OPR"),E=-1!=D.indexOf("Trident")||-1!=D.indexOf("MSIE"),F=-1!=D.indexOf("Gecko")&&-1==D.toLowerCase().indexOf("webkit")&&!(-1!=D.indexOf("Trident")||-1!=D.indexOf("MSIE")),G=-1!=D.toLowerCase().indexOf("webkit");function sa(){var a=n.document;return a?a.documentMode:void 0}
var ta=function(){var a="",b;if(ra&&n.opera)return a=n.opera.version,"function"==p(a)?a():a;F?b=/rv\:([^\);]+)(\)|;)/:E?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:G&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(D))?a[1]:"");return E&&(b=sa(),b>parseFloat(a))?String(b):a}(),ua={};
function H(a){var b;if(!(b=ua[a])){b=0;for(var c=fa(String(ta)).split("."),d=fa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"",w=RegExp("(\\d*)(\\D*)","g"),L=RegExp("(\\d*)(\\D*)","g");do{var l=w.exec(g)||["","",""],t=L.exec(k)||["","",""];if(0==l[0].length&&0==t[0].length)break;b=A(0==l[1].length?0:parseInt(l[1],10),0==t[1].length?0:parseInt(t[1],10))||A(0==l[2].length,0==t[2].length)||A(l[2],t[2])}while(0==b)}b=ua[a]=0<=b}return b}
var va=n.document,wa=va&&E?sa()||("CSS1Compat"==va.compatMode?parseInt(ta,10):5):void 0;var xa=!E||E&&9<=wa,ya=E&&!H("9");!G||H("528");F&&H("1.9b")||E&&H("8")||ra&&H("9.5")||G&&H("528");F&&!H("8")||E&&H("9");function I(){0!=za&&(this[ba]||(this[ba]=++ca));this.G=this.G;this.oa=this.oa}var za=0;I.prototype.G=!1;function J(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.k=!1;this.X=!0}J.prototype.stopPropagation=function(){this.k=!0};J.prototype.preventDefault=function(){this.defaultPrevented=!0;this.X=!1};function K(a){K[" "](a);return a}K[" "]=aa;function M(a,b){J.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.e=this.state=null;if(a){this.e=a;var c=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(F){var e;a:{try{K(d.nodeName);e=!0;break a}catch(f){}e=!1}e||(d=null)}}else"mouseover"==
c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;Object.defineProperties?Object.defineProperties(this,{offsetX:{configurable:!0,enumerable:!0,get:this.O,set:this.qa},offsetY:{configurable:!0,enumerable:!0,get:this.P,set:this.ra}}):(this.offsetX=this.O(),this.offsetY=this.P());this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=
a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;a.defaultPrevented&&this.preventDefault()}}z(M,J);h=M.prototype;h.stopPropagation=function(){M.Y.stopPropagation.call(this);this.e.stopPropagation?this.e.stopPropagation():this.e.cancelBubble=!0};
h.preventDefault=function(){M.Y.preventDefault.call(this);var a=this.e;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,ya)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};h.O=function(){return G||void 0!==this.e.offsetX?this.e.offsetX:this.e.layerX};h.qa=function(a){Object.defineProperties(this,{offsetX:{writable:!0,enumerable:!0,configurable:!0,value:a}})};h.P=function(){return G||void 0!==this.e.offsetY?this.e.offsetY:this.e.layerY};
h.ra=function(a){Object.defineProperties(this,{offsetY:{writable:!0,enumerable:!0,configurable:!0,value:a}})};var N="closure_listenable_"+(1E6*Math.random()|0),Aa=0;function Ba(a,b,c,d,e){this.j=a;this.proxy=null;this.src=b;this.type=c;this.q=!!d;this.s=e;this.key=++Aa;this.m=this.p=!1}function Ca(a){a.m=!0;a.j=null;a.proxy=null;a.src=null;a.s=null};function O(a){this.src=a;this.d={};this.A=0}O.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.d[f];a||(a=this.d[f]=[],this.A++);var g=Da(a,b,d,e);-1<g?(b=a[g],c||(b.p=!1)):(b=new Ba(b,this.src,f,!!d,e),b.p=c,a.push(b));return b};O.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.d))return!1;var e=this.d[a];b=Da(e,b,c,d);return-1<b?(Ca(e[b]),C.splice.call(e,b,1),0==e.length&&(delete this.d[a],this.A--),!0):!1};
function Ea(a,b){var c=b.type;if(c in a.d){var d=a.d[c],e=ga(d,b),f;(f=0<=e)&&C.splice.call(d,e,1);f&&(Ca(b),0==a.d[c].length&&(delete a.d[c],a.A--))}}O.prototype.I=function(a,b,c,d){a=this.d[a.toString()];var e=-1;a&&(e=Da(a,b,c,d));return-1<e?a[e]:null};function Da(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.m&&f.j==b&&f.q==!!c&&f.s==d)return e}return-1};var Fa="closure_lm_"+(1E6*Math.random()|0),Ga={},Ha=0;function Ia(a,b,c,d,e){if(q(b))for(var f=0;f<b.length;f++)Ia(a,b[f],c,d,e);else c=Ja(c),a&&a[N]?a.i.add(String(b),c,!1,d,e):Ka(a,b,c,!1,d,e)}function Ka(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=!!e,k=P(a);k||(a[Fa]=k=new O(a));c=k.add(b,c,d,e,f);c.proxy||(d=La(),c.proxy=d,d.src=a,d.j=c,a.addEventListener?a.addEventListener(b.toString(),d,g):a.attachEvent(Ma(b.toString()),d),Ha++)}
function La(){var a=Na,b=xa?function(c){return a.call(b.src,b.j,c)}:function(c){c=a.call(b.src,b.j,c);if(!c)return c};return b}function Oa(a,b,c,d,e){if(q(b))for(var f=0;f<b.length;f++)Oa(a,b[f],c,d,e);else c=Ja(c),a&&a[N]?a.i.add(String(b),c,!0,d,e):Ka(a,b,c,!0,d,e)}function Pa(a,b,c,d,e){if(q(b))for(var f=0;f<b.length;f++)Pa(a,b[f],c,d,e);else c=Ja(c),a&&a[N]?a.i.remove(String(b),c,d,e):a&&(a=P(a))&&(b=a.I(b,c,!!d,e))&&Qa(b)}
function Qa(a){if("number"!=typeof a&&a&&!a.m){var b=a.src;if(b&&b[N])Ea(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.q):b.detachEvent&&b.detachEvent(Ma(c),d);Ha--;(c=P(b))?(Ea(c,a),0==c.A&&(c.src=null,b[Fa]=null)):Ca(a)}}}function Ma(a){return a in Ga?Ga[a]:Ga[a]="on"+a}function Ra(a,b,c,d){var e=!0;if(a=P(a))if(b=a.d[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.q==c&&!f.m&&(f=Sa(f,d),e=e&&!1!==f)}return e}
function Sa(a,b){var c=a.j,d=a.s||a.src;a.p&&Qa(a);return c.call(d,b)}
function Na(a,b){if(a.m)return!0;if(!xa){var c;if(!(c=b))a:{c=["window","event"];for(var d=n,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break a}c=d}e=c;c=new M(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){a:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(g){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.currentTarget;f;f=f.parentNode)e.push(f);for(var f=a.type,k=e.length-1;!c.k&&0<=k;k--){c.currentTarget=e[k];var w=Ra(e[k],f,!0,c),d=d&&w}for(k=0;!c.k&&k<e.length;k++)c.currentTarget=
e[k],w=Ra(e[k],f,!1,c),d=d&&w}return d}return Sa(a,new M(b,this))}function P(a){a=a[Fa];return a instanceof O?a:null}var Ta="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ja(a){if("function"==p(a))return a;a[Ta]||(a[Ta]=function(b){return a.handleEvent(b)});return a[Ta]};function Ua(a){ol.tilegrid.TileGrid.call(this,a)}z(Ua,ol.tilegrid.XYZ);function Va(a){for(var b=a.ha,c=a.ia||"jpg",d=a.Ba||"native",e=a.width,f=a.height,g=a.tileSize||256,k=Math.max(Math.ceil(Math.log(e/g)/Math.LN2),Math.ceil(Math.log(f/g)/Math.LN2)),w=[],L=0;L<=k;L++){var l=Math.pow(2,k-L),t=Math.ceil(e/l),l=Math.ceil(f/l),t=Math.ceil(t/g),l=Math.ceil(l/g);w.push([t,l])}ol.source.TileImage.call(this,{tileGrid:new Ua({resolutions:a.resolutions.reverse(),origin:[0,0],tileSize:g}),tileUrlFunction:function(a){var l=a[0];if(!(k<l)){var x=w[l];if(x){var B=a[1];a=-a[2]-1;
if(!(0>B||x[0]<=B||0>a||x[1]<=a)){l=Math.pow(2,k-l);x=g*l;B*=x;a*=x;var t=Math.min(B+x,e),x=Math.min(a+x,f);return b+("/"+B+","+a+","+(t-B)+","+(x-a)+"/pct:"+100/l+"/0/"+d+"."+c)}}}},crossOrigin:a.crossOrigin});ol.has.CANVAS&&this.setTileLoadFunction(function(a,b){var c=a.getImage();Oa(c,"load",function(){if(0<c.naturalWidth&&(c.naturalWidth!=g||c.naturalHeight!=g)){var b=document.createElement(Wa);b.width=g;b.height=g;b.getContext("2d").drawImage(c,0,0);var d=oa(a,function(a){return a==c});d&&(a[d]=
b)}},!0);c.src=b})}z(Va,ol.source.TileImage);!F&&!E||E&&E&&9<=wa||F&&H("1.9.1");E&&H("9");var Wa="CANVAS";function Xa(a){var b=document;return u(a)?b.getElementById(a):a};function Ya(){}Ya.prototype.N=null;function Za(a){return a.N||(a.N=a.T())};var $a;function Q(){}z(Q,Ya);Q.prototype.D=function(){var a=ab(this);return a?new ActiveXObject(a):new XMLHttpRequest};Q.prototype.T=function(){var a={};ab(this)&&(a[0]=!0,a[1]=!0);return a};
function ab(a){if(!a.R&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.R=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.R}$a=new Q;function R(){}z(R,Ya);R.prototype.D=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new bb;throw Error("Unsupported browser");};R.prototype.T=function(){return{}};
function bb(){this.f=new XDomainRequest;this.readyState=0;this.responseText=this.onreadystatechange=null;this.status=-1;this.statusText=this.responseXML=null;this.f.onload=v(this.ka,this);this.f.onerror=v(this.Q,this);this.f.onprogress=v(this.la,this);this.f.ontimeout=v(this.ma,this)}h=bb.prototype;h.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.f.open(a,b)};
h.send=function(a){if(a)if("string"==typeof a)this.f.send(a);else throw Error("Only string data is supported");else this.f.send()};h.abort=function(){this.f.abort()};h.setRequestHeader=function(){};h.getResponseHeader=function(a){return"content-type"==a.toLowerCase()?this.f.contentType:""};h.ka=function(){this.status=200;this.responseText=this.f.responseText;cb(this,4)};h.Q=function(){this.status=500;this.responseText=null;cb(this,4)};h.ma=function(){this.Q()};
h.la=function(){this.status=200;cb(this,1)};function cb(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()}h.getAllResponseHeaders=function(){return"content-type: "+this.f.contentType};function S(){I.call(this);this.i=new O(this);this.ba=this;this.V=null}z(S,I);S.prototype[N]=!0;S.prototype.addEventListener=function(a,b,c,d){Ia(this,a,b,c,d)};S.prototype.removeEventListener=function(a,b,c,d){Pa(this,a,b,c,d)};
S.prototype.dispatchEvent=function(a){var b,c=this.V;if(c)for(b=[];c;c=c.V)b.push(c);var c=this.ba,d=a.type||a;if(u(a))a=new J(a,c);else if(a instanceof J)a.target=a.target||c;else{var e=a;a=new J(d,c);qa(a,e)}var e=!0,f;if(b)for(var g=b.length-1;!a.k&&0<=g;g--)f=a.currentTarget=b[g],e=T(f,d,!0,a)&&e;a.k||(f=a.currentTarget=c,e=T(f,d,!0,a)&&e,a.k||(e=T(f,d,!1,a)&&e));if(b)for(g=0;!a.k&&g<b.length;g++)f=a.currentTarget=b[g],e=T(f,d,!1,a)&&e;return e};
function T(a,b,c,d){b=a.i.d[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.m&&g.q==c){var k=g.j,w=g.s||g.src;g.p&&Ea(a.i,g);e=!1!==k.call(w,d)&&e}}return e&&0!=d.X}S.prototype.I=function(a,b,c,d){return this.i.I(String(a),b,c,d)};function db(a,b,c){if("function"==p(a))c&&(a=v(a,c));else if(a&&"function"==typeof a.handleEvent)a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:n.setTimeout(a,b||0)};function eb(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);};function fb(a){if("function"==typeof a.r)return a.r();if(u(a))return a.split("");if(r(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return ma(a)}
function gb(a,b){if("function"==typeof a.forEach)a.forEach(b,void 0);else if(r(a)||u(a))ha(a,b,void 0);else{var c;if("function"==typeof a.getKeys)c=a.getKeys();else if("function"!=typeof a.r)if(r(a)||u(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=na(a);else c=void 0;for(var d=fb(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}};function U(a,b){this.b={};this.c=[];this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof U?(c=a.getKeys(),d=a.r()):(c=na(a),d=ma(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}}h=U.prototype;h.r=function(){V(this);for(var a=[],b=0;b<this.c.length;b++)a.push(this.b[this.c[b]]);return a};h.getKeys=function(){V(this);return this.c.concat()};
h.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||hb;V(this);for(var d,e=0;d=this.c[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};function hb(a,b){return a===b}h.isEmpty=function(){return 0==this.g};h.clear=function(){this.b={};this.g=this.c.length=0};h.remove=function(a){return Object.prototype.hasOwnProperty.call(this.b,a)?(delete this.b[a],this.g--,this.c.length>2*this.g&&V(this),!0):!1};
function V(a){if(a.g!=a.c.length){for(var b=0,c=0;b<a.c.length;){var d=a.c[b];Object.prototype.hasOwnProperty.call(a.b,d)&&(a.c[c++]=d);b++}a.c.length=c}if(a.g!=a.c.length){for(var e={},c=b=0;b<a.c.length;)d=a.c[b],Object.prototype.hasOwnProperty.call(e,d)||(a.c[c++]=d,e[d]=1),b++;a.c.length=c}}h.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.b,a)?this.b[a]:b};h.set=function(a,b){Object.prototype.hasOwnProperty.call(this.b,a)||(this.g++,this.c.push(a));this.b[a]=b};
h.forEach=function(a,b){for(var c=this.getKeys(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};h.clone=function(){return new U(this)};var ib=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function jb(a){if(kb){kb=!1;var b=n.location;if(b){var c=b.href;if(c&&(c=(c=jb(c)[3]||null)?decodeURI(c):c)&&c!=b.hostname)throw kb=!0,Error();}}return a.match(ib)}var kb=G;function lb(a){S.call(this);this.headers=new U;this.C=a||null;this.l=!1;this.B=this.a=null;this.u=this.K="";this.n=this.J=this.t=this.H=!1;this.w=0;this.v=null;this.W=mb;this.M=this.ta=!1}z(lb,S);var mb="",nb=/^https?$/i,ob=["POST","PUT"];h=lb.prototype;
h.send=function(a,b,c,d){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request\x3d"+this.K+"; newUri\x3d"+a);b=b?b.toUpperCase():"GET";this.K=a;this.u="";this.H=!1;this.l=!0;this.a=this.C?this.C.D():$a.D();this.B=this.C?Za(this.C):Za($a);this.a.onreadystatechange=v(this.U,this);try{this.J=!0,this.a.open(b,String(a),!0),this.J=!1}catch(e){pb(this,e);return}a=c||"";var f=this.headers.clone();d&&gb(d,function(a,b){f.set(b,a)});d=ia(f.getKeys());c=n.FormData&&a instanceof n.FormData;
!(0<=ga(ob,b))||d||c||f.set("Content-Type","application/x-www-form-urlencoded;charset\x3dutf-8");f.forEach(function(a,b){this.a.setRequestHeader(b,a)},this);this.W&&(this.a.responseType=this.W);"withCredentials"in this.a&&(this.a.withCredentials=this.ta);try{qb(this),0<this.w&&((this.M=rb(this.a))?(this.a.timeout=this.w,this.a.ontimeout=v(this.Z,this)):this.v=db(this.Z,this.w,this)),this.t=!0,this.a.send(a),this.t=!1}catch(g){pb(this,g)}};
function rb(a){return E&&H(9)&&"number"==typeof a.timeout&&void 0!==a.ontimeout}function ja(a){return"content-type"==a.toLowerCase()}h.Z=function(){"undefined"!=typeof m&&this.a&&(this.u="Timed out after "+this.w+"ms, aborting",this.dispatchEvent("timeout"),this.abort(8))};function pb(a,b){a.l=!1;a.a&&(a.n=!0,a.a.abort(),a.n=!1);a.u=b;sb(a);tb(a)}function sb(a){a.H||(a.H=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))}
h.abort=function(){this.a&&this.l&&(this.l=!1,this.n=!0,this.a.abort(),this.n=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),tb(this))};h.U=function(){this.G||(this.J||this.t||this.n?ub(this):this.pa())};h.pa=function(){ub(this)};
function ub(a){if(a.l&&"undefined"!=typeof m&&(!a.B[1]||4!=W(a)||2!=vb(a)))if(a.t&&4==W(a))db(a.U,0,a);else if(a.dispatchEvent("readystatechange"),4==W(a)){a.l=!1;try{if(wb(a))a.dispatchEvent("complete"),a.dispatchEvent("success");else{var b;try{b=2<W(a)?a.a.statusText:""}catch(c){b=""}a.u=b+" ["+vb(a)+"]";sb(a)}}finally{tb(a)}}}function tb(a){if(a.a){qb(a);var b=a.a,c=a.B[0]?aa:null;a.a=null;a.B=null;a.dispatchEvent("ready");try{b.onreadystatechange=c}catch(d){}}}
function qb(a){a.a&&a.M&&(a.a.ontimeout=null);"number"==typeof a.v&&(n.clearTimeout(a.v),a.v=null)}function wb(a){var b=vb(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=jb(String(a.K))[1]||null,!a&&self.location&&(a=self.location.protocol,a=a.substr(0,a.length-1)),b=!nb.test(a?a.toLowerCase():"");c=b}return c}function W(a){return a.a?a.a.readyState:0}function vb(a){try{return 2<W(a)?a.a.status:-1}catch(b){return-1}}
h.getResponseHeader=function(a){return this.a&&4==W(this)?this.a.getResponseHeader(a):void 0};h.getAllResponseHeaders=function(){return this.a&&4==W(this)?this.a.getAllResponseHeaders():""};function X(a,b,c,d,e){a=Xa(a);if(!a)throw Error("Invalid element");this.na=a;this.F=this.b=null;this.aa=1==d;this.L=e||null;this.S=c||null;this.ja=u(b)?b.substring(0,b.lastIndexOf("/")):null;xb(this,b)}X.prototype.getMap=function(){return this.b};
function yb(a,b){var c=b.width,d=b.height,e=b["@id"];if(!e){var f=b.image_host,g=b.identifier;f&&g&&(e=f+g)}e||(e=a.ja);if(!e)throw Error("Unable to determine base url");g=(b.tiles||[{}])[0];f=new ol.proj.Projection({code:"IIIF",units:"pixels",extent:[0,-d,c,0]});e=new Va({ha:e,width:c,height:d,resolutions:b.scale_factors||g.scaleFactors,ia:(b.formats||[])[0],tileSize:b.tile_width||g.width||void 0,projection:f,crossOrigin:a.aa?"":"anonymous"});e=new ol.layer.Tile({source:e});a.b=new ol.Map({layers:[e],
target:a.na,renderer:a.aa?"webgl":void 0,view:new ol.View({projection:f,extent:[0,-d,c,0]}),interactions:ol.interaction.defaults({mouseWheelZoom:null==a.L}),controls:[],logo:!1});a.L&&a.b.addInteraction(a.L);d=window.location.hash;if(0<d.length&&(0<d.indexOf("lat\x3d")||0<d.indexOf("x\x3d"))){c=[];d=d.split("\x26");d[0]=d[0].substring(1);for(f=0;f<d.length;f++)e=d[f].split("\x3d"),c[e[0]]=e[1];void 0!==c.zoom?(a.b.getView().setCenter([parseFloat(c.lon),parseFloat(c.lat)-a.F.height]),a.b.getView().setZoom(c.zoom)):
(a.b.getView().setCenter([parseFloat(c.y),-parseFloat(c.x)]),a.b.getView().setResolution(c.res))}else a.b.getView().fitExtent(f.getExtent(),a.b.getSize()||null);a.S&&a.S(a)}function xb(a,b){if(u(b)){var c=new lb(new R);Ia(c,"complete",function(){if(wb(c)){var a;a=c.a?eb(c.a.responseText):void 0;xb(this,a)}},!1,a);c.send(b)}else a.F=b,yb(a,b)}
X.prototype.ea=function(a){if(!1!==a){var b=null!=a.accuracy?a.accuracy:4,c=this.F.height;this.b.on("moveend",function(){var d=this.getView(),e=d.getCenter(),f="",f=parseFloat(e[1]);null!=a.geoFormat&&!1===a.geoFormat?f="res\x3d"+d.getResolution()+"\x26x\x3d"+Math.abs(f.toFixed(b))+"\x26y\x3d"+e[0].toFixed(b):(f+=c,f="zoom\x3d"+d.getZoom()+"\x26lat\x3d"+f.toFixed(b)+"\x26lon\x3d"+e[0].toFixed(b));null!=a.addToEnd&&(f+="\x26"+a.addToEnd);window.location.hash=f})}};function Y(a,b){var c={ua:[1189,841],va:[841,594],wa:[594,420],xa:[420,297],ya:[297,210],za:[210,148]};if("auto"!==a&&null!=a)c=q(a)||null==c[a.toLowerCase()]?q(a)&&null!=a[0]&&null!=a[1]?a:[297,210]:c[a.toLowerCase()];else var c=window.innerWidth,d=window.innerHeight,c=c>d?[c/4,d/4]:[d/4,c/4];this.h=c;c=b;"auto"!==c&&null!=c?c.indexOf(["l","p","landscape","portrait"])||(c="l"):c=window.innerWidth>window.innerHeight?"l":"p";this.o=c.substring(0,1);this.sa=20;this.doc=new jsPDF(this.o,"mm",this.h)}
h=Y.prototype;h.ga=function(a,b,c,d,e){null!==c&&this.doc.setTextColor(c[0],c[1],c[2]);null===b&&(b=this.sa);this.doc.setFontSize(b);b=Z(this,d,e);this.doc.text(a,b[0],b[1]);this.doc.setTextColor(0,0,0)};h.ca=function(a,b,c,d,e){b=Z(this,b,c);this.doc.addImage(a,"JPEG",b[0],b[1],d,e)};
h.da=function(a,b,c){var d=typeof a;var e=document;a=(("object"==d&&null!=a||"function"==d)&&1==a.nodeType?a:Xa(a))||e;a=a.querySelectorAll&&a.querySelector?a.querySelectorAll("CANVAS"):a.getElementsByTagName("CANVAS");a=a[0];d=a.getContext("2d");d.getImageData(0,0,a.width,a.height);d.globalCompositeOperation="destination-over";d.fillStyle="#ffffff";d.fillRect(0,0,a.width,a.height);var d=a.toDataURL("image/jpeg"),f,g;a.width>a.height?(e=0<this.o.indexOf(["l","landscape"])?this.h[1]:this.h[0],g=a.width/
e,f=a.height/g):(f=0<this.o.indexOf(["p","portrait"])?this.h[1]:this.h[0],g=a.height/f,e=a.width/g);b=null!=b?b:0;b=Z(this,b,null!=c?b:0);this.doc.addImage(d,"JPEG",b[0],b[1],e,f)};h.save=function(a){a=null!=a?".pdf"===a.slice(-4)?a:a+".pdf":"doc";this.doc.save(a)};h.fa=function(a,b,c,d,e){this.doc.setFillColor(e[0],e[1],e[2]);a=Z(this,a,b);this.doc.rect(a[0],a[1],c,d,"F");this.doc.setFillColor(0,0,0)};
function Z(a,b,c){0>b&&(b="l"===a.o?b+a.h[0]:b+a.h[1]);0>c&&(c="l"===a.o?c+a.h[1]:c+a.h[0]);return[b,c]};y("IiifViewer",X);y("IiifViewer.prototype.getMap",X.prototype.getMap);y("IiifViewer.prototype.addPermalink",X.prototype.ea);y("IiifSource",Va);y("IiifPrint",Y);y("IiifPrint.prototype.addText",Y.prototype.ga);y("IiifPrint.prototype.addBase64Image",Y.prototype.ca);y("IiifPrint.prototype.addDocument",Y.prototype.da);y("IiifPrint.prototype.addRectangle",Y.prototype.fa);y("IiifPrint.prototype.save",Y.prototype.save);
