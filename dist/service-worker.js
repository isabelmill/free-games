if(!self.define){let e,o={};const s=(s,n)=>(s=new URL(s+".js",n).href,o[s]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=o,document.head.appendChild(e)}else e=s,importScripts(s),o()})).then((()=>{let e=o[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(o[r])return;let i={};const l=e=>s(e,r),f={module:{uri:r},exports:i,require:l};o[r]=Promise.all(n.map((e=>f[e]||l(e)))).then((e=>(t(...e),i)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"template-proj"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.2411cd7d.css",revision:null},{url:"/fonts/Roboto-Bold.c36a3fe0.ttf",revision:null},{url:"/fonts/Roboto-Light.1ad50b89.ttf",revision:null},{url:"/fonts/Roboto-Regular.d0bc87a8.ttf",revision:null},{url:"/index.html",revision:"3f2d3b09efa862e69dbbd1f3466f2558"},{url:"/js/app.21121ffa.js",revision:null},{url:"/js/chunk-vendors.3a5d9c0d.js",revision:null},{url:"/manifest.json",revision:"1e373fa3e7bc194c1b25937ef8df4b85"}],{})}));
//# sourceMappingURL=service-worker.js.map
