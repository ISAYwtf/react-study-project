(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[8],{233:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return u}));var a=r(3),n=r(1),c=(r(0),r(234)),o=r.n(c),s=function(e){var t=e.meta.error&&e.meta.touched,r=t?o.a.error:"",a=t&&e.meta.active?Object(n.jsx)("small",{className:o.a.errorMessage,children:e.meta.error}):"";return Object(n.jsxs)("div",{className:"".concat(o.a.container," ").concat(e.className," ").concat(r),children:[e.children,a]})},i=function(e){return Object(n.jsx)(s,Object(a.a)(Object(a.a)({},e),{},{children:Object(n.jsx)("textarea",Object(a.a)(Object(a.a)({},e.input),{},{className:o.a.input,placeholder:e.placeholder}))}))},u=function(e){var t=e.type||e.input.type||"text",r=e.placeholder||e.input.placeholder||"";return Object(n.jsx)(s,Object(a.a)(Object(a.a)({},e),{},{children:Object(n.jsx)("input",Object(a.a)(Object(a.a)(Object(a.a)({},e.input),{},{className:"".concat(o.a.input," ").concat(e.className)},e.attr),{},{placeholder:r,type:t}))}))}},234:function(e,t,r){e.exports={container:"FormControls_container__2sQsd",input:"FormControls_input__2T87e",error:"FormControls_error__IMw-7",errorMessage:"FormControls_errorMessage__3MzwF"}},240:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(64);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],a=!0,n=!1,c=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(i){n=!0,c=i}finally{try{a||null==s.return||s.return()}finally{if(n)throw c}}return r}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},312:function(e,t,r){e.exports={searchTitle:"Search_searchTitle__HtLPw",form:"Search_form__1Spz2",input:"Search_input__CyDdK"}},314:function(e,t,r){"use strict";r.r(t);var a=r(240),n=r(1),c=r(0),o=r(312),s=r.n(o),i=r(114),u=r(115),l=r(19),p=r(233),b=r(61),h=r(7),m=r(11),j=r(17),d=r(70),f=r(21),O=Object(u.a)({form:"searchForm"})((function(e){return Object(n.jsxs)("div",{className:s.a.form,children:[Object(n.jsx)("p",{className:s.a.searchTitle,children:e.title}),Object(n.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(n.jsx)(i.a,{className:s.a.input,component:p.a,name:e.name,placeholder:e.placeholder}),Object(n.jsx)(b.a,{children:"Search"})]})]})})),y={setCurrentPage:d.d,toggleHasError:f.c,reset:l.a};t.default=Object(m.d)(Object(j.b)(null,y),h.g)((function(e){var t=Object(c.useState)(!1),r=Object(a.a)(t,2),o=r[0],s=r[1],i=Object(c.useState)(null),u=Object(a.a)(i,2),l=u[0],p=u[1];return o&&(s(!1),l?(e.history.push("/profile/".concat(l)),p(null)):e.history.push("/users")),Object(n.jsxs)("div",{className:"component component--sidebar",children:[Object(n.jsx)(O,{title:"User ID",placeholder:"Input user ID",name:"searchUser",onSubmit:function(e){s(!0),p(e.searchUser)}}),Object(n.jsx)(O,{title:"Page of users",placeholder:"Input number of page",name:"searchPage",onSubmit:function(t){try{if(s(!0),"number"!==typeof+t.searchPage||isNaN(+t.searchPage))throw s(!1),"Input number, please";e.setCurrentPage(+t.searchPage)}catch(r){e.toggleHasError([!0,r])}}})]})}))}}]);
//# sourceMappingURL=8.1b9fd150.chunk.js.map