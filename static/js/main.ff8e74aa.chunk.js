(this.webpackJsonpignatstask=this.webpackJsonpignatstask||[]).push([[0],{12:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3JMn9",errorInput:"SuperInputText_errorInput__2k350",error:"SuperInputText_error__2fFl7"}},16:function(e,t,n){e.exports={blue:"HW4_blue__3hNxP",column:"HW4_column__h6QSb",testSpanError:"HW4_testSpanError__11fW4"}},17:function(e,t,n){e.exports={default:"SuperButton_default__8WFa7",red:"SuperButton_red__1iItN"}},18:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__aWo8o",spanClassName:"SuperCheckbox_spanClassName__2KynF"}},24:function(e,t,n){e.exports={App:"App_App__2urQu"}},25:function(e,t,n){e.exports={someClass:"Greeting_someClass__3obed",error:"Greeting_error__gTo5x"}},32:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(23),s=n.n(r),i=(n(32),n(24)),o=n.n(i),j=n(0);var l=function(){return Object(j.jsx)("div",{children:"// add NavLinks"})},d=n(2),u=n(6),b=n.n(u);function h(e){return Object(j.jsxs)("div",{className:b.a.message,children:[Object(j.jsx)("div",{className:b.a.avaMain,children:Object(j.jsx)("img",{src:e.avatar,alt:"",className:b.a.avaPic})}),Object(j.jsxs)("div",{className:b.a.post,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:b.a.postName,children:e.name}),Object(j.jsx)("div",{children:e.message})]}),Object(j.jsx)("div",{className:b.a.postTime,children:Object(j.jsx)("div",{children:e.time})}),Object(j.jsx)("div",{className:b.a.postBox}),Object(j.jsx)("div",{className:b.a.postBox\u0421})]})]})}var x="https://thumbs.dreamstime.com/b/%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%D0%B0-h-%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B0-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B3%D0%BE-%D1%86%D0%B2%D0%B5%D1%82%D0%B0-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF-%D1%81-%D0%BA%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9-121994137.jpg",O="Alex",m="Lorem ipsum dolor sit amet",p="22:00";var f=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 1",Object(j.jsx)(h,{avatar:x,name:O,message:m,time:p}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})},_=n(5);var v=function(e){return Object(j.jsxs)("div",{children:[e.affair.name,Object(j.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var D=function(e){var t=e.data.map((function(t){return Object(j.jsx)(v,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(j.jsxs)("div",{children:[t,Object(j.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(j.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(j.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(j.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},B=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var g=function(){var e=Object(a.useState)(B),t=Object(_.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("all"),s=Object(_.a)(r,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 2",Object(j.jsx)(D,{data:l,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})},C=n(27),k=n(25),N=n.n(k),y=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,c=e.error,r=e.totalUsers,s=c?N.a.error:"";return Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{value:t,onChange:n,className:s}),Object(j.jsx)("span",{children:c}),Object(j.jsx)("button",{onClick:a,children:"add"}),Object(j.jsx)("span",{children:r})]})},S=function(e){var t=e.users,n=e.addUserCallback,c=Object(a.useState)(""),r=Object(_.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(""),l=Object(_.a)(o,2),d=l[0],u=l[1],b=t.length;return Object(j.jsx)(y,{name:s,setNameCallback:function(e){i(e.currentTarget.value),u("")},addUser:function(){s?(n(s),alert("Hello ".concat(s,"!")),i("")):u("Please, add the correct name")},error:d,totalUsers:b})},w=n(41);var E=function(){var e=Object(a.useState)([]),t=Object(_.a)(e,2),n=t[0],c=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 3",Object(j.jsx)(S,{users:n,addUserCallback:function(e){c([].concat(Object(C.a)(n),[{_id:Object(w.a)(),name:e}]))}}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})},M=n(7),T=n(8),A=n(12),F=n.n(A),I=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=(e.className,e.spanClassName),i=Object(T.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),o="".concat(F.a.error," ").concat(s||""),l="".concat(r?F.a.errorInput:F.a.superInput);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",Object(M.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:l},i)),r&&Object(j.jsx)("span",{className:o,children:r})]})},P=n(16),W=n.n(P),H=n(17),U=n.n(H),K=function(e){var t=e.red,n=e.className,a=Object(T.a)(e,["red","className"]),c="".concat(t?U.a.red:U.a.default," ").concat(n);return Object(j.jsx)("button",Object(M.a)({className:c},a))},Q=n(18),J=n.n(Q),L=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),r=Object(T.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(J.a.checkbox," ").concat(a||"");return Object(j.jsxs)("label",{children:[Object(j.jsx)("input",Object(M.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),c&&Object(j.jsx)("span",{className:J.a.spanClassName,children:c})]})};var G=function(){var e=Object(a.useState)(""),t=Object(_.a)(e,2),n=t[0],c=t[1],r=n?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(_.a)(i,2),l=o[0],d=o[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 4",Object(j.jsxs)("div",{className:W.a.column,children:[Object(j.jsx)(I,{value:n,onChangeText:c,onEnter:s,error:r}),Object(j.jsx)(I,{className:W.a.blue}),Object(j.jsx)(K,{children:"default"}),Object(j.jsx)(K,{red:!0,onClick:s,children:"delete "}),Object(j.jsx)(K,{disabled:!0,children:"disabled"}),Object(j.jsx)(L,{checked:l,onChangeChecked:d,children:"some text "}),Object(j.jsx)(L,{checked:l,onChange:function(e){return d(e.currentTarget.checked)}})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})};var q=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{}),Object(j.jsx)(g,{}),Object(j.jsx)(E,{}),Object(j.jsx)(G,{})]})};var R=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"404"}),Object(j.jsx)("div",{children:"Page not found!"}),Object(j.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},X="/pre-junior";var Y=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)(d.d,{children:[Object(j.jsx)(d.b,{path:"/",exact:!0,render:function(){return Object(j.jsx)(d.a,{to:X})}}),Object(j.jsx)(d.b,{path:X,render:function(){return Object(j.jsx)(q,{})}}),"// add routes",Object(j.jsx)(d.b,{render:function(){return Object(j.jsx)(R,{})}})]})})},Z=n(15);var $=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)(Z.a,{children:[Object(j.jsx)(l,{}),Object(j.jsx)(Y,{})]})})};var z=function(){return Object(j.jsxs)("div",{className:o.a.App,children:[Object(j.jsx)("div",{children:"react homeworks:"}),Object(j.jsx)($,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(z,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){e.exports={message:"Message_message___d8HS",avaMain:"Message_avaMain__2ZKmi",avaPic:"Message_avaPic__2BEvq",post:"Message_post__1HQxn",postName:"Message_postName__BOUdu",postBox:"Message_postBox__1uuoY","postBox\u0421":"Message_postBox\u0421__2DyQ_",postTime:"Message_postTime__3geiO"}}},[[39,1,2]]]);
//# sourceMappingURL=main.ff8e74aa.chunk.js.map