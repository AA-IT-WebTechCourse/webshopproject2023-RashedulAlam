(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{2446:function(e,t,r){Promise.resolve().then(r.bind(r,7467))},6352:function(e,t,r){"use strict";var s=r(7437),o=r(9306),a=r(7907),n=r(2265);t.Z=function(e){return t=>{let{isLoggedIn:r}=(0,o.useAuth)(),l=(0,a.useRouter)();return((0,n.useEffect)(()=>{r&&l.push("/")},[r,l]),r)?null:(0,s.jsx)(e,{...t})}}},7467:function(e,t,r){"use strict";r.r(t);var s=r(7437),o=r(8792);r(2265);var a=r(2670),n=r(5070),l=r(7907),i=r(1537);let d=(0,r(6352).Z)(()=>{var e,t,r,d,c,u,m,p;let{register:h,handleSubmit:f,watch:x,setError:v,formState:{errors:g}}=(0,a.cI)(),E=(0,l.useRouter)(),b=e=>{n.Z.post(i.Z.API_URLS.AUTH.REGISTER,e).then(e=>{201==e.status&&E.push("/login")},e=>{var t;if(null==e?void 0:null===(t=e.response)||void 0===t?void 0:t.data){let t=e.response.data;Object.keys(t).forEach(e=>{v(e,{type:"required",message:t[e][0]})})}else v("root.serverError",{type:"400",message:'"Invalid user registration"'})})};return(0,s.jsx)("div",{className:"flex justify-center items-center w-full",children:(0,s.jsxs)("div",{className:"px-4 pt-6 pb-8 mb-4 w-full max-w-lg",children:[(0,s.jsx)("h2",{className:"text-3xl font-bold mb-6 text-center ",children:(0,s.jsx)("span",{className:"text-blue-500 bg-clip-text",children:"Register"})}),(0,s.jsxs)("form",{onSubmit:e=>{e.preventDefault(),f(b)(e)},noValidate:!0,children:[(0,s.jsxs)("div",{className:"mb-6",children:[(0,s.jsx)("label",{htmlFor:"username",className:"block text-gray-700 text-sm font-bold mb-2",children:"Username"}),(0,s.jsx)("div",{children:(0,s.jsx)("input",{id:"username",type:"text",...h("username",{required:!0}),className:"shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Enter username"})}),(null===(e=g.username)||void 0===e?void 0:e.type)==="required"&&(0,s.jsx)("p",{role:"alert",className:"text-red-600 font-semibold mt-2",children:"Username is required"})]}),(0,s.jsxs)("div",{className:"mb-6",children:[(0,s.jsx)("label",{htmlFor:"email",className:"block text-gray-700 text-sm font-bold mb-2",children:"Email"}),(0,s.jsx)("div",{children:(0,s.jsx)("input",{id:"email",type:"email",...h("email",{required:!0}),className:"shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Enter email"})}),(null===(t=g.email)||void 0===t?void 0:t.type)==="required"&&(0,s.jsx)("p",{role:"alert",className:"text-red-600 font-semibold mt-2",children:"Email is required"})]}),(0,s.jsxs)("div",{className:"mb-6",children:[(0,s.jsx)("label",{htmlFor:"password",className:"block text-gray-700 text-sm font-bold mb-2",children:"Password"}),(0,s.jsx)("div",{children:(0,s.jsx)("input",{id:"password",type:"password",...h("password",{required:!0}),className:"shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Enter password"})}),(null===(r=g.password)||void 0===r?void 0:r.type)==="required"&&(0,s.jsx)("p",{role:"alert",className:"text-red-600 font-semibold mt-2",children:"Password is required"})]}),(0,s.jsxs)("div",{className:"mb-6",children:[(0,s.jsx)("label",{htmlFor:"confirm_password",className:"block text-gray-700 text-sm font-bold mb-2",children:"Confirm Password"}),(0,s.jsx)("div",{children:(0,s.jsx)("input",{id:"confirm_password",type:"password",...h("confirmPassword",{required:!0,validate:e=>e===x("password")||"Passwords do not match"}),className:"shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Confirm password"})}),(null===(d=g.confirmPassword)||void 0===d?void 0:d.type)==="required"&&(0,s.jsx)("p",{role:"alert",className:"text-red-600 font-semibold mt-2",children:"Confirm Password is required"}),(null===(c=g.confirmPassword)||void 0===c?void 0:c.message)&&(0,s.jsx)("p",{role:"alert",className:"text-red-600 font-semibold mt-2",children:"Passwords do not match"})]}),(null==g?void 0:null===(u=g.root)||void 0===u?void 0:u.serverError)&&(0,s.jsx)("div",{className:"flex",children:(0,s.jsx)("p",{role:"alert",className:"text-red-600 font-semibold mt-2",children:null==g?void 0:null===(p=g.root)||void 0===p?void 0:null===(m=p.serverError)||void 0===m?void 0:m.message})}),(0,s.jsx)("div",{className:"flex items-center justify-center mt-8",children:(0,s.jsx)("button",{type:"submit",className:"bg-gradient-to-r bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full",children:"Register"})})]}),(0,s.jsxs)("p",{className:"text-center text-gray-600 mt-6",children:["Already have an account?",(0,s.jsx)(o.default,{href:"/login",className:"text-blue-500 hover:underline ml-2 font-semibold",children:"Sign in"})]})]})})});t.default=d},1537:function(e,t){"use strict";t.Z={API_HOST:"http://127.0.0.1:8000/",LOCAL_STORAGE:{TOKEN:"token",USER_NAME:"username",CART:{PRODUCTS:"products"}},API_URLS:{POPULATE_DB:"api/v1/initialization/",AUTH:{LOGIN:"api/v1/core/token/",REGISTER:"api/v1/user-management/register/"},PRODUCT:{PRODUCTS:(e,t)=>"api/v1/public/products?page=".concat(e).concat(t?"&search=".concat(t):""),GET_PRODUCT:e=>"api/v1/inventory/products/".concat(e,"/"),ADD_PRODUCT:"api/v1/inventory/products/",UPDATE_PRODUCT:e=>"api/v1/inventory/products/".concat(e,"/")},INVENTORY:{PRODUCTS:(e,t,r)=>"api/v1/inventory/products/?page=".concat(e,"&type=").concat(t).concat(r?"&search=".concat(r):"")},USER_MANAGEMENT:{CURRENT_USER:"api/v1/user-management/current-user/",UPDATE_USER_PASSWORD:"api/v1/user-management/change-password/"},PAY:"api/v1/pay/"},PAGINATION:{PAGE_SIZE:10}}},9306:function(e,t,r){"use strict";r.r(t),r.d(t,{AuthenticationProvider:function(){return l},useAuth:function(){return i}});var s=r(7437),o=r(2265),a=r(1537);let n=(0,o.createContext)({}),l=e=>{let{children:t}=e,[r,l]=(0,o.useState)(!0),[i,d]=(0,o.useState)(null),c=()=>{localStorage.clear(),d(null)};return(0,o.useEffect)(()=>{d(localStorage.getItem(a.Z.LOCAL_STORAGE.TOKEN)&&localStorage.getItem(a.Z.LOCAL_STORAGE.USER_NAME)?{token:localStorage.getItem(a.Z.LOCAL_STORAGE.TOKEN),username:localStorage.getItem(a.Z.LOCAL_STORAGE.USER_NAME)}:null),l(!1)},[l]),(0,o.useEffect)(()=>{let e=e=>{e.key===a.Z.LOCAL_STORAGE.TOKEN&&!e.newValue&&i&&c()};return window.addEventListener("storage",e),()=>{window.removeEventListener("storage",e)}},[i]),(0,s.jsx)(s.Fragment,{children:r?(0,s.jsx)(s.Fragment,{children:" "}):(0,s.jsx)(n.Provider,{value:{user:i,setUserLoggedIn:e=>{(null==e?void 0:e.token)&&localStorage.setItem(a.Z.LOCAL_STORAGE.TOKEN,null==e?void 0:e.token),(null==e?void 0:e.username)&&localStorage.setItem(a.Z.LOCAL_STORAGE.USER_NAME,null==e?void 0:e.username),d(e)},isLoggedIn:!!i,logoutUser:c},children:t})})},i=()=>(0,o.useContext)(n)},5070:function(e,t,r){"use strict";r.d(t,{z:function(){return n}});var s=r(1537),o=r(3107);let a=o.default.create({baseURL:s.Z.API_HOST,timeout:4e4,headers:{Accept:"application/json","Content-Type":"application/json; charset=utf-8"}}),n=o.default.create({baseURL:s.Z.API_HOST,timeout:4e4,headers:{Accept:"application/json","Content-Type":"application/json; charset=utf-8"}});n.interceptors.request.use(e=>{let t=localStorage.getItem(s.Z.LOCAL_STORAGE.TOKEN);return t&&(e.headers.Authorization="Bearer ".concat(t)),e},e=>Promise.reject(e)),n.interceptors.response.use(e=>e,e=>(e.response&&401===e.response.status&&(localStorage.clear(),window.location.href="/login"),Promise.reject(e))),t.Z=a}},function(e){e.O(0,[107,884,792,971,69,744],function(){return e(e.s=2446)}),_N_E=e.O()}]);