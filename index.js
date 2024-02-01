// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function a(e,r,t){var a=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(a=!0,e=e.substr(1)),e=t?e+i(n):i(n)+e,a&&(e="-"+e)),e}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,i,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,s=parseInt(i,10),!isFinite(s)){if(!t(i))throw new Error("invalid integer. Value: "+i);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(i=(-s).toString(r),e.precision&&(i=a(i,e.precision,e.padRight)),i="-"+i):(i=s.toString(r),s||e.precision?e.precision&&(i=a(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):n.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function c(e){return"string"==typeof e}var l=Math.abs,p=String.prototype.toLowerCase,f=String.prototype.toUpperCase,u=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,i,a=parseFloat(e.arg);if(!isFinite(a)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);a=e.arg}switch(e.specifier){case"e":case"E":i=a.toExponential(e.precision);break;case"f":case"F":i=a.toFixed(e.precision);break;case"g":case"G":l(a)<1e-4?((r=e.precision)>0&&(r-=1),i=a.toExponential(r)):i=a.toPrecision(e.precision),e.alternate||(i=u.call(i,y,"$1e"),i=u.call(i,v,"e"),i=u.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=u.call(i,g,"e+0$1"),i=u.call(i,d,"e-0$1"),e.alternate&&(i=u.call(i,h,"$1."),i=u.call(i,w,"$1.e")),a>=0&&e.sign&&(i=e.sign+i),i=e.specifier===f.call(e.specifier)?f.call(i):p.call(i)}function x(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function _(e,r,t){var i=r-e.length;return i<0?e:e=t?e+x(i):x(i)+e}var k=String.fromCharCode,E=isNaN,j=Array.isArray;function S(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,t,i,n,o,l,p,f,u;if(!j(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",p=1,f=0;f<e.length;f++)if(c(i=e[f]))l+=i;else{if(r=void 0!==i.precision,!(i=S(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(n=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,E(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,E(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=s(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!E(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=E(o)?String(i.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=a(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=_(i.arg,i.width,i.padRight)),l+=i.arg||"",p+=1}return l}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function T(e){var r,t,i,a;for(t=[],a=0,i=F.exec(e);i;)(r=e.slice(a,F.lastIndex-i[0].length)).length&&t.push(r),t.push(N(i)),a=F.lastIndex,i=F.exec(e);return(r=e.slice(a)).length&&t.push(r),t}function $(e){return"string"==typeof e}function A(e){var r,t,i;if(!$(e))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=T(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return V.apply(null,t)}var I,C=Object.prototype,R=C.toString,O=C.__defineGetter__,P=C.__defineSetter__,Z=C.__lookupGetter__,G=C.__lookupSetter__;function L(e,r,t){var i,a,n,o;if(0===(i=e.length))return NaN;if(i!==r.length)return NaN;if(0===t||1===i)return e[0]/r[0];if(function(e){return Math.abs(e)}(t)<=1)for(a=e[i-1],n=r[i-1],o=i-2;o>=0;--o)a*=t,n*=t,a+=e[o],n+=r[o];else for(t=1/t,a=e[0],n=r[0],o=1;o<i;++o)a*=t,n*=t,a+=e[o],n+=r[o];return a/n}I=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((a="value"in t)&&(Z.call(e,r)||G.call(e,r)?(i=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),n="get"in t,o="set"in t,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&O&&O.call(e,r,t.get),o&&P&&P.call(e,r,t.set),e};var W=Function;return I(L,"factory",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r){var t,i,a,n;if(e.length>500)return function(t){return L(e,r,t)};if(t="return function evalrational(x){",t+="var ax,s1,s2;",0===(i=e.length))t+="return NaN;";else if(i!==r.length)t+="return NaN;";else if(1===i)t+="return "+e[0]/r[0]+";";else{for(t+="if(x===0.0){return "+e[0]/r[0]+";}",t+="if(x<0.0){ax=-x;}else{ax=x;}",t+="if(ax<=1.0){",t+="s1 = "+e[0],a=i-1,n=1;n<i;n++)t+="+x*",n<a&&(t+="("),t+=e[n];for(n=0;n<a-1;n++)t+=")";for(t+=";",t+="s2 = "+r[0],a=i-1,n=1;n<i;n++)t+="+x*",n<a&&(t+="("),t+=r[n];for(n=0;n<a-1;n++)t+=")";for(t+=";",t+="}else{",t+="x = 1.0/x;",t+="s1 = "+e[a=i-1],n=a-1;n>=0;n--)t+="+x*",n>0&&(t+="("),t+=e[n];for(n=0;n<a-1;n++)t+=")";for(t+=";",t+="s2 = "+r[a=i-1],n=a-1;n>=0;n--)t+="+x*",n>0&&(t+="("),t+=r[n];for(n=0;n<a-1;n++)t+=")";t+=";",t+="}",t+="return s1/s2;"}return t+="}",new W(t+="//# sourceURL=evalrational.factory.js")()}}),L},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).evalrational=r();
//# sourceMappingURL=index.js.map
