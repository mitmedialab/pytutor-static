import{g as E,a as k,d as _,S as H}from"./server.browser.D4hb9_uX.js";import{s as P,m as h,i as $,d as v,o as D,p as I,q as V,r as j,u as y,a as S,e as W,c as Z,h as z,v as B,n as F}from"./scheduler.B_HausrX.js";import{S as G,i as J,g as O,b as d,e as A,t as g,c as C,a as M,m as R,d as L}from"./index.BGGFpMsM.js";function K(i){let e,n,c;const l=[i[1]];var o=i[0];function u(t,s){let r={};for(let a=0;a<l.length;a+=1)r=S(r,l[a]);return s!==void 0&&s&2&&(r=S(r,E(l,[k(t[1])]))),{props:r}}return o&&(e=y(o,u(i)),i[8](e)),{c(){e&&C(e.$$.fragment),n=h()},l(t){e&&M(e.$$.fragment,t),n=h()},m(t,s){e&&R(e,t,s),$(t,n,s),c=!0},p(t,s){if(s&1&&o!==(o=t[0])){if(e){O();const r=e;d(r.$$.fragment,1,0,()=>{L(r,1)}),A()}o?(e=y(o,u(t,s)),t[8](e),C(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(o){const r=s&2?E(l,[k(t[1])]):{};e.$set(r)}},i(t){c||(e&&g(e.$$.fragment,t),c=!0)},o(t){e&&d(e.$$.fragment,t),c=!1},d(t){t&&v(n),i[8](null),e&&L(e,t)}}}function Q(i){let e,n,c;const l=[i[1]];var o=i[0];function u(t,s){let r={$$slots:{default:[U]},$$scope:{ctx:t}};for(let a=0;a<l.length;a+=1)r=S(r,l[a]);return s!==void 0&&s&2&&(r=S(r,E(l,[k(t[1])]))),{props:r}}return o&&(e=y(o,u(i)),i[7](e)),{c(){e&&C(e.$$.fragment),n=h()},l(t){e&&M(e.$$.fragment,t),n=h()},m(t,s){e&&R(e,t,s),$(t,n,s),c=!0},p(t,s){if(s&1&&o!==(o=t[0])){if(e){O();const r=e;d(r.$$.fragment,1,0,()=>{L(r,1)}),A()}o?(e=y(o,u(t,s)),t[7](e),C(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(o){const r=s&2?E(l,[k(t[1])]):{};s&4104&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)}},i(t){c||(e&&g(e.$$.fragment,t),c=!0)},o(t){e&&d(e.$$.fragment,t),c=!1},d(t){t&&v(n),i[7](null),e&&L(e,t)}}}function U(i){let e;return{c(){e=W("svelte-slot"),this.h()},l(n){e=Z(n,"SVELTE-SLOT",{class:!0}),z(e).forEach(v),this.h()},h(){B(e,"class","svelte-19mm49i")},m(n,c){$(n,e,c),i[6](e)},p:F,d(n){n&&v(e),i[6](null)}}}function X(i){let e,n,c,l;const o=[Q,K],u=[];function t(s,r){return s[2]?0:1}return e=t(i),n=u[e]=o[e](i),{c(){n.c(),c=h()},l(s){n.l(s),c=h()},m(s,r){u[e].m(s,r),$(s,c,r),l=!0},p(s,[r]){let a=e;e=t(s),e===a?u[e].p(s,r):(O(),d(u[a],1,1,()=>{u[a]=null}),A(),n=u[e],n?n.p(s,r):(n=u[e]=o[e](s),n.c()),g(n,1),n.m(c.parentNode,c))},i(s){l||(g(n),l=!0)},o(s){d(n),l=!1},d(s){s&&v(c),u[e].d(s)}}}function Y(i,e,n){const c=D();let{SvelteComponent:l}=e,{props:o}=e,{children:u}=e,{events:t}=e,s,r,a=[];function w(f){a.forEach(T=>T()),a=[],f&&Object.entries(f).forEach(([T,q])=>{a.push(r.$on(T,q))})}I(()=>{V().then(()=>{c("svelte-slot",s)})});function b(f){j[f?"unshift":"push"](()=>{s=f,n(3,s)})}function p(f){j[f?"unshift":"push"](()=>{r=f,n(4,r)})}function m(f){j[f?"unshift":"push"](()=>{r=f,n(4,r)})}return i.$$set=f=>{"SvelteComponent"in f&&n(0,l=f.SvelteComponent),"props"in f&&n(1,o=f.props),"children"in f&&n(2,u=f.children),"events"in f&&n(5,t=f.events)},i.$$.update=()=>{i.$$.dirty&48&&r&&w(t),i.$$.dirty&8&&c("svelte-slot",s)},[l,o,u,s,r,t,b,p,m]}class x extends G{constructor(e){super(),J(this,e,Y,X,P,{SvelteComponent:0,props:1,children:2,events:5})}}function ce(i){const{name:e}=i;return{[e](c){const{children:l}=c,o=ee(c),u=te(c),t=_.useRef(),s=_.useRef(),r=_.useRef(),a=_.useRef(),w=_.useContext(H);_.useEffect(()=>{const p=t.current;if(!p)return;const m=new x({target:p,props:{SvelteComponent:i,children:ne(l),props:o,events:u},context:w});return m.$on("svelte-slot",({detail:f})=>{f&&a.current&&f.appendChild(a.current),r.current=f}),s.current=m,()=>{m.$destroy()}},[t]),_.useEffect(()=>{s.current&&s.current.$set({props:o,events:u})},[o,s]),_.useEffect(()=>{a.current?r.current&&a.current.parentElement!==r.current&&r.current.appendChild(a.current):r.current&&(r.current.innerHTML="")},[a]);const b=i;if(b.render){const p={};typeof l=="string"&&(p.default=()=>l);const m=b.render(o,{context:w,$$slots:p});return _.createElement("svelte-wrapper",{style:{display:"contents"},dangerouslySetInnerHTML:{__html:m.html}})}return _.createElement("svelte-wrapper",{ref:t,style:{display:"contents"}},l?_.createElement("react-children",{ref:a,style:{display:"contents"}},l):void 0)}}[e]}function ee(i){const e={};return Object.entries(i).forEach(([n,c])=>{n!=="children"&&N(n)===!1&&(e[n]=c)}),e}function te(i){const e={};return Object.entries(i).forEach(([n,c])=>{N(n)&&(e[n[2].toLowerCase()+n.slice(3)]=c)}),e}function N(i){return/^on[A-Z]/.test(i)}function ne(i){return!(i===void 0||Array.isArray(i)&&i.length===0)}export{ce as r};
//# sourceMappingURL=reactify.BUBICLCa.js.map
