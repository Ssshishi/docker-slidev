(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function Br(e,t){const n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const et=Object.freeze({}),qo=Object.freeze([]),on=()=>{},iv=()=>!1,dy=/^on[^a-z]/,Mi=e=>dy.test(e),Fl=e=>e.startsWith("onUpdate:"),st=Object.assign,nd=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},fy=Object.prototype.hasOwnProperty,Ve=(e,t)=>fy.call(e,t),we=Array.isArray,co=e=>Ai(e)==="[object Map]",lv=e=>Ai(e)==="[object Set]",py=e=>Ai(e)==="[object RegExp]",Pe=e=>typeof e=="function",it=e=>typeof e=="string",rd=e=>typeof e=="symbol",Ge=e=>e!==null&&typeof e=="object",od=e=>Ge(e)&&Pe(e.then)&&Pe(e.catch),av=Object.prototype.toString,Ai=e=>av.call(e),sd=e=>Ai(e).slice(8,-1),cv=e=>Ai(e)==="[object Object]",id=e=>it(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,kl=Br(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hy=Br("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),va=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},my=/-(\w)/g,Wn=va(e=>e.replace(my,(t,n)=>n?n.toUpperCase():"")),vy=/\B([A-Z])/g,ir=va(e=>e.replace(vy,"-$1").toLowerCase()),wo=va(e=>e.charAt(0).toUpperCase()+e.slice(1)),Gr=va(e=>e?`on${wo(e)}`:""),ii=(e,t)=>!Object.is(e,t),Jr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},zl=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},gy=e=>{const t=parseFloat(e);return isNaN(t)?e:t},by=e=>{const t=it(e)?Number(e):NaN;return isNaN(t)?e:t};let kf;const Bl=()=>kf||(kf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xt(e){if(we(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=it(r)?xy(r):xt(r);if(o)for(const s in o)t[s]=o[s]}return t}else{if(it(e))return e;if(Ge(e))return e}}const yy=/;(?![^(]*\))/g,wy=/:([^]+)/,_y=/\/\*[^]*?\*\//g;function xy(e){const t={};return e.replace(_y,"").split(yy).forEach(n=>{if(n){const r=n.split(wy);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ht(e){let t="";if(it(e))t=e;else if(we(e))for(let n=0;n<e.length;n++){const r=ht(e[n]);r&&(t+=r+" ")}else if(Ge(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function Pt(e){if(!e)return null;let{class:t,style:n}=e;return t&&!it(t)&&(e.class=ht(t)),n&&(e.style=xt(n)),e}const ky="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Sy="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",uv=Br(ky),$y=Br(Sy),Cy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ey=Br(Cy);function dv(e){return!!e||e===""}const Rn=e=>it(e)?e:e==null?"":we(e)||Ge(e)&&(e.toString===av||!Pe(e.toString))?JSON.stringify(e,fv,2):String(e),fv=(e,t)=>t&&t.__v_isRef?fv(e,t.value):co(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,o])=>(n[`${r} =>`]=o,n),{})}:lv(t)?{[`Set(${t.size})`]:[...t.values()]}:Ge(t)&&!we(t)&&!cv(t)?String(t):t;function Hl(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let un;class pv{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=un,!t&&un&&(this.index=(un.scopes||(un.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=un;try{return un=this,t()}finally{un=n}}else Hl("cannot run an inactive effect scope.")}on(){un=this}off(){un=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function Oy(e){return new pv(e)}function Iy(e,t=un){t&&t.active&&t.effects.push(e)}function ld(){return un}function hv(e){un?un.cleanups.push(e):Hl("onScopeDispose() is called when there is no active effect scope to be associated with.")}const ad=e=>{const t=new Set(e);return t.w=0,t.n=0,t},mv=e=>(e.w&Dr)>0,vv=e=>(e.n&Dr)>0,Py=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Dr},Ty=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const o=t[r];mv(o)&&!vv(o)?o.delete(e):t[n++]=o,o.w&=~Dr,o.n&=~Dr}t.length=n}},Vl=new WeakMap;let Ds=0,Dr=1;const Bc=30;let Gt;const uo=Symbol("iterate"),Hc=Symbol("Map key iterate");class cd{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Iy(this,r)}run(){if(!this.active)return this.fn();let t=Gt,n=Or;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Gt,Gt=this,Or=!0,Dr=1<<++Ds,Ds<=Bc?Py(this):Sf(this),this.fn()}finally{Ds<=Bc&&Ty(this),Dr=1<<--Ds,Gt=this.parent,Or=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Gt===this?this.deferStop=!0:this.active&&(Sf(this),this.onStop&&this.onStop(),this.active=!1)}}function Sf(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Or=!0;const gv=[];function $o(){gv.push(Or),Or=!1}function Co(){const e=gv.pop();Or=e===void 0?!0:e}function Ut(e,t,n){if(Or&&Gt){let r=Vl.get(e);r||Vl.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=ad()),bv(o,{effect:Gt,target:e,type:t,key:n})}}function bv(e,t){let n=!1;Ds<=Bc?vv(e)||(e.n|=Dr,n=!mv(e)):n=!e.has(Gt),n&&(e.add(Gt),Gt.deps.push(e),Gt.onTrack&&Gt.onTrack(st({effect:Gt},t)))}function Un(e,t,n,r,o,s){const i=Vl.get(e);if(!i)return;let l=[];if(t==="clear")l=[...i.values()];else if(n==="length"&&we(e)){const c=Number(r);i.forEach((u,d)=>{(d==="length"||d>=c)&&l.push(u)})}else switch(n!==void 0&&l.push(i.get(n)),t){case"add":we(e)?id(n)&&l.push(i.get("length")):(l.push(i.get(uo)),co(e)&&l.push(i.get(Hc)));break;case"delete":we(e)||(l.push(i.get(uo)),co(e)&&l.push(i.get(Hc)));break;case"set":co(e)&&l.push(i.get(uo));break}const a={target:e,type:t,key:n,newValue:r,oldValue:o,oldTarget:s};if(l.length===1)l[0]&&Vc(l[0],a);else{const c=[];for(const u of l)u&&c.push(...u);Vc(ad(c),a)}}function Vc(e,t){const n=we(e)?e:[...e];for(const r of n)r.computed&&$f(r,t);for(const r of n)r.computed||$f(r,t)}function $f(e,t){(e!==Gt||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(st({effect:e},t)),e.scheduler?e.scheduler():e.run())}function My(e,t){var n;return(n=Vl.get(e))==null?void 0:n.get(t)}const Ay=Br("__proto__,__v_isRef,__isVue"),yv=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(rd)),Ry=ga(),Ly=ga(!1,!0),Dy=ga(!0),jy=ga(!0,!0),Cf=Ny();function Ny(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Ae(this);for(let s=0,i=this.length;s<i;s++)Ut(r,"get",s+"");const o=r[t](...n);return o===-1||o===!1?r[t](...n.map(Ae)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){$o();const r=Ae(this)[t].apply(this,n);return Co(),r}}),e}function Fy(e){const t=Ae(this);return Ut(t,"has",e),t.hasOwnProperty(e)}function ga(e=!1,t=!1){return function(r,o,s){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&s===(e?t?Ev:Cv:t?$v:Sv).get(r))return r;const i=we(r);if(!e){if(i&&Ve(Cf,o))return Reflect.get(Cf,o,s);if(o==="hasOwnProperty")return Fy}const l=Reflect.get(r,o,s);return(rd(o)?yv.has(o):Ay(o))||(e||Ut(r,"get",o),t)?l:Ye(l)?i&&id(o)?l:l.value:Ge(l)?e?fn(l):ct(l):l}}const zy=wv(),By=wv(!0);function wv(e=!1){return function(n,r,o,s){let i=n[r];if(jr(i)&&Ye(i)&&!Ye(o))return!1;if(!e&&(!Wl(o)&&!jr(o)&&(i=Ae(i),o=Ae(o)),!we(n)&&Ye(i)&&!Ye(o)))return i.value=o,!0;const l=we(n)&&id(r)?Number(r)<n.length:Ve(n,r),a=Reflect.set(n,r,o,s);return n===Ae(s)&&(l?ii(o,i)&&Un(n,"set",r,o,i):Un(n,"add",r,o)),a}}function Hy(e,t){const n=Ve(e,t),r=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&Un(e,"delete",t,void 0,r),o}function Vy(e,t){const n=Reflect.has(e,t);return(!rd(t)||!yv.has(t))&&Ut(e,"has",t),n}function Wy(e){return Ut(e,"iterate",we(e)?"length":uo),Reflect.ownKeys(e)}const _v={get:Ry,set:zy,deleteProperty:Hy,has:Vy,ownKeys:Wy},xv={get:Dy,set(e,t){return Hl(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return Hl(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},Uy=st({},_v,{get:Ly,set:By}),qy=st({},xv,{get:jy}),ud=e=>e,ba=e=>Reflect.getPrototypeOf(e);function Ki(e,t,n=!1,r=!1){e=e.__v_raw;const o=Ae(e),s=Ae(t);n||(t!==s&&Ut(o,"get",t),Ut(o,"get",s));const{has:i}=ba(o),l=r?ud:n?dd:li;if(i.call(o,t))return l(e.get(t));if(i.call(o,s))return l(e.get(s));e!==o&&e.get(t)}function Yi(e,t=!1){const n=this.__v_raw,r=Ae(n),o=Ae(e);return t||(e!==o&&Ut(r,"has",e),Ut(r,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function Zi(e,t=!1){return e=e.__v_raw,!t&&Ut(Ae(e),"iterate",uo),Reflect.get(e,"size",e)}function Ef(e){e=Ae(e);const t=Ae(this);return ba(t).has.call(t,e)||(t.add(e),Un(t,"add",e,e)),this}function Of(e,t){t=Ae(t);const n=Ae(this),{has:r,get:o}=ba(n);let s=r.call(n,e);s?kv(n,r,e):(e=Ae(e),s=r.call(n,e));const i=o.call(n,e);return n.set(e,t),s?ii(t,i)&&Un(n,"set",e,t,i):Un(n,"add",e,t),this}function If(e){const t=Ae(this),{has:n,get:r}=ba(t);let o=n.call(t,e);o?kv(t,n,e):(e=Ae(e),o=n.call(t,e));const s=r?r.call(t,e):void 0,i=t.delete(e);return o&&Un(t,"delete",e,void 0,s),i}function Pf(){const e=Ae(this),t=e.size!==0,n=co(e)?new Map(e):new Set(e),r=e.clear();return t&&Un(e,"clear",void 0,void 0,n),r}function Gi(e,t){return function(r,o){const s=this,i=s.__v_raw,l=Ae(i),a=t?ud:e?dd:li;return!e&&Ut(l,"iterate",uo),i.forEach((c,u)=>r.call(o,a(c),a(u),s))}}function Xi(e,t,n){return function(...r){const o=this.__v_raw,s=Ae(o),i=co(s),l=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,c=o[e](...r),u=n?ud:t?dd:li;return!t&&Ut(s,"iterate",a?Hc:uo),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:l?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function vr(e){return function(...t){{const n=t[0]?`on key "${t[0]}" `:"";console.warn(`${wo(e)} operation ${n}failed: target is readonly.`,Ae(this))}return e==="delete"?!1:this}}function Ky(){const e={get(s){return Ki(this,s)},get size(){return Zi(this)},has:Yi,add:Ef,set:Of,delete:If,clear:Pf,forEach:Gi(!1,!1)},t={get(s){return Ki(this,s,!1,!0)},get size(){return Zi(this)},has:Yi,add:Ef,set:Of,delete:If,clear:Pf,forEach:Gi(!1,!0)},n={get(s){return Ki(this,s,!0)},get size(){return Zi(this,!0)},has(s){return Yi.call(this,s,!0)},add:vr("add"),set:vr("set"),delete:vr("delete"),clear:vr("clear"),forEach:Gi(!0,!1)},r={get(s){return Ki(this,s,!0,!0)},get size(){return Zi(this,!0)},has(s){return Yi.call(this,s,!0)},add:vr("add"),set:vr("set"),delete:vr("delete"),clear:vr("clear"),forEach:Gi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Xi(s,!1,!1),n[s]=Xi(s,!0,!1),t[s]=Xi(s,!1,!0),r[s]=Xi(s,!0,!0)}),[e,n,t,r]}const[Yy,Zy,Gy,Xy]=Ky();function ya(e,t){const n=t?e?Xy:Gy:e?Zy:Yy;return(r,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(Ve(n,o)&&o in r?n:r,o,s)}const Jy={get:ya(!1,!1)},Qy={get:ya(!1,!0)},ew={get:ya(!0,!1)},tw={get:ya(!0,!0)};function kv(e,t,n){const r=Ae(n);if(r!==n&&t.call(e,r)){const o=sd(e);console.warn(`Reactive ${o} contains both the raw and reactive versions of the same object${o==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Sv=new WeakMap,$v=new WeakMap,Cv=new WeakMap,Ev=new WeakMap;function nw(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rw(e){return e.__v_skip||!Object.isExtensible(e)?0:nw(sd(e))}function ct(e){return jr(e)?e:wa(e,!1,_v,Jy,Sv)}function ow(e){return wa(e,!1,Uy,Qy,$v)}function fn(e){return wa(e,!0,xv,ew,Cv)}function js(e){return wa(e,!0,qy,tw,Ev)}function wa(e,t,n,r,o){if(!Ge(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=o.get(e);if(s)return s;const i=rw(e);if(i===0)return e;const l=new Proxy(e,i===2?r:n);return o.set(e,l),l}function fo(e){return jr(e)?fo(e.__v_raw):!!(e&&e.__v_isReactive)}function jr(e){return!!(e&&e.__v_isReadonly)}function Wl(e){return!!(e&&e.__v_isShallow)}function Ul(e){return fo(e)||jr(e)}function Ae(e){const t=e&&e.__v_raw;return t?Ae(t):e}function _a(e){return zl(e,"__v_skip",!0),e}const li=e=>Ge(e)?ct(e):e,dd=e=>Ge(e)?fn(e):e;function fd(e){Or&&Gt&&(e=Ae(e),bv(e.dep||(e.dep=ad()),{target:e,type:"get",key:"value"}))}function pd(e,t){e=Ae(e);const n=e.dep;n&&Vc(n,{target:e,type:"set",key:"value",newValue:t})}function Ye(e){return!!(e&&e.__v_isRef===!0)}function z(e){return Ov(e,!1)}function qn(e){return Ov(e,!0)}function Ov(e,t){return Ye(e)?e:new sw(e,t)}class sw{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Ae(t),this._value=n?t:li(t)}get value(){return fd(this),this._value}set value(t){const n=this.__v_isShallow||Wl(t)||jr(t);t=n?t:Ae(t),ii(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:li(t),pd(this,t))}}function D(e){return Ye(e)?e.value:e}const iw={get:(e,t,n)=>D(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return Ye(o)&&!Ye(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function Iv(e){return fo(e)?e:new Proxy(e,iw)}class lw{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=t(()=>fd(this),()=>pd(this));this._get=n,this._set=r}get value(){return this._get()}set value(t){this._set(t)}}function hd(e){return new lw(e)}function Pv(e){Ul(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const t=we(e)?new Array(e.length):{};for(const n in e)t[n]=Tv(e,n);return t}class aw{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return My(Ae(this._object),this._key)}}class cw{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function pn(e,t,n){return Ye(e)?e:Pe(e)?new cw(e):Ge(e)&&arguments.length>1?Tv(e,t,n):z(e)}function Tv(e,t,n){const r=e[t];return Ye(r)?r:new aw(e,t,n)}class uw{constructor(t,n,r,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new cd(t,()=>{this._dirty||(this._dirty=!0,pd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const t=Ae(this);return fd(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function dw(e,t,n=!1){let r,o;const s=Pe(e);s?(r=e,o=()=>{console.warn("Write operation failed: computed value is readonly")}):(r=e.get,o=e.set);const i=new uw(r,o,s||!o,n);return t&&!n&&(i.effect.onTrack=t.onTrack,i.effect.onTrigger=t.onTrigger),i}const po=[];function Sl(e){po.push(e)}function $l(){po.pop()}function Z(e,...t){$o();const n=po.length?po[po.length-1].component:null,r=n&&n.appContext.config.warnHandler,o=fw();if(r)or(r,n,11,[e+t.join(""),n&&n.proxy,o.map(({vnode:s})=>`at <${Pa(n,s.type)}>`).join(`
`),o]);else{const s=[`[Vue warn]: ${e}`,...t];o.length&&s.push(`
`,...pw(o)),console.warn(...s)}Co()}function fw(){let e=po[po.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const r=e.component&&e.component.parent;e=r&&r.vnode}return t}function pw(e){const t=[];return e.forEach((n,r)=>{t.push(...r===0?[]:[`
`],...hw(n))}),t}function hw({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",r=e.component?e.component.parent==null:!1,o=` at <${Pa(e.component,e.type,r)}`,s=">"+n;return e.props?[o,...mw(e.props),s]:[o+s]}function mw(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(r=>{t.push(...Mv(r,e[r]))}),n.length>3&&t.push(" ..."),t}function Mv(e,t,n){return it(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:Ye(t)?(t=Mv(e,Ae(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):Pe(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=Ae(t),n?t:[`${e}=`,t])}function vw(e,t){e!==void 0&&(typeof e!="number"?Z(`${t} is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&Z(`${t} is NaN - the duration expression might be incorrect.`))}const md={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function or(e,t,n,r){let o;try{o=r?e(...r):e()}catch(s){xa(s,t,n)}return o}function kn(e,t,n,r){if(Pe(e)){const s=or(e,t,n,r);return s&&od(s)&&s.catch(i=>{xa(i,t,n)}),s}const o=[];for(let s=0;s<e.length;s++)o.push(kn(e[s],t,n,r));return o}function xa(e,t,n,r=!0){const o=t?t.vnode:null;if(t){let s=t.parent;const i=t.proxy,l=md[n];for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,i,l)===!1)return}s=s.parent}const a=t.appContext.config.errorHandler;if(a){or(a,null,10,[e,i,l]);return}}gw(e,n,o,r)}function gw(e,t,n,r=!0){{const o=md[t];if(n&&Sl(n),Z(`Unhandled error${o?` during execution of ${o}`:""}`),n&&$l(),r)throw e;console.error(e)}}let ai=!1,Wc=!1;const Ht=[];let Nn=0;const Ko=[];let jn=null,xr=0;const Av=Promise.resolve();let vd=null;const bw=100;function Et(e){const t=vd||Av;return e?t.then(this?e.bind(this):e):t}function yw(e){let t=Nn+1,n=Ht.length;for(;t<n;){const r=t+n>>>1;ci(Ht[r])<e?t=r+1:n=r}return t}function ka(e){(!Ht.length||!Ht.includes(e,ai&&e.allowRecurse?Nn+1:Nn))&&(e.id==null?Ht.push(e):Ht.splice(yw(e.id),0,e),Rv())}function Rv(){!ai&&!Wc&&(Wc=!0,vd=Av.then(jv))}function ww(e){const t=Ht.indexOf(e);t>Nn&&Ht.splice(t,1)}function Lv(e){we(e)?Ko.push(...e):(!jn||!jn.includes(e,e.allowRecurse?xr+1:xr))&&Ko.push(e),Rv()}function Tf(e,t=ai?Nn+1:0){for(e=e||new Map;t<Ht.length;t++){const n=Ht[t];if(n&&n.pre){if(gd(e,n))continue;Ht.splice(t,1),t--,n()}}}function Dv(e){if(Ko.length){const t=[...new Set(Ko)];if(Ko.length=0,jn){jn.push(...t);return}for(jn=t,e=e||new Map,jn.sort((n,r)=>ci(n)-ci(r)),xr=0;xr<jn.length;xr++)gd(e,jn[xr])||jn[xr]();jn=null,xr=0}}const ci=e=>e.id==null?1/0:e.id,_w=(e,t)=>{const n=ci(e)-ci(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function jv(e){Wc=!1,ai=!0,e=e||new Map,Ht.sort(_w);const t=n=>gd(e,n);try{for(Nn=0;Nn<Ht.length;Nn++){const n=Ht[Nn];if(n&&n.active!==!1){if(t(n))continue;or(n,null,14)}}}finally{Nn=0,Ht.length=0,Dv(e),ai=!1,vd=null,(Ht.length||Ko.length)&&jv(e)}}function gd(e,t){if(!e.has(t))e.set(t,1);else{const n=e.get(t);if(n>bw){const r=t.ownerInstance,o=r&&hi(r.type);return Z(`Maximum recursive updates exceeded${o?` in component <${o}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(t,n+1)}}let Ir=!1;const Ho=new Set;Bl().__VUE_HMR_RUNTIME__={createRecord:Wa(Nv),rerender:Wa(Sw),reload:Wa($w)};const _o=new Map;function xw(e){const t=e.type.__hmrId;let n=_o.get(t);n||(Nv(t,e.type),n=_o.get(t)),n.instances.add(e)}function kw(e){_o.get(e.type.__hmrId).instances.delete(e)}function Nv(e,t){return _o.has(e)?!1:(_o.set(e,{initialDef:Ws(t),instances:new Set}),!0)}function Ws(e){return bg(e)?e.__vccOpts:e}function Sw(e,t){const n=_o.get(e);n&&(n.initialDef.render=t,[...n.instances].forEach(r=>{t&&(r.render=t,Ws(r.type).render=t),r.renderCache=[],Ir=!0,r.update(),Ir=!1}))}function $w(e,t){const n=_o.get(e);if(!n)return;t=Ws(t),Mf(n.initialDef,t);const r=[...n.instances];for(const o of r){const s=Ws(o.type);Ho.has(s)||(s!==n.initialDef&&Mf(s,t),Ho.add(s)),o.appContext.propsCache.delete(o.type),o.appContext.emitsCache.delete(o.type),o.appContext.optionsCache.delete(o.type),o.ceReload?(Ho.add(s),o.ceReload(t.styles),Ho.delete(s)):o.parent?ka(o.parent.update):o.appContext.reload?o.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Lv(()=>{for(const o of r)Ho.delete(Ws(o.type))})}function Mf(e,t){st(e,t);for(const n in e)n!=="__file"&&!(n in t)&&delete e[n]}function Wa(e){return(t,n)=>{try{return e(t,n)}catch(r){console.error(r),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Fn,Ns=[],Uc=!1;function Ri(e,...t){Fn?Fn.emit(e,...t):Uc||Ns.push({event:e,args:t})}function Fv(e,t){var n,r;Fn=e,Fn?(Fn.enabled=!0,Ns.forEach(({event:o,args:s})=>Fn.emit(o,...s)),Ns=[]):typeof window<"u"&&window.HTMLElement&&!((r=(n=window.navigator)==null?void 0:n.userAgent)!=null&&r.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(s=>{Fv(s,t)}),setTimeout(()=>{Fn||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Uc=!0,Ns=[])},3e3)):(Uc=!0,Ns=[])}function Cw(e,t){Ri("app:init",e,t,{Fragment:ze,Text:is,Comment:bt,Static:Cl})}function Ew(e){Ri("app:unmount",e)}const qc=bd("component:added"),zv=bd("component:updated"),Ow=bd("component:removed"),Iw=e=>{Fn&&typeof Fn.cleanupBuffer=="function"&&!Fn.cleanupBuffer(e)&&Ow(e)};function bd(e){return t=>{Ri(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const Pw=Bv("perf:start"),Tw=Bv("perf:end");function Bv(e){return(t,n,r)=>{Ri(e,t.appContext.app,t.uid,t,n,r)}}function Mw(e,t,n){Ri("component:emit",e.appContext.app,e,t,n)}function Aw(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||et;{const{emitsOptions:u,propsOptions:[d]}=e;if(u)if(!(t in u))(!d||!(Gr(t)in d))&&Z(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Gr(t)}" prop.`);else{const f=u[t];Pe(f)&&(f(...n)||Z(`Invalid event arguments: event validation failed for event "${t}".`))}}let o=n;const s=t.startsWith("update:"),i=s&&t.slice(7);if(i&&i in r){const u=`${i==="modelValue"?"model":i}Modifiers`,{number:d,trim:f}=r[u]||et;f&&(o=n.map(m=>it(m)?m.trim():m)),d&&(o=n.map(gy))}Mw(e,t,o);{const u=t.toLowerCase();u!==t&&r[Gr(u)]&&Z(`Event "${u}" is emitted in component ${Pa(e,e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${ir(t)}" instead of "${t}".`)}let l,a=r[l=Gr(t)]||r[l=Gr(Wn(t))];!a&&s&&(a=r[l=Gr(ir(t))]),a&&kn(a,e,6,o);const c=r[l+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,kn(c,e,6,o)}}function Hv(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(o!==void 0)return o;const s=e.emits;let i={},l=!1;if(!Pe(e)){const a=c=>{const u=Hv(c,t,!0);u&&(l=!0,st(i,u))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!s&&!l?(Ge(e)&&r.set(e,null),null):(we(s)?s.forEach(a=>i[a]=null):st(i,s),Ge(e)&&r.set(e,i),i)}function Sa(e,t){return!e||!Mi(t)?!1:(t=t.slice(2).replace(/Once$/,""),Ve(e,t[0].toLowerCase()+t.slice(1))||Ve(e,ir(t))||Ve(e,t))}let Ot=null,$a=null;function ql(e){const t=Ot;return Ot=e,$a=e&&e.type.__scopeId||null,t}function Rw(e){$a=e}function Lw(){$a=null}function ce(e,t=Ot,n){if(!t||e._n)return e;const r=(...o)=>{r._d&&Kf(-1);const s=ql(t);let i;try{i=e(...o)}finally{ql(s),r._d&&Kf(1)}return zv(t),i};return r._n=!0,r._c=!0,r._d=!0,r}let Kc=!1;function Kl(){Kc=!0}function Ua(e){const{type:t,vnode:n,proxy:r,withProxy:o,props:s,propsOptions:[i],slots:l,attrs:a,emit:c,render:u,renderCache:d,data:f,setupState:m,ctx:h,inheritAttrs:b}=e;let y,v;const x=ql(e);Kc=!1;try{if(n.shapeFlag&4){const I=o||r;y=Mn(u.call(I,I,d,s,m,f,h)),v=a}else{const I=t;a===s&&Kl(),y=Mn(I.length>1?I(s,{get attrs(){return Kl(),a},slots:l,emit:c}):I(s,null)),v=t.props?a:jw(a)}}catch(I){Us.length=0,xa(I,e,1),y=$(bt)}let _=y,E;if(y.patchFlag>0&&y.patchFlag&2048&&([_,E]=Dw(y)),v&&b!==!1){const I=Object.keys(v),{shapeFlag:P}=_;if(I.length){if(P&7)i&&I.some(Fl)&&(v=Nw(v,i)),_=ln(_,v);else if(!Kc&&_.type!==bt){const S=Object.keys(a),k=[],M=[];for(let N=0,G=S.length;N<G;N++){const B=S[N];Mi(B)?Fl(B)||k.push(B[2].toLowerCase()+B.slice(3)):M.push(B)}M.length&&Z(`Extraneous non-props attributes (${M.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),k.length&&Z(`Extraneous non-emits event listeners (${k.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(Af(_)||Z("Runtime directive used on component with non-element root node. The directives will not function as intended."),_=ln(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(Af(_)||Z("Component inside <Transition> renders non-element root node that cannot be animated."),_.transition=n.transition),E?E(_):y=_,ql(x),y}const Dw=e=>{const t=e.children,n=e.dynamicChildren,r=Vv(t);if(!r)return[e,void 0];const o=t.indexOf(r),s=n?n.indexOf(r):-1,i=l=>{t[o]=l,n&&(s>-1?n[s]=l:l.patchFlag>0&&(e.dynamicChildren=[...n,l]))};return[Mn(r),i]};function Vv(e){let t;for(let n=0;n<e.length;n++){const r=e[n];if(lr(r)){if(r.type!==bt||r.children==="v-if"){if(t)return;t=r}}else return}return t}const jw=e=>{let t;for(const n in e)(n==="class"||n==="style"||Mi(n))&&((t||(t={}))[n]=e[n]);return t},Nw=(e,t)=>{const n={};for(const r in e)(!Fl(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n},Af=e=>e.shapeFlag&7||e.type===bt;function Fw(e,t,n){const{props:r,children:o,component:s}=e,{props:i,children:l,patchFlag:a}=t,c=s.emitsOptions;if((o||l)&&Ir||t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?Rf(r,i,c):!!i;if(a&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(i[f]!==r[f]&&!Sa(c,f))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:r===i?!1:r?i?Rf(r,i,c):!0:!!i;return!1}function Rf(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const s=r[o];if(t[s]!==e[s]&&!Sa(n,s))return!0}return!1}function zw({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Wv=e=>e.__isSuspense;function Bw(e,t){t&&t.pendingBranch?we(e)?t.effects.push(...e):t.effects.push(e):Lv(e)}function Jt(e,t){return yd(e,null,t)}const Ji={};function be(e,t,n){return Pe(t)||Z("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),yd(e,t,n)}function yd(e,t,{immediate:n,deep:r,flush:o,onTrack:s,onTrigger:i}=et){var l;t||(n!==void 0&&Z('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),r!==void 0&&Z('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const a=I=>{Z("Invalid watch source: ",I,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},c=ld()===((l=Ct)==null?void 0:l.scope)?Ct:null;let u,d=!1,f=!1;if(Ye(e)?(u=()=>e.value,d=Wl(e)):fo(e)?(u=()=>e,r=!0):we(e)?(f=!0,d=e.some(I=>fo(I)||Wl(I)),u=()=>e.map(I=>{if(Ye(I))return I.value;if(fo(I))return ro(I);if(Pe(I))return or(I,c,2);a(I)})):Pe(e)?t?u=()=>or(e,c,2):u=()=>{if(!(c&&c.isUnmounted))return m&&m(),kn(e,c,3,[h])}:(u=on,a(e)),t&&r){const I=u;u=()=>ro(I())}let m,h=I=>{m=_.onStop=()=>{or(I,c,4)}},b;if(pi)if(h=on,t?n&&kn(t,c,3,[u(),f?[]:void 0,h]):u(),o==="sync"){const I=U_();b=I.__watcherHandles||(I.__watcherHandles=[])}else return on;let y=f?new Array(e.length).fill(Ji):Ji;const v=()=>{if(_.active)if(t){const I=_.run();(r||d||(f?I.some((P,S)=>ii(P,y[S])):ii(I,y)))&&(m&&m(),kn(t,c,3,[I,y===Ji?void 0:f&&y[0]===Ji?[]:y,h]),y=I)}else _.run()};v.allowRecurse=!!t;let x;o==="sync"?x=v:o==="post"?x=()=>Dt(v,c&&c.suspense):(v.pre=!0,c&&(v.id=c.uid),x=()=>ka(v));const _=new cd(u,x);_.onTrack=s,_.onTrigger=i,t?n?v():y=_.run():o==="post"?Dt(_.run.bind(_),c&&c.suspense):_.run();const E=()=>{_.stop(),c&&c.scope&&nd(c.scope.effects,_)};return b&&b.push(E),E}function Hw(e,t,n){const r=this.proxy,o=it(e)?e.includes(".")?Uv(r,e):()=>r[e]:e.bind(r,r);let s;Pe(t)?s=t:(s=t.handler,n=t);const i=Ct;es(this);const l=yd(o,s.bind(r),n);return i?es(i):mo(),l}function Uv(e,t){const n=t.split(".");return()=>{let r=e;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}function ro(e,t){if(!Ge(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ye(e))ro(e.value,t);else if(we(e))for(let n=0;n<e.length;n++)ro(e[n],t);else if(lv(e)||co(e))e.forEach(n=>{ro(n,t)});else if(cv(e))for(const n in e)ro(e[n],t);return e}function qv(e){hy(e)&&Z("Do not use built-in directive ids as custom directive id: "+e)}function Oe(e,t){const n=Ot;if(n===null)return Z("withDirectives can only be used inside render functions."),e;const r=Ia(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,l,a,c=et]=t[s];i&&(Pe(i)&&(i={mounted:i,updated:i}),i.deep&&ro(l),o.push({dir:i,instance:r,value:l,oldValue:void 0,arg:a,modifiers:c}))}return e}function Ur(e,t,n,r){const o=e.dirs,s=t&&t.dirs;for(let i=0;i<o.length;i++){const l=o[i];s&&(l.oldValue=s[i].value);let a=l.dir[r];a&&($o(),kn(a,n,8,[e.el,l,e,t]),Co())}}function Kv(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return It(()=>{e.isMounted=!0}),jt(()=>{e.isUnmounting=!0}),e}const bn=[Function,Array],Yv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:bn,onEnter:bn,onAfterEnter:bn,onEnterCancelled:bn,onBeforeLeave:bn,onLeave:bn,onAfterLeave:bn,onLeaveCancelled:bn,onBeforeAppear:bn,onAppear:bn,onAfterAppear:bn,onAppearCancelled:bn},Vw={name:"BaseTransition",props:Yv,setup(e,{slots:t}){const n=Qt(),r=Kv();let o;return()=>{const s=t.default&&wd(t.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){let b=!1;for(const y of s)if(y.type!==bt){if(b){Z("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}i=y,b=!0}}const l=Ae(e),{mode:a}=l;if(a&&a!=="in-out"&&a!=="out-in"&&a!=="default"&&Z(`invalid <transition> mode: ${a}`),r.isLeaving)return qa(i);const c=Lf(i);if(!c)return qa(i);const u=ui(c,l,r,n);Qo(c,u);const d=n.subTree,f=d&&Lf(d);let m=!1;const{getTransitionKey:h}=c.type;if(h){const b=h();o===void 0?o=b:b!==o&&(o=b,m=!0)}if(f&&f.type!==bt&&(!Cr(c,f)||m)){const b=ui(f,l,r,n);if(Qo(f,b),a==="out-in")return r.isLeaving=!0,b.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},qa(i);a==="in-out"&&c.type!==bt&&(b.delayLeave=(y,v,x)=>{const _=Zv(r,f);_[String(f.key)]=f,y._leaveCb=()=>{v(),y._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=x})}return i}}},Ww=Vw;function Zv(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ui(e,t,n,r){const{appear:o,mode:s,persisted:i=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:f,onAfterLeave:m,onLeaveCancelled:h,onBeforeAppear:b,onAppear:y,onAfterAppear:v,onAppearCancelled:x}=t,_=String(e.key),E=Zv(n,e),I=(k,M)=>{k&&kn(k,r,9,M)},P=(k,M)=>{const N=M[1];I(k,M),we(k)?k.every(G=>G.length<=1)&&N():k.length<=1&&N()},S={mode:s,persisted:i,beforeEnter(k){let M=l;if(!n.isMounted)if(o)M=b||l;else return;k._leaveCb&&k._leaveCb(!0);const N=E[_];N&&Cr(e,N)&&N.el._leaveCb&&N.el._leaveCb(),I(M,[k])},enter(k){let M=a,N=c,G=u;if(!n.isMounted)if(o)M=y||a,N=v||c,G=x||u;else return;let B=!1;const te=k._enterCb=V=>{B||(B=!0,V?I(G,[k]):I(N,[k]),S.delayedLeave&&S.delayedLeave(),k._enterCb=void 0)};M?P(M,[k,te]):te()},leave(k,M){const N=String(e.key);if(k._enterCb&&k._enterCb(!0),n.isUnmounting)return M();I(d,[k]);let G=!1;const B=k._leaveCb=te=>{G||(G=!0,M(),te?I(h,[k]):I(m,[k]),k._leaveCb=void 0,E[N]===e&&delete E[N])};E[N]=e,f?P(f,[k,B]):B()},clone(k){return ui(k,t,n,r)}};return S}function qa(e){if(Li(e))return e=ln(e),e.children=null,e}function Lf(e){return Li(e)?e.children?e.children[0]:void 0:e}function Qo(e,t){e.shapeFlag&6&&e.component?Qo(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function wd(e,t=!1,n){let r=[],o=0;for(let s=0;s<e.length;s++){let i=e[s];const l=n==null?i.key:String(n)+String(i.key!=null?i.key:s);i.type===ze?(i.patchFlag&128&&o++,r=r.concat(wd(i.children,t,l))):(t||i.type!==bt)&&r.push(l!=null?ln(i,{key:l}):i)}if(o>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function pe(e,t){return Pe(e)?(()=>st({name:e.name},t,{setup:e}))():e}const Yo=e=>!!e.type.__asyncLoader,Li=e=>e.type.__isKeepAlive,Uw={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Qt(),r=n.ctx;if(!r.renderer)return()=>{const x=t.default&&t.default();return x&&x.length===1?x[0]:x};const o=new Map,s=new Set;let i=null;n.__v_cache=o;const l=n.suspense,{renderer:{p:a,m:c,um:u,o:{createElement:d}}}=r,f=d("div");r.activate=(x,_,E,I,P)=>{const S=x.component;c(x,_,E,0,l),a(S.vnode,x,_,E,S,l,I,x.slotScopeIds,P),Dt(()=>{S.isDeactivated=!1,S.a&&Jr(S.a);const k=x.props&&x.props.onVnodeMounted;k&&wn(k,S.parent,x)},l),qc(S)},r.deactivate=x=>{const _=x.component;c(x,f,null,1,l),Dt(()=>{_.da&&Jr(_.da);const E=x.props&&x.props.onVnodeUnmounted;E&&wn(E,_.parent,x),_.isDeactivated=!0},l),qc(_)};function m(x){Ka(x),u(x,n,l,!0)}function h(x){o.forEach((_,E)=>{const I=hi(_.type);I&&(!x||!x(I))&&b(E)})}function b(x){const _=o.get(x);!i||!Cr(_,i)?m(_):i&&Ka(i),o.delete(x),s.delete(x)}be(()=>[e.include,e.exclude],([x,_])=>{x&&h(E=>Fs(x,E)),_&&h(E=>!Fs(_,E))},{flush:"post",deep:!0});let y=null;const v=()=>{y!=null&&o.set(y,Ya(n.subTree))};return It(v),Di(v),jt(()=>{o.forEach(x=>{const{subTree:_,suspense:E}=n,I=Ya(_);if(x.type===I.type&&x.key===I.key){Ka(I);const P=I.component.da;P&&Dt(P,E);return}m(x)})}),()=>{if(y=null,!t.default)return null;const x=t.default(),_=x[0];if(x.length>1)return Z("KeepAlive should contain exactly one component child."),i=null,x;if(!lr(_)||!(_.shapeFlag&4)&&!(_.shapeFlag&128))return i=null,_;let E=Ya(_);const I=E.type,P=hi(Yo(E)?E.type.__asyncResolved||{}:I),{include:S,exclude:k,max:M}=e;if(S&&(!P||!Fs(S,P))||k&&P&&Fs(k,P))return i=E,_;const N=E.key==null?I:E.key,G=o.get(N);return E.el&&(E=ln(E),_.shapeFlag&128&&(_.ssContent=E)),y=N,G?(E.el=G.el,E.component=G.component,E.transition&&Qo(E,E.transition),E.shapeFlag|=512,s.delete(N),s.add(N)):(s.add(N),M&&s.size>parseInt(M,10)&&b(s.values().next().value)),E.shapeFlag|=256,i=E,Wv(_.type)?_:E}}},Gv=Uw;function Fs(e,t){return we(e)?e.some(n=>Fs(n,t)):it(e)?e.split(",").includes(t):py(e)?e.test(t):!1}function _d(e,t){Xv(e,"a",t)}function xd(e,t){Xv(e,"da",t)}function Xv(e,t,n=Ct){const r=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Ca(t,r,n),n){let o=n.parent;for(;o&&o.parent;)Li(o.parent.vnode)&&qw(r,t,n,o),o=o.parent}}function qw(e,t,n,r){const o=Ca(t,e,r,!0);kd(()=>{nd(r[t],o)},n)}function Ka(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Ya(e){return e.shapeFlag&128?e.ssContent:e}function Ca(e,t,n=Ct,r=!1){if(n){const o=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;$o(),es(n);const l=kn(t,n,e,i);return mo(),Co(),l});return r?o.unshift(s):o.push(s),s}else{const o=Gr(md[e].replace(/ hook$/,""));Z(`${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const dr=e=>(t,n=Ct)=>(!pi||e==="sp")&&Ca(e,(...r)=>t(...r),n),Ea=dr("bm"),It=dr("m"),Jv=dr("bu"),Di=dr("u"),jt=dr("bum"),kd=dr("um"),Kw=dr("sp"),Yw=dr("rtg"),Zw=dr("rtc");function Gw(e,t=Ct){Ca("ec",e,t)}const Yc="components",Xw="directives";function di(e,t){return Qv(Yc,e,!0,t)||e}const Jw=Symbol.for("v-ndc");function Kn(e){return Qv(Xw,e)}function Qv(e,t,n=!0,r=!1){const o=Ot||Ct;if(o){const s=o.type;if(e===Yc){const l=hi(s,!1);if(l&&(l===t||l===Wn(t)||l===wo(Wn(t))))return s}const i=Df(o[e]||s[e],t)||Df(o.appContext[e],t);if(!i&&r)return s;if(n&&!i){const l=e===Yc?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";Z(`Failed to resolve ${e.slice(0,-1)}: ${t}${l}`)}return i}else Z(`resolve${wo(e.slice(0,-1))} can only be used in render() or setup().`)}function Df(e,t){return e&&(e[t]||e[Wn(t)]||e[wo(Wn(t))])}function ss(e,t,n,r){let o;const s=n&&n[r];if(we(e)||it(e)){o=new Array(e.length);for(let i=0,l=e.length;i<l;i++)o[i]=t(e[i],i,void 0,s&&s[i])}else if(typeof e=="number"){Number.isInteger(e)||Z(`The v-for range expect an integer value but got ${e}.`),o=new Array(e);for(let i=0;i<e;i++)o[i]=t(i+1,i,void 0,s&&s[i])}else if(Ge(e))if(e[Symbol.iterator])o=Array.from(e,(i,l)=>t(i,l,void 0,s&&s[l]));else{const i=Object.keys(e);o=new Array(i.length);for(let l=0,a=i.length;l<a;l++){const c=i[l];o[l]=t(e[c],c,l,s&&s[l])}}else o=[];return n&&(n[r]=o),o}function Sn(e,t,n={},r,o){if(Ot.isCE||Ot.parent&&Yo(Ot.parent)&&Ot.parent.isCE)return t!=="default"&&(n.name=t),$("slot",n,r&&r());let s=e[t];s&&s.length>1&&(Z("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),s=()=>[]),s&&s._c&&(s._d=!1),T();const i=s&&eg(s(n)),l=ge(ze,{key:n.key||i&&i.key||`_${t}`},i||(r?r():[]),i&&e._===1?64:-2);return!o&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function eg(e){return e.some(t=>lr(t)?!(t.type===bt||t.type===ze&&!eg(t.children)):!0)?e:null}const Zc=e=>e?mg(e)?Ia(e)||e.proxy:Zc(e.parent):null,ho=st(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>js(e.props),$attrs:e=>js(e.attrs),$slots:e=>js(e.slots),$refs:e=>js(e.refs),$parent:e=>Zc(e.parent),$root:e=>Zc(e.root),$emit:e=>e.emit,$options:e=>$d(e),$forceUpdate:e=>e.f||(e.f=()=>ka(e.update)),$nextTick:e=>e.n||(e.n=Et.bind(e.proxy)),$watch:e=>Hw.bind(e)}),Sd=e=>e==="_"||e==="$",Za=(e,t)=>e!==et&&!e.__isScriptSetup&&Ve(e,t),tg={get({_:e},t){const{ctx:n,setupState:r,data:o,props:s,accessCache:i,type:l,appContext:a}=e;if(t==="__isVue")return!0;let c;if(t[0]!=="$"){const m=i[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if(Za(r,t))return i[t]=1,r[t];if(o!==et&&Ve(o,t))return i[t]=2,o[t];if((c=e.propsOptions[0])&&Ve(c,t))return i[t]=3,s[t];if(n!==et&&Ve(n,t))return i[t]=4,n[t];Gc&&(i[t]=0)}}const u=ho[t];let d,f;if(u)return t==="$attrs"?(Ut(e,"get",t),Kl()):t==="$slots"&&Ut(e,"get",t),u(e);if((d=l.__cssModules)&&(d=d[t]))return d;if(n!==et&&Ve(n,t))return i[t]=4,n[t];if(f=a.config.globalProperties,Ve(f,t))return f[t];Ot&&(!it(t)||t.indexOf("__v")!==0)&&(o!==et&&Sd(t[0])&&Ve(o,t)?Z(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Ot&&Z(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return Za(o,t)?(o[t]=n,!0):o.__isScriptSetup&&Ve(o,t)?(Z(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):r!==et&&Ve(r,t)?(r[t]=n,!0):Ve(e.props,t)?(Z(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in e?(Z(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(t in e.appContext.config.globalProperties?Object.defineProperty(s,t,{enumerable:!0,configurable:!0,value:n}):s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:s}},i){let l;return!!n[i]||e!==et&&Ve(e,i)||Za(t,i)||(l=s[0])&&Ve(l,i)||Ve(r,i)||Ve(ho,i)||Ve(o.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Ve(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};tg.ownKeys=e=>(Z("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function Qw(e){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(ho).forEach(n=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,get:()=>ho[n](e),set:on})}),t}function e_(e){const{ctx:t,propsOptions:[n]}=e;n&&Object.keys(n).forEach(r=>{Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>e.props[r],set:on})})}function t_(e){const{ctx:t,setupState:n}=e;Object.keys(Ae(n)).forEach(r=>{if(!n.__isScriptSetup){if(Sd(r[0])){Z(`setup() return property ${JSON.stringify(r)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>n[r],set:on})}})}function n_(){return r_().slots}function r_(){const e=Qt();return e||Z("useContext() called without active instance."),e.setupContext||(e.setupContext=gg(e))}function jf(e){return we(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}function o_(){const e=Object.create(null);return(t,n)=>{e[n]?Z(`${t} property "${n}" is already defined in ${e[n]}.`):e[n]=t}}let Gc=!0;function s_(e){const t=$d(e),n=e.proxy,r=e.ctx;Gc=!1,t.beforeCreate&&Nf(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:i,watch:l,provide:a,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:m,updated:h,activated:b,deactivated:y,beforeDestroy:v,beforeUnmount:x,destroyed:_,unmounted:E,render:I,renderTracked:P,renderTriggered:S,errorCaptured:k,serverPrefetch:M,expose:N,inheritAttrs:G,components:B,directives:te,filters:V}=t,ne=o_();{const[J]=e.propsOptions;if(J)for(const le in J)ne("Props",le)}if(c&&i_(c,r,ne),i)for(const J in i){const le=i[J];Pe(le)?(Object.defineProperty(r,J,{value:le.bind(n),configurable:!0,enumerable:!0,writable:!0}),ne("Methods",J)):Z(`Method "${J}" has type "${typeof le}" in the component definition. Did you reference the function correctly?`)}if(o){Pe(o)||Z("The data option must be a function. Plain object usage is no longer supported.");const J=o.call(n,n);if(od(J)&&Z("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Ge(J))Z("data() should return an object.");else{e.data=ct(J);for(const le in J)ne("Data",le),Sd(le[0])||Object.defineProperty(r,le,{configurable:!0,enumerable:!0,get:()=>J[le],set:on})}}if(Gc=!0,s)for(const J in s){const le=s[J],me=Pe(le)?le.bind(n,n):Pe(le.get)?le.get.bind(n,n):on;me===on&&Z(`Computed property "${J}" has no getter.`);const Re=!Pe(le)&&Pe(le.set)?le.set.bind(n):()=>{Z(`Write operation failed: computed property "${J}" is readonly.`)},Xe=C({get:me,set:Re});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>Xe.value,set:nt=>Xe.value=nt}),ne("Computed",J)}if(l)for(const J in l)ng(l[J],r,n,J);if(a){const J=Pe(a)?a.call(n):a;Reflect.ownKeys(J).forEach(le=>{gt(le,J[le])})}u&&Nf(u,e,"c");function ve(J,le){we(le)?le.forEach(me=>J(me.bind(n))):le&&J(le.bind(n))}if(ve(Ea,d),ve(It,f),ve(Jv,m),ve(Di,h),ve(_d,b),ve(xd,y),ve(Gw,k),ve(Zw,P),ve(Yw,S),ve(jt,x),ve(kd,E),ve(Kw,M),we(N))if(N.length){const J=e.exposed||(e.exposed={});N.forEach(le=>{Object.defineProperty(J,le,{get:()=>n[le],set:me=>n[le]=me})})}else e.exposed||(e.exposed={});I&&e.render===on&&(e.render=I),G!=null&&(e.inheritAttrs=G),B&&(e.components=B),te&&(e.directives=te)}function i_(e,t,n=on){we(e)&&(e=Xc(e));for(const r in e){const o=e[r];let s;Ge(o)?"default"in o?s=ie(o.from||r,o.default,!0):s=ie(o.from||r):s=ie(o),Ye(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:i=>s.value=i}):t[r]=s,n("Inject",r)}}function Nf(e,t,n){kn(we(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ng(e,t,n,r){const o=r.includes(".")?Uv(n,r):()=>n[r];if(it(e)){const s=t[e];Pe(s)?be(o,s):Z(`Invalid watch handler specified by key "${e}"`,s)}else if(Pe(e))be(o,e.bind(n));else if(Ge(e))if(we(e))e.forEach(s=>ng(s,t,n,r));else{const s=Pe(e.handler)?e.handler.bind(n):t[e.handler];Pe(s)?be(o,s,e):Z(`Invalid watch handler specified by key "${e.handler}"`,s)}else Z(`Invalid watch option: "${r}"`,e)}function $d(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,l=s.get(t);let a;return l?a=l:!o.length&&!n&&!r?a=t:(a={},o.length&&o.forEach(c=>Yl(a,c,i,!0)),Yl(a,t,i)),Ge(t)&&s.set(t,a),a}function Yl(e,t,n,r=!1){const{mixins:o,extends:s}=t;s&&Yl(e,s,n,!0),o&&o.forEach(i=>Yl(e,i,n,!0));for(const i in t)if(r&&i==="expose")Z('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const l=l_[i]||n&&n[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const l_={data:Ff,props:zf,emits:zf,methods:zs,computed:zs,beforeCreate:Kt,created:Kt,beforeMount:Kt,mounted:Kt,beforeUpdate:Kt,updated:Kt,beforeDestroy:Kt,beforeUnmount:Kt,destroyed:Kt,unmounted:Kt,activated:Kt,deactivated:Kt,errorCaptured:Kt,serverPrefetch:Kt,components:zs,directives:zs,watch:c_,provide:Ff,inject:a_};function Ff(e,t){return t?e?function(){return st(Pe(e)?e.call(this,this):e,Pe(t)?t.call(this,this):t)}:t:e}function a_(e,t){return zs(Xc(e),Xc(t))}function Xc(e){if(we(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Kt(e,t){return e?[...new Set([].concat(e,t))]:t}function zs(e,t){return e?st(Object.create(null),e,t):t}function zf(e,t){return e?we(e)&&we(t)?[...new Set([...e,...t])]:st(Object.create(null),jf(e),jf(t??{})):t}function c_(e,t){if(!e)return t;if(!t)return e;const n=st(Object.create(null),e);for(const r in t)n[r]=Kt(e[r],t[r]);return n}function rg(){return{app:null,config:{isNativeTag:iv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let u_=0;function d_(e,t){return function(r,o=null){Pe(r)||(r=st({},r)),o!=null&&!Ge(o)&&(Z("root props passed to app.mount() must be an object."),o=null);const s=rg();Object.defineProperty(s.config,"unwrapInjectedRef",{get(){return!0},set(){Z("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const i=new Set;let l=!1;const a=s.app={_uid:u_++,_component:r,_props:o,_container:null,_context:s,_instance:null,version:Jl,get config(){return s.config},set config(c){Z("app.config cannot be replaced. Modify individual options instead.")},use(c,...u){return i.has(c)?Z("Plugin has already been applied to target app."):c&&Pe(c.install)?(i.add(c),c.install(a,...u)):Pe(c)?(i.add(c),c(a,...u)):Z('A plugin must either be a function or an object with an "install" function.'),a},mixin(c){return s.mixins.includes(c)?Z("Mixin has already been applied to target app"+(c.name?`: ${c.name}`:"")):s.mixins.push(c),a},component(c,u){return nu(c,s.config),u?(s.components[c]&&Z(`Component "${c}" has already been registered in target app.`),s.components[c]=u,a):s.components[c]},directive(c,u){return qv(c),u?(s.directives[c]&&Z(`Directive "${c}" has already been registered in target app.`),s.directives[c]=u,a):s.directives[c]},mount(c,u,d){if(l)Z("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{c.__vue_app__&&Z("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=$(r,o);return f.appContext=s,s.reload=()=>{e(ln(f),c,d)},u&&t?t(f,c):e(f,c,d),l=!0,a._container=c,c.__vue_app__=a,a._instance=f.component,Cw(a,Jl),Ia(f.component)||f.component.proxy}},unmount(){l?(e(null,a._container),a._instance=null,Ew(a),delete a._container.__vue_app__):Z("Cannot unmount an app that is not mounted.")},provide(c,u){return c in s.provides&&Z(`App already provides property with key "${String(c)}". It will be overwritten with the new value.`),s.provides[c]=u,a},runWithContext(c){Zl=a;try{return c()}finally{Zl=null}}};return a}}let Zl=null;function gt(e,t){if(!Ct)Z("provide() can only be used inside setup().");else{let n=Ct.provides;const r=Ct.parent&&Ct.parent.provides;r===n&&(n=Ct.provides=Object.create(r)),n[e]=t}}function ie(e,t,n=!1){const r=Ct||Ot;if(r||Zl){const o=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Zl._context.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&Pe(t)?t.call(r&&r.proxy):t;Z(`injection "${String(e)}" not found.`)}else Z("inject() can only be used inside setup() or functional components.")}function f_(e,t,n,r=!1){const o={},s={};zl(s,Oa,1),e.propsDefaults=Object.create(null),og(e,t,o,s);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);ig(t||{},o,e),n?e.props=r?o:ow(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function p_(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function h_(e,t,n,r){const{props:o,attrs:s,vnode:{patchFlag:i}}=e,l=Ae(o),[a]=e.propsOptions;let c=!1;if(!p_(e)&&(r||i>0)&&!(i&16)){if(i&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Sa(e.emitsOptions,f))continue;const m=t[f];if(a)if(Ve(s,f))m!==s[f]&&(s[f]=m,c=!0);else{const h=Wn(f);o[h]=Jc(a,l,h,m,e,!1)}else m!==s[f]&&(s[f]=m,c=!0)}}}else{og(e,t,o,s)&&(c=!0);let u;for(const d in l)(!t||!Ve(t,d)&&((u=ir(d))===d||!Ve(t,u)))&&(a?n&&(n[d]!==void 0||n[u]!==void 0)&&(o[d]=Jc(a,l,d,void 0,e,!0)):delete o[d]);if(s!==l)for(const d in s)(!t||!Ve(t,d))&&(delete s[d],c=!0)}c&&Un(e,"set","$attrs"),ig(t||{},o,e)}function og(e,t,n,r){const[o,s]=e.propsOptions;let i=!1,l;if(t)for(let a in t){if(kl(a))continue;const c=t[a];let u;o&&Ve(o,u=Wn(a))?!s||!s.includes(u)?n[u]=c:(l||(l={}))[u]=c:Sa(e.emitsOptions,a)||(!(a in r)||c!==r[a])&&(r[a]=c,i=!0)}if(s){const a=Ae(n),c=l||et;for(let u=0;u<s.length;u++){const d=s[u];n[d]=Jc(o,a,d,c[d],e,!Ve(c,d))}}return i}function Jc(e,t,n,r,o,s){const i=e[n];if(i!=null){const l=Ve(i,"default");if(l&&r===void 0){const a=i.default;if(i.type!==Function&&!i.skipFactory&&Pe(a)){const{propsDefaults:c}=o;n in c?r=c[n]:(es(o),r=c[n]=a.call(null,t),mo())}else r=a}i[0]&&(s&&!l?r=!1:i[1]&&(r===""||r===ir(n))&&(r=!0))}return r}function sg(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const s=e.props,i={},l=[];let a=!1;if(!Pe(e)){const u=d=>{a=!0;const[f,m]=sg(d,t,!0);st(i,f),m&&l.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!a)return Ge(e)&&r.set(e,qo),qo;if(we(s))for(let u=0;u<s.length;u++){it(s[u])||Z("props must be strings when using array syntax.",s[u]);const d=Wn(s[u]);Bf(d)&&(i[d]=et)}else if(s){Ge(s)||Z("invalid props options",s);for(const u in s){const d=Wn(u);if(Bf(d)){const f=s[u],m=i[d]=we(f)||Pe(f)?{type:f}:st({},f);if(m){const h=Vf(Boolean,m.type),b=Vf(String,m.type);m[0]=h>-1,m[1]=b<0||h<b,(h>-1||Ve(m,"default"))&&l.push(d)}}}}const c=[i,l];return Ge(e)&&r.set(e,c),c}function Bf(e){return e[0]!=="$"?!0:(Z(`Invalid prop name: "${e}" is a reserved property.`),!1)}function Qc(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Hf(e,t){return Qc(e)===Qc(t)}function Vf(e,t){return we(t)?t.findIndex(n=>Hf(n,e)):Pe(t)&&Hf(t,e)?0:-1}function ig(e,t,n){const r=Ae(t),o=n.propsOptions[0];for(const s in o){let i=o[s];i!=null&&m_(s,r[s],i,!Ve(e,s)&&!Ve(e,ir(s)))}}function m_(e,t,n,r){const{type:o,required:s,validator:i,skipCheck:l}=n;if(s&&r){Z('Missing required prop: "'+e+'"');return}if(!(t==null&&!s)){if(o!=null&&o!==!0&&!l){let a=!1;const c=we(o)?o:[o],u=[];for(let d=0;d<c.length&&!a;d++){const{valid:f,expectedType:m}=g_(t,c[d]);u.push(m||""),a=f}if(!a){Z(b_(e,t,u));return}}i&&!i(t)&&Z('Invalid prop: custom validator check failed for prop "'+e+'".')}}const v_=Br("String,Number,Boolean,Function,Symbol,BigInt");function g_(e,t){let n;const r=Qc(t);if(v_(r)){const o=typeof e;n=o===r.toLowerCase(),!n&&o==="object"&&(n=e instanceof t)}else r==="Object"?n=Ge(e):r==="Array"?n=we(e):r==="null"?n=e===null:n=e instanceof t;return{valid:n,expectedType:r}}function b_(e,t,n){let r=`Invalid prop: type check failed for prop "${e}". Expected ${n.map(wo).join(" | ")}`;const o=n[0],s=sd(t),i=Wf(t,o),l=Wf(t,s);return n.length===1&&Uf(o)&&!y_(o,s)&&(r+=` with value ${i}`),r+=`, got ${s} `,Uf(s)&&(r+=`with value ${l}.`),r}function Wf(e,t){return t==="String"?`"${e}"`:t==="Number"?`${Number(e)}`:`${e}`}function Uf(e){return["string","number","boolean"].some(n=>e.toLowerCase()===n)}function y_(...e){return e.some(t=>t.toLowerCase()==="boolean")}const lg=e=>e[0]==="_"||e==="$stable",Cd=e=>we(e)?e.map(Mn):[Mn(e)],w_=(e,t,n)=>{if(t._n)return t;const r=ce((...o)=>(Ct&&Z(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Cd(t(...o))),n);return r._c=!1,r},ag=(e,t,n)=>{const r=e._ctx;for(const o in e){if(lg(o))continue;const s=e[o];if(Pe(s))t[o]=w_(o,s,r);else if(s!=null){Z(`Non-function value encountered for slot "${o}". Prefer function slots for better performance.`);const i=Cd(s);t[o]=()=>i}}},cg=(e,t)=>{Li(e.vnode)||Z("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=Cd(t);e.slots.default=()=>n},__=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Ae(t),zl(t,"_",n)):ag(t,e.slots={})}else e.slots={},t&&cg(e,t);zl(e.slots,Oa,1)},x_=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,i=et;if(r.shapeFlag&32){const l=t._;l?Ir?(st(o,t),Un(e,"set","$slots")):n&&l===1?s=!1:(st(o,t),!n&&l===1&&delete o._):(s=!t.$stable,ag(t,o)),i=t}else t&&(cg(e,t),i={default:1});if(s)for(const l in o)!lg(l)&&!(l in i)&&delete o[l]};function eu(e,t,n,r,o=!1){if(we(e)){e.forEach((f,m)=>eu(f,t&&(we(t)?t[m]:t),n,r,o));return}if(Yo(r)&&!o)return;const s=r.shapeFlag&4?Ia(r.component)||r.component.proxy:r.el,i=o?null:s,{i:l,r:a}=e;if(!l){Z("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const c=t&&t.r,u=l.refs===et?l.refs={}:l.refs,d=l.setupState;if(c!=null&&c!==a&&(it(c)?(u[c]=null,Ve(d,c)&&(d[c]=null)):Ye(c)&&(c.value=null)),Pe(a))or(a,l,12,[i,u]);else{const f=it(a),m=Ye(a);if(f||m){const h=()=>{if(e.f){const b=f?Ve(d,a)?d[a]:u[a]:a.value;o?we(b)&&nd(b,s):we(b)?b.includes(s)||b.push(s):f?(u[a]=[s],Ve(d,a)&&(d[a]=u[a])):(a.value=[s],e.k&&(u[e.k]=a.value))}else f?(u[a]=i,Ve(d,a)&&(d[a]=i)):m?(a.value=i,e.k&&(u[e.k]=i)):Z("Invalid template ref type:",a,`(${typeof a})`)};i?(h.id=-1,Dt(h,n)):h()}else Z("Invalid template ref type:",a,`(${typeof a})`)}}let bs,$r;function Xn(e,t){e.appContext.config.performance&&Gl()&&$r.mark(`vue-${t}-${e.uid}`),Pw(e,t,Gl()?$r.now():Date.now())}function Jn(e,t){if(e.appContext.config.performance&&Gl()){const n=`vue-${t}-${e.uid}`,r=n+":end";$r.mark(r),$r.measure(`<${Pa(e,e.type)}> ${t}`,n,r),$r.clearMarks(n),$r.clearMarks(r)}Tw(e,t,Gl()?$r.now():Date.now())}function Gl(){return bs!==void 0||(typeof window<"u"&&window.performance?(bs=!0,$r=window.performance):bs=!1),bs}function k_(){const e=[];if(e.length){const t=e.length>1;console.warn(`Feature flag${t?"s":""} ${e.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const Dt=Bw;function S_(e){return $_(e)}function $_(e,t){k_();const n=Bl();n.__VUE__=!0,Fv(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:r,remove:o,patchProp:s,createElement:i,createText:l,createComment:a,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:m=on,insertStaticContent:h}=e,b=(g,w,O,L=null,j=null,W=null,Q=!1,K=null,ee=Ir?!1:!!w.dynamicChildren)=>{if(g===w)return;g&&!Cr(g,w)&&(L=re(g),ft(g,j,W,!0),g=null),w.patchFlag===-2&&(ee=!1,w.dynamicChildren=null);const{type:U,ref:fe,shapeFlag:ue}=w;switch(U){case is:y(g,w,O,L);break;case bt:v(g,w,O,L);break;case Cl:g==null?x(w,O,L,Q):_(g,w,O,Q);break;case ze:te(g,w,O,L,j,W,Q,K,ee);break;default:ue&1?P(g,w,O,L,j,W,Q,K,ee):ue&6?V(g,w,O,L,j,W,Q,K,ee):ue&64||ue&128?U.process(g,w,O,L,j,W,Q,K,ee,se):Z("Invalid VNode type:",U,`(${typeof U})`)}fe!=null&&j&&eu(fe,g&&g.ref,W,w||g,!w)},y=(g,w,O,L)=>{if(g==null)r(w.el=l(w.children),O,L);else{const j=w.el=g.el;w.children!==g.children&&c(j,w.children)}},v=(g,w,O,L)=>{g==null?r(w.el=a(w.children||""),O,L):w.el=g.el},x=(g,w,O,L)=>{[g.el,g.anchor]=h(g.children,w,O,L,g.el,g.anchor)},_=(g,w,O,L)=>{if(w.children!==g.children){const j=f(g.anchor);I(g),[w.el,w.anchor]=h(w.children,O,j,L)}else w.el=g.el,w.anchor=g.anchor},E=({el:g,anchor:w},O,L)=>{let j;for(;g&&g!==w;)j=f(g),r(g,O,L),g=j;r(w,O,L)},I=({el:g,anchor:w})=>{let O;for(;g&&g!==w;)O=f(g),o(g),g=O;o(w)},P=(g,w,O,L,j,W,Q,K,ee)=>{Q=Q||w.type==="svg",g==null?S(w,O,L,j,W,Q,K,ee):N(g,w,j,W,Q,K,ee)},S=(g,w,O,L,j,W,Q,K)=>{let ee,U;const{type:fe,props:ue,shapeFlag:he,transition:ye,dirs:Le}=g;if(ee=g.el=i(g.type,W,ue&&ue.is,ue),he&8?u(ee,g.children):he&16&&M(g.children,ee,null,L,j,W&&fe!=="foreignObject",Q,K),Le&&Ur(g,null,L,"created"),k(ee,g,g.scopeId,Q,L),ue){for(const qe in ue)qe!=="value"&&!kl(qe)&&s(ee,qe,null,ue[qe],W,g.children,L,j,A);"value"in ue&&s(ee,"value",null,ue.value),(U=ue.onVnodeBeforeMount)&&wn(U,L,g)}Object.defineProperty(ee,"__vnode",{value:g,enumerable:!1}),Object.defineProperty(ee,"__vueParentComponent",{value:L,enumerable:!1}),Le&&Ur(g,null,L,"beforeMount");const We=(!j||j&&!j.pendingBranch)&&ye&&!ye.persisted;We&&ye.beforeEnter(ee),r(ee,w,O),((U=ue&&ue.onVnodeMounted)||We||Le)&&Dt(()=>{U&&wn(U,L,g),We&&ye.enter(ee),Le&&Ur(g,null,L,"mounted")},j)},k=(g,w,O,L,j)=>{if(O&&m(g,O),L)for(let W=0;W<L.length;W++)m(g,L[W]);if(j){let W=j.subTree;if(W.patchFlag>0&&W.patchFlag&2048&&(W=Vv(W.children)||W),w===W){const Q=j.vnode;k(g,Q,Q.scopeId,Q.slotScopeIds,j.parent)}}},M=(g,w,O,L,j,W,Q,K,ee=0)=>{for(let U=ee;U<g.length;U++){const fe=g[U]=K?kr(g[U]):Mn(g[U]);b(null,fe,w,O,L,j,W,Q,K)}},N=(g,w,O,L,j,W,Q)=>{const K=w.el=g.el;let{patchFlag:ee,dynamicChildren:U,dirs:fe}=w;ee|=g.patchFlag&16;const ue=g.props||et,he=w.props||et;let ye;O&&qr(O,!1),(ye=he.onVnodeBeforeUpdate)&&wn(ye,O,w,g),fe&&Ur(w,g,O,"beforeUpdate"),O&&qr(O,!0),Ir&&(ee=0,Q=!1,U=null);const Le=j&&w.type!=="foreignObject";if(U?(G(g.dynamicChildren,U,K,O,L,Le,W),Xl(g,w)):Q||me(g,w,K,null,O,L,Le,W,!1),ee>0){if(ee&16)B(K,w,ue,he,O,L,j);else if(ee&2&&ue.class!==he.class&&s(K,"class",null,he.class,j),ee&4&&s(K,"style",ue.style,he.style,j),ee&8){const We=w.dynamicProps;for(let qe=0;qe<We.length;qe++){const rt=We[qe],wt=ue[rt],qt=he[rt];(qt!==wt||rt==="value")&&s(K,rt,wt,qt,j,g.children,O,L,A)}}ee&1&&g.children!==w.children&&u(K,w.children)}else!Q&&U==null&&B(K,w,ue,he,O,L,j);((ye=he.onVnodeUpdated)||fe)&&Dt(()=>{ye&&wn(ye,O,w,g),fe&&Ur(w,g,O,"updated")},L)},G=(g,w,O,L,j,W,Q)=>{for(let K=0;K<w.length;K++){const ee=g[K],U=w[K],fe=ee.el&&(ee.type===ze||!Cr(ee,U)||ee.shapeFlag&70)?d(ee.el):O;b(ee,U,fe,null,L,j,W,Q,!0)}},B=(g,w,O,L,j,W,Q)=>{if(O!==L){if(O!==et)for(const K in O)!kl(K)&&!(K in L)&&s(g,K,O[K],null,Q,w.children,j,W,A);for(const K in L){if(kl(K))continue;const ee=L[K],U=O[K];ee!==U&&K!=="value"&&s(g,K,U,ee,Q,w.children,j,W,A)}"value"in L&&s(g,"value",O.value,L.value)}},te=(g,w,O,L,j,W,Q,K,ee)=>{const U=w.el=g?g.el:l(""),fe=w.anchor=g?g.anchor:l("");let{patchFlag:ue,dynamicChildren:he,slotScopeIds:ye}=w;(Ir||ue&2048)&&(ue=0,ee=!1,he=null),ye&&(K=K?K.concat(ye):ye),g==null?(r(U,O,L),r(fe,O,L),M(w.children,O,fe,j,W,Q,K,ee)):ue>0&&ue&64&&he&&g.dynamicChildren?(G(g.dynamicChildren,he,O,j,W,Q,K),Xl(g,w)):me(g,w,O,fe,j,W,Q,K,ee)},V=(g,w,O,L,j,W,Q,K,ee)=>{w.slotScopeIds=K,g==null?w.shapeFlag&512?j.ctx.activate(w,O,L,Q,ee):ne(w,O,L,j,W,Q,ee):ve(g,w,ee)},ne=(g,w,O,L,j,W,Q)=>{const K=g.component=L_(g,L,j);if(K.type.__hmrId&&xw(K),Sl(g),Xn(K,"mount"),Li(g)&&(K.ctx.renderer=se),Xn(K,"init"),j_(K),Jn(K,"init"),K.asyncDep){if(j&&j.registerDep(K,J),!g.el){const ee=K.subTree=$(bt);v(null,ee,w,O)}return}J(K,g,w,O,j,W,Q),$l(),Jn(K,"mount")},ve=(g,w,O)=>{const L=w.component=g.component;if(Fw(g,w,O))if(L.asyncDep&&!L.asyncResolved){Sl(w),le(L,w,O),$l();return}else L.next=w,ww(L.update),L.update();else w.el=g.el,L.vnode=w},J=(g,w,O,L,j,W,Q)=>{const K=()=>{if(g.isMounted){let{next:fe,bu:ue,u:he,parent:ye,vnode:Le}=g,We=fe,qe;Sl(fe||g.vnode),qr(g,!1),fe?(fe.el=Le.el,le(g,fe,Q)):fe=Le,ue&&Jr(ue),(qe=fe.props&&fe.props.onVnodeBeforeUpdate)&&wn(qe,ye,fe,Le),qr(g,!0),Xn(g,"render");const rt=Ua(g);Jn(g,"render");const wt=g.subTree;g.subTree=rt,Xn(g,"patch"),b(wt,rt,d(wt.el),re(wt),g,j,W),Jn(g,"patch"),fe.el=rt.el,We===null&&zw(g,rt.el),he&&Dt(he,j),(qe=fe.props&&fe.props.onVnodeUpdated)&&Dt(()=>wn(qe,ye,fe,Le),j),zv(g),$l()}else{let fe;const{el:ue,props:he}=w,{bm:ye,m:Le,parent:We}=g,qe=Yo(w);if(qr(g,!1),ye&&Jr(ye),!qe&&(fe=he&&he.onVnodeBeforeMount)&&wn(fe,We,w),qr(g,!0),ue&&X){const rt=()=>{Xn(g,"render"),g.subTree=Ua(g),Jn(g,"render"),Xn(g,"hydrate"),X(ue,g.subTree,g,j,null),Jn(g,"hydrate")};qe?w.type.__asyncLoader().then(()=>!g.isUnmounted&&rt()):rt()}else{Xn(g,"render");const rt=g.subTree=Ua(g);Jn(g,"render"),Xn(g,"patch"),b(null,rt,O,L,g,j,W),Jn(g,"patch"),w.el=rt.el}if(Le&&Dt(Le,j),!qe&&(fe=he&&he.onVnodeMounted)){const rt=w;Dt(()=>wn(fe,We,rt),j)}(w.shapeFlag&256||We&&Yo(We.vnode)&&We.vnode.shapeFlag&256)&&g.a&&Dt(g.a,j),g.isMounted=!0,qc(g),w=O=L=null}},ee=g.effect=new cd(K,()=>ka(U),g.scope),U=g.update=()=>ee.run();U.id=g.uid,qr(g,!0),ee.onTrack=g.rtc?fe=>Jr(g.rtc,fe):void 0,ee.onTrigger=g.rtg?fe=>Jr(g.rtg,fe):void 0,U.ownerInstance=g,U()},le=(g,w,O)=>{w.component=g;const L=g.vnode.props;g.vnode=w,g.next=null,h_(g,w.props,L,O),x_(g,w.children,O),$o(),Tf(),Co()},me=(g,w,O,L,j,W,Q,K,ee=!1)=>{const U=g&&g.children,fe=g?g.shapeFlag:0,ue=w.children,{patchFlag:he,shapeFlag:ye}=w;if(he>0){if(he&128){Xe(U,ue,O,L,j,W,Q,K,ee);return}else if(he&256){Re(U,ue,O,L,j,W,Q,K,ee);return}}ye&8?(fe&16&&A(U,j,W),ue!==U&&u(O,ue)):fe&16?ye&16?Xe(U,ue,O,L,j,W,Q,K,ee):A(U,j,W,!0):(fe&8&&u(O,""),ye&16&&M(ue,O,L,j,W,Q,K,ee))},Re=(g,w,O,L,j,W,Q,K,ee)=>{g=g||qo,w=w||qo;const U=g.length,fe=w.length,ue=Math.min(U,fe);let he;for(he=0;he<ue;he++){const ye=w[he]=ee?kr(w[he]):Mn(w[he]);b(g[he],ye,O,null,j,W,Q,K,ee)}U>fe?A(g,j,W,!0,!1,ue):M(w,O,L,j,W,Q,K,ee,ue)},Xe=(g,w,O,L,j,W,Q,K,ee)=>{let U=0;const fe=w.length;let ue=g.length-1,he=fe-1;for(;U<=ue&&U<=he;){const ye=g[U],Le=w[U]=ee?kr(w[U]):Mn(w[U]);if(Cr(ye,Le))b(ye,Le,O,null,j,W,Q,K,ee);else break;U++}for(;U<=ue&&U<=he;){const ye=g[ue],Le=w[he]=ee?kr(w[he]):Mn(w[he]);if(Cr(ye,Le))b(ye,Le,O,null,j,W,Q,K,ee);else break;ue--,he--}if(U>ue){if(U<=he){const ye=he+1,Le=ye<fe?w[ye].el:L;for(;U<=he;)b(null,w[U]=ee?kr(w[U]):Mn(w[U]),O,Le,j,W,Q,K,ee),U++}}else if(U>he)for(;U<=ue;)ft(g[U],j,W,!0),U++;else{const ye=U,Le=U,We=new Map;for(U=Le;U<=he;U++){const q=w[U]=ee?kr(w[U]):Mn(w[U]);q.key!=null&&(We.has(q.key)&&Z("Duplicate keys found during update:",JSON.stringify(q.key),"Make sure keys are unique."),We.set(q.key,U))}let qe,rt=0;const wt=he-Le+1;let qt=!1,hr=0;const en=new Array(wt);for(U=0;U<wt;U++)en[U]=0;for(U=ye;U<=ue;U++){const q=g[U];if(rt>=wt){ft(q,j,W,!0);continue}let de;if(q.key!=null)de=We.get(q.key);else for(qe=Le;qe<=he;qe++)if(en[qe-Le]===0&&Cr(q,w[qe])){de=qe;break}de===void 0?ft(q,j,W,!0):(en[de-Le]=U+1,de>=hr?hr=de:qt=!0,b(q,w[de],O,null,j,W,Q,K,ee),rt++)}const gs=qt?C_(en):qo;for(qe=gs.length-1,U=wt-1;U>=0;U--){const q=Le+U,de=w[q],Ee=q+1<fe?w[q+1].el:L;en[U]===0?b(null,de,O,Ee,j,W,Q,K,ee):qt&&(qe<0||U!==gs[qe]?nt(de,O,Ee,2):qe--)}}},nt=(g,w,O,L,j=null)=>{const{el:W,type:Q,transition:K,children:ee,shapeFlag:U}=g;if(U&6){nt(g.component.subTree,w,O,L);return}if(U&128){g.suspense.move(w,O,L);return}if(U&64){Q.move(g,w,O,se);return}if(Q===ze){r(W,w,O);for(let ue=0;ue<ee.length;ue++)nt(ee[ue],w,O,L);r(g.anchor,w,O);return}if(Q===Cl){E(g,w,O);return}if(L!==2&&U&1&&K)if(L===0)K.beforeEnter(W),r(W,w,O),Dt(()=>K.enter(W),j);else{const{leave:ue,delayLeave:he,afterLeave:ye}=K,Le=()=>r(W,w,O),We=()=>{ue(W,()=>{Le(),ye&&ye()})};he?he(W,Le,We):We()}else r(W,w,O)},ft=(g,w,O,L=!1,j=!1)=>{const{type:W,props:Q,ref:K,children:ee,dynamicChildren:U,shapeFlag:fe,patchFlag:ue,dirs:he}=g;if(K!=null&&eu(K,null,O,g,!0),fe&256){w.ctx.deactivate(g);return}const ye=fe&1&&he,Le=!Yo(g);let We;if(Le&&(We=Q&&Q.onVnodeBeforeUnmount)&&wn(We,w,g),fe&6)Mt(g.component,O,L);else{if(fe&128){g.suspense.unmount(O,L);return}ye&&Ur(g,null,w,"beforeUnmount"),fe&64?g.type.remove(g,w,O,j,se,L):U&&(W!==ze||ue>0&&ue&64)?A(U,w,O,!1,!0):(W===ze&&ue&384||!j&&fe&16)&&A(ee,w,O),L&&Qe(g)}(Le&&(We=Q&&Q.onVnodeUnmounted)||ye)&&Dt(()=>{We&&wn(We,w,g),ye&&Ur(g,null,w,"unmounted")},O)},Qe=g=>{const{type:w,el:O,anchor:L,transition:j}=g;if(w===ze){g.patchFlag>0&&g.patchFlag&2048&&j&&!j.persisted?g.children.forEach(Q=>{Q.type===bt?o(Q.el):Qe(Q)}):yt(O,L);return}if(w===Cl){I(g);return}const W=()=>{o(O),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(g.shapeFlag&1&&j&&!j.persisted){const{leave:Q,delayLeave:K}=j,ee=()=>Q(O,W);K?K(g.el,W,ee):ee()}else W()},yt=(g,w)=>{let O;for(;g!==w;)O=f(g),o(g),g=O;o(w)},Mt=(g,w,O)=>{g.type.__hmrId&&kw(g);const{bum:L,scope:j,update:W,subTree:Q,um:K}=g;L&&Jr(L),j.stop(),W&&(W.active=!1,ft(Q,g,w,O)),K&&Dt(K,w),Dt(()=>{g.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve()),Iw(g)},A=(g,w,O,L=!1,j=!1,W=0)=>{for(let Q=W;Q<g.length;Q++)ft(g[Q],w,O,L,j)},re=g=>g.shapeFlag&6?re(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),oe=(g,w,O)=>{g==null?w._vnode&&ft(w._vnode,null,null,!0):b(w._vnode||null,g,w,null,null,null,O),Tf(),Dv(),w._vnode=g},se={p:b,um:ft,m:nt,r:Qe,mt:ne,mc:M,pc:me,pbc:G,n:re,o:e};let _e,X;return t&&([_e,X]=t(se)),{render:oe,hydrate:_e,createApp:d_(oe,_e)}}function qr({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Xl(e,t,n=!1){const r=e.children,o=t.children;if(we(r)&&we(o))for(let s=0;s<r.length;s++){const i=r[s];let l=o[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[s]=kr(o[s]),l.el=i.el),n||Xl(i,l)),l.type===is&&(l.el=i.el),l.type===bt&&!l.el&&(l.el=i.el)}}function C_(e){const t=e.slice(),n=[0];let r,o,s,i,l;const a=e.length;for(r=0;r<a;r++){const c=e[r];if(c!==0){if(o=n[n.length-1],e[o]<c){t[r]=o,n.push(r);continue}for(s=0,i=n.length-1;s<i;)l=s+i>>1,e[n[l]]<c?s=l+1:i=l;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,i=n[s-1];s-- >0;)n[s]=i,i=t[i];return n}const E_=e=>e.__isTeleport,Zo=e=>e&&(e.disabled||e.disabled===""),qf=e=>typeof SVGElement<"u"&&e instanceof SVGElement,tu=(e,t)=>{const n=e&&e.to;if(it(n))if(t){const r=t(n);return r||Z(`Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),r}else return Z("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!n&&!Zo(e)&&Z(`Invalid Teleport target: ${n}`),n},O_={__isTeleport:!0,process(e,t,n,r,o,s,i,l,a,c){const{mc:u,pc:d,pbc:f,o:{insert:m,querySelector:h,createText:b,createComment:y}}=c,v=Zo(t.props);let{shapeFlag:x,children:_,dynamicChildren:E}=t;if(Ir&&(a=!1,E=null),e==null){const I=t.el=y("teleport start"),P=t.anchor=y("teleport end");m(I,n,r),m(P,n,r);const S=t.target=tu(t.props,h),k=t.targetAnchor=b("");S?(m(k,S),i=i||qf(S)):v||Z("Invalid Teleport target on mount:",S,`(${typeof S})`);const M=(N,G)=>{x&16&&u(_,N,G,o,s,i,l,a)};v?M(n,P):S&&M(S,k)}else{t.el=e.el;const I=t.anchor=e.anchor,P=t.target=e.target,S=t.targetAnchor=e.targetAnchor,k=Zo(e.props),M=k?n:P,N=k?I:S;if(i=i||qf(P),E?(f(e.dynamicChildren,E,M,o,s,i,l),Xl(e,t,!0)):a||d(e,t,M,N,o,s,i,l,!1),v)k||Qi(t,n,I,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const G=t.target=tu(t.props,h);G?Qi(t,G,null,c,0):Z("Invalid Teleport target on update:",P,`(${typeof P})`)}else k&&Qi(t,P,S,c,1)}dg(t)},remove(e,t,n,r,{um:o,o:{remove:s}},i){const{shapeFlag:l,children:a,anchor:c,targetAnchor:u,target:d,props:f}=e;if(d&&s(u),(i||!Zo(f))&&(s(c),l&16))for(let m=0;m<a.length;m++){const h=a[m];o(h,t,n,!0,!!h.dynamicChildren)}},move:Qi,hydrate:I_};function Qi(e,t,n,{o:{insert:r},m:o},s=2){s===0&&r(e.targetAnchor,t,n);const{el:i,anchor:l,shapeFlag:a,children:c,props:u}=e,d=s===2;if(d&&r(i,t,n),(!d||Zo(u))&&a&16)for(let f=0;f<c.length;f++)o(c[f],t,n,2);d&&r(l,t,n)}function I_(e,t,n,r,o,s,{o:{nextSibling:i,parentNode:l,querySelector:a}},c){const u=t.target=tu(t.props,a);if(u){const d=u._lpa||u.firstChild;if(t.shapeFlag&16)if(Zo(t.props))t.anchor=c(i(e),t,l(e),n,r,o,s),t.targetAnchor=d;else{t.anchor=i(e);let f=d;for(;f;)if(f=i(f),f&&f.nodeType===8&&f.data==="teleport anchor"){t.targetAnchor=f,u._lpa=t.targetAnchor&&i(t.targetAnchor);break}c(d,t,u,n,r,o,s)}dg(t)}return t.anchor&&i(t.anchor)}const ug=O_;function dg(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const ze=Symbol.for("v-fgt"),is=Symbol.for("v-txt"),bt=Symbol.for("v-cmt"),Cl=Symbol.for("v-stc"),Us=[];let An=null;function T(e=!1){Us.push(An=e?null:[])}function P_(){Us.pop(),An=Us[Us.length-1]||null}let fi=1;function Kf(e){fi+=e}function fg(e){return e.dynamicChildren=fi>0?An||qo:null,P_(),fi>0&&An&&An.push(e),e}function Y(e,t,n,r,o,s){return fg(p(e,t,n,r,o,s,!0))}function ge(e,t,n,r,o){return fg($(e,t,n,r,o,!0))}function lr(e){return e?e.__v_isVNode===!0:!1}function Cr(e,t){return t.shapeFlag&6&&Ho.has(t.type)?(e.shapeFlag&=-257,t.shapeFlag&=-513,!1):e.type===t.type&&e.key===t.key}const T_=(...e)=>M_(...e),Oa="__vInternal",pg=({key:e})=>e??null,El=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?it(e)||Ye(e)||Pe(e)?{i:Ot,r:e,k:t,f:!!n}:e:null);function p(e,t=null,n=null,r=0,o=null,s=e===ze?0:1,i=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&pg(t),ref:t&&El(t),scopeId:$a,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Ot};return l?(Ed(a,n),s&128&&e.normalize(a)):n&&(a.shapeFlag|=it(n)?8:16),a.key!==a.key&&Z("VNode created with invalid key (NaN). VNode type:",a.type),fi>0&&!i&&An&&(a.patchFlag>0||s&6)&&a.patchFlag!==32&&An.push(a),a}const $=T_;function M_(e,t=null,n=null,r=0,o=null,s=!1){if((!e||e===Jw)&&(e||Z(`Invalid vnode type when creating vnode: ${e}.`),e=bt),lr(e)){const l=ln(e,t,!0);return n&&Ed(l,n),fi>0&&!s&&An&&(l.shapeFlag&6?An[An.indexOf(e)]=l:An.push(l)),l.patchFlag|=-2,l}if(bg(e)&&(e=e.__vccOpts),t){t=kt(t);let{class:l,style:a}=t;l&&!it(l)&&(t.class=ht(l)),Ge(a)&&(Ul(a)&&!we(a)&&(a=st({},a)),t.style=xt(a))}const i=it(e)?1:Wv(e)?128:E_(e)?64:Ge(e)?4:Pe(e)?2:0;return i&4&&Ul(e)&&(e=Ae(e),Z("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),p(e,t,n,r,o,i,s,!0)}function kt(e){return e?Ul(e)||Oa in e?st({},e):e:null}function ln(e,t,n=!1){const{props:r,ref:o,patchFlag:s,children:i}=e,l=t?xo(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&pg(l),ref:t&&t.ref?n&&o?we(o)?o.concat(El(t)):[o,El(t)]:El(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s===-1&&we(i)?i.map(hg):i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ze?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ln(e.ssContent),ssFallback:e.ssFallback&&ln(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function hg(e){const t=ln(e);return we(e.children)&&(t.children=e.children.map(hg)),t}function R(e=" ",t=0){return $(is,null,e,t)}function je(e="",t=!1){return t?(T(),ge(bt,null,e)):$(bt,null,e)}function Mn(e){return e==null||typeof e=="boolean"?$(bt):we(e)?$(ze,null,e.slice()):typeof e=="object"?kr(e):$(is,null,String(e))}function kr(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ln(e)}function Ed(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(we(t))n=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),Ed(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!(Oa in t)?t._ctx=Ot:o===3&&Ot&&(Ot.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Pe(t)?(t={default:t,_ctx:Ot},n=32):(t=String(t),r&64?(n=16,t=[R(t)]):n=8);e.children=t,e.shapeFlag|=n}function xo(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=ht([t.class,r.class]));else if(o==="style")t.style=xt([t.style,r.style]);else if(Mi(o)){const s=t[o],i=r[o];i&&s!==i&&!(we(s)&&s.includes(i))&&(t[o]=s?[].concat(s,i):i)}else o!==""&&(t[o]=r[o])}return t}function wn(e,t,n,r=null){kn(e,t,7,[n,r])}const A_=rg();let R_=0;function L_(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||A_,s={uid:R_++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new pv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sg(r,o),emitsOptions:Hv(r,o),emit:null,emitted:null,propsDefaults:et,inheritAttrs:r.inheritAttrs,ctx:et,data:et,props:et,attrs:et,slots:et,refs:et,setupState:et,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx=Qw(s),s.root=t?t.root:s,s.emit=Aw.bind(null,s),e.ce&&e.ce(s),s}let Ct=null;const Qt=()=>Ct||Ot;let Od,Ro,Yf="__VUE_INSTANCE_SETTERS__";(Ro=Bl()[Yf])||(Ro=Bl()[Yf]=[]),Ro.push(e=>Ct=e),Od=e=>{Ro.length>1?Ro.forEach(t=>t(e)):Ro[0](e)};const es=e=>{Od(e),e.scope.on()},mo=()=>{Ct&&Ct.scope.off(),Od(null)},D_=Br("slot,component");function nu(e,t){const n=t.isNativeTag||iv;(D_(e)||n(e))&&Z("Do not use built-in or reserved HTML elements as component id: "+e)}function mg(e){return e.vnode.shapeFlag&4}let pi=!1;function j_(e,t=!1){pi=t;const{props:n,children:r}=e.vnode,o=mg(e);f_(e,n,o,t),__(e,r);const s=o?N_(e,t):void 0;return pi=!1,s}function N_(e,t){var n;const r=e.type;{if(r.name&&nu(r.name,e.appContext.config),r.components){const s=Object.keys(r.components);for(let i=0;i<s.length;i++)nu(s[i],e.appContext.config)}if(r.directives){const s=Object.keys(r.directives);for(let i=0;i<s.length;i++)qv(s[i])}r.compilerOptions&&F_()&&Z('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=_a(new Proxy(e.ctx,tg)),e_(e);const{setup:o}=r;if(o){const s=e.setupContext=o.length>1?gg(e):null;es(e),$o();const i=or(o,e,0,[js(e.props),s]);if(Co(),mo(),od(i)){if(i.then(mo,mo),t)return i.then(l=>{Zf(e,l,t)}).catch(l=>{xa(l,e,0)});if(e.asyncDep=i,!e.suspense){const l=(n=r.name)!=null?n:"Anonymous";Z(`Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Zf(e,i,t)}else vg(e,t)}function Zf(e,t,n){Pe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ge(t)?(lr(t)&&Z("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=t,e.setupState=Iv(t),t_(e)):t!==void 0&&Z(`setup() should return an object. Received: ${t===null?"null":typeof t}`),vg(e,n)}let ru;const F_=()=>!ru;function vg(e,t,n){const r=e.type;if(!e.render){if(!t&&ru&&!r.render){const o=r.template||$d(e).template;if(o){Xn(e,"compile");const{isCustomElement:s,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:a}=r,c=st(st({isCustomElement:s,delimiters:l},i),a);r.render=ru(o,c),Jn(e,"compile")}}e.render=r.render||on}es(e),$o(),s_(e),Co(),mo(),!r.render&&e.render===on&&!t&&(r.template?Z('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):Z("Component is missing template or render function."))}function z_(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Kl(),Ut(e,"get","$attrs"),t[n]},set(){return Z("setupContext.attrs is readonly."),!1},deleteProperty(){return Z("setupContext.attrs is readonly."),!1}}))}function B_(e){return e.slotsProxy||(e.slotsProxy=new Proxy(e.slots,{get(t,n){return Ut(e,"get","$slots"),t[n]}}))}function gg(e){return Object.freeze({get attrs(){return z_(e)},get slots(){return B_(e)},get emit(){return(n,...r)=>e.emit(n,...r)},expose:n=>{if(e.exposed&&Z("expose() should be called only once per setup()."),n!=null){let r=typeof n;r==="object"&&(we(n)?r="array":Ye(n)&&(r="ref")),r!=="object"&&Z(`expose() should be passed a plain object, received ${r}.`)}e.exposed=n||{}}})}function Ia(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Iv(_a(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ho)return ho[n](e)},has(t,n){return n in t||n in ho}}))}const H_=/(?:^|[-_])(\w)/g,V_=e=>e.replace(H_,t=>t.toUpperCase()).replace(/[-_]/g,"");function hi(e,t=!0){return Pe(e)?e.displayName||e.name:e.name||t&&e.__name}function Pa(e,t,n=!1){let r=hi(t);if(!r&&t.__file){const o=t.__file.match(/([^/\\]+)\.\w+$/);o&&(r=o[1])}if(!r&&e&&e.parent){const o=s=>{for(const i in s)if(s[i]===t)return i};r=o(e.components||e.parent.type.components)||o(e.appContext.components)}return r?V_(r):n?"App":"Anonymous"}function bg(e){return Pe(e)&&"__vccOpts"in e}const C=(e,t)=>dw(e,t,pi);function F(e,t,n){const r=arguments.length;return r===2?Ge(t)&&!we(t)?lr(t)?$(e,null,[t]):$(e,t):$(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&lr(n)&&(n=[n]),$(e,t,n))}const W_=Symbol.for("v-scx"),U_=()=>{{const e=ie(W_);return e||Z("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function Ga(e){return!!(e&&e.__v_isShallow)}function q_(){if(typeof window>"u")return;const e={style:"color:#3ba776"},t={style:"color:#0b1bc9"},n={style:"color:#b62e24"},r={style:"color:#9d288c"},o={header(d){return Ge(d)?d.__isVue?["div",e,"VueInstance"]:Ye(d)?["div",{},["span",e,u(d)],"<",l(d.value),">"]:fo(d)?["div",{},["span",e,Ga(d)?"ShallowReactive":"Reactive"],"<",l(d),`>${jr(d)?" (readonly)":""}`]:jr(d)?["div",{},["span",e,Ga(d)?"ShallowReadonly":"Readonly"],"<",l(d),">"]:null:null},hasBody(d){return d&&d.__isVue},body(d){if(d&&d.__isVue)return["div",{},...s(d.$)]}};function s(d){const f=[];d.type.props&&d.props&&f.push(i("props",Ae(d.props))),d.setupState!==et&&f.push(i("setup",d.setupState)),d.data!==et&&f.push(i("data",Ae(d.data)));const m=a(d,"computed");m&&f.push(i("computed",m));const h=a(d,"inject");return h&&f.push(i("injected",h)),f.push(["div",{},["span",{style:r.style+";opacity:0.66"},"$ (internal): "],["object",{object:d}]]),f}function i(d,f){return f=st({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},d],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(m=>["div",{},["span",r,m+": "],l(f[m],!1)])]]:["span",{}]}function l(d,f=!0){return typeof d=="number"?["span",t,d]:typeof d=="string"?["span",n,JSON.stringify(d)]:typeof d=="boolean"?["span",r,d]:Ge(d)?["object",{object:f?Ae(d):d}]:["span",n,String(d)]}function a(d,f){const m=d.type;if(Pe(m))return;const h={};for(const b in d.ctx)c(m,b,f)&&(h[b]=d.ctx[b]);return h}function c(d,f,m){const h=d[m];if(we(h)&&h.includes(f)||Ge(h)&&f in h||d.extends&&c(d.extends,f,m)||d.mixins&&d.mixins.some(b=>c(b,f,m)))return!0}function u(d){return Ga(d)?"ShallowRef":d.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(o):window.devtoolsFormatters=[o]}const Jl="3.3.4",K_="http://www.w3.org/2000/svg",Qr=typeof document<"u"?document:null,Gf=Qr&&Qr.createElement("template"),Y_={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t?Qr.createElementNS(K_,e):Qr.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>Qr.createTextNode(e),createComment:e=>Qr.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Qr.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,s){const i=n?n.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===s||!(o=o.nextSibling)););else{Gf.innerHTML=r?`<svg>${e}</svg>`:e;const l=Gf.content;if(r){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Z_(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function G_(e,t,n){const r=e.style,o=it(n);if(n&&!o){if(t&&!it(t))for(const s in t)n[s]==null&&ou(r,s,"");for(const s in n)ou(r,s,n[s])}else{const s=r.display;o?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}const X_=/[^\\];\s*$/,Xf=/\s*!important$/;function ou(e,t,n){if(we(n))n.forEach(r=>ou(e,t,r));else if(n==null&&(n=""),X_.test(n)&&Z(`Unexpected semicolon at the end of '${t}' style value: '${n}'`),t.startsWith("--"))e.setProperty(t,n);else{const r=J_(e,t);Xf.test(n)?e.setProperty(ir(r),n.replace(Xf,""),"important"):e[r]=n}}const Jf=["Webkit","Moz","ms"],Xa={};function J_(e,t){const n=Xa[t];if(n)return n;let r=Wn(t);if(r!=="filter"&&r in e)return Xa[t]=r;r=wo(r);for(let o=0;o<Jf.length;o++){const s=Jf[o]+r;if(s in e)return Xa[t]=s}return t}const Qf="http://www.w3.org/1999/xlink";function Q_(e,t,n,r,o){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Qf,t.slice(6,t.length)):e.setAttributeNS(Qf,t,n);else{const s=Ey(t);n==null||s&&!dv(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function ex(e,t,n,r,o,s,i){if(t==="innerHTML"||t==="textContent"){r&&i(r,o,s),e[t]=n??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){e._value=n;const c=l==="OPTION"?e.getAttribute("value"):e.value,u=n??"";c!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=dv(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch(c){a||Z(`Failed setting prop "${t}" on <${l.toLowerCase()}>: value ${n} is invalid.`,c)}a&&e.removeAttribute(t)}function tx(e,t,n,r){e.addEventListener(t,n,r)}function nx(e,t,n,r){e.removeEventListener(t,n,r)}function rx(e,t,n,r,o=null){const s=e._vei||(e._vei={}),i=s[t];if(r&&i)i.value=r;else{const[l,a]=ox(t);if(r){const c=s[t]=lx(r,o);tx(e,l,c,a)}else i&&(nx(e,l,i,a),s[t]=void 0)}}const ep=/(?:Once|Passive|Capture)$/;function ox(e){let t;if(ep.test(e)){t={};let r;for(;r=e.match(ep);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ir(e.slice(2)),t]}let Ja=0;const sx=Promise.resolve(),ix=()=>Ja||(sx.then(()=>Ja=0),Ja=Date.now());function lx(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;kn(ax(r,n.value),t,5,[r])};return n.value=e,n.attached=ix(),n}function ax(e,t){if(we(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>o=>!o._stopped&&r&&r(o))}else return t}const tp=/^on[a-z]/,cx=(e,t,n,r,o=!1,s,i,l,a)=>{t==="class"?Z_(e,r,o):t==="style"?G_(e,n,r):Mi(t)?Fl(t)||rx(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ux(e,t,r,o))?ex(e,t,r,s,i,l,a):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Q_(e,t,r,o))};function ux(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&tp.test(t)&&Pe(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||tp.test(t)&&it(n)?!1:t in e}const gr="transition",ys="animation",sr=(e,{slots:t})=>F(Ww,wg(e),t);sr.displayName="Transition";const yg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},dx=sr.props=st({},Yv,yg),Kr=(e,t=[])=>{we(e)?e.forEach(n=>n(...t)):e&&e(...t)},np=e=>e?we(e)?e.some(t=>t.length>1):e.length>1:!1;function wg(e){const t={};for(const B in e)B in yg||(t[B]=e[B]);if(e.css===!1)return t;const{name:n="v",type:r,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=s,appearActiveClass:c=i,appearToClass:u=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,h=fx(o),b=h&&h[0],y=h&&h[1],{onBeforeEnter:v,onEnter:x,onEnterCancelled:_,onLeave:E,onLeaveCancelled:I,onBeforeAppear:P=v,onAppear:S=x,onAppearCancelled:k=_}=t,M=(B,te,V)=>{_r(B,te?u:l),_r(B,te?c:i),V&&V()},N=(B,te)=>{B._isLeaving=!1,_r(B,d),_r(B,m),_r(B,f),te&&te()},G=B=>(te,V)=>{const ne=B?S:x,ve=()=>M(te,B,V);Kr(ne,[te,ve]),rp(()=>{_r(te,B?a:s),Qn(te,B?u:l),np(ne)||op(te,r,b,ve)})};return st(t,{onBeforeEnter(B){Kr(v,[B]),Qn(B,s),Qn(B,i)},onBeforeAppear(B){Kr(P,[B]),Qn(B,a),Qn(B,c)},onEnter:G(!1),onAppear:G(!0),onLeave(B,te){B._isLeaving=!0;const V=()=>N(B,te);Qn(B,d),xg(),Qn(B,f),rp(()=>{B._isLeaving&&(_r(B,d),Qn(B,m),np(E)||op(B,r,y,V))}),Kr(E,[B,V])},onEnterCancelled(B){M(B,!1),Kr(_,[B])},onAppearCancelled(B){M(B,!0),Kr(k,[B])},onLeaveCancelled(B){N(B),Kr(I,[B])}})}function fx(e){if(e==null)return null;if(Ge(e))return[Qa(e.enter),Qa(e.leave)];{const t=Qa(e);return[t,t]}}function Qa(e){const t=by(e);return vw(t,"<transition> explicit duration"),t}function Qn(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function _r(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function rp(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let px=0;function op(e,t,n,r){const o=e._endId=++px,s=()=>{o===e._endId&&r()};if(n)return setTimeout(s,n);const{type:i,timeout:l,propCount:a}=_g(e,t);if(!i)return r();const c=i+"end";let u=0;const d=()=>{e.removeEventListener(c,f),s()},f=m=>{m.target===e&&++u>=a&&d()};setTimeout(()=>{u<a&&d()},l+1),e.addEventListener(c,f)}function _g(e,t){const n=window.getComputedStyle(e),r=h=>(n[h]||"").split(", "),o=r(`${gr}Delay`),s=r(`${gr}Duration`),i=sp(o,s),l=r(`${ys}Delay`),a=r(`${ys}Duration`),c=sp(l,a);let u=null,d=0,f=0;t===gr?i>0&&(u=gr,d=i,f=s.length):t===ys?c>0&&(u=ys,d=c,f=a.length):(d=Math.max(i,c),u=d>0?i>c?gr:ys:null,f=u?u===gr?s.length:a.length:0);const m=u===gr&&/\b(transform|all)(,|$)/.test(r(`${gr}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:m}}function sp(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>ip(n)+ip(e[r])))}function ip(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function xg(){return document.body.offsetHeight}const kg=new WeakMap,Sg=new WeakMap,$g={name:"TransitionGroup",props:st({},dx,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Qt(),r=Kv();let o,s;return Di(()=>{if(!o.length)return;const i=e.moveClass||`${e.name||"v"}-move`;if(!yx(o[0].el,n.vnode.el,i))return;o.forEach(vx),o.forEach(gx);const l=o.filter(bx);xg(),l.forEach(a=>{const c=a.el,u=c.style;Qn(c,i),u.transform=u.webkitTransform=u.transitionDuration="";const d=c._moveCb=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",d),c._moveCb=null,_r(c,i))};c.addEventListener("transitionend",d)})}),()=>{const i=Ae(e),l=wg(i);let a=i.tag||ze;o=s,s=t.default?wd(t.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null?Qo(u,ui(u,l,r,n)):Z("<TransitionGroup> children must be keyed.")}if(o)for(let c=0;c<o.length;c++){const u=o[c];Qo(u,ui(u,l,r,n)),kg.set(u,u.el.getBoundingClientRect())}return $(a,null,s)}}},hx=e=>delete e.mode;$g.props;const mx=$g;function vx(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function gx(e){Sg.set(e,e.el.getBoundingClientRect())}function bx(e){const t=kg.get(e),n=Sg.get(e),r=t.left-n.left,o=t.top-n.top;if(r||o){const s=e.el.style;return s.transform=s.webkitTransform=`translate(${r}px,${o}px)`,s.transitionDuration="0s",e}}function yx(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach(i=>{i.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(i=>i&&r.classList.add(i)),r.style.display="none";const o=t.nodeType===1?t:t.parentNode;o.appendChild(r);const{hasTransform:s}=_g(r);return o.removeChild(r),s}const wx=["ctrl","shift","alt","meta"],_x={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>wx.some(n=>e[`${n}Key`]&&!t.includes(n))},xx=(e,t)=>(n,...r)=>{for(let o=0;o<t.length;o++){const s=_x[t[o]];if(s&&s(n,t))return}return e(n,...r)},kx={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},el=(e,t)=>n=>{if(!("key"in n))return;const r=ir(n.key);if(t.some(o=>o===r||kx[o]===r))return e(n)},ji={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):ws(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),ws(e,!0),r.enter(e)):r.leave(e,()=>{ws(e,!1)}):ws(e,t))},beforeUnmount(e,{value:t}){ws(e,t)}};function ws(e,t){e.style.display=t?e._vod:"none"}const Sx=st({patchProp:cx},Y_);let lp;function $x(){return lp||(lp=S_(Sx))}const Cx=(...e)=>{const t=$x().createApp(...e);Ex(t),Ox(t);const{mount:n}=t;return t.mount=r=>{const o=Ix(r);if(!o)return;const s=t._component;!Pe(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.innerHTML="";const i=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function Ex(e){Object.defineProperty(e.config,"isNativeTag",{value:t=>uv(t)||$y(t),writable:!1})}function Ox(e){{const t=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return t},set(){Z("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=e.config.compilerOptions,r='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(e.config,"compilerOptions",{get(){return Z(r),n},set(){Z(r)}})}}function Ix(e){if(it(e)){const t=document.querySelector(e);return t||Z(`Failed to mount app: mount target selector "${e}" returned null.`),t}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&Z('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function Px(){q_()}Px();function su(e,t={},n){for(const r in e){const o=e[r],s=n?`${n}:${r}`:r;typeof o=="object"&&o!==null?su(o,t,s):typeof o=="function"&&(t[s]=o)}return t}const Tx={run:e=>e()},Mx=()=>Tx,Cg=typeof console.createTask<"u"?console.createTask:Mx;function Ax(e,t){const n=t.shift(),r=Cg(n);return e.reduce((o,s)=>o.then(()=>r.run(()=>s(...t))),Promise.resolve())}function Rx(e,t){const n=t.shift(),r=Cg(n);return Promise.all(e.map(o=>r.run(()=>o(...t))))}function ec(e,t){for(const n of[...e])n(t)}class Lx{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,r={}){if(!t||typeof n!="function")return()=>{};const o=t;let s;for(;this._deprecatedHooks[t];)s=this._deprecatedHooks[t],t=s.to;if(s&&!r.allowDeprecated){let i=s.message;i||(i=`${o} hook has been deprecated`+(s.to?`, please use ${s.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(i)||(console.warn(i),this._deprecatedMessages.add(i))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let r,o=(...s)=>(typeof r=="function"&&r(),r=void 0,o=void 0,n(...s));return r=this.hook(t,o),r}removeHook(t,n){if(this._hooks[t]){const r=this._hooks[t].indexOf(n);r!==-1&&this._hooks[t].splice(r,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const r=this._hooks[t]||[];delete this._hooks[t];for(const o of r)this.hook(t,o)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=su(t),r=Object.keys(n).map(o=>this.hook(o,n[o]));return()=>{for(const o of r.splice(0,r.length))o()}}removeHooks(t){const n=su(t);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...n){return n.unshift(t),this.callHookWith(Ax,t,...n)}callHookParallel(t,...n){return n.unshift(t),this.callHookWith(Rx,t,...n)}callHookWith(t,n,...r){const o=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&ec(this._before,o);const s=t(n in this._hooks?[...this._hooks[n]]:[],r);return s instanceof Promise?s.finally(()=>{this._after&&o&&ec(this._after,o)}):(this._after&&o&&ec(this._after,o),s)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}}function Dx(){return new Lx}function jx(e){return Array.isArray(e)?e:[e]}const Eg=["title","script","style","noscript"],Og=["base","meta","link","style","script","noscript"],Nx=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Fx=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],zx=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Ig(e){let t=9;for(let n=0;n<e.length;)t=Math.imul(t^e.charCodeAt(n++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function iu(e){return Ig(`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([t,n])=>`${t}:${String(n)}`).join(",")}`)}function Bx(e){let t=9;for(const n of e)for(let r=0;r<n.length;)t=Math.imul(t^n.charCodeAt(r++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Pg(e,t){const{props:n,tag:r}=e;if(Fx.includes(r))return r;if(r==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const o=["id"];r==="meta"&&o.push("name","property","http-equiv");for(const s of o)if(typeof n[s]<"u"){const i=String(n[s]);return t&&!t(i)?!1:`${r}:${s}:${i}`}return!1}function ap(e,t){return e==null?t||null:typeof e=="function"?e(t):e}function tl(e,t=!1,n){const{tag:r,$el:o}=e;o&&(Object.entries(r.props).forEach(([s,i])=>{i=String(i);const l=`attr:${s}`;if(s==="class"){if(!i)return;for(const a of i.split(" ")){const c=`${l}:${a}`;n&&n(e,c,()=>o.classList.remove(a)),o.classList.contains(a)||o.classList.add(a)}return}n&&!s.startsWith("data-h-")&&n(e,l,()=>o.removeAttribute(s)),(t||o.getAttribute(s)!==i)&&o.setAttribute(s,i)}),Eg.includes(r.tag)&&(r.textContent&&r.textContent!==o.textContent?o.textContent=r.textContent:r.innerHTML&&r.innerHTML!==o.innerHTML&&(o.innerHTML=r.innerHTML)))}let _s=!1;async function Tg(e,t={}){var f,m;const n={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const r=t.document||e.resolvedOptions.document||window.document,o=(await e.resolveTags()).map(l);if(e.resolvedOptions.experimentalHashHydration&&(_s=_s||e._hash||!1,_s)){const h=Bx(o.map(b=>b.tag._h));if(_s===h)return;_s=h}const s=e._popSideEffectQueue();e.headEntries().map(h=>h._sde).forEach(h=>{Object.entries(h).forEach(([b,y])=>{s[b]=y})});const i=(h,b,y)=>{b=`${h.renderId}:${b}`,h.entry&&(h.entry._sde[b]=y),delete s[b]};function l(h){const b=e.headEntries().find(v=>v._i===h._e),y={renderId:h._d||iu(h),$el:null,shouldRender:!0,tag:h,entry:b,markSideEffect:(v,x)=>i(y,v,x)};return y}const a=[],c={body:[],head:[]},u=h=>{e._elMap[h.renderId]=h.$el,a.push(h),i(h,"el",()=>{var b;(b=h.$el)==null||b.remove(),delete e._elMap[h.renderId]})};for(const h of o){if(await e.hooks.callHook("dom:beforeRenderTag",h),!h.shouldRender)continue;const{tag:b}=h;if(b.tag==="title"){r.title=b.textContent||"",a.push(h);continue}if(b.tag==="htmlAttrs"||b.tag==="bodyAttrs"){h.$el=r[b.tag==="htmlAttrs"?"documentElement":"body"],tl(h,!1,i),a.push(h);continue}if(h.$el=e._elMap[h.renderId],!h.$el&&b.key&&(h.$el=r.querySelector(`${(f=b.tagPosition)!=null&&f.startsWith("body")?"body":"head"} > ${b.tag}[data-h-${b._h}]`)),h.$el){h.tag._d&&tl(h),u(h);continue}c[(m=b.tagPosition)!=null&&m.startsWith("body")?"body":"head"].push(h)}const d={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(c).forEach(([h,b])=>{var v;if(!b.length)return;const y=(v=r==null?void 0:r[h])==null?void 0:v.children;if(y){for(const x of[...y].reverse()){const _=x.tagName.toLowerCase();if(!Og.includes(_))continue;const E=x.getAttributeNames().reduce((k,M)=>({...k,[M]:x.getAttribute(M)}),{}),I={tag:_,props:E};x.innerHTML&&(I.innerHTML=x.innerHTML);const P=iu(I);let S=b.findIndex(k=>(k==null?void 0:k.renderId)===P);if(S===-1){const k=Pg(I);S=b.findIndex(M=>(M==null?void 0:M.tag._d)&&M.tag._d===k)}if(S!==-1){const k=b[S];k.$el=x,tl(k),u(k),delete b[S]}}b.forEach(x=>{const _=x.tag.tagPosition||"head";d[_]=d[_]||r.createDocumentFragment(),x.$el||(x.$el=r.createElement(x.tag.tag),tl(x,!0)),d[_].appendChild(x.$el),u(x)})}}),d.head&&r.head.appendChild(d.head),d.bodyOpen&&r.body.insertBefore(d.bodyOpen,r.body.firstChild),d.bodyClose&&r.body.appendChild(d.bodyClose);for(const h of a)await e.hooks.callHook("dom:renderTag",h);Object.values(s).forEach(h=>h())}let tc=null;async function Mg(e,t={}){function n(){return tc=null,Tg(e,t)}const r=t.delayFn||(o=>setTimeout(o,10));return tc=tc||new Promise(o=>r(()=>o(n())))}function Hx(e){return{hooks:{"entries:updated":function(t){if(typeof(e==null?void 0:e.document)>"u"&&typeof window>"u")return;let n=e==null?void 0:e.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),Mg(t,{document:(e==null?void 0:e.document)||window.document,delayFn:n})}}}}function Vx(e){var t;return((t=e==null?void 0:e.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:t.getAttribute("content"))||!1}const cp={critical:2,high:9,low:12,base:-1,title:1,meta:10};function up(e){if(typeof e.tagPriority=="number")return e.tagPriority;if(e.tag==="meta"){if(e.props.charset)return-2;if(e.props["http-equiv"]==="content-security-policy")return 0}const t=e.tagPriority||e.tag;return t in cp?cp[t]:10}const Wx=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Ux(){return{hooks:{"tags:resolve":e=>{const t=n=>{var r;return(r=e.tags.find(o=>o._d===n))==null?void 0:r._p};for(const{prefix:n,offset:r}of Wx)for(const o of e.tags.filter(s=>typeof s.tagPriority=="string"&&s.tagPriority.startsWith(n))){const s=t(o.tagPriority.replace(n,""));typeof s<"u"&&(o._p=s+r)}e.tags.sort((n,r)=>n._p-r._p).sort((n,r)=>up(n)-up(r))}}}}function qx(){return{hooks:{"tags:resolve":e=>{const{tags:t}=e;let n=t.findIndex(o=>o.tag==="titleTemplate");const r=t.findIndex(o=>o.tag==="title");if(r!==-1&&n!==-1){const o=ap(t[n].textContent,t[r].textContent);o!==null?t[r].textContent=o||t[r].textContent:delete t[r]}else if(n!==-1){const o=ap(t[n].textContent);o!==null&&(t[n].textContent=o,t[n].tag="title",n=-1)}n!==-1&&delete t[n],e.tags=t.filter(Boolean)}}}}function Kx(){return{hooks:{"tag:normalise":function({tag:e}){typeof e.props.body<"u"&&(e.tagPosition="bodyClose",delete e.props.body)}}}}const Yx=["link","style","script","noscript"];function Zx(){return{hooks:{"tag:normalise":({tag:e,resolvedOptions:t})=>{t.experimentalHashHydration===!0&&(e._h=iu(e)),e.key&&Yx.includes(e.tag)&&(e._h=Ig(e.key),e.props[`data-h-${e._h}`]="")}}}}const dp=["script","link","bodyAttrs"];function Gx(){const e=(t,n)=>{const r={},o={};Object.entries(n.props).forEach(([i,l])=>{i.startsWith("on")&&typeof l=="function"?o[i]=l:r[i]=l});let s;return t==="dom"&&n.tag==="script"&&typeof r.src=="string"&&typeof o.onload<"u"&&(s=r.src,delete r.src),{props:r,eventHandlers:o,delayedSrc:s}};return{hooks:{"ssr:render":function(t){t.tags=t.tags.map(n=>(!dp.includes(n.tag)||!Object.entries(n.props).find(([r,o])=>r.startsWith("on")&&typeof o=="function")||(n.props=e("ssr",n).props),n))},"dom:beforeRenderTag":function(t){if(!dp.includes(t.tag.tag)||!Object.entries(t.tag.props).find(([s,i])=>s.startsWith("on")&&typeof i=="function"))return;const{props:n,eventHandlers:r,delayedSrc:o}=e("dom",t.tag);Object.keys(r).length&&(t.tag.props=n,t.tag._eventHandlers=r,t.tag._delayedSrc=o)},"dom:renderTag":function(t){const n=t.$el;if(!t.tag._eventHandlers||!n)return;const r=t.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(t.tag._eventHandlers).forEach(([o,s])=>{const i=`${t.tag._d||t.tag._p}:${o}`,l=o.slice(2).toLowerCase(),a=`data-h-${l}`;if(t.markSideEffect(i,()=>{}),n.hasAttribute(a))return;const c=s;n.setAttribute(a,""),r.addEventListener(l,c),t.entry&&(t.entry._sde[i]=()=>{r.removeEventListener(l,c),n.removeAttribute(a)})}),t.tag._delayedSrc&&n.setAttribute("src",t.tag._delayedSrc)}}}}const Xx=["templateParams","htmlAttrs","bodyAttrs"];function Jx(){return{hooks:{"tag:normalise":function({tag:e}){["hid","vmid","key"].forEach(r=>{e.props[r]&&(e.key=e.props[r],delete e.props[r])});const n=Pg(e)||(e.key?`${e.tag}:${e.key}`:!1);n&&(e._d=n)},"tags:resolve":function(e){const t={};e.tags.forEach(r=>{const o=(r.key?`${r.tag}:${r.key}`:r._d)||r._p,s=t[o];if(s){let l=r==null?void 0:r.tagDuplicateStrategy;if(!l&&Xx.includes(r.tag)&&(l="merge"),l==="merge"){const a=s.props;["class","style"].forEach(c=>{r.props[c]&&a[c]&&(c==="style"&&!a[c].endsWith(";")&&(a[c]+=";"),r.props[c]=`${a[c]} ${r.props[c]}`)}),t[o].props={...a,...r.props};return}else if(r._e===s._e){s._duped=s._duped||[],r._d=`${s._d}:${s._duped.length+1}`,s._duped.push(r);return}}const i=Object.keys(r.props).length+(r.innerHTML?1:0)+(r.textContent?1:0);if(Og.includes(r.tag)&&i===0){delete t[o];return}t[o]=r});const n=[];Object.values(t).forEach(r=>{const o=r._duped;delete r._duped,n.push(r),o&&n.push(...o)}),e.tags=n}}}}function nl(e,t){function n(s){if(["s","pageTitle"].includes(s))return t.pageTitle;let i;return s.includes(".")?i=s.split(".").reduce((l,a)=>l&&l[a]||void 0,t):i=t[s],typeof i<"u"?i||"":!1}let r=e;try{r=decodeURI(e)}catch{}return(r.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(s=>{const i=n(s.slice(1));typeof i=="string"&&(e=e.replace(new RegExp(`\\${s}(\\W|$)`,"g"),`${i}$1`).trim())}),t.separator&&(e.endsWith(t.separator)&&(e=e.slice(0,-t.separator.length).trim()),e.startsWith(t.separator)&&(e=e.slice(t.separator.length).trim()),e=e.replace(new RegExp(`\\${t.separator}\\s*\\${t.separator}`,"g"),t.separator)),e}function Qx(){return{hooks:{"tags:resolve":e=>{var s;const{tags:t}=e,n=(s=t.find(i=>i.tag==="title"))==null?void 0:s.textContent,r=t.findIndex(i=>i.tag==="templateParams"),o=r!==-1?t[r].props:{};o.pageTitle=o.pageTitle||n||"";for(const i of t)if(["titleTemplate","title"].includes(i.tag)&&typeof i.textContent=="string")i.textContent=nl(i.textContent,o);else if(i.tag==="meta"&&typeof i.props.content=="string")i.props.content=nl(i.props.content,o);else if(i.tag==="link"&&typeof i.props.href=="string")i.props.href=nl(i.props.href,o);else if(i.tag==="script"&&["application/json","application/ld+json"].includes(i.props.type)&&typeof i.innerHTML=="string")try{i.innerHTML=JSON.stringify(JSON.parse(i.innerHTML),(l,a)=>typeof a=="string"?nl(a,o):a)}catch{}e.tags=t.filter(i=>i.tag!=="templateParams")}}}}const ek=typeof window<"u";let Ag;function tk(e){return Ag=e}function nk(){return Ag}async function rk(e,t){const n={tag:e,props:{}};return e==="templateParams"?(n.props=t,n):["title","titleTemplate"].includes(e)?(n.textContent=t instanceof Promise?await t:t,n):typeof t=="string"?["script","noscript","style"].includes(e)?(e==="script"&&(/^(https?:)?\/\//.test(t)||t.startsWith("/"))?n.props.src=t:n.innerHTML=t,n):!1:(n.props=await sk(e,{...t}),n.props.children&&(n.props.innerHTML=n.props.children),delete n.props.children,Object.keys(n.props).filter(r=>zx.includes(r)).forEach(r=>{(!["innerHTML","textContent"].includes(r)||Eg.includes(n.tag))&&(n[r]=n.props[r]),delete n.props[r]}),["innerHTML","textContent"].forEach(r=>{if(n.tag==="script"&&typeof n[r]=="string"&&["application/ld+json","application/json"].includes(n.props.type))try{n[r]=JSON.parse(n[r])}catch{n[r]=""}typeof n[r]=="object"&&(n[r]=JSON.stringify(n[r]))}),n.props.class&&(n.props.class=ok(n.props.class)),n.props.content&&Array.isArray(n.props.content)?n.props.content.map(r=>({...n,props:{...n.props,content:r}})):n)}function ok(e){return typeof e=="object"&&!Array.isArray(e)&&(e=Object.keys(e).filter(t=>e[t])),(Array.isArray(e)?e.join(" "):e).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")}async function sk(e,t){for(const n of Object.keys(t)){const r=n.startsWith("data-");t[n]instanceof Promise&&(t[n]=await t[n]),String(t[n])==="true"?t[n]=r?"true":"":String(t[n])==="false"&&(r?t[n]="false":delete t[n])}return t}const ik=10;async function lk(e){const t=[];return Object.entries(e.resolvedInput).filter(([n,r])=>typeof r<"u"&&Nx.includes(n)).forEach(([n,r])=>{const o=jx(r);t.push(...o.map(s=>rk(n,s)).flat())}),(await Promise.all(t)).flat().filter(Boolean).map((n,r)=>(n._e=e._i,n._p=(e._i<<ik)+r,n))}function ak(){return[Jx(),Ux(),Qx(),qx(),Zx(),Gx(),Kx()]}function ck(e={}){return[Hx({document:e==null?void 0:e.document,delayFn:e==null?void 0:e.domDelayFn})]}function uk(e={}){const t=dk({...e,plugins:[...ck(e),...(e==null?void 0:e.plugins)||[]]});return e.experimentalHashHydration&&t.resolvedOptions.document&&(t._hash=Vx(t.resolvedOptions.document)),tk(t),t}function dk(e={}){let t=[],n={},r=0;const o=Dx();e!=null&&e.hooks&&o.addHooks(e.hooks),e.plugins=[...ak(),...(e==null?void 0:e.plugins)||[]],e.plugins.forEach(l=>l.hooks&&o.addHooks(l.hooks)),e.document=e.document||(ek?document:void 0);const s=()=>o.callHook("entries:updated",i),i={resolvedOptions:e,headEntries(){return t},get hooks(){return o},use(l){l.hooks&&o.addHooks(l.hooks)},push(l,a){const c={_i:r++,input:l,_sde:{}};return a!=null&&a.mode&&(c._m=a==null?void 0:a.mode),a!=null&&a.transform&&(c._t=a==null?void 0:a.transform),t.push(c),s(),{dispose(){t=t.filter(u=>u._i!==c._i?!0:(n={...n,...u._sde||{}},u._sde={},s(),!1))},patch(u){t=t.map(d=>(d._i===c._i&&(c.input=d.input=u,s()),d))}}},async resolveTags(){const l={tags:[],entries:[...t]};await o.callHook("entries:resolve",l);for(const a of l.entries){const c=a._t||(u=>u);if(a.resolvedInput=c(a.resolvedInput||a.input),a.resolvedInput)for(const u of await lk(a)){const d={tag:u,entry:a,resolvedOptions:i.resolvedOptions};await o.callHook("tag:normalise",d),l.tags.push(d.tag)}}return await o.callHook("tags:resolve",l),l.tags},_popSideEffectQueue(){const l={...n};return n={},l},_elMap:{}};return i.hooks.callHook("init",i),i}function fk(e){return typeof e=="function"?e():D(e)}function Ql(e,t=""){if(e instanceof Promise)return e;const n=fk(e);return!e||!n?n:Array.isArray(n)?n.map(r=>Ql(r,t)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([r,o])=>r==="titleTemplate"||r.startsWith("on")?[r,D(o)]:[r,Ql(o,r)])):n}const pk=Jl.startsWith("3"),hk=typeof window<"u",Rg="usehead";function Id(){return Qt()&&ie(Rg)||nk()}function mk(e){return{install(n){pk&&(n.config.globalProperties.$unhead=e,n.config.globalProperties.$head=e,n.provide(Rg,e))}}.install}function vk(e={}){const t=uk({...e,domDelayFn:n=>setTimeout(()=>Et(()=>n()),10),plugins:[gk(),...(e==null?void 0:e.plugins)||[]]});return t.install=mk(t),t}function gk(){return{hooks:{"entries:resolve":function(e){for(const t of e.entries)t.resolvedInput=Ql(t.input)}}}}function bk(e,t={}){const n=Id(),r=z(!1),o=z({});Jt(()=>{o.value=r.value?{}:Ql(e)});const s=n.push(o.value,t);return be(o,l=>{s.patch(l)}),Qt()&&(jt(()=>{s.dispose()}),xd(()=>{r.value=!0}),_d(()=>{r.value=!1})),s}function yk(e,t={}){return Id().push(e,t)}function Lg(e,t={}){var r;const n=Id();if(n){const o=hk||!!((r=n.resolvedOptions)!=null&&r.document);return t.mode==="server"&&o||t.mode==="client"&&!o?void 0:o?bk(e,t):yk(e,t)}}function wk(e,t){const n=vk(t||{}),r={unhead:n,install(o){Jl.startsWith("3")&&(o.config.globalProperties.$head=n,o.provide("usehead",n))},use(o){n.use(o)},resolveTags(){return n.resolveTags()},headEntries(){return n.headEntries()},headTags(){return n.resolveTags()},push(o,s){return n.push(o,s)},addEntry(o,s){return n.push(o,s)},addHeadObjs(o,s){return n.push(o,s)},addReactiveEntry(o,s){const i=Lg(o,s);return typeof i<"u"?i.dispose:()=>{}},removeHeadObjs(){},updateDOM(o,s){s?Tg(n,{document:o}):Mg(n,{delayFn:i=>setTimeout(()=>i(),50),document:o})},internalHooks:n.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return n.addHeadObjs=r.addHeadObjs,n.updateDOM=r.updateDOM,n.hooks.hook("dom:beforeRender",o=>{for(const s of r.hooks["before:dom"])s()===!1&&(o.shouldRender=!1)}),e&&r.addHeadObjs(e),r}const Ol=Symbol("v-click-clicks"),Vo=Symbol("v-click-clicks-elements"),lu=Symbol("v-click-clicks-order-map"),Il=Symbol("v-click-clicks-disabled"),Dg=Symbol("slidev-slide-scale"),$e=Symbol("slidev-slidev-context"),_k=Symbol("slidev-route"),xk=Symbol("slidev-slide-context"),Lo="slidev-vclick-target",nc="slidev-vclick-hidden",kk="slidev-vclick-fade",rc="slidev-vclick-hidden-explicitly",xs="slidev-vclick-current",rl="slidev-vclick-prior",Sk=["localhost","127.0.0.1"];let $k=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,n)=>(n&=63,n<36?t+=n.toString(36):n<62?t+=(n-26).toString(36).toUpperCase():n>62?t+="-":t+="_",t),"");function fp(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function Ck(e){return e!=null}function Ek(e,t){return Object.fromEntries(Object.entries(e).map(([n,r])=>t(n,r)).filter(Ck))}const Bs={theme:"default",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:!1,highlighter:"prism",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{}},Ze=Bs,Pr=Ze.aspectRatio??16/9,Tr=Ze.canvasWidth??980,Pd=Math.ceil(Tr/Pr),Td=C(()=>Ek(Ze.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function jg(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function En(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const Eo=ct({page:0,clicks:0});let Ok=[],Ik=[];En(Eo,"$syncUp",!0);En(Eo,"$syncDown",!0);En(Eo,"$paused",!1);En(Eo,"$onSet",e=>Ok.push(e));En(Eo,"$onPatch",e=>Ik.push(e));jg();En(Eo,"$patch",async()=>!1);function Ng(e,t,n=!1){const r=[];let o=!1,s=!1,i,l;const a=ct(t);function c(m){r.push(m)}function u(m,h){a[m]!==h&&(clearTimeout(i),o=!0,a[m]=h,i=setTimeout(()=>o=!1,0))}function d(m){o||(clearTimeout(l),s=!0,Object.entries(m).forEach(([h,b])=>{a[h]=b}),l=setTimeout(()=>s=!1,0))}function f(m){let h;n?n&&window.addEventListener("storage",y=>{y&&y.key===m&&y.newValue&&d(JSON.parse(y.newValue))}):(h=new BroadcastChannel(m),h.addEventListener("message",y=>d(y.data)));function b(){!n&&h&&!s?h.postMessage(Ae(a)):n&&!s&&window.localStorage.setItem(m,JSON.stringify(a)),o||r.forEach(y=>y(a))}if(be(a,b,{deep:!0,flush:"sync"}),n){const y=window.localStorage.getItem(m);y&&d(JSON.parse(y))}}return{init:f,onPatch:c,patch:u,state:a}}const{init:Pk,onPatch:Tk,patch:ks,state:oc}=Ng(Eo,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),Oo=ct({});let Mk=[],Ak=[];En(Oo,"$syncUp",!0);En(Oo,"$syncDown",!0);En(Oo,"$paused",!1);En(Oo,"$onSet",e=>Mk.push(e));En(Oo,"$onPatch",e=>Ak.push(e));jg();En(Oo,"$patch",async()=>!1);const{init:Rk,onPatch:Lk,patch:Fg,state:ea}=Ng(Oo,{},!1),Dk="modulepreload",jk=function(e){return"/docker-slidev/"+e},pp={},Mr=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=jk(s),s in pp)return;pp[s]=!0;const i=s.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(!!r)for(let u=o.length-1;u>=0;u--){const d=o[u];if(d.href===s&&(!i||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":Dk,i||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),i)return new Promise((u,d)=>{c.addEventListener("load",u),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())};function Nk(e,t){let n,r,o;const s=z(!0),i=()=>{s.value=!0,o()};be(e,i,{flush:"sync"});const l=typeof t=="function"?t:t.get,a=typeof t=="function"?void 0:t.set,c=hd((u,d)=>(r=u,o=d,{get(){return s.value&&(n=l(),s.value=!1),r(),n},set(f){a==null||a(f)}}));return Object.isExtensible(c)&&(c.trigger=i),c}function ar(e){return ld()?(hv(e),!0):!1}function At(e){return typeof e=="function"?e():D(e)}function Fk(e){if(!Ye(e))return ct(e);const t=new Proxy({},{get(n,r,o){return D(Reflect.get(e.value,r,o))},set(n,r,o){return Ye(e.value[r])&&!Ye(o)?e.value[r].value=o:e.value[r]=o,!0},deleteProperty(n,r){return Reflect.deleteProperty(e.value,r)},has(n,r){return Reflect.has(e.value,r)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return ct(t)}const cr=typeof window<"u",zk=e=>typeof e<"u",Bk=e=>e!=null,Hk=Object.prototype.toString,au=e=>Hk.call(e)==="[object Object]",cu=()=>+Date.now(),vo=()=>{},Vk=Wk();function Wk(){var e;return cr&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function Uk(e,t){function n(...r){return new Promise((o,s)=>{Promise.resolve(e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})).then(o).catch(s)})}return n}const zg=e=>e();function qk(e=zg){const t=z(!0);function n(){t.value=!1}function r(){t.value=!0}const o=(...s)=>{t.value&&e(...s)};return{isActive:fn(t),pause:n,resume:r,eventFilter:o}}function Kk(e,t){var n;if(typeof e=="number")return e+t;const r=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",o=e.slice(r.length),s=Number.parseFloat(r)+t;return Number.isNaN(s)?e:s+o}function Bg(...e){if(e.length!==1)return pn(...e);const t=e[0];return typeof t=="function"?fn(hd(()=>({get:t,set:vo}))):z(t)}var Yk=Object.defineProperty,Zk=Object.defineProperties,Gk=Object.getOwnPropertyDescriptors,hp=Object.getOwnPropertySymbols,Xk=Object.prototype.hasOwnProperty,Jk=Object.prototype.propertyIsEnumerable,mp=(e,t,n)=>t in e?Yk(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Qk=(e,t)=>{for(var n in t||(t={}))Xk.call(t,n)&&mp(e,n,t[n]);if(hp)for(var n of hp(t))Jk.call(t,n)&&mp(e,n,t[n]);return e},e2=(e,t)=>Zk(e,Gk(t));function t2(e){if(!Ye(e))return Pv(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)t[n]=hd(()=>({get(){return e.value[n]},set(r){if(Array.isArray(e.value)){const o=[...e.value];o[n]=r,e.value=o}else{const o=e2(Qk({},e.value),{[n]:r});Object.setPrototypeOf(o,e.value),e.value=o}}}));return t}function Hg(e,t=!0){Qt()?It(e):t?e():Et(e)}function n2(e){Qt()&&kd(e)}function r2(e,t=1e3,n={}){const{immediate:r=!0,immediateCallback:o=!1}=n;let s=null;const i=z(!1);function l(){s&&(clearInterval(s),s=null)}function a(){i.value=!1,l()}function c(){const u=At(t);u<=0||(i.value=!0,o&&e(),l(),s=setInterval(e,u))}if(r&&cr&&c(),Ye(t)||typeof t=="function"){const u=be(t,()=>{i.value&&cr&&c()});ar(u)}return ar(a),{isActive:i,pause:a,resume:c}}function Vg(e=!1,t={}){const{truthyValue:n=!0,falsyValue:r=!1}=t,o=Ye(e),s=z(e);function i(l){if(arguments.length)return s.value=l,s.value;{const a=At(n);return s.value=s.value===a?At(r):a,s.value}}return o?i:[s,i]}var vp=Object.getOwnPropertySymbols,o2=Object.prototype.hasOwnProperty,s2=Object.prototype.propertyIsEnumerable,i2=(e,t)=>{var n={};for(var r in e)o2.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&vp)for(var r of vp(e))t.indexOf(r)<0&&s2.call(e,r)&&(n[r]=e[r]);return n};function l2(e,t,n={}){const r=n,{eventFilter:o=zg}=r,s=i2(r,["eventFilter"]);return be(e,Uk(o,t),s)}var a2=Object.defineProperty,c2=Object.defineProperties,u2=Object.getOwnPropertyDescriptors,ta=Object.getOwnPropertySymbols,Wg=Object.prototype.hasOwnProperty,Ug=Object.prototype.propertyIsEnumerable,gp=(e,t,n)=>t in e?a2(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d2=(e,t)=>{for(var n in t||(t={}))Wg.call(t,n)&&gp(e,n,t[n]);if(ta)for(var n of ta(t))Ug.call(t,n)&&gp(e,n,t[n]);return e},f2=(e,t)=>c2(e,u2(t)),p2=(e,t)=>{var n={};for(var r in e)Wg.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&ta)for(var r of ta(e))t.indexOf(r)<0&&Ug.call(e,r)&&(n[r]=e[r]);return n};function h2(e,t,n={}){const r=n,{eventFilter:o}=r,s=p2(r,["eventFilter"]),{eventFilter:i,pause:l,resume:a,isActive:c}=qk(o);return{stop:l2(e,t,f2(d2({},s),{eventFilter:i})),pause:l,resume:a,isActive:c}}function Vt(e){var t;const n=At(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Rt=cr?window:void 0,qg=cr?window.document:void 0;function Be(...e){let t,n,r,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,o]=e,t=Rt):[t,n,r,o]=e,!t)return vo;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const s=[],i=()=>{s.forEach(u=>u()),s.length=0},l=(u,d,f,m)=>(u.addEventListener(d,f,m),()=>u.removeEventListener(d,f,m)),a=be(()=>[Vt(t),At(o)],([u,d])=>{i(),u&&s.push(...n.flatMap(f=>r.map(m=>l(u,f,m,d))))},{immediate:!0,flush:"post"}),c=()=>{a(),i()};return ar(c),c}let bp=!1;function m2(e,t,n={}){const{window:r=Rt,ignore:o=[],capture:s=!0,detectIframe:i=!1}=n;if(!r)return;Vk&&!bp&&(bp=!0,Array.from(r.document.body.children).forEach(f=>f.addEventListener("click",vo)));let l=!0;const a=f=>o.some(m=>{if(typeof m=="string")return Array.from(r.document.querySelectorAll(m)).some(h=>h===f.target||f.composedPath().includes(h));{const h=Vt(m);return h&&(f.target===h||f.composedPath().includes(h))}}),u=[Be(r,"click",f=>{const m=Vt(e);if(!(!m||m===f.target||f.composedPath().includes(m))){if(f.detail===0&&(l=!a(f)),!l){l=!0;return}t(f)}},{passive:!0,capture:s}),Be(r,"pointerdown",f=>{const m=Vt(e);m&&(l=!f.composedPath().includes(m)&&!a(f))},{passive:!0}),i&&Be(r,"blur",f=>{setTimeout(()=>{var m;const h=Vt(e);((m=r.document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(h!=null&&h.contains(r.document.activeElement))&&t(f)},0)})].filter(Boolean);return()=>u.forEach(f=>f())}function v2(e){return typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0}function g2(...e){let t,n,r={};e.length===3?(t=e[0],n=e[1],r=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,n=e[0],r=e[1]):(t=e[0],n=e[1]):(t=!0,n=e[0]);const{target:o=Rt,eventName:s="keydown",passive:i=!1,dedupe:l=!1}=r,a=v2(t);return Be(o,s,u=>{u.repeat&&At(l)||a(u)&&n(u)},i)}function b2(e={}){var t;const{window:n=Rt}=e,r=(t=e.document)!=null?t:n==null?void 0:n.document,o=Nk(()=>null,()=>r==null?void 0:r.activeElement);return n&&(Be(n,"blur",s=>{s.relatedTarget===null&&o.trigger()},!0),Be(n,"focus",o.trigger,!0)),o}function y2(){const e=z(!1);return Qt()&&It(()=>{e.value=!0}),e}function Ta(e){const t=y2();return C(()=>(t.value,!!e()))}function w2(e,t={}){const{immediate:n=!0,window:r=Rt}=t,o=z(!1);let s=0,i=null;function l(u){if(!o.value||!r)return;const d=u-s;e({delta:d,timestamp:u}),s=u,i=r.requestAnimationFrame(l)}function a(){!o.value&&r&&(o.value=!0,i=r.requestAnimationFrame(l))}function c(){o.value=!1,i!=null&&r&&(r.cancelAnimationFrame(i),i=null)}return n&&a(),ar(c),{isActive:fn(o),pause:c,resume:a}}function eo(e,t={}){const{window:n=Rt}=t,r=Ta(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let o;const s=z(!1),i=()=>{o&&("removeEventListener"in o?o.removeEventListener("change",l):o.removeListener(l))},l=()=>{r.value&&(i(),o=n.matchMedia(Bg(e).value),s.value=!!(o!=null&&o.matches),o&&("addEventListener"in o?o.addEventListener("change",l):o.addListener(l)))};return Jt(l),ar(()=>i()),s}const _2={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function x2(e,t={}){function n(l,a){let c=e[l];return a!=null&&(c=Kk(c,a)),typeof c=="number"&&(c=`${c}px`),c}const{window:r=Rt}=t;function o(l){return r?r.matchMedia(l).matches:!1}const s=l=>eo(`(min-width: ${n(l)})`,t),i=Object.keys(e).reduce((l,a)=>(Object.defineProperty(l,a,{get:()=>s(a),enumerable:!0,configurable:!0}),l),{});return Object.assign(i,{greater(l){return eo(`(min-width: ${n(l,.1)})`,t)},greaterOrEqual:s,smaller(l){return eo(`(max-width: ${n(l,-.1)})`,t)},smallerOrEqual(l){return eo(`(max-width: ${n(l)})`,t)},between(l,a){return eo(`(min-width: ${n(l)}) and (max-width: ${n(a,-.1)})`,t)},isGreater(l){return o(`(min-width: ${n(l,.1)})`)},isGreaterOrEqual(l){return o(`(min-width: ${n(l)})`)},isSmaller(l){return o(`(max-width: ${n(l,-.1)})`)},isSmallerOrEqual(l){return o(`(max-width: ${n(l)})`)},isInBetween(l,a){return o(`(min-width: ${n(l)}) and (max-width: ${n(a,-.1)})`)},current(){const l=Object.keys(e).map(a=>[a,s(a)]);return C(()=>l.filter(([,a])=>a.value).map(([a])=>a))}})}function k2(e){return JSON.parse(JSON.stringify(e))}const ol=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},sl="__vueuse_ssr_handlers__",S2=$2();function $2(){return sl in ol||(ol[sl]=ol[sl]||{}),ol[sl]}function C2(e,t){return S2[e]||t}function E2(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var O2=Object.defineProperty,yp=Object.getOwnPropertySymbols,I2=Object.prototype.hasOwnProperty,P2=Object.prototype.propertyIsEnumerable,wp=(e,t,n)=>t in e?O2(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_p=(e,t)=>{for(var n in t||(t={}))I2.call(t,n)&&wp(e,n,t[n]);if(yp)for(var n of yp(t))P2.call(t,n)&&wp(e,n,t[n]);return e};const T2={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},xp="vueuse-storage";function M2(e,t,n,r={}){var o;const{flush:s="pre",deep:i=!0,listenToStorageChanges:l=!0,writeDefaults:a=!0,mergeDefaults:c=!1,shallow:u,window:d=Rt,eventFilter:f,onError:m=k=>{console.error(k)}}=r,h=(u?qn:z)(t);if(!n)try{n=C2("getDefaultStorage",()=>{var k;return(k=Rt)==null?void 0:k.localStorage})()}catch(k){m(k)}if(!n)return h;const b=At(t),y=E2(b),v=(o=r.serializer)!=null?o:T2[y],{pause:x,resume:_}=h2(h,()=>E(h.value),{flush:s,deep:i,eventFilter:f});return d&&l&&(Be(d,"storage",S),Be(d,xp,P)),S(),h;function E(k){try{if(k==null)n.removeItem(e);else{const M=v.write(k),N=n.getItem(e);N!==M&&(n.setItem(e,M),d&&d.dispatchEvent(new CustomEvent(xp,{detail:{key:e,oldValue:N,newValue:M,storageArea:n}})))}}catch(M){m(M)}}function I(k){const M=k?k.newValue:n.getItem(e);if(M==null)return a&&b!==null&&n.setItem(e,v.write(b)),b;if(!k&&c){const N=v.read(M);return typeof c=="function"?c(N,b):y==="object"&&!Array.isArray(N)?_p(_p({},b),N):N}else return typeof M!="string"?M:v.read(M)}function P(k){S(k.detail)}function S(k){if(!(k&&k.storageArea!==n)){if(k&&k.key==null){h.value=b;return}if(!(k&&k.key!==e)){x();try{h.value=I(k)}catch(M){m(M)}finally{k?Et(_):_()}}}}}function A2(e){return eo("(prefers-color-scheme: dark)",e)}var R2=Object.defineProperty,L2=Object.defineProperties,D2=Object.getOwnPropertyDescriptors,kp=Object.getOwnPropertySymbols,j2=Object.prototype.hasOwnProperty,N2=Object.prototype.propertyIsEnumerable,Sp=(e,t,n)=>t in e?R2(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,F2=(e,t)=>{for(var n in t||(t={}))j2.call(t,n)&&Sp(e,n,t[n]);if(kp)for(var n of kp(t))N2.call(t,n)&&Sp(e,n,t[n]);return e},z2=(e,t)=>L2(e,D2(t));function n7(e,t={}){var n,r;const{pointerTypes:o,preventDefault:s,stopPropagation:i,exact:l,onMove:a,onEnd:c,onStart:u,initialValue:d,axis:f="both",draggingElement:m=Rt,handle:h=e}=t,b=z((n=At(d))!=null?n:{x:0,y:0}),y=z(),v=P=>o?o.includes(P.pointerType):!0,x=P=>{At(s)&&P.preventDefault(),At(i)&&P.stopPropagation()},_=P=>{if(!v(P)||At(l)&&P.target!==At(e))return;const S=At(e).getBoundingClientRect(),k={x:P.clientX-S.left,y:P.clientY-S.top};(u==null?void 0:u(k,P))!==!1&&(y.value=k,x(P))},E=P=>{if(!v(P)||!y.value)return;let{x:S,y:k}=b.value;(f==="x"||f==="both")&&(S=P.clientX-y.value.x),(f==="y"||f==="both")&&(k=P.clientY-y.value.y),b.value={x:S,y:k},a==null||a(b.value,P),x(P)},I=P=>{v(P)&&y.value&&(y.value=void 0,c==null||c(b.value,P),x(P))};if(cr){const P={capture:(r=t.capture)!=null?r:!0};Be(h,"pointerdown",_,P),Be(m,"pointermove",E,P),Be(m,"pointerup",I,P)}return z2(F2({},t2(b)),{position:b,isDragging:C(()=>!!y.value),style:C(()=>`left:${b.value.x}px;top:${b.value.y}px;`)})}var $p=Object.getOwnPropertySymbols,B2=Object.prototype.hasOwnProperty,H2=Object.prototype.propertyIsEnumerable,V2=(e,t)=>{var n={};for(var r in e)B2.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&$p)for(var r of $p(e))t.indexOf(r)<0&&H2.call(e,r)&&(n[r]=e[r]);return n};function W2(e,t,n={}){const r=n,{window:o=Rt}=r,s=V2(r,["window"]);let i;const l=Ta(()=>o&&"ResizeObserver"in o),a=()=>{i&&(i.disconnect(),i=void 0)},c=C(()=>Array.isArray(e)?e.map(f=>Vt(f)):[Vt(e)]),u=be(c,f=>{if(a(),l.value&&o){i=new ResizeObserver(t);for(const m of f)m&&i.observe(m,s)}},{immediate:!0,flush:"post",deep:!0}),d=()=>{a(),u()};return ar(d),{isSupported:l,stop:d}}function U2(e,t={width:0,height:0},n={}){const{window:r=Rt,box:o="content-box"}=n,s=C(()=>{var a,c;return(c=(a=Vt(e))==null?void 0:a.namespaceURI)==null?void 0:c.includes("svg")}),i=z(t.width),l=z(t.height);return W2(e,([a])=>{const c=o==="border-box"?a.borderBoxSize:o==="content-box"?a.contentBoxSize:a.devicePixelContentBoxSize;if(r&&s.value){const u=Vt(e);if(u){const d=r.getComputedStyle(u);i.value=Number.parseFloat(d.width),l.value=Number.parseFloat(d.height)}}else if(c){const u=Array.isArray(c)?c:[c];i.value=u.reduce((d,{inlineSize:f})=>d+f,0),l.value=u.reduce((d,{blockSize:f})=>d+f,0)}else i.value=a.contentRect.width,l.value=a.contentRect.height},n),be(()=>Vt(e),a=>{i.value=a?t.width:0,l.value=a?t.height:0}),{width:i,height:l}}function q2(e,t,n={}){const{root:r,rootMargin:o="0px",threshold:s=.1,window:i=Rt,immediate:l=!0}=n,a=Ta(()=>i&&"IntersectionObserver"in i),c=C(()=>{const h=At(e);return(Array.isArray(h)?h:[h]).map(Vt).filter(Bk)});let u=vo;const d=z(l),f=a.value?be(()=>[c.value,Vt(r),d.value],([h,b])=>{if(u(),!d.value||!h.length)return;const y=new IntersectionObserver(t,{root:Vt(b),rootMargin:o,threshold:s});h.forEach(v=>v&&y.observe(v)),u=()=>{y.disconnect(),u=vo}},{immediate:l,flush:"post"}):vo,m=()=>{u(),f(),d.value=!1};return ar(m),{isSupported:a,isActive:d,pause(){u(),d.value=!1},resume(){d.value=!0},stop:m}}const Cp=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function K2(e,t={}){const{document:n=qg,autoExit:r=!1}=t,o=C(()=>{var v;return(v=Vt(e))!=null?v:n==null?void 0:n.querySelector("html")}),s=z(!1),i=C(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(v=>n&&v in n||o.value&&v in o.value)),l=C(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(v=>n&&v in n||o.value&&v in o.value)),a=C(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(v=>n&&v in n||o.value&&v in o.value)),c=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(v=>n&&v in n),u=Ta(()=>o.value&&n&&i.value!==void 0&&l.value!==void 0&&a.value!==void 0),d=()=>c?(n==null?void 0:n[c])===o.value:!1,f=()=>{if(a.value){if(n&&n[a.value]!=null)return n[a.value];{const v=o.value;if((v==null?void 0:v[a.value])!=null)return!!v[a.value]}}return!1};async function m(){if(u.value){if(l.value)if((n==null?void 0:n[l.value])!=null)await n[l.value]();else{const v=o.value;(v==null?void 0:v[l.value])!=null&&await v[l.value]()}s.value=!1}}async function h(){if(!u.value)return;f()&&await m();const v=o.value;i.value&&(v==null?void 0:v[i.value])!=null&&(await v[i.value](),s.value=!0)}async function b(){await(s.value?m():h())}const y=()=>{const v=f();(!v||v&&d())&&(s.value=v)};return Be(n,Cp,y,!1),Be(()=>Vt(o),Cp,y,!1),r&&ar(m),{isSupported:u,isFullscreen:s,enter:h,exit:m,toggle:b}}function Ln(e,t,n={}){const{window:r=Rt}=n;return M2(e,t,r==null?void 0:r.localStorage,n)}const Y2={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Z2(e={}){const{reactive:t=!1,target:n=Rt,aliasMap:r=Y2,passive:o=!0,onEventFired:s=vo}=e,i=ct(new Set),l={toJSON(){return{}},current:i},a=t?ct(l):l,c=new Set,u=new Set;function d(b,y){b in a&&(t?a[b]=y:a[b].value=y)}function f(){i.clear();for(const b of u)d(b,!1)}function m(b,y){var v,x;const _=(v=b.key)==null?void 0:v.toLowerCase(),I=[(x=b.code)==null?void 0:x.toLowerCase(),_].filter(Boolean);_&&(y?i.add(_):i.delete(_));for(const P of I)u.add(P),d(P,y);_==="meta"&&!y?(c.forEach(P=>{i.delete(P),d(P,!1)}),c.clear()):typeof b.getModifierState=="function"&&b.getModifierState("Meta")&&y&&[...i,...I].forEach(P=>c.add(P))}Be(n,"keydown",b=>(m(b,!0),s(b)),{passive:o}),Be(n,"keyup",b=>(m(b,!1),s(b)),{passive:o}),Be("blur",f,{passive:!0}),Be("focus",f,{passive:!0});const h=new Proxy(a,{get(b,y,v){if(typeof y!="string")return Reflect.get(b,y,v);if(y=y.toLowerCase(),y in r&&(y=r[y]),!(y in a))if(/[+_-]/.test(y)){const _=y.split(/[+_-]/g).map(E=>E.trim());a[y]=C(()=>_.every(E=>At(h[E])))}else a[y]=z(!1);const x=Reflect.get(b,y,v);return t?At(x):x}});return h}const G2={page:e=>[e.pageX,e.pageY],client:e=>[e.clientX,e.clientY],screen:e=>[e.screenX,e.screenY],movement:e=>e instanceof Touch?null:[e.movementX,e.movementY]};function r7(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:r=!1,initialValue:o={x:0,y:0},window:s=Rt,target:i=s,eventFilter:l}=e,a=z(o.x),c=z(o.y),u=z(null),d=typeof t=="function"?t:G2[t],f=v=>{const x=d(v);x&&([a.value,c.value]=x,u.value="mouse")},m=v=>{if(v.touches.length>0){const x=d(v.touches[0]);x&&([a.value,c.value]=x,u.value="touch")}},h=()=>{a.value=o.x,c.value=o.y},b=l?v=>l(()=>f(v),{}):v=>f(v),y=l?v=>l(()=>m(v),{}):v=>m(v);return i&&(Be(i,"mousemove",b,{passive:!0}),Be(i,"dragover",b,{passive:!0}),n&&t!=="movement"&&(Be(i,"touchstart",y,{passive:!0}),Be(i,"touchmove",y,{passive:!0}),r&&Be(i,"touchend",h,{passive:!0}))),{x:a,y:c,sourceType:u}}function X2(e,t={}){const n=Bg(e),{threshold:r=50,onSwipe:o,onSwipeEnd:s,onSwipeStart:i}=t,l=ct({x:0,y:0}),a=(P,S)=>{l.x=P,l.y=S},c=ct({x:0,y:0}),u=(P,S)=>{c.x=P,c.y=S},d=C(()=>l.x-c.x),f=C(()=>l.y-c.y),{max:m,abs:h}=Math,b=C(()=>m(h(d.value),h(f.value))>=r),y=z(!1),v=z(!1),x=C(()=>b.value?h(d.value)>h(f.value)?d.value>0?"left":"right":f.value>0?"up":"down":"none"),_=P=>{var S,k,M;const N=P.buttons===0,G=P.buttons===1;return(M=(k=(S=t.pointerTypes)==null?void 0:S.includes(P.pointerType))!=null?k:N||G)!=null?M:!0},E=[Be(e,"pointerdown",P=>{var S,k;if(!_(P))return;v.value=!0,(k=(S=n.value)==null?void 0:S.style)==null||k.setProperty("touch-action","none");const M=P.target;M==null||M.setPointerCapture(P.pointerId);const{clientX:N,clientY:G}=P;a(N,G),u(N,G),i==null||i(P)}),Be(e,"pointermove",P=>{if(!_(P)||!v.value)return;const{clientX:S,clientY:k}=P;u(S,k),!y.value&&b.value&&(y.value=!0),y.value&&(o==null||o(P))}),Be(e,"pointerup",P=>{var S,k;_(P)&&(y.value&&(s==null||s(P,x.value)),v.value=!1,y.value=!1,(k=(S=n.value)==null?void 0:S.style)==null||k.setProperty("touch-action","initial"))})],I=()=>E.forEach(P=>P());return{isSwiping:fn(y),direction:fn(x),posStart:fn(l),posEnd:fn(c),distanceX:d,distanceY:f,stop:I}}let J2=0;function o7(e,t={}){const n=z(!1),{document:r=qg,immediate:o=!0,manual:s=!1,id:i=`vueuse_styletag_${++J2}`}=t,l=z(e);let a=()=>{};const c=()=>{if(!r)return;const d=r.getElementById(i)||r.createElement("style");d.isConnected||(d.type="text/css",d.id=i,t.media&&(d.media=t.media),r.head.appendChild(d)),!n.value&&(a=be(l,f=>{d.textContent=f},{immediate:!0}),n.value=!0)},u=()=>{!r||!n.value||(a(),r.head.removeChild(r.getElementById(i)),n.value=!1)};return o&&!s&&Hg(c),s||ar(u),{id:i,css:l,unload:u,load:c,isLoaded:fn(n)}}var Q2=Object.defineProperty,Ep=Object.getOwnPropertySymbols,eS=Object.prototype.hasOwnProperty,tS=Object.prototype.propertyIsEnumerable,Op=(e,t,n)=>t in e?Q2(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,nS=(e,t)=>{for(var n in t||(t={}))eS.call(t,n)&&Op(e,n,t[n]);if(Ep)for(var n of Ep(t))tS.call(t,n)&&Op(e,n,t[n]);return e};function s7(e={}){const{controls:t=!1,offset:n=0,immediate:r=!0,interval:o="requestAnimationFrame",callback:s}=e,i=z(cu()+n),l=()=>i.value=cu()+n,a=s?()=>{l(),s(i.value)}:l,c=o==="requestAnimationFrame"?w2(a,{immediate:r}):r2(a,o,{immediate:r});return t?nS({timestamp:i},c):i}function zn(e,t,n,r={}){var o,s,i;const{clone:l=!1,passive:a=!1,eventName:c,deep:u=!1,defaultValue:d,shouldEmit:f}=r,m=Qt(),h=n||(m==null?void 0:m.emit)||((o=m==null?void 0:m.$emit)==null?void 0:o.bind(m))||((i=(s=m==null?void 0:m.proxy)==null?void 0:s.$emit)==null?void 0:i.bind(m==null?void 0:m.proxy));let b=c;t||(t="modelValue"),b=b||`update:${t.toString()}`;const y=_=>l?typeof l=="function"?l(_):k2(_):_,v=()=>zk(e[t])?y(e[t]):d,x=_=>{f?f(_)&&h(b,_):h(b,_)};if(a){const _=v(),E=z(_);return be(()=>e[t],I=>E.value=y(I)),be(E,I=>{(I!==e[t]||u)&&x(I)},{deep:u}),E}else return C({get(){return v()},set(_){x(_)}})}function i7({window:e=Rt}={}){if(!e)return z(!1);const t=z(e.document.hasFocus());return Be(e,"blur",()=>{t.value=!1}),Be(e,"focus",()=>{t.value=!0}),t}function rS(e={}){const{window:t=Rt,initialWidth:n=1/0,initialHeight:r=1/0,listenOrientation:o=!0,includeScrollbar:s=!0}=e,i=z(n),l=z(r),a=()=>{t&&(s?(i.value=t.innerWidth,l.value=t.innerHeight):(i.value=t.document.documentElement.clientWidth,l.value=t.document.documentElement.clientHeight))};if(a(),Hg(a),Be("resize",a,{passive:!0}),o){const c=eo("(orientation: portrait)");be(c,()=>a())}return{width:i,height:l}}function oS(){return Kg().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Kg(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const sS=typeof Proxy=="function",iS="devtools-plugin:setup",lS="plugin:settings:set";let Do,uu;function aS(){var e;return Do!==void 0||(typeof window<"u"&&window.performance?(Do=!0,uu=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(Do=!0,uu=global.perf_hooks.performance):Do=!1),Do}function cS(){return aS()?uu.now():Date.now()}class uS{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const r={};if(t.settings)for(const i in t.settings){const l=t.settings[i];r[i]=l.defaultValue}const o=`__vue-devtools-plugin-settings__${t.id}`;let s=Object.assign({},r);try{const i=localStorage.getItem(o),l=JSON.parse(i);Object.assign(s,l)}catch{}this.fallbacks={getSettings(){return s},setSettings(i){try{localStorage.setItem(o,JSON.stringify(i))}catch{}s=i},now(){return cS()}},n&&n.on(lS,(i,l)=>{i===this.plugin.id&&this.fallbacks.setSettings(l)}),this.proxiedOn=new Proxy({},{get:(i,l)=>this.target?this.target.on[l]:(...a)=>{this.onQueue.push({method:l,args:a})}}),this.proxiedTarget=new Proxy({},{get:(i,l)=>this.target?this.target[l]:l==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(l)?(...a)=>(this.targetQueue.push({method:l,args:a,resolve:()=>{}}),this.fallbacks[l](...a)):(...a)=>new Promise(c=>{this.targetQueue.push({method:l,args:a,resolve:c})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function dS(e,t){const n=e,r=Kg(),o=oS(),s=sS&&n.enableEarlyProxy;if(o&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!s))o.emit(iS,e,t);else{const i=s?new uS(n,o):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:i}),i&&t(i.proxiedTarget)}}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const tr=typeof window<"u";function fS(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Je=Object.assign;function sc(e,t){const n={};for(const r in t){const o=t[r];n[r]=mn(o)?o.map(e):e(o)}return n}const qs=()=>{},mn=Array.isArray;function Ke(e){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(t))}const pS=/\/$/,hS=e=>e.replace(pS,"");function ic(e,t,n="/"){let r,o={},s="",i="";const l=t.indexOf("#");let a=t.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(r=t.slice(0,a),s=t.slice(a+1,l>-1?l:t.length),o=e(s)),l>-1&&(r=r||t.slice(0,l),i=t.slice(l,t.length)),r=gS(r??t,n),{fullPath:r+(s&&"?")+s+i,path:r,query:o,hash:i}}function mS(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ip(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Pp(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&Nr(t.matched[r],n.matched[o])&&Yg(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Nr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Yg(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!vS(e[n],t[n]))return!1;return!0}function vS(e,t){return mn(e)?Tp(e,t):mn(t)?Tp(t,e):e===t}function Tp(e,t){return mn(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function gS(e,t){if(e.startsWith("/"))return e;if(!t.startsWith("/"))return Ke(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`),e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let s=n.length-1,i,l;for(i=0;i<r.length;i++)if(l=r[i],l!==".")if(l==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var mi;(function(e){e.pop="pop",e.push="push"})(mi||(mi={}));var Ks;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ks||(Ks={}));function bS(e){if(!e)if(tr){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),hS(e)}const yS=/^[^#]+#/;function wS(e,t){return e.replace(yS,"#")+t}function _S(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Ma=()=>({left:window.pageXOffset,top:window.pageYOffset});function xS(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#");if(typeof e.el=="string"&&(!r||!document.getElementById(e.el.slice(1))))try{const s=document.querySelector(e.el);if(r&&s){Ke(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{Ke(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o){Ke(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}t=_S(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Mp(e,t){return(history.state?history.state.position-t:-1)+e}const du=new Map;function kS(e,t){du.set(e,t)}function SS(e){const t=du.get(e);return du.delete(e),t}let $S=()=>location.protocol+"//"+location.host;function Zg(e,t){const{pathname:n,search:r,hash:o}=t,s=e.indexOf("#");if(s>-1){let l=o.includes(e.slice(s))?e.slice(s).length:1,a=o.slice(l);return a[0]!=="/"&&(a="/"+a),Ip(a,"")}return Ip(n,e)+r+o}function CS(e,t,n,r){let o=[],s=[],i=null;const l=({state:f})=>{const m=Zg(e,location),h=n.value,b=t.value;let y=0;if(f){if(n.value=m,t.value=f,i&&i===h){i=null;return}y=b?f.position-b.position:0}else r(m);o.forEach(v=>{v(n.value,h,{delta:y,type:mi.pop,direction:y?y>0?Ks.forward:Ks.back:Ks.unknown})})};function a(){i=n.value}function c(f){o.push(f);const m=()=>{const h=o.indexOf(f);h>-1&&o.splice(h,1)};return s.push(m),m}function u(){const{history:f}=window;f.state&&f.replaceState(Je({},f.state,{scroll:Ma()}),"")}function d(){for(const f of s)f();s=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:c,destroy:d}}function Ap(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?Ma():null}}function ES(e){const{history:t,location:n}=window,r={value:Zg(e,n)},o={value:t.state};o.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(a,c,u){const d=e.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+a:$S()+e+a;try{t[u?"replaceState":"pushState"](c,"",f),o.value=c}catch(m){Ke("Error with push/replace State",m),n[u?"replace":"assign"](f)}}function i(a,c){const u=Je({},t.state,Ap(o.value.back,a,o.value.forward,!0),c,{position:o.value.position});s(a,u,!0),r.value=a}function l(a,c){const u=Je({},o.value,t.state,{forward:a,scroll:Ma()});t.state||Ke(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),s(u.current,u,!0);const d=Je({},Ap(r.value,a,null),{position:u.position+1},c);s(a,d,!1),r.value=a}return{location:r,state:o,push:l,replace:i}}function OS(e){e=bS(e);const t=ES(e),n=CS(e,t.state,t.location,t.replace);function r(s,i=!0){i||n.pauseListeners(),history.go(s)}const o=Je({location:"",base:e,go:r,createHref:wS.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function IS(e){return typeof e=="string"||e&&typeof e=="object"}function Gg(e){return typeof e=="string"||typeof e=="symbol"}const br={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Xg=Symbol("navigation failure");var Rp;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Rp||(Rp={}));const PS={[1]({location:e,currentLocation:t}){return`No match for
 ${JSON.stringify(e)}${t?`
while being at
`+JSON.stringify(t):""}`},[2]({from:e,to:t}){return`Redirected from "${e.fullPath}" to "${MS(t)}" via a navigation guard.`},[4]({from:e,to:t}){return`Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`},[8]({from:e,to:t}){return`Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`},[16]({from:e,to:t}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function ts(e,t){return Je(new Error(PS[e](t)),{type:e,[Xg]:!0},t)}function Zn(e,t){return e instanceof Error&&Xg in e&&(t==null||!!(e.type&t))}const TS=["params","query","hash"];function MS(e){if(typeof e=="string")return e;if("path"in e)return e.path;const t={};for(const n of TS)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}const Lp="[^/]+?",AS={sensitive:!1,strict:!1,start:!0,end:!0},RS=/[.+*?^${}()[\]/\\]/g;function LS(e,t){const n=Je({},AS,t),r=[];let o=n.start?"^":"";const s=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(o+="/");for(let d=0;d<c.length;d++){const f=c[d];let m=40+(n.sensitive?.25:0);if(f.type===0)d||(o+="/"),o+=f.value.replace(RS,"\\$&"),m+=40;else if(f.type===1){const{value:h,repeatable:b,optional:y,regexp:v}=f;s.push({name:h,repeatable:b,optional:y});const x=v||Lp;if(x!==Lp){m+=10;try{new RegExp(`(${x})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${h}" (${x}): `+E.message)}}let _=b?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;d||(_=y&&c.length<2?`(?:/${_})`:"/"+_),y&&(_+="?"),o+=_,m+=20,y&&(m+=-8),b&&(m+=-20),x===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");function l(c){const u=c.match(i),d={};if(!u)return null;for(let f=1;f<u.length;f++){const m=u[f]||"",h=s[f-1];d[h.name]=m&&h.repeatable?m.split("/"):m}return d}function a(c){let u="",d=!1;for(const f of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of f)if(m.type===0)u+=m.value;else if(m.type===1){const{value:h,repeatable:b,optional:y}=m,v=h in c?c[h]:"";if(mn(v)&&!b)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const x=mn(v)?v.join("/"):v;if(!x)if(y)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${h}"`);u+=x}}return u||"/"}return{re:i,score:r,keys:s,parse:l,stringify:a}}function DS(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function jS(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const s=DS(r[n],o[n]);if(s)return s;n++}if(Math.abs(o.length-r.length)===1){if(Dp(r))return 1;if(Dp(o))return-1}return o.length-r.length}function Dp(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const NS={type:0,value:""},FS=/[a-zA-Z0-9_]/;function zS(e){if(!e)return[[]];if(e==="/")return[[NS]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function t(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,r=n;const o=[];let s;function i(){s&&o.push(s),s=[]}let l=0,a,c="",u="";function d(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=a}for(;l<e.length;){if(a=e[l++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(c&&d(),i()):a===":"?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:a==="("?n=2:FS.test(a)?f():(d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),i(),o}function BS(e,t,n){const r=LS(zS(e.path),n);{const s=new Set;for(const i of r.keys)s.has(i.name)&&Ke(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),s.add(i.name)}const o=Je(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function HS(e,t){const n=[],r=new Map;t=Fp({strict:!1,end:!0,sensitive:!1},t);function o(u){return r.get(u)}function s(u,d,f){const m=!f,h=VS(u);KS(h,d),h.aliasOf=f&&f.record;const b=Fp(t,u),y=[h];if("alias"in u){const _=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of _)y.push(Je({},h,{components:f?f.record.components:h.components,path:E,aliasOf:f?f.record:h}))}let v,x;for(const _ of y){const{path:E}=_;if(d&&E[0]!=="/"){const I=d.record.path,P=I[I.length-1]==="/"?"":"/";_.path=d.record.path+(E&&P+E)}if(_.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(v=BS(_,d,b),d&&E[0]==="/"&&YS(v,d),f?(f.alias.push(v),qS(f,v)):(x=x||v,x!==v&&x.alias.push(v),m&&u.name&&!Np(v)&&i(u.name)),h.children){const I=h.children;for(let P=0;P<I.length;P++)s(I[P],v,f&&f.children[P])}f=f||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&a(v)}return x?()=>{i(x)}:qs}function i(u){if(Gg(u)){const d=r.get(u);d&&(r.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(i),d.alias.forEach(i))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&r.delete(u.record.name),u.children.forEach(i),u.alias.forEach(i))}}function l(){return n}function a(u){let d=0;for(;d<n.length&&jS(u,n[d])>=0&&(u.record.path!==n[d].record.path||!Jg(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Np(u)&&r.set(u.record.name,u)}function c(u,d){let f,m={},h,b;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw ts(1,{location:u});{const x=Object.keys(u.params||{}).filter(_=>!f.keys.find(E=>E.name===_));x.length&&Ke(`Discarded invalid param(s) "${x.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}b=f.record.name,m=Je(jp(d.params,f.keys.filter(x=>!x.optional).map(x=>x.name)),u.params&&jp(u.params,f.keys.map(x=>x.name))),h=f.stringify(m)}else if("path"in u)h=u.path,h.startsWith("/")||Ke(`The Matcher cannot resolve relative paths but received "${h}". Unless you directly called \`matcher.resolve("${h}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),f=n.find(x=>x.re.test(h)),f&&(m=f.parse(h),b=f.record.name);else{if(f=d.name?r.get(d.name):n.find(x=>x.re.test(d.path)),!f)throw ts(1,{location:u,currentLocation:d});b=f.record.name,m=Je({},d.params,u.params),h=f.stringify(m)}const y=[];let v=f;for(;v;)y.unshift(v.record),v=v.parent;return{name:b,path:h,params:m,matched:y,meta:US(y)}}return e.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:i,getRoutes:l,getRecordMatcher:o}}function jp(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function VS(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:WS(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function WS(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Np(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function US(e){return e.reduce((t,n)=>Je(t,n.meta),{})}function Fp(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function fu(e,t){return e.name===t.name&&e.optional===t.optional&&e.repeatable===t.repeatable}function qS(e,t){for(const n of e.keys)if(!n.optional&&!t.keys.find(fu.bind(null,n)))return Ke(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);for(const n of t.keys)if(!n.optional&&!e.keys.find(fu.bind(null,n)))return Ke(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`)}function KS(e,t){t&&t.record.name&&!e.name&&!e.path&&Ke(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function YS(e,t){for(const n of t.keys)if(!e.keys.find(fu.bind(null,n)))return Ke(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`)}function Jg(e,t){return t.children.some(n=>n===e||Jg(e,n))}const Qg=/#/g,ZS=/&/g,GS=/\//g,XS=/=/g,JS=/\?/g,e0=/\+/g,QS=/%5B/g,e$=/%5D/g,t0=/%5E/g,t$=/%60/g,n0=/%7B/g,n$=/%7C/g,r0=/%7D/g,r$=/%20/g;function Md(e){return encodeURI(""+e).replace(n$,"|").replace(QS,"[").replace(e$,"]")}function o$(e){return Md(e).replace(n0,"{").replace(r0,"}").replace(t0,"^")}function pu(e){return Md(e).replace(e0,"%2B").replace(r$,"+").replace(Qg,"%23").replace(ZS,"%26").replace(t$,"`").replace(n0,"{").replace(r0,"}").replace(t0,"^")}function s$(e){return pu(e).replace(XS,"%3D")}function i$(e){return Md(e).replace(Qg,"%23").replace(JS,"%3F")}function l$(e){return e==null?"":i$(e).replace(GS,"%2F")}function vi(e){try{return decodeURIComponent(""+e)}catch{Ke(`Error decoding "${e}". Using original value`)}return""+e}function a$(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const s=r[o].replace(e0," "),i=s.indexOf("="),l=vi(i<0?s:s.slice(0,i)),a=i<0?null:vi(s.slice(i+1));if(l in t){let c=t[l];mn(c)||(c=t[l]=[c]),c.push(a)}else t[l]=a}return t}function zp(e){let t="";for(let n in e){const r=e[n];if(n=s$(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(mn(r)?r.map(s=>s&&pu(s)):[r&&pu(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function c$(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=mn(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const u$=Symbol("router view location matched"),Bp=Symbol("router view depth"),Ad=Symbol("router"),o0=Symbol("route location"),hu=Symbol("router view location");function Ss(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Sr(e,t,n,r,o){const s=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((i,l)=>{const a=d=>{d===!1?l(ts(4,{from:n,to:t})):d instanceof Error?l(d):IS(d)?l(ts(2,{from:t,to:d})):(s&&r.enterCallbacks[o]===s&&typeof d=="function"&&s.push(d),i())},c=e.call(r&&r.instances[o],t,n,d$(a,t,n));let u=Promise.resolve(c);if(e.length<3&&(u=u.then(a)),e.length>2){const d=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof c=="object"&&"then"in c)u=u.then(f=>a._called?f:(Ke(d),Promise.reject(new Error("Invalid navigation guard"))));else if(c!==void 0&&!a._called){Ke(d),l(new Error("Invalid navigation guard"));return}}u.catch(d=>l(d))})}function d$(e,t,n){let r=0;return function(){r++===1&&Ke(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,r===1&&e.apply(null,arguments)}}function lc(e,t,n,r){const o=[];for(const s of e){!s.components&&!s.children.length&&Ke(`Record with path "${s.path}" is either missing a "component(s)" or "children" property.`);for(const i in s.components){let l=s.components[i];{if(!l||typeof l!="object"&&typeof l!="function")throw Ke(`Component "${i}" in record with path "${s.path}" is not a valid component. Received "${String(l)}".`),new Error("Invalid route component");if("then"in l){Ke(`Component "${i}" in record with path "${s.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const a=l;l=()=>a}else l.__asyncLoader&&!l.__warnedDefineAsync&&(l.__warnedDefineAsync=!0,Ke(`Component "${i}" in record with path "${s.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!s.instances[i]))if(f$(l)){const c=(l.__vccOpts||l)[t];c&&o.push(Sr(c,n,r,s,i))}else{let a=l();"catch"in a||(Ke(`Component "${i}" in record with path "${s.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),a=Promise.resolve(a)),o.push(()=>a.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${s.path}"`));const u=fS(c)?c.default:c;s.components[i]=u;const f=(u.__vccOpts||u)[t];return f&&Sr(f,n,r,s,i)()}))}}}return o}function f$(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Hp(e){const t=ie(Ad),n=ie(o0),r=C(()=>t.resolve(D(e.to))),o=C(()=>{const{matched:a}=r.value,{length:c}=a,u=a[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(Nr.bind(null,u));if(f>-1)return f;const m=Vp(a[c-2]);return c>1&&Vp(u)===m&&d[d.length-1].path!==m?d.findIndex(Nr.bind(null,a[c-2])):f}),s=C(()=>o.value>-1&&v$(n.params,r.value.params)),i=C(()=>o.value>-1&&o.value===n.matched.length-1&&Yg(n.params,r.value.params));function l(a={}){return m$(a)?t[D(e.replace)?"replace":"push"](D(e.to)).catch(qs):Promise.resolve()}if(tr){const a=Qt();if(a){const c={route:r.value,isActive:s.value,isExactActive:i.value};a.__vrl_devtools=a.__vrl_devtools||[],a.__vrl_devtools.push(c),Jt(()=>{c.route=r.value,c.isActive=s.value,c.isExactActive=i.value},{flush:"post"})}}return{route:r,href:C(()=>r.value.href),isActive:s,isExactActive:i,navigate:l}}const p$=pe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Hp,setup(e,{slots:t}){const n=ct(Hp(e)),{options:r}=ie(Ad),o=C(()=>({[Wp(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Wp(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:F("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),h$=p$;function m$(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function v$(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!mn(o)||o.length!==r.length||r.some((s,i)=>s!==o[i]))return!1}return!0}function Vp(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Wp=(e,t,n)=>e??t??n,g$=pe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){y$();const r=ie(hu),o=C(()=>e.route||r.value),s=ie(Bp,0),i=C(()=>{let c=D(s);const{matched:u}=o.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),l=C(()=>o.value.matched[i.value]);gt(Bp,C(()=>i.value+1)),gt(u$,l),gt(hu,o);const a=z();return be(()=>[a.value,l.value,e.name],([c,u,d],[f,m,h])=>{u&&(u.instances[d]=c,m&&m!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!Nr(u,m)||!f)&&(u.enterCallbacks[d]||[]).forEach(b=>b(c))},{flush:"post"}),()=>{const c=o.value,u=e.name,d=l.value,f=d&&d.components[u];if(!f)return Up(n.default,{Component:f,route:c});const m=d.props[u],h=m?m===!0?c.params:typeof m=="function"?m(c):m:null,y=F(f,Je({},h,t,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(d.instances[u]=null)},ref:a}));if(tr&&y.ref){const v={depth:i.value,name:d.name,path:d.path,meta:d.meta};(mn(y.ref)?y.ref.map(_=>_.i):[y.ref.i]).forEach(_=>{_.__vrv_devtools=v})}return Up(n.default,{Component:y,route:c})||y}}});function Up(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const b$=g$;function y$(){const e=Qt(),t=e.parent&&e.parent.type.name,n=e.parent&&e.parent.subTree&&e.parent.subTree.type;if(t&&(t==="KeepAlive"||t.includes("Transition"))&&typeof n=="object"&&n.name==="RouterView"){const r=t==="KeepAlive"?"keep-alive":"transition";Ke(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${r}>
    <component :is="Component" />
  </${r}>
</router-view>`)}}function $s(e,t){const n=Je({},e,{matched:e.matched.map(r=>O$(r,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:t,value:n}}}function il(e){return{_custom:{display:e}}}let w$=0;function _$(e,t,n){if(t.__hasDevtools)return;t.__hasDevtools=!0;const r=w$++;dS({id:"org.vuejs.router"+(r?"."+r:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},o=>{typeof o.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),o.on.inspectComponent((u,d)=>{u.instanceData&&u.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:$s(t.currentRoute.value,"Current Route")})}),o.on.visitComponentTree(({treeNode:u,componentInstance:d})=>{if(d.__vrv_devtools){const f=d.__vrv_devtools;u.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:s0})}mn(d.__vrl_devtools)&&(d.__devtoolsApi=o,d.__vrl_devtools.forEach(f=>{let m=a0,h="";f.isExactActive?(m=l0,h="This is exactly active"):f.isActive&&(m=i0,h="This link is active"),u.tags.push({label:f.route.path,textColor:0,tooltip:h,backgroundColor:m})}))}),be(t.currentRoute,()=>{a(),o.notifyComponentUpdate(),o.sendInspectorTree(l),o.sendInspectorState(l)});const s="router:navigations:"+r;o.addTimelineLayer({id:s,label:`Router${r?" "+r:""} Navigations`,color:4237508}),t.onError((u,d)=>{o.addTimelineEvent({layerId:s,event:{title:"Error during Navigation",subtitle:d.fullPath,logType:"error",time:o.now(),data:{error:u},groupId:d.meta.__navigationId}})});let i=0;t.beforeEach((u,d)=>{const f={guard:il("beforeEach"),from:$s(d,"Current Location during this navigation"),to:$s(u,"Target location")};Object.defineProperty(u.meta,"__navigationId",{value:i++}),o.addTimelineEvent({layerId:s,event:{time:o.now(),title:"Start of navigation",subtitle:u.fullPath,data:f,groupId:u.meta.__navigationId}})}),t.afterEach((u,d,f)=>{const m={guard:il("afterEach")};f?(m.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},m.status=il("❌")):m.status=il("✅"),m.from=$s(d,"Current Location during this navigation"),m.to=$s(u,"Target location"),o.addTimelineEvent({layerId:s,event:{title:"End of navigation",subtitle:u.fullPath,time:o.now(),data:m,logType:f?"warning":"default",groupId:u.meta.__navigationId}})});const l="router-inspector:"+r;o.addInspector({id:l,label:"Routes"+(r?" "+r:""),icon:"book",treeFilterPlaceholder:"Search routes"});function a(){if(!c)return;const u=c;let d=n.getRoutes().filter(f=>!f.parent);d.forEach(d0),u.filter&&(d=d.filter(f=>mu(f,u.filter.toLowerCase()))),d.forEach(f=>u0(f,t.currentRoute.value)),u.rootNodes=d.map(c0)}let c;o.on.getInspectorTree(u=>{c=u,u.app===e&&u.inspectorId===l&&a()}),o.on.getInspectorState(u=>{if(u.app===e&&u.inspectorId===l){const f=n.getRoutes().find(m=>m.record.__vd_id===u.nodeId);f&&(u.state={options:k$(f)})}}),o.sendInspectorTree(l),o.sendInspectorState(l)})}function x$(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function k$(e){const{record:t}=e,n=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&n.push({editable:!1,key:"name",value:t.name}),n.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(r=>`${r.name}${x$(r)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),t.redirect!=null&&n.push({editable:!1,key:"redirect",value:t.redirect}),e.alias.length&&n.push({editable:!1,key:"aliases",value:e.alias.map(r=>r.record.path)}),Object.keys(e.record.meta).length&&n.push({editable:!1,key:"meta",value:e.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(r=>r.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),n}const s0=15485081,i0=2450411,l0=8702998,S$=2282478,a0=16486972,$$=6710886;function c0(e){const t=[],{record:n}=e;n.name!=null&&t.push({label:String(n.name),textColor:0,backgroundColor:S$}),n.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:a0}),e.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:s0}),e.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:l0}),e.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:i0}),n.redirect&&t.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:$$});let r=n.__vd_id;return r==null&&(r=String(C$++),n.__vd_id=r),{id:r,label:n.path,tags:t,children:e.children.map(c0)}}let C$=0;const E$=/^\/(.*)\/([a-z]*)$/;function u0(e,t){const n=t.matched.length&&Nr(t.matched[t.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=n,n||(e.__vd_active=t.matched.some(r=>Nr(r,e.record))),e.children.forEach(r=>u0(r,t))}function d0(e){e.__vd_match=!1,e.children.forEach(d0)}function mu(e,t){const n=String(e.re).match(E$);if(e.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(t))return e.children.forEach(i=>mu(i,t)),e.record.path!=="/"||t==="/"?(e.__vd_match=e.re.test(t),!0):!1;const o=e.record.path.toLowerCase(),s=vi(o);return!t.startsWith("/")&&(s.includes(t)||o.includes(t))||s.startsWith(t)||o.startsWith(t)||e.record.name&&String(e.record.name).includes(t)?!0:e.children.some(i=>mu(i,t))}function O$(e,t){const n={};for(const r in e)t.includes(r)||(n[r]=e[r]);return n}function I$(e){const t=HS(e.routes,e),n=e.parseQuery||a$,r=e.stringifyQuery||zp,o=e.history;if(!o)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const s=Ss(),i=Ss(),l=Ss(),a=qn(br);let c=br;tr&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=sc.bind(null,A=>""+A),d=sc.bind(null,l$),f=sc.bind(null,vi);function m(A,re){let oe,se;return Gg(A)?(oe=t.getRecordMatcher(A),se=re):se=A,t.addRoute(se,oe)}function h(A){const re=t.getRecordMatcher(A);re?t.removeRoute(re):Ke(`Cannot remove non-existent route "${String(A)}"`)}function b(){return t.getRoutes().map(A=>A.record)}function y(A){return!!t.getRecordMatcher(A)}function v(A,re){if(re=Je({},re||a.value),typeof A=="string"){const w=ic(n,A,re.path),O=t.resolve({path:w.path},re),L=o.createHref(w.fullPath);return L.startsWith("//")?Ke(`Location "${A}" resolved to "${L}". A resolved location cannot start with multiple slashes.`):O.matched.length||Ke(`No match found for location with path "${A}"`),Je(w,O,{params:f(O.params),hash:vi(w.hash),redirectedFrom:void 0,href:L})}let oe;if("path"in A)"params"in A&&!("name"in A)&&Object.keys(A.params).length&&Ke(`Path "${A.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),oe=Je({},A,{path:ic(n,A.path,re.path).path});else{const w=Je({},A.params);for(const O in w)w[O]==null&&delete w[O];oe=Je({},A,{params:d(w)}),re.params=d(re.params)}const se=t.resolve(oe,re),_e=A.hash||"";_e&&!_e.startsWith("#")&&Ke(`A \`hash\` should always start with the character "#". Replace "${_e}" with "#${_e}".`),se.params=u(f(se.params));const X=mS(r,Je({},A,{hash:o$(_e),path:se.path})),g=o.createHref(X);return g.startsWith("//")?Ke(`Location "${A}" resolved to "${g}". A resolved location cannot start with multiple slashes.`):se.matched.length||Ke(`No match found for location with path "${"path"in A?A.path:A}"`),Je({fullPath:X,hash:_e,query:r===zp?c$(A.query):A.query||{}},se,{redirectedFrom:void 0,href:g})}function x(A){return typeof A=="string"?ic(n,A,a.value.path):Je({},A)}function _(A,re){if(c!==A)return ts(8,{from:re,to:A})}function E(A){return S(A)}function I(A){return E(Je(x(A),{replace:!0}))}function P(A){const re=A.matched[A.matched.length-1];if(re&&re.redirect){const{redirect:oe}=re;let se=typeof oe=="function"?oe(A):oe;if(typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=x(se):{path:se},se.params={}),!("path"in se)&&!("name"in se))throw Ke(`Invalid redirect found:
${JSON.stringify(se,null,2)}
 when navigating to "${A.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Je({query:A.query,hash:A.hash,params:"path"in se?{}:A.params},se)}}function S(A,re){const oe=c=v(A),se=a.value,_e=A.state,X=A.force,g=A.replace===!0,w=P(oe);if(w)return S(Je(x(w),{state:typeof w=="object"?Je({},_e,w.state):_e,force:X,replace:g}),re||oe);const O=oe;O.redirectedFrom=re;let L;return!X&&Pp(r,se,oe)&&(L=ts(16,{to:O,from:se}),Xe(se,se,!0,!1)),(L?Promise.resolve(L):N(O,se)).catch(j=>Zn(j)?Zn(j,2)?j:Re(j):le(j,O,se)).then(j=>{if(j){if(Zn(j,2))return Pp(r,v(j.to),O)&&re&&(re._count=re._count?re._count+1:1)>30?(Ke(`Detected a possibly infinite redirection in a navigation guard when going from "${se.fullPath}" to "${O.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):S(Je({replace:g},x(j.to),{state:typeof j.to=="object"?Je({},_e,j.to.state):_e,force:X}),re||O)}else j=B(O,se,!0,g,_e);return G(O,se,j),j})}function k(A,re){const oe=_(A,re);return oe?Promise.reject(oe):Promise.resolve()}function M(A){const re=Qe.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(A):A()}function N(A,re){let oe;const[se,_e,X]=P$(A,re);oe=lc(se.reverse(),"beforeRouteLeave",A,re);for(const w of se)w.leaveGuards.forEach(O=>{oe.push(Sr(O,A,re))});const g=k.bind(null,A,re);return oe.push(g),Mt(oe).then(()=>{oe=[];for(const w of s.list())oe.push(Sr(w,A,re));return oe.push(g),Mt(oe)}).then(()=>{oe=lc(_e,"beforeRouteUpdate",A,re);for(const w of _e)w.updateGuards.forEach(O=>{oe.push(Sr(O,A,re))});return oe.push(g),Mt(oe)}).then(()=>{oe=[];for(const w of A.matched)if(w.beforeEnter&&!re.matched.includes(w))if(mn(w.beforeEnter))for(const O of w.beforeEnter)oe.push(Sr(O,A,re));else oe.push(Sr(w.beforeEnter,A,re));return oe.push(g),Mt(oe)}).then(()=>(A.matched.forEach(w=>w.enterCallbacks={}),oe=lc(X,"beforeRouteEnter",A,re),oe.push(g),Mt(oe))).then(()=>{oe=[];for(const w of i.list())oe.push(Sr(w,A,re));return oe.push(g),Mt(oe)}).catch(w=>Zn(w,8)?w:Promise.reject(w))}function G(A,re,oe){for(const se of l.list())M(()=>se(A,re,oe))}function B(A,re,oe,se,_e){const X=_(A,re);if(X)return X;const g=re===br,w=tr?history.state:{};oe&&(se||g?o.replace(A.fullPath,Je({scroll:g&&w&&w.scroll},_e)):o.push(A.fullPath,_e)),a.value=A,Xe(A,re,oe,g),Re()}let te;function V(){te||(te=o.listen((A,re,oe)=>{if(!yt.listening)return;const se=v(A),_e=P(se);if(_e){S(Je(_e,{replace:!0}),se).catch(qs);return}c=se;const X=a.value;tr&&kS(Mp(X.fullPath,oe.delta),Ma()),N(se,X).catch(g=>Zn(g,12)?g:Zn(g,2)?(S(g.to,se).then(w=>{Zn(w,20)&&!oe.delta&&oe.type===mi.pop&&o.go(-1,!1)}).catch(qs),Promise.reject()):(oe.delta&&o.go(-oe.delta,!1),le(g,se,X))).then(g=>{g=g||B(se,X,!1),g&&(oe.delta&&!Zn(g,8)?o.go(-oe.delta,!1):oe.type===mi.pop&&Zn(g,20)&&o.go(-1,!1)),G(se,X,g)}).catch(qs)}))}let ne=Ss(),ve=Ss(),J;function le(A,re,oe){Re(A);const se=ve.list();return se.length?se.forEach(_e=>_e(A,re,oe)):(Ke("uncaught error during route navigation:"),console.error(A)),Promise.reject(A)}function me(){return J&&a.value!==br?Promise.resolve():new Promise((A,re)=>{ne.add([A,re])})}function Re(A){return J||(J=!A,V(),ne.list().forEach(([re,oe])=>A?oe(A):re()),ne.reset()),A}function Xe(A,re,oe,se){const{scrollBehavior:_e}=e;if(!tr||!_e)return Promise.resolve();const X=!oe&&SS(Mp(A.fullPath,0))||(se||!oe)&&history.state&&history.state.scroll||null;return Et().then(()=>_e(A,re,X)).then(g=>g&&xS(g)).catch(g=>le(g,A,re))}const nt=A=>o.go(A);let ft;const Qe=new Set,yt={currentRoute:a,listening:!0,addRoute:m,removeRoute:h,hasRoute:y,getRoutes:b,resolve:v,options:e,push:E,replace:I,go:nt,back:()=>nt(-1),forward:()=>nt(1),beforeEach:s.add,beforeResolve:i.add,afterEach:l.add,onError:ve.add,isReady:me,install(A){const re=this;A.component("RouterLink",h$),A.component("RouterView",b$),A.config.globalProperties.$router=re,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>D(a)}),tr&&!ft&&a.value===br&&(ft=!0,E(o.location).catch(_e=>{Ke("Unexpected error when starting the router:",_e)}));const oe={};for(const _e in br)oe[_e]=C(()=>a.value[_e]);A.provide(Ad,re),A.provide(o0,ct(oe)),A.provide(hu,a);const se=A.unmount;Qe.add(A),A.unmount=function(){Qe.delete(A),Qe.size<1&&(c=br,te&&te(),te=null,a.value=br,ft=!1,J=!1),se()},tr&&_$(A,re,t)}};function Mt(A){return A.reduce((re,oe)=>re.then(()=>M(oe)),Promise.resolve())}return yt}function P$(e,t){const n=[],r=[],o=[],s=Math.max(t.matched.length,e.matched.length);for(let i=0;i<s;i++){const l=t.matched[i];l&&(e.matched.find(c=>Nr(c,l))?r.push(l):n.push(l));const a=e.matched[i];a&&(t.matched.find(c=>Nr(c,a))||o.push(a))}return[n,r,o]}const ac=z(!1),Ys=z(!1),Uo=z(!1),T$=z(!0),vu=x2({xs:460,..._2}),go=rS(),f0=Z2(),M$=C(()=>go.height.value-go.width.value/Pr>180),p0=K2(cr?document.body:null),Ar=b2(),A$=C(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=Ar.value)==null?void 0:e.tagName)||"")||((t=Ar.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),R$=C(()=>{var e;return["BUTTON","A"].includes(((e=Ar.value)==null?void 0:e.tagName)||"")});Ln("slidev-camera","default");Ln("slidev-mic","default");const Pl=Ln("slidev-scale",0),Yt=Ln("slidev-show-overview",!1),cc=Ln("slidev-presenter-cursor",!0),qp=Ln("slidev-show-editor",!1);Ln("slidev-editor-width",cr?window.innerWidth*.4:100);const h0=Vg(Yt);function Kp(e,t,n,r=o=>o){return e*r(.5-t*(.5-n))}function L$(e){return[-e[0],-e[1]]}function Tn(e,t){return[e[0]+t[0],e[1]+t[1]]}function _n(e,t){return[e[0]-t[0],e[1]-t[1]]}function Pn(e,t){return[e[0]*t,e[1]*t]}function D$(e,t){return[e[0]/t,e[1]/t]}function Cs(e){return[e[1],-e[0]]}function Yp(e,t){return e[0]*t[0]+e[1]*t[1]}function j$(e,t){return e[0]===t[0]&&e[1]===t[1]}function N$(e){return Math.hypot(e[0],e[1])}function F$(e){return e[0]*e[0]+e[1]*e[1]}function Zp(e,t){return F$(_n(e,t))}function m0(e){return D$(e,N$(e))}function z$(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function Es(e,t,n){let r=Math.sin(n),o=Math.cos(n),s=e[0]-t[0],i=e[1]-t[1],l=s*o-i*r,a=s*r+i*o;return[l+t[0],a+t[1]]}function gu(e,t,n){return Tn(e,Pn(_n(t,e),n))}function Gp(e,t,n){return Tn(e,Pn(t,n))}var{min:jo,PI:B$}=Math,Xp=.275,Os=B$+1e-4;function H$(e,t={}){let{size:n=16,smoothing:r=.5,thinning:o=.5,simulatePressure:s=!0,easing:i=J=>J,start:l={},end:a={},last:c=!1}=t,{cap:u=!0,easing:d=J=>J*(2-J)}=l,{cap:f=!0,easing:m=J=>--J*J*J+1}=a;if(e.length===0||n<=0)return[];let h=e[e.length-1].runningLength,b=l.taper===!1?0:l.taper===!0?Math.max(n,h):l.taper,y=a.taper===!1?0:a.taper===!0?Math.max(n,h):a.taper,v=Math.pow(n*r,2),x=[],_=[],E=e.slice(0,10).reduce((J,le)=>{let me=le.pressure;if(s){let Re=jo(1,le.distance/n),Xe=jo(1,1-Re);me=jo(1,J+(Xe-J)*(Re*Xp))}return(J+me)/2},e[0].pressure),I=Kp(n,o,e[e.length-1].pressure,i),P,S=e[0].vector,k=e[0].point,M=k,N=k,G=M,B=!1;for(let J=0;J<e.length;J++){let{pressure:le}=e[J],{point:me,vector:Re,distance:Xe,runningLength:nt}=e[J];if(J<e.length-1&&h-nt<3)continue;if(o){if(s){let se=jo(1,Xe/n),_e=jo(1,1-se);le=jo(1,E+(_e-E)*(se*Xp))}I=Kp(n,o,le,i)}else I=n/2;P===void 0&&(P=I);let ft=nt<b?d(nt/b):1,Qe=h-nt<y?m((h-nt)/y):1;I=Math.max(.01,I*Math.min(ft,Qe));let yt=(J<e.length-1?e[J+1]:e[J]).vector,Mt=J<e.length-1?Yp(Re,yt):1,A=Yp(Re,S)<0&&!B,re=Mt!==null&&Mt<0;if(A||re){let se=Pn(Cs(S),I);for(let _e=1/13,X=0;X<=1;X+=_e)N=Es(_n(me,se),me,Os*X),x.push(N),G=Es(Tn(me,se),me,Os*-X),_.push(G);k=N,M=G,re&&(B=!0);continue}if(B=!1,J===e.length-1){let se=Pn(Cs(Re),I);x.push(_n(me,se)),_.push(Tn(me,se));continue}let oe=Pn(Cs(gu(yt,Re,Mt)),I);N=_n(me,oe),(J<=1||Zp(k,N)>v)&&(x.push(N),k=N),G=Tn(me,oe),(J<=1||Zp(M,G)>v)&&(_.push(G),M=G),E=le,S=Re}let te=e[0].point.slice(0,2),V=e.length>1?e[e.length-1].point.slice(0,2):Tn(e[0].point,[1,1]),ne=[],ve=[];if(e.length===1){if(!(b||y)||c){let J=Gp(te,m0(Cs(_n(te,V))),-(P||I)),le=[];for(let me=1/13,Re=me;Re<=1;Re+=me)le.push(Es(J,te,Os*2*Re));return le}}else{if(!(b||y&&e.length===1))if(u)for(let le=1/13,me=le;me<=1;me+=le){let Re=Es(_[0],te,Os*me);ne.push(Re)}else{let le=_n(x[0],_[0]),me=Pn(le,.5),Re=Pn(le,.51);ne.push(_n(te,me),_n(te,Re),Tn(te,Re),Tn(te,me))}let J=Cs(L$(e[e.length-1].vector));if(y||b&&e.length===1)ve.push(V);else if(f){let le=Gp(V,J,I);for(let me=1/29,Re=me;Re<1;Re+=me)ve.push(Es(le,V,Os*3*Re))}else ve.push(Tn(V,Pn(J,I)),Tn(V,Pn(J,I*.99)),_n(V,Pn(J,I*.99)),_n(V,Pn(J,I)))}return x.concat(ve,_.reverse(),ne)}function V$(e,t={}){var n;let{streamline:r=.5,size:o=16,last:s=!1}=t;if(e.length===0)return[];let i=.15+(1-r)*.85,l=Array.isArray(e[0])?e:e.map(({x:m,y:h,pressure:b=.5})=>[m,h,b]);if(l.length===2){let m=l[1];l=l.slice(0,-1);for(let h=1;h<5;h++)l.push(gu(l[0],m,h/4))}l.length===1&&(l=[...l,[...Tn(l[0],[1,1]),...l[0].slice(2)]]);let a=[{point:[l[0][0],l[0][1]],pressure:l[0][2]>=0?l[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],c=!1,u=0,d=a[0],f=l.length-1;for(let m=1;m<l.length;m++){let h=s&&m===f?l[m].slice(0,2):gu(d.point,l[m],i);if(j$(d.point,h))continue;let b=z$(h,d.point);if(u+=b,m<f&&!c){if(u<o)continue;c=!0}d={point:h,pressure:l[m][2]>=0?l[m][2]:.5,vector:m0(_n(d.point,h)),distance:b,runningLength:u},a.push(d)}return a[0].vector=((n=a[1])==null?void 0:n.vector)||[0,0],a}function W$(e,t={}){return H$(V$(e,t),t)}var U$=()=>({events:{},emit(e,...t){let n=this.events[e]||[];for(let r=0,o=n.length;r<o;r++)n[r](...t)},on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(o=>t!==o)}}});function na(e,t){return e-t}function q$(e){return e<0?-1:1}function ra(e){return[Math.abs(e),q$(e)]}function v0(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var K$=2,nr=K$,ls=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var t;const n=this.drauu.el,r=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const o=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-o.left)*r,y:(e.pageY-o.top)*r,pressure:e.pressure}}else{const o=this.drauu.svgPoint;o.x=e.clientX,o.y=e.clientY;const s=o.matrixTransform((t=n.getScreenCTM())==null?void 0:t.inverse());return{x:s.x*r,y:s.y*r,pressure:e.pressure}}}createElement(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg",e),r=t?{...this.brush,...t}:this.brush;return n.setAttribute("fill",r.fill??"transparent"),n.setAttribute("stroke",r.color),n.setAttribute("stroke-width",r.size.toString()),n.setAttribute("stroke-linecap","round"),r.dasharray&&n.setAttribute("stroke-dasharray",r.dasharray),n}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(nr))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},Y$=class extends ls{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=W$(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const n=t.reduce((r,[o,s],i,l)=>{const[a,c]=l[(i+1)%l.length];return r.push(o,s,(o+a)/2,(s+c)/2),r},["M",...t[0],"Q"]);return n.push("Z"),n.map(r=>typeof r=="number"?r.toFixed(2):r).join(" ")}},Z$=class extends ls{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=ra(e.x-this.start.x),[r,o]=ra(e.y-this.start.y);if(this.shiftPressed){const s=Math.min(t,r);t=s,r=s}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",r);else{const[s,i]=[this.start.x,this.start.x+t*n].sort(na),[l,a]=[this.start.y,this.start.y+r*o].sort(na);this.attr("cx",(s+i)/2),this.attr("cy",(l+a)/2),this.attr("rx",(i-s)/2),this.attr("ry",(a-l)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function g0(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),r=document.createElementNS("http://www.w3.org/2000/svg","marker"),o=document.createElementNS("http://www.w3.org/2000/svg","path");return o.setAttribute("fill",t),r.setAttribute("id",e),r.setAttribute("viewBox","0 -5 10 10"),r.setAttribute("refX","5"),r.setAttribute("refY","0"),r.setAttribute("markerWidth","4"),r.setAttribute("markerHeight","4"),r.setAttribute("orient","auto"),o.setAttribute("d","M0,-5L10,0L0,5"),r.appendChild(o),n.appendChild(r),n}var G$=class extends ls{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=v0(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(g0(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const r=e.x-this.start.x,o=e.y-this.start.y;if(o!==0){let s=r/o;s=Math.round(s),Math.abs(s)<=1?(t=this.start.x+o*s,n=this.start.y+o):(t=this.start.x+r,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},X$=class extends ls{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=ra(e.x-this.start.x),[r,o]=ra(e.y-this.start.y);if(this.shiftPressed){const s=Math.min(t,r);t=s,r=s}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-r),this.attr("width",t*2),this.attr("height",r*2);else{const[s,i]=[this.start.x,this.start.x+t*n].sort(na),[l,a]=[this.start.y,this.start.y+r*o].sort(na);this.attr("x",s),this.attr("y",l),this.attr("width",i-s),this.attr("height",a-l)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function J$(e,t){const n=e.x-t.x,r=e.y-t.y;return n*n+r*r}function Q$(e,t,n){let r=t.x,o=t.y,s=n.x-r,i=n.y-o;if(s!==0||i!==0){const l=((e.x-r)*s+(e.y-o)*i)/(s*s+i*i);l>1?(r=n.x,o=n.y):l>0&&(r+=s*l,o+=i*l)}return s=e.x-r,i=e.y-o,s*s+i*i}function eC(e,t){let n=e[0];const r=[n];let o;for(let s=1,i=e.length;s<i;s++)o=e[s],J$(o,n)>t&&(r.push(o),n=o);return n!==o&&o&&r.push(o),r}function bu(e,t,n,r,o){let s=r,i=0;for(let l=t+1;l<n;l++){const a=Q$(e[l],e[t],e[n]);a>s&&(i=l,s=a)}s>r&&(i-t>1&&bu(e,t,i,r,o),o.push(e[i]),n-i>1&&bu(e,i,n,r,o))}function tC(e,t){const n=e.length-1,r=[e[0]];return bu(e,0,n,t,r),r.push(e[n]),r}function Jp(e,t,n=!1){if(e.length<=2)return e;const r=t!==void 0?t*t:1;return e=n?e:eC(e,r),e=tC(e,r),e}var nC=class extends ls{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=v0();const t=g0(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Jp(this.points,1,!0),this.count=0),this.attr("d",eh(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",eh(Jp(this.points,1,!0))),!e.getTotalLength()))}};function rC(e,t){const n=t.x-e.x,r=t.y-e.y;return{length:Math.sqrt(n**2+r**2),angle:Math.atan2(r,n)}}function Qp(e,t,n,r){const o=t||e,s=n||e,i=.2,l=rC(o,s),a=l.angle+(r?Math.PI:0),c=l.length*i,u=e.x+Math.cos(a)*c,d=e.y+Math.sin(a)*c;return{x:u,y:d}}function oC(e,t,n){const r=Qp(n[t-1],n[t-2],e),o=Qp(e,n[t-1],n[t+1],!0);return`C ${r.x.toFixed(nr)},${r.y.toFixed(nr)} ${o.x.toFixed(nr)},${o.y.toFixed(nr)} ${e.x.toFixed(nr)},${e.y.toFixed(nr)}`}function eh(e){return e.reduce((t,n,r,o)=>r===0?`M ${n.x.toFixed(nr)},${n.y.toFixed(nr)}`:`${t} ${oC(n,r,o)}`,"")}var sC=class extends ls{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,r)=>{if(n&&n.length)for(let o=0;o<n.length;o++){const s=n[o];if(s.getTotalLength){const i=s.getTotalLength();for(let l=0;l<this.pathSubFactor;l++){const a=s.getPointAtLength(i*l/this.pathSubFactor),c=s.getPointAtLength(i*(l+1)/this.pathSubFactor);this.pathFragments.push({x1:a.x,x2:c.x,y1:a.y,y2:c.y,segment:l,element:r||s})}}else s.children&&t(s.children,s)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],r={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,r)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,r=e.x2,o=t.x1,s=t.x2,i=e.y1,l=e.y2,a=t.y1,c=t.y2,u=(n-r)*(a-c)-(i-l)*(o-s),d=(n*l-i*r)*(o-s)-(n-r)*(o*c-a*s),f=(n*l-i*r)*(a-c)-(i-l)*(o*c-a*s),m=(h,b,y)=>h>=b&&h<=y?!0:h>=y&&h<=b;if(u===0)return!1;{const h={x:d/u,y:f/u};return m(h.x,n,r)&&m(h.y,i,l)&&m(h.x,o,s)&&m(h.y,a,c)}}};function iC(e){return{draw:new nC(e),stylus:new Y$(e),line:new G$(e),rectangle:new X$(e),ellipse:new Z$(e),eraseLine:new sC(e)}}var lC=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=U$(),this._models=iC(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,r=this.eventStart.bind(this),o=this.eventMove.bind(this),s=this.eventEnd.bind(this),i=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",r,{passive:!1}),window.addEventListener("pointermove",o,{passive:!1}),window.addEventListener("pointerup",s,{passive:!1}),window.addEventListener("pointercancel",s,{passive:!1}),window.addEventListener("keydown",i,!1),window.addEventListener("keyup",i,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",r),window.removeEventListener("pointermove",o),window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",s),window.removeEventListener("keydown",i,!1),window.removeEventListener("keyup",i,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function aC(e){return new lC(e)}const yu=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Bn=Ln("slidev-drawing-enabled",!1),l7=Ln("slidev-drawing-pinned",!1),cC=z(!1),uC=z(!1),dC=z(!1),gi=z(!1),oo=Fk(Ln("slidev-drawing-brush",{color:yu[0],size:4,mode:"stylus"})),th=z("stylus"),b0=C(()=>Ze.drawings.syncAll||rn.value);let bi=!1;const Is=C({get(){return th.value},set(e){th.value=e,e==="arrow"?(oo.mode="line",oo.arrowEnd=!0):(oo.mode=e,oo.arrowEnd=!1)}}),fC=ct({brush:oo,acceptsInputTypes:C(()=>Bn.value&&(!Ze.drawings.presenterOnly||rn.value)?void 0:["pen"]),coordinateTransform:!1}),Xt=_a(aC(fC));function pC(){Xt.clear(),b0.value&&Fg(mt.value,"")}function Rd(){var e;uC.value=Xt.canRedo(),cC.value=Xt.canUndo(),dC.value=!!((e=Xt.el)!=null&&e.children.length)}function hC(e){bi=!0;const t=ea[e||mt.value];t!=null?Xt.load(t):Xt.clear(),Rd(),bi=!1}Xt.on("changed",()=>{if(Rd(),!bi){const e=Xt.dump(),t=mt.value;(ea[t]||"")!==e&&b0.value&&Fg(t,Xt.dump())}});Lk(e=>{bi=!0,e[mt.value]!=null&&Xt.load(e[mt.value]||""),bi=!1,Rd()});Et(()=>{be(mt,()=>{Xt.mounted&&hC()},{immediate:!0})});Xt.on("start",()=>gi.value=!0);Xt.on("end",()=>gi.value=!1);window.addEventListener("keydown",e=>{if(!Bn.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?Xt.redo():Xt.undo():e.code==="Escape"?Bn.value=!1:e.code==="KeyL"&&t?Is.value="line":e.code==="KeyA"&&t?Is.value="arrow":e.code==="KeyS"&&t?Is.value="stylus":e.code==="KeyR"&&t?Is.value="rectangle":e.code==="KeyE"&&t?Is.value="ellipse":e.code==="KeyC"&&t?pC():e.code.startsWith("Digit")&&t&&+e.code[5]<=yu.length?oo.color=yu[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);function $t(...e){return C(()=>e.every(t=>At(t)))}function cn(e){return C(()=>!At(e))}const nh=A2(),uc=Ln("slidev-color-schema","auto"),wu=C(()=>Ze.colorSchema!=="auto"),Ld=C({get(){return wu.value?Ze.colorSchema==="dark":uc.value==="auto"?nh.value:uc.value==="dark"},set(e){wu.value||(uc.value=e===nh.value?"auto":e?"dark":"light")}}),y0=Vg(Ld);cr&&be(Ld,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const Tl=z(1),Ml=C(()=>_t.length),hn=z(0),Dd=z(0);function mC(){hn.value>Tl.value&&(hn.value-=1)}function vC(){hn.value<Ml.value&&(hn.value+=1)}function gC(){if(hn.value>Tl.value){let e=hn.value-Dd.value;e<Tl.value&&(e=Tl.value),hn.value=e}}function bC(){if(hn.value<Ml.value){let e=hn.value+Dd.value;e>Ml.value&&(e=Ml.value),hn.value=e}}function yC(){const{escape:e,space:t,shift:n,left:r,right:o,up:s,down:i,enter:l,d:a,g:c,o:u}=f0;let d=[{name:"next_space",key:$t(t,cn(n)),fn:Rr,autoRepeat:!0},{name:"prev_space",key:$t(t,n),fn:Lr,autoRepeat:!0},{name:"next_right",key:$t(o,cn(n),cn(Yt)),fn:Rr,autoRepeat:!0},{name:"prev_left",key:$t(r,cn(n),cn(Yt)),fn:Lr,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Rr,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Lr,autoRepeat:!0},{name:"next_down",key:$t(i,cn(Yt)),fn:Ei,autoRepeat:!0},{name:"prev_up",key:$t(s,cn(Yt)),fn:()=>Oi(!1),autoRepeat:!0},{name:"next_shift",key:$t(o,n),fn:Ei,autoRepeat:!0},{name:"prev_shift",key:$t(r,n),fn:()=>Oi(!1),autoRepeat:!0},{name:"toggle_dark",key:$t(a,cn(Bn)),fn:y0},{name:"toggle_overview",key:$t(u,cn(Bn)),fn:h0},{name:"hide_overview",key:$t(e,cn(Bn)),fn:()=>Yt.value=!1},{name:"goto",key:$t(c,cn(Bn)),fn:()=>Uo.value=!Uo.value},{name:"next_overview",key:$t(o,Yt),fn:vC},{name:"prev_overview",key:$t(r,Yt),fn:mC},{name:"up_overview",key:$t(s,Yt),fn:gC},{name:"down_overview",key:$t(i,Yt),fn:bC},{name:"goto_from_overview",key:$t(l,Yt),fn:()=>{os(hn.value),Yt.value=!1}}];const f=new Set(d.map(h=>h.name));if(d.filter(h=>h.name&&f.has(h.name)).length===0){const h=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(h),console.warn(h)}return d}const w0=$t(cn(A$),cn(R$),T$);function wC(e,t,n=!1){typeof e=="string"&&(e=f0[e]);const r=$t(e,w0);let o=0,s;const i=()=>{if(clearTimeout(s),!r.value){o=0;return}n&&(s=setTimeout(i,Math.max(1e3-o*250,150)),o++),t()};return be(r,i,{flush:"sync"})}function _C(e,t){return g2(e,n=>{w0.value&&(n.repeat||t())})}function xC(){const e=yC();new Map(e.map(n=>[n.key,n])).forEach(n=>{n.fn&&wC(n.key,n.fn,n.autoRepeat)}),_C("f",()=>p0.toggle())}const kC={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},SC=p("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),$C=[SC];function CC(e,t){return T(),Y("svg",kC,$C)}const EC={name:"carbon-close",render:CC};function jd(e,t=""){var o,s;const n=["slidev-page",t],r=(s=(o=e==null?void 0:e.meta)==null?void 0:o.slide)==null?void 0:s.no;return r!=null&&n.push(`slidev-page-${r}`),n.filter(Boolean).join(" ")}const OC=pe({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;ie($e);const n=z(),r=U2(n),o=C(()=>t.width?t.width:r.width.value),s=C(()=>t.width?t.width/Pr:r.height.value);t.width&&Jt(()=>{n.value&&(n.value.style.width=`${o.value}px`,n.value.style.height=`${s.value}px`)});const i=C(()=>o.value/s.value),l=C(()=>t.scale&&!rs.value?t.scale:i.value<Pr?o.value/Tr:s.value*Pr/Tr),a=C(()=>({height:`${Pd}px`,width:`${Tr}px`,transform:`translate(-50%, -50%) scale(${l.value})`})),c=C(()=>({"select-none":!Ze.selectable}));return gt(Dg,l),(u,d)=>(T(),Y("div",{id:"slide-container",ref_key:"root",ref:n,class:ht(c.value)},[p("div",{id:"slide-content",style:xt(a.value)},[Sn(u.$slots,"default")],4),Sn(u.$slots,"controls")],2))}});const Ce=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},_0=Ce(OC,[["__file","/home/runner/work/docker-slidev/docker-slidev/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Nd=pe({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=zn(e,"clicks",t),r=zn(e,"clicksElements",t),o=zn(e,"clicksDisabled",t),s=zn(e,"clicksOrderMap",t);r.value.length=0,gt(_k,e.route),gt(xk,e.context),gt(Ol,n),gt(Il,o),gt(Vo,r),gt(lu,s)},render(){var e,t;return this.$props.is?F(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),IC=["innerHTML"],PC=pe({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return ie($e),(t,n)=>D(ea)[t.page]?(T(),Y("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:D(ea)[t.page]},null,8,IC)):je("v-if",!0)}}),x0=Ce(PC,[["__file","/home/runner/work/docker-slidev/docker-slidev/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),TC=Object.freeze(Object.defineProperty({__proto__:null,default:x0},Symbol.toStringTag,{value:"Module"})),MC={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},AC=["onClick"],dc=4*16*2,rh=2*16,RC=pe({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:t}){const n=e;ie($e);const r=zn(n,"modelValue",t);function o(){r.value=!1}function s(d){os(d),o()}function i(d){return d===hn.value}const l=vu.smaller("xs"),a=vu.smaller("sm"),c=C(()=>l.value?go.width.value-dc:a.value?(go.width.value-dc-rh)/2:300),u=C(()=>Math.floor((go.width.value-dc)/(c.value+rh)));return Jt(()=>{hn.value=mt.value,Dd.value=u.value}),(d,f)=>{const m=EC;return T(),Y(ze,null,[Oe(p("div",MC,[p("div",{class:"grid gap-y-4 gap-x-8 w-full",style:xt(`grid-template-columns: repeat(auto-fit,minmax(${c.value}px,1fr))`)},[(T(!0),Y(ze,null,ss(D(_t),(h,b)=>(T(),Y("div",{key:h.path,class:"relative"},[p("div",{class:ht(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":i(b+1),"border-gray-400":!i(b+1)}]),style:xt(D(Td)),onClick:y=>s(+h.path)},[(T(),ge(_0,{key:h.path,width:c.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:ce(()=>[h!=null&&h.component?(T(),ge(D(Nd),{key:0,is:h.component,"clicks-disabled":!0,class:ht(D(jd)(h)),route:h,context:"overview"},null,8,["is","class","route"])):je("v-if",!0),$(x0,{page:+h.path},null,8,["page"])]),_:2},1032,["width"]))],14,AC),p("div",{class:"absolute top-0 opacity-50",style:xt(`left: ${c.value+5}px`)},Rn(b+1),5)]))),128))],4)],512),[[ji,D(r)]]),D(r)?(T(),Y("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:o},[$(m)])):je("v-if",!0)],64)}}});const LC=Ce(RC,[["__file","/home/runner/work/docker-slidev/docker-slidev/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),DC="/docker-slidev/assets/logo-b72bde5d.png",jC={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},NC=pe({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;ie($e);const r=zn(n,"modelValue",t);function o(){r.value=!1}return(s,i)=>(T(),ge(Gv,null,[D(r)?(T(),Y("div",jC,[p("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:i[0]||(i[0]=l=>o())}),p("div",{class:ht(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ main"},[Sn(s.$slots,"default")],2)])):je("v-if",!0)],1024))}}),FC=Ce(NC,[["__file","/home/runner/work/docker-slidev/docker-slidev/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/Modal.vue"]]),zC={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},BC=["innerHTML"],HC=p("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[p("div",{class:"flex gap-1 children:my-auto"},[p("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),p("img",{class:"w-5 h-5",src:DC,alt:"Slidev"}),p("div",{style:{color:"#2082A6"}},[p("b",null,"Sli"),R("dev ")])])],-1),VC=pe({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;ie($e);const r=zn(n,"modelValue",t),o=C(()=>typeof Ze.info=="string");return(s,i)=>(T(),ge(FC,{modelValue:D(r),"onUpdate:modelValue":i[0]||(i[0]=l=>Ye(r)?r.value=l:null),class:"px-6 py-4"},{default:ce(()=>[p("div",zC,[o.value?(T(),Y("div",{key:0,class:"mb-4",innerHTML:D(Ze).info},null,8,BC)):je("v-if",!0),HC])]),_:1},8,["modelValue"]))}});const WC=Ce(VC,[["__file","/home/runner/work/docker-slidev/docker-slidev/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/InfoDialog.vue"]]);function ur(e){return Array.isArray?Array.isArray(e):$0(e)==="[object Array]"}const UC=1/0;function qC(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-UC?"-0":t}function KC(e){return e==null?"":qC(e)}function Hn(e){return typeof e=="string"}function k0(e){return typeof e=="number"}function YC(e){return e===!0||e===!1||ZC(e)&&$0(e)=="[object Boolean]"}function S0(e){return typeof e=="object"}function ZC(e){return S0(e)&&e!==null}function dn(e){return e!=null}function fc(e){return!e.trim().length}function $0(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const GC="Incorrect 'index' type",XC=e=>`Invalid value for key ${e}`,JC=e=>`Pattern length exceeds max of ${e}.`,QC=e=>`Missing ${e} property in key`,e5=e=>`Property 'weight' in key '${e}' must be a positive integer`,oh=Object.prototype.hasOwnProperty;class t5{constructor(t){this._keys=[],this._keyMap={};let n=0;t.forEach(r=>{let o=C0(r);n+=o.weight,this._keys.push(o),this._keyMap[o.id]=o,n+=o.weight}),this._keys.forEach(r=>{r.weight/=n})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function C0(e){let t=null,n=null,r=null,o=1,s=null;if(Hn(e)||ur(e))r=e,t=sh(e),n=_u(e);else{if(!oh.call(e,"name"))throw new Error(QC("name"));const i=e.name;if(r=i,oh.call(e,"weight")&&(o=e.weight,o<=0))throw new Error(e5(i));t=sh(i),n=_u(i),s=e.getFn}return{path:t,id:n,weight:o,src:r,getFn:s}}function sh(e){return ur(e)?e:e.split(".")}function _u(e){return ur(e)?e.join("."):e}function n5(e,t){let n=[],r=!1;const o=(s,i,l)=>{if(dn(s))if(!i[l])n.push(s);else{let a=i[l];const c=s[a];if(!dn(c))return;if(l===i.length-1&&(Hn(c)||k0(c)||YC(c)))n.push(KC(c));else if(ur(c)){r=!0;for(let u=0,d=c.length;u<d;u+=1)o(c[u],i,l+1)}else i.length&&o(c,i,l+1)}};return o(e,Hn(t)?t.split("."):t,0),r?n:n[0]}const r5={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},o5={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},s5={location:0,threshold:.6,distance:100},i5={useExtendedSearch:!1,getFn:n5,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var Me={...o5,...r5,...s5,...i5};const l5=/[^ ]+/g;function a5(e=1,t=3){const n=new Map,r=Math.pow(10,t);return{get(o){const s=o.match(l5).length;if(n.has(s))return n.get(s);const i=1/Math.pow(s,.5*e),l=parseFloat(Math.round(i*r)/r);return n.set(s,l),l},clear(){n.clear()}}}class Fd{constructor({getFn:t=Me.getFn,fieldNormWeight:n=Me.fieldNormWeight}={}){this.norm=a5(n,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Hn(this.docs[0])?this.docs.forEach((t,n)=>{this._addString(t,n)}):this.docs.forEach((t,n)=>{this._addObject(t,n)}),this.norm.clear())}add(t){const n=this.size();Hn(t)?this._addString(t,n):this._addObject(t,n)}removeAt(t){this.records.splice(t,1);for(let n=t,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(t,n){return t[this._keysMap[n]]}size(){return this.records.length}_addString(t,n){if(!dn(t)||fc(t))return;let r={v:t,i:n,n:this.norm.get(t)};this.records.push(r)}_addObject(t,n){let r={i:n,$:{}};this.keys.forEach((o,s)=>{let i=o.getFn?o.getFn(t):this.getFn(t,o.path);if(dn(i)){if(ur(i)){let l=[];const a=[{nestedArrIndex:-1,value:i}];for(;a.length;){const{nestedArrIndex:c,value:u}=a.pop();if(dn(u))if(Hn(u)&&!fc(u)){let d={v:u,i:c,n:this.norm.get(u)};l.push(d)}else ur(u)&&u.forEach((d,f)=>{a.push({nestedArrIndex:f,value:d})})}r.$[s]=l}else if(Hn(i)&&!fc(i)){let l={v:i,n:this.norm.get(i)};r.$[s]=l}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function E0(e,t,{getFn:n=Me.getFn,fieldNormWeight:r=Me.fieldNormWeight}={}){const o=new Fd({getFn:n,fieldNormWeight:r});return o.setKeys(e.map(C0)),o.setSources(t),o.create(),o}function c5(e,{getFn:t=Me.getFn,fieldNormWeight:n=Me.fieldNormWeight}={}){const{keys:r,records:o}=e,s=new Fd({getFn:t,fieldNormWeight:n});return s.setKeys(r),s.setIndexRecords(o),s}function ll(e,{errors:t=0,currentLocation:n=0,expectedLocation:r=0,distance:o=Me.distance,ignoreLocation:s=Me.ignoreLocation}={}){const i=t/e.length;if(s)return i;const l=Math.abs(r-n);return o?i+l/o:l?1:i}function u5(e=[],t=Me.minMatchCharLength){let n=[],r=-1,o=-1,s=0;for(let i=e.length;s<i;s+=1){let l=e[s];l&&r===-1?r=s:!l&&r!==-1&&(o=s-1,o-r+1>=t&&n.push([r,o]),r=-1)}return e[s-1]&&s-r>=t&&n.push([r,s-1]),n}const to=32;function d5(e,t,n,{location:r=Me.location,distance:o=Me.distance,threshold:s=Me.threshold,findAllMatches:i=Me.findAllMatches,minMatchCharLength:l=Me.minMatchCharLength,includeMatches:a=Me.includeMatches,ignoreLocation:c=Me.ignoreLocation}={}){if(t.length>to)throw new Error(JC(to));const u=t.length,d=e.length,f=Math.max(0,Math.min(r,d));let m=s,h=f;const b=l>1||a,y=b?Array(d):[];let v;for(;(v=e.indexOf(t,h))>-1;){let S=ll(t,{currentLocation:v,expectedLocation:f,distance:o,ignoreLocation:c});if(m=Math.min(S,m),h=v+u,b){let k=0;for(;k<u;)y[v+k]=1,k+=1}}h=-1;let x=[],_=1,E=u+d;const I=1<<u-1;for(let S=0;S<u;S+=1){let k=0,M=E;for(;k<M;)ll(t,{errors:S,currentLocation:f+M,expectedLocation:f,distance:o,ignoreLocation:c})<=m?k=M:E=M,M=Math.floor((E-k)/2+k);E=M;let N=Math.max(1,f-M+1),G=i?d:Math.min(f+M,d)+u,B=Array(G+2);B[G+1]=(1<<S)-1;for(let V=G;V>=N;V-=1){let ne=V-1,ve=n[e.charAt(ne)];if(b&&(y[ne]=+!!ve),B[V]=(B[V+1]<<1|1)&ve,S&&(B[V]|=(x[V+1]|x[V])<<1|1|x[V+1]),B[V]&I&&(_=ll(t,{errors:S,currentLocation:ne,expectedLocation:f,distance:o,ignoreLocation:c}),_<=m)){if(m=_,h=ne,h<=f)break;N=Math.max(1,2*f-h)}}if(ll(t,{errors:S+1,currentLocation:f,expectedLocation:f,distance:o,ignoreLocation:c})>m)break;x=B}const P={isMatch:h>=0,score:Math.max(.001,_)};if(b){const S=u5(y,l);S.length?a&&(P.indices=S):P.isMatch=!1}return P}function f5(e){let t={};for(let n=0,r=e.length;n<r;n+=1){const o=e.charAt(n);t[o]=(t[o]||0)|1<<r-n-1}return t}class O0{constructor(t,{location:n=Me.location,threshold:r=Me.threshold,distance:o=Me.distance,includeMatches:s=Me.includeMatches,findAllMatches:i=Me.findAllMatches,minMatchCharLength:l=Me.minMatchCharLength,isCaseSensitive:a=Me.isCaseSensitive,ignoreLocation:c=Me.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:o,includeMatches:s,findAllMatches:i,minMatchCharLength:l,isCaseSensitive:a,ignoreLocation:c},this.pattern=a?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const u=(f,m)=>{this.chunks.push({pattern:f,alphabet:f5(f),startIndex:m})},d=this.pattern.length;if(d>to){let f=0;const m=d%to,h=d-m;for(;f<h;)u(this.pattern.substr(f,to),f),f+=to;if(m){const b=d-to;u(this.pattern.substr(b),b)}}else u(this.pattern,0)}searchIn(t){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(t=t.toLowerCase()),this.pattern===t){let h={isMatch:!0,score:0};return r&&(h.indices=[[0,t.length-1]]),h}const{location:o,distance:s,threshold:i,findAllMatches:l,minMatchCharLength:a,ignoreLocation:c}=this.options;let u=[],d=0,f=!1;this.chunks.forEach(({pattern:h,alphabet:b,startIndex:y})=>{const{isMatch:v,score:x,indices:_}=d5(t,h,b,{location:o+y,distance:s,threshold:i,findAllMatches:l,minMatchCharLength:a,includeMatches:r,ignoreLocation:c});v&&(f=!0),d+=x,v&&_&&(u=[...u,..._])});let m={isMatch:f,score:f?d/this.chunks.length:1};return f&&r&&(m.indices=u),m}}class Hr{constructor(t){this.pattern=t}static isMultiMatch(t){return ih(t,this.multiRegex)}static isSingleMatch(t){return ih(t,this.singleRegex)}search(){}}function ih(e,t){const n=e.match(t);return n?n[1]:null}class p5 extends Hr{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const n=t===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class h5 extends Hr{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const r=t.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,t.length-1]}}}class m5 extends Hr{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const n=t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class v5 extends Hr{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const n=!t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class g5 extends Hr{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const n=t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class b5 extends Hr{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const n=!t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class I0 extends Hr{constructor(t,{location:n=Me.location,threshold:r=Me.threshold,distance:o=Me.distance,includeMatches:s=Me.includeMatches,findAllMatches:i=Me.findAllMatches,minMatchCharLength:l=Me.minMatchCharLength,isCaseSensitive:a=Me.isCaseSensitive,ignoreLocation:c=Me.ignoreLocation}={}){super(t),this._bitapSearch=new O0(t,{location:n,threshold:r,distance:o,includeMatches:s,findAllMatches:i,minMatchCharLength:l,isCaseSensitive:a,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class P0 extends Hr{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let n=0,r;const o=[],s=this.pattern.length;for(;(r=t.indexOf(this.pattern,n))>-1;)n=r+s,o.push([r,n-1]);const i=!!o.length;return{isMatch:i,score:i?0:1,indices:o}}}const xu=[p5,P0,m5,v5,b5,g5,h5,I0],lh=xu.length,y5=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,w5="|";function _5(e,t={}){return e.split(w5).map(n=>{let r=n.trim().split(y5).filter(s=>s&&!!s.trim()),o=[];for(let s=0,i=r.length;s<i;s+=1){const l=r[s];let a=!1,c=-1;for(;!a&&++c<lh;){const u=xu[c];let d=u.isMultiMatch(l);d&&(o.push(new u(d,t)),a=!0)}if(!a)for(c=-1;++c<lh;){const u=xu[c];let d=u.isSingleMatch(l);if(d){o.push(new u(d,t));break}}}return o})}const x5=new Set([I0.type,P0.type]);class k5{constructor(t,{isCaseSensitive:n=Me.isCaseSensitive,includeMatches:r=Me.includeMatches,minMatchCharLength:o=Me.minMatchCharLength,ignoreLocation:s=Me.ignoreLocation,findAllMatches:i=Me.findAllMatches,location:l=Me.location,threshold:a=Me.threshold,distance:c=Me.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:o,findAllMatches:i,ignoreLocation:s,location:l,threshold:a,distance:c},this.pattern=n?t:t.toLowerCase(),this.query=_5(this.pattern,this.options)}static condition(t,n){return n.useExtendedSearch}searchIn(t){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:o}=this.options;t=o?t:t.toLowerCase();let s=0,i=[],l=0;for(let a=0,c=n.length;a<c;a+=1){const u=n[a];i.length=0,s=0;for(let d=0,f=u.length;d<f;d+=1){const m=u[d],{isMatch:h,indices:b,score:y}=m.search(t);if(h){if(s+=1,l+=y,r){const v=m.constructor.type;x5.has(v)?i=[...i,...b]:i.push(b)}}else{l=0,s=0,i.length=0;break}}if(s){let d={isMatch:!0,score:l/s};return r&&(d.indices=i),d}}return{isMatch:!1,score:1}}}const ku=[];function S5(...e){ku.push(...e)}function Su(e,t){for(let n=0,r=ku.length;n<r;n+=1){let o=ku[n];if(o.condition(e,t))return new o(e,t)}return new O0(e,t)}const oa={AND:"$and",OR:"$or"},$u={PATH:"$path",PATTERN:"$val"},Cu=e=>!!(e[oa.AND]||e[oa.OR]),$5=e=>!!e[$u.PATH],C5=e=>!ur(e)&&S0(e)&&!Cu(e),ah=e=>({[oa.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function T0(e,t,{auto:n=!0}={}){const r=o=>{let s=Object.keys(o);const i=$5(o);if(!i&&s.length>1&&!Cu(o))return r(ah(o));if(C5(o)){const a=i?o[$u.PATH]:s[0],c=i?o[$u.PATTERN]:o[a];if(!Hn(c))throw new Error(XC(a));const u={keyId:_u(a),pattern:c};return n&&(u.searcher=Su(c,t)),u}let l={children:[],operator:s[0]};return s.forEach(a=>{const c=o[a];ur(c)&&c.forEach(u=>{l.children.push(r(u))})}),l};return Cu(e)||(e=ah(e)),r(e)}function E5(e,{ignoreFieldNorm:t=Me.ignoreFieldNorm}){e.forEach(n=>{let r=1;n.matches.forEach(({key:o,norm:s,score:i})=>{const l=o?o.weight:null;r*=Math.pow(i===0&&l?Number.EPSILON:i,(l||1)*(t?1:s))}),n.score=r})}function O5(e,t){const n=e.matches;t.matches=[],dn(n)&&n.forEach(r=>{if(!dn(r.indices)||!r.indices.length)return;const{indices:o,value:s}=r;let i={indices:o,value:s};r.key&&(i.key=r.key.src),r.idx>-1&&(i.refIndex=r.idx),t.matches.push(i)})}function I5(e,t){t.score=e.score}function P5(e,t,{includeMatches:n=Me.includeMatches,includeScore:r=Me.includeScore}={}){const o=[];return n&&o.push(O5),r&&o.push(I5),e.map(s=>{const{idx:i}=s,l={item:t[i],refIndex:i};return o.length&&o.forEach(a=>{a(s,l)}),l})}class as{constructor(t,n={},r){this.options={...Me,...n},this.options.useExtendedSearch,this._keyStore=new t5(this.options.keys),this.setCollection(t,r)}setCollection(t,n){if(this._docs=t,n&&!(n instanceof Fd))throw new Error(GC);this._myIndex=n||E0(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){dn(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const n=[];for(let r=0,o=this._docs.length;r<o;r+=1){const s=this._docs[r];t(s,r)&&(this.removeAt(r),r-=1,o-=1,n.push(s))}return n}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:n=-1}={}){const{includeMatches:r,includeScore:o,shouldSort:s,sortFn:i,ignoreFieldNorm:l}=this.options;let a=Hn(t)?Hn(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return E5(a,{ignoreFieldNorm:l}),s&&a.sort(i),k0(n)&&n>-1&&(a=a.slice(0,n)),P5(a,this._docs,{includeMatches:r,includeScore:o})}_searchStringList(t){const n=Su(t,this.options),{records:r}=this._myIndex,o=[];return r.forEach(({v:s,i,n:l})=>{if(!dn(s))return;const{isMatch:a,score:c,indices:u}=n.searchIn(s);a&&o.push({item:s,idx:i,matches:[{score:c,value:s,norm:l,indices:u}]})}),o}_searchLogical(t){const n=T0(t,this.options),r=(l,a,c)=>{if(!l.children){const{keyId:d,searcher:f}=l,m=this._findMatches({key:this._keyStore.get(d),value:this._myIndex.getValueForItemAtKeyId(a,d),searcher:f});return m&&m.length?[{idx:c,item:a,matches:m}]:[]}const u=[];for(let d=0,f=l.children.length;d<f;d+=1){const m=l.children[d],h=r(m,a,c);if(h.length)u.push(...h);else if(l.operator===oa.AND)return[]}return u},o=this._myIndex.records,s={},i=[];return o.forEach(({$:l,i:a})=>{if(dn(l)){let c=r(n,l,a);c.length&&(s[a]||(s[a]={idx:a,item:l,matches:[]},i.push(s[a])),c.forEach(({matches:u})=>{s[a].matches.push(...u)}))}}),i}_searchObjectList(t){const n=Su(t,this.options),{keys:r,records:o}=this._myIndex,s=[];return o.forEach(({$:i,i:l})=>{if(!dn(i))return;let a=[];r.forEach((c,u)=>{a.push(...this._findMatches({key:c,value:i[u],searcher:n}))}),a.length&&s.push({idx:l,item:i,matches:a})}),s}_findMatches({key:t,value:n,searcher:r}){if(!dn(n))return[];let o=[];if(ur(n))n.forEach(({v:s,i,n:l})=>{if(!dn(s))return;const{isMatch:a,score:c,indices:u}=r.searchIn(s);a&&o.push({score:c,key:t,value:s,idx:i,norm:l,indices:u})});else{const{v:s,n:i}=n,{isMatch:l,score:a,indices:c}=r.searchIn(s);l&&o.push({score:a,key:t,value:s,norm:i,indices:c})}return o}}as.version="6.6.2";as.createIndex=E0;as.parseIndex=c5;as.config=Me;as.parseQuery=T0;S5(k5);const T5={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},M5=["value","disabled","onKeydown"],A5=["border","onClick"],R5={"w-4":"","text-right":"",op50:"","text-sm":""},L5=pe({__name:"Goto",setup(e){ie($e);const t=z(),n=z(),r=z(),o=z(),s=z(""),i=z(0);function l(_){return _!=null}const a=C(()=>new as(_t.map(_=>{var E;return(E=_.meta)==null?void 0:E.slide}).filter(l),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),c=C(()=>s.value.startsWith("/")?s.value.substring(1):s.value),u=C(()=>a.value.search(c.value).map(_=>_.item)),d=C(()=>!!u.value.length);function f(){if(d.value){const _=u.value.at(i.value||0);_&&os(_.no)}m()}function m(){s.value="",Uo.value=!1}function h(_){_.preventDefault(),i.value++,i.value>=u.value.length&&(i.value=0),y()}function b(_){_.preventDefault(),i.value--,i.value<=-2&&(i.value=u.value.length-1),y()}function y(){var E;const _=(E=o.value)==null?void 0:E[i.value];_&&r.value&&(_.offsetTop+_.offsetHeight>r.value.offsetHeight+r.value.scrollTop?r.value.scrollTo({behavior:"smooth",top:_.offsetTop+_.offsetHeight-r.value.offsetHeight+1}):_.offsetTop<r.value.scrollTop&&r.value.scrollTo({behavior:"smooth",top:_.offsetTop}))}function v(_){i.value=0,s.value=_.target.value}function x(_){os(_),m()}return be(Uo,async _=>{var E;_?(s.value="",i.value=0,setTimeout(()=>{var I;return(I=n.value)==null?void 0:I.focus()},0)):(E=n.value)==null||E.blur()}),be(Ar,()=>{var _;(_=t.value)!=null&&_.contains(Ar.value)||m()}),(_,E)=>(T(),Y("div",{id:"slidev-goto-dialog",ref_key:"container",ref:t,class:ht(["fixed right-5 transition-all",D(Uo)?"top-5":"-top-20"]),"w-90":"","max-w-90":"","min-w-90":""},[p("div",T5,[p("input",{id:"slidev-goto-input",ref_key:"input",ref:n,value:s.value,type:"text",disabled:!D(Uo),class:ht(["outline-none bg-transparent",{"text-red-400":!d.value&&s.value}]),placeholder:"Goto...",onKeydown:[el(f,["enter"]),el(m,["escape"]),el(h,["down"]),el(b,["up"])],onInput:v},null,42,M5)]),u.value.length>0?(T(),Y("ul",{key:0,ref_key:"list",ref:r,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(T(!0),Y(ze,null,ss(u.value,(I,P)=>(T(),Y("li",{ref_for:!0,ref_key:"items",ref:o,key:I.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","w-90":"","items-center":"",border:P===0?"":"t main",class:ht(i.value===P?"bg-active op100":"op80"),onClick:xx(S=>x(I.no),["stop"])},[p("div",R5,Rn(I.no),1),R(" "+Rn(I.title),1)],10,A5))),128))],512)):je("v-if",!0)],2))}});const D5=Ce(L5,[["__scopeId","data-v-4a3e8424"],["__file","/home/runner/work/docker-slidev/docker-slidev/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/Goto.vue"]]),j5=pe({__name:"Controls",setup(e){ie($e);const t=qn(),n=qn();return(r,o)=>(T(),Y(ze,null,[$(LC,{modelValue:D(Yt),"onUpdate:modelValue":o[0]||(o[0]=s=>Ye(Yt)?Yt.value=s:null)},null,8,["modelValue"]),$(D5),t.value?(T(),ge(D(t),{key:0})):je("v-if",!0),n.value?(T(),ge(D(n),{key:1,modelValue:D(ac),"onUpdate:modelValue":o[1]||(o[1]=s=>Ye(ac)?ac.value=s:null)},null,8,["modelValue"])):je("v-if",!0),D(Ze).info?(T(),ge(WC,{key:2,modelValue:D(Ys),"onUpdate:modelValue":o[2]||(o[2]=s=>Ye(Ys)?Ys.value=s:null)},null,8,["modelValue"])):je("v-if",!0)],64))}}),N5=Ce(j5,[["__file","/home/runner/work/docker-slidev/docker-slidev/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/Controls.vue"]]),F5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},z5=p("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),B5=[z5];function H5(e,t){return T(),Y("svg",F5,B5)}const V5={name:"carbon-settings-adjust",render:H5},W5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},U5=p("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),q5=p("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),K5=[U5,q5];function Y5(e,t){return T(),Y("svg",W5,K5)}const Z5={name:"carbon-information",render:Y5},G5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},X5=p("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),J5=[X5];function Q5(e,t){return T(),Y("svg",G5,J5)}const eE={name:"carbon-download",render:Q5},tE={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},nE=p("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),rE=p("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),oE=[nE,rE];function sE(e,t){return T(),Y("svg",tE,oE)}const iE={name:"carbon-user-speaker",render:sE},lE={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},aE=p("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),cE=p("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),uE=[aE,cE];function dE(e,t){return T(),Y("svg",lE,uE)}const fE={name:"carbon-presentation-file",render:dE},pE={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},hE=p("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),mE=[hE];function vE(e,t){return T(),Y("svg",pE,mE)}const gE={name:"carbon-pen",render:vE},bE={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},yE=p("g",{fill:"currentColor"},[p("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),p("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),wE=[yE];function _E(e,t){return T(),Y("svg",bE,wE)}const xE={name:"ph-cursor-duotone",render:_E},kE={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},SE=p("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),$E=[SE];function CE(e,t){return T(),Y("svg",kE,$E)}const M0={name:"ph-cursor-fill",render:CE},EE={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},OE=p("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),IE=[OE];function PE(e,t){return T(),Y("svg",EE,IE)}const TE={name:"carbon-sun",render:PE},ME={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},AE=p("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),RE=[AE];function LE(e,t){return T(),Y("svg",ME,RE)}const DE={name:"carbon-moon",render:LE},jE={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},NE=p("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),FE=[NE];function zE(e,t){return T(),Y("svg",jE,FE)}const BE={name:"carbon-apps",render:zE},HE={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},VE=p("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),WE=[VE];function UE(e,t){return T(),Y("svg",HE,WE)}const qE={name:"carbon-arrow-right",render:UE},KE={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},YE=p("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),ZE=[YE];function GE(e,t){return T(),Y("svg",KE,ZE)}const XE={name:"carbon-arrow-left",render:GE},JE={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},QE=p("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),eO=[QE];function tO(e,t){return T(),Y("svg",JE,eO)}const nO={name:"carbon-maximize",render:tO},rO={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},oO=p("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),sO=[oO];function iO(e,t){return T(),Y("svg",rO,sO)}const lO={name:"carbon-minimize",render:iO},aO={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},cO=p("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),uO=[cO];function dO(e,t){return T(),Y("svg",aO,uO)}const fO={name:"carbon-checkmark",render:dO},pO={class:"select-list"},hO={class:"title"},mO={class:"items"},vO=["onClick"],gO=pe({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;ie($e);const r=zn(n,"modelValue",t,{passive:!0});return(o,s)=>{const i=fO;return T(),Y("div",pO,[p("div",hO,Rn(e.title),1),p("div",mO,[(T(!0),Y(ze,null,ss(e.items,l=>(T(),Y("div",{key:l.value,class:ht(["item",{active:D(r)===l.value}]),onClick:()=>{var a;r.value=l.value,(a=l.onClick)==null||a.call(l)}},[$(i,{class:ht(["text-green-500",{"opacity-0":D(r)!==l.value}])},null,8,["class"]),R(" "+Rn(l.display||l.value),1)],10,vO))),128))])])}}});const bO=Ce(gO,[["__scopeId","data-v-a3dcc0f8"],["__file","/home/runner/work/docker-slidev/docker-slidev/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/SelectList.vue"]]),yO={class:"text-sm"},wO=pe({__name:"Settings",setup(e){ie($e);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,r)=>(T(),Y("div",yO,[$(bO,{modelValue:D(Pl),"onUpdate:modelValue":r[0]||(r[0]=o=>Ye(Pl)?Pl.value=o:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),_O=Ce(wO,[["__file","/home/runner/work/docker-slidev/docker-slidev/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/Settings.vue"]]),xO={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},kO=pe({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;ie($e);const r=zn(n,"modelValue",t,{passive:!0}),o=z();return m2(o,()=>{r.value=!1}),(s,i)=>(T(),Y("div",{ref_key:"el",ref:o,class:"flex relative"},[p("button",{class:ht({disabled:e.disabled}),onClick:i[0]||(i[0]=l=>r.value=!D(r))},[Sn(s.$slots,"button",{class:ht({disabled:e.disabled})})],2),(T(),ge(Gv,null,[D(r)?(T(),Y("div",xO,[Sn(s.$slots,"menu")])):je("v-if",!0)],1024))],512))}}),SO=Ce(kO,[["__file","/home/runner/work/docker-slidev/docker-slidev/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/MenuButton.vue"]]),$O={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},CO={__name:"VerticalDivider",setup(e){return ie($e),(t,n)=>(T(),Y("div",$O))}},al=Ce(CO,[["__file","/home/runner/work/docker-slidev/docker-slidev/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),EO={render(){return[]}},OO={class:"slidev-icon-btn"},IO={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},PO={class:"my-auto"},TO={class:"opacity-50"},MO=pe({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;ie($e);const n=vu.smaller("md"),{isFullscreen:r,toggle:o}=p0,s=C(()=>Wu.value?`?password=${Wu.value}`:""),i=C(()=>`/presenter/${mt.value}${s.value}`),l=C(()=>`/${mt.value}${s.value}`),a=z();function c(){a.value&&Ar.value&&a.value.contains(Ar.value)&&Ar.value.blur()}const u=C(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),d=qn(),f=qn();return Mr(()=>import("./DrawingControls-7795f548.js"),[]).then(m=>f.value=m.default),(m,h)=>{const b=lO,y=nO,v=XE,x=qE,_=BE,E=DE,I=TE,P=M0,S=xE,k=gE,M=fE,N=di("RouterLink"),G=iE,B=eE,te=Z5,V=V5;return T(),Y("nav",{ref_key:"root",ref:a,class:"flex flex-col"},[p("div",{class:ht(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",u.value]),onMouseleave:c},[D(er)?je("v-if",!0):(T(),Y("button",{key:0,class:"slidev-icon-btn",onClick:h[0]||(h[0]=(...ne)=>D(o)&&D(o)(...ne))},[D(r)?(T(),ge(b,{key:0})):(T(),ge(y,{key:1}))])),p("button",{class:ht(["slidev-icon-btn",{disabled:!D($z)}]),onClick:h[1]||(h[1]=(...ne)=>D(Lr)&&D(Lr)(...ne))},[$(v)],2),p("button",{class:ht(["slidev-icon-btn",{disabled:!D(Sz)}]),title:"Next",onClick:h[2]||(h[2]=(...ne)=>D(Rr)&&D(Rr)(...ne))},[$(x)],2),D(er)?je("v-if",!0):(T(),Y("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:h[3]||(h[3]=ne=>D(h0)())},[$(_)])),D(wu)?je("v-if",!0):(T(),Y("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:h[4]||(h[4]=ne=>D(y0)())},[D(Ld)?(T(),ge(E,{key:0})):(T(),ge(I,{key:1}))])),$(al),D(er)?je("v-if",!0):(T(),Y(ze,{key:3},[!D(rn)&&!D(n)&&d.value?(T(),Y(ze,{key:0},[$(D(d)),$(al)],64)):je("v-if",!0),D(rn)?(T(),Y("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:h[5]||(h[5]=ne=>cc.value=!D(cc))},[D(cc)?(T(),ge(P,{key:0})):(T(),ge(S,{key:1,class:"opacity-50"}))])):je("v-if",!0)],64)),(!D(Ze).drawings.presenterOnly||D(rn))&&!D(er)?(T(),Y(ze,{key:4},[p("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:h[6]||(h[6]=ne=>Bn.value=!D(Bn))},[$(k),D(Bn)?(T(),Y("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:xt({background:D(oo).color})},null,4)):je("v-if",!0)]),$(al)],64)):je("v-if",!0),D(er)?je("v-if",!0):(T(),Y(ze,{key:5},[D(rn)?(T(),ge(N,{key:0,to:l.value,class:"slidev-icon-btn",title:"Play Mode"},{default:ce(()=>[$(M)]),_:1},8,["to"])):je("v-if",!0),D(yz)?(T(),ge(N,{key:1,to:i.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:ce(()=>[$(G)]),_:1},8,["to"])):je("v-if",!0),je("v-if",!0)],64)),(T(),Y(ze,{key:6},[D(Ze).download?(T(),Y("button",{key:0,class:"slidev-icon-btn",onClick:h[8]||(h[8]=(...ne)=>D(Uu)&&D(Uu)(...ne))},[$(B)])):je("v-if",!0)],64)),!D(rn)&&D(Ze).info&&!D(er)?(T(),Y("button",{key:7,class:"slidev-icon-btn",onClick:h[9]||(h[9]=ne=>Ys.value=!D(Ys))},[$(te)])):je("v-if",!0),!D(rn)&&!D(er)?(T(),ge(SO,{key:8},{button:ce(()=>[p("button",OO,[$(V)])]),menu:ce(()=>[$(_O)]),_:1})):je("v-if",!0),D(er)?je("v-if",!0):(T(),ge(al,{key:9})),p("div",IO,[p("div",PO,[R(Rn(D(mt))+" ",1),p("span",TO,"/ "+Rn(D(wz)),1)])]),$(D(EO))],34)],512)}}}),AO=Ce(MO,[["__file","/home/runner/work/docker-slidev/docker-slidev/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/NavControls.vue"]]);let sa=[];const A0=new WeakMap;function RO(){sa.forEach(e=>e(...A0.get(e))),sa=[]}function R0(e,...t){A0.set(e,t),!sa.includes(e)&&sa.push(e)===1&&requestAnimationFrame(RO)}function yi(e){return e.composedPath()[0]||null}function ch(e){return typeof e=="string"?e.endsWith("px")?Number(e.slice(0,e.length-2)):Number(e):e}function LO(e,t){const[n,r]=e.split(" ");return t?t==="row"?n:r:{row:n,col:r||n}}const uh={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"},cs="^\\s*",us="\\s*$",so="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",io="([0-9A-Fa-f])",lo="([0-9A-Fa-f]{2})",DO=new RegExp(`${cs}rgb\\s*\\(${so},${so},${so}\\)${us}`),jO=new RegExp(`${cs}rgba\\s*\\(${so},${so},${so},${so}\\)${us}`),NO=new RegExp(`${cs}#${io}${io}${io}${us}`),FO=new RegExp(`${cs}#${lo}${lo}${lo}${us}`),zO=new RegExp(`${cs}#${io}${io}${io}${io}${us}`),BO=new RegExp(`${cs}#${lo}${lo}${lo}${lo}${us}`);function tn(e){return parseInt(e,16)}function ko(e){try{let t;if(t=FO.exec(e))return[tn(t[1]),tn(t[2]),tn(t[3]),1];if(t=DO.exec(e))return[Bt(t[1]),Bt(t[5]),Bt(t[9]),1];if(t=jO.exec(e))return[Bt(t[1]),Bt(t[5]),Bt(t[9]),Zs(t[13])];if(t=NO.exec(e))return[tn(t[1]+t[1]),tn(t[2]+t[2]),tn(t[3]+t[3]),1];if(t=BO.exec(e))return[tn(t[1]),tn(t[2]),tn(t[3]),Zs(tn(t[4])/255)];if(t=zO.exec(e))return[tn(t[1]+t[1]),tn(t[2]+t[2]),tn(t[3]+t[3]),Zs(tn(t[4]+t[4])/255)];if(e in uh)return ko(uh[e]);throw new Error(`[seemly/rgba]: Invalid color value ${e}.`)}catch(t){throw t}}function HO(e){return e>1?1:e<0?0:e}function Eu(e,t,n,r){return`rgba(${Bt(e)}, ${Bt(t)}, ${Bt(n)}, ${HO(r)})`}function pc(e,t,n,r,o){return Bt((e*t*(1-r)+n*r)/o)}function L0(e,t){Array.isArray(e)||(e=ko(e)),Array.isArray(t)||(t=ko(t));const n=e[3],r=t[3],o=Zs(n+r-n*r);return Eu(pc(e[0],n,t[0],r,o),pc(e[1],n,t[1],r,o),pc(e[2],n,t[2],r,o),o)}function Ps(e,t){const[n,r,o,s=1]=Array.isArray(e)?e:ko(e);return t.alpha?Eu(n,r,o,t.alpha):Eu(n,r,o,s)}function cl(e,t){const[n,r,o,s=1]=Array.isArray(e)?e:ko(e),{lightness:i=1,alpha:l=1}=t;return VO([n*i,r*i,o*i,s*l])}function Zs(e){const t=Math.round(Number(e)*100)/100;return t>1?1:t<0?0:t}function Bt(e){const t=Math.round(Number(e));return t>255?255:t<0?0:t}function VO(e){const[t,n,r]=e;return 3 in e?`rgba(${Bt(t)}, ${Bt(n)}, ${Bt(r)}, ${Zs(e[3])})`:`rgba(${Bt(t)}, ${Bt(n)}, ${Bt(r)}, 1)`}function WO(e=8){return Math.random().toString(16).slice(2,2+e)}function UO(e,t){const n=[];if(!t){for(let r=0;r<e;++r)n.push(r);return n}for(let r=0;r<e;++r)n.push(t(r));return n}function qO(e,t="default",n=[]){const o=e.$slots[t];return o===void 0?n:o()}function Ou(e,t=[],n){const r={};return t.forEach(o=>{r[o]=e[o]}),Object.assign(r,n)}function wi(e,t=!0,n=[]){return e.forEach(r=>{if(r!==null){if(typeof r!="object"){(typeof r=="string"||typeof r=="number")&&n.push(R(String(r)));return}if(Array.isArray(r)){wi(r,t,n);return}if(r.type===ze){if(r.children===null)return;Array.isArray(r.children)&&wi(r.children,t,n)}else r.type!==bt&&n.push(r)}}),n}function Hs(e,...t){if(Array.isArray(e))e.forEach(n=>Hs(n,...t));else return e(...t)}const dh=new Set;function Ts(e,t){const n=`[naive/${e}]: ${t}`;dh.has(n)||(dh.add(n),console.error(n))}function fh(e,t){console.error(`[naive/${e}]: ${t}`)}function Aa(e,t){throw new Error(`[naive/${e}]: ${t}`)}function ph(e,t="default",n=void 0){const r=e[t];if(!r)return fh("getFirstSlotVNode",`slot[${t}] is empty`),null;const o=wi(r(n));return o.length===1?o[0]:(fh("getFirstSlotVNode",`slot[${t}] should have exactly one child`),null)}function Ni(e){return e.some(t=>lr(t)?!(t.type===bt||t.type===ze&&!Ni(t.children)):!0)?e:null}function hh(e,t){return e&&Ni(e())||t()}function mh(e,t,n){return e&&Ni(e(t))||n(t)}function Gs(e,t){const n=e&&Ni(e());return t(n||null)}function vh(e){return!(e&&Ni(e()))}const gh=pe({render(){var e,t;return(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)}}),KO=/^(\d|\.)+$/,bh=/(\d|\.)+/;function Xs(e,{c:t=1,offset:n=0,attachPx:r=!0}={}){if(typeof e=="number"){const o=(e+n)*t;return o===0?"0":`${o}px`}else if(typeof e=="string")if(KO.test(e)){const o=(Number(e)+n)*t;return r?o===0?"0":`${o}px`:`${o}`}else{const o=bh.exec(e);return o?e.replace(bh,String((Number(o[0])+n)*t)):e}return e}function YO(e){let t=0;for(let n=0;n<e.length;++n)e[n]==="&"&&++t;return t}const D0=/\s*,(?![^(]*\))\s*/g,ZO=/\s+/g;function GO(e,t){const n=[];return t.split(D0).forEach(r=>{let o=YO(r);if(o){if(o===1){e.forEach(i=>{n.push(r.replace("&",i))});return}}else{e.forEach(i=>{n.push((i&&i+" ")+r)});return}let s=[r];for(;o--;){const i=[];s.forEach(l=>{e.forEach(a=>{i.push(l.replace("&",a))})}),s=i}s.forEach(i=>n.push(i))}),n}function XO(e,t){const n=[];return t.split(D0).forEach(r=>{e.forEach(o=>{n.push((o&&o+" ")+r)})}),n}function JO(e){let t=[""];return e.forEach(n=>{n=n&&n.trim(),n&&(n.includes("&")?t=GO(t,n):t=XO(t,n))}),t.join(", ").replace(ZO," ")}function yh(e){if(!e)return;const t=e.parentElement;t&&t.removeChild(e)}function Ra(e){return document.querySelector(`style[cssr-id="${e}"]`)}function QO(e){const t=document.createElement("style");return t.setAttribute("cssr-id",e),t}function ul(e){return e?/^\s*@(s|m)/.test(e):!1}const eI=/[A-Z]/g;function j0(e){return e.replace(eI,t=>"-"+t.toLowerCase())}function tI(e,t="  "){return typeof e=="object"&&e!==null?` {
`+Object.entries(e).map(n=>t+`  ${j0(n[0])}: ${n[1]};`).join(`
`)+`
`+t+"}":`: ${e};`}function nI(e,t,n){return typeof e=="function"?e({context:t.context,props:n}):e}function wh(e,t,n,r){if(!t)return"";const o=nI(t,n,r);if(!o)return"";if(typeof o=="string")return`${e} {
${o}
}`;const s=Object.keys(o);if(s.length===0)return n.config.keepEmptyBlock?e+` {
}`:"";const i=e?[e+" {"]:[];return s.forEach(l=>{const a=o[l];if(l==="raw"){i.push(`
`+a+`
`);return}l=j0(l),a!=null&&i.push(`  ${l}${tI(a)}`)}),e&&i.push("}"),i.join(`
`)}function Iu(e,t,n){e&&e.forEach(r=>{if(Array.isArray(r))Iu(r,t,n);else if(typeof r=="function"){const o=r(t);Array.isArray(o)?Iu(o,t,n):o&&n(o)}else r&&n(r)})}function N0(e,t,n,r,o,s){const i=e.$;let l="";if(!i||typeof i=="string")ul(i)?l=i:t.push(i);else if(typeof i=="function"){const u=i({context:r.context,props:o});ul(u)?l=u:t.push(u)}else if(i.before&&i.before(r.context),!i.$||typeof i.$=="string")ul(i.$)?l=i.$:t.push(i.$);else if(i.$){const u=i.$({context:r.context,props:o});ul(u)?l=u:t.push(u)}const a=JO(t),c=wh(a,e.props,r,o);l?(n.push(`${l} {`),s&&c&&s.insertRule(`${l} {
${c}
}
`)):(s&&c&&s.insertRule(c),!s&&c.length&&n.push(c)),e.children&&Iu(e.children,{context:r.context,props:o},u=>{if(typeof u=="string"){const d=wh(a,{raw:u},r,o);s?s.insertRule(d):n.push(d)}else N0(u,t,n,r,o,s)}),t.pop(),l&&n.push("}"),i&&i.after&&i.after(r.context)}function F0(e,t,n,r=!1){const o=[];return N0(e,[],o,t,n,r?e.instance.__styleSheet:void 0),r?"":o.join(`

`)}function Pu(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}typeof window<"u"&&(window.__cssrContext={});function rI(e,t,n){const{els:r}=t;if(n===void 0)r.forEach(yh),t.els=[];else{const o=Ra(n);o&&r.includes(o)&&(yh(o),t.els=r.filter(s=>s!==o))}}function _h(e,t){e.push(t)}function oI(e,t,n,r,o,s,i,l,a){if(s&&!a){if(n===void 0){console.error("[css-render/mount]: `id` is required in `silent` mode.");return}const f=window.__cssrContext;f[n]||(f[n]=!0,F0(t,e,r,s));return}let c;if(n===void 0&&(c=t.render(r),n=Pu(c)),a){a.adapter(n,c??t.render(r));return}const u=Ra(n);if(u!==null&&!i)return u;const d=u??QO(n);if(c===void 0&&(c=t.render(r)),d.textContent=c,u!==null)return u;if(l){const f=document.head.querySelector(`meta[name="${l}"]`);if(f)return document.head.insertBefore(d,f),_h(t.els,d),d}return o?document.head.insertBefore(d,document.head.querySelector("style, link")):document.head.appendChild(d),_h(t.els,d),d}function sI(e){return F0(this,this.instance,e)}function iI(e={}){const{id:t,ssr:n,props:r,head:o=!1,silent:s=!1,force:i=!1,anchorMetaName:l}=e;return oI(this.instance,this,t,r,o,s,i,l,n)}function lI(e={}){const{id:t}=e;rI(this.instance,this,t)}const dl=function(e,t,n,r){return{instance:e,$:t,props:n,children:r,els:[],render:sI,mount:iI,unmount:lI}},aI=function(e,t,n,r){return Array.isArray(t)?dl(e,{$:null},null,t):Array.isArray(n)?dl(e,t,null,n):Array.isArray(r)?dl(e,t,n,r):dl(e,t,n,null)};function z0(e={}){let t=null;const n={c:(...r)=>aI(n,...r),use:(r,...o)=>r.install(n,...o),find:Ra,context:{},config:e,get __styleSheet(){if(!t){const r=document.createElement("style");return document.head.appendChild(r),t=document.styleSheets[document.styleSheets.length-1],t}return t}};return n}function cI(e,t){if(e===void 0)return!1;if(t){const{context:{ids:n}}=t;return n.has(e)}return Ra(e)!==null}function uI(e){let t=".",n="__",r="--",o;if(e){let h=e.blockPrefix;h&&(t=h),h=e.elementPrefix,h&&(n=h),h=e.modifierPrefix,h&&(r=h)}const s={install(h){o=h.c;const b=h.context;b.bem={},b.bem.b=null,b.bem.els=null}};function i(h){let b,y;return{before(v){b=v.bem.b,y=v.bem.els,v.bem.els=null},after(v){v.bem.b=b,v.bem.els=y},$({context:v,props:x}){return h=typeof h=="string"?h:h({context:v,props:x}),v.bem.b=h,`${(x==null?void 0:x.bPrefix)||t}${v.bem.b}`}}}function l(h){let b;return{before(y){b=y.bem.els},after(y){y.bem.els=b},$({context:y,props:v}){return h=typeof h=="string"?h:h({context:y,props:v}),y.bem.els=h.split(",").map(x=>x.trim()),y.bem.els.map(x=>`${(v==null?void 0:v.bPrefix)||t}${y.bem.b}${n}${x}`).join(", ")}}}function a(h){return{$({context:b,props:y}){h=typeof h=="string"?h:h({context:b,props:y});const v=h.split(",").map(E=>E.trim());function x(E){return v.map(I=>`&${(y==null?void 0:y.bPrefix)||t}${b.bem.b}${E!==void 0?`${n}${E}`:""}${r}${I}`).join(", ")}const _=b.bem.els;if(_!==null){if(_.length>=2)throw Error(`[css-render/plugin-bem]: m(${h}) is invalid, using modifier inside multiple elements is not allowed`);return x(_[0])}else return x()}}}function c(h){return{$({context:b,props:y}){h=typeof h=="string"?h:h({context:b,props:y});const v=b.bem.els;if(v!==null&&v.length>=2)throw Error(`[css-render/plugin-bem]: notM(${h}) is invalid, using modifier inside multiple elements is not allowed`);return`&:not(${(y==null?void 0:y.bPrefix)||t}${b.bem.b}${v!==null&&v.length>0?`${n}${v[0]}`:""}${r}${h})`}}}return Object.assign(s,{cB:(...h)=>o(i(h[0]),h[1],h[2]),cE:(...h)=>o(l(h[0]),h[1],h[2]),cM:(...h)=>o(a(h[0]),h[1],h[2]),cNotM:(...h)=>o(c(h[0]),h[1],h[2])}),s}function rr(e,t){return e+(t==="default"?"":t.replace(/^[a-z]/,n=>n.toUpperCase()))}rr("abc","def");const dI="n",fI=`.${dI}-`,pI="__",hI="--",B0=z0(),H0=uI({blockPrefix:fI,elementPrefix:pI,modifierPrefix:hI});B0.use(H0);const{c:Ie,find:a7}=B0,{cB:De,cE:ke,cM:Te,cNotM:Al}=H0,mI=(...e)=>Ie(">",[De(...e)]);let hc;function vI(){return hc===void 0&&(hc=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),hc}const zd=typeof document<"u"&&typeof window<"u";function gI(e){const t=z(!!e.value);if(t.value)return fn(t);const n=be(e,r=>{r&&(t.value=!0,n())});return fn(t)}function _i(e){const t=C(e),n=z(t.value);return be(t,r=>{n.value=r}),typeof e=="function"?n:{__v_isRef:!0,get value(){return n.value},set value(r){e.set(r)}}}const bI=typeof window<"u";let Go,Js;const yI=()=>{var e,t;Go=bI?(t=(e=document)===null||e===void 0?void 0:e.fonts)===null||t===void 0?void 0:t.ready:void 0,Js=!1,Go!==void 0?Go.then(()=>{Js=!0}):Js=!0};yI();function wI(e){if(Js)return;let t=!1;It(()=>{Js||Go==null||Go.then(()=>{t||e()})}),jt(()=>{t=!0})}function Rl(e){return e.composedPath()[0]}const _I={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function xI(e,t,n){if(e==="mousemoveoutside"){const r=o=>{t.contains(Rl(o))||n(o)};return{mousemove:r,touchstart:r}}else if(e==="clickoutside"){let r=!1;const o=i=>{r=!t.contains(Rl(i))},s=i=>{r&&(t.contains(Rl(i))||n(i))};return{mousedown:o,mouseup:s,touchstart:o,touchend:s}}return console.error(`[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`),{}}function V0(e,t,n){const r=_I[e];let o=r.get(t);o===void 0&&r.set(t,o=new WeakMap);let s=o.get(n);return s===void 0&&o.set(n,s=xI(e,t,n)),s}function kI(e,t,n,r){if(e==="mousemoveoutside"||e==="clickoutside"){const o=V0(e,t,n);return Object.keys(o).forEach(s=>{dt(s,document,o[s],r)}),!0}return!1}function SI(e,t,n,r){if(e==="mousemoveoutside"||e==="clickoutside"){const o=V0(e,t,n);return Object.keys(o).forEach(s=>{tt(s,document,o[s],r)}),!0}return!1}function $I(){if(typeof window>"u")return{on:()=>{},off:()=>{}};const e=new WeakMap,t=new WeakMap;function n(){e.set(this,!0)}function r(){e.set(this,!0),t.set(this,!0)}function o(S,k,M){const N=S[k];return S[k]=function(){return M.apply(S,arguments),N.apply(S,arguments)},S}function s(S,k){S[k]=Event.prototype[k]}const i=new WeakMap,l=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function a(){var S;return(S=i.get(this))!==null&&S!==void 0?S:null}function c(S,k){l!==void 0&&Object.defineProperty(S,"currentTarget",{configurable:!0,enumerable:!0,get:k??l.get})}const u={bubble:{},capture:{}},d={};function f(){const S=function(k){const{type:M,eventPhase:N,bubbles:G}=k,B=Rl(k);if(N===2)return;const te=N===1?"capture":"bubble";let V=B;const ne=[];for(;V===null&&(V=window),ne.push(V),V!==window;)V=V.parentNode||null;const ve=u.capture[M],J=u.bubble[M];if(o(k,"stopPropagation",n),o(k,"stopImmediatePropagation",r),c(k,a),te==="capture"){if(ve===void 0)return;for(let le=ne.length-1;le>=0&&!e.has(k);--le){const me=ne[le],Re=ve.get(me);if(Re!==void 0){i.set(k,me);for(const Xe of Re){if(t.has(k))break;Xe(k)}}if(le===0&&!G&&J!==void 0){const Xe=J.get(me);if(Xe!==void 0)for(const nt of Xe){if(t.has(k))break;nt(k)}}}}else if(te==="bubble"){if(J===void 0)return;for(let le=0;le<ne.length&&!e.has(k);++le){const me=ne[le],Re=J.get(me);if(Re!==void 0){i.set(k,me);for(const Xe of Re){if(t.has(k))break;Xe(k)}}}}s(k,"stopPropagation"),s(k,"stopImmediatePropagation"),c(k)};return S.displayName="evtdUnifiedHandler",S}function m(){const S=function(k){const{type:M,eventPhase:N}=k;if(N!==2)return;const G=d[M];G!==void 0&&G.forEach(B=>B(k))};return S.displayName="evtdUnifiedWindowEventHandler",S}const h=f(),b=m();function y(S,k){const M=u[S];return M[k]===void 0&&(M[k]=new Map,window.addEventListener(k,h,S==="capture")),M[k]}function v(S){return d[S]===void 0&&(d[S]=new Set,window.addEventListener(S,b)),d[S]}function x(S,k){let M=S.get(k);return M===void 0&&S.set(k,M=new Set),M}function _(S,k,M,N){const G=u[k][M];if(G!==void 0){const B=G.get(S);if(B!==void 0&&B.has(N))return!0}return!1}function E(S,k){const M=d[S];return!!(M!==void 0&&M.has(k))}function I(S,k,M,N){let G;if(typeof N=="object"&&N.once===!0?G=ve=>{P(S,k,G,N),M(ve)}:G=M,kI(S,k,G,N))return;const te=N===!0||typeof N=="object"&&N.capture===!0?"capture":"bubble",V=y(te,S),ne=x(V,k);if(ne.has(G)||ne.add(G),k===window){const ve=v(S);ve.has(G)||ve.add(G)}}function P(S,k,M,N){if(SI(S,k,M,N))return;const B=N===!0||typeof N=="object"&&N.capture===!0,te=B?"capture":"bubble",V=y(te,S),ne=x(V,k);if(k===window&&!_(k,B?"bubble":"capture",S,M)&&E(S,M)){const J=d[S];J.delete(M),J.size===0&&(window.removeEventListener(S,b),d[S]=void 0)}ne.has(M)&&ne.delete(M),ne.size===0&&V.delete(k),V.size===0&&(window.removeEventListener(S,h,te==="capture"),u[te][S]=void 0)}return{on:I,off:P}}const{on:dt,off:tt}=$I();function W0(e,t){return be(e,n=>{n!==void 0&&(t.value=n)}),C(()=>e.value===void 0?t.value:e.value)}function Bd(){const e=z(!1);return It(()=>{e.value=!0}),fn(e)}function CI(e,t){return C(()=>{for(const n of t)if(e[n]!==void 0)return e[n];return e[t[t.length-1]]})}const EI=(typeof window>"u"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function OI(){return EI}const II="n-internal-select-menu-body",U0="n-modal-body",q0="n-drawer-body",K0="n-popover-body",Y0="__disabled__";function ns(e){const t=ie(U0,null),n=ie(q0,null),r=ie(K0,null),o=ie(II,null),s=z();if(typeof document<"u"){s.value=document.fullscreenElement;const i=()=>{s.value=document.fullscreenElement};It(()=>{dt("fullscreenchange",document,i)}),jt(()=>{tt("fullscreenchange",document,i)})}return _i(()=>{var i;const{to:l}=e;return l!==void 0?l===!1?Y0:l===!0?s.value||"body":l:t!=null&&t.value?(i=t.value.$el)!==null&&i!==void 0?i:t.value:n!=null&&n.value?n.value:r!=null&&r.value?r.value:o!=null&&o.value?o.value:l??(s.value||"body")})}ns.tdkey=Y0;ns.propTo={type:[String,Object,Boolean],default:void 0};let xh=!1;function Z0(){if(zd&&window.CSS&&!xh&&(xh=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}function Tu(e,t,n="default"){const r=t[n];if(r===void 0)throw new Error(`[vueuc/${e}]: slot[${n}] is empty.`);return r()}function Mu(e,t=!0,n=[]){return e.forEach(r=>{if(r!==null){if(typeof r!="object"){(typeof r=="string"||typeof r=="number")&&n.push(R(String(r)));return}if(Array.isArray(r)){Mu(r,t,n);return}if(r.type===ze){if(r.children===null)return;Array.isArray(r.children)&&Mu(r.children,t,n)}else r.type!==bt&&n.push(r)}}),n}function kh(e,t,n="default"){const r=t[n];if(r===void 0)throw new Error(`[vueuc/${e}]: slot[${n}] is empty.`);const o=Mu(r());if(o.length===1)return o[0];throw new Error(`[vueuc/${e}]: slot[${n}] should have exactly one child.`)}let yr=null;function G0(){if(yr===null&&(yr=document.getElementById("v-binder-view-measurer"),yr===null)){yr=document.createElement("div"),yr.id="v-binder-view-measurer";const{style:e}=yr;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(yr)}return yr.getBoundingClientRect()}function PI(e,t){const n=G0();return{top:t,left:e,height:0,width:0,right:n.width-e,bottom:n.height-t}}function mc(e){const t=e.getBoundingClientRect(),n=G0();return{left:t.left-n.left,top:t.top-n.top,bottom:n.height+n.top-t.bottom,right:n.width+n.left-t.right,width:t.width,height:t.height}}function TI(e){return e.nodeType===9?null:e.parentNode}function X0(e){if(e===null)return null;const t=TI(e);if(t===null)return null;if(t.nodeType===9)return document;if(t.nodeType===1){const{overflow:n,overflowX:r,overflowY:o}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(n+o+r))return t}return X0(t)}const MI=pe({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var t;gt("VBinder",(t=Qt())===null||t===void 0?void 0:t.proxy);const n=ie("VBinder",null),r=z(null),o=v=>{r.value=v,n&&e.syncTargetWithParent&&n.setTargetRef(v)};let s=[];const i=()=>{let v=r.value;for(;v=X0(v),v!==null;)s.push(v);for(const x of s)dt("scroll",x,d,!0)},l=()=>{for(const v of s)tt("scroll",v,d,!0);s=[]},a=new Set,c=v=>{a.size===0&&i(),a.has(v)||a.add(v)},u=v=>{a.has(v)&&a.delete(v),a.size===0&&l()},d=()=>{R0(f)},f=()=>{a.forEach(v=>v())},m=new Set,h=v=>{m.size===0&&dt("resize",window,y),m.has(v)||m.add(v)},b=v=>{m.has(v)&&m.delete(v),m.size===0&&tt("resize",window,y)},y=()=>{m.forEach(v=>v())};return jt(()=>{tt("resize",window,y),l()}),{targetRef:r,setTargetRef:o,addScrollListener:c,removeScrollListener:u,addResizeListener:h,removeResizeListener:b}},render(){return Tu("binder",this.$slots)}}),AI=MI,RI=pe({name:"Target",setup(){const{setTargetRef:e,syncTarget:t}=ie("VBinder");return{syncTarget:t,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:t}=this;return e?Oe(kh("follower",this.$slots),[[t]]):kh("follower",this.$slots)}}),No="@@mmoContext",LI={mounted(e,{value:t}){e[No]={handler:void 0},typeof t=="function"&&(e[No].handler=t,dt("mousemoveoutside",e,t))},updated(e,{value:t}){const n=e[No];typeof t=="function"?n.handler?n.handler!==t&&(tt("mousemoveoutside",e,n.handler),n.handler=t,dt("mousemoveoutside",e,t)):(e[No].handler=t,dt("mousemoveoutside",e,t)):n.handler&&(tt("mousemoveoutside",e,n.handler),n.handler=void 0)},unmounted(e){const{handler:t}=e[No];t&&tt("mousemoveoutside",e,t),e[No].handler=void 0}},DI=LI,Fo="@@coContext",jI={mounted(e,{value:t,modifiers:n}){e[Fo]={handler:void 0},typeof t=="function"&&(e[Fo].handler=t,dt("clickoutside",e,t,{capture:n.capture}))},updated(e,{value:t,modifiers:n}){const r=e[Fo];typeof t=="function"?r.handler?r.handler!==t&&(tt("clickoutside",e,r.handler,{capture:n.capture}),r.handler=t,dt("clickoutside",e,t,{capture:n.capture})):(e[Fo].handler=t,dt("clickoutside",e,t,{capture:n.capture})):r.handler&&(tt("clickoutside",e,r.handler,{capture:n.capture}),r.handler=void 0)},unmounted(e,{modifiers:t}){const{handler:n}=e[Fo];n&&tt("clickoutside",e,n,{capture:t.capture}),e[Fo].handler=void 0}},Sh=jI;function NI(e,t){console.error(`[vdirs/${e}]: ${t}`)}class FI{constructor(){this.elementZIndex=new Map,this.nextZIndex=2e3}get elementCount(){return this.elementZIndex.size}ensureZIndex(t,n){const{elementZIndex:r}=this;if(n!==void 0){t.style.zIndex=`${n}`,r.delete(t);return}const{nextZIndex:o}=this;r.has(t)&&r.get(t)+1===this.nextZIndex||(t.style.zIndex=`${o}`,r.set(t,o),this.nextZIndex=o+1,this.squashState())}unregister(t,n){const{elementZIndex:r}=this;r.has(t)?r.delete(t):n===void 0&&NI("z-index-manager/unregister-element","Element not found when unregistering."),this.squashState()}squashState(){const{elementCount:t}=this;t||(this.nextZIndex=2e3),this.nextZIndex-t>2500&&this.rearrange()}rearrange(){const t=Array.from(this.elementZIndex.entries());t.sort((n,r)=>n[1]-r[1]),this.nextZIndex=2e3,t.forEach(n=>{const r=n[0],o=this.nextZIndex++;`${o}`!==r.style.zIndex&&(r.style.zIndex=`${o}`)})}}const vc=new FI,zo="@@ziContext",zI={mounted(e,t){const{value:n={}}=t,{zIndex:r,enabled:o}=n;e[zo]={enabled:!!o,initialized:!1},o&&(vc.ensureZIndex(e,r),e[zo].initialized=!0)},updated(e,t){const{value:n={}}=t,{zIndex:r,enabled:o}=n,s=e[zo].enabled;o&&!s&&(vc.ensureZIndex(e,r),e[zo].initialized=!0),e[zo].enabled=!!o},unmounted(e,t){if(!e[zo].initialized)return;const{value:n={}}=t,{zIndex:r}=n;vc.unregister(e,r)}},Hd=zI,J0=Symbol("@css-render/vue3-ssr");function BI(e,t){return`<style cssr-id="${e}">
${t}
</style>`}function HI(e,t){const n=ie(J0,null);if(n===null){console.error("[css-render/vue3-ssr]: no ssr context found.");return}const{styles:r,ids:o}=n;o.has(e)||r!==null&&(o.add(e),r.push(BI(e,t)))}const VI=typeof document<"u";function Fi(){if(VI)return;const e=ie(J0,null);if(e!==null)return{adapter:HI,context:e}}function $h(e,t){console.error(`[vueuc/${e}]: ${t}`)}const{c:fl}=z0(),WI="vueuc-style";function Ch(e){return typeof e=="string"?document.querySelector(e):e()}const Q0=pe({name:"LazyTeleport",props:{to:{type:[String,Object],default:void 0},disabled:Boolean,show:{type:Boolean,required:!0}},setup(e){return{showTeleport:gI(pn(e,"show")),mergedTo:C(()=>{const{to:t}=e;return t??"body"})}},render(){return this.showTeleport?this.disabled?Tu("lazy-teleport",this.$slots):F(ug,{disabled:this.disabled,to:this.mergedTo},Tu("lazy-teleport",this.$slots)):null}}),pl={top:"bottom",bottom:"top",left:"right",right:"left"},Eh={start:"end",center:"center",end:"start"},gc={top:"height",bottom:"height",left:"width",right:"width"},UI={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},qI={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},KI={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},Oh={top:!0,bottom:!1,left:!0,right:!1},Ih={top:"end",bottom:"start",left:"end",right:"start"};function YI(e,t,n,r,o,s){if(!o||s)return{placement:e,top:0,left:0};const[i,l]=e.split("-");let a=l??"center",c={top:0,left:0};const u=(m,h,b)=>{let y=0,v=0;const x=n[m]-t[h]-t[m];return x>0&&r&&(b?v=Oh[h]?x:-x:y=Oh[h]?x:-x),{left:y,top:v}},d=i==="left"||i==="right";if(a!=="center"){const m=KI[e],h=pl[m],b=gc[m];if(n[b]>t[b]){if(t[m]+t[b]<n[b]){const y=(n[b]-t[b])/2;t[m]<y||t[h]<y?t[m]<t[h]?(a=Eh[l],c=u(b,h,d)):c=u(b,m,d):a="center"}}else n[b]<t[b]&&t[h]<0&&t[m]>t[h]&&(a=Eh[l])}else{const m=i==="bottom"||i==="top"?"left":"top",h=pl[m],b=gc[m],y=(n[b]-t[b])/2;(t[m]<y||t[h]<y)&&(t[m]>t[h]?(a=Ih[m],c=u(b,m,d)):(a=Ih[h],c=u(b,h,d)))}let f=i;return t[i]<n[gc[i]]&&t[i]<t[pl[i]]&&(f=pl[i]),{placement:a!=="center"?`${f}-${a}`:f,left:c.left,top:c.top}}function ZI(e,t){return t?qI[e]:UI[e]}function GI(e,t,n,r,o,s){if(s)switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"top-end":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"left-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:""};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:""};case"right-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width/2+o)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width/2+o)}px`,transform:"translateX(-50%)"}}}const XI=fl([fl(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),fl(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[fl("> *",{pointerEvents:"all"})])]),JI=pe({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const t=ie("VBinder"),n=_i(()=>e.enabled!==void 0?e.enabled:e.show),r=z(null),o=z(null),s=()=>{const{syncTrigger:f}=e;f.includes("scroll")&&t.addScrollListener(a),f.includes("resize")&&t.addResizeListener(a)},i=()=>{t.removeScrollListener(a),t.removeResizeListener(a)};It(()=>{n.value&&(a(),s())});const l=Fi();XI.mount({id:"vueuc/binder",head:!0,anchorMetaName:WI,ssr:l}),jt(()=>{i()}),wI(()=>{n.value&&a()});const a=()=>{if(!n.value)return;const f=r.value;if(f===null)return;const m=t.targetRef,{x:h,y:b,overlap:y}=e,v=h!==void 0&&b!==void 0?PI(h,b):mc(m);f.style.setProperty("--v-target-width",`${Math.round(v.width)}px`),f.style.setProperty("--v-target-height",`${Math.round(v.height)}px`);const{width:x,minWidth:_,placement:E,internalShift:I,flip:P}=e;f.setAttribute("v-placement",E),y?f.setAttribute("v-overlap",""):f.removeAttribute("v-overlap");const{style:S}=f;x==="target"?S.width=`${v.width}px`:x!==void 0?S.width=x:S.width="",_==="target"?S.minWidth=`${v.width}px`:_!==void 0?S.minWidth=_:S.minWidth="";const k=mc(f),M=mc(o.value),{left:N,top:G,placement:B}=YI(E,v,k,I,P,y),te=ZI(B,y),{left:V,top:ne,transform:ve}=GI(B,M,v,G,N,y);f.setAttribute("v-placement",B),f.style.setProperty("--v-offset-left",`${Math.round(N)}px`),f.style.setProperty("--v-offset-top",`${Math.round(G)}px`),f.style.transform=`translateX(${V}) translateY(${ne}) ${ve}`,f.style.setProperty("--v-transform-origin",te),f.style.transformOrigin=te};be(n,f=>{f?(s(),c()):i()});const c=()=>{Et().then(a).catch(f=>console.error(f))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(f=>{be(pn(e,f),a)}),["teleportDisabled"].forEach(f=>{be(pn(e,f),c)}),be(pn(e,"syncTrigger"),f=>{f.includes("resize")?t.addResizeListener(a):t.removeResizeListener(a),f.includes("scroll")?t.addScrollListener(a):t.removeScrollListener(a)});const u=Bd(),d=_i(()=>{const{to:f}=e;if(f!==void 0)return f;u.value});return{VBinder:t,mergedEnabled:n,offsetContainerRef:o,followerRef:r,mergedTo:d,syncPosition:a}},render(){return F(Q0,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,t;const n=F("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[F("div",{class:"v-binder-follower-content",ref:"followerRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))]);return this.zindexable?Oe(n,[[Hd,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):n}})}});var bo=[],QI=function(){return bo.some(function(e){return e.activeTargets.length>0})},eP=function(){return bo.some(function(e){return e.skippedTargets.length>0})},Ph="ResizeObserver loop completed with undelivered notifications.",tP=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:Ph}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=Ph),window.dispatchEvent(e)},xi;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(xi||(xi={}));var yo=function(e){return Object.freeze(e)},nP=function(){function e(t,n){this.inlineSize=t,this.blockSize=n,yo(this)}return e}(),e1=function(){function e(t,n,r,o){return this.x=t,this.y=n,this.width=r,this.height=o,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,yo(this)}return e.prototype.toJSON=function(){var t=this,n=t.x,r=t.y,o=t.top,s=t.right,i=t.bottom,l=t.left,a=t.width,c=t.height;return{x:n,y:r,top:o,right:s,bottom:i,left:l,width:a,height:c}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),Vd=function(e){return e instanceof SVGElement&&"getBBox"in e},t1=function(e){if(Vd(e)){var t=e.getBBox(),n=t.width,r=t.height;return!n&&!r}var o=e,s=o.offsetWidth,i=o.offsetHeight;return!(s||i||e.getClientRects().length)},Th=function(e){var t;if(e instanceof Element)return!0;var n=(t=e==null?void 0:e.ownerDocument)===null||t===void 0?void 0:t.defaultView;return!!(n&&e instanceof n.Element)},rP=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},Qs=typeof window<"u"?window:{},hl=new WeakMap,Mh=/auto|scroll/,oP=/^tb|vertical/,sP=/msie|trident/i.test(Qs.navigator&&Qs.navigator.userAgent),Dn=function(e){return parseFloat(e||"0")},Xo=function(e,t,n){return e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=!1),new nP((n?t:e)||0,(n?e:t)||0)},Ah=yo({devicePixelContentBoxSize:Xo(),borderBoxSize:Xo(),contentBoxSize:Xo(),contentRect:new e1(0,0,0,0)}),n1=function(e,t){if(t===void 0&&(t=!1),hl.has(e)&&!t)return hl.get(e);if(t1(e))return hl.set(e,Ah),Ah;var n=getComputedStyle(e),r=Vd(e)&&e.ownerSVGElement&&e.getBBox(),o=!sP&&n.boxSizing==="border-box",s=oP.test(n.writingMode||""),i=!r&&Mh.test(n.overflowY||""),l=!r&&Mh.test(n.overflowX||""),a=r?0:Dn(n.paddingTop),c=r?0:Dn(n.paddingRight),u=r?0:Dn(n.paddingBottom),d=r?0:Dn(n.paddingLeft),f=r?0:Dn(n.borderTopWidth),m=r?0:Dn(n.borderRightWidth),h=r?0:Dn(n.borderBottomWidth),b=r?0:Dn(n.borderLeftWidth),y=d+c,v=a+u,x=b+m,_=f+h,E=l?e.offsetHeight-_-e.clientHeight:0,I=i?e.offsetWidth-x-e.clientWidth:0,P=o?y+x:0,S=o?v+_:0,k=r?r.width:Dn(n.width)-P-I,M=r?r.height:Dn(n.height)-S-E,N=k+y+I+x,G=M+v+E+_,B=yo({devicePixelContentBoxSize:Xo(Math.round(k*devicePixelRatio),Math.round(M*devicePixelRatio),s),borderBoxSize:Xo(N,G,s),contentBoxSize:Xo(k,M,s),contentRect:new e1(d,a,k,M)});return hl.set(e,B),B},r1=function(e,t,n){var r=n1(e,n),o=r.borderBoxSize,s=r.contentBoxSize,i=r.devicePixelContentBoxSize;switch(t){case xi.DEVICE_PIXEL_CONTENT_BOX:return i;case xi.BORDER_BOX:return o;default:return s}},iP=function(){function e(t){var n=n1(t);this.target=t,this.contentRect=n.contentRect,this.borderBoxSize=yo([n.borderBoxSize]),this.contentBoxSize=yo([n.contentBoxSize]),this.devicePixelContentBoxSize=yo([n.devicePixelContentBoxSize])}return e}(),o1=function(e){if(t1(e))return 1/0;for(var t=0,n=e.parentNode;n;)t+=1,n=n.parentNode;return t},lP=function(){var e=1/0,t=[];bo.forEach(function(i){if(i.activeTargets.length!==0){var l=[];i.activeTargets.forEach(function(c){var u=new iP(c.target),d=o1(c.target);l.push(u),c.lastReportedSize=r1(c.target,c.observedBox),d<e&&(e=d)}),t.push(function(){i.callback.call(i.observer,l,i.observer)}),i.activeTargets.splice(0,i.activeTargets.length)}});for(var n=0,r=t;n<r.length;n++){var o=r[n];o()}return e},Rh=function(e){bo.forEach(function(n){n.activeTargets.splice(0,n.activeTargets.length),n.skippedTargets.splice(0,n.skippedTargets.length),n.observationTargets.forEach(function(o){o.isActive()&&(o1(o.target)>e?n.activeTargets.push(o):n.skippedTargets.push(o))})})},aP=function(){var e=0;for(Rh(e);QI();)e=lP(),Rh(e);return eP()&&tP(),e>0},bc,s1=[],cP=function(){return s1.splice(0).forEach(function(e){return e()})},uP=function(e){if(!bc){var t=0,n=document.createTextNode(""),r={characterData:!0};new MutationObserver(function(){return cP()}).observe(n,r),bc=function(){n.textContent="".concat(t?t--:t++)}}s1.push(e),bc()},dP=function(e){uP(function(){requestAnimationFrame(e)})},Ll=0,fP=function(){return!!Ll},pP=250,hP={attributes:!0,characterData:!0,childList:!0,subtree:!0},Lh=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],Dh=function(e){return e===void 0&&(e=0),Date.now()+e},yc=!1,mP=function(){function e(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return e.prototype.run=function(t){var n=this;if(t===void 0&&(t=pP),!yc){yc=!0;var r=Dh(t);dP(function(){var o=!1;try{o=aP()}finally{if(yc=!1,t=r-Dh(),!fP())return;o?n.run(1e3):t>0?n.run(t):n.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var t=this,n=function(){return t.observer&&t.observer.observe(document.body,hP)};document.body?n():Qs.addEventListener("DOMContentLoaded",n)},e.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),Lh.forEach(function(n){return Qs.addEventListener(n,t.listener,!0)}))},e.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),Lh.forEach(function(n){return Qs.removeEventListener(n,t.listener,!0)}),this.stopped=!0)},e}(),Au=new mP,jh=function(e){!Ll&&e>0&&Au.start(),Ll+=e,!Ll&&Au.stop()},vP=function(e){return!Vd(e)&&!rP(e)&&getComputedStyle(e).display==="inline"},gP=function(){function e(t,n){this.target=t,this.observedBox=n||xi.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var t=r1(this.target,this.observedBox,!0);return vP(this.target)&&(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),bP=function(){function e(t,n){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=n}return e}(),ml=new WeakMap,Nh=function(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return-1},vl=function(){function e(){}return e.connect=function(t,n){var r=new bP(t,n);ml.set(t,r)},e.observe=function(t,n,r){var o=ml.get(t),s=o.observationTargets.length===0;Nh(o.observationTargets,n)<0&&(s&&bo.push(o),o.observationTargets.push(new gP(n,r&&r.box)),jh(1),Au.schedule())},e.unobserve=function(t,n){var r=ml.get(t),o=Nh(r.observationTargets,n),s=r.observationTargets.length===1;o>=0&&(s&&bo.splice(bo.indexOf(r),1),r.observationTargets.splice(o,1),jh(-1))},e.disconnect=function(t){var n=this,r=ml.get(t);r.observationTargets.slice().forEach(function(o){return n.unobserve(t,o.target)}),r.activeTargets.splice(0,r.activeTargets.length)},e}(),yP=function(){function e(t){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof t!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");vl.connect(this,t)}return e.prototype.observe=function(t,n){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Th(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");vl.observe(this,t,n)},e.prototype.unobserve=function(t){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Th(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");vl.unobserve(this,t)},e.prototype.disconnect=function(){vl.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();class wP{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new(typeof window<"u"&&window.ResizeObserver||yP)(this.handleResize),this.elHandlersMap=new Map}handleResize(t){for(const n of t){const r=this.elHandlersMap.get(n.target);r!==void 0&&r(n)}}registerHandler(t,n){this.elHandlersMap.set(t,n),this.observer.observe(t)}unregisterHandler(t){this.elHandlersMap.has(t)&&(this.elHandlersMap.delete(t),this.observer.unobserve(t))}}const Fh=new wP,ia=pe({name:"ResizeObserver",props:{onResize:Function},setup(e){let t=!1;const n=Qt().proxy;function r(o){const{onResize:s}=e;s!==void 0&&s(o)}It(()=>{const o=n.$el;if(o===void 0){$h("resize-observer","$el does not exist.");return}if(o.nextElementSibling!==o.nextSibling&&o.nodeType===3&&o.nodeValue!==""){$h("resize-observer","$el can not be observed (it may be a text node).");return}o.nextElementSibling!==null&&(Fh.registerHandler(o.nextElementSibling,r),t=!0)}),jt(()=>{t&&Fh.unregisterHandler(n.$el.nextElementSibling)})},render(){return Sn(this.$slots,"default")}});function i1(e){return e instanceof HTMLElement}function l1(e){for(let t=0;t<e.childNodes.length;t++){const n=e.childNodes[t];if(i1(n)&&(c1(n)||l1(n)))return!0}return!1}function a1(e){for(let t=e.childNodes.length-1;t>=0;t--){const n=e.childNodes[t];if(i1(n)&&(c1(n)||a1(n)))return!0}return!1}function c1(e){if(!_P(e))return!1;try{e.focus({preventScroll:!0})}catch{}return document.activeElement===e}function _P(e){if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.getAttribute("disabled"))return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return e.type!=="hidden"&&e.type!=="file";case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}}let Ms=[];const xP=pe({name:"FocusTrap",props:{disabled:Boolean,active:Boolean,autoFocus:{type:Boolean,default:!0},onEsc:Function,initialFocusTo:String,finalFocusTo:String,returnFocusOnDeactivated:{type:Boolean,default:!0}},setup(e){const t=WO(),n=z(null),r=z(null);let o=!1,s=!1;const i=typeof document>"u"?null:document.activeElement;function l(){return Ms[Ms.length-1]===t}function a(y){var v;y.code==="Escape"&&l()&&((v=e.onEsc)===null||v===void 0||v.call(e,y))}It(()=>{be(()=>e.active,y=>{y?(d(),dt("keydown",document,a)):(tt("keydown",document,a),o&&f())},{immediate:!0})}),jt(()=>{tt("keydown",document,a),o&&f()});function c(y){if(!s&&l()){const v=u();if(v===null||v.contains(yi(y)))return;m("first")}}function u(){const y=n.value;if(y===null)return null;let v=y;for(;v=v.nextSibling,!(v===null||v instanceof Element&&v.tagName==="DIV"););return v}function d(){var y;if(!e.disabled){if(Ms.push(t),e.autoFocus){const{initialFocusTo:v}=e;v===void 0?m("first"):(y=Ch(v))===null||y===void 0||y.focus({preventScroll:!0})}o=!0,document.addEventListener("focus",c,!0)}}function f(){var y;if(e.disabled||(document.removeEventListener("focus",c,!0),Ms=Ms.filter(x=>x!==t),l()))return;const{finalFocusTo:v}=e;v!==void 0?(y=Ch(v))===null||y===void 0||y.focus({preventScroll:!0}):e.returnFocusOnDeactivated&&i instanceof HTMLElement&&(s=!0,i.focus({preventScroll:!0}),s=!1)}function m(y){if(l()&&e.active){const v=n.value,x=r.value;if(v!==null&&x!==null){const _=u();if(_==null||_===x){s=!0,v.focus({preventScroll:!0}),s=!1;return}s=!0;const E=y==="first"?l1(_):a1(_);s=!1,E||(s=!0,v.focus({preventScroll:!0}),s=!1)}}}function h(y){if(s)return;const v=u();v!==null&&(y.relatedTarget!==null&&v.contains(y.relatedTarget)?m("last"):m("first"))}function b(y){s||(y.relatedTarget!==null&&y.relatedTarget===n.value?m("last"):m("first"))}return{focusableStartRef:n,focusableEndRef:r,focusableStyle:"position: absolute; height: 0; width: 0;",handleStartFocus:h,handleEndFocus:b}},render(){const{default:e}=this.$slots;if(e===void 0)return null;if(this.disabled)return e();const{active:t,focusableStyle:n}=this;return F(ze,null,[F("div",{"aria-hidden":"true",tabindex:t?"0":"-1",ref:"focusableStartRef",style:n,onFocus:this.handleStartFocus}),e(),F("div",{"aria-hidden":"true",style:n,ref:"focusableEndRef",tabindex:t?"0":"-1",onFocus:this.handleEndFocus})])}});function kP(e){const t={isDeactivated:!1};let n=!1;return _d(()=>{if(t.isDeactivated=!1,!n){n=!0;return}e()}),xd(()=>{t.isDeactivated=!0,n||(n=!0)}),t}var SP=typeof global=="object"&&global&&global.Object===Object&&global;const u1=SP;var $P=typeof self=="object"&&self&&self.Object===Object&&self,CP=u1||$P||Function("return this")();const Yn=CP;var EP=Yn.Symbol;const Fr=EP;var d1=Object.prototype,OP=d1.hasOwnProperty,IP=d1.toString,As=Fr?Fr.toStringTag:void 0;function PP(e){var t=OP.call(e,As),n=e[As];try{e[As]=void 0;var r=!0}catch{}var o=IP.call(e);return r&&(t?e[As]=n:delete e[As]),o}var TP=Object.prototype,MP=TP.toString;function AP(e){return MP.call(e)}var RP="[object Null]",LP="[object Undefined]",zh=Fr?Fr.toStringTag:void 0;function Io(e){return e==null?e===void 0?LP:RP:zh&&zh in Object(e)?PP(e):AP(e)}function zr(e){return e!=null&&typeof e=="object"}var DP="[object Symbol]";function Wd(e){return typeof e=="symbol"||zr(e)&&Io(e)==DP}function f1(e,t){for(var n=-1,r=e==null?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}var jP=Array.isArray;const $n=jP;var NP=1/0,Bh=Fr?Fr.prototype:void 0,Hh=Bh?Bh.toString:void 0;function p1(e){if(typeof e=="string")return e;if($n(e))return f1(e,p1)+"";if(Wd(e))return Hh?Hh.call(e):"";var t=e+"";return t=="0"&&1/e==-NP?"-0":t}function Vr(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function Ud(e){return e}var FP="[object AsyncFunction]",zP="[object Function]",BP="[object GeneratorFunction]",HP="[object Proxy]";function qd(e){if(!Vr(e))return!1;var t=Io(e);return t==zP||t==BP||t==FP||t==HP}var VP=Yn["__core-js_shared__"];const wc=VP;var Vh=function(){var e=/[^.]+$/.exec(wc&&wc.keys&&wc.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function WP(e){return!!Vh&&Vh in e}var UP=Function.prototype,qP=UP.toString;function Po(e){if(e!=null){try{return qP.call(e)}catch{}try{return e+""}catch{}}return""}var KP=/[\\^$.*+?()[\]{}|]/g,YP=/^\[object .+?Constructor\]$/,ZP=Function.prototype,GP=Object.prototype,XP=ZP.toString,JP=GP.hasOwnProperty,QP=RegExp("^"+XP.call(JP).replace(KP,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function eT(e){if(!Vr(e)||WP(e))return!1;var t=qd(e)?QP:YP;return t.test(Po(e))}function tT(e,t){return e==null?void 0:e[t]}function To(e,t){var n=tT(e,t);return eT(n)?n:void 0}var nT=To(Yn,"WeakMap");const Ru=nT;var Wh=Object.create,rT=function(){function e(){}return function(t){if(!Vr(t))return{};if(Wh)return Wh(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const oT=rT;function sT(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function iT(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}var lT=800,aT=16,cT=Date.now;function uT(e){var t=0,n=0;return function(){var r=cT(),o=aT-(r-n);if(n=r,o>0){if(++t>=lT)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function dT(e){return function(){return e}}var fT=function(){try{var e=To(Object,"defineProperty");return e({},"",{}),e}catch{}}();const la=fT;var pT=la?function(e,t){return la(e,"toString",{configurable:!0,enumerable:!1,value:dT(t),writable:!0})}:Ud;const hT=pT;var mT=uT(hT);const vT=mT;var gT=9007199254740991,bT=/^(?:0|[1-9]\d*)$/;function Kd(e,t){var n=typeof e;return t=t??gT,!!t&&(n=="number"||n!="symbol"&&bT.test(e))&&e>-1&&e%1==0&&e<t}function Yd(e,t,n){t=="__proto__"&&la?la(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function zi(e,t){return e===t||e!==e&&t!==t}var yT=Object.prototype,wT=yT.hasOwnProperty;function _T(e,t,n){var r=e[t];(!(wT.call(e,t)&&zi(r,n))||n===void 0&&!(t in e))&&Yd(e,t,n)}function xT(e,t,n,r){var o=!n;n||(n={});for(var s=-1,i=t.length;++s<i;){var l=t[s],a=r?r(n[l],e[l],l,n,e):void 0;a===void 0&&(a=e[l]),o?Yd(n,l,a):_T(n,l,a)}return n}var Uh=Math.max;function kT(e,t,n){return t=Uh(t===void 0?e.length-1:t,0),function(){for(var r=arguments,o=-1,s=Uh(r.length-t,0),i=Array(s);++o<s;)i[o]=r[t+o];o=-1;for(var l=Array(t+1);++o<t;)l[o]=r[o];return l[t]=n(i),sT(e,this,l)}}function ST(e,t){return vT(kT(e,t,Ud),e+"")}var $T=9007199254740991;function Zd(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=$T}function ds(e){return e!=null&&Zd(e.length)&&!qd(e)}function CT(e,t,n){if(!Vr(n))return!1;var r=typeof t;return(r=="number"?ds(n)&&Kd(t,n.length):r=="string"&&t in n)?zi(n[t],e):!1}function ET(e){return ST(function(t,n){var r=-1,o=n.length,s=o>1?n[o-1]:void 0,i=o>2?n[2]:void 0;for(s=e.length>3&&typeof s=="function"?(o--,s):void 0,i&&CT(n[0],n[1],i)&&(s=o<3?void 0:s,o=1),t=Object(t);++r<o;){var l=n[r];l&&e(t,l,r,s)}return t})}var OT=Object.prototype;function Gd(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||OT;return e===n}function IT(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var PT="[object Arguments]";function qh(e){return zr(e)&&Io(e)==PT}var h1=Object.prototype,TT=h1.hasOwnProperty,MT=h1.propertyIsEnumerable,AT=qh(function(){return arguments}())?qh:function(e){return zr(e)&&TT.call(e,"callee")&&!MT.call(e,"callee")};const aa=AT;function RT(){return!1}var m1=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Kh=m1&&typeof module=="object"&&module&&!module.nodeType&&module,LT=Kh&&Kh.exports===m1,Yh=LT?Yn.Buffer:void 0,DT=Yh?Yh.isBuffer:void 0,jT=DT||RT;const ca=jT;var NT="[object Arguments]",FT="[object Array]",zT="[object Boolean]",BT="[object Date]",HT="[object Error]",VT="[object Function]",WT="[object Map]",UT="[object Number]",qT="[object Object]",KT="[object RegExp]",YT="[object Set]",ZT="[object String]",GT="[object WeakMap]",XT="[object ArrayBuffer]",JT="[object DataView]",QT="[object Float32Array]",e4="[object Float64Array]",t4="[object Int8Array]",n4="[object Int16Array]",r4="[object Int32Array]",o4="[object Uint8Array]",s4="[object Uint8ClampedArray]",i4="[object Uint16Array]",l4="[object Uint32Array]",at={};at[QT]=at[e4]=at[t4]=at[n4]=at[r4]=at[o4]=at[s4]=at[i4]=at[l4]=!0;at[NT]=at[FT]=at[XT]=at[zT]=at[JT]=at[BT]=at[HT]=at[VT]=at[WT]=at[UT]=at[qT]=at[KT]=at[YT]=at[ZT]=at[GT]=!1;function a4(e){return zr(e)&&Zd(e.length)&&!!at[Io(e)]}function c4(e){return function(t){return e(t)}}var v1=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ei=v1&&typeof module=="object"&&module&&!module.nodeType&&module,u4=ei&&ei.exports===v1,_c=u4&&u1.process,d4=function(){try{var e=ei&&ei.require&&ei.require("util").types;return e||_c&&_c.binding&&_c.binding("util")}catch{}}();const Zh=d4;var Gh=Zh&&Zh.isTypedArray,f4=Gh?c4(Gh):a4;const Xd=f4;var p4=Object.prototype,h4=p4.hasOwnProperty;function g1(e,t){var n=$n(e),r=!n&&aa(e),o=!n&&!r&&ca(e),s=!n&&!r&&!o&&Xd(e),i=n||r||o||s,l=i?IT(e.length,String):[],a=l.length;for(var c in e)(t||h4.call(e,c))&&!(i&&(c=="length"||o&&(c=="offset"||c=="parent")||s&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||Kd(c,a)))&&l.push(c);return l}function b1(e,t){return function(n){return e(t(n))}}var m4=b1(Object.keys,Object);const v4=m4;var g4=Object.prototype,b4=g4.hasOwnProperty;function y4(e){if(!Gd(e))return v4(e);var t=[];for(var n in Object(e))b4.call(e,n)&&n!="constructor"&&t.push(n);return t}function Jd(e){return ds(e)?g1(e):y4(e)}function w4(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var _4=Object.prototype,x4=_4.hasOwnProperty;function k4(e){if(!Vr(e))return w4(e);var t=Gd(e),n=[];for(var r in e)r=="constructor"&&(t||!x4.call(e,r))||n.push(r);return n}function y1(e){return ds(e)?g1(e,!0):k4(e)}var S4=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,$4=/^\w*$/;function Qd(e,t){if($n(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||Wd(e)?!0:$4.test(e)||!S4.test(e)||t!=null&&e in Object(t)}var C4=To(Object,"create");const ki=C4;function E4(){this.__data__=ki?ki(null):{},this.size=0}function O4(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var I4="__lodash_hash_undefined__",P4=Object.prototype,T4=P4.hasOwnProperty;function M4(e){var t=this.__data__;if(ki){var n=t[e];return n===I4?void 0:n}return T4.call(t,e)?t[e]:void 0}var A4=Object.prototype,R4=A4.hasOwnProperty;function L4(e){var t=this.__data__;return ki?t[e]!==void 0:R4.call(t,e)}var D4="__lodash_hash_undefined__";function j4(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ki&&t===void 0?D4:t,this}function So(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}So.prototype.clear=E4;So.prototype.delete=O4;So.prototype.get=M4;So.prototype.has=L4;So.prototype.set=j4;function N4(){this.__data__=[],this.size=0}function La(e,t){for(var n=e.length;n--;)if(zi(e[n][0],t))return n;return-1}var F4=Array.prototype,z4=F4.splice;function B4(e){var t=this.__data__,n=La(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():z4.call(t,n,1),--this.size,!0}function H4(e){var t=this.__data__,n=La(t,e);return n<0?void 0:t[n][1]}function V4(e){return La(this.__data__,e)>-1}function W4(e,t){var n=this.__data__,r=La(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function fr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}fr.prototype.clear=N4;fr.prototype.delete=B4;fr.prototype.get=H4;fr.prototype.has=V4;fr.prototype.set=W4;var U4=To(Yn,"Map");const Si=U4;function q4(){this.size=0,this.__data__={hash:new So,map:new(Si||fr),string:new So}}function K4(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Da(e,t){var n=e.__data__;return K4(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Y4(e){var t=Da(this,e).delete(e);return this.size-=t?1:0,t}function Z4(e){return Da(this,e).get(e)}function G4(e){return Da(this,e).has(e)}function X4(e,t){var n=Da(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function pr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}pr.prototype.clear=q4;pr.prototype.delete=Y4;pr.prototype.get=Z4;pr.prototype.has=G4;pr.prototype.set=X4;var J4="Expected a function";function ef(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(J4);var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],s=n.cache;if(s.has(o))return s.get(o);var i=e.apply(this,r);return n.cache=s.set(o,i)||s,i};return n.cache=new(ef.Cache||pr),n}ef.Cache=pr;var Q4=500;function eM(e){var t=ef(e,function(r){return n.size===Q4&&n.clear(),r}),n=t.cache;return t}var tM=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,nM=/\\(\\)?/g,rM=eM(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(tM,function(n,r,o,s){t.push(o?s.replace(nM,"$1"):r||n)}),t});const oM=rM;function Bi(e){return e==null?"":p1(e)}function w1(e,t){return $n(e)?e:Qd(e,t)?[e]:oM(Bi(e))}var sM=1/0;function ja(e){if(typeof e=="string"||Wd(e))return e;var t=e+"";return t=="0"&&1/e==-sM?"-0":t}function _1(e,t){t=w1(t,e);for(var n=0,r=t.length;e!=null&&n<r;)e=e[ja(t[n++])];return n&&n==r?e:void 0}function iM(e,t,n){var r=e==null?void 0:_1(e,t);return r===void 0?n:r}function lM(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}var aM=b1(Object.getPrototypeOf,Object);const x1=aM;var cM="[object Object]",uM=Function.prototype,dM=Object.prototype,k1=uM.toString,fM=dM.hasOwnProperty,pM=k1.call(Object);function hM(e){if(!zr(e)||Io(e)!=cM)return!1;var t=x1(e);if(t===null)return!0;var n=fM.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&k1.call(n)==pM}function mM(e,t,n){var r=-1,o=e.length;t<0&&(t=-t>o?0:o+t),n=n>o?o:n,n<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var s=Array(o);++r<o;)s[r]=e[r+t];return s}function vM(e,t,n){var r=e.length;return n=n===void 0?r:n,!t&&n>=r?e:mM(e,t,n)}var gM="\\ud800-\\udfff",bM="\\u0300-\\u036f",yM="\\ufe20-\\ufe2f",wM="\\u20d0-\\u20ff",_M=bM+yM+wM,xM="\\ufe0e\\ufe0f",kM="\\u200d",SM=RegExp("["+kM+gM+_M+xM+"]");function S1(e){return SM.test(e)}function $M(e){return e.split("")}var $1="\\ud800-\\udfff",CM="\\u0300-\\u036f",EM="\\ufe20-\\ufe2f",OM="\\u20d0-\\u20ff",IM=CM+EM+OM,PM="\\ufe0e\\ufe0f",TM="["+$1+"]",Lu="["+IM+"]",Du="\\ud83c[\\udffb-\\udfff]",MM="(?:"+Lu+"|"+Du+")",C1="[^"+$1+"]",E1="(?:\\ud83c[\\udde6-\\uddff]){2}",O1="[\\ud800-\\udbff][\\udc00-\\udfff]",AM="\\u200d",I1=MM+"?",P1="["+PM+"]?",RM="(?:"+AM+"(?:"+[C1,E1,O1].join("|")+")"+P1+I1+")*",LM=P1+I1+RM,DM="(?:"+[C1+Lu+"?",Lu,E1,O1,TM].join("|")+")",jM=RegExp(Du+"(?="+Du+")|"+DM+LM,"g");function NM(e){return e.match(jM)||[]}function FM(e){return S1(e)?NM(e):$M(e)}function zM(e){return function(t){t=Bi(t);var n=S1(t)?FM(t):void 0,r=n?n[0]:t.charAt(0),o=n?vM(n,1).join(""):t.slice(1);return r[e]()+o}}var BM=zM("toUpperCase");const T1=BM;function HM(e){return T1(Bi(e).toLowerCase())}function VM(e,t,n,r){var o=-1,s=e==null?0:e.length;for(r&&s&&(n=e[++o]);++o<s;)n=t(n,e[o],o,e);return n}function WM(e){return function(t){return e==null?void 0:e[t]}}var UM={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},qM=WM(UM);const KM=qM;var YM=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ZM="\\u0300-\\u036f",GM="\\ufe20-\\ufe2f",XM="\\u20d0-\\u20ff",JM=ZM+GM+XM,QM="["+JM+"]",eA=RegExp(QM,"g");function tA(e){return e=Bi(e),e&&e.replace(YM,KM).replace(eA,"")}var nA=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function rA(e){return e.match(nA)||[]}var oA=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function sA(e){return oA.test(e)}var M1="\\ud800-\\udfff",iA="\\u0300-\\u036f",lA="\\ufe20-\\ufe2f",aA="\\u20d0-\\u20ff",cA=iA+lA+aA,A1="\\u2700-\\u27bf",R1="a-z\\xdf-\\xf6\\xf8-\\xff",uA="\\xac\\xb1\\xd7\\xf7",dA="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",fA="\\u2000-\\u206f",pA=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",L1="A-Z\\xc0-\\xd6\\xd8-\\xde",hA="\\ufe0e\\ufe0f",D1=uA+dA+fA+pA,j1="['’]",Xh="["+D1+"]",mA="["+cA+"]",N1="\\d+",vA="["+A1+"]",F1="["+R1+"]",z1="[^"+M1+D1+N1+A1+R1+L1+"]",gA="\\ud83c[\\udffb-\\udfff]",bA="(?:"+mA+"|"+gA+")",yA="[^"+M1+"]",B1="(?:\\ud83c[\\udde6-\\uddff]){2}",H1="[\\ud800-\\udbff][\\udc00-\\udfff]",Wo="["+L1+"]",wA="\\u200d",Jh="(?:"+F1+"|"+z1+")",_A="(?:"+Wo+"|"+z1+")",Qh="(?:"+j1+"(?:d|ll|m|re|s|t|ve))?",em="(?:"+j1+"(?:D|LL|M|RE|S|T|VE))?",V1=bA+"?",W1="["+hA+"]?",xA="(?:"+wA+"(?:"+[yA,B1,H1].join("|")+")"+W1+V1+")*",kA="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",SA="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",$A=W1+V1+xA,CA="(?:"+[vA,B1,H1].join("|")+")"+$A,EA=RegExp([Wo+"?"+F1+"+"+Qh+"(?="+[Xh,Wo,"$"].join("|")+")",_A+"+"+em+"(?="+[Xh,Wo+Jh,"$"].join("|")+")",Wo+"?"+Jh+"+"+Qh,Wo+"+"+em,SA,kA,N1,CA].join("|"),"g");function OA(e){return e.match(EA)||[]}function IA(e,t,n){return e=Bi(e),t=n?void 0:t,t===void 0?sA(e)?OA(e):rA(e):e.match(t)||[]}var PA="['’]",TA=RegExp(PA,"g");function U1(e){return function(t){return VM(IA(tA(t).replace(TA,"")),e,"")}}var MA=U1(function(e,t,n){return t=t.toLowerCase(),e+(n?HM(t):t)});const tm=MA;function AA(){this.__data__=new fr,this.size=0}function RA(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function LA(e){return this.__data__.get(e)}function DA(e){return this.__data__.has(e)}var jA=200;function NA(e,t){var n=this.__data__;if(n instanceof fr){var r=n.__data__;if(!Si||r.length<jA-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new pr(r)}return n.set(e,t),this.size=n.size,this}function Vn(e){var t=this.__data__=new fr(e);this.size=t.size}Vn.prototype.clear=AA;Vn.prototype.delete=RA;Vn.prototype.get=LA;Vn.prototype.has=DA;Vn.prototype.set=NA;var q1=typeof exports=="object"&&exports&&!exports.nodeType&&exports,nm=q1&&typeof module=="object"&&module&&!module.nodeType&&module,FA=nm&&nm.exports===q1,rm=FA?Yn.Buffer:void 0,om=rm?rm.allocUnsafe:void 0;function zA(e,t){if(t)return e.slice();var n=e.length,r=om?om(n):new e.constructor(n);return e.copy(r),r}function BA(e,t){for(var n=-1,r=e==null?0:e.length,o=0,s=[];++n<r;){var i=e[n];t(i,n,e)&&(s[o++]=i)}return s}function HA(){return[]}var VA=Object.prototype,WA=VA.propertyIsEnumerable,sm=Object.getOwnPropertySymbols,UA=sm?function(e){return e==null?[]:(e=Object(e),BA(sm(e),function(t){return WA.call(e,t)}))}:HA;const qA=UA;function KA(e,t,n){var r=t(e);return $n(e)?r:lM(r,n(e))}function im(e){return KA(e,Jd,qA)}var YA=To(Yn,"DataView");const ju=YA;var ZA=To(Yn,"Promise");const Nu=ZA;var GA=To(Yn,"Set");const Fu=GA;var lm="[object Map]",XA="[object Object]",am="[object Promise]",cm="[object Set]",um="[object WeakMap]",dm="[object DataView]",JA=Po(ju),QA=Po(Si),e3=Po(Nu),t3=Po(Fu),n3=Po(Ru),Xr=Io;(ju&&Xr(new ju(new ArrayBuffer(1)))!=dm||Si&&Xr(new Si)!=lm||Nu&&Xr(Nu.resolve())!=am||Fu&&Xr(new Fu)!=cm||Ru&&Xr(new Ru)!=um)&&(Xr=function(e){var t=Io(e),n=t==XA?e.constructor:void 0,r=n?Po(n):"";if(r)switch(r){case JA:return dm;case QA:return lm;case e3:return am;case t3:return cm;case n3:return um}return t});const fm=Xr;var r3=Yn.Uint8Array;const ua=r3;function o3(e){var t=new e.constructor(e.byteLength);return new ua(t).set(new ua(e)),t}function s3(e,t){var n=t?o3(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function i3(e){return typeof e.constructor=="function"&&!Gd(e)?oT(x1(e)):{}}var l3="__lodash_hash_undefined__";function a3(e){return this.__data__.set(e,l3),this}function c3(e){return this.__data__.has(e)}function da(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new pr;++t<n;)this.add(e[t])}da.prototype.add=da.prototype.push=a3;da.prototype.has=c3;function u3(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function d3(e,t){return e.has(t)}var f3=1,p3=2;function K1(e,t,n,r,o,s){var i=n&f3,l=e.length,a=t.length;if(l!=a&&!(i&&a>l))return!1;var c=s.get(e),u=s.get(t);if(c&&u)return c==t&&u==e;var d=-1,f=!0,m=n&p3?new da:void 0;for(s.set(e,t),s.set(t,e);++d<l;){var h=e[d],b=t[d];if(r)var y=i?r(b,h,d,t,e,s):r(h,b,d,e,t,s);if(y!==void 0){if(y)continue;f=!1;break}if(m){if(!u3(t,function(v,x){if(!d3(m,x)&&(h===v||o(h,v,n,r,s)))return m.push(x)})){f=!1;break}}else if(!(h===b||o(h,b,n,r,s))){f=!1;break}}return s.delete(e),s.delete(t),f}function h3(e){var t=-1,n=Array(e.size);return e.forEach(function(r,o){n[++t]=[o,r]}),n}function m3(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var v3=1,g3=2,b3="[object Boolean]",y3="[object Date]",w3="[object Error]",_3="[object Map]",x3="[object Number]",k3="[object RegExp]",S3="[object Set]",$3="[object String]",C3="[object Symbol]",E3="[object ArrayBuffer]",O3="[object DataView]",pm=Fr?Fr.prototype:void 0,xc=pm?pm.valueOf:void 0;function I3(e,t,n,r,o,s,i){switch(n){case O3:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case E3:return!(e.byteLength!=t.byteLength||!s(new ua(e),new ua(t)));case b3:case y3:case x3:return zi(+e,+t);case w3:return e.name==t.name&&e.message==t.message;case k3:case $3:return e==t+"";case _3:var l=h3;case S3:var a=r&v3;if(l||(l=m3),e.size!=t.size&&!a)return!1;var c=i.get(e);if(c)return c==t;r|=g3,i.set(e,t);var u=K1(l(e),l(t),r,o,s,i);return i.delete(e),u;case C3:if(xc)return xc.call(e)==xc.call(t)}return!1}var P3=1,T3=Object.prototype,M3=T3.hasOwnProperty;function A3(e,t,n,r,o,s){var i=n&P3,l=im(e),a=l.length,c=im(t),u=c.length;if(a!=u&&!i)return!1;for(var d=a;d--;){var f=l[d];if(!(i?f in t:M3.call(t,f)))return!1}var m=s.get(e),h=s.get(t);if(m&&h)return m==t&&h==e;var b=!0;s.set(e,t),s.set(t,e);for(var y=i;++d<a;){f=l[d];var v=e[f],x=t[f];if(r)var _=i?r(x,v,f,t,e,s):r(v,x,f,e,t,s);if(!(_===void 0?v===x||o(v,x,n,r,s):_)){b=!1;break}y||(y=f=="constructor")}if(b&&!y){var E=e.constructor,I=t.constructor;E!=I&&"constructor"in e&&"constructor"in t&&!(typeof E=="function"&&E instanceof E&&typeof I=="function"&&I instanceof I)&&(b=!1)}return s.delete(e),s.delete(t),b}var R3=1,hm="[object Arguments]",mm="[object Array]",gl="[object Object]",L3=Object.prototype,vm=L3.hasOwnProperty;function D3(e,t,n,r,o,s){var i=$n(e),l=$n(t),a=i?mm:fm(e),c=l?mm:fm(t);a=a==hm?gl:a,c=c==hm?gl:c;var u=a==gl,d=c==gl,f=a==c;if(f&&ca(e)){if(!ca(t))return!1;i=!0,u=!1}if(f&&!u)return s||(s=new Vn),i||Xd(e)?K1(e,t,n,r,o,s):I3(e,t,a,n,r,o,s);if(!(n&R3)){var m=u&&vm.call(e,"__wrapped__"),h=d&&vm.call(t,"__wrapped__");if(m||h){var b=m?e.value():e,y=h?t.value():t;return s||(s=new Vn),o(b,y,n,r,s)}}return f?(s||(s=new Vn),A3(e,t,n,r,o,s)):!1}function tf(e,t,n,r,o){return e===t?!0:e==null||t==null||!zr(e)&&!zr(t)?e!==e&&t!==t:D3(e,t,n,r,tf,o)}var j3=1,N3=2;function F3(e,t,n,r){var o=n.length,s=o,i=!r;if(e==null)return!s;for(e=Object(e);o--;){var l=n[o];if(i&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++o<s;){l=n[o];var a=l[0],c=e[a],u=l[1];if(i&&l[2]){if(c===void 0&&!(a in e))return!1}else{var d=new Vn;if(r)var f=r(c,u,a,e,t,d);if(!(f===void 0?tf(u,c,j3|N3,r,d):f))return!1}}return!0}function Y1(e){return e===e&&!Vr(e)}function z3(e){for(var t=Jd(e),n=t.length;n--;){var r=t[n],o=e[r];t[n]=[r,o,Y1(o)]}return t}function Z1(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}function B3(e){var t=z3(e);return t.length==1&&t[0][2]?Z1(t[0][0],t[0][1]):function(n){return n===e||F3(n,e,t)}}function H3(e,t){return e!=null&&t in Object(e)}function V3(e,t,n){t=w1(t,e);for(var r=-1,o=t.length,s=!1;++r<o;){var i=ja(t[r]);if(!(s=e!=null&&n(e,i)))break;e=e[i]}return s||++r!=o?s:(o=e==null?0:e.length,!!o&&Zd(o)&&Kd(i,o)&&($n(e)||aa(e)))}function W3(e,t){return e!=null&&V3(e,t,H3)}var U3=1,q3=2;function K3(e,t){return Qd(e)&&Y1(t)?Z1(ja(e),t):function(n){var r=iM(n,e);return r===void 0&&r===t?W3(n,e):tf(t,r,U3|q3)}}function Y3(e){return function(t){return t==null?void 0:t[e]}}function Z3(e){return function(t){return _1(t,e)}}function G3(e){return Qd(e)?Y3(ja(e)):Z3(e)}function X3(e){return typeof e=="function"?e:e==null?Ud:typeof e=="object"?$n(e)?K3(e[0],e[1]):B3(e):G3(e)}function J3(e){return function(t,n,r){for(var o=-1,s=Object(t),i=r(t),l=i.length;l--;){var a=i[e?l:++o];if(n(s[a],a,s)===!1)break}return t}}var Q3=J3();const G1=Q3;function e6(e,t){return e&&G1(e,t,Jd)}function t6(e,t){return function(n,r){if(n==null)return n;if(!ds(n))return e(n,r);for(var o=n.length,s=t?o:-1,i=Object(n);(t?s--:++s<o)&&r(i[s],s,i)!==!1;);return n}}var n6=t6(e6);const r6=n6;function zu(e,t,n){(n!==void 0&&!zi(e[t],n)||n===void 0&&!(t in e))&&Yd(e,t,n)}function o6(e){return zr(e)&&ds(e)}function Bu(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}function s6(e){return xT(e,y1(e))}function i6(e,t,n,r,o,s,i){var l=Bu(e,n),a=Bu(t,n),c=i.get(a);if(c){zu(e,n,c);return}var u=s?s(l,a,n+"",e,t,i):void 0,d=u===void 0;if(d){var f=$n(a),m=!f&&ca(a),h=!f&&!m&&Xd(a);u=a,f||m||h?$n(l)?u=l:o6(l)?u=iT(l):m?(d=!1,u=zA(a,!0)):h?(d=!1,u=s3(a,!0)):u=[]:hM(a)||aa(a)?(u=l,aa(l)?u=s6(l):(!Vr(l)||qd(l))&&(u=i3(a))):d=!1}d&&(i.set(a,u),o(u,a,r,s,i),i.delete(a)),zu(e,n,u)}function X1(e,t,n,r,o){e!==t&&G1(t,function(s,i){if(o||(o=new Vn),Vr(s))i6(e,t,i,n,X1,r,o);else{var l=r?r(Bu(e,i),s,i+"",e,t,o):void 0;l===void 0&&(l=s),zu(e,i,l)}},y1)}function l6(e,t){var n=-1,r=ds(e)?Array(e.length):[];return r6(e,function(o,s,i){r[++n]=t(o,s,i)}),r}function a6(e,t){var n=$n(e)?f1:l6;return n(e,X3(t))}var c6=U1(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});const u6=c6;var d6=ET(function(e,t,n){X1(e,t,n)});const bl=d6,Na={fontFamily:'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontFamilyMono:"v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",fontWeight:"400",fontWeightStrong:"500",cubicBezierEaseInOut:"cubic-bezier(.4, 0, .2, 1)",cubicBezierEaseOut:"cubic-bezier(0, 0, .2, 1)",cubicBezierEaseIn:"cubic-bezier(.4, 0, 1, 1)",borderRadius:"3px",borderRadiusSmall:"2px",fontSize:"14px",fontSizeMini:"12px",fontSizeTiny:"12px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",lineHeight:"1.6",heightMini:"16px",heightTiny:"22px",heightSmall:"28px",heightMedium:"34px",heightLarge:"40px",heightHuge:"46px"},{fontSize:f6,fontFamily:p6,lineHeight:h6}=Na,J1=Ie("body",`
 margin: 0;
 font-size: ${f6};
 font-family: ${p6};
 line-height: ${h6};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,[Ie("input",`
 font-family: inherit;
 font-size: inherit;
 `)]),fs="n-config-provider",$i="naive-ui-style";function Lt(e,t,n,r,o,s){const i=Fi(),l=ie(fs,null);if(n){const c=()=>{const u=s==null?void 0:s.value;n.mount({id:u===void 0?t:u+t,head:!0,props:{bPrefix:u?`.${u}-`:void 0},anchorMetaName:$i,ssr:i}),l!=null&&l.preflightStyleDisabled||J1.mount({id:"n-global",head:!0,anchorMetaName:$i,ssr:i})};i?c():Ea(c)}return C(()=>{var c;const{theme:{common:u,self:d,peers:f={}}={},themeOverrides:m={},builtinThemeOverrides:h={}}=o,{common:b,peers:y}=m,{common:v=void 0,[e]:{common:x=void 0,self:_=void 0,peers:E={}}={}}=(l==null?void 0:l.mergedThemeRef.value)||{},{common:I=void 0,[e]:P={}}=(l==null?void 0:l.mergedThemeOverridesRef.value)||{},{common:S,peers:k={}}=P,M=bl({},u||x||v||r.common,I,S,b),N=bl((c=d||_||r.self)===null||c===void 0?void 0:c(M),h,P,m);return{common:M,self:N,peers:bl({},r.peers,E,f),peerOverrides:bl({},h.peers,k,y)}})}Lt.props={theme:Object,themeOverrides:Object,builtinThemeOverrides:Object};const m6="n";function vn(e={},t={defaultBordered:!0}){const n=ie(fs,null);return{inlineThemeDisabled:n==null?void 0:n.inlineThemeDisabled,mergedRtlRef:n==null?void 0:n.mergedRtlRef,mergedComponentPropsRef:n==null?void 0:n.mergedComponentPropsRef,mergedBreakpointsRef:n==null?void 0:n.mergedBreakpointsRef,mergedBorderedRef:C(()=>{var r,o;const{bordered:s}=e;return s!==void 0?s:(o=(r=n==null?void 0:n.mergedBorderedRef.value)!==null&&r!==void 0?r:t.defaultBordered)!==null&&o!==void 0?o:!0}),mergedClsPrefixRef:C(()=>(n==null?void 0:n.mergedClsPrefixRef.value)||m6),namespaceRef:C(()=>n==null?void 0:n.mergedNamespaceRef.value)}}const v6={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm",clear:"Clear"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:e=>`Please load all ${e}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},LegacyTransfer:{sourceTitle:"Source",targetTitle:"Target"},Transfer:{selectAll:"Select all",unselectAll:"Unselect all",clearAll:"Clear",total:e=>`Total ${e} items`,selected:e=>`${e} items selected`},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (←)",tipNext:"Next picture (→)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"}},g6=v6;function kc(e){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}function Rs(e){return function(t,n){var r=n!=null&&n.context?String(n.context):"standalone",o;if(r==="formatting"&&e.formattingValues){var s=e.defaultFormattingWidth||e.defaultWidth,i=n!=null&&n.width?String(n.width):s;o=e.formattingValues[i]||e.formattingValues[s]}else{var l=e.defaultWidth,a=n!=null&&n.width?String(n.width):e.defaultWidth;o=e.values[a]||e.values[l]}var c=e.argumentCallback?e.argumentCallback(t):t;return o[c]}}function Ls(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],s=t.match(o);if(!s)return null;var i=s[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],a=Array.isArray(l)?y6(l,function(d){return d.test(i)}):b6(l,function(d){return d.test(i)}),c;c=e.valueCallback?e.valueCallback(a):a,c=n.valueCallback?n.valueCallback(c):c;var u=t.slice(i.length);return{value:c,rest:u}}}function b6(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function y6(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}function w6(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.match(e.matchPattern);if(!r)return null;var o=r[0],s=t.match(e.parsePattern);if(!s)return null;var i=e.valueCallback?e.valueCallback(s[0]):s[0];i=n.valueCallback?n.valueCallback(i):i;var l=t.slice(o.length);return{value:i,rest:l}}}var _6={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},x6=function(t,n,r){var o,s=_6[t];return typeof s=="string"?o=s:n===1?o=s.one:o=s.other.replace("{{count}}",n.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+o:o+" ago":o};const k6=x6;var S6={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},$6={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},C6={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},E6={date:kc({formats:S6,defaultWidth:"full"}),time:kc({formats:$6,defaultWidth:"full"}),dateTime:kc({formats:C6,defaultWidth:"full"})};const O6=E6;var I6={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},P6=function(t,n,r,o){return I6[t]};const T6=P6;var M6={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},A6={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},R6={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},L6={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},D6={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},j6={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},N6=function(t,n){var r=Number(t),o=r%100;if(o>20||o<10)switch(o%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},F6={ordinalNumber:N6,era:Rs({values:M6,defaultWidth:"wide"}),quarter:Rs({values:A6,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:Rs({values:R6,defaultWidth:"wide"}),day:Rs({values:L6,defaultWidth:"wide"}),dayPeriod:Rs({values:D6,defaultWidth:"wide",formattingValues:j6,defaultFormattingWidth:"wide"})};const z6=F6;var B6=/^(\d+)(th|st|nd|rd)?/i,H6=/\d+/i,V6={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},W6={any:[/^b/i,/^(a|c)/i]},U6={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},q6={any:[/1/i,/2/i,/3/i,/4/i]},K6={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Y6={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Z6={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},G6={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},X6={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},J6={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Q6={ordinalNumber:w6({matchPattern:B6,parsePattern:H6,valueCallback:function(t){return parseInt(t,10)}}),era:Ls({matchPatterns:V6,defaultMatchWidth:"wide",parsePatterns:W6,defaultParseWidth:"any"}),quarter:Ls({matchPatterns:U6,defaultMatchWidth:"wide",parsePatterns:q6,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Ls({matchPatterns:K6,defaultMatchWidth:"wide",parsePatterns:Y6,defaultParseWidth:"any"}),day:Ls({matchPatterns:Z6,defaultMatchWidth:"wide",parsePatterns:G6,defaultParseWidth:"any"}),dayPeriod:Ls({matchPatterns:X6,defaultMatchWidth:"any",parsePatterns:J6,defaultParseWidth:"any"})};const eR=Q6;var tR={code:"en-US",formatDistance:k6,formatLong:O6,formatRelative:T6,localize:z6,match:eR,options:{weekStartsOn:0,firstWeekContainsDate:1}};const nR=tR,rR={name:"en-US",locale:nR},oR=rR;function sR(e){const{mergedLocaleRef:t,mergedDateLocaleRef:n}=ie(fs,null)||{},r=C(()=>{var s,i;return(i=(s=t==null?void 0:t.value)===null||s===void 0?void 0:s[e])!==null&&i!==void 0?i:g6[e]});return{dateLocaleRef:C(()=>{var s;return(s=n==null?void 0:n.value)!==null&&s!==void 0?s:oR}),localeRef:r}}function iR(e,t,n){if(!t){Aa("use-style","No style is specified.");return}const r=Fi(),o=ie(fs,null),s=()=>{const i=n==null?void 0:n.value;t.mount({id:i===void 0?e:i+e,head:!0,anchorMetaName:$i,props:{bPrefix:i?`.${i}-`:void 0},ssr:r}),o!=null&&o.preflightStyleDisabled||J1.mount({id:"n-global",head:!0,anchorMetaName:$i,ssr:r})};r?s():Ea(s)}function ps(e,t,n,r){var o;n||Aa("useThemeClass","cssVarsRef is not passed");const s=(o=ie(fs,null))===null||o===void 0?void 0:o.mergedThemeHashRef,i=z(""),l=Fi();let a;const c=`__${e}`,u=()=>{let d=c;const f=t?t.value:void 0,m=s==null?void 0:s.value;m&&(d+="-"+m),f&&(d+="-"+f);const{themeOverrides:h,builtinThemeOverrides:b}=r;h&&(d+="-"+Pu(JSON.stringify(h))),b&&(d+="-"+Pu(JSON.stringify(b))),i.value=d,a=()=>{const y=n.value;let v="";for(const x in y)v+=`${x}: ${y[x]};`;Ie(`.${d}`,v).mount({id:d,ssr:l}),a=void 0}};return Jt(()=>{u()}),{themeClass:i,onRender:()=>{a==null||a()}}}function Q1(e,t,n){if(!t)return;const r=Fi(),o=C(()=>{const{value:i}=t;if(!i)return;const l=i[e];if(l)return l}),s=()=>{Jt(()=>{const{value:i}=n,l=`${i}${e}Rtl`;if(cI(l,r))return;const{value:a}=o;a&&a.style.mount({id:l,head:!0,anchorMetaName:$i,props:{bPrefix:i?`.${i}-`:void 0},ssr:r})})};return r?s():Ea(s),o}function Fa(e,t){return pe({name:T1(e),setup(){var n;const r=(n=ie(fs,null))===null||n===void 0?void 0:n.mergedIconsRef;return()=>{var o;const s=(o=r==null?void 0:r.value)===null||o===void 0?void 0:o[e];return s?s():t}}})}const lR=Fa("rotateClockwise",F("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},F("path",{d:"M3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 12.7916 15.3658 15.2026 13 16.3265V14.5C13 14.2239 12.7761 14 12.5 14C12.2239 14 12 14.2239 12 14.5V17.5C12 17.7761 12.2239 18 12.5 18H15.5C15.7761 18 16 17.7761 16 17.5C16 17.2239 15.7761 17 15.5 17H13.8758C16.3346 15.6357 18 13.0128 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 10.2761 2.22386 10.5 2.5 10.5C2.77614 10.5 3 10.2761 3 10Z",fill:"currentColor"}),F("path",{d:"M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12ZM10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11Z",fill:"currentColor"}))),aR=Fa("rotateClockwise",F("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},F("path",{d:"M17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 12.7916 4.63419 15.2026 7 16.3265V14.5C7 14.2239 7.22386 14 7.5 14C7.77614 14 8 14.2239 8 14.5V17.5C8 17.7761 7.77614 18 7.5 18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H6.12422C3.66539 15.6357 2 13.0128 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 10.2761 17.7761 10.5 17.5 10.5C17.2239 10.5 17 10.2761 17 10Z",fill:"currentColor"}),F("path",{d:"M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12ZM10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11Z",fill:"currentColor"}))),cR=Fa("zoomIn",F("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},F("path",{d:"M11.5 8.5C11.5 8.22386 11.2761 8 11 8H9V6C9 5.72386 8.77614 5.5 8.5 5.5C8.22386 5.5 8 5.72386 8 6V8H6C5.72386 8 5.5 8.22386 5.5 8.5C5.5 8.77614 5.72386 9 6 9H8V11C8 11.2761 8.22386 11.5 8.5 11.5C8.77614 11.5 9 11.2761 9 11V9H11C11.2761 9 11.5 8.77614 11.5 8.5Z",fill:"currentColor"}),F("path",{d:"M8.5 3C11.5376 3 14 5.46243 14 8.5C14 9.83879 13.5217 11.0659 12.7266 12.0196L16.8536 16.1464C17.0488 16.3417 17.0488 16.6583 16.8536 16.8536C16.68 17.0271 16.4106 17.0464 16.2157 16.9114L16.1464 16.8536L12.0196 12.7266C11.0659 13.5217 9.83879 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3ZM8.5 4C6.01472 4 4 6.01472 4 8.5C4 10.9853 6.01472 13 8.5 13C10.9853 13 13 10.9853 13 8.5C13 6.01472 10.9853 4 8.5 4Z",fill:"currentColor"}))),uR=Fa("zoomOut",F("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},F("path",{d:"M11 8C11.2761 8 11.5 8.22386 11.5 8.5C11.5 8.77614 11.2761 9 11 9H6C5.72386 9 5.5 8.77614 5.5 8.5C5.5 8.22386 5.72386 8 6 8H11Z",fill:"currentColor"}),F("path",{d:"M14 8.5C14 5.46243 11.5376 3 8.5 3C5.46243 3 3 5.46243 3 8.5C3 11.5376 5.46243 14 8.5 14C9.83879 14 11.0659 13.5217 12.0196 12.7266L16.1464 16.8536L16.2157 16.9114C16.4106 17.0464 16.68 17.0271 16.8536 16.8536C17.0488 16.6583 17.0488 16.3417 16.8536 16.1464L12.7266 12.0196C13.5217 11.0659 14 9.83879 14 8.5ZM4 8.5C4 6.01472 6.01472 4 8.5 4C10.9853 4 13 6.01472 13 8.5C13 10.9853 10.9853 13 8.5 13C6.01472 13 4 10.9853 4 8.5Z",fill:"currentColor"}))),dR=pe({name:"ResizeSmall",render(){return F("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},F("g",{fill:"none"},F("path",{d:"M5.5 4A1.5 1.5 0 0 0 4 5.5v1a.5.5 0 0 1-1 0v-1A2.5 2.5 0 0 1 5.5 3h1a.5.5 0 0 1 0 1h-1zM16 5.5A1.5 1.5 0 0 0 14.5 4h-1a.5.5 0 0 1 0-1h1A2.5 2.5 0 0 1 17 5.5v1a.5.5 0 0 1-1 0v-1zm0 9a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-1 0v1zm-12 0A1.5 1.5 0 0 0 5.5 16h1.25a.5.5 0 0 1 0 1H5.5A2.5 2.5 0 0 1 3 14.5v-1.25a.5.5 0 0 1 1 0v1.25zM8.5 7A1.5 1.5 0 0 0 7 8.5v3A1.5 1.5 0 0 0 8.5 13h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 11.5 7h-3zM8 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3z",fill:"currentColor"})))}}),fR=De("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[Ie("svg",`
 height: 1em;
 width: 1em;
 `)]),wr=pe({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){iR("-base-icon",fR,pn(e,"clsPrefix"))},render(){return F("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}}),Se={neutralBase:"#FFF",neutralInvertBase:"#000",neutralTextBase:"#000",neutralPopover:"#fff",neutralCard:"#fff",neutralModal:"#fff",neutralBody:"#fff",alpha1:"0.82",alpha2:"0.72",alpha3:"0.38",alpha4:"0.24",alpha5:"0.18",alphaClose:"0.6",alphaDisabled:"0.5",alphaDisabledInput:"0.02",alphaPending:"0.05",alphaTablePending:"0.02",alphaPressed:"0.07",alphaAvatar:"0.2",alphaRail:"0.14",alphaProgressRail:".08",alphaBorder:"0.12",alphaDivider:"0.06",alphaInput:"0",alphaAction:"0.02",alphaTab:"0.04",alphaScrollbar:"0.25",alphaScrollbarHover:"0.4",alphaCode:"0.05",alphaTag:"0.02",primaryHover:"#36ad6a",primaryDefault:"#18a058",primaryActive:"#0c7a43",primarySuppl:"#36ad6a",infoHover:"#4098fc",infoDefault:"#2080f0",infoActive:"#1060c9",infoSuppl:"#4098fc",errorHover:"#de576d",errorDefault:"#d03050",errorActive:"#ab1f3f",errorSuppl:"#de576d",warningHover:"#fcb040",warningDefault:"#f0a020",warningActive:"#c97c10",warningSuppl:"#fcb040",successHover:"#36ad6a",successDefault:"#18a058",successActive:"#0c7a43",successSuppl:"#36ad6a"},pR=ko(Se.neutralBase),eb=ko(Se.neutralInvertBase),hR="rgba("+eb.slice(0,3).join(", ")+", ";function gm(e){return hR+String(e)+")"}function zt(e){const t=Array.from(eb);return t[3]=Number(e),L0(pR,t)}const mR=Object.assign(Object.assign({name:"common"},Na),{baseColor:Se.neutralBase,primaryColor:Se.primaryDefault,primaryColorHover:Se.primaryHover,primaryColorPressed:Se.primaryActive,primaryColorSuppl:Se.primarySuppl,infoColor:Se.infoDefault,infoColorHover:Se.infoHover,infoColorPressed:Se.infoActive,infoColorSuppl:Se.infoSuppl,successColor:Se.successDefault,successColorHover:Se.successHover,successColorPressed:Se.successActive,successColorSuppl:Se.successSuppl,warningColor:Se.warningDefault,warningColorHover:Se.warningHover,warningColorPressed:Se.warningActive,warningColorSuppl:Se.warningSuppl,errorColor:Se.errorDefault,errorColorHover:Se.errorHover,errorColorPressed:Se.errorActive,errorColorSuppl:Se.errorSuppl,textColorBase:Se.neutralTextBase,textColor1:"rgb(31, 34, 37)",textColor2:"rgb(51, 54, 57)",textColor3:"rgb(118, 124, 130)",textColorDisabled:zt(Se.alpha4),placeholderColor:zt(Se.alpha4),placeholderColorDisabled:zt(Se.alpha5),iconColor:zt(Se.alpha4),iconColorHover:cl(zt(Se.alpha4),{lightness:.75}),iconColorPressed:cl(zt(Se.alpha4),{lightness:.9}),iconColorDisabled:zt(Se.alpha5),opacity1:Se.alpha1,opacity2:Se.alpha2,opacity3:Se.alpha3,opacity4:Se.alpha4,opacity5:Se.alpha5,dividerColor:"rgb(239, 239, 245)",borderColor:"rgb(224, 224, 230)",closeIconColor:zt(Number(Se.alphaClose)),closeIconColorHover:zt(Number(Se.alphaClose)),closeIconColorPressed:zt(Number(Se.alphaClose)),closeColorHover:"rgba(0, 0, 0, .09)",closeColorPressed:"rgba(0, 0, 0, .13)",clearColor:zt(Se.alpha4),clearColorHover:cl(zt(Se.alpha4),{lightness:.75}),clearColorPressed:cl(zt(Se.alpha4),{lightness:.9}),scrollbarColor:gm(Se.alphaScrollbar),scrollbarColorHover:gm(Se.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:zt(Se.alphaProgressRail),railColor:"rgb(219, 219, 223)",popoverColor:Se.neutralPopover,tableColor:Se.neutralCard,cardColor:Se.neutralCard,modalColor:Se.neutralModal,bodyColor:Se.neutralBody,tagColor:"#eee",avatarColor:zt(Se.alphaAvatar),invertedColor:"rgb(0, 20, 40)",inputColor:zt(Se.alphaInput),codeColor:"rgb(244, 244, 248)",tabColor:"rgb(247, 247, 250)",actionColor:"rgb(250, 250, 252)",tableHeaderColor:"rgb(250, 250, 252)",hoverColor:"rgb(243, 243, 245)",tableColorHover:"rgba(0, 0, 100, 0.03)",tableColorStriped:"rgba(0, 0, 100, 0.02)",pressedColor:"rgb(237, 237, 239)",opacityDisabled:Se.alphaDisabled,inputColorDisabled:"rgb(250, 250, 252)",buttonColor2:"rgba(46, 51, 56, .05)",buttonColor2Hover:"rgba(46, 51, 56, .09)",buttonColor2Pressed:"rgba(46, 51, 56, .13)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}),Mo=mR,vR=e=>{const{scrollbarColor:t,scrollbarColorHover:n}=e;return{color:t,colorHover:n}},gR={name:"Scrollbar",common:Mo,self:vR},bR=gR,{cubicBezierEaseInOut:bm}=Na;function Hu({name:e="fade-in",enterDuration:t="0.2s",leaveDuration:n="0.2s",enterCubicBezier:r=bm,leaveCubicBezier:o=bm}={}){return[Ie(`&.${e}-transition-enter-active`,{transition:`all ${t} ${r}!important`}),Ie(`&.${e}-transition-leave-active`,{transition:`all ${n} ${o}!important`}),Ie(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`,{opacity:0}),Ie(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`,{opacity:1})]}const yR=De("scrollbar",`
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`,[Ie(">",[De("scrollbar-container",`
 width: 100%;
 overflow: scroll;
 height: 100%;
 max-height: inherit;
 scrollbar-width: none;
 `,[Ie("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),Ie(">",[De("scrollbar-content",`
 box-sizing: border-box;
 min-width: 100%;
 `)])])]),Ie(">, +",[De("scrollbar-rail",`
 position: absolute;
 pointer-events: none;
 user-select: none;
 -webkit-user-select: none;
 `,[Te("horizontal",`
 left: 2px;
 right: 2px;
 bottom: 4px;
 height: var(--n-scrollbar-height);
 `,[Ie(">",[ke("scrollbar",`
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]),Te("vertical",`
 right: 4px;
 top: 2px;
 bottom: 2px;
 width: var(--n-scrollbar-width);
 `,[Ie(">",[ke("scrollbar",`
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]),Te("disabled",[Ie(">",[ke("scrollbar",{pointerEvents:"none"})])]),Ie(">",[ke("scrollbar",`
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `,[Hu(),Ie("&:hover",{backgroundColor:"var(--n-scrollbar-color-hover)"})])])])])]),wR=Object.assign(Object.assign({},Lt.props),{size:{type:Number,default:5},duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,trigger:{type:String,default:"hover"},useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:String,contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function,internalHoistYRail:Boolean}),_R=pe({name:"Scrollbar",props:wR,inheritAttrs:!1,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedRtlRef:r}=vn(e),o=Q1("Scrollbar",r,t),s=z(null),i=z(null),l=z(null),a=z(null),c=z(null),u=z(null),d=z(null),f=z(null),m=z(null),h=z(null),b=z(null),y=z(0),v=z(0),x=z(!1),_=z(!1);let E=!1,I=!1,P,S,k=0,M=0,N=0,G=0;const B=OI(),te=C(()=>{const{value:q}=f,{value:de}=u,{value:Ee}=h;return q===null||de===null||Ee===null?0:Math.min(q,Ee*q/de+e.size*1.5)}),V=C(()=>`${te.value}px`),ne=C(()=>{const{value:q}=m,{value:de}=d,{value:Ee}=b;return q===null||de===null||Ee===null?0:Ee*q/de+e.size*1.5}),ve=C(()=>`${ne.value}px`),J=C(()=>{const{value:q}=f,{value:de}=y,{value:Ee}=u,{value:ot}=h;if(q===null||Ee===null||ot===null)return 0;{const vt=Ee-q;return vt?de/vt*(ot-te.value):0}}),le=C(()=>`${J.value}px`),me=C(()=>{const{value:q}=m,{value:de}=v,{value:Ee}=d,{value:ot}=b;if(q===null||Ee===null||ot===null)return 0;{const vt=Ee-q;return vt?de/vt*(ot-ne.value):0}}),Re=C(()=>`${me.value}px`),Xe=C(()=>{const{value:q}=f,{value:de}=u;return q!==null&&de!==null&&de>q}),nt=C(()=>{const{value:q}=m,{value:de}=d;return q!==null&&de!==null&&de>q}),ft=C(()=>{const{trigger:q}=e;return q==="none"||x.value}),Qe=C(()=>{const{trigger:q}=e;return q==="none"||_.value}),yt=C(()=>{const{container:q}=e;return q?q():i.value}),Mt=C(()=>{const{content:q}=e;return q?q():l.value}),A=kP(()=>{e.container||se({top:y.value,left:v.value})}),re=()=>{A.isDeactivated||ue()},oe=q=>{if(A.isDeactivated)return;const{onResize:de}=e;de&&de(q),ue()},se=(q,de)=>{if(!e.scrollable)return;if(typeof q=="number"){X(de??0,q,0,!1,"auto");return}const{left:Ee,top:ot,index:vt,elSize:Ft,position:On,behavior:ut,el:In,debounce:mr=!0}=q;(Ee!==void 0||ot!==void 0)&&X(Ee??0,ot??0,0,!1,ut),In!==void 0?X(0,In.offsetTop,In.offsetHeight,mr,ut):vt!==void 0&&Ft!==void 0?X(0,vt*Ft,Ft,mr,ut):On==="bottom"?X(0,Number.MAX_SAFE_INTEGER,0,!1,ut):On==="top"&&X(0,0,0,!1,ut)},_e=(q,de)=>{if(!e.scrollable)return;const{value:Ee}=yt;Ee&&(typeof q=="object"?Ee.scrollBy(q):Ee.scrollBy(q,de||0))};function X(q,de,Ee,ot,vt){const{value:Ft}=yt;if(Ft){if(ot){const{scrollTop:On,offsetHeight:ut}=Ft;if(de>On){de+Ee<=On+ut||Ft.scrollTo({left:q,top:de+Ee-ut,behavior:vt});return}}Ft.scrollTo({left:q,top:de,behavior:vt})}}function g(){W(),Q(),ue()}function w(){O()}function O(){L(),j()}function L(){S!==void 0&&window.clearTimeout(S),S=window.setTimeout(()=>{_.value=!1},e.duration)}function j(){P!==void 0&&window.clearTimeout(P),P=window.setTimeout(()=>{x.value=!1},e.duration)}function W(){P!==void 0&&window.clearTimeout(P),x.value=!0}function Q(){S!==void 0&&window.clearTimeout(S),_.value=!0}function K(q){const{onScroll:de}=e;de&&de(q),ee()}function ee(){const{value:q}=yt;q&&(y.value=q.scrollTop,v.value=q.scrollLeft*(o!=null&&o.value?-1:1))}function U(){const{value:q}=Mt;q&&(u.value=q.offsetHeight,d.value=q.offsetWidth);const{value:de}=yt;de&&(f.value=de.offsetHeight,m.value=de.offsetWidth);const{value:Ee}=c,{value:ot}=a;Ee&&(b.value=Ee.offsetWidth),ot&&(h.value=ot.offsetHeight)}function fe(){const{value:q}=yt;q&&(y.value=q.scrollTop,v.value=q.scrollLeft*(o!=null&&o.value?-1:1),f.value=q.offsetHeight,m.value=q.offsetWidth,u.value=q.scrollHeight,d.value=q.scrollWidth);const{value:de}=c,{value:Ee}=a;de&&(b.value=de.offsetWidth),Ee&&(h.value=Ee.offsetHeight)}function ue(){e.scrollable&&(e.useUnifiedContainer?fe():(U(),ee()))}function he(q){var de;return!(!((de=s.value)===null||de===void 0)&&de.contains(yi(q)))}function ye(q){q.preventDefault(),q.stopPropagation(),I=!0,dt("mousemove",window,Le,!0),dt("mouseup",window,We,!0),M=v.value,N=o!=null&&o.value?window.innerWidth-q.clientX:q.clientX}function Le(q){if(!I)return;P!==void 0&&window.clearTimeout(P),S!==void 0&&window.clearTimeout(S);const{value:de}=m,{value:Ee}=d,{value:ot}=ne;if(de===null||Ee===null)return;const Ft=(o!=null&&o.value?window.innerWidth-q.clientX-N:q.clientX-N)*(Ee-de)/(de-ot),On=Ee-de;let ut=M+Ft;ut=Math.min(On,ut),ut=Math.max(ut,0);const{value:In}=yt;if(In){In.scrollLeft=ut*(o!=null&&o.value?-1:1);const{internalOnUpdateScrollLeft:mr}=e;mr&&mr(ut)}}function We(q){q.preventDefault(),q.stopPropagation(),tt("mousemove",window,Le,!0),tt("mouseup",window,We,!0),I=!1,ue(),he(q)&&O()}function qe(q){q.preventDefault(),q.stopPropagation(),E=!0,dt("mousemove",window,rt,!0),dt("mouseup",window,wt,!0),k=y.value,G=q.clientY}function rt(q){if(!E)return;P!==void 0&&window.clearTimeout(P),S!==void 0&&window.clearTimeout(S);const{value:de}=f,{value:Ee}=u,{value:ot}=te;if(de===null||Ee===null)return;const Ft=(q.clientY-G)*(Ee-de)/(de-ot),On=Ee-de;let ut=k+Ft;ut=Math.min(On,ut),ut=Math.max(ut,0);const{value:In}=yt;In&&(In.scrollTop=ut)}function wt(q){q.preventDefault(),q.stopPropagation(),tt("mousemove",window,rt,!0),tt("mouseup",window,wt,!0),E=!1,ue(),he(q)&&O()}Jt(()=>{const{value:q}=nt,{value:de}=Xe,{value:Ee}=t,{value:ot}=c,{value:vt}=a;ot&&(q?ot.classList.remove(`${Ee}-scrollbar-rail--disabled`):ot.classList.add(`${Ee}-scrollbar-rail--disabled`)),vt&&(de?vt.classList.remove(`${Ee}-scrollbar-rail--disabled`):vt.classList.add(`${Ee}-scrollbar-rail--disabled`))}),It(()=>{e.container||ue()}),jt(()=>{P!==void 0&&window.clearTimeout(P),S!==void 0&&window.clearTimeout(S),tt("mousemove",window,rt,!0),tt("mouseup",window,wt,!0)});const qt=Lt("Scrollbar","-scrollbar",yR,bR,e,t),hr=C(()=>{const{common:{cubicBezierEaseInOut:q,scrollbarBorderRadius:de,scrollbarHeight:Ee,scrollbarWidth:ot},self:{color:vt,colorHover:Ft}}=qt.value;return{"--n-scrollbar-bezier":q,"--n-scrollbar-color":vt,"--n-scrollbar-color-hover":Ft,"--n-scrollbar-border-radius":de,"--n-scrollbar-width":ot,"--n-scrollbar-height":Ee}}),en=n?ps("scrollbar",void 0,hr,e):void 0;return Object.assign(Object.assign({},{scrollTo:se,scrollBy:_e,sync:ue,syncUnifiedContainer:fe,handleMouseEnterWrapper:g,handleMouseLeaveWrapper:w}),{mergedClsPrefix:t,rtlEnabled:o,containerScrollTop:y,wrapperRef:s,containerRef:i,contentRef:l,yRailRef:a,xRailRef:c,needYBar:Xe,needXBar:nt,yBarSizePx:V,xBarSizePx:ve,yBarTopPx:le,xBarLeftPx:Re,isShowXBar:ft,isShowYBar:Qe,isIos:B,handleScroll:K,handleContentResize:re,handleContainerResize:oe,handleYScrollMouseDown:qe,handleXScrollMouseDown:ye,cssVars:n?void 0:hr,themeClass:en==null?void 0:en.themeClass,onRender:en==null?void 0:en.onRender})},render(){var e;const{$slots:t,mergedClsPrefix:n,triggerDisplayManually:r,rtlEnabled:o,internalHoistYRail:s}=this;if(!this.scrollable)return(e=t.default)===null||e===void 0?void 0:e.call(t);const i=this.trigger==="none",l=()=>F("div",{ref:"yRailRef",class:[`${n}-scrollbar-rail`,`${n}-scrollbar-rail--vertical`],"data-scrollbar-rail":!0,style:this.verticalRailStyle,"aria-hidden":!0},F(i?gh:sr,i?null:{name:"fade-in-transition"},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?F("div",{class:`${n}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),a=()=>{var u,d;return(u=this.onRender)===null||u===void 0||u.call(this),F("div",xo(this.$attrs,{role:"none",ref:"wrapperRef",class:[`${n}-scrollbar`,this.themeClass,o&&`${n}-scrollbar--rtl`],style:this.cssVars,onMouseenter:r?void 0:this.handleMouseEnterWrapper,onMouseleave:r?void 0:this.handleMouseLeaveWrapper}),[this.container?(d=t.default)===null||d===void 0?void 0:d.call(t):F("div",{role:"none",ref:"containerRef",class:[`${n}-scrollbar-container`,this.containerClass],style:this.containerStyle,onScroll:this.handleScroll,onWheel:this.onWheel},F(ia,{onResize:this.handleContentResize},{default:()=>F("div",{ref:"contentRef",role:"none",style:[{width:this.xScrollable?"fit-content":null},this.contentStyle],class:[`${n}-scrollbar-content`,this.contentClass]},t)})),s?null:l(),this.xScrollable&&F("div",{ref:"xRailRef",class:[`${n}-scrollbar-rail`,`${n}-scrollbar-rail--horizontal`],style:this.horizontalRailStyle,"data-scrollbar-rail":!0,"aria-hidden":!0},F(i?gh:sr,i?null:{name:"fade-in-transition"},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?F("div",{class:`${n}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,right:o?this.xBarLeftPx:void 0,left:o?void 0:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])},c=this.container?a():F(ia,{onResize:this.handleContainerResize},{default:a});return s?F(ze,null,c,l()):c}}),xR=_R,{cubicBezierEaseIn:ym,cubicBezierEaseOut:wm}=Na;function kR({transformOrigin:e="inherit",duration:t=".2s",enterScale:n=".9",originalTransform:r="",originalTransition:o=""}={}){return[Ie("&.fade-in-scale-up-transition-leave-active",{transformOrigin:e,transition:`opacity ${t} ${ym}, transform ${t} ${ym} ${o&&","+o}`}),Ie("&.fade-in-scale-up-transition-enter-active",{transformOrigin:e,transition:`opacity ${t} ${wm}, transform ${t} ${wm} ${o&&","+o}`}),Ie("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:`${r} scale(${n})`}),Ie("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:`${r} scale(1)`})]}const SR={space:"6px",spaceArrow:"10px",arrowOffset:"10px",arrowOffsetVertical:"10px",arrowHeight:"6px",padding:"8px 14px"},$R=e=>{const{boxShadow2:t,popoverColor:n,textColor2:r,borderRadius:o,fontSize:s,dividerColor:i}=e;return Object.assign(Object.assign({},SR),{fontSize:s,borderRadius:o,color:n,dividerColor:i,textColor:r,boxShadow:t})},CR={name:"Popover",common:Mo,self:$R},tb=CR,Sc={top:"bottom",bottom:"top",left:"right",right:"left"},St="var(--n-arrow-height) * 1.414",ER=Ie([De("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[Ie(">",[De("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),Al("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[Al("scrollable",[Al("show-header-or-footer","padding: var(--n-padding);")])]),ke("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),ke("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),Te("scrollable, show-header-or-footer",[ke("content",`
 padding: var(--n-padding);
 `)])]),De("popover-shared",`
 transform-origin: inherit;
 `,[De("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[De("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${St});
 height: calc(${St});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),Ie("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),Ie("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),Ie("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),Ie("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),yn("top-start",`
 top: calc(${St} / -2);
 left: calc(${Gn("top-start")} - var(--v-offset-left));
 `),yn("top",`
 top: calc(${St} / -2);
 transform: translateX(calc(${St} / -2)) rotate(45deg);
 left: 50%;
 `),yn("top-end",`
 top: calc(${St} / -2);
 right: calc(${Gn("top-end")} + var(--v-offset-left));
 `),yn("bottom-start",`
 bottom: calc(${St} / -2);
 left: calc(${Gn("bottom-start")} - var(--v-offset-left));
 `),yn("bottom",`
 bottom: calc(${St} / -2);
 transform: translateX(calc(${St} / -2)) rotate(45deg);
 left: 50%;
 `),yn("bottom-end",`
 bottom: calc(${St} / -2);
 right: calc(${Gn("bottom-end")} + var(--v-offset-left));
 `),yn("left-start",`
 left: calc(${St} / -2);
 top: calc(${Gn("left-start")} - var(--v-offset-top));
 `),yn("left",`
 left: calc(${St} / -2);
 transform: translateY(calc(${St} / -2)) rotate(45deg);
 top: 50%;
 `),yn("left-end",`
 left: calc(${St} / -2);
 bottom: calc(${Gn("left-end")} + var(--v-offset-top));
 `),yn("right-start",`
 right: calc(${St} / -2);
 top: calc(${Gn("right-start")} - var(--v-offset-top));
 `),yn("right",`
 right: calc(${St} / -2);
 transform: translateY(calc(${St} / -2)) rotate(45deg);
 top: 50%;
 `),yn("right-end",`
 right: calc(${St} / -2);
 bottom: calc(${Gn("right-end")} + var(--v-offset-top));
 `),...a6({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,t)=>{const n=["right","left"].includes(t),r=n?"width":"height";return e.map(o=>{const s=o.split("-")[1]==="end",l=`calc((${`var(--v-target-${r}, 0px)`} - ${St}) / 2)`,a=Gn(o);return Ie(`[v-placement="${o}"] >`,[De("popover-shared",[Te("center-arrow",[De("popover-arrow",`${t}: calc(max(${l}, ${a}) ${s?"+":"-"} var(--v-offset-${n?"left":"top"}));`)])])])})})]);function Gn(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function yn(e,t){const n=e.split("-")[0],r=["top","bottom"].includes(n)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return Ie(`[v-placement="${e}"] >`,[De("popover-shared",`
 margin-${Sc[n]}: var(--n-space);
 `,[Te("show-arrow",`
 margin-${Sc[n]}: var(--n-space-arrow);
 `),Te("overlap",`
 margin: 0;
 `),mI("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${Sc[n]}: auto;
 ${r}
 `,[De("popover-arrow",t)])])])}const nb=Object.assign(Object.assign({},Lt.props),{to:ns.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number}),OR=({arrowStyle:e,clsPrefix:t})=>F("div",{key:"__popover-arrow__",class:`${t}-popover-arrow-wrapper`},F("div",{class:`${t}-popover-arrow`,style:e})),IR=pe({name:"PopoverBody",inheritAttrs:!1,props:nb,setup(e,{slots:t,attrs:n}){const{namespaceRef:r,mergedClsPrefixRef:o,inlineThemeDisabled:s}=vn(e),i=Lt("Popover","-popover",ER,tb,e,o),l=z(null),a=ie("NPopover"),c=z(null),u=z(e.show),d=z(!1);Jt(()=>{const{show:S}=e;S&&!vI()&&!e.internalDeactivateImmediately&&(d.value=!0)});const f=C(()=>{const{trigger:S,onClickoutside:k}=e,M=[],{positionManuallyRef:{value:N}}=a;return N||(S==="click"&&!k&&M.push([Sh,E,void 0,{capture:!0}]),S==="hover"&&M.push([DI,_])),k&&M.push([Sh,E,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&d.value)&&M.push([ji,e.show]),M}),m=C(()=>{const S=e.width==="trigger"?void 0:Xs(e.width),k=[];S&&k.push({width:S});const{maxWidth:M,minWidth:N}=e;return M&&k.push({maxWidth:Xs(M)}),N&&k.push({maxWidth:Xs(N)}),s||k.push(h.value),k}),h=C(()=>{const{common:{cubicBezierEaseInOut:S,cubicBezierEaseIn:k,cubicBezierEaseOut:M},self:{space:N,spaceArrow:G,padding:B,fontSize:te,textColor:V,dividerColor:ne,color:ve,boxShadow:J,borderRadius:le,arrowHeight:me,arrowOffset:Re,arrowOffsetVertical:Xe}}=i.value;return{"--n-box-shadow":J,"--n-bezier":S,"--n-bezier-ease-in":k,"--n-bezier-ease-out":M,"--n-font-size":te,"--n-text-color":V,"--n-color":ve,"--n-divider-color":ne,"--n-border-radius":le,"--n-arrow-height":me,"--n-arrow-offset":Re,"--n-arrow-offset-vertical":Xe,"--n-padding":B,"--n-space":N,"--n-space-arrow":G}}),b=s?ps("popover",void 0,h,e):void 0;a.setBodyInstance({syncPosition:y}),jt(()=>{a.setBodyInstance(null)}),be(pn(e,"show"),S=>{e.animated||(S?u.value=!0:u.value=!1)});function y(){var S;(S=l.value)===null||S===void 0||S.syncPosition()}function v(S){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&a.handleMouseEnter(S)}function x(S){e.trigger==="hover"&&e.keepAliveOnHover&&a.handleMouseLeave(S)}function _(S){e.trigger==="hover"&&!I().contains(yi(S))&&a.handleMouseMoveOutside(S)}function E(S){(e.trigger==="click"&&!I().contains(yi(S))||e.onClickoutside)&&a.handleClickOutside(S)}function I(){return a.getTriggerElement()}gt(K0,c),gt(q0,null),gt(U0,null);function P(){if(b==null||b.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&d.value))return null;let k;const M=a.internalRenderBodyRef.value,{value:N}=o;if(M)k=M([`${N}-popover-shared`,b==null?void 0:b.themeClass.value,e.overlap&&`${N}-popover-shared--overlap`,e.showArrow&&`${N}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${N}-popover-shared--center-arrow`],c,m.value,v,x);else{const{value:G}=a.extraClassRef,{internalTrapFocus:B}=e,te=!vh(t.header)||!vh(t.footer),V=()=>{var ne;const ve=te?F(ze,null,Gs(t.header,me=>me?F("div",{class:`${N}-popover__header`,style:e.headerStyle},me):null),Gs(t.default,me=>me?F("div",{class:`${N}-popover__content`,style:e.contentStyle},t):null),Gs(t.footer,me=>me?F("div",{class:`${N}-popover__footer`,style:e.footerStyle},me):null)):e.scrollable?(ne=t.default)===null||ne===void 0?void 0:ne.call(t):F("div",{class:`${N}-popover__content`,style:e.contentStyle},t),J=e.scrollable?F(xR,{contentClass:te?void 0:`${N}-popover__content`,contentStyle:te?void 0:e.contentStyle},{default:()=>ve}):ve,le=e.showArrow?OR({arrowStyle:e.arrowStyle,clsPrefix:N}):null;return[J,le]};k=F("div",xo({class:[`${N}-popover`,`${N}-popover-shared`,b==null?void 0:b.themeClass.value,G.map(ne=>`${N}-${ne}`),{[`${N}-popover--scrollable`]:e.scrollable,[`${N}-popover--show-header-or-footer`]:te,[`${N}-popover--raw`]:e.raw,[`${N}-popover-shared--overlap`]:e.overlap,[`${N}-popover-shared--show-arrow`]:e.showArrow,[`${N}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:c,style:m.value,onKeydown:a.handleKeydown,onMouseenter:v,onMouseleave:x},n),B?F(xP,{active:e.show,autoFocus:!0},{default:V}):V())}return Oe(k,f.value)}return{displayed:d,namespace:r,isMounted:a.isMountedRef,zIndex:a.zIndexRef,followerRef:l,adjustedTo:ns(e),followerEnabled:u,renderContentNode:P}},render(){return F(JI,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===ns.tdkey},{default:()=>this.animated?F(sr,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),PR=Object.keys(nb),TR={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function MR(e,t,n){TR[t].forEach(r=>{e.props?e.props=Object.assign({},e.props):e.props={};const o=e.props[r],s=n[r];o?e.props[r]=(...i)=>{o(...i),s(...i)}:e.props[r]=s})}const rb={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:ns.propTo,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},AR=Object.assign(Object.assign(Object.assign({},Lt.props),rb),{internalOnAfterLeave:Function,internalRenderBody:Function}),RR=pe({name:"Popover",inheritAttrs:!1,props:AR,__popover__:!0,setup(e){Jt(()=>{e.maxWidth!==void 0&&Ts("popover","`max-width` is deprecated, please use `style` instead."),e.minWidth!==void 0&&Ts("popover","`min-width` is deprecated, please use `style` instead."),e.arrow!==void 0&&Ts("popover","`arrow` is deprecated, please use `showArrow` instead."),e.onHide!==void 0&&Ts("popover","`on-hide` is deprecated, please use `on-update:show` instead."),e.onShow!==void 0&&Ts("popover","`on-show` is deprecated, please use `on-update:show` instead.")});const t=Bd(),n=z(null),r=C(()=>e.show),o=z(e.defaultShow),s=W0(r,o),i=_i(()=>e.disabled?!1:s.value),l=()=>{if(e.disabled)return!0;const{getDisabled:V}=e;return!!(V!=null&&V())},a=()=>l()?!1:s.value,c=CI(e,["arrow","showArrow"]),u=C(()=>e.overlap?!1:c.value);let d=null;const f=z(null),m=z(null),h=_i(()=>e.x!==void 0&&e.y!==void 0);function b(V){const{"onUpdate:show":ne,onUpdateShow:ve,onShow:J,onHide:le}=e;o.value=V,ne&&Hs(ne,V),ve&&Hs(ve,V),V&&J&&Hs(J,!0),V&&le&&Hs(le,!1)}function y(){d&&d.syncPosition()}function v(){const{value:V}=f;V&&(window.clearTimeout(V),f.value=null)}function x(){const{value:V}=m;V&&(window.clearTimeout(V),m.value=null)}function _(){const V=l();if(e.trigger==="focus"&&!V){if(a())return;b(!0)}}function E(){const V=l();if(e.trigger==="focus"&&!V){if(!a())return;b(!1)}}function I(){const V=l();if(e.trigger==="hover"&&!V){if(x(),f.value!==null||a())return;const ne=()=>{b(!0),f.value=null},{delay:ve}=e;ve===0?ne():f.value=window.setTimeout(ne,ve)}}function P(){const V=l();if(e.trigger==="hover"&&!V){if(v(),m.value!==null||!a())return;const ne=()=>{b(!1),m.value=null},{duration:ve}=e;ve===0?ne():m.value=window.setTimeout(ne,ve)}}function S(){P()}function k(V){var ne;a()&&(e.trigger==="click"&&(v(),x(),b(!1)),(ne=e.onClickoutside)===null||ne===void 0||ne.call(e,V))}function M(){if(e.trigger==="click"&&!l()){v(),x();const V=!a();b(V)}}function N(V){e.internalTrapFocus&&V.key==="Escape"&&(v(),x(),b(!1))}function G(V){o.value=V}function B(){var V;return(V=n.value)===null||V===void 0?void 0:V.targetRef}function te(V){d=V}return gt("NPopover",{getTriggerElement:B,handleKeydown:N,handleMouseEnter:I,handleMouseLeave:P,handleClickOutside:k,handleMouseMoveOutside:S,setBodyInstance:te,positionManuallyRef:h,isMountedRef:t,zIndexRef:pn(e,"zIndex"),extraClassRef:pn(e,"internalExtraClass"),internalRenderBodyRef:pn(e,"internalRenderBody")}),Jt(()=>{s.value&&l()&&b(!1)}),{binderInstRef:n,positionManually:h,mergedShowConsideringDisabledProp:i,uncontrolledShow:o,mergedShowArrow:u,getMergedShow:a,setShow:G,handleClick:M,handleMouseEnter:I,handleMouseLeave:P,handleFocus:_,handleBlur:E,syncPosition:y}},render(){var e;const{positionManually:t,$slots:n}=this;let r,o=!1;if(!t&&(n.activator?r=ph(n,"activator"):r=ph(n,"trigger"),r)){r=ln(r),r=r.type===is?F("span",[r]):r;const s={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=r.type)===null||e===void 0)&&e.__popover__)o=!0,r.props||(r.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),r.props.internalSyncTargetWithParent=!0,r.props.internalInheritedEventHandlers?r.props.internalInheritedEventHandlers=[s,...r.props.internalInheritedEventHandlers]:r.props.internalInheritedEventHandlers=[s];else{const{internalInheritedEventHandlers:i}=this,l=[s,...i],a={onBlur:c=>{l.forEach(u=>{u.onBlur(c)})},onFocus:c=>{l.forEach(u=>{u.onFocus(c)})},onClick:c=>{l.forEach(u=>{u.onClick(c)})},onMouseenter:c=>{l.forEach(u=>{u.onMouseenter(c)})},onMouseleave:c=>{l.forEach(u=>{u.onMouseleave(c)})}};MR(r,i?"nested":t?"manual":this.trigger,a)}}return F(AI,{ref:"binderInstRef",syncTarget:!o,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const s=this.getMergedShow();return[this.internalTrapFocus&&s?Oe(F("div",{style:{position:"fixed",inset:0}}),[[Hd,{enabled:s,zIndex:this.zIndex}]]):null,t?null:F(RI,null,{default:()=>r}),F(IR,Ou(this.$props,PR,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:s})),{default:()=>{var i,l;return(l=(i=this.$slots).default)===null||l===void 0?void 0:l.call(i)},header:()=>{var i,l;return(l=(i=this.$slots).header)===null||l===void 0?void 0:l.call(i)},footer:()=>{var i,l;return(l=(i=this.$slots).footer)===null||l===void 0?void 0:l.call(i)}})]}})}}),LR=zd&&"loading"in document.createElement("img"),DR=(e={})=>{var t;const{root:n=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(t=e.threshold)!==null&&t!==void 0?t:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof n=="string"?document.querySelector(n):n)||document.documentElement})}},$c=new WeakMap,Cc=new WeakMap,Ec=new WeakMap,jR=(e,t,n)=>{if(!e)return()=>{};const r=DR(t),{root:o}=r.options;let s;const i=$c.get(o);i?s=i:(s=new Map,$c.set(o,s));let l,a;s.has(r.hash)?(a=s.get(r.hash),a[1].has(e)||(l=a[0],a[1].add(e),l.observe(e))):(l=new IntersectionObserver(d=>{d.forEach(f=>{if(f.isIntersecting){const m=Cc.get(f.target),h=Ec.get(f.target);m&&m(),h&&(h.value=!0)}})},r.options),l.observe(e),a=[l,new Set([e])],s.set(r.hash,a));let c=!1;const u=()=>{c||(Cc.delete(e),Ec.delete(e),c=!0,a[1].has(e)&&(a[0].unobserve(e),a[1].delete(e)),a[1].size<=0&&s.delete(r.hash),s.size||$c.delete(o))};return Cc.set(e,u),Ec.set(e,n),u},NR=e=>({dotSize:"8px",dotColor:"rgba(255, 255, 255, .3)",dotColorActive:"rgba(255, 255, 255, 1)",dotColorFocus:"rgba(255, 255, 255, .5)",dotLineWidth:"16px",dotLineWidthActive:"24px",arrowColor:"#eee"}),FR={name:"Carousel",common:Mo,self:NR},zR=FR;function BR(e){const{length:t}=e;return t>1&&(e.push(_m(e[0],0,"append")),e.unshift(_m(e[t-1],t-1,"prepend"))),e}function _m(e,t,n){return ln(e,{key:`carousel-item-duplicate-${t}-${n}`})}function xm(e,t,n){return n?e===0?t-3:e===t-1?0:e-1:e}function Oc(e,t){return t?e+1:e}function HR(e,t,n){return e<0?null:e===0?n?t-1:null:e-1}function VR(e,t,n){return e>t-1?null:e===t-1?n?0:null:e+1}function WR(e,t){return t&&e>3?e-2:e}function km(e){return window.TouchEvent&&e instanceof window.TouchEvent}function Sm(e,t){let{offsetWidth:n,offsetHeight:r}=e;if(t){const o=getComputedStyle(e);n=n-parseFloat(o.getPropertyValue("padding-left"))-parseFloat(o.getPropertyValue("padding-right")),r=r-parseFloat(o.getPropertyValue("padding-top"))-parseFloat(o.getPropertyValue("padding-bottom"))}return{width:n,height:r}}function yl(e,t,n){return e<t?t:e>n?n:e}function UR(e){if(e===void 0)return 0;if(typeof e=="number")return e;const t=/^((\d+)?\.?\d+?)(ms|s)?$/,n=e.match(t);if(n){const[,r,,o="ms"]=n;return Number(r)*(o==="ms"?1:1e3)}return 0}const ob="n-carousel-methods",qR=e=>{gt(ob,e)},nf=(e="unknown",t="component")=>{const n=ie(ob);return n||Aa(e,`\`${t}\` must be placed inside \`n-carousel\`.`),n},KR={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},YR=pe({name:"CarouselDots",props:KR,setup(e){const{mergedClsPrefixRef:t}=vn(e),n=z([]),r=nf();function o(c,u){switch(c.key){case"Enter":case" ":c.preventDefault(),r.to(u);return}e.keyboard&&l(c)}function s(c){e.trigger==="hover"&&r.to(c)}function i(c){e.trigger==="click"&&r.to(c)}function l(c){var u;if(c.shiftKey||c.altKey||c.ctrlKey||c.metaKey)return;const d=(u=document.activeElement)===null||u===void 0?void 0:u.nodeName.toLowerCase();if(d==="input"||d==="textarea")return;const{code:f}=c,m=f==="PageUp"||f==="ArrowUp",h=f==="PageDown"||f==="ArrowDown",b=f==="PageUp"||f==="ArrowRight",y=f==="PageDown"||f==="ArrowLeft",v=r.isVertical(),x=v?m:b,_=v?h:y;!x&&!_||(c.preventDefault(),x&&!r.isNextDisabled()?(r.next(),a(r.currentIndexRef.value)):_&&!r.isPrevDisabled()&&(r.prev(),a(r.currentIndexRef.value)))}function a(c){var u;(u=n.value[c])===null||u===void 0||u.focus()}return Jv(()=>n.value.length=0),{mergedClsPrefix:t,dotEls:n,handleKeydown:o,handleMouseenter:s,handleClick:i}},render(){const{mergedClsPrefix:e,dotEls:t}=this;return F("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},UO(this.total,n=>{const r=n===this.currentIndex;return F("div",{"aria-selected":r,ref:o=>t.push(o),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,r&&`${e}-carousel__dot--active`],key:n,onClick:()=>{this.handleClick(n)},onMouseenter:()=>{this.handleMouseenter(n)},onKeydown:o=>{this.handleKeydown(o,n)}})}))}}),ZR=F("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},F("g",{fill:"none"},F("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),GR=F("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},F("g",{fill:"none"},F("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),XR=pe({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:t}=vn(e),{isVertical:n,isPrevDisabled:r,isNextDisabled:o,prev:s,next:i}=nf();return{mergedClsPrefix:t,isVertical:n,isPrevDisabled:r,isNextDisabled:o,prev:s,next:i}},render(){const{mergedClsPrefix:e}=this;return F("div",{class:`${e}-carousel__arrow-group`},F("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},ZR),F("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},GR))}}),Dl="CarouselItem",JR=e=>{var t;return((t=e.type)===null||t===void 0?void 0:t.name)===Dl},QR=pe({name:Dl,setup(e){const{mergedClsPrefixRef:t}=vn(e),n=nf(tm(Dl),`n-${tm(Dl)}`),r=z(),o=C(()=>{const{value:u}=r;return u?n.getSlideIndex(u):-1}),s=C(()=>n.isPrev(o.value)),i=C(()=>n.isNext(o.value)),l=C(()=>n.isActive(o.value)),a=C(()=>n.getSlideStyle(o.value));It(()=>{n.addSlide(r.value)}),jt(()=>{n.removeSlide(r.value)});function c(u){const{value:d}=o;d!==void 0&&(n==null||n.onCarouselItemClick(d,u))}return{mergedClsPrefix:t,selfElRef:r,isPrev:s,isNext:i,isActive:l,index:o,style:a,handleClick:c}},render(){var e;const{$slots:t,mergedClsPrefix:n,isPrev:r,isNext:o,isActive:s,index:i,style:l}=this,a=[`${n}-carousel__slide`,{[`${n}-carousel__slide--current`]:s,[`${n}-carousel__slide--prev`]:r,[`${n}-carousel__slide--next`]:o}];return F("div",{ref:"selfElRef",class:a,role:"option",tabindex:"-1","data-index":i,"aria-hidden":!s,style:l,onClickCapture:this.handleClick},(e=t.default)===null||e===void 0?void 0:e.call(t,{isPrev:r,isNext:o,isActive:s,index:i}))}}),e8=De("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[ke("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[ke("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[Ie("> img",`
 display: block;
 `)])]),ke("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[Te("dot",[ke("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[Ie("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),Te("active",`
 background-color: var(--n-dot-color-active);
 `)])]),Te("line",[ke("dot",`
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[Ie("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),Te("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),ke("arrow",`
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 -webkit-user-select: none;
 font-size: 18px;
 `,[Ie("svg",`
 height: 1em;
 width: 1em;
 `),Ie("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),Te("vertical",`
 touch-action: pan-x;
 `,[ke("slides",`
 flex-direction: column;
 `),Te("fade",[ke("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),Te("card",[ke("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[Te("current",`
 transform: translateY(-50%) translateZ(0);
 `),Te("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),Te("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),Te("usercontrol",[ke("slides",[Ie(">",[Ie("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),Te("left",[ke("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[Te("line",[ke("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[Te("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),ke("dot",`
 margin: 4px 0;
 `)]),ke("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),Te("vertical",[ke("arrow",`
 transform: rotate(90deg);
 `)]),Te("show-arrow",[Te("bottom",[ke("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),Te("top",[ke("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),Te("left",[ke("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),Te("right",[ke("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),Te("left",[ke("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[Ie("> *:first-child",`
 margin-bottom: 12px;
 `)])]),Te("right",[ke("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[Te("line",[ke("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[Te("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),ke("dot",`
 margin: 4px 0;
 `),ke("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[Ie("> *:first-child",`
 margin-bottom: 12px;
 `)])]),Te("top",[ke("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[Te("line",[ke("dot",`
 margin: 0 4px;
 `)])]),ke("dot",`
 margin: 0 4px;
 `),ke("arrow-group",`
 top: 12px;
 right: 12px;
 `,[Ie("> *:first-child",`
 margin-right: 12px;
 `)])]),Te("bottom",[ke("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[Te("line",[ke("dot",`
 margin: 0 4px;
 `)])]),ke("dot",`
 margin: 0 4px;
 `),ke("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[Ie("> *:first-child",`
 margin-right: 12px;
 `)])]),Te("fade",[ke("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[Te("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),Te("card",[ke("slides",`
 perspective: 1000px;
 `),ke("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[Te("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),Te("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),Te("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]),t8=["transitionDuration","transitionTimingFunction"],n8=Object.assign(Object.assign({},Lt.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Ic=!1;const r8=pe({name:"Carousel",props:n8,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=vn(e),r=z(null),o=z(null),s=z([]),i={value:[]},l=C(()=>e.direction==="vertical"),a=C(()=>l.value?"height":"width"),c=C(()=>l.value?"bottom":"right"),u=C(()=>e.effect==="slide"),d=C(()=>e.loop&&e.slidesPerView===1&&u.value),f=C(()=>e.effect==="custom"),m=C(()=>!u.value||e.centeredSlides?1:e.slidesPerView),h=C(()=>f.value?1:e.slidesPerView),b=C(()=>m.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),y=z({width:0,height:0}),v=C(()=>{const{value:H}=s;if(!H.length)return[];const{value:ae}=b;if(ae)return H.map(pt=>Sm(pt));const{value:xe}=h,{value:He}=y,{value:Ue}=a;let Fe=He[Ue];if(xe!=="auto"){const{spaceBetween:pt}=e,gn=Fe-(xe-1)*pt,qi=1/Math.max(1,xe);Fe=gn*qi}const lt=Object.assign(Object.assign({},He),{[Ue]:Fe});return H.map(()=>lt)}),x=C(()=>{const{value:H}=v;if(!H.length)return[];const{centeredSlides:ae,spaceBetween:xe}=e,{value:He}=a,{[He]:Ue}=y.value;let Fe=0;return H.map(({[He]:lt})=>{let pt=Fe;return ae&&(pt+=(lt-Ue)/2),Fe+=lt+xe,pt})}),_=z(!1),E=C(()=>{const{transitionStyle:H}=e;return H?Ou(H,t8):{}}),I=C(()=>f.value?0:UR(E.value.transitionDuration)),P=C(()=>{const{value:H}=s;if(!H.length)return[];const ae=!(b.value||h.value===1),xe=lt=>{if(ae){const{value:pt}=a;return{[pt]:`${v.value[lt][pt]}px`}}};if(f.value)return H.map((lt,pt)=>xe(pt));const{effect:He,spaceBetween:Ue}=e,{value:Fe}=c;return H.reduce((lt,pt,gn)=>{const qi=Object.assign(Object.assign({},xe(gn)),{[`margin-${Fe}`]:`${Ue}px`});return lt.push(qi),_.value&&(He==="fade"||He==="card")&&Object.assign(qi,E.value),lt},[])}),S=C(()=>{const{value:H}=m,{length:ae}=s.value;if(H!=="auto")return Math.max(ae-H,0)+1;{const{value:xe}=v,{length:He}=xe;if(!He)return ae;const{value:Ue}=x,{value:Fe}=a,lt=y.value[Fe];let pt=xe[xe.length-1][Fe],gn=He;for(;gn>1&&pt<lt;)gn--,pt+=Ue[gn]-Ue[gn-1];return yl(gn+1,1,He)}}),k=C(()=>WR(S.value,d.value)),M=Oc(e.defaultIndex,d.value),N=z(xm(M,S.value,d.value)),G=W0(pn(e,"currentIndex"),N),B=C(()=>Oc(G.value,d.value));function te(H){var ae,xe;H=yl(H,0,S.value-1);const He=xm(H,S.value,d.value),{value:Ue}=G;He!==G.value&&(N.value=He,(ae=e["onUpdate:currentIndex"])===null||ae===void 0||ae.call(e,He,Ue),(xe=e.onUpdateCurrentIndex)===null||xe===void 0||xe.call(e,He,Ue))}function V(H=B.value){return HR(H,S.value,e.loop)}function ne(H=B.value){return VR(H,S.value,e.loop)}function ve(H){const ae=W(H);return ae!==null&&V()===ae}function J(H){const ae=W(H);return ae!==null&&ne()===ae}function le(H){return B.value===W(H)}function me(H){return G.value===H}function Re(){return V()===null}function Xe(){return ne()===null}function nt(H){const ae=yl(Oc(H,d.value),0,S.value);(H!==G.value||ae!==B.value)&&te(ae)}function ft(){const H=V();H!==null&&te(H)}function Qe(){const H=ne();H!==null&&te(H)}function yt(){(!A||!d.value)&&ft()}function Mt(){(!A||!d.value)&&Qe()}let A=!1,re=0;const oe=z({});function se(H,ae=0){oe.value=Object.assign({},E.value,{transform:l.value?`translateY(${-H}px)`:`translateX(${-H}px)`,transitionDuration:`${ae}ms`})}function _e(H=0){u.value?X(B.value,H):re!==0&&(!A&&H>0&&(A=!0),se(re=0,H))}function X(H,ae){const xe=g(H);xe!==re&&ae>0&&(A=!0),re=g(B.value),se(xe,ae)}function g(H){let ae;return H>=S.value-1?ae=w():ae=x.value[H]||0,ae}function w(){if(m.value==="auto"){const{value:H}=a,{[H]:ae}=y.value,{value:xe}=x,He=xe[xe.length-1];let Ue;if(He===void 0)Ue=ae;else{const{value:Fe}=v;Ue=He+Fe[Fe.length-1][H]}return Ue-ae}else{const{value:H}=x;return H[S.value-1]||0}}const O={currentIndexRef:G,to:nt,prev:yt,next:Mt,isVertical:()=>l.value,isHorizontal:()=>!l.value,isPrev:ve,isNext:J,isActive:le,isPrevDisabled:Re,isNextDisabled:Xe,getSlideIndex:W,getSlideStyle:Q,addSlide:L,removeSlide:j,onCarouselItemClick:K};qR(O);function L(H){H&&s.value.push(H)}function j(H){if(!H)return;const ae=W(H);ae!==-1&&s.value.splice(ae,1)}function W(H){return typeof H=="number"?H:H?s.value.indexOf(H):-1}function Q(H){const ae=W(H);if(ae!==-1){const xe=[P.value[ae]],He=O.isPrev(ae),Ue=O.isNext(ae);return He&&xe.push(e.prevSlideStyle||""),Ue&&xe.push(e.nextSlideStyle||""),xt(xe)}}function K(H,ae){let xe=!A&&!We&&!qe;e.effect==="card"&&xe&&!le(H)&&(nt(H),xe=!1),xe||(ae.preventDefault(),ae.stopPropagation())}let ee=null;function U(){ee&&(clearInterval(ee),ee=null)}function fe(){U(),!e.autoplay||k.value<2||(ee=window.setInterval(Qe,e.interval))}let ue=0,he=0,ye=0,Le=0,We=!1,qe=!1;function rt(H){var ae;if(Ic||!(!((ae=o.value)===null||ae===void 0)&&ae.contains(yi(H))))return;Ic=!0,We=!0,qe=!1,Le=Date.now(),U(),H.type!=="touchstart"&&!H.target.isContentEditable&&H.preventDefault();const xe=km(H)?H.touches[0]:H;l.value?he=xe.clientY:ue=xe.clientX,e.touchable&&(dt("touchmove",document,wt,{passive:!0}),dt("touchend",document,qt),dt("touchcancel",document,qt)),e.draggable&&(dt("mousemove",document,wt),dt("mouseup",document,qt))}function wt(H){const{value:ae}=l,{value:xe}=a,He=km(H)?H.touches[0]:H,Ue=ae?He.clientY-he:He.clientX-ue,Fe=y.value[xe];ye=yl(Ue,-Fe,Fe),H.cancelable&&H.preventDefault(),u.value&&se(re-ye,0)}function qt(){const{value:H}=B;let ae=H;if(!A&&ye!==0&&u.value){const xe=re-ye,He=[...x.value.slice(0,S.value-1),w()];let Ue=null;for(let Fe=0;Fe<He.length;Fe++){const lt=Math.abs(He[Fe]-xe);if(Ue!==null&&Ue<lt)break;Ue=lt,ae=Fe}}if(ae===H){const xe=Date.now()-Le,{value:He}=a,Ue=y.value[He];ye>Ue/2||ye/xe>.4?ae=V(H):(ye<-Ue/2||ye/xe<-.4)&&(ae=ne(H))}ae!==null&&ae!==H?(qe=!0,te(ae),Et(()=>{(!d.value||N.value!==G.value)&&_e(I.value)})):_e(I.value),hr(),fe()}function hr(){We&&(Ic=!1),We=!1,ue=0,he=0,ye=0,Le=0,tt("touchmove",document,wt),tt("touchend",document,qt),tt("touchcancel",document,qt),tt("mousemove",document,wt),tt("mouseup",document,qt)}function en(){if(u.value&&A){const{value:H}=B;X(H,0)}else fe();u.value&&(oe.value.transitionDuration="0ms"),A=!1}function gs(H){if(H.preventDefault(),A)return;let{deltaX:ae,deltaY:xe}=H;H.shiftKey&&!ae&&(ae=xe);const He=-1,Ue=1,Fe=(ae||xe)>0?Ue:He;let lt=0,pt=0;l.value?pt=Fe:lt=Fe;const gn=10;(pt*xe>=gn||lt*ae>=gn)&&(Fe===Ue&&!Xe()?Qe():Fe===He&&!Re()&&ft())}function q(){y.value=Sm(r.value,!0),fe()}function de(){var H,ae;b.value&&((ae=(H=v.effect).scheduler)===null||ae===void 0||ae.call(H),v.effect.run())}function Ee(){e.autoplay&&U()}function ot(){e.autoplay&&fe()}It(()=>{Jt(fe),requestAnimationFrame(()=>_.value=!0)}),jt(()=>{hr(),U()}),Di(()=>{const{value:H}=s,{value:ae}=i,xe=new Map,He=Fe=>xe.has(Fe)?xe.get(Fe):-1;let Ue=!1;for(let Fe=0;Fe<H.length;Fe++){const lt=ae.findIndex(pt=>pt.el===H[Fe]);lt!==Fe&&(Ue=!0),xe.set(H[Fe],lt)}Ue&&H.sort((Fe,lt)=>He(Fe)-He(lt))}),be(B,(H,ae)=>{if(H!==ae)if(fe(),u.value){if(d.value&&k.value>2){const{value:xe}=S;H===xe-2&&ae===1?H=0:H===1&&ae===xe-2&&(H=xe-1)}X(H,I.value)}else _e()},{immediate:!0}),be([d,m],()=>void Et(()=>{te(B.value)})),be(x,()=>{u.value&&_e()},{deep:!0}),be(u,H=>{H?_e():(A=!1,se(re=0))});const vt=C(()=>({onTouchstartPassive:e.touchable?rt:void 0,onMousedown:e.draggable?rt:void 0,onWheel:e.mousewheel?gs:void 0})),Ft=C(()=>Object.assign(Object.assign({},Ou(O,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:k.value,currentIndex:G.value})),On=C(()=>({total:k.value,currentIndex:G.value,to:O.to})),ut={getCurrentIndex:()=>G.value,to:nt,prev:ft,next:Qe},In=Lt("Carousel","-carousel",e8,zR,e,t),mr=C(()=>{const{common:{cubicBezierEaseInOut:H},self:{dotSize:ae,dotColor:xe,dotColorActive:He,dotColorFocus:Ue,dotLineWidth:Fe,dotLineWidthActive:lt,arrowColor:pt}}=In.value;return{"--n-bezier":H,"--n-dot-color":xe,"--n-dot-color-focus":Ue,"--n-dot-color-active":He,"--n-dot-size":ae,"--n-dot-line-width":Fe,"--n-dot-line-width-active":lt,"--n-arrow-color":pt}}),Ao=n?ps("carousel",void 0,mr,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:t,selfElRef:r,slidesElRef:o,slideVNodes:i,duplicatedable:d,userWantsControl:f,autoSlideSize:b,displayIndex:G,realIndex:B,slideStyles:P,translateStyle:oe,slidesControlListeners:vt,handleTransitionEnd:en,handleResize:q,handleSlideResize:de,handleMouseenter:Ee,handleMouseleave:ot,isActive:me,arrowSlotProps:Ft,dotSlotProps:On},ut),{cssVars:n?void 0:mr,themeClass:Ao==null?void 0:Ao.themeClass,onRender:Ao==null?void 0:Ao.onRender})},render(){var e;const{mergedClsPrefix:t,showArrow:n,userWantsControl:r,slideStyles:o,dotType:s,dotPlacement:i,slidesControlListeners:l,transitionProps:a={},arrowSlotProps:c,dotSlotProps:u,$slots:{default:d,dots:f,arrow:m}}=this,h=d&&wi(d())||[];let b=o8(h);return b.length||(b=h.map(y=>F(QR,null,{default:()=>ln(y)}))),this.duplicatedable&&(b=BR(b)),this.slideVNodes.value=b,this.autoSlideSize&&(b=b.map(y=>F(ia,{onResize:this.handleSlideResize},{default:()=>y}))),(e=this.onRender)===null||e===void 0||e.call(this),F("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${t}-carousel`,this.direction==="vertical"&&`${t}-carousel--vertical`,this.showArrow&&`${t}-carousel--show-arrow`,`${t}-carousel--${i}`,`${t}-carousel--${this.direction}`,`${t}-carousel--${this.effect}`,r&&`${t}-carousel--usercontrol`],style:this.cssVars},l,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),F(ia,{onResize:this.handleResize},{default:()=>F("div",{ref:"slidesElRef",class:`${t}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},r?b.map((y,v)=>F("div",{style:o[v],key:v},Oe(F(sr,Object.assign({},a),{default:()=>y}),[[ji,this.isActive(v)]]))):b)}),this.showDots&&u.total>1&&mh(f,u,()=>[F(YR,{key:s+i,total:u.total,currentIndex:u.currentIndex,dotType:s,trigger:this.trigger,keyboard:this.keyboard})]),n&&mh(m,c,()=>[F(XR,null)]))}});function o8(e){return e.reduce((t,n)=>(JR(n)&&t.push(n),t),[])}const s8={padding:"8px 14px"},i8=e=>{const{borderRadius:t,boxShadow2:n,baseColor:r}=e;return Object.assign(Object.assign({},s8),{borderRadius:t,boxShadow:n,color:L0(r,"rgba(0, 0, 0, .85)"),textColor:r})},l8={name:"Tooltip",common:Mo,peers:{Popover:tb},self:i8},sb=l8,a8=Object.assign(Object.assign({},rb),Lt.props),c8=pe({name:"Tooltip",props:a8,__popover__:!0,setup(e){const{mergedClsPrefixRef:t}=vn(e),n=Lt("Tooltip","-tooltip",void 0,sb,e,t),r=z(null);return Object.assign(Object.assign({},{syncPosition(){r.value.syncPosition()},setShow(s){r.value.setShow(s)}}),{popoverRef:r,mergedTheme:n,popoverThemeOverrides:C(()=>n.value.self)})},render(){const{mergedTheme:e,internalExtraClass:t}=this;return F(RR,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:t.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),u8={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},d8=()=>u8,f8={name:"Space",self:d8},p8=f8;let Pc;const h8=()=>{if(!zd)return!0;if(Pc===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const t=e.scrollHeight===1;return document.body.removeChild(e),Pc=t}return Pc},m8=Object.assign(Object.assign({},Lt.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),v8=pe({name:"Space",props:m8,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:n}=vn(e),r=Lt("Space","-space",void 0,p8,e,t),o=Q1("Space",n,t);return{useGap:h8(),rtlEnabled:o,mergedClsPrefix:t,margin:C(()=>{const{size:s}=e;if(Array.isArray(s))return{horizontal:s[0],vertical:s[1]};if(typeof s=="number")return{horizontal:s,vertical:s};const{self:{[rr("gap",s)]:i}}=r.value,{row:l,col:a}=LO(i);return{horizontal:ch(a),vertical:ch(l)}})}},render(){const{vertical:e,align:t,inline:n,justify:r,itemStyle:o,margin:s,wrap:i,mergedClsPrefix:l,rtlEnabled:a,useGap:c,wrapItem:u,internalUseGap:d}=this,f=wi(qO(this));if(!f.length)return null;const m=`${s.horizontal}px`,h=`${s.horizontal/2}px`,b=`${s.vertical}px`,y=`${s.vertical/2}px`,v=f.length-1,x=r.startsWith("space-");return F("div",{role:"none",class:[`${l}-space`,a&&`${l}-space--rtl`],style:{display:n?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(r)?"flex-"+r:r,flexWrap:!i||e?"nowrap":"wrap",marginTop:c||e?"":`-${y}`,marginBottom:c||e?"":`-${y}`,alignItems:t,gap:c?`${s.vertical}px ${s.horizontal}px`:""}},!u&&(c||d)?f:f.map((_,E)=>F("div",{role:"none",style:[o,{maxWidth:"100%"},c?"":e?{marginBottom:E!==v?b:""}:a?{marginLeft:x?r==="space-between"&&E===v?"":h:E!==v?m:"",marginRight:x?r==="space-between"&&E===0?"":h:"",paddingTop:y,paddingBottom:y}:{marginRight:x?r==="space-between"&&E===v?"":h:E!==v?m:"",marginLeft:x?r==="space-between"&&E===0?"":h:"",paddingTop:y,paddingBottom:y}]},_)))}}),g8=e=>{const{primaryColor:t,successColor:n,warningColor:r,errorColor:o,infoColor:s,fontWeightStrong:i}=e;return{fontWeight:i,rotate:"252deg",colorStartPrimary:Ps(t,{alpha:.6}),colorEndPrimary:t,colorStartInfo:Ps(s,{alpha:.6}),colorEndInfo:s,colorStartWarning:Ps(r,{alpha:.6}),colorEndWarning:r,colorStartError:Ps(o,{alpha:.6}),colorEndError:o,colorStartSuccess:Ps(n,{alpha:.6}),colorEndSuccess:n}},b8={name:"GradientText",common:Mo,self:g8},y8=b8,w8=De("gradient-text",`
 display: inline-block;
 font-weight: var(--n-font-weight);
 -webkit-background-clip: text;
 background-clip: text;
 color: #0000;
 white-space: nowrap;
 background-image: linear-gradient(var(--n-rotate), var(--n-color-start) 0%, var(--n-color-end) 100%);
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier);
`),_8=Object.assign(Object.assign({},Lt.props),{size:[String,Number],fontSize:[String,Number],type:{type:String,default:"primary"},color:[Object,String],gradient:[Object,String]}),x8=pe({name:"GradientText",props:_8,setup(e){Z0();const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=vn(e),r=C(()=>{const{type:c}=e;return c==="danger"?"error":c}),o=C(()=>{let c=e.size||e.fontSize;return c&&(c=Xs(c)),c||void 0}),s=C(()=>{const c=e.color||e.gradient;if(typeof c=="string")return c;if(c){const u=c.deg||0,d=c.from,f=c.to;return`linear-gradient(${u}deg, ${d} 0%, ${f} 100%)`}}),i=Lt("GradientText","-gradient-text",w8,y8,e,t),l=C(()=>{const{value:c}=r,{common:{cubicBezierEaseInOut:u},self:{rotate:d,[rr("colorStart",c)]:f,[rr("colorEnd",c)]:m,fontWeight:h}}=i.value;return{"--n-bezier":u,"--n-rotate":d,"--n-color-start":f,"--n-color-end":m,"--n-font-weight":h}}),a=n?ps("gradient-text",C(()=>r.value[0]),l,e):void 0;return{mergedClsPrefix:t,compatibleType:r,styleFontSize:o,styleBgImage:s,cssVars:n?void 0:l,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){const{mergedClsPrefix:e,onRender:t}=this;return t==null||t(),F("span",{class:[`${e}-gradient-text`,`${e}-gradient-text--${this.compatibleType}-type`,this.themeClass],style:[{fontSize:this.styleFontSize,backgroundImage:this.styleBgImage},this.cssVars]},this.$slots)}}),ib=Object.assign(Object.assign({},Lt.props),{showToolbar:{type:Boolean,default:!0},showToolbarTooltip:Boolean}),lb="n-image";function k8(){return{toolbarIconColor:"rgba(255, 255, 255, .9)",toolbarColor:"rgba(0, 0, 0, .35)",toolbarBoxShadow:"none",toolbarBorderRadius:"24px"}}const S8={name:"Image",common:Mo,peers:{Tooltip:sb},self:k8},$8={titleMarginMedium:"0 0 6px 0",titleMarginLarge:"-2px 0 6px 0",titleFontSizeMedium:"14px",titleFontSizeLarge:"16px",iconSizeMedium:"14px",iconSizeLarge:"14px"},C8=e=>{const{textColor3:t,infoColor:n,errorColor:r,successColor:o,warningColor:s,textColor1:i,textColor2:l,railColor:a,fontWeightStrong:c,fontSize:u}=e;return Object.assign(Object.assign({},$8),{contentFontSize:u,titleFontWeight:c,circleBorder:`2px solid ${t}`,circleBorderInfo:`2px solid ${n}`,circleBorderError:`2px solid ${r}`,circleBorderSuccess:`2px solid ${o}`,circleBorderWarning:`2px solid ${s}`,iconColor:t,iconColorInfo:n,iconColorError:r,iconColorSuccess:o,iconColorWarning:s,titleTextColor:i,contentTextColor:l,metaTextColor:t,lineColor:a})},E8={name:"Timeline",common:Mo,self:C8},O8=E8,I8=F("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},F("path",{d:"M6 5C5.75454 5 5.55039 5.17688 5.50806 5.41012L5.5 5.5V14.5C5.5 14.7761 5.72386 15 6 15C6.24546 15 6.44961 14.8231 6.49194 14.5899L6.5 14.5V5.5C6.5 5.22386 6.27614 5 6 5ZM13.8536 5.14645C13.68 4.97288 13.4106 4.9536 13.2157 5.08859L13.1464 5.14645L8.64645 9.64645C8.47288 9.82001 8.4536 10.0894 8.58859 10.2843L8.64645 10.3536L13.1464 14.8536C13.3417 15.0488 13.6583 15.0488 13.8536 14.8536C14.0271 14.68 14.0464 14.4106 13.9114 14.2157L13.8536 14.1464L9.70711 10L13.8536 5.85355C14.0488 5.65829 14.0488 5.34171 13.8536 5.14645Z",fill:"currentColor"})),P8=F("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},F("path",{d:"M13.5 5C13.7455 5 13.9496 5.17688 13.9919 5.41012L14 5.5V14.5C14 14.7761 13.7761 15 13.5 15C13.2545 15 13.0504 14.8231 13.0081 14.5899L13 14.5V5.5C13 5.22386 13.2239 5 13.5 5ZM5.64645 5.14645C5.82001 4.97288 6.08944 4.9536 6.28431 5.08859L6.35355 5.14645L10.8536 9.64645C11.0271 9.82001 11.0464 10.0894 10.9114 10.2843L10.8536 10.3536L6.35355 14.8536C6.15829 15.0488 5.84171 15.0488 5.64645 14.8536C5.47288 14.68 5.4536 14.4106 5.58859 14.2157L5.64645 14.1464L9.79289 10L5.64645 5.85355C5.45118 5.65829 5.45118 5.34171 5.64645 5.14645Z",fill:"currentColor"})),T8=F("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},F("path",{d:"M4.089 4.216l.057-.07a.5.5 0 0 1 .638-.057l.07.057L10 9.293l5.146-5.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07L10.707 10l5.147 5.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057L10 10.707l-5.146 5.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07L9.293 10L4.146 4.854a.5.5 0 0 1-.057-.638l.057-.07l-.057.07z",fill:"currentColor"})),M8=Ie([Ie("body >",[De("image-container","position: fixed;")]),De("image-preview-container",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 `),De("image-preview-overlay",`
 z-index: -1;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background: rgba(0, 0, 0, .3);
 `,[Hu()]),De("image-preview-toolbar",`
 z-index: 1;
 position: absolute;
 left: 50%;
 transform: translateX(-50%);
 border-radius: var(--n-toolbar-border-radius);
 height: 48px;
 bottom: 40px;
 padding: 0 12px;
 background: var(--n-toolbar-color);
 box-shadow: var(--n-toolbar-box-shadow);
 color: var(--n-toolbar-icon-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[De("base-icon",`
 padding: 0 8px;
 font-size: 28px;
 cursor: pointer;
 `),Hu()]),De("image-preview-wrapper",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 pointer-events: none;
 `,[kR()]),De("image-preview",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: all;
 margin: auto;
 max-height: calc(100vh - 32px);
 max-width: calc(100vw - 32px);
 transition: transform .3s var(--n-bezier);
 `),De("image",`
 display: inline-flex;
 max-height: 100%;
 max-width: 100%;
 `,[Al("preview-disabled",`
 cursor: pointer;
 `),Ie("img",`
 border-radius: inherit;
 `)])]),wl=32,A8=pe({name:"ImagePreview",props:Object.assign(Object.assign({},ib),{onNext:Function,onPrev:Function,clsPrefix:{type:String,required:!0}}),setup(e){const t=Lt("Image","-image",M8,S8,e,pn(e,"clsPrefix"));let n=null;const r=z(null),o=z(null),s=z(void 0),i=z(!1),l=z(!1),{localeRef:a}=sR("Image");function c(){const{value:X}=o;if(!n||!X)return;const{style:g}=X,w=n.getBoundingClientRect(),O=w.left+w.width/2,L=w.top+w.height/2;g.transformOrigin=`${O}px ${L}px`}function u(X){var g,w;switch(X.key){case" ":X.preventDefault();break;case"ArrowLeft":(g=e.onPrev)===null||g===void 0||g.call(e);break;case"ArrowRight":(w=e.onNext)===null||w===void 0||w.call(e);break;case"Escape":yt();break}}be(i,X=>{X?dt("keydown",document,u):tt("keydown",document,u)}),jt(()=>{tt("keydown",document,u)});let d=0,f=0,m=0,h=0,b=0,y=0,v=0,x=0,_=!1;function E(X){const{clientX:g,clientY:w}=X;m=g-d,h=w-f,R0(Qe)}function I(X){const{mouseUpClientX:g,mouseUpClientY:w,mouseDownClientX:O,mouseDownClientY:L}=X,j=O-g,W=L-w,Q=`vertical${W>0?"Top":"Bottom"}`,K=`horizontal${j>0?"Left":"Right"}`;return{moveVerticalDirection:Q,moveHorizontalDirection:K,deltaHorizontal:j,deltaVertical:W}}function P(X){const{value:g}=r;if(!g)return{offsetX:0,offsetY:0};const w=g.getBoundingClientRect(),{moveVerticalDirection:O,moveHorizontalDirection:L,deltaHorizontal:j,deltaVertical:W}=X||{};let Q=0,K=0;return w.width<=window.innerWidth?Q=0:w.left>0?Q=(w.width-window.innerWidth)/2:w.right<window.innerWidth?Q=-(w.width-window.innerWidth)/2:L==="horizontalRight"?Q=Math.min((w.width-window.innerWidth)/2,b-(j??0)):Q=Math.max(-((w.width-window.innerWidth)/2),b-(j??0)),w.height<=window.innerHeight?K=0:w.top>0?K=(w.height-window.innerHeight)/2:w.bottom<window.innerHeight?K=-(w.height-window.innerHeight)/2:O==="verticalBottom"?K=Math.min((w.height-window.innerHeight)/2,y-(W??0)):K=Math.max(-((w.height-window.innerHeight)/2),y-(W??0)),{offsetX:Q,offsetY:K}}function S(X){tt("mousemove",document,E),tt("mouseup",document,S);const{clientX:g,clientY:w}=X;_=!1;const O=I({mouseUpClientX:g,mouseUpClientY:w,mouseDownClientX:v,mouseDownClientY:x}),L=P(O);m=L.offsetX,h=L.offsetY,Qe()}const k=ie(lb,null);function M(X){var g,w;if((w=(g=k==null?void 0:k.previewedImgPropsRef.value)===null||g===void 0?void 0:g.onMousedown)===null||w===void 0||w.call(g,X),X.button!==0)return;const{clientX:O,clientY:L}=X;_=!0,d=O-m,f=L-h,b=m,y=h,v=O,x=L,Qe(),dt("mousemove",document,E),dt("mouseup",document,S)}function N(X){var g,w;(w=(g=k==null?void 0:k.previewedImgPropsRef.value)===null||g===void 0?void 0:g.onDblclick)===null||w===void 0||w.call(g,X);const O=Xe();te=te===O?1:O,Qe()}const G=1.5;let B=0,te=1,V=0;function ne(){te=1,B=0}function ve(){var X;ne(),V=0,(X=e.onPrev)===null||X===void 0||X.call(e)}function J(){var X;ne(),V=0,(X=e.onNext)===null||X===void 0||X.call(e)}function le(){V-=90,Qe()}function me(){V+=90,Qe()}function Re(){const{value:X}=r;if(!X)return 1;const{innerWidth:g,innerHeight:w}=window,O=Math.max(1,X.naturalHeight/(w-wl)),L=Math.max(1,X.naturalWidth/(g-wl));return Math.max(3,O*2,L*2)}function Xe(){const{value:X}=r;if(!X)return 1;const{innerWidth:g,innerHeight:w}=window,O=X.naturalHeight/(w-wl),L=X.naturalWidth/(g-wl);return O<1&&L<1?1:Math.max(O,L)}function nt(){const X=Re();te<X&&(B+=1,te=Math.min(X,Math.pow(G,B)),Qe())}function ft(){if(te>.5){const X=te;B-=1,te=Math.max(.5,Math.pow(G,B));const g=X-te;Qe(!1);const w=P();te+=g,Qe(!1),te-=g,m=w.offsetX,h=w.offsetY,Qe()}}function Qe(X=!0){var g;const{value:w}=r;if(!w)return;const{style:O}=w,L=xt((g=k==null?void 0:k.previewedImgPropsRef.value)===null||g===void 0?void 0:g.style);let j="";if(typeof L=="string")j=L+";";else for(const Q in L)j+=`${u6(Q)}: ${L[Q]};`;const W=`transform-origin: center; transform: translateX(${m}px) translateY(${h}px) rotate(${V}deg) scale(${te});`;_?O.cssText=j+"cursor: grabbing; transition: none;"+W:O.cssText=j+"cursor: grab;"+W+(X?"":"transition: none;"),X||w.offsetHeight}function yt(){i.value=!i.value,l.value=!0}function Mt(){te=Xe(),B=Math.ceil(Math.log(te)/Math.log(G)),m=0,h=0,Qe()}const A={setPreviewSrc:X=>{s.value=X},setThumbnailEl:X=>{n=X},toggleShow:yt};function re(X,g){if(e.showToolbarTooltip){const{value:w}=t;return F(c8,{to:!1,theme:w.peers.Tooltip,themeOverrides:w.peerOverrides.Tooltip,keepAliveOnHover:!1},{default:()=>a.value[g],trigger:()=>X})}else return X}const oe=C(()=>{const{common:{cubicBezierEaseInOut:X},self:{toolbarIconColor:g,toolbarBorderRadius:w,toolbarBoxShadow:O,toolbarColor:L}}=t.value;return{"--n-bezier":X,"--n-toolbar-icon-color":g,"--n-toolbar-color":L,"--n-toolbar-border-radius":w,"--n-toolbar-box-shadow":O}}),{inlineThemeDisabled:se}=vn(),_e=se?ps("image-preview",void 0,oe,e):void 0;return Object.assign({previewRef:r,previewWrapperRef:o,previewSrc:s,show:i,appear:Bd(),displayed:l,previewedImgProps:k==null?void 0:k.previewedImgPropsRef,handleWheel(X){X.preventDefault()},handlePreviewMousedown:M,handlePreviewDblclick:N,syncTransformOrigin:c,handleAfterLeave:()=>{ne(),V=0,l.value=!1},handleDragStart:X=>{var g,w;(w=(g=k==null?void 0:k.previewedImgPropsRef.value)===null||g===void 0?void 0:g.onDragstart)===null||w===void 0||w.call(g,X),X.preventDefault()},zoomIn:nt,zoomOut:ft,rotateCounterclockwise:le,rotateClockwise:me,handleSwitchPrev:ve,handleSwitchNext:J,withTooltip:re,resizeToOrignalImageSize:Mt,cssVars:se?void 0:oe,themeClass:_e==null?void 0:_e.themeClass,onRender:_e==null?void 0:_e.onRender},A)},render(){var e,t;const{clsPrefix:n}=this;return F(ze,null,(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e),F(Q0,{show:this.show},{default:()=>{var r;return this.show||this.displayed?((r=this.onRender)===null||r===void 0||r.call(this),Oe(F("div",{class:[`${n}-image-preview-container`,this.themeClass],style:this.cssVars,onWheel:this.handleWheel},F(sr,{name:"fade-in-transition",appear:this.appear},{default:()=>this.show?F("div",{class:`${n}-image-preview-overlay`,onClick:this.toggleShow}):null}),this.showToolbar?F(sr,{name:"fade-in-transition",appear:this.appear},{default:()=>{if(!this.show)return null;const{withTooltip:o}=this;return F("div",{class:`${n}-image-preview-toolbar`},this.onPrev?F(ze,null,o(F(wr,{clsPrefix:n,onClick:this.handleSwitchPrev},{default:()=>I8}),"tipPrevious"),o(F(wr,{clsPrefix:n,onClick:this.handleSwitchNext},{default:()=>P8}),"tipNext")):null,o(F(wr,{clsPrefix:n,onClick:this.rotateCounterclockwise},{default:()=>F(aR,null)}),"tipCounterclockwise"),o(F(wr,{clsPrefix:n,onClick:this.rotateClockwise},{default:()=>F(lR,null)}),"tipClockwise"),o(F(wr,{clsPrefix:n,onClick:this.resizeToOrignalImageSize},{default:()=>F(dR,null)}),"tipOriginalSize"),o(F(wr,{clsPrefix:n,onClick:this.zoomOut},{default:()=>F(uR,null)}),"tipZoomOut"),o(F(wr,{clsPrefix:n,onClick:this.zoomIn},{default:()=>F(cR,null)}),"tipZoomIn"),o(F(wr,{clsPrefix:n,onClick:this.toggleShow},{default:()=>T8}),"tipClose"))}}):null,F(sr,{name:"fade-in-scale-up-transition",onAfterLeave:this.handleAfterLeave,appear:this.appear,onEnter:this.syncTransformOrigin,onBeforeLeave:this.syncTransformOrigin},{default:()=>{const{previewedImgProps:o={}}=this;return Oe(F("div",{class:`${n}-image-preview-wrapper`,ref:"previewWrapperRef"},F("img",Object.assign({},o,{draggable:!1,onMousedown:this.handlePreviewMousedown,onDblclick:this.handlePreviewDblclick,class:[`${n}-image-preview`,o.class],key:this.previewSrc,src:this.previewSrc,ref:"previewRef",onDragstart:this.handleDragStart}))),[[ji,this.show]])}})),[[Hd,{enabled:this.show}]])):null}}))}}),R8="n-image-group",L8=Object.assign({alt:String,height:[String,Number],imgProps:Object,previewedImgProps:Object,lazy:Boolean,intersectionObserverOptions:Object,objectFit:{type:String,default:"fill"},previewSrc:String,fallbackSrc:String,width:[String,Number],src:String,previewDisabled:Boolean,loadDescription:String,onError:Function,onLoad:Function},ib),D8=pe({name:"Image",props:L8,inheritAttrs:!1,setup(e){const t=z(null),n=z(!1),r=z(null),o=ie(R8,null),{mergedClsPrefixRef:s}=o||vn(e),i={click:()=>{if(e.previewDisabled||n.value)return;const c=e.previewSrc||e.src;if(o){o.setPreviewSrc(c),o.setThumbnailEl(t.value),o.toggleShow();return}const{value:u}=r;u&&(u.setPreviewSrc(c),u.setThumbnailEl(t.value),u.toggleShow())}},l=z(!e.lazy);It(()=>{var c;(c=t.value)===null||c===void 0||c.setAttribute("data-group-id",(o==null?void 0:o.groupId)||"")}),It(()=>{if(e.lazy&&e.intersectionObserverOptions){let c;const u=Jt(()=>{c==null||c(),c=void 0,c=jR(t.value,e.intersectionObserverOptions,l)});jt(()=>{u(),c==null||c()})}}),Jt(()=>{var c;e.src,(c=e.imgProps)===null||c===void 0||c.src,n.value=!1});const a=z(!1);return gt(lb,{previewedImgPropsRef:pn(e,"previewedImgProps")}),Object.assign({mergedClsPrefix:s,groupId:o==null?void 0:o.groupId,previewInstRef:r,imageRef:t,showError:n,shouldStartLoading:l,loaded:a,mergedOnClick:c=>{var u,d;i.click(),(d=(u=e.imgProps)===null||u===void 0?void 0:u.onClick)===null||d===void 0||d.call(u,c)},mergedOnError:c=>{if(!l.value)return;n.value=!0;const{onError:u,imgProps:{onError:d}={}}=e;u==null||u(c),d==null||d(c)},mergedOnLoad:c=>{const{onLoad:u,imgProps:{onLoad:d}={}}=e;u==null||u(c),d==null||d(c),a.value=!0}},i)},render(){var e,t;const{mergedClsPrefix:n,imgProps:r={},loaded:o,$attrs:s,lazy:i}=this,l=(t=(e=this.$slots).placeholder)===null||t===void 0?void 0:t.call(e),a=this.src||r.src,c=F("img",Object.assign(Object.assign({},r),{ref:"imageRef",width:this.width||r.width,height:this.height||r.height,src:this.showError?this.fallbackSrc:i&&this.intersectionObserverOptions?this.shouldStartLoading?a:void 0:a,alt:this.alt||r.alt,"aria-label":this.alt||r.alt,onClick:this.mergedOnClick,onError:this.mergedOnError,onLoad:this.mergedOnLoad,loading:LR&&i&&!this.intersectionObserverOptions?"lazy":"eager",style:[r.style||"",l&&!o?{height:"0",width:"0",visibility:"hidden"}:"",{objectFit:this.objectFit}],"data-error":this.showError,"data-preview-src":this.previewSrc||this.src}));return F("div",Object.assign({},s,{role:"none",class:[s.class,`${n}-image`,(this.previewDisabled||this.showError)&&`${n}-image--preview-disabled`]}),this.groupId?c:F(A8,{theme:this.theme,themeOverrides:this.themeOverrides,clsPrefix:n,ref:"previewInstRef",showToolbar:this.showToolbar,showToolbarTooltip:this.showToolbarTooltip},{default:()=>c}),!o&&l)}}),$m=1.25,j8=De("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${$m};
`,[Te("horizontal",`
 flex-direction: row;
 `,[Ie(">",[De("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[Te("dashed-line-type",[Ie(">",[De("timeline-item-timeline",[ke("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),Ie(">",[De("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[Ie(">",[ke("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),De("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[ke("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),Te("right-placement",[De("timeline-item",[De("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),De("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),Te("left-placement",[De("timeline-item",[De("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),De("timeline-item-timeline",`
 left: 0;
 `)])]),De("timeline-item",`
 position: relative;
 `,[Ie("&:last-child",[De("timeline-item-timeline",[ke("line",`
 display: none;
 `)]),De("timeline-item-content",[ke("meta",`
 margin-bottom: 0;
 `)])]),De("timeline-item-content",[ke("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),ke("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),ke("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),Te("dashed-line-type",[De("timeline-item-timeline",[ke("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),De("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${$m} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[ke("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),ke("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),ke("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),N8=Object.assign(Object.assign({},Lt.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),ab="n-timeline",F8=pe({name:"Timeline",props:N8,setup(e,{slots:t}){const{mergedClsPrefixRef:n}=vn(e),r=Lt("Timeline","-timeline",j8,O8,e,n);return gt(ab,{props:e,mergedThemeRef:r,mergedClsPrefixRef:n}),()=>{const{value:o}=n;return F("div",{class:[`${o}-timeline`,e.horizontal&&`${o}-timeline--horizontal`,`${o}-timeline--${e.size}-size`,!e.horizontal&&`${o}-timeline--${e.itemPlacement}-placement`]},t)}}}),z8={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},B8=pe({name:"TimelineItem",props:z8,setup(e){const t=ie(ab);t||Aa("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),Z0();const{inlineThemeDisabled:n}=vn(),r=C(()=>{const{props:{size:s,iconSize:i},mergedThemeRef:l}=t,{type:a}=e,{self:{titleTextColor:c,contentTextColor:u,metaTextColor:d,lineColor:f,titleFontWeight:m,contentFontSize:h,[rr("iconSize",s)]:b,[rr("titleMargin",s)]:y,[rr("titleFontSize",s)]:v,[rr("circleBorder",a)]:x,[rr("iconColor",a)]:_},common:{cubicBezierEaseInOut:E}}=l.value;return{"--n-bezier":E,"--n-circle-border":x,"--n-icon-color":_,"--n-content-font-size":h,"--n-content-text-color":u,"--n-line-color":f,"--n-meta-text-color":d,"--n-title-font-size":v,"--n-title-font-weight":m,"--n-title-margin":y,"--n-title-text-color":c,"--n-icon-size":Xs(i)||b}}),o=n?ps("timeline-item",C(()=>{const{props:{size:s,iconSize:i}}=t,{type:l}=e;return`${s[0]}${i||"a"}${l[0]}`}),r,t.props):void 0;return{mergedClsPrefix:t.mergedClsPrefixRef,cssVars:n?void 0:r,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){const{mergedClsPrefix:e,color:t,onRender:n,$slots:r}=this;return n==null||n(),F("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},F("div",{class:`${e}-timeline-item-timeline`},F("div",{class:`${e}-timeline-item-timeline__line`}),Gs(r.icon,o=>o?F("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:t}},o):F("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:t}}))),F("div",{class:`${e}-timeline-item-content`},Gs(r.header,o=>o||this.title?F("div",{class:`${e}-timeline-item-content__title`},o||this.title):null),F("div",{class:`${e}-timeline-item-content__content`},hh(r.default,()=>[this.content])),F("div",{class:`${e}-timeline-item-content__meta`},hh(r.footer,()=>[this.time]))))}}),H8=pe({__name:"image",setup(e){return ie($e),(t,n)=>(T(),ge(D(D8)))}}),Nt=Ce(H8,[["__file","/home/runner/work/docker-slidev/docker-slidev/components/image.vue"]]),V8=e=>(Rw("data-v-8ef45931"),e=e(),Lw(),e),W8={viewBox:"0 0 96 96",class:"svg-circle-progress",style:{width:"96px",height:"96px"}},U8=V8(()=>p("circle",{r:"40",cx:"48",cy:"48",fill:"none","stroke-miterlimit":"20","stroke-width":"10",class:"svg-progress",style:{"stroke-dasharray":"275, 279.602",stroke:"#eee"}},null,-1)),q8={class:"mask"},K8={class:"bigData"},Y8=pe({__name:"progress",props:{targetValue:{type:Number,require:!0,default:-1},color:{type:String,default:"#4c7cee"},width:{type:String,default:"210px"},height:{type:String,default:"100px"}},setup(e){const t=e;ie($e);const{height:n,width:r,color:o,targetValue:s}=Pv(t),i=z(0),l=()=>{if(s.value===0)return;let c=setInterval(()=>{if(s.value===i.value){clearInterval(c);return}++i.value},15)};It(()=>{l()});const a=z(i.value/100*250);return be(s,c=>{a.value=c/100*250},{immediate:!0}),(c,u)=>(T(),Y("div",{class:"progress",style:xt({width:D(r),height:D(n)})},[(T(),Y("svg",W8,[U8,p("circle",{r:"40",cx:"48",cy:"48",fill:"none","stroke-miterlimit":"20","stroke-width":"10",class:"svg-progress",style:xt(`stroke-dasharray: ${a.value}, 279.602;stroke:${D(o)};`)},null,4)])),p("div",q8,[p("span",K8,Rn(D(s)),1),R(" % ")])],4))}});const Z8=Ce(Y8,[["__scopeId","data-v-8ef45931"],["__file","/home/runner/work/docker-slidev/docker-slidev/components/progress.vue"]]),G8={key:0},X8={class:"top absolute top-0 right-0 p-2"},J8={class:"progress absolute top-0 left-0"},Q8=pe({__name:"global-top",setup(e){const t=ie($e),n=C(()=>{const r=t.nav.currentPage/t.nav.total*100;return Math.floor(r)});return(r,o)=>{const s=Nt;return[1,2,D(t).nav.total+1].includes(D(t).nav.currentPage)?je("v-if",!0):(T(),Y("div",G8,[p("div",X8,[$(s,{class:"w-20",src:"/logo.png"})]),p("div",J8,[$(Z8,{targetValue:n.value},null,8,["targetValue"])])]))}}});const eL=Ce(Q8,[["__file","/home/runner/work/docker-slidev/docker-slidev/global-top.vue"]]),cb={render(){return[F(eL)]}},tL={key:0,class:"bottom absolute bottom-0 right-0 p-2 flex"},nL=pe({__name:"global-bottom",setup(e){const t=ie($e);return C(()=>{const n=t.nav.currentPage/t.nav.total*100;return Math.floor(n)}),(n,r)=>[1,2,D(t).nav.total+1].includes(D(t).nav.currentPage)?je("v-if",!0):(T(),Y("div",tL,[p("div",null,Rn(D(t).nav.currentPage),1)]))}});const rL=Ce(nL,[["__file","/home/runner/work/docker-slidev/docker-slidev/global-bottom.vue"]]),ub={render(){return[F(rL)]}},oL={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},sL=pe({__name:"PresenterMouse",setup(e){return ie($e),(t,n)=>{const r=M0;return D(oc).cursor?(T(),Y("div",oL,[$(r,{class:"absolute",style:xt({left:`${D(oc).cursor.x}%`,top:`${D(oc).cursor.y}%`})},null,8,["style"])])):je("v-if",!0)}}}),iL=Ce(sL,[["__file","/home/runner/work/docker-slidev/docker-slidev/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),lL=pe({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){ie($e),be(Zt,()=>{var r,o;(r=Zt.value)!=null&&r.meta&&Zt.value.meta.preload!==!1&&(Zt.value.meta.__preloaded=!0),(o=Tc.value)!=null&&o.meta&&Tc.value.meta.preload!==!1&&(Tc.value.meta.__preloaded=!0)},{immediate:!0});const t=qn();Mr(()=>import("./DrawingLayer-d6c5d638.js"),[]).then(r=>t.value=r.default);const n=C(()=>_t.filter(r=>{var o;return((o=r.meta)==null?void 0:o.__preloaded)||r===Zt.value}));return(r,o)=>(T(),Y(ze,null,[je(" Global Bottom "),$(D(ub)),je(" Slides "),$(mx,xo(D(Oz),{id:"slideshow",tag:"div"}),{default:ce(()=>[(T(!0),Y(ze,null,ss(n.value,s=>{var i;return Oe((T(),ge(D(Nd),{key:s.path,is:s==null?void 0:s.component,clicks:s===D(Zt)?D(xn):0,"clicks-elements":((i=s.meta)==null?void 0:i.__clicksElements)||[],"clicks-disabled":!1,class:ht(D(jd)(s)),route:s,context:r.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[ji,s===D(Zt)]])}),128))]),_:1},16),je(" Global Top "),$(D(cb)),t.value?(T(),ge(D(t),{key:0})):je("v-if",!0),D(rn)?je("v-if",!0):(T(),ge(iL,{key:1}))],64))}});const aL=Ce(lL,[["__scopeId","data-v-aec90d67"],["__file","/home/runner/work/docker-slidev/docker-slidev/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/SlidesShow.vue"]]),cL=pe({__name:"PrintStyle",setup(e){ie($e);function t(n,{slots:r}){if(r.default)return F("style",r.default())}return(n,r)=>(T(),ge(t,null,{default:ce(()=>[R(" @page { size: "+Rn(D(Tr))+"px "+Rn(D(Pd))+"px; margin: 0px; } ",1)]),_:1}))}}),db=Ce(cL,[["__file","/home/runner/work/docker-slidev/docker-slidev/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/PrintStyle.vue"]]),uL=pe({__name:"Play",setup(e){ie($e),xC();const t=z();function n(s){var i;qp.value||((i=s.target)==null?void 0:i.id)==="slide-container"&&(s.screenX/window.innerWidth>.6?Rr():Lr())}Iz(t);const r=C(()=>M$.value||qp.value);qn();const o=qn();return Mr(()=>import("./DrawingControls-7795f548.js"),[]).then(s=>o.value=s.default),(s,i)=>(T(),Y(ze,null,[D(rs)?(T(),ge(db,{key:0})):je("v-if",!0),p("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:xt(D(Td))},[$(_0,{class:"w-full h-full",style:xt({background:"var(--slidev-slide-container-background, black)"}),width:D(rs)?D(go).width.value:void 0,scale:D(Pl),onPointerdown:n},{default:ce(()=>[$(aL,{context:"slide"})]),controls:ce(()=>[p("div",{class:ht(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[r.value?"opacity-100 right-0":"opacity-0 p-2",D(gi)?"pointer-events-none":""]])},[$(AO,{class:"m-auto",persist:r.value},null,8,["persist"])],2),!D(Ze).drawings.presenterOnly&&!D(er)&&o.value?(T(),ge(D(o),{key:0,class:"ml-0"})):je("v-if",!0)]),_:1},8,["style","width","scale"]),je("v-if",!0)],4),$(N5)],64))}}),dL=Ce(uL,[["__file","/home/runner/work/docker-slidev/docker-slidev/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function fb(e){return typeof e>"u"||e===null}function fL(e){return typeof e=="object"&&e!==null}function pL(e){return Array.isArray(e)?e:fb(e)?[]:[e]}function hL(e,t){var n,r,o,s;if(t)for(s=Object.keys(t),n=0,r=s.length;n<r;n+=1)o=s[n],e[o]=t[o];return e}function mL(e,t){var n="",r;for(r=0;r<t;r+=1)n+=e;return n}function vL(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var gL=fb,bL=fL,yL=pL,wL=mL,_L=vL,xL=hL,rf={isNothing:gL,isObject:bL,toArray:yL,repeat:wL,isNegativeZero:_L,extend:xL};function pb(e,t){var n="",r=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+=`

`+e.mark.snippet),r+" "+n):r}function Ci(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=pb(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Ci.prototype=Object.create(Error.prototype);Ci.prototype.constructor=Ci;Ci.prototype.toString=function(t){return this.name+": "+pb(this,t)};var no=Ci,kL=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],SL=["scalar","sequence","mapping"];function $L(e){var t={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(r){t[String(r)]=n})}),t}function CL(e,t){if(t=t||{},Object.keys(t).forEach(function(n){if(kL.indexOf(n)===-1)throw new no('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(n){return n},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=$L(t.styleAliases||null),SL.indexOf(this.kind)===-1)throw new no('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var Wt=CL;function Cm(e,t){var n=[];return e[t].forEach(function(r){var o=n.length;n.forEach(function(s,i){s.tag===r.tag&&s.kind===r.kind&&s.multi===r.multi&&(o=i)}),n[o]=r}),n}function EL(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,n;function r(o){o.multi?(e.multi[o.kind].push(o),e.multi.fallback.push(o)):e[o.kind][o.tag]=e.fallback[o.tag]=o}for(t=0,n=arguments.length;t<n;t+=1)arguments[t].forEach(r);return e}function Vu(e){return this.extend(e)}Vu.prototype.extend=function(t){var n=[],r=[];if(t instanceof Wt)r.push(t);else if(Array.isArray(t))r=r.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(n=n.concat(t.implicit)),t.explicit&&(r=r.concat(t.explicit));else throw new no("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(s){if(!(s instanceof Wt))throw new no("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(s.loadKind&&s.loadKind!=="scalar")throw new no("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(s.multi)throw new no("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),r.forEach(function(s){if(!(s instanceof Wt))throw new no("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var o=Object.create(Vu.prototype);return o.implicit=(this.implicit||[]).concat(n),o.explicit=(this.explicit||[]).concat(r),o.compiledImplicit=Cm(o,"implicit"),o.compiledExplicit=Cm(o,"explicit"),o.compiledTypeMap=EL(o.compiledImplicit,o.compiledExplicit),o};var OL=Vu,IL=new Wt("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),PL=new Wt("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),TL=new Wt("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),ML=new OL({explicit:[IL,PL,TL]});function AL(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function RL(){return null}function LL(e){return e===null}var DL=new Wt("tag:yaml.org,2002:null",{kind:"scalar",resolve:AL,construct:RL,predicate:LL,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function jL(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function NL(e){return e==="true"||e==="True"||e==="TRUE"}function FL(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var zL=new Wt("tag:yaml.org,2002:bool",{kind:"scalar",resolve:jL,construct:NL,predicate:FL,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function BL(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function HL(e){return 48<=e&&e<=55}function VL(e){return 48<=e&&e<=57}function WL(e){if(e===null)return!1;var t=e.length,n=0,r=!1,o;if(!t)return!1;if(o=e[n],(o==="-"||o==="+")&&(o=e[++n]),o==="0"){if(n+1===t)return!0;if(o=e[++n],o==="b"){for(n++;n<t;n++)if(o=e[n],o!=="_"){if(o!=="0"&&o!=="1")return!1;r=!0}return r&&o!=="_"}if(o==="x"){for(n++;n<t;n++)if(o=e[n],o!=="_"){if(!BL(e.charCodeAt(n)))return!1;r=!0}return r&&o!=="_"}if(o==="o"){for(n++;n<t;n++)if(o=e[n],o!=="_"){if(!HL(e.charCodeAt(n)))return!1;r=!0}return r&&o!=="_"}}if(o==="_")return!1;for(;n<t;n++)if(o=e[n],o!=="_"){if(!VL(e.charCodeAt(n)))return!1;r=!0}return!(!r||o==="_")}function UL(e){var t=e,n=1,r;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),r=t[0],(r==="-"||r==="+")&&(r==="-"&&(n=-1),t=t.slice(1),r=t[0]),t==="0")return 0;if(r==="0"){if(t[1]==="b")return n*parseInt(t.slice(2),2);if(t[1]==="x")return n*parseInt(t.slice(2),16);if(t[1]==="o")return n*parseInt(t.slice(2),8)}return n*parseInt(t,10)}function qL(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!rf.isNegativeZero(e)}var KL=new Wt("tag:yaml.org,2002:int",{kind:"scalar",resolve:WL,construct:UL,predicate:qL,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),YL=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function ZL(e){return!(e===null||!YL.test(e)||e[e.length-1]==="_")}function GL(e){var t,n;return t=e.replace(/_/g,"").toLowerCase(),n=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:n*parseFloat(t,10)}var XL=/^[-+]?[0-9]+e/;function JL(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(rf.isNegativeZero(e))return"-0.0";return n=e.toString(10),XL.test(n)?n.replace("e",".e"):n}function QL(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||rf.isNegativeZero(e))}var eD=new Wt("tag:yaml.org,2002:float",{kind:"scalar",resolve:ZL,construct:GL,predicate:QL,represent:JL,defaultStyle:"lowercase"}),tD=ML.extend({implicit:[DL,zL,KL,eD]}),nD=tD,hb=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),mb=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function rD(e){return e===null?!1:hb.exec(e)!==null||mb.exec(e)!==null}function oD(e){var t,n,r,o,s,i,l,a=0,c=null,u,d,f;if(t=hb.exec(e),t===null&&(t=mb.exec(e)),t===null)throw new Error("Date resolve error");if(n=+t[1],r=+t[2]-1,o=+t[3],!t[4])return new Date(Date.UTC(n,r,o));if(s=+t[4],i=+t[5],l=+t[6],t[7]){for(a=t[7].slice(0,3);a.length<3;)a+="0";a=+a}return t[9]&&(u=+t[10],d=+(t[11]||0),c=(u*60+d)*6e4,t[9]==="-"&&(c=-c)),f=new Date(Date.UTC(n,r,o,s,i,l,a)),c&&f.setTime(f.getTime()-c),f}function sD(e){return e.toISOString()}var iD=new Wt("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:rD,construct:oD,instanceOf:Date,represent:sD});function lD(e){return e==="<<"||e===null}var aD=new Wt("tag:yaml.org,2002:merge",{kind:"scalar",resolve:lD}),of=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function cD(e){if(e===null)return!1;var t,n,r=0,o=e.length,s=of;for(n=0;n<o;n++)if(t=s.indexOf(e.charAt(n)),!(t>64)){if(t<0)return!1;r+=6}return r%8===0}function uD(e){var t,n,r=e.replace(/[\r\n=]/g,""),o=r.length,s=of,i=0,l=[];for(t=0;t<o;t++)t%4===0&&t&&(l.push(i>>16&255),l.push(i>>8&255),l.push(i&255)),i=i<<6|s.indexOf(r.charAt(t));return n=o%4*6,n===0?(l.push(i>>16&255),l.push(i>>8&255),l.push(i&255)):n===18?(l.push(i>>10&255),l.push(i>>2&255)):n===12&&l.push(i>>4&255),new Uint8Array(l)}function dD(e){var t="",n=0,r,o,s=e.length,i=of;for(r=0;r<s;r++)r%3===0&&r&&(t+=i[n>>18&63],t+=i[n>>12&63],t+=i[n>>6&63],t+=i[n&63]),n=(n<<8)+e[r];return o=s%3,o===0?(t+=i[n>>18&63],t+=i[n>>12&63],t+=i[n>>6&63],t+=i[n&63]):o===2?(t+=i[n>>10&63],t+=i[n>>4&63],t+=i[n<<2&63],t+=i[64]):o===1&&(t+=i[n>>2&63],t+=i[n<<4&63],t+=i[64],t+=i[64]),t}function fD(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var pD=new Wt("tag:yaml.org,2002:binary",{kind:"scalar",resolve:cD,construct:uD,predicate:fD,represent:dD}),hD=Object.prototype.hasOwnProperty,mD=Object.prototype.toString;function vD(e){if(e===null)return!0;var t=[],n,r,o,s,i,l=e;for(n=0,r=l.length;n<r;n+=1){if(o=l[n],i=!1,mD.call(o)!=="[object Object]")return!1;for(s in o)if(hD.call(o,s))if(!i)i=!0;else return!1;if(!i)return!1;if(t.indexOf(s)===-1)t.push(s);else return!1}return!0}function gD(e){return e!==null?e:[]}var bD=new Wt("tag:yaml.org,2002:omap",{kind:"sequence",resolve:vD,construct:gD}),yD=Object.prototype.toString;function wD(e){if(e===null)return!0;var t,n,r,o,s,i=e;for(s=new Array(i.length),t=0,n=i.length;t<n;t+=1){if(r=i[t],yD.call(r)!=="[object Object]"||(o=Object.keys(r),o.length!==1))return!1;s[t]=[o[0],r[o[0]]]}return!0}function _D(e){if(e===null)return[];var t,n,r,o,s,i=e;for(s=new Array(i.length),t=0,n=i.length;t<n;t+=1)r=i[t],o=Object.keys(r),s[t]=[o[0],r[o[0]]];return s}var xD=new Wt("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:wD,construct:_D}),kD=Object.prototype.hasOwnProperty;function SD(e){if(e===null)return!0;var t,n=e;for(t in n)if(kD.call(n,t)&&n[t]!==null)return!1;return!0}function $D(e){return e!==null?e:{}}var CD=new Wt("tag:yaml.org,2002:set",{kind:"mapping",resolve:SD,construct:$D});nD.extend({implicit:[iD,aD],explicit:[pD,bD,xD,CD]});function Em(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var ED=new Array(256),OD=new Array(256);for(var Bo=0;Bo<256;Bo++)ED[Bo]=Em(Bo)?1:0,OD[Bo]=Em(Bo);function ID(e){return Array.from(new Set(e))}function Om(...e){let t,n,r;e.length===1?(t=0,r=1,[n]=e):[t,n,r=1]=e;const o=[];let s=t;for(;s<n;)o.push(s),s+=r||1;return o}function PD(e,t){if(!t||t==="all"||t==="*")return Om(1,e+1);const n=[];for(const r of t.split(/[,;]/g))if(!r.includes("-"))n.push(+r);else{const[o,s]=r.split("-",2);n.push(...Om(+o,s?+s+1:e+1))}return ID(n).filter(r=>r<=e).sort((r,o)=>r-o)}function vb(e){const t=C(()=>e.value.path),n=C(()=>_t.length),r=C(()=>Number.parseInt(t.value.split(/\//g).slice(-1)[0])||1),o=C(()=>za(r.value)),s=C(()=>_t.find(f=>f.path===`${r.value}`)),i=C(()=>{var f,m,h;return(h=(m=(f=s.value)==null?void 0:f.meta)==null?void 0:m.slide)==null?void 0:h.id}),l=C(()=>{var f,m;return((m=(f=s.value)==null?void 0:f.meta)==null?void 0:m.layout)||(r.value===1?"cover":"default")}),a=C(()=>_t.find(f=>f.path===`${Math.min(_t.length,r.value+1)}`)),c=C(()=>_t.filter(f=>{var m,h;return(h=(m=f.meta)==null?void 0:m.slide)==null?void 0:h.title}).reduce((f,m)=>(af(f,m),f),[])),u=C(()=>cf(c.value,s.value)),d=C(()=>uf(u.value));return{route:e,path:t,total:n,currentPage:r,currentPath:o,currentRoute:s,currentSlideId:i,currentLayout:l,nextRoute:a,rawTree:c,treeWithActiveStatuses:u,tree:d,downloadPDF:Uu,next:Rr,nextSlide:Ei,openInEditor:Pz,prev:Lr,prevSlide:Oi}}function gb(e,t,n){const r=z(0);Et(()=>{sn.afterEach(async()=>{await Et(),r.value+=1})});const o=C(()=>{var a,c;return r.value,((c=(a=t.value)==null?void 0:a.meta)==null?void 0:c.__clicksElements)||[]}),s=C(()=>{var a,c;return+(((c=(a=t.value)==null?void 0:a.meta)==null?void 0:c.clicks)??o.value.length)}),i=C(()=>n.value<_t.length-1||e.value<s.value),l=C(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:o,clicksTotal:s,hasNext:i,hasPrev:l}}const TD=["id"],MD=pe({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,r=zn(n,"clicksElements",t),o=C(()=>({height:`${Pd}px`,width:`${Tr}px`})),s=qn();Mr(()=>Promise.resolve().then(()=>TC),void 0).then(c=>s.value=c.default);const i=C(()=>n.clicks),l=gb(i,n.nav.currentRoute,n.nav.currentPage),a=C(()=>`${n.route.path.toString().padStart(3,"0")}-${(i.value+1).toString().padStart(2,"0")}`);return gt($e,ct({nav:{...n.nav,...l},configs:Ze,themeConfigs:C(()=>Ze.themeConfig)})),(c,u)=>{var d;return T(),Y("div",{id:a.value,class:"print-slide-container",style:xt(o.value)},[$(D(ub)),$(D(Nd),{is:(d=c.route)==null?void 0:d.component,"clicks-elements":D(r),"onUpdate:clicksElements":u[0]||(u[0]=f=>Ye(r)?r.value=f:null),clicks:i.value,"clicks-disabled":!1,class:ht(D(jd)(c.route)),route:c.route},null,8,["is","clicks-elements","clicks","class","route"]),s.value?(T(),ge(D(s),{key:0,page:+c.route.path},null,8,["page"])):je("v-if",!0),$(D(cb))],12,TD)}}}),Im=Ce(MD,[["__file","/home/runner/work/docker-slidev/docker-slidev/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),AD=pe({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var s;const t=e;ie($e);const n=z(((s=t.route.meta)==null?void 0:s.__clicksElements)||[]),r=C(()=>t.route),o=vb(r);return(i,l)=>(T(),Y(ze,null,[$(Im,{"clicks-elements":n.value,"onUpdate:clicksElements":l[0]||(l[0]=a=>n.value=a),clicks:0,nav:D(o),route:r.value},null,8,["clicks-elements","nav","route"]),D(ti)?je("v-if",!0):(T(!0),Y(ze,{key:0},ss(n.value.length,a=>(T(),ge(Im,{key:a,clicks:a,nav:D(o),route:r.value},null,8,["clicks","nav","route"]))),128))],64))}}),RD=Ce(AD,[["__file","/home/runner/work/docker-slidev/docker-slidev/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/PrintSlide.vue"]]),LD={id:"print-content"},DD=pe({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const t=e;ie($e);const n=C(()=>t.width),r=C(()=>t.width/Pr),o=C(()=>n.value/r.value),s=C(()=>o.value<Pr?n.value/Tr:r.value*Pr/Tr);let i=_t;Cn.value.query.range&&(i=PD(i.length,Cn.value.query.range).map(c=>i[c-1]));const l=C(()=>({"select-none":!Ze.selectable}));return gt(Dg,s),(a,c)=>(T(),Y("div",{id:"print-container",class:ht(l.value)},[p("div",LD,[(T(!0),Y(ze,null,ss(D(i),u=>(T(),ge(RD,{key:u.path,route:u},null,8,["route"]))),128))]),Sn(a.$slots,"controls")],2))}});const jD=Ce(DD,[["__file","/home/runner/work/docker-slidev/docker-slidev/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/PrintContainer.vue"]]),ND=pe({__name:"Print",setup(e){return ie($e),Jt(()=>{rs?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,n)=>(T(),Y(ze,null,[D(rs)?(T(),ge(db,{key:0})):je("v-if",!0),p("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:xt(D(Td))},[$(jD,{class:"w-full h-full",style:xt({background:"var(--slidev-slide-container-background, black)"}),width:D(go).width.value},null,8,["style","width"])],4)],64))}});const FD=Ce(ND,[["__file","/home/runner/work/docker-slidev/docker-slidev/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/Print.vue"]]);function Pm(e){return e.startsWith("/")?"/docker-slidev/"+e.slice(1):e}function zD(e,t=!1){const n=e&&["#","rgb","hsl"].some(o=>e.indexOf(o)===0),r={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?t?`linear-gradient(#0005, #0008), url(${Pm(e)})`:`url("${Pm(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return r.background||delete r.background,r}const BD={class:"my-auto w-full"},HD=pe({__name:"cover",props:{background:{default:""}},setup(e){const t=e;ie($e);const n=C(()=>zD(t.background,!0));return(r,o)=>(T(),Y("div",{class:"slidev-layout cover",style:xt(n.value)},[p("div",BD,[Sn(r.$slots,"default")])],4))}}),Tt=Ce(HD,[["__file","/home/runner/work/docker-slidev/docker-slidev/node_modules/.pnpm/@slidev+theme-default@0.21.2/node_modules/@slidev/theme-default/layouts/cover.vue"]]),VD=p("h1",null,"Docker 从入门到实践1",-1),WD=p("h2",null,"主讲人： 沈诗",-1),UD={__name:"1",setup(e){const t={theme:"seriph",background:"./bg01.webp",class:"text-center",srcSequence:"./pages/01.md"};return ie($e),(n,r)=>(T(),ge(Tt,Pt(kt(t)),{default:ce(()=>[VD,WD]),_:1},16))}},qD=Ce(UD,[["__file","/@slidev/slides/1.md"]]),KD={key:0,initial:{x:-80,opacity:0},enter:{x:200,opacity:1,scale:1.5,transition:{delay:100,duration:1300}}},YD=p("ul",null,[p("li",null,"docker"),p("li",null,"docker-原理"),p("li",null,"docker-镜像"),p("li",null,"docker-容器"),p("li",null,"docker-存储"),p("li",null,"docker-网络"),p("li",null,"如何通过docker部署前端服务"),p("li",null,"如何通过docker部署后端服务"),p("li",null,"推送docker服务到远程仓库")],-1),ZD=[YD],GD={__name:"2",setup(e){const t={layout:"cover",background:"./docker-bg1.jpeg",class:"text-left",srcSequence:"./pages/02目录.md"},n=ie($e);return(r,o)=>{const s=Kn("motion");return T(),ge(Tt,Pt(kt(t)),{default:ce(()=>[D(n).nav.currentPage===2?Oe((T(),Y("div",KD,ZD)),[[s]]):je("v-if",!0)]),_:1},16)}}},XD=Ce(GD,[["__file","/@slidev/slides/2.md"]]),JD=pe({__name:"gradient-text",setup(e){return ie($e),(t,n)=>(T(),ge(D(x8),null,{default:ce(()=>[Sn(t.$slots,"default")]),_:3}))}}),hs=Ce(JD,[["__file","/home/runner/work/docker-slidev/docker-slidev/components/gradient-text.vue"]]),QD=p("h3",null,"docker 概述",-1),ej={class:"flex items-center gap-10"},tj=p("br",null,null,-1),nj=p("div",null,[p("div",null,[p("p",null,[p("strong",null,"docker能做什么，解决了什么问题？")]),p("ul",null,[p("li",null,"减少繁琐配置")]),p("blockquote",null,[p("p",null,"虚拟机的最大好处就是能在你的电脑上配置不一样的平台或系统，同一个docker配置可以在不同环境下使用,降低硬件要求与应用环境的耦合度")]),p("ul",null,[p("li",null,"提高部署效率")]),p("blockquote",null,[p("p",null,"为达到程序在不同环境下运行，docker创建了可以移植的，自给自足的镜像，同一个镜像可以在不同环境下使用，从而统一了环境")]),p("ul",null,[p("li",null,"隔离应用")]),p("blockquote",null,[p("p",null,"一台服务器上运行多个不同应用，为减少不同应用依赖之间的冲突，docker把应用与所需依赖打包在一起，做成独立的单元，达到资源隔离")])])],-1),rj={__name:"3",setup(e){const t={layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",srcSequence:"./pages/02概述.md"};return ie($e),(n,r)=>{const o=hs,s=Nt;return T(),ge(Tt,Pt(kt(t)),{default:ce(()=>[QD,p("div",ej,[$(o,{class:"text-black"},{default:ce(()=>[R(" docker -- 码头工人,他要做的事情就是 搬运集装箱，docker就是做了这样的一件事 ")]),_:1}),$(s,{class:"w-50 absolute top-20 right-20 rounded-lg",src:"./worker.png"})]),tj,nj]),_:1},16)}}},oj=Ce(rj,[["__file","/@slidev/slides/3.md"]]),sj=p("p",null,[p("strong",null,"docker-原理")],-1),ij={class:"flex justify-between gap-20"},lj={class:"w-100 text-sm"},aj=p("p",null,[p("strong",null,"docker如何运行？")],-1),cj=p("ul",null,[p("li",null,"Docker 是以客户端和守护进程的方式来运行")],-1),uj=p("blockquote",null,[p("p",null,"在Docker 客户端中运行 Docker 各种命令。这些命令会传递给 Docker 的宿主机上运行的 Docker 的守护进程。Docker 的守护进程负责实现 Docker 的各种功能")],-1),dj=p("ul",null,[p("li",null,"Docker 的客户端与 Docker 的服务器端通过 Socket 等进行连接。")],-1),fj={class:"text-sm"},pj=p("p",null,[p("strong",null,"docker特点")],-1),hj=p("ul",null,[p("li",null,[R("Docker采用的是虚拟化技术， 和虚拟机一样拥有"),p("strong",null,"隔离性")]),p("li",null,[R("Docker几乎在所有容器中都兼容，这样"),p("strong",null,"更容易扩展和部署")]),p("li",null,[R("Docker属于内核级的虚拟化，"),p("strong",null,"效率更高")]),p("li",null,[R("Docker"),p("a",{href:"https://hub.docker.com/",target:"_blank",rel:"noopener"},"仓库开源"),R("，和github类似")])],-1),mj={__name:"4",setup(e){const t={layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",srcSequence:"./pages/03原理.md"};return ie($e),(n,r)=>{const o=Nt;return T(),ge(Tt,Pt(kt(t)),{default:ce(()=>[sj,p("div",ij,[p("div",lj,[aj,cj,$(o,{class:"w-200 rounded",src:"./docker守护进程.png"}),uj,dj,$(o,{class:"w-200 rounded",src:"./dockerCS运行方式.png"})]),p("div",fj,[pj,hj,$(o,{class:"w-80 my-2",src:"./docker特点.png"})])])]),_:1},16)}}},vj=Ce(mj,[["__file","/@slidev/slides/4.md"]]),gj=p("p",null,[p("strong",null,"docker与虚拟机相比")],-1),bj=p("blockquote",null,[p("p",null,"我们刚才说， Docker采用的是虚拟化技术， 和虚拟机一样拥有都拥有隔离性")],-1),yj={class:"flex justify-around gap-5 text-sm my-2"},wj={class:"w-100"},_j=p("ul",null,[p("li",null,"Docker有着比虚拟机更少的抽象层")],-1),xj=p("ul",null,[p("li",null,[R("docker利用的宿主的内核， 而虚拟机需要操作系统， 所以说，新建容器时不需要重新加载内核， 而vm 需要加载操作系统，分钟级别加载 docker省略了加载操作过程，"),p("strong",null,"秒级别")])],-1),kj={class:"text-sm"},Sj=p("ul",null,[p("li",null,"docker与虚拟机对比")],-1),$j=p("ul",null,[p("li",null,"可以看出，Docker是一个虚拟环境容器，可以将你的可执行文件、配置文件及一切其他你需要的文件一并打包到这个容器中，并发布和应用到任意平台")],-1),Cj={__name:"5",setup(e){const t={layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",srcSequence:"./pages/03原理-与vm对比.md"};return ie($e),(n,r)=>{const o=hs,s=Nt;return T(),ge(Tt,Pt(kt(t)),{default:ce(()=>[gj,$(o,{class:"text-yellow text-sm"},{default:ce(()=>[R(" Docker的误解： Docker 是轻量级的虚拟机 ")]),_:1}),bj,p("div",yj,[p("div",wj,[_j,$(s,{class:"w-100",src:"./vm&docker.png"}),xj]),p("div",kj,[Sj,$(s,{class:"w-120",src:"./与虚拟机对比.png"}),$j,$(o,{class:"text-red"},{default:ce(()=>[R(" 那么，不同的容器是如何在docker上正常运行的呢？ ")]),_:1})])])]),_:1},16)}}},Ej=Ce(Cj,[["__file","/@slidev/slides/5.md"]]),Oj=pe({__name:"carousel",props:{autoplay:{type:Boolean,required:!0},draggable:{type:Boolean,required:!0},direction:{type:String,required:!0},arrow:{type:Boolean,required:!0}},setup(e){const t=e;return ie($e),(n,r)=>(T(),Y("div",null,[$(D(r8),{autoplay:t.autoplay,draggable:t.draggable,direction:t.direction,"show-arrow":t.arrow},{default:ce(()=>[Sn(n.$slots,"default")]),_:3},8,["autoplay","draggable","direction","show-arrow"])]))}}),Wr=Ce(Oj,[["__file","/home/runner/work/docker-slidev/docker-slidev/components/carousel.vue"]]),Ij={class:"flex justify-around gap-20"},Pj={class:"text-sm w-120"},Tj=p("p",null,[p("strong",null,"Namespaces")],-1),Mj=p("ul",null,[p("li",null,"容器使用Linux的Namespace技术，将容器内外的资源隔离开，容器里的进程仍然运行在主机的操作系统上"),p("li",null,"Namespaces允许一个进程以及它的子进程从共享的宿主机内核资源里获得一个仅自己可见的隔离区域，让同一个Namespace下的所有进程感知彼此变化，对外界进程一无所知，仿佛运行在一个独占的操作系统中"),p("li",null,"Namespace的6项隔离看似完整，实际上依旧没有完全隔离Linux资源。")],-1),Aj=p("p",null,[p("strong",null,"Cgroup")],-1),Rj=p("p",{class:"text-xs bg-white text-black py-1 px-1 rounded"},[R(" Cgroups 是 control groups 的缩写，是 Linux 内核提供的一种可以 "),p("b",null,"限制、记录、隔离进程组"),R("（process groups）所使用的物理资源（如 CPU、Memory、IO 等等）的机制。 ")],-1),Lj=p("ul",{class:"text-sm"},[p("li",null,"限制进程组可以使用的资源数量: 设置存储上限，达到限额再申请 "),p("li",null,"控制进程组的优先级: 使用cpu子系统为某个进程组分配特定 cpu share。"),p("li",null,"记录进程组使用的资源数量: 记录某个进程组使用的cpu时间"),p("li",null,"控制进程组的启动: 可以将进程组挂起和恢复")],-1),Dj={__name:"6",setup(e){const t={layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",srcSequence:"./pages/03原理-隔离.md"};return ie($e),(n,r)=>{const o=hs,s=Nt,i=Wr;return T(),ge(Tt,Pt(kt(t)),{default:ce(()=>[$(o,{class:"text-sm font-bold text-yellow"},{default:ce(()=>[R(" Docker底层的核心技术： 隔离 ")]),_:1}),p("div",Ij,[p("div",Pj,[Tj,$(i,{arrow:"",draggable:"",class:"w-100 h-53"},{default:ce(()=>[$(s,{class:"w-100 rounded",src:"./docker 隔离机制.png"}),$(s,{class:"w-100 rounded",src:"./docker进程隔离.svg"}),$(s,{class:"w-100 rounded",src:"./docker 资源隔离.png"})]),_:1}),Mj]),p("div",null,[Aj,$(s,{class:"w-80 bg-white py-5 px-5 rounded",src:"./docker cgroup.png"}),R(),Rj,Lj])])]),_:1},16)}}},jj=Ce(Dj,[["__file","/@slidev/slides/6.md"]]),Nj=p("h4",null,"docker 三大概念",-1),Fj={class:"flex my-5 gap-10"},zj=p("div",{class:"text-sm"},[p("ul",null,[p("li",null,[p("strong",null,"镜像"),R("：")])]),p("blockquote",null,[p("p",null,"docker 镜像是一种特殊的文件系统，除了提供容器运行时所需的程序，库，资源，配置等文件，还包含运行时的一些配置参数")]),p("br"),p("ul",null,[p("li",null,[p("strong",null,"容器"),R("：")])]),p("blockquote",null,[p("p",null,"docker容器是由镜像创建的实例，类似于一个轻量级的沙箱，相互隔离。当镜像启动一个容器时，docker会在镜像的最上层建立一个可写的容器层。")]),p("br"),p("ul",null,[p("li",null,[p("strong",null,"仓库"),R("：")])]),p("blockquote",null,[p("p",null,[R("docker仓库类似一个代码库，用来存放镜像，每个仓库里面存放的是某一类镜像，"),p("a",{href:"https://hub.docker.com/_/centos/tags",target:"_blank",rel:"noopener"},"通过tag区分"),R("。")])])],-1),Bj={__name:"7",setup(e){const t={layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",srcSequence:"./pages/04三大核心概念.md"};return ie($e),(n,r)=>{const o=hs,s=Nt;return T(),ge(Tt,Pt(kt(t)),{default:ce(()=>[Nj,$(o,{class:"text-sm text-yellow"},{default:ce(()=>[R(" Docker的三个基本概念： 镜像， 容器， 仓库 ")]),_:1}),p("div",Fj,[p("div",null,[$(s,{class:"w-100 rounded",src:"./三大组成关系.png"})]),zj])]),_:1},16)}}},Hj=Ce(Bj,[["__file","/@slidev/slides/7.md"]]),Vj=p("h4",null,"docker镜像",-1),Wj={class:"flex justify-start gap-10"},Uj=p("div",null,[p("div",{class:"font-bold"},"常用命令"),p("div",null,[p("pre",{class:"slidev-code language-sh"},[p("code",null,[p("span",{class:"line"},[p("span",{class:"token comment"},"# docker信息")]),R(`
`),p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(" version "),p("span",{class:"token comment"},"#版本信息")]),R(`
`),p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(" info "),p("span",{class:"token comment"},"#系统信息，包括镜像和容器数量")]),R(`
`),p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(),p("span",{class:"token parameter variable"},"--help")])])])]),p("div",null,[p("pre",{class:"slidev-code language-sh"},[p("code",null,[p("span",{class:"line"},[p("span",{class:"token comment"},"# 镜像仓库")]),R(`
`),p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(" login "),p("span",{class:"token parameter variable"},"-u"),R(" 用户名 "),p("span",{class:"token parameter variable"},"-p"),R(" 密码")]),R(`
`),p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(" push  "),p("span",{class:"token comment"},"#  上传本地镜像")]),R(`
`),p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(" search "),p("span",{class:"token comment"},"# 从Docker Hub查找镜像")]),R(`
`),p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(" pull  "),p("span",{class:"token comment"},"# 拉取镜像")])])]),je(" [docker hub](https://hub.docker.com/) ")]),p("div",null,[p("pre",{class:"slidev-code language-sh"},[p("code",null,[p("span",{class:"line"},[p("span",{class:"token comment"},"# 本地镜像")]),R(`
`),p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(" images "),p("span",{class:"token comment"},"# 列出本地镜像。")]),R(`
`),p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(" rmi "),p("span",{class:"token comment"},"# 删除本地一个或多个镜像。")]),R(`
`),p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(" tag "),p("span",{class:"token comment"},"# 标记本地镜像，将其归入某一仓库。")]),R(`
`),p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(" build "),p("span",{class:"token comment"},"# 使用 Dockerfile 创建镜像。")]),R(`
`),p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(),p("span",{class:"token function"},"history"),R(),p("span",{class:"token comment"},"# 查看指定镜像的创建历史。")]),R(`
`),p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(" save "),p("span",{class:"token comment"},"# 将指定镜像保存成 tar 归档文件。")])])])])],-1),qj={class:""},Kj=p("div",{class:"font-bold mb-2"},"运行实例",-1),Yj={__name:"8",setup(e){const t={layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",srcSequence:"./pages/04镜像-常用操作.md"};return ie($e),(n,r)=>{const o=Nt,s=Wr;return T(),ge(Tt,Pt(kt(t)),{default:ce(()=>[Vj,p("div",Wj,[Uj,p("div",qj,[Kj,$(s,{arrow:"",draggable:"",class:"w-100 h-90"},{default:ce(()=>[$(o,{class:"w-100 rounded",src:"./docker命令实战/version01.png"}),$(o,{class:"w-100 rounded",src:"./docker命令实战/info.png"}),$(o,{class:"w-100 rounded",src:"./docker命令实战/login.png"}),$(o,{class:"w-100 rounded",src:"./docker命令实战/search.png"}),$(o,{class:"w-100 rounded",src:"./docker命令实战/pull.png"}),$(o,{class:"w-100 rounded",src:"./docker命令实战/public.png"}),$(o,{class:"w-100 rounded",src:"./docker命令实战/rmi.png"}),$(o,{class:"w-100 rounded",src:"./docker命令实战/history.png"})]),_:1})])])]),_:1},16)}}},Zj=Ce(Yj,[["__file","/@slidev/slides/8.md"]]),Gj=pe({__name:"space",setup(e){return ie($e),(t,n)=>(T(),ge(D(v8),null,{default:ce(()=>[Sn(t.$slots,"default")]),_:3}))}}),ms=Ce(Gj,[["__file","/home/runner/work/docker-slidev/docker-slidev/components/space.vue"]]),Xj=p("p",null,[p("strong",null,"联合文件系统（UnionFs）")],-1),Jj={class:"font-bold flex gap-2"},Qj=p("div",{class:"text-xs"},[p("li",null,"Docker 镜像的最底层是 bootfs，与linux系统一样"),p("li",null,"通过分层来进行继承，基于基础镜像,制作各种具体的应用镜像"),p("li",null,"镜像里面是没有内核的,启动容器时直接使用宿主机的内核"),p("li",null,"Docker 镜像要采用这种分层结构,实现资源共享")],-1),eN=p("div",{class:"h-1 w-220 border-dashed border-1 my-1"},null,-1),tN={class:"flex gap-12"},nN=p("p",{class:"text-xs"},"镜像实例",-1),rN=p("p",{class:"text-xs"},"如何查看镜像分层呢？",-1),oN=p("pre",{class:"slidev-code language-sh"},[p("code",null,[p("span",{class:"line"},[R("  "),p("span",{class:"token function"},"docker"),R(" inspect 镜像")])])],-1),sN={__name:"9",setup(e){const t={layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",srcSequence:"./pages/04镜像-联合文件系统.md"};return ie($e),(n,r)=>{const o=di("gradien-text"),s=ms,i=Nt,l=Wr;return T(),ge(Tt,Pt(kt(t)),{default:ce(()=>[Xj,$(o,{class:"text-sm text-yellow"},{default:ce(()=>[R("介绍如何创建镜像之前，我们先讲下联合文件系统")]),_:1}),$(s,{class:"text-xs my-2"},{default:ce(()=>[R(" 联合文件系统是一种分层、轻量级并且高性能的文件系统，它支持对文件系统的修改作为一次提交来一层层的叠加，同时可以将不同目录挂载到同一个虚拟文件系统下。 ")]),_:1}),p("div",Jj,[$(i,{class:"w-30",src:"./docker 文件分层.webp"}),Qj]),eN,p("div",tN,[p("div",null,[nN,$(l,{arrow:"",draggable:"",class:"w-80"},{default:ce(()=>[$(i,{class:"w-100 rounded",src:"./docker命令实战/文件分层/镜像分层下载.png"}),$(i,{class:"w-100 rounded",src:"./docker命令实战/文件分层/镜像分层下载的好处.png"}),$(i,{class:"w-100 rounded",src:"./docker命令实战/文件分层/镜像删除.png"})]),_:1})]),p("div",null,[rN,oN,$(i,{class:"w-100 rounded",src:"./docker命令实战/文件分层/查看镜像分层信息.png"})])])]),_:1},16)}}},iN=Ce(sN,[["__file","/@slidev/slides/9.md"]]),lN={class:"flex gap-5"},aN=p("div",null,[p("h5",null,"创建步骤"),p("ul",{class:"w-50 h-20 rounded-lg bg-slate-50 text-black p-2 overflow-hidden"},[p("li",{class:"text-sm font-bold"},"基于现有镜像创建"),p("ul",{class:"text-xs font-bold px-4"},[p("li",null,"启动镜像，并修改"),p("li",null,"生成新的镜像")])])],-1),cN=p("h5",null,"原理",-1),uN=p("h5",null,"实战过程",-1),dN=p("div",{class:"w-300 border-1 border-dashed my-2"},null,-1),fN={class:"flex my-2 gap-5"},pN=p("div",null,[p("h5",null,"创建步骤"),p("ul",{class:"w-50 bg-lime-200 rounded text-black p-2 overflow-hidden"},[p("li",{class:"text-sm font-bold"},"基于dockerFile创建"),p("ul",{class:"text-xs font-bold px-4"},[p("li",null,"dockerFile结构"),p("li",null,"docker镜像的结构分层"),p("li",null,"联合文件系统 unionFs"),p("li",null,"dockerFile常用指令")])])],-1),hN=p("h5",null,"原理",-1),mN=p("h5",null,"实战过程",-1),vN={__name:"10",setup(e){const t={layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",srcSequence:"./pages/04镜像-创建.md"};return ie($e),(n,r)=>{const o=ms,s=Nt,i=Wr;return T(),ge(Tt,Pt(kt(t)),{default:ce(()=>[$(o,{class:"font-800 text-black my-2"},{default:ce(()=>[R("如何创建镜像？")]),_:1}),p("div",lN,[aN,p("div",null,[cN,$(s,{class:"w-80 h-50 bg-white py-2 px-2 rounded",src:"./docker命令实战/nginx-create-image09.png"})]),p("div",null,[uN,$(i,{arrow:"",draggable:"",class:"w-80 h-45"},{default:ce(()=>[$(s,{class:"w-100 rounded",src:"./docker命令实战/nginx-create-image01.png"}),$(s,{class:"w-100 rounded",src:"./docker命令实战/nginx-create-image05.png"}),$(s,{class:"w-100 rounded",src:"./docker命令实战/nginx-create-image02.png"}),$(s,{class:"w-100 rounded",src:"./docker命令实战/nginx-create-image03.png"}),$(s,{class:"w-100 rounded",src:"./docker命令实战/nginx-create-image04.png"}),$(s,{class:"w-100 rounded",src:"./docker命令实战/nginx-create-image08.png"}),$(s,{class:"w-100 rounded",src:"./docker命令实战/nginx-create-image06.png"}),$(s,{class:"w-100 rounded",src:"./docker命令实战/nginx-create-image07.png"})]),_:1})])]),dN,p("div",fN,[pN,p("div",null,[hN,$(i,{arrow:"",draggable:"",class:"w-80 h-45"},{default:ce(()=>[$(s,{class:"w-100 rounded",src:"./docker命令实战/nginx-dockerfile-image01.webp"}),$(s,{class:"w-100 bg-white py-2 px-2 rounded",src:"./docker命令实战/nginx-dockerfile-image02.png"})]),_:1})]),p("div",null,[mN,$(i,{arrow:"",draggable:"",class:"w-80 h-45"},{default:ce(()=>[$(s,{class:"w-100 rounded",src:"./docker命令实战/dockerfile-01.png"}),$(s,{class:"w-100 rounded",src:"./docker命令实战/dockerfile-02.png"}),$(s,{class:"w-100 rounded",src:"./docker命令实战/dockerfile-03.png"}),$(s,{class:"w-100 rounded",src:"./docker命令实战/dockerfile-04.png"}),$(s,{class:"w-100 rounded",src:"./docker命令实战/dockerfile-05.png"})]),_:1})])])]),_:1},16)}}},gN=Ce(vN,[["__file","/@slidev/slides/10.md"]]),bN=p("p",null,[p("strong",null,"docker容器")],-1),yN=p("blockquote",null,[p("p",null,"docker容器可以看作是镜像创建的一个运行实例， 每个容器之间是相互隔离的，可以看作是一个轻量级的linux环境")],-1),wN={class:"flex justify-around gap-10 my-2"},_N=p("div",null,[p("h6",null,"容器生命周期管理"),p("pre",{class:"slidev-code language-sh"},[p("code",null,[p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(" run "),p("span",{class:"token comment"},"# 创建一个新的容器并运行一个命令")]),R(`
`),p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(" start "),p("span",{class:"token comment"},"# 启动一个或多个已经被停止的容器")]),R(`
`),p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(" stop "),p("span",{class:"token comment"},"# 停止一个运行中的容器")]),R(`
`),p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(),p("span",{class:"token function"},"ps"),R(),p("span",{class:"token comment"},"# 列出容器")]),R(`
`),p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(),p("span",{class:"token function"},"kill"),R(),p("span",{class:"token comment"},"# 杀掉一个运行中的容器。")]),R(`
`),p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(),p("span",{class:"token function"},"rm"),R(),p("span",{class:"token comment"},"# 删除一个或多个容器。")]),R(`
`),p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(" pause "),p("span",{class:"token comment"},"# 暂停容器中所有的进程。")]),R(`
`),p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(" unpause "),p("span",{class:"token comment"},"# 恢复容器中所有的进程。")]),R(`
`),p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(" create "),p("span",{class:"token comment"},"# 创建一个新的容器但不启动它")]),R(`
`),p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(),p("span",{class:"token builtin class-name"},"exec"),R(),p("span",{class:"token comment"},"# 在运行的容器中执行命令")])])]),p("div",{class:"bg-#eee rounded color-#000"},[p("li",{class:"text-xs line-10"}," docker stop：在docker stop命令执行的时候，会先向容器中PID为1的进程发送系统信号SIGTERM，然后等待容器中的应用程序终止执行，如果等待时间达到设定的超时时间，或者默认的10秒，会继续发送SIGKILL的系统信号强行kill掉进程。 "),p("li",{class:"text-xs"}," docker kill：默认情况下，docker kill命令不会给容器中的应用程序有任何等待的机会。它会直接发出SIGKILL的系统信号，以强行终止容器中程序的运行。 ")])],-1),xN=p("h6",{class:"mb-1"},"docker容器",-1),kN={__name:"11",setup(e){const t={layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",srcSequence:"./pages/05容器.md"};return ie($e),(n,r)=>{const o=Nt,s=Wr;return T(),ge(Tt,Pt(kt(t)),{default:ce(()=>[bN,yN,p("div",wN,[_N,p("div",null,[xN,$(s,{arrow:"",draggable:"",class:"w-100 h-90"},{default:ce(()=>[$(o,{class:"w-100 rounded",src:"./docker命令实战/run.png"}),$(o,{class:"w-100 rounded",src:"./docker命令实战/port.png"}),$(o,{class:"w-100 rounded",src:"./docker命令实战/port1.png"}),$(o,{class:"w-100 rounded",src:"./docker命令实战/start.png"}),$(o,{class:"w-100 rounded",src:"./docker命令实战/stop.png"}),$(o,{class:"w-100 rounded",src:"./docker命令实战/rm.png"}),$(o,{class:"w-100 rounded",src:"./docker命令实战/create.png"}),$(o,{class:"w-100 rounded",src:"./docker命令实战/exec.png"})]),_:1})])])]),_:1},16)}}},SN=Ce(kN,[["__file","/@slidev/slides/11.md"]]),$N=p("p",null,[p("strong",null,"docker容器的使用")],-1),CN={class:"flex justify-around gap-10"},EN=p("div",{class:"w-100"},[p("h6",null,"容器生命周期管理"),p("pre",{class:"slidev-code language-sh"},[p("code",null,[p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(" inspect "),p("span",{class:"token comment"},"# 获取容器/镜像的元数据。")]),R(`
`),p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(),p("span",{class:"token function"},"top"),R(),p("span",{class:"token comment"},"# 查看容器中运行的进程信息")]),R(`
`),p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(" attach "),p("span",{class:"token comment"},"# 连接到正在运行中的容器。")]),R(`
`),p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(),p("span",{class:"token builtin class-name"},"exec"),R(),p("span",{class:"token comment"},"# 在运行的容器中执行命令")]),R(`
`),p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(" events "),p("span",{class:"token comment"},"# 从服务器获取实时事件")]),R(`
`),p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(" logs "),p("span",{class:"token comment"},"# 获取容器的日志")]),R(`
`),p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(),p("span",{class:"token function"},"wait"),R(),p("span",{class:"token comment"},"# 阻塞运行直到容器停止，然后打印出它的退出代码。")]),R(`
`),p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(),p("span",{class:"token builtin class-name"},"export"),R(),p("span",{class:"token comment"},"# 将文件系统作为一个tar归档文件导出到STDOUT。")]),R(`
`),p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(),p("span",{class:"token function"},"import"),R(),p("span",{class:"token comment"},"# 导入文件 成为镜像。")]),R(`
`),p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(" port "),p("span",{class:"token comment"},"# 列出指定的容器的端口映射。")]),R(`
`),p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(" stats "),p("span",{class:"token comment"},"# 显示容器资源使用情况，CPU、内存、网络 I/O 等。")])])])],-1),ON=p("h6",null,"使用docker",-1),IN={__name:"12",setup(e){const t={layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",srcSequence:"./pages/05容器-常用命令.md"};return ie($e),(n,r)=>{const o=Nt,s=Wr,i=hs,l=Kn("click");return T(),ge(Tt,Pt(kt(t)),{default:ce(()=>[$N,p("div",CN,[EN,p("div",null,[ON,$(s,{arrow:"",draggable:"",class:"w-100 h-80"},{default:ce(()=>[$(o,{class:"w-100 rounded",src:"./docker命令实战/top.png"}),$(o,{class:"w-100 rounded",src:"./docker命令实战/attach.png"}),$(o,{class:"w-100 rounded",src:"./docker命令实战/attachVSexec.png"}),$(o,{class:"w-100 rounded",src:"./docker命令实战/events.png"}),$(o,{class:"w-100 rounded",src:"./docker命令实战/logs.png"}),$(o,{class:"w-100 rounded",src:"./docker命令实战/export.png"}),$(o,{class:"w-100 rounded",src:"./docker命令实战/import.png"}),$(o,{class:"w-100 rounded",src:"./docker命令实战/port_container.png"}),$(o,{class:"w-100 rounded",src:"./docker命令实战/stats.png"})]),_:1})])]),Oe((T(),ge(i,{class:"py-1 px-2 text-yellow"},{default:ce(()=>[R(" docker镜像和容器的命令都学会了，那么接下来，我们看一些比较重要的内容！！ ")]),_:1})),[[l]])]),_:1},16)}}},PN=Ce(IN,[["__file","/@slidev/slides/12.md"]]),TN=p("p",null,[p("strong",null,"docker 数据卷")],-1),MN={class:"flex mt-5 item-start gap-10"},AN=p("ul",{class:"text-sm mb-10"},[p("li",null,"数据卷可以在容器之间共享或重用数据"),p("li",null,"数据卷中的更改可以立即生效"),p("li",null,"数据卷中的更改不会包含在镜像的更新中"),p("li",null,"数据卷默认会一直存在，即使容器被删除"),p("li",null,"数据卷的生命周期一直持续到没有容器使用它为止")],-1),RN={class:"gap-5 item-start"},LN=p("pre",{class:"slidev-code language-sh"},[p("code",null,[p("span",{class:"line"},[p("span",{class:"token comment"},"# 宿主机文件复制到容器内")]),R(`
`),p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(),p("span",{class:"token function"},"cp"),R(),p("span",{class:"token punctuation"},"["),R("OPTIONS"),p("span",{class:"token punctuation"},"]"),R(" 主机地址: 容器内文件地址")]),R(`
`),p("span",{class:"line"}),R(`
`),p("span",{class:"line"},[p("span",{class:"token comment"},"# 容器内文件复制到宿主机")]),R(`
`),p("span",{class:"line"},[p("span",{class:"token function"},"docker"),R(),p("span",{class:"token function"},"cp"),R(" 宿主机地文件址:宿主机地址")])])],-1),DN={__name:"13",setup(e){const t={layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",srcSequence:"./pages/06数据卷.md"};return ie($e),(n,r)=>{const o=ms,s=Nt,i=Wr,l=hs,a=Kn("click");return T(),ge(Tt,Pt(kt(t)),{default:ce(()=>[TN,$(o,{class:"text-sm"},{default:ce(()=>[R(" 当docker容器被删除时，所修改的数据也会被删除，要实现数据的持久化，需要将容器的数据映射到宿主机上 ")]),_:1}),$(o,{class:"text-sm"},{default:ce(()=>[R(" 数据卷（volume) 是一个虚拟目录，指向宿主机文件系统中的某个目录 ")]),_:1}),p("div",MN,[p("div",null,[$(s,{class:"w-80 rounded mt-2",src:"./容器数据卷.png"}),AN]),p("div",RN,[LN,$(i,{arrow:"",draggable:"",class:"w-100 h-60"},{default:ce(()=>[$(s,{class:"w-100 rounded",src:"./docker命令实战/volume-create.png"}),$(s,{class:"w-100 rounded",src:"./docker命令实战/volume-test.png"}),$(s,{class:"w-100 rounded",src:"./docker命令实战/volume-principle.png"})]),_:1})])]),Oe((T(),ge(l,{class:"text-sm text-yellow mb-2"},{default:ce(()=>[R(" 容器是相对独立的环境，通过数据卷可以挂载数据到宿主机，但是还是没实现容器之间的互连，那么，容器之间是怎么相连的呢？ ")]),_:1})),[[a]])]),_:1},16)}}},jN=Ce(DN,[["__file","/@slidev/slides/13.md"]]),NN=p("p",null,[p("strong",null,"docker网络")],-1),FN={class:"flex gap-5 justify-start"},zN=p("div",{class:"text-black text-sm"},"当你安装 Docker 时，它会自动创建三个网络",-1),BN=p("div",{class:"h-200 border-2 border-dashed"},null,-1),HN={class:"flex gap-2"},VN=p("div",{class:"text-xs w-70 bg-#fff rounded text-black"},[p("div",{class:"font-bold mt-2 ml-2"},"bridge"),p("li",{class:"leading-2"},"Docker server 启动时会在主机上创建一个docker0 的虚拟网桥"),p("li",null,"具体流程：创建一个容器--> docker0 分配虚拟网卡"),p("li",null,"通信方式: 容器-->docker0-->宿主机")],-1),WN={class:"flex my-5 gap-2"},UN=p("div",{class:"text-xs w-70 h-30 bg-#fff rounded text-black"},[p("div",{class:"font-bold mt-2 ml-2"},"host"),p("li",null,"该模式下容器是不会拥有自己的ip地址，而是使用宿主机的ip地址和端口"),p("li",null,"容器可以直接使用宿主机的IP地址与外界通信")],-1),qN={class:"flex gap-2"},KN=p("div",{class:"text-xs w-70 bg-#fff rounded text-black"},[p("div",{class:"font-bold mt-2 ml-2"},"none"),p("li",null,"关闭模式, 无法连外网"),p("li",null,"容器只有lo回环网络")],-1),YN={class:"flex gap-25 my-2"},ZN=p("div",{class:"flex gap-5"},null,-1),GN={__name:"14",setup(e){const t={layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",srcSequence:"./pages/07网络.md"};return ie($e),(n,r)=>{const o=Nt;return T(),ge(Tt,Pt(kt(t)),{default:ce(()=>[NN,p("div",FN,[p("div",null,[zN,$(o,{class:"w-80 rounded my-2",src:"./three-network.webp"}),$(o,{class:"w-80 rounded",src:"./network-bridge.webp"})]),BN,p("div",null,[p("div",HN,[VN,$(o,{class:"w-50 rounded",src:"./docker命令实战/bridge_net.png"})]),p("div",WN,[UN,$(o,{class:"w-50 rounded",src:"./docker命令实战/host_net.png"})]),p("div",qN,[KN,$(o,{class:"w-50 rounded",src:"./docker命令实战/none_net.png"})])])]),p("div",YN,[$(o,{class:"w-50 rounded",src:"./docker命令实战/bridge_net.png"})]),ZN]),_:1},16)}}},XN=Ce(GN,[["__file","/@slidev/slides/14.md"]]),JN=p("p",null,[p("strong",null,"docker自定义网络")],-1),QN={class:"flex gap-5"},eF=p("h5",null,"容器之间的连通关系",-1),tF={class:"text-xs bg-#fff mt-2 rounded text-black p-2"},nF=p("li",null,"使用bridge的网卡都是一对一对的",-1),rF=p("li",null,"docker中所有网络接口都是虚拟的，虚拟的转发效率高",-1),oF=p("li",null,"veth-pair成对出现充当一个桥梁，连接各种虚拟网络设备的",-1),sF=[nF,rF,oF],iF={class:"relative"},lF={class:"text-xs bg-#fff mt-2 rounded text-black p-2"},aF=p("li",null,"Docker0的问题：不支持容器名链接访问！",-1),cF=p("li",null,"通过link可以解决使用容器名单向连通的问题",-1),uF=p("li",null,"–link 就是在hosts配置中增加了一个映射",-1),dF=[aF,cF,uF],fF={class:"relative"},pF={class:"text-xs bg-#fff mt-2 rounded text-black p-2"},hF=p("li",null,"自定义网络修复了docker0的容器之间无法用容器名相互ping通的问题",-1),mF=p("li",null,"namespace实现了网络隔离",-1),vF=p("li",null,"使用connect建立不同网络容器之间的连接",-1),gF=[hF,mF,vF],bF={class:"flex w-220 mt-2 ml-5 pl-5 py-2 rounded text-yellow"},yF={__name:"15",setup(e){const t={layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",hide:!1,srcSequence:"./pages/07网络-自定义网络.md"};return ie($e),(n,r)=>{const o=Nt,s=Wr,i=Kn("click");return T(),ge(Tt,Pt(kt(t)),{default:ce(()=>[JN,p("div",QN,[p("div",null,[eF,Oe((T(),ge(s,{arrow:"",draggable:"",class:"w-60 h-50"},{default:ce(()=>[$(o,{class:"w-100 rounded",src:"./docker命令实战/bridge_inspect.png"}),$(o,{class:"w-100 rounded",src:"./docker命令实战/box_ping_box1.png"})]),_:1})),[[i]]),Oe((T(),Y("div",tF,sF)),[[i]])]),p("div",iF,[Oe((T(),Y("h5",null,[R("使用link的方式")])),[[i]]),Oe((T(),ge(s,{arrow:"",draggable:"",class:"w-80 h-50"},{default:ce(()=>[$(o,{class:"w-100 rounded",src:"./docker命令实战/box2--link.png"}),$(o,{class:"w-100 rounded",src:"./docker命令实战/box2_links.png"})]),_:1})),[[i]]),Oe((T(),Y("div",lF,dF)),[[i]])]),p("div",fF,[Oe((T(),Y("h5",null,[R("使用自定义网络")])),[[i]]),Oe((T(),ge(s,{arrow:"",draggable:"",class:"w-80 h-50"},{default:ce(()=>[$(o,{class:"w-100 rounded",src:"./docker命令实战/network_cus_cishy02.png"}),$(o,{class:"w-100 rounded",src:"./docker命令实战/network_cus_cishy01.png"}),$(o,{class:"w-100 rounded",src:"./docker命令实战/network_cus_connect01.png"}),$(o,{class:"w-100 rounded",src:"./docker命令实战/network_cus_connect.png"}),$(o,{class:"w-100 rounded",src:"./docker命令实战/network_cus_connect_box.png"})]),_:1})),[[i]]),Oe((T(),Y("div",pF,gF)),[[i]])])]),Oe((T(),Y("div",bF,[R(" 到这里，我们把docker的基本知识与使用都过了一遍，接下来，我们看看如何实战过程中使用吧! ")])),[[i]])]),_:1},16)}}},wF=Ce(yF,[["__file","/@slidev/slides/15.md"]]),_F=pe({__name:"timeline",setup(e){return ie($e),(t,n)=>(T(),ge(D(F8),null,{default:ce(()=>[Sn(t.$slots,"default")]),_:3}))}}),sf=Ce(_F,[["__file","/home/runner/work/docker-slidev/docker-slidev/components/timeline.vue"]]),xF=pe({__name:"timeline-item",setup(e){return ie($e),(t,n)=>(T(),ge(D(B8)))}}),lf=Ce(xF,[["__file","/home/runner/work/docker-slidev/docker-slidev/components/timeline-item.vue"]]),kF=p("p",null,[p("strong",null,"docker部署一个前端服务")],-1),SF={class:"flex h-400"},$F={class:"position-absolute text-sm top-22"},CF=p("div",{class:"bg-white text-black p-2 rounded"}," pnpm create vite@latest fe-service --template react-ts ",-1),EF={class:"mt-2"},OF={class:"position-absolute text-sm top-22"},IF={class:"mt-2"},PF={class:"position-absolute text-sm top-22"},TF={class:"mt-2"},MF={class:"position-absolute text-sm top-22"},AF={class:"mt-2"},RF={class:"position-absolute text-sm top-22"},LF={class:"mt-2"},DF={class:"position-absolute text-sm top-22"},jF={class:"mt-2"},NF={__name:"16",setup(e){const t={layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",hide:!1,srcSequence:"./pages/08搭建前端服务.md"};return ie($e),(n,r)=>{const o=lf,s=sf,i=ms,l=Nt,a=Kn("click"),c=Kn("click-hide");return T(),ge(Tt,Pt(kt(t)),{default:ce(()=>[kF,p("div",SF,[p("div",null,[$(s,{size:"large"},{default:ce(()=>[$(o,{type:"success",title:"创建前端项目",content:"使用脚手架创建"}),$(o,{type:"info",title:"nginx配置部署",content:"使用nginx部署前端服务"}),$(o,{type:"error",title:"配置Dockerfile",content:"dockerfile配置"}),$(o,{type:"info",title:"创建镜像",content:"使用dockerfile创建镜像"}),$(o,{type:"success",title:"开启容器",content:"运行容器打开端口号"}),$(o,{type:"warning",title:"自动化部署",content:"每commit一次代码，打最新的镜像"})]),_:1})]),p("div",null,[Oe((T(),Y("div",null,[Oe((T(),Y("div",$F,[$(i,{class:"font-bold text-yellow mb-2"},{default:ce(()=>[R("1.创建前端项目")]),_:1}),p("div",null,[CF,p("div",EF,[$(l,{class:"w-50 rounded",src:"./docker命令实战/fe-service-directory.png"}),$(l,{class:"w-100 rounded ml-5",src:"./docker命令实战/fe-service-directory01.png"})])])])),[[a]])])),[[c]]),Oe((T(),Y("div",null,[Oe((T(),Y("div",OF,[$(i,{class:"font-bold text-yellow mb-2"},{default:ce(()=>[R("2.配置nginx服务")]),_:1}),p("div",IF,[$(l,{class:"w-80 rounded",src:"./docker命令实战/fe-service-nginx01.png"})])])),[[a]])])),[[c]]),Oe((T(),Y("div",null,[Oe((T(),Y("div",PF,[$(i,{class:"font-bold text-yellow mb-2"},{default:ce(()=>[R("3.配置dockerfile")]),_:1}),p("div",TF,[$(l,{class:"w-100 rounded",src:"./docker命令实战/fe-service-dockerfile01.png"})])])),[[a]])])),[[c]]),Oe((T(),Y("div",null,[Oe((T(),Y("div",MF,[$(i,{class:"font-bold text-yellow mb-2"},{default:ce(()=>[R("4.构建镜像")]),_:1}),p("div",AF,[$(l,{class:"w-100 rounded",src:"./docker命令实战/fe-service-build05.png"})])])),[[a]])])),[[c]]),Oe((T(),Y("div",null,[Oe((T(),Y("div",RF,[$(i,{class:"font-bold text-yellow mb-2"},{default:ce(()=>[R("5.开启容器")]),_:1}),p("div",LF,[$(l,{class:"w-100 rounded",src:"./docker命令实战/fe-service-build02.png"}),$(l,{class:"w-100 rounded",src:"./docker命令实战/fe-service-build03.png"})])])),[[a]])])),[[c]]),Oe((T(),Y("div",null,[Oe((T(),Y("div",DF,[$(i,{class:"font-bold text-yellow mb-2"},{default:ce(()=>[R("6.自动化部署")]),_:1}),p("div",jF,[$(l,{class:"w-100 rounded",src:"./docker命令实战/fe-service-build06.png"})])])),[[a]])])),[[c]])])])]),_:1},16)}}},FF=Ce(NF,[["__file","/@slidev/slides/16.md"]]),zF=p("p",null,[p("strong",null,"docker部署一个后端node服务")],-1),BF={class:"flex h-400"},HF={class:"position-absolute text-sm top-25"},VF={class:"mt-2"},WF={class:"position-absolute text-sm top-25"},UF={class:"mt-2"},qF={class:"position-absolute text-sm top-25"},KF={class:"mt-2"},YF={class:"position-absolute text-sm top-25"},ZF={class:"mt-2"},GF={class:"position-absolute text-sm top-25"},XF={class:"mt-2"},JF={__name:"17",setup(e){const t={layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",hide:!1,srcSequence:"./pages/09搭建后端服务.md"};return ie($e),(n,r)=>{const o=lf,s=sf,i=ms,l=Nt,a=Kn("click"),c=Kn("click-hide");return T(),ge(Tt,Pt(kt(t)),{default:ce(()=>[zF,p("div",BF,[p("div",null,[$(s,{size:"large"},{default:ce(()=>[$(o,{type:"success",title:"创建node项目",content:"使用脚手架创建"}),$(o,{type:"error",title:"配置Dockerfile",content:"dockerfile配置"}),$(o,{type:"info",title:"构建镜像",content:"使用dockerfile创建镜像"}),$(o,{type:"success",title:"开启容器",content:"运行容器打开端口号"}),$(o,{type:"warning",title:"自动化部署",content:"每commit一次代码，打最新的镜像"})]),_:1})]),p("div",null,[Oe((T(),Y("div",null,[Oe((T(),Y("div",HF,[$(i,{class:"font-bold text-yellow mb-2"},{default:ce(()=>[R("创建后端项目")]),_:1}),p("div",VF,[$(l,{class:"w-80 rounded",src:"./docker命令实战/node-service01.png"}),$(l,{class:"w-80 rounded",src:"./docker命令实战/node-service02.png"})])])),[[a]])])),[[c]]),Oe((T(),Y("div",null,[Oe((T(),Y("div",WF,[$(i,{class:"font-bold text-yellow mb-2"},{default:ce(()=>[R("配置dockerfile")]),_:1}),p("div",UF,[$(l,{class:"w-80 rounded",src:"./docker命令实战/node-service03.png"})])])),[[a]])])),[[c]]),Oe((T(),Y("div",null,[Oe((T(),Y("div",qF,[$(i,{class:"font-bold text-yellow mb-2"},{default:ce(()=>[R("构建镜像")]),_:1}),p("div",KF,[$(l,{class:"w-80 rounded",src:"./docker命令实战/node-service04.png"})])])),[[a]])])),[[c]]),Oe((T(),Y("div",null,[Oe((T(),Y("div",YF,[$(i,{class:"font-bold text-yellow mb-2"},{default:ce(()=>[R("开启容器")]),_:1}),p("div",ZF,[$(l,{class:"w-80 rounded",src:"./docker命令实战/node-service05.png"}),$(l,{class:"w-80 rounded",src:"./docker命令实战/node-service06.png"}),$(l,{class:"w-80 rounded",src:"./docker命令实战/node-service07.png"})])])),[[a]])])),[[c]]),Oe((T(),Y("div",null,[Oe((T(),Y("div",GF,[$(i,{class:"font-bold text-yellow mb-2"},{default:ce(()=>[R("自动化部署")]),_:1}),p("div",XF,[$(l,{class:"w-100 rounded",src:"./docker命令实战/node-service08.png"})])])),[[a]])])),[[c]])])])]),_:1},16)}}},QF=Ce(JF,[["__file","/@slidev/slides/17.md"]]),ez=p("p",null,[p("strong",null,"docker将服务推上远程仓库")],-1),tz={class:"flex h-400 gap-20"},nz={class:"position-absolute text-sm top-25"},rz={class:"mt-2"},oz={class:"position-absolute text-sm top-25"},sz={class:"mt-2"},iz={class:"position-absolute text-sm top-25"},lz={class:"mt-2"},az={__name:"18",setup(e){const t={layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",hide:!1,srcSequence:"./pages/010将服务推上远程仓库.md"};return ie($e),(n,r)=>{const o=lf,s=sf,i=ms,l=Nt,a=Kn("click"),c=Kn("click-hide");return T(),ge(Tt,Pt(kt(t)),{default:ce(()=>[ez,p("div",tz,[p("div",null,[$(s,{size:"large"},{default:ce(()=>[$(o,{type:"success",title:"登录远程仓库",content:""}),$(o,{type:"info",title:"构建镜像",content:""}),$(o,{type:"error",title:"push镜像",content:""})]),_:1})]),p("div",null,[Oe((T(),Y("div",null,[Oe((T(),Y("div",nz,[$(i,{class:"font-bold text-yellow mb-2"},{default:ce(()=>[R("登录远程仓库")]),_:1}),p("div",rz,[$(l,{class:"w-100 rounded",src:"./docker命令实战/docker-login02.png"}),$(l,{class:"w-100 rounded",src:"./docker命令实战/docker-login01.png"})])])),[[a]])])),[[c]]),Oe((T(),Y("div",null,[Oe((T(),Y("div",oz,[$(i,{class:"font-bold text-yellow mb-2"},{default:ce(()=>[R("构建镜像")]),_:1}),p("div",sz,[$(l,{class:"w-100 rounded",src:"./docker命令实战/docker-login03.png"}),$(l,{class:"w-100 rounded",src:"./docker命令实战/docker-login04.png"})])])),[[a]])])),[[c]]),Oe((T(),Y("div",null,[Oe((T(),Y("div",iz,[$(i,{class:"font-bold text-yellow mb-2"},{default:ce(()=>[R("推送镜像")]),_:1}),p("div",lz,[$(l,{class:"w-100 rounded",src:"./docker命令实战/docker-login05.png"}),$(l,{class:"w-100 rounded",src:"./docker命令实战/docker-login06.png"})])])),[[a]])])),[[c]])])])]),_:1},16)}}},cz=Ce(az,[["__file","/@slidev/slides/18.md"]]),uz=p("h1",null,"Q&A",-1),dz=p("h3",null,"问你想问",-1),fz={__name:"19",setup(e){const t={layout:"cover",background:"/bg10.jpeg",class:"text-center",srcSequence:"./pages/99问答.md"};return ie($e),(n,r)=>(T(),ge(Tt,Pt(kt(t)),{default:ce(()=>[uz,dz]),_:1},16))}},pz=Ce(fz,[["__file","/@slidev/slides/19.md"]]),hz=[{path:"1",name:"page-1",component:qD,meta:{theme:"seriph",background:"./bg01.webp",class:"text-center",srcSequence:"./pages/01.md",slide:{raw:null,title:"Docker 从入门到实践1",level:1,content:`# Docker 从入门到实践1

## 主讲人： 沈诗`,frontmatter:{theme:"seriph",background:"./bg01.webp",class:"text-center",srcSequence:"./pages/01.md"},index:0,start:0,end:9,source:{filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/01.md",raw:`---
theme: seriph
background: './bg01.webp'
class: text-center
---
# Docker 从入门到实践1

## 主讲人： 沈诗
`,title:"Docker 从入门到实践1",level:1,content:`# Docker 从入门到实践1

## 主讲人： 沈诗`,frontmatter:{theme:"seriph",background:"./bg01.webp",class:"text-center",title:"Docker 从入门到实践1"},index:0,start:0,end:9},inline:{raw:`---
src: ./pages/01.md
---
`,content:"",frontmatter:{},index:0,start:0,end:4},filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/01.md",noteHTML:"",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:XD,meta:{layout:"cover",background:"./docker-bg1.jpeg",class:"text-left",srcSequence:"./pages/02目录.md",slide:{raw:null,content:`<div
    v-if="$slidev.nav.currentPage === 2"
    v-motion
    :initial="{ x: -80, opacity: 0}"
    :enter="{ x: 200, opacity: 1, scale: 1.5, transition: { delay: 100, duration: 1300 } }"
  >

  - docker
  - docker-原理
  - docker-镜像
  - docker-容器
  - docker-存储
  - docker-网络
  - 如何通过docker部署前端服务
  - 如何通过docker部署后端服务
  - 推送docker服务到远程仓库

  </div>`,frontmatter:{layout:"cover",background:"./docker-bg1.jpeg",class:"text-left",srcSequence:"./pages/02目录.md"},index:1,start:0,end:25,source:{filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/02目录.md",raw:`---
layout: cover
background: './docker-bg1.jpeg'
---

  <div
    v-if="$slidev.nav.currentPage === 2"
    v-motion
    :initial="{ x: -80, opacity: 0}"
    :enter="{ x: 200, opacity: 1, scale: 1.5, transition: { delay: 100, duration: 1300 } }"
  >

  - docker
  - docker-原理
  - docker-镜像
  - docker-容器
  - docker-存储
  - docker-网络
  - 如何通过docker部署前端服务
  - 如何通过docker部署后端服务
  - 推送docker服务到远程仓库

  </div>

`,content:`<div
    v-if="$slidev.nav.currentPage === 2"
    v-motion
    :initial="{ x: -80, opacity: 0}"
    :enter="{ x: 200, opacity: 1, scale: 1.5, transition: { delay: 100, duration: 1300 } }"
  >

  - docker
  - docker-原理
  - docker-镜像
  - docker-容器
  - docker-存储
  - docker-网络
  - 如何通过docker部署前端服务
  - 如何通过docker部署后端服务
  - 推送docker服务到远程仓库

  </div>`,frontmatter:{layout:"cover",background:"./docker-bg1.jpeg"},index:0,start:0,end:25},inline:{raw:`---
class: text-left
src: ./pages/02目录.md
---
`,content:"",frontmatter:{class:"text-left"},index:1,start:4,end:9},filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/02目录.md",noteHTML:"",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:oj,meta:{layout:"cover",background:"./docker-bg2.jpeg",title:"docker 概述",class:"text-left",srcSequence:"./pages/02概述.md",slide:{raw:null,title:"docker 概述",level:3,content:`### docker 概述

<div class="flex items-center gap-10 ">
  <gradient-text class="text-black">
    docker -- 码头工人,他要做的事情就是 搬运集装箱，docker就是做了这样的一件事
  </gradient-text>
   <Image class="w-50 absolute top-20 right-20 rounded-lg" src="./worker.png" />
</div>

<br />

<div>
  
  <div>
  
  **docker能做什么，解决了什么问题？**

  - 减少繁琐配置 
  > 虚拟机的最大好处就是能在你的电脑上配置不一样的平台或系统，同一个docker配置可以在不同环境下使用,降低硬件要求与应用环境的耦合度
  - 提高部署效率
  > 为达到程序在不同环境下运行，docker创建了可以移植的，自给自足的镜像，同一个镜像可以在不同环境下使用，从而统一了环境
  - 隔离应用
  > 一台服务器上运行多个不同应用，为减少不同应用依赖之间的冲突，docker把应用与所需依赖打包在一起，做成独立的单元，达到资源隔离

  </div>
</div>`,frontmatter:{layout:"cover",background:"./docker-bg2.jpeg",title:"docker 概述",class:"text-left",srcSequence:"./pages/02概述.md"},index:2,start:0,end:35,source:{filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/02概述.md",raw:`---
layout: cover

background: './docker-bg2.jpeg'
---

### docker 概述

<div class="flex items-center gap-10 ">
  <gradient-text class="text-black">
    docker -- 码头工人,他要做的事情就是 搬运集装箱，docker就是做了这样的一件事
  </gradient-text>
   <Image class="w-50 absolute top-20 right-20 rounded-lg" src="./worker.png" />
</div>

<br />

<div>
  
  <div>
  
  **docker能做什么，解决了什么问题？**

  - 减少繁琐配置 
  > 虚拟机的最大好处就是能在你的电脑上配置不一样的平台或系统，同一个docker配置可以在不同环境下使用,降低硬件要求与应用环境的耦合度
  - 提高部署效率
  > 为达到程序在不同环境下运行，docker创建了可以移植的，自给自足的镜像，同一个镜像可以在不同环境下使用，从而统一了环境
  - 隔离应用
  > 一台服务器上运行多个不同应用，为减少不同应用依赖之间的冲突，docker把应用与所需依赖打包在一起，做成独立的单元，达到资源隔离

  </div>
</div>


`,title:"docker 概述",level:3,content:`### docker 概述

<div class="flex items-center gap-10 ">
  <gradient-text class="text-black">
    docker -- 码头工人,他要做的事情就是 搬运集装箱，docker就是做了这样的一件事
  </gradient-text>
   <Image class="w-50 absolute top-20 right-20 rounded-lg" src="./worker.png" />
</div>

<br />

<div>
  
  <div>
  
  **docker能做什么，解决了什么问题？**

  - 减少繁琐配置 
  > 虚拟机的最大好处就是能在你的电脑上配置不一样的平台或系统，同一个docker配置可以在不同环境下使用,降低硬件要求与应用环境的耦合度
  - 提高部署效率
  > 为达到程序在不同环境下运行，docker创建了可以移植的，自给自足的镜像，同一个镜像可以在不同环境下使用，从而统一了环境
  - 隔离应用
  > 一台服务器上运行多个不同应用，为减少不同应用依赖之间的冲突，docker把应用与所需依赖打包在一起，做成独立的单元，达到资源隔离

  </div>
</div>`,frontmatter:{layout:"cover",background:"./docker-bg2.jpeg",title:"docker 概述"},index:0,start:0,end:35},inline:{raw:`---
class: text-left
src: ./pages/02概述.md
---
`,content:"",frontmatter:{class:"text-left"},index:2,start:9,end:14},filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/02概述.md",noteHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:vj,meta:{layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",srcSequence:"./pages/03原理.md",slide:{raw:null,content:`**docker-原理**
<div class="flex justify-between gap-20">

  <div class="w-100 text-sm">

  **docker如何运行？**
   - Docker 是以客户端和守护进程的方式来运行
  <Image class="w-200 rounded" src="./docker守护进程.png" />
  > 在Docker 客户端中运行 Docker 各种命令。这些命令会传递给 Docker 的宿主机上运行的 Docker 的守护进程。Docker 的守护进程负责实现 Docker 的各种功能

   - Docker 的客户端与 Docker 的服务器端通过 Socket 等进行连接。
  
  <Image class="w-200 rounded" src="./dockerCS运行方式.png" />

  </div>

  <div class="text-sm">

  **docker特点**

  - Docker采用的是虚拟化技术， 和虚拟机一样拥有**隔离性**
  - Docker几乎在所有容器中都兼容，这样**更容易扩展和部署**
  - Docker属于内核级的虚拟化，**效率更高**
  - Docker[仓库开源](https://hub.docker.com/)，和github类似
  <Image class="w-80 my-2" src="./docker特点.png" />
  </div>

</div>`,frontmatter:{layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",srcSequence:"./pages/03原理.md"},index:3,start:0,end:35,source:{filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/03原理.md",raw:`---
layout: cover
background: './docker-bg2.jpeg'
---
**docker-原理**
<div class="flex justify-between gap-20">

  <div class="w-100 text-sm">

  **docker如何运行？**
   - Docker 是以客户端和守护进程的方式来运行
  <Image class="w-200 rounded" src="./docker守护进程.png" />
  > 在Docker 客户端中运行 Docker 各种命令。这些命令会传递给 Docker 的宿主机上运行的 Docker 的守护进程。Docker 的守护进程负责实现 Docker 的各种功能

   - Docker 的客户端与 Docker 的服务器端通过 Socket 等进行连接。
  
  <Image class="w-200 rounded" src="./dockerCS运行方式.png" />

  </div>

  <div class="text-sm">

  **docker特点**

  - Docker采用的是虚拟化技术， 和虚拟机一样拥有**隔离性**
  - Docker几乎在所有容器中都兼容，这样**更容易扩展和部署**
  - Docker属于内核级的虚拟化，**效率更高**
  - Docker[仓库开源](https://hub.docker.com/)，和github类似
  <Image class="w-80 my-2" src="./docker特点.png" />
  </div>

</div>


`,content:`**docker-原理**
<div class="flex justify-between gap-20">

  <div class="w-100 text-sm">

  **docker如何运行？**
   - Docker 是以客户端和守护进程的方式来运行
  <Image class="w-200 rounded" src="./docker守护进程.png" />
  > 在Docker 客户端中运行 Docker 各种命令。这些命令会传递给 Docker 的宿主机上运行的 Docker 的守护进程。Docker 的守护进程负责实现 Docker 的各种功能

   - Docker 的客户端与 Docker 的服务器端通过 Socket 等进行连接。
  
  <Image class="w-200 rounded" src="./dockerCS运行方式.png" />

  </div>

  <div class="text-sm">

  **docker特点**

  - Docker采用的是虚拟化技术， 和虚拟机一样拥有**隔离性**
  - Docker几乎在所有容器中都兼容，这样**更容易扩展和部署**
  - Docker属于内核级的虚拟化，**效率更高**
  - Docker[仓库开源](https://hub.docker.com/)，和github类似
  <Image class="w-80 my-2" src="./docker特点.png" />
  </div>

</div>`,frontmatter:{layout:"cover",background:"./docker-bg2.jpeg"},index:0,start:0,end:35},inline:{raw:`---
class: text-left
src: ./pages/03原理.md
---
`,content:"",frontmatter:{class:"text-left"},index:3,start:14,end:19},filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/03原理.md",noteHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:Ej,meta:{layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",srcSequence:"./pages/03原理-与vm对比.md",slide:{raw:null,content:`**docker与虚拟机相比**
<gradient-text class="text-yellow text-sm">
  Docker的误解： Docker 是轻量级的虚拟机
</gradient-text>

> 我们刚才说， Docker采用的是虚拟化技术， 和虚拟机一样拥有都拥有隔离性

<div class="flex justify-around gap-5 text-sm my-2">

  <div class="w-100">
  

  - Docker有着比虚拟机更少的抽象层
  
  <Image class="w-100" src="./vm&docker.png" />

  - docker利用的宿主的内核， 而虚拟机需要操作系统， 所以说，新建容器时不需要重新加载内核， 而vm 需要加载操作系统，分钟级别加载 docker省略了加载操作过程，**秒级别**
  </div>

  <div class="text-sm">
  
  - docker与虚拟机对比
  <Image class="w-120" src="./与虚拟机对比.png" />
  - 可以看出，Docker是一个虚拟环境容器，可以将你的可执行文件、配置文件及一切其他你需要的文件一并打包到这个容器中，并发布和应用到任意平台
  
  <gradient-text class="text-red">
    那么，不同的容器是如何在docker上正常运行的呢？
  </gradient-text>

  </div>

</div>`,frontmatter:{layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",srcSequence:"./pages/03原理-与vm对比.md"},index:4,start:0,end:38,source:{filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/03原理-与vm对比.md",raw:`---
layout: cover
background: './docker-bg2.jpeg'
---

**docker与虚拟机相比**
<gradient-text class="text-yellow text-sm">
  Docker的误解： Docker 是轻量级的虚拟机
</gradient-text>

> 我们刚才说， Docker采用的是虚拟化技术， 和虚拟机一样拥有都拥有隔离性

<div class="flex justify-around gap-5 text-sm my-2">

  <div class="w-100">
  

  - Docker有着比虚拟机更少的抽象层
  
  <Image class="w-100" src="./vm&docker.png" />

  - docker利用的宿主的内核， 而虚拟机需要操作系统， 所以说，新建容器时不需要重新加载内核， 而vm 需要加载操作系统，分钟级别加载 docker省略了加载操作过程，**秒级别**
  </div>

  <div class="text-sm">
  
  - docker与虚拟机对比
  <Image class="w-120" src="./与虚拟机对比.png" />
  - 可以看出，Docker是一个虚拟环境容器，可以将你的可执行文件、配置文件及一切其他你需要的文件一并打包到这个容器中，并发布和应用到任意平台
  
  <gradient-text class="text-red">
    那么，不同的容器是如何在docker上正常运行的呢？
  </gradient-text>

  </div>

</div>
`,content:`**docker与虚拟机相比**
<gradient-text class="text-yellow text-sm">
  Docker的误解： Docker 是轻量级的虚拟机
</gradient-text>

> 我们刚才说， Docker采用的是虚拟化技术， 和虚拟机一样拥有都拥有隔离性

<div class="flex justify-around gap-5 text-sm my-2">

  <div class="w-100">
  

  - Docker有着比虚拟机更少的抽象层
  
  <Image class="w-100" src="./vm&docker.png" />

  - docker利用的宿主的内核， 而虚拟机需要操作系统， 所以说，新建容器时不需要重新加载内核， 而vm 需要加载操作系统，分钟级别加载 docker省略了加载操作过程，**秒级别**
  </div>

  <div class="text-sm">
  
  - docker与虚拟机对比
  <Image class="w-120" src="./与虚拟机对比.png" />
  - 可以看出，Docker是一个虚拟环境容器，可以将你的可执行文件、配置文件及一切其他你需要的文件一并打包到这个容器中，并发布和应用到任意平台
  
  <gradient-text class="text-red">
    那么，不同的容器是如何在docker上正常运行的呢？
  </gradient-text>

  </div>

</div>`,frontmatter:{layout:"cover",background:"./docker-bg2.jpeg"},index:0,start:0,end:38},inline:{raw:`---
class: text-left
src: ./pages/03原理-与vm对比.md
---

`,content:"",frontmatter:{class:"text-left"},index:4,start:19,end:25},filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/03原理-与vm对比.md",noteHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:jj,meta:{layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",srcSequence:"./pages/03原理-隔离.md",slide:{raw:null,content:`<gradient-text class="text-sm font-bold text-yellow">
  Docker底层的核心技术： 隔离
</gradient-text>

<div class="flex justify-around gap-20">
  <div class="text-sm w-120">

  **Namespaces**

  <carousel arrow draggable class="w-100 h-53">
    <Image class="w-100 rounded" src="./docker 隔离机制.png" />
    <Image class="w-100 rounded" src="./docker进程隔离.svg" />
    <Image class="w-100 rounded" src="./docker 资源隔离.png" />
  </carousel>

  - 容器使用Linux的Namespace技术，将容器内外的资源隔离开，容器里的进程仍然运行在主机的操作系统上
  - Namespaces允许一个进程以及它的子进程从共享的宿主机内核资源里获得一个仅自己可见的隔离区域，让同一个Namespace下的所有进程感知彼此变化，对外界进程一无所知，仿佛运行在一个独占的操作系统中
  - Namespace的6项隔离看似完整，实际上依旧没有完全隔离Linux资源。 

  </div>

  <div>

  **Cgroup**

  <Image class="w-80 bg-white py-5 px-5 rounded" src="./docker cgroup.png" />
  <p class="text-xs bg-white text-black py-1 px-1 rounded">
  Cgroups 是 control groups 的缩写，是 Linux 内核提供的一种可以 <b>限制、记录、隔离进程组</b>（process groups）所使用的物理资源（如 CPU、Memory、IO 等等）的机制。
  </p>

  <ul class="text-sm">
    <li>限制进程组可以使用的资源数量: 设置存储上限，达到限额再申请 </li>
    <li>控制进程组的优先级: 使用cpu子系统为某个进程组分配特定 cpu share。</li>
    <li>记录进程组使用的资源数量: 记录某个进程组使用的cpu时间</li>
    <li>控制进程组的启动: 可以将进程组挂起和恢复</li>
  </ul>


  </div>
  
</div>`,frontmatter:{layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",srcSequence:"./pages/03原理-隔离.md"},index:5,start:0,end:54,source:{filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/03原理-隔离.md",raw:`---
layout: cover
background: './docker-bg2.jpeg'
---

<gradient-text class="text-sm font-bold text-yellow">
  Docker底层的核心技术： 隔离
</gradient-text>

<div class="flex justify-around gap-20">
  <div class="text-sm w-120">

  **Namespaces**

  <carousel arrow draggable class="w-100 h-53">
    <Image class="w-100 rounded" src="./docker 隔离机制.png" />
    <Image class="w-100 rounded" src="./docker进程隔离.svg" />
    <Image class="w-100 rounded" src="./docker 资源隔离.png" />
  </carousel>

  - 容器使用Linux的Namespace技术，将容器内外的资源隔离开，容器里的进程仍然运行在主机的操作系统上
  - Namespaces允许一个进程以及它的子进程从共享的宿主机内核资源里获得一个仅自己可见的隔离区域，让同一个Namespace下的所有进程感知彼此变化，对外界进程一无所知，仿佛运行在一个独占的操作系统中
  - Namespace的6项隔离看似完整，实际上依旧没有完全隔离Linux资源。 

  </div>

  <div>

  **Cgroup**

  <Image class="w-80 bg-white py-5 px-5 rounded" src="./docker cgroup.png" />
  <p class="text-xs bg-white text-black py-1 px-1 rounded">
  Cgroups 是 control groups 的缩写，是 Linux 内核提供的一种可以 <b>限制、记录、隔离进程组</b>（process groups）所使用的物理资源（如 CPU、Memory、IO 等等）的机制。
  </p>

  <ul class="text-sm">
    <li>限制进程组可以使用的资源数量: 设置存储上限，达到限额再申请 </li>
    <li>控制进程组的优先级: 使用cpu子系统为某个进程组分配特定 cpu share。</li>
    <li>记录进程组使用的资源数量: 记录某个进程组使用的cpu时间</li>
    <li>控制进程组的启动: 可以将进程组挂起和恢复</li>
  </ul>


  </div>
  
</div>







`,content:`<gradient-text class="text-sm font-bold text-yellow">
  Docker底层的核心技术： 隔离
</gradient-text>

<div class="flex justify-around gap-20">
  <div class="text-sm w-120">

  **Namespaces**

  <carousel arrow draggable class="w-100 h-53">
    <Image class="w-100 rounded" src="./docker 隔离机制.png" />
    <Image class="w-100 rounded" src="./docker进程隔离.svg" />
    <Image class="w-100 rounded" src="./docker 资源隔离.png" />
  </carousel>

  - 容器使用Linux的Namespace技术，将容器内外的资源隔离开，容器里的进程仍然运行在主机的操作系统上
  - Namespaces允许一个进程以及它的子进程从共享的宿主机内核资源里获得一个仅自己可见的隔离区域，让同一个Namespace下的所有进程感知彼此变化，对外界进程一无所知，仿佛运行在一个独占的操作系统中
  - Namespace的6项隔离看似完整，实际上依旧没有完全隔离Linux资源。 

  </div>

  <div>

  **Cgroup**

  <Image class="w-80 bg-white py-5 px-5 rounded" src="./docker cgroup.png" />
  <p class="text-xs bg-white text-black py-1 px-1 rounded">
  Cgroups 是 control groups 的缩写，是 Linux 内核提供的一种可以 <b>限制、记录、隔离进程组</b>（process groups）所使用的物理资源（如 CPU、Memory、IO 等等）的机制。
  </p>

  <ul class="text-sm">
    <li>限制进程组可以使用的资源数量: 设置存储上限，达到限额再申请 </li>
    <li>控制进程组的优先级: 使用cpu子系统为某个进程组分配特定 cpu share。</li>
    <li>记录进程组使用的资源数量: 记录某个进程组使用的cpu时间</li>
    <li>控制进程组的启动: 可以将进程组挂起和恢复</li>
  </ul>


  </div>
  
</div>`,frontmatter:{layout:"cover",background:"./docker-bg2.jpeg"},index:0,start:0,end:54},inline:{raw:`---
class: text-left
src: ./pages/03原理-隔离.md
---

`,content:"",frontmatter:{class:"text-left"},index:5,start:25,end:31},filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/03原理-隔离.md",noteHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:Hj,meta:{layout:"cover",background:"./docker-bg2.jpeg",title:"docker 三大概念",class:"text-left",srcSequence:"./pages/04三大核心概念.md",slide:{raw:null,title:"docker 三大概念",level:4,content:`#### docker 三大概念

<gradient-text class="text-sm text-yellow">
  Docker的三个基本概念： 镜像， 容器， 仓库
</gradient-text>

<div class="flex my-5 gap-10">
  <div>
    <Image class="w-100 rounded" src="./三大组成关系.png" />
  </div>

  <div class="text-sm">

  - **镜像**：  
  >  docker 镜像是一种特殊的文件系统，除了提供容器运行时所需的程序，库，资源，配置等文件，还包含运行时的一些配置参数

  <br />

  - **容器**：
  > docker容器是由镜像创建的实例，类似于一个轻量级的沙箱，相互隔离。当镜像启动一个容器时，docker会在镜像的最上层建立一个可写的容器层。

  <br />
  
  - **仓库**：
  >  docker仓库类似一个代码库，用来存放镜像，每个仓库里面存放的是某一类镜像，[通过tag区分](https://hub.docker.com/_/centos/tags)。
  </div>
</div>`,frontmatter:{layout:"cover",background:"./docker-bg2.jpeg",title:"docker 三大概念",class:"text-left",srcSequence:"./pages/04三大核心概念.md"},index:6,start:0,end:34,source:{filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/04三大核心概念.md",raw:`---
layout: cover
background: './docker-bg2.jpeg'
---

#### docker 三大概念

<gradient-text class="text-sm text-yellow">
  Docker的三个基本概念： 镜像， 容器， 仓库
</gradient-text>

<div class="flex my-5 gap-10">
  <div>
    <Image class="w-100 rounded" src="./三大组成关系.png" />
  </div>

  <div class="text-sm">

  - **镜像**：  
  >  docker 镜像是一种特殊的文件系统，除了提供容器运行时所需的程序，库，资源，配置等文件，还包含运行时的一些配置参数

  <br />

  - **容器**：
  > docker容器是由镜像创建的实例，类似于一个轻量级的沙箱，相互隔离。当镜像启动一个容器时，docker会在镜像的最上层建立一个可写的容器层。

  <br />
  
  - **仓库**：
  >  docker仓库类似一个代码库，用来存放镜像，每个仓库里面存放的是某一类镜像，[通过tag区分](https://hub.docker.com/_/centos/tags)。
  </div>
</div>

`,title:"docker 三大概念",level:4,content:`#### docker 三大概念

<gradient-text class="text-sm text-yellow">
  Docker的三个基本概念： 镜像， 容器， 仓库
</gradient-text>

<div class="flex my-5 gap-10">
  <div>
    <Image class="w-100 rounded" src="./三大组成关系.png" />
  </div>

  <div class="text-sm">

  - **镜像**：  
  >  docker 镜像是一种特殊的文件系统，除了提供容器运行时所需的程序，库，资源，配置等文件，还包含运行时的一些配置参数

  <br />

  - **容器**：
  > docker容器是由镜像创建的实例，类似于一个轻量级的沙箱，相互隔离。当镜像启动一个容器时，docker会在镜像的最上层建立一个可写的容器层。

  <br />
  
  - **仓库**：
  >  docker仓库类似一个代码库，用来存放镜像，每个仓库里面存放的是某一类镜像，[通过tag区分](https://hub.docker.com/_/centos/tags)。
  </div>
</div>`,frontmatter:{layout:"cover",background:"./docker-bg2.jpeg",title:"docker 三大概念"},index:0,start:0,end:34},inline:{raw:`---
class: text-left
src: ./pages/04三大核心概念.md
---
`,content:"",frontmatter:{class:"text-left"},index:6,start:31,end:36},filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/04三大核心概念.md",noteHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:Zj,meta:{layout:"cover",background:"./docker-bg2.jpeg",title:"docker镜像",class:"text-left",srcSequence:"./pages/04镜像-常用操作.md",slide:{raw:null,title:"docker镜像",level:4,content:`#### docker镜像

<div class="flex justify-start gap-10">

<div >
  <div class="font-bold">常用命令</div>
  <div>

  \`\`\`sh
  # docker信息
  docker version #版本信息
  docker info #系统信息，包括镜像和容器数量
  docker --help
  \`\`\`

  </div>

  <div>

  \`\`\`sh
  # 镜像仓库
  docker login -u 用户名 -p 密码
  docker push  #  上传本地镜像
  docker search # 从Docker Hub查找镜像
  docker pull  # 拉取镜像
  \`\`\`
  <!-- [docker hub](https://hub.docker.com/) -->

  </div>

  <div>

  \`\`\`sh
  # 本地镜像
  docker images # 列出本地镜像。
  docker rmi # 删除本地一个或多个镜像。
  docker tag # 标记本地镜像，将其归入某一仓库。
  docker build # 使用 Dockerfile 创建镜像。
  docker history # 查看指定镜像的创建历史。
  docker save # 将指定镜像保存成 tar 归档文件。
  \`\`\`

  </div>

</div>

<div class="">

  <div class="font-bold mb-2">运行实例</div>
  <carousel arrow draggable class="w-100 h-90">
    <Image class="w-100 rounded" src="./docker命令实战/version01.png" />
    <Image class="w-100 rounded" src="./docker命令实战/info.png" />
    <Image class="w-100 rounded" src="./docker命令实战/login.png" />
    <Image class="w-100 rounded" src="./docker命令实战/search.png" />
    <Image class="w-100 rounded" src="./docker命令实战/pull.png" />
    <Image class="w-100 rounded" src="./docker命令实战/public.png" />
    <Image class="w-100 rounded" src="./docker命令实战/rmi.png" />
    <Image class="w-100 rounded" src="./docker命令实战/history.png" />
  </carousel>

</div>

</div>`,frontmatter:{layout:"cover",background:"./docker-bg2.jpeg",title:"docker镜像",class:"text-left",srcSequence:"./pages/04镜像-常用操作.md"},index:7,start:0,end:70,source:{filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/04镜像-常用操作.md",raw:`---
layout: cover
background: './docker-bg2.jpeg'
---

#### docker镜像

<div class="flex justify-start gap-10">

<div >
  <div class="font-bold">常用命令</div>
  <div>

  \`\`\`sh
  # docker信息
  docker version #版本信息
  docker info #系统信息，包括镜像和容器数量
  docker --help
  \`\`\`

  </div>

  <div>

  \`\`\`sh
  # 镜像仓库
  docker login -u 用户名 -p 密码
  docker push  #  上传本地镜像
  docker search # 从Docker Hub查找镜像
  docker pull  # 拉取镜像
  \`\`\`
  <!-- [docker hub](https://hub.docker.com/) -->

  </div>

  <div>

  \`\`\`sh
  # 本地镜像
  docker images # 列出本地镜像。
  docker rmi # 删除本地一个或多个镜像。
  docker tag # 标记本地镜像，将其归入某一仓库。
  docker build # 使用 Dockerfile 创建镜像。
  docker history # 查看指定镜像的创建历史。
  docker save # 将指定镜像保存成 tar 归档文件。
  \`\`\`

  </div>

</div>

<div class="">

  <div class="font-bold mb-2">运行实例</div>
  <carousel arrow draggable class="w-100 h-90">
    <Image class="w-100 rounded" src="./docker命令实战/version01.png" />
    <Image class="w-100 rounded" src="./docker命令实战/info.png" />
    <Image class="w-100 rounded" src="./docker命令实战/login.png" />
    <Image class="w-100 rounded" src="./docker命令实战/search.png" />
    <Image class="w-100 rounded" src="./docker命令实战/pull.png" />
    <Image class="w-100 rounded" src="./docker命令实战/public.png" />
    <Image class="w-100 rounded" src="./docker命令实战/rmi.png" />
    <Image class="w-100 rounded" src="./docker命令实战/history.png" />
  </carousel>

</div>

</div>

`,title:"docker镜像",level:4,content:`#### docker镜像

<div class="flex justify-start gap-10">

<div >
  <div class="font-bold">常用命令</div>
  <div>

  \`\`\`sh
  # docker信息
  docker version #版本信息
  docker info #系统信息，包括镜像和容器数量
  docker --help
  \`\`\`

  </div>

  <div>

  \`\`\`sh
  # 镜像仓库
  docker login -u 用户名 -p 密码
  docker push  #  上传本地镜像
  docker search # 从Docker Hub查找镜像
  docker pull  # 拉取镜像
  \`\`\`
  <!-- [docker hub](https://hub.docker.com/) -->

  </div>

  <div>

  \`\`\`sh
  # 本地镜像
  docker images # 列出本地镜像。
  docker rmi # 删除本地一个或多个镜像。
  docker tag # 标记本地镜像，将其归入某一仓库。
  docker build # 使用 Dockerfile 创建镜像。
  docker history # 查看指定镜像的创建历史。
  docker save # 将指定镜像保存成 tar 归档文件。
  \`\`\`

  </div>

</div>

<div class="">

  <div class="font-bold mb-2">运行实例</div>
  <carousel arrow draggable class="w-100 h-90">
    <Image class="w-100 rounded" src="./docker命令实战/version01.png" />
    <Image class="w-100 rounded" src="./docker命令实战/info.png" />
    <Image class="w-100 rounded" src="./docker命令实战/login.png" />
    <Image class="w-100 rounded" src="./docker命令实战/search.png" />
    <Image class="w-100 rounded" src="./docker命令实战/pull.png" />
    <Image class="w-100 rounded" src="./docker命令实战/public.png" />
    <Image class="w-100 rounded" src="./docker命令实战/rmi.png" />
    <Image class="w-100 rounded" src="./docker命令实战/history.png" />
  </carousel>

</div>

</div>`,frontmatter:{layout:"cover",background:"./docker-bg2.jpeg",title:"docker镜像"},index:0,start:0,end:70},inline:{raw:`---
class: text-left
src: ./pages/04镜像-常用操作.md
---
`,content:"",frontmatter:{class:"text-left"},index:7,start:36,end:41},filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/04镜像-常用操作.md",noteHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:iN,meta:{layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",srcSequence:"./pages/04镜像-联合文件系统.md",slide:{raw:null,content:`**联合文件系统（UnionFs）**

<gradien-text class="text-sm text-yellow">介绍如何创建镜像之前，我们先讲下联合文件系统</gradien-text>

<space class="text-xs my-2">
联合文件系统是一种分层、轻量级并且高性能的文件系统，它支持对文件系统的修改作为一次提交来一层层的叠加，同时可以将不同目录挂载到同一个虚拟文件系统下。
</space>

<div class="font-bold flex gap-2">
  <Image class="w-30" src="./docker 文件分层.webp" />
  <div class="text-xs">
    <li>Docker 镜像的最底层是 bootfs，与linux系统一样</li>
    <li>通过分层来进行继承，基于基础镜像,制作各种具体的应用镜像</li>
    <li>镜像里面是没有内核的,启动容器时直接使用宿主机的内核</li>
    <li>Docker 镜像要采用这种分层结构,实现资源共享</li>
  </div>
</div>

<div class="h-1 w-220 border-dashed border-1 my-1" ></div>

<div class="flex gap-12">
  <div>
    <p class="text-xs">镜像实例</p>
    <carousel arrow draggable class="w-80">
      <Image class="w-100 rounded" src="./docker命令实战/文件分层/镜像分层下载.png" />
      <Image class="w-100 rounded" src="./docker命令实战/文件分层/镜像分层下载的好处.png" />
      <Image class="w-100 rounded" src="./docker命令实战/文件分层/镜像删除.png" />
    </carousel>
  </div>

  <div>
  
  <p class="text-xs">如何查看镜像分层呢？</p>
  
  \`\`\`sh
    docker inspect 镜像
  \`\`\`
  <Image class="w-100 rounded" src="./docker命令实战/文件分层/查看镜像分层信息.png" />

  </div>

</div>`,frontmatter:{layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",srcSequence:"./pages/04镜像-联合文件系统.md"},index:8,start:0,end:48,source:{filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/04镜像-联合文件系统.md",raw:`---
layout: cover
background: './docker-bg2.jpeg'
---

**联合文件系统（UnionFs）**

<gradien-text class="text-sm text-yellow">介绍如何创建镜像之前，我们先讲下联合文件系统</gradien-text>

<space class="text-xs my-2">
联合文件系统是一种分层、轻量级并且高性能的文件系统，它支持对文件系统的修改作为一次提交来一层层的叠加，同时可以将不同目录挂载到同一个虚拟文件系统下。
</space>

<div class="font-bold flex gap-2">
  <Image class="w-30" src="./docker 文件分层.webp" />
  <div class="text-xs">
    <li>Docker 镜像的最底层是 bootfs，与linux系统一样</li>
    <li>通过分层来进行继承，基于基础镜像,制作各种具体的应用镜像</li>
    <li>镜像里面是没有内核的,启动容器时直接使用宿主机的内核</li>
    <li>Docker 镜像要采用这种分层结构,实现资源共享</li>
  </div>
</div>

<div class="h-1 w-220 border-dashed border-1 my-1" ></div>

<div class="flex gap-12">
  <div>
    <p class="text-xs">镜像实例</p>
    <carousel arrow draggable class="w-80">
      <Image class="w-100 rounded" src="./docker命令实战/文件分层/镜像分层下载.png" />
      <Image class="w-100 rounded" src="./docker命令实战/文件分层/镜像分层下载的好处.png" />
      <Image class="w-100 rounded" src="./docker命令实战/文件分层/镜像删除.png" />
    </carousel>
  </div>

  <div>
  
  <p class="text-xs">如何查看镜像分层呢？</p>
  
  \`\`\`sh
    docker inspect 镜像
  \`\`\`
  <Image class="w-100 rounded" src="./docker命令实战/文件分层/查看镜像分层信息.png" />

  </div>

</div>
`,content:`**联合文件系统（UnionFs）**

<gradien-text class="text-sm text-yellow">介绍如何创建镜像之前，我们先讲下联合文件系统</gradien-text>

<space class="text-xs my-2">
联合文件系统是一种分层、轻量级并且高性能的文件系统，它支持对文件系统的修改作为一次提交来一层层的叠加，同时可以将不同目录挂载到同一个虚拟文件系统下。
</space>

<div class="font-bold flex gap-2">
  <Image class="w-30" src="./docker 文件分层.webp" />
  <div class="text-xs">
    <li>Docker 镜像的最底层是 bootfs，与linux系统一样</li>
    <li>通过分层来进行继承，基于基础镜像,制作各种具体的应用镜像</li>
    <li>镜像里面是没有内核的,启动容器时直接使用宿主机的内核</li>
    <li>Docker 镜像要采用这种分层结构,实现资源共享</li>
  </div>
</div>

<div class="h-1 w-220 border-dashed border-1 my-1" ></div>

<div class="flex gap-12">
  <div>
    <p class="text-xs">镜像实例</p>
    <carousel arrow draggable class="w-80">
      <Image class="w-100 rounded" src="./docker命令实战/文件分层/镜像分层下载.png" />
      <Image class="w-100 rounded" src="./docker命令实战/文件分层/镜像分层下载的好处.png" />
      <Image class="w-100 rounded" src="./docker命令实战/文件分层/镜像删除.png" />
    </carousel>
  </div>

  <div>
  
  <p class="text-xs">如何查看镜像分层呢？</p>
  
  \`\`\`sh
    docker inspect 镜像
  \`\`\`
  <Image class="w-100 rounded" src="./docker命令实战/文件分层/查看镜像分层信息.png" />

  </div>

</div>`,frontmatter:{layout:"cover",background:"./docker-bg2.jpeg"},index:0,start:0,end:48},inline:{raw:`---
class: text-left
src: ./pages/04镜像-联合文件系统.md
---
`,content:"",frontmatter:{class:"text-left"},index:8,start:41,end:46},filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/04镜像-联合文件系统.md",noteHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:gN,meta:{layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",srcSequence:"./pages/04镜像-创建.md",slide:{raw:null,content:`<space class="font-800 text-black my-2">如何创建镜像？</space>

<div class="flex gap-5">
  <div>
  <h5>创建步骤</h5>
  <ul class="w-50 h-20  rounded-lg bg-slate-50 text-black   p-2 overflow-hidden">
    <li class="text-sm font-bold">基于现有镜像创建</li>
    <ul class="text-xs font-bold px-4">
      <li>启动镜像，并修改</li>
      <li>生成新的镜像</li>
    </ul>
  </ul>
  </div>


  <div>
    <h5>原理</h5>
    <Image class="w-80 h-50 bg-white py-2 px-2 rounded" src="./docker命令实战/nginx-create-image09.png" />
  </div>

  <div>
    <h5>实战过程</h5>
    <carousel arrow draggable class="w-80 h-45">
      <Image class="w-100 rounded" src="./docker命令实战/nginx-create-image01.png" />
      <Image class="w-100 rounded" src="./docker命令实战/nginx-create-image05.png" />
      <Image class="w-100 rounded" src="./docker命令实战/nginx-create-image02.png" />
      <Image class="w-100 rounded" src="./docker命令实战/nginx-create-image03.png" />
      <Image class="w-100 rounded" src="./docker命令实战/nginx-create-image04.png" />
      <Image class="w-100 rounded" src="./docker命令实战/nginx-create-image08.png" />
      <Image class="w-100 rounded" src="./docker命令实战/nginx-create-image06.png" />
      <Image class="w-100 rounded" src="./docker命令实战/nginx-create-image07.png" />
    </carousel>
  </div>

</div>

<div class="w-300 border-1 border-dashed my-2 "></div>

<div class="flex my-2  gap-5">

  <div>
    <h5>创建步骤</h5>
    <ul class="w-50 bg-lime-200 rounded  text-black p-2 overflow-hidden ">
      <li class="text-sm font-bold">基于dockerFile创建</li>
      <ul class="text-xs font-bold px-4">
        <li>dockerFile结构</li>
        <li>docker镜像的结构分层</li>
        <li>联合文件系统 unionFs</li>
        <li>dockerFile常用指令</li>
      </ul>
    </ul>
  </div>

  <div>
    <h5>原理</h5>
    <carousel arrow draggable class="w-80 h-45">
      <Image class="w-100 rounded" src="./docker命令实战/nginx-dockerfile-image01.webp" />
      <Image class="w-100 bg-white py-2 px-2 rounded" src="./docker命令实战/nginx-dockerfile-image02.png" />
    </carousel>
  </div>

  <div>
    <h5>实战过程</h5>
    <carousel arrow draggable class="w-80 h-45">
      <Image class="w-100 rounded" src="./docker命令实战/dockerfile-01.png" />
      <Image class="w-100 rounded" src="./docker命令实战/dockerfile-02.png" />
      <Image class="w-100 rounded" src="./docker命令实战/dockerfile-03.png" />
      <Image class="w-100 rounded" src="./docker命令实战/dockerfile-04.png" />
      <Image class="w-100 rounded" src="./docker命令实战/dockerfile-05.png" />
    </carousel>
  </div>

</div>`,frontmatter:{layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",srcSequence:"./pages/04镜像-创建.md"},index:9,start:0,end:81,source:{filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/04镜像-创建.md",raw:`---
layout: cover
background: './docker-bg2.jpeg'
---

<space class="font-800 text-black my-2">如何创建镜像？</space>

<div class="flex gap-5">
  <div>
  <h5>创建步骤</h5>
  <ul class="w-50 h-20  rounded-lg bg-slate-50 text-black   p-2 overflow-hidden">
    <li class="text-sm font-bold">基于现有镜像创建</li>
    <ul class="text-xs font-bold px-4">
      <li>启动镜像，并修改</li>
      <li>生成新的镜像</li>
    </ul>
  </ul>
  </div>


  <div>
    <h5>原理</h5>
    <Image class="w-80 h-50 bg-white py-2 px-2 rounded" src="./docker命令实战/nginx-create-image09.png" />
  </div>

  <div>
    <h5>实战过程</h5>
    <carousel arrow draggable class="w-80 h-45">
      <Image class="w-100 rounded" src="./docker命令实战/nginx-create-image01.png" />
      <Image class="w-100 rounded" src="./docker命令实战/nginx-create-image05.png" />
      <Image class="w-100 rounded" src="./docker命令实战/nginx-create-image02.png" />
      <Image class="w-100 rounded" src="./docker命令实战/nginx-create-image03.png" />
      <Image class="w-100 rounded" src="./docker命令实战/nginx-create-image04.png" />
      <Image class="w-100 rounded" src="./docker命令实战/nginx-create-image08.png" />
      <Image class="w-100 rounded" src="./docker命令实战/nginx-create-image06.png" />
      <Image class="w-100 rounded" src="./docker命令实战/nginx-create-image07.png" />
    </carousel>
  </div>

</div>

<div class="w-300 border-1 border-dashed my-2 "></div>

<div class="flex my-2  gap-5">

  <div>
    <h5>创建步骤</h5>
    <ul class="w-50 bg-lime-200 rounded  text-black p-2 overflow-hidden ">
      <li class="text-sm font-bold">基于dockerFile创建</li>
      <ul class="text-xs font-bold px-4">
        <li>dockerFile结构</li>
        <li>docker镜像的结构分层</li>
        <li>联合文件系统 unionFs</li>
        <li>dockerFile常用指令</li>
      </ul>
    </ul>
  </div>

  <div>
    <h5>原理</h5>
    <carousel arrow draggable class="w-80 h-45">
      <Image class="w-100 rounded" src="./docker命令实战/nginx-dockerfile-image01.webp" />
      <Image class="w-100 bg-white py-2 px-2 rounded" src="./docker命令实战/nginx-dockerfile-image02.png" />
    </carousel>
  </div>

  <div>
    <h5>实战过程</h5>
    <carousel arrow draggable class="w-80 h-45">
      <Image class="w-100 rounded" src="./docker命令实战/dockerfile-01.png" />
      <Image class="w-100 rounded" src="./docker命令实战/dockerfile-02.png" />
      <Image class="w-100 rounded" src="./docker命令实战/dockerfile-03.png" />
      <Image class="w-100 rounded" src="./docker命令实战/dockerfile-04.png" />
      <Image class="w-100 rounded" src="./docker命令实战/dockerfile-05.png" />
    </carousel>
  </div>

</div>


  `,content:`<space class="font-800 text-black my-2">如何创建镜像？</space>

<div class="flex gap-5">
  <div>
  <h5>创建步骤</h5>
  <ul class="w-50 h-20  rounded-lg bg-slate-50 text-black   p-2 overflow-hidden">
    <li class="text-sm font-bold">基于现有镜像创建</li>
    <ul class="text-xs font-bold px-4">
      <li>启动镜像，并修改</li>
      <li>生成新的镜像</li>
    </ul>
  </ul>
  </div>


  <div>
    <h5>原理</h5>
    <Image class="w-80 h-50 bg-white py-2 px-2 rounded" src="./docker命令实战/nginx-create-image09.png" />
  </div>

  <div>
    <h5>实战过程</h5>
    <carousel arrow draggable class="w-80 h-45">
      <Image class="w-100 rounded" src="./docker命令实战/nginx-create-image01.png" />
      <Image class="w-100 rounded" src="./docker命令实战/nginx-create-image05.png" />
      <Image class="w-100 rounded" src="./docker命令实战/nginx-create-image02.png" />
      <Image class="w-100 rounded" src="./docker命令实战/nginx-create-image03.png" />
      <Image class="w-100 rounded" src="./docker命令实战/nginx-create-image04.png" />
      <Image class="w-100 rounded" src="./docker命令实战/nginx-create-image08.png" />
      <Image class="w-100 rounded" src="./docker命令实战/nginx-create-image06.png" />
      <Image class="w-100 rounded" src="./docker命令实战/nginx-create-image07.png" />
    </carousel>
  </div>

</div>

<div class="w-300 border-1 border-dashed my-2 "></div>

<div class="flex my-2  gap-5">

  <div>
    <h5>创建步骤</h5>
    <ul class="w-50 bg-lime-200 rounded  text-black p-2 overflow-hidden ">
      <li class="text-sm font-bold">基于dockerFile创建</li>
      <ul class="text-xs font-bold px-4">
        <li>dockerFile结构</li>
        <li>docker镜像的结构分层</li>
        <li>联合文件系统 unionFs</li>
        <li>dockerFile常用指令</li>
      </ul>
    </ul>
  </div>

  <div>
    <h5>原理</h5>
    <carousel arrow draggable class="w-80 h-45">
      <Image class="w-100 rounded" src="./docker命令实战/nginx-dockerfile-image01.webp" />
      <Image class="w-100 bg-white py-2 px-2 rounded" src="./docker命令实战/nginx-dockerfile-image02.png" />
    </carousel>
  </div>

  <div>
    <h5>实战过程</h5>
    <carousel arrow draggable class="w-80 h-45">
      <Image class="w-100 rounded" src="./docker命令实战/dockerfile-01.png" />
      <Image class="w-100 rounded" src="./docker命令实战/dockerfile-02.png" />
      <Image class="w-100 rounded" src="./docker命令实战/dockerfile-03.png" />
      <Image class="w-100 rounded" src="./docker命令实战/dockerfile-04.png" />
      <Image class="w-100 rounded" src="./docker命令实战/dockerfile-05.png" />
    </carousel>
  </div>

</div>`,frontmatter:{layout:"cover",background:"./docker-bg2.jpeg"},index:0,start:0,end:81},inline:{raw:`---
class: text-left
src: ./pages/04镜像-创建.md
---
`,content:"",frontmatter:{class:"text-left"},index:9,start:46,end:51},filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/04镜像-创建.md",noteHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:SN,meta:{layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",srcSequence:"./pages/05容器.md",slide:{raw:null,content:`**docker容器**

> docker容器可以看作是镜像创建的一个运行实例， 每个容器之间是相互隔离的，可以看作是一个轻量级的linux环境

<div class="flex justify-around gap-10 my-2">

  <div>

  <h6>容器生命周期管理</h6>

  \`\`\`sh
  docker run # 创建一个新的容器并运行一个命令
  docker start # 启动一个或多个已经被停止的容器
  docker stop # 停止一个运行中的容器
  docker ps # 列出容器
  docker kill # 杀掉一个运行中的容器。
  docker rm # 删除一个或多个容器。
  docker pause # 暂停容器中所有的进程。
  docker unpause # 恢复容器中所有的进程。
  docker create # 创建一个新的容器但不启动它
  docker exec # 在运行的容器中执行命令
  \`\`\`

  <div class='bg-#eee rounded  color-#000'>
    <li class='text-xs line-10'>
    docker stop：在docker stop命令执行的时候，会先向容器中PID为1的进程发送系统信号SIGTERM，然后等待容器中的应用程序终止执行，如果等待时间达到设定的超时时间，或者默认的10秒，会继续发送SIGKILL的系统信号强行kill掉进程。
    </li>
    <li class='text-xs '>
    docker kill：默认情况下，docker kill命令不会给容器中的应用程序有任何等待的机会。它会直接发出SIGKILL的系统信号，以强行终止容器中程序的运行。
    </li>
  </div>

  </div>

  <div>
 
  <h6 class="mb-1">docker容器</h6>
  <carousel arrow draggable class="w-100 h-90">
    <Image class="w-100 rounded" src="./docker命令实战/run.png" />
    <Image class="w-100 rounded" src="./docker命令实战/port.png" />
    <Image class="w-100 rounded" src="./docker命令实战/port1.png" />
    <Image class="w-100 rounded" src="./docker命令实战/start.png" />
    <Image class="w-100 rounded" src="./docker命令实战/stop.png" />
    <Image class="w-100 rounded" src="./docker命令实战/rm.png" />
    <Image class="w-100 rounded" src="./docker命令实战/create.png" />
    <Image class="w-100 rounded" src="./docker命令实战/exec.png" />
  </carousel>

  </div>
</div>`,frontmatter:{layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",srcSequence:"./pages/05容器.md"},index:10,start:0,end:56,source:{filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/05容器.md",raw:`---
layout: cover
background: './docker-bg2.jpeg'
---

**docker容器**

> docker容器可以看作是镜像创建的一个运行实例， 每个容器之间是相互隔离的，可以看作是一个轻量级的linux环境

<div class="flex justify-around gap-10 my-2">

  <div>

  <h6>容器生命周期管理</h6>

  \`\`\`sh
  docker run # 创建一个新的容器并运行一个命令
  docker start # 启动一个或多个已经被停止的容器
  docker stop # 停止一个运行中的容器
  docker ps # 列出容器
  docker kill # 杀掉一个运行中的容器。
  docker rm # 删除一个或多个容器。
  docker pause # 暂停容器中所有的进程。
  docker unpause # 恢复容器中所有的进程。
  docker create # 创建一个新的容器但不启动它
  docker exec # 在运行的容器中执行命令
  \`\`\`

  <div class='bg-#eee rounded  color-#000'>
    <li class='text-xs line-10'>
    docker stop：在docker stop命令执行的时候，会先向容器中PID为1的进程发送系统信号SIGTERM，然后等待容器中的应用程序终止执行，如果等待时间达到设定的超时时间，或者默认的10秒，会继续发送SIGKILL的系统信号强行kill掉进程。
    </li>
    <li class='text-xs '>
    docker kill：默认情况下，docker kill命令不会给容器中的应用程序有任何等待的机会。它会直接发出SIGKILL的系统信号，以强行终止容器中程序的运行。
    </li>
  </div>

  </div>

  <div>
 
  <h6 class="mb-1">docker容器</h6>
  <carousel arrow draggable class="w-100 h-90">
    <Image class="w-100 rounded" src="./docker命令实战/run.png" />
    <Image class="w-100 rounded" src="./docker命令实战/port.png" />
    <Image class="w-100 rounded" src="./docker命令实战/port1.png" />
    <Image class="w-100 rounded" src="./docker命令实战/start.png" />
    <Image class="w-100 rounded" src="./docker命令实战/stop.png" />
    <Image class="w-100 rounded" src="./docker命令实战/rm.png" />
    <Image class="w-100 rounded" src="./docker命令实战/create.png" />
    <Image class="w-100 rounded" src="./docker命令实战/exec.png" />
  </carousel>

  </div>
</div>
`,content:`**docker容器**

> docker容器可以看作是镜像创建的一个运行实例， 每个容器之间是相互隔离的，可以看作是一个轻量级的linux环境

<div class="flex justify-around gap-10 my-2">

  <div>

  <h6>容器生命周期管理</h6>

  \`\`\`sh
  docker run # 创建一个新的容器并运行一个命令
  docker start # 启动一个或多个已经被停止的容器
  docker stop # 停止一个运行中的容器
  docker ps # 列出容器
  docker kill # 杀掉一个运行中的容器。
  docker rm # 删除一个或多个容器。
  docker pause # 暂停容器中所有的进程。
  docker unpause # 恢复容器中所有的进程。
  docker create # 创建一个新的容器但不启动它
  docker exec # 在运行的容器中执行命令
  \`\`\`

  <div class='bg-#eee rounded  color-#000'>
    <li class='text-xs line-10'>
    docker stop：在docker stop命令执行的时候，会先向容器中PID为1的进程发送系统信号SIGTERM，然后等待容器中的应用程序终止执行，如果等待时间达到设定的超时时间，或者默认的10秒，会继续发送SIGKILL的系统信号强行kill掉进程。
    </li>
    <li class='text-xs '>
    docker kill：默认情况下，docker kill命令不会给容器中的应用程序有任何等待的机会。它会直接发出SIGKILL的系统信号，以强行终止容器中程序的运行。
    </li>
  </div>

  </div>

  <div>
 
  <h6 class="mb-1">docker容器</h6>
  <carousel arrow draggable class="w-100 h-90">
    <Image class="w-100 rounded" src="./docker命令实战/run.png" />
    <Image class="w-100 rounded" src="./docker命令实战/port.png" />
    <Image class="w-100 rounded" src="./docker命令实战/port1.png" />
    <Image class="w-100 rounded" src="./docker命令实战/start.png" />
    <Image class="w-100 rounded" src="./docker命令实战/stop.png" />
    <Image class="w-100 rounded" src="./docker命令实战/rm.png" />
    <Image class="w-100 rounded" src="./docker命令实战/create.png" />
    <Image class="w-100 rounded" src="./docker命令实战/exec.png" />
  </carousel>

  </div>
</div>`,frontmatter:{layout:"cover",background:"./docker-bg2.jpeg"},index:0,start:0,end:56},inline:{raw:`---
class: text-left
src: ./pages/05容器.md
---
`,content:"",frontmatter:{class:"text-left"},index:10,start:51,end:56},filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/05容器.md",noteHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:PN,meta:{layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",srcSequence:"./pages/05容器-常用命令.md",slide:{raw:null,content:`**docker容器的使用**


<div class="flex justify-around gap-10">

  <div class='w-100'>

  <h6>容器生命周期管理</h6>
  
  \`\`\`sh
  docker inspect # 获取容器/镜像的元数据。
  docker top # 查看容器中运行的进程信息
  docker attach # 连接到正在运行中的容器。
  docker exec # 在运行的容器中执行命令
  docker events # 从服务器获取实时事件
  docker logs # 获取容器的日志
  docker wait # 阻塞运行直到容器停止，然后打印出它的退出代码。
  docker export # 将文件系统作为一个tar归档文件导出到STDOUT。
  docker import # 导入文件 成为镜像。
  docker port # 列出指定的容器的端口映射。
  docker stats # 显示容器资源使用情况，CPU、内存、网络 I/O 等。
  \`\`\`

  </div>

  <div>

  <h6>使用docker</h6>

  <carousel arrow draggable class="w-100 h-80">
    <Image class="w-100 rounded" src="./docker命令实战/top.png" />
    <Image class="w-100 rounded" src="./docker命令实战/attach.png" />
    <Image class="w-100 rounded" src="./docker命令实战/attachVSexec.png" />
    <Image class="w-100 rounded" src="./docker命令实战/events.png" />
    <Image class="w-100 rounded" src="./docker命令实战/logs.png" />
    <Image class="w-100 rounded" src="./docker命令实战/export.png" />
    <Image class="w-100 rounded" src="./docker命令实战/import.png" />
    <Image class="w-100 rounded" src="./docker命令实战/port_container.png" />
    <Image class="w-100 rounded" src="./docker命令实战/stats.png" />
  </carousel>

  </div>

</div>

<gradient-text v-click class="py-1 px-2 text-yellow">
  docker镜像和容器的命令都学会了，那么接下来，我们看一些比较重要的内容！！
</gradient-text>`,frontmatter:{layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",srcSequence:"./pages/05容器-常用命令.md"},index:11,start:0,end:54,source:{filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/05容器-常用命令.md",raw:`---
layout: cover
background: './docker-bg2.jpeg'
---

**docker容器的使用**


<div class="flex justify-around gap-10">

  <div class='w-100'>

  <h6>容器生命周期管理</h6>
  
  \`\`\`sh
  docker inspect # 获取容器/镜像的元数据。
  docker top # 查看容器中运行的进程信息
  docker attach # 连接到正在运行中的容器。
  docker exec # 在运行的容器中执行命令
  docker events # 从服务器获取实时事件
  docker logs # 获取容器的日志
  docker wait # 阻塞运行直到容器停止，然后打印出它的退出代码。
  docker export # 将文件系统作为一个tar归档文件导出到STDOUT。
  docker import # 导入文件 成为镜像。
  docker port # 列出指定的容器的端口映射。
  docker stats # 显示容器资源使用情况，CPU、内存、网络 I/O 等。
  \`\`\`

  </div>

  <div>

  <h6>使用docker</h6>

  <carousel arrow draggable class="w-100 h-80">
    <Image class="w-100 rounded" src="./docker命令实战/top.png" />
    <Image class="w-100 rounded" src="./docker命令实战/attach.png" />
    <Image class="w-100 rounded" src="./docker命令实战/attachVSexec.png" />
    <Image class="w-100 rounded" src="./docker命令实战/events.png" />
    <Image class="w-100 rounded" src="./docker命令实战/logs.png" />
    <Image class="w-100 rounded" src="./docker命令实战/export.png" />
    <Image class="w-100 rounded" src="./docker命令实战/import.png" />
    <Image class="w-100 rounded" src="./docker命令实战/port_container.png" />
    <Image class="w-100 rounded" src="./docker命令实战/stats.png" />
  </carousel>

  </div>

</div>

<gradient-text v-click class="py-1 px-2 text-yellow">
  docker镜像和容器的命令都学会了，那么接下来，我们看一些比较重要的内容！！
</gradient-text>
`,content:`**docker容器的使用**


<div class="flex justify-around gap-10">

  <div class='w-100'>

  <h6>容器生命周期管理</h6>
  
  \`\`\`sh
  docker inspect # 获取容器/镜像的元数据。
  docker top # 查看容器中运行的进程信息
  docker attach # 连接到正在运行中的容器。
  docker exec # 在运行的容器中执行命令
  docker events # 从服务器获取实时事件
  docker logs # 获取容器的日志
  docker wait # 阻塞运行直到容器停止，然后打印出它的退出代码。
  docker export # 将文件系统作为一个tar归档文件导出到STDOUT。
  docker import # 导入文件 成为镜像。
  docker port # 列出指定的容器的端口映射。
  docker stats # 显示容器资源使用情况，CPU、内存、网络 I/O 等。
  \`\`\`

  </div>

  <div>

  <h6>使用docker</h6>

  <carousel arrow draggable class="w-100 h-80">
    <Image class="w-100 rounded" src="./docker命令实战/top.png" />
    <Image class="w-100 rounded" src="./docker命令实战/attach.png" />
    <Image class="w-100 rounded" src="./docker命令实战/attachVSexec.png" />
    <Image class="w-100 rounded" src="./docker命令实战/events.png" />
    <Image class="w-100 rounded" src="./docker命令实战/logs.png" />
    <Image class="w-100 rounded" src="./docker命令实战/export.png" />
    <Image class="w-100 rounded" src="./docker命令实战/import.png" />
    <Image class="w-100 rounded" src="./docker命令实战/port_container.png" />
    <Image class="w-100 rounded" src="./docker命令实战/stats.png" />
  </carousel>

  </div>

</div>

<gradient-text v-click class="py-1 px-2 text-yellow">
  docker镜像和容器的命令都学会了，那么接下来，我们看一些比较重要的内容！！
</gradient-text>`,frontmatter:{layout:"cover",background:"./docker-bg2.jpeg"},index:0,start:0,end:54},inline:{raw:`---
class: text-left
src: ./pages/05容器-常用命令.md
---
`,content:"",frontmatter:{class:"text-left"},index:11,start:56,end:61},filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/05容器-常用命令.md",noteHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:jN,meta:{layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",srcSequence:"./pages/06数据卷.md",slide:{raw:null,content:`**docker 数据卷**

<space class="text-sm">
  当docker容器被删除时，所修改的数据也会被删除，要实现数据的持久化，需要将容器的数据映射到宿主机上
</space>

<space class="text-sm">
   数据卷（volume) 是一个虚拟目录，指向宿主机文件系统中的某个目录
</space>

<div class="flex mt-5 item-start gap-10">
  <div>
  <Image class="w-80 rounded mt-2" src="./容器数据卷.png" />

  <ul class="text-sm mb-10">
    <li>数据卷可以在容器之间共享或重用数据</li>
    <li>数据卷中的更改可以立即生效</li>
    <li>数据卷中的更改不会包含在镜像的更新中</li>
    <li>数据卷默认会一直存在，即使容器被删除</li>
    <li>数据卷的生命周期一直持续到没有容器使用它为止</li>
  </ul>
  
  </div>


  <div class='gap-5 item-start'>


  \`\`\`sh
  # 宿主机文件复制到容器内
  docker cp [OPTIONS] 主机地址: 容器内文件地址

  # 容器内文件复制到宿主机
  docker cp 宿主机地文件址:宿主机地址
  \`\`\`

  <carousel arrow draggable class="w-100 h-60">
    <Image class="w-100 rounded" src="./docker命令实战/volume-create.png" />
    <Image class="w-100 rounded" src="./docker命令实战/volume-test.png" />
    <Image class="w-100 rounded" src="./docker命令实战/volume-principle.png" />
  </carousel>

  </div>
</div>
 <gradient-text v-click class="text-sm text-yellow mb-2">
  容器是相对独立的环境，通过数据卷可以挂载数据到宿主机，但是还是没实现容器之间的互连，那么，容器之间是怎么相连的呢？
</gradient-text>`,frontmatter:{layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",srcSequence:"./pages/06数据卷.md"},index:12,start:0,end:55,source:{filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/06数据卷.md",raw:`---
layout: cover
background: './docker-bg2.jpeg'
---

**docker 数据卷**

<space class="text-sm">
  当docker容器被删除时，所修改的数据也会被删除，要实现数据的持久化，需要将容器的数据映射到宿主机上
</space>

<space class="text-sm">
   数据卷（volume) 是一个虚拟目录，指向宿主机文件系统中的某个目录
</space>

<div class="flex mt-5 item-start gap-10">
  <div>
  <Image class="w-80 rounded mt-2" src="./容器数据卷.png" />

  <ul class="text-sm mb-10">
    <li>数据卷可以在容器之间共享或重用数据</li>
    <li>数据卷中的更改可以立即生效</li>
    <li>数据卷中的更改不会包含在镜像的更新中</li>
    <li>数据卷默认会一直存在，即使容器被删除</li>
    <li>数据卷的生命周期一直持续到没有容器使用它为止</li>
  </ul>
  
  </div>


  <div class='gap-5 item-start'>


  \`\`\`sh
  # 宿主机文件复制到容器内
  docker cp [OPTIONS] 主机地址: 容器内文件地址

  # 容器内文件复制到宿主机
  docker cp 宿主机地文件址:宿主机地址
  \`\`\`

  <carousel arrow draggable class="w-100 h-60">
    <Image class="w-100 rounded" src="./docker命令实战/volume-create.png" />
    <Image class="w-100 rounded" src="./docker命令实战/volume-test.png" />
    <Image class="w-100 rounded" src="./docker命令实战/volume-principle.png" />
  </carousel>

  </div>
</div>
 <gradient-text v-click class="text-sm text-yellow mb-2">
  容器是相对独立的环境，通过数据卷可以挂载数据到宿主机，但是还是没实现容器之间的互连，那么，容器之间是怎么相连的呢？
</gradient-text>


   `,content:`**docker 数据卷**

<space class="text-sm">
  当docker容器被删除时，所修改的数据也会被删除，要实现数据的持久化，需要将容器的数据映射到宿主机上
</space>

<space class="text-sm">
   数据卷（volume) 是一个虚拟目录，指向宿主机文件系统中的某个目录
</space>

<div class="flex mt-5 item-start gap-10">
  <div>
  <Image class="w-80 rounded mt-2" src="./容器数据卷.png" />

  <ul class="text-sm mb-10">
    <li>数据卷可以在容器之间共享或重用数据</li>
    <li>数据卷中的更改可以立即生效</li>
    <li>数据卷中的更改不会包含在镜像的更新中</li>
    <li>数据卷默认会一直存在，即使容器被删除</li>
    <li>数据卷的生命周期一直持续到没有容器使用它为止</li>
  </ul>
  
  </div>


  <div class='gap-5 item-start'>


  \`\`\`sh
  # 宿主机文件复制到容器内
  docker cp [OPTIONS] 主机地址: 容器内文件地址

  # 容器内文件复制到宿主机
  docker cp 宿主机地文件址:宿主机地址
  \`\`\`

  <carousel arrow draggable class="w-100 h-60">
    <Image class="w-100 rounded" src="./docker命令实战/volume-create.png" />
    <Image class="w-100 rounded" src="./docker命令实战/volume-test.png" />
    <Image class="w-100 rounded" src="./docker命令实战/volume-principle.png" />
  </carousel>

  </div>
</div>
 <gradient-text v-click class="text-sm text-yellow mb-2">
  容器是相对独立的环境，通过数据卷可以挂载数据到宿主机，但是还是没实现容器之间的互连，那么，容器之间是怎么相连的呢？
</gradient-text>`,frontmatter:{layout:"cover",background:"./docker-bg2.jpeg"},index:0,start:0,end:55},inline:{raw:`---
class: text-left
src: ./pages/06数据卷.md
---
`,content:"",frontmatter:{class:"text-left"},index:12,start:61,end:66},filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/06数据卷.md",noteHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:XN,meta:{layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",srcSequence:"./pages/07网络.md",slide:{raw:null,content:`**docker网络**


<div class='flex gap-5 justify-start'>
  <div>
    <div class="text-black text-sm">当你安装 Docker 时，它会自动创建三个网络</div>
    <Image class="w-80 rounded my-2" src="./three-network.webp" />
    <Image class="w-80 rounded" src="./network-bridge.webp" />
  </div>

  <div class=" h-200 border-2 border-dashed "/>

  <div>
    <div class='flex gap-2'>
       <div class='text-xs w-70 bg-#fff rounded text-black'>
        <div class='font-bold mt-2 ml-2'>bridge</div>
        <li class='leading-2'>Docker server 启动时会在主机上创建一个docker0 的虚拟网桥</li>
        <li>具体流程：创建一个容器--> docker0 分配虚拟网卡</li>
        <li>通信方式: 容器-->docker0-->宿主机</li>
      </div>
      <Image class="w-50 rounded" src="./docker命令实战/bridge_net.png" />
    </div>
    <div class='flex my-5 gap-2'>
      <div class='text-xs w-70 h-30 bg-#fff rounded text-black'>
        <div class='font-bold  mt-2 ml-2'>host</div>
        <li>该模式下容器是不会拥有自己的ip地址，而是使用宿主机的ip地址和端口</li>
        <li>容器可以直接使用宿主机的IP地址与外界通信</li>
      </div>
      <Image class="w-50 rounded " src="./docker命令实战/host_net.png" />
    </div>
    <div class='flex gap-2'>
      <div class='text-xs  w-70 bg-#fff rounded text-black'>
        <div class='font-bold mt-2 ml-2'>none</div>
        <li>关闭模式, 无法连外网</li>
        <li>容器只有lo回环网络</li>
      </div>
      <Image class="w-50 rounded" src="./docker命令实战/none_net.png" />
    </div>
  
  </div>

</div>



<div class='flex gap-25 my-2'>

  <Image class="w-50 rounded" src="./docker命令实战/bridge_net.png" />



</div>


<div class='flex gap-5' >

  

  

  
</div>`,frontmatter:{layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",srcSequence:"./pages/07网络.md"},index:13,start:0,end:68,source:{filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/07网络.md",raw:`---
layout: cover
background: './docker-bg2.jpeg'
---

**docker网络**


<div class='flex gap-5 justify-start'>
  <div>
    <div class="text-black text-sm">当你安装 Docker 时，它会自动创建三个网络</div>
    <Image class="w-80 rounded my-2" src="./three-network.webp" />
    <Image class="w-80 rounded" src="./network-bridge.webp" />
  </div>

  <div class=" h-200 border-2 border-dashed "/>

  <div>
    <div class='flex gap-2'>
       <div class='text-xs w-70 bg-#fff rounded text-black'>
        <div class='font-bold mt-2 ml-2'>bridge</div>
        <li class='leading-2'>Docker server 启动时会在主机上创建一个docker0 的虚拟网桥</li>
        <li>具体流程：创建一个容器--> docker0 分配虚拟网卡</li>
        <li>通信方式: 容器-->docker0-->宿主机</li>
      </div>
      <Image class="w-50 rounded" src="./docker命令实战/bridge_net.png" />
    </div>
    <div class='flex my-5 gap-2'>
      <div class='text-xs w-70 h-30 bg-#fff rounded text-black'>
        <div class='font-bold  mt-2 ml-2'>host</div>
        <li>该模式下容器是不会拥有自己的ip地址，而是使用宿主机的ip地址和端口</li>
        <li>容器可以直接使用宿主机的IP地址与外界通信</li>
      </div>
      <Image class="w-50 rounded " src="./docker命令实战/host_net.png" />
    </div>
    <div class='flex gap-2'>
      <div class='text-xs  w-70 bg-#fff rounded text-black'>
        <div class='font-bold mt-2 ml-2'>none</div>
        <li>关闭模式, 无法连外网</li>
        <li>容器只有lo回环网络</li>
      </div>
      <Image class="w-50 rounded" src="./docker命令实战/none_net.png" />
    </div>
  
  </div>

</div>



<div class='flex gap-25 my-2'>

  <Image class="w-50 rounded" src="./docker命令实战/bridge_net.png" />



</div>


<div class='flex gap-5' >

  

  

  
</div>
`,content:`**docker网络**


<div class='flex gap-5 justify-start'>
  <div>
    <div class="text-black text-sm">当你安装 Docker 时，它会自动创建三个网络</div>
    <Image class="w-80 rounded my-2" src="./three-network.webp" />
    <Image class="w-80 rounded" src="./network-bridge.webp" />
  </div>

  <div class=" h-200 border-2 border-dashed "/>

  <div>
    <div class='flex gap-2'>
       <div class='text-xs w-70 bg-#fff rounded text-black'>
        <div class='font-bold mt-2 ml-2'>bridge</div>
        <li class='leading-2'>Docker server 启动时会在主机上创建一个docker0 的虚拟网桥</li>
        <li>具体流程：创建一个容器--> docker0 分配虚拟网卡</li>
        <li>通信方式: 容器-->docker0-->宿主机</li>
      </div>
      <Image class="w-50 rounded" src="./docker命令实战/bridge_net.png" />
    </div>
    <div class='flex my-5 gap-2'>
      <div class='text-xs w-70 h-30 bg-#fff rounded text-black'>
        <div class='font-bold  mt-2 ml-2'>host</div>
        <li>该模式下容器是不会拥有自己的ip地址，而是使用宿主机的ip地址和端口</li>
        <li>容器可以直接使用宿主机的IP地址与外界通信</li>
      </div>
      <Image class="w-50 rounded " src="./docker命令实战/host_net.png" />
    </div>
    <div class='flex gap-2'>
      <div class='text-xs  w-70 bg-#fff rounded text-black'>
        <div class='font-bold mt-2 ml-2'>none</div>
        <li>关闭模式, 无法连外网</li>
        <li>容器只有lo回环网络</li>
      </div>
      <Image class="w-50 rounded" src="./docker命令实战/none_net.png" />
    </div>
  
  </div>

</div>



<div class='flex gap-25 my-2'>

  <Image class="w-50 rounded" src="./docker命令实战/bridge_net.png" />



</div>


<div class='flex gap-5' >

  

  

  
</div>`,frontmatter:{layout:"cover",background:"./docker-bg2.jpeg"},index:0,start:0,end:68},inline:{raw:`---
class: text-left
src: ./pages/07网络.md
---
`,content:"",frontmatter:{class:"text-left"},index:13,start:66,end:71},filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/07网络.md",noteHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:wF,meta:{layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",hide:!1,srcSequence:"./pages/07网络-自定义网络.md",slide:{raw:null,content:`**docker自定义网络**

<div class='flex gap-5'>
  <div>
    <h5>容器之间的连通关系</h5>
    <carousel v-click arrow draggable class="w-60 h-50">
      <Image class="w-100 rounded" src="./docker命令实战/bridge_inspect.png" />
      <Image class="w-100 rounded" src="./docker命令实战/box_ping_box1.png" />
    </carousel>
    <div v-click class="text-xs bg-#fff mt-2 rounded text-black p-2">
      <li>使用bridge的网卡都是一对一对的</li>
      <li>docker中所有网络接口都是虚拟的，虚拟的转发效率高</li>
      <li>veth-pair成对出现充当一个桥梁，连接各种虚拟网络设备的</li>
    </div>
  </div>

  <div class='relative'>
    <h5  v-click >使用link的方式</h5>
    <carousel  v-click arrow draggable class="w-80 h-50">
      <Image class="w-100 rounded" src="./docker命令实战/box2--link.png" />
      <Image class="w-100 rounded" src="./docker命令实战/box2_links.png" />
    </carousel>
    <div v-click class="text-xs  bg-#fff mt-2 rounded text-black p-2">
      <li>Docker0的问题：不支持容器名链接访问！</li>
      <li>通过link可以解决使用容器名单向连通的问题</li>
      <li>–link 就是在hosts配置中增加了一个映射</li>
    </div>
  </div>

  <div class='relative'>
    <h5  v-click >使用自定义网络</h5>
    <carousel  v-click  arrow draggable class="w-80 h-50">
      <Image class="w-100 rounded" src="./docker命令实战/network_cus_cishy02.png" />
      <Image class="w-100 rounded" src="./docker命令实战/network_cus_cishy01.png" />
      <Image class="w-100 rounded" src="./docker命令实战/network_cus_connect01.png" />
      <Image class="w-100 rounded" src="./docker命令实战/network_cus_connect.png" />
      <Image class="w-100 rounded" src="./docker命令实战/network_cus_connect_box.png" />
    </carousel>
    <div v-click class="text-xs  bg-#fff mt-2 rounded text-black p-2">
      <li>自定义网络修复了docker0的容器之间无法用容器名相互ping通的问题</li>
      <li>namespace实现了网络隔离</li>
      <li>使用connect建立不同网络容器之间的连接</li>
    </div>
    
  </div>
</div>

<div v-click class='flex w-220 mt-2 ml-5 pl-5 py-2 rounded text-yellow'>
  到这里，我们把docker的基本知识与使用都过了一遍，接下来，我们看看如何实战过程中使用吧!
</div>`,frontmatter:{layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",hide:!1,srcSequence:"./pages/07网络-自定义网络.md"},index:14,start:0,end:59,source:{filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/07网络-自定义网络.md",raw:`---
layout: cover
background: './docker-bg2.jpeg'
---

**docker自定义网络**

<div class='flex gap-5'>
  <div>
    <h5>容器之间的连通关系</h5>
    <carousel v-click arrow draggable class="w-60 h-50">
      <Image class="w-100 rounded" src="./docker命令实战/bridge_inspect.png" />
      <Image class="w-100 rounded" src="./docker命令实战/box_ping_box1.png" />
    </carousel>
    <div v-click class="text-xs bg-#fff mt-2 rounded text-black p-2">
      <li>使用bridge的网卡都是一对一对的</li>
      <li>docker中所有网络接口都是虚拟的，虚拟的转发效率高</li>
      <li>veth-pair成对出现充当一个桥梁，连接各种虚拟网络设备的</li>
    </div>
  </div>

  <div class='relative'>
    <h5  v-click >使用link的方式</h5>
    <carousel  v-click arrow draggable class="w-80 h-50">
      <Image class="w-100 rounded" src="./docker命令实战/box2--link.png" />
      <Image class="w-100 rounded" src="./docker命令实战/box2_links.png" />
    </carousel>
    <div v-click class="text-xs  bg-#fff mt-2 rounded text-black p-2">
      <li>Docker0的问题：不支持容器名链接访问！</li>
      <li>通过link可以解决使用容器名单向连通的问题</li>
      <li>–link 就是在hosts配置中增加了一个映射</li>
    </div>
  </div>

  <div class='relative'>
    <h5  v-click >使用自定义网络</h5>
    <carousel  v-click  arrow draggable class="w-80 h-50">
      <Image class="w-100 rounded" src="./docker命令实战/network_cus_cishy02.png" />
      <Image class="w-100 rounded" src="./docker命令实战/network_cus_cishy01.png" />
      <Image class="w-100 rounded" src="./docker命令实战/network_cus_connect01.png" />
      <Image class="w-100 rounded" src="./docker命令实战/network_cus_connect.png" />
      <Image class="w-100 rounded" src="./docker命令实战/network_cus_connect_box.png" />
    </carousel>
    <div v-click class="text-xs  bg-#fff mt-2 rounded text-black p-2">
      <li>自定义网络修复了docker0的容器之间无法用容器名相互ping通的问题</li>
      <li>namespace实现了网络隔离</li>
      <li>使用connect建立不同网络容器之间的连接</li>
    </div>
    
  </div>
</div>

<div v-click class='flex w-220 mt-2 ml-5 pl-5 py-2 rounded text-yellow'>
  到这里，我们把docker的基本知识与使用都过了一遍，接下来，我们看看如何实战过程中使用吧!
</div>



`,content:`**docker自定义网络**

<div class='flex gap-5'>
  <div>
    <h5>容器之间的连通关系</h5>
    <carousel v-click arrow draggable class="w-60 h-50">
      <Image class="w-100 rounded" src="./docker命令实战/bridge_inspect.png" />
      <Image class="w-100 rounded" src="./docker命令实战/box_ping_box1.png" />
    </carousel>
    <div v-click class="text-xs bg-#fff mt-2 rounded text-black p-2">
      <li>使用bridge的网卡都是一对一对的</li>
      <li>docker中所有网络接口都是虚拟的，虚拟的转发效率高</li>
      <li>veth-pair成对出现充当一个桥梁，连接各种虚拟网络设备的</li>
    </div>
  </div>

  <div class='relative'>
    <h5  v-click >使用link的方式</h5>
    <carousel  v-click arrow draggable class="w-80 h-50">
      <Image class="w-100 rounded" src="./docker命令实战/box2--link.png" />
      <Image class="w-100 rounded" src="./docker命令实战/box2_links.png" />
    </carousel>
    <div v-click class="text-xs  bg-#fff mt-2 rounded text-black p-2">
      <li>Docker0的问题：不支持容器名链接访问！</li>
      <li>通过link可以解决使用容器名单向连通的问题</li>
      <li>–link 就是在hosts配置中增加了一个映射</li>
    </div>
  </div>

  <div class='relative'>
    <h5  v-click >使用自定义网络</h5>
    <carousel  v-click  arrow draggable class="w-80 h-50">
      <Image class="w-100 rounded" src="./docker命令实战/network_cus_cishy02.png" />
      <Image class="w-100 rounded" src="./docker命令实战/network_cus_cishy01.png" />
      <Image class="w-100 rounded" src="./docker命令实战/network_cus_connect01.png" />
      <Image class="w-100 rounded" src="./docker命令实战/network_cus_connect.png" />
      <Image class="w-100 rounded" src="./docker命令实战/network_cus_connect_box.png" />
    </carousel>
    <div v-click class="text-xs  bg-#fff mt-2 rounded text-black p-2">
      <li>自定义网络修复了docker0的容器之间无法用容器名相互ping通的问题</li>
      <li>namespace实现了网络隔离</li>
      <li>使用connect建立不同网络容器之间的连接</li>
    </div>
    
  </div>
</div>

<div v-click class='flex w-220 mt-2 ml-5 pl-5 py-2 rounded text-yellow'>
  到这里，我们把docker的基本知识与使用都过了一遍，接下来，我们看看如何实战过程中使用吧!
</div>`,frontmatter:{layout:"cover",background:"./docker-bg2.jpeg"},index:0,start:0,end:59},inline:{raw:`---
class: text-left
src: ./pages/07网络-自定义网络.md
hide: false
---
`,content:"",frontmatter:{class:"text-left",hide:!1},index:14,start:71,end:77},filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/07网络-自定义网络.md",noteHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:FF,meta:{layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",hide:!1,srcSequence:"./pages/08搭建前端服务.md",slide:{raw:null,content:`**docker部署一个前端服务**

<div class='flex h-400'>
  <div>
    <timeline size='large'>
      <timeline-item type="success" title='创建前端项目' content='使用脚手架创建' ></timeline-item>
      <timeline-item type="info"  title='nginx配置部署' content='使用nginx部署前端服务' ></timeline-item>
      <timeline-item type="error"  title='配置Dockerfile' content='dockerfile配置' ></timeline-item>
      <timeline-item type="info"  title='创建镜像' content='使用dockerfile创建镜像' ></timeline-item>
      <timeline-item type="success"  title='开启容器' content='运行容器打开端口号' ></timeline-item>
      <timeline-item type="warning" title='自动化部署' content='每commit一次代码，打最新的镜像' ></timeline-item>
    </timeline>
  </div>


  <div>
    <div v-click-hide>
      <div v-click class='position-absolute text-sm top-22'>
        <space class="font-bold  text-yellow mb-2">1.创建前端项目</space> 
        <div>
          <div class="bg-white text-black p-2 rounded">
            pnpm create vite@latest fe-service --template react-ts
          </div>
          <div class="mt-2">
            <Image class="w-50 rounded" src="./docker命令实战/fe-service-directory.png" />
            <Image class="w-100 rounded ml-5" src="./docker命令实战/fe-service-directory01.png" />
          </div>
        </div>
      </div>
    </div>
    <div v-click-hide>
      <div v-click  class='position-absolute text-sm top-22'>
        <space class="font-bold  text-yellow mb-2">2.配置nginx服务</space>
        <div class="mt-2">
          <Image class="w-80 rounded" src="./docker命令实战/fe-service-nginx01.png" />
        </div>
      </div>
    </div>
    <div v-click-hide>
      <div v-click  class='position-absolute text-sm top-22'>
        <space class="font-bold  text-yellow mb-2">3.配置dockerfile</space>
        <div class="mt-2">
          <Image class="w-100 rounded" src="./docker命令实战/fe-service-dockerfile01.png" />
        </div>
      </div>
    </div>
    <div v-click-hide>
      <div v-click  class='position-absolute text-sm top-22'>
        <space class="font-bold  text-yellow mb-2">4.构建镜像</space>
        <div class="mt-2">
          <Image class="w-100 rounded" src="./docker命令实战/fe-service-build05.png" />
        </div>
      </div>
    </div>
    <div v-click-hide>
      <div v-click  class='position-absolute text-sm top-22'>
        <space class="font-bold  text-yellow mb-2">5.开启容器</space>
        <div class="mt-2">
          <Image class="w-100 rounded" src="./docker命令实战/fe-service-build02.png" />
          <Image class="w-100 rounded" src="./docker命令实战/fe-service-build03.png" />
        </div>
      </div>
    </div>
    <div v-click-hide>
      <div v-click  class='position-absolute text-sm top-22'>
        <space class="font-bold  text-yellow mb-2">6.自动化部署</space>
        <div class="mt-2">
          <Image class="w-100 rounded" src="./docker命令实战/fe-service-build06.png" />
        </div>
      </div>
    </div>
  </div>

</div>`,frontmatter:{layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",hide:!1,srcSequence:"./pages/08搭建前端服务.md"},index:15,start:0,end:80,source:{filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/08搭建前端服务.md",raw:`---
layout: cover
background: './docker-bg2.jpeg'
---

**docker部署一个前端服务**

<div class='flex h-400'>
  <div>
    <timeline size='large'>
      <timeline-item type="success" title='创建前端项目' content='使用脚手架创建' ></timeline-item>
      <timeline-item type="info"  title='nginx配置部署' content='使用nginx部署前端服务' ></timeline-item>
      <timeline-item type="error"  title='配置Dockerfile' content='dockerfile配置' ></timeline-item>
      <timeline-item type="info"  title='创建镜像' content='使用dockerfile创建镜像' ></timeline-item>
      <timeline-item type="success"  title='开启容器' content='运行容器打开端口号' ></timeline-item>
      <timeline-item type="warning" title='自动化部署' content='每commit一次代码，打最新的镜像' ></timeline-item>
    </timeline>
  </div>


  <div>
    <div v-click-hide>
      <div v-click class='position-absolute text-sm top-22'>
        <space class="font-bold  text-yellow mb-2">1.创建前端项目</space> 
        <div>
          <div class="bg-white text-black p-2 rounded">
            pnpm create vite@latest fe-service --template react-ts
          </div>
          <div class="mt-2">
            <Image class="w-50 rounded" src="./docker命令实战/fe-service-directory.png" />
            <Image class="w-100 rounded ml-5" src="./docker命令实战/fe-service-directory01.png" />
          </div>
        </div>
      </div>
    </div>
    <div v-click-hide>
      <div v-click  class='position-absolute text-sm top-22'>
        <space class="font-bold  text-yellow mb-2">2.配置nginx服务</space>
        <div class="mt-2">
          <Image class="w-80 rounded" src="./docker命令实战/fe-service-nginx01.png" />
        </div>
      </div>
    </div>
    <div v-click-hide>
      <div v-click  class='position-absolute text-sm top-22'>
        <space class="font-bold  text-yellow mb-2">3.配置dockerfile</space>
        <div class="mt-2">
          <Image class="w-100 rounded" src="./docker命令实战/fe-service-dockerfile01.png" />
        </div>
      </div>
    </div>
    <div v-click-hide>
      <div v-click  class='position-absolute text-sm top-22'>
        <space class="font-bold  text-yellow mb-2">4.构建镜像</space>
        <div class="mt-2">
          <Image class="w-100 rounded" src="./docker命令实战/fe-service-build05.png" />
        </div>
      </div>
    </div>
    <div v-click-hide>
      <div v-click  class='position-absolute text-sm top-22'>
        <space class="font-bold  text-yellow mb-2">5.开启容器</space>
        <div class="mt-2">
          <Image class="w-100 rounded" src="./docker命令实战/fe-service-build02.png" />
          <Image class="w-100 rounded" src="./docker命令实战/fe-service-build03.png" />
        </div>
      </div>
    </div>
    <div v-click-hide>
      <div v-click  class='position-absolute text-sm top-22'>
        <space class="font-bold  text-yellow mb-2">6.自动化部署</space>
        <div class="mt-2">
          <Image class="w-100 rounded" src="./docker命令实战/fe-service-build06.png" />
        </div>
      </div>
    </div>
  </div>

</div>
`,content:`**docker部署一个前端服务**

<div class='flex h-400'>
  <div>
    <timeline size='large'>
      <timeline-item type="success" title='创建前端项目' content='使用脚手架创建' ></timeline-item>
      <timeline-item type="info"  title='nginx配置部署' content='使用nginx部署前端服务' ></timeline-item>
      <timeline-item type="error"  title='配置Dockerfile' content='dockerfile配置' ></timeline-item>
      <timeline-item type="info"  title='创建镜像' content='使用dockerfile创建镜像' ></timeline-item>
      <timeline-item type="success"  title='开启容器' content='运行容器打开端口号' ></timeline-item>
      <timeline-item type="warning" title='自动化部署' content='每commit一次代码，打最新的镜像' ></timeline-item>
    </timeline>
  </div>


  <div>
    <div v-click-hide>
      <div v-click class='position-absolute text-sm top-22'>
        <space class="font-bold  text-yellow mb-2">1.创建前端项目</space> 
        <div>
          <div class="bg-white text-black p-2 rounded">
            pnpm create vite@latest fe-service --template react-ts
          </div>
          <div class="mt-2">
            <Image class="w-50 rounded" src="./docker命令实战/fe-service-directory.png" />
            <Image class="w-100 rounded ml-5" src="./docker命令实战/fe-service-directory01.png" />
          </div>
        </div>
      </div>
    </div>
    <div v-click-hide>
      <div v-click  class='position-absolute text-sm top-22'>
        <space class="font-bold  text-yellow mb-2">2.配置nginx服务</space>
        <div class="mt-2">
          <Image class="w-80 rounded" src="./docker命令实战/fe-service-nginx01.png" />
        </div>
      </div>
    </div>
    <div v-click-hide>
      <div v-click  class='position-absolute text-sm top-22'>
        <space class="font-bold  text-yellow mb-2">3.配置dockerfile</space>
        <div class="mt-2">
          <Image class="w-100 rounded" src="./docker命令实战/fe-service-dockerfile01.png" />
        </div>
      </div>
    </div>
    <div v-click-hide>
      <div v-click  class='position-absolute text-sm top-22'>
        <space class="font-bold  text-yellow mb-2">4.构建镜像</space>
        <div class="mt-2">
          <Image class="w-100 rounded" src="./docker命令实战/fe-service-build05.png" />
        </div>
      </div>
    </div>
    <div v-click-hide>
      <div v-click  class='position-absolute text-sm top-22'>
        <space class="font-bold  text-yellow mb-2">5.开启容器</space>
        <div class="mt-2">
          <Image class="w-100 rounded" src="./docker命令实战/fe-service-build02.png" />
          <Image class="w-100 rounded" src="./docker命令实战/fe-service-build03.png" />
        </div>
      </div>
    </div>
    <div v-click-hide>
      <div v-click  class='position-absolute text-sm top-22'>
        <space class="font-bold  text-yellow mb-2">6.自动化部署</space>
        <div class="mt-2">
          <Image class="w-100 rounded" src="./docker命令实战/fe-service-build06.png" />
        </div>
      </div>
    </div>
  </div>

</div>`,frontmatter:{layout:"cover",background:"./docker-bg2.jpeg"},index:0,start:0,end:80},inline:{raw:`---
class: text-left
src: ./pages/08搭建前端服务.md
hide: false
---
`,content:"",frontmatter:{class:"text-left",hide:!1},index:15,start:77,end:83},filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/08搭建前端服务.md",noteHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:QF,meta:{layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",hide:!1,srcSequence:"./pages/09搭建后端服务.md",slide:{raw:null,content:`**docker部署一个后端node服务**

<div class='flex h-400'>
  <div>
    <timeline size='large'>
      <timeline-item   type="success" title='创建node项目' content='使用脚手架创建' ></timeline-item>
      <timeline-item type="error"  title='配置Dockerfile' content='dockerfile配置' ></timeline-item>
      <timeline-item type="info"  title='构建镜像' content='使用dockerfile创建镜像' ></timeline-item>
      <timeline-item type="success"  title='开启容器' content='运行容器打开端口号' ></timeline-item>
      <timeline-item type="warning" title='自动化部署' content='每commit一次代码，打最新的镜像' ></timeline-item>
    </timeline>
  </div>


  
  <div>
    <div v-click-hide>
      <div v-click class='position-absolute text-sm top-25'>
        <space class="font-bold  text-yellow mb-2">创建后端项目</space>
        <div class="mt-2">
          <Image class="w-80 rounded" src="./docker命令实战/node-service01.png" />
          <Image class="w-80 rounded" src="./docker命令实战/node-service02.png" />
        </div>
    </div>
    </div>
    <div v-click-hide>
      <div v-click  class='position-absolute text-sm top-25'>
        <space class="font-bold  text-yellow mb-2">配置dockerfile</space>
        <div class="mt-2">
          <Image class="w-80 rounded" src="./docker命令实战/node-service03.png" />
        </div>
      </div>
    </div>
    <div v-click-hide>
      <div v-click  class='position-absolute text-sm top-25'>
        <space class="font-bold  text-yellow mb-2">构建镜像</space>
        <div class="mt-2">
          <Image class="w-80 rounded" src="./docker命令实战/node-service04.png" />
        </div>
      </div>
    </div>
    <div v-click-hide>
      <div v-click  class='position-absolute text-sm top-25'>
        <space class="font-bold  text-yellow mb-2">开启容器</space>
        <div class="mt-2">
          <Image class="w-80 rounded" src="./docker命令实战/node-service05.png" />
          <Image class="w-80 rounded" src="./docker命令实战/node-service06.png" />
          <Image class="w-80 rounded" src="./docker命令实战/node-service07.png" />
        </div>
      </div>
    </div>
    <div v-click-hide>
      <div v-click  class='position-absolute text-sm top-25'>
        <space class="font-bold  text-yellow mb-2">自动化部署</space>
        <div class="mt-2">
          <Image class="w-100 rounded" src="./docker命令实战/node-service08.png" />
        </div>
      </div>
    </div>
  </div>

</div>`,frontmatter:{layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",hide:!1,srcSequence:"./pages/09搭建后端服务.md"},index:16,start:0,end:68,source:{filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/09搭建后端服务.md",raw:`---
layout: cover
background: './docker-bg2.jpeg'
---

**docker部署一个后端node服务**

<div class='flex h-400'>
  <div>
    <timeline size='large'>
      <timeline-item   type="success" title='创建node项目' content='使用脚手架创建' ></timeline-item>
      <timeline-item type="error"  title='配置Dockerfile' content='dockerfile配置' ></timeline-item>
      <timeline-item type="info"  title='构建镜像' content='使用dockerfile创建镜像' ></timeline-item>
      <timeline-item type="success"  title='开启容器' content='运行容器打开端口号' ></timeline-item>
      <timeline-item type="warning" title='自动化部署' content='每commit一次代码，打最新的镜像' ></timeline-item>
    </timeline>
  </div>


  
  <div>
    <div v-click-hide>
      <div v-click class='position-absolute text-sm top-25'>
        <space class="font-bold  text-yellow mb-2">创建后端项目</space>
        <div class="mt-2">
          <Image class="w-80 rounded" src="./docker命令实战/node-service01.png" />
          <Image class="w-80 rounded" src="./docker命令实战/node-service02.png" />
        </div>
    </div>
    </div>
    <div v-click-hide>
      <div v-click  class='position-absolute text-sm top-25'>
        <space class="font-bold  text-yellow mb-2">配置dockerfile</space>
        <div class="mt-2">
          <Image class="w-80 rounded" src="./docker命令实战/node-service03.png" />
        </div>
      </div>
    </div>
    <div v-click-hide>
      <div v-click  class='position-absolute text-sm top-25'>
        <space class="font-bold  text-yellow mb-2">构建镜像</space>
        <div class="mt-2">
          <Image class="w-80 rounded" src="./docker命令实战/node-service04.png" />
        </div>
      </div>
    </div>
    <div v-click-hide>
      <div v-click  class='position-absolute text-sm top-25'>
        <space class="font-bold  text-yellow mb-2">开启容器</space>
        <div class="mt-2">
          <Image class="w-80 rounded" src="./docker命令实战/node-service05.png" />
          <Image class="w-80 rounded" src="./docker命令实战/node-service06.png" />
          <Image class="w-80 rounded" src="./docker命令实战/node-service07.png" />
        </div>
      </div>
    </div>
    <div v-click-hide>
      <div v-click  class='position-absolute text-sm top-25'>
        <space class="font-bold  text-yellow mb-2">自动化部署</space>
        <div class="mt-2">
          <Image class="w-100 rounded" src="./docker命令实战/node-service08.png" />
        </div>
      </div>
    </div>
  </div>

</div>
`,content:`**docker部署一个后端node服务**

<div class='flex h-400'>
  <div>
    <timeline size='large'>
      <timeline-item   type="success" title='创建node项目' content='使用脚手架创建' ></timeline-item>
      <timeline-item type="error"  title='配置Dockerfile' content='dockerfile配置' ></timeline-item>
      <timeline-item type="info"  title='构建镜像' content='使用dockerfile创建镜像' ></timeline-item>
      <timeline-item type="success"  title='开启容器' content='运行容器打开端口号' ></timeline-item>
      <timeline-item type="warning" title='自动化部署' content='每commit一次代码，打最新的镜像' ></timeline-item>
    </timeline>
  </div>


  
  <div>
    <div v-click-hide>
      <div v-click class='position-absolute text-sm top-25'>
        <space class="font-bold  text-yellow mb-2">创建后端项目</space>
        <div class="mt-2">
          <Image class="w-80 rounded" src="./docker命令实战/node-service01.png" />
          <Image class="w-80 rounded" src="./docker命令实战/node-service02.png" />
        </div>
    </div>
    </div>
    <div v-click-hide>
      <div v-click  class='position-absolute text-sm top-25'>
        <space class="font-bold  text-yellow mb-2">配置dockerfile</space>
        <div class="mt-2">
          <Image class="w-80 rounded" src="./docker命令实战/node-service03.png" />
        </div>
      </div>
    </div>
    <div v-click-hide>
      <div v-click  class='position-absolute text-sm top-25'>
        <space class="font-bold  text-yellow mb-2">构建镜像</space>
        <div class="mt-2">
          <Image class="w-80 rounded" src="./docker命令实战/node-service04.png" />
        </div>
      </div>
    </div>
    <div v-click-hide>
      <div v-click  class='position-absolute text-sm top-25'>
        <space class="font-bold  text-yellow mb-2">开启容器</space>
        <div class="mt-2">
          <Image class="w-80 rounded" src="./docker命令实战/node-service05.png" />
          <Image class="w-80 rounded" src="./docker命令实战/node-service06.png" />
          <Image class="w-80 rounded" src="./docker命令实战/node-service07.png" />
        </div>
      </div>
    </div>
    <div v-click-hide>
      <div v-click  class='position-absolute text-sm top-25'>
        <space class="font-bold  text-yellow mb-2">自动化部署</space>
        <div class="mt-2">
          <Image class="w-100 rounded" src="./docker命令实战/node-service08.png" />
        </div>
      </div>
    </div>
  </div>

</div>`,frontmatter:{layout:"cover",background:"./docker-bg2.jpeg"},index:0,start:0,end:68},inline:{raw:`---
class: text-left
src: ./pages/09搭建后端服务.md
hide: false
---
`,content:"",frontmatter:{class:"text-left",hide:!1},index:16,start:83,end:89},filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/09搭建后端服务.md",noteHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:cz,meta:{layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",hide:!1,srcSequence:"./pages/010将服务推上远程仓库.md",slide:{raw:null,content:`**docker将服务推上远程仓库**

<div class='flex h-400 gap-20'>
  <div>
    <timeline size='large'>
      <timeline-item   type="success" title='登录远程仓库' content='' ></timeline-item>
      <timeline-item type="info"  title='构建镜像' content='' ></timeline-item>
      <timeline-item type="error"  title='push镜像' content='' ></timeline-item>
    </timeline>
  </div>


    
  <div>
    <div v-click-hide>
      <div v-click class='position-absolute text-sm top-25'>
        <space class="font-bold  text-yellow mb-2">登录远程仓库</space>
        <div class="mt-2">
          <Image class="w-100 rounded" src="./docker命令实战/docker-login02.png" />
          <Image class="w-100 rounded" src="./docker命令实战/docker-login01.png" />
        </div>
    </div>
    </div>
    <div v-click-hide>
      <div v-click  class='position-absolute text-sm top-25'>
        <space class="font-bold  text-yellow mb-2">构建镜像</space>
        <div class="mt-2">
          <Image class="w-100 rounded" src="./docker命令实战/docker-login03.png" />
          <Image class="w-100 rounded" src="./docker命令实战/docker-login04.png" />
        </div>
      </div>
    </div>
    <div v-click-hide>
      <div v-click  class='position-absolute text-sm top-25'>
        <space class="font-bold  text-yellow mb-2">推送镜像</space>
        <div class="mt-2">
          <Image class="w-100 rounded" src="./docker命令实战/docker-login05.png" />
          <Image class="w-100 rounded" src="./docker命令实战/docker-login06.png" />
        </div>
      </div>
    </div>
  </div>


</div>`,frontmatter:{layout:"cover",background:"./docker-bg2.jpeg",class:"text-left",hide:!1,srcSequence:"./pages/010将服务推上远程仓库.md"},index:17,start:0,end:51,source:{filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/010将服务推上远程仓库.md",raw:`---
layout: cover
background: './docker-bg2.jpeg'
---

**docker将服务推上远程仓库**

<div class='flex h-400 gap-20'>
  <div>
    <timeline size='large'>
      <timeline-item   type="success" title='登录远程仓库' content='' ></timeline-item>
      <timeline-item type="info"  title='构建镜像' content='' ></timeline-item>
      <timeline-item type="error"  title='push镜像' content='' ></timeline-item>
    </timeline>
  </div>


    
  <div>
    <div v-click-hide>
      <div v-click class='position-absolute text-sm top-25'>
        <space class="font-bold  text-yellow mb-2">登录远程仓库</space>
        <div class="mt-2">
          <Image class="w-100 rounded" src="./docker命令实战/docker-login02.png" />
          <Image class="w-100 rounded" src="./docker命令实战/docker-login01.png" />
        </div>
    </div>
    </div>
    <div v-click-hide>
      <div v-click  class='position-absolute text-sm top-25'>
        <space class="font-bold  text-yellow mb-2">构建镜像</space>
        <div class="mt-2">
          <Image class="w-100 rounded" src="./docker命令实战/docker-login03.png" />
          <Image class="w-100 rounded" src="./docker命令实战/docker-login04.png" />
        </div>
      </div>
    </div>
    <div v-click-hide>
      <div v-click  class='position-absolute text-sm top-25'>
        <space class="font-bold  text-yellow mb-2">推送镜像</space>
        <div class="mt-2">
          <Image class="w-100 rounded" src="./docker命令实战/docker-login05.png" />
          <Image class="w-100 rounded" src="./docker命令实战/docker-login06.png" />
        </div>
      </div>
    </div>
  </div>


</div>
`,content:`**docker将服务推上远程仓库**

<div class='flex h-400 gap-20'>
  <div>
    <timeline size='large'>
      <timeline-item   type="success" title='登录远程仓库' content='' ></timeline-item>
      <timeline-item type="info"  title='构建镜像' content='' ></timeline-item>
      <timeline-item type="error"  title='push镜像' content='' ></timeline-item>
    </timeline>
  </div>


    
  <div>
    <div v-click-hide>
      <div v-click class='position-absolute text-sm top-25'>
        <space class="font-bold  text-yellow mb-2">登录远程仓库</space>
        <div class="mt-2">
          <Image class="w-100 rounded" src="./docker命令实战/docker-login02.png" />
          <Image class="w-100 rounded" src="./docker命令实战/docker-login01.png" />
        </div>
    </div>
    </div>
    <div v-click-hide>
      <div v-click  class='position-absolute text-sm top-25'>
        <space class="font-bold  text-yellow mb-2">构建镜像</space>
        <div class="mt-2">
          <Image class="w-100 rounded" src="./docker命令实战/docker-login03.png" />
          <Image class="w-100 rounded" src="./docker命令实战/docker-login04.png" />
        </div>
      </div>
    </div>
    <div v-click-hide>
      <div v-click  class='position-absolute text-sm top-25'>
        <space class="font-bold  text-yellow mb-2">推送镜像</space>
        <div class="mt-2">
          <Image class="w-100 rounded" src="./docker命令实战/docker-login05.png" />
          <Image class="w-100 rounded" src="./docker命令实战/docker-login06.png" />
        </div>
      </div>
    </div>
  </div>


</div>`,frontmatter:{layout:"cover",background:"./docker-bg2.jpeg"},index:0,start:0,end:51},inline:{raw:`---
class: text-left
src: ./pages/010将服务推上远程仓库.md
hide: false
---

`,content:"",frontmatter:{class:"text-left",hide:!1},index:17,start:89,end:96},filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/010将服务推上远程仓库.md",noteHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:pz,meta:{layout:"cover",background:"/bg10.jpeg",title:"Q&A",class:"text-center",srcSequence:"./pages/99问答.md",slide:{raw:null,title:"Q&A",level:1,content:`# Q&A

### 问你想问`,frontmatter:{layout:"cover",background:"/bg10.jpeg",title:"Q&A",class:"text-center",srcSequence:"./pages/99问答.md"},index:18,start:0,end:11,source:{filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/99问答.md",raw:`---
layout: cover
background: /bg10.jpeg

---

# Q&A

### 问你想问

`,title:"Q&A",level:1,content:`# Q&A

### 问你想问`,frontmatter:{layout:"cover",background:"/bg10.jpeg",title:"Q&A"},index:0,start:0,end:11},inline:{raw:`---
class: text-center
background: /bg10.jpeg
src: ./pages/99问答.md
---
`,content:"",frontmatter:{class:"text-center",background:"/bg10.jpeg"},index:18,start:96,end:102},filepath:"/home/runner/work/docker-slidev/docker-slidev/pages/99问答.md",noteHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}}],mz=[],_t=hz,Vs=[{name:"play",path:"/",component:dL,children:[..._t,...mz]},{name:"print",path:"/print",component:FD},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let e=function(t){if(!Bs.remote||Bs.remote===t.query.password)return!0;if(Bs.remote&&t.query.password===void 0){const n=prompt("Enter password");if(Bs.remote===n)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}};Vs.push({path:"/presenter/print",component:()=>Mr(()=>import("./PresenterPrint-58d5bad4.js"),["assets/PresenterPrint-58d5bad4.js","assets/NoteDisplay-3ae28cc9.js"])}),Vs.push({name:"notes",path:"/notes",component:()=>Mr(()=>import("./NotesView-7f279a2e.js"),["assets/NotesView-7f279a2e.js","assets/NoteDisplay-3ae28cc9.js"]),beforeEnter:e}),Vs.push({name:"presenter",path:"/presenter/:no",component:()=>Mr(()=>import("./Presenter-ea4f30ba.js"),["assets/Presenter-ea4f30ba.js","assets/NoteDisplay-3ae28cc9.js","assets/DrawingControls-7795f548.js","assets/Presenter-f6a5d8ad.css"]),beforeEnter:e}),Vs.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const sn=I$({history:OS("/docker-slidev/"),routes:Vs});function vz(e,t,{mode:n="replace"}={}){return C({get(){const r=sn.currentRoute.value.query[e];return r==null?t??null:Array.isArray(r)?r.filter(Boolean):r},set(r){Et(()=>{sn[D(n)]({query:{...sn.currentRoute.value.query,[e]:r}})})}})}const bb=z(0);Et(()=>{sn.afterEach(async()=>{await Et(),bb.value+=1})});const yb=z(0),Cn=C(()=>sn.currentRoute.value),rs=C(()=>Cn.value.query.print!==void 0),gz=C(()=>Cn.value.query.print==="clicks"),er=C(()=>Cn.value.query.embedded!==void 0),rn=C(()=>Cn.value.path.startsWith("/presenter")),bz=C(()=>Cn.value.path.startsWith("/notes")),ti=C(()=>rs.value&&!gz.value),Wu=C(()=>Cn.value.query.password),yz=C(()=>!rn.value&&(!Ze.remote||Wu.value===Ze.remote)),Tm=vz("clicks","0"),wz=C(()=>_t.length),_z=C(()=>Cn.value.path),mt=C(()=>Number.parseInt(_z.value.split(/\//g).slice(-1)[0])||1);C(()=>za(mt.value));const Zt=C(()=>_t.find(e=>e.path===`${mt.value}`));C(()=>{var e,t,n;return(n=(t=(e=Zt.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});C(()=>{var e,t;return((t=(e=Zt.value)==null?void 0:e.meta)==null?void 0:t.layout)||(mt.value===1?"cover":"default")});const Tc=C(()=>_t.find(e=>e.path===`${Math.min(_t.length,mt.value+1)}`)),xz=C(()=>_t.find(e=>e.path===`${Math.max(1,mt.value-1)}`)),kz=C(()=>{var e,t;return bb.value,((t=(e=Zt.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),xn=C({get(){if(ti.value)return 99999;let e=+(Tm.value||0);return Number.isNaN(e)&&(e=0),e},set(e){Tm.value=e.toString()}}),fa=C(()=>{var e,t;return+(((t=(e=Zt.value)==null?void 0:e.meta)==null?void 0:t.clicks)??kz.value.length)}),Sz=C(()=>mt.value<_t.length||xn.value<fa.value),$z=C(()=>mt.value>1||xn.value>0),Cz=C(()=>_t.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(af(e,t),e),[])),Ez=C(()=>cf(Cz.value,Zt.value));C(()=>uf(Ez.value));const Oz=C(()=>Az(yb.value,Zt.value,xz.value));be(Zt,(e,t)=>{yb.value=Number(e==null?void 0:e.path)-Number(t==null?void 0:t.path)});function Rr(){fa.value<=xn.value?Ei():xn.value+=1}async function Lr(){xn.value<=0?await Oi():xn.value-=1}function za(e){return rn.value?`/presenter/${e}`:`/${e}`}function Ei(){const e=Math.min(_t.length,mt.value+1);return os(e)}async function Oi(e=!0){const t=Math.max(1,mt.value-1);await os(t),e&&fa.value&&sn.replace({query:{...Cn.value.query,clicks:fa.value}})}function os(e,t){return sn.push({path:za(e),query:{...Cn.value.query,clicks:t}})}function Iz(e){const t=z(0),{direction:n,distanceX:r,distanceY:o}=X2(e,{onSwipeStart(s){s.pointerType==="touch"&&(gi.value||(t.value=cu()))},onSwipeEnd(s){if(s.pointerType!=="touch"||!t.value||gi.value)return;const i=Math.abs(r.value),l=Math.abs(o.value);i/window.innerWidth>.3||i>100?n.value==="left"?Rr():Lr():(l/window.innerHeight>.4||l>200)&&(n.value==="down"?Oi():Ei())}})}async function Uu(){const{saveAs:e}=await Mr(()=>import("./FileSaver.min-23a5d44b.js").then(t=>t.F),[]);e(typeof Ze.download=="string"?Ze.download:Ze.exportFilename?`${Ze.exportFilename}.pdf`:"/docker-slidev/slidev-exported.pdf",`${Ze.title}.pdf`)}async function Pz(e){var t,n;if(e==null){const r=(n=(t=Zt.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(r!=null&&r.filepath))return!1;e=`${r.filepath}:${r.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function af(e,t,n=1){var o,s,i,l,a;const r=(s=(o=t.meta)==null?void 0:o.slide)==null?void 0:s.level;r&&r>n&&e.length>0?af(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:!!((i=t.meta)!=null&&i.hideInToc),title:(a=(l=t.meta)==null?void 0:l.slide)==null?void 0:a.title})}function cf(e,t,n=!1,r){return e.map(o=>{const s={...o,active:o.path===(t==null?void 0:t.path),hasActiveParent:n};return s.children.length>0&&(s.children=cf(s.children,t,s.active||s.hasActiveParent,s)),r&&(s.active||s.activeParent)&&(r.activeParent=!0),s})}function uf(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>({...n,children:uf(n.children,t+1)}))}const Tz={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function Mz(e,t=!1){if(!e||(typeof e=="string"&&(e={name:e}),!e.name))return;let n=e.name.includes("|")?e.name:Tz[e.name]||e.name;if(n.includes("|")){const[r,o]=n.split("|").map(s=>s.trim());n=t?o:r}if(n)return{...e,name:n}}function Az(e,t,n){var o,s;let r=e>0?(o=n==null?void 0:n.meta)==null?void 0:o.transition:(s=t==null?void 0:t.meta)==null?void 0:s.transition;return r||(r=Ze.transition),Mz(r,e<0)}function Rz(){const e=Ze.titleTemplate.replace("%s",Ze.title||"Slidev");Lg({title:e,htmlAttrs:Ze.htmlAttrs}),Pk(`${e} - shared`),Rk(`${e} - drawings`);const t=`${location.origin}_${$k()}`;function n(){bz.value||!rn.value&&!Sk.includes(location.host.split(":")[0])||(rn.value?(ks("page",+mt.value),ks("clicks",xn.value)):(ks("viewerPage",+mt.value),ks("viewerClicks",xn.value)),ks("lastUpdate",{id:t,type:rn.value?"presenter":"viewer",time:new Date().getTime()}))}sn.afterEach(n),be(xn,n),Tk(r=>{var s;sn.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((s=r.lastUpdate)==null?void 0:s.type)==="presenter"&&(+r.page!=+mt.value||+xn.value!=+r.clicks)&&sn.replace({path:za(r.page),query:{...sn.currentRoute.value.query,clicks:r.clicks||0}})})}const Lz=pe({__name:"App",setup(e){return ie($e),Rz(),(t,n)=>{const r=di("RouterView"),o=di("StarportCarrier");return T(),Y(ze,null,[$(r),$(o)],64)}}}),Dz=Ce(Lz,[["__file","/home/runner/work/docker-slidev/docker-slidev/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/App.vue"]]);function Mc(e){return e!==null&&typeof e=="object"}function qu(e,t,n=".",r){if(!Mc(t))return qu(e,{},n,r);const o=Object.assign({},t);for(const s in e){if(s==="__proto__"||s==="constructor")continue;const i=e[s];i!=null&&(r&&r(o,s,i,n)||(Array.isArray(i)&&Array.isArray(o[s])?o[s]=[...i,...o[s]]:Mc(i)&&Mc(o[s])?o[s]=qu(i,o[s],(n?`${n}.`:"")+s.toString(),r):o[s]=i))}return o}function jz(e){return(...t)=>t.reduce((n,r)=>qu(n,r,"",e),{})}const Nz=jz(),wb=1/60*1e3,Fz=typeof performance<"u"?()=>performance.now():()=>Date.now(),_b=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(Fz()),wb);function zz(e){let t=[],n=[],r=0,o=!1,s=!1;const i=new WeakSet,l={schedule:(a,c=!1,u=!1)=>{const d=u&&o,f=d?t:n;return c&&i.add(a),f.indexOf(a)===-1&&(f.push(a),d&&o&&(r=t.length)),a},cancel:a=>{const c=n.indexOf(a);c!==-1&&n.splice(c,1),i.delete(a)},process:a=>{if(o){s=!0;return}if(o=!0,[t,n]=[n,t],n.length=0,r=t.length,r)for(let c=0;c<r;c++){const u=t[c];u(a),i.has(u)&&(l.schedule(u),e())}o=!1,s&&(s=!1,l.process(a))}};return l}const Bz=40;let Ku=!0,Ii=!1,Yu=!1;const Jo={delta:0,timestamp:0},Hi=["read","update","preRender","render","postRender"],Ba=Hi.reduce((e,t)=>(e[t]=zz(()=>Ii=!0),e),{}),Zu=Hi.reduce((e,t)=>{const n=Ba[t];return e[t]=(r,o=!1,s=!1)=>(Ii||Wz(),n.schedule(r,o,s)),e},{}),Hz=Hi.reduce((e,t)=>(e[t]=Ba[t].cancel,e),{});Hi.reduce((e,t)=>(e[t]=()=>Ba[t].process(Jo),e),{});const Vz=e=>Ba[e].process(Jo),xb=e=>{Ii=!1,Jo.delta=Ku?wb:Math.max(Math.min(e-Jo.timestamp,Bz),1),Jo.timestamp=e,Yu=!0,Hi.forEach(Vz),Yu=!1,Ii&&(Ku=!1,_b(xb))},Wz=()=>{Ii=!0,Ku=!0,Yu||_b(xb)},kb=()=>Jo;function Sb(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}var df=function(){},Pi=function(){};df=function(e,t){!e&&typeof console<"u"&&console.warn(t)},Pi=function(e,t){if(!e)throw new Error(t)};const Gu=(e,t,n)=>Math.min(Math.max(n,e),t),Ac=.001,Uz=.01,Mm=10,qz=.05,Kz=1;function Yz({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let o,s;df(e<=Mm*1e3,"Spring duration must be 10 seconds or less");let i=1-t;i=Gu(qz,Kz,i),e=Gu(Uz,Mm,e/1e3),i<1?(o=c=>{const u=c*i,d=u*e,f=u-n,m=Xu(c,i),h=Math.exp(-d);return Ac-f/m*h},s=c=>{const d=c*i*e,f=d*n+n,m=Math.pow(i,2)*Math.pow(c,2)*e,h=Math.exp(-d),b=Xu(Math.pow(c,2),i);return(-o(c)+Ac>0?-1:1)*((f-m)*h)/b}):(o=c=>{const u=Math.exp(-c*e),d=(c-n)*e+1;return-Ac+u*d},s=c=>{const u=Math.exp(-c*e),d=(n-c)*(e*e);return u*d});const l=5/e,a=Gz(o,s,l);if(e=e*1e3,isNaN(a))return{stiffness:100,damping:10,duration:e};{const c=Math.pow(a,2)*r;return{stiffness:c,damping:i*2*Math.sqrt(r*c),duration:e}}}const Zz=12;function Gz(e,t,n){let r=n;for(let o=1;o<Zz;o++)r=r-e(r)/t(r);return r}function Xu(e,t){return e*Math.sqrt(1-t*t)}const Xz=["duration","bounce"],Jz=["stiffness","damping","mass"];function Am(e,t){return t.some(n=>e[n]!==void 0)}function Qz(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!Am(e,Jz)&&Am(e,Xz)){const n=Yz(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function ff(e){var{from:t=0,to:n=1,restSpeed:r=2,restDelta:o}=e,s=Sb(e,["from","to","restSpeed","restDelta"]);const i={done:!1,value:t};let{stiffness:l,damping:a,mass:c,velocity:u,duration:d,isResolvedFromDuration:f}=Qz(s),m=Rm,h=Rm;function b(){const y=u?-(u/1e3):0,v=n-t,x=a/(2*Math.sqrt(l*c)),_=Math.sqrt(l/c)/1e3;if(o===void 0&&(o=Math.min(Math.abs(n-t)/100,.4)),x<1){const E=Xu(_,x);m=I=>{const P=Math.exp(-x*_*I);return n-P*((y+x*_*v)/E*Math.sin(E*I)+v*Math.cos(E*I))},h=I=>{const P=Math.exp(-x*_*I);return x*_*P*(Math.sin(E*I)*(y+x*_*v)/E+v*Math.cos(E*I))-P*(Math.cos(E*I)*(y+x*_*v)-E*v*Math.sin(E*I))}}else if(x===1)m=E=>n-Math.exp(-_*E)*(v+(y+_*v)*E);else{const E=_*Math.sqrt(x*x-1);m=I=>{const P=Math.exp(-x*_*I),S=Math.min(E*I,300);return n-P*((y+x*_*v)*Math.sinh(S)+E*v*Math.cosh(S))/E}}}return b(),{next:y=>{const v=m(y);if(f)i.done=y>=d;else{const x=h(y)*1e3,_=Math.abs(x)<=r,E=Math.abs(n-v)<=o;i.done=_&&E}return i.value=i.done?n:v,i},flipTarget:()=>{u=-u,[t,n]=[n,t],b()}}}ff.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const Rm=e=>0,$b=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},pf=(e,t,n)=>-n*e+n*t+e,Cb=(e,t)=>n=>Math.max(Math.min(n,t),e),ni=e=>e%1?Number(e.toFixed(5)):e,Ti=/(-)?([\d]*\.?[\d])+/g,Ju=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,eB=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Vi(e){return typeof e=="string"}const Wi={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ri=Object.assign(Object.assign({},Wi),{transform:Cb(0,1)}),_l=Object.assign(Object.assign({},Wi),{default:1}),hf=e=>({test:t=>Vi(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Yr=hf("deg"),oi=hf("%"),Ne=hf("px"),Lm=Object.assign(Object.assign({},oi),{parse:e=>oi.parse(e)/100,transform:e=>oi.transform(e*100)}),mf=(e,t)=>n=>!!(Vi(n)&&eB.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Eb=(e,t,n)=>r=>{if(!Vi(r))return r;const[o,s,i,l]=r.match(Ti);return{[e]:parseFloat(o),[t]:parseFloat(s),[n]:parseFloat(i),alpha:l!==void 0?parseFloat(l):1}},ao={test:mf("hsl","hue"),parse:Eb("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+oi.transform(ni(t))+", "+oi.transform(ni(n))+", "+ni(ri.transform(r))+")"},tB=Cb(0,255),Rc=Object.assign(Object.assign({},Wi),{transform:e=>Math.round(tB(e))}),Er={test:mf("rgb","red"),parse:Eb("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Rc.transform(e)+", "+Rc.transform(t)+", "+Rc.transform(n)+", "+ni(ri.transform(r))+")"};function nB(e){let t="",n="",r="",o="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),r=e.substr(5,2),o=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),r=e.substr(3,1),o=e.substr(4,1),t+=t,n+=n,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Qu={test:mf("#"),parse:nB,transform:Er.transform},nn={test:e=>Er.test(e)||Qu.test(e)||ao.test(e),parse:e=>Er.test(e)?Er.parse(e):ao.test(e)?ao.parse(e):Qu.parse(e),transform:e=>Vi(e)?e:e.hasOwnProperty("red")?Er.transform(e):ao.transform(e)},Ob="${c}",Ib="${n}";function rB(e){var t,n,r,o;return isNaN(e)&&Vi(e)&&((n=(t=e.match(Ti))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((o=(r=e.match(Ju))===null||r===void 0?void 0:r.length)!==null&&o!==void 0?o:0)>0}function Pb(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const r=e.match(Ju);r&&(n=r.length,e=e.replace(Ju,Ob),t.push(...r.map(nn.parse)));const o=e.match(Ti);return o&&(e=e.replace(Ti,Ib),t.push(...o.map(Wi.parse))),{values:t,numColors:n,tokenised:e}}function Tb(e){return Pb(e).values}function Mb(e){const{values:t,numColors:n,tokenised:r}=Pb(e),o=t.length;return s=>{let i=r;for(let l=0;l<o;l++)i=i.replace(l<n?Ob:Ib,l<n?nn.transform(s[l]):ni(s[l]));return i}}const oB=e=>typeof e=="number"?0:e;function sB(e){const t=Tb(e);return Mb(e)(t.map(oB))}const Ui={test:rB,parse:Tb,createTransformer:Mb,getAnimatableNone:sB},iB=new Set(["brightness","contrast","saturate","opacity"]);function lB(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Ti)||[];if(!r)return e;const o=n.replace(r,"");let s=iB.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+o+")"}const aB=/([a-z-]*)\(.*?\)/g,ed=Object.assign(Object.assign({},Ui),{getAnimatableNone:e=>{const t=e.match(aB);return t?t.map(lB).join(" "):e}});function Lc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Dm({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let o=0,s=0,i=0;if(!t)o=s=i=n;else{const l=n<.5?n*(1+t):n+t-n*t,a=2*n-l;o=Lc(a,l,e+1/3),s=Lc(a,l,e),i=Lc(a,l,e-1/3)}return{red:Math.round(o*255),green:Math.round(s*255),blue:Math.round(i*255),alpha:r}}const cB=(e,t,n)=>{const r=e*e,o=t*t;return Math.sqrt(Math.max(0,n*(o-r)+r))},uB=[Qu,Er,ao],jm=e=>uB.find(t=>t.test(e)),Nm=e=>`'${e}' is not an animatable color. Use the equivalent color code instead.`,Ab=(e,t)=>{let n=jm(e),r=jm(t);Pi(!!n,Nm(e)),Pi(!!r,Nm(t));let o=n.parse(e),s=r.parse(t);n===ao&&(o=Dm(o),n=Er),r===ao&&(s=Dm(s),r=Er);const i=Object.assign({},o);return l=>{for(const a in i)a!=="alpha"&&(i[a]=cB(o[a],s[a],l));return i.alpha=pf(o.alpha,s.alpha,l),n.transform(i)}},dB=e=>typeof e=="number",fB=(e,t)=>n=>t(e(n)),Rb=(...e)=>e.reduce(fB);function Lb(e,t){return dB(e)?n=>pf(e,t,n):nn.test(e)?Ab(e,t):jb(e,t)}const Db=(e,t)=>{const n=[...e],r=n.length,o=e.map((s,i)=>Lb(s,t[i]));return s=>{for(let i=0;i<r;i++)n[i]=o[i](s);return n}},pB=(e,t)=>{const n=Object.assign(Object.assign({},e),t),r={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(r[o]=Lb(e[o],t[o]));return o=>{for(const s in r)n[s]=r[s](o);return n}};function Fm(e){const t=Ui.parse(e),n=t.length;let r=0,o=0,s=0;for(let i=0;i<n;i++)r||typeof t[i]=="number"?r++:t[i].hue!==void 0?s++:o++;return{parsed:t,numNumbers:r,numRGB:o,numHSL:s}}const jb=(e,t)=>{const n=Ui.createTransformer(t),r=Fm(e),o=Fm(t);return r.numHSL===o.numHSL&&r.numRGB===o.numRGB&&r.numNumbers>=o.numNumbers?Rb(Db(r.parsed,o.parsed),n):(df(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),i=>`${i>0?t:e}`)},hB=(e,t)=>n=>pf(e,t,n);function mB(e){if(typeof e=="number")return hB;if(typeof e=="string")return nn.test(e)?Ab:jb;if(Array.isArray(e))return Db;if(typeof e=="object")return pB}function vB(e,t,n){const r=[],o=n||mB(e[0]),s=e.length-1;for(let i=0;i<s;i++){let l=o(e[i],e[i+1]);if(t){const a=Array.isArray(t)?t[i]:t;l=Rb(a,l)}r.push(l)}return r}function gB([e,t],[n]){return r=>n($b(e,t,r))}function bB(e,t){const n=e.length,r=n-1;return o=>{let s=0,i=!1;if(o<=e[0]?i=!0:o>=e[r]&&(s=r-1,i=!0),!i){let a=1;for(;a<n&&!(e[a]>o||a===r);a++);s=a-1}const l=$b(e[s],e[s+1],o);return t[s](l)}}function Nb(e,t,{clamp:n=!0,ease:r,mixer:o}={}){const s=e.length;Pi(s===t.length,"Both input and output ranges must be the same length"),Pi(!r||!Array.isArray(r)||r.length===s-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),e[0]>e[s-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const i=vB(t,r,o),l=s===2?gB(e,i):bB(e,i);return n?a=>l(Gu(e[0],e[s-1],a)):l}const Ha=e=>t=>1-e(1-t),vf=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,yB=e=>t=>Math.pow(t,e),Fb=e=>t=>t*t*((e+1)*t-e),wB=e=>{const t=Fb(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},zb=1.525,_B=4/11,xB=8/11,kB=9/10,Bb=e=>e,gf=yB(2),SB=Ha(gf),Hb=vf(gf),Vb=e=>1-Math.sin(Math.acos(e)),Wb=Ha(Vb),$B=vf(Wb),bf=Fb(zb),CB=Ha(bf),EB=vf(bf),OB=wB(zb),IB=4356/361,PB=35442/1805,TB=16061/1805,pa=e=>{if(e===1||e===0)return e;const t=e*e;return e<_B?7.5625*t:e<xB?9.075*t-9.9*e+3.4:e<kB?IB*t-PB*e+TB:10.8*e*e-20.52*e+10.72},MB=Ha(pa),AB=e=>e<.5?.5*(1-pa(1-e*2)):.5*pa(e*2-1)+.5;function RB(e,t){return e.map(()=>t||Hb).splice(0,e.length-1)}function LB(e){const t=e.length;return e.map((n,r)=>r!==0?r/(t-1):0)}function DB(e,t){return e.map(n=>n*t)}function jl({from:e=0,to:t=1,ease:n,offset:r,duration:o=300}){const s={done:!1,value:e},i=Array.isArray(t)?t:[e,t],l=DB(r&&r.length===i.length?r:LB(i),o);function a(){return Nb(l,i,{ease:Array.isArray(n)?n:RB(i,n)})}let c=a();return{next:u=>(s.value=c(u),s.done=u>=o,s),flipTarget:()=>{i.reverse(),c=a()}}}function jB({velocity:e=0,from:t=0,power:n=.8,timeConstant:r=350,restDelta:o=.5,modifyTarget:s}){const i={done:!1,value:t};let l=n*e;const a=t+l,c=s===void 0?a:s(a);return c!==a&&(l=c-t),{next:u=>{const d=-l*Math.exp(-u/r);return i.done=!(d>o||d<-o),i.value=i.done?c:c+d,i},flipTarget:()=>{}}}const zm={keyframes:jl,spring:ff,decay:jB};function NB(e){if(Array.isArray(e.to))return jl;if(zm[e.type])return zm[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?jl:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?ff:jl}function Ub(e,t,n=0){return e-t-n}function FB(e,t,n=0,r=!0){return r?Ub(t+-e,t,n):t-(e-t)+n}function zB(e,t,n,r){return r?e>=t+n:e<=-n}const BB=e=>{const t=({delta:n})=>e(n);return{start:()=>Zu.update(t,!0),stop:()=>Hz.update(t)}};function qb(e){var t,n,{from:r,autoplay:o=!0,driver:s=BB,elapsed:i=0,repeat:l=0,repeatType:a="loop",repeatDelay:c=0,onPlay:u,onStop:d,onComplete:f,onRepeat:m,onUpdate:h}=e,b=Sb(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:y}=b,v,x=0,_=b.duration,E,I=!1,P=!0,S;const k=NB(b);!((n=(t=k).needsInterpolation)===null||n===void 0)&&n.call(t,r,y)&&(S=Nb([0,100],[r,y],{clamp:!1}),r=0,y=100);const M=k(Object.assign(Object.assign({},b),{from:r,to:y}));function N(){x++,a==="reverse"?(P=x%2===0,i=FB(i,_,c,P)):(i=Ub(i,_,c),a==="mirror"&&M.flipTarget()),I=!1,m&&m()}function G(){v.stop(),f&&f()}function B(V){if(P||(V=-V),i+=V,!I){const ne=M.next(Math.max(0,i));E=ne.value,S&&(E=S(E)),I=P?ne.done:i<=0}h==null||h(E),I&&(x===0&&(_??(_=i)),x<l?zB(i,_,c,P)&&N():G())}function te(){u==null||u(),v=s(B),v.start()}return o&&te(),{stop:()=>{d==null||d(),v.stop()}}}function Kb(e,t){return t?e*(1e3/t):0}function HB({from:e=0,velocity:t=0,min:n,max:r,power:o=.8,timeConstant:s=750,bounceStiffness:i=500,bounceDamping:l=10,restDelta:a=1,modifyTarget:c,driver:u,onUpdate:d,onComplete:f,onStop:m}){let h;function b(_){return n!==void 0&&_<n||r!==void 0&&_>r}function y(_){return n===void 0?r:r===void 0||Math.abs(n-_)<Math.abs(r-_)?n:r}function v(_){h==null||h.stop(),h=qb(Object.assign(Object.assign({},_),{driver:u,onUpdate:E=>{var I;d==null||d(E),(I=_.onUpdate)===null||I===void 0||I.call(_,E)},onComplete:f,onStop:m}))}function x(_){v(Object.assign({type:"spring",stiffness:i,damping:l,restDelta:a},_))}if(b(e))x({from:e,velocity:t,to:y(e)});else{let _=o*t+e;typeof c<"u"&&(_=c(_));const E=y(_),I=E===n?-1:1;let P,S;const k=M=>{P=S,S=M,t=Kb(M-P,kb().delta),(I===1&&M>E||I===-1&&M<E)&&x({from:M,to:E,velocity:t})};v({type:"decay",from:e,velocity:t,timeConstant:s,power:o,restDelta:a,modifyTarget:c,onUpdate:b(_)?k:void 0})}return{stop:()=>h==null?void 0:h.stop()}}const Yb=(e,t)=>1-3*t+3*e,Zb=(e,t)=>3*t-6*e,Gb=e=>3*e,ha=(e,t,n)=>((Yb(t,n)*e+Zb(t,n))*e+Gb(t))*e,Xb=(e,t,n)=>3*Yb(t,n)*e*e+2*Zb(t,n)*e+Gb(t),VB=1e-7,WB=10;function UB(e,t,n,r,o){let s,i,l=0;do i=t+(n-t)/2,s=ha(i,r,o)-e,s>0?n=i:t=i;while(Math.abs(s)>VB&&++l<WB);return i}const qB=8,KB=.001;function YB(e,t,n,r){for(let o=0;o<qB;++o){const s=Xb(t,n,r);if(s===0)return t;const i=ha(t,n,r)-e;t-=i/s}return t}const Nl=11,xl=1/(Nl-1);function ZB(e,t,n,r){if(e===t&&n===r)return Bb;const o=new Float32Array(Nl);for(let i=0;i<Nl;++i)o[i]=ha(i*xl,e,n);function s(i){let l=0,a=1;const c=Nl-1;for(;a!==c&&o[a]<=i;++a)l+=xl;--a;const u=(i-o[a])/(o[a+1]-o[a]),d=l+u*xl,f=Xb(d,e,n);return f>=KB?YB(i,d,e,n):f===0?d:UB(i,l,l+xl,e,n)}return i=>i===0||i===1?i:ha(s(i),t,r)}const Dc={};class GB{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,r){if(this.subscriptions.size)for(const o of this.subscriptions)o(t,n,r)}clear(){this.subscriptions.clear()}}function Bm(e){return!isNaN(parseFloat(e))}class XB{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new GB,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:r,timestamp:o}=kb();this.lastUpdated!==o&&(this.timeDelta=r,this.lastUpdated=o),Zu.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Zu.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=Bm(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=Bm(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Kb(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:r}=t(n);this.stopAnimation=r}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function JB(e){return new XB(e)}const{isArray:QB}=Array;function eH(){const e=z({}),t=r=>{const o=s=>{e.value[s]&&(e.value[s].stop(),e.value[s].destroy(),delete e.value[s])};r?QB(r)?r.forEach(o):o(r):Object.keys(e.value).forEach(o)},n=(r,o,s)=>{if(e.value[r])return e.value[r];const i=JB(o);return i.onChange(l=>s[r]=l),e.value[r]=i,i};return n2(t),{motionValues:e,get:n,stop:t}}function tH(e){return Array.isArray(e)}function Zr(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function jc(e){return{type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function nH(e){return{type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}}function Nc(){return{type:"keyframes",ease:"linear",duration:300}}function rH(e){return{type:"keyframes",duration:800,values:e}}const Hm={default:nH,x:Zr,y:Zr,z:Zr,rotate:Zr,rotateX:Zr,rotateY:Zr,rotateZ:Zr,scaleX:jc,scaleY:jc,scale:jc,backgroundColor:Nc,color:Nc,opacity:Nc};function Jb(e,t){let n;return tH(t)?n=rH:n=Hm[e]||Hm.default,{to:t,...n(t)}}const Vm={...Wi,transform:Math.round},Qb={color:nn,backgroundColor:nn,outlineColor:nn,fill:nn,stroke:nn,borderColor:nn,borderTopColor:nn,borderRightColor:nn,borderBottomColor:nn,borderLeftColor:nn,borderWidth:Ne,borderTopWidth:Ne,borderRightWidth:Ne,borderBottomWidth:Ne,borderLeftWidth:Ne,borderRadius:Ne,radius:Ne,borderTopLeftRadius:Ne,borderTopRightRadius:Ne,borderBottomRightRadius:Ne,borderBottomLeftRadius:Ne,width:Ne,maxWidth:Ne,height:Ne,maxHeight:Ne,size:Ne,top:Ne,right:Ne,bottom:Ne,left:Ne,padding:Ne,paddingTop:Ne,paddingRight:Ne,paddingBottom:Ne,paddingLeft:Ne,margin:Ne,marginTop:Ne,marginRight:Ne,marginBottom:Ne,marginLeft:Ne,rotate:Yr,rotateX:Yr,rotateY:Yr,rotateZ:Yr,scale:_l,scaleX:_l,scaleY:_l,scaleZ:_l,skew:Yr,skewX:Yr,skewY:Yr,distance:Ne,translateX:Ne,translateY:Ne,translateZ:Ne,x:Ne,y:Ne,z:Ne,perspective:Ne,transformPerspective:Ne,opacity:ri,originX:Lm,originY:Lm,originZ:Ne,zIndex:Vm,filter:ed,WebkitFilter:ed,fillOpacity:ri,strokeOpacity:ri,numOctaves:Vm},yf=e=>Qb[e];function ey(e,t){return t&&typeof e=="number"&&t.transform?t.transform(e):e}function oH(e,t){let n=yf(e);return n!==ed&&(n=Ui),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const sH={linear:Bb,easeIn:gf,easeInOut:Hb,easeOut:SB,circIn:Vb,circInOut:$B,circOut:Wb,backIn:bf,backInOut:EB,backOut:CB,anticipate:OB,bounceIn:MB,bounceInOut:AB,bounceOut:pa};function Wm(e){if(Array.isArray(e)){const[t,n,r,o]=e;return ZB(t,n,r,o)}else if(typeof e=="string")return sH[e];return e}function iH(e){return Array.isArray(e)&&typeof e[0]!="number"}function Um(e,t){return e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Ui.test(t)&&!t.startsWith("url("))}function lH(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function aH({ease:e,times:t,delay:n,...r}){const o={...r};return t&&(o.offset=t),e&&(o.ease=iH(e)?e.map(Wm):Wm(e)),n&&(o.elapsed=-n),o}function cH(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),lH(t),uH(e)||(e={...e,...Jb(n,t.to)}),{...t,...aH(e)}}function uH({delay:e,repeat:t,repeatType:n,repeatDelay:r,from:o,...s}){return!!Object.keys(s).length}function dH(e,t){return e[t]||e.default||e}function fH(e,t,n,r,o){const s=dH(r,e);let i=s.from===null||s.from===void 0?t.get():s.from;const l=Um(e,n);i==="none"&&l&&typeof n=="string"&&(i=oH(e,n));const a=Um(e,i);function c(d){const f={from:i,to:n,velocity:r.velocity?r.velocity:t.getVelocity(),onUpdate:m=>t.set(m)};return s.type==="inertia"||s.type==="decay"?HB({...f,...s}):qb({...cH(s,f,e),onUpdate:m=>{f.onUpdate(m),s.onUpdate&&s.onUpdate(m)},onComplete:()=>{r.onComplete&&r.onComplete(),o&&o(),d&&d()}})}function u(d){return t.set(n),r.onComplete&&r.onComplete(),o&&o(),d&&d(),{stop:()=>{}}}return!a||!l||s.type===!1?u:c}function pH(){const{motionValues:e,stop:t,get:n}=eH();return{motionValues:e,stop:t,push:(o,s,i,l={},a)=>{const c=i[o],u=n(o,c,i);if(l&&l.immediate){u.set(s);return}const d=fH(o,u,s,l,a);u.start(d)}}}function hH(e,t={},{motionValues:n,push:r,stop:o}=pH()){const s=D(t),i=z(!1);be(n,d=>{i.value=Object.values(d).filter(f=>f.isAnimating()).length>0},{immediate:!0,deep:!0});const l=d=>{if(!s||!s[d])throw new Error(`The variant ${d} does not exist.`);return s[d]},a=d=>(typeof d=="string"&&(d=l(d)),Promise.all(Object.entries(d).map(([f,m])=>{if(f!=="transition")return new Promise(h=>r(f,m,e,d.transition||Jb(f,d[f]),h))}).filter(Boolean)));return{isAnimating:i,apply:a,set:d=>{const f=au(d)?d:l(d);Object.entries(f).forEach(([m,h])=>{m!=="transition"&&r(m,h,e,{immediate:!0})})},leave:async d=>{let f;if(s&&(s.leave&&(f=s.leave),!s.leave&&s.initial&&(f=s.initial)),!f){d();return}await a(f),d()},stop:o}}const wf=typeof window<"u",mH=()=>wf&&window.onpointerdown===null,vH=()=>wf&&window.ontouchstart===null,gH=()=>wf&&window.onmousedown===null;function bH({target:e,state:t,variants:n,apply:r}){const o=D(n),s=z(!1),i=z(!1),l=z(!1),a=C(()=>{let u=[];return o&&(o.hovered&&(u=[...u,...Object.keys(o.hovered)]),o.tapped&&(u=[...u,...Object.keys(o.tapped)]),o.focused&&(u=[...u,...Object.keys(o.focused)])),u}),c=C(()=>{const u={};Object.assign(u,t.value),s.value&&o.hovered&&Object.assign(u,o.hovered),i.value&&o.tapped&&Object.assign(u,o.tapped),l.value&&o.focused&&Object.assign(u,o.focused);for(const d in u)a.value.includes(d)||delete u[d];return u});o.hovered&&(Be(e,"mouseenter",()=>s.value=!0),Be(e,"mouseleave",()=>{s.value=!1,i.value=!1}),Be(e,"mouseout",()=>{s.value=!1,i.value=!1})),o.tapped&&(gH()&&(Be(e,"mousedown",()=>i.value=!0),Be(e,"mouseup",()=>i.value=!1)),mH()&&(Be(e,"pointerdown",()=>i.value=!0),Be(e,"pointerup",()=>i.value=!1)),vH()&&(Be(e,"touchstart",()=>i.value=!0),Be(e,"touchend",()=>i.value=!1))),o.focused&&(Be(e,"focus",()=>l.value=!0),Be(e,"blur",()=>l.value=!1)),be(c,r)}function yH({set:e,target:t,variants:n,variant:r}){const o=D(n);be(()=>t,()=>{o&&(o.initial&&e("initial"),o.enter&&(r.value="enter"))},{immediate:!0,flush:"pre"})}function wH({state:e,apply:t}){be(e,n=>{n&&t(n)},{immediate:!0})}function _H({target:e,variants:t,variant:n}){const r=D(t);r&&(r.visible||r.visibleOnce)&&q2(e,([{isIntersecting:o}])=>{r.visible?o?n.value="visible":n.value="initial":r.visibleOnce&&(o&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function xH(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&yH(e),t.syncVariants&&wH(e),t.visibilityHooks&&_H(e),t.eventListeners&&bH(e)}function ty(e={}){const t=ct({...e}),n=z({});return be(t,()=>{const r={};for(const[o,s]of Object.entries(t)){const i=yf(o),l=ey(s,i);r[o]=l}n.value=r},{immediate:!0,deep:!0}),{state:t,style:n}}function _f(e,t){be(()=>Vt(e),n=>{n&&t(n)},{immediate:!0})}const kH={x:"translateX",y:"translateY",z:"translateZ"};function ny(e={},t=!0){const n=ct({...e}),r=z("");return be(n,o=>{let s="",i=!1;if(t&&(o.x||o.y||o.z)){const l=[o.x||0,o.y||0,o.z||0].map(Ne.transform).join(",");s+=`translate3d(${l}) `,i=!0}for(const[l,a]of Object.entries(o)){if(t&&(l==="x"||l==="y"||l==="z"))continue;const c=yf(l),u=ey(a,c);s+=`${kH[l]||l}(${u}) `}t&&!i&&(s+="translateZ(0px) "),r.value=s.trim()},{immediate:!0,deep:!0}),{state:n,transform:r}}const SH=["","X","Y","Z"],$H=["perspective","translate","scale","rotate","skew"],ry=["transformPerspective","x","y","z"];$H.forEach(e=>{SH.forEach(t=>{const n=e+t;ry.push(n)})});const CH=new Set(ry);function xf(e){return CH.has(e)}const EH=new Set(["originX","originY","originZ"]);function oy(e){return EH.has(e)}function OH(e){const t={},n={};return Object.entries(e).forEach(([r,o])=>{xf(r)||oy(r)?t[r]=o:n[r]=o}),{transform:t,style:n}}function sy(e){const{transform:t,style:n}=OH(e),{transform:r}=ny(t),{style:o}=ty(n);return r.value&&(o.value.transform=r.value),o.value}function IH(e,t){let n,r;const{state:o,style:s}=ty();return _f(e,i=>{r=i;for(const l of Object.keys(Qb))i.style[l]===null||i.style[l]===""||xf(l)||oy(l)||(o[l]=i.style[l]);n&&Object.entries(n).forEach(([l,a])=>i.style[l]=a),t&&t(o)}),be(s,i=>{if(!r){n=i;return}for(const l in i)r.style[l]=i[l]},{immediate:!0}),{style:o}}function PH(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=r=>r.endsWith("px")||r.endsWith("deg")?parseFloat(r):isNaN(Number(r))?Number(r):r;return t.reduce((r,o)=>{if(!o)return r;const[s,i]=o.split("("),a=i.split(",").map(u=>n(u.endsWith(")")?u.replace(")",""):u.trim())),c=a.length===1?a[0]:a;return{...r,[s]:c}},{})}function TH(e,t){Object.entries(PH(t)).forEach(([n,r])=>{const o=["x","y","z"];if(n==="translate3d"){if(r===0){o.forEach(s=>e[s]=0);return}r.forEach((s,i)=>e[o[i]]=s);return}if(r=parseFloat(r),n==="translateX"){e.x=r;return}if(n==="translateY"){e.y=r;return}if(n==="translateZ"){e.z=r;return}e[n]=r})}function MH(e,t){let n,r;const{state:o,transform:s}=ny();return _f(e,i=>{r=i,i.style.transform&&TH(o,i.style.transform),n&&(i.style.transform=n),t&&t(o)}),be(s,i=>{if(!r){n=i;return}r.style.transform=i},{immediate:!0}),{transform:o}}function AH(e,t){const n=ct({}),r=i=>Object.entries(i).forEach(([l,a])=>n[l]=a),{style:o}=IH(e,r),{transform:s}=MH(e,r);return be(n,i=>{Object.entries(i).forEach(([l,a])=>{const c=xf(l)?s:o;c[l]&&c[l]===a||(c[l]=a)})},{immediate:!0,deep:!0}),_f(e,()=>t&&r(t)),{motionProperties:n,style:o,transform:s}}function RH(e={}){const t=D(e),n=z();return{state:C(()=>{if(n.value)return t[n.value]}),variant:n}}function iy(e,t={},n){const{motionProperties:r}=AH(e),{variant:o,state:s}=RH(t),i=hH(r,t),l={target:e,variant:o,variants:t,state:s,motionProperties:r,...i};return xH(l,n),l}const LH=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"];function DH(e,t){const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};n&&(n.variants&&au(n.variants)&&(t.value={...t.value,...n.variants}),LH.forEach(r=>{if(r==="delay"){if(n&&n[r]&&typeof n[r]=="number"){const o=n[r];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:o,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:o,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:o,...t.value.visibleOnce.transition}))}return}r==="visible-once"&&(r="visibleOnce"),n&&n[r]&&au(n[r])&&(t.value[r]=n[r])}))}function Fc(e){return{created:(n,r,o)=>{const s=r.value&&typeof r.value=="string"?r.value:o.key;s&&Dc[s]&&Dc[s].stop();const i=z(e||{});typeof r.value=="object"&&(i.value=r.value),DH(o,i);const l=iy(n,i);n.motionInstance=l,s&&(Dc[s]=l)},getSSRProps(n,r){let{initial:o}=n.value||r&&(r==null?void 0:r.props)||{};o=D(o);const s=Nz((e==null?void 0:e.initial)||{},o||{});return!s||Object.keys(s).length===0?void 0:{style:sy(s)}}}}const jH={initial:{opacity:0},enter:{opacity:1}},NH={initial:{opacity:0},visible:{opacity:1}},FH={initial:{opacity:0},visibleOnce:{opacity:1}},zH={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},BH={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},HH={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},VH={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},WH={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},UH={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},qH={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},KH={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},YH={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},ZH={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},GH={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},XH={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},JH={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},QH={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},e9={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},t9={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},n9={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},r9={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},o9={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},s9={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},i9={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},l9={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},a9={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},c9={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},u9={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},d9={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},f9={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},td={__proto__:null,fade:jH,fadeVisible:NH,fadeVisibleOnce:FH,pop:zH,popVisible:BH,popVisibleOnce:HH,rollBottom:JH,rollLeft:VH,rollRight:qH,rollTop:ZH,rollVisibleBottom:QH,rollVisibleLeft:WH,rollVisibleOnceBottom:e9,rollVisibleOnceLeft:UH,rollVisibleOnceRight:YH,rollVisibleOnceTop:XH,rollVisibleRight:KH,rollVisibleTop:GH,slideBottom:u9,slideLeft:t9,slideRight:o9,slideTop:l9,slideVisibleBottom:d9,slideVisibleLeft:n9,slideVisibleOnceBottom:f9,slideVisibleOnceLeft:r9,slideVisibleOnceRight:i9,slideVisibleOnceTop:c9,slideVisibleRight:s9,slideVisibleTop:a9},p9=pe({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var l;const t=n_(),n=ct({});if(!e.is&&!t.default)return()=>F("div",{});const r=C(()=>{let a;return e.preset&&(a=td[e.preset]),a}),o=C(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),s=C(()=>{const a={...o.value,...r.value||{},...e.variants||{}};return e.delay&&(a.enter.transition={...a.enter.transition},a.enter.transition.delay=parseInt(e.delay)),a}),i=C(()=>{if(!e.is)return;let a=e.is;return typeof i.value=="string"&&!uv(a)&&(a=di(a)),a});if(((l=process==null?void 0:process.env)==null?void 0:l.NODE_ENV)==="development"||process!=null&&process.dev){const a=c=>{var u;(u=c.variants)!=null&&u.initial&&c.set("initial"),setTimeout(()=>{var d,f,m;(d=c.variants)!=null&&d.enter&&c.apply("enter"),(f=c.variants)!=null&&f.visible&&c.apply("visible"),(m=c.variants)!=null&&m.visibleOnce&&c.apply("visibleOnce")},10)};Di(()=>Object.entries(n).forEach(([c,u])=>a(u)))}return{slots:t,component:i,motionConfig:s,instances:n}},render({slots:e,motionConfig:t,instances:n,component:r}){var l;const o=sy(t.initial||{}),s=(a,c)=>(a.props||(a.props={}),a.props.style=o,a.props.onVnodeMounted=({el:u})=>{const d=iy(u,t);n[c]=d},a);if(r){const a=F(r,void 0,e);return s(a,0),a}return(((l=e.default)==null?void 0:l.call(e))||[]).map((a,c)=>s(a,c))}});function h9(e){const t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",r=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,o=>`-${o}`).toLowerCase().replace(/\s+/g,"-").replace(r,o=>n.charAt(t.indexOf(o))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const m9={install(e,t){if(e.directive("motion",Fc()),e.component("Motion",p9),!t||t&&!t.excludePresets)for(const n in td){const r=td[n];e.directive(`motion-${h9(n)}`,Fc(r))}if(t&&t.directives)for(const n in t.directives){const r=t.directives[n];r.initial,e.directive(`motion-${n}`,Fc(r))}}};var qm;const si=typeof window<"u",v9=Object.prototype.toString,g9=e=>v9.call(e)==="[object Object]";si&&((qm=window==null?void 0:window.navigator)!=null&&qm.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function b9(e){return ld()?(hv(e),!0):!1}function y9(e){var t;const n=D(e);return(t=n==null?void 0:n.$el)!=null?t:n}const w9=si?window:void 0,Km=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ym="__vueuse_ssr_handlers__";Km[Ym]=Km[Ym]||{};function _9(e,t={}){const{immediate:n=!0,window:r=w9}=t,o=z(!1);let s=null;function i(){!o.value||!r||(e(),s=r.requestAnimationFrame(i))}function l(){!o.value&&r&&(o.value=!0,i())}function a(){o.value=!1,s!=null&&r&&(r.cancelAnimationFrame(s),s=null)}return n&&l(),b9(a),{isActive:o,pause:a,resume:l}}var Zm;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Zm||(Zm={}));const Va="vue-starport-injection",ly="vue-starport-options",x9={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},ay={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var k9=Object.defineProperty,ma=Object.getOwnPropertySymbols,cy=Object.prototype.hasOwnProperty,uy=Object.prototype.propertyIsEnumerable,Gm=(e,t,n)=>t in e?k9(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,S9=(e,t)=>{for(var n in t||(t={}))cy.call(t,n)&&Gm(e,n,t[n]);if(ma)for(var n of ma(t))uy.call(t,n)&&Gm(e,n,t[n]);return e},Xm=(e,t)=>{var n={};for(var r in e)cy.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&ma)for(var r of ma(e))t.indexOf(r)<0&&uy.call(e,r)&&(n[r]=e[r]);return n};const $9=pe({name:"StarportProxy",props:S9({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},ay),setup(e,t){const n=ie(Va),r=C(()=>n.getInstance(e.port,e.component)),o=z(),s=r.value.generateId(),i=z(!1);return r.value.isVisible||(r.value.land(),i.value=!0),It(async()=>{if(r.value.el){console.error(`[Vue Starport] Multiple proxies of "${r.value.componentName}" with port "${e.port}" detected. The later one will be ignored.`);return}if(r.value.el=o.value,await Et(),i.value=!0,r.value.rect.update(),r.value.rect.width===0||r.value.rect.height===0){const l=r.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${r.value.componentName}" (port "${e.port}") has no ${l} on initial render, have you set the size for it?`),console.warn("element:",r.value.el),console.warn("rect:",r.value.rect)}}),jt(async()=>{r.value.rect.update(),r.value.liftOff(),r.value.el=void 0,i.value=!1,!r.value.options.keepAlive&&(await Et(),await Et(),!r.value.el&&n.dispose(r.value.port))}),be(()=>e,async()=>{r.value.props&&await Et();const l=e,{props:a}=l,c=Xm(l,["props"]);r.value.props=a||{},r.value.setLocalOptions(c)},{deep:!0,immediate:!0}),()=>{const l=e,{initialProps:a,mountedProps:c}=l,u=Xm(l,["initialProps","mountedProps"]),d=xo(u,(i.value?c:a)||{});return F("div",xo(d,{id:s,ref:o,"data-starport-proxy":r.value.componentId,"data-starport-landed":r.value.isLanded?"true":void 0,"data-starport-floating":r.value.isLanded?void 0:"true"}),t.slots.default?F(t.slots.default):void 0)}}});var C9=Object.defineProperty,E9=Object.defineProperties,O9=Object.getOwnPropertyDescriptors,Jm=Object.getOwnPropertySymbols,I9=Object.prototype.hasOwnProperty,P9=Object.prototype.propertyIsEnumerable,Qm=(e,t,n)=>t in e?C9(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,T9=(e,t)=>{for(var n in t||(t={}))I9.call(t,n)&&Qm(e,n,t[n]);if(Jm)for(var n of Jm(t))P9.call(t,n)&&Qm(e,n,t[n]);return e},M9=(e,t)=>E9(e,O9(t));const A9=pe({name:"Starport",inheritAttrs:!0,props:ay,setup(e,t){const n=z(!1);return It(()=>{if(n.value=!0,!ie(Va))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var i,l;const r=(l=(i=t.slots).default)==null?void 0:l.call(i);if(!r)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(r.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${r.length}`);const o=r[0];let s=o.type;return(!g9(s)||lr(s))&&(s={render(){return r}}),F($9,M9(T9({},e),{key:e.port,component:_a(s),props:o.props}))}}});function R9(e){const t=ct({height:0,width:0,left:0,top:0,update:r,listen:s,pause:i,margin:"0px",padding:"0px"}),n=si?document.documentElement||document.body:void 0;function r(){if(!si)return;const l=y9(e);if(!l)return;const{height:a,width:c,left:u,top:d}=l.getBoundingClientRect(),f=window.getComputedStyle(l),m=f.margin,h=f.padding;Object.assign(t,{height:a,width:c,left:u,top:n.scrollTop+d,margin:m,padding:h})}const o=_9(r,{immediate:!1});function s(){si&&(r(),o.resume())}function i(){o.pause()}return t}let L9=(e,t=21)=>(n=t)=>{let r="",o=n;for(;o--;)r+=e[Math.random()*e.length|0];return r};const ev=L9("abcdefghijklmnopqrstuvwxyz",5);function tv(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function D9(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var j9=Object.defineProperty,nv=Object.getOwnPropertySymbols,N9=Object.prototype.hasOwnProperty,F9=Object.prototype.propertyIsEnumerable,rv=(e,t,n)=>t in e?j9(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,zc=(e,t)=>{for(var n in t||(t={}))N9.call(t,n)&&rv(e,n,t[n]);if(nv)for(var n of nv(t))F9.call(t,n)&&rv(e,n,t[n]);return e};function z9(e,t,n={}){const r=D9(t),o=tv(r)||ev(),s=z(),i=z(null),l=z(!1),a=z(!1),c=Oy(!0),u=z({}),d=C(()=>zc(zc(zc({},x9),n),u.value)),f=z(0);let m;c.run(()=>{m=R9(s),be(s,async v=>{v&&(a.value=!0),await Et(),s.value||(a.value=!1)})});const h=tv(e);function b(){return`starport-${o}-${h}-${ev()}`}const y=b();return ct({el:s,id:y,port:e,props:i,rect:m,scope:c,isLanded:l,isVisible:a,options:d,liftOffTime:f,component:t,componentName:r,componentId:o,generateId:b,setLocalOptions(v={}){u.value=JSON.parse(JSON.stringify(v))},elRef(){return s},liftOff(){l.value&&(l.value=!1,f.value=Date.now(),m.listen())},land(){l.value||(l.value=!0,m.pause())}})}function B9(e){const t=ct(new Map);function n(o,s){let i=t.get(o);return i||(i=z9(o,s,e),t.set(o,i)),i.component=s,i}function r(o){var s;(s=t.get(o))==null||s.scope.stop(),t.delete(o)}return{portMap:t,dispose:r,getInstance:n}}var H9=Object.defineProperty,V9=Object.defineProperties,W9=Object.getOwnPropertyDescriptors,ov=Object.getOwnPropertySymbols,U9=Object.prototype.hasOwnProperty,q9=Object.prototype.propertyIsEnumerable,sv=(e,t,n)=>t in e?H9(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,K9=(e,t)=>{for(var n in t||(t={}))U9.call(t,n)&&sv(e,n,t[n]);if(ov)for(var n of ov(t))q9.call(t,n)&&sv(e,n,t[n]);return e},Y9=(e,t)=>V9(e,W9(t));const Z9=pe({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=ie(Va);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=C(()=>t.getInstance(e.port,e.component)),r=C(()=>{var i;return((i=n.value.el)==null?void 0:i.id)||n.value.id}),o=C(()=>{const i=Date.now()-n.value.liftOffTime,l=Math.max(0,n.value.options.duration-i),a=n.value.rect,c={position:"absolute",left:0,top:0,width:`${a.width}px`,height:`${a.height}px`,margin:a.margin,padding:a.padding,transform:`translate3d(${a.left}px,${a.top}px,0px)`};return!n.value.isVisible||!n.value.el?Y9(K9({},c),{zIndex:-1,display:"none"}):(n.value.isLanded?c.display="none":Object.assign(c,{transitionProperty:"all",transitionDuration:`${l}ms`,transitionTimingFunction:n.value.options.easing}),c)}),s={onTransitionend(i){n.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${n.value.componentName}" is too short (${i.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${n.value.options.duration/1e3}s).`)}};return()=>{const i=!!(n.value.isLanded&&n.value.el);return F("div",{style:o.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},F(ug,{to:i?`#${r.value}`:"body",disabled:!i},F(n.value.component,xo(s,n.value.props))))}}}),G9=pe({name:"StarportCarrier",setup(e,{slots:t}){const n=B9(ie(ly,{}));return Qt().appContext.app.provide(Va,n),()=>{var o;return[(o=t.default)==null?void 0:o.call(t),Array.from(n.portMap.entries()).map(([s,{component:i}])=>F(Z9,{key:s,port:s,component:i}))]}}});function X9(e={}){return{install(t){t.provide(ly,e),t.component("Starport",A9),t.component("StarportCarrier",G9)}}}function J9(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(m9),e.app.use(X9({keepAlive:!0}))}function an(e,t,n){var r;return((r=e.instance)==null?void 0:r.$).provides[t]??n}function Q9(){return{install(e){e.directive("click",{name:"v-click",mounted(t,n){var u,d,f,m,h,b;if(ti.value||(u=an(n,Il))!=null&&u.value)return;const r=an(n,Vo),o=an(n,Ol),s=an(n,lu),i=n.modifiers.hide!==!1&&n.modifiers.hide!=null,l=n.modifiers.fade!==!1&&n.modifiers.fade!=null,a=((d=r==null?void 0:r.value)==null?void 0:d.length)||0,c=l?kk:nc;if(r&&!((f=r==null?void 0:r.value)!=null&&f.includes(t))&&r.value.push(t),n.value==null&&(n.value=(m=r==null?void 0:r.value)==null?void 0:m.length),typeof n.value=="string"&&(n.value.startsWith("+")||n.value.startsWith("-"))&&(n.value=(((h=r==null?void 0:r.value)==null?void 0:h.length)||0)+Number(n.value)),!(s!=null&&s.value.has(n.value)))s==null||s.value.set(n.value,[t]);else if(!((b=s==null?void 0:s.value.get(n.value))!=null&&b.includes(t))){const y=(s==null?void 0:s.value.get(n.value))||[];s==null||s.value.set(n.value,[t].concat(y))}t==null||t.classList.toggle(Lo,!0),o&&be(o,()=>{const y=(o==null?void 0:o.value)??0,v=n.value!=null?y>=n.value:y>a;t.classList.contains(rc)||t.classList.toggle(c,!v),i!==!1&&i!==void 0&&t.classList.toggle(c,v),t.classList.toggle(xs,!1);const x=s==null?void 0:s.value.get(y);x==null||x.forEach((_,E)=>{_.classList.toggle(rl,!1),E===x.length-1?_.classList.toggle(xs,!0):_.classList.toggle(rl,!0)}),t.classList.contains(xs)||t.classList.toggle(rl,v)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Lo,!1);const r=an(n,Vo);r!=null&&r.value&&fp(r.value,t)}}),e.directive("after",{name:"v-after",mounted(t,n){var l,a,c;if(ti.value||(l=an(n,Il))!=null&&l.value)return;const r=an(n,Vo),o=an(n,Ol),s=an(n,lu),i=r==null?void 0:r.value.length;n.value==null&&(n.value=r==null?void 0:r.value.length),typeof n.value=="string"&&(n.value.startsWith("+")||n.value.startsWith("-"))&&(n.value=(((a=r==null?void 0:r.value)==null?void 0:a.length)||0)+Number(n.value)),s!=null&&s.value.has(n.value)?(c=s==null?void 0:s.value.get(n.value))==null||c.push(t):s==null||s.value.set(n.value,[t]),t==null||t.classList.toggle(Lo,!0),o&&be(o,()=>{const u=(o.value??0)>=(n.value??i??0);t.classList.contains(rc)||t.classList.toggle(nc,!u),t.classList.toggle(xs,!1),t.classList.contains(xs)||t.classList.toggle(rl,u)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(Lo,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,n){var i,l,a;if(ti.value||(i=an(n,Il))!=null&&i.value)return;const r=an(n,Vo),o=an(n,Ol),s=((l=r==null?void 0:r.value)==null?void 0:l.length)||0;r&&!((a=r==null?void 0:r.value)!=null&&a.includes(t))&&r.value.push(t),t==null||t.classList.toggle(Lo,!0),o&&be(o,()=>{const c=(o==null?void 0:o.value)??0,u=n.value!=null?c>=n.value:c>s;t.classList.toggle(nc,u),t.classList.toggle(rc,u)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Lo,!1);const r=an(n,Vo);r!=null&&r.value&&fp(r.value,t)}})}}}function e7(e,t){const n=vb(e),r=gb(t,n.currentRoute,n.currentPage);return{nav:{...n,...r},configs:Ze,themeConfigs:C(()=>Ze.themeConfig)}}function t7(){return{install(e){const t=e7(Cn,xn);e.provide($e,ct(t))}}}const vs=Cx(Dz);vs.use(sn);vs.use(wk());vs.use(Q9());vs.use(t7());J9({app:vs,router:sn});vs.mount("#app");export{aL as $,nO as A,z as B,s7 as C,Zt as D,ht as E,ze as F,xC as G,Iz as H,xn as I,fa as J,Sz as K,Tc as L,It as M,ct as N,r7 as O,i7 as P,be as Q,ce as R,_0 as S,Ye as T,Yt as U,LC as V,Rw as W,Lw as X,gi as Y,cc as Z,Ce as _,$e as a,jd as a0,Nd as a1,mt as a2,AO as a3,D5 as a4,n7 as a5,Sn as a6,Is as a7,oo as a8,Bn as a9,yu as aa,cC as ab,uC as ac,dC as ad,pC as ae,Oe as af,ji as ag,l7 as ah,Xt as ai,al as aj,gE as ak,Dg as al,hC as am,jt as an,Lg as b,Ze as c,pe as d,dw as e,Y as f,p as g,D as h,ie as i,_t as j,wz as k,R as l,$ as m,xt as n,T as o,je as p,Td as q,ss as r,Ln as s,Rn as t,o7 as u,C as v,oc as w,ge as x,p0 as y,lO as z};
