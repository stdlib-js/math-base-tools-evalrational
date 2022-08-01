// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,l=n.__defineSetter__,i=n.__lookupGetter__,u=n.__lookupSetter__;function f(e,r,t){var n,o,a,l;if(0===(n=e.length))return NaN;if(n!==r.length)return NaN;if(0===t||1===n)return e[0]/r[0];if(function(e){return Math.abs(e)}(t)<=1)for(o=e[n-1],a=r[n-1],l=n-2;l>=0;--l)o*=t,a*=t,o+=e[l],a+=r[l];else for(t=1/t,o=e[0],a=r[0],l=1;l<n;++l)o*=t,a*=t,o+=e[l],a+=r[l];return o/a}function c(e,r){var t,n,o,a;if(e.length>500)return function(t){return f(e,r,t)};if(t="return function evalrational(x){",t+="var ax,s1,s2;",0===(n=e.length))t+="return NaN;";else if(n!==r.length)t+="return NaN;";else if(1===n)t+="return "+e[0]/r[0]+";";else{for(t+="if(x===0.0){return "+e[0]/r[0]+";}",t+="if(x<0.0){ax=-x;}else{ax=x;}",t+="if(ax<=1.0){",t+="s1 = "+e[0],o=n-1,a=1;a<n;a++)t+="+x*",a<o&&(t+="("),t+=e[a];for(a=0;a<o-1;a++)t+=")";for(t+=";",t+="s2 = "+r[0],o=n-1,a=1;a<n;a++)t+="+x*",a<o&&(t+="("),t+=r[a];for(a=0;a<o-1;a++)t+=")";for(t+=";",t+="}else{",t+="x = 1.0/x;",t+="s1 = "+e[o=n-1],a=o-1;a>=0;a--)t+="+x*",a>0&&(t+="("),t+=e[a];for(a=0;a<o-1;a++)t+=")";for(t+=";",t+="s2 = "+r[o=n-1],a=o-1;a>=0;a--)t+="+x*",a>0&&(t+="("),t+=r[a];for(a=0;a<o-1;a++)t+=")";t+=";",t+="}",t+="return s1/s2;"}return t+="}",t+="//# sourceURL=evalrational.factory.js",new Function(t)()}r=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var f,c,s,_;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(i.call(e,r)||u.call(e,r)?(f=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=f):e[r]=t.value),s="get"in t,_="set"in t,c&&(s||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&a&&a.call(e,r,t.get),_&&l&&l.call(e,r,t.set),e},r(f,"factory",{configurable:!1,enumerable:!1,writable:!1,value:c});export{f as default,c as factory};
//# sourceMappingURL=mod.js.map
