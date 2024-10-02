(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[565],{3768:function(e,t,s){Promise.resolve().then(s.bind(s,5074))},7907:function(e,t,s){"use strict";var l=s(5313);s.o(l,"useParams")&&s.d(t,{useParams:function(){return l.useParams}}),s.o(l,"useRouter")&&s.d(t,{useRouter:function(){return l.useRouter}})},7160:function(e,t,s){"use strict";var l=s(7437),r=s(9306),n=s(7907),o=s(2265);t.Z=function(e){return t=>{let{isLoggedIn:s}=(0,r.useAuth)(),i=(0,n.useRouter)();return((0,o.useEffect)(()=>{s||i.push("/login")},[s,i]),s)?(0,l.jsx)(e,{...t}):null}}},5074:function(e,t,s){"use strict";s.r(t);var l=s(7437),r=s(4064),n=s(7907),o=s(2265),i=s(7160),a=s(5070),c=s(1537),d=s(376),u=s(6123);let x=(0,i.Z)(()=>{let e=(0,n.useRouter)(),{products:t,removeFromCart:s,mergeUpdatedProducts:i,clearAll:x}=(0,r.useCart)(),[m,f]=(0,o.useState)(!1),[p,h]=(0,o.useState)(),[v,g]=(0,o.useState)([]),[j,N]=(0,o.useState)(!1),b=()=>{e.push("/")},w=t.reduce((e,t)=>e+Number(t.price),0),S=v.reduce((e,t)=>e+Number(t.price),0),A=()=>{e.push("/myitems")};return(0,l.jsx)("div",{className:"flex flex-row w-full text-gray-950 gap-6 ",children:j?(0,l.jsxs)("div",{className:"flex flex-col gap-10 justify-center border-gray-600 border-1 w-full",children:[(0,l.jsxs)("div",{className:"flex flex-row justify-between items-center ",children:[(0,l.jsx)("h1",{className:"text-3xl font-bold text-gray-800",children:"Purchase Summary"}),(0,l.jsxs)("p",{className:"text-xl text-gray-600 font-bold",children:[v.length," Items"]})]}),(0,l.jsx)("hr",{}),(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,l.jsxs)("div",{className:"flex flex-row justify-between mb-2",children:[(0,l.jsx)("div",{className:"text-sm font-bold text-blue-600",children:"Title"}),(0,l.jsx)("div",{className:"text-sm font-bold text-blue-600",children:"Price"})]}),v.map((e,t)=>(0,l.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,l.jsx)("div",{className:"text-sm font-semibold flex flex-col gap-1",children:(0,l.jsx)("span",{children:e.title})}),(0,l.jsx)("div",{className:"text-sm font-semibold ",children:e.price})]},t))]}),(0,l.jsx)("hr",{}),(0,l.jsxs)("div",{className:"flex flex-row justify-between items-center gap-4",children:[(0,l.jsx)("div",{className:"flex",children:(0,l.jsxs)("button",{className:"text-xs font-semibold text-blue-600 gap-2 flex flex-row items-center",onClick:()=>b(),children:[(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,l.jsx)("polyline",{points:"19 12 5 12"}),(0,l.jsx)("polyline",{points:"12 19 5 12 12 5"})]}),"Continue Shopping"]})}),(0,l.jsxs)("div",{className:"flex flex-col gap-4 items-end",children:[(0,l.jsx)("div",{className:"flex",children:(0,l.jsxs)("h2",{className:"font-bold text-lg text-blue-700  ",children:["Total Cost: ",S.toFixed(2)," Euro"]})}),(0,l.jsx)("div",{className:"flex",children:(0,l.jsxs)("button",{className:"text-xs font-semibold text-blue-600 gap-2 flex flex-row items-center",onClick:()=>A(),children:[(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,l.jsx)("polyline",{points:"19 12 5 12"}),(0,l.jsx)("polyline",{points:"12 19 5 12 12 5"})]}),"Goto Inventory"]})})]})]})]}):(0,l.jsxs)("div",{className:"flex flex-col gap-10 justify-center border-gray-600 border-1 w-full",children:[(0,l.jsxs)("div",{className:"flex flex-row justify-between items-center ",children:[(0,l.jsx)("h1",{className:"text-3xl font-bold text-gray-800",children:"Shopping Cart"}),(0,l.jsxs)("p",{className:"text-xl text-gray-600 font-bold",children:[t.length," Items"]})]}),(0,l.jsx)("hr",{}),(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,l.jsxs)("div",{className:"flex flex-row justify-between mb-2",children:[(0,l.jsx)("div",{className:"text-sm font-bold text-blue-600",children:"Title"}),(0,l.jsx)("div",{className:"text-sm font-bold text-blue-600",children:"Price"})]}),t.map((e,t)=>{var r,n;return(0,l.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,l.jsxs)("div",{className:"text-sm font-semibold flex flex-col gap-1",children:[(0,l.jsx)("span",{children:e.title}),(null==p?void 0:null===(r=p.error)||void 0===r?void 0:r[e.id])&&(0,l.jsx)("p",{role:"alert",className:"text-yellow-600 font-semibold mt-2",children:null==p?void 0:null===(n=p.error)||void 0===n?void 0:n[e.id]}),(0,l.jsx)("button",{className:"text-xs font-semibold text-red-600 w-fit",onClick:()=>s&&s(e),children:"Remove"})]}),(0,l.jsx)("div",{className:"text-sm font-semibold ",children:e.price})]},t)})]}),(0,l.jsx)("hr",{}),(0,l.jsxs)("div",{className:"flex flex-row justify-between items-center gap-4",children:[(0,l.jsx)("div",{className:"flex",children:(0,l.jsxs)("button",{className:"text-xs font-semibold text-blue-600 gap-2 flex flex-row items-center",onClick:()=>b(),children:[(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,l.jsx)("polyline",{points:"19 12 5 12"}),(0,l.jsx)("polyline",{points:"12 19 5 12 12 5"})]}),"Continue Shopping"]})}),(0,l.jsxs)("div",{className:"flex flex-col gap-4 items-end",children:[(0,l.jsx)("div",{className:"flex",children:(0,l.jsxs)("h2",{className:"font-bold text-lg text-blue-700  ",children:["Total Cost: ",w.toFixed(2)," Euro"]})}),(0,l.jsx)("div",{className:"flex",children:(0,l.jsxs)("button",{className:"bg-blue-400 p-3 rounded-md text-white hover:bg-blue-900 relative w-24",disabled:!t.length||m,onClick:()=>{f(!0);let e=t.map(e=>({id:e.id,price:e.price}));a.z.post(c.Z.API_URLS.PAY,e).then(e=>{N(!0),g([...t]),f(!1),x&&x()},e=>{var t,s,l,r,n,o;console.log(e),(null==e?void 0:null===(t=e.response)||void 0===t?void 0:t.status)==d.WE.UnprocessableEntity?(u.toast.error("Please fix the validation error and try payment again !"),h(null==e?void 0:null===(s=e.response)||void 0===s?void 0:s.data),(null==e?void 0:null===(r=e.response)||void 0===r?void 0:null===(l=r.data)||void 0===l?void 0:l.updated_products)&&i&&i((null==e?void 0:null===(o=e.response)||void 0===o?void 0:null===(n=o.data)||void 0===n?void 0:n.updated_products)||[])):u.toast.error("Unknown error occured during payment !"),f(!1)})},children:[m&&(0,l.jsxs)("svg",{className:"animate-spin h-5 w-5 text-white absolute z-10 left-[45%]",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,l.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"black",strokeWidth:"4"}),(0,l.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Pay"]})})]})]})]})})});t.default=x},1537:function(e,t){"use strict";t.Z={API_HOST:"http://127.0.0.1:8000/",LOCAL_STORAGE:{TOKEN:"token",USER_NAME:"username",CART:{PRODUCTS:"products"}},API_URLS:{POPULATE_DB:"api/v1/initialization/",AUTH:{LOGIN:"api/v1/core/token/",REGISTER:"api/v1/user-management/register/"},PRODUCT:{PRODUCTS:(e,t)=>"api/v1/public/products?page=".concat(e).concat(t?"&search=".concat(t):""),GET_PRODUCT:e=>"api/v1/inventory/products/".concat(e,"/"),ADD_PRODUCT:"api/v1/inventory/products/",UPDATE_PRODUCT:e=>"api/v1/inventory/products/".concat(e,"/")},INVENTORY:{PRODUCTS:(e,t,s)=>"api/v1/inventory/products/?page=".concat(e,"&type=").concat(t).concat(s?"&search=".concat(s):"")},USER_MANAGEMENT:{CURRENT_USER:"api/v1/user-management/current-user/",UPDATE_USER_PASSWORD:"api/v1/user-management/change-password/"},PAY:"api/v1/pay/"},PAGINATION:{PAGE_SIZE:10}}},9306:function(e,t,s){"use strict";s.r(t),s.d(t,{AuthenticationProvider:function(){return i},useAuth:function(){return a}});var l=s(7437),r=s(2265),n=s(1537);let o=(0,r.createContext)({}),i=e=>{let{children:t}=e,[s,i]=(0,r.useState)(!0),[a,c]=(0,r.useState)(null),d=()=>{localStorage.clear(),c(null)};return(0,r.useEffect)(()=>{c(localStorage.getItem(n.Z.LOCAL_STORAGE.TOKEN)&&localStorage.getItem(n.Z.LOCAL_STORAGE.USER_NAME)?{token:localStorage.getItem(n.Z.LOCAL_STORAGE.TOKEN),username:localStorage.getItem(n.Z.LOCAL_STORAGE.USER_NAME)}:null),i(!1)},[i]),(0,r.useEffect)(()=>{let e=e=>{e.key===n.Z.LOCAL_STORAGE.TOKEN&&!e.newValue&&a&&d()};return window.addEventListener("storage",e),()=>{window.removeEventListener("storage",e)}},[a]),(0,l.jsx)(l.Fragment,{children:s?(0,l.jsx)(l.Fragment,{children:" "}):(0,l.jsx)(o.Provider,{value:{user:a,setUserLoggedIn:e=>{(null==e?void 0:e.token)&&localStorage.setItem(n.Z.LOCAL_STORAGE.TOKEN,null==e?void 0:e.token),(null==e?void 0:e.username)&&localStorage.setItem(n.Z.LOCAL_STORAGE.USER_NAME,null==e?void 0:e.username),c(e)},isLoggedIn:!!a,logoutUser:d},children:t})})},a=()=>(0,r.useContext)(o)},4064:function(e,t,s){"use strict";s.r(t),s.d(t,{CartProvider:function(){return c},useCart:function(){return d}});var l=s(7437),r=s(2265),n=s(1537),o=s(6123),i=s(9306);let a=(0,r.createContext)({products:[]}),c=e=>{let{children:t}=e,[s,c]=(0,r.useState)([]),[d,u]=(0,r.useState)(!0),{user:x,isLoggedIn:m}=(0,i.useAuth)(),f=e=>{setTimeout(()=>{localStorage.setItem(n.Z.LOCAL_STORAGE.CART.PRODUCTS,JSON.stringify(e))})};return(0,r.useEffect)(()=>{var e;c(localStorage.getItem(n.Z.LOCAL_STORAGE.CART.PRODUCTS)?JSON.parse(null!==(e=localStorage.getItem(n.Z.LOCAL_STORAGE.CART.PRODUCTS))&&void 0!==e?e:"[]"):[]),u(!1)},[c]),(0,l.jsx)(l.Fragment,{children:d?(0,l.jsx)(l.Fragment,{}):(0,l.jsx)(a.Provider,{value:{products:s,addToCart:e=>{if((null==x?void 0:x.username)==e.owner_name){o.toast.error("".concat(e.title," can not be added as it's your own product!"));return}c(t=>{let s=[...t,e];return f(s),s}),o.toast.success("".concat(e.title," has been added to your cart!"))},removeFromCart:e=>{c(t=>{let s=t.filter(t=>t.id!==e.id);return f(s),s}),o.toast.warning("".concat(e.title," has been removed from your cart!"))},isExistsOnCart:e=>!!s.find(t=>t.id===e.id),mergeUpdatedProducts:e=>{c(t=>{let s=e.reduce((e,t)=>Object.assign(e,{[t.id]:t}),{});return t.map(e=>s[e.id]?s[e.id]:e)})},clearAll:()=>{c([]),f([])}},children:t})})},d=()=>(0,r.useContext)(a)},5070:function(e,t,s){"use strict";s.d(t,{z:function(){return o}});var l=s(1537),r=s(3107);let n=r.default.create({baseURL:l.Z.API_HOST,timeout:4e4,headers:{Accept:"application/json","Content-Type":"application/json; charset=utf-8"}}),o=r.default.create({baseURL:l.Z.API_HOST,timeout:4e4,headers:{Accept:"application/json","Content-Type":"application/json; charset=utf-8"}});o.interceptors.request.use(e=>{let t=localStorage.getItem(l.Z.LOCAL_STORAGE.TOKEN);return t&&(e.headers.Authorization="Bearer ".concat(t)),e},e=>Promise.reject(e)),o.interceptors.response.use(e=>e,e=>(e.response&&401===e.response.status&&(localStorage.clear(),window.location.href="/login"),Promise.reject(e))),t.Z=n},376:function(e,t,s){"use strict";s.d(t,{WE:function(){return p}});let{Axios:l,AxiosError:r,CanceledError:n,isCancel:o,CancelToken:i,VERSION:a,all:c,Cancel:d,isAxiosError:u,spread:x,toFormData:m,AxiosHeaders:f,HttpStatusCode:p,formToJSON:h,getAdapter:v,mergeConfig:g}=s(3107).default}},function(e){e.O(0,[107,123,971,69,744],function(){return e(e.s=3768)}),_N_E=e.O()}]);