(this.webpackJsonpreact_project_five=this.webpackJsonpreact_project_five||[]).push([[0],[,,,function(e,t,n){e.exports={backdrop:"ErrorModal_backdrop__3JozY",modal:"ErrorModal_modal__1xdo9",header:"ErrorModal_header__1Yr1y",content:"ErrorModal_content__1gfzi",actions:"ErrorModal_actions__3wYgl"}},,,,,function(e,t,n){e.exports={card:"Card_card__2x64P"}},function(e,t,n){e.exports={button:"Button_button__2_2fT"}},function(e,t,n){e.exports={input:"AddUser_input__39hYA"}},function(e,t,n){e.exports={users:"UsersList_users__3hMnm"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(7),s=n.n(r),i=(n(17),n(12)),o=n(2),l=n(8),d=n.n(l),u=n(0),j=function(e){return Object(u.jsx)("div",{className:"".concat(d.a.card," ").concat(e.className),children:e.children})},b=n(9),h=n.n(b),m=function(e){return Object(u.jsx)("button",{className:h.a.button,type:e.type||"button",onClick:e.onClick,children:e.children})},O=n(10),x=n.n(O),f=n(3),_=n.n(f),p=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:_.a.backdrop,onClick:e.onConfirm}),Object(u.jsxs)(j,{className:_.a.modal,children:[Object(u.jsx)("header",{className:_.a.header,children:Object(u.jsx)("h2",{children:e.title})}),Object(u.jsx)("div",{className:_.a.content,children:Object(u.jsx)("p",{children:e.message})}),Object(u.jsx)("footer",{className:_.a.actions,children:Object(u.jsx)(m,{onClick:e.onConfirm,children:"Okay"})})]})]})},g=function(e){var t=Object(c.useState)(""),n=Object(o.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),i=Object(o.a)(s,2),l=i[0],d=i[1],b=Object(c.useState)(),h=Object(o.a)(b,2),O=h[0],f=h[1];return Object(u.jsxs)("div",{children:[O&&Object(u.jsx)(p,{title:O.title,message:O.message,onConfirm:function(){f(null)}}),Object(u.jsx)(j,{className:x.a.input,children:Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),0!==a.trim().length&&0!==l.trim().length?+l<1?f({title:"Invalid age",message:"Please enter a valid age (higher than 0)."}):(e.onAddUser(a,l),r(""),d("")):f({title:"Invalid input",message:"Please enter a valid name and age (non-empty values)."})},children:[Object(u.jsx)("label",{htmlFor:"username",children:"Username"}),Object(u.jsx)("input",{id:"username",type:"text",value:a,onChange:function(e){r(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"age",children:"Age (Years)"}),Object(u.jsx)("input",{id:"age",type:"number",value:l,onChange:function(e){d(e.target.value)}}),Object(u.jsx)(m,{type:"submit",children:"Add User"})]})})]})},v=n(11),C=n.n(v),k=function(e){return Object(u.jsx)(j,{className:C.a.users,children:Object(u.jsx)("ul",{children:e.users.map((function(e){return Object(u.jsxs)("li",{children:[e.name," (",e.age," years old)"]},e.id)}))})})};var y=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(g,{onAddUser:function(e,t){a((function(n){return[].concat(Object(i.a)(n),[{name:e,age:t,id:Math.random().toString()}])}))}}),Object(u.jsx)(k,{users:n})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),N()}],[[19,1,2]]]);
//# sourceMappingURL=main.61e26c43.chunk.js.map