(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{4996:(t,e,a)=>{Promise.resolve().then(a.bind(a,1320))},1320:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>f});var n=a(5155),r=a(2115);let c=t=>{let{size:e=0}=t,a=Math.max(0,Math.min(1,e)),r=16+84*a,c=r*(4+.6*a),l=r*(.25+.1*a),o=.5+1.5*a,s=r*(.2+.4*a),i=.75*r*(.1+.4*a),d=(t,e)=>e?"rgba(".concat(255,", ").concat(255-64*a,", ").concat(255-192*a,", ").concat(t,")"):"rgba(".concat(255-150*a,", ").concat(255-150*a,", ").concat(255,", ").concat(t,")"),h=t=>Math.random()>.5?"rgba(255, 220, 180, ".concat(t,")"):"rgba(180, 200, 255, ".concat(t,")"),m=t=>"rgba(255, 255, 255, ".concat(t,")"),x=m(1),u=Array.from({length:16},()=>({angle:360*Math.random(),length:s*(1.5+.5*Math.random()),width:1+20*Math.random(),opacity:.075+.01*Math.random()})),p=Array.from({length:8},()=>({angle:360*Math.random(),length:i*(1+.5*Math.random()),width:2+10*Math.random(),opacity:.1+.01*Math.random()}));return(0,n.jsxs)("div",{className:"relative",style:{width:"".concat(r,"px"),height:"".concat(r,"px"),filter:"drop-shadow(0 0 ".concat(40*a,"px ").concat(x,")")},children:[[0,90].map(t=>(0,n.jsx)("div",{className:"absolute top-1/2 left-1/2",style:{width:"".concat(2+4*a,"px"),height:"".concat(c*a*2+20,"px"),transform:"translate(-50%, -50%) rotate(".concat(t+6*a,"deg)"),background:"linear-gradient(180deg, \n              transparent 0%,\n              ".concat(d(.1,!1)," 10%,\n              ").concat(d(.8,!1)," 50%,\n              ").concat(d(.1,!1)," 90%,\n              transparent 100%\n            )"),filter:"blur(".concat(o,"px)")}},"spike-".concat(t))),[-0,90].map(t=>(0,n.jsx)("div",{className:"absolute top-1/2 left-1/2",style:{width:"".concat(2+4*a,"px"),height:"".concat(c*a*2+20,"px"),transform:"translate(-50%, -50%) rotate(".concat(t+6*a,"deg)"),background:"linear-gradient(100deg, \n              transparent 0%,\n              ".concat(d(.1,!0)," 30%,\n              ").concat(d(.8,!0)," 50%,\n              ").concat(d(0,!0)," 70%,\n              transparent 100%\n            )"),filter:"blur(".concat(o,"px)")}},"spike-".concat(t))),u.map((t,e)=>(0,n.jsx)("div",{className:"absolute top-1/2 left-1/2",style:{width:"".concat(t.width,"px"),height:"".concat(t.length,"px"),transform:"translate(-50%, -50%) rotate(".concat(t.angle,"deg)"),background:"linear-gradient(180deg, \n              transparent 0%,\n              ".concat(h(t.opacity)," 20%,\n              ").concat(h(1.5*t.opacity)," 50%,\n              ").concat(h(t.opacity)," 80%,\n              transparent 100%\n            )"),filter:"blur(".concat(.8*o,"px)")}},"haze-ray-".concat(e))),p.map((t,e)=>(0,n.jsx)("div",{className:"absolute top-1/2 left-1/2",style:{width:"".concat(t.width,"px"),height:"".concat(t.length,"px"),transform:"translate(-50%, -50%) rotate(".concat(t.angle,"deg)"),background:"linear-gradient(180deg, \n              transparent 0%,\n              white 20%,\n              white 50%,\n              ".concat(h(t.opacity)," 100%,\n              transparent 100%\n            )"),filter:"blur(".concat(.7*o,"px)")}},"white-ray-".concat(e))),(0,n.jsx)("div",{className:"absolute top-1/2 left-1/2 rounded-full",style:{width:"".concat(l,"px"),height:"".concat(l,"px"),transform:"translate(-50%, -50%)",background:m(1),filter:"blur(".concat(.5*o,"px)")}})]})},l=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=function(){for(var t=arguments.length,e=Array(t),a=0;a<t;a++)e[a]=arguments[a];return e.filter((t,e,a)=>!!t&&""!==t.trim()&&a.indexOf(t)===e).join(" ").trim()};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,r.forwardRef)((t,e)=>{let{color:a="currentColor",size:n=24,strokeWidth:c=2,absoluteStrokeWidth:l,className:i="",children:d,iconNode:h,...m}=t;return(0,r.createElement)("svg",{ref:e,...s,width:n,height:n,stroke:a,strokeWidth:l?24*Number(c)/Number(n):c,className:o("lucide",i),...m},[...h.map(t=>{let[e,a]=t;return(0,r.createElement)(e,a)}),...Array.isArray(d)?d:[d]])}),d=((t,e)=>{let a=(0,r.forwardRef)((a,n)=>{let{className:c,...s}=a;return(0,r.createElement)(i,{ref:n,iconNode:e,className:o("lucide-".concat(l(t)),c),...s})});return a.displayName="".concat(t),a})("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),h=t=>{let{scrollDecimal:e}=t,a=Math.max(0,1-e/50);return(0,n.jsxs)("div",{className:"fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center",style:{opacity:a},children:[(0,n.jsx)("div",{className:"text-white text-xl text-sm mb-2",children:"Scroll to enter..."}),(0,n.jsx)("div",{className:"animate-bounce",children:(0,n.jsx)(d,{className:"text-white w-6 h-6"})})]})},m=t=>{let{text:e,className:a}=t;return(0,n.jsx)("h1",{className:"text-3xl font-bold text-white ".concat(a),children:e})},x=t=>{let{className:e}=t;return(0,n.jsx)("a",{className:"".concat(e),href:"mailto:contact@electroniclife.ai",children:"Contact Us"})},u=t=>{let{title_text:e}=t;return(0,n.jsxs)("header",{className:"pt-4",children:[(0,n.jsx)(m,{text:e,className:"mt-12 ml-12 mb-8 "}),(0,n.jsx)(x,{className:"ml-12 text-xl underline text-white hover:text-blue-800"})]})},p=t=>{let{className:e}=t;return(0,n.jsx)("footer",{className:"p-12 ".concat(e),children:(0,n.jsx)("p",{className:"text-sm text-white",children:"\xa9 2024 S. Manghani, E. D’Souza, T. Savage"})})},f=()=>{let[t,e]=(0,r.useState)(0),[a,l]=(0,r.useState)([]),[o,s]=(0,r.useState)(!1),[i,d]=(0,r.useState)(0),m=()=>{let t=Math.random();return{x:4e3*Math.random(),y:3e3*Math.random(),size:2+3*Math.random(),color:"rgb(\n      ".concat(Math.floor(255-100*t),",\n      ").concat(Math.floor(255-100*t),",\n      255\n    )"),opacity:.2+.3*Math.random()}},x=(0,r.useCallback)(()=>Array.from({length:1e3},m),[]),f=e=>{let a=e.x-2e3,n=e.y-1500,r=1+t/1e3;return{x:a*r+2e3,y:n*r+1500}},g=(e,a)=>{let n=Math.sqrt(Math.pow(a.x-2e3,2)+Math.pow(a.y-1500,2))/Math.sqrt(625e4);return Math.min(e.opacity*(1+t/200)*(1-.3*n),1)};if((0,r.useEffect)(()=>{s(!0),l(x()),e(.5)},[x]),(0,r.useEffect)(()=>{if(!o)return;let t=()=>{let t=Math.min(Math.max(Math.max(0,window.scrollY)/(document.documentElement.scrollHeight-window.innerHeight),0),1);e(20+200*t),t>.9?d((t-.9)/.09999999999999998):d(0)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[o]),!o)return(0,n.jsxs)("div",{className:"relative w-full",children:[(0,n.jsx)("div",{className:"h-screen"}),(0,n.jsx)("div",{className:"h-screen"})]});let w={x:"".concat(50,"%"),y:"".concat(50,"%")};return(0,n.jsxs)("div",{className:"relative w-full",children:[(0,n.jsx)("div",{className:"h-screen"}),(0,n.jsx)("div",{className:"fixed top-0 left-0 w-full h-screen bg-black overflow-hidden",children:(0,n.jsxs)("div",{className:"relative w-full h-full",children:[(0,n.jsx)("svg",{viewBox:"0 0 ".concat(4e3," ").concat(3e3),className:"absolute top-0 left-0 w-full h-full",style:{background:"black"},preserveAspectRatio:"xMidYMid slice",children:a.map((t,e)=>{let a=f(t),r=g(t,a);return(0,n.jsx)("circle",{cx:a.x,cy:a.y,r:t.size,fill:t.color,opacity:r},"bg-".concat(e))})}),(0,n.jsx)("div",{className:"absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-400",style:{left:w.x,top:w.y,transform:"translate(-50%, -50%)"},children:(0,n.jsx)(c,{size:t/220})}),(0,n.jsx)(h,{scrollDecimal:t})]})}),(0,n.jsx)("div",{className:"relative transition-opacity duration-600 ".concat(i>.5?"pointer-events-auto":"pointer-events-none"),style:{opacity:Math.max(0,(i-.5)*2),marginTop:"200vh"},children:(0,n.jsxs)("div",{className:"bg-transparent min-h-screen",children:[(0,n.jsx)(u,{title_text:"ELECTRONIC LIFE"}),(0,n.jsx)(p,{className:"fixed bottom-0 w-full"})]})})]})}}},t=>{var e=e=>t(t.s=e);t.O(0,[441,517,358],()=>e(4996)),_N_E=t.O()}]);