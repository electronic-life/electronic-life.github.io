(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{4996:(e,t,s)=>{Promise.resolve().then(s.bind(s,5655))},5655:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>w});var a=s(5155),r=s(2115),i=s(5752),l=s(9374);let o=e=>{let{size:t=0}=e,s=.5*Math.max(0,Math.min(1,t)),i=(0,r.useMemo)(()=>{let e=600*s-20,t=20*s,a=50*s,r=3*s,i=Math.round(255-100*s),l=Math.round(255-100*s);return{spikeLength:e,coreSize:t,glowSize:a,spikeWidth:r,blueColor:"rgb(0,0 ".concat(i,")"),amberColor:"rgb(".concat(l,",200, 200)"),rotationAmount:0}},[s]);return(0,a.jsxs)("svg",{width:"1000",height:"1000",viewBox:"-500 -500 1000 1000",xmlns:"http://www.w3.org/2000/svg",style:{transform:"rotate("+i.rotationAmount+"deg)"},children:[(0,a.jsxs)("defs",{children:[(0,a.jsx)("filter",{id:"spike-blur",x:"-100%",y:"-100%",width:"300%",height:"300%",children:(0,a.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"1"})}),(0,a.jsxs)("radialGradient",{id:"glowGradient",cx:"50%",cy:"50%",r:"50%",children:[(0,a.jsx)("stop",{offset:"0%",stopColor:"white",stopOpacity:"1"}),(0,a.jsx)("stop",{offset:"100%",stopColor:i.blueColor,stopOpacity:"0.1"})]}),(0,a.jsxs)("radialGradient",{id:"coreGradient",cx:"50%",cy:"50%",r:"95%",children:[(0,a.jsx)("stop",{offset:"0%",stopColor:"white"}),(0,a.jsx)("stop",{offset:"100%",stopColor:i.blueColor,stopOpacity:"0.6"})]})]}),[...Array(6)].map((e,t)=>{let s=(360*t/6+90)*Math.PI/180,r=Math.cos(s),l=Math.sin(s),o=1.5*i.spikeWidth,n="\n          M ".concat(i.spikeLength*r," ").concat(i.spikeLength*l,"\n          L ").concat(o*l+i.coreSize*r," ").concat(-o*r+i.coreSize*l,"\n          L ").concat(-o*l+i.coreSize*r," ").concat(o*r+i.coreSize*l,"\n          Z\n        ");return(0,a.jsx)("g",{children:(0,a.jsx)("path",{d:n,fill:i.amberColor,opacity:"1",filter:"url(#spike-blur)"})},t)}),[void 0,void 0].map((e,t)=>{let s=360*t/2*Math.PI/180,r=Math.cos(s),l=Math.sin(s),o=3*i.spikeWidth,n="\n                M ".concat(.55*i.spikeLength*r," ").concat(.55*i.spikeLength*l,"\n                L ").concat(.55*o*l+i.coreSize*r," ").concat(-(.55*o)*r+i.coreSize*l,"\n                L ").concat(-(.55*o)*l+i.coreSize*r," ").concat(.55*o*r+i.coreSize*l,"\n                Z\n              ");return(0,a.jsx)("g",{children:(0,a.jsx)("path",{d:n,fill:"rgb(255,255,255)",opacity:"1",filter:"url(#spike-blur)"})},t)}),(0,a.jsx)("circle",{cx:"0",cy:"0",r:1.1*i.coreSize,fill:"rgb(255, 252, 247)",filter:"url(#spike-blur)"}),(0,a.jsx)("circle",{cx:"0",cy:"0",r:.55*i.glowSize,fill:"rgb(255, 247, 236)",opacity:"0.6",filter:"url(#spike-blur)"}),[...Array(6)].map((e,t)=>{let s=(360*t/6+90)*Math.PI/180,r=Math.cos(s),l=Math.sin(s),o=10*i.spikeWidth,n="\n                M ".concat(.25*i.spikeLength*r," ").concat(.25*i.spikeLength*l,"\n                L ").concat(.25*o*l+i.coreSize*r," ").concat(-(.25*o)*r+i.coreSize*l,"\n                L ").concat(-(.25*o)*l+i.coreSize*r," ").concat(.25*o*r+i.coreSize*l,"\n                Z\n              ");return(0,a.jsx)("g",{children:(0,a.jsx)("path",{d:n,fill:"white",opacity:"1",filter:"url(#spike-blur)"})},t)})]})};o.displayName="Star";let n=e=>{let{color:t=1,size:s=1,rotation:i=0,distortion:l=0,centeredRadius:o=0,isMobile:n=!1}=e,{primaryColor:c,coreColor:d}=(0,r.useMemo)(()=>{let e=Math.max(0,Math.min(1,t)),s=[205,50,50],a=[255,150,0].map((t,a)=>(1-e)*t+e*s[a]),r=a.map((e,t)=>e+s[t]);return{primaryColor:"rgb(".concat(a.join(", "),")"),coreColor:"rgb(".concat(r.join(", "),")")}},[t]),h=(0,r.useMemo)(()=>({baseRadius:110*Math.max(0,Math.min(1,s)),normalizedDistortion:Math.max(.001,Math.min(1,l)),centeredRadius:o}),[s,l,o]),u=(0,r.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=Array(n?8:12),s=n?10:12,a=1.7*h.normalizedDistortion/h.centeredRadius**2,r=1+a,i=1/(1+a),l=1/(200*a);for(let a=0;a<=s;a++){let o=a/s*Math.PI*2,n=h.baseRadius*e,c=n*Math.cos(o)*i,d=n*Math.sin(o)*r;0!==c&&(c+=d*d*l),t[a]="".concat(c,",").concat(d)}return"M ".concat(t.join(" L ")," Z")},[h,n]),f=(0,r.useMemo)(()=>({path1:u(1),path2:u(.5),path3:u(4),path4:u(2)}),[u,n]);return(0,a.jsxs)("svg",{width:"1000",height:"1000",viewBox:"-500 -500 1000 1000",xmlns:"http://www.w3.org/2000/svg",style:{transform:"rotate(".concat(i,"deg)")},children:[(0,a.jsxs)("defs",{children:[(0,a.jsxs)("radialGradient",{id:"galaxyGradient",cx:"0",cy:"0",r:"100%",gradientUnits:"userSpaceOnUse",children:[(0,a.jsx)("stop",{offset:"0%",stopColor:c,stopOpacity:"1"}),(0,a.jsx)("stop",{offset:"100%",stopColor:c,stopOpacity:"0.3"})]}),(0,a.jsx)("filter",{id:"galaxyBlur",x:"-50%",y:"-50%",width:"400%",height:"400%",children:(0,a.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:2})}),(0,a.jsx)("filter",{id:"biggergalaxyBlur",x:"-50%",y:"-50%",width:"300%",height:"300%",children:(0,a.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"10"})}),(0,a.jsx)("filter",{id:"smallergalaxyBlur",x:"-50%",y:"-50%",width:"300%",height:"300%",children:(0,a.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"1"})})]}),(0,a.jsx)("path",{d:f.path1,fill:c,opacity:.75}),(0,a.jsx)("path",{d:f.path2,fill:"white",opacity:.5}),(0,a.jsx)("path",{d:f.path3,fill:"white",opacity:.1}),(0,a.jsx)("path",{d:f.path4,fill:c,opacity:.5})]})};n.displayName="Galaxy";let c=(e,t)=>e.map((e,s)=>{let a=2*s*Math.PI/3+e.offset,r=e.radius*t,i=50+Math.cos(a)*r,l=50+Math.sin(a)*r;return{left:"".concat(i,"%"),top:"".concat(l,"%"),angle:a,galaxyRadius:r,transform:"translate(-50%, -50%) scale(".concat(t,")"),color:e.color,size:e.size,initialdist:e.initialdist}}),d=r.memo(e=>{let{isMobile:t,starVisualState:s,scale:i=1.35,children:l}=e,d=(0,r.useRef)([{color:.9430922818612874,radius:23.09134685194573,offset:5.952903634814243,size:.5120802169648176},{color:.2866895967234122,radius:15.37152248703324,offset:4.607660682566115,size:.5843049276927211},{color:.7264764111384534,radius:19.83473021340826,offset:6.28302882438003,size:.5967083752367214},{color:.055625980366973415,radius:24.33595916206409,offset:2.1,size:.5796641517202228}]);(0,r.useRef)(Array.from({length:20},()=>({color:Math.random(),radius:10+20*Math.random(),offset:Math.random()*Math.PI*2,size:.5+.1*Math.random()})));let h=(0,r.useMemo)(()=>c(d.current,i),[i]),u=(0,r.useMemo)(()=>({transform:"translate(-50%, -50%) scale(".concat(t?.6*i:i,")")}),[t,i]),f=(0,r.useMemo)(()=>l?r.cloneElement(l,{galaxyPositions:h.map(e=>({left:e.left,top:e.top}))}):null,[l,h]),m=(0,r.useCallback)(e=>({color:e.color,size:(.05+e.size*s/6)/2,distortion:s/e.galaxyRadius*100,rotation:e.angle*(180/Math.PI)-180,centeredRadius:e.galaxyRadius/20,isMobile:t}),[s,t]);return(0,a.jsxs)("div",{className:"relative w-full h-full",children:[h.map((e,t)=>(0,a.jsx)("div",{className:"absolute will-change-transform",style:{left:e.left,top:e.top,transform:e.transform,transformOrigin:"center center"},children:(0,a.jsx)(n,{...m(e)})},t)),(0,a.jsx)("div",{className:"absolute left-1/2 top-1/2 will-change-transform",style:u,children:(0,a.jsx)(o,{size:s/4})}),f]})});var h=s(6046);let u=e=>{let{scrollProgress:t,galaxyPositions:s}=e,i=(0,h.useRouter)(),l=Math.max(0,Math.min(1,(t-.74)*4)),[o,n]=(0,r.useState)([]),c=(0,r.useRef)([]),d=(0,r.useRef)(null),u=(0,r.useRef)([]),f=[{label:"Projects",link:"/research",offset:{x:-40,y:-80}},{label:"People",link:"/people",offset:{x:20,y:60}},{label:"Papers",link:"/papers",offset:{x:-90,y:60}},{label:"Approach",link:"/approach",offset:{x:-60,y:-100}}];if((0,r.useEffect)(()=>{let e=()=>{n(c.current.map(e=>{if(e){let t=e.getBoundingClientRect();return{width:t.width,height:t.height}}return{width:0,height:0}}))};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),!s||0===s.length)return null;let m=(e,t)=>{e.preventDefault(),e.stopPropagation();try{i.push(t)}catch(e){console.error("Navigation error:",e),window.location.href=t}};return(0,a.jsx)("div",{ref:d,className:"fixed inset-0 z-50 pointer-events-none",style:{opacity:l},children:s.slice(0,4).map((e,t)=>{var s,r;let i=f[t];return(0,a.jsxs)("div",{className:"absolute",style:{left:e.left,top:e.top,transform:"translate(-50%, -50%)",zIndex:60},children:[(0,a.jsx)("div",{ref:e=>{u.current[t]=e},className:"w-2 h-2"}),(0,a.jsx)("svg",{className:"absolute pointer-events-none",style:{width:"100%",height:"100%",overflow:"visible",top:0,left:0},children:(0,a.jsx)("line",{x1:0,y1:0,x2:i.offset.x+(i.offset.x<0&&(null===(s=o[t])||void 0===s?void 0:s.width)||0),y2:i.offset.y+(i.offset.y<0?(null===(r=o[t])||void 0===r?void 0:r.height)||0:10),stroke:"white",strokeWidth:"1",strokeOpacity:"0.8"})}),(0,a.jsx)("div",{ref:e=>{c.current[t]=e},className:"absolute",style:{transform:"translate(".concat(i.offset.x,"px, ").concat(i.offset.y,"px)"),zIndex:70},children:(0,a.jsx)("button",{onClick:e=>m(e,i.link),className:"block bg-black border border-white/80 px-2 py-1 hover:border-white/40 text-white/90 text-base cursor-pointer hover:text-white select-none pointer-events-auto",children:i.label})})]},t)})})};var f=s(5170);let m=e=>{let{scrollDecimal:t}=e;return(0,a.jsx)("div",{className:"fixed bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20 scale-2",style:{opacity:1-(t-50)/600},children:(0,a.jsxs)("div",{className:"text-white",style:{animation:"bounce 1s ease-in-out infinite",transform:"translateY(0px)"},children:[(0,a.jsx)("style",{children:"\n            @keyframes bounce {\n              0%, 100% {\n                transform: translateY(0px);\n              }\n              50% {\n                transform: translateY(-12px);\n              }\n            }\n          "}),(0,a.jsx)(f.A,{className:"text-white w-8 h-8"})]})})};var x=s(8640),p=s.n(x);let g=e=>e*e,j=()=>{let[e,t]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=p()(()=>{t(window.innerWidth<768)},250);return e(),window.addEventListener("resize",e,{passive:!0}),()=>window.removeEventListener("resize",e)},[]),e},v=r.memo(e=>{let{scrollProgress:t}=e,s=t>=.74;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"fixed top-0 left-0 w-full transition-opacity duration-300 ".concat(s?"opacity-100":"opacity-0"),children:(0,a.jsx)(i.A,{text_colour:"white"})}),(0,a.jsx)(l.A,{className:"fixed bottom-0 left-0 w-full transition-opacity duration-300 ".concat(s?"opacity-100":"opacity-0")})]})});function w(){let[e,t]=(0,r.useState)({progress:0,decimal:0}),[s,i]=(0,r.useState)(!1),l=j(),o=(0,r.useRef)({lastScrollY:0,ticking:!1}),n=(0,r.useCallback)(()=>{o.current.ticking||(o.current.ticking=!0,requestAnimationFrame(()=>{let e=window.scrollY,s=Math.min(Math.max(e/(document.documentElement.scrollHeight-window.innerHeight),0),1),a=g(s);t({progress:s,decimal:40+600*a}),o.current.lastScrollY=e,o.current.ticking=!1}))},[]);if((0,r.useEffect)(()=>(i(!0),window.scrollTo(0,0),t({progress:0,decimal:0}),"full"===sessionStorage.getItem("lastScrollState")&&(t({progress:1,decimal:640}),requestAnimationFrame(()=>{let e=document.documentElement.scrollHeight-window.innerHeight;window.scrollTo({top:e,behavior:"auto"})}),sessionStorage.removeItem("lastScrollState")),n(),window.addEventListener("scroll",n,{passive:!0}),()=>window.removeEventListener("scroll",n)),[n]),!s)return(0,a.jsxs)("div",{className:"relative w-full",children:[(0,a.jsx)("div",{className:"h-screen"}),(0,a.jsx)("div",{className:"h-screen"}),(0,a.jsx)("div",{className:"h-screen"}),(0,a.jsx)("div",{className:"h-screen"})]});let c=e.decimal/440,h=1+e.decimal/800;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"relative w-full",children:[(0,a.jsx)("div",{className:"h-screen"}),(0,a.jsx)("div",{className:"h-screen"}),(0,a.jsxs)("div",{className:"fixed top-0 left-0 w-full h-screen bg-black overflow-hidden",children:[(0,a.jsxs)("div",{className:"absolute inset-0 w-full h-full origin-center flex items-center justify-center",style:{transform:"scale(".concat(h,")")},children:[(0,a.jsx)("img",{src:l?"starfield-bg-mobile.svg":"starfield-bg.svg",alt:"Star background",className:"w-full h-full object-cover ".concat(l?"object-center":"")}),(0,a.jsx)("div",{className:"absolute inset-0 scale-50",children:(0,a.jsx)(d,{isMobile:l,starVisualState:c,children:(0,a.jsx)(u,{scrollProgress:e.progress})})})]}),(0,a.jsx)("div",{className:"absolute top-0 left-0 w-full",children:(0,a.jsx)(m,{scrollDecimal:e.decimal})})]}),(0,a.jsx)("div",{className:"h-screen"}),(0,a.jsx)("div",{className:"h-screen"}),(0,a.jsx)("div",{className:"h-screen"})]}),(0,a.jsx)(v,{scrollProgress:e.progress})]})}v.displayName="HeaderFooter"},9374:(e,t,s)=>{"use strict";s.d(t,{A:()=>i});var a=s(5155);let r=e=>{let{className:t}=e;return(0,a.jsx)("a",{className:"".concat(t),href:"mailto:contact@electroniclife.ai",children:"Contact Us"})},i=e=>{let{className:t}=e;return(0,a.jsxs)("footer",{className:"p-12 mb-0 ".concat(t),children:[(0,a.jsx)(r,{className:"text-m underline text-white hover:text-blue-400"}),(0,a.jsx)("p",{className:"text-sm mt-2 text-white",children:"\xa9 2024 S. Manghani, E. D’Souza, T. Savage"})]})}},5752:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});var a=s(5155);let r=e=>{let{text_colour:t,className:s}=e;return(0,a.jsxs)("header",{className:"pt-4 ml-10 mt-10",children:["white"===t?(0,a.jsx)("img",{src:"/electronic_life.png",alt:"Electronic Life",className:"h-14"}):(0,a.jsx)("img",{src:"/electronic_life_black.png",alt:"Electronic Life",className:"h-14"}),(0,a.jsx)("h1",{style:{color:t},className:"text-xl",children:"Research Studio"})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[446,441,517,358],()=>t(4996)),_N_E=e.O()}]);