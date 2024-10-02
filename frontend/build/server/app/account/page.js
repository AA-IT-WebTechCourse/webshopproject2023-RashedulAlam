(()=>{var e={};e.id=346,e.ids=[346],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},1563:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d});var r=s(482),a=s(9108),o=s(2563),n=s.n(o),l=s(8300),i={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>l[e]);s.d(t,i);let d=["",{children:["account",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,3033)),"D:\\Abo Akademi\\P4\\web tech\\webshopproject2023-RashedulAlam\\frontend\\src\\app\\account\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,3283)),"D:\\Abo Akademi\\P4\\web tech\\webshopproject2023-RashedulAlam\\frontend\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\Abo Akademi\\P4\\web tech\\webshopproject2023-RashedulAlam\\frontend\\src\\app\\account\\page.tsx"],u="/account/page",p={require:s,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/account/page",pathname:"/account",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},2101:(e,t,s)=>{Promise.resolve().then(s.bind(s,4234))},9239:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});var r=s(5344),a=s(4460),o=s(8428),n=s(3729);let l=function(e){return t=>{let{isLoggedIn:s}=(0,a.useAuth)(),l=(0,o.useRouter)();return((0,n.useEffect)(()=>{s||l.push("/login")},[s,l]),s)?r.jsx(e,{...t}):null}}},4234:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var r=s(5344),a=s(3729),o=s(708),n=s(1025),l=s(1216),i=s(4780),d=s(9697);let c=(0,s(9239).Z)(()=>{let{register:e,handleSubmit:t,watch:s,reset:c,setError:u,formState:{errors:p}}=(0,o.cI)(),m=e=>{let t={old_password:e.password,new_password:e.newPassword};n.z.post(l.Z.API_URLS.USER_MANAGEMENT.UPDATE_USER_PASSWORD,t).then(()=>{d.toast.success("Password successfully updated !"),c()},e=>{e?.response?.status==i.WE.BadRequest&&e.response?.data?.old_password&&u("root.serverError",{type:"400",message:e.response?.data?.old_password[0]}),d.toast.error("Password could not be updated !")})},[x,h]=(0,a.useState)();return(0,a.useEffect)(()=>{n.z.get(l.Z.API_URLS.USER_MANAGEMENT.CURRENT_USER).then(e=>{e.status==i.WE.Ok&&h(e.data)},e=>{console.log(e)})},[]),r.jsx("div",{className:"flex justify-center items-center w-full",children:(0,r.jsxs)("div",{className:"px-4 pt-6 pb-8 mb-4 w-full max-w-lg",children:[r.jsx("h2",{className:"text-3xl font-bold mb-6 text-center ",children:r.jsx("span",{className:"text-blue-500 bg-clip-text",children:"Account Setting"})}),(0,r.jsxs)("form",{onSubmit:e=>{e.preventDefault(),t(m)(e)},noValidate:!0,children:[(0,r.jsxs)("div",{className:"mb-6",children:[r.jsx("label",{htmlFor:"username",className:"block text-gray-700 text-sm font-bold mb-2",children:"Username"}),r.jsx("div",{children:r.jsx("input",{defaultValue:x?.username||"",id:"username",type:"text",className:"shadow appearance-none border rounded w-full py-3 px-4 text-gray-400 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Enter username",disabled:!0})})]}),(0,r.jsxs)("div",{className:"mb-6",children:[r.jsx("label",{htmlFor:"email",className:"block text-gray-700 text-sm font-bold mb-2",children:"Email"}),r.jsx("div",{children:r.jsx("input",{defaultValue:x?.email||"",id:"email",type:"email",className:"shadow appearance-none border rounded w-full py-3 px-4 text-gray-400 leading-tight focus:outline-none focus:shadow-outline",disabled:!0,placeholder:"Enter email"})})]}),(0,r.jsxs)("div",{className:"mb-6",children:[r.jsx("label",{htmlFor:"password",className:"block text-gray-700 text-sm font-bold mb-2",children:"Password"}),r.jsx("div",{children:r.jsx("input",{id:"password",type:"password",...e("password",{required:!0}),className:"shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Enter password"})}),p.password?.type==="required"&&r.jsx("p",{role:"alert",className:"text-red-600 font-semibold mt-2",children:"Password is required"})]}),(0,r.jsxs)("div",{className:"mb-6",children:[r.jsx("label",{htmlFor:"new_password",className:"block text-gray-700 text-sm font-bold mb-2",children:"New Password"}),r.jsx("div",{children:r.jsx("input",{id:"new_password",type:"password",...e("newPassword",{required:!0}),className:"shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Enter password"})}),p.password?.type==="required"&&r.jsx("p",{role:"alert",className:"text-red-600 font-semibold mt-2",children:"New Password is required"})]}),(0,r.jsxs)("div",{className:"mb-6",children:[r.jsx("label",{htmlFor:"confirm_password",className:"block text-gray-700 text-sm font-bold mb-2",children:"Confirm Password"}),r.jsx("div",{children:r.jsx("input",{id:"confirm_password",type:"password",...e("newConfirmPassword",{required:!0,validate:e=>e===s("newPassword")||"Passwords do not match"}),className:"shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Confirm password"})}),p.newConfirmPassword?.type==="required"&&r.jsx("p",{role:"alert",className:"text-red-600 font-semibold mt-2",children:"New Confirm Password is required"}),p.newConfirmPassword?.message&&r.jsx("p",{role:"alert",className:"text-red-600 font-semibold mt-2",children:"New Passwords do not match"})]}),p?.root?.serverError&&r.jsx("div",{className:"flex",children:r.jsx("p",{role:"alert",className:"text-red-600 font-semibold mt-2",children:p?.root?.serverError?.message})}),r.jsx("div",{className:"flex items-center justify-center mt-8",children:r.jsx("button",{type:"submit",className:"bg-gradient-to-r bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full",children:"Update Password"})})]})]})})})},1025:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l,z:()=>n});var r=s(1216),a=s(7665);let o=a.default.create({baseURL:r.Z.API_HOST,timeout:4e4,headers:{Accept:"application/json","Content-Type":"application/json; charset=utf-8"}}),n=a.default.create({baseURL:r.Z.API_HOST,timeout:4e4,headers:{Accept:"application/json","Content-Type":"application/json; charset=utf-8"}});n.interceptors.request.use(e=>{let t=localStorage.getItem(r.Z.LOCAL_STORAGE.TOKEN);return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e)),n.interceptors.response.use(e=>e,e=>(e.response&&401===e.response.status&&(localStorage.clear(),window.location.href="/login"),Promise.reject(e)));let l=o},3033:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var r=s(5036);let a=(0,s(6843).createProxy)(String.raw`D:\Abo Akademi\P4\web tech\webshopproject2023-RashedulAlam\frontend\src\components\account\updateAccount.tsx`),{__esModule:o,$$typeof:n}=a,l=a.default;s(2);let i=()=>r.jsx("div",{className:"container mx-auto",children:r.jsx(l,{})})},3881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(337);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},4780:(e,t,s)=>{"use strict";s.d(t,{WE:()=>h});let{Axios:r,AxiosError:a,CanceledError:o,isCancel:n,CancelToken:l,VERSION:i,all:d,Cancel:c,isAxiosError:u,spread:p,toFormData:m,AxiosHeaders:x,HttpStatusCode:h,formToJSON:w,getAdapter:f,mergeConfig:b}=s(7665).default}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,446,480,708,72],()=>s(1563));module.exports=r})();