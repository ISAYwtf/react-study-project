(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{232:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l}));var r=n(3),o=n(2),a=(n(0),n(234)),c=n.n(a),i=function(e){var t=e.meta.error&&e.meta.touched,n=t?c.a.error:"",r=t?Object(o.jsx)("small",{className:c.a.errorMessage,children:e.meta.error}):"";return Object(o.jsxs)("div",{className:"".concat(c.a.container," ").concat(e.className," ").concat(n),children:[e.children,r]})},s=function(e){return Object(o.jsx)(i,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},e.input),{},{className:c.a.input,placeholder:e.placeholder}))}))},l=function(e){return Object(o.jsx)(i,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)(Object(r.a)({},e.input),{},{className:c.a.input},e.attr),{},{placeholder:e.placeholder||"",type:e.type||"text"}))}))}},233:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},o=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}},a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduce((function(t,n){return t||n(e)}),void 0)}}},234:function(e,t,n){e.exports={container:"FormControls_container__1O6pH",input:"FormControls_input__1vNYD",error:"FormControls_error__R3-iJ",errorMessage:"FormControls_errorMessage__znvpV"}},241:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(3),o=n(65),a=n(67),c=n(66),i=n(2),s=n(0),l=n.n(s),j=n(7),u=n(23),b=n(46),f=function(e){return{isAuth:Object(b.d)(e)}},p=function(e){var t=function(t){Object(a.a)(s,t);var n=Object(c.a)(s);function s(){var t;Object(o.a)(this,s);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(t=n.call.apply(n,[this].concat(c))).render=function(){return t.props.isAuth?Object(i.jsx)(e,Object(r.a)({},t.props)):Object(i.jsx)(j.a,{to:"/login"})},t}return s}(l.a.Component);return Object(u.b)(f)(t)}},254:function(e,t,n){e.exports={profileJob:"ProfileJob_profileJob__3F2Ok"}},301:function(e,t,n){e.exports={profileUser:"ProfileInfo_profileUser__23b78"}},302:function(e,t,n){e.exports={profileContacts:"ProfileContacts_profileContacts__2iIrN",contactsSocial:"ProfileContacts_contactsSocial__1rvOI"}},303:function(e,t,n){e.exports={profileMainInfo:"ProfileMainInfo_profileMainInfo__3NzMv",profileAvatar:"ProfileMainInfo_profileAvatar__MMbga",profileStatus:"ProfileMainInfo_profileStatus__1IAb6",profileId:"ProfileMainInfo_profileId__2f4OG",profileName:"ProfileMainInfo_profileName__1YqG0",profileDesc:"ProfileMainInfo_profileDesc__2naDA",selectImgBtn:"ProfileMainInfo_selectImgBtn__2G56V"}},304:function(e,t,n){e.exports={profileImageWrap:"ProfileAvatar_profileImageWrap__1mmfB",profileImage:"ProfileAvatar_profileImage__et5X_",imgName:"ProfileAvatar_imgName__1boYZ"}},305:function(e,t,n){e.exports={post:"Post_post__Yp48r"}},306:function(e,t,n){e.exports={inputWrap:"Posts_inputWrap__2apF8",textarea:"Posts_textarea__2X9bt"}},307:function(e,t,n){e.exports={form:"ProfileDataForm_form__1-8Jo",contactItem:"ProfileDataForm_contactItem__2npvs",contactItemTitle:"ProfileDataForm_contactItemTitle__1rNjO"}},311:function(e,t,n){"use strict";n.r(t);var r=n(3),o=n(5),a=n.n(o),c=n(9),i=n(2),s=n(0),l=n.n(s),j=n(256),u=n(231),b=n(301),f=n.n(b),p=n(302),d=n.n(p),O=function(e){var t=e.contacts,n=(Object(u.a)(e,["contacts"]),[]);for(var r in t)t[r]&&n.push(Object(i.jsx)("a",{href:"".concat(t[r]),children:r}));return n.length>0?Object(i.jsxs)("div",{className:d.a.profileContacts,children:[Object(i.jsx)("h2",{children:"Contacts"}),Object(i.jsx)("div",{className:d.a.contactsSocial,children:n})]}):""},h=n(254),m=n.n(h),x=function(e){var t=e.lookingForAJob,n=e.lookingForAJobDescription;Object(u.a)(e,["lookingForAJob","lookingForAJobDescription"]);return Object(i.jsxs)("div",{className:m.a.profileJob,children:[Object(i.jsx)("h2",{children:"Search for a job"}),Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{children:t?"Looking for a job.":"Not looking for a job."}),n]})]})},v=n(303),g=n.n(v),_=n(20),N=n(23),I=n(60),P=n(257),F=n(232),k=function(e){return Object(i.jsx)(P.b,{initialValues:e.initialValues,onSubmit:e.deactivateEditMode,children:function(e){var t=e.handleSubmit,n=t,r={autoFocus:!0,onBlur:function(e){return n(e)}};return Object(i.jsx)("form",{onSubmit:t,children:Object(i.jsx)(P.a,{component:F.a,name:"status",attr:r,type:"text"})})}})},A=function(e){var t=!e.match.params.userId,n=Object(s.useState)(!1),r=Object(j.a)(n,2),o=r[0],a=r[1];return Object(i.jsx)("div",{children:o?Object(i.jsx)(k,{initialValues:{status:e.status},deactivateEditMode:function(t){a(!1),e.updateStatus(t.status)}}):t?Object(i.jsx)("div",{children:Object(i.jsx)("span",{onDoubleClick:function(){t&&a(!0)},children:e.status})}):Object(i.jsx)("div",{children:Object(i.jsx)("span",{children:e.status})})})},M=n(7),S=function(e){return e.profilePage},C=function(e){return e.profilePage.profile},y=function(e){return e.profilePage.isFetching},w=function(e){return e.profilePage.status},J={updateStatus:I.h},D=Object(_.d)(Object(N.b)((function(e){return{status:w(e)}}),J),M.g)(A),U=n(304),V=n.n(U),T=function(e){var t,n=e.photos,r=e.fullName;return t=n.large?Object(i.jsx)("img",{className:V.a.profileImage,src:n.large,alt:"avatar"}):n.small?Object(i.jsx)("img",{className:V.a.profileImage,src:n.small,alt:"avatar"}):Object(i.jsx)("span",{className:V.a.imgName,children:r.substr(0,1).toUpperCase()}),Object(i.jsx)("div",{className:V.a.profileImageWrap,children:t})},W=function(e){var t=e.isOwner,n=e.savePhoto,r="Select your image";return t?Object(i.jsxs)("label",{className:g.a.selectImgBtn,children:[Object(i.jsx)("span",{children:r}),Object(i.jsx)("input",{type:"file",onChange:function(e){var t=e.target.files;t.length&&(n(t[0]),r=t[0])}})]}):""},B=function(e){var t=e.photos,n=e.fullName,r=e.userId,o=e.isOwner,a=Object(u.a)(e,["photos","fullName","userId","isOwner"]);return Object(i.jsxs)("div",{className:g.a.profileMainInfo,children:[Object(i.jsxs)("div",{className:g.a.profileAvatar,children:[Object(i.jsx)(T,{photos:t,fullName:n}),Object(i.jsx)(W,{isOwner:o,savePhoto:a.savePhoto})]}),Object(i.jsxs)("div",{className:g.a.profileStatus,children:[Object(i.jsx)("div",{className:g.a.profileName,children:n}),Object(i.jsx)(D,{})]}),Object(i.jsx)("div",{className:g.a.profileId,children:r})]})},z=function(e){var t=e.aboutMe;Object(u.a)(e,["aboutMe"]);return t?Object(i.jsxs)("div",{className:m.a.profileJob,children:[Object(i.jsx)("h2",{children:"About me"}),Object(i.jsx)("p",{children:t})]}):""},E=function(e){var t=e.isOwner,n=e.profile,r=Object(u.a)(e,["isOwner","profile"]);return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:f.a.profileUser,children:[Object(i.jsx)(B,{fullName:n.fullName,photos:n.photos,userId:n.userId,isOwner:t,savePhoto:r.savePhoto}),Object(i.jsx)(z,{aboutMe:n.aboutMe}),Object(i.jsx)(x,{lookingForAJob:n.lookingForAJob,lookingForAJobDescription:n.lookingForAJobDescription}),Object(i.jsx)(O,{contacts:n.contacts})]})})},Y=n(305),G=n.n(Y),L=function(e){var t=e.message,n=e.likesCount;return Object(i.jsxs)("div",{className:G.a.post,children:[Object(i.jsx)("p",{children:t}),Object(i.jsx)("small",{children:"Like"}),Object(i.jsx)("small",{children:n})]})},q=n(306),X=n.n(q),H=n(113),R=n(114),Z=n(233),K=n(58),Q=Object(Z.b)(300),$=l.a.memo((function(e){var t=e.addPostTC,n=e.profilePage.posts.map((function(e){return Object(i.jsx)(L,{message:e.post,likesCount:e.likesCount},e.id)}));return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"My posts"}),Object(i.jsx)(ee,{onSubmit:function(e){t(e.newPost)}}),Object(i.jsx)("div",{children:n})]})})),ee=Object(R.a)({form:"postForm"})((function(e){return Object(i.jsxs)("form",{onSubmit:e.handleSubmit,className:X.a.inputWrap,children:[Object(i.jsx)(H.a,{component:F.b,name:"newPost",placeholder:"Type your post...",className:X.a.textarea,validate:[Z.c,Q]}),Object(i.jsx)(K.a,{className:X.a.add,children:"Add post"})]})})),te=$,ne={addPostTC:I.a},re=Object(N.b)((function(e){return{profilePage:S(e)}}),ne)(te),oe=n(36),ae=n(307),ce=n.n(ae),ie=function(e){return Object(i.jsx)(P.b,{onSubmit:e.onSubmit,initialValues:e.initialValues,profile:e.profile,children:function(e){var t=e.handleSubmit,n=e.profile,r=e.error;return Object(i.jsxs)("form",{onSubmit:t,children:[Object(i.jsxs)("div",{className:ce.a.form,children:[Object(i.jsxs)("label",{children:[Object(i.jsx)("h2",{children:"FullName"}),Object(i.jsx)(P.a,{placeholder:"FullName",name:"fullName",validate:Object(Z.a)(Z.c),component:F.a,type:"text"})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("h2",{children:"About Me"}),Object(i.jsx)(P.a,{placeholder:"About me",name:"aboutMe",component:F.b})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("h2",{children:"Looking for a job?"}),Object(i.jsx)(P.a,{name:"lookingForAJob",component:F.a,type:"checkbox"})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("h2",{children:"Description for a looking job"}),Object(i.jsx)(P.a,{placeholder:"Description for a looking job",name:"lookingForAJobDescription",component:F.b})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Contacts"}),Object(i.jsx)("div",{children:Object.keys(n.contacts).map((function(e){return Object(i.jsxs)("label",{className:ce.a.contactItem,children:[Object(i.jsx)("strong",{className:ce.a.contactItemTitle,children:e}),Object(i.jsx)(P.a,{name:"contacts.".concat(e),component:F.a,type:"text",placeholder:"https://".concat(e,"/")})]},e)}))})]})]}),r?Object(i.jsx)("div",{children:r}):"",Object(i.jsx)(K.a,{children:"Save changes"})]})}})},se=function(e){var t=e.isOwner,n=e.profile,r=Object(u.a)(e,["isOwner","profile"]),o=Object(s.useState)(!1),a=Object(j.a)(o,2),c=a[0],l=a[1];return n?Object(i.jsxs)("div",{children:[c?Object(i.jsx)(ie,{onSubmit:function(e){r.updateProfile(e).then((function(){return l(!1)}))},profile:n,initialValues:n}):Object(i.jsx)(E,{isOwner:t,profile:n,savePhoto:r.savePhoto,updateProfile:r.updateProfile}),!c&&t?Object(i.jsx)(K.a,{attr:{onClick:function(){t&&l(!0)}},children:"Edit profile"}):"",Object(i.jsx)(re,{})]}):Object(i.jsx)(oe.a,{})},le=n(241),je=n(46),ue=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,o,c){var i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=t)||(i=n)||c.push("/login"),e.next=4,r(i);case 4:o(i);case 5:case"end":return e.stop()}}),e)})));return function(t,n,r,o,a){return e.apply(this,arguments)}}(),be={getProfile:I.c,getUserStatus:I.d,savePhoto:I.e,updateProfile:I.g,toggleIsFetching:I.f};t.default=Object(_.d)(Object(N.b)((function(e){return{profile:C(e),authorizedUserId:Object(je.c)(e),isAuth:Object(je.d)(e),isFetching:y(e)}}),be),M.g,le.a)((function(e){var t=e.match,n=e.authorizedUserId,o=e.getProfile,a=e.getUserStatus;return Object(s.useEffect)((function(){e.toggleIsFetching(!0),ue(t.params.userId,n,o,a,e.history).then((function(t){return e.toggleIsFetching(!1)}))}),[t.params.userId]),e.isFetching?Object(i.jsx)(oe.a,{flag:e.isFetching}):Object(i.jsx)(se,Object(r.a)({isOwner:!t.params.userId},e))}))}}]);
//# sourceMappingURL=4.f893df85.chunk.js.map