(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{4996:(e,t,c)=>{Promise.resolve().then(c.bind(c,5241))},5241:(e,t,c)=>{"use strict";c.r(t),c.d(t,{default:()=>k});var n=c(5155),r=c(2115),a=c.t(r,2);let i=e=>{let{size:t=0}=e,c=Math.max(0,Math.min(1,t)),a=(0,r.useMemo)(()=>{let e=300*c-20,t=20*c,n=50*c,r=4*c,a=Math.round(255-164*c),i=Math.round(255-160*c),s="rgb(20, 20, ".concat(a,")"),o="rgb(240, ".concat(i,", ").concat(a,")"),l=[];for(let e=0;e<17;e++){let e="rgb(".concat(130,", ").concat(10+.5*i,", ").concat(.5*a+.5*a,")");l.push(e)}return{spikeLength:e,coreSize:t,glowSize:n,spikeWidth:r,blueColor:s,amberColor:o,hazeColours:l}},[c]);return(0,n.jsxs)("svg",{width:"1000",height:"1000",viewBox:"-500 -500 1000 1000",children:[(0,n.jsxs)("defs",{children:[(0,n.jsx)("filter",{id:"spike-blur",x:"-100%",y:"-100%",width:"300%",height:"300%",children:(0,n.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"2"})}),(0,n.jsxs)("radialGradient",{id:"glowGradient",cx:"50%",cy:"50%",r:"50%",children:[(0,n.jsx)("stop",{offset:"0%",stopColor:"white",stopOpacity:"1"}),(0,n.jsx)("stop",{offset:"100%",stopColor:a.blueColor,stopOpacity:"0.1"})]}),(0,n.jsxs)("radialGradient",{id:"coreGradient",cx:"50%",cy:"50%",r:"95%",children:[(0,n.jsx)("stop",{offset:"0%",stopColor:"white"}),(0,n.jsx)("stop",{offset:"80%",stopColor:"white",stopOpacity:"0.8"}),(0,n.jsx)("stop",{offset:"100%",stopColor:a.blueColor,stopOpacity:"0.6"})]})]}),[...Array(6)].map((e,t)=>{let c=(360*t/6+90)*Math.PI/180,r=Math.cos(c),i=Math.sin(c),s=1.5*a.spikeWidth;return"\n          M ".concat(a.spikeLength*r," ").concat(a.spikeLength*i,"\n          L ").concat(s*i+a.coreSize*r," ").concat(-s*r+a.coreSize*i,"\n          L ").concat(-s*i+a.coreSize*r," ").concat(s*r+a.coreSize*i,"\n          Z\n        "),(0,n.jsxs)("g",{children:[(0,n.jsx)("path",{d:"\n                M ".concat(1.5*a.spikeLength*r," ").concat(1.5*a.spikeLength*i,"\n                L ").concat(1.5*s*i+a.coreSize*r," ").concat(-(1.5*s)*r+a.coreSize*i,"\n                L ").concat(-(1.5*s)*i+a.coreSize*r," ").concat(1.5*s*r+a.coreSize*i,"\n                Z\n              "),fill:a.blueColor,opacity:"0.8",filter:"url(#spike-blur)"}),(0,n.jsx)("path",{d:"\n                M ".concat(1*a.spikeLength*r," ").concat(1*a.spikeLength*i,"\n                L ").concat(1*s*i+a.coreSize*r," ").concat(-(1*s)*r+a.coreSize*i,"\n                L ").concat(-(1*s)*i+a.coreSize*r," ").concat(1*s*r+a.coreSize*i,"\n                Z\n              "),fill:a.amberColor,opacity:"0.8",filter:"url(#spike-blur)"})]},t)}),[...Array(17)].map((e,t)=>{let c=(360*t/17+8)*Math.PI/180,r=Math.cos(c),i=Math.sin(c),s=4*a.spikeWidth;return"\n          M ".concat(a.spikeLength*r," ").concat(a.spikeLength*i,"\n          L ").concat(s*i+a.coreSize*r," ").concat(-s*r+a.coreSize*i,"\n          L ").concat(-s*i+a.coreSize*r," ").concat(s*r+a.coreSize*i,"\n          Z\n        "),(0,n.jsx)("g",{children:(0,n.jsx)("path",{d:"\n                M ".concat(.25*a.spikeLength*r," ").concat(.25*a.spikeLength*i,"\n                L ").concat(.25*s*i+a.coreSize*r," ").concat(-(.25*s)*r+a.coreSize*i,"\n                L ").concat(-(.25*s)*i+a.coreSize*r," ").concat(.25*s*r+a.coreSize*i,"\n                Z\n              "),fill:a.hazeColours[t],opacity:"0.6",filter:"url(#spike-blur)"})},t)}),[void 0,void 0].map((e,t)=>{let c=360*t/2*Math.PI/180,r=Math.cos(c),i=Math.sin(c),s=3*a.spikeWidth;return"\n          M ".concat(a.spikeLength*r," ").concat(a.spikeLength*i,"\n          L ").concat(s*i+a.coreSize*r," ").concat(-s*r+a.coreSize*i,"\n          L ").concat(-s*i+a.coreSize*r," ").concat(s*r+a.coreSize*i,"\n          Z\n        "),(0,n.jsx)("g",{children:(0,n.jsx)("path",{d:"\n                M ".concat(.5*a.spikeLength*r," ").concat(.5*a.spikeLength*i,"\n                L ").concat(.5*s*i+a.coreSize*r," ").concat(-(.5*s)*r+a.coreSize*i,"\n                L ").concat(-(.5*s)*i+a.coreSize*r," ").concat(.5*s*r+a.coreSize*i,"\n                Z\n              "),fill:a.hazeColours[t],opacity:"1",filter:"url(#spike-blur)"})},t)}),(0,n.jsx)("circle",{cx:"0",cy:"0",r:a.glowSize,fill:"url(#glowGradient)",opacity:"0.7"}),(0,n.jsx)("circle",{cx:"0",cy:"0",r:.55*a.glowSize,fill:"white",opacity:"0.6",filter:"url(#spike-blur)"}),(0,n.jsx)("circle",{cx:"0",cy:"0",r:1.1*a.coreSize,fill:"url(#coreGradient)"}),[...Array(6)].map((e,t)=>{let c=(360*t/6+90)*Math.PI/180,r=Math.cos(c),i=Math.sin(c),s=5*a.spikeWidth;return"\n          M ".concat(a.spikeLength*r," ").concat(a.spikeLength*i,"\n          L ").concat(s*i+a.coreSize*r," ").concat(-s*r+a.coreSize*i,"\n          L ").concat(-s*i+a.coreSize*r," ").concat(s*r+a.coreSize*i,"\n          Z\n        "),(0,n.jsx)("g",{children:(0,n.jsx)("path",{d:"\n                M ".concat(.2*a.spikeLength*r," ").concat(.2*a.spikeLength*i,"\n                L ").concat(.2*s*i+a.coreSize*r," ").concat(-(.2*s)*r+a.coreSize*i,"\n                L ").concat(-(.2*s)*i+a.coreSize*r," ").concat(.2*s*r+a.coreSize*i,"\n                Z\n              "),fill:"white",opacity:"1",filter:"url(#spike-blur)"})},t)})]})};i.displayName="Star";var s=c(8532);let o=e=>{let{scrollDecimal:t}=e,c=Math.max(0,1-t/50);return(0,n.jsxs)("div",{className:"fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center",style:{opacity:c},children:[(0,n.jsx)("div",{className:"text-white text-xl text-sm mb-2",children:"Scroll to explore"}),(0,n.jsx)("div",{className:"animate-bounce",children:(0,n.jsx)(s.A,{className:"text-white w-6 h-6"})})]})},l=e=>{let{text:t,className:c}=e;return(0,n.jsx)("h1",{className:"text-3xl font-bold text-white ".concat(c),children:t})},h=e=>{let{className:t}=e;return(0,n.jsx)("a",{className:"".concat(t),href:"mailto:contact@electroniclife.ai",children:"Contact Us"})},d=e=>{let{title_text:t}=e;return(0,n.jsxs)("header",{className:"pt-4",children:[(0,n.jsx)(l,{text:t,className:"mt-12 ml-12 mb-2 "}),(0,n.jsx)("h1",{className:"text-xl text-white ml-12 mb-2 ",children:(0,n.jsx)("i",{children:"A Creative Research Studio"})}),(0,n.jsx)(h,{className:"ml-12 text-xl underline text-white hover:text-blue-400"})]})},u=e=>{let{className:t}=e;return(0,n.jsx)("footer",{className:"p-12 ".concat(t),children:(0,n.jsx)("p",{className:"text-sm text-white",children:"\xa9 2024 S. Manghani, E. D’Souza, T. Savage"})})};var m=c(8640),x=c.n(m);let{useState:p,useEffect:f,useCallback:g,useMemo:j,useRef:w}=a,v=e=>e*e,S=()=>{let e=w(!1),[t,c]=p(!1);return f(()=>{let t=()=>{let t=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||window.innerWidth<768;t!==e.current&&(e.current=t,c(t))};t();let n=x()(t,500);return window.addEventListener("resize",n,{passive:!0}),()=>window.removeEventListener("resize",n)},[]),t},z=e=>{let{canvasRef:t,pointsRef:c,isMobile:n,scale:r}=e,a=w(null),i=w(0),s=1e3/(n?30:60),o=g(()=>{let e=performance.now();if(e-i.current<s){a.current=requestAnimationFrame(o);return}let n=t.current;if(!n)return;let l=n.getContext("2d",{alpha:!1});if(!l)return;let h=c.current,d=n.getBoundingClientRect();(n.width!==d.width||n.height!==d.height)&&(n.width=d.width,n.height=d.height),l.clearRect(0,0,n.width,n.height),n.style.transform="scale(".concat(r,")"),h.forEach(e=>{let t=e.x*(d.width/1600),c=e.y*(d.height/1200),n=Math.round(255-100*e.blueAmount),r=Math.round(255-100*e.blueAmount);l.beginPath(),l.arc(t,c,e.size,0,2*Math.PI),l.fillStyle="rgba(".concat(n,", ").concat(r,", ").concat(255,", ").concat(e.opacity,")"),l.fill()}),i.current=e,a.current=requestAnimationFrame(o)},[r,n,s]);return{drawPoints:o,animationFrameRef:a}},L=r.memo(e=>{let{scale:t,onInit:c}=e,r=w(null),a=w([]),i=S(),{drawPoints:s,animationFrameRef:o}=z({canvasRef:r,pointsRef:a,isMobile:i,scale:t});return f(()=>{let e=i?100:300;a.current=Array.from({length:e},()=>({x:1600*Math.random(),y:1200*Math.random(),size:.5+2*Math.random(),blueAmount:Math.random(),opacity:.2+.8*Math.random()})),c&&c()},[i,c]),f(()=>{let e=new ResizeObserver(x()(()=>{o.current&&cancelAnimationFrame(o.current),o.current=requestAnimationFrame(s)},250));return r.current&&(e.observe(r.current),s()),()=>{e.disconnect(),o.current&&cancelAnimationFrame(o.current)}},[s]),(0,n.jsx)("canvas",{ref:r,className:"absolute top-0 left-0 w-full h-full bg-black",style:{willChange:"transform",touchAction:"pan-y",transform:"scale(".concat(t,")"),transformOrigin:"center center"}})});L.displayName="CanvasPoints";let M=r.memo(()=>(0,n.jsxs)("div",{className:"relative w-full h-full",children:[(0,n.jsx)(d,{title_text:"ELECTRONIC LIFE"}),(0,n.jsx)(u,{className:"absolute w-full"})]}));function k(){let[e,t]=p({progress:0,decimal:0}),[c,r]=p(!1),a=S(),s=w({lastScrollY:0,ticking:!1}),l=g(()=>{s.current.ticking||(s.current.ticking=!0,requestAnimationFrame(()=>{let e=window.scrollY,c=Math.min(Math.max(e/(document.documentElement.scrollHeight-window.innerHeight),0),1),n=v(c);t({progress:c,decimal:50+600*n}),s.current.lastScrollY=e,s.current.ticking=!1}))},[]);if(f(()=>(r(!0),l(),window.addEventListener("scroll",l,{passive:!0}),()=>window.removeEventListener("scroll",l)),[l]),!c)return(0,n.jsxs)("div",{className:"relative w-full",children:[(0,n.jsx)("div",{className:"h-screen"}),(0,n.jsx)("div",{className:"h-screen"}),(0,n.jsx)("div",{className:"h-screen"}),(0,n.jsx)("div",{className:"h-screen"})]});let h=e.decimal/440,d=1+e.decimal/(a?2e3:1e3),u=Math.max(0,Math.min(1,(e.progress-.95)*20));return(0,n.jsxs)("div",{className:"relative w-full",children:[(0,n.jsx)("div",{className:"h-screen"}),(0,n.jsx)("div",{className:"h-screen"}),(0,n.jsx)("div",{className:"fixed top-0 left-0 w-full h-screen bg-black overflow-hidden",children:(0,n.jsxs)("div",{className:"relative w-full h-full",children:[(0,n.jsx)(L,{scale:d}),(0,n.jsx)("div",{className:"absolute left-1/2 top-1/2 will-change-transform",style:{transform:"translate(-50%, -50%) scale(".concat(a?.6:1,")")},children:(0,n.jsx)(i,{size:h})}),(0,n.jsx)(o,{scrollDecimal:e.decimal/3}),(0,n.jsx)("div",{className:"transition-opacity duration-1000",style:{opacity:u},children:(0,n.jsx)(M,{})})]})}),(0,n.jsx)("div",{className:"h-screen"}),(0,n.jsx)("div",{className:"h-screen"}),(0,n.jsx)("div",{className:"h-screen"})]})}M.displayName="HeaderFooter"}},e=>{var t=t=>e(e.s=t);e.O(0,[339,441,517,358],()=>t(4996)),_N_E=e.O()}]);