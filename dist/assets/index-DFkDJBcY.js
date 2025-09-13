(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const wf=()=>{};var Pc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Af=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[t++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[t++],a=n[t++],l=n[t++],u=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},lu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,m=o>>2,g=(o&3)<<4|l>>4;let E=(l&15)<<2|d>>6,C=d&63;u||(C=64,a||(E=64)),r.push(t[m],t[g],t[E],t[C])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(cu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Af(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,o==null||l==null||d==null||g==null)throw new Sf;const E=o<<2|l>>4;if(r.push(E),d!==64){const C=l<<4&240|d>>2;if(r.push(C),g!==64){const P=d<<6&192|g;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Sf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rf=function(n){const e=cu(n);return lu.encodeByteArray(e,!0)},uu=function(n){return Rf(n).replace(/\./g,"")},hu=function(n){try{return lu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=()=>Cf().__FIREBASE_DEFAULTS__,Pf=()=>{if(typeof process>"u"||typeof Pc>"u")return;const n=Pc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},kf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&hu(n[1]);return e&&JSON.parse(e)},Js=()=>{try{return wf()||bf()||Pf()||kf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Nf=n=>Js()?.emulatorHosts?.[n],du=()=>Js()?.config,fu=n=>Js()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function mu(n){return(await fetch(n,{credentials:"include"})).ok}const mr={};function Vf(){const n={prod:[],emulator:[]};for(const e of Object.keys(mr))mr[e]?n.emulator.push(e):n.prod.push(e);return n}function Lf(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let kc=!1;function Of(n,e){if(typeof window>"u"||typeof document>"u"||!Vn(window.location.host)||mr[n]===e||mr[n]||kc)return;mr[n]=e;function t(E){return`__firebase__banner__${E}`}const r="__firebase__banner",o=Vf().prod.length>0;function a(){const E=document.getElementById(r);E&&E.remove()}function l(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function u(E,C){E.setAttribute("width","24"),E.setAttribute("id",C),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function d(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{kc=!0,a()},E}function m(E,C){E.setAttribute("id",C),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function g(){const E=Lf(r),C=t("text"),P=document.getElementById(C)||document.createElement("span"),L=t("learnmore"),N=document.getElementById(L)||document.createElement("a"),j=t("preprendIcon"),q=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const W=E.element;l(W),m(N,L);const de=d();u(q,j),W.append(q,P,N,de),document.body.appendChild(W)}o?(P.innerText="Preview backend disconnected.",q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function xf(){const n=Js()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ff(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Uf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Bf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qf(){const n=Ae();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function jf(){return!xf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $f(){try{return typeof indexedDB=="object"}catch{return!1}}function Hf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf="FirebaseError";class yt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=zf,Object.setPrototypeOf(this,yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lr.prototype.create)}}class Lr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?Wf(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new yt(s,l,r)}}function Wf(n,e){return n.replace(Gf,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Gf=/\{\$([^}]+)}/g;function Kf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Zt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const o=n[s],a=e[s];if(Nc(o)&&Nc(a)){if(!Zt(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Nc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function or(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,o]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(o)}}),e}function ar(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Qf(n,e){const t=new Jf(n,e);return t.subscribe.bind(t)}class Jf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Yf(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ui),s.error===void 0&&(s.error=Ui),s.complete===void 0&&(s.complete=Ui);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ui(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(n){return n&&n._delegate?n._delegate:n}class en{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Df;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(em(e))try{this.getOrInitializeService({instanceIdentifier:Kt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=Kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kt){return this.instances.has(e)}getOptions(e=Kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Zf(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Kt){return this.component?this.component.multipleInstances?e:Kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zf(n){return n===Kt?void 0:n}function em(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Xf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($||($={}));const nm={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},rm=$.INFO,sm={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},im=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=sm[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fo{constructor(e){this.name=e,this._logLevel=rm,this._logHandler=im,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const om=(n,e)=>e.some(t=>n instanceof t);let Dc,Vc;function am(){return Dc||(Dc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cm(){return Vc||(Vc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pu=new WeakMap,no=new WeakMap,gu=new WeakMap,Bi=new WeakMap,Uo=new WeakMap;function lm(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(Pt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&pu.set(t,n)}).catch(()=>{}),Uo.set(e,n),e}function um(n){if(no.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});no.set(n,e)}let ro={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return no.get(n);if(e==="objectStoreNames")return n.objectStoreNames||gu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Pt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function hm(n){ro=n(ro)}function dm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(qi(this),e,...t);return gu.set(r,e.sort?e.sort():[e]),Pt(r)}:cm().includes(n)?function(...e){return n.apply(qi(this),e),Pt(pu.get(this))}:function(...e){return Pt(n.apply(qi(this),e))}}function fm(n){return typeof n=="function"?dm(n):(n instanceof IDBTransaction&&um(n),om(n,am())?new Proxy(n,ro):n)}function Pt(n){if(n instanceof IDBRequest)return lm(n);if(Bi.has(n))return Bi.get(n);const e=fm(n);return e!==n&&(Bi.set(n,e),Uo.set(e,n)),e}const qi=n=>Uo.get(n);function mm(n,e,{blocked:t,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,e),l=Pt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Pt(a.result),u.oldVersion,u.newVersion,Pt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{o&&u.addEventListener("close",()=>o()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const pm=["get","getKey","getAll","getAllKeys","count"],gm=["put","add","delete","clear"],ji=new Map;function Lc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ji.get(e))return ji.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=gm.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||pm.includes(t)))return;const o=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),s&&u.done]))[0]};return ji.set(e,o),o}hm(n=>({...n,get:(e,t,r)=>Lc(e,t)||n.get(e,t,r),has:(e,t)=>!!Lc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(_m(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function _m(n){return n.getComponent()?.type==="VERSION"}const so="@firebase/app",Oc="0.14.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt=new Fo("@firebase/app"),Em="@firebase/app-compat",Im="@firebase/analytics-compat",vm="@firebase/analytics",Tm="@firebase/app-check-compat",wm="@firebase/app-check",Am="@firebase/auth",Sm="@firebase/auth-compat",Rm="@firebase/database",Cm="@firebase/data-connect",bm="@firebase/database-compat",Pm="@firebase/functions",km="@firebase/functions-compat",Nm="@firebase/installations",Dm="@firebase/installations-compat",Vm="@firebase/messaging",Lm="@firebase/messaging-compat",Om="@firebase/performance",Mm="@firebase/performance-compat",xm="@firebase/remote-config",Fm="@firebase/remote-config-compat",Um="@firebase/storage",Bm="@firebase/storage-compat",qm="@firebase/firestore",jm="@firebase/ai",$m="@firebase/firestore-compat",Hm="firebase",zm="12.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io="[DEFAULT]",Wm={[so]:"fire-core",[Em]:"fire-core-compat",[vm]:"fire-analytics",[Im]:"fire-analytics-compat",[wm]:"fire-app-check",[Tm]:"fire-app-check-compat",[Am]:"fire-auth",[Sm]:"fire-auth-compat",[Rm]:"fire-rtdb",[Cm]:"fire-data-connect",[bm]:"fire-rtdb-compat",[Pm]:"fire-fn",[km]:"fire-fn-compat",[Nm]:"fire-iid",[Dm]:"fire-iid-compat",[Vm]:"fire-fcm",[Lm]:"fire-fcm-compat",[Om]:"fire-perf",[Mm]:"fire-perf-compat",[xm]:"fire-rc",[Fm]:"fire-rc-compat",[Um]:"fire-gcs",[Bm]:"fire-gcs-compat",[qm]:"fire-fst",[$m]:"fire-fst-compat",[jm]:"fire-vertex","fire-js":"fire-js",[Hm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=new Map,Gm=new Map,oo=new Map;function Mc(n,e){try{n.container.addComponent(e)}catch(t){dt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Sn(n){const e=n.name;if(oo.has(e))return dt.debug(`There were multiple attempts to register component ${e}.`),!1;oo.set(e,n);for(const t of Ps.values())Mc(t,n);for(const t of Gm.values())Mc(t,n);return!0}function Bo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Le(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kt=new Lr("app","Firebase",Km);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new en("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=zm;function yu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:io,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw kt.create("bad-app-name",{appName:String(s)});if(t||(t=du()),!t)throw kt.create("no-options");const o=Ps.get(s);if(o){if(Zt(t,o.options)&&Zt(r,o.config))return o;throw kt.create("duplicate-app",{appName:s})}const a=new tm(s);for(const u of oo.values())a.addComponent(u);const l=new Qm(t,r,a);return Ps.set(s,l),l}function Jm(n=io){const e=Ps.get(n);if(!e&&n===io&&du())return yu();if(!e)throw kt.create("no-app",{appName:n});return e}function Nt(n,e,t){let r=Wm[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dt.warn(a.join(" "));return}Sn(new en(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym="firebase-heartbeat-database",Xm=1,vr="firebase-heartbeat-store";let $i=null;function _u(){return $i||($i=mm(Ym,Xm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(vr)}catch(t){console.warn(t)}}}}).catch(n=>{throw kt.create("idb-open",{originalErrorMessage:n.message})})),$i}async function Zm(n){try{const t=(await _u()).transaction(vr),r=await t.objectStore(vr).get(Eu(n));return await t.done,r}catch(e){if(e instanceof yt)dt.warn(e.message);else{const t=kt.create("idb-get",{originalErrorMessage:e?.message});dt.warn(t.message)}}}async function xc(n,e){try{const r=(await _u()).transaction(vr,"readwrite");await r.objectStore(vr).put(e,Eu(n)),await r.done}catch(t){if(t instanceof yt)dt.warn(t.message);else{const r=kt.create("idb-set",{originalErrorMessage:t?.message});dt.warn(r.message)}}}function Eu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=1024,tp=30;class np{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new sp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Fc();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>tp){const s=ip(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){dt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Fc(),{heartbeatsToSend:t,unsentEntries:r}=rp(this._heartbeatsCache.heartbeats),s=uu(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return dt.warn(e),""}}}function Fc(){return new Date().toISOString().substring(0,10)}function rp(n,e=ep){const t=[];let r=n.slice();for(const s of n){const o=t.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Uc(t)>e){o.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Uc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class sp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $f()?Hf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Zm(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return xc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return xc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Uc(n){return uu(JSON.stringify({version:2,heartbeats:n})).length}function ip(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(n){Sn(new en("platform-logger",e=>new ym(e),"PRIVATE")),Sn(new en("heartbeat",e=>new np(e),"PRIVATE")),Nt(so,Oc,n),Nt(so,Oc,"esm2020"),Nt("fire-js","")}op("");var ap="firebase",cp="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt(ap,cp,"app");function Iu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lp=Iu,vu=new Lr("auth","Firebase",Iu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=new Fo("@firebase/auth");function up(n,...e){ks.logLevel<=$.WARN&&ks.warn(`Auth (${Ln}): ${n}`,...e)}function _s(n,...e){ks.logLevel<=$.ERROR&&ks.error(`Auth (${Ln}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(n,...e){throw qo(n,...e)}function Ge(n,...e){return qo(n,...e)}function Tu(n,e,t){const r={...lp(),[e]:t};return new Lr("auth","Firebase",r).create(e,{appName:n.name})}function Ke(n){return Tu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return vu.create(n,...e)}function x(n,e,...t){if(!n)throw qo(e,...t)}function ot(n){const e="INTERNAL ASSERTION FAILED: "+n;throw _s(e),new Error(e)}function ft(n,e){n||ot(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(){return typeof self<"u"&&self.location?.href||""}function hp(){return Bc()==="http:"||Bc()==="https:"}function Bc(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hp()||Uf()||"connection"in navigator)?navigator.onLine:!0}function fp(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,t){this.shortDelay=e,this.longDelay=t,ft(t>e,"Short delay should be less than long delay!"),this.isMobile=Mf()||Bf()}get(){return dp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(n,e){ft(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],gp=new Mr(3e4,6e4);function qt(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function jt(n,e,t,r,s={}){return Au(n,s,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const l=Or({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:u,...o};return Ff()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Vn(n.emulatorConfig.host)&&(d.credentials="include"),wu.fetch()(await Su(n,n.config.apiHost,t,l),d)})}async function Au(n,e,t){n._canInitEmulator=!1;const r={...mp,...e};try{const s=new _p(n),o=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw ds(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ds(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw ds(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw ds(n,"user-disabled",a);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Tu(n,m,d);je(n,m)}}catch(s){if(s instanceof yt)throw s;je(n,"network-request-failed",{message:String(s)})}}async function xr(n,e,t,r,s={}){const o=await jt(n,e,t,r,s);return"mfaPendingCredential"in o&&je(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function Su(n,e,t,r){const s=`${e}${t}?${r}`,o=n,a=o.config.emulator?jo(n.config,s):`${n.config.apiScheme}://${s}`;return pp.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}function yp(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _p{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ge(this.auth,"network-request-failed")),gp.get())})}}function ds(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Ge(n,e,r);return s.customData._tokenResponse=t,s}function qc(n){return n!==void 0&&n.enterprise!==void 0}class Ep{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return yp(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ip(n,e){return jt(n,"GET","/v2/recaptchaConfig",qt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vp(n,e){return jt(n,"POST","/v1/accounts:delete",e)}async function Ns(n,e){return jt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Tp(n,e=!1){const t=be(n),r=await t.getIdToken(e),s=$o(r);x(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o?.sign_in_provider;return{claims:s,token:r,authTime:pr(Hi(s.auth_time)),issuedAtTime:pr(Hi(s.iat)),expirationTime:pr(Hi(s.exp)),signInProvider:a||null,signInSecondFactor:o?.sign_in_second_factor||null}}function Hi(n){return Number(n)*1e3}function $o(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return _s("JWT malformed, contained fewer than 3 sections"),null;try{const s=hu(t);return s?JSON.parse(s):(_s("Failed to decode base64 JWT payload"),null)}catch(s){return _s("Caught error parsing JWT payload as JSON",s?.toString()),null}}function jc(n){const e=$o(n);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof yt&&wp(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function wp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=pr(this.lastLoginAt),this.creationTime=pr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ds(n){const e=n.auth,t=await n.getIdToken(),r=await Tr(n,Ns(e,{idToken:t}));x(r?.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const o=s.providerUserInfo?.length?Ru(s.providerUserInfo):[],a=Rp(n.providerData,o),l=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!a?.length,d=l?u:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new co(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,m)}async function Sp(n){const e=be(n);await Ds(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Rp(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ru(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cp(n,e){const t=await Au(n,{},async()=>{const r=Or({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=n.config,a=await Su(n,s,"/v1/token",`key=${o}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return n.emulatorConfig&&Vn(n.emulatorConfig.host)&&(u.credentials="include"),wu.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function bp(n,e){return jt(n,"POST","/v2/accounts:revokeToken",qt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){x(e.length!==0,"internal-error");const t=jc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(x(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:o}=await Cp(e,t);this.updateTokensAndExpiration(r,s,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:o}=t,a=new In;return r&&(x(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(x(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(x(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new In,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(n,e){x(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Be{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Ap(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new co(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Tr(this,this.stsTokenManager.getToken(this.auth,e));return x(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Tp(this,e)}reload(){return Sp(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Be({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ds(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Le(this.auth.app))return Promise.reject(Ke(this.auth));const e=await this.getIdToken();return await Tr(this,vp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,o=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,u=t._redirectEventId??void 0,d=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:g,emailVerified:E,isAnonymous:C,providerData:P,stsTokenManager:L}=t;x(g&&L,e,"internal-error");const N=In.fromJSON(this.name,L);x(typeof g=="string",e,"internal-error"),Tt(r,e.name),Tt(s,e.name),x(typeof E=="boolean",e,"internal-error"),x(typeof C=="boolean",e,"internal-error"),Tt(o,e.name),Tt(a,e.name),Tt(l,e.name),Tt(u,e.name),Tt(d,e.name),Tt(m,e.name);const j=new Be({uid:g,auth:e,email:s,emailVerified:E,displayName:r,isAnonymous:C,photoURL:a,phoneNumber:o,tenantId:l,stsTokenManager:N,createdAt:d,lastLoginAt:m});return P&&Array.isArray(P)&&(j.providerData=P.map(q=>({...q}))),u&&(j._redirectEventId=u),j}static async _fromIdTokenResponse(e,t,r=!1){const s=new In;s.updateFromServerResponse(t);const o=new Be({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ds(o),o}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];x(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?Ru(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!o?.length,l=new In;l.updateFromIdToken(r);const u=new Be({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new co(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!o?.length};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=new Map;function at(n){ft(n instanceof Function,"Expected a class definition");let e=$c.get(n);return e?(ft(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,$c.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Cu.type="NONE";const Hc=Cu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(n,e,t){return`firebase:${n}:${e}:${t}`}class vn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:o}=this.auth;this.fullUserKey=Es(this.userKey,s.apiKey,o),this.fullPersistenceKey=Es("persistence",s.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ns(this.auth,{idToken:e}).catch(()=>{});return t?Be._fromGetAccountInfoResponse(this.auth,t,e):null}return Be._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new vn(at(Hc),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=s[0]||at(Hc);const a=Es(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const m=await d._get(a);if(m){let g;if(typeof m=="string"){const E=await Ns(e,{idToken:m}).catch(()=>{});if(!E)break;g=await Be._fromGetAccountInfoResponse(e,E,m)}else g=Be._fromJSON(e,m);d!==o&&(l=g),o=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new vn(o,e,r):(o=u[0],l&&await o._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new vn(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Nu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vu(e))return"Blackberry";if(Lu(e))return"Webos";if(Pu(e))return"Safari";if((e.includes("chrome/")||ku(e))&&!e.includes("edge/"))return"Chrome";if(Du(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function bu(n=Ae()){return/firefox\//i.test(n)}function Pu(n=Ae()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ku(n=Ae()){return/crios\//i.test(n)}function Nu(n=Ae()){return/iemobile/i.test(n)}function Du(n=Ae()){return/android/i.test(n)}function Vu(n=Ae()){return/blackberry/i.test(n)}function Lu(n=Ae()){return/webos/i.test(n)}function Ho(n=Ae()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Pp(n=Ae()){return Ho(n)&&!!window.navigator?.standalone}function kp(){return qf()&&document.documentMode===10}function Ou(n=Ae()){return Ho(n)||Du(n)||Lu(n)||Vu(n)||/windows phone/i.test(n)||Nu(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(n,e=[]){let t;switch(n){case"Browser":t=zc(Ae());break;case"Worker":t=`${zc(Ae())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ln}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,l)=>{try{const u=e(o);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dp(n,e={}){return jt(n,"GET","/v2/passwordPolicy",qt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=6;class Lp{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Vp,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wc(this),this.idTokenSubscription=new Wc(this),this.beforeStateQueue=new Np(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=at(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await vn.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ns(this,{idToken:e}),r=await Be._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Le(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=this.redirectUser?._redirectEventId,a=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&l?.user&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ds(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Le(this.app))return Promise.reject(Ke(this));const t=e?be(e):null;return t&&x(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Le(this.app)?Promise.reject(Ke(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Le(this.app)?Promise.reject(Ke(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(at(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Dp(this),t=new Lp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Lr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await bp(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&at(e)||this._popupRedirectResolver;x(t,this,"argument-error"),this.redirectPersistenceManager=await vn.create(this,[at(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Le(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&up(`Error while retrieving App Check token: ${e.error}`),e?.token}}function $t(n){return be(n)}class Wc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Qf(t=>this.observer=t)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ys={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Mp(n){Ys=n}function xu(n){return Ys.loadJS(n)}function xp(){return Ys.recaptchaEnterpriseScript}function Fp(){return Ys.gapiScript}function Up(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Bp{constructor(){this.enterprise=new qp}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class qp{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const jp="recaptcha-enterprise",Fu="NO_RECAPTCHA";class $p{constructor(e){this.type=jp,this.auth=$t(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,l)=>{Ip(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new Ep(u);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,a(d.siteKey)}}).catch(u=>{l(u)})})}function s(o,a,l){const u=window.grecaptcha;qc(u)?u.enterprise.ready(()=>{u.enterprise.execute(o,{action:e}).then(d=>{a(d)}).catch(()=>{a(Fu)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Bp().execute("siteKey",{action:"verify"}):new Promise((o,a)=>{r(this.auth).then(l=>{if(!t&&qc(window.grecaptcha))s(l,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=xp();u.length!==0&&(u+=l),xu(u).then(()=>{s(l,o,a)}).catch(d=>{a(d)})}}).catch(l=>{a(l)})})}}async function Gc(n,e,t,r=!1,s=!1){const o=new $p(n);let a;if(s)a=Fu;else try{a=await o.verify(t)}catch{a=await o.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function lo(n,e,t,r,s){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Gc(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Gc(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(n,e){const t=Bo(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),o=t.getOptions();if(Zt(o,e??{}))return s;je(s,"already-initialized")}return t.initialize({options:e})}function zp(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(at);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Wp(n,e,t){const r=$t(n);x(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,o=Uu(e),{host:a,port:l}=Gp(e),u=l===null?"":`:${l}`,d={url:`${o}//${a}${u}/`},m=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){x(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),x(Zt(d,r.config.emulator)&&Zt(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,Vn(a)?(mu(`${o}//${a}${u}`),Of("Auth",!0)):Kp()}function Uu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Gp(n){const e=Uu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const o=s[1];return{host:o,port:Kc(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Kc(a)}}}function Kc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Kp(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ot("not implemented")}_getIdTokenResponse(e){return ot("not implemented")}_linkToIdToken(e,t){return ot("not implemented")}_getReauthenticationResolver(e){return ot("not implemented")}}async function Qp(n,e){return jt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jp(n,e){return xr(n,"POST","/v1/accounts:signInWithPassword",qt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yp(n,e){return xr(n,"POST","/v1/accounts:signInWithEmailLink",qt(n,e))}async function Xp(n,e){return xr(n,"POST","/v1/accounts:signInWithEmailLink",qt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends zo{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new wr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new wr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lo(e,t,"signInWithPassword",Jp);case"emailLink":return Yp(e,{email:this._email,oobCode:this._password});default:je(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lo(e,r,"signUpPassword",Qp);case"emailLink":return Xp(e,{idToken:t,email:this._email,oobCode:this._password});default:je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tn(n,e){return xr(n,"POST","/v1/accounts:signInWithIdp",qt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp="http://localhost";class tn extends zo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new tn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):je("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...o}=t;if(!r||!s)return null;const a=new tn(r,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Tn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Tn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Tn(e,t)}buildRequest(){const e={requestUri:Zp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Or(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tg(n){const e=or(ar(n)).link,t=e?or(ar(e)).deep_link_id:null,r=or(ar(n)).deep_link_id;return(r?or(ar(r)).link:null)||r||t||e||n}class Wo{constructor(e){const t=or(ar(e)),r=t.apiKey??null,s=t.oobCode??null,o=eg(t.mode??null);x(r&&s&&o,"argument-error"),this.apiKey=r,this.operation=o,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=tg(e);try{return new Wo(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(){this.providerId=On.PROVIDER_ID}static credential(e,t){return wr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Wo.parseLink(t);return x(r,"argument-error"),wr._fromEmailAndCode(e,r.code,r.tenantId)}}On.PROVIDER_ID="password";On.EMAIL_PASSWORD_SIGN_IN_METHOD="password";On.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends Bu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends Fr{constructor(){super("facebook.com")}static credential(e){return tn._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch{return null}}}wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";wt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends Fr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return tn._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return At.credential(t,r)}catch{return null}}}At.GOOGLE_SIGN_IN_METHOD="google.com";At.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends Fr{constructor(){super("github.com")}static credential(e){return tn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch{return null}}}St.GITHUB_SIGN_IN_METHOD="github.com";St.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends Fr{constructor(){super("twitter.com")}static credential(e,t){return tn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Rt.credential(t,r)}catch{return null}}}Rt.TWITTER_SIGN_IN_METHOD="twitter.com";Rt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qu(n,e){return xr(n,"POST","/v1/accounts:signUp",qt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const o=await Be._fromIdTokenResponse(e,r,s),a=Qc(r);return new mt({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Qc(r);return new mt({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Qc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ng(n){if(Le(n.app))return Promise.reject(Ke(n));const e=$t(n);if(await e._initializationPromise,e.currentUser?.isAnonymous)return new mt({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await qu(e,{returnSecureToken:!0}),r=await mt._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs extends yt{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Vs.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Vs(e,t,r,s)}}function ju(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Vs._fromErrorAndOperation(n,o,e,r):o})}async function rg(n,e,t=!1){const r=await Tr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return mt._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sg(n,e,t=!1){const{auth:r}=n;if(Le(r.app))return Promise.reject(Ke(r));const s="reauthenticate";try{const o=await Tr(n,ju(r,s,e,n),t);x(o.idToken,r,"internal-error");const a=$o(o.idToken);x(a,r,"internal-error");const{sub:l}=a;return x(n.uid===l,r,"user-mismatch"),mt._forOperation(n,s,o)}catch(o){throw o?.code==="auth/user-not-found"&&je(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $u(n,e,t=!1){if(Le(n.app))return Promise.reject(Ke(n));const r="signIn",s=await ju(n,r,e),o=await mt._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(o.user),o}async function ig(n,e){return $u($t(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hu(n){const e=$t(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function og(n,e,t){if(Le(n.app))return Promise.reject(Ke(n));const r=$t(n),a=await lo(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",qu).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Hu(n),u}),l=await mt._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function ag(n,e,t){return Le(n.app)?Promise.reject(Ke(n)):ig(be(n),On.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Hu(n),r})}function cg(n,e,t,r){return be(n).onIdTokenChanged(e,t,r)}function lg(n,e,t){return be(n).beforeAuthStateChanged(e,t)}function ug(n,e,t,r){return be(n).onAuthStateChanged(e,t,r)}const Ls="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ls,"1"),this.storage.removeItem(Ls),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=1e3,dg=10;class Wu extends zu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ou(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);kp()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,dg):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},hg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wu.type="LOCAL";const fg=Wu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu extends zu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Gu.type="SESSION";const Ku=Gu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Xs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:o}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async d=>d(t.origin,o)),u=await mg(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((l,u)=>{const d=Go("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const E=g;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(m),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(E.data.response);break;default:clearTimeout(m),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return window}function gg(n){Qe().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(){return typeof Qe().WorkerGlobalScope<"u"&&typeof Qe().importScripts=="function"}async function yg(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _g(){return navigator?.serviceWorker?.controller||null}function Eg(){return Qu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju="firebaseLocalStorageDb",Ig=1,Os="firebaseLocalStorage",Yu="fbase_key";class Ur{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Zs(n,e){return n.transaction([Os],e?"readwrite":"readonly").objectStore(Os)}function vg(){const n=indexedDB.deleteDatabase(Ju);return new Ur(n).toPromise()}function uo(){const n=indexedDB.open(Ju,Ig);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Os,{keyPath:Yu})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Os)?e(r):(r.close(),await vg(),e(await uo()))})})}async function Jc(n,e,t){const r=Zs(n,!0).put({[Yu]:e,value:t});return new Ur(r).toPromise()}async function Tg(n,e){const t=Zs(n,!1).get(e),r=await new Ur(t).toPromise();return r===void 0?null:r.value}function Yc(n,e){const t=Zs(n,!0).delete(e);return new Ur(t).toPromise()}const wg=800,Ag=3;class Xu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await uo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Ag)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xs._getInstance(Eg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await yg(),!this.activeServiceWorker)return;this.sender=new pg(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_g()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await uo();return await Jc(e,Ls,"1"),await Yc(e,Ls),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Tg(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Yc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=Zs(s,!1).getAll();return new Ur(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xu.type="LOCAL";const Sg=Xu;new Mr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(n,e){return e?at(e):(x(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko extends zo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Tn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Tn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Tn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Cg(n){return $u(n.auth,new Ko(n),n.bypassAuthState)}function bg(n){const{auth:e,user:t}=n;return x(t,e,"internal-error"),sg(t,new Ko(n),n.bypassAuthState)}async function Pg(n){const{auth:e,user:t}=n;return x(t,e,"internal-error"),rg(t,new Ko(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,t,r,s,o=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:o,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Cg;case"linkViaPopup":case"linkViaRedirect":return Pg;case"reauthViaPopup":case"reauthViaRedirect":return bg;default:je(this.auth,"internal-error")}}resolve(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=new Mr(2e3,1e4);class En extends Zu{constructor(e,t,r,s,o){super(e,t,s,o),this.provider=r,this.authWindow=null,this.pollId=null,En.currentPopupAction&&En.currentPopupAction.cancel(),En.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){ft(this.filter.length===1,"Popup operations only handle one event");const e=Go();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,En.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kg.get())};e()}}En.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng="pendingRedirect",Is=new Map;class Dg extends Zu{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Is.get(this.auth._key());if(!e){try{const r=await Vg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Is.set(this.auth._key(),e)}return this.bypassAuthState||Is.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Vg(n,e){const t=Mg(e),r=Og(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Lg(n,e){Is.set(n._key(),e)}function Og(n){return at(n._redirectPersistence)}function Mg(n){return Es(Ng,n.config.apiKey,n.name)}async function xg(n,e,t=!1){if(Le(n.app))return Promise.reject(Ke(n));const r=$t(n),s=Rg(r,e),a=await new Dg(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=600*1e3;class Ug{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Bg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!eh(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Ge(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Fg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xc(e))}saveEventToCache(e){this.cachedEventUids.add(Xc(e)),this.lastProcessedEventTime=Date.now()}}function Xc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function eh({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Bg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return eh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qg(n,e={}){return jt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$g=/^https?/;async function Hg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await qg(n);for(const t of e)try{if(zg(t))return}catch{}je(n,"unauthorized-domain")}function zg(n){const e=ao(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!$g.test(t))return!1;if(jg.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg=new Mr(3e4,6e4);function Zc(){const n=Qe().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Gg(n){return new Promise((e,t)=>{function r(){Zc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zc(),t(Ge(n,"network-request-failed"))},timeout:Wg.get()})}if(Qe().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Qe().gapi?.load)r();else{const s=Up("iframefcb");return Qe()[s]=()=>{gapi.load?r():t(Ge(n,"network-request-failed"))},xu(`${Fp()}?onload=${s}`).catch(o=>t(o))}}).catch(e=>{throw vs=null,e})}let vs=null;function Kg(n){return vs=vs||Gg(n),vs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg=new Mr(5e3,15e3),Jg="__/auth/iframe",Yg="emulator/auth/iframe",Xg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ey(n){const e=n.config;x(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?jo(e,Yg):`https://${n.config.authDomain}/${Jg}`,r={apiKey:e.apiKey,appName:n.name,v:Ln},s=Zg.get(n.config.apiHost);s&&(r.eid=s);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${Or(r).slice(1)}`}async function ty(n){const e=await Kg(n),t=Qe().gapi;return x(t,n,"internal-error"),e.open({where:document.body,url:ey(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xg,dontclear:!0},r=>new Promise(async(s,o)=>{await r.restyle({setHideOnLeave:!1});const a=Ge(n,"network-request-failed"),l=Qe().setTimeout(()=>{o(a)},Qg.get());function u(){Qe().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ry=500,sy=600,iy="_blank",oy="http://localhost";class el{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ay(n,e,t,r=ry,s=sy){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...ny,width:r.toString(),height:s.toString(),top:o,left:a},d=Ae().toLowerCase();t&&(l=ku(d)?iy:t),bu(d)&&(e=e||oy,u.scrollbars="yes");const m=Object.entries(u).reduce((E,[C,P])=>`${E}${C}=${P},`,"");if(Pp(d)&&l!=="_self")return cy(e||"",l),new el(null);const g=window.open(e||"",l,m);x(g,n,"popup-blocked");try{g.focus()}catch{}return new el(g)}function cy(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly="__/auth/handler",uy="emulator/auth/handler",hy=encodeURIComponent("fac");async function tl(n,e,t,r,s,o){x(n.config.authDomain,n,"auth-domain-config-required"),x(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ln,eventId:s};if(e instanceof Bu){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Kf(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,g]of Object.entries({}))a[m]=g}if(e instanceof Fr){const m=e.getScopes().filter(g=>g!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const u=await n._getAppCheckToken(),d=u?`#${hy}=${encodeURIComponent(u)}`:"";return`${dy(n)}?${Or(l).slice(1)}${d}`}function dy({config:n}){return n.emulator?jo(n,uy):`https://${n.authDomain}/${ly}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi="webStorageSupport";class fy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ku,this._completeRedirectFn=xg,this._overrideRedirectResult=Lg}async _openPopup(e,t,r,s){ft(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const o=await tl(e,t,r,ao(),s);return ay(e,o,Go())}async _openRedirect(e,t,r,s){await this._originValidation(e);const o=await tl(e,t,r,ao(),s);return gg(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:o}=this.eventManagers[t];return s?Promise.resolve(s):(ft(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await ty(e),r=new Ug(e);return t.register("authEvent",s=>(x(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(zi,{type:zi},s=>{const o=s?.[0]?.[zi];o!==void 0&&t(!!o),je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Hg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ou()||Pu()||Ho()}}const my=fy;var nl="@firebase/auth",rl="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yy(n){Sn(new en("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;x(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mu(n)},d=new Op(r,s,o,u);return zp(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Sn(new en("auth-internal",e=>{const t=$t(e.getProvider("auth").getImmediate());return(r=>new py(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nt(nl,rl,gy(n)),Nt(nl,rl,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y=300,Ey=fu("authIdTokenMaxAge")||_y;let sl=null;const Iy=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Ey)return;const s=t?.token;sl!==s&&(sl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function vy(n=Jm()){const e=Bo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Hp(n,{popupRedirectResolver:my,persistence:[Sg,fg,Ku]}),r=fu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=Iy(o.toString());lg(t,a,()=>a(t.currentUser)),cg(t,l=>a(l))}}const s=Nf("auth");return s&&Wp(t,`http://${s}`),t}function Ty(){return document.getElementsByTagName("head")?.[0]??document}Mp({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const o=Ge("internal-error");o.customData=s,t(o)},r.type="text/javascript",r.charset="UTF-8",Ty().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yy("Browser");var il=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dt,th;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,p){function _(){}_.prototype=p.prototype,T.D=p.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(I,v,A){for(var y=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)y[nt-2]=arguments[nt];return p.prototype[v].apply(I,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,p,_){_||(_=0);var I=Array(16);if(typeof p=="string")for(var v=0;16>v;++v)I[v]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(v=0;16>v;++v)I[v]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=T.g[0],_=T.g[1],v=T.g[2];var A=T.g[3],y=p+(A^_&(v^A))+I[0]+3614090360&4294967295;p=_+(y<<7&4294967295|y>>>25),y=A+(v^p&(_^v))+I[1]+3905402710&4294967295,A=p+(y<<12&4294967295|y>>>20),y=v+(_^A&(p^_))+I[2]+606105819&4294967295,v=A+(y<<17&4294967295|y>>>15),y=_+(p^v&(A^p))+I[3]+3250441966&4294967295,_=v+(y<<22&4294967295|y>>>10),y=p+(A^_&(v^A))+I[4]+4118548399&4294967295,p=_+(y<<7&4294967295|y>>>25),y=A+(v^p&(_^v))+I[5]+1200080426&4294967295,A=p+(y<<12&4294967295|y>>>20),y=v+(_^A&(p^_))+I[6]+2821735955&4294967295,v=A+(y<<17&4294967295|y>>>15),y=_+(p^v&(A^p))+I[7]+4249261313&4294967295,_=v+(y<<22&4294967295|y>>>10),y=p+(A^_&(v^A))+I[8]+1770035416&4294967295,p=_+(y<<7&4294967295|y>>>25),y=A+(v^p&(_^v))+I[9]+2336552879&4294967295,A=p+(y<<12&4294967295|y>>>20),y=v+(_^A&(p^_))+I[10]+4294925233&4294967295,v=A+(y<<17&4294967295|y>>>15),y=_+(p^v&(A^p))+I[11]+2304563134&4294967295,_=v+(y<<22&4294967295|y>>>10),y=p+(A^_&(v^A))+I[12]+1804603682&4294967295,p=_+(y<<7&4294967295|y>>>25),y=A+(v^p&(_^v))+I[13]+4254626195&4294967295,A=p+(y<<12&4294967295|y>>>20),y=v+(_^A&(p^_))+I[14]+2792965006&4294967295,v=A+(y<<17&4294967295|y>>>15),y=_+(p^v&(A^p))+I[15]+1236535329&4294967295,_=v+(y<<22&4294967295|y>>>10),y=p+(v^A&(_^v))+I[1]+4129170786&4294967295,p=_+(y<<5&4294967295|y>>>27),y=A+(_^v&(p^_))+I[6]+3225465664&4294967295,A=p+(y<<9&4294967295|y>>>23),y=v+(p^_&(A^p))+I[11]+643717713&4294967295,v=A+(y<<14&4294967295|y>>>18),y=_+(A^p&(v^A))+I[0]+3921069994&4294967295,_=v+(y<<20&4294967295|y>>>12),y=p+(v^A&(_^v))+I[5]+3593408605&4294967295,p=_+(y<<5&4294967295|y>>>27),y=A+(_^v&(p^_))+I[10]+38016083&4294967295,A=p+(y<<9&4294967295|y>>>23),y=v+(p^_&(A^p))+I[15]+3634488961&4294967295,v=A+(y<<14&4294967295|y>>>18),y=_+(A^p&(v^A))+I[4]+3889429448&4294967295,_=v+(y<<20&4294967295|y>>>12),y=p+(v^A&(_^v))+I[9]+568446438&4294967295,p=_+(y<<5&4294967295|y>>>27),y=A+(_^v&(p^_))+I[14]+3275163606&4294967295,A=p+(y<<9&4294967295|y>>>23),y=v+(p^_&(A^p))+I[3]+4107603335&4294967295,v=A+(y<<14&4294967295|y>>>18),y=_+(A^p&(v^A))+I[8]+1163531501&4294967295,_=v+(y<<20&4294967295|y>>>12),y=p+(v^A&(_^v))+I[13]+2850285829&4294967295,p=_+(y<<5&4294967295|y>>>27),y=A+(_^v&(p^_))+I[2]+4243563512&4294967295,A=p+(y<<9&4294967295|y>>>23),y=v+(p^_&(A^p))+I[7]+1735328473&4294967295,v=A+(y<<14&4294967295|y>>>18),y=_+(A^p&(v^A))+I[12]+2368359562&4294967295,_=v+(y<<20&4294967295|y>>>12),y=p+(_^v^A)+I[5]+4294588738&4294967295,p=_+(y<<4&4294967295|y>>>28),y=A+(p^_^v)+I[8]+2272392833&4294967295,A=p+(y<<11&4294967295|y>>>21),y=v+(A^p^_)+I[11]+1839030562&4294967295,v=A+(y<<16&4294967295|y>>>16),y=_+(v^A^p)+I[14]+4259657740&4294967295,_=v+(y<<23&4294967295|y>>>9),y=p+(_^v^A)+I[1]+2763975236&4294967295,p=_+(y<<4&4294967295|y>>>28),y=A+(p^_^v)+I[4]+1272893353&4294967295,A=p+(y<<11&4294967295|y>>>21),y=v+(A^p^_)+I[7]+4139469664&4294967295,v=A+(y<<16&4294967295|y>>>16),y=_+(v^A^p)+I[10]+3200236656&4294967295,_=v+(y<<23&4294967295|y>>>9),y=p+(_^v^A)+I[13]+681279174&4294967295,p=_+(y<<4&4294967295|y>>>28),y=A+(p^_^v)+I[0]+3936430074&4294967295,A=p+(y<<11&4294967295|y>>>21),y=v+(A^p^_)+I[3]+3572445317&4294967295,v=A+(y<<16&4294967295|y>>>16),y=_+(v^A^p)+I[6]+76029189&4294967295,_=v+(y<<23&4294967295|y>>>9),y=p+(_^v^A)+I[9]+3654602809&4294967295,p=_+(y<<4&4294967295|y>>>28),y=A+(p^_^v)+I[12]+3873151461&4294967295,A=p+(y<<11&4294967295|y>>>21),y=v+(A^p^_)+I[15]+530742520&4294967295,v=A+(y<<16&4294967295|y>>>16),y=_+(v^A^p)+I[2]+3299628645&4294967295,_=v+(y<<23&4294967295|y>>>9),y=p+(v^(_|~A))+I[0]+4096336452&4294967295,p=_+(y<<6&4294967295|y>>>26),y=A+(_^(p|~v))+I[7]+1126891415&4294967295,A=p+(y<<10&4294967295|y>>>22),y=v+(p^(A|~_))+I[14]+2878612391&4294967295,v=A+(y<<15&4294967295|y>>>17),y=_+(A^(v|~p))+I[5]+4237533241&4294967295,_=v+(y<<21&4294967295|y>>>11),y=p+(v^(_|~A))+I[12]+1700485571&4294967295,p=_+(y<<6&4294967295|y>>>26),y=A+(_^(p|~v))+I[3]+2399980690&4294967295,A=p+(y<<10&4294967295|y>>>22),y=v+(p^(A|~_))+I[10]+4293915773&4294967295,v=A+(y<<15&4294967295|y>>>17),y=_+(A^(v|~p))+I[1]+2240044497&4294967295,_=v+(y<<21&4294967295|y>>>11),y=p+(v^(_|~A))+I[8]+1873313359&4294967295,p=_+(y<<6&4294967295|y>>>26),y=A+(_^(p|~v))+I[15]+4264355552&4294967295,A=p+(y<<10&4294967295|y>>>22),y=v+(p^(A|~_))+I[6]+2734768916&4294967295,v=A+(y<<15&4294967295|y>>>17),y=_+(A^(v|~p))+I[13]+1309151649&4294967295,_=v+(y<<21&4294967295|y>>>11),y=p+(v^(_|~A))+I[4]+4149444226&4294967295,p=_+(y<<6&4294967295|y>>>26),y=A+(_^(p|~v))+I[11]+3174756917&4294967295,A=p+(y<<10&4294967295|y>>>22),y=v+(p^(A|~_))+I[2]+718787259&4294967295,v=A+(y<<15&4294967295|y>>>17),y=_+(A^(v|~p))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+p&4294967295,T.g[1]=T.g[1]+(v+(y<<21&4294967295|y>>>11))&4294967295,T.g[2]=T.g[2]+v&4294967295,T.g[3]=T.g[3]+A&4294967295}r.prototype.u=function(T,p){p===void 0&&(p=T.length);for(var _=p-this.blockSize,I=this.B,v=this.h,A=0;A<p;){if(v==0)for(;A<=_;)s(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<p;)if(I[v++]=T.charCodeAt(A++),v==this.blockSize){s(this,I),v=0;break}}else for(;A<p;)if(I[v++]=T[A++],v==this.blockSize){s(this,I),v=0;break}}this.h=v,this.o+=p},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var p=1;p<T.length-8;++p)T[p]=0;var _=8*this.o;for(p=T.length-8;p<T.length;++p)T[p]=_&255,_/=256;for(this.u(T),T=Array(16),p=_=0;4>p;++p)for(var I=0;32>I;I+=8)T[_++]=this.g[p]>>>I&255;return T};function o(T,p){var _=l;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=p(T)}function a(T,p){this.h=p;for(var _=[],I=!0,v=T.length-1;0<=v;v--){var A=T[v]|0;I&&A==p||(_[v]=A,I=!1)}this.g=_}var l={};function u(T){return-128<=T&&128>T?o(T,function(p){return new a([p|0],0>p?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return g;if(0>T)return N(d(-T));for(var p=[],_=1,I=0;T>=_;I++)p[I]=T/_|0,_*=4294967296;return new a(p,0)}function m(T,p){if(T.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(T.charAt(0)=="-")return N(m(T.substring(1),p));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(p,8)),I=g,v=0;v<T.length;v+=8){var A=Math.min(8,T.length-v),y=parseInt(T.substring(v,v+A),p);8>A?(A=d(Math.pow(p,A)),I=I.j(A).add(d(y))):(I=I.j(_),I=I.add(d(y)))}return I}var g=u(0),E=u(1),C=u(16777216);n=a.prototype,n.m=function(){if(L(this))return-N(this).m();for(var T=0,p=1,_=0;_<this.g.length;_++){var I=this.i(_);T+=(0<=I?I:4294967296+I)*p,p*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(P(this))return"0";if(L(this))return"-"+N(this).toString(T);for(var p=d(Math.pow(T,6)),_=this,I="";;){var v=de(_,p).g;_=j(_,v.j(p));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=v,P(_))return A+I;for(;6>A.length;)A="0"+A;I=A+I}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function P(T){if(T.h!=0)return!1;for(var p=0;p<T.g.length;p++)if(T.g[p]!=0)return!1;return!0}function L(T){return T.h==-1}n.l=function(T){return T=j(this,T),L(T)?-1:P(T)?0:1};function N(T){for(var p=T.g.length,_=[],I=0;I<p;I++)_[I]=~T.g[I];return new a(_,~T.h).add(E)}n.abs=function(){return L(this)?N(this):this},n.add=function(T){for(var p=Math.max(this.g.length,T.g.length),_=[],I=0,v=0;v<=p;v++){var A=I+(this.i(v)&65535)+(T.i(v)&65535),y=(A>>>16)+(this.i(v)>>>16)+(T.i(v)>>>16);I=y>>>16,A&=65535,y&=65535,_[v]=y<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function j(T,p){return T.add(N(p))}n.j=function(T){if(P(this)||P(T))return g;if(L(this))return L(T)?N(this).j(N(T)):N(N(this).j(T));if(L(T))return N(this.j(N(T)));if(0>this.l(C)&&0>T.l(C))return d(this.m()*T.m());for(var p=this.g.length+T.g.length,_=[],I=0;I<2*p;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(var v=0;v<T.g.length;v++){var A=this.i(I)>>>16,y=this.i(I)&65535,nt=T.i(v)>>>16,qn=T.i(v)&65535;_[2*I+2*v]+=y*qn,q(_,2*I+2*v),_[2*I+2*v+1]+=A*qn,q(_,2*I+2*v+1),_[2*I+2*v+1]+=y*nt,q(_,2*I+2*v+1),_[2*I+2*v+2]+=A*nt,q(_,2*I+2*v+2)}for(I=0;I<p;I++)_[I]=_[2*I+1]<<16|_[2*I];for(I=p;I<2*p;I++)_[I]=0;return new a(_,0)};function q(T,p){for(;(T[p]&65535)!=T[p];)T[p+1]+=T[p]>>>16,T[p]&=65535,p++}function W(T,p){this.g=T,this.h=p}function de(T,p){if(P(p))throw Error("division by zero");if(P(T))return new W(g,g);if(L(T))return p=de(N(T),p),new W(N(p.g),N(p.h));if(L(p))return p=de(T,N(p)),new W(N(p.g),p.h);if(30<T.g.length){if(L(T)||L(p))throw Error("slowDivide_ only works with positive integers.");for(var _=E,I=p;0>=I.l(T);)_=He(_),I=He(I);var v=ye(_,1),A=ye(I,1);for(I=ye(I,2),_=ye(_,2);!P(I);){var y=A.add(I);0>=y.l(T)&&(v=v.add(_),A=y),I=ye(I,1),_=ye(_,1)}return p=j(T,v.j(p)),new W(v,p)}for(v=g;0<=T.l(p);){for(_=Math.max(1,Math.floor(T.m()/p.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),A=d(_),y=A.j(p);L(y)||0<y.l(T);)_-=I,A=d(_),y=A.j(p);P(A)&&(A=E),v=v.add(A),T=j(T,y)}return new W(v,T)}n.A=function(T){return de(this,T).h},n.and=function(T){for(var p=Math.max(this.g.length,T.g.length),_=[],I=0;I<p;I++)_[I]=this.i(I)&T.i(I);return new a(_,this.h&T.h)},n.or=function(T){for(var p=Math.max(this.g.length,T.g.length),_=[],I=0;I<p;I++)_[I]=this.i(I)|T.i(I);return new a(_,this.h|T.h)},n.xor=function(T){for(var p=Math.max(this.g.length,T.g.length),_=[],I=0;I<p;I++)_[I]=this.i(I)^T.i(I);return new a(_,this.h^T.h)};function He(T){for(var p=T.g.length+1,_=[],I=0;I<p;I++)_[I]=T.i(I)<<1|T.i(I-1)>>>31;return new a(_,T.h)}function ye(T,p){var _=p>>5;p%=32;for(var I=T.g.length-_,v=[],A=0;A<I;A++)v[A]=0<p?T.i(A+_)>>>p|T.i(A+_+1)<<32-p:T.i(A+_);return new a(v,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,th=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,Dt=a}).apply(typeof il<"u"?il:typeof self<"u"?self:typeof window<"u"?window:{});var fs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nh,cr,rh,Ts,ho,sh,ih,oh;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,c,h){return i==Array.prototype||i==Object.prototype||(i[c]=h.value),i};function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof fs=="object"&&fs];for(var c=0;c<i.length;++c){var h=i[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(i,c){if(c)e:{var h=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var w=i[f];if(!(w in h))break e;h=h[w]}i=i[i.length-1],f=h[i],c=c(f),c!=f&&c!=null&&e(h,i,{configurable:!0,writable:!0,value:c})}}function o(i,c){i instanceof String&&(i+="");var h=0,f=!1,w={next:function(){if(!f&&h<i.length){var S=h++;return{value:c(S,i[S]),done:!1}}return f=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}s("Array.prototype.values",function(i){return i||function(){return o(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(i){var c=typeof i;return c=c!="object"?c:i?Array.isArray(i)?"array":c:"null",c=="array"||c=="object"&&typeof i.length=="number"}function d(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function m(i,c,h){return i.call.apply(i.bind,arguments)}function g(i,c,h){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,f),i.apply(c,w)}}return function(){return i.apply(c,arguments)}}function E(i,c,h){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:g,E.apply(null,arguments)}function C(i,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function P(i,c){function h(){}h.prototype=c.prototype,i.aa=c.prototype,i.prototype=new h,i.prototype.constructor=i,i.Qb=function(f,w,S){for(var k=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)k[Y-2]=arguments[Y];return c.prototype[w].apply(f,k)}}function L(i){const c=i.length;if(0<c){const h=Array(c);for(let f=0;f<c;f++)h[f]=i[f];return h}return[]}function N(i,c){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(u(f)){const w=i.length||0,S=f.length||0;i.length=w+S;for(let k=0;k<S;k++)i[w+k]=f[k]}else i.push(f)}}class j{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function q(i){return/^[\s\xa0]*$/.test(i)}function W(){var i=l.navigator;return i&&(i=i.userAgent)?i:""}function de(i){return de[" "](i),i}de[" "]=function(){};var He=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function ye(i,c,h){for(const f in i)c.call(h,i[f],f,i)}function T(i,c){for(const h in i)c.call(void 0,i[h],h,i)}function p(i){const c={};for(const h in i)c[h]=i[h];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(i,c){let h,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(h in f)i[h]=f[h];for(let S=0;S<_.length;S++)h=_[S],Object.prototype.hasOwnProperty.call(f,h)&&(i[h]=f[h])}}function v(i){var c=1;i=i.split(":");const h=[];for(;0<c&&i.length;)h.push(i.shift()),c--;return i.length&&h.push(i.join(":")),h}function A(i){l.setTimeout(()=>{throw i},0)}function y(){var i=pi;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class nt{constructor(){this.h=this.g=null}add(c,h){const f=qn.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var qn=new j(()=>new qd,i=>i.reset());class qd{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let jn,$n=!1,pi=new nt,Pa=()=>{const i=l.Promise.resolve(void 0);jn=()=>{i.then(jd)}};var jd=()=>{for(var i;i=y();){try{i.h.call(i.g)}catch(h){A(h)}var c=qn;c.j(i),100>c.h&&(c.h++,i.next=c.g,c.g=i)}$n=!1};function _t(){this.s=this.s,this.C=this.C}_t.prototype.s=!1,_t.prototype.ma=function(){this.s||(this.s=!0,this.N())},_t.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _e(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}_e.prototype.h=function(){this.defaultPrevented=!0};var $d=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return i})();function Hn(i,c){if(_e.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var h=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget){if(He){e:{try{de(c.nodeName);var w=!0;break e}catch{}w=!1}w||(c=null)}}else h=="mouseover"?c=i.fromElement:h=="mouseout"&&(c=i.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Hd[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Hn.aa.h.call(this)}}P(Hn,_e);var Hd={2:"touch",3:"pen",4:"mouse"};Hn.prototype.h=function(){Hn.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Gr="closure_listenable_"+(1e6*Math.random()|0),zd=0;function Wd(i,c,h,f,w){this.listener=i,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=w,this.key=++zd,this.da=this.fa=!1}function Kr(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Qr(i){this.src=i,this.g={},this.h=0}Qr.prototype.add=function(i,c,h,f,w){var S=i.toString();i=this.g[S],i||(i=this.g[S]=[],this.h++);var k=yi(i,c,f,w);return-1<k?(c=i[k],h||(c.fa=!1)):(c=new Wd(c,this.src,S,!!f,w),c.fa=h,i.push(c)),c};function gi(i,c){var h=c.type;if(h in i.g){var f=i.g[h],w=Array.prototype.indexOf.call(f,c,void 0),S;(S=0<=w)&&Array.prototype.splice.call(f,w,1),S&&(Kr(c),i.g[h].length==0&&(delete i.g[h],i.h--))}}function yi(i,c,h,f){for(var w=0;w<i.length;++w){var S=i[w];if(!S.da&&S.listener==c&&S.capture==!!h&&S.ha==f)return w}return-1}var _i="closure_lm_"+(1e6*Math.random()|0),Ei={};function ka(i,c,h,f,w){if(Array.isArray(c)){for(var S=0;S<c.length;S++)ka(i,c[S],h,f,w);return null}return h=Va(h),i&&i[Gr]?i.K(c,h,d(f)?!!f.capture:!1,w):Gd(i,c,h,!1,f,w)}function Gd(i,c,h,f,w,S){if(!c)throw Error("Invalid event type");var k=d(w)?!!w.capture:!!w,Y=vi(i);if(Y||(i[_i]=Y=new Qr(i)),h=Y.add(c,h,f,k,S),h.proxy)return h;if(f=Kd(),h.proxy=f,f.src=i,f.listener=h,i.addEventListener)$d||(w=k),w===void 0&&(w=!1),i.addEventListener(c.toString(),f,w);else if(i.attachEvent)i.attachEvent(Da(c.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Kd(){function i(h){return c.call(i.src,i.listener,h)}const c=Qd;return i}function Na(i,c,h,f,w){if(Array.isArray(c))for(var S=0;S<c.length;S++)Na(i,c[S],h,f,w);else f=d(f)?!!f.capture:!!f,h=Va(h),i&&i[Gr]?(i=i.i,c=String(c).toString(),c in i.g&&(S=i.g[c],h=yi(S,h,f,w),-1<h&&(Kr(S[h]),Array.prototype.splice.call(S,h,1),S.length==0&&(delete i.g[c],i.h--)))):i&&(i=vi(i))&&(c=i.g[c.toString()],i=-1,c&&(i=yi(c,h,f,w)),(h=-1<i?c[i]:null)&&Ii(h))}function Ii(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[Gr])gi(c.i,i);else{var h=i.type,f=i.proxy;c.removeEventListener?c.removeEventListener(h,f,i.capture):c.detachEvent?c.detachEvent(Da(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=vi(c))?(gi(h,i),h.h==0&&(h.src=null,c[_i]=null)):Kr(i)}}}function Da(i){return i in Ei?Ei[i]:Ei[i]="on"+i}function Qd(i,c){if(i.da)i=!0;else{c=new Hn(c,this);var h=i.listener,f=i.ha||i.src;i.fa&&Ii(i),i=h.call(f,c)}return i}function vi(i){return i=i[_i],i instanceof Qr?i:null}var Ti="__closure_events_fn_"+(1e9*Math.random()>>>0);function Va(i){return typeof i=="function"?i:(i[Ti]||(i[Ti]=function(c){return i.handleEvent(c)}),i[Ti])}function Ee(){_t.call(this),this.i=new Qr(this),this.M=this,this.F=null}P(Ee,_t),Ee.prototype[Gr]=!0,Ee.prototype.removeEventListener=function(i,c,h,f){Na(this,i,c,h,f)};function Se(i,c){var h,f=i.F;if(f)for(h=[];f;f=f.F)h.push(f);if(i=i.M,f=c.type||c,typeof c=="string")c=new _e(c,i);else if(c instanceof _e)c.target=c.target||i;else{var w=c;c=new _e(f,i),I(c,w)}if(w=!0,h)for(var S=h.length-1;0<=S;S--){var k=c.g=h[S];w=Jr(k,f,!0,c)&&w}if(k=c.g=i,w=Jr(k,f,!0,c)&&w,w=Jr(k,f,!1,c)&&w,h)for(S=0;S<h.length;S++)k=c.g=h[S],w=Jr(k,f,!1,c)&&w}Ee.prototype.N=function(){if(Ee.aa.N.call(this),this.i){var i=this.i,c;for(c in i.g){for(var h=i.g[c],f=0;f<h.length;f++)Kr(h[f]);delete i.g[c],i.h--}}this.F=null},Ee.prototype.K=function(i,c,h,f){return this.i.add(String(i),c,!1,h,f)},Ee.prototype.L=function(i,c,h,f){return this.i.add(String(i),c,!0,h,f)};function Jr(i,c,h,f){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();for(var w=!0,S=0;S<c.length;++S){var k=c[S];if(k&&!k.da&&k.capture==h){var Y=k.listener,fe=k.ha||k.src;k.fa&&gi(i.i,k),w=Y.call(fe,f)!==!1&&w}}return w&&!f.defaultPrevented}function La(i,c,h){if(typeof i=="function")h&&(i=E(i,h));else if(i&&typeof i.handleEvent=="function")i=E(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(i,c||0)}function Oa(i){i.g=La(()=>{i.g=null,i.i&&(i.i=!1,Oa(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class Jd extends _t{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Oa(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zn(i){_t.call(this),this.h=i,this.g={}}P(zn,_t);var Ma=[];function xa(i){ye(i.g,function(c,h){this.g.hasOwnProperty(h)&&Ii(c)},i),i.g={}}zn.prototype.N=function(){zn.aa.N.call(this),xa(this)},zn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wi=l.JSON.stringify,Yd=l.JSON.parse,Xd=class{stringify(i){return l.JSON.stringify(i,void 0)}parse(i){return l.JSON.parse(i,void 0)}};function Ai(){}Ai.prototype.h=null;function Fa(i){return i.h||(i.h=i.i())}function Ua(){}var Wn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Si(){_e.call(this,"d")}P(Si,_e);function Ri(){_e.call(this,"c")}P(Ri,_e);var Ht={},Ba=null;function Yr(){return Ba=Ba||new Ee}Ht.La="serverreachability";function qa(i){_e.call(this,Ht.La,i)}P(qa,_e);function Gn(i){const c=Yr();Se(c,new qa(c))}Ht.STAT_EVENT="statevent";function ja(i,c){_e.call(this,Ht.STAT_EVENT,i),this.stat=c}P(ja,_e);function Re(i){const c=Yr();Se(c,new ja(c,i))}Ht.Ma="timingevent";function $a(i,c){_e.call(this,Ht.Ma,i),this.size=c}P($a,_e);function Kn(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){i()},c)}function Qn(){this.g=!0}Qn.prototype.xa=function(){this.g=!1};function Zd(i,c,h,f,w,S){i.info(function(){if(i.g)if(S)for(var k="",Y=S.split("&"),fe=0;fe<Y.length;fe++){var Q=Y[fe].split("=");if(1<Q.length){var Ie=Q[0];Q=Q[1];var ve=Ie.split("_");k=2<=ve.length&&ve[1]=="type"?k+(Ie+"="+Q+"&"):k+(Ie+"=redacted&")}}else k=null;else k=S;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+c+`
`+h+`
`+k})}function ef(i,c,h,f,w,S,k){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+c+`
`+h+`
`+S+" "+k})}function un(i,c,h,f){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+nf(i,h)+(f?" "+f:"")})}function tf(i,c){i.info(function(){return"TIMEOUT: "+c})}Qn.prototype.info=function(){};function nf(i,c){if(!i.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(i=0;i<h.length;i++)if(Array.isArray(h[i])){var f=h[i];if(!(2>f.length)){var w=f[1];if(Array.isArray(w)&&!(1>w.length)){var S=w[0];if(S!="noop"&&S!="stop"&&S!="close")for(var k=1;k<w.length;k++)w[k]=""}}}}return wi(h)}catch{return c}}var Xr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ha={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ci;function Zr(){}P(Zr,Ai),Zr.prototype.g=function(){return new XMLHttpRequest},Zr.prototype.i=function(){return{}},Ci=new Zr;function Et(i,c,h,f){this.j=i,this.i=c,this.l=h,this.R=f||1,this.U=new zn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new za}function za(){this.i=null,this.g="",this.h=!1}var Wa={},bi={};function Pi(i,c,h){i.L=1,i.v=rs(rt(c)),i.m=h,i.P=!0,Ga(i,null)}function Ga(i,c){i.F=Date.now(),es(i),i.A=rt(i.v);var h=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),ac(h.i,"t",f),i.C=0,h=i.j.J,i.h=new za,i.g=Sc(i.j,h?c:null,!i.m),0<i.O&&(i.M=new Jd(E(i.Y,i,i.g),i.O)),c=i.U,h=i.g,f=i.ca;var w="readystatechange";Array.isArray(w)||(w&&(Ma[0]=w.toString()),w=Ma);for(var S=0;S<w.length;S++){var k=ka(h,w[S],f||c.handleEvent,!1,c.h||c);if(!k)break;c.g[k.key]=k}c=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,c)):(i.u="GET",i.g.ea(i.A,i.u,null,c)),Gn(),Zd(i.i,i.u,i.A,i.l,i.R,i.m)}Et.prototype.ca=function(i){i=i.target;const c=this.M;c&&st(i)==3?c.j():this.Y(i)},Et.prototype.Y=function(i){try{if(i==this.g)e:{const ve=st(this.g);var c=this.g.Ba();const fn=this.g.Z();if(!(3>ve)&&(ve!=3||this.g&&(this.h.h||this.g.oa()||mc(this.g)))){this.J||ve!=4||c==7||(c==8||0>=fn?Gn(3):Gn(2)),ki(this);var h=this.g.Z();this.X=h;t:if(Ka(this)){var f=mc(this.g);i="";var w=f.length,S=st(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zt(this),Jn(this);var k="";break t}this.h.i=new l.TextDecoder}for(c=0;c<w;c++)this.h.h=!0,i+=this.h.i.decode(f[c],{stream:!(S&&c==w-1)});f.length=0,this.h.g+=i,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=h==200,ef(this.i,this.u,this.A,this.l,this.R,ve,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Y,fe=this.g;if((Y=fe.g?fe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(Y)){var Q=Y;break t}}Q=null}if(h=Q)un(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ni(this,h);else{this.o=!1,this.s=3,Re(12),zt(this),Jn(this);break e}}if(this.P){h=!0;let Fe;for(;!this.J&&this.C<k.length;)if(Fe=rf(this,k),Fe==bi){ve==4&&(this.s=4,Re(14),h=!1),un(this.i,this.l,null,"[Incomplete Response]");break}else if(Fe==Wa){this.s=4,Re(15),un(this.i,this.l,k,"[Invalid Chunk]"),h=!1;break}else un(this.i,this.l,Fe,null),Ni(this,Fe);if(Ka(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ve!=4||k.length!=0||this.h.h||(this.s=1,Re(16),h=!1),this.o=this.o&&h,!h)un(this.i,this.l,k,"[Invalid Chunked Response]"),zt(this),Jn(this);else if(0<k.length&&!this.W){this.W=!0;var Ie=this.j;Ie.g==this&&Ie.ba&&!Ie.M&&(Ie.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),xi(Ie),Ie.M=!0,Re(11))}}else un(this.i,this.l,k,null),Ni(this,k);ve==4&&zt(this),this.o&&!this.J&&(ve==4?vc(this.j,this):(this.o=!1,es(this)))}else vf(this.g),h==400&&0<k.indexOf("Unknown SID")?(this.s=3,Re(12)):(this.s=0,Re(13)),zt(this),Jn(this)}}}catch{}finally{}};function Ka(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function rf(i,c){var h=i.C,f=c.indexOf(`
`,h);return f==-1?bi:(h=Number(c.substring(h,f)),isNaN(h)?Wa:(f+=1,f+h>c.length?bi:(c=c.slice(f,f+h),i.C=f+h,c)))}Et.prototype.cancel=function(){this.J=!0,zt(this)};function es(i){i.S=Date.now()+i.I,Qa(i,i.I)}function Qa(i,c){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Kn(E(i.ba,i),c)}function ki(i){i.B&&(l.clearTimeout(i.B),i.B=null)}Et.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(tf(this.i,this.A),this.L!=2&&(Gn(),Re(17)),zt(this),this.s=2,Jn(this)):Qa(this,this.S-i)};function Jn(i){i.j.G==0||i.J||vc(i.j,i)}function zt(i){ki(i);var c=i.M;c&&typeof c.ma=="function"&&c.ma(),i.M=null,xa(i.U),i.g&&(c=i.g,i.g=null,c.abort(),c.ma())}function Ni(i,c){try{var h=i.j;if(h.G!=0&&(h.g==i||Di(h.h,i))){if(!i.K&&Di(h.h,i)&&h.G==3){try{var f=h.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<i.F)ls(h),as(h);else break e;Mi(h),Re(18)}}else h.za=w[1],0<h.za-h.T&&37500>w[2]&&h.F&&h.v==0&&!h.C&&(h.C=Kn(E(h.Za,h),6e3));if(1>=Xa(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Gt(h,11)}else if((i.K||h.g==i)&&ls(h),!q(c))for(w=h.Da.g.parse(c),c=0;c<w.length;c++){let Q=w[c];if(h.T=Q[0],Q=Q[1],h.G==2)if(Q[0]=="c"){h.K=Q[1],h.ia=Q[2];const Ie=Q[3];Ie!=null&&(h.la=Ie,h.j.info("VER="+h.la));const ve=Q[4];ve!=null&&(h.Aa=ve,h.j.info("SVER="+h.Aa));const fn=Q[5];fn!=null&&typeof fn=="number"&&0<fn&&(f=1.5*fn,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const Fe=i.g;if(Fe){const hs=Fe.g?Fe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(hs){var S=f.h;S.g||hs.indexOf("spdy")==-1&&hs.indexOf("quic")==-1&&hs.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Vi(S,S.h),S.h=null))}if(f.D){const Fi=Fe.g?Fe.g.getResponseHeader("X-HTTP-Session-Id"):null;Fi&&(f.ya=Fi,Z(f.I,f.D,Fi))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-i.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var k=i;if(f.qa=Ac(f,f.J?f.ia:null,f.W),k.K){Za(f.h,k);var Y=k,fe=f.L;fe&&(Y.I=fe),Y.B&&(ki(Y),es(Y)),f.g=k}else Ec(f);0<h.i.length&&cs(h)}else Q[0]!="stop"&&Q[0]!="close"||Gt(h,7);else h.G==3&&(Q[0]=="stop"||Q[0]=="close"?Q[0]=="stop"?Gt(h,7):Oi(h):Q[0]!="noop"&&h.l&&h.l.ta(Q),h.v=0)}}Gn(4)}catch{}}var sf=class{constructor(i,c){this.g=i,this.map=c}};function Ja(i){this.l=i||10,l.PerformanceNavigationTiming?(i=l.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ya(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Xa(i){return i.h?1:i.g?i.g.size:0}function Di(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function Vi(i,c){i.g?i.g.add(c):i.h=c}function Za(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}Ja.prototype.cancel=function(){if(this.i=ec(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function ec(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const h of i.g.values())c=c.concat(h.D);return c}return L(i.i)}function of(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(u(i)){for(var c=[],h=i.length,f=0;f<h;f++)c.push(i[f]);return c}c=[],h=0;for(f in i)c[h++]=i[f];return c}function af(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(u(i)||typeof i=="string"){var c=[];i=i.length;for(var h=0;h<i;h++)c.push(h);return c}c=[],h=0;for(const f in i)c[h++]=f;return c}}}function tc(i,c){if(i.forEach&&typeof i.forEach=="function")i.forEach(c,void 0);else if(u(i)||typeof i=="string")Array.prototype.forEach.call(i,c,void 0);else for(var h=af(i),f=of(i),w=f.length,S=0;S<w;S++)c.call(void 0,f[S],h&&h[S],i)}var nc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cf(i,c){if(i){i=i.split("&");for(var h=0;h<i.length;h++){var f=i[h].indexOf("="),w=null;if(0<=f){var S=i[h].substring(0,f);w=i[h].substring(f+1)}else S=i[h];c(S,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Wt(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Wt){this.h=i.h,ts(this,i.j),this.o=i.o,this.g=i.g,ns(this,i.s),this.l=i.l;var c=i.i,h=new Zn;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),rc(this,h),this.m=i.m}else i&&(c=String(i).match(nc))?(this.h=!1,ts(this,c[1]||"",!0),this.o=Yn(c[2]||""),this.g=Yn(c[3]||"",!0),ns(this,c[4]),this.l=Yn(c[5]||"",!0),rc(this,c[6]||"",!0),this.m=Yn(c[7]||"")):(this.h=!1,this.i=new Zn(null,this.h))}Wt.prototype.toString=function(){var i=[],c=this.j;c&&i.push(Xn(c,sc,!0),":");var h=this.g;return(h||c=="file")&&(i.push("//"),(c=this.o)&&i.push(Xn(c,sc,!0),"@"),i.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&i.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&i.push("/"),i.push(Xn(h,h.charAt(0)=="/"?hf:uf,!0))),(h=this.i.toString())&&i.push("?",h),(h=this.m)&&i.push("#",Xn(h,ff)),i.join("")};function rt(i){return new Wt(i)}function ts(i,c,h){i.j=h?Yn(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function ns(i,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);i.s=c}else i.s=null}function rc(i,c,h){c instanceof Zn?(i.i=c,mf(i.i,i.h)):(h||(c=Xn(c,df)),i.i=new Zn(c,i.h))}function Z(i,c,h){i.i.set(c,h)}function rs(i){return Z(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Yn(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Xn(i,c,h){return typeof i=="string"?(i=encodeURI(i).replace(c,lf),h&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function lf(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var sc=/[#\/\?@]/g,uf=/[#\?:]/g,hf=/[#\?]/g,df=/[#\?@]/g,ff=/#/g;function Zn(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function It(i){i.g||(i.g=new Map,i.h=0,i.i&&cf(i.i,function(c,h){i.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=Zn.prototype,n.add=function(i,c){It(this),this.i=null,i=hn(this,i);var h=this.g.get(i);return h||this.g.set(i,h=[]),h.push(c),this.h+=1,this};function ic(i,c){It(i),c=hn(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function oc(i,c){return It(i),c=hn(i,c),i.g.has(c)}n.forEach=function(i,c){It(this),this.g.forEach(function(h,f){h.forEach(function(w){i.call(c,w,f,this)},this)},this)},n.na=function(){It(this);const i=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let f=0;f<c.length;f++){const w=i[f];for(let S=0;S<w.length;S++)h.push(c[f])}return h},n.V=function(i){It(this);let c=[];if(typeof i=="string")oc(this,i)&&(c=c.concat(this.g.get(hn(this,i))));else{i=Array.from(this.g.values());for(let h=0;h<i.length;h++)c=c.concat(i[h])}return c},n.set=function(i,c){return It(this),this.i=null,i=hn(this,i),oc(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},n.get=function(i,c){return i?(i=this.V(i),0<i.length?String(i[0]):c):c};function ac(i,c,h){ic(i,c),0<h.length&&(i.i=null,i.g.set(hn(i,c),L(h)),i.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var f=c[h];const S=encodeURIComponent(String(f)),k=this.V(f);for(f=0;f<k.length;f++){var w=S;k[f]!==""&&(w+="="+encodeURIComponent(String(k[f]))),i.push(w)}}return this.i=i.join("&")};function hn(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function mf(i,c){c&&!i.j&&(It(i),i.i=null,i.g.forEach(function(h,f){var w=f.toLowerCase();f!=w&&(ic(this,f),ac(this,w,h))},i)),i.j=c}function pf(i,c){const h=new Qn;if(l.Image){const f=new Image;f.onload=C(vt,h,"TestLoadImage: loaded",!0,c,f),f.onerror=C(vt,h,"TestLoadImage: error",!1,c,f),f.onabort=C(vt,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=C(vt,h,"TestLoadImage: timeout",!1,c,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else c(!1)}function gf(i,c){const h=new Qn,f=new AbortController,w=setTimeout(()=>{f.abort(),vt(h,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:f.signal}).then(S=>{clearTimeout(w),S.ok?vt(h,"TestPingServer: ok",!0,c):vt(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),vt(h,"TestPingServer: error",!1,c)})}function vt(i,c,h,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(h)}catch{}}function yf(){this.g=new Xd}function _f(i,c,h){const f=h||"";try{tc(i,function(w,S){let k=w;d(w)&&(k=wi(w)),c.push(f+S+"="+encodeURIComponent(k))})}catch(w){throw c.push(f+"type="+encodeURIComponent("_badmap")),w}}function ss(i){this.l=i.Ub||null,this.j=i.eb||!1}P(ss,Ai),ss.prototype.g=function(){return new is(this.l,this.j)},ss.prototype.i=(function(i){return function(){return i}})({});function is(i,c){Ee.call(this),this.D=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(is,Ee),n=is.prototype,n.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=c,this.readyState=1,tr(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(c.body=i),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,er(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,tr(this)),this.g&&(this.readyState=3,tr(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;cc(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function cc(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?er(this):tr(this),this.readyState==3&&cc(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,er(this))},n.Qa=function(i){this.g&&(this.response=i,er(this))},n.ga=function(){this.g&&er(this)};function er(i){i.readyState=4,i.l=null,i.j=null,i.v=null,tr(i)}n.setRequestHeader=function(i,c){this.u.append(i,c)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,i.push(h[0]+": "+h[1]),h=c.next();return i.join(`\r
`)};function tr(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(is.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function lc(i){let c="";return ye(i,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function Li(i,c,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=lc(h),typeof i=="string"?h!=null&&encodeURIComponent(String(h)):Z(i,c,h))}function ne(i){Ee.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(ne,Ee);var Ef=/^https?$/i,If=["POST","PUT"];n=ne.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ci.g(),this.v=this.o?Fa(this.o):Fa(Ci),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(S){uc(this,S);return}if(i=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)h.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const S of f.keys())h.set(S,f.get(S));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),w=l.FormData&&i instanceof l.FormData,!(0<=Array.prototype.indexOf.call(If,c,void 0))||f||w||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,k]of h)this.g.setRequestHeader(S,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{fc(this),this.u=!0,this.g.send(i),this.u=!1}catch(S){uc(this,S)}};function uc(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.m=5,hc(i),os(i)}function hc(i){i.A||(i.A=!0,Se(i,"complete"),Se(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Se(this,"complete"),Se(this,"abort"),os(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),os(this,!0)),ne.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?dc(this):this.bb())},n.bb=function(){dc(this)};function dc(i){if(i.h&&typeof a<"u"&&(!i.v[1]||st(i)!=4||i.Z()!=2)){if(i.u&&st(i)==4)La(i.Ea,0,i);else if(Se(i,"readystatechange"),st(i)==4){i.h=!1;try{const k=i.Z();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var f;if(f=k===0){var w=String(i.D).match(nc)[1]||null;!w&&l.self&&l.self.location&&(w=l.self.location.protocol.slice(0,-1)),f=!Ef.test(w?w.toLowerCase():"")}h=f}if(h)Se(i,"complete"),Se(i,"success");else{i.m=6;try{var S=2<st(i)?i.g.statusText:""}catch{S=""}i.l=S+" ["+i.Z()+"]",hc(i)}}finally{os(i)}}}}function os(i,c){if(i.g){fc(i);const h=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,c||Se(i,"ready");try{h.onreadystatechange=f}catch{}}}function fc(i){i.I&&(l.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function st(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<st(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),Yd(c)}};function mc(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function vf(i){const c={};i=(i.g&&2<=st(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(q(i[f]))continue;var h=v(i[f]);const w=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=c[w]||[];c[w]=S,S.push(h)}T(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function nr(i,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[i]||c}function pc(i){this.Aa=0,this.i=[],this.j=new Qn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=nr("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=nr("baseRetryDelayMs",5e3,i),this.cb=nr("retryDelaySeedMs",1e4,i),this.Wa=nr("forwardChannelMaxRetries",2,i),this.wa=nr("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Ja(i&&i.concurrentRequestLimit),this.Da=new yf,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=pc.prototype,n.la=8,n.G=1,n.connect=function(i,c,h,f){Re(0),this.W=i,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=Ac(this,null,this.W),cs(this)};function Oi(i){if(gc(i),i.G==3){var c=i.U++,h=rt(i.I);if(Z(h,"SID",i.K),Z(h,"RID",c),Z(h,"TYPE","terminate"),rr(i,h),c=new Et(i,i.j,c),c.L=2,c.v=rs(rt(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=Sc(c.j,null),c.g.ea(c.v)),c.F=Date.now(),es(c)}wc(i)}function as(i){i.g&&(xi(i),i.g.cancel(),i.g=null)}function gc(i){as(i),i.u&&(l.clearTimeout(i.u),i.u=null),ls(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&l.clearTimeout(i.s),i.s=null)}function cs(i){if(!Ya(i.h)&&!i.s){i.s=!0;var c=i.Ga;jn||Pa(),$n||(jn(),$n=!0),pi.add(c,i),i.B=0}}function Tf(i,c){return Xa(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=c.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Kn(E(i.Ga,i,c),Tc(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const w=new Et(this,this.j,i);let S=this.o;if(this.S&&(S?(S=p(S),I(S,this.S)):S=this.S),this.m!==null||this.O||(w.H=S,S=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=_c(this,w,c),h=rt(this.I),Z(h,"RID",i),Z(h,"CVER",22),this.D&&Z(h,"X-HTTP-Session-Id",this.D),rr(this,h),S&&(this.O?c="headers="+encodeURIComponent(String(lc(S)))+"&"+c:this.m&&Li(h,this.m,S)),Vi(this.h,w),this.Ua&&Z(h,"TYPE","init"),this.P?(Z(h,"$req",c),Z(h,"SID","null"),w.T=!0,Pi(w,h,null)):Pi(w,h,c),this.G=2}}else this.G==3&&(i?yc(this,i):this.i.length==0||Ya(this.h)||yc(this))};function yc(i,c){var h;c?h=c.l:h=i.U++;const f=rt(i.I);Z(f,"SID",i.K),Z(f,"RID",h),Z(f,"AID",i.T),rr(i,f),i.m&&i.o&&Li(f,i.m,i.o),h=new Et(i,i.j,h,i.B+1),i.m===null&&(h.H=i.o),c&&(i.i=c.D.concat(i.i)),c=_c(i,h,1e3),h.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Vi(i.h,h),Pi(h,f,c)}function rr(i,c){i.H&&ye(i.H,function(h,f){Z(c,f,h)}),i.l&&tc({},function(h,f){Z(c,f,h)})}function _c(i,c,h){h=Math.min(i.i.length,h);var f=i.l?E(i.l.Na,i.l,i):null;e:{var w=i.i;let S=-1;for(;;){const k=["count="+h];S==-1?0<h?(S=w[0].g,k.push("ofs="+S)):S=0:k.push("ofs="+S);let Y=!0;for(let fe=0;fe<h;fe++){let Q=w[fe].g;const Ie=w[fe].map;if(Q-=S,0>Q)S=Math.max(0,w[fe].g-100),Y=!1;else try{_f(Ie,k,"req"+Q+"_")}catch{f&&f(Ie)}}if(Y){f=k.join("&");break e}}}return i=i.i.splice(0,h),c.D=i,f}function Ec(i){if(!i.g&&!i.u){i.Y=1;var c=i.Fa;jn||Pa(),$n||(jn(),$n=!0),pi.add(c,i),i.v=0}}function Mi(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Kn(E(i.Fa,i),Tc(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Ic(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Kn(E(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Re(10),as(this),Ic(this))};function xi(i){i.A!=null&&(l.clearTimeout(i.A),i.A=null)}function Ic(i){i.g=new Et(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var c=rt(i.qa);Z(c,"RID","rpc"),Z(c,"SID",i.K),Z(c,"AID",i.T),Z(c,"CI",i.F?"0":"1"),!i.F&&i.ja&&Z(c,"TO",i.ja),Z(c,"TYPE","xmlhttp"),rr(i,c),i.m&&i.o&&Li(c,i.m,i.o),i.L&&(i.g.I=i.L);var h=i.g;i=i.ia,h.L=1,h.v=rs(rt(c)),h.m=null,h.P=!0,Ga(h,i)}n.Za=function(){this.C!=null&&(this.C=null,as(this),Mi(this),Re(19))};function ls(i){i.C!=null&&(l.clearTimeout(i.C),i.C=null)}function vc(i,c){var h=null;if(i.g==c){ls(i),xi(i),i.g=null;var f=2}else if(Di(i.h,c))h=c.D,Za(i.h,c),f=1;else return;if(i.G!=0){if(c.o)if(f==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var w=i.B;f=Yr(),Se(f,new $a(f,h)),cs(i)}else Ec(i);else if(w=c.s,w==3||w==0&&0<c.X||!(f==1&&Tf(i,c)||f==2&&Mi(i)))switch(h&&0<h.length&&(c=i.h,c.i=c.i.concat(h)),w){case 1:Gt(i,5);break;case 4:Gt(i,10);break;case 3:Gt(i,6);break;default:Gt(i,2)}}}function Tc(i,c){let h=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(h*=2),h*c}function Gt(i,c){if(i.j.info("Error code "+c),c==2){var h=E(i.fb,i),f=i.Xa;const w=!f;f=new Wt(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ts(f,"https"),rs(f),w?pf(f.toString(),h):gf(f.toString(),h)}else Re(2);i.G=0,i.l&&i.l.sa(c),wc(i),gc(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Re(2)):(this.j.info("Failed to ping google.com"),Re(1))};function wc(i){if(i.G=0,i.ka=[],i.l){const c=ec(i.h);(c.length!=0||i.i.length!=0)&&(N(i.ka,c),N(i.ka,i.i),i.h.i.length=0,L(i.i),i.i.length=0),i.l.ra()}}function Ac(i,c,h){var f=h instanceof Wt?rt(h):new Wt(h);if(f.g!="")c&&(f.g=c+"."+f.g),ns(f,f.s);else{var w=l.location;f=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;var S=new Wt(null);f&&ts(S,f),c&&(S.g=c),w&&ns(S,w),h&&(S.l=h),f=S}return h=i.D,c=i.ya,h&&c&&Z(f,h,c),Z(f,"VER",i.la),rr(i,f),f}function Sc(i,c,h){if(c&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Ca&&!i.pa?new ne(new ss({eb:h})):new ne(i.pa),c.Ha(i.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Rc(){}n=Rc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function us(){}us.prototype.g=function(i,c){return new Ve(i,c)};function Ve(i,c){Ee.call(this),this.g=new pc(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(i?i["X-WebChannel-Client-Profile"]=c.va:i={"X-WebChannel-Client-Profile":c.va}),this.g.S=i,(i=c&&c.Sb)&&!q(i)&&(this.g.m=i),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!q(c)&&(this.g.D=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new dn(this)}P(Ve,Ee),Ve.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ve.prototype.close=function(){Oi(this.g)},Ve.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var h={};h.__data__=i,i=h}else this.u&&(h={},h.__data__=wi(i),i=h);c.i.push(new sf(c.Ya++,i)),c.G==3&&cs(c)},Ve.prototype.N=function(){this.g.l=null,delete this.j,Oi(this.g),delete this.g,Ve.aa.N.call(this)};function Cc(i){Si.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){e:{for(const h in c){i=h;break e}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}P(Cc,Si);function bc(){Ri.call(this),this.status=1}P(bc,Ri);function dn(i){this.g=i}P(dn,Rc),dn.prototype.ua=function(){Se(this.g,"a")},dn.prototype.ta=function(i){Se(this.g,new Cc(i))},dn.prototype.sa=function(i){Se(this.g,new bc)},dn.prototype.ra=function(){Se(this.g,"b")},us.prototype.createWebChannel=us.prototype.g,Ve.prototype.send=Ve.prototype.o,Ve.prototype.open=Ve.prototype.m,Ve.prototype.close=Ve.prototype.close,oh=function(){return new us},ih=function(){return Yr()},sh=Ht,ho={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xr.NO_ERROR=0,Xr.TIMEOUT=8,Xr.HTTP_ERROR=6,Ts=Xr,Ha.COMPLETE="complete",rh=Ha,Ua.EventType=Wn,Wn.OPEN="a",Wn.CLOSE="b",Wn.ERROR="c",Wn.MESSAGE="d",Ee.prototype.listen=Ee.prototype.K,cr=Ua,ne.prototype.listenOnce=ne.prototype.L,ne.prototype.getLastError=ne.prototype.Ka,ne.prototype.getLastErrorCode=ne.prototype.Ba,ne.prototype.getStatus=ne.prototype.Z,ne.prototype.getResponseJson=ne.prototype.Oa,ne.prototype.getResponseText=ne.prototype.oa,ne.prototype.send=ne.prototype.ea,ne.prototype.setWithCredentials=ne.prototype.Ha,nh=ne}).apply(typeof fs<"u"?fs:typeof self<"u"?self:typeof window<"u"?window:{});const ol="@firebase/firestore",al="4.9.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pe.UNAUTHENTICATED=new Pe(null),Pe.GOOGLE_CREDENTIALS=new Pe("google-credentials-uid"),Pe.FIRST_PARTY=new Pe("first-party-uid"),Pe.MOCK_USER=new Pe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mn="12.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new Fo("@firebase/firestore");function mn(){return nn.logLevel}function V(n,...e){if(nn.logLevel<=$.DEBUG){const t=e.map(Qo);nn.debug(`Firestore (${Mn}): ${n}`,...t)}}function pt(n,...e){if(nn.logLevel<=$.ERROR){const t=e.map(Qo);nn.error(`Firestore (${Mn}): ${n}`,...t)}}function Ar(n,...e){if(nn.logLevel<=$.WARN){const t=e.map(Qo);nn.warn(`Firestore (${Mn}): ${n}`,...t)}}function Qo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,ah(n,r,t)}function ah(n,e,t){let r=`FIRESTORE (${Mn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw pt(r),new Error(r)}function J(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||ah(e,s,r)}function B(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends yt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ay{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Pe.UNAUTHENTICATED)))}shutdown(){}}class Sy{constructor(e){this.t=e,this.currentUser=Pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){J(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let o=new Vt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Vt,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const u=o;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},l=u=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>l(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Vt)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string",31837,{l:r}),new wy(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string",2055,{h:e}),new Pe(e)}}class Ry{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Pe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Cy{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Ry(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Pe.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class cl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class by{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Le(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){J(this.o===void 0,3512);const r=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable((()=>r(o)))};const s=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new cl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(J(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new cl(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Py(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<t&&(r+=e.charAt(s[o]%62))}return r}}function H(n,e){return n<e?-1:n>e?1:0}function fo(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),o=e.charAt(r);if(s!==o)return Wi(s)===Wi(o)?H(s,o):Wi(s)?1:-1}return H(n.length,e.length)}const ky=55296,Ny=57343;function Wi(n){const e=n.charCodeAt(0);return e>=ky&&e<=Ny}function Rn(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll="__name__";class ze{constructor(e,t,r){t===void 0?t=0:t>e.length&&F(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&F(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ze.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ze?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const o=ze.compareSegments(e.get(s),t.get(s));if(o!==0)return o}return H(e.length,t.length)}static compareSegments(e,t){const r=ze.isNumericId(e),s=ze.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?ze.extractNumericId(e).compare(ze.extractNumericId(t)):fo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Dt.fromString(e.substring(4,e.length-2))}}class X extends ze{construct(e,t,r){return new X(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new D(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new X(t)}static emptyPath(){return new X([])}}const Dy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pe extends ze{construct(e,t,r){return new pe(e,t,r)}static isValidIdentifier(e){return Dy.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pe.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ll}static keyField(){return new pe([ll])}static fromServerFormat(e){const t=[];let r="",s=0;const o=()=>{if(r.length===0)throw new D(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new D(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new D(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(o(),s++)}if(o(),a)throw new D(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pe(t)}static emptyPath(){return new pe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(X.fromString(e))}static fromName(e){return new O(X.fromString(e).popFirst(5))}static empty(){return new O(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&X.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return X.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new X(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(n,e,t){if(!t)throw new D(R.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Vy(n,e,t,r){if(e===!0&&r===!0)throw new D(R.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ul(n){if(!O.isDocumentKey(n))throw new D(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function hl(n){if(O.isDocumentKey(n))throw new D(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function lh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ei(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":F(12329,{type:typeof n})}function Yt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new D(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ei(n);throw new D(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(n,e){const t={typeString:n};return e&&(t.value=e),t}function Br(n,e){if(!lh(n))throw new D(R.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,o="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${r}' field to equal '${o.value}'`;break}}if(t)throw new D(R.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl=-62135596800,fl=1e6;class ee{static now(){return ee.fromMillis(Date.now())}static fromDate(e){return ee.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*fl);return new ee(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new D(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new D(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<dl)throw new D(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/fl}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Br(e,ee._jsonSchema))return new ee(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-dl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ee._jsonSchemaVersion="firestore/timestamp/1.0",ee._jsonSchema={type:ce("string",ee._jsonSchemaVersion),seconds:ce("number"),nanoseconds:ce("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{static fromTimestamp(e){return new U(e)}static min(){return new U(new ee(0,0))}static max(){return new U(new ee(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=-1;function Ly(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=U.fromTimestamp(r===1e9?new ee(t+1,0):new ee(t,r));return new Ot(s,O.empty(),e)}function Oy(n){return new Ot(n.readTime,n.key,Sr)}class Ot{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ot(U.min(),O.empty(),Sr)}static max(){return new Ot(U.max(),O.empty(),Sr)}}function My(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(n.documentKey,e.documentKey),t!==0?t:H(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xn(n){if(n.code!==R.FAILED_PRECONDITION||n.message!==xy)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new b(((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof b?t:b.resolve(t)}catch(t){return b.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):b.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):b.reject(t)}static resolve(e){return new b(((t,r)=>{t(e)}))}static reject(e){return new b(((t,r)=>{r(e)}))}static waitFor(e){return new b(((t,r)=>{let s=0,o=0,a=!1;e.forEach((l=>{++s,l.next((()=>{++o,a&&o===s&&t()}),(u=>r(u)))})),a=!0,o===s&&t()}))}static or(e){let t=b.resolve(!1);for(const r of e)t=t.next((s=>s?b.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,o)=>{r.push(t.call(this,s,o))})),this.waitFor(r)}static mapArray(e,t){return new b(((r,s)=>{const o=e.length,a=new Array(o);let l=0;for(let u=0;u<o;u++){const d=u;t(e[d]).next((m=>{a[d]=m,++l,l===o&&r(a)}),(m=>s(m)))}}))}static doWhile(e,t){return new b(((r,s)=>{const o=()=>{e()===!0?t().next((()=>{o()}),s):r()};o()}))}}function Uy(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Fn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ti.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=-1;function ni(n){return n==null}function Ms(n){return n===0&&1/n==-1/0}function By(n){return typeof n=="number"&&Number.isInteger(n)&&!Ms(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh="";function qy(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ml(e)),e=jy(n.get(t),e);return ml(e)}function jy(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":t+="";break;case uh:t+="";break;default:t+=o}}return t}function ml(n){return n+uh+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function sn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function hh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,t){this.comparator=e,this.root=t||me.EMPTY}insert(e,t){return new te(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,me.BLACK,null,null))}remove(e){return new te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,me.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ms(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ms(this.root,e,this.comparator,!1)}getReverseIterator(){return new ms(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ms(this.root,e,this.comparator,!0)}}class ms{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class me{constructor(e,t,r,s,o){this.key=e,this.value=t,this.color=r??me.RED,this.left=s??me.EMPTY,this.right=o??me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,o){return new me(e??this.key,t??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const o=r(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,t,r),null):o===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return me.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw F(27949);return e+(this.isRed()?0:1)}}me.EMPTY=null,me.RED=!0,me.BLACK=!1;me.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(e,t,r,s,o){return this}insert(e,t,r){return new me(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.comparator=e,this.data=new te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new gl(this.data.getIterator())}getIteratorFrom(e){return new gl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof le)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new le(this.comparator);return t.data=e,t}}class gl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.fields=e,e.sort(pe.comparator)}static empty(){return new qe([])}unionWith(e){let t=new le(pe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new qe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Rn(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new dh("Invalid base64 string: "+o):o}})(e);return new ge(t)}static fromUint8Array(e){const t=(function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o})(e);return new ge(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ge.EMPTY_BYTE_STRING=new ge("");const $y=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mt(n){if(J(!!n,39018),typeof n=="string"){let e=0;const t=$y.exec(n);if(J(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:re(n.seconds),nanos:re(n.nanos)}}function re(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function xt(n){return typeof n=="string"?ge.fromBase64String(n):ge.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="server_timestamp",mh="__type__",ph="__previous_value__",gh="__local_write_time__";function Xo(n){return(n?.mapValue?.fields||{})[mh]?.stringValue===fh}function ri(n){const e=n.mapValue.fields[ph];return Xo(e)?ri(e):e}function Rr(n){const e=Mt(n.mapValue.fields[gh].timestampValue);return new ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e,t,r,s,o,a,l,u,d,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=m}}const xs="(default)";class Cr{constructor(e,t){this.projectId=e,this.database=t||xs}static empty(){return new Cr("","")}get isDefaultDatabase(){return this.database===xs}isEqual(e){return e instanceof Cr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh="__type__",zy="__max__",ps={mapValue:{}},_h="__vector__",Fs="value";function Ft(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Xo(n)?4:Gy(n)?9007199254740991:Wy(n)?10:11:F(28295,{value:n})}function et(n,e){if(n===e)return!0;const t=Ft(n);if(t!==Ft(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Rr(n).isEqual(Rr(e));case 3:return(function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=Mt(s.timestampValue),l=Mt(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,o){return xt(s.bytesValue).isEqual(xt(o.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,o){return re(s.geoPointValue.latitude)===re(o.geoPointValue.latitude)&&re(s.geoPointValue.longitude)===re(o.geoPointValue.longitude)})(n,e);case 2:return(function(s,o){if("integerValue"in s&&"integerValue"in o)return re(s.integerValue)===re(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=re(s.doubleValue),l=re(o.doubleValue);return a===l?Ms(a)===Ms(l):isNaN(a)&&isNaN(l)}return!1})(n,e);case 9:return Rn(n.arrayValue.values||[],e.arrayValue.values||[],et);case 10:case 11:return(function(s,o){const a=s.mapValue.fields||{},l=o.mapValue.fields||{};if(pl(a)!==pl(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!et(a[u],l[u])))return!1;return!0})(n,e);default:return F(52216,{left:n})}}function br(n,e){return(n.values||[]).find((t=>et(t,e)))!==void 0}function Cn(n,e){if(n===e)return 0;const t=Ft(n),r=Ft(e);if(t!==r)return H(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,e.booleanValue);case 2:return(function(o,a){const l=re(o.integerValue||o.doubleValue),u=re(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1})(n,e);case 3:return yl(n.timestampValue,e.timestampValue);case 4:return yl(Rr(n),Rr(e));case 5:return fo(n.stringValue,e.stringValue);case 6:return(function(o,a){const l=xt(o),u=xt(a);return l.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(o,a){const l=o.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const m=H(l[d],u[d]);if(m!==0)return m}return H(l.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(o,a){const l=H(re(o.latitude),re(a.latitude));return l!==0?l:H(re(o.longitude),re(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return _l(n.arrayValue,e.arrayValue);case 10:return(function(o,a){const l=o.fields||{},u=a.fields||{},d=l[Fs]?.arrayValue,m=u[Fs]?.arrayValue,g=H(d?.values?.length||0,m?.values?.length||0);return g!==0?g:_l(d,m)})(n.mapValue,e.mapValue);case 11:return(function(o,a){if(o===ps.mapValue&&a===ps.mapValue)return 0;if(o===ps.mapValue)return 1;if(a===ps.mapValue)return-1;const l=o.fields||{},u=Object.keys(l),d=a.fields||{},m=Object.keys(d);u.sort(),m.sort();for(let g=0;g<u.length&&g<m.length;++g){const E=fo(u[g],m[g]);if(E!==0)return E;const C=Cn(l[u[g]],d[m[g]]);if(C!==0)return C}return H(u.length,m.length)})(n.mapValue,e.mapValue);default:throw F(23264,{he:t})}}function yl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return H(n,e);const t=Mt(n),r=Mt(e),s=H(t.seconds,r.seconds);return s!==0?s:H(t.nanos,r.nanos)}function _l(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const o=Cn(t[s],r[s]);if(o)return o}return H(t.length,r.length)}function bn(n){return mo(n)}function mo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Mt(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return xt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return O.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const o of t.values||[])s?s=!1:r+=",",r+=mo(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${mo(t.fields[a])}`;return s+"}"})(n.mapValue):F(61005,{value:n})}function ws(n){switch(Ft(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ri(n);return e?16+ws(e):16;case 5:return 2*n.stringValue.length;case 6:return xt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,o)=>s+ws(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return sn(r.fields,((o,a)=>{s+=o.length+ws(a)})),s})(n.mapValue);default:throw F(13486,{value:n})}}function El(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function po(n){return!!n&&"integerValue"in n}function Zo(n){return!!n&&"arrayValue"in n}function Il(n){return!!n&&"nullValue"in n}function vl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function As(n){return!!n&&"mapValue"in n}function Wy(n){return(n?.mapValue?.fields||{})[yh]?.stringValue===_h}function gr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return sn(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=gr(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=gr(n.arrayValue.values[t]);return e}return{...n}}function Gy(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===zy}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.value=e}static empty(){return new Oe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!As(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=gr(t)}setAll(e){let t=pe.emptyPath(),r={},s=[];e.forEach(((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=gr(a):s.push(l.lastSegment())}));const o=this.getFieldsMap(t);this.applyChanges(o,r,s)}delete(e){const t=this.field(e.popLast());As(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return et(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];As(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){sn(t,((s,o)=>e[s]=o));for(const s of r)delete e[s]}clone(){return new Oe(gr(this.value))}}function Eh(n){const e=[];return sn(n.fields,((t,r)=>{const s=new pe([t]);if(As(r)){const o=Eh(r.mapValue).fields;if(o.length===0)e.push(s);else for(const a of o)e.push(s.child(a))}else e.push(s)})),new qe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,t,r,s,o,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(e){return new we(e,0,U.min(),U.min(),U.min(),Oe.empty(),0)}static newFoundDocument(e,t,r,s){return new we(e,1,t,U.min(),r,s,0)}static newNoDocument(e,t){return new we(e,2,t,U.min(),U.min(),Oe.empty(),0)}static newUnknownDocument(e,t){return new we(e,3,t,U.min(),U.min(),Oe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Oe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Oe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof we&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new we(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,t){this.position=e,this.inclusive=t}}function Tl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const o=e[s],a=n.position[s];if(o.field.isKeyField()?r=O.comparator(O.fromName(a.referenceValue),t.key):r=Cn(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function wl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!et(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ky(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{}class ae extends Ih{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Jy(e,t,r):t==="array-contains"?new Zy(e,r):t==="in"?new e_(e,r):t==="not-in"?new t_(e,r):t==="array-contains-any"?new n_(e,r):new ae(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Yy(e,r):new Xy(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Cn(t,this.value)):t!==null&&Ft(this.value)===Ft(t)&&this.matchesComparison(Cn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $e extends Ih{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new $e(e,t)}matches(e){return vh(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function vh(n){return n.op==="and"}function Th(n){return Qy(n)&&vh(n)}function Qy(n){for(const e of n.filters)if(e instanceof $e)return!1;return!0}function go(n){if(n instanceof ae)return n.field.canonicalString()+n.op.toString()+bn(n.value);if(Th(n))return n.filters.map((e=>go(e))).join(",");{const e=n.filters.map((t=>go(t))).join(",");return`${n.op}(${e})`}}function wh(n,e){return n instanceof ae?(function(r,s){return s instanceof ae&&r.op===s.op&&r.field.isEqual(s.field)&&et(r.value,s.value)})(n,e):n instanceof $e?(function(r,s){return s instanceof $e&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((o,a,l)=>o&&wh(a,s.filters[l])),!0):!1})(n,e):void F(19439)}function Ah(n){return n instanceof ae?(function(t){return`${t.field.canonicalString()} ${t.op} ${bn(t.value)}`})(n):n instanceof $e?(function(t){return t.op.toString()+" {"+t.getFilters().map(Ah).join(" ,")+"}"})(n):"Filter"}class Jy extends ae{constructor(e,t,r){super(e,t,r),this.key=O.fromName(r.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class Yy extends ae{constructor(e,t){super(e,"in",t),this.keys=Sh("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Xy extends ae{constructor(e,t){super(e,"not-in",t),this.keys=Sh("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Sh(n,e){return(e.arrayValue?.values||[]).map((t=>O.fromName(t.referenceValue)))}class Zy extends ae{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Zo(t)&&br(t.arrayValue,this.value)}}class e_ extends ae{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&br(this.value.arrayValue,t)}}class t_ extends ae{constructor(e,t){super(e,"not-in",t)}matches(e){if(br(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!br(this.value.arrayValue,t)}}class n_ extends ae{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Zo(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>br(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,t=null,r=[],s=[],o=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.Te=null}}function Al(n,e=null,t=[],r=[],s=null,o=null,a=null){return new r_(n,e,t,r,s,o,a)}function ea(n){const e=B(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>go(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),ni(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>bn(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>bn(r))).join(",")),e.Te=t}return e.Te}function ta(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Ky(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!wh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!wl(n.startAt,e.startAt)&&wl(n.endAt,e.endAt)}function yo(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,t=null,r=[],s=[],o=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function s_(n,e,t,r,s,o,a,l){return new qr(n,e,t,r,s,o,a,l)}function si(n){return new qr(n)}function Sl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Rh(n){return n.collectionGroup!==null}function yr(n){const e=B(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ie.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new le(pe.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((d=>{d.isInequality()&&(l=l.add(d.field))}))})),l})(e).forEach((o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ie.push(new Bs(o,r))})),t.has(pe.keyField().canonicalString())||e.Ie.push(new Bs(pe.keyField(),r))}return e.Ie}function Je(n){const e=B(n);return e.Ee||(e.Ee=i_(e,yr(n))),e.Ee}function i_(n,e){if(n.limitType==="F")return Al(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const o=s.dir==="desc"?"asc":"desc";return new Bs(s.field,o)}));const t=n.endAt?new Us(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Us(n.startAt.position,n.startAt.inclusive):null;return Al(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function _o(n,e){const t=n.filters.concat([e]);return new qr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Eo(n,e,t){return new qr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ii(n,e){return ta(Je(n),Je(e))&&n.limitType===e.limitType}function Ch(n){return`${ea(Je(n))}|lt:${n.limitType}`}function pn(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>Ah(s))).join(", ")}]`),ni(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>bn(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>bn(s))).join(",")),`Target(${r})`})(Je(n))}; limitType=${n.limitType})`}function oi(n,e){return e.isFoundDocument()&&(function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,e)&&(function(r,s){for(const o of yr(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,l,u){const d=Tl(a,l,u);return a.inclusive?d<=0:d<0})(r.startAt,yr(r),s)||r.endAt&&!(function(a,l,u){const d=Tl(a,l,u);return a.inclusive?d>=0:d>0})(r.endAt,yr(r),s))})(n,e)}function o_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function bh(n){return(e,t)=>{let r=!1;for(const s of yr(n)){const o=a_(s,e,t);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function a_(n,e,t){const r=n.field.isKeyField()?O.comparator(e.key,t.key):(function(o,a,l){const u=a.data.field(o),d=l.data.field(o);return u!==null&&d!==null?Cn(u,d):F(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return F(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){sn(this.inner,((t,r)=>{for(const[s,o]of r)e(s,o)}))}isEmpty(){return hh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_=new te(O.comparator);function gt(){return c_}const Ph=new te(O.comparator);function lr(...n){let e=Ph;for(const t of n)e=e.insert(t.key,t);return e}function kh(n){let e=Ph;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Qt(){return _r()}function Nh(){return _r()}function _r(){return new on((n=>n.toString()),((n,e)=>n.isEqual(e)))}const l_=new te(O.comparator),u_=new le(O.comparator);function z(...n){let e=u_;for(const t of n)e=e.add(t);return e}const h_=new le(H);function d_(){return h_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ms(e)?"-0":e}}function Dh(n){return{integerValue:""+n}}function f_(n,e){return By(e)?Dh(e):na(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this._=void 0}}function m_(n,e,t){return n instanceof Pr?(function(s,o){const a={fields:{[mh]:{stringValue:fh},[gh]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Xo(o)&&(o=ri(o)),o&&(a.fields[ph]=o),{mapValue:a}})(t,e):n instanceof kr?Lh(n,e):n instanceof Nr?Oh(n,e):(function(s,o){const a=Vh(s,o),l=Rl(a)+Rl(s.Ae);return po(a)&&po(s.Ae)?Dh(l):na(s.serializer,l)})(n,e)}function p_(n,e,t){return n instanceof kr?Lh(n,e):n instanceof Nr?Oh(n,e):t}function Vh(n,e){return n instanceof qs?(function(r){return po(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(e)?e:{integerValue:0}:null}class Pr extends ai{}class kr extends ai{constructor(e){super(),this.elements=e}}function Lh(n,e){const t=Mh(e);for(const r of n.elements)t.some((s=>et(s,r)))||t.push(r);return{arrayValue:{values:t}}}class Nr extends ai{constructor(e){super(),this.elements=e}}function Oh(n,e){let t=Mh(e);for(const r of n.elements)t=t.filter((s=>!et(s,r)));return{arrayValue:{values:t}}}class qs extends ai{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Rl(n){return re(n.integerValue||n.doubleValue)}function Mh(n){return Zo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,t){this.field=e,this.transform=t}}function y_(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof kr&&s instanceof kr||r instanceof Nr&&s instanceof Nr?Rn(r.elements,s.elements,et):r instanceof qs&&s instanceof qs?et(r.Ae,s.Ae):r instanceof Pr&&s instanceof Pr})(n.transform,e.transform)}class __{constructor(e,t){this.version=e,this.transformResults=t}}class lt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new lt}static exists(e){return new lt(void 0,e)}static updateTime(e){return new lt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ss(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ci{}function xh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Uh(n.key,lt.none()):new jr(n.key,n.data,lt.none());{const t=n.data,r=Oe.empty();let s=new le(pe.comparator);for(let o of e.fields)if(!s.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new an(n.key,r,new qe(s.toArray()),lt.none())}}function E_(n,e,t){n instanceof jr?(function(s,o,a){const l=s.value.clone(),u=bl(s.fieldTransforms,o,a.transformResults);l.setAll(u),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):n instanceof an?(function(s,o,a){if(!Ss(s.precondition,o))return void o.convertToUnknownDocument(a.version);const l=bl(s.fieldTransforms,o,a.transformResults),u=o.data;u.setAll(Fh(s)),u.setAll(l),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):(function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Er(n,e,t,r){return n instanceof jr?(function(o,a,l,u){if(!Ss(o.precondition,a))return l;const d=o.value.clone(),m=Pl(o.fieldTransforms,u,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,e,t,r):n instanceof an?(function(o,a,l,u){if(!Ss(o.precondition,a))return l;const d=Pl(o.fieldTransforms,u,a),m=a.data;return m.setAll(Fh(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((g=>g.field)))})(n,e,t,r):(function(o,a,l){return Ss(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,e,t)}function I_(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),o=Vh(r.transform,s||null);o!=null&&(t===null&&(t=Oe.empty()),t.set(r.field,o))}return t||null}function Cl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Rn(r,s,((o,a)=>y_(o,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class jr extends ci{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class an extends ci{constructor(e,t,r,s,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Fh(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function bl(n,e,t){const r=new Map;J(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const o=n[s],a=o.transform,l=e.data.field(o.field);r.set(o.field,p_(a,l,t[s]))}return r}function Pl(n,e,t){const r=new Map;for(const s of n){const o=s.transform,a=t.data.field(s.field);r.set(s.field,m_(o,a,e))}return r}class Uh extends ci{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class v_ extends ci{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&E_(o,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Er(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Er(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Nh();return this.mutations.forEach((s=>{const o=e.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=t.has(s.key)?null:l;const u=xh(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(U.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),z())}isEqual(e){return this.batchId===e.batchId&&Rn(this.mutations,e.mutations,((t,r)=>Cl(t,r)))&&Rn(this.baseMutations,e.baseMutations,((t,r)=>Cl(t,r)))}}class ra{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){J(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return l_})();const o=e.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new ra(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie,G;function S_(n){switch(n){case R.OK:return F(64938);case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0;default:return F(15467,{code:n})}}function Bh(n){if(n===void 0)return pt("GRPC error has no .code"),R.UNKNOWN;switch(n){case ie.OK:return R.OK;case ie.CANCELLED:return R.CANCELLED;case ie.UNKNOWN:return R.UNKNOWN;case ie.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case ie.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case ie.INTERNAL:return R.INTERNAL;case ie.UNAVAILABLE:return R.UNAVAILABLE;case ie.UNAUTHENTICATED:return R.UNAUTHENTICATED;case ie.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case ie.NOT_FOUND:return R.NOT_FOUND;case ie.ALREADY_EXISTS:return R.ALREADY_EXISTS;case ie.PERMISSION_DENIED:return R.PERMISSION_DENIED;case ie.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case ie.ABORTED:return R.ABORTED;case ie.OUT_OF_RANGE:return R.OUT_OF_RANGE;case ie.UNIMPLEMENTED:return R.UNIMPLEMENTED;case ie.DATA_LOSS:return R.DATA_LOSS;default:return F(39323,{code:n})}}(G=ie||(ie={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=new Dt([4294967295,4294967295],0);function kl(n){const e=R_().encode(n),t=new th;return t.update(e),new Uint8Array(t.digest())}function Nl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Dt([t,r],0),new Dt([s,o],0)]}class sa{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ur(`Invalid padding: ${t}`);if(r<0)throw new ur(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ur(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ur(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Dt.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Dt.fromNumber(r)));return s.compare(C_)===1&&(s=new Dt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=kl(e),[r,s]=Nl(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new sa(o,s,t);return r.forEach((l=>a.insert(l))),a}insert(e){if(this.ge===0)return;const t=kl(e),[r,s]=Nl(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ur extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,t,r,s,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,$r.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new li(U.min(),s,new te(H),gt(),z())}}class $r{constructor(e,t,r,s,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new $r(r,t,z(),z(),z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class qh{constructor(e,t){this.targetId=e,this.Ce=t}}class jh{constructor(e,t,r=ge.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Dl{constructor(){this.ve=0,this.Fe=Vl(),this.Me=ge.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=z(),t=z(),r=z();return this.Fe.forEach(((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:F(38017,{changeType:o})}})),new $r(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Vl()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,J(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class b_{constructor(e){this.Ge=e,this.ze=new Map,this.je=gt(),this.Je=gs(),this.He=gs(),this.Ye=new te(H)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:F(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const o=s.target;if(yo(o))if(r===0){const a=new O(o.path);this.et(t,a,we.newNoDocument(a,U.min()))}else J(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const l=this.ut(e),u=l?this.ct(l,e,a):1;if(u!==0){this.it(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=t;let a,l;try{a=xt(r).toUint8Array()}catch(u){if(u instanceof dh)return Ar("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new sa(a,s,o)}catch(u){return Ar(u instanceof ur?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach((o=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(l)||(this.et(t,o,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((o,a)=>{const l=this.ot(a);if(l){if(o.current&&yo(l.target)){const u=new O(l.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,we.newNoDocument(u,e))}o.Be&&(t.set(a,o.ke()),o.qe())}}));let r=z();this.He.forEach(((o,a)=>{let l=!0;a.forEachWhile((u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(o))})),this.je.forEach(((o,a)=>a.setReadTime(e)));const s=new li(e,t,this.Ye,this.je,r);return this.je=gt(),this.Je=gs(),this.He=gs(),this.Ye=new te(H),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Dl,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new le(H),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new le(H),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Dl),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function gs(){return new te(O.comparator)}function Vl(){return new te(O.comparator)}const P_={asc:"ASCENDING",desc:"DESCENDING"},k_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},N_={and:"AND",or:"OR"};class D_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Io(n,e){return n.useProto3Json||ni(e)?e:{value:e}}function js(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $h(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function V_(n,e){return js(n,e.toTimestamp())}function Ye(n){return J(!!n,49232),U.fromTimestamp((function(t){const r=Mt(t);return new ee(r.seconds,r.nanos)})(n))}function ia(n,e){return vo(n,e).canonicalString()}function vo(n,e){const t=(function(s){return new X(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Hh(n){const e=X.fromString(n);return J(Qh(e),10190,{key:e.toString()}),e}function To(n,e){return ia(n.databaseId,e.path)}function Gi(n,e){const t=Hh(e);if(t.get(1)!==n.databaseId.projectId)throw new D(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new D(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new O(Wh(t))}function zh(n,e){return ia(n.databaseId,e)}function L_(n){const e=Hh(n);return e.length===4?X.emptyPath():Wh(e)}function wo(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Wh(n){return J(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ll(n,e,t){return{name:To(n,e),fields:t.value.mapValue.fields}}function O_(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:F(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],o=(function(d,m){return d.useProto3Json?(J(m===void 0||typeof m=="string",58123),ge.fromBase64String(m||"")):(J(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),ge.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&(function(d){const m=d.code===void 0?R.UNKNOWN:Bh(d.code);return new D(m,d.message||"")})(a);t=new jh(r,s,o,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Gi(n,r.document.name),o=Ye(r.document.updateTime),a=r.document.createTime?Ye(r.document.createTime):U.min(),l=new Oe({mapValue:{fields:r.document.fields}}),u=we.newFoundDocument(s,o,a,l),d=r.targetIds||[],m=r.removedTargetIds||[];t=new Rs(d,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Gi(n,r.document),o=r.readTime?Ye(r.readTime):U.min(),a=we.newNoDocument(s,o),l=r.removedTargetIds||[];t=new Rs([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Gi(n,r.document),o=r.removedTargetIds||[];t=new Rs([],o,s,null)}else{if(!("filter"in e))return F(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new A_(s,o),l=r.targetId;t=new qh(l,a)}}return t}function M_(n,e){let t;if(e instanceof jr)t={update:Ll(n,e.key,e.value)};else if(e instanceof Uh)t={delete:To(n,e.key)};else if(e instanceof an)t={update:Ll(n,e.key,e.data),updateMask:z_(e.fieldMask)};else{if(!(e instanceof v_))return F(16599,{Vt:e.type});t={verify:To(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(o,a){const l=a.transform;if(l instanceof Pr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof kr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Nr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof qs)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw F(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,o){return o.updateTime!==void 0?{updateTime:V_(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:F(27497)})(n,e.precondition)),t}function x_(n,e){return n&&n.length>0?(J(e!==void 0,14353),n.map((t=>(function(s,o){let a=s.updateTime?Ye(s.updateTime):Ye(o);return a.isEqual(U.min())&&(a=Ye(o)),new __(a,s.transformResults||[])})(t,e)))):[]}function F_(n,e){return{documents:[zh(n,e.path)]}}function U_(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=zh(n,s);const o=(function(d){if(d.length!==0)return Kh($e.create(d,"and"))})(e.filters);o&&(t.structuredQuery.where=o);const a=(function(d){if(d.length!==0)return d.map((m=>(function(E){return{field:gn(E.field),direction:j_(E.dir)}})(m)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Io(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{ft:t,parent:s}}function B_(n){let e=L_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){J(r===1,65062);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let o=[];t.where&&(o=(function(g){const E=Gh(g);return E instanceof $e&&Th(E)?E.getFilters():[E]})(t.where));let a=[];t.orderBy&&(a=(function(g){return g.map((E=>(function(P){return new Bs(yn(P.field),(function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(P.direction))})(E)))})(t.orderBy));let l=null;t.limit&&(l=(function(g){let E;return E=typeof g=="object"?g.value:g,ni(E)?null:E})(t.limit));let u=null;t.startAt&&(u=(function(g){const E=!!g.before,C=g.values||[];return new Us(C,E)})(t.startAt));let d=null;return t.endAt&&(d=(function(g){const E=!g.before,C=g.values||[];return new Us(C,E)})(t.endAt)),s_(e,s,a,o,l,"F",u,d)}function q_(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Gh(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=yn(t.unaryFilter.field);return ae.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=yn(t.unaryFilter.field);return ae.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=yn(t.unaryFilter.field);return ae.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=yn(t.unaryFilter.field);return ae.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ae.create(yn(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return $e.create(t.compositeFilter.filters.map((r=>Gh(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F(1026)}})(t.compositeFilter.op))})(n):F(30097,{filter:n})}function j_(n){return P_[n]}function $_(n){return k_[n]}function H_(n){return N_[n]}function gn(n){return{fieldPath:n.canonicalString()}}function yn(n){return pe.fromServerFormat(n.fieldPath)}function Kh(n){return n instanceof ae?(function(t){if(t.op==="=="){if(vl(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NAN"}};if(Il(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(vl(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NOT_NAN"}};if(Il(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gn(t.field),op:$_(t.op),value:t.value}}})(n):n instanceof $e?(function(t){const r=t.getFilters().map((s=>Kh(s)));return r.length===1?r[0]:{compositeFilter:{op:H_(t.op),filters:r}}})(n):F(54877,{filter:n})}function z_(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Qh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,t,r,s,o=U.min(),a=U.min(),l=ge.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Ct(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ct(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ct(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ct(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e){this.yt=e}}function G_(n){const e=B_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Eo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(){this.Cn=new Q_}addToCollectionParentIndex(e,t){return this.Cn.add(t),b.resolve()}getCollectionParents(e,t){return b.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return b.resolve()}deleteFieldIndex(e,t){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,t){return b.resolve()}getDocumentsMatchingTarget(e,t){return b.resolve(null)}getIndexType(e,t){return b.resolve(0)}getFieldIndexes(e,t){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,t){return b.resolve(Ot.min())}getMinOffsetFromCollectionGroup(e,t){return b.resolve(Ot.min())}updateCollectionGroup(e,t,r){return b.resolve()}updateIndexEntries(e,t){return b.resolve()}}class Q_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new le(X.comparator),o=!s.has(r);return this.index[t]=s.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new le(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Jh=41943040;class ke{static withCacheSize(e){return new ke(e,ke.DEFAULT_COLLECTION_PERCENTILE,ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ke.DEFAULT_COLLECTION_PERCENTILE=10,ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ke.DEFAULT=new ke(Jh,ke.DEFAULT_COLLECTION_PERCENTILE,ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ke.DISABLED=new ke(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Pn(0)}static cr(){return new Pn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml="LruGarbageCollector",Yh=1048576;function xl([n,e],[t,r]){const s=H(n,t);return s===0?H(e,r):s}class J_{constructor(e){this.Ir=e,this.buffer=new le(xl),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();xl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Y_{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){V(Ml,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Fn(t)?V(Ml,"Ignoring IndexedDB error during garbage collection: ",t):await xn(t)}await this.Vr(3e5)}))}}class X_{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return b.resolve(ti.ce);const r=new J_(t);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(Ol)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ol):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,o,a,l,u,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(e,s)))).next((g=>(r=g,l=Date.now(),this.removeTargets(e,r,t)))).next((g=>(o=g,u=Date.now(),this.removeOrphanedDocuments(e,r)))).next((g=>(d=Date.now(),mn()<=$.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${o} targets in `+(u-l)+`ms
	Removed ${g} documents in `+(d-u)+`ms
Total Duration: ${d-m}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:g}))))}}function Z_(n,e){return new X_(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(){this.changes=new on((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,we.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?b.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&Er(r.mutation,s,qe.empty(),ee.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,z()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=z()){const s=Qt();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((o=>{let a=lr();return o.forEach(((l,u)=>{a=a.insert(l,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=Qt();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,z())))}populateOverlays(e,t,r){const s=[];return r.forEach((o=>{t.has(o)||s.push(o)})),this.documentOverlayCache.getOverlays(e,s).next((o=>{o.forEach(((a,l)=>{t.set(a,l)}))}))}computeViews(e,t,r,s){let o=gt();const a=_r(),l=(function(){return _r()})();return t.forEach(((u,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof an)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),Er(m.mutation,d,m.mutation.getFieldMask(),ee.now())):a.set(d.key,qe.empty())})),this.recalculateAndSaveOverlays(e,o).next((u=>(u.forEach(((d,m)=>a.set(d,m))),t.forEach(((d,m)=>l.set(d,new tE(m,a.get(d)??null)))),l)))}recalculateAndSaveOverlays(e,t){const r=_r();let s=new te(((a,l)=>a-l)),o=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const l of a)l.keys().forEach((u=>{const d=t.get(u);if(d===null)return;let m=r.get(u)||qe.empty();m=l.applyToLocalView(d,m),r.set(u,m);const g=(s.get(l.batchId)||z()).add(u);s=s.insert(l.batchId,g)}))})).next((()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,m=u.value,g=Nh();m.forEach((E=>{if(!o.has(E)){const C=xh(t.get(E),r.get(E));C!==null&&g.set(E,C),o=o.add(E)}})),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return b.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Rh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-o.size):b.resolve(Qt());let l=Sr,u=o;return a.next((d=>b.forEach(d,((m,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),o.get(m)?b.resolve():this.remoteDocumentCache.getEntry(e,m).next((E=>{u=u.insert(m,E)}))))).next((()=>this.populateOverlays(e,d,o))).next((()=>this.computeViews(e,u,d,z()))).next((m=>({batchId:l,changes:kh(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next((r=>{let s=lr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const o=t.collectionGroup;let a=lr();return this.indexManager.getCollectionParents(e,o).next((l=>b.forEach(l,(u=>{const d=(function(g,E){return new qr(E,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(t,u.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next((m=>{m.forEach(((g,E)=>{a=a.insert(g,E)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,s)))).next((a=>{o.forEach(((u,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,we.newInvalidDocument(m)))}));let l=lr();return a.forEach(((u,d)=>{const m=o.get(u);m!==void 0&&Er(m.mutation,d,qe.empty(),ee.now()),oi(t,d)&&(l=l.insert(u,d))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return b.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Ye(s.createTime)}})(t)),b.resolve()}getNamedQuery(e,t){return b.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(s){return{name:s.name,query:G_(s.bundledQuery),readTime:Ye(s.readTime)}})(t)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(){this.overlays=new te(O.comparator),this.qr=new Map}getOverlay(e,t){return b.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Qt();return b.forEach(t,(s=>this.getOverlay(e,s).next((o=>{o!==null&&r.set(s,o)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,o)=>{this.St(e,t,o)})),b.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((o=>this.overlays=this.overlays.remove(o))),this.qr.delete(r)),b.resolve()}getOverlaysForCollection(e,t,r){const s=Qt(),o=t.length+1,a=new O(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&u.largestBatchId>r&&s.set(u.getKey(),u)}return b.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let o=new te(((d,m)=>d-m));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=Qt(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const l=Qt(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((d,m)=>l.set(d,m))),!(l.size()>=s)););return b.resolve(l)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new w_(t,r));let o=this.qr.get(t);o===void 0&&(o=z(),this.qr.set(t,o)),this.qr.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(){this.sessionToken=ge.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,b.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(){this.Qr=new le(ue.$r),this.Ur=new le(ue.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new ue(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Gr(new ue(e,t))}zr(e,t){e.forEach((r=>this.removeReference(r,t)))}jr(e){const t=new O(new X([])),r=new ue(t,e),s=new ue(t,e+1),o=[];return this.Ur.forEachInRange([r,s],(a=>{this.Gr(a),o.push(a.key)})),o}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new O(new X([])),r=new ue(t,e),s=new ue(t,e+1);let o=z();return this.Ur.forEachInRange([r,s],(a=>{o=o.add(a.key)})),o}containsKey(e){const t=new ue(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ue{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return O.comparator(e.key,t.key)||H(e.Yr,t.Yr)}static Kr(e,t){return H(e.Yr,t.Yr)||O.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new le(ue.$r)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new T_(o,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Zr=this.Zr.add(new ue(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return b.resolve(a)}lookupMutationBatch(e,t){return b.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),o=s<0?0:s;return b.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?Yo:this.tr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ue(t,0),s=new ue(t,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,s],(a=>{const l=this.Xr(a.Yr);o.push(l)})),b.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new le(H);return t.forEach((s=>{const o=new ue(s,0),a=new ue(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,a],(l=>{r=r.add(l.Yr)}))})),b.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const a=new ue(new O(o),0);let l=new le(H);return this.Zr.forEachWhile((u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.Yr)),!0)}),a),b.resolve(this.ti(l))}ti(e){const t=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){J(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return b.forEach(t.mutations,(s=>{const o=new ue(s.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,t){const r=new ue(t,0),s=this.Zr.firstAfterOrEqual(r);return b.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e){this.ri=e,this.docs=(function(){return new te(O.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),o=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return b.resolve(r?r.document.mutableCopy():we.newInvalidDocument(t))}getEntries(e,t){let r=gt();return t.forEach((s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():we.newInvalidDocument(s))})),b.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let o=gt();const a=t.path,l=new O(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:m}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||My(Oy(m),r)<=0||(s.has(m.key)||oi(t,m))&&(o=o.insert(m.key,m.mutableCopy()))}return b.resolve(o)}getAllFromCollectionGroup(e,t,r,s){F(9500)}ii(e,t){return b.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new cE(this)}getSize(e){return b.resolve(this.size)}}class cE extends eE{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),b.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e){this.persistence=e,this.si=new on((t=>ea(t)),ta),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.oi=0,this._i=new oa,this.targetCount=0,this.ai=Pn.ur()}forEachTarget(e,t){return this.si.forEach(((r,s)=>t(s))),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),b.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Pn(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,b.resolve()}updateTargetData(e,t){return this.Pr(t),b.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,t,r){let s=0;const o=[];return this.si.forEach(((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.si.delete(a),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),b.waitFor(o).next((()=>s))}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return b.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),b.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,o=[];return s&&t.forEach((a=>{o.push(s.markPotentiallyOrphaned(e,a))})),b.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),b.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return b.resolve(r)}containsKey(e,t){return b.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,t){this.ui={},this.overlays={},this.ci=new ti(0),this.li=!1,this.li=!0,this.hi=new iE,this.referenceDelegate=e(this),this.Pi=new lE(this),this.indexManager=new K_,this.remoteDocumentCache=(function(s){return new aE(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new W_(t),this.Ii=new rE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new sE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new oE(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){V("MemoryPersistence","Starting transaction:",e);const s=new uE(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((o=>this.referenceDelegate.di(s).next((()=>o)))).toPromise().then((o=>(s.raiseOnCommittedEvent(),o)))}Ai(e,t){return b.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,t))))}}class uE extends Fy{constructor(e){super(),this.currentSequenceNumber=e}}class aa{constructor(e){this.persistence=e,this.Ri=new oa,this.Vi=null}static mi(e){return new aa(e)}get fi(){if(this.Vi)return this.Vi;throw F(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),b.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),b.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((o=>this.fi.add(o.toString())))})).next((()=>r.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.fi,(r=>{const s=O.fromPath(r);return this.gi(e,s).next((o=>{o||t.removeEntry(s,U.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return b.or([()=>b.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class $s{constructor(e,t){this.persistence=e,this.pi=new on((r=>qy(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Z_(this,t)}static mi(e,t){return new $s(e,t)}Ei(){}di(e){return b.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}pr(e,t){return b.forEach(this.pi,((r,s)=>this.br(e,r,s).next((o=>o?b.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ii(e,(a=>this.br(e,a,t).next((l=>{l||(r++,o.removeEntry(a,U.min()))})))).next((()=>o.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),b.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),b.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),b.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),b.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ws(e.data.value)),t}br(e,t,r){return b.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return b.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=z(),s=z();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new ca(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return jf()?8:Uy(Ae())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const o={result:null};return this.ys(e,t).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ws(e,t,s,r).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new hE;return this.Ss(e,t,a).next((l=>{if(o.result=l,this.Vs)return this.bs(e,t,a,l.size)}))})).next((()=>o.result))}bs(e,t,r,s){return r.documentReadCount<this.fs?(mn()<=$.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",pn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),b.resolve()):(mn()<=$.DEBUG&&V("QueryEngine","Query:",pn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(mn()<=$.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",pn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Je(t))):b.resolve())}ys(e,t){if(Sl(t))return b.resolve(null);let r=Je(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Eo(t,null,"F"),r=Je(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((o=>{const a=z(...o);return this.ps.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,r).next((u=>{const d=this.Ds(t,l);return this.Cs(t,d,a,u.readTime)?this.ys(e,Eo(t,null,"F")):this.vs(e,d,t,u)}))))})))))}ws(e,t,r,s){return Sl(t)||s.isEqual(U.min())?b.resolve(null):this.ps.getDocuments(e,r).next((o=>{const a=this.Ds(t,o);return this.Cs(t,a,r,s)?b.resolve(null):(mn()<=$.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),pn(t)),this.vs(e,a,t,Ly(s,Sr)).next((l=>l)))}))}Ds(e,t){let r=new le(bh(e));return t.forEach(((s,o)=>{oi(e,o)&&(r=r.add(o))})),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ss(e,t,r){return mn()<=$.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",pn(t)),this.ps.getDocumentsMatchingQuery(e,t,Ot.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((o=>(t.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la="LocalStore",fE=3e8;class mE{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new te(H),this.xs=new on((o=>ea(o)),ta),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nE(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function pE(n,e,t,r){return new mE(n,e,t,r)}async function Zh(n,e){const t=B(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((o=>(s=o,t.Bs(e),t.mutationQueue.getAllMutationBatches(r)))).next((o=>{const a=[],l=[];let u=z();for(const d of s){a.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}for(const d of o){l.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(r,u).next((d=>({Ls:d,removedBatchIds:a,addedBatchIds:l})))}))}))}function gE(n,e){const t=B(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),o=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,u,d,m){const g=d.batch,E=g.keys();let C=b.resolve();return E.forEach((P=>{C=C.next((()=>m.getEntry(u,P))).next((L=>{const N=d.docVersions.get(P);J(N!==null,48541),L.version.compareTo(N)<0&&(g.applyToRemoteDocument(L,d),L.isValidDocument()&&(L.setReadTime(d.commitVersion),m.addEntry(L)))}))})),C.next((()=>l.mutationQueue.removeMutationBatch(u,g)))})(t,r,e,o).next((()=>o.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let u=z();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function ed(n){const e=B(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function yE(n,e){const t=B(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const l=[];e.targetChanges.forEach(((m,g)=>{const E=s.get(g);if(!E)return;l.push(t.Pi.removeMatchingKeys(o,m.removedDocuments,g).next((()=>t.Pi.addMatchingKeys(o,m.addedDocuments,g))));let C=E.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(g)!==null?C=C.withResumeToken(ge.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):m.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(m.resumeToken,r)),s=s.insert(g,C),(function(L,N,j){return L.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=fE?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0})(E,C,m)&&l.push(t.Pi.updateTargetData(o,C))}));let u=gt(),d=z();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(o,m))})),l.push(_E(o,a,e.documentUpdates).next((m=>{u=m.ks,d=m.qs}))),!r.isEqual(U.min())){const m=t.Pi.getLastRemoteSnapshotVersion(o).next((g=>t.Pi.setTargetsMetadata(o,o.currentSequenceNumber,r)));l.push(m)}return b.waitFor(l).next((()=>a.apply(o))).next((()=>t.localDocuments.getLocalViewOfDocuments(o,u,d))).next((()=>u))})).then((o=>(t.Ms=s,o)))}function _E(n,e,t){let r=z(),s=z();return t.forEach((o=>r=r.add(o))),e.getEntries(n,r).next((o=>{let a=gt();return t.forEach(((l,u)=>{const d=o.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(U.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):V(la,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)})),{ks:a,qs:s}}))}function EE(n,e){const t=B(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Yo),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function IE(n,e){const t=B(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.Pi.getTargetData(r,e).next((o=>o?(s=o,b.resolve(s)):t.Pi.allocateTargetId(r).next((a=>(s=new Ct(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r}))}async function Ao(n,e,t){const r=B(n),s=r.Ms.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!Fn(a))throw a;V(la,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Fl(n,e,t){const r=B(n);let s=U.min(),o=z();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,d,m){const g=B(u),E=g.xs.get(m);return E!==void 0?b.resolve(g.Ms.get(E)):g.Pi.getTargetData(d,m)})(r,a,Je(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,l.targetId).next((u=>{o=u}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:U.min(),t?o:z()))).next((l=>(vE(r,o_(e),l),{documents:l,Qs:o})))))}function vE(n,e,t){let r=n.Os.get(e)||U.min();t.forEach(((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)})),n.Os.set(e,r)}class Ul{constructor(){this.activeTargetIds=d_()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class TE{constructor(){this.Mo=new Ul,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Ul,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="ConnectivityMonitor";class ql{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){V(Bl,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){V(Bl,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ys=null;function So(){return ys===null?ys=(function(){return 268435456+Math.round(2147483648*Math.random())})():ys++,"0x"+ys.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki="RestConnection",AE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class SE{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===xs?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,o){const a=So(),l=this.zo(e,t.toUriEncodedString());V(Ki,`Sending RPC '${e}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,o);const{host:d}=new URL(l),m=Vn(d);return this.Jo(e,l,u,r,m).then((g=>(V(Ki,`Received RPC '${e}' ${a}: `,g),g)),(g=>{throw Ar(Ki,`RPC '${e}' ${a} failed with error: `,g,"url: ",l,"request:",r),g}))}Ho(e,t,r,s,o,a){return this.Go(e,t,r,s,o)}jo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Mn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,o)=>e[o]=s)),r&&r.headers.forEach(((s,o)=>e[o]=s))}zo(e,t){const r=AE[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te="WebChannelConnection";class CE extends SE{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,o){const a=So();return new Promise(((l,u)=>{const d=new nh;d.setWithCredentials(!0),d.listenOnce(rh.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Ts.NO_ERROR:const g=d.getResponseJson();V(Te,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),l(g);break;case Ts.TIMEOUT:V(Te,`RPC '${e}' ${a} timed out`),u(new D(R.DEADLINE_EXCEEDED,"Request time out"));break;case Ts.HTTP_ERROR:const E=d.getStatus();if(V(Te,`RPC '${e}' ${a} failed with status:`,E,"response text:",d.getResponseText()),E>0){let C=d.getResponseJson();Array.isArray(C)&&(C=C[0]);const P=C?.error;if(P&&P.status&&P.message){const L=(function(j){const q=j.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(q)>=0?q:R.UNKNOWN})(P.status);u(new D(L,P.message))}else u(new D(R.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new D(R.UNAVAILABLE,"Connection failed."));break;default:F(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{V(Te,`RPC '${e}' ${a} completed.`)}}));const m=JSON.stringify(s);V(Te,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",m,r,15)}))}T_(e,t,r){const s=So(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=oh(),l=ih(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const m=o.join("");V(Te,`Creating RPC '${e}' stream ${s}: ${m}`,u);const g=a.createWebChannel(m,u);this.I_(g);let E=!1,C=!1;const P=new RE({Yo:N=>{C?V(Te,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(E||(V(Te,`Opening RPC '${e}' stream ${s} transport.`),g.open(),E=!0),V(Te,`RPC '${e}' stream ${s} sending:`,N),g.send(N))},Zo:()=>g.close()}),L=(N,j,q)=>{N.listen(j,(W=>{try{q(W)}catch(de){setTimeout((()=>{throw de}),0)}}))};return L(g,cr.EventType.OPEN,(()=>{C||(V(Te,`RPC '${e}' stream ${s} transport opened.`),P.o_())})),L(g,cr.EventType.CLOSE,(()=>{C||(C=!0,V(Te,`RPC '${e}' stream ${s} transport closed`),P.a_(),this.E_(g))})),L(g,cr.EventType.ERROR,(N=>{C||(C=!0,Ar(Te,`RPC '${e}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),P.a_(new D(R.UNAVAILABLE,"The operation could not be completed")))})),L(g,cr.EventType.MESSAGE,(N=>{if(!C){const j=N.data[0];J(!!j,16349);const q=j,W=q?.error||q[0]?.error;if(W){V(Te,`RPC '${e}' stream ${s} received error:`,W);const de=W.status;let He=(function(p){const _=ie[p];if(_!==void 0)return Bh(_)})(de),ye=W.message;He===void 0&&(He=R.INTERNAL,ye="Unknown error status: "+de+" with message "+W.message),C=!0,P.a_(new D(He,ye)),g.close()}else V(Te,`RPC '${e}' stream ${s} received:`,j),P.u_(j)}})),L(l,sh.STAT_EVENT,(N=>{N.stat===ho.PROXY?V(Te,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===ho.NOPROXY&&V(Te,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{P.__()}),0),P}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Qi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(n){return new D_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,t,r=1e3,s=1.5,o=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl="PersistentStream";class nd{constructor(e,t,r,s,o,a,l,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new td(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===R.RESOURCE_EXHAUSTED?(pt(t.toString()),pt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===t&&this.G_(r,s)}),(r=>{e((()=>{const s=new D(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return V(jl,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(V(jl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class bE extends nd{constructor(e,t,r,s,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=O_(this.serializer,e),r=(function(o){if(!("targetChange"in o))return U.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?Ye(a.readTime):U.min()})(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=wo(this.serializer),t.addTarget=(function(o,a){let l;const u=a.target;if(l=yo(u)?{documents:F_(o,u)}:{query:U_(o,u).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=$h(o,a.resumeToken);const d=Io(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){l.readTime=js(o,a.snapshotVersion.toTimestamp());const d=Io(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l})(this.serializer,e);const r=q_(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=wo(this.serializer),t.removeTarget=e,this.q_(t)}}class PE extends nd{constructor(e,t,r,s,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return J(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,J(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){J(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=x_(e.writeResults,e.commitTime),r=Ye(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=wo(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>M_(this.serializer,r)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{}class NE extends kE{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new D(R.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Go(e,vo(t,r),s,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(R.UNKNOWN,o.toString())}))}Ho(e,t,r,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Ho(e,vo(t,r),s,a,l,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new D(R.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class DE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(pt(t),this.aa=!1):V("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn="RemoteStore";class VE{constructor(e,t,r,s,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{cn(this)&&(V(rn,"Restarting streams for network reachability change."),await(async function(u){const d=B(u);d.Ea.add(4),await Hr(d),d.Ra.set("Unknown"),d.Ea.delete(4),await hi(d)})(this))}))})),this.Ra=new DE(r,s)}}async function hi(n){if(cn(n))for(const e of n.da)await e(!0)}async function Hr(n){for(const e of n.da)await e(!1)}function rd(n,e){const t=B(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),fa(t)?da(t):Un(t).O_()&&ha(t,e))}function ua(n,e){const t=B(n),r=Un(t);t.Ia.delete(e),r.O_()&&sd(t,e),t.Ia.size===0&&(r.O_()?r.L_():cn(t)&&t.Ra.set("Unknown"))}function ha(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Un(n).Y_(e)}function sd(n,e){n.Va.Ue(e),Un(n).Z_(e)}function da(n){n.Va=new b_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Un(n).start(),n.Ra.ua()}function fa(n){return cn(n)&&!Un(n).x_()&&n.Ia.size>0}function cn(n){return B(n).Ea.size===0}function id(n){n.Va=void 0}async function LE(n){n.Ra.set("Online")}async function OE(n){n.Ia.forEach(((e,t)=>{ha(n,e)}))}async function ME(n,e){id(n),fa(n)?(n.Ra.ha(e),da(n)):n.Ra.set("Unknown")}async function xE(n,e,t){if(n.Ra.set("Online"),e instanceof jh&&e.state===2&&e.cause)try{await(async function(s,o){const a=o.cause;for(const l of o.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ia.delete(l),s.Va.removeTarget(l))})(n,e)}catch(r){V(rn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Hs(n,r)}else if(e instanceof Rs?n.Va.Ze(e):e instanceof qh?n.Va.st(e):n.Va.tt(e),!t.isEqual(U.min()))try{const r=await ed(n.localStore);t.compareTo(r)>=0&&await(function(o,a){const l=o.Va.Tt(a);return l.targetChanges.forEach(((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const m=o.Ia.get(d);m&&o.Ia.set(d,m.withResumeToken(u.resumeToken,a))}})),l.targetMismatches.forEach(((u,d)=>{const m=o.Ia.get(u);if(!m)return;o.Ia.set(u,m.withResumeToken(ge.EMPTY_BYTE_STRING,m.snapshotVersion)),sd(o,u);const g=new Ct(m.target,u,d,m.sequenceNumber);ha(o,g)})),o.remoteSyncer.applyRemoteEvent(l)})(n,t)}catch(r){V(rn,"Failed to raise snapshot:",r),await Hs(n,r)}}async function Hs(n,e,t){if(!Fn(e))throw e;n.Ea.add(1),await Hr(n),n.Ra.set("Offline"),t||(t=()=>ed(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{V(rn,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await hi(n)}))}function od(n,e){return e().catch((t=>Hs(n,t,e)))}async function di(n){const e=B(n),t=Ut(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Yo;for(;FE(e);)try{const s=await EE(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,UE(e,s)}catch(s){await Hs(e,s)}ad(e)&&cd(e)}function FE(n){return cn(n)&&n.Ta.length<10}function UE(n,e){n.Ta.push(e);const t=Ut(n);t.O_()&&t.X_&&t.ea(e.mutations)}function ad(n){return cn(n)&&!Ut(n).x_()&&n.Ta.length>0}function cd(n){Ut(n).start()}async function BE(n){Ut(n).ra()}async function qE(n){const e=Ut(n);for(const t of n.Ta)e.ea(t.mutations)}async function jE(n,e,t){const r=n.Ta.shift(),s=ra.from(r,e,t);await od(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await di(n)}async function $E(n,e){e&&Ut(n).X_&&await(async function(r,s){if((function(a){return S_(a)&&a!==R.ABORTED})(s.code)){const o=r.Ta.shift();Ut(r).B_(),await od(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s))),await di(r)}})(n,e),ad(n)&&cd(n)}async function $l(n,e){const t=B(n);t.asyncQueue.verifyOperationInProgress(),V(rn,"RemoteStore received new credentials");const r=cn(t);t.Ea.add(3),await Hr(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await hi(t)}async function HE(n,e){const t=B(n);e?(t.Ea.delete(2),await hi(t)):e||(t.Ea.add(2),await Hr(t),t.Ra.set("Unknown"))}function Un(n){return n.ma||(n.ma=(function(t,r,s){const o=B(t);return o.sa(),new bE(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Xo:LE.bind(null,n),t_:OE.bind(null,n),r_:ME.bind(null,n),H_:xE.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),fa(n)?da(n):n.Ra.set("Unknown")):(await n.ma.stop(),id(n))}))),n.ma}function Ut(n){return n.fa||(n.fa=(function(t,r,s){const o=B(t);return o.sa(),new PE(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:BE.bind(null,n),r_:$E.bind(null,n),ta:qE.bind(null,n),na:jE.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await di(n)):(await n.fa.stop(),n.Ta.length>0&&(V(rn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,t,r,s,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,o){const a=Date.now()+r,l=new ma(e,t,a,s,o);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pa(n,e){if(pt("AsyncQueue",`${e}: ${n}`),Fn(n))return new D(R.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{static emptySet(e){return new wn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||O.comparator(t.key,r.key):(t,r)=>O.comparator(t.key,r.key),this.keyedMap=lr(),this.sortedSet=new te(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof wn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new wn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(){this.ga=new te(O.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):F(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class kn{constructor(e,t,r,s,o,a,l,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,o){const a=[];return t.forEach((l=>{a.push({type:0,doc:l})})),new kn(e,t,wn.emptySet(t),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ii(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class WE{constructor(){this.queries=zl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=B(t),o=s.queries;s.queries=zl(),o.forEach(((a,l)=>{for(const u of l.Sa)u.onError(r)}))})(this,new D(R.ABORTED,"Firestore shutting down"))}}function zl(){return new on((n=>Ch(n)),ii)}async function ld(n,e){const t=B(n);let r=3;const s=e.query;let o=t.queries.get(s);o?!o.ba()&&e.Da()&&(r=2):(o=new zE,r=e.Da()?0:1);try{switch(r){case 0:o.wa=await t.onListen(s,!0);break;case 1:o.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=pa(a,`Initialization of query '${pn(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,o),o.Sa.push(e),e.va(t.onlineState),o.wa&&e.Fa(o.wa)&&ga(t)}async function ud(n,e){const t=B(n),r=e.query;let s=3;const o=t.queries.get(r);if(o){const a=o.Sa.indexOf(e);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?s=e.Da()?0:1:!o.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function GE(n,e){const t=B(n);let r=!1;for(const s of e){const o=s.query,a=t.queries.get(o);if(a){for(const l of a.Sa)l.Fa(s)&&(r=!0);a.wa=s}}r&&ga(t)}function KE(n,e,t){const r=B(n),s=r.queries.get(e);if(s)for(const o of s.Sa)o.onError(t);r.queries.delete(e)}function ga(n){n.Ca.forEach((e=>{e.next()}))}var Ro,Wl;(Wl=Ro||(Ro={})).Ma="default",Wl.Cache="cache";class hd{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new kn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=kn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ro.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e){this.key=e}}class fd{constructor(e){this.key=e}}class QE{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=z(),this.mutatedKeys=z(),this.eu=bh(e),this.tu=new wn(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new Hl,s=t?t.tu:this.tu;let o=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((m,g)=>{const E=s.get(m),C=oi(this.query,g)?g:null,P=!!E&&this.mutatedKeys.has(E.key),L=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let N=!1;E&&C?E.data.isEqual(C.data)?P!==L&&(r.track({type:3,doc:C}),N=!0):this.su(E,C)||(r.track({type:2,doc:C}),N=!0,(u&&this.eu(C,u)>0||d&&this.eu(C,d)<0)&&(l=!0)):!E&&C?(r.track({type:0,doc:C}),N=!0):E&&!C&&(r.track({type:1,doc:E}),N=!0,(u||d)&&(l=!0)),N&&(C?(a=a.add(C),o=L?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{tu:a,iu:r,Cs:l,mutatedKeys:o}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const o=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((m,g)=>(function(C,P){const L=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F(20277,{Rt:N})}};return L(C)-L(P)})(m.type,g.type)||this.eu(m.doc,g.doc))),this.ou(r),s=s??!1;const l=t&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,d=u!==this.Za;return this.Za=u,a.length!==0||d?{snapshot:new kn(this.query,e.tu,o,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Hl,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=z(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const t=[];return e.forEach((r=>{this.Xa.has(r)||t.push(new fd(r))})),this.Xa.forEach((r=>{e.has(r)||t.push(new dd(r))})),t}cu(e){this.Ya=e.Qs,this.Xa=z();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return kn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ya="SyncEngine";class JE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class YE{constructor(e){this.key=e,this.hu=!1}}class XE{constructor(e,t,r,s,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new on((l=>Ch(l)),ii),this.Iu=new Map,this.Eu=new Set,this.du=new te(O.comparator),this.Au=new Map,this.Ru=new oa,this.Vu={},this.mu=new Map,this.fu=Pn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function ZE(n,e,t=!0){const r=Ed(n);let s;const o=r.Tu.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await md(r,e,t,!0),s}async function eI(n,e){const t=Ed(n);await md(t,e,!0,!1)}async function md(n,e,t,r){const s=await IE(n.localStore,Je(e)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let l;return r&&(l=await tI(n,e,o,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&rd(n.remoteStore,s),l}async function tI(n,e,t,r,s){n.pu=(g,E,C)=>(async function(L,N,j,q){let W=N.view.ru(j);W.Cs&&(W=await Fl(L.localStore,N.query,!1).then((({documents:T})=>N.view.ru(T,W))));const de=q&&q.targetChanges.get(N.targetId),He=q&&q.targetMismatches.get(N.targetId)!=null,ye=N.view.applyChanges(W,L.isPrimaryClient,de,He);return Kl(L,N.targetId,ye.au),ye.snapshot})(n,g,E,C);const o=await Fl(n.localStore,e,!0),a=new QE(e,o.Qs),l=a.ru(o.documents),u=$r.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(l,n.isPrimaryClient,u);Kl(n,t,d.au);const m=new JE(e,t,a);return n.Tu.set(e,m),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function nI(n,e,t){const r=B(n),s=r.Tu.get(e),o=r.Iu.get(s.targetId);if(o.length>1)return r.Iu.set(s.targetId,o.filter((a=>!ii(a,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ao(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&ua(r.remoteStore,s.targetId),Co(r,s.targetId)})).catch(xn)):(Co(r,s.targetId),await Ao(r.localStore,s.targetId,!0))}async function rI(n,e){const t=B(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ua(t.remoteStore,r.targetId))}async function sI(n,e,t){const r=hI(n);try{const s=await(function(a,l){const u=B(a),d=ee.now(),m=l.reduce(((C,P)=>C.add(P.key)),z());let g,E;return u.persistence.runTransaction("Locally write mutations","readwrite",(C=>{let P=gt(),L=z();return u.Ns.getEntries(C,m).next((N=>{P=N,P.forEach(((j,q)=>{q.isValidDocument()||(L=L.add(j))}))})).next((()=>u.localDocuments.getOverlayedDocuments(C,P))).next((N=>{g=N;const j=[];for(const q of l){const W=I_(q,g.get(q.key).overlayedDocument);W!=null&&j.push(new an(q.key,W,Eh(W.value.mapValue),lt.exists(!0)))}return u.mutationQueue.addMutationBatch(C,d,j,l)})).next((N=>{E=N;const j=N.applyToLocalDocumentSet(g,L);return u.documentOverlayCache.saveOverlays(C,N.batchId,j)}))})).then((()=>({batchId:E.batchId,changes:kh(g)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,l,u){let d=a.Vu[a.currentUser.toKey()];d||(d=new te(H)),d=d.insert(l,u),a.Vu[a.currentUser.toKey()]=d})(r,s.batchId,t),await zr(r,s.changes),await di(r.remoteStore)}catch(s){const o=pa(s,"Failed to persist write");t.reject(o)}}async function pd(n,e){const t=B(n);try{const r=await yE(t.localStore,e);e.targetChanges.forEach(((s,o)=>{const a=t.Au.get(o);a&&(J(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?J(a.hu,14607):s.removedDocuments.size>0&&(J(a.hu,42227),a.hu=!1))})),await zr(t,r,e)}catch(r){await xn(r)}}function Gl(n,e,t){const r=B(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach(((o,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(a,l){const u=B(a);u.onlineState=l;let d=!1;u.queries.forEach(((m,g)=>{for(const E of g.Sa)E.va(l)&&(d=!0)})),d&&ga(u)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function iI(n,e,t){const r=B(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),o=s&&s.key;if(o){let a=new te(O.comparator);a=a.insert(o,we.newNoDocument(o,U.min()));const l=z().add(o),u=new li(U.min(),new Map,new te(H),a,l);await pd(r,u),r.du=r.du.remove(o),r.Au.delete(e),_a(r)}else await Ao(r.localStore,e,!1).then((()=>Co(r,e,t))).catch(xn)}async function oI(n,e){const t=B(n),r=e.batch.batchId;try{const s=await gE(t.localStore,e);yd(t,r,null),gd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await zr(t,s)}catch(s){await xn(s)}}async function aI(n,e,t){const r=B(n);try{const s=await(function(a,l){const u=B(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let m;return u.mutationQueue.lookupMutationBatch(d,l).next((g=>(J(g!==null,37113),m=g.keys(),u.mutationQueue.removeMutationBatch(d,g)))).next((()=>u.mutationQueue.performConsistencyCheck(d))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(d,m,l))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m))).next((()=>u.localDocuments.getDocuments(d,m)))}))})(r.localStore,e);yd(r,e,t),gd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await zr(r,s)}catch(s){await xn(s)}}function gd(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function yd(n,e,t){const r=B(n);let s=r.Vu[r.currentUser.toKey()];if(s){const o=s.get(e);o&&(t?o.reject(t):o.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Co(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((r=>{n.Ru.containsKey(r)||_d(n,r)}))}function _d(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(ua(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),_a(n))}function Kl(n,e,t){for(const r of t)r instanceof dd?(n.Ru.addReference(r.key,e),cI(n,r)):r instanceof fd?(V(ya,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||_d(n,r.key)):F(19791,{wu:r})}function cI(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(V(ya,"New document in limbo: "+t),n.Eu.add(r),_a(n))}function _a(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new O(X.fromString(e)),r=n.fu.next();n.Au.set(r,new YE(t)),n.du=n.du.insert(t,r),rd(n.remoteStore,new Ct(Je(si(t.path)),r,"TargetPurposeLimboResolution",ti.ce))}}async function zr(n,e,t){const r=B(n),s=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,u)=>{a.push(r.pu(u,e,t).then((d=>{if((d||t)&&r.isPrimaryClient){const m=d?!d.fromCache:t?.targetChanges.get(u.targetId)?.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){s.push(d);const m=ca.As(u.targetId,d);o.push(m)}})))})),await Promise.all(a),r.Pu.H_(s),await(async function(u,d){const m=B(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>b.forEach(d,(E=>b.forEach(E.Es,(C=>m.persistence.referenceDelegate.addReference(g,E.targetId,C))).next((()=>b.forEach(E.ds,(C=>m.persistence.referenceDelegate.removeReference(g,E.targetId,C)))))))))}catch(g){if(!Fn(g))throw g;V(la,"Failed to update sequence numbers: "+g)}for(const g of d){const E=g.targetId;if(!g.fromCache){const C=m.Ms.get(E),P=C.snapshotVersion,L=C.withLastLimboFreeSnapshotVersion(P);m.Ms=m.Ms.insert(E,L)}}})(r.localStore,o))}async function lI(n,e){const t=B(n);if(!t.currentUser.isEqual(e)){V(ya,"User change. New user:",e.toKey());const r=await Zh(t.localStore,e);t.currentUser=e,(function(o,a){o.mu.forEach((l=>{l.forEach((u=>{u.reject(new D(R.CANCELLED,a))}))})),o.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zr(t,r.Ls)}}function uI(n,e){const t=B(n),r=t.Au.get(e);if(r&&r.hu)return z().add(r.key);{let s=z();const o=t.Iu.get(e);if(!o)return s;for(const a of o){const l=t.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function Ed(n){const e=B(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=pd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=uI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iI.bind(null,e),e.Pu.H_=GE.bind(null,e.eventManager),e.Pu.yu=KE.bind(null,e.eventManager),e}function hI(n){const e=B(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=oI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=aI.bind(null,e),e}class zs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ui(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return pE(this.persistence,new dE,e.initialUser,this.serializer)}Cu(e){return new Xh(aa.mi,this.serializer)}Du(e){return new TE}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}zs.provider={build:()=>new zs};class dI extends zs{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){J(this.persistence.referenceDelegate instanceof $s,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Y_(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?ke.withCacheSize(this.cacheSizeBytes):ke.DEFAULT;return new Xh((r=>$s.mi(r,t)),this.serializer)}}class bo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Gl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=lI.bind(null,this.syncEngine),await HE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new WE})()}createDatastore(e){const t=ui(e.databaseInfo.databaseId),r=(function(o){return new CE(o)})(e.databaseInfo);return(function(o,a,l,u){return new NE(o,a,l,u)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,o,a,l){return new VE(r,s,o,a,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>Gl(this.syncEngine,t,0)),(function(){return ql.v()?new ql:new wE})())}createSyncEngine(e,t){return(function(s,o,a,l,u,d,m){const g=new XE(s,o,a,l,u,d);return m&&(g.gu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const r=B(t);V(rn,"RemoteStore shutting down."),r.Ea.add(5),await Hr(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}bo.provider={build:()=>new bo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):pt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt="FirestoreClient";class fI{constructor(e,t,r,s,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Pe.UNAUTHENTICATED,this.clientId=Jo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async a=>{V(Bt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(V(Bt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=pa(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Ji(n,e){n.asyncQueue.verifyOperationInProgress(),V(Bt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Zh(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Ql(n,e){n.asyncQueue.verifyOperationInProgress();const t=await mI(n);V(Bt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>$l(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>$l(e.remoteStore,s))),n._onlineComponents=e}async function mI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(Bt,"Using user provided OfflineComponentProvider");try{await Ji(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===R.FAILED_PRECONDITION||s.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Ar("Error using user provided cache. Falling back to memory cache: "+t),await Ji(n,new zs)}}else V(Bt,"Using default OfflineComponentProvider"),await Ji(n,new dI(void 0));return n._offlineComponents}async function vd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(Bt,"Using user provided OnlineComponentProvider"),await Ql(n,n._uninitializedComponentsProvider._online)):(V(Bt,"Using default OnlineComponentProvider"),await Ql(n,new bo))),n._onlineComponents}function pI(n){return vd(n).then((e=>e.syncEngine))}async function Po(n){const e=await vd(n),t=e.eventManager;return t.onListen=ZE.bind(null,e.syncEngine),t.onUnlisten=nI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=eI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=rI.bind(null,e.syncEngine),t}function gI(n,e,t={}){const r=new Vt;return n.asyncQueue.enqueueAndForget((async()=>(function(o,a,l,u,d){const m=new Id({next:E=>{m.Nu(),a.enqueueAndForget((()=>ud(o,g)));const C=E.docs.has(l);!C&&E.fromCache?d.reject(new D(R.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&E.fromCache&&u&&u.source==="server"?d.reject(new D(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(E)},error:E=>d.reject(E)}),g=new hd(si(l.path),m,{includeMetadataChanges:!0,qa:!0});return ld(o,g)})(await Po(n),n.asyncQueue,e,t,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI="firestore.googleapis.com",Yl=!0;class Xl{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new D(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=yI,this.ssl=Yl}else this.host=e.host,this.ssl=e.ssl??Yl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Jh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Yh)throw new D(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Vy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Td(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new D(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new D(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new D(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ea{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new D(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Ay;switch(r.type){case"firstParty":return new Cy(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Jl.get(t);r&&(V("ComponentProvider","Removing Datastore"),Jl.delete(t),r.terminate())})(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Bn(this.firestore,e,this._query)}}class se{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new se(this.firestore,e,this._key)}toJSON(){return{type:se._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Br(t,se._jsonSchema))return new se(e,r||null,new O(X.fromString(t.referencePath)))}}se._jsonSchemaVersion="firestore/documentReference/1.0",se._jsonSchema={type:ce("string",se._jsonSchemaVersion),referencePath:ce("string")};class Lt extends Bn{constructor(e,t,r){super(e,t,si(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new se(this.firestore,null,new O(e))}withConverter(e){return new Lt(this.firestore,e,this._path)}}function Yi(n,e,...t){if(n=be(n),ch("collection","path",e),n instanceof Ea){const r=X.fromString(e,...t);return hl(r),new Lt(n,null,r)}{if(!(n instanceof se||n instanceof Lt))throw new D(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(e,...t));return hl(r),new Lt(n.firestore,null,r)}}function Dr(n,e,...t){if(n=be(n),arguments.length===1&&(e=Jo.newId()),ch("doc","path",e),n instanceof Ea){const r=X.fromString(e,...t);return ul(r),new se(n,null,new O(r))}{if(!(n instanceof se||n instanceof Lt))throw new D(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(e,...t));return ul(r),new se(n.firestore,n instanceof Lt?n.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl="AsyncQueue";class eu{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new td(this,"async_queue_retry"),this._c=()=>{const r=Qi();r&&V(Zl,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Qi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Qi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Vt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Fn(e))throw e;V(Zl,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,pt("INTERNAL UNHANDLED ERROR: ",tu(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=ma.createAndSchedule(this,e,t,r,(o=>this.hc(o)));return this.tc.push(s),s}uc(){this.nc&&F(47125,{Pc:tu(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function tu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1})(n,["next","error","complete"])}class Vr extends Ea{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new eu,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new eu(e),this._firestoreClient=void 0,await e}}}function _I(n,e,t){t||(t=xs);const r=Bo(n,"firestore");if(r.isInitialized(t)){const s=r.getImmediate({identifier:t}),o=r.getOptions(t);if(Zt(o,e))return s;throw new D(R.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new D(R.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Yh)throw new D(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&Vn(e.host)&&mu(e.host),r.initialize({options:e,instanceIdentifier:t})}function Ia(n){if(n._terminated)throw new D(R.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||EI(n),n._firestoreClient}function EI(n){const e=n._freezeSettings(),t=(function(s,o,a,l){return new Hy(s,o,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Td(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new fI(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(s){const o=s?._online.build();return{_offline:s?._offline.build(o),_online:o}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Me(ge.fromBase64String(e))}catch(t){throw new D(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Me(ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Me._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Br(e,Me._jsonSchema))return Me.fromBase64String(e.bytes)}}Me._jsonSchemaVersion="firestore/bytes/1.0",Me._jsonSchema={type:ce("string",Me._jsonSchemaVersion),bytes:ce("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new D(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new D(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new D(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Xe._jsonSchemaVersion}}static fromJSON(e){if(Br(e,Xe._jsonSchema))return new Xe(e.latitude,e.longitude)}}Xe._jsonSchemaVersion="firestore/geoPoint/1.0",Xe._jsonSchema={type:ce("string",Xe._jsonSchemaVersion),latitude:ce("number"),longitude:ce("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ze._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Br(e,Ze._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Ze(e.vectorValues);throw new D(R.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ze._jsonSchemaVersion="firestore/vectorValue/1.0",Ze._jsonSchema={type:ce("string",Ze._jsonSchemaVersion),vectorValues:ce("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=/^__.*__$/;class vI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new an(e,this.data,this.fieldMask,t,this.fieldTransforms):new jr(e,this.data,t,this.fieldTransforms)}}function wd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{Ac:n})}}class wa{constructor(e,t,r,s,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new wa({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ws(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(wd(this.Ac)&&II.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class TI{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ui(e)}Cc(e,t,r,s=!1){return new wa({Ac:e,methodName:t,Dc:r,path:pe.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ad(n){const e=n._freezeSettings(),t=ui(n._databaseId);return new TI(n._databaseId,!!e.ignoreUndefinedProperties,t)}function wI(n,e,t,r,s,o={}){const a=n.Cc(o.merge||o.mergeFields?2:0,e,t,s);Cd("Data must be an object, but it was:",a,r);const l=Sd(r,a);let u,d;if(o.merge)u=new qe(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const g of o.mergeFields){const E=SI(e,g,t);if(!a.contains(E))throw new D(R.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);CI(m,E)||m.push(E)}u=new qe(m),d=a.fieldTransforms.filter((g=>u.covers(g.field)))}else u=null,d=a.fieldTransforms;return new vI(new Oe(l),u,d)}class Aa extends Ta{_toFieldTransform(e){return new g_(e.path,new Pr)}isEqual(e){return e instanceof Aa}}function AI(n,e,t,r=!1){return Sa(t,n.Cc(r?4:3,e))}function Sa(n,e){if(Rd(n=be(n)))return Cd("Unsupported field value:",e,n),Sd(n,e);if(n instanceof Ta)return(function(r,s){if(!wd(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const o=[];let a=0;for(const l of r){let u=Sa(l,s.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),a++}return{arrayValue:{values:o}}})(n,e)}return(function(r,s){if((r=be(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return f_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ee.fromDate(r);return{timestampValue:js(s.serializer,o)}}if(r instanceof ee){const o=new ee(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:js(s.serializer,o)}}if(r instanceof Xe)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Me)return{bytesValue:$h(s.serializer,r._byteString)};if(r instanceof se){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ia(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ze)return(function(a,l){return{mapValue:{fields:{[yh]:{stringValue:_h},[Fs]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw l.Sc("VectorValues must only contain numeric values.");return na(l.serializer,d)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${ei(r)}`)})(n,e)}function Sd(n,e){const t={};return hh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):sn(n,((r,s)=>{const o=Sa(s,e.mc(r));o!=null&&(t[r]=o)})),{mapValue:{fields:t}}}function Rd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ee||n instanceof Xe||n instanceof Me||n instanceof se||n instanceof Ta||n instanceof Ze)}function Cd(n,e,t){if(!Rd(t)||!lh(t)){const r=ei(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function SI(n,e,t){if((e=be(e))instanceof va)return e._internalPath;if(typeof e=="string")return bd(n,e);throw Ws("Field path arguments must be of type string or ",n,!1,void 0,t)}const RI=new RegExp("[~\\*/\\[\\]]");function bd(n,e,t){if(e.search(RI)>=0)throw Ws(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new va(...e.split("."))._internalPath}catch{throw Ws(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ws(n,e,t,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(o||a)&&(u+=" (found",o&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new D(R.INVALID_ARGUMENT,l+n+u)}function CI(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,t,r,s,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new se(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ra("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class bI extends Pd{data(){return super.data()}}function Ra(n,e){return typeof e=="string"?bd(n,e):e instanceof va?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new D(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ca{}class kI extends Ca{}function Xi(n,e,...t){let r=[];e instanceof Ca&&r.push(e),r=r.concat(t),(function(o){const a=o.filter((u=>u instanceof ba)).length,l=o.filter((u=>u instanceof fi)).length;if(a>1||a>0&&l>0)throw new D(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class fi extends kI{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new fi(e,t,r)}_apply(e){const t=this._parse(e);return kd(e._query,t),new Bn(e.firestore,e.converter,_o(e._query,t))}_parse(e){const t=Ad(e.firestore);return(function(o,a,l,u,d,m,g){let E;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new D(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){su(g,m);const P=[];for(const L of g)P.push(ru(u,o,L));E={arrayValue:{values:P}}}else E=ru(u,o,g)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||su(g,m),E=AI(l,a,g,m==="in"||m==="not-in");return ae.create(d,m,E)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Zi(n,e,t){const r=e,s=Ra("where",n);return fi._create(s,r,t)}class ba extends Ca{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ba(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:$e.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,o){let a=s;const l=o.getFlattenedFilters();for(const u of l)kd(a,u),a=_o(a,u)})(e._query,t),new Bn(e.firestore,e.converter,_o(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ru(n,e,t){if(typeof(t=be(t))=="string"){if(t==="")throw new D(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Rh(e)&&t.indexOf("/")!==-1)throw new D(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(X.fromString(t));if(!O.isDocumentKey(r))throw new D(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return El(n,new O(r))}if(t instanceof se)return El(n,t._key);throw new D(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ei(t)}.`)}function su(n,e){if(!Array.isArray(n)||n.length===0)throw new D(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function kd(n,e){const t=(function(s,o){for(const a of s)for(const l of a.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new D(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class NI{convertValue(e,t="none"){switch(Ft(e)){case 0:return null;case 1:return e.booleanValue;case 2:return re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(xt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw F(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return sn(e,((s,o)=>{r[s]=this.convertValue(o,t)})),r}convertVectorValue(e){const t=e.fields?.[Fs].arrayValue?.values?.map((r=>re(r.doubleValue)));return new Ze(t)}convertGeoPoint(e){return new Xe(re(e.latitude),re(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ri(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Rr(e));default:return null}}convertTimestamp(e){const t=Mt(e);return new ee(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=X.fromString(e);J(Qh(r),9688,{name:e});const s=new Cr(r.get(1),r.get(3)),o=new O(r.popFirst(5));return s.isEqual(t)||pt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class hr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xt extends Pd{constructor(e,t,r,s,o,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Cs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ra("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(R.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Xt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Xt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Xt._jsonSchema={type:ce("string",Xt._jsonSchemaVersion),bundleSource:ce("string","DocumentSnapshot"),bundleName:ce("string"),bundle:ce("string")};class Cs extends Xt{data(e={}){return super.data(e)}}class An{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new hr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Cs(this._firestore,this._userDataWriter,r.key,r,new hr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new D(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((l=>{const u=new Cs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new hr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>o||l.type!==3)).map((l=>{const u=new Cs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new hr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:VI(l.type),doc:u,oldIndex:d,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(R.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=An._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Jo.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((o=>{o._document!==null&&(t.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function VI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(n){n=Yt(n,se);const e=Yt(n.firestore,Vr);return gI(Ia(e),n._key).then((t=>Vd(e,n,t)))}An._jsonSchemaVersion="firestore/querySnapshot/1.0",An._jsonSchema={type:ce("string",An._jsonSchemaVersion),bundleSource:ce("string","QuerySnapshot"),bundleName:ce("string"),bundle:ce("string")};class Dd extends NI{constructor(e){super(),this.firestore=e}convertBytes(e){return new Me(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new se(this.firestore,null,t)}}function ko(n,e,t){n=Yt(n,se);const r=Yt(n.firestore,Vr),s=DI(n.converter,e);return LI(r,[wI(Ad(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,lt.none())])}function eo(n,...e){n=be(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||nu(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(nu(e[r])){const u=e[r];e[r]=u.next?.bind(u),e[r+1]=u.error?.bind(u),e[r+2]=u.complete?.bind(u)}let o,a,l;if(n instanceof se)a=Yt(n.firestore,Vr),l=si(n._key.path),o={next:u=>{e[r]&&e[r](Vd(a,n,u))},error:e[r+1],complete:e[r+2]};else{const u=Yt(n,Bn);a=Yt(u.firestore,Vr),l=u._query;const d=new Dd(a);o={next:m=>{e[r]&&e[r](new An(a,d,u,m))},error:e[r+1],complete:e[r+2]},PI(n._query)}return(function(d,m,g,E){const C=new Id(E),P=new hd(m,C,g);return d.asyncQueue.enqueueAndForget((async()=>ld(await Po(d),P))),()=>{C.Nu(),d.asyncQueue.enqueueAndForget((async()=>ud(await Po(d),P)))}})(Ia(a),l,s,o)}function LI(n,e){return(function(r,s){const o=new Vt;return r.asyncQueue.enqueueAndForget((async()=>sI(await pI(r),s,o))),o.promise})(Ia(n),e)}function Vd(n,e,t){const r=t.docs.get(e._key),s=new Dd(n);return new Xt(n,s,e._key,r,new hr(t.hasPendingWrites,t.fromCache),e.converter)}function No(){return new Aa("serverTimestamp")}(function(e,t=!0){(function(s){Mn=s})(Ln),Sn(new en("firestore",((r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new Vr(new Sy(r.getProvider("auth-internal")),new by(a,r.getProvider("app-check-internal")),(function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new D(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Cr(d.options.projectId,m)})(a,s),a);return o={useFetchStreams:t,...o},l._setSettings(o),l}),"PUBLIC").setMultipleInstances(!0)),Nt(ol,al,e),Nt(ol,al,"esm2020")})();const OI={apiKey:"AIzaSyAbZHWwmFasHxYJ7_qkqUhq12lCaEGxOW0",authDomain:"chorestarschild-app.firebaseapp.com",projectId:"chorestarschild-app",storageBucket:"chorestarschild-app.firebasestorage.app",messagingSenderId:"135065292680",appId:"1:135065292680:web:82a8017b2acfd50966f43d"},Ld=yu(OI),Wr=vy(Ld),ut=_I(Ld,{experimentalForceLongPolling:!0,cache:"persistent"}),MI="1.0.01";console.log("✅ Firebase Auth:",Wr);console.log("✅ Firestore DB:",ut);async function dr(n){const e=await Nd(Dr(ut,"users",n.uid));if(!e.exists())return console.warn("Perfil no encontrado, reintentando en 500ms…"),await new Promise(a=>setTimeout(a,500)),dr(n);const{displayName:t,role:r,familyCode:s}=e.data();localStorage.setItem("displayName",t),localStorage.setItem("userRole",r),localStorage.setItem("familyCode",s);const o=document.getElementById("family-code-display");o&&(o.textContent=s),HI(s),UI()}function xI(){return Math.random().toString(36).substring(2,7).toUpperCase()}function iu(n){const e=document.getElementById("auth-error");e&&(e.textContent=n)}function FI(){document.getElementById("initial-screen").style.display="",document.getElementById("welcome-screen").style.display="none",document.getElementById("app-root").style.display="none"}function UI(){document.getElementById("initial-screen").style.display="none",document.getElementById("welcome-screen").style.display="",document.getElementById("app-root").style.display="none"}function Od(){document.getElementById("initial-screen").style.display="none",document.getElementById("welcome-screen").style.display="none",document.getElementById("app-root").style.display=""}function BI(n){const e=document.getElementById("auth-section"),t=document.getElementById("child-join-section");n?n.isAnonymous?(e&&(e.style.display="none"),t&&(t.style.display="")):(e&&(e.style.display="none"),t&&(t.style.display="none")):(e&&(e.style.display=""),t&&(t.style.display=""))}async function qI(n,e){const{user:t}=await og(Wr,n,e),r=xI();return await ko(Dr(ut,"families",r),{parentUid:t.uid,createdAt:No(),familyCode:r,locale:localStorage.getItem("lang")||"es"}),await ko(Dr(ut,"users",t.uid),{displayName:n.split("@")[0],role:"parent",familyCode:r,joinedAt:No()}),t}async function jI(n,e){const{user:t}=await ag(Wr,n,e);return t}async function $I(n,e){const{user:t}=await ng(Wr);if(!(await Nd(Dr(ut,"families",n))).exists())throw new Error(M[localStorage.getItem("lang")].invalidFamilyCodeMsg);return await ko(Dr(ut,"users",t.uid),{displayName:e,role:"child",familyCode:n,joinedAt:No()}),t}function HI(n){eo(Xi(Yi(ut,"users"),Zi("familyCode","==",n)),e=>{e.docs.map(t=>({id:t.id,...t.data()})),typeof ht=="function"&&ht()}),eo(Xi(Yi(ut,"tasks"),Zi("familyCode","==",n)),e=>{e.docs.map(t=>({id:t.id,...t.data()})),typeof Ne=="function"&&Ne(),typeof De=="function"&&De()}),eo(Xi(Yi(ut,"rewards"),Zi("familyCode","==",n)),e=>{e.docs.map(t=>({id:t.id,...t.data()})),typeof We=="function"&&We()})}function zI(){typeof bt=="function"&&bt(),typeof oe=="function"&&oe(),typeof xe=="function"&&xe()}document.addEventListener("DOMContentLoaded",()=>{document.getElementById("btn-signup")?.addEventListener("click",async()=>{const n=document.getElementById("auth-email").value.trim(),e=document.getElementById("auth-pass").value;try{const t=await qI(n,e);await dr(t)}catch(t){iu(t.message)}}),document.getElementById("btn-login")?.addEventListener("click",async()=>{const n=document.getElementById("auth-email").value.trim(),e=document.getElementById("auth-pass").value;try{const t=await jI(n,e);await dr(t)}catch(t){iu(t.message)}}),document.getElementById("btn-join-family")?.addEventListener("click",async()=>{const n=document.getElementById("join-family-code").value.trim(),e=document.getElementById("join-child-name").value.trim(),t=document.getElementById("join-error");if(t&&(t.textContent=""),!n||!e){t&&(t.textContent=M[localStorage.getItem("lang")].eventMissingFields);return}try{const r=await $I(n,e);await dr(r),alert(M[localStorage.getItem("lang")].childJoinSuccessMsg.replace("{name}",e))}catch(r){t&&(t.textContent=r.message)}}),document.querySelectorAll("#welcome-lang-buttons button").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll("#welcome-lang-buttons button").forEach(e=>e.classList.remove("active")),n.classList.add("active")})}),document.querySelectorAll("#welcome-role-buttons button").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll("#welcome-role-buttons button").forEach(e=>e.classList.remove("active")),n.classList.add("active")})}),document.getElementById("welcome-start")?.addEventListener("click",()=>{const n=document.querySelector("#welcome-lang-buttons button.active"),e=document.querySelector("#welcome-role-buttons button.active"),t=n?.dataset.value||"es",r=e?.dataset.value||"child";localStorage.setItem("lang",t),localStorage.setItem("userRole",r),bs(t),Od(),zI()}),ug(Wr,async n=>{n?await dr(n):(FI(),BI(n))})});const M={es:{appTitle:"Chore Stars Child",panelSubtitle:"Panel de tareas, deberes y recompensas para",earnedLabel:"Ganadas",lostLabel:"Perdidas",redeemedLabel:"Canjeadas",totalLabel:"Totales",tabTasks:"Tareas",tabRewards:"Recompensas",tabSettings:"Configuración",assignedTasks:"Tareas asignadas",dailyCutoffLabel:"Hora límite diaria",todayLabel:"Hoy es:",cutoffIntro:"Completa antes de",fromLabel:"Desde:",toLabel:"Hasta:",currentWeekLabel:"Semana en curso",weeklyHistoryLabel:"Historial de semanas anteriores",noHistory:"No hay semanas cerradas aún.",badgesLabel:"🏅 Insignias desbloqueadas esta semana",parentsIntro:"Espacio para uso exclusivo de los padres",childManagementLabel:"Gestión de niños",addChildBtn:"Añadir niño",childNamePlaceholder:"Nombre del niño",cutoffTimeLabel:"Hora límite diaria para completar las tareas",saveCutoffBtn:"Guardar hora",pinLabel:"PIN de acceso al panel de configuración",pinPlaceholder:"Ej: 1234",savePinBtn:"Guardar PIN",pinSavedMsg:"PIN guardado correctamente.",taskManagementLabel:"Gestión de tareas",taskNamePlaceholder:"Nombre de la tarea",taskPointsPlaceholder:"Puntos",addTaskBtn:"Añadir tarea",rewardManagementLabel:"Gestión de recompensas",rewardNamePlaceholder:"Nombre de la recompensa",rewardCostPlaceholder:"Costo",addRewardBtn:"Añadir recompensa",closeWeekLabel:"Cerrar semana y guardar historial",closeWeekBtn:"Cerrar semana",closedWeeksLabel:"Historial de semanas cerradas",installUpdatesLabel:"Recarga la versión más reciente de la app",installUpdatesBtn:"Instalar actualizaciones",resetAppLabel:"Reiniciar la app al estado inicial",resetAppBtn:"Reiniciar aplicación",languageLabel:"Idioma:",welcomeTitle:"Bienvenido a Chore Stars Child",welcomeDesc:"Organiza tareas y recompensas para tus hijos de forma divertida y segura.",startButton:"Comenzar",errorNoCutoffField:"Error: no encontré el campo de hora límite.",invalidTimeMsg:"Por favor ingresa una hora válida.",cutoffSaved:"Hora límite guardada: {time}",constantEffort:"Esfuerzo constante",rewardExplorer:"Explorador recompensas",totalDiscipline:"Disciplina total",footerText:"Chore Stars Child - Todos los derechos reservados - 2025 – Versión {version}",invalidChildName:"Ingresa un nombre válido",confirmDeleteChild:'¿Eliminar a "{name}"?',createTaskInstructions:"Para crear tareas: 1. Ingresa nombre del niño y guárdalo, 2. Selecciona un niño o si es solo uno se seleccionará por defecto, 3. Puedes agregar tareas a cada niño seleccionado de manera independiente.",promptNewTaskName:"Nuevo nombre de la tarea:",promptNewTaskPoints:"Nuevos puntos:",invalidRewardNameCost:"Completa nombre y costo válido",promptNewRewardName:"Nuevo nombre de la recompensa:",promptNewRewardCost:"Nuevo coste en puntos:",invalidPinMsg:"Por favor ingresa un PIN válido",pinSavedMsg:"PIN guardado correctamente.",noActivityMsg:"No hay actividad registrada esta semana.",confirmCloseWeek:"¿Cerrar semana y guardar historial?",weekClosedMsg:"Semana cerrada y guardada",confirmResetApp:"⚠️ Esto borrará TODOS los datos y recargará la app. ¿Continuar?",resetSuccessMsg:"✅ Aplicación reiniciada. Comenzando de cero…",swNotRegistered:"No hay SW registrado.",searchingUpdates:"Buscando actualizaciones…",selectChildBtn:"Seleccionar",deleteChildBtn:"Eliminar",pointsSuffix:"pts",markDoneBtn:"Hecho",markedDoneBtn:"✅ Hecho",deleteRewardBtn:"Eliminar",penaltyAppliedMsg:"⚠️ Penalización aplicada",shareTitle:"Recompensa canjeada",shareTextTemplate:'¡{child} acaba de canjear "{reward}" en Chore Stars! 🎉',clipboardCopiedMsg:"Texto copiado al portapapeles",redeemedByLabel:"Canjeada por {name}",shareBtnLabel:"Compartir",redeemBtnLabel:"Canjear",unknownChild:"alguien",notEnoughPoints:'⚠️ No tienes suficientes puntos para "{reward}"',deleteTaskBtn:"Eliminar",frequencyLabel:"Frecuencia:",frequencyDaily:"Diaria",frequencyWeekly:"Semanal",penDailyMsg:"⚠️ Penalización diaria aplicada",penWeeklyMsg:"⚠️ Penalización semanal aplicada",rewardStockLabel:"Stock",rewardStockPlaceholder:"Stock",outOfStockMsg:"⚠️ Sin stock para esta recompensa",levelNovice:"Novato",levelApprentice:"Aprendiz",levelExpert:"Experto",levelMaster:"Maestro",levelLegend:"Leyenda",levelLabel:"Nivel: {level}",nextLevelIn:"Faltan {points} pts para {nextLevel}",levelUpMsg:"¡Felicidades! Has subido al nivel {level}",childAgePlaceholder:"Edad",invalidChildNameOrAge:"Por favor ingresa un nombre y edad válidos.",parentOnlyActionT:"Solo los padres pueden agregar tareas sugeridas.",parentOnlyAction:"Solo los niños pueden canjear las recompensas disponibles.",roleSelectionLabel:"Seleccionar rol:",parentRole:"Padre",childRole:"Niño",langEs:"Español",langEn:"English",suggestedTasksLabel:"Tareas sugeridas",toggleRoleBtn:"Cambiar rol",roleChangedMsg:"Has seleccionado el rol “{role}”",pinCreatePrompt:"🔐 Crea un PIN para proteger la configuración:",pinCreatedMsg:"✅ PIN guardado correctamente.",afterCutoffBlockMsg:"❌ No puedes crear tareas después de la hora límite.",pinPrompt:"🔐 Ingresa PIN:",pinIncorrectMsg:"❌ PIN incorrecto",parentRoleLabel:"Padre",invalidFamilyCodeMsg:"❌ Código familiar no válido.",childJoinSuccessMsg:"✅ ¡Bienvenido, {name}!",eventMissingFields:"❌ Completa todos los campos."},en:{appTitle:"Chore Stars Child",panelSubtitle:"Task, duty and reward panel for",earnedLabel:"Earned",lostLabel:"Lost",redeemedLabel:"Redeemed",totalLabel:"Total",tabTasks:"Tasks",tabRewards:"Rewards",tabSettings:"Settings",assignedTasks:"Assigned Tasks",dailyCutoffLabel:"Daily cutoff time",todayLabel:"Today is:",cutoffIntro:"Complete before",fromLabel:"From:",toLabel:"To:",currentWeekLabel:"Current week",weeklyHistoryLabel:"Previous weeks history",noHistory:"No history yet.",badgesLabel:"🏅 Badges unlocked this week",parentsIntro:"Parents only area",childManagementLabel:"Child management",addChildBtn:"Add child",childNamePlaceholder:"Child name",cutoffTimeLabel:"Daily cutoff to complete tasks",saveCutoffBtn:"Save time",pinLabel:"Access PIN for settings",pinPlaceholder:"Ex: 1234",savePinBtn:"Save PIN",pinSavedMsg:"PIN saved successfully.",taskManagementLabel:"Task management",taskNamePlaceholder:"Task name",taskPointsPlaceholder:"Points",addTaskBtn:"Add task",rewardManagementLabel:"Reward management",rewardNamePlaceholder:"Reward name",rewardCostPlaceholder:"Cost",addRewardBtn:"Add reward",closeWeekLabel:"Close week and save history",closeWeekBtn:"Close week",closedWeeksLabel:"Closed weeks history",installUpdatesLabel:"Reload latest version of the app",installUpdatesBtn:"Install updates",resetAppLabel:"Reset app to initial state",resetAppBtn:"Reset app",languageLabel:"Language:",welcomeTitle:"Welcome to Chore Stars Child",welcomeDesc:"Organize tasks and rewards for your children in a fun and safe way.",startButton:"Start",errorNoCutoffField:"Error: cutoff time field not found.",invalidTimeMsg:"Please enter a valid time.",cutoffSaved:"Cutoff time saved: {time}",constantEffort:"Consistent effort",rewardExplorer:"Reward explorer",totalDiscipline:"Total discipline",footerText:"Chore Stars Child - All rights reserved - 2025 – Version {version}",invalidChildName:"Enter a valid name",confirmDeleteChild:'Delete "{name}"?',createTaskInstructions:"To create tasks: 1. Enter and save the child’s name, 2. Select a child or it will default if there’s only one, 3. You can add tasks for each selected child independently.",promptNewTaskName:"New task name:",promptNewTaskPoints:"New points:",invalidRewardNameCost:"Enter a valid name and cost",promptNewRewardName:"New reward name:",promptNewRewardCost:"New cost in points:",invalidPinMsg:"Please enter a valid PIN",pinSavedMsg:"PIN saved successfully.",noActivityMsg:"No activity recorded this week.",confirmCloseWeek:"Close week and save history?",weekClosedMsg:"Week closed and saved",confirmResetApp:"⚠️ This will erase ALL data and reload the app. Continue?",resetSuccessMsg:"✅ App reset. Starting from scratch…",swNotRegistered:"No SW registered.",searchingUpdates:"Searching for updates…",selectChildBtn:"Select",deleteChildBtn:"Delete",pointsSuffix:"pts",markDoneBtn:"Done",markedDoneBtn:"✅ Done",deleteRewardBtn:"Delete",penaltyAppliedMsg:"⚠️ Penalty applied",shareTitle:"Reward redeemed",shareTextTemplate:'{child} just redeemed "{reward}" in Chore Stars! 🎉',clipboardCopiedMsg:"Text copied to clipboard",redeemedByLabel:"Redeemed by {name}",shareBtnLabel:"Share",redeemBtnLabel:"Redeem",unknownChild:"someone",notEnoughPoints:'⚠️ You don’t have enough points for "{reward}"',deleteTaskBtn:"Delete",frequencyLabel:"Frequency:",frequencyDaily:"Daily",frequencyWeekly:"Weekly",penDailyMsg:"⚠️ Daily penalty applied",penWeeklyMsg:"⚠️ Weekly penalty applied",rewardStockLabel:"Stock",rewardStockPlaceholder:"Stock",outOfStockMsg:"⚠️ Out of stock",levelNovice:"Novice",levelApprentice:"Apprentice",levelExpert:"Expert",levelMaster:"Master",levelLegend:"Legend",levelLabel:"Level: {level}",nextLevelIn:"{points} pts to {nextLevel}",levelUpMsg:"Congrats! You've reached level {level}",childAgePlaceholder:"Age",invalidChildNameOrAge:"Please enter a valid name and age",parentOnlyActionT:"Only parents can add suggested tasks",parentOnlyAction:"Only children redeem the available rewards",roleSelectionLabel:"Select role:",parentRole:"Parent",childRole:"Child",langEs:"Español",langEn:"English",suggestedTasksLabel:"Suggested tasks",toggleRoleBtn:"Switch role",roleChangedMsg:"You have selected the “{role}” role",pinCreatePrompt:"🔐 Create a PIN to protect settings:",pinCreatedMsg:"✅ PIN saved successfully.",afterCutoffBlockMsg:"❌ You can't create tasks after the cutoff time.",pinPrompt:"🔐 Enter PIN:",pinIncorrectMsg:"❌ Incorrect PIN",parentRoleLabel:"Parent",invalidFamilyCodeMsg:"❌ Invalid family code.",childJoinSuccessMsg:"✅ Welcome, {name}!",eventMissingFields:"❌ Fill in all fields."}};function bs(n){document.querySelectorAll("[data-i18n]").forEach(e=>{const t=e.dataset.i18n,r=M[n]?.[t];r&&(e.textContent=r)}),document.querySelectorAll("[data-i18n-placeholder]").forEach(e=>{const t=e.dataset.i18nPlaceholder,r=M[n]?.[t];r&&(e.placeholder=r)})}function ou(){const n=localStorage.getItem("lang")||"es",e=M[n]?.footerText;if(!e)return;const t=e.replace("{version}",MI);document.getElementById("app-footer").textContent=t}function WI(){return new Date().toISOString().split("T")[0]}function GI(){return Ks(new Date).toISOString().split("T")[0]}function KI(){const n=localStorage.getItem("lang")||"es",e=M[n],t=WI(),r=localStorage.getItem("lastDailyPenalty"),s=localStorage.getItem("cutoffTime")||"21:00",[o,a]=s.split(":").map(Number),l=new Date;if(l.setHours(o,a,0,0),new Date<=l||r===t)return;let u=!1;he.forEach(d=>{if(d.frequency==="daily"&&!d.done&&!d.penalized){const m=tt(d.childId);m.lost+=d.points*2,d.penalized=!0,u=!0}}),u&&(ln(),Ue(),oe(),Nn(e.penDailyMsg)),localStorage.setItem("lastDailyPenalty",t)}function QI(){const n=localStorage.getItem("lang")||"es",e=M[n],t=GI(),r=localStorage.getItem("lastWeeklyPenalty"),s=localStorage.getItem("cutoffTime")||"21:00",[o,a]=s.split(":").map(Number),l=new Date(Ks(new Date));if(l.setDate(l.getDate()+6),l.setHours(o,a,0,0),new Date<=l||r===t)return;let u=!1;he.forEach(d=>{if(d.frequency==="weekly"&&!d.done&&!d.penalized){const m=tt(d.childId);m.lost+=d.points*3,d.penalized=!0,u=!0}}),u&&(ln(),Ue(),oe(),Nn(e.penWeeklyMsg)),localStorage.setItem("lastWeeklyPenalty",t)}const _n=JSON.parse(localStorage.getItem("customTaskLog"))||{};function JI(n){const e=K;_n[e]||(_n[e]=[]),_n[e].includes(n)||(_n[e].push(n),localStorage.setItem("customTaskLog",JSON.stringify(_n)))}const YI=[{name:"Revisar bolso y verificar el horario de clases del día siguiente",dayOfWeek:0},{name:"Empacar lonchera",dayOfWeek:1},{name:"Tender la cama",minAge:5},{name:"Ayudar a servir el desayuno",minAge:6},{name:"Regar las matas",weekdays:[2,5]},{name:"Sacar la basura",minAge:7},{name:"Limpiar los zapatos del colegio",dayOfWeek:6},{name:"Organizar los útiles escolares",dayOfWeek:0},{name:"Leer 10 páginas de un libro",minAge:7},{name:"Practicar tablas de multiplicar",minAge:8},{name:"Repasar inglés con Duolingo",minAge:9},{name:"Ayudar a lavar la loza",minAge:6},{name:"Barrer el patio o balcón",minAge:7},{name:"Limpiar el espejo del baño",minAge:6},{name:"Doblar la ropa limpia",minAge:8},{name:"Organizar el clóset",minAge:9},{name:"Ayudar a cuidar al hermanito",minAge:10},{name:"Llamar a los abuelos por videollamada",dayOfWeek:0},{name:"Escribir una nota de agradecimiento",minAge:9},{name:"Practicar instrumento musical",minAge:8},{name:"Hacer una oración antes de dormir",weekdays:[0,1,2,3,4,5,6]},{name:"Ayudar a preparar arepas",minAge:7},{name:"Limpiar la mesa después de comer",minAge:5},{name:"Hacer dibujo para decorar la nevera",minAge:4},{name:"Revisar tareas en la agenda escolar",weekdays:[1,2,3,4,5]},{name:"Organizar juguetes",minAge:4},{name:"Ayudar a alimentar la mascota",minAge:5},{name:"Limpiar el comedero de la mascota",minAge:7},{name:"Hacer ejercicio 15 minutos",minAge:8},{name:"Ayudar a recoger hojas del jardín",dayOfWeek:6},{name:"Revisar uniforme para el lunes",dayOfWeek:0},{name:"Limpiar el escritorio",minAge:6},{name:"Preparar mochila para el colegio",dayOfWeek:0},{name:"Ayudar a hacer mercado",dayOfWeek:6},{name:"Contar lo mejor del día a la familia",weekdays:[0,1,2,3,4,5,6]},{name:"Hacer una manualidad con reciclaje",minAge:7},{name:"Limpiar el vidrio del ventanal",minAge:9},{name:"Revisar tareas en plataforma digital",minAge:10},{name:"Hacer resumen de lectura escolar",minAge:10},{name:"Ayudar a preparar jugo natural",minAge:6},{name:"Limpiar el baño (solo lavamanos)",minAge:9},{name:"Ayudar a organizar la despensa",minAge:8},{name:"Revisar el horario escolar",dayOfWeek:0},{name:"Hacer lista de útiles faltantes",dayOfWeek:6},{name:"Ayudar a poner la mesa",minAge:5},{name:"Hacer una cartelera familiar",minAge:9},{name:"Revisar tareas pendientes",weekdays:[1,2,3,4,5]},{name:"Ayudar a limpiar el televisor",minAge:7},{name:"Hacer un dibujo para regalar",minAge:8,weekdays:[1,3,5]},{name:"Ayudar a preparar chocolate caliente",minAge:6}];function XI(){const e=Ce.find(s=>s.id===K)?.age??null,t=new Date().getDay(),r=he.filter(s=>s.childId===K).map(s=>s.name);return YI.filter(s=>{if(r.includes(s.name))return!1;const o=(s.minAge==null||e!=null&&e>=s.minAge)&&(s.maxAge==null||e!=null&&e<=s.maxAge),a=(s.dayOfWeek==null||s.dayOfWeek===t)&&(s.weekdays==null||s.weekdays.includes(t));return o&&a}).map(s=>s.name)}function ZI(){const n=K,e=_n[n]||[],t=he.filter(r=>r.childId===n).map(r=>r.name);return e.filter(r=>!t.includes(r))}function ev(){const n=XI(),e=ZI();return[...new Set([...n,...e])]}function xe(){const n=document.getElementById("task-suggestions");if(!n)return;if((localStorage.getItem("userRole")||"child")!=="parent"){n.style.display="none";return}n.style.display="";const t=localStorage.getItem("lang")||"es",r=M[t],s=ev();if(s.length===0){n.innerHTML="";return}n.innerHTML="";const o=document.createElement("div");o.textContent=r.suggestedTasksLabel,o.className="text-sm font-medium text-gray-600 mb-2",n.appendChild(o),s.forEach(a=>{const l=document.createElement("button");l.className="suggestion-btn text-sm px-2 py-1 mr-2 mb-2",l.textContent=a,l.addEventListener("click",()=>tv(a)),n.appendChild(l)})}function tv(n){const e=localStorage.getItem("lang")||"es",t=M[e];if((localStorage.getItem("userRole")||"child")!=="parent")return alert(t.parentOnlyActionT);const s=localStorage.getItem("cutoffTime")||"21:00",[o,a]=s.split(":").map(Number),l=new Date,u=new Date;if(u.setHours(o,a,0,0),l>u)return alert(t.afterCutoffBlockMsg);he.push({name:n,points:10,frequency:"daily",done:!1,penalized:!1,childId:K}),JI(n),Ue(),Ne(),De(),oe(),xe()}document.querySelectorAll(".tab-btn").forEach(n=>{n.addEventListener("click",()=>{if(n.dataset.tab==="settings"&&localStorage.getItem("pin")){const e=localStorage.getItem("lang")||"es",t=M[e];if(prompt(t.pinPrompt)!==localStorage.getItem("pin"))return alert(t.pinIncorrectMsg)}Jt(n.dataset.tab)})});document.addEventListener("DOMContentLoaded",()=>{const n=localStorage.getItem("lang")||"es";if(bs(n),localStorage.getItem("userRole")==="parent"&&!localStorage.getItem("pin")){const d=M[n];let m="";for(;!m;)m=prompt(d.pinCreatePrompt).trim();localStorage.setItem("pin",m),alert(d.pinCreatedMsg)}function e(){const d=localStorage.getItem("userRole")||"child";document.querySelectorAll(".tab-btn").forEach(m=>{const g=m.dataset.tab;d==="parent"?m.style.display="":m.style.display=g==="tasks"||g==="rewards"?"":"none"})}e();const t=localStorage.getItem("userRole")||"child";Jt(t==="parent"?"settings":"tasks"),bt(),Gs(),Qs(),xo(),Dn(),Oo(),oe(),ou(),KI(),QI(),bt(),ht(),Ne(),De(),xe();const r=document.getElementById("welcome-screen"),s=Array.from(document.querySelectorAll("#welcome-lang-buttons button")),o=Array.from(document.querySelectorAll("#welcome-role-buttons button"));let a=n,l=localStorage.getItem("userRole")||"child";function u(d,m){d.forEach(g=>{const E=g.dataset.value===m;g.classList.toggle("bg-blue-600",E),g.classList.toggle("text-white",E),g.classList.toggle("bg-gray-200",!E),g.classList.toggle("text-gray-700",!E)})}u(s,a),u(o,l),localStorage.getItem("lang")&&localStorage.getItem("userRole")&&(r.style.display="none"),s.forEach(d=>{d.addEventListener("click",()=>{a=d.dataset.value,u(s,a),bs(a)})}),o.forEach(d=>{d.addEventListener("click",()=>{l=d.dataset.value,u(o,l)})}),document.getElementById("welcome-start")?.addEventListener("click",()=>{const m=document.querySelector("#welcome-lang-buttons button.active")?.dataset.value||"es",E=document.querySelector("#welcome-role-buttons button.active")?.dataset.value||localStorage.getItem("userRole")||"child";if(localStorage.setItem("lang",m),localStorage.setItem("userRole",E),bs(m),e(),E==="parent"){const C=M[m],P=localStorage.getItem("pin");if(P){if(prompt(C.pinPrompt)!==P)return alert(C.pinIncorrectMsg)}else{let L="";for(;!L;)L=prompt(C.pinCreatePrompt).trim();localStorage.setItem("pin",L),alert(C.pinCreatedMsg)}Jt("settings")}else Jt("tasks");Od(),ht(),bt(),Gs(),Qs(),xo(),Dn(),Oo(),oe(),ou(),Ne(),De(),xe(),We()}),document.getElementById("toggle-role-btn")?.addEventListener("click",()=>{const d=localStorage.getItem("lang")||"es",m=M[d],E=(localStorage.getItem("userRole")||"child")==="parent"?"child":"parent";if(E==="parent"){const C=localStorage.getItem("pin");if(C){if(prompt(m.pinPrompt)!==C)return alert(m.pinIncorrectMsg)}else{let P="";for(;!P;)P=prompt(m.pinCreatePrompt).trim();localStorage.setItem("pin",P),alert(m.pinCreatedMsg)}}localStorage.setItem("userRole",E),alert(m.roleChangedMsg.replace("{role}",m[E+"Role"])),e(),Jt(E==="parent"?"settings":"tasks"),bt(),ht(),Ne(),De(),xe(),We()})});let Ce=JSON.parse(localStorage.getItem("children"))||[];const Do=()=>localStorage.setItem("children",JSON.stringify(Ce)),au=localStorage.getItem("childName");if(Ce.length===0&&au){const n=Date.now().toString();Ce.push({id:n,name:au}),Do(),localStorage.removeItem("childName")}let K=Ce[0]?.id||null;function bt(){const n=document.getElementById("child-name-label"),e=Ce.find(a=>a.id===K),t=localStorage.getItem("userRole")||"child",r=localStorage.getItem("lang")||"es",s=M[r];if(!n)return;n.textContent=e?e.name:"";const o=document.getElementById("role-badge");if(o&&o.remove(),t==="parent"){const a=document.createElement("span");a.id="role-badge",a.className="ml-2 px-2 py-1 text-xs font-semibold bg-yellow-300 text-gray-800 rounded-full",a.textContent=s.parentRoleLabel||"Padre",n.parentNode.insertBefore(a,n.nextSibling)}}function Gs(){const n=localStorage.getItem("lang")||"es",t={es:"es-CO",en:"en-US"}[n]||"es-CO",r=new Date,s={weekday:"long",year:"numeric",month:"long",day:"numeric"},o=r.toLocaleDateString(t,s),a=document.querySelector('#today-header [data-i18n="todayLabel"]');a&&(a.textContent=M[n].todayLabel);const l=document.getElementById("today-date");l&&(l.textContent=o)}function ht(){const n=document.getElementById("children-list");n&&(n.innerHTML="",Ce.forEach(e=>{const t=document.createElement("li");t.className="flex justify-between items-center p-2 rounded cursor-pointer",e.id===K&&t.classList.add("bg-blue-100","text-blue-800","font-semibold");const r=localStorage.getItem("lang")||"es",s=M[r];t.innerHTML=`
  <span>${e.name}</span>
  <div class="space-x-2">
    <button class="btn btn-secondary btn-sm select-child" data-id="${e.id}">
      ${s.selectChildBtn}
    </button>
    <button class="btn btn-danger btn-sm delete-child" data-id="${e.id}">
      ${s.deleteChildBtn}
    </button>
  </div>`,n.appendChild(t)}))}function Vo(n){K=n,ht(),Lo(),De(),Ne(),oe(),bt(),Gs(),Dn()}function Lo(){const n=document.getElementById("child-tabs");n&&(n.innerHTML="",Ce.forEach(e=>{const t=document.createElement("button");t.textContent=e.name,t.className=e.id===K?"btn btn-primary":"btn btn-secondary",t.dataset.id=e.id,t.addEventListener("click",()=>Vo(e.id)),n.appendChild(t)}))}let Ir=JSON.parse(localStorage.getItem("weeklyStatsMap"))||{};function tt(n){return Ir[n]||(Ir[n]=Md()),Ir[n]}const ln=()=>localStorage.setItem("weeklyStatsMap",JSON.stringify(Ir));function Md(){return{earned:0,lost:0,redeemed:0,timestamp:new Date().toISOString()}}let he=JSON.parse(localStorage.getItem("tasks"))||[],it=JSON.parse(localStorage.getItem("rewards"))||[],mi=JSON.parse(localStorage.getItem("weeklyHistory"))||[],ct=[];const Ue=()=>localStorage.setItem("tasks",JSON.stringify(he)),fr=()=>localStorage.setItem("rewards",JSON.stringify(it)),nv=()=>localStorage.setItem("weeklyHistory",JSON.stringify(mi));function xd(){const n=tt(K);ct=[];const e=localStorage.getItem("lang")||"es",t=M[e];n.earned>=300&&ct.push({icon:"🥇",label:t.constantEffort,bonus:30}),n.redeemed>800&&ct.push({icon:"🚀",label:t.rewardExplorer,bonus:50}),n.lost===0&&n.earned>800&&ct.push({icon:"🧠",label:t.totalDiscipline,bonus:100})}function Oo(){const n=document.getElementById("badge-list");n&&(n.innerHTML="",xd(),ct.forEach(e=>{const t=document.createElement("div");t.className="badge-card flex items-center space-x-3 bg-yellow-50 p-3 rounded shadow-md mb-2",t.innerHTML=`
      <span style="font-size:2.2rem">${e.icon}</span>
      <div>
        <strong>${e.label}</strong><br>
        <span class="text-sm text-gray-600">+${e.bonus} ⭐</span>
      </div>`,n.appendChild(t)}))}function rv(){const n=document.getElementById("progress-bar");if(!n)return;const e=tt(K),t=e.earned+ct.reduce((u,d)=>u+d.bonus,0)-e.lost-e.redeemed,{current:r,next:s}=Fd(t);if(!s){n.style.width="100%";return}const o=s.min-r.min,a=t-r.min,l=Math.max(0,Math.min(a/o*100,100));n.style.width=`${l}%`}const sr=[{key:"levelNovice",min:0},{key:"levelApprentice",min:500},{key:"levelExpert",min:1500},{key:"levelMaster",min:3e3},{key:"levelLegend",min:5e3}],sv={levelApprentice:50,levelExpert:100,levelMaster:200,levelLegend:500};let Mo=JSON.parse(localStorage.getItem("lastLevelMap"))||{};function iv(){localStorage.setItem("lastLevelMap",JSON.stringify(Mo))}function Fd(n){let e=sr[0],t=null;for(let r=0;r<sr.length&&n>=sr[r].min;r++)e=sr[r],t=sr[r+1]||null;return{current:e,next:t}}function ov(){const n=document.getElementById("child-name-label");if(!n)return;let e=document.getElementById("child-level");e||(e=document.createElement("div"),e.id="child-level",e.className="level-badge",n.parentNode.insertBefore(e,n.nextSibling));const t=tt(K),r=ct.reduce((g,E)=>g+E.bonus,0),s=t.earned+r-t.lost-t.redeemed,{current:o,next:a}=Fd(s),l=localStorage.getItem("lang")||"es",u=M[l];let d=u.levelLabel.replace("{level}",u[o.key]);if(a){const g=a.min-s;d+=" • "+u.nextLevelIn.replace("{points}",g).replace("{nextLevel}",u[a.key])}e.textContent=d;const m=Mo[K];if(m&&m!==o.key){const g=sv[o.key]||0;if(g>0){t.earned+=g,ln();const E=document.createElement("div");E.className="level-popup",E.innerHTML=`🎉 ${u.levelUpMsg.replace("{level}",u[o.key])}<br>✨ +${g} pts extra!`,document.body.appendChild(E),setTimeout(()=>E.remove(),3e3)}else{const E=document.createElement("div");E.className="level-popup",E.innerHTML=`🎉 ${u.levelUpMsg.replace("{level}",u[o.key])}`,document.body.appendChild(E),setTimeout(()=>E.remove(),3e3)}}Mo[K]=o.key,iv()}function oe(){console.log("✅ Entrando a updatePointDisplay");const n=tt(K);xd();const e=ct.reduce((r,s)=>r+s.bonus,0),t=n.earned+e;document.getElementById("points-earned").textContent=t,document.getElementById("points-lost").textContent=n.lost,document.getElementById("points-redeemed").textContent=n.redeemed,document.getElementById("points-total").textContent=t-n.lost-n.redeemed,rv(),Oo(),ov()}function Ks(n){const e=new Date(n),t=(e.getDay()+6)%7;return e.setDate(e.getDate()-t),e.setHours(0,0,0,0),e}function Ud(){const n=new Date,e=n.getDay(),t=new Date(n);t.setDate(n.getDate()-e+(e===0?-6:1));const r=new Date(t);return r.setDate(t.getDate()+6),{startDate:t.toISOString().split("T")[0],endDate:r.toISOString().split("T")[0],weekLabel:`Semana del ${t.toLocaleDateString("es-CO",{day:"numeric",month:"long"})}
      al ${r.toLocaleDateString("es-CO",{day:"numeric",month:"long"})}`}}function av(){const n=new Date,e=Ks(n),t=mi.filter(a=>a.childId===K);if(t.length===0)return!0;const r=t[t.length-1],s=Ks(new Date(r.timestamp));if(e.getTime()===s.getTime())return alert("❌ Ya cerraste esta semana para este niño. Espera al siguiente lunes."),!1;const o=new Date(e.getTime()+10080*60*1e3);return n<o?(alert("❌ Todavía no es lunes de la próxima semana para cerrar."),!1):!0}function Nn(n,e=1200){const t=document.createElement("div");t.textContent=n,Object.assign(t.style,{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",background:"#ffe4e6",padding:"1rem 2rem",borderRadius:"8px",boxShadow:"0 0 5px rgba(0,0,0,0.2)"}),document.body.appendChild(t),setTimeout(()=>t.remove(),e)}function cv(){const n=localStorage.getItem("lang")||"es",e=M[n],t=new Date,r=localStorage.getItem("cutoffTime")||"21:00",[s,o]=r.split(":").map(Number),a=new Date;if(a.setHours(s,o,0,0),t<=a)return;let l=!1;he.forEach(u=>{if(u.frequency==="daily"&&!u.done&&!u.penalized){const d=tt(u.childId);d.lost+=u.points*2,u.penalized=!0,l=!0}}),l&&(ln(),Ue(),oe(),Nn(e.penDailyMsg),he.forEach(u=>{u.frequency==="daily"&&(u.done=!1,u.penalized=!1)}),Ue(),De())}function Bd(n){const e=localStorage.getItem("lang")||"es",t=M[e],r=Ce.find(a=>a.id===K),s=r?r.name:e==="en"?"Someone":"Alguien",o=t.shareTextTemplate.replace("{child}",s).replace("{reward}",n);navigator.share?navigator.share({title:t.shareTitle,text:o}).catch(()=>{navigator.clipboard.writeText(o),Nn(t.clipboardCopiedMsg)}):(navigator.clipboard.writeText(o),Nn(t.clipboardCopiedMsg))}function Ne(){const n=document.getElementById("tasks-manage");if(!n)return;const e=localStorage.getItem("lang")||"es",t=M[e];n.innerHTML="",he.filter(r=>r.childId===K).forEach((r,s)=>{const o=document.createElement("div");o.className="reward-block flex justify-between items-center bg-gray-100 p-2 rounded mb-2";const a=document.createElement("div");a.className="flex flex-col";const l=document.createElement("span");l.textContent=`${r.name} (${r.points} ${t.pointsSuffix})`,a.appendChild(l);const u=document.createElement("span");u.className="text-xs text-gray-500",u.textContent=r.frequency==="weekly"?t.frequencyWeekly:t.frequencyDaily,a.appendChild(u);const d=document.createElement("div");d.className="flex space-x-2";const m=document.createElement("button");m.className="btn-edit",m.dataset.index=s,m.textContent="✏️",r.done&&(m.disabled=!0,m.classList.add("opacity-50","cursor-not-allowed"));const g=document.createElement("button");g.className="btn-danger",g.dataset.index=s,g.textContent=t.deleteTaskBtn,r.done&&(g.disabled=!0,g.classList.add("opacity-50","cursor-not-allowed")),d.appendChild(m),d.appendChild(g),o.appendChild(a),o.appendChild(d),n.appendChild(o)})}function De(){const n=document.getElementById("tasks-list");if(!n)return;const e=localStorage.getItem("lang")||"es",t=M[e],r=localStorage.getItem("userRole")||"child";n.innerHTML="",he.filter(o=>o.childId===K).forEach((o,a)=>{const l=document.createElement("div");l.className="task-card flex justify-between items-center p-3 mb-2 bg-white rounded shadow";const u=document.createElement("div");u.className="flex flex-col";const d=document.createElement("span");d.className="font-medium",d.textContent=`${o.name} (${o.points} ${t.pointsSuffix})`,u.appendChild(d);const m=document.createElement("span");m.className="text-xs text-gray-500",m.textContent=o.frequency==="weekly"?t.frequencyWeekly:t.frequencyDaily,u.appendChild(m);const g=document.createElement("button");g.className="btn-success",g.textContent=o.done?t.markedDoneBtn:t.markDoneBtn;const E=localStorage.getItem("cutoffTime")||"21:00",[C,P]=E.split(":").map(Number),L=new Date;L.setHours(C,P,0,0);const N=new Date>L&&!o.done;r!=="child"?g.disabled=!0:g.disabled=o.done||N,o.done&&g.classList.add("btn-done"),r==="child"&&g.addEventListener("click",()=>{if(o.done)return;o.done=!0;const j=tt(K);j.earned+=o.points,ln(),Ue(),oe(),g.textContent=t.markedDoneBtn,g.disabled=!0,g.classList.add("btn-done"),Ne(),xe();const q=document.createElement("div");q.className="sparkle",q.textContent="🌟",l.appendChild(q),setTimeout(()=>q.remove(),800)}),l.appendChild(u),l.appendChild(g),n.appendChild(l)})}function ir(){const n=document.getElementById("rewards-manage");if(!n)return;const e=localStorage.getItem("lang")||"es",t=M[e];n.innerHTML="",it.forEach((r,s)=>{const o=document.createElement("div");o.className="reward-block flex justify-between items-center bg-gray-100 p-2 rounded mb-2";const a=document.createElement("span");a.textContent=`${r.name} (${r.cost} ${t.pointsSuffix}) • ${t.rewardStockLabel}: ${r.stock}`,o.appendChild(a);const l=document.createElement("button");l.className="btn-edit",l.dataset.index=s,l.textContent="✏️",o.appendChild(l);const u=document.createElement("button");u.className="btn-danger",u.dataset.index=s,u.textContent=t.deleteRewardBtn,o.appendChild(u),n.appendChild(o)})}function We(){const n=document.getElementById("rewards-list"),e=document.getElementById("redeemed-cards");if(!n||!e)return;const t=localStorage.getItem("lang")||"es",r=M[t],s=localStorage.getItem("userRole")||"child";n.innerHTML="",it.forEach((o,a)=>{const l=document.createElement("div");l.className="reward-block";const u=document.createElement("span");u.textContent=`${o.name} (${o.cost} ${r.pointsSuffix}) • ${r.rewardStockLabel}: ${o.stock}`,l.appendChild(u);const d=document.createElement("button");d.className="btn-primary",s!=="child"?(d.disabled=!0,d.textContent=r.parentOnlyAction):o.stock<1?(d.disabled=!0,d.textContent=r.outOfStockMsg):(d.disabled=!1,d.textContent=r.redeemBtnLabel,d.dataset.index=a,d.addEventListener("click",()=>lv(a))),l.appendChild(d),n.appendChild(l)}),e.innerHTML="",typeof redeemedHistory<"u"&&redeemedHistory.forEach(o=>{const a=document.createElement("div");a.className="redeemed-card p-2 bg-green-50 rounded mb-2";const l=document.createElement("strong");l.textContent=o.rewardName,a.appendChild(l);const u=document.createElement("div");u.innerHTML=`
        ${r.redeemedByLabel.replace("{name}",o.childName)}
        <br><small>${new Date(o.timestamp).toLocaleString()}</small>
      `,a.appendChild(u);const d=document.createElement("button");d.className="share-btn mt-2",d.textContent=r.shareBtnLabel,d.addEventListener("click",()=>Bd(o.rewardName)),a.appendChild(d),e.appendChild(a)})}function lv(n){const e=localStorage.getItem("lang")||"es",t=M[e],r=it[n];if(!r||r.stock<1)return;const s=tt(K),o=ct.reduce((m,g)=>m+g.bonus,0);if(s.earned+o-s.lost-s.redeemed<r.cost)return alert(t.notEnoughPoints.replace("{reward}",r.name));s.redeemed+=r.cost,r.stock--,ln(),fr();const u=Ce.find(m=>m.id===K)?.name||t.unknownChild;window.redeemedHistory||(window.redeemedHistory=[]),window.redeemedHistory.push({rewardName:r.name,childName:u,timestamp:new Date().toISOString()}),oe(),We();const d=document.createElement("div");d.className="reward-sparkle",d.textContent="🎉",document.body.appendChild(d),setTimeout(()=>d.remove(),800),Bd(r.name)}function Dn(){const n=localStorage.getItem("lang")||"es",e=n==="en"?"en-US":"es-CO";["weekly-history-list","closed-weeks-history"].forEach(t=>{const r=document.getElementById(t);if(!r)return;r.innerHTML="";const s=mi.filter(o=>o.childId===K);if(s.length===0){const o=document.createElement("p");o.className="text-gray-500",o.textContent=M[n].noHistory,r.appendChild(o);return}s.slice(-5).reverse().forEach(o=>{const a=new Date(o.timestamp).toLocaleDateString(e,{weekday:"short",year:"numeric",month:"long",day:"numeric"}),l=new Date(o.startDate).toLocaleDateString(e,{day:"numeric",month:"long"}),u=new Date(o.endDate).toLocaleDateString(e,{day:"numeric",month:"long"}),d=n==="en"?`Week from ${l} to ${u}`:`Semana del ${l} al ${u}`,m=document.createElement("div");m.className="week-entry",m.innerHTML=`
          <p class="font-semibold">
            ${d} <span class="text-sm text-gray-500">(${a})</span>
          </p>
          <p class="text-sm text-gray-600">
            ⭐ ${M[n].earnedLabel}: ${o.earned} |
            ❌ ${M[n].lostLabel}: ${o.lost} |
            🎁 ${M[n].redeemedLabel}: ${o.redeemed}
          </p>`,r.appendChild(m)})})}function Qs(){const n=localStorage.getItem("cutoffTime")||"21:00",[e,t]=n.split(":").map(m=>parseInt(m,10)),r=new Date;r.setHours(e,t,0,0);const s=localStorage.getItem("lang")||"es",o=s==="en"?"en-US":"es-CO",a=r.toLocaleTimeString(o,{hour:"numeric",minute:"2-digit",hour12:!0});document.querySelectorAll('[data-i18n="cutoffIntro"]').forEach(m=>m.textContent=M[s].cutoffIntro);const l=document.getElementById("cutoff-time-display");l&&(l.textContent=a);const u=document.getElementById("cutoff-info-time");u&&(u.textContent=a);const d=document.getElementById("cutoff-time");d&&(d.value=n)}Qs();document.getElementById("save-cutoff")?.addEventListener("click",()=>{const n=localStorage.getItem("lang")||"es",e=document.getElementById("cutoff-time");if(!e)return alert(M[n].errorNoCutoffField);const t=e.value;if(!t)return alert(M[n].invalidTimeMsg);localStorage.setItem("cutoffTime",t),Qs();const r=M[n].cutoffSaved.replace("{time}",t);alert(r)});function xo(){const n=localStorage.getItem("lang")||"es",{startDate:e,endDate:t}=Ud();document.querySelectorAll('[data-i18n="fromLabel"]').forEach(o=>o.textContent=M[n].fromLabel),document.querySelectorAll('[data-i18n="toLabel"]').forEach(o=>o.textContent=M[n].toLabel);const r=document.getElementById("week-start"),s=document.getElementById("week-end");r&&(r.textContent=e),s&&(s.textContent=t)}function Jt(n){document.querySelectorAll(".tab-content").forEach(e=>e.style.display=e.id===n?"block":"none"),document.querySelectorAll(".tab-btn").forEach(e=>e.classList.toggle("tab-active",e.dataset.tab===n)),(n==="tasks"||n==="settings")&&Dn()}window.addEventListener("DOMContentLoaded",()=>{console.log("🚀 DOM cargado, inicializando app"),bt(),Gs(),ht(),Lo(),cv(),xo(),Dn(),Ne(),De(),ir(),We(),oe(),Jt("tasks"),document.getElementById("add-child")?.addEventListener("click",()=>{const n=localStorage.getItem("lang")||"es",e=M[n],t=document.getElementById("new-child-name"),r=document.getElementById("new-child-age"),s=t.value.trim(),o=parseInt(r.value,10);if(!s||isNaN(o)||o<1)return alert(e.invalidChildNameOrAge);const a=Date.now().toString();Ce.push({id:a,name:s,age:o}),Do(),ht(),Vo(a),t.value="",r.value=""}),document.getElementById("children-list")?.addEventListener("click",n=>{const e=localStorage.getItem("lang")||"es",t=n.target.dataset.id;if(n.target.classList.contains("select-child")&&Vo(t),n.target.classList.contains("delete-child")){const r=Ce.find(o=>o.id===t).name,s=M[e].confirmDeleteChild.replace("{name}",r);if(!confirm(s))return;Ce=Ce.filter(o=>o.id!==t),Do(),he=he.filter(o=>o.childId!==t),Ue(),K===t&&(K=Ce[0]?.id||null),ht(),Lo(),Ne(),De(),oe(),xe()}}),document.getElementById("add-task")?.addEventListener("click",()=>{const n=localStorage.getItem("lang")||"es",e=M[n],t=document.getElementById("new-task-name"),r=document.getElementById("new-task-points"),s=document.getElementById("new-task-frequency"),o=t.value.trim(),a=parseInt(r.value,10),l=s.value;if(!o||isNaN(a)||!K)return alert(e.createTaskInstructions);const u=localStorage.getItem("cutoffTime")||"21:00",[d,m]=u.split(":").map(Number),g=new Date,E=new Date;if(E.setHours(d,m,0,0),g>E)return alert(e.afterCutoffBlockMsg);he.push({name:o,points:a,frequency:l,done:!1,penalized:!1,childId:K}),Ue(),Ne(),De(),oe(),xe(),t.value="",r.value="",s.value="daily"}),document.getElementById("tasks-manage")?.addEventListener("click",n=>{const e=localStorage.getItem("lang")||"es";if(n.target.matches(".btn-edit")){const t=parseInt(n.target.dataset.index,10),s=he.filter(a=>a.childId===K)[t],o=prompt(M[e].promptNewTaskName,s.name);if(o){s.name=o;const a=prompt(M[e].promptNewTaskPoints,s.points);isNaN(parseInt(a,10))||(s.points=parseInt(a,10)),Ue(),Ne(),De(),oe(),xe()}return}if(n.target.matches(".btn-danger")){const t=parseInt(n.target.dataset.index,10);he.splice(t,1),Ue(),Ne(),De(),oe(),xe()}}),document.getElementById("add-reward")?.addEventListener("click",()=>{const n=localStorage.getItem("lang")||"es",e=M[n],t=document.getElementById("new-reward-name"),r=document.getElementById("new-reward-cost"),s=document.getElementById("new-reward-stock"),o=t.value.trim(),a=parseInt(r.value,10),l=parseInt(s?.value,10);if(!o||isNaN(a)||isNaN(l)||l<1)return alert(e.invalidRewardNameCost);it.push({name:o,cost:a,stock:l,redeemed:!1}),fr(),ir(),We(),oe(),t.value="",r.value="",s.value=""}),document.getElementById("rewards-manage")?.addEventListener("click",n=>{const e=localStorage.getItem("lang")||"es";if(n.target.matches(".btn-edit")){const t=parseInt(n.target.dataset.index,10),r=it[t],s=prompt(M[e].promptNewRewardName,r.name);if(s){r.name=s;const o=prompt(M[e].promptNewRewardCost,r.cost);isNaN(parseInt(o,10))||(r.cost=parseInt(o,10)),fr(),ir(),We(),oe()}return}n.target.matches(".btn-danger")&&(it.splice(parseInt(n.target.dataset.index,10),1),fr(),ir(),We(),oe())}),document.getElementById("reset-week")?.addEventListener("click",()=>{const n=localStorage.getItem("lang")||"es",e=M[n],t=tt(K);if(t.earned===0&&t.lost===0&&t.redeemed===0)return alert(e.noActivityMsg);if(!av()||(he.forEach(s=>{s.childId===K&&s.frequency==="weekly"&&!s.done&&!s.penalized&&(t.lost+=s.points*3,s.penalized=!0)}),!confirm(e.confirmCloseWeek)))return;const r=Ud();mi.push({childId:K,earned:t.earned,lost:t.lost,redeemed:t.redeemed,weekLabel:r.weekLabel,startDate:r.startDate,endDate:r.endDate,timestamp:new Date().toISOString()}),nv(),Ir[K]=Md(),ln(),he=he.filter(s=>s.childId!==K),it=it.filter(s=>s.childId!==K),Ue(),fr(),Ne(),De(),xe(),ir(),We(),oe(),Dn(),Jt("tasks"),alert(e.weekClosedMsg)}),document.getElementById("reset-app")?.addEventListener("click",()=>{const n=localStorage.getItem("lang")||"es",e=M[n];confirm(e.confirmResetApp)&&(localStorage.clear(),alert(e.resetSuccessMsg),location.reload())}),document.getElementById("save-pin")?.addEventListener("click",()=>{const n=localStorage.getItem("lang")||"es",t=document.getElementById("pin-input")?.value.trim();if(!t)return alert(M[n].invalidPinMsg);localStorage.setItem("pin",t),alert(M[n].pinSavedMsg)}),"serviceWorker"in navigator&&window.addEventListener("load",async()=>{try{const n=await navigator.serviceWorker.register("service-worker.js");console.log("✅ SW registrado"),n.waiting&&to(n.waiting),n.addEventListener("updatefound",()=>{const e=n.installing;console.log("👀 SW updatefound, estado:",e.state),e.addEventListener("statechange",()=>{console.log("👀 SW statechange:",e.state),e.state==="installed"&&navigator.serviceWorker.controller&&to(e)})})}catch(n){console.error("❌ SW error",n)}}),document.getElementById("install-updates")?.addEventListener("click",async()=>{const n=localStorage.getItem("lang")||"es",e=M[n],t=await navigator.serviceWorker.getRegistration();if(!t)return console.warn(e.swNotRegistered);t.waiting?to(t.waiting):t.update(),Nn(e.searchingUpdates)})});function to(n){console.log("✉️ Enviando SKIP_WAITING al SW…"),n.postMessage({type:"SKIP_WAITING"}),n.addEventListener("statechange",()=>{n.state==="activated"&&(console.log("🔄 SW activado, recargando página"),window.location.reload())})}
