(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{4996:(e,t,n)=>{Promise.resolve().then(n.bind(n,9720))},1956:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}});let a=n(306)._(n(580));function r(e,t){var n;let r={};"function"==typeof e&&(r.loader=e);let l={...r,...t};return(0,a.default)({...l,modules:null==(n=l.loadableGenerated)?void 0:n.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9827:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return r}});let a=n(3719);function r(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new a.BailoutToCSRError(t);return n}},580:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let a=n(5155),r=n(2115),l=n(9827),o=n(9214);function s(e){return{default:e&&"default"in e?e.default:e}}let c={loader:()=>Promise.resolve(s(()=>null)),loading:null,ssr:!0},i=function(e){let t={...c,...e},n=(0,r.lazy)(()=>t.loader().then(s)),i=t.loading;function d(e){let s=i?(0,a.jsx)(i,{isLoading:!0,pastDelay:!0,error:null}):null,c=!t.ssr||!!t.loading,d=c?r.Suspense:r.Fragment,u=t.ssr?(0,a.jsxs)(a.Fragment,{children:["undefined"==typeof window?(0,a.jsx)(o.PreloadChunks,{moduleIds:t.modules}):null,(0,a.jsx)(n,{...e})]}):(0,a.jsx)(l.BailoutToCSR,{reason:"next/dynamic",children:(0,a.jsx)(n,{...e})});return(0,a.jsx)(d,{...c?{fallback:s}:{},children:u})}return d.displayName="LoadableComponent",d}},9214:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadChunks",{enumerable:!0,get:function(){return s}});let a=n(5155),r=n(7650),l=n(5861),o=n(8284);function s(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=l.workAsyncStorage.getStore();if(void 0===n)return null;let s=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files;s.push(...t)}}return 0===s.length?null:(0,a.jsx)(a.Fragment,{children:s.map(e=>{let t=n.assetPrefix+"/_next/"+(0,o.encodeURIPath)(e);return e.endsWith(".css")?(0,a.jsx)("link",{precedence:"dynamic",href:t,rel:"stylesheet",as:"style"},e):((0,r.preload)(t,{as:"script",fetchPriority:"low"}),null)})})}},9720:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});var a=n(5155),r=n(2115),l=n(1956),o=n.n(l);let s=r.memo(e=>{let{size:t=0}=e,n=Math.max(0,Math.min(1,t)),{baseSize:l,spikeLength:o,coreSize:s,blurAmount:c,hazeRays:i,spikeRays:d,glowSize:u,getAmberBlueColor:h}=(0,r.useMemo)(()=>{let e=16+84*n,t=e*(4+.6*n),a=e*(.25+.1*n),r=.5+1.5*n,l=Array.from({length:8},()=>{let t=.2+.01*Math.random();return{angle:360*Math.random(),length:e*(.3+.6*n)*(1.5+.5*Math.random()),width:1+20*Math.random(),color:Math.random()>.5?"rgba(255, 220, 180, ".concat(t,")"):"rgba(180, 200, 255, ".concat(t,")")}}),o=Array.from({length:4},()=>({angle:360*Math.random(),length:.75*e*(.1+.4*n)*(1+.5*Math.random()),width:2+10*Math.random(),color:"rgba(255, 255, 255, ".concat(.1+.01*Math.random(),")")}));return{baseSize:e,spikeLength:t,coreSize:a,blurAmount:r,hazeRays:l,spikeRays:o,glowSize:40*n,getAmberBlueColor:(e,t)=>t?"rgba(255, ".concat(255-64*n,", ").concat(255-192*n,", ").concat(e,")"):"rgba(".concat(255-150*n,", ").concat(255-150*n,", 255, ").concat(e,")")}},[n]),m="blur(".concat(c,"px) drop-shadow(0 0 ").concat(u,"px rgba(255, 255, 255, 1))");return(0,a.jsxs)("div",{className:"relative",style:{width:"".concat(l,"px"),height:"".concat(l,"px")},children:[(0,a.jsx)("div",{className:"absolute top-1/2 left-1/2",style:{width:"".concat(2+4*n,"px"),height:"".concat(o*n*2+20,"px"),transform:"translate(-50%, -50%) rotate(".concat(6*n,"deg)"),background:"linear-gradient(180deg, \n            transparent 0%,\n            ".concat(h(.1,!1)," 10%,\n            ").concat(h(.8,!1)," 50%,\n            ").concat(h(.1,!1)," 90%,\n            transparent 100%\n          )")}}),(0,a.jsx)("div",{className:"absolute top-1/2 left-1/2",style:{width:"".concat(2+4*n,"px"),height:"".concat(o*n*2+20,"px"),transform:"translate(-50%, -50%) rotate(".concat(90+6*n,"deg)"),background:"linear-gradient(180deg, \n            transparent 0%,\n            ".concat(h(.1,!1)," 10%,\n            ").concat(h(.8,!1)," 50%,\n            ").concat(h(.1,!1)," 90%,\n            transparent 100%\n          )"),filter:m}}),(0,a.jsx)("div",{className:"absolute top-1/2 left-1/2",style:{width:"".concat(2+4*n,"px"),height:"".concat(o*n*2+20,"px"),transform:"translate(-50%, -50%) rotate(".concat(6*n,"deg)"),background:"linear-gradient(100deg, \n            transparent 0%,\n            ".concat(h(.1,!0)," 30%,\n            ").concat(h(.8,!0)," 50%,\n            ").concat(h(0,!0)," 70%,\n            transparent 100%\n          )"),filter:m}}),(0,a.jsx)("div",{className:"absolute top-1/2 left-1/2",style:{width:"".concat(2+4*n,"px"),height:"".concat(o*n*2+20,"px"),transform:"translate(-50%, -50%) rotate(".concat(90+6*n,"deg)"),background:"linear-gradient(100deg, \n            transparent 0%,\n            ".concat(h(.1,!0)," 30%,\n            ").concat(h(.8,!0)," 50%,\n            ").concat(h(0,!0)," 70%,\n            transparent 100%\n          )"),filter:m}}),(0,a.jsx)("div",{className:"absolute inset-0",children:i.map((e,t)=>(0,a.jsx)("div",{className:"absolute top-1/2 left-1/2",style:{width:"".concat(e.width,"px"),height:"".concat(e.length,"px"),transform:"translate(-50%, -50%) rotate(".concat(e.angle,"deg)"),background:"linear-gradient(180deg, transparent 0%, ".concat(e.color," 50%, transparent 100%)"),filter:"blur(".concat(.8*c,"px)")}},"ray-".concat(t)))}),(0,a.jsx)("div",{className:"absolute top-1/2 left-1/2 rounded-full",style:{width:"".concat(s,"px"),height:"".concat(s,"px"),transform:"translate(-50%, -50%)",background:"white",filter:"blur(".concat(.5*c,"px)")}})]})}),c=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim()};var d={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let u=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:a=24,strokeWidth:l=2,absoluteStrokeWidth:o,className:s="",children:c,iconNode:u,...h}=e;return(0,r.createElement)("svg",{ref:t,...d,width:a,height:a,stroke:n,strokeWidth:o?24*Number(l)/Number(a):l,className:i("lucide",s),...h},[...u.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(c)?c:[c]])}),h=((e,t)=>{let n=(0,r.forwardRef)((n,a)=>{let{className:l,...o}=n;return(0,r.createElement)(u,{ref:a,iconNode:t,className:i("lucide-".concat(c(e)),l),...o})});return n.displayName="".concat(e),n})("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),m=e=>{let{scrollDecimal:t}=e,n=Math.max(0,1-t/50);return(0,a.jsxs)("div",{className:"fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center",style:{opacity:n},children:[(0,a.jsx)("div",{className:"text-white text-xl text-sm mb-2",children:"Scroll to enter..."}),(0,a.jsx)("div",{className:"animate-bounce",children:(0,a.jsx)(h,{className:"text-white w-6 h-6"})})]})},f=e=>{let{text:t,className:n}=e;return(0,a.jsx)("h1",{className:"text-3xl font-bold text-white ".concat(n),children:t})},x=e=>{let{className:t}=e;return(0,a.jsx)("a",{className:"".concat(t),href:"mailto:contact@electroniclife.ai",children:"Contact Us"})},g=e=>{let{title_text:t}=e;return(0,a.jsxs)("header",{className:"pt-4",children:[(0,a.jsx)(f,{text:t,className:"mt-12 ml-12 mb-8 "}),(0,a.jsx)(x,{className:"ml-12 text-xl underline text-white hover:text-blue-800"})]})},p=e=>{let{className:t}=e;return(0,a.jsx)("footer",{className:"p-12 ".concat(t),children:(0,a.jsx)("p",{className:"text-sm text-white",children:"\xa9 2024 S. Manghani, E. D’Souza, T. Savage"})})},b=e=>{let{scale:t,onInit:n}=e,l=(0,r.useRef)(null),o=(0,r.useRef)(Array.from({length:500},()=>({x:0,y:0,size:0,blueAmount:0,opacity:0}))),s=(0,r.useCallback)(()=>{let e=Math.min(500,window.innerWidth/4);o.current=Array.from({length:e},()=>({x:4e3*Math.random(),y:3e3*Math.random(),size:2+3*Math.random(),blueAmount:Math.random(),opacity:.4+.3*Math.random()}))},[]),c=(0,r.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=l.current;if(!t)return;let n=t.getContext("2d");if(!n)return;let a=o.current,r=window.devicePixelRatio||1,s=t.getBoundingClientRect();t.width=s.width*r,t.height=s.height*r,n.clearRect(0,0,t.width,t.height),n.scale(r,r),n.translate(t.width/(2*r),t.height/(2*r)),n.scale(e,e),n.translate(-t.width/(2*r),-t.height/(2*r)),a.forEach(e=>{n.beginPath(),n.arc(e.x*(t.width/4e3/r),e.y*(t.height/3e3/r),e.size/2.5,0,2*Math.PI),n.fillStyle="rgba(".concat(Math.floor(255-100*e.blueAmount),",").concat(Math.floor(255-100*e.blueAmount),",255,").concat(e.opacity,")"),n.fill()})},[]);return(0,r.useEffect)(()=>{0===o.current[0].x&&(s(),n&&n());let e=new ResizeObserver(()=>{requestAnimationFrame(()=>c(t))});return l.current&&e.observe(l.current),requestAnimationFrame(()=>c(t)),()=>e.disconnect()},[s,c,t,n]),(0,r.useEffect)(()=>{c(t)},[t,c]),(0,a.jsx)("canvas",{ref:l,className:"absolute top-0 left-0 w-full h-full",style:{background:"black"}})},w=()=>{let[e,t]=(0,r.useState)(.5),[n,l]=(0,r.useState)(0),[o,c]=(0,r.useState)(!1),i=(0,r.useRef)(null),d=(0,r.useCallback)(()=>{null!==i.current&&cancelAnimationFrame(i.current),i.current=window.requestAnimationFrame(()=>{let e=Math.min(Math.max(Math.max(0,window.scrollY)/(document.documentElement.scrollHeight-window.innerHeight),0),1);t(20+200*e),e>.9?l((e-.9)/.09999999999999998):l(0)})},[]);if((0,r.useEffect)(()=>(c(!0),window.addEventListener("scroll",d),()=>{window.removeEventListener("scroll",d),null!==i.current&&cancelAnimationFrame(i.current)}),[d]),!o)return(0,a.jsxs)("div",{className:"relative w-full",children:[(0,a.jsx)("div",{className:"h-screen"}),(0,a.jsx)("div",{className:"h-screen"})]});let u={x:"50%",y:"50%"};return(0,a.jsxs)("div",{className:"relative w-full",children:[(0,a.jsx)("div",{className:"h-screen"}),(0,a.jsx)("div",{className:"fixed top-0 left-0 w-full h-screen bg-black overflow-hidden",children:(0,a.jsxs)("div",{className:"relative w-full h-full",children:[(0,a.jsx)(b,{scale:1+e/1e3,onInit:()=>d()}),(0,a.jsx)("div",{className:"absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-400",style:{left:u.x,top:u.y,transform:"translate(-50%, -50%)"},children:(0,a.jsx)(s,{size:e/220})}),(0,a.jsx)(m,{scrollDecimal:e})]})}),(0,a.jsx)("div",{className:"relative transition-opacity duration-600 ".concat(n>.5?"pointer-events-auto":"pointer-events-none"),style:{opacity:Math.max(0,(n-.5)*2),marginTop:"200vh"},children:(0,a.jsxs)("div",{className:"bg-transparent min-h-screen",children:[(0,a.jsx)(g,{title_text:"ELECTRONIC LIFE"}),(0,a.jsx)(p,{className:"fixed bottom-0 w-full"})]})})]})},v=o()(()=>Promise.resolve(w),{ssr:!1})}},e=>{var t=t=>e(e.s=t);e.O(0,[441,517,358],()=>t(4996)),_N_E=e.O()}]);