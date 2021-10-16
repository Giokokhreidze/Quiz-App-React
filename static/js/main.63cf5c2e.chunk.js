(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[0],{26:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(19),s=n.n(a),i=(n(26),n(21)),o=n(0),l=function(){return Object(o.jsx)("div",{className:"text-center spinner",children:Object(o.jsx)("div",{className:"spinner-border",role:"status",children:Object(o.jsx)("span",{style:{height:"400px"},className:"visually-hidden",children:"Loading..."})})})},u=n(7),j=n(10),d=n(4),b=n.n(d),h=n(8),O=n(3),m=n(20),f=n.n(m),p={sports:21,history:23},x=function(){var e=Object(h.a)(b.a.mark((function e(t,n){var c,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get(t);case 3:return c=e.sent,r=c.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),n(!0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),v=r.a.createContext(),g=function(e){var t=e.children,n=Object(c.useState)(!0),r=Object(O.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(!1),l=Object(O.a)(i,2),d=l[0],m=l[1],f=Object(c.useState)([]),g=Object(O.a)(f,2),y=g[0],N=g[1],w=Object(c.useState)(0),C=Object(O.a)(w,2),S=C[0],k=C[1],q=Object(c.useState)(0),M=Object(O.a)(q,2),z=M[0],A=M[1],F=Object(c.useState)(!1),Q=Object(O.a)(F,2),L=Q[0],P=Q[1],B=Object(c.useState)({amount:10,category:"sports",difficulty:"easy"}),D=Object(O.a)(B,2),E=D[0],H=D[1],I=Object(c.useState)(!1),J=Object(O.a)(I,2),T=J[0],_=J[1],G=function(){var e=Object(h.a)(b.a.mark((function e(t){var n,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),s(!1),e.next=4,x(t,P);case 4:if(n=e.sent){e.next=7;break}return e.abrupt("return");case 7:if(null===(c=null===n||void 0===n?void 0:n.results)||void 0===c?void 0:c.length){e.next=10;break}return e.abrupt("return");case 10:N(c),m(!1),s(!1);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){k((function(e){var t=e+1;return t>y.length-1?(K(),0):t}))},K=function(){_(!0)};return Object(o.jsx)(v.Provider,{value:{waiting:a,loading:d,questions:y,index:S,correct:z,error:L,isModalOpen:T,handleNextQuestion:Y,checkAnswer:function(e){e&&A((function(e){return e+1})),Y()},closeModal:function(){s(!0),A(0),_(!1)},quiz:E,handleChange:function(e){var t=e.target,n=t.name,c=t.value;H(Object(j.a)(Object(j.a)({},E),{},Object(u.a)({},n,c)))},handleSubmit:function(e){e.preventDefault();var t=function(e){var t=e.amount,n=e.category,c=e.difficulty;return"".concat("https://opentdb.com/api.php?","amount=").concat(t,"&difficulty=").concat(c,"&category=").concat(p[n],"&type=multiple")}(E);G(t)}},children:t})},y=function(){return Object(c.useContext)(v)},N=function(){var e=y(),t=e.isModalOpen,n=e.closeModal,c=e.correct,r=e.questions;return Object(o.jsx)("div",{className:"".concat(t?"modal-container isOpen":"modal-container"),children:Object(o.jsxs)("div",{className:"modal-content",children:[Object(o.jsx)("h2",{children:"Congrats!"}),Object(o.jsxs)("p",{children:["You Answered ",(c/r.length*100).toFixed(0),"% of questions correctly"]}),Object(o.jsx)("button",{className:"btn btn-success close-btn",style:{width:"50%"},onClick:n,children:"Play Again"})]})})},w=function(){var e=y(),t=e.quiz,n=e.handleChange,c=e.handleSubmit,r=e.error;return Object(o.jsx)("section",{className:"quiz quiz-small",children:Object(o.jsxs)("form",{children:[Object(o.jsx)("h2",{style:{marginBottom:"2rem"},children:"Quiz App"}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{for:"noOfQuestion",className:"form-label",children:"Number of Questions"}),Object(o.jsx)("input",{type:"number",name:"amount",className:"form-control",value:t.amount,onChange:n,min:1,max:50,style:{width:"400px"}})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{for:"category",className:"form-label",children:"Categories"}),Object(o.jsxs)("select",{className:"form-select",name:"category",id:"category",value:t.category,onChange:n,children:[Object(o.jsx)("option",{value:"sports",children:"Sports"}),Object(o.jsx)("option",{value:"history",children:"History"})]})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{for:"difficulty",className:"form-label",children:"Level"}),Object(o.jsxs)("select",{className:"form-select",name:"difficulty",id:"difficulty",value:t.difficulty,onChange:n,children:[Object(o.jsx)("option",{value:"easy",children:"Easy"}),Object(o.jsx)("option",{value:"medium",children:"Medium"}),Object(o.jsx)("option",{value:"hard",children:"Hard"})]})]}),r&&Object(o.jsx)("p",{className:"error",children:"Can't find questions, please try other options"}),Object(o.jsx)("button",{type:"submit",onClick:c,className:"btn btn-success start-btn ",children:"Get Started Quiz"})]})})},C=function(){var e=y(),t=e.waiting,n=e.loading,c=e.questions,r=e.index,a=e.correct,s=e.checkAnswer;if(t)return Object(o.jsx)(w,{});if(n)return Object(o.jsx)(l,{});var u=c[r],j=u.question,d=u.incorrect_answers,b=u.correct_answer,h=Object(i.a)(d),O=Math.floor(4*Math.random());return 3===O?h.push(b):(h.push(h[O]),h[O]=b),Object(o.jsxs)("main",{children:[Object(o.jsx)(N,{}),Object(o.jsxs)("section",{className:"quiz",children:[Object(o.jsxs)("p",{children:["Correct Answer: ",a,"/",r]}),Object(o.jsxs)("article",{className:"container",children:[Object(o.jsx)("h2",{children:j}),Object(o.jsx)("div",{children:h.map((function(e,t){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("button",{style:{width:"60%",textAlign:"center"},className:"btn btn-secondary answer-btn",onClick:function(){return s(b===e)},children:e},t)})}))})]})]})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(g,{children:Object(o.jsx)(C,{})})}),document.getElementById("root")),S()}},[[47,1,2]]]);
//# sourceMappingURL=main.63cf5c2e.chunk.js.map