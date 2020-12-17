(this.webpackJsonpbook=this.webpackJsonpbook||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(3),c=n.n(s),r=n(16),i=n.n(r),l=n(1),o=n.n(l),u=n(4),d=n(5);n(23);function j(e){var t=e.book,n=e.handleBookSelection;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"list-group-item list-group-item-action book",onClick:function(){return n(t.id)},children:[Object(a.jsxs)("div",{className:"d-flex w-100 justify-content-between mb-2",children:[Object(a.jsx)("h5",{className:"mb-1",children:t.title}),Object(a.jsxs)("small",{className:"pt-1",children:["By ",Object(a.jsx)("span",{className:"fw-bold",children:t.author})]})]}),Object(a.jsxs)("small",{children:["Language: ",Object(a.jsx)("span",{className:"fst-italic fs-6",children:t.language})]})]})})}n(24);function b(e){var t=e.books,n=e.loading,s=e.handleBookSelection;return Object(a.jsx)("div",{className:"list-group book-list",children:n?Object(a.jsx)("div",{className:"d-flex justify-content-center align-items-center h-100",children:Object(a.jsx)("p",{className:"h4",children:"Loading..."})}):t.map((function(e){return Object(a.jsx)(j,{book:e,handleBookSelection:s},e.id)}))})}var h=n(6),x=n.n(h),m="http://assignment-be.jaksmok.com/api/v1/",p="sampleId",f="Secret",O=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=n.length>0&&void 0!==n[0]?n[0]:{size:void 0,page:void 0}).page||!t.size){e.next=7;break}return e.next=4,x.a.get(m+"books",{auth:{username:p,password:f},params:{page:t.page,size:t.size}});case 4:return e.next=6,e.sent.data;case 6:return e.abrupt("return",e.sent);case 7:if(!t.page){e.next=15;break}return e.next=10,x.a.get(m+"books",{auth:{username:p,password:f},params:{page:t.page}});case 10:return e.next=12,e.sent.data;case 12:return e.abrupt("return",e.sent);case 15:if(!t.size){e.next=24;break}return console.log("right condition"),e.next=19,x.a.get(m+"books",{auth:{username:p,password:f},params:{size:t.size}});case 19:return e.next=21,e.sent.data;case 21:return e.abrupt("return",e.sent);case 24:return e.next=26,x.a.get(m+"books",{auth:{username:p,password:f}});case 26:return e.next=28,e.sent.data;case 28:return e.abrupt("return",e.sent);case 29:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get(m+"books/"+t,{auth:{username:p,password:f}});case 2:return e.next=4,e.sent.data;case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();n(42);function v(e){var t=e.totalPages,n=e.handlePageNumChange,s=e.currentPage,c=function(e,t){for(var n=[],a=e;a<=t;a++)n.push(a);return n}(1,t);return Object(a.jsx)("div",{className:"d-flex align-items-center justify-content-center pagination-container mt-4",children:Object(a.jsx)("nav",{className:"m-0 p-0",children:Object(a.jsxs)("ul",{className:"pagination",children:[1!==s&&t>1?Object(a.jsx)("li",{className:"page-item",onClick:function(){return n(s-1)},children:Object(a.jsx)("div",{className:"page-link",children:Object(a.jsx)("span",{children:"\xab"})})}):null,c.map((function(e){return e===s?Object(a.jsx)("li",{className:"page-item active",children:Object(a.jsx)("div",{className:"page-link",children:e})},e):Object(a.jsx)("li",{className:"page-item",onClick:function(){return n(e)},children:Object(a.jsx)("div",{className:"page-link",children:e})},e)})),s!==t&&t>1?Object(a.jsx)("li",{className:"page-item",onClick:function(){return n(s+1)},children:Object(a.jsx)("div",{className:"page-link",children:Object(a.jsx)("span",{children:"\xbb"})})}):null]})})})}n(43);function k(e){var t=e.book;return t?Object(a.jsxs)("div",{className:"col h-100 p-0 rounded overflow-hidden ms-4 book-details-container",children:[Object(a.jsxs)("div",{className:"d-flex h-50 p-3 book-details-header",children:[Object(a.jsx)("img",{className:"img-thumbnail h-100",src:t.imageUrl,alt:t.title}),Object(a.jsxs)("div",{className:"mx-4 d-flex flex-column justify-content-center",children:[Object(a.jsx)("h3",{className:"fw-bold h1 book-details-title",children:t.title}),Object(a.jsx)("hr",{}),Object(a.jsxs)("small",{className:"text-muted fw-bold",children:["By ",Object(a.jsx)("span",{className:"text-dark fst-italic",children:t.author})]}),Object(a.jsxs)("small",{className:"text-muted fw-bold",children:["Year ",Object(a.jsx)("span",{className:"text-dark fst-italic",children:t.year})]}),Object(a.jsxs)("small",{className:"text-muted fw-bold",children:["Language ",Object(a.jsx)("span",{className:"text-dark fst-italic",children:t.language})]})]})]}),Object(a.jsxs)("div",{className:"p-3 h-50 d-flex flex-column book-details-content",children:[Object(a.jsxs)("small",{className:"text-muted fw-bold my-2",children:["Country ",Object(a.jsx)("span",{className:"text-dark fst-italic",children:t.country})]}),Object(a.jsxs)("small",{className:"text-muted fw-bold my-2",children:["Total Pages ",Object(a.jsx)("span",{className:"text-dark fst-italic",children:t.pages})]}),Object(a.jsx)("a",{className:"fst-italic",href:t.wikipediaLink,target:"_blank",children:"More details on wikipedia"})]})]}):Object(a.jsx)("div",{className:"col h-100 p-0 rounded overflow-hidden ms-4 d-flex justify-content-center align-items-center book-details-null",children:Object(a.jsx)("h6",{className:"h2",children:"Select A Book in the list to see detail."})})}n(44);function N(e){var t=e.booksPerPage,n=e.handleBooksPerPageChange,s=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(t.target.value);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"d-flex w-100 justify-content-between align-items-center mb-2 book-list-header",children:[Object(a.jsx)("h3",{className:"text-decoration-underline",children:"Book List"}),Object(a.jsxs)("div",{className:"input-group w-auto",children:[Object(a.jsx)("span",{className:"input-group-text",children:"Books per pages"}),Object(a.jsxs)("select",{className:"form-control form-select books-per-pages",value:t,onChange:s,children:[Object(a.jsx)("option",{value:10,children:"10"}),Object(a.jsx)("option",{value:20,children:"20"}),Object(a.jsx)("option",{value:30,children:"30"}),Object(a.jsx)("option",{value:40,children:"40"}),Object(a.jsx)("option",{value:50,children:"50"}),Object(a.jsx)("option",{value:60,children:"60"}),Object(a.jsx)("option",{value:70,children:"70"}),Object(a.jsx)("option",{value:80,children:"80"}),Object(a.jsx)("option",{value:90,children:"90"}),Object(a.jsx)("option",{value:100,children:"100"})]})]})]})}n(45);function w(){var e=Object(s.useState)(!0),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)([]),i=Object(d.a)(r,2),l=i[0],j=i[1],h=Object(s.useState)(0),x=Object(d.a)(h,2),m=x[0],p=x[1],f=Object(s.useState)(0),w=Object(d.a)(f,2),y=w[0],P=w[1],B=Object(s.useState)(0),S=Object(d.a)(B,2),C=S[0],z=S[1],L=Object(s.useState)(null),F=Object(d.a)(L,2),I=F[0],T=F[1];Object(s.useEffect)((function(){O().then((function(e){j(e.content),p(e.page+1),P(e.size),z(e.totalPages),c(!1)})).catch((function(e){return console.log(e)}))}),[]);var E=function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),P(t),e.next=4,O({size:t});case 4:n=e.sent,p(1),j(n.content),z(n.totalPages),c(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,O({page:t-1,size:y});case 3:n=e.sent,j(n.content),p(t),c(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:n=e.sent,T(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"container py-5 main-container",children:Object(a.jsxs)("div",{className:"row h-100 rounded",children:[Object(a.jsxs)("div",{className:"col-5 h-100 px-0",children:[Object(a.jsxs)("div",{className:"book-list--header-container",children:[Object(a.jsx)(N,{booksPerPage:y,setBooksPerPage:P,handleBooksPerPageChange:E}),Object(a.jsx)(b,{books:l,loading:n,handleBookSelection:M})]}),Object(a.jsx)(v,{totalPages:C,currentPage:m,handlePageNumChange:J})]}),Object(a.jsx)(k,{book:I})]})}),Object(a.jsx)("div",{className:"bg-secondary footer"})]})}var y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root")),y()}},[[46,1,2]]]);
//# sourceMappingURL=main.f3e53b7f.chunk.js.map