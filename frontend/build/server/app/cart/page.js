(()=>{var e={};e.id=565,e.ids=[565],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},8182:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>x,pages:()=>d,routeModule:()=>p,tree:()=>c});var r=s(482),l=s(9108),i=s(2563),o=s.n(i),a=s(8300),n={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>a[e]);s.d(t,n);let c=["",{children:["cart",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,9270)),"D:\\Abo Akademi\\P4\\web tech\\webshopproject2023-RashedulAlam\\frontend\\src\\app\\cart\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,3283)),"D:\\Abo Akademi\\P4\\web tech\\webshopproject2023-RashedulAlam\\frontend\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["D:\\Abo Akademi\\P4\\web tech\\webshopproject2023-RashedulAlam\\frontend\\src\\app\\cart\\page.tsx"],x="/cart/page",u={require:s,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:l.x.APP_PAGE,page:"/cart/page",pathname:"/cart",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},3041:(e,t,s)=>{Promise.resolve().then(s.bind(s,4029))},9239:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(5344),l=s(4460),i=s(8428),o=s(3729);let a=function(e){return t=>{let{isLoggedIn:s}=(0,l.useAuth)(),a=(0,i.useRouter)();return((0,o.useEffect)(()=>{s||a.push("/login")},[s,a]),s)?r.jsx(e,{...t}):null}}},4029:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u});var r=s(5344),l=s(8041),i=s(8428),o=s(3729),a=s(9239),n=s(1025),c=s(1216),d=s(4780),x=s(9697);let u=(0,a.Z)(()=>{let e=(0,i.useRouter)(),{products:t,removeFromCart:s,mergeUpdatedProducts:a,clearAll:u}=(0,l.useCart)(),[p,m]=(0,o.useState)(!1),[h,f]=(0,o.useState)(),[j,b]=(0,o.useState)([]),[g,w]=(0,o.useState)(!1),v=()=>{e.push("/")},y=t.reduce((e,t)=>e+Number(t.price),0),N=j.reduce((e,t)=>e+Number(t.price),0),P=()=>{e.push("/myitems")};return r.jsx("div",{className:"flex flex-row w-full text-gray-950 gap-6 ",children:g?(0,r.jsxs)("div",{className:"flex flex-col gap-10 justify-center border-gray-600 border-1 w-full",children:[(0,r.jsxs)("div",{className:"flex flex-row justify-between items-center ",children:[r.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Purchase Summary"}),(0,r.jsxs)("p",{className:"text-xl text-gray-600 font-bold",children:[j.length," Items"]})]}),r.jsx("hr",{}),(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsxs)("div",{className:"flex flex-row justify-between mb-2",children:[r.jsx("div",{className:"text-sm font-bold text-blue-600",children:"Title"}),r.jsx("div",{className:"text-sm font-bold text-blue-600",children:"Price"})]}),j.map((e,t)=>(0,r.jsxs)("div",{className:"flex flex-row justify-between",children:[r.jsx("div",{className:"text-sm font-semibold flex flex-col gap-1",children:r.jsx("span",{children:e.title})}),r.jsx("div",{className:"text-sm font-semibold ",children:e.price})]},t))]}),r.jsx("hr",{}),(0,r.jsxs)("div",{className:"flex flex-row justify-between items-center gap-4",children:[r.jsx("div",{className:"flex",children:(0,r.jsxs)("button",{className:"text-xs font-semibold text-blue-600 gap-2 flex flex-row items-center",onClick:()=>v(),children:[(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("polyline",{points:"19 12 5 12"}),r.jsx("polyline",{points:"12 19 5 12 12 5"})]}),"Continue Shopping"]})}),(0,r.jsxs)("div",{className:"flex flex-col gap-4 items-end",children:[r.jsx("div",{className:"flex",children:(0,r.jsxs)("h2",{className:"font-bold text-lg text-blue-700  ",children:["Total Cost: ",N.toFixed(2)," Euro"]})}),r.jsx("div",{className:"flex",children:(0,r.jsxs)("button",{className:"text-xs font-semibold text-blue-600 gap-2 flex flex-row items-center",onClick:()=>P(),children:[(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("polyline",{points:"19 12 5 12"}),r.jsx("polyline",{points:"12 19 5 12 12 5"})]}),"Goto Inventory"]})})]})]})]}):(0,r.jsxs)("div",{className:"flex flex-col gap-10 justify-center border-gray-600 border-1 w-full",children:[(0,r.jsxs)("div",{className:"flex flex-row justify-between items-center ",children:[r.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Shopping Cart"}),(0,r.jsxs)("p",{className:"text-xl text-gray-600 font-bold",children:[t.length," Items"]})]}),r.jsx("hr",{}),(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsxs)("div",{className:"flex flex-row justify-between mb-2",children:[r.jsx("div",{className:"text-sm font-bold text-blue-600",children:"Title"}),r.jsx("div",{className:"text-sm font-bold text-blue-600",children:"Price"})]}),t.map((e,t)=>(0,r.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,r.jsxs)("div",{className:"text-sm font-semibold flex flex-col gap-1",children:[r.jsx("span",{children:e.title}),h?.error?.[e.id]&&r.jsx("p",{role:"alert",className:"text-yellow-600 font-semibold mt-2",children:h?.error?.[e.id]}),r.jsx("button",{className:"text-xs font-semibold text-red-600 w-fit",onClick:()=>s&&s(e),children:"Remove"})]}),r.jsx("div",{className:"text-sm font-semibold ",children:e.price})]},t))]}),r.jsx("hr",{}),(0,r.jsxs)("div",{className:"flex flex-row justify-between items-center gap-4",children:[r.jsx("div",{className:"flex",children:(0,r.jsxs)("button",{className:"text-xs font-semibold text-blue-600 gap-2 flex flex-row items-center",onClick:()=>v(),children:[(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("polyline",{points:"19 12 5 12"}),r.jsx("polyline",{points:"12 19 5 12 12 5"})]}),"Continue Shopping"]})}),(0,r.jsxs)("div",{className:"flex flex-col gap-4 items-end",children:[r.jsx("div",{className:"flex",children:(0,r.jsxs)("h2",{className:"font-bold text-lg text-blue-700  ",children:["Total Cost: ",y.toFixed(2)," Euro"]})}),r.jsx("div",{className:"flex",children:(0,r.jsxs)("button",{className:"bg-blue-400 p-3 rounded-md text-white hover:bg-blue-900 relative w-24",disabled:!t.length||p,onClick:()=>{m(!0);let e=t.map(e=>({id:e.id,price:e.price}));n.z.post(c.Z.API_URLS.PAY,e).then(e=>{w(!0),b([...t]),m(!1),u&&u()},e=>{console.log(e),e?.response?.status==d.WE.UnprocessableEntity?(x.toast.error("Please fix the validation error and try payment again !"),f(e?.response?.data),e?.response?.data?.updated_products&&a&&a(e?.response?.data?.updated_products||[])):x.toast.error("Unknown error occured during payment !"),m(!1)})},children:[p&&(0,r.jsxs)("svg",{className:"animate-spin h-5 w-5 text-white absolute z-10 left-[45%]",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[r.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"black",strokeWidth:"4"}),r.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Pay"]})})]})]})]})})})},1025:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a,z:()=>o});var r=s(1216),l=s(7665);let i=l.default.create({baseURL:r.Z.API_HOST,timeout:4e4,headers:{Accept:"application/json","Content-Type":"application/json; charset=utf-8"}}),o=l.default.create({baseURL:r.Z.API_HOST,timeout:4e4,headers:{Accept:"application/json","Content-Type":"application/json; charset=utf-8"}});o.interceptors.request.use(e=>{let t=localStorage.getItem(r.Z.LOCAL_STORAGE.TOKEN);return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e)),o.interceptors.response.use(e=>e,e=>(e.response&&401===e.response.status&&(localStorage.clear(),window.location.href="/login"),Promise.reject(e)));let a=i},9270:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var r=s(5036);let l=(0,s(6843).createProxy)(String.raw`D:\Abo Akademi\P4\web tech\webshopproject2023-RashedulAlam\frontend\src\components\cartDetails\cartDetails.tsx`),{__esModule:i,$$typeof:o}=l,a=l.default;s(2);let n=()=>r.jsx("div",{className:"container mx-auto",children:r.jsx(a,{})})},3881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var r=s(337);let l=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},4780:(e,t,s)=>{"use strict";s.d(t,{WE:()=>h});let{Axios:r,AxiosError:l,CanceledError:i,isCancel:o,CancelToken:a,VERSION:n,all:c,Cancel:d,isAxiosError:x,spread:u,toFormData:p,AxiosHeaders:m,HttpStatusCode:h,formToJSON:f,getAdapter:j,mergeConfig:b}=s(7665).default}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,446,480,72],()=>s(8182));module.exports=r})();