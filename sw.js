if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>i(e,t),d={module:{uri:t},exports:o,require:l};s[t]=Promise.all(n.map((e=>d[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BtOaXjfS.js",revision:null},{url:"assets/index-LxNpdqen.js",revision:null},{url:"assets/index-n1Vahc4n.css",revision:null},{url:"index.html",revision:"46e5d4d03923e3865e50c26dc7bcbbfb"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/favicon.svg",revision:"1821c958bbe5e0a6a4563025af907760"},{url:"manifest.webmanifest",revision:"0ea6985f0e348d629d4c5d41533a8055"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
