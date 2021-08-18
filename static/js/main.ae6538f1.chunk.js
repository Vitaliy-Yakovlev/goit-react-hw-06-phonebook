(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={list:"Contacts_list__i6YM7",item:"Contacts_item__1GJe9",btn:"Contacts_btn__1801i"}},14:function(e,t,n){e.exports={label:"Filter_label__1hmdT",input:"Filter_input__3QeL9"}},15:function(e,t,n){e.exports={container:"Container_container__23PN0",title:"Container_title__3zxQs"}},18:function(e,t,n){e.exports={title:"Heading_title__Q_IXu"}},26:function(e,t,n){},3:function(e,t,n){e.exports={label:"Form_label__3z4nc",input:"Form_input__2I661",btn:"Form_btn__263F2"}},41:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),o=n.n(r),i=(n(25),n(26),n(2)),s=n(16),l=n(17),u=n.n(l),b="contacts/add",m="contacts/delete",j="contacts/changeFilter",d=n(3),h=n.n(d),f=n(1);var p=Object(i.b)(null,(function(e){return{onSubmit:function(t){var n=t.name,a=t.number;return e(function(e){var t=e.name,n=e.number;return{type:b,payload:{name:t,id:u.a.generate(),number:n}}}({name:n,number:a}))}}}))((function(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],o=c[1],i=Object(a.useState)(""),l=Object(s.a)(i,2),u=l[0],b=l[1],m=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":b(a)}},j=function(){b(""),o("")};return Object(f.jsx)("form",{className:h.a.form,onSubmit:function(e){e.preventDefault(),t({name:r,number:u}),j()},children:Object(f.jsxs)("label",{className:h.a.label,children:["Name",Object(f.jsx)("input",{className:h.a.input,value:r,onChange:m,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(f.jsxs)("label",{className:h.a.label,children:["Number",Object(f.jsx)("input",{className:h.a.input,value:u,onChange:m,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(f.jsx)("button",{className:h.a.btn,type:"submit",children:"Add contact"})]})})})),O=n(10),x=n.n(O),_=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))},v=Object(i.b)((function(e){var t=e.contacts,n=t.items,a=t.filter;return{contacts:_(n,a)}}),(function(e){return{onClick:function(t){return e({type:m,payload:t})}}}))((function(e){var t=e.contacts,n=e.onClick;return Object(f.jsx)("ul",{className:x.a.list,children:t.map((function(e){var t=e.name,a=e.id,c=e.number;return Object(f.jsxs)("li",{className:x.a.item,children:[t,": ",c,Object(f.jsx)("button",{className:x.a.btn,type:"button",onClick:function(){return n(a)},children:"Delete"})]},a)}))})})),g=n(14),C=n.n(g),y=Object(i.b)((function(e){return{value:e.contacts.filter}}),(function(e){return{onChangeFilter:function(t){return e((n=t.target.value,{type:j,payload:n}));var n}}}))((function(e){var t=e.value,n=e.onChangeFilter;return Object(f.jsxs)("label",{className:C.a.label,children:["Find contact by name",Object(f.jsx)("input",{className:C.a.input,type:"text",value:t,onChange:n})]})})),N=n(18),F=n.n(N),k=function(e){var t=e.text;return Object(f.jsx)("h2",{className:F.a.title,children:t})},w=n(15),S=n.n(w),z=function(e){var t=e.children;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{className:S.a.title,children:"React. Home Work 6 - Phonebook"}),Object(f.jsx)("div",{className:S.a.container,children:t})]})},A=n(9);n(40);function L(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(z,{children:[Object(f.jsx)(k,{text:"Phonebook"}),Object(f.jsx)(p,{}),Object(f.jsx)(A.a,{autoClose:5e3}),Object(f.jsx)(k,{text:"Contacts"}),Object(f.jsx)(y,{}),Object(f.jsx)(v,{})]})})}var J=n(5),D=n(19),I=n(20),M=Object(J.combineReducers)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case b:var c=e.filter((function(e){return e.name.toLowerCase()===a.name.toLowerCase()}));return c.length?(A.b.error("".concat(a.name," is already in contacts")),e):[].concat(Object(I.a)(e),[a]);case m:return e.filter((function(e){return e.id!==a}));default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case j:return a;default:return e}}}),P=Object(J.combineReducers)({contacts:M}),Q=Object(J.createStore)(P,Object(D.composeWithDevTools)());o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(i.a,{store:Q,children:Object(f.jsx)(L,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.ae6538f1.chunk.js.map