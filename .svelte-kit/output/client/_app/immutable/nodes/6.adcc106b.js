import{s as H,n as C,b as I}from"../chunks/scheduler.3cb4159e.js";import{S as L,i as R,e as d,l as g,s as E,c as b,a as y,m as k,d as _,b as S,h as f,j as m,n as j,g as A,p as z}from"../chunks/index.a13ec469.js";import{e as P}from"../chunks/each.e59479a4.js";import{p as D}from"../chunks/stores.1035636c.js";function $(i,e,s){const a=i.slice();return a[4]=e[s],a}function N(i){let e,s="No hay subrutas";return{c(){e=d("p"),e.textContent=s},l(a){e=b(a,"P",{["data-svelte-h"]:!0}),A(e)!=="svelte-29xzqe"&&(e.textContent=s)},m(a,n){f(a,e,n)},p:C,d(a){a&&_(e)}}}function U(i){let e,s="Subrutas:",a,n,o,u,h,x,p=P(i[1]),l=[];for(let t=0;t<p.length;t+=1)l[t]=q($(i,p,t));return{c(){e=d("h2"),e.textContent=s,a=E(),n=d("ul");for(let t=0;t<l.length;t+=1)l[t].c();o=E(),u=d("p"),h=g("Última subruta: "),x=g(i[2])},l(t){e=b(t,"H2",{["data-svelte-h"]:!0}),A(e)!=="svelte-12hmyep"&&(e.textContent=s),a=S(t),n=b(t,"UL",{});var c=y(n);for(let v=0;v<l.length;v+=1)l[v].l(c);c.forEach(_),o=S(t),u=b(t,"P",{});var r=y(u);h=k(r,"Última subruta: "),x=k(r,i[2]),r.forEach(_)},m(t,c){f(t,e,c),f(t,a,c),f(t,n,c);for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(n,null);f(t,o,c),f(t,u,c),m(u,h),m(u,x)},p(t,c){if(c&2){p=P(t[1]);let r;for(r=0;r<p.length;r+=1){const v=$(t,p,r);l[r]?l[r].p(v,c):(l[r]=q(v),l[r].c(),l[r].m(n,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=p.length}},d(t){t&&(_(e),_(a),_(n),_(o),_(u)),z(l,t)}}}function q(i){let e,s=i[4]+"",a;return{c(){e=d("li"),a=g(s)},l(n){e=b(n,"LI",{});var o=y(e);a=k(o,s),o.forEach(_)},m(n,o){f(n,e,o),m(e,a)},p:C,d(n){n&&_(e)}}}function V(i){let e,s,a,n=i[0].path+"",o,u;function h(l,t){return l[1].length>0?U:N}let p=h(i)(i);return{c(){e=d("div"),s=d("h1"),a=g("Ruta actual: "),o=g(n),u=E(),p.c()},l(l){e=b(l,"DIV",{});var t=y(e);s=b(t,"H1",{});var c=y(s);a=k(c,"Ruta actual: "),o=k(c,n),c.forEach(_),u=S(t),p.l(t),t.forEach(_)},m(l,t){f(l,e,t),m(e,s),m(s,a),m(s,o),m(e,u),p.m(e,null)},p(l,[t]){t&1&&n!==(n=l[0].path+"")&&j(o,n),p.p(l,t)},i:C,o:C,d(l){l&&_(e),p.d()}}}function w(i,e,s){let a;I(i,D,h=>s(0,a=h));let n=a.params;console.log(n);let o=Array.isArray(n)?n:[],u=o[o.length-1];return[a,o,u]}class K extends L{constructor(e){super(),R(this,e,w,V,H,{})}}export{K as component};
