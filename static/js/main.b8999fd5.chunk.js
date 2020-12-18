(this.webpackJsonpbooklisy=this.webpackJsonpbooklisy||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(3),s=n.n(a),r=n(16),i=n.n(r),l=n(1),o=n.n(l),j=n(4),d=n(6);n(23);function u(e){var t=e.book,n=e.handleBookSelection;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"list-group-item list-group-item-action book",onClick:function(){return n(t)},children:[Object(c.jsxs)("div",{className:"d-flex w-100 justify-content-between mb-2",children:[Object(c.jsx)("h5",{className:"mb-1",children:t.title}),Object(c.jsxs)("small",{className:"pt-1",children:["By ",Object(c.jsx)("span",{className:"fw-bold",children:t.author})]})]}),Object(c.jsxs)("small",{children:["Language: ",Object(c.jsx)("span",{className:"fst-italic fs-6",children:t.language})]})]})})}n(24);function b(e){var t=e.books,n=e.loading,a=e.handleBookSelection;return Object(c.jsx)("div",{className:"list-group book-list",children:n?Object(c.jsx)("div",{className:"d-flex justify-content-center align-items-center h-100",children:Object(c.jsx)("p",{className:"h4",children:"Loading..."})}):t.map((function(e){return Object(c.jsx)(u,{book:e,handleBookSelection:a},"".concat(Math.random().toString(36)).concat(Math.random().toString(36)).substring(13))}))})}var h=n(5),m=n.n(h);n(42);function x(e){var t=e.totalPages,n=e.handlePageNumChange,a=e.currentPage;console.log("total pages from pagination",t);var s=function(e,t){for(var n=[],c=e;c<=t;c++)n.push(c);return n}(1,t);return Object(c.jsx)("div",{className:"d-flex align-items-center justify-content-center pagination-container mt-4",children:Object(c.jsx)("nav",{className:"m-0 p-0",children:Object(c.jsxs)("ul",{className:"pagination",children:[1!==a&&t>1?Object(c.jsx)("li",{className:"page-item",onClick:function(){return n(a-1)},children:Object(c.jsx)("div",{className:"page-link",children:Object(c.jsx)("span",{children:"\xab"})})}):null,s.map((function(e){return e===a?Object(c.jsx)("li",{className:"page-item active",children:Object(c.jsx)("div",{className:"page-link",children:e})},e):Object(c.jsx)("li",{className:"page-item",onClick:function(){return n(e)},children:Object(c.jsx)("div",{className:"page-link",children:e})},e)})),a!==t&&t>1?Object(c.jsx)("li",{className:"page-item",onClick:function(){return n(a+1)},children:Object(c.jsx)("div",{className:"page-link",children:Object(c.jsx)("span",{children:"\xbb"})})}):null]})})})}n(43);function f(e){var t=e.book;return t?Object(c.jsxs)("div",{className:"col h-100 p-0 rounded overflow-hidden ms-4 book-details-container",children:[Object(c.jsxs)("div",{className:"d-flex h-50 p-3 book-details-header",children:[Object(c.jsx)("img",{className:"img-thumbnail h-100",src:"./"+t.imageLink,alt:t.title}),Object(c.jsxs)("div",{className:"mx-4 d-flex flex-column justify-content-center",children:[Object(c.jsx)("h3",{className:"fw-bold h1 book-details-title",children:t.title}),Object(c.jsx)("hr",{}),Object(c.jsxs)("small",{className:"text-muted fw-bold",children:["By ",Object(c.jsx)("span",{className:"text-dark fst-italic",children:t.author})]}),Object(c.jsxs)("small",{className:"text-muted fw-bold",children:["Year ",Object(c.jsx)("span",{className:"text-dark fst-italic",children:t.year})]}),Object(c.jsxs)("small",{className:"text-muted fw-bold",children:["Language ",Object(c.jsx)("span",{className:"text-dark fst-italic",children:t.language})]})]})]}),Object(c.jsxs)("div",{className:"p-3 h-50 d-flex flex-column book-details-content",children:[Object(c.jsxs)("small",{className:"text-muted fw-bold my-2",children:["Country ",Object(c.jsx)("span",{className:"text-dark fst-italic",children:t.country})]}),Object(c.jsxs)("small",{className:"text-muted fw-bold my-2",children:["Total Pages ",Object(c.jsx)("span",{className:"text-dark fst-italic",children:t.pages})]}),Object(c.jsx)("a",{className:"fst-italic",href:t.link,target:"_blank",rel:"noreferrer",children:"More details on wikipedia"})]})]}):Object(c.jsx)("div",{className:"col h-100 p-0 rounded overflow-hidden ms-4 d-flex justify-content-center align-items-center book-details-null",children:Object(c.jsx)("h6",{className:"h2",children:"Select A Book in the list to see detail."})})}n(44);function O(e){var t=e.booksPerPage,n=e.handleBooksPerPageChange,a=function(){var e=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(t.target.value);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"d-flex w-100 justify-content-between align-items-center mb-2 book-list-header",children:[Object(c.jsx)("h3",{className:"text-decoration-underline",children:"Book List"}),Object(c.jsxs)("div",{className:"input-group w-auto",children:[Object(c.jsx)("span",{className:"input-group-text",children:"Books per pages"}),Object(c.jsxs)("select",{className:"form-control form-select books-per-pages",value:t,onChange:a,children:[Object(c.jsx)("option",{value:10,children:"10"}),Object(c.jsx)("option",{value:20,children:"20"}),Object(c.jsx)("option",{value:30,children:"30"}),Object(c.jsx)("option",{value:40,children:"40"}),Object(c.jsx)("option",{value:50,children:"50"}),Object(c.jsx)("option",{value:60,children:"60"}),Object(c.jsx)("option",{value:70,children:"70"}),Object(c.jsx)("option",{value:80,children:"80"}),Object(c.jsx)("option",{value:90,children:"90"}),Object(c.jsx)("option",{value:100,children:"100"})]})]})]})}var p=m.a.create({baseURL:"."}),g=function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/books.json");case 2:return e.next=4,e.sent.data;case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20,c=t*n,a=c-n;return e.slice(a,c)};n(45);function k(){var e=Object(a.useState)(!0),t=Object(d.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)([]),i=Object(d.a)(r,2),l=i[0],u=i[1],h=Object(a.useState)(1),m=Object(d.a)(h,2),p=m[0],k=m[1],N=Object(a.useState)(20),w=Object(d.a)(N,2),y=w[0],P=w[1],S=Object(a.useState)(0),B=Object(d.a)(S,2),C=B[0],L=B[1],F=Object(a.useState)(null),M=Object(d.a)(F,2),T=M[0],E=M[1];Object(a.useEffect)((function(){g().then((function(e){u(v(e,p,y)),L(Math.ceil(e.length/y)),s(!1)})).catch((function(e){return console.log(e)}))}),[]);var I=function(){var e=Object(j.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),P(t),e.next=4,g();case 4:n=e.sent,u(v(n,1,t)),k(1),L(Math.ceil(n.length/t)),s(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(j.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,g();case 3:n=e.sent,k(t),u(v(n,t,y)),s(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"container py-5 main-container",children:Object(c.jsxs)("div",{className:"row h-100 rounded",children:[Object(c.jsxs)("div",{className:"col-5 h-100 px-0",children:[Object(c.jsxs)("div",{className:"book-list--header-container",children:[Object(c.jsx)(O,{booksPerPage:y,setBooksPerPage:P,handleBooksPerPageChange:I}),Object(c.jsx)(b,{books:l,loading:n,handleBookSelection:A})]}),Object(c.jsx)(x,{totalPages:C,currentPage:p,handlePageNumChange:J})]}),Object(c.jsx)(f,{book:T})]})}),Object(c.jsx)("div",{className:"bg-secondary footer"})]})}var N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root")),N()}},[[46,1,2]]]);
//# sourceMappingURL=main.b8999fd5.chunk.js.map