(()=>{var e={};e.id=979,e.ids=[979],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},2842:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>l.a,__next_app__:()=>h,originalPathname:()=>d,pages:()=>x,routeModule:()=>u,tree:()=>c});var r=s(482),a=s(9108),i=s(2563),l=s.n(i),n=s(8300),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);s.d(t,o);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,375)),"D:\\Abo Akademi\\P4\\web tech\\webshopproject2023-RashedulAlam\\frontend\\src\\app\\page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,3283)),"D:\\Abo Akademi\\P4\\web tech\\webshopproject2023-RashedulAlam\\frontend\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],x=["D:\\Abo Akademi\\P4\\web tech\\webshopproject2023-RashedulAlam\\frontend\\src\\app\\page.tsx"],d="/page",h={require:s,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},3088:(e,t,s)=>{Promise.resolve().then(s.bind(s,7037))},7037:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>g});var r,a=s(5344),i=s(3729),l=s(7979),n=s(7187);let o=({viewType:e,setViewType:t})=>(0,a.jsxs)("div",{className:"flex flex-row gap-4 items-center",children:[a.jsx("button",{"aria-label":"list view",className:"w-fit h-fit p-1",onClick:()=>t(n.b.LIST_VIEW),children:(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e===n.b.LIST_VIEW?"stroke-blue-400":"stroke-gray-400",children:[a.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),a.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),a.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),a.jsx("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),a.jsx("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),a.jsx("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]})}),a.jsx("button",{"aria-label":"grid view",className:"w-fit h-fit p-1",onClick:()=>t(n.b.GRID_VIEW),children:(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"gray",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e===n.b.GRID_VIEW?"stroke-blue-400":"stroke-gray-400",children:[a.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),a.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),a.jsx("rect",{x:"14",y:"14",width:"7",height:"7"}),a.jsx("rect",{x:"3",y:"14",width:"7",height:"7"})]})})]});var c=s(3123);!function(e){e.ADD="ADD",e.REMOVE="REMOVE"}(r||(r={}));let x=({product:e,viewType:t=n.b.LIST_VIEW,addToCart:s,removeFromCart:r,showActionButton:l,isExistsOnCart:o})=>{let[x,d]=(0,i.useState)(!1),h=(e,t)=>{d(!0),"ADD"==e?s&&s(t):r&&r(t),setTimeout(()=>{d(!1)},1e3)},{created_at:u,description:p,id:m,owner_name:w,price:j,title:g}=e,f=o&&o(e),v=f?"REMOVE":"ADD";return(0,a.jsxs)(a.Fragment,{children:[t===n.b.GRID_VIEW&&a.jsx("div",{className:"w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl",children:(0,a.jsxs)("div",{className:"px-4 py-3 w-72",children:[(0,a.jsxs)("p",{className:"text-white text-xs w-fit p-1 rounded-md bg-yellow-500",children:["Seller: ",w]}),a.jsx("p",{className:"text-lg font-bold text-blue-600 truncate block capitalize",children:g}),a.jsx("div",{className:"text-gray-400 text-xs py-2 min-h-40",children:p}),(0,a.jsxs)("p",{className:"text-white text-xs w-fit p-1 rounded-md bg-green-500",children:["Published: ",(0,c.F)(u)]}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsxs)("p",{className:"text-lg font-semibold text-blue-400 cursor-auto my-3",children:["$",j]}),l&&(0,a.jsxs)("button",{className:"ml-auto relative","aria-label":"add to cart",onClick:()=>h(v,e),disabled:x,type:"button",children:[x&&(0,a.jsxs)("svg",{className:"animate-spin h-8 w-8 text-white absolute z-10 -top-1.5 -left-1.5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[a.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"gray",strokeWidth:"4"}),a.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),f?(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-5 w-5",children:[a.jsx("circle",{cx:"9",cy:"21",r:"1"}),a.jsx("circle",{cx:"20",cy:"21",r:"1"}),a.jsx("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"}),a.jsx("line",{x1:"12",y1:"10",x2:"18",y2:"10"})]}):(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-5 w-5",children:[a.jsx("circle",{cx:"9",cy:"21",r:"1"}),a.jsx("circle",{cx:"20",cy:"21",r:"1"}),a.jsx("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"}),a.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"15"}),a.jsx("line",{x1:"9",y1:"12",x2:"15",y2:"12"})]})]})]})]})}),t===n.b.LIST_VIEW&&(0,a.jsxs)("div",{className:"w-full bg-white shadow-md rounded-xl duration-500 hover:scale-[1.02] hover:shadow-xl flex flex-row justify-between",children:[a.jsx("div",{className:"flex",children:(0,a.jsxs)("div",{className:"px-4 py-3 w-fit flex flex-col justify-start gap-1",children:[(0,a.jsxs)("p",{className:"text-white text-xs w-fit p-1 rounded-md bg-yellow-500",children:["Seller: ",w]}),a.jsx("p",{className:"text-lg font-bold text-blue-800 truncate block capitalize",children:g}),a.jsx("div",{className:"flex flex-row gap-2",children:(0,a.jsxs)("p",{className:"text-white text-xs w-fit p-1 rounded-md bg-green-500",children:["Published Date: ",(0,c.F)(u)]})}),(0,a.jsxs)("div",{className:"flex items-center mt-10",children:[(0,a.jsxs)("p",{className:"text-lg font-semibold text-blue-400 cursor-auto",children:["$",j]}),l&&(0,a.jsxs)("button",{className:"ml-auto relative","aria-label":"add to cart",type:"button",onClick:()=>h(v,e),children:[x&&(0,a.jsxs)("svg",{className:"animate-spin h-8 w-8 text-white absolute z-10 -top-1.5 -left-1.5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[a.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"gray",strokeWidth:"4"}),a.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),f?(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-5 w-5",children:[a.jsx("circle",{cx:"9",cy:"21",r:"1"}),a.jsx("circle",{cx:"20",cy:"21",r:"1"}),a.jsx("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"}),a.jsx("line",{x1:"12",y1:"10",x2:"18",y2:"10"})]}):(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-5 w-5",children:[a.jsx("circle",{cx:"9",cy:"21",r:"1"}),a.jsx("circle",{cx:"20",cy:"21",r:"1"}),a.jsx("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"}),a.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"15"}),a.jsx("line",{x1:"9",y1:"12",x2:"15",y2:"12"})]})]})]})]})}),a.jsx("div",{className:"flex max-w-96 px-4 py-3",children:a.jsx("div",{className:"text-gray-400 text-xs",children:p})})]})]})},d=({products:e,viewType:t,addToCart:s,removeFromCart:r,showActionButton:i,isExistsOnCart:l})=>{let n={viewType:t,addToCart:s,removeFromCart:r,showActionButton:i,isExistsOnCart:l};return a.jsx("div",{className:"flex flex-row gap-4 flex-wrap justify-start",children:e.map((e,t)=>a.jsx(x,{product:e,...n},t))})};var h=s(3586),u=s(8041),p=s(4460),m=s(1025),w=s(1216),j=s(9170);let g=()=>{let[e,t]=(0,i.useState)(n.b.GRID_VIEW),[s,r]=(0,i.useState)(""),[c,x]=(0,i.useState)(1),[g,f]=(0,i.useState)([]),[v,y]=(0,i.useState)(1),{addToCart:b,removeFromCart:N,isExistsOnCart:k}=(0,u.useCart)(),[A,P]=(0,i.useState)(!0),{isLoggedIn:L}=(0,p.useAuth)();return(0,i.useEffect)(()=>{P(!0),m.Z.get(w.Z.API_URLS.PRODUCT.PRODUCTS(c,s)).then(({data:e})=>{e&&(f(e.results),y(Math.ceil(e.count/w.Z.PAGINATION.PAGE_SIZE))),setTimeout(()=>{P(!1)},500)},()=>{setTimeout(()=>{P(!1)},500)})},[s,c]),(0,a.jsxs)("div",{className:"flex flex-col gap-4 min-w-full",children:[(0,a.jsxs)("div",{className:"flex flex-row justify-between w-full items-center",children:[a.jsx(l.Z,{onSearch:r,searchText:s}),a.jsx(o,{setViewType:t,viewType:e})]}),A?a.jsx(j.Z,{viewType:e}):a.jsx(d,{products:g,viewType:e,addToCart:b,removeFromCart:N,showActionButton:!!L,isExistsOnCart:k}),a.jsx(h.Z,{currentPage:c,totalPages:v,onPageChange:x})]})}},9170:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});var r=s(5344);s(3729);var a=s(4440),i=s(7187);let l=()=>r.jsx("div",{className:"w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl",children:(0,r.jsxs)("div",{className:"px-4 py-3 w-72",children:[r.jsx("p",{className:"text-white text-xs w-20 p-1 rounded-md",children:r.jsx(a.Z,{})}),r.jsx("p",{className:"text-lg font-bold text-blue-600 truncate block capitalize",children:r.jsx(a.Z,{})}),r.jsx("div",{className:"text-gray-400 text-xs py-2",children:r.jsx(a.Z,{className:"h-40"})}),r.jsx("p",{className:"text-white text-xs w-20 p-1 rounded-md",children:r.jsx(a.Z,{})}),r.jsx("div",{className:"flex items-center",children:r.jsx("p",{className:"text-lg font-semibold text-blue-400 cursor-auto my-3 w-20",children:r.jsx(a.Z,{})})})]})}),n=()=>(0,r.jsxs)("div",{className:"w-full bg-white shadow-md rounded-xl duration-500 hover:scale-[1.02] hover:shadow-xl flex flex-row justify-between",children:[r.jsx("div",{className:"flex",children:(0,r.jsxs)("div",{className:"px-4 py-3 w-fit flex flex-col justify-start gap-1",children:[r.jsx("p",{className:"text-white text-xs w-20 rounded-md",children:r.jsx(a.Z,{})}),r.jsx("p",{className:"text-lg font-bold text-blue-800 truncate block capitalize w-40",children:r.jsx(a.Z,{})}),r.jsx("div",{className:"flex flex-row gap-2",children:r.jsx("p",{className:"text-white text-xs w-20 h-8 rounded-md ",children:r.jsx(a.Z,{})})}),r.jsx("div",{className:"flex items-center mt-10",children:r.jsx("p",{className:"text-lg font-semibold text-blue-400 cursor-auto w-20",children:r.jsx(a.Z,{})})})]})}),r.jsx("div",{className:"flex w-80 px-4 py-3",children:r.jsx("div",{className:"text-gray-400 text-xs w-full",children:r.jsx(a.Z,{className:"w-80 h-40"})})})]}),o=({viewType:e})=>{let t=Array(8).fill(1);return r.jsx("div",{className:"flex flex-row gap-4 flex-wrap justify-start",children:t.map((t,s)=>e==i.b.GRID_VIEW?r.jsx(l,{},s):r.jsx(n,{},s))})}},3586:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(5344);s(3729);let a=({currentPage:e=1,totalPages:t=0,onPageChange:s})=>(0,r.jsxs)("div",{className:"flex flex-row p-1 gap-2 items-center justify-center w-full",children:[r.jsx("button",{"aria-label":"previous page",onClick:()=>s&&s(e-1),disabled:1==e,children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"gray",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("polyline",{points:"15 18 9 12 15 6"})})}),(0,r.jsxs)("span",{className:"text-blue-500",children:[e," of ",t]}),r.jsx("button",{"aria-label":"next page",onClick:()=>s&&s(e+1),disabled:e==t,children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"gray",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("polyline",{points:"9 18 15 12 9 6"})})})]})},7187:(e,t,s)=>{"use strict";var r;s.d(t,{b:()=>r}),function(e){e[e.LIST_VIEW=0]="LIST_VIEW",e[e.GRID_VIEW=1]="GRID_VIEW"}(r||(r={}))},7979:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(5344);s(3729);let a=({searchText:e,onSearch:t})=>(0,r.jsxs)("div",{className:"flex relative h-12",children:[(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"stroke-gray-400 absolute left-2 top-3",children:[r.jsx("circle",{cx:"11",cy:"11",r:"8"}),r.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),r.jsx("input",{id:"product-search",type:"text",className:"placeholder shadow appearance-none border rounded w-full py-3 px-4 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"search products",defaultValue:e,onChange:e=>t(e.target.value)})]})},1025:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n,z:()=>l});var r=s(1216),a=s(7665);let i=a.default.create({baseURL:r.Z.API_HOST,timeout:4e4,headers:{Accept:"application/json","Content-Type":"application/json; charset=utf-8"}}),l=a.default.create({baseURL:r.Z.API_HOST,timeout:4e4,headers:{Accept:"application/json","Content-Type":"application/json; charset=utf-8"}});l.interceptors.request.use(e=>{let t=localStorage.getItem(r.Z.LOCAL_STORAGE.TOKEN);return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e)),l.interceptors.response.use(e=>e,e=>(e.response&&401===e.response.status&&(localStorage.clear(),window.location.href="/login"),Promise.reject(e)));let n=i},3123:(e,t,s)=>{"use strict";s.d(t,{F:()=>a});var r=s(9927);let a=e=>(0,r.WU)(e,"MMM d, yyyy, h:mm a")},375:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var r=s(5036);let a=(0,s(6843).createProxy)(String.raw`D:\Abo Akademi\P4\web tech\webshopproject2023-RashedulAlam\frontend\src\components\LandingPage\landingPage.tsx`),{__esModule:i,$$typeof:l}=a,n=a.default;function o(){return r.jsx("main",{className:"container mx-auto",children:r.jsx("div",{className:"flex justify-center min-h-[87vh]",children:r.jsx(n,{})})})}},3881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(337);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,446,480,780,729],()=>s(2842));module.exports=r})();