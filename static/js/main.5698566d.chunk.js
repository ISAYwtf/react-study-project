(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{143:function(e,t,n){},150:function(e,t,n){},21:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return o}));var r=n(3),a=n(27),c="INITIALIZED-SUCCESS",i="HAS-ERROR",s={initialized:!1,errorData:{hasError:!1,errorMessage:null}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[!1,null];return{type:i,payload:{hasError:e[0],errorMessage:e[1]}}},o=function(){return function(e){var t=e(Object(a.b)());Promise.all([t]).then((function(){e({type:c})}))}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return Object(r.a)(Object(r.a)({},e),{},{initialized:!0});case i:return Object(r.a)(Object(r.a)({},e),{},{errorData:Object(r.a)({},t.payload)});default:return e}}},231:function(e,t,n){},232:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n.n(a),i=(n(143),n(43)),s=n.n(i),u=n(7),o=n(10),l=n(11),d=n(17),f=(n(150),n(62)),b=n(64),p=n(3),j="TOGGLE-IS-SHOWED",h={friends:[{id:1,img:"https://s0.rbk.ru/v6_top_pics/media/img/8/22/755895443908228.jpg"},{id:2,img:"https://www.moya-planeta.ru/upload/images/xl/19/a7/19a713c5edb6c69c5a0c31b875d732b3.jpg"},{id:3,img:"https://brammels.com/wp-content/uploads/2018/06/krasivye-lyudi-umnee.jpg"},{id:4,img:"https://www.kino-teatr.ru/art/5823/82736.jpg"}],isShowed:!1},g=function(e){return{type:j,isShowed:e}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(p.a)(Object(p.a)({},e),{},{isShowed:t.isShowed});default:return e}},m=n(69),x=n(27),v=n(86),w=n(83),y=n(21),_=Object(l.c)({profilePage:f.b,dialogsPage:b.a,sidebar:O,usersPage:m.a,auth:x.a,form:w.a,app:y.a}),S=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,k=Object(l.e)(_,S(Object(l.a)(v.a))),E=n(35),N=n(88),C=n.n(N),P=function(e){return function(t){return Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)(E.a,{flag:e}),children:Object(r.jsx)(e,Object(p.a)({},t))})}},I=function(){return Object(r.jsx)("div",{children:"Music"})},T=function(){return Object(r.jsx)("div",{children:"Settings"})},U=n(89),L=n.n(U),F=c.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,318))})),A=c.a.lazy((function(){return Promise.all([n.e(0),n.e(10),n.e(4)]).then(n.bind(null,315))})),H=c.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,313))})),D=c.a.lazy((function(){return n.e(9).then(n.bind(null,316))})),G=function(e){return Object(r.jsx)("div",{className:"".concat(L.a.content," component"),children:Object(r.jsxs)(u.d,{children:[Object(r.jsx)(u.b,{path:"/",exact:!0,render:function(){return Object(r.jsx)(u.a,{to:"/profile"})}}),Object(r.jsx)(u.b,{path:"/profile/:userId?",render:P(A)}),Object(r.jsx)(u.b,{path:"/dialogs",render:P(F)}),Object(r.jsx)(u.b,{path:"/users",render:P(D)}),Object(r.jsx)(u.b,{path:"/music",render:function(){return Object(r.jsx)(I,{})}}),Object(r.jsx)(u.b,{path:"/settings",render:function(){return Object(r.jsx)(T,{})}}),Object(r.jsx)(u.b,{path:"/login",render:P(H)}),Object(r.jsx)(u.b,{path:"*",render:function(){return Object(r.jsx)("div",{children:"404 NOT FOUND"})}})]})})},M=n(59),z=(n(231),function(){return Object(r.jsxs)("nav",{className:"component component--sidebar",children:[Object(r.jsx)(o.b,{to:"/profile",activeClassName:"sidebar--item--active",className:"sidebar--item",children:"Profile"}),Object(r.jsx)(o.b,{to:"/dialogs",activeClassName:"sidebar--item--active",className:"sidebar--item",children:"Messages"}),Object(r.jsx)(o.b,{to:"/users",activeClassName:"sidebar--item--active",className:"sidebar--item",children:"Users"}),Object(r.jsx)(o.b,{to:"/music",activeClassName:"sidebar--item--active",className:"sidebar--item",children:"Music"}),Object(r.jsx)(o.b,{to:"/settings",activeClassName:"sidebar--item--active",className:"sidebar--item",children:"Settings"})]})}),R=n(90),W=n.n(R),Y=function(e){return e.sidebar.isShowed},B=c.a.lazy((function(){return n.e(6).then(n.bind(null,317))})),V=c.a.lazy((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,314))})),J={toggleIsShowed:g},K=Object(l.d)(Object(d.b)((function(e){return{isShowed:Y(e)}}),J))((function(e){var t=e.isShowed,n=e.toggleIsShowed;Object(M.a)(e,["isShowed","toggleIsShowed"]);return Object(r.jsxs)("div",{className:W.a.sidebar,"data-show":t,onClick:function(e){n(!1),document.body.style.overflowY="unset"},children:[Object(r.jsx)(z,{}),Object(r.jsx)(u.b,{path:"/dialogs",render:P(B)}),Object(r.jsx)(u.b,{path:"/users",render:P(V)})]})})),X=function(e){return Object(r.jsxs)("div",{className:C.a.body,children:[Object(r.jsx)(K,{}),Object(r.jsx)(G,{})]})},Z=function(e){return e.app.initialized},q=function(e){return e.app.errorData},Q=n(57),$=n.n(Q),ee={toggleHasError:y.c},te=Object(d.b)(null,ee)((function(e){return Object(r.jsx)("div",{className:$.a.alert,onClick:function(){e.toggleHasError()},children:Object(r.jsx)("div",{className:$.a.message,children:e.children})})})),ne=n(44),re=n.n(ne),ae=n.p+"static/media/logo.3c8b6629.svg",ce=n(45),ie=n(34),se=n.n(ie),ue=n(60),oe=function(e){var t=e.isAuth,n=e.login,a=e.logout;return Object(r.jsx)("div",{className:se.a.login,children:t?Object(r.jsxs)("div",{className:se.a.loginUser,children:[Object(r.jsx)(o.b,{to:"/profile",className:se.a.loginInfo,children:n}),Object(r.jsx)(ue.a,{attr:{onClick:a},children:"Log Out"})]}):Object(r.jsx)(o.b,{className:se.a.loginInfo,to:"/login",children:"Login"})})},le={logout:x.d},de=Object(l.d)(Object(d.b)((function(e){return{isAuth:Object(ce.d)(e),login:Object(ce.b)(e)}}),le))((function(e){return Object(r.jsx)(oe,Object(p.a)({},e))})),fe=n(92),be=n.n(fe),pe=Object(l.d)(Object(d.b)(null,{toggleIsShowed:g}))((function(e){var t=e.toggleIsShowed;return Object(r.jsx)("div",{className:be.a.burger,onClick:function(e){return document.body.style.overflowY="hidden",t(!0)},children:Object(r.jsxs)("svg",{children:[Object(r.jsxs)("g",{children:[Object(r.jsx)("rect",{width:"3px",height:"3px",x:"0",y:"0"}),Object(r.jsx)("rect",{width:"3px",height:"3px",x:"0",y:"10"}),Object(r.jsx)("rect",{width:"3px",height:"3px",x:"0",y:"20"})]}),Object(r.jsxs)("g",{children:[Object(r.jsx)("rect",{width:"3px",height:"3px",x:"10",y:"0"}),Object(r.jsx)("rect",{width:"3px",height:"3px",x:"10",y:"10"}),Object(r.jsx)("rect",{width:"3px",height:"3px",x:"10",y:"20"})]}),Object(r.jsxs)("g",{children:[Object(r.jsx)("rect",{width:"3px",height:"3px",x:"20",y:"0"}),Object(r.jsx)("rect",{width:"3px",height:"3px",x:"20",y:"10"}),Object(r.jsx)("rect",{width:"3px",height:"3px",x:"20",y:"20"})]})]})})})),je=function(e){return Object(r.jsxs)("header",{className:"".concat(re.a.header," component"),children:[Object(r.jsx)(o.b,{to:"/profile",className:re.a.logo,children:Object(r.jsx)("img",{src:ae,alt:"logo"})}),Object(r.jsx)("div",{className:re.a.headerLogin,children:Object(r.jsx)(de,{})}),Object(r.jsx)(pe,{})]})},he={initializeApp:y.b,toggleHasError:y.c},ge=Object(l.d)(u.g,Object(d.b)((function(e){return{initialized:Z(e),errorData:q(e)}}),he))((function(e){return Object(a.useEffect)((function(){e.initializeApp()})),e.initialized?Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(je,{}),Object(r.jsx)(X,{}),e.errorData.hasError?Object(r.jsx)(te,{children:e.errorData.errorMessage}):""]}):Object(r.jsx)(E.a,{})})),Oe=function(){return Object(r.jsx)(o.a,{children:Object(r.jsx)(d.a,{store:k,children:Object(r.jsx)(ge,{})})})};s.a.render(Object(r.jsx)(Oe,{}),document.getElementById("root"))},27:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return g}));var r=n(5),a=n.n(r),c=n(9),i=n(3),s=n(8),u=n(19),o="samurai-network/auth/SET-USER-DATA",l="samurai-network/auth/GET-CAPTCHA-URL-SUCCESS",d={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},f=function(e,t,n,r){return{type:o,payload:{userId:e,email:t,login:n,isAuth:r}}},b=function(e){return{type:l,payload:{captchaUrl:e}}},p=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,i,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.getMe();case 2:0===(n=e.sent).resultCode&&(r=n.data,c=r.id,i=r.login,u=r.email,t(f(c,u,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return function(){var i=Object(c.a)(a.a.mark((function c(i){var o,l;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.login(e,t,n,r);case 2:0===(o=a.sent).resultCode?(i(p()),i(Object(u.a)("login"))):(10===o.resultCode&&(i(Object(u.a)("login")),i(h())),l=o.messages.length>0?o.messages[0]:"Email or password are incorrect.",i(Object(u.b)("login",{_error:l})));case 4:case"end":return a.stop()}}),c)})));return function(e){return i.apply(this,arguments)}}()},h=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.c.getCaptchaUrl();case 2:n=e.sent,r=n.url,t(b(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.logout();case 2:0===e.sent.resultCode&&t(f(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:case l:return Object(i.a)(Object(i.a)({},e),t.payload);default:return e}}},34:function(e,t,n){e.exports={login:"HeaderLogin_login__2oKDN",loginUser:"HeaderLogin_loginUser__14t4c",loginInfo:"HeaderLogin_loginInfo__1xacU"}},35:function(e,t,n){"use strict";var r=n(1),a=(n(0),n(54)),c=n.n(a);t.a=function(e){var t=e.flag;return void 0===t||t?Object(r.jsx)("section",{className:c.a.preloaderWrap,children:Object(r.jsx)("div",{className:c.a.preloaderPulse})}):""}},44:function(e,t,n){e.exports={header:"Header_header__3HmPO",logo:"Header_logo__pt6v2",headerLogin:"Header_headerLogin__1ug65"}},45:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=function(e){return e.auth.userId},a=function(e){return e.auth.isAuth},c=function(e){return e.auth.login},i=function(e){return e.auth.captchaUrl}},54:function(e,t,n){e.exports={preloaderWrap:"Preloader_preloaderWrap__spfwV",preloaderPulse:"Preloader_preloaderPulse__1o08W"}},57:function(e,t,n){e.exports={alert:"Alert_alert__21MHD",message:"Alert_message__AF-Lj"}},60:function(e,t,n){"use strict";var r=n(3),a=n(1),c=(n(0),n(91)),i=n.n(c),s=function(e){var t=e.className,n=e.attr;return t=t||"",Object(a.jsx)("button",Object(r.a)(Object(r.a)({},n),{},{className:"".concat(i.a.button," ").concat(t),children:e.children}))};t.a=s},62:function(e,t,n){"use strict";n.d(t,"f",(function(){return x})),n.d(t,"a",(function(){return v})),n.d(t,"c",(function(){return w})),n.d(t,"d",(function(){return y})),n.d(t,"h",(function(){return _})),n.d(t,"e",(function(){return S})),n.d(t,"g",(function(){return k}));var r=n(5),a=n.n(r),c=n(9),i=n(28),s=n(3),u=n(8),o=n(19),l=n(21),d="samurai-network/profile/ADD-POST",f="samurai-network/profile/DELETE-POST",b="samurai-network/profile/SET-USER-PROFILE",p="samurai-network/profile/SET-STATUS",j="samurai-network/profile/SET-FULLNAME",h="samurai-network/profile/SET-PHOTO",g="samurai-network/profile/TOGGLE-IS-FETCHING",O={posts:[{id:1,post:"Hi how are you",likesCount:15}],status:null,profile:null,isFetching:!1},m=function(e){return{type:p,status:e}},x=function(e){return{type:g,isFetching:e}},v=function(e){return function(t){t(function(e){return{type:d,newPost:e}}(e)),t(Object(o.a)("postForm"))}},w=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.d.getProfile(e);case 3:r=t.sent,n((a=r.data,{type:b,profile:a})),t.next=12;break;case 7:t.prev=7,t.t0=t.catch(0),c=t.t0.response.data.message,t.t0.response.status>=400&&t.t0.response.status<=500&&(c="User is not exist"),n(Object(l.c)([!0,c]));case 12:case"end":return t.stop()}var a}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(m(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.b.updateStatus(e);case 3:0===t.sent.resultCode&&n(m(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.savePhoto(e);case 2:0===(r=t.sent).resultCode&&n((a=r.data.photos,{type:h,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.userId,t.next=3,u.b.updateProfile(e);case 3:if(0!==(i=t.sent).resultCode){t.next=8;break}n(w(c)),t.next=10;break;case 8:return n(Object(o.b)("editProfile",{_error:i.messages[0]})),t.abrupt("return",Promise.reject(i.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:var n={id:3,post:t.newPost,likesCount:1};return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[Object(s.a)({},n)])});case f:return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.post}))});case b:return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case p:return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case j:return Object(s.a)(Object(s.a)({},e),{},{fullName:t.fullName});case h:return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photos})});case g:return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetching});default:return e}}},64:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var r=n(28),a=n(3),c=n(19),i="SEND-MESSAGE",s={dialogs:[{id:1,name:"Dmitriy"},{id:2,name:"Andrey"},{id:3,name:"Svetlana"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valeriy"}],messages:[{id:1,message:"Hi",mine:!1},{id:2,message:"How are you",mine:!1},{id:3,message:"Yo",mine:!1},{id:4,message:"Yo",mine:!0},{id:5,message:"My friend",mine:!0},{id:6,message:"It's a new cool chat, dude!",mine:!0}]},u=function(e){return function(t){t(function(e){return{type:i,message:e}}(e)),t(Object(c.a)("dialogAddMessageForm"))}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:var n={id:7,message:t.message,mine:!0};return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[Object(a.a)({},n)])});default:return e}}},69:function(e,t,n){"use strict";n.d(t,"d",(function(){return x})),n.d(t,"c",(function(){return y})),n.d(t,"e",(function(){return S})),n.d(t,"b",(function(){return k}));var r=n(5),a=n.n(r),c=n(9),i=n(28),s=n(3),u=n(8),o=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(s.a)(Object(s.a)({},e),r):e}))},l="samurai-network/users/FOLLOW",d="samurai-network/users/UNFOLLOW",f="samurai-network/users/SET-USERS",b="samurai-network/users/SET-CURRENT-PAGE",p="samurai-network/users/SET-TOTAL-COUNT",j="samurai-network/users/TOGGLE-IS-FETCHING",h="samurai-network/users/TOGGLE-IS-FOLLOWING",g={users:[],pageSize:7,totalUsersCount:0,currentPage:1,isFetching:!1,isFollowing:[]},O=function(e){return{type:l,userId:e}},m=function(e){return{type:d,userId:e}},x=function(e){return{type:b,currentPage:e}},v=function(e){return{type:j,isFetching:e}},w=function(e,t){return{type:h,isFollowing:e,userId:t}},y=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(v(!0)),r(x(e)),n.next=4,u.d.getUsers(e,t);case 4:c=n.sent,r(v(!1)),r((i=c.items,{type:f,users:i})),r((a=c.totalCount,{type:p,totalCount:a}));case 8:case"end":return n.stop()}var a,i}),n)})));return function(e){return n.apply(this,arguments)}}()},_=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(w(!0)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(c(n)),t(w(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),S=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.d.unFollowTo.bind(u.d),c=m,t.next=4,_(n,e,r,c);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.d.followTo.bind(u.d),c=O,t.next=4,_(n,e,r,c);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(s.a)(Object(s.a)({},e),{},{users:o(e.users,t.userId,"id",{followed:!0})});case d:return Object(s.a)(Object(s.a)({},e),{},{users:o(e.users,t.userId,"id",{followed:!1})});case f:return Object(s.a)(Object(s.a)({},e),{},{users:t.users});case b:return Object(s.a)(Object(s.a)({},e),{},{currentPage:t.currentPage});case p:return Object(s.a)(Object(s.a)({},e),{},{totalUsersCount:t.totalCount});case j:return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetching});case h:return Object(s.a)(Object(s.a)({},e),{},{isFollowing:t.isFollowing?[].concat(Object(i.a)(e.isFollowing),[t.userId]):e.isFollowing.filter((function(e){return e!==t.userId}))});default:return e}}},8:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return u}));var r=n(85),a=r.create({withCredentials:!0,headers:{"API-KEY":"eed101de-783b-4107-bd06-6b28cf0259ec"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},followTo:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},unFollowTo:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))},getProfile:function(e){return i.getProfile(e)}},i={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return a.put("profile/status",{status:e}).then((function(e){return e.data}))},updateProfile:function(e){return a.put("profile",e).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))}},s={getMe:function(){return a.get("auth/me/",{withCredentials:!0}).then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0;return a.post("auth/login/",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},logout:function(){return a.delete("auth/login/").then((function(e){return e.data}))}},u={getCaptchaUrl:function(){return a.get("security/get-captcha-url").then((function(e){return e.data}))}}},88:function(e,t,n){e.exports={body:"Body_body__2Ve9U"}},89:function(e,t,n){e.exports={content:"Content_content__n0vkb"}},90:function(e,t,n){e.exports={sidebar:"Sidebar_sidebar__3y_an","sidebar-appear":"Sidebar_sidebar-appear__-POhm"}},91:function(e,t,n){e.exports={button:"Button_button__UsRNO"}},92:function(e,t,n){e.exports={burger:"HeaderBurger_burger__39kGw",burgerLines:"HeaderBurger_burgerLines__27YO7"}}},[[232,2,3]]]);
//# sourceMappingURL=main.5698566d.chunk.js.map