// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/function-ctor@v0.2.1-esm/index.mjs";function n(r,t,n){var s,f,i,o;if(0===(s=r.length))return NaN;if(s!==t.length)return NaN;if(0===n||1===s)return r[0]/t[0];if(e(n)<=1)for(f=r[s-1],i=t[s-1],o=s-2;o>=0;--o)f*=n,i*=n,f+=r[o],i+=t[o];else for(n=1/n,f=r[0],i=t[0],o=1;o<s;++o)f*=n,i*=n,f+=r[o],i+=t[o];return f/i}function s(r,e){var s,f,i,o;if(r.length>500)return function(t){return n(r,e,t)};if(s="return function evalrational(x){",s+="var ax,s1,s2;",0===(f=r.length))s+="return NaN;";else if(f!==e.length)s+="return NaN;";else if(1===f)s+="return "+r[0]/e[0]+";";else{for(s+="if(x===0.0){return "+r[0]/e[0]+";}",s+="if(x<0.0){ax=-x;}else{ax=x;}",s+="if(ax<=1.0){",s+="s1 = "+r[0],i=f-1,o=1;o<f;o++)s+="+x*",o<i&&(s+="("),s+=r[o];for(o=0;o<i-1;o++)s+=")";for(s+=";",s+="s2 = "+e[0],i=f-1,o=1;o<f;o++)s+="+x*",o<i&&(s+="("),s+=e[o];for(o=0;o<i-1;o++)s+=")";for(s+=";",s+="}else{",s+="x = 1.0/x;",s+="s1 = "+r[i=f-1],o=i-1;o>=0;o--)s+="+x*",o>0&&(s+="("),s+=r[o];for(o=0;o<i-1;o++)s+=")";for(s+=";",s+="s2 = "+e[i=f-1],o=i-1;o>=0;o--)s+="+x*",o>0&&(s+="("),s+=e[o];for(o=0;o<i-1;o++)s+=")";s+=";",s+="}",s+="return s1/s2;"}return s+="}",new t(s+="//# sourceURL=evalrational.factory.js")()}r(n,"factory",s);export{n as default,s as factory};
//# sourceMappingURL=index.mjs.map
