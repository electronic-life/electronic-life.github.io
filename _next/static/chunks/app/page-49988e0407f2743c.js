(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{4996:(e,t,s)=>{Promise.resolve().then(s.bind(s,5655))},5655:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>g});var a=s(5155),i=s(2115),r=s(5752),n=s(9374);let l=e=>{let{size:t=0}=e,s=.5*Math.max(0,Math.min(1,t)),r=(0,i.useMemo)(()=>{let e=600*s-20,t=20*s,a=50*s,i=3*s,r=Math.round(255-100*s),n=Math.round(255-100*s);return{spikeLength:e,coreSize:t,glowSize:a,spikeWidth:i,blueColor:"rgb(0,0 ".concat(r,")"),amberColor:"rgb(".concat(n,",200, 200)"),rotationAmount:0}},[s]);return(0,a.jsxs)("svg",{width:"1000",height:"1000",viewBox:"-500 -500 1000 1000",xmlns:"http://www.w3.org/2000/svg",style:{transform:"rotate("+r.rotationAmount+"deg)"},children:[(0,a.jsxs)("defs",{children:[(0,a.jsx)("filter",{id:"spike-blur",x:"-100%",y:"-100%",width:"300%",height:"300%",children:(0,a.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"1"})}),(0,a.jsxs)("radialGradient",{id:"glowGradient",cx:"50%",cy:"50%",r:"50%",children:[(0,a.jsx)("stop",{offset:"0%",stopColor:"white",stopOpacity:"1"}),(0,a.jsx)("stop",{offset:"100%",stopColor:r.blueColor,stopOpacity:"0.1"})]}),(0,a.jsxs)("radialGradient",{id:"coreGradient",cx:"50%",cy:"50%",r:"95%",children:[(0,a.jsx)("stop",{offset:"0%",stopColor:"white"}),(0,a.jsx)("stop",{offset:"100%",stopColor:r.blueColor,stopOpacity:"0.6"})]})]}),[...Array(6)].map((e,t)=>{let s=(360*t/6+90)*Math.PI/180,i=Math.cos(s),n=Math.sin(s),l=1.5*r.spikeWidth,o="\n          M ".concat(r.spikeLength*i," ").concat(r.spikeLength*n,"\n          L ").concat(l*n+r.coreSize*i," ").concat(-l*i+r.coreSize*n,"\n          L ").concat(-l*n+r.coreSize*i," ").concat(l*i+r.coreSize*n,"\n          Z\n        ");return(0,a.jsx)("g",{children:(0,a.jsx)("path",{d:o,fill:r.amberColor,opacity:"1"})},t)}),[void 0,void 0].map((e,t)=>{let s=360*t/2*Math.PI/180,i=Math.cos(s),n=Math.sin(s),l=3*r.spikeWidth,o="\n                M ".concat(.55*r.spikeLength*i," ").concat(.55*r.spikeLength*n,"\n                L ").concat(.55*l*n+r.coreSize*i," ").concat(-(.55*l)*i+r.coreSize*n,"\n                L ").concat(-(.55*l)*n+r.coreSize*i," ").concat(.55*l*i+r.coreSize*n,"\n                Z\n              ");return(0,a.jsx)("g",{children:(0,a.jsx)("path",{d:o,fill:"rgb(255,255,255)",opacity:"1"})},t)}),(0,a.jsx)("circle",{cx:"0",cy:"0",r:1.1*r.coreSize,fill:"rgb(255, 252, 247)"}),(0,a.jsx)("circle",{cx:"0",cy:"0",r:.55*r.glowSize,fill:"rgb(255, 247, 236)",opacity:"0.6"}),[...Array(6)].map((e,t)=>{let s=(360*t/6+90)*Math.PI/180,i=Math.cos(s),n=Math.sin(s),l=10*r.spikeWidth,o="\n                M ".concat(.25*r.spikeLength*i," ").concat(.25*r.spikeLength*n,"\n                L ").concat(.25*l*n+r.coreSize*i," ").concat(-(.25*l)*i+r.coreSize*n,"\n                L ").concat(-(.25*l)*n+r.coreSize*i," ").concat(.25*l*i+r.coreSize*n,"\n                Z\n              ");return(0,a.jsx)("g",{children:(0,a.jsx)("path",{d:o,fill:"white",opacity:"1"})},t)})]})};l.displayName="Star";let o=e=>{let{color:t=1,size:s=1,rotation:r=0,distortion:n=0,centeredRadius:l=0,isMobile:o=!1}=e,{primaryColor:c}=(0,i.useMemo)(()=>{let e=Math.max(0,Math.min(1,t)),s=[205,50,50],a=[255,150,0].map((t,a)=>Math.round((1-e)*t+e*s[a]));return{primaryColor:"rgb(".concat(a.join(", "),")")}},[t]),d=(0,i.useMemo)(()=>{let e=Math.max(0,Math.min(1,s)),t=Math.max(.001,Math.min(1,n)),a=o?20:64,i=2*Math.PI/a,r=Array.from({length:a+1},(e,t)=>t*i),c=r.map(e=>Math.sin(e)),d=r.map(e=>Math.cos(e));return{baseRadius:110*e,dist:1*t/Math.max(.001,1.75*l**2),angles:r,sinValues:c,cosValues:d,numPoints:a}},[s,n,l,o]),h=(0,i.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,{baseRadius:t,dist:s,sinValues:a,cosValues:i,numPoints:r}=d,n=t*e,l=1+2*s,o=1/l,c=[];for(let e=0;e<=r;e++){let t=n*i[e]*o,r=n*a[e]*l,d=t+r*r*s*.01;c.push("".concat(d,",").concat(r))}return"M ".concat(c.join(" L ")," Z")},[d]),u=(0,i.useMemo)(()=>({path2:h(1),path3:h(4),path4:h(2)}),[h,o]);return(0,a.jsxs)("svg",{width:"1000",height:"1000",viewBox:"-500 -500 1000 1000",xmlns:"http://www.w3.org/2000/svg",style:{transform:"rotate(".concat(r,"deg)")},children:[(0,a.jsx)("defs",{children:(0,a.jsx)("filter",{id:"galaxyBlur",children:(0,a.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"4"})})}),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("path",{d:u.path2,fill:"white",opacity:1}),(0,a.jsx)("path",{d:u.path3,fill:"white",opacity:.08}),(0,a.jsx)("path",{d:u.path4,fill:c,opacity:.65})]})]})};o.displayName="Galaxy";let c=(e,t)=>e.map((e,s)=>{let a=2*s*Math.PI/3+e.offset,i=e.radius*t,r=50+Math.cos(a)*i,n=50+Math.sin(a)*i;return{left:"".concat(r,"%"),top:"".concat(n,"%"),angle:a,galaxyRadius:i,transform:"translate(-50%, -50%) scale(".concat(t,")"),color:e.color,size:e.size,initialdist:e.initialdist}}),d=i.memo(e=>{let{isMobile:t,starVisualState:s,scale:r=1.2,children:n}=e,d=(0,i.useRef)([{color:.9430922818612874,radius:23.09134685194573,offset:5.952903634814243,size:.5120802169648176},{color:.2866895967234122,radius:15.37152248703324,offset:4.607660682566115,size:.5843049276927211},{color:.7264764111384534,radius:19.83473021340826,offset:6.28302882438003,size:.5967083752367214},{color:.055625980366973415,radius:24.33595916206409,offset:2.1,size:.5796641517202228}]),h=(0,i.useMemo)(()=>c(d.current,r),[r]),u=(0,i.useMemo)(()=>({transform:"translate(-50%, -50%) scale(".concat(t?.6*r:r,")")}),[t,r]),m=(0,i.useMemo)(()=>n?i.cloneElement(n,{galaxyPositions:h.map(e=>({left:e.left,top:e.top}))}):null,[n,h]),f=(0,i.useCallback)(e=>({color:e.color,size:(.05+e.size*s/6)/2,distortion:s/e.galaxyRadius*100,rotation:e.angle*(180/Math.PI)-180,centeredRadius:e.galaxyRadius/20,isMobile:t}),[s,t]);return(0,a.jsxs)("div",{className:"relative w-full h-full",children:[h.map((e,t)=>(0,a.jsx)("div",{className:"absolute will-change-transform",style:{left:e.left,top:e.top,transform:e.transform,transformOrigin:"center center",backfaceVisibility:"hidden"},children:(0,a.jsx)(o,{...f(e)})},t)),(0,a.jsx)("div",{className:"absolute left-1/2 top-1/2 will-change-transform",style:u,children:(0,a.jsx)(l,{size:s/4})}),m]})});var h=s(6046);let u=e=>{let{scrollProgress:t,galaxyPositions:s}=e,r=(0,h.useRouter)(),n=Math.max(0,Math.min(1,(t-.74)*4)),[l,o]=(0,i.useState)([]),c=(0,i.useRef)([]),d=(0,i.useRef)(null),u=(0,i.useRef)([]),m=[{label:"Projects",link:"/research",offset:{x:-40,y:-80}},{label:"People",link:"/people",offset:{x:20,y:60}},{label:"Papers",link:"/papers",offset:{x:-90,y:60}},{label:"Approach",link:"/approach",offset:{x:-60,y:-100}}];if((0,i.useEffect)(()=>{let e=()=>{o(c.current.map(e=>{if(e){let t=e.getBoundingClientRect();return{width:t.width,height:t.height}}return{width:0,height:0}}))};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),!s||0===s.length)return null;let f=(e,t)=>{e.preventDefault(),e.stopPropagation();try{r.push(t)}catch(e){console.error("Navigation error:",e),window.location.href=t}};return(0,a.jsx)("div",{ref:d,className:"fixed inset-0 z-50 pointer-events-none",style:{opacity:n},children:s.slice(0,4).map((e,t)=>{var s,i;let r=m[t];return(0,a.jsxs)("div",{className:"absolute",style:{left:e.left,top:e.top,transform:"translate(-50%, -50%)",zIndex:60},children:[(0,a.jsx)("div",{ref:e=>{u.current[t]=e},className:"w-2 h-2"}),(0,a.jsx)("svg",{className:"absolute pointer-events-none",style:{width:"100%",height:"100%",overflow:"visible",top:0,left:0},children:(0,a.jsx)("line",{x1:0,y1:0,x2:r.offset.x+(r.offset.x<0&&(null===(s=l[t])||void 0===s?void 0:s.width)||0),y2:r.offset.y+(r.offset.y<0?(null===(i=l[t])||void 0===i?void 0:i.height)||0:10),stroke:"white",strokeWidth:"1",strokeOpacity:"0.8"})}),(0,a.jsx)("div",{ref:e=>{c.current[t]=e},className:"absolute",style:{transform:"translate(".concat(r.offset.x,"px, ").concat(r.offset.y,"px)"),zIndex:70},children:(0,a.jsx)("button",{onClick:e=>f(e,r.link),className:"block bg-black border border-white/80 px-2 py-1 hover:border-white/40 text-white/90 text-base cursor-pointer hover:text-white select-none pointer-events-auto",children:r.label})})]},t)})})};var m=s(5170);let f=e=>{let{scrollDecimal:t}=e;return(0,a.jsx)("div",{className:"fixed bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20 scale-2",style:{opacity:1-(t-50)/600},children:(0,a.jsxs)("div",{className:"text-white",style:{animation:"bounce 1s ease-in-out infinite",transform:"translateY(0px)"},children:[(0,a.jsx)("style",{children:"\n            @keyframes bounce {\n              0%, 100% {\n                transform: translateY(0px);\n              }\n              50% {\n                transform: translateY(-12px);\n              }\n            }\n          "}),(0,a.jsx)(m.A,{className:"text-white w-8 h-8"})]})})};var x=s(8640),p=s.n(x);let w=()=>{let[e,t]=(0,i.useState)({width:window.innerWidth,height:window.innerHeight});return(0,i.useEffect)(()=>{let e=p()(()=>{t({width:window.innerWidth,height:window.innerHeight})},250);return window.addEventListener("resize",e,{passive:!0}),e(),()=>window.removeEventListener("resize",e)},[]),e},v=i.memo(e=>{let{scrollProgress:t}=e,s=(0,i.useMemo)(()=>t>=.74?"opacity-100":"opacity-0",[t]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"fixed top-0 left-0 w-full transition-opacity duration-300 ".concat(s),children:(0,a.jsx)(r.A,{text_colour:"white"})}),(0,a.jsx)(n.A,{className:"fixed bottom-0 left-0 w-full transition-opacity duration-300 ".concat(s)})]})});function g(){let[e,t]=(0,i.useState)({progress:0,decimal:0}),[s,r]=(0,i.useState)(!1),n=w().width<768,[l,o]=(0,i.useState)(!1),c=(0,i.useRef)(void 0),h=(0,i.useRef)(0),m=(0,i.useRef)(Date.now()),x=(0,i.useRef)(null),p=(0,i.useCallback)(()=>{let e=Date.now(),s=window.scrollY,a=document.documentElement.scrollHeight-window.innerHeight;if(0===a)return;let i=Math.min(Math.max(s/a,0),1);h.current,m.current,h.current=s,m.current=e,t({progress:i,decimal:600*i})},[]),g=(0,i.useCallback)(()=>{c.current&&cancelAnimationFrame(c.current),c.current=requestAnimationFrame(p)},[p]);(0,i.useEffect)(()=>(r(!0),document.documentElement.style.overscrollBehavior="none",window.addEventListener("scroll",g,{passive:!0}),g(),()=>{c.current&&cancelAnimationFrame(c.current),document.documentElement.style.overscrollBehavior="",window.removeEventListener("scroll",g)}),[g]);let j={transform:"translateZ(0)",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",willChange:"transform"},y=(0,i.useMemo)(()=>1.2+e.decimal/600,[e.decimal]),b={...j,transform:"scale3d(".concat(y,", ").concat(y,", 1)"),willChange:"transform"},M=(0,i.useMemo)(()=>.05+e.decimal/440,[e.decimal]);return((0,i.useMemo)(()=>({...j,minWidth:"100vw",minHeight:"100vh",overflow:"hidden"}),[]),s)?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"relative w-full",children:[(0,a.jsx)("div",{className:"h-screen"}),(0,a.jsx)("div",{className:"h-screen"}),(0,a.jsxs)("div",{ref:x,className:"fixed top-0 left-0 w-full h-screen bg-black overflow-hidden",style:j,children:[(0,a.jsxs)("div",{className:"absolute inset-0 w-full h-full origin-center flex items-center justify-center",style:b,children:[(0,a.jsxs)("picture",{className:"absolute inset-0 w-full h-full",children:[(0,a.jsx)("source",{type:"image/webp",media:"(max-width: 768px)",srcSet:"/starfield-mobile.webp"}),(0,a.jsx)("source",{type:"image/webp",srcSet:"/starfield-desktop.webp"}),(0,a.jsx)("img",{src:"/starfield-desktop.webp",alt:"Star background",className:"w-full h-full object-cover ".concat("object-center"," \n                  ").concat(l?"opacity-100":"opacity-0"," transition-opacity duration-300"),style:{...j,minWidth:"100%",minHeight:"100%",objectFit:"cover",objectPosition:"center"},loading:"eager",decoding:"async",fetchPriority:"high",onLoad:()=>o(!0)})]}),(0,a.jsx)("div",{className:"absolute inset-0",style:{...j,transform:"scale(0.5)"},children:(0,a.jsx)(d,{isMobile:n,starVisualState:M,children:(0,a.jsx)(u,{scrollProgress:e.progress})})})]}),(0,a.jsx)("div",{className:"absolute top-0 left-0 w-full",children:(0,a.jsx)(f,{scrollDecimal:e.decimal})})]}),(0,a.jsx)("div",{className:"h-screen"}),(0,a.jsx)("div",{className:"h-screen"}),(0,a.jsx)("div",{className:"h-screen"})]}),(0,a.jsx)(v,{scrollProgress:e.progress})]}):(0,a.jsx)("div",{className:"relative w-full",children:[void 0,void 0,void 0,void 0].map((e,t)=>(0,a.jsx)("div",{className:"h-screen"},t))})}v.displayName="HeaderFooter"},9374:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});var a=s(5155);let i=e=>{let{className:t}=e;return(0,a.jsx)("a",{className:"".concat(t),href:"mailto:contact@electroniclife.ai",children:"Contact Us"})},r=e=>{let{className:t}=e;return(0,a.jsxs)("footer",{className:"p-12 mb-0 ".concat(t),children:[(0,a.jsx)(i,{className:"text-m underline text-white hover:text-blue-400"}),(0,a.jsx)("p",{className:"text-sm mt-2 text-white",children:"\xa9 2024 S. Manghani, E. D’Souza, T. Savage"})]})}},5752:(e,t,s)=>{"use strict";s.d(t,{A:()=>i});var a=s(5155);let i=e=>{let{text_colour:t,className:s}=e;return(0,a.jsxs)("header",{className:"pt-4 ml-10 mt-10",children:["white"===t?(0,a.jsx)("img",{src:"/electronic_life.png",alt:"Electronic Life",className:"h-14"}):(0,a.jsx)("img",{src:"/electronic_life_black.png",alt:"Electronic Life",className:"h-14"}),(0,a.jsx)("h1",{style:{color:t},className:"text-xl",children:"Research Studio"})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[446,441,517,358],()=>t(4996)),_N_E=e.O()}]);