(()=>{var e={};e.id=989,e.ids=[989],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},477:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c});var s=r(482),i=r(9108),a=r(2563),o=r.n(a),n=r(8300),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);r.d(t,l);let c=["",{children:["myitems",{children:["add-product",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3476)),"D:\\Abo Akademi\\P4\\web tech\\webshopproject2023-RashedulAlam\\frontend\\src\\app\\myitems\\add-product\\page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,3283)),"D:\\Abo Akademi\\P4\\web tech\\webshopproject2023-RashedulAlam\\frontend\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["D:\\Abo Akademi\\P4\\web tech\\webshopproject2023-RashedulAlam\\frontend\\src\\app\\myitems\\add-product\\page.tsx"],u="/myitems/add-product/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/myitems/add-product/page",pathname:"/myitems/add-product",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},8220:(e,t,r)=>{Promise.resolve().then(r.bind(r,4001))},9239:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(5344),i=r(4460),a=r(8428),o=r(3729);let n=function(e){return t=>{let{isLoggedIn:r}=(0,i.useAuth)(),n=(0,a.useRouter)();return((0,o.useEffect)(()=>{r||n.push("/login")},[r,n]),r)?s.jsx(e,{...t}):null}}},4001:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var s=r(5344),i=r(3729),a=r(708),o=r(1025),n=r(1216),l=r(9697);let c=(0,r(9239).Z)(()=>{let{register:e,handleSubmit:t,reset:r,formState:{errors:c}}=(0,a.cI)(),[d,u]=(0,i.useState)(!1),p=e=>{u(!0),o.z.post(n.Z.API_URLS.PRODUCT.ADD_PRODUCT,e).then(()=>{r(),l.toast.success("Producted created !")},()=>{l.toast.error("Could not create product !")})};return s.jsx("div",{className:"flex justify-center items-center min-w-full ",children:(0,s.jsxs)("div",{className:"px-4 pt-6 pb-8 mb-4 w-full max-w-xl",children:[s.jsx("h2",{className:"text-3xl font-bold mb-6 text-left text-blue-600",children:s.jsx("span",{className:" bg-clip-text",children:"Add Product"})}),(0,s.jsxs)("form",{onSubmit:e=>{e.preventDefault(),t(p)(e)},noValidate:!0,children:[(0,s.jsxs)("div",{className:"mb-6 flex flex-col",children:[s.jsx("label",{htmlFor:"title",className:"block text-gray-700 text-sm font-bold mb-2",children:"Title"}),s.jsx("div",{children:s.jsx("input",{id:"title",...e("title",{required:!0}),type:"text",className:"shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Enter title"})}),c.title?.type==="required"&&s.jsx("p",{role:"alert",className:"text-red-600 font-semibold mt-2",children:"Title is required"})]}),(0,s.jsxs)("div",{className:"mb-6",children:[s.jsx("label",{htmlFor:"price",className:"block text-gray-700 text-sm font-bold mb-2",children:"Price"}),s.jsx("div",{children:s.jsx("input",{id:"price",type:"number",...e("price",{required:!0,min:{value:1e-4,message:"Minimum value is 1"}}),className:"shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Enter price"})}),c.price?.type==="required"&&s.jsx("p",{role:"alert",className:"text-red-600 font-semibold mt-2",children:"Price is required"}),c.price?.type==="min"&&s.jsx("p",{role:"alert",className:"text-red-600 font-semibold mt-2",children:"Minimum Price is 1"})]}),(0,s.jsxs)("div",{className:"mb-6",children:[s.jsx("label",{htmlFor:"description",className:"block text-gray-700 text-sm font-bold mb-2",children:"Description"}),s.jsx("div",{children:s.jsx("textarea",{id:"description",...e("description",{required:!0}),className:"shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Enter short description"})}),c?.description?.type==="required"&&s.jsx("p",{role:"alert",className:"text-red-600 font-semibold mt-2",children:"Description is required"})]}),s.jsx("div",{className:"flex",children:s.jsx("button",{type:"submit",disabled:d,className:"bg-blue-600 hover:bg-blue-800  text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-fit",children:"Save"})})]})]})})})},1025:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n,z:()=>o});var s=r(1216),i=r(7665);let a=i.default.create({baseURL:s.Z.API_HOST,timeout:4e4,headers:{Accept:"application/json","Content-Type":"application/json; charset=utf-8"}}),o=i.default.create({baseURL:s.Z.API_HOST,timeout:4e4,headers:{Accept:"application/json","Content-Type":"application/json; charset=utf-8"}});o.interceptors.request.use(e=>{let t=localStorage.getItem(s.Z.LOCAL_STORAGE.TOKEN);return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e)),o.interceptors.response.use(e=>e,e=>(e.response&&401===e.response.status&&(localStorage.clear(),window.location.href="/login"),Promise.reject(e)));let n=a},3476:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(5036);let i=(0,r(6843).createProxy)(String.raw`D:\Abo Akademi\P4\web tech\webshopproject2023-RashedulAlam\frontend\src\components\product\addProduct.tsx`),{__esModule:a,$$typeof:o}=i,n=i.default,l=()=>s.jsx("main",{className:"container mx-auto",children:s.jsx(n,{})})},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(337);let i=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,446,480,708,72],()=>r(477));module.exports=s})();