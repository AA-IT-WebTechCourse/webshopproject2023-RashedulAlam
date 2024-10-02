(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[989],{5998:function(e,t,r){Promise.resolve().then(r.bind(r,6524))},7160:function(e,t,r){"use strict";var n=r(7437),o=r(9306),s=r(7907),i=r(2265);t.Z=function(e){return t=>{let{isLoggedIn:r}=(0,o.useAuth)(),l=(0,s.useRouter)();return((0,i.useEffect)(()=>{r||l.push("/login")},[r,l]),r)?(0,n.jsx)(e,{...t}):null}}},6524:function(e,t,r){"use strict";r.r(t);var n=r(7437),o=r(2265),s=r(2670),i=r(5070),l=r(1537),a=r(6123);let c=(0,r(7160).Z)(()=>{var e,t,r,c;let{register:u,handleSubmit:d,reset:p,formState:{errors:m}}=(0,s.cI)(),[h,x]=(0,o.useState)(!1),f=e=>{x(!0),i.z.post(l.Z.API_URLS.PRODUCT.ADD_PRODUCT,e).then(()=>{p(),a.toast.success("Producted created !")},()=>{a.toast.error("Could not create product !")})};return(0,n.jsx)("div",{className:"flex justify-center items-center min-w-full ",children:(0,n.jsxs)("div",{className:"px-4 pt-6 pb-8 mb-4 w-full max-w-xl",children:[(0,n.jsx)("h2",{className:"text-3xl font-bold mb-6 text-left text-blue-600",children:(0,n.jsx)("span",{className:" bg-clip-text",children:"Add Product"})}),(0,n.jsxs)("form",{onSubmit:e=>{e.preventDefault(),d(f)(e)},noValidate:!0,children:[(0,n.jsxs)("div",{className:"mb-6 flex flex-col",children:[(0,n.jsx)("label",{htmlFor:"title",className:"block text-gray-700 text-sm font-bold mb-2",children:"Title"}),(0,n.jsx)("div",{children:(0,n.jsx)("input",{id:"title",...u("title",{required:!0}),type:"text",className:"shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Enter title"})}),(null===(e=m.title)||void 0===e?void 0:e.type)==="required"&&(0,n.jsx)("p",{role:"alert",className:"text-red-600 font-semibold mt-2",children:"Title is required"})]}),(0,n.jsxs)("div",{className:"mb-6",children:[(0,n.jsx)("label",{htmlFor:"price",className:"block text-gray-700 text-sm font-bold mb-2",children:"Price"}),(0,n.jsx)("div",{children:(0,n.jsx)("input",{id:"price",type:"number",...u("price",{required:!0,min:{value:1e-4,message:"Minimum value is 1"}}),className:"shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Enter price"})}),(null===(t=m.price)||void 0===t?void 0:t.type)==="required"&&(0,n.jsx)("p",{role:"alert",className:"text-red-600 font-semibold mt-2",children:"Price is required"}),(null===(r=m.price)||void 0===r?void 0:r.type)==="min"&&(0,n.jsx)("p",{role:"alert",className:"text-red-600 font-semibold mt-2",children:"Minimum Price is 1"})]}),(0,n.jsxs)("div",{className:"mb-6",children:[(0,n.jsx)("label",{htmlFor:"description",className:"block text-gray-700 text-sm font-bold mb-2",children:"Description"}),(0,n.jsx)("div",{children:(0,n.jsx)("textarea",{id:"description",...u("description",{required:!0}),className:"shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Enter short description"})}),(null==m?void 0:null===(c=m.description)||void 0===c?void 0:c.type)==="required"&&(0,n.jsx)("p",{role:"alert",className:"text-red-600 font-semibold mt-2",children:"Description is required"})]}),(0,n.jsx)("div",{className:"flex",children:(0,n.jsx)("button",{type:"submit",disabled:h,className:"bg-blue-600 hover:bg-blue-800  text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-fit",children:"Save"})})]})]})})});t.default=c},1537:function(e,t){"use strict";t.Z={API_HOST:"http://127.0.0.1:8000/",LOCAL_STORAGE:{TOKEN:"token",USER_NAME:"username",CART:{PRODUCTS:"products"}},API_URLS:{POPULATE_DB:"api/v1/initialization/",AUTH:{LOGIN:"api/v1/core/token/",REGISTER:"api/v1/user-management/register/"},PRODUCT:{PRODUCTS:(e,t)=>"api/v1/public/products?page=".concat(e).concat(t?"&search=".concat(t):""),GET_PRODUCT:e=>"api/v1/inventory/products/".concat(e,"/"),ADD_PRODUCT:"api/v1/inventory/products/",UPDATE_PRODUCT:e=>"api/v1/inventory/products/".concat(e,"/")},INVENTORY:{PRODUCTS:(e,t,r)=>"api/v1/inventory/products/?page=".concat(e,"&type=").concat(t).concat(r?"&search=".concat(r):"")},USER_MANAGEMENT:{CURRENT_USER:"api/v1/user-management/current-user/",UPDATE_USER_PASSWORD:"api/v1/user-management/change-password/"},PAY:"api/v1/pay/"},PAGINATION:{PAGE_SIZE:10}}},9306:function(e,t,r){"use strict";r.r(t),r.d(t,{AuthenticationProvider:function(){return l},useAuth:function(){return a}});var n=r(7437),o=r(2265),s=r(1537);let i=(0,o.createContext)({}),l=e=>{let{children:t}=e,[r,l]=(0,o.useState)(!0),[a,c]=(0,o.useState)(null),u=()=>{localStorage.clear(),c(null)};return(0,o.useEffect)(()=>{c(localStorage.getItem(s.Z.LOCAL_STORAGE.TOKEN)&&localStorage.getItem(s.Z.LOCAL_STORAGE.USER_NAME)?{token:localStorage.getItem(s.Z.LOCAL_STORAGE.TOKEN),username:localStorage.getItem(s.Z.LOCAL_STORAGE.USER_NAME)}:null),l(!1)},[l]),(0,o.useEffect)(()=>{let e=e=>{e.key===s.Z.LOCAL_STORAGE.TOKEN&&!e.newValue&&a&&u()};return window.addEventListener("storage",e),()=>{window.removeEventListener("storage",e)}},[a]),(0,n.jsx)(n.Fragment,{children:r?(0,n.jsx)(n.Fragment,{children:" "}):(0,n.jsx)(i.Provider,{value:{user:a,setUserLoggedIn:e=>{(null==e?void 0:e.token)&&localStorage.setItem(s.Z.LOCAL_STORAGE.TOKEN,null==e?void 0:e.token),(null==e?void 0:e.username)&&localStorage.setItem(s.Z.LOCAL_STORAGE.USER_NAME,null==e?void 0:e.username),c(e)},isLoggedIn:!!a,logoutUser:u},children:t})})},a=()=>(0,o.useContext)(i)},5070:function(e,t,r){"use strict";r.d(t,{z:function(){return i}});var n=r(1537),o=r(3107);let s=o.default.create({baseURL:n.Z.API_HOST,timeout:4e4,headers:{Accept:"application/json","Content-Type":"application/json; charset=utf-8"}}),i=o.default.create({baseURL:n.Z.API_HOST,timeout:4e4,headers:{Accept:"application/json","Content-Type":"application/json; charset=utf-8"}});i.interceptors.request.use(e=>{let t=localStorage.getItem(n.Z.LOCAL_STORAGE.TOKEN);return t&&(e.headers.Authorization="Bearer ".concat(t)),e},e=>Promise.reject(e)),i.interceptors.response.use(e=>e,e=>(e.response&&401===e.response.status&&(localStorage.clear(),window.location.href="/login"),Promise.reject(e))),t.Z=s}},function(e){e.O(0,[107,123,884,971,69,744],function(){return e(e.s=5998)}),_N_E=e.O()}]);