(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{4996:(e,t,s)=>{Promise.resolve().then(s.bind(s,5655))},5655:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>v});var r=s(5155),a=s(2115),l=s(5752),i=s(9374);let o=e=>{let{size:t=0}=e,s=.5*Math.max(0,Math.min(1,t)),l=(0,a.useMemo)(()=>{let e=600*s-20,t=20*s,r=50*s,a=3*s,l=Math.round(255-100*s),i=Math.round(255-100*s);return{spikeLength:e,coreSize:t,glowSize:r,spikeWidth:a,blueColor:"rgb(0,0 ".concat(l,")"),amberColor:"rgb(".concat(i,",200, 200)"),rotationAmount:0}},[s]);return(0,r.jsxs)("svg",{width:"1000",height:"1000",viewBox:"-500 -500 1000 1000",xmlns:"http://www.w3.org/2000/svg",style:{transform:"rotate("+l.rotationAmount+"deg)"},children:[(0,r.jsxs)("defs",{children:[(0,r.jsx)("filter",{id:"spike-blur",x:"-100%",y:"-100%",width:"300%",height:"300%",children:(0,r.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"1"})}),(0,r.jsxs)("radialGradient",{id:"glowGradient",cx:"50%",cy:"50%",r:"50%",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:"white",stopOpacity:"1"}),(0,r.jsx)("stop",{offset:"100%",stopColor:l.blueColor,stopOpacity:"0.1"})]}),(0,r.jsxs)("radialGradient",{id:"coreGradient",cx:"50%",cy:"50%",r:"95%",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:"white"}),(0,r.jsx)("stop",{offset:"100%",stopColor:l.blueColor,stopOpacity:"0.6"})]})]}),[...Array(6)].map((e,t)=>{let s=(360*t/6+90)*Math.PI/180,a=Math.cos(s),i=Math.sin(s),o=1.5*l.spikeWidth,n="\n          M ".concat(l.spikeLength*a," ").concat(l.spikeLength*i,"\n          L ").concat(o*i+l.coreSize*a," ").concat(-o*a+l.coreSize*i,"\n          L ").concat(-o*i+l.coreSize*a," ").concat(o*a+l.coreSize*i,"\n          Z\n        ");return(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:n,fill:l.amberColor,opacity:"1",filter:"url(#spike-blur)"})},t)}),[void 0,void 0].map((e,t)=>{let s=360*t/2*Math.PI/180,a=Math.cos(s),i=Math.sin(s),o=3*l.spikeWidth,n="\n                M ".concat(.55*l.spikeLength*a," ").concat(.55*l.spikeLength*i,"\n                L ").concat(.55*o*i+l.coreSize*a," ").concat(-(.55*o)*a+l.coreSize*i,"\n                L ").concat(-(.55*o)*i+l.coreSize*a," ").concat(.55*o*a+l.coreSize*i,"\n                Z\n              ");return(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:n,fill:"rgb(255,255,255)",opacity:"1",filter:"url(#spike-blur)"})},t)}),(0,r.jsx)("circle",{cx:"0",cy:"0",r:1.1*l.coreSize,fill:"rgb(255, 252, 247)",filter:"url(#spike-blur)"}),(0,r.jsx)("circle",{cx:"0",cy:"0",r:.55*l.glowSize,fill:"rgb(255, 247, 236)",opacity:"0.6",filter:"url(#spike-blur)"}),[...Array(6)].map((e,t)=>{let s=(360*t/6+90)*Math.PI/180,a=Math.cos(s),i=Math.sin(s),o=10*l.spikeWidth,n="\n                M ".concat(.25*l.spikeLength*a," ").concat(.25*l.spikeLength*i,"\n                L ").concat(.25*o*i+l.coreSize*a," ").concat(-(.25*o)*a+l.coreSize*i,"\n                L ").concat(-(.25*o)*i+l.coreSize*a," ").concat(.25*o*a+l.coreSize*i,"\n                Z\n              ");return(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:n,fill:"white",opacity:"1",filter:"url(#spike-blur)"})},t)})]})};o.displayName="Star";let n=e=>{let{color:t=1,size:s=1,rotation:l=0,distortion:i=0,centeredRadius:o=0}=e,{primaryColor:n,coreColor:c}=(0,a.useMemo)(()=>{let e=Math.max(0,Math.min(1,t)),s=[205,50,50],r=[255,150,0].map((t,r)=>(1-e)*t+e*s[r]),a=r.map((e,t)=>e+s[t]);return{primaryColor:"rgb(".concat(r.join(", "),")"),coreColor:"rgb(".concat(a.join(", "),")")}},[t]),h=(0,a.useMemo)(()=>({baseRadius:100*Math.max(0,Math.min(1,s)),normalizedDistortion:Math.max(.001,Math.min(1,i)),centeredRadius:o}),[s,i,o]),d=(0,a.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=Array(25),s=1.7*h.normalizedDistortion/h.centeredRadius**2,r=1+s,a=1/(1+s),l=1/(200*s);for(let s=0;s<=16;s++){let i=s/16*Math.PI*2,o=h.baseRadius*e,n=o*Math.cos(i)*a,c=o*Math.sin(i)*r;0!==n&&(n+=c*c*l),t[s]="".concat(n,",").concat(c)}return"M ".concat(t.join(" L ")," Z")},[h]),u=(0,a.useMemo)(()=>({path1:d(1),path2:d(2),path3:d(4),path4:d(.5)}),[d]);return(0,r.jsxs)("svg",{width:"1000",height:"1000",viewBox:"-500 -500 1000 1000",xmlns:"http://www.w3.org/2000/svg",style:{transform:"rotate(".concat(l,"deg)")},children:[(0,r.jsxs)("defs",{children:[(0,r.jsxs)("radialGradient",{id:"galaxyGradient",cx:"0",cy:"0",r:"100%",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:n,stopOpacity:"1"}),(0,r.jsx)("stop",{offset:"100%",stopColor:n,stopOpacity:"0.3"})]}),(0,r.jsx)("filter",{id:"galaxyBlur",x:"-50%",y:"-50%",width:"400%",height:"400%",children:(0,r.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"2"})}),(0,r.jsx)("filter",{id:"biggergalaxyBlur",x:"-50%",y:"-50%",width:"300%",height:"300%",children:(0,r.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"10"})}),(0,r.jsx)("filter",{id:"smallergalaxyBlur",x:"-50%",y:"-50%",width:"300%",height:"300%",children:(0,r.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"1"})})]}),(0,r.jsx)("path",{d:u.path1,fill:n,filter:"url(#smallergalaxyBlur)"}),(0,r.jsx)("path",{d:u.path2,fill:n,filter:"url(#galaxyBlur)",opacity:.5}),(0,r.jsx)("path",{d:u.path3,fill:"white",filter:"url(#biggergalaxyBlur)",opacity:.1}),(0,r.jsx)("path",{d:u.path4,fill:"white",opacity:.5,filter:"url(#smallergalaxyBlur)"})]})};n.displayName="Galaxy";let c=e=>{let{isMobile:t,starVisualState:s,scale:l=1.35,children:i}=e,c=(0,a.useRef)(null),h=(0,a.useRef)(null);c.current||(c.current=[{color:.9430922818612874,radius:23.09134685194573,offset:5.952903634814243,size:.5120802169648176},{color:.2866895967234122,radius:15.37152248703324,offset:4.607660682566115,size:.5843049276927211},{color:.7264764111384534,radius:19.83473021340826,offset:6.28302882438003,size:.5967083752367209},{color:.055625980366973415,radius:24.33595916206409,offset:2.1,size:.5796641517202228}]),h.current||(h.current=Array.from({length:20},()=>({color:Math.random(),radius:10+20*Math.random(),offset:Math.random()*Math.PI*2,size:.5+.1*Math.random()})));let d=c.current.map((e,t)=>{let s=2*t*Math.PI/3+e.offset,r=e.radius*l,a=50+Math.cos(s)*r,i=50+Math.sin(s)*r;return{left:"".concat(a,"%"),top:"".concat(i,"%"),angle:s,galaxyRadius:r,transform:"translate(-50%, -50%) scale(".concat(l,")"),color:e.color,size:e.size,initialdist:e.initialdist}});return(0,r.jsxs)("div",{className:"relative w-full h-full",children:[d.map((e,t)=>(0,r.jsx)("div",{className:"absolute will-change-transform",style:{left:e.left,top:e.top,transform:e.transform,transformOrigin:"center center"},children:(0,r.jsx)(n,{color:e.color,size:(.05+e.size*s/6)/2,distortion:s/e.galaxyRadius*100,rotation:e.angle*(180/Math.PI)-180,centeredRadius:e.galaxyRadius/20})},t)),(0,r.jsx)("div",{className:"absolute left-1/2 top-1/2 will-change-transform",style:{transform:"translate(-50%, -50%) scale(".concat(t?.6*l:l,")")},children:(0,r.jsx)(o,{size:s/4})}),i?a.cloneElement(i,{galaxyPositions:d.map(e=>({left:e.left,top:e.top}))}):null]})};var h=s(6046);let d=e=>{let{scrollProgress:t,galaxyPositions:s}=e,l=(0,h.useRouter)(),i=Math.max(0,Math.min(1,(t-.74)*4)),[o,n]=(0,a.useState)([]),c=(0,a.useRef)([]),d=(0,a.useRef)(null),u=(0,a.useRef)([]),f=[{label:"Projects",link:"/research",offset:{x:-40,y:-80}},{label:"People",link:"/people",offset:{x:20,y:60}},{label:"Papers",link:"/papers",offset:{x:-90,y:60}},{label:"Approach",link:"/approach",offset:{x:-60,y:-100}}];if((0,a.useEffect)(()=>{let e=()=>{n(c.current.map(e=>{if(e){let t=e.getBoundingClientRect();return{width:t.width,height:t.height}}return{width:0,height:0}}))};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),!s||0===s.length)return null;let x=(e,t)=>{e.preventDefault(),l.push(t)},m=e=>{let t=Math.abs(e.x),s=Math.abs(e.y),r=e.x<0?e.x:0,a=e.y<0?e.y:0;return{width:t+2,height:s+2,viewBox:"".concat(r-1," ").concat(a-1," ").concat(t+2," ").concat(s+2)}};return(0,r.jsx)("div",{ref:d,className:"absolute inset-0 pointer-events-none",style:{opacity:i},children:s.slice(0,4).map((e,t)=>{var s,a;let l=f[t];return m(l.offset),(0,r.jsxs)("div",{className:"absolute z-50",style:{left:e.left,top:e.top,transform:"translate(-50%, -50%)"},children:[(0,r.jsx)("div",{ref:e=>{u.current[t]=e},className:"w-2 h-2"}),(0,r.jsx)("svg",{className:"absolute z-200",style:{width:"100%",height:"100%",overflow:"visible",pointerEvents:"none",top:0,left:0},children:(0,r.jsx)("line",{x1:0,y1:0,x2:l.offset.x+(l.offset.x<0&&(null===(s=o[t])||void 0===s?void 0:s.width)||0),y2:l.offset.y+(l.offset.y<0?(null===(a=o[t])||void 0===a?void 0:a.height)||0:10),stroke:"white",strokeWidth:"1",strokeOpacity:"0.8"})}),(0,r.jsx)("div",{ref:e=>{c.current[t]=e},className:"absolute pointer-events-auto",style:{transform:"translate(".concat(l.offset.x,"px, ").concat(l.offset.y,"px)")},children:(0,r.jsx)("a",{href:l.link,onClick:e=>x(e,l.link),className:"block bg-black border border-white/80 px-2 py-1 hover:border-white/40 transition-all duration-10 text-white/90 text-m cursor-pointer hover:text-white",children:l.label})})]},t)})})};var u=s(5170);let f=e=>{let{scrollDecimal:t}=e;return(0,r.jsx)("div",{className:"fixed bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20 scale-2",style:{opacity:1-(t-50)/600},children:(0,r.jsxs)("div",{className:"text-white",style:{animation:"bounce 1s ease-in-out infinite",transform:"translateY(0px)"},children:[(0,r.jsx)("style",{children:"\n            @keyframes bounce {\n              0%, 100% {\n                transform: translateY(0px);\n              }\n              50% {\n                transform: translateY(-12px);\n              }\n            }\n          "}),(0,r.jsx)(u.A,{className:"text-white w-8 h-8"})]})})};var x=s(8640),m=s.n(x);let p=e=>e*e,g=()=>{let[e,t]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=m()(()=>{t(window.innerWidth<768)},250);return e(),window.addEventListener("resize",e,{passive:!0}),()=>window.removeEventListener("resize",e)},[]),e},j=a.memo(e=>{let{scrollProgress:t}=e;return(0,r.jsxs)("div",{className:"relative w-full h-full",children:[t>=.8&&(0,r.jsx)(l.A,{text_colour:"white"}),t>=.8&&(0,r.jsx)(i.A,{className:"absolute w-full bottom-0"})]})});function v(){let[e,t]=(0,a.useState)({progress:0,decimal:0}),[s,l]=(0,a.useState)(!1),i=g(),o=(0,a.useRef)({lastScrollY:0,ticking:!1}),n=(0,a.useCallback)(()=>{o.current.ticking||(o.current.ticking=!0,requestAnimationFrame(()=>{let e=window.scrollY,s=Math.min(Math.max(e/(document.documentElement.scrollHeight-window.innerHeight),0),1),r=p(s);t({progress:s,decimal:40+600*r}),o.current.lastScrollY=e,o.current.ticking=!1}))},[]);if((0,a.useEffect)(()=>(l(!0),window.scrollTo(0,0),t({progress:0,decimal:0}),"full"===sessionStorage.getItem("lastScrollState")&&(t({progress:1,decimal:640}),requestAnimationFrame(()=>{let e=document.documentElement.scrollHeight-window.innerHeight;window.scrollTo({top:e,behavior:"auto"})}),sessionStorage.removeItem("lastScrollState")),n(),window.addEventListener("scroll",n,{passive:!0}),()=>window.removeEventListener("scroll",n)),[n]),!s)return(0,r.jsxs)("div",{className:"relative w-full",children:[(0,r.jsx)("div",{className:"h-screen"}),(0,r.jsx)("div",{className:"h-screen"}),(0,r.jsx)("div",{className:"h-screen"}),(0,r.jsx)("div",{className:"h-screen"})]});let h=e.decimal/440,u=1+e.decimal/800;return(0,r.jsxs)("div",{className:"relative w-full",children:[(0,r.jsx)("div",{className:"h-screen"}),(0,r.jsx)("div",{className:"h-screen"}),(0,r.jsx)("div",{className:"fixed top-0 left-0 w-full h-screen bg-black overflow-hidden",children:(0,r.jsxs)("div",{className:"relative w-full h-full",children:[(0,r.jsxs)("div",{className:"absolute inset-0 w-full h-full origin-center",style:{transform:"scale(".concat(u,")")},children:[(0,r.jsx)("img",{src:"starfield-bg.svg",alt:"Star background",className:"w-full h-full object-cover"}),(0,r.jsx)("div",{className:"absolute inset-0 scale-50",children:(0,r.jsx)(c,{isMobile:i,starVisualState:h,children:(0,r.jsx)(d,{scrollProgress:e.progress})})})]}),(0,r.jsxs)("div",{className:"absolute top-0 left-0 w-full h-full z-10",children:[(0,r.jsx)(j,{scrollProgress:e.progress}),(0,r.jsx)(f,{scrollDecimal:e.decimal})]})]})}),(0,r.jsx)("div",{className:"h-screen"}),(0,r.jsx)("div",{className:"h-screen"}),(0,r.jsx)("div",{className:"h-screen"})]})}j.displayName="HeaderFooter"},9374:(e,t,s)=>{"use strict";s.d(t,{A:()=>l});var r=s(5155);let a=e=>{let{className:t}=e;return(0,r.jsx)("a",{className:"".concat(t),href:"mailto:contact@electroniclife.ai",children:"Contact Us"})},l=e=>{let{className:t}=e;return(0,r.jsxs)("footer",{className:"p-12 mb-10 ".concat(t),children:[(0,r.jsx)(a,{className:"text-m underline text-white hover:text-blue-400"}),(0,r.jsx)("p",{className:"text-sm mt-2 text-white",children:"\xa9 2024 S. Manghani, E. D’Souza, T. Savage"})]})}},5752:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});var r=s(5155);let a=e=>{let{text_colour:t,className:s}=e;return(0,r.jsxs)("header",{className:"pt-4 ml-10 mt-10",children:["white"===t?(0,r.jsx)("img",{src:"/electronic_life.png",alt:"Electronic Life",className:"h-14"}):(0,r.jsx)("img",{src:"/electronic_life_black.png",alt:"Electronic Life",className:"h-14"}),(0,r.jsx)("h1",{style:{color:t},className:"text-xl",children:"Research Studio"})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[446,441,517,358],()=>t(4996)),_N_E=e.O()}]);