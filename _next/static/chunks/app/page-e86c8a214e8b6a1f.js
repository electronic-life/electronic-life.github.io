(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{8934:(e,t,s)=>{Promise.resolve().then(s.bind(s,5655))},5655:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>w});var r=s(5155),a=s(2115),i=s(5752),l=s(9374);let o=e=>{let{size:t=0}=e,s=.5*Math.max(0,Math.min(1,t)),i=(0,a.useMemo)(()=>{let e=600*s-20,t=20*s,r=50*s,a=3*s,i=Math.round(255-100*s),l=Math.round(255-100*s);return{spikeLength:e,coreSize:t,glowSize:r,spikeWidth:a,blueColor:"rgb(0,0 ".concat(i,")"),amberColor:"rgb(".concat(l,",200, 200)"),rotationAmount:0}},[s]);return(0,r.jsxs)("svg",{width:"1000",height:"1000",viewBox:"-500 -500 1000 1000",xmlns:"http://www.w3.org/2000/svg",style:{transform:"rotate("+i.rotationAmount+"deg)"},children:[(0,r.jsxs)("defs",{children:[(0,r.jsx)("filter",{id:"spike-blur",x:"-100%",y:"-100%",width:"300%",height:"300%",children:(0,r.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"1"})}),(0,r.jsxs)("radialGradient",{id:"glowGradient",cx:"50%",cy:"50%",r:"50%",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:"white",stopOpacity:"1"}),(0,r.jsx)("stop",{offset:"100%",stopColor:i.blueColor,stopOpacity:"0.1"})]}),(0,r.jsxs)("radialGradient",{id:"coreGradient",cx:"50%",cy:"50%",r:"95%",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:"white"}),(0,r.jsx)("stop",{offset:"100%",stopColor:i.blueColor,stopOpacity:"0.6"})]})]}),[...Array(6)].map((e,t)=>{let s=(360*t/6+90)*Math.PI/180,a=Math.cos(s),l=Math.sin(s),o=1.5*i.spikeWidth,n="\n          M ".concat(i.spikeLength*a," ").concat(i.spikeLength*l,"\n          L ").concat(o*l+i.coreSize*a," ").concat(-o*a+i.coreSize*l,"\n          L ").concat(-o*l+i.coreSize*a," ").concat(o*a+i.coreSize*l,"\n          Z\n        ");return(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:n,fill:i.amberColor,opacity:"1",filter:"url(#spike-blur)"})},t)}),[void 0,void 0].map((e,t)=>{let s=360*t/2*Math.PI/180,a=Math.cos(s),l=Math.sin(s),o=3*i.spikeWidth,n="\n                M ".concat(.55*i.spikeLength*a," ").concat(.55*i.spikeLength*l,"\n                L ").concat(.55*o*l+i.coreSize*a," ").concat(-(.55*o)*a+i.coreSize*l,"\n                L ").concat(-(.55*o)*l+i.coreSize*a," ").concat(.55*o*a+i.coreSize*l,"\n                Z\n              ");return(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:n,fill:"rgb(255,255,255)",opacity:"1",filter:"url(#spike-blur)"})},t)}),(0,r.jsx)("circle",{cx:"0",cy:"0",r:1.1*i.coreSize,fill:"rgb(255, 252, 247)",filter:"url(#spike-blur)"}),(0,r.jsx)("circle",{cx:"0",cy:"0",r:.55*i.glowSize,fill:"rgb(255, 247, 236)",opacity:"0.6",filter:"url(#spike-blur)"}),[...Array(6)].map((e,t)=>{let s=(360*t/6+90)*Math.PI/180,a=Math.cos(s),l=Math.sin(s),o=10*i.spikeWidth,n="\n                M ".concat(.25*i.spikeLength*a," ").concat(.25*i.spikeLength*l,"\n                L ").concat(.25*o*l+i.coreSize*a," ").concat(-(.25*o)*a+i.coreSize*l,"\n                L ").concat(-(.25*o)*l+i.coreSize*a," ").concat(.25*o*a+i.coreSize*l,"\n                Z\n              ");return(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:n,fill:"white",opacity:"1",filter:"url(#spike-blur)"})},t)})]})};o.displayName="Star";let n=e=>{let{color:t=1,size:s=1,rotation:i=0,distortion:l=0,centeredRadius:o=0,isMobile:n=!1}=e,{primaryColor:c,coreColor:d}=(0,a.useMemo)(()=>{let e=Math.max(0,Math.min(1,t)),s=[205,50,50],r=[255,150,0].map((t,r)=>(1-e)*t+e*s[r]),a=r.map((e,t)=>e+s[t]);return{primaryColor:"rgb(".concat(r.join(", "),")"),coreColor:"rgb(".concat(a.join(", "),")")}},[t]),h=(0,a.useMemo)(()=>({baseRadius:100*Math.max(0,Math.min(1,s)),normalizedDistortion:Math.max(.001,Math.min(1,l)),centeredRadius:o}),[s,l,o]),u=(0,a.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=Array(n?8:12),s=n?10:12,r=1.7*h.normalizedDistortion/h.centeredRadius**2,a=1+r,i=1/(1+r),l=1/(200*r);for(let r=0;r<=s;r++){let o=r/s*Math.PI*2,n=h.baseRadius*e,c=n*Math.cos(o)*i,d=n*Math.sin(o)*a;0!==c&&(c+=d*d*l),t[r]="".concat(c,",").concat(d)}return"M ".concat(t.join(" L ")," Z")},[h,n]),f=(0,a.useMemo)(()=>({path1:u(1),path2:u(.5),path3:u(4),path4:u(2)}),[u,n]);return(0,r.jsxs)("svg",{width:"1000",height:"1000",viewBox:"-500 -500 1000 1000",xmlns:"http://www.w3.org/2000/svg",style:{transform:"rotate(".concat(i,"deg)")},children:[(0,r.jsxs)("defs",{children:[(0,r.jsxs)("radialGradient",{id:"galaxyGradient",cx:"0",cy:"0",r:"100%",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:c,stopOpacity:"1"}),(0,r.jsx)("stop",{offset:"100%",stopColor:c,stopOpacity:"0.3"})]}),(0,r.jsx)("filter",{id:"galaxyBlur",x:"-50%",y:"-50%",width:"400%",height:"400%",children:(0,r.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:2})}),(0,r.jsx)("filter",{id:"biggergalaxyBlur",x:"-50%",y:"-50%",width:"300%",height:"300%",children:(0,r.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"10"})}),(0,r.jsx)("filter",{id:"smallergalaxyBlur",x:"-50%",y:"-50%",width:"300%",height:"300%",children:(0,r.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"1"})})]}),(0,r.jsx)("path",{d:f.path1,fill:c,filter:"url(#galaxyBlur)",opacity:.75}),(0,r.jsx)("path",{d:f.path2,fill:"white",opacity:.5,filter:"url(#galaxyBlur)"}),(0,r.jsx)("path",{d:f.path3,fill:"white",filter:"url(#biggergalaxyBlur)",opacity:.1}),(0,r.jsx)("path",{d:f.path4,fill:c,filter:"url(#galaxyBlur)",opacity:.5})]})};n.displayName="Galaxy";let c=(e,t)=>e.map((e,s)=>{let r=2*s*Math.PI/3+e.offset,a=e.radius*t,i=50+Math.cos(r)*a,l=50+Math.sin(r)*a;return{left:"".concat(i,"%"),top:"".concat(l,"%"),angle:r,galaxyRadius:a,transform:"translate(-50%, -50%) scale(".concat(t,")"),color:e.color,size:e.size,initialdist:e.initialdist}}),d=a.memo(e=>{let{isMobile:t,starVisualState:s,scale:i=1.35,children:l}=e,d=(0,a.useRef)([{color:.9430922818612874,radius:23.09134685194573,offset:5.952903634814243,size:.5120802169648176},{color:.2866895967234122,radius:15.37152248703324,offset:4.607660682566115,size:.5843049276927211},{color:.7264764111384534,radius:19.83473021340826,offset:6.28302882438003,size:.5967083752367214},{color:.055625980366973415,radius:24.33595916206409,offset:2.1,size:.5796641517202228}]);(0,a.useRef)(Array.from({length:20},()=>({color:Math.random(),radius:10+20*Math.random(),offset:Math.random()*Math.PI*2,size:.5+.1*Math.random()})));let h=(0,a.useMemo)(()=>c(d.current,i),[i]),u=(0,a.useMemo)(()=>({transform:"translate(-50%, -50%) scale(".concat(t?.6*i:i,")")}),[t,i]),f=(0,a.useMemo)(()=>l?a.cloneElement(l,{galaxyPositions:h.map(e=>({left:e.left,top:e.top}))}):null,[l,h]),x=(0,a.useCallback)(e=>({color:e.color,size:(.05+e.size*s/6)/2,distortion:s/e.galaxyRadius*100,rotation:e.angle*(180/Math.PI)-180,centeredRadius:e.galaxyRadius/20,isMobile:t}),[s,t]);return(0,r.jsxs)("div",{className:"relative w-full h-full",children:[h.map((e,t)=>(0,r.jsx)("div",{className:"absolute will-change-transform",style:{left:e.left,top:e.top,transform:e.transform,transformOrigin:"center center"},children:(0,r.jsx)(n,{...x(e)})},t)),(0,r.jsx)("div",{className:"absolute left-1/2 top-1/2 will-change-transform",style:u,children:(0,r.jsx)(o,{size:s/4})}),f]})});var h=s(6046);let u=e=>{let{scrollProgress:t,galaxyPositions:s}=e,i=(0,h.useRouter)(),l=Math.max(0,Math.min(1,(t-.74)*4)),[o,n]=(0,a.useState)([]),c=(0,a.useRef)([]),d=(0,a.useRef)(null),u=(0,a.useRef)([]),f=[{label:"Projects",link:"/research",offset:{x:-40,y:-80}},{label:"People",link:"/people",offset:{x:20,y:60}},{label:"Papers",link:"/papers",offset:{x:-90,y:60}},{label:"Approach",link:"/approach",offset:{x:-60,y:-100}}];if((0,a.useEffect)(()=>{let e=()=>{n(c.current.map(e=>{if(e){let t=e.getBoundingClientRect();return{width:t.width,height:t.height}}return{width:0,height:0}}))};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),!s||0===s.length)return null;let x=(e,t)=>{e.preventDefault(),e.stopPropagation();try{i.push(t)}catch(e){console.error("Navigation error:",e),window.location.href=t}};return(0,r.jsx)("div",{ref:d,className:"fixed inset-0 z-50 pointer-events-none",style:{opacity:l},children:s.slice(0,4).map((e,t)=>{var s,a;let i=f[t];return(0,r.jsxs)("div",{className:"absolute",style:{left:e.left,top:e.top,transform:"translate(-50%, -50%)",zIndex:60},children:[(0,r.jsx)("div",{ref:e=>{u.current[t]=e},className:"w-2 h-2"}),(0,r.jsx)("svg",{className:"absolute pointer-events-none",style:{width:"100%",height:"100%",overflow:"visible",top:0,left:0},children:(0,r.jsx)("line",{x1:0,y1:0,x2:i.offset.x+(i.offset.x<0&&(null===(s=o[t])||void 0===s?void 0:s.width)||0),y2:i.offset.y+(i.offset.y<0?(null===(a=o[t])||void 0===a?void 0:a.height)||0:10),stroke:"white",strokeWidth:"1",strokeOpacity:"0.8"})}),(0,r.jsx)("div",{ref:e=>{c.current[t]=e},className:"absolute",style:{transform:"translate(".concat(i.offset.x,"px, ").concat(i.offset.y,"px)"),zIndex:70},children:(0,r.jsx)("button",{onClick:e=>x(e,i.link),className:"block bg-black border border-white/80 px-2 py-1 hover:border-white/40 text-white/90 text-base cursor-pointer hover:text-white select-none pointer-events-auto",children:i.label})})]},t)})})};var f=s(5170);let x=e=>{let{scrollDecimal:t}=e;return(0,r.jsx)("div",{className:"fixed bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20 scale-2",style:{opacity:1-(t-50)/600},children:(0,r.jsxs)("div",{className:"text-white",style:{animation:"bounce 1s ease-in-out infinite",transform:"translateY(0px)"},children:[(0,r.jsx)("style",{children:"\n            @keyframes bounce {\n              0%, 100% {\n                transform: translateY(0px);\n              }\n              50% {\n                transform: translateY(-12px);\n              }\n            }\n          "}),(0,r.jsx)(f.A,{className:"text-white w-8 h-8"})]})})};var m=s(8640),p=s.n(m);let g=e=>e*e,j=()=>{let[e,t]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=p()(()=>{t(window.innerWidth<768)},250);return e(),window.addEventListener("resize",e,{passive:!0}),()=>window.removeEventListener("resize",e)},[]),e},v=a.memo(e=>{let{scrollProgress:t}=e,s=t>=.74;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"fixed top-0 left-0 w-full transition-opacity duration-300 ".concat(s?"opacity-100":"opacity-0"),children:(0,r.jsx)(i.A,{text_colour:"white"})}),(0,r.jsx)(l.A,{className:"fixed bottom-0 left-0 w-full transition-opacity duration-300 ".concat(s?"opacity-100":"opacity-0")})]})});function w(){let[e,t]=(0,a.useState)({progress:0,decimal:0}),[s,i]=(0,a.useState)(!1),l=j(),o=(0,a.useRef)({lastScrollY:0,ticking:!1}),n=(0,a.useCallback)(()=>{o.current.ticking||(o.current.ticking=!0,requestAnimationFrame(()=>{let e=window.scrollY,s=Math.min(Math.max(e/(document.documentElement.scrollHeight-window.innerHeight),0),1),r=g(s);t({progress:s,decimal:40+600*r}),o.current.lastScrollY=e,o.current.ticking=!1}))},[]);if((0,a.useEffect)(()=>(i(!0),window.scrollTo(0,0),t({progress:0,decimal:0}),"full"===sessionStorage.getItem("lastScrollState")&&(t({progress:1,decimal:640}),requestAnimationFrame(()=>{let e=document.documentElement.scrollHeight-window.innerHeight;window.scrollTo({top:e,behavior:"auto"})}),sessionStorage.removeItem("lastScrollState")),n(),window.addEventListener("scroll",n,{passive:!0}),()=>window.removeEventListener("scroll",n)),[n]),!s)return(0,r.jsxs)("div",{className:"relative w-full",children:[(0,r.jsx)("div",{className:"h-screen"}),(0,r.jsx)("div",{className:"h-screen"}),(0,r.jsx)("div",{className:"h-screen"}),(0,r.jsx)("div",{className:"h-screen"})]});let c=e.decimal/440,h=1+e.decimal/800;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"relative w-full",children:[(0,r.jsx)("div",{className:"h-screen"}),(0,r.jsx)("div",{className:"h-screen"}),(0,r.jsxs)("div",{className:"fixed top-0 left-0 w-full h-screen bg-black overflow-hidden",children:[(0,r.jsxs)("div",{className:"absolute inset-0 w-full h-full origin-center flex items-center justify-center",style:{transform:"scale(".concat(h,")")},children:[(0,r.jsx)("img",{src:l?"starfield-bg-mobile.svg":"starfield-bg.svg",alt:"Star background",className:"w-full h-full object-cover ".concat(l?"object-center":"")}),(0,r.jsx)("div",{className:"absolute inset-0 scale-50",children:(0,r.jsx)(d,{isMobile:l,starVisualState:c,children:(0,r.jsx)(u,{scrollProgress:e.progress})})})]}),(0,r.jsx)("div",{className:"absolute top-0 left-0 w-full",children:(0,r.jsx)(x,{scrollDecimal:e.decimal})})]}),(0,r.jsx)("div",{className:"h-screen"}),(0,r.jsx)("div",{className:"h-screen"}),(0,r.jsx)("div",{className:"h-screen"})]}),(0,r.jsx)(v,{scrollProgress:e.progress})]})}v.displayName="HeaderFooter"},9374:(e,t,s)=>{"use strict";s.d(t,{A:()=>i});var r=s(5155);let a=e=>{let{className:t}=e;return(0,r.jsx)("a",{className:"".concat(t),href:"mailto:contact@electroniclife.ai",children:"Contact Us"})},i=e=>{let{className:t}=e;return(0,r.jsxs)("footer",{className:"p-12 mb-0 ".concat(t),children:[(0,r.jsx)(a,{className:"text-m underline text-white hover:text-blue-400"}),(0,r.jsx)("p",{className:"text-sm mt-2 text-white",children:"\xa9 2024 S. Manghani, E. D’Souza, T. Savage"})]})}},5752:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});var r=s(5155);let a=e=>{let{text_colour:t,className:s}=e;return(0,r.jsxs)("header",{className:"pt-4 ml-10 mt-10",children:["white"===t?(0,r.jsx)("img",{src:"/electronic_life.png",alt:"Electronic Life",className:"h-14"}):(0,r.jsx)("img",{src:"/electronic_life_black.png",alt:"Electronic Life",className:"h-14"}),(0,r.jsx)("h1",{style:{color:t},className:"text-xl",children:"Research Studio"})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[446,441,517,358],()=>t(8934)),_N_E=e.O()}]);