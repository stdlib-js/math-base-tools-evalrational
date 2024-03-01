// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function i(e){return"number"==typeof e}function t(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function a(e,r,i){var a=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(a=!0,e=e.substr(1)),e=i?e+t(n):t(n)+e,a&&(e="-"+e)),e}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,t,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,s=parseInt(t,10),!isFinite(s)){if(!i(t))throw new Error("invalid integer. Value: "+t);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(t=(-s).toString(r),e.precision&&(t=a(t,e.precision,e.padRight)),t="-"+t):(t=s.toString(r),s||e.precision?e.precision&&(t=a(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):n.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var c=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,f=String.prototype.replace,u=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function y(e){var r,t,a=parseFloat(e.arg);if(!isFinite(a)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);a=e.arg}switch(e.specifier){case"e":case"E":t=a.toExponential(e.precision);break;case"f":case"F":t=a.toFixed(e.precision);break;case"g":case"G":c(a)<1e-4?((r=e.precision)>0&&(r-=1),t=a.toExponential(r)):t=a.toPrecision(e.precision),e.alternate||(t=f.call(t,v,"$1e"),t=f.call(t,b,"e"),t=f.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=f.call(t,u,"e+0$1"),t=f.call(t,g,"e-0$1"),e.alternate&&(t=f.call(t,d,"$1."),t=f.call(t,h,"$1.e")),a>=0&&e.sign&&(t=e.sign+t),t=e.specifier===p.call(e.specifier)?p.call(t):l.call(t)}function m(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}var x=String.fromCharCode,_=isNaN,k=Array.isArray;function E(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function j(e){var r,i,t,n,o,c,l,p,f,u,g,d,h;if(!k(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",l=1,p=0;p<e.length;p++)if("string"==typeof(t=e[p]))c+=t;else{if(r=void 0!==t.precision,!(t=E(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(n=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,_(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,_(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=s(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!_(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_(o)?String(t.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=y(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=a(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(u=t.arg,g=t.width,d=t.padRight,h=void 0,(h=g-u.length)<0?u:u=d?u+m(h):m(h)+u)),c+=t.arg||"",l+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,i,t,a;for(i=[],a=0,t=S.exec(e);t;)(r=e.slice(a,S.lastIndex-t[0].length)).length&&i.push(r),i.push(V(t)),a=S.lastIndex,t=S.exec(e);return(r=e.slice(a)).length&&i.push(r),i}function N(e){var r,i;if("string"!=typeof e)throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[F(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return j.apply(null,r)}var T,$=Object.prototype,I=$.toString,A=$.__defineGetter__,C=$.__defineSetter__,R=$.__lookupGetter__,O=$.__lookupSetter__;function P(e,r,i){var t,a,n,o;if(0===(t=e.length))return NaN;if(t!==r.length)return NaN;if(0===i||1===t)return e[0]/r[0];if(function(e){return Math.abs(e)}(i)<=1)for(a=e[t-1],n=r[t-1],o=t-2;o>=0;--o)a*=i,n*=i,a+=e[o],n+=r[o];else for(i=1/i,a=e[0],n=r[0],o=1;o<t;++o)a*=i,n*=i,a+=e[o],n+=r[o];return a/n}T=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var t,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===I.call(i))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((a="value"in i)&&(R.call(e,r)||O.call(e,r)?(t=e.__proto__,e.__proto__=$,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),n="get"in i,o="set"in i,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&A&&A.call(e,r,i.get),o&&C&&C.call(e,r,i.set),e};var Z=Function;return T(P,"factory",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r){var i,t,a,n;if(e.length>500)return function(i){return P(e,r,i)};if(i="return function evalrational(x){",i+="var ax,s1,s2;",0===(t=e.length))i+="return NaN;";else if(t!==r.length)i+="return NaN;";else if(1===t)i+="return "+e[0]/r[0]+";";else{for(i+="if(x===0.0){return "+e[0]/r[0]+";}",i+="if(x<0.0){ax=-x;}else{ax=x;}",i+="if(ax<=1.0){",i+="s1 = "+e[0],a=t-1,n=1;n<t;n++)i+="+x*",n<a&&(i+="("),i+=e[n];for(n=0;n<a-1;n++)i+=")";for(i+=";",i+="s2 = "+r[0],a=t-1,n=1;n<t;n++)i+="+x*",n<a&&(i+="("),i+=r[n];for(n=0;n<a-1;n++)i+=")";for(i+=";",i+="}else{",i+="x = 1.0/x;",i+="s1 = "+e[a=t-1],n=a-1;n>=0;n--)i+="+x*",n>0&&(i+="("),i+=e[n];for(n=0;n<a-1;n++)i+=")";for(i+=";",i+="s2 = "+r[a=t-1],n=a-1;n>=0;n--)i+="+x*",n>0&&(i+="("),i+=r[n];for(n=0;n<a-1;n++)i+=")";i+=";",i+="}",i+="return s1/s2;"}return i+="}",new Z(i+="//# sourceURL=evalrational.factory.js")()}}),P},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).evalrational=r();
//# sourceMappingURL=index.js.map
