(this.webpackJsonpspa=this.webpackJsonpspa||[]).push([[0],{19:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),c=n.n(s),r=n(21),l=n.n(r),i=(n(28),n(29),n(2)),o=(n(19),c.a.createContext()),d=n(5),j=n.n(d),u=n(9),m=n(11),b=n(12),h=(n(31),"https://spartanbhardwaj.hopto.org/");function v(){var e=Object(s.useContext)(o),t=e.setAuthToken,n=(e.authToken,e.setRefreshToken),c=e.setUser,r=Object(s.useState)({username:"",password:""}),l=Object(i.a)(r,2),d=l[0],v=l[1],O=Object(s.useState)(null),f=Object(i.a)(O,2),x=f[0],p=f[1],g=Object(s.useState)(null),N=Object(i.a)(g,2),E=N[0],S=N[1],k=function(e){e.target&&v(Object(b.a)(Object(b.a)({},d),{},Object(m.a)({},e.target.name,e.target.value)))},y=function(){var e=Object(u.a)(j.a.mark((function e(a){var s,r,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),S(!0),p(null),e.prev=3,e.next=6,fetch(h+"departments/auth/token/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)});case 6:return s=e.sent,e.next=9,s.json();case 9:if(r=e.sent,S(!1),200===s.status){e.next=14;break}return p(r),e.abrupt("return");case 14:r.access&&(l={name:r.name,image:r.image},t(r.access),n(r.refresh),c(l),localStorage.setItem("authToken",r.access),localStorage.setItem("refreshToken",r.refresh),localStorage.setItem("user",JSON.stringify(l)),localStorage.setItem("expires",(new Date).getTime()+828e5)),e.next=22;break;case 17:e.prev=17,e.t0=e.catch(3),console.log("Error Getting Auth Token - Err : ",e.t0.message),S(!1),p({detail:"Network Error"});case 22:case"end":return e.stop()}}),e,null,[[3,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)("div",{className:"heading",children:Object(a.jsx)("h1",{children:"Nimbus"})}),Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"login",children:[Object(a.jsx)("div",{className:"info info-2",children:"Nimbus Events"}),Object(a.jsx)("div",{className:"info",children:"Create Read Update Delete"}),Object(a.jsxs)("div",{className:"form-container",children:[Object(a.jsxs)("div",{className:"heading",children:[Object(a.jsx)("h1",{children:"Admin"}),Object(a.jsx)("h3",{children:"NIMBUS Clubs and Event Managers"})]}),Object(a.jsxs)("form",{onSubmit:y,children:[Object(a.jsx)("div",{className:"form-row",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"username",children:"Username"}),Object(a.jsx)("input",{required:!0,className:"form-control",type:"text",id:"username",name:"username",value:d.username,onChange:k,placeholder:"username",autoComplete:"off"})]})}),Object(a.jsx)("div",{className:"form-row",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{required:!0,className:"form-control",type:"password",id:"password",name:"password",value:d.password,onChange:k,placeholder:"********",autoComplete:"off"})]})}),Object(a.jsx)("div",{className:"form-row",children:x?Object(a.jsx)("div",{className:"error",children:x.detail}):null}),E?Object(a.jsx)("div",{className:"form-control",children:Object(a.jsx)("div",{className:"progress-horizontal",children:Object(a.jsx)("div",{className:"bar-horizontal"})})}):null,Object(a.jsx)("div",{className:"form-row",children:Object(a.jsx)("button",{type:"submit",className:"btn-submit",children:"Login"})})]})]})]})})]})}n(32),n(33);function O(e){var t,n,c=e.editEvent,r=e.setEditEvent,l=e.getEvents,d=Object(s.useState)(c),v=Object(i.a)(d,2),O=v[0],f=v[1],x=Object(s.useState)(null),p=Object(i.a)(x,2),g=p[0],N=p[1],E=Object(s.useState)(!1),S=Object(i.a)(E,2),k=S[0],y=S[1],T=Object(s.useContext)(o).authToken,w=function(e){f(Object(b.a)(Object(b.a)({},O),{},Object(m.a)({},e.target.name,e.target.value)))},C=function(){var e=Object(u.a)(j.a.mark((function e(t){var n,a,s,c,i,o,d,u,m,b,v,f;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!k){e.next=3;break}return e.abrupt("return");case 3:if(N(null),y(!0),O.id){e.next=31;break}for(a in console.log("Creating Event - ",O),e.prev=7,n=new FormData,O)["name","id","info","venue","start","end","regURL","Type","department"].includes(a)&&n.append(a,O[a]);return s=document.querySelector("#image"),c=document.querySelector("#abstract"),s.files[0]&&n.append("image",s.files[0]),c.files[0]&&n.append("abstract",c.files[0]),e.next=16,fetch(h+"events/",{method:"POST",headers:{Authorization:"Bearer ".concat(T)},body:n});case 16:return i=e.sent,e.next=19,i.json();case 19:o=e.sent,[200,201].includes(i.status)?(y(!1),N("success"),l(),setTimeout((function(){r(null)}),1e3)):(y(!1),N(JSON.stringify(o))),console.log("Created Event - ",o),e.next=29;break;case 24:e.prev=24,e.t0=e.catch(7),console.log("Error while Creating Event - ",e.t0.message),y(!1),N(e.t0.message);case 29:e.next=54;break;case 31:for(u in console.log("Updating Event ",O),e.prev=32,d=new FormData,O)["name","id","info","venue","start","end","regURL","Type","department"].includes(u)&&d.append(u,O[u]);return m=document.querySelector("#image"),b=document.querySelector("#abstract"),m.files[0]&&d.append("image",m.files[0]),b.files[0]&&d.append("abstract",b.files[0]),e.next=41,fetch(h+"events/"+O.id,{method:"PUT",headers:{Authorization:"Bearer ".concat(T)},body:d});case 41:return v=e.sent,e.next=44,v.json();case 44:f=e.sent,[200,201].includes(v.status)?(y(!1),N("success"),l(),setTimeout((function(){r(null)}),1e3)):(y(!1),N(JSON.stringify(f))),console.log("Created Event - ",f),e.next=54;break;case 49:e.prev=49,e.t1=e.catch(32),console.log("Error while Creating Event - ",e.t1.message),y(!1),N(e.t1.message);case 54:case"end":return e.stop()}}),e,null,[[7,24],[32,49]])})));return function(t){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){c.id||f({name:"",info:"",venue:"",start:"",end:"",regURL:"",Type:0})}),[c]),O?Object(a.jsx)("div",{className:"edit-event",children:Object(a.jsx)("div",{className:"form-container",children:Object(a.jsxs)("form",{onSubmit:C,children:[Object(a.jsxs)("div",{className:"form-row",children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"name",children:"Event Name * "}),Object(a.jsx)("input",{required:!0,type:"text",name:"name",id:"name",value:O.name,onChange:w,placeholder:"Display Name of Event",className:"form-control",autoComplete:"off"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"venue",children:"Venue * "}),Object(a.jsx)("input",{required:!0,type:"text",name:"venue",id:"venue",value:O.venue,onChange:w,placeholder:"Online - Google Meet, ( meet link etc. if exists )",className:"form-control",autoComplete:"off"})]})]}),Object(a.jsxs)("div",{className:"form-row",children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"start",children:"Start * "}),Object(a.jsx)("input",{required:!0,type:"datetime-local",name:"start",id:"start",value:null===(t=O.start)||void 0===t?void 0:t.replace("Z",""),onChange:w,placeholder:"",className:"form-control",autoComplete:"off"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"end",children:"End * "}),Object(a.jsx)("input",{required:!0,type:"datetime-local",name:"end",id:"end",value:null===(n=O.end)||void 0===n?void 0:n.replace("Z",""),onChange:w,placeholder:"",className:"form-control",autoComplete:"off"})]})]}),Object(a.jsx)("div",{className:"form-row",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"info",children:"Description * "}),Object(a.jsx)("textarea",{required:!0,type:"text",name:"info",id:"info",value:O.info,onChange:w,placeholder:"Textual description of Event Which will be shown on website - Full detailed description can be provided seperately in the PDF",className:"form-control",autoComplete:"off"})]})}),Object(a.jsxs)("div",{className:"form-row",children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"Type",children:"Type * "}),Object(a.jsxs)("select",{name:"Type",id:"Type",className:"form-control",onChange:w,value:O.Type,children:[Object(a.jsx)("option",{value:"0",children:"Departmental Event"}),Object(a.jsx)("option",{value:"1",children:"Institutional Event"}),Object(a.jsx)("option",{value:"2",children:"Talk"}),Object(a.jsx)("option",{value:"4",children:"Workshop"})]})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"regURL",children:"Registration Url *"}),Object(a.jsx)("input",{required:!0,type:"url",name:"regURL",id:"regURL",value:O.regURL,onChange:w,placeholder:"Google Form Registration URL",className:"form-control",autoComplete:"off"})]})]}),Object(a.jsxs)("div",{className:"form-row",children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"image",children:"Image "}),Object(a.jsx)("input",{type:"file",name:"image",id:"image",accept:"image/*",className:"form-control"}),Object(a.jsx)("div",{className:"help-text",children:"Event Image / thumbnail [square fit]"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"abstract",children:"Abstract"}),Object(a.jsx)("input",{type:"file",name:"abstract",id:"abstract",className:"form-control",accept:"image/*,.pdf",autoComplete:"off"}),Object(a.jsx)("div",{className:"help-text",children:"pdf containing full details of the event"})]})]}),Object(a.jsx)("div",{className:"form-row ctrl",children:Object(a.jsx)("button",{disabled:k,className:"btn green lg",children:k?"Saving":"success"===g?"Saved":"Save"})}),Object(a.jsx)("div",{className:"form-row error",children:g||null})]})})}):null}var f=n(14);n(34);function x(e){var t=e.event,n=e.setDetailedEvent;return Object(a.jsx)("div",{className:"event-card",onClick:n?function(){return n(t)}:function(){return null},children:Object(a.jsx)(f.b,{to:n?"/admin":"/events/".concat(t.id),children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"img",children:t.image?Object(a.jsx)("img",{src:t.image?t.image:"",alt:"Event"}):null}),Object(a.jsxs)("div",{className:"txt",children:[Object(a.jsx)("div",{className:"title",children:t.name}),Object(a.jsx)("div",{className:"desc",children:t.info}),Object(a.jsxs)("div",{className:"date",children:[Object(a.jsx)("div",{className:"start",children:Object(a.jsxs)("time",{dateTime:t.start,children:[Object(a.jsx)("span",{className:"date",children:new Date(t.start).toDateString()}),Object(a.jsx)("span",{className:"time",children:new Date(t.start).toLocaleTimeString()})]})}),Object(a.jsx)("span",{className:"to",children:"-"}),Object(a.jsx)("div",{className:"end",children:Object(a.jsxs)("time",{dateTime:t.end,children:[Object(a.jsx)("span",{className:"date",children:new Date(t.end).toDateString()}),Object(a.jsx)("span",{className:"time",children:new Date(t.end).toLocaleTimeString()})]})})]}),Object(a.jsx)("div",{className:"venue",children:t.venue.includes("http")?Object(a.jsx)("a",{href:t.venue,children:t.venue}):t.venue})]})]})})})}n(40);function p(e){var t,n=e.event,c=e.setDetailedEvent,r=e.setEditEvent,l=(e.onDeleteEvent,e.getEvents),d=e.history,m=(null!==(t=Object(s.useContext)(o))&&void 0!==t?t:{}).authToken,b=Object(s.useState)(),v=Object(i.a)(b,2),O=v[0],f=v[1],x=function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f(null),!n.id){e.next=13;break}return e.prev=2,e.next=5,fetch(h+"events/"+n.id,{method:"DELETE",headers:{Authorization:"Bearer ".concat(m)}});case 5:t=e.sent,[200,201,204].includes(t.status)?(console.log("Deleted Event - ",t.status),f({detail:"Deleted Event Successfully."}),l()):403===t.status?(console.log("Cant Delete Event -",t.status),f({detail:"UnAuthorized Access."})):(console.log("Cant Delete Event -",t.status),f({detail:"Cant Delete Event"})),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.log("Failed to delete Event - ",e.t0.message),f({detail:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"event-details",children:[Object(a.jsxs)("div",{className:"ctrl",children:[d?null:Object(a.jsx)("button",{className:"btn back lg",onClick:function(){return c(null)},children:"<"}),r?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{className:"btn blue",onClick:function(){return r(n)},children:"edit"}),Object(a.jsx)("button",{className:"btn red",onClick:x,children:"delete"})]}):null]}),Object(a.jsx)("div",{className:"ctrl error",children:O?O.detail:null}),Object(a.jsxs)("div",{className:"event-form",children:[Object(a.jsx)("div",{className:"event-pic",children:Object(a.jsx)("img",{src:n.image,alt:"event"})}),Object(a.jsxs)("div",{className:"event-data",children:[Object(a.jsx)("div",{className:"event-name",children:n.name}),Object(a.jsxs)("div",{className:"meta",children:[Object(a.jsx)("div",{className:"type",style:{color:["#ff5722","#8bc34a","#00bcd4","#514A9D","#ffeb3b"][n.Type],background:["#ff572222","#8bc34a22","#00bcd422","#514A9D22","#ffeb3b22"][n.Type]},children:["Departmental Event","Institutional Event","Lecture","Exhibition","Workshop"][n.Type]}),Object(a.jsx)("div",{className:"event-club",children:n.department})]}),Object(a.jsx)("pre",{className:"event-description",children:n.info}),Object(a.jsx)("div",{className:"abstract",children:Object(a.jsx)("div",{className:"btn",children:Object(a.jsx)("a",{href:n.abstract,children:"Read More"})})}),Object(a.jsxs)("div",{className:"other-data",children:[Object(a.jsx)("div",{className:"event-venue",children:Object(a.jsx)("p",{children:n.venue})}),Object(a.jsxs)("div",{className:"event-timing",children:[Object(a.jsxs)("div",{className:"start",children:[Object(a.jsx)("span",{className:"date",children:new Date(n.start).toDateString()}),Object(a.jsx)("span",{className:"time",children:new Date(n.start).toLocaleTimeString()})]}),Object(a.jsx)("span",{className:"to",children:" - "}),Object(a.jsxs)("div",{className:"end",children:[Object(a.jsx)("span",{className:"date",children:new Date(n.end).toDateString()}),Object(a.jsx)("span",{className:"time",children:new Date(n.end).toLocaleTimeString()})]})]})]}),Object(a.jsx)("div",{className:"btn register",style:{background:["#ff5722","#8bc34a","#00bcd4","#514A9D","#ffeb3b"][n.Type]},children:Object(a.jsx)("a",{href:n.regURL,children:"Register"})})]})]})]})}function g(){var e=Object(s.useContext)(o),t=e.user,n=e.setUser,c=e.authToken,r=e.setAuthToken,l=e.setRefreshToken,d=Object(s.useState)([]),j=Object(i.a)(d,2),u=j[0],m=j[1],b=Object(s.useState)(null),v=Object(i.a)(b,2),f=v[0],g=v[1],N=Object(s.useState)(null),E=Object(i.a)(N,2),S=E[0],k=E[1];function y(){fetch(h+"events?department=".concat(t.name),{method:"GET",headers:{Authorization:"Bearer ".concat(c)}}).then((function(e){return e.json()})).then((function(e){m(e)})).catch((function(e){console.log("Cant Get Events Error - ",e.message)}))}return Object(s.useEffect)((function(){c&&t&&y()}),[c,t]),Object(a.jsxs)("div",{className:"main dashboard",children:[Object(a.jsxs)("div",{className:"heading",children:[Object(a.jsx)("h1",{children:null===t||void 0===t?void 0:t.name}),Object(a.jsxs)("div",{className:"user-actions",children:[Object(a.jsx)("button",{className:"btn logout",onClick:function(){r(null),l(null),n(null),localStorage.removeItem("authToken"),localStorage.removeItem("refreshToken"),localStorage.removeItem("user"),localStorage.removeItem("expires")},children:"Logout"}),Object(a.jsx)("img",{src:null===t||void 0===t?void 0:t.image,alt:"avatar",className:"avatar"})]})]}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"ctrl",children:Object(a.jsx)("button",{className:"btn ".concat(f?"cancel":"create"),onClick:function(){g(f?null:{})},children:f?"Cancel":"Create Event"})}),f?Object(a.jsx)(O,{editEvent:f,setEditEvent:g,getEvents:y}):S?Object(a.jsx)(p,{event:S,setDetailedEvent:k,setEditEvent:g,onDeleteEvent:function(e){console.log("Event Deleted.")},getEvents:y}):Object(a.jsx)("div",{className:"events",children:u.length?u.map((function(e){return Object(a.jsx)(x,{event:e,setDetailedEvent:k},e.id)})):Object(a.jsx)("div",{className:"empty",children:Object(a.jsx)("p",{children:"You don't have any Events"})})})]})]})}function N(){var e=Object(s.useState)(null),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)(null),l=Object(i.a)(r,2),d=l[0],j=l[1],u=Object(s.useState)("Club"),m=Object(i.a)(u,2),b=m[0],h=m[1];return Object(s.useEffect)((function(){var e=localStorage.getItem("authToken"),t=localStorage.getItem("refreshToken"),n=JSON.parse(localStorage.getItem("user")),a=localStorage.getItem("expires");e&&a>(new Date).getTime()&&(console.log("Got Local Auth Token"),c(e),j(t),h(n))}),[]),Object(a.jsx)(o.Provider,{value:{authToken:n,setAuthToken:c,refreshToken:d,setRefreshToken:j,user:b,setUser:h},children:n?Object(a.jsx)(g,{}):Object(a.jsx)(v,{})})}var E=n(3);n(41);function S(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],r=function(){var e=Object(u.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(h+"events");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,[200,201].includes(t.status)&&(console.log("Got Events."),c(n)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Cant Get Events - ",e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){r()}),[]),Object(a.jsxs)("div",{className:"main events-page",children:[Object(a.jsx)("div",{className:"heading",children:Object(a.jsx)("h1",{children:"Events"})}),Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"events",children:n.map((function(e){return Object(a.jsx)(x,{event:e},e.id)}))})})]})}n(42);function k(e){var t=Object(s.useState)(null),n=Object(i.a)(t,2),c=n[0],r=n[1],l=function(){var e=Object(u.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(h+"events/".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,[200,201].includes(n.status)&&(console.log("Got Events."),r(a)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Cant Get Events - #".concat(t),e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){console.log(e.match.params.id),l(e.match.params.id)}),[e]),Object(a.jsxs)("div",{className:"main event-details",children:[Object(a.jsx)("div",{className:"heading",children:Object(a.jsx)("h1",{children:"Events"})}),Object(a.jsx)("div",{className:"container",children:c?Object(a.jsx)(p,{event:c,setDetailedEvent:r,history:e.history}):Object(a.jsx)("div",{children:"Fetching Event"})})]})}var y=function(){return Object(a.jsxs)(f.a,{children:[Object(a.jsx)(E.a,{path:"/admin",exact:!0,component:N}),Object(a.jsx)(E.a,{path:"/events",exact:!0,component:S}),Object(a.jsx)(E.a,{path:"/events/:id",exact:!0,component:k})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};l.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root")),T()}},[[43,1,2]]]);
//# sourceMappingURL=main.2e58cd3a.chunk.js.map