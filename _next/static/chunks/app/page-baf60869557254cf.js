(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{4996:(e,t,r)=>{Promise.resolve().then(r.bind(r,7174))},1933:(e,t,r)=>{var n=r(2673).Symbol;e.exports=n},3600:(e,t,r)=>{var n=r(1933),s=r(8273),o=r(6798),i=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?s(e):o(e)}},1004:(e,t,r)=>{var n=r(7550),s=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(s,""):e}},4952:(e,t,r)=>{var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=n},8273:(e,t,r)=>{var n=r(1933),s=Object.prototype,o=s.hasOwnProperty,i=s.toString,a=n?n.toStringTag:void 0;e.exports=function(e){var t=o.call(e,a),r=e[a];try{e[a]=void 0;var n=!0}catch(e){}var s=i.call(e);return n&&(t?e[a]=r:delete e[a]),s}},6798:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},2673:(e,t,r)=>{var n=r(4952),s="object"==typeof self&&self&&self.Object===Object&&self,o=n||s||Function("return this")();e.exports=o},7550:e=>{var t=/\s/;e.exports=function(e){for(var r=e.length;r--&&t.test(e.charAt(r)););return r}},719:(e,t,r)=>{var n=r(5255),s=r(1332),o=r(2816),i=Math.max,a=Math.min;e.exports=function(e,t,r){var l,c,f,u,d,m,h=0,x=!1,p=!1,v=!0;if("function"!=typeof e)throw TypeError("Expected a function");function g(t){var r=l,n=c;return l=c=void 0,h=t,u=e.apply(n,r)}function w(e){var r=e-m,n=e-h;return void 0===m||r>=t||r<0||p&&n>=f}function j(){var e,r,n,o=s();if(w(o))return b(o);d=setTimeout(j,(e=o-m,r=o-h,n=t-e,p?a(n,f-r):n))}function b(e){return(d=void 0,v&&l)?g(e):(l=c=void 0,u)}function y(){var e,r=s(),n=w(r);if(l=arguments,c=this,m=r,n){if(void 0===d)return h=e=m,d=setTimeout(j,t),x?g(e):u;if(p)return clearTimeout(d),d=setTimeout(j,t),g(m)}return void 0===d&&(d=setTimeout(j,t)),u}return t=o(t)||0,n(r)&&(x=!!r.leading,f=(p="maxWait"in r)?i(o(r.maxWait)||0,t):f,v="trailing"in r?!!r.trailing:v),y.cancel=function(){void 0!==d&&clearTimeout(d),h=0,l=m=c=d=void 0},y.flush=function(){return void 0===d?u:b(s())},y}},5255:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},4480:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},3480:(e,t,r)=>{var n=r(3600),s=r(4480);e.exports=function(e){return"symbol"==typeof e||s(e)&&"[object Symbol]"==n(e)}},1332:(e,t,r)=>{var n=r(2673);e.exports=function(){return n.Date.now()}},8640:(e,t,r)=>{var n=r(719),s=r(5255);e.exports=function(e,t,r){var o=!0,i=!0;if("function"!=typeof e)throw TypeError("Expected a function");return s(r)&&(o="leading"in r?!!r.leading:o,i="trailing"in r?!!r.trailing:i),n(e,t,{leading:o,maxWait:t,trailing:i})}},2816:(e,t,r)=>{var n=r(1004),s=r(5255),o=r(3480),i=0/0,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return i;if(s(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=s(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=l.test(e);return r||c.test(e)?f(e.slice(2),r?2:8):a.test(e)?i:+e}},7174:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>g});var n=r(5155),s=r(2115),o=r(5752),i=r(9374);let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var c={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let f=(0,s.forwardRef)((e,t)=>{let{color:r="currentColor",size:n=24,strokeWidth:o=2,absoluteStrokeWidth:i,className:a="",children:f,iconNode:u,...d}=e;return(0,s.createElement)("svg",{ref:t,...c,width:n,height:n,stroke:r,strokeWidth:i?24*Number(o)/Number(n):o,className:l("lucide",a),...d},[...u.map(e=>{let[t,r]=e;return(0,s.createElement)(t,r)}),...Array.isArray(f)?f:[f]])}),u=((e,t)=>{let r=(0,s.forwardRef)((r,n)=>{let{className:o,...i}=r;return(0,s.createElement)(f,{ref:n,iconNode:t,className:l("lucide-".concat(a(e)),o),...i})});return r.displayName="".concat(e),r})("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]),d=e=>{let{scrollDecimal:t}=e;return(0,n.jsx)("div",{className:"fixed bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20 scale-2",style:{opacity:1},children:(0,n.jsxs)("div",{className:"text-white",style:{animation:"bounce 1s ease-in-out infinite",transform:"translateY(0px)"},children:[(0,n.jsx)("style",{children:"\n            @keyframes bounce {\n              0%, 100% {\n                transform: translateY(0px);\n              }\n              50% {\n                transform: translateY(-12px);\n              }\n            }\n          "}),(0,n.jsx)(u,{className:"text-white w-8 h-8"})]})})},m=e=>{let{width:t,height:r,scale:s=1,strokeWidth:o=2,strokeColor:i="#000000",blur:a=0,oblongRatio:l=1,rotation:c=0,opacity:f=1}=e,u=48*l;return(0,n.jsx)("div",{style:{transform:"scale(".concat(s,") rotate(").concat(c,"deg)"),willChange:"transform",width:t,height:r,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,n.jsxs)("svg",{width:"100%",height:"100%",viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg",children:[a>0&&(0,n.jsx)("defs",{children:(0,n.jsx)("filter",{id:"blur",children:(0,n.jsx)("feGaussianBlur",{stdDeviation:a})})}),(0,n.jsx)("ellipse",{cx:"100",cy:"100",rx:48-.05*u,ry:u,fill:"rgb(255, 255, 255)",stroke:i,strokeWidth:o,strokeOpacity:f,filter:a>0?"url(#blur)":void 0})]})})};m.displayName="Circle";var h=r(8640),x=r.n(h);let p=()=>{let[e,t]=(0,s.useState)({width:window.innerWidth,height:window.innerHeight});return(0,s.useEffect)(()=>{let e=x()(()=>{t({width:window.innerWidth,height:window.innerHeight})},250);return window.addEventListener("resize",e,{passive:!0}),e(),()=>window.removeEventListener("resize",e)},[]),e},v=s.memo(e=>{let{scrollProgress:t}=e,r=(0,s.useMemo)(()=>t>=.85?"opacity-100":"opacity-0",[t]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"fixed top-0 left-0 w-full transition-opacity duration-300 ".concat(r),children:(0,n.jsx)(o.A,{text_colour:"black"})}),(0,n.jsx)("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ".concat(r),children:(0,n.jsxs)("nav",{className:"flex flex-col items-center gap-4",children:[(0,n.jsx)("a",{href:"/approach",className:"text-black hover:text-blue-600",children:"Approach"}),(0,n.jsx)("a",{href:"/people",className:"text-black hover:text-blue-600",children:"People"}),(0,n.jsx)("a",{href:"/projects",className:"text-black hover:text-blue-600",children:"Projects"}),(0,n.jsx)("a",{href:"/papers",className:"text-black hover:text-blue-600",children:"Papers"})]})}),(0,n.jsx)(i.A,{className:"fixed bottom-0 left-0 w-full transition-opacity duration-300 ".concat(r)})]})});function g(){let[e,t]=(0,s.useState)({progress:0,decimal:0}),[r,o]=(0,s.useState)(!1),i=(0,s.useRef)(void 0),a=(0,s.useCallback)(()=>{let e=window.scrollY,r=document.documentElement.scrollHeight-window.innerHeight;if(0===r)return;let n=Math.min(Math.max(e/r,0)+.05,1),s=n**2*100;t({progress:n,decimal:s})},[]),l=(0,s.useCallback)(()=>{i.current&&cancelAnimationFrame(i.current),i.current=requestAnimationFrame(a)},[a]);(0,s.useEffect)(()=>(o(!0),document.documentElement.style.overscrollBehavior="none",window.addEventListener("scroll",l,{passive:!0}),l(),()=>{i.current&&cancelAnimationFrame(i.current),document.documentElement.style.overscrollBehavior="",window.removeEventListener("scroll",l)}),[l]),p().width;let c=(0,s.useMemo)(()=>Math.max(e.decimal,0),[e.decimal]),f=(0,s.useMemo)(()=>e.progress>=.85?0:1,[e.progress]);return r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"relative w-full",children:[(0,n.jsx)(d,{scrollDecimal:e.decimal}),(0,n.jsx)("div",{className:"h-screen"}),(0,n.jsx)("div",{className:"h-screen"}),(0,n.jsx)("div",{className:"h-screen"}),(0,n.jsx)("div",{className:"h-screen"}),(0,n.jsx)("div",{className:"fixed top-0 left-0 w-full h-screen overflow-hidden transition-colors duration-1000 ".concat(e.progress>=.85?"bg-white":"bg-black"),children:[{color:"red",scaleOffset:8,oblongOffset:18.5,rotationOffset:0,strokewidth:7,opacity:1},{color:"orange",scaleOffset:8.25,oblongOffset:19.2,rotationOffset:5,strokewidth:7,opacity:1},{color:"yellow",scaleOffset:8.5,oblongOffset:20,rotationOffset:10,strokewidth:7,opacity:1},{color:"green",scaleOffset:8.75,oblongOffset:21,rotationOffset:15,strokewidth:7,opacity:1},{color:"blue",scaleOffset:9,oblongOffset:22,rotationOffset:20,strokewidth:7,opacity:1},{color:"indigo",scaleOffset:9.25,oblongOffset:23,rotationOffset:25,strokewidth:7,opacity:1},{color:"violet",scaleOffset:9.5,oblongOffset:24,rotationOffset:30,strokewidth:7,opacity:1}].map(e=>{let{color:t,scaleOffset:r,oblongOffset:s,rotationOffset:o,strokewidth:i}=e;return(0,n.jsx)("div",{className:"absolute inset-0 flex items-center justify-center transition-opacity duration-300",style:{opacity:f},children:(0,n.jsx)(m,{width:"55vmin",height:"55vmin",scale:c/(.9*r),oblongRatio:Math.max(1,c/(1*s)),blur:0,rotation:2*o+c,strokeColor:t,strokeWidth:i*c/30,opacity:.2+c/90})},s+t)})}),(0,n.jsx)("div",{className:"h-screen"}),(0,n.jsx)("div",{className:"h-screen"}),(0,n.jsx)("div",{className:"h-screen"})]}),(0,n.jsx)(v,{scrollProgress:e.progress})]}):(0,n.jsx)("div",{className:"relative w-full",children:[...Array(8)].map((e,t)=>(0,n.jsx)("div",{className:"h-screen"},t))})}v.displayName="HeaderFooter"},9374:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(5155);let s=e=>{let{className:t}=e;return(0,n.jsx)("a",{className:"".concat(t),href:"mailto:contact@electroniclife.ai",children:"Contact Us"})},o=e=>{let{className:t}=e;return(0,n.jsxs)("footer",{className:"p-12 mb-0 ".concat(t),children:[(0,n.jsx)(s,{className:"text-m underline text-black hover:text-blue-400"}),(0,n.jsx)("p",{className:"text-sm mt-2 text-black",children:"\xa9 2024 S. Manghani, E. D’Souza, T. Savage"})]})}},5752:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(5155);let s=e=>{let{text_colour:t,className:r}=e;return(0,n.jsxs)("header",{className:"pt-4 ml-10 mt-10",children:["white"===t?(0,n.jsx)("img",{src:"/electronic_life.png",alt:"Electronic Life",className:"h-14"}):(0,n.jsx)("img",{src:"/electronic_life_black.png",alt:"Electronic Life",className:"h-14"}),(0,n.jsx)("h1",{style:{color:t},className:"text-xl",children:"Research Studio"})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[441,517,358],()=>t(4996)),_N_E=e.O()}]);