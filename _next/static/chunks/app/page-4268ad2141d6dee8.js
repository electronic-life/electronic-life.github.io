(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{4996:(e,t,r)=>{Promise.resolve().then(r.bind(r,1320))},1933:(e,t,r)=>{var n=r(2673).Symbol;e.exports=n},3600:(e,t,r)=>{var n=r(1933),a=r(8273),i=r(6798),l=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":l&&l in Object(e)?a(e):i(e)}},1004:(e,t,r)=>{var n=r(7550),a=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(a,""):e}},4952:(e,t,r)=>{var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=n},8273:(e,t,r)=>{var n=r(1933),a=Object.prototype,i=a.hasOwnProperty,l=a.toString,s=n?n.toStringTag:void 0;e.exports=function(e){var t=i.call(e,s),r=e[s];try{e[s]=void 0;var n=!0}catch(e){}var a=l.call(e);return n&&(t?e[s]=r:delete e[s]),a}},6798:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},2673:(e,t,r)=>{var n=r(4952),a="object"==typeof self&&self&&self.Object===Object&&self,i=n||a||Function("return this")();e.exports=i},7550:e=>{var t=/\s/;e.exports=function(e){for(var r=e.length;r--&&t.test(e.charAt(r)););return r}},719:(e,t,r)=>{var n=r(5255),a=r(1332),i=r(2816),l=Math.max,s=Math.min;e.exports=function(e,t,r){var o,c,u,d,m,h,f=0,g=!1,v=!1,x=!0;if("function"!=typeof e)throw TypeError("Expected a function");function p(t){var r=o,n=c;return o=c=void 0,f=t,d=e.apply(n,r)}function w(e){var r=e-h,n=e-f;return void 0===h||r>=t||r<0||v&&n>=u}function b(){var e,r,n,i=a();if(w(i))return j(i);m=setTimeout(b,(e=i-h,r=i-f,n=t-e,v?s(n,u-r):n))}function j(e){return(m=void 0,x&&o)?p(e):(o=c=void 0,d)}function y(){var e,r=a(),n=w(r);if(o=arguments,c=this,h=r,n){if(void 0===m)return f=e=h,m=setTimeout(b,t),g?p(e):d;if(v)return clearTimeout(m),m=setTimeout(b,t),p(h)}return void 0===m&&(m=setTimeout(b,t)),d}return t=i(t)||0,n(r)&&(g=!!r.leading,u=(v="maxWait"in r)?l(i(r.maxWait)||0,t):u,x="trailing"in r?!!r.trailing:x),y.cancel=function(){void 0!==m&&clearTimeout(m),f=0,o=h=c=m=void 0},y.flush=function(){return void 0===m?d:j(a())},y}},5255:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},4480:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},3480:(e,t,r)=>{var n=r(3600),a=r(4480);e.exports=function(e){return"symbol"==typeof e||a(e)&&"[object Symbol]"==n(e)}},1332:(e,t,r)=>{var n=r(2673);e.exports=function(){return n.Date.now()}},8640:(e,t,r)=>{var n=r(719),a=r(5255);e.exports=function(e,t,r){var i=!0,l=!0;if("function"!=typeof e)throw TypeError("Expected a function");return a(r)&&(i="leading"in r?!!r.leading:i,l="trailing"in r?!!r.trailing:l),n(e,t,{leading:i,maxWait:t,trailing:l})}},2816:(e,t,r)=>{var n=r(1004),a=r(5255),i=r(3480),l=0/0,s=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return l;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=o.test(e);return r||c.test(e)?u(e.slice(2),r?2:8):s.test(e)?l:+e}},1320:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>S});var n=r(5155),a=r(2115),i=r.t(a,2);let l=a.memo(e=>{let{size:t=0}=e,r=t>1?1:t<0?0:t,{baseSize:i,spikeLength:l,coreSize:s,blurAmount:o,rays:c,glowSize:u,amberColor:d,blueColor:m}=(0,a.useMemo)(()=>{let e=300*r-22,t=16*r,n=.5+1.5*r,a=40*r,i="rgba(255, ".concat(191-64*r,", ").concat(63-192*r,", 0.85)"),l="rgba(".concat(105-150*r,", ").concat(105-150*r,", 255, 0.85)");return{baseSize:10,spikeLength:e,coreSize:t,blurAmount:n,rays:[0,45,90,135].map(e=>({angle:e,length:150*r,width:2+18*r,color:e%90==0?"rgba(255, 220, 180, ".concat(.2+.05*r,")"):"rgba(250, 230, 200, ".concat(.2+.05*r,")")})),glowSize:a,amberColor:i,blueColor:l}},[r]),h="blur(".concat(o,"px) drop-shadow(0 0 ").concat(u,"px rgba(255, 255, 255, ").concat(.8+.1*r,"))");return(0,n.jsx)("div",{className:"relative",style:{width:i,height:i},children:(0,n.jsxs)("div",{className:"absolute inset-0",style:{filter:h,transform:"rotate(".concat(6*r,"deg)"),transformOrigin:"center center"},children:[(0,n.jsxs)("div",{className:"absolute inset-0",children:[(0,n.jsx)("div",{className:"absolute top-1/2 left-1/2",style:{width:3+8*r,height:i+4*l,transform:"translate(-50%, -50%)",background:"linear-gradient(180deg, \n                transparent 0%,\n                ".concat(m," 45%,\n                ").concat(m," 55%,\n                transparent 100%\n              )")}}),(0,n.jsx)("div",{className:"absolute top-1/2 left-1/2",style:{width:3+8*r,height:i+4*l,transform:"translate(-50%, -50%) rotate(90deg)",background:"linear-gradient(180deg, \n                transparent 0%,\n                ".concat(m," 45%,\n                ").concat(m," 55%,\n                transparent 100%\n              )")}}),(0,n.jsx)("div",{className:"absolute top-1/2 left-1/2",style:{width:3+8*r,height:i+4*l,transform:"translate(-50%, -50%)",background:"linear-gradient(180deg, \n                transparent 10%,\n                ".concat(d," 45%,\n                ").concat(d," 55%,\n                transparent 90%\n              )")}}),(0,n.jsx)("div",{className:"absolute top-1/2 left-1/2",style:{width:3+8*r,height:i+3*l,transform:"translate(-50%, -50%) rotate(90deg)",background:"linear-gradient(180deg, \n                transparent 10%,\n                ".concat(d," 45%,\n                ").concat(d," 55%,\n                transparent 90%\n              )")}})]}),c.map((e,t)=>(0,n.jsx)("div",{className:"absolute top-1/2 left-1/2",style:{width:e.width,height:e.length,transform:"translate(-50%, -50%) rotate(".concat(e.angle,"deg)"),background:"linear-gradient(180deg, \n                transparent 0%, \n                ".concat(e.color," 45%, \n                ").concat(e.color," 55%, \n                transparent 100%\n              )")}},t)),(0,n.jsx)("div",{className:"absolute top-1/2 left-1/2 rounded-full bg-white",style:{width:s+20*r,height:s+20*r,transform:"translate(-50%, -50%)",boxShadow:r>.9?"0 0 10px 2px rgba(255, 255, 255, 0.9)":"none"}})]})})});l.displayName="Star";let s=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var c={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let u=(0,a.forwardRef)((e,t)=>{let{color:r="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:s="",children:u,iconNode:d,...m}=e;return(0,a.createElement)("svg",{ref:t,...c,width:n,height:n,stroke:r,strokeWidth:l?24*Number(i)/Number(n):i,className:o("lucide",s),...m},[...d.map(e=>{let[t,r]=e;return(0,a.createElement)(t,r)}),...Array.isArray(u)?u:[u]])}),d=((e,t)=>{let r=(0,a.forwardRef)((r,n)=>{let{className:i,...l}=r;return(0,a.createElement)(u,{ref:n,iconNode:t,className:o("lucide-".concat(s(e)),i),...l})});return r.displayName="".concat(e),r})("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),m=e=>{let{scrollDecimal:t}=e,r=Math.max(0,1-t/50);return(0,n.jsxs)("div",{className:"fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center",style:{opacity:r},children:[(0,n.jsx)("div",{className:"text-white text-xl text-sm mb-2",children:"Scroll to enter..."}),(0,n.jsx)("div",{className:"animate-bounce",children:(0,n.jsx)(d,{className:"text-white w-6 h-6"})})]})},h=e=>{let{text:t,className:r}=e;return(0,n.jsx)("h1",{className:"text-3xl font-bold text-white ".concat(r),children:t})},f=e=>{let{className:t}=e;return(0,n.jsx)("a",{className:"".concat(t),href:"mailto:contact@electroniclife.ai",children:"Contact Us"})},g=e=>{let{title_text:t}=e;return(0,n.jsxs)("header",{className:"pt-4",children:[(0,n.jsx)(h,{text:t,className:"mt-12 ml-12 mb-8 "}),(0,n.jsx)(f,{className:"ml-12 text-xl underline text-white hover:text-blue-800"})]})},v=e=>{let{className:t}=e;return(0,n.jsx)("footer",{className:"p-12 ".concat(t),children:(0,n.jsx)("p",{className:"text-sm text-white",children:"\xa9 2024 S. Manghani, E. D’Souza, T. Savage"})})};var x=r(8640),p=r.n(x);let{useState:w,useEffect:b,useCallback:j,useMemo:y,useRef:N}=i,k=()=>{let e=N(!1),[t,r]=w(!1);return b(()=>{let t=()=>{let t=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||window.innerWidth<768;t!==e.current&&(e.current=t,r(t))};t();let n=p()(t,500);return window.addEventListener("resize",n,{passive:!0}),()=>window.removeEventListener("resize",n)},[]),t},E=e=>{let{canvasRef:t,pointsRef:r,isMobile:n,scale:a}=e,i=N(null),l=N(0),s=1e3/(n?30:60),o=j(()=>{let e=performance.now();if(e-l.current<s){i.current=requestAnimationFrame(o);return}let c=t.current;if(!c)return;let u=c.getContext("2d",{alpha:!1});if(!u)return;let d=r.current,m=c.getBoundingClientRect();(c.width!==m.width||c.height!==m.height)&&(c.width=m.width,c.height=m.height),u.clearRect(0,0,c.width,c.height),c.style.transform="scale(".concat(a,")"),u.beginPath(),d.forEach(e=>{let t=e.x*(m.width/1600),r=e.y*(m.height/1200);u.moveTo(t,r),u.arc(t,r,e.size,0,2*Math.PI)}),u.fillStyle=n?"rgba(200, 200, 255, 0.3)":"rgba(180, 180, 255, 0.4)",u.fill(),l.current=e,i.current=requestAnimationFrame(o)},[a,n,s]);return{drawPoints:o,animationFrameRef:i}},O=a.memo(e=>{let{scale:t,onInit:r}=e,a=N(null),i=N([]),l=k(),{drawPoints:s,animationFrameRef:o}=E({canvasRef:a,pointsRef:i,isMobile:l,scale:t});return b(()=>{let e=l?50:150;i.current=Array.from({length:e},()=>({x:1600*Math.random(),y:1200*Math.random(),size:1.5,blueAmount:Math.random(),opacity:.5+.3*Math.random()})),r&&r()},[l,r]),b(()=>{let e=new ResizeObserver(p()(()=>{o.current&&cancelAnimationFrame(o.current),o.current=requestAnimationFrame(s)},250));return a.current&&(e.observe(a.current),s()),()=>{e.disconnect(),o.current&&cancelAnimationFrame(o.current)}},[s]),(0,n.jsx)("canvas",{ref:a,className:"absolute top-0 left-0 w-full h-full bg-black",style:{willChange:"transform",touchAction:"pan-y",transform:"scale(".concat(t,")"),transformOrigin:"center center"}})});O.displayName="CanvasPoints";let A=a.memo(()=>(0,n.jsxs)("div",{className:"relative w-full h-full",children:[(0,n.jsx)(g,{title_text:"ELECTRONIC LIFE"}),(0,n.jsx)(v,{className:"absolute w-full"})]}));function S(){let[e,t]=w({progress:0,decimal:0}),[r,a]=w(!1),i=k(),s=N({lastScrollY:0,ticking:!1}),o=j(()=>{s.current.ticking||(s.current.ticking=!0,requestAnimationFrame(()=>{let e=window.scrollY,r=Math.min(Math.max(e/(document.documentElement.scrollHeight-window.innerHeight),0),1);t({progress:r,decimal:20+200*r}),s.current.lastScrollY=e,s.current.ticking=!1}))},[]);if(b(()=>(a(!0),o(),window.addEventListener("scroll",o,{passive:!0}),()=>window.removeEventListener("scroll",o)),[o]),!r)return(0,n.jsxs)("div",{className:"relative w-full",children:[(0,n.jsx)("div",{className:"h-screen"}),(0,n.jsx)("div",{className:"h-screen"})]});let c=e.decimal/220,u=1+e.decimal/(i?2e3:1e3);return(0,n.jsxs)("div",{className:"relative w-full",children:[(0,n.jsx)("div",{className:"h-screen"}),(0,n.jsx)("div",{className:"fixed top-0 left-0 w-full h-screen bg-black overflow-hidden",children:(0,n.jsxs)("div",{className:"relative w-full h-full",children:[(0,n.jsx)(O,{scale:u}),(0,n.jsx)("div",{className:"absolute left-1/2 top-1/2 will-change-transform",style:{transform:"translate(-50%, -50%) scale(".concat(i?.6:1,")")},children:(0,n.jsx)(l,{size:c})}),(0,n.jsx)(m,{scrollDecimal:e.decimal}),e.progress>.9&&(0,n.jsx)(A,{})]})}),(0,n.jsx)("div",{className:"h-screen"})]})}A.displayName="HeaderFooter"}},e=>{var t=t=>e(e.s=t);e.O(0,[441,517,358],()=>t(4996)),_N_E=e.O()}]);