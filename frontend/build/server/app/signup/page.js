(()=>{var e={};e.id=966,e.ids=[966],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},7179:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d});var r=s(482),a=s(9108),o=s(2563),i=s.n(o),n=s(8300),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);s.d(t,l);let d=["",{children:["signup",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,1885)),"D:\\Abo Akademi\\P4\\web tech\\webshopproject2023-RashedulAlam\\frontend\\src\\app\\signup\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,3283)),"D:\\Abo Akademi\\P4\\web tech\\webshopproject2023-RashedulAlam\\frontend\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\Abo Akademi\\P4\\web tech\\webshopproject2023-RashedulAlam\\frontend\\src\\app\\signup\\page.tsx"],u="/signup/page",p={require:s,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/signup/page",pathname:"/signup",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},3454:(e,t,s)=>{Promise.resolve().then(s.bind(s,8200))},7312:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var r=s(5344),a=s(4460),o=s(8428),i=s(3729);let n=function(e){return t=>{let{isLoggedIn:s}=(0,a.useAuth)(),n=(0,o.useRouter)();return((0,i.useEffect)(()=>{s&&n.push("/")},[s,n]),s)?null:r.jsx(e,{...t})}}},8200:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var r=s(5344),a=s(6506);s(3729);var o=s(708),i=s(1025),n=s(8428),l=s(1216);let d=(0,s(7312).Z)(()=>{let{register:e,handleSubmit:t,watch:s,setError:d,formState:{errors:c}}=(0,o.cI)(),u=(0,n.useRouter)(),p=e=>{i.Z.post(l.Z.API_URLS.AUTH.REGISTER,e).then(e=>{201==e.status&&u.push("/login")},e=>{if(e?.response?.data){let t=e.response.data;Object.keys(t).forEach(e=>{d(e,{type:"required",message:t[e][0]})})}else d("root.serverError",{type:"400",message:'"Invalid user registration"'})})};return r.jsx("div",{className:"flex justify-center items-center w-full",children:(0,r.jsxs)("div",{className:"px-4 pt-6 pb-8 mb-4 w-full max-w-lg",children:[r.jsx("h2",{className:"text-3xl font-bold mb-6 text-center ",children:r.jsx("span",{className:"text-blue-500 bg-clip-text",children:"Register"})}),(0,r.jsxs)("form",{onSubmit:e=>{e.preventDefault(),t(p)(e)},noValidate:!0,children:[(0,r.jsxs)("div",{className:"mb-6",children:[r.jsx("label",{htmlFor:"username",className:"block text-gray-700 text-sm font-bold mb-2",children:"Username"}),r.jsx("div",{children:r.jsx("input",{id:"username",type:"text",...e("username",{required:!0}),className:"shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Enter username"})}),c.username?.type==="required"&&r.jsx("p",{role:"alert",className:"text-red-600 font-semibold mt-2",children:"Username is required"})]}),(0,r.jsxs)("div",{className:"mb-6",children:[r.jsx("label",{htmlFor:"email",className:"block text-gray-700 text-sm font-bold mb-2",children:"Email"}),r.jsx("div",{children:r.jsx("input",{id:"email",type:"email",...e("email",{required:!0}),className:"shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Enter email"})}),c.email?.type==="required"&&r.jsx("p",{role:"alert",className:"text-red-600 font-semibold mt-2",children:"Email is required"})]}),(0,r.jsxs)("div",{className:"mb-6",children:[r.jsx("label",{htmlFor:"password",className:"block text-gray-700 text-sm font-bold mb-2",children:"Password"}),r.jsx("div",{children:r.jsx("input",{id:"password",type:"password",...e("password",{required:!0}),className:"shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Enter password"})}),c.password?.type==="required"&&r.jsx("p",{role:"alert",className:"text-red-600 font-semibold mt-2",children:"Password is required"})]}),(0,r.jsxs)("div",{className:"mb-6",children:[r.jsx("label",{htmlFor:"confirm_password",className:"block text-gray-700 text-sm font-bold mb-2",children:"Confirm Password"}),r.jsx("div",{children:r.jsx("input",{id:"confirm_password",type:"password",...e("confirmPassword",{required:!0,validate:e=>e===s("password")||"Passwords do not match"}),className:"shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Confirm password"})}),c.confirmPassword?.type==="required"&&r.jsx("p",{role:"alert",className:"text-red-600 font-semibold mt-2",children:"Confirm Password is required"}),c.confirmPassword?.message&&r.jsx("p",{role:"alert",className:"text-red-600 font-semibold mt-2",children:"Passwords do not match"})]}),c?.root?.serverError&&r.jsx("div",{className:"flex",children:r.jsx("p",{role:"alert",className:"text-red-600 font-semibold mt-2",children:c?.root?.serverError?.message})}),r.jsx("div",{className:"flex items-center justify-center mt-8",children:r.jsx("button",{type:"submit",className:"bg-gradient-to-r bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full",children:"Register"})})]}),(0,r.jsxs)("p",{className:"text-center text-gray-600 mt-6",children:["Already have an account?",r.jsx(a.default,{href:"/login",className:"text-blue-500 hover:underline ml-2 font-semibold",children:"Sign in"})]})]})})})},1025:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n,z:()=>i});var r=s(1216),a=s(7665);let o=a.default.create({baseURL:r.Z.API_HOST,timeout:4e4,headers:{Accept:"application/json","Content-Type":"application/json; charset=utf-8"}}),i=a.default.create({baseURL:r.Z.API_HOST,timeout:4e4,headers:{Accept:"application/json","Content-Type":"application/json; charset=utf-8"}});i.interceptors.request.use(e=>{let t=localStorage.getItem(r.Z.LOCAL_STORAGE.TOKEN);return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e)),i.interceptors.response.use(e=>e,e=>(e.response&&401===e.response.status&&(localStorage.clear(),window.location.href="/login"),Promise.reject(e)));let n=o},1885:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var r=s(5036);let a=(0,s(6843).createProxy)(String.raw`D:\Abo Akademi\P4\web tech\webshopproject2023-RashedulAlam\frontend\src\components\account\register.tsx`),{__esModule:o,$$typeof:i}=a,n=a.default,l=()=>r.jsx("main",{className:"container mx-auto",children:r.jsx(n,{})})},3881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(337);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,446,480,708,729],()=>s(7179));module.exports=r})();