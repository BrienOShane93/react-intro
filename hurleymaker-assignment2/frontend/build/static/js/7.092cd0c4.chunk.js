(this.webpackJsonphurleymaker=this.webpackJsonphurleymaker||[]).push([[7],{232:function(e,r,t){"use strict";t.r(r);var a,n=t(96),o=t(20),s=t(0),i=t.n(s),l=t(210),u=t(195),d=t(104),c=t(194),m=t(230),p=t(224),h=t(10),f=new Uint8Array(16);function b(){if(!a&&!(a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(f)}var v=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var j=function(e){return"string"===typeof e&&v.test(e)},g=[],y=0;y<256;++y)g.push((y+256).toString(16).substr(1));var O=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(g[e[r+0]]+g[e[r+1]]+g[e[r+2]]+g[e[r+3]]+"-"+g[e[r+4]]+g[e[r+5]]+"-"+g[e[r+6]]+g[e[r+7]]+"-"+g[e[r+8]]+g[e[r+9]]+"-"+g[e[r+10]]+g[e[r+11]]+g[e[r+12]]+g[e[r+13]]+g[e[r+14]]+g[e[r+15]]).toLowerCase();if(!j(t))throw TypeError("Stringified UUID is invalid");return t};var x=function(e,r,t){var a=(e=e||{}).random||(e.rng||b)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,r){t=t||0;for(var n=0;n<16;++n)r[t+n]=a[n];return r}return O(a)},C=t(107),k=t(51),S=t(76),w=t(108),q=t(2);r.default=Object(h.g)((function(e){var r=Object(s.useContext)(k.a),t=Object(s.useState)({totalPrice:e.location.state.order.totalPrice,chosenStyles:e.location.state.order.chosenStyles}),a=Object(o.a)(t,2),h=a[0],f=(a[1],Object(s.useState)({error:!1,errorMessage:null})),b=Object(o.a)(f,2),v=b[0],j=b[1],g=Object(s.useState)({details:{name:"",phone:"",method:"",address:""}}),y=Object(o.a)(g,2),O=y[0],A=y[1],D=Object(s.useState)({rules:[{id:"form-input-name",message:"Please enter your name (letters and spaces only, min length 2)",required:!0,valid:!1},{id:"form-input-phone",message:"Please enter your phone number (area code and number)",required:!0,valid:!1},{id:"form-input-method",message:"Please choose collection or delivery",required:!0,valid:!1},{id:"form-input-address",message:"Please enter your delivery address (house number and street)",required:!1,valid:!0}],formValid:!1}),P=Object(o.a)(D,2),M=P[0],V=P[1],I=Object(s.useState)({name:null,phone:null,method:null,address:null}),R=Object(o.a)(I,2),F=R[0],J=R[1],T=function(e,r,t){var a=Object(n.a)({},M),o=a.rules.findIndex((function(e){return e.id===r})),s=null;if(a.rules[o].required&&"input"===t&&""===e.trim())s=a.rules[o].message,a.rules[o].valid=!1;else if("form-input-phone"===r){/^[+]?[(]?[0-9]{3,5}[)]?[-\s.]?[0-9]{6,7}$/.test(e)?a.rules[o].valid=!0:(a.rules[o].valid=!1,s=a.rules[o].message)}else if("form-input-name"===r){/^[A-Za-z\s]{2,30}$/.test(e)?a.rules[o].valid=!0:(a.rules[o].valid=!1,s=a.rules[o].message)}else if("Delivery"===e)a.rules[o].valid=!0,a.rules[3].valid=!1,a.rules[3].required=!0;else if("Collection"===e)a.rules[o].valid=!0,a.rules[3].required=!1,a.rules[3].valid=!0;else if(a.rules[o].required&&"form-input-address"===r){/^[#.0-9a-zA-Z\s,-]{2,50}$/.test(e)?a.rules[o].valid=!0:(a.rules[o].valid=!1,s=a.rules[o].message)}else s=null,a.rules[o].valid=!0;var i=Object(n.a)({},F);switch(r){case"form-input-name":i.name=s;break;case"form-input-phone":i.phone=s;break;case"form-input-method":i.method=s;break;case"form-input-address":i.address=s}J(Object(n.a)({},i));var l=!0;for(var u in a.rules)a.rules[u].valid||(l=!1);V({rules:a.rules,formValid:l})},$=function(e,r,t){var a=O.details;switch(r){case"form-input-name":a.name=e.target.value,T(e.target.value,r,t);break;case"form-input-phone":a.phone=e.target.value,T(e.target.value,r,t);break;case"form-input-method":a.method=e.target.textContent,T(e.target.textContent,r,t);break;case"form-input-address":a.address=e.target.value,T(e.target.value,r,t)}A({details:a})},z=!M.formValid,E=null;return E=v.error?Object(q.jsx)(w.a,{error:v.errorMessage,onClear:function(){j({error:!1,errorMessage:null})}}):Object(q.jsx)(l.a,{children:Object(q.jsxs)(l.a.Row,{columns:2,children:[Object(q.jsx)(l.a.Column,{width:6,children:Object(q.jsxs)(u.a,{color:"red",children:[Object(q.jsx)(d.a,{as:"h2",textAlign:"center",color:"red",children:"Confirm your order:"}),Object(q.jsx)(S.a,{menu:e.location.state.menu,toppings:e.location.state.order.chosenStyles,price:e.location.state.order.totalPrice}),Object(q.jsx)(c.a,{color:"red",onClick:function(){e.history.push({pathname:"/",state:{order:h}})},children:"Go Back"})]})}),Object(q.jsx)(l.a.Column,{width:10,children:Object(q.jsxs)(u.a,{color:"red",children:[Object(q.jsx)(d.a,{as:"h2",textAlign:"center",color:"red",children:"Enter your details:"}),Object(q.jsxs)(m.a,{id:"form",children:[Object(q.jsx)(m.a.Input,{error:F.name,required:!0,label:"Name",placeholder:"Name",id:"form-input-name",onChange:function(e){return $(e,"form-input-name","input")}}),Object(q.jsx)(m.a.Input,{error:F.phone,required:!0,label:"Phone",placeholder:"Phone e.g. 086-1234567",id:"form-input-phone",onChange:function(e){return $(e,"form-input-phone","input")}}),Object(q.jsx)(m.a.Field,{control:p.a,required:!0,error:F.method,label:"Delivery method",options:[{key:"c",text:"Collection",value:"collection"},{key:"d",text:"Delivery",value:"delivery"}],placeholder:"Collection or Delivery",id:"form-input-method",onChange:function(e){return $(e,"form-input-method","select")}}),Object(q.jsx)(m.a.Input,{error:F.address,required:M.rules[3].required,fluid:!0,label:"Address",placeholder:"Address",id:"form-input-address",onChange:function(e){return $(e,"form-input-address","input")}}),Object(q.jsx)(c.a,{type:"submit",color:"green",disabled:z,onClick:function(){var t=h;t.id=x();var a=new Date,n=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][a.getDay()],o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][a.getMonth()],s=n+" "+a.getDate()+" "+o+" "+a.getFullYear();t.date=s,t.details=O.details,t.userId=r.userId,C.a.post("/checkout",t,{headers:{Authorization:"Bearer "+r.token}}).then((function(r){e.history.push("/order-success")})).catch((function(e){var r="";r=e.response?e.response.data.message:"There was a problem creating your order",j({error:!0,errorMessage:r})}))},children:"Submit"})]})]})})]})}),Object(q.jsx)(i.a.Fragment,{children:E})}))}}]);
//# sourceMappingURL=7.092cd0c4.chunk.js.map