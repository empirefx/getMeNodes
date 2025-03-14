var We=Object.defineProperty;var ze=(e,t,n)=>t in e?We(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var he=(e,t,n)=>ze(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function T(){}function De(e){return e()}function Fe(){return Object.create(null)}function Y(e){e.forEach(De)}function Ne(e){return typeof e=="function"}function ie(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Je(e){return Object.keys(e).length===0}function p(e,t){e.appendChild(t)}function A(e,t,n){e.insertBefore(t,n||null)}function k(e){e.parentNode&&e.parentNode.removeChild(e)}function Be(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function h(e){return document.createElement(e)}function G(e){return document.createTextNode(e)}function q(){return G(" ")}function Ke(){return G("")}function R(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function w(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ge(e){return Array.from(e.childNodes)}function ye(e,t){t=""+t,e.data!==t&&(e.data=t)}let re;function oe(e){re=e}function $e(){if(!re)throw new Error("Function called outside component initialization");return re}function Ce(e){$e().$$.on_mount.push(e)}function Qe(e,t){return $e().$$.context.set(e,t),t}function Ve(e){return $e().$$.context.get(e)}const te=[],ge=[];let ne=[];const Te=[],Xe=Promise.resolve();let _e=!1;function Ye(){_e||(_e=!0,Xe.then(Re))}function be(e){ne.push(e)}const me=new Set;let ee=0;function Re(){if(ee!==0)return;const e=re;do{try{for(;ee<te.length;){const t=te[ee];ee++,oe(t),Ze(t.$$)}}catch(t){throw te.length=0,ee=0,t}for(oe(null),te.length=0,ee=0;ge.length;)ge.pop()();for(let t=0;t<ne.length;t+=1){const n=ne[t];me.has(n)||(me.add(n),n())}ne.length=0}while(te.length);for(;Te.length;)Te.pop()();_e=!1,me.clear(),oe(e)}function Ze(e){if(e.fragment!==null){e.update(),Y(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(be)}}function xe(e){const t=[],n=[];ne.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),ne=t}const se=new Set;let X;function we(){X={r:0,c:[],p:X}}function ve(){X.r||Y(X.c),X=X.p}function U(e,t){e&&e.i&&(se.delete(e),e.i(t))}function W(e,t,n,o){if(e&&e.o){if(se.has(e))return;se.add(e),X.c.push(()=>{se.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function ce(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ke(e){e&&e.c()}function de(e,t,n){const{fragment:o,after_update:r}=e.$$;o&&o.m(t,n),be(()=>{const i=e.$$.on_mount.map(De).filter(Ne);e.$$.on_destroy?e.$$.on_destroy.push(...i):Y(i),e.$$.on_mount=[]}),r.forEach(be)}function ue(e,t){const n=e.$$;n.fragment!==null&&(xe(n.after_update),Y(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function et(e,t){e.$$.dirty[0]===-1&&(te.push(e),Ye(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ae(e,t,n,o,r,i,u=null,l=[-1]){const d=re;oe(e);const c=e.$$={fragment:null,ctx:[],props:i,update:T,not_equal:r,bound:Fe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:Fe(),dirty:l,skip_bound:!1,root:t.target||d.$$.root};u&&u(c.root);let m=!1;if(c.ctx=n?n(e,t.props||{},(f,a,...b)=>{const y=b.length?b[0]:a;return c.ctx&&r(c.ctx[f],c.ctx[f]=y)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](y),m&&et(e,f)),a}):[],c.update(),m=!0,Y(c.before_update),c.fragment=o?o(c.ctx):!1,t.target){if(t.hydrate){const f=Ge(t.target);c.fragment&&c.fragment.l(f),f.forEach(k)}else c.fragment&&c.fragment.c();t.intro&&U(e.$$.fragment),de(e,t.target,t.anchor),Re()}oe(d)}class fe{constructor(){he(this,"$$");he(this,"$$set")}$destroy(){ue(this,1),this.$destroy=T}$on(t,n){if(!Ne(n))return T;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!Je(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const tt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(tt);const Ue={$schema:"http://json-schema.org/draft-03/schema#",type:"object",properties:{name:{type:"string",title:"Name",description:"Node name",required:!0},type:{type:"string",title:"type",description:"Node type",required:!0,enum:["none","City","Town","Field"]},resources:{type:"array",title:"resources",items:{type:"object",properties:{type:{type:"string",title:"Name"},qty:{type:"integer",title:"Number"}}}},buildings:{type:"array",title:"buildings",items:{type:"object",properties:{type:{type:"string",title:"Name"},qty:{type:"integer",title:"Number"}}}},production:{type:"array",title:"production",items:{type:"object",properties:{type:{type:"string",title:"Name"},qty:{type:"integer",title:"Number"}}}},actions:{type:"array",title:"actions",items:{type:"object",properties:{type:{type:"string",title:"Name"}}}}}},nt={type:"none",resources:[{type:"population",qty:0},{type:"gold",qty:0},{type:"food",qty:0},{type:"ore",qty:0},{type:"goods",qty:0},{type:"soldiers",qty:0},{type:"weapons",qty:0},{type:"researchPoints",qty:0}],buildings:[{type:"houses",qty:0},{type:"barracks",qty:0},{type:"palace",qty:0},{type:"armory",qty:0}],production:[{type:"goldPerHour",qty:0},{type:"foodPerHour",qty:0},{type:"orePerHour",qty:0},{type:"goodsPerHour",qty:0},{type:"soldiersPerHour",qty:0},{type:"weaponsPerHour",qty:0},{type:"researchPointsPerHour",qty:0}],actions:[{type:"upgradeBuilding"},{type:"recruitUnits"},{type:"buildWonder"},{type:"declareWar"},{type:"upgradeMine"},{type:"assignWorker"},{type:"expandField"},{type:"hireWorker"},{type:"buildShip"},{type:"trade"},{type:"trainSoldiers"},{type:"stockpileWeapons"},{type:"startResearch"},{type:"upgradeLab"}]};function ot(e){let t,n,o,r;return{c(){t=h("div"),n=h("button"),n.innerHTML=`<i class="bi bi-plus-lg"></i>
    Create`,w(t,"id","brutusinForms")},m(i,u){A(i,t,u),p(t,n),o||(r=R(n,"click",e[0]),o=!0)},p:T,i:T,o:T,d(i){i&&k(t),o=!1,r()}}}function rt(e){let t;const{addNode:n}=Ve("node"),o=({detail:r})=>{const i=t.getData();i.name&&n(i)};return Ce(()=>{if(window.brutusin){const r=brutusin["json-forms"],i=document.getElementById("brutusinForms");t=r.create(Ue),t.render(i,nt)}}),[o]}class it extends fe{constructor(t){super(),ae(this,t,rt,ot,ie,{})}}function lt(e){let t,n,o,r;return{c(){t=h("div"),n=h("button"),n.innerHTML=`<i class="bi bi-arrow-up-left"></i>
  Update`,w(t,"id","brutusinForms")},m(i,u){A(i,t,u),p(t,n),o||(r=R(n,"click",e[0]),o=!0)},p:T,i:T,o:T,d(i){i&&k(t),o=!1,r()}}}function st(e,t,n){let{propValue:o}=t,r;const{updateNode:i}=Ve("node"),u=({detail:l})=>{const d=r.getData();d.name&&i(d)};return Ce(()=>{if(window.brutusin){const l=brutusin["json-forms"],d=document.getElementById("brutusinForms");r=l.create(Ue),r.render(d,o)}}),e.$$set=l=>{"propValue"in l&&n(1,o=l.propValue)},[u,o]}class ct extends fe{constructor(t){super(),ae(this,t,st,lt,ie,{propValue:1})}}let dt=0;class ut{constructor(){this.nodes=new Map,this.connections=new Map}generateId(){return(dt++).toString()}addNode(t){const n=this.generateId();if(this.nodes.has(n))throw new Error(`Node with id ${n} already exists.`);return this.nodes.set(n,t),this.connections.set(n,new Set),n}connectNodes(t,n){if(!this.nodes.has(t)||!this.nodes.has(n))throw new Error("Both nodes must exist to create a connection.");this.connections.get(t).add(n),this.connections.get(n).add(t)}deleteConnection(t,n){this.nodes.has(t)&&this.nodes.has(n)&&(this.connections.get(t).delete(n),this.connections.get(n).delete(t))}getNodes(){return Array.from(this.nodes.entries())}getConnections(){return Array.from(this.connections.entries())}getConnectionsForNode(t){if(!this.connections.has(t))throw new Error(`Node with id ${t} does not exist.`);return Array.from(this.connections.get(t))}deleteNode(t){if(!this.nodes.has(t))throw new Error(`Node with id ${t} does not exist.`);this.nodes.delete(t),this.connections.delete(t),this.connections.forEach(n=>n.delete(t))}updateNode(t,n){if(!this.nodes.has(t))throw new Error(`Node with id ${t} does not exist.`);this.nodes.set(t,n)}exportState(){return JSON.stringify({nodes:this.getNodes(),connections:this.getConnections().map(([t,n])=>[t,Array.from(n)])})}importState(t){this.nodes.clear(),this.connections.clear();for(const[n,o]of t.nodes)this.nodes.set(n,o),this.connections.set(n,new Set);for(const[n,o]of t.connections){const r=this.connections.get(n);if(Array.isArray(o))for(const i of o)this.connections.has(i)&&(this.connections.get(i).add(n),r.add(i));else console.warn(`Invalid format for connections of node ${n}:`,o)}}}const at=(e,t="horizontal",n=[],o=[])=>{Array.isArray(e)||(e=[e]);const r=(i,u=0)=>{const l=document.createElement("table"),d=document.createElement("thead"),c=document.createElement("tbody"),m=new Set,f=[];u!==0&&l.classList.add("nested-table");const a=(v,E={},_=0)=>{for(const[N,F]of Object.entries(v))if(!o.includes(N))if(typeof F=="object"&&F!==null){if(Array.isArray(F)){const S=r(F,_+1),$=document.createElement("td");$.appendChild(S),E[N]=$.outerHTML}m.add(N)}else E[N]=F,m.add(N);f.push(E)};i.forEach(v=>a(v));const b=document.createElement("table"),y=document.createElement("td"),O=document.createElement("tr");b.classList.add("mix-table"),y.setAttribute("colspan",m.size+1);const j=()=>{H(!0),y.appendChild(b),O.appendChild(y),l.appendChild(O)},P=(v=!1)=>{m.forEach(E=>{if(n.includes(E))return;const _=document.createElement("tr"),N=document.createElement("th");N.textContent=E,_.appendChild(N),f.forEach(F=>{const S=document.createElement("td");S.innerHTML=F[E]??"",_.appendChild(S)}),m.delete(E),l.appendChild(_)})},H=(v=!1)=>{const E=document.createElement("tr");m.forEach(_=>{const N=document.createElement("th");N.textContent=_,E.appendChild(N),d.appendChild(E)}),f.forEach(_=>{const N=document.createElement("tr");m.forEach(F=>{const S=document.createElement("td");(v||String(_[F]).match("nested-table"))&&S.setAttribute("valign","top"),S.innerHTML=_[F]??"",N.appendChild(S)}),c.appendChild(N)}),v?(b.appendChild(d),b.appendChild(c)):(l.appendChild(d),l.appendChild(c))};return t==="vertical"&&u===0?(P(),j()):H(),l};return r(e)};function ft(e){let t;return{c(){t=h("div"),w(t,"class","show"),w(t,"id","table-container")},m(n,o){A(n,t,o),e[2](t)},p:T,i:T,o:T,d(n){n&&k(t),e[2](null)}}}function pt(e,t,n){let{node:o}=t,r;Ce(()=>{i(o)});function i(l){if(r){for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(at(l,"vertical",["resources","buildings","production","actions"],["connections"]))}}function u(l){ge[l?"unshift":"push"](()=>{r=l,n(0,r)})}return e.$$set=l=>{"node"in l&&n(1,o=l.node)},e.$$.update=()=>{e.$$.dirty&2&&i(o)},[r,o,u]}class ht extends fe{constructor(t){super(),ae(this,t,pt,ft,ie,{node:1})}}function Oe(e,t,n){const o=e.slice();return o[26]=t[n],o}function Me(e,t,n){const o=e.slice();return o[26]=t[n].id,o[29]=t[n].name,o}function Pe(e){let t,n,o,r,i,u;function l(){return e[15](e[26])}return{c(){t=h("button"),n=h("i"),w(n,"class",o=`bi ${e[3](e[26])==="link"?"bi-node-plus":"bi-node-minus"}`),w(t,"class",r="link-button "+e[3](e[26]))},m(d,c){A(d,t,c),p(t,n),i||(u=R(t,"click",l),i=!0)},p(d,c){e=d,c[0]&10&&o!==(o=`bi ${e[3](e[26])==="link"?"bi-node-plus":"bi-node-minus"}`)&&w(n,"class",o),c[0]&10&&r!==(r="link-button "+e[3](e[26]))&&w(t,"class",r)},d(d){d&&k(t),i=!1,u()}}}function je(e){let t,n,o,r=e[26]+"",i,u,l,d,c,m,f=e[29]+"",a,b,y,O,j,P,H,v,E,_=e[2]&&e[2].id!==e[26]&&Pe(e);function N(){return e[16](e[26])}function F(){return e[17](e[26])}function S(){return e[18](e[26])}return{c(){t=h("div"),n=h("i"),o=G("(ID: "),i=G(r),u=G(")"),l=q(),d=h("br"),c=q(),m=h("strong"),a=G(f),b=q(),y=h("br"),O=q(),_&&_.c(),j=q(),w(t,"class",P="node "+e[4].get(e[26])+" "+(e[0]===e[26]?"selected":"")),w(t,"role","button"),w(t,"aria-label",H=`Node ${e[26]}: ${e[29]}`),w(t,"tabindex","0")},m($,C){A($,t,C),p(t,n),p(n,o),p(n,i),p(n,u),p(t,l),p(t,d),p(t,c),p(t,m),p(m,a),p(t,b),p(t,y),p(t,O),_&&_.m(t,null),p(t,j),v||(E=[R(t,"keyup",N),R(t,"click",F),R(t,"mouseenter",S),R(t,"mouseleave",e[11])],v=!0)},p($,C){e=$,C[0]&2&&r!==(r=e[26]+"")&&ye(i,r),C[0]&2&&f!==(f=e[29]+"")&&ye(a,f),e[2]&&e[2].id!==e[26]?_?_.p(e,C):(_=Pe(e),_.c(),_.m(t,j)):_&&(_.d(1),_=null),C[0]&19&&P!==(P="node "+e[4].get(e[26])+" "+(e[0]===e[26]?"selected":""))&&w(t,"class",P),C[0]&2&&H!==(H=`Node ${e[26]}: ${e[29]}`)&&w(t,"aria-label",H)},d($){$&&k(t),_&&_.d(),v=!1,Y(E)}}}function mt(e){let t;return{c(){t=h("h2"),t.textContent="Node information"},m(n,o){A(n,t,o)},p:T,i:T,o:T,d(n){n&&k(t)}}}function yt(e){let t,n;return t=new ht({props:{node:e[2]}}),{c(){ke(t.$$.fragment)},m(o,r){de(t,o,r),n=!0},p(o,r){const i={};r[0]&4&&(i.node=o[2]),t.$set(i)},i(o){n||(U(t.$$.fragment,o),n=!0)},o(o){W(t.$$.fragment,o),n=!1},d(o){ue(t,o)}}}function gt(e){let t,n,o,r;return o=new it({}),{c(){t=h("h1"),t.textContent="Add Node",n=q(),ke(o.$$.fragment)},m(i,u){A(i,t,u),A(i,n,u),de(o,i,u),r=!0},p:T,i(i){r||(U(o.$$.fragment,i),r=!0)},o(i){W(o.$$.fragment,i),r=!1},d(i){i&&(k(t),k(n)),ue(o,i)}}}function _t(e){let t,n,o=e[0],r,i,u,l,d,c=He(e),m=ce(e[8](e[2].id)),f=[];for(let a=0;a<m.length;a+=1)f[a]=Ie(Oe(e,m,a));return{c(){t=h("h1"),t.textContent="Edit Node",n=q(),c.c(),r=q(),i=h("h2"),i.textContent="Connections",u=q();for(let a=0;a<f.length;a+=1)f[a].c();l=Ke()},m(a,b){A(a,t,b),A(a,n,b),c.m(a,b),A(a,r,b),A(a,i,b),A(a,u,b);for(let y=0;y<f.length;y+=1)f[y]&&f[y].m(a,b);A(a,l,b),d=!0},p(a,b){if(b[0]&1&&ie(o,o=a[0])?(we(),W(c,1,1,T),ve(),c=He(a),c.c(),U(c,1),c.m(r.parentNode,r)):c.p(a,b),b[0]&260){m=ce(a[8](a[2].id));let y;for(y=0;y<m.length;y+=1){const O=Oe(a,m,y);f[y]?f[y].p(O,b):(f[y]=Ie(O),f[y].c(),f[y].m(l.parentNode,l))}for(;y<f.length;y+=1)f[y].d(1);f.length=m.length}},i(a){d||(U(c),d=!0)},o(a){W(c),d=!1},d(a){a&&(k(t),k(n),k(r),k(i),k(u),k(l)),c.d(a),Be(f,a)}}}function He(e){let t,n,o,r,i,u;return o=new ct({props:{propValue:e[2]}}),{c(){t=h("button"),t.innerHTML=`<i class="bi bi-x-lg"></i>
      Delete Node`,n=q(),ke(o.$$.fragment)},m(l,d){A(l,t,d),A(l,n,d),de(o,l,d),r=!0,i||(u=R(t,"click",function(){Ne(e[6](e[2].id))&&e[6](e[2].id).apply(this,arguments)}),i=!0)},p(l,d){e=l;const c={};d[0]&4&&(c.propValue=e[2]),o.$set(c)},i(l){r||(U(o.$$.fragment,l),r=!0)},o(l){W(o.$$.fragment,l),r=!1},d(l){l&&(k(t),k(n)),ue(o,l),i=!1,u()}}}function Ie(e){let t,n,o=e[26]+"",r,i;return{c(){t=h("div"),n=G("Node "),r=G(o),i=q(),w(t,"class","connection")},m(u,l){A(u,t,l),p(t,n),p(t,r),p(t,i)},p(u,l){l[0]&4&&o!==(o=u[26]+"")&&ye(r,o)},d(u){u&&k(t)}}}function bt(e){let t,n,o,r,i,u,l,d,c,m,f,a,b,y,O,j,P,H,v,E,_,N,F,S,$,C,le,Q,s,L,V,B,Z,x=ce(e[1]),M=[];for(let g=0;g<x.length;g+=1)M[g]=je(Me(e,x,g));const Ee=[yt,mt],z=[];function Le(g,I){return g[2]?0:1}$=Le(e),C=z[$]=Ee[$](e);const qe=[_t,gt],J=[];function Ae(g,I){return g[2]?0:1}return s=Ae(e),L=J[s]=qe[s](e),{c(){t=h("div"),t.innerHTML="<div><p>Drop File here</p></div> <div><p>Drop File here</p></div>",n=q(),o=h("div"),r=h("header"),i=h("div"),u=h("ul"),l=h("li"),d=h("i"),c=q(),m=h("a"),m.textContent="Clipboard",f=q(),a=h("li"),b=h("i"),y=q(),O=h("a"),O.textContent="Download",j=q(),P=h("div"),P.textContent="Drag file for import",H=q(),v=h("div"),E=h("h1"),E.textContent="Nodes",_=q(),N=h("div");for(let g=0;g<M.length;g+=1)M[g].c();F=q(),S=h("div"),C.c(),le=q(),Q=h("div"),L.c(),w(t,"class","overlay-drop"),w(t,"id","overlayDrop"),w(d,"class","bi bi-clipboard-check"),w(m,"href","#"),w(b,"class","bi bi-download"),w(O,"href","#"),w(i,"class","menu"),w(P,"class","info"),w(N,"class","list"),w(v,"class","display"),w(S,"class","console"),w(Q,"class","sidepanel"),w(o,"class","container")},m(g,I){A(g,t,I),A(g,n,I),A(g,o,I),p(o,r),p(r,i),p(i,u),p(u,l),p(l,d),p(l,c),p(l,m),p(u,f),p(u,a),p(a,b),p(a,y),p(a,O),p(r,j),p(r,P),p(o,H),p(o,v),p(v,E),p(v,_),p(v,N);for(let K=0;K<M.length;K+=1)M[K]&&M[K].m(N,null);p(o,F),p(o,S),z[$].m(S,null),p(o,le),p(o,Q),J[s].m(Q,null),V=!0,B||(Z=[R(m,"click",e[9]),R(O,"click",e[12])],B=!0)},p(g,I){if(I[0]&3263){x=ce(g[1]);let D;for(D=0;D<x.length;D+=1){const Se=Me(g,x,D);M[D]?M[D].p(Se,I):(M[D]=je(Se),M[D].c(),M[D].m(N,null))}for(;D<M.length;D+=1)M[D].d(1);M.length=x.length}let K=$;$=Le(g),$===K?z[$].p(g,I):(we(),W(z[K],1,1,()=>{z[K]=null}),ve(),C=z[$],C?C.p(g,I):(C=z[$]=Ee[$](g),C.c()),U(C,1),C.m(S,null));let pe=s;s=Ae(g),s===pe?J[s].p(g,I):(we(),W(J[pe],1,1,()=>{J[pe]=null}),ve(),L=J[s],L?L.p(g,I):(L=J[s]=qe[s](g),L.c()),U(L,1),L.m(Q,null))},i(g){V||(U(C),U(L),V=!0)},o(g){W(C),W(L),V=!1},d(g){g&&(k(t),k(n),k(o)),Be(M,g),z[$].d(),J[s].d(),B=!1,Y(Z)}}}function wt(e){e.preventDefault(),e.stopPropagation(),e.dataTransfer.types.includes("Files")&&(document.getElementById("overlayDrop").style.display="flex")}function vt(e){e.preventDefault()}function Nt(e,t,n){let o,r,i,u,l;const d=new ut;let c=[],m=null,f=null;Qe("node",{addNode:b,updateNode:y});function a(s){f===s?(n(0,f=null),n(14,m=null)):(n(0,f=s),n(14,m=s))}function b(s){s&&(d.addNode(s),j())}function y(s){d.updateNode(l.id,s),j()}function O(s){d.deleteNode(s),j(),l.id===s&&n(2,l=null)}function j(){n(13,c=d.getNodes())}function P(s){event.stopPropagation(),l.id&&l.id!==s&&(v(l.id).includes(s)?H(l.id,s):d.connectNodes(l.id,s),j())}function H(s,L){d.deleteConnection(s,L)}function v(s){return d.getConnectionsForNode(s)}function E(){Array.from(d.nodes.entries()),navigator.clipboard.writeText(JSON.stringify(u,null,2)).then(()=>{alert("State copied to clipboard!")}).catch(s=>{alert("Failed to copy: "+s)})}function _(s){f||n(14,m=s)}function N(){f||n(14,m=null)}window.addEventListener("dragover",vt),window.addEventListener("drop",F),window.addEventListener("dragenter",wt,!1);function F(s){s.preventDefault(),document.getElementById("overlayDrop").style.display="none";const L=s.dataTransfer.files[0];if(!L)return;const V=new FileReader;V.onload=function(B){try{const Z=JSON.parse(B.target.result);d.importState(Z),n(13,c=d.getNodes()),console.log("Imported Nodes:",d.getNodes()),console.log("Imported Connections:",d.getConnections())}catch(Z){console.error("Error importing state:",Z)}},V.readAsText(L)}function S(){const s=d.exportState(),L=new Blob([s],{type:"application/json"}),V=URL.createObjectURL(L),B=document.createElement("a");B.href=V,B.download="accumulator-state.json",document.body.appendChild(B),B.click(),document.body.removeChild(B),URL.revokeObjectURL(V)}const $=s=>P(s),C=s=>a(s),le=s=>a(s),Q=s=>_(s);return e.$$.update=()=>{e.$$.dirty[0]&8192&&n(1,o=c.map(([s,L])=>({id:s,...L,connections:v(s)}))),e.$$.dirty[0]&24576&&n(4,r=new Map(c.map(([s])=>[s,v(s).includes(m)?"highlight":""]))),e.$$.dirty[0]&3&&n(2,l=o.find(s=>s.id===f)),e.$$.dirty[0]&4&&n(3,i=s=>v(l.id).includes(s)?"unlink":"link"),e.$$.dirty[0]&2&&(u=Array.from(o))},[f,o,l,i,r,a,O,P,v,E,_,N,S,c,m,$,C,le,Q]}class $t extends fe{constructor(t){super(),ae(this,t,Nt,bt,ie,{},null,[-1,-1])}}new $t({target:document.getElementById("app")});
