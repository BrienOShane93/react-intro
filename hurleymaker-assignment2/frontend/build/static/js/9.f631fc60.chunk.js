(this.webpackJsonphurleymaker=this.webpackJsonphurleymaker||[]).push([[9],{231:function(e,a,t){"use strict";t.r(a);var r=t(20),c=t(0),l=t.n(c),s=t(107),n=t(1),i=t(32),d=t(3),o=(t(6),t(14)),b=t(80),j=t(81),O=t(4);function u(e){var a=e.children,t=e.className,r=Object(d.a)(t),c=Object(b.a)(u,e),s=Object(j.a)(u,e);return l.a.createElement(s,Object(n.a)({},c,{className:r}),a)}u.handledProps=["as","children","className"],u.defaultProps={as:"tbody"},u.propTypes={};var p=u,h=t(135),g=t(44);function f(e){var a=e.active,t=e.children,r=e.className,c=e.collapsing,s=e.content,i=e.disabled,u=e.error,p=e.icon,h=e.negative,v=e.positive,m=e.selectable,x=e.singleLine,w=e.textAlign,N=e.verticalAlign,y=e.warning,A=e.width,P=Object(d.a)(Object(o.a)(a,"active"),Object(o.a)(c,"collapsing"),Object(o.a)(i,"disabled"),Object(o.a)(u,"error"),Object(o.a)(h,"negative"),Object(o.a)(v,"positive"),Object(o.a)(m,"selectable"),Object(o.a)(x,"single line"),Object(o.a)(y,"warning"),Object(o.d)(w),Object(o.f)(N),Object(o.g)(A,"wide"),r),L=Object(b.a)(f,e),E=Object(j.a)(f,e);return O.a.isNil(t)?l.a.createElement(E,Object(n.a)({},L,{className:P}),g.a.create(p),s):l.a.createElement(E,Object(n.a)({},L,{className:P}),t)}f.handledProps=["active","as","children","className","collapsing","content","disabled","error","icon","negative","positive","selectable","singleLine","textAlign","verticalAlign","warning","width"],f.defaultProps={as:"td"},f.propTypes={},f.create=Object(h.d)(f,(function(e){return{content:e}}));var v=f;function m(e){var a=e.children,t=e.className,r=e.content,c=e.fullWidth,s=Object(d.a)(Object(o.a)(c,"full-width"),t),i=Object(b.a)(m,e),u=Object(j.a)(m,e);return l.a.createElement(u,Object(n.a)({},i,{className:s}),O.a.isNil(a)?r:a)}m.handledProps=["as","children","className","content","fullWidth"],m.defaultProps={as:"thead"},m.propTypes={};var x=m;function w(e){var a=e.as,t=Object(b.a)(w,e);return l.a.createElement(x,Object(n.a)({},t,{as:a}))}w.handledProps=["as"],w.propTypes={},w.defaultProps={as:"tfoot"};var N=w;function y(e){var a=e.as,t=e.className,r=e.sorted,c=Object(d.a)(Object(o.e)(r,"sorted"),t),s=Object(b.a)(y,e);return l.a.createElement(v,Object(n.a)({},s,{as:a,className:c}))}y.handledProps=["as","className","sorted"],y.propTypes={},y.defaultProps={as:"th"};var A=y;function P(e){var a=e.active,t=e.cellAs,r=e.cells,c=e.children,s=e.className,u=e.disabled,p=e.error,h=e.negative,g=e.positive,f=e.textAlign,m=e.verticalAlign,x=e.warning,w=Object(d.a)(Object(o.a)(a,"active"),Object(o.a)(u,"disabled"),Object(o.a)(p,"error"),Object(o.a)(h,"negative"),Object(o.a)(g,"positive"),Object(o.a)(x,"warning"),Object(o.d)(f),Object(o.f)(m),s),N=Object(b.a)(P,e),y=Object(j.a)(P,e);return O.a.isNil(c)?l.a.createElement(y,Object(n.a)({},N,{className:w}),Object(i.a)(r,(function(e){return v.create(e,{defaultProps:{as:t}})}))):l.a.createElement(y,Object(n.a)({},N,{className:w}),c)}P.handledProps=["active","as","cellAs","cells","children","className","disabled","error","negative","positive","textAlign","verticalAlign","warning"],P.defaultProps={as:"tr",cellAs:"td"},P.propTypes={},P.create=Object(h.d)(P,(function(e){return{cells:e}}));var L=P;function E(e){var a=e.attached,t=e.basic,r=e.celled,c=e.children,s=e.className,u=e.collapsing,h=e.color,g=e.columns,f=e.compact,v=e.definition,m=e.fixed,w=e.footerRow,y=e.headerRow,A=e.headerRows,P=e.inverted,k=e.padded,R=e.renderBodyRow,C=e.selectable,F=e.singleLine,H=e.size,T=e.sortable,B=e.stackable,D=e.striped,M=e.structured,S=e.tableData,z=e.textAlign,W=e.unstackable,I=e.verticalAlign,J=Object(d.a)("ui",h,H,Object(o.a)(r,"celled"),Object(o.a)(u,"collapsing"),Object(o.a)(v,"definition"),Object(o.a)(m,"fixed"),Object(o.a)(P,"inverted"),Object(o.a)(C,"selectable"),Object(o.a)(F,"single line"),Object(o.a)(T,"sortable"),Object(o.a)(B,"stackable"),Object(o.a)(D,"striped"),Object(o.a)(M,"structured"),Object(o.a)(W,"unstackable"),Object(o.b)(a,"attached"),Object(o.b)(t,"basic"),Object(o.b)(f,"compact"),Object(o.b)(k,"padded"),Object(o.d)(z),Object(o.f)(I),Object(o.g)(g,"column"),"table",s),q=Object(b.a)(E,e),G=Object(j.a)(E,e);if(!O.a.isNil(c))return l.a.createElement(G,Object(n.a)({},q,{className:J}),c);var K={defaultProps:{cellAs:"th"}},Q=(y||A)&&l.a.createElement(x,null,L.create(y,K),Object(i.a)(A,(function(e){return L.create(e,K)})));return l.a.createElement(G,Object(n.a)({},q,{className:J}),Q,l.a.createElement(p,null,R&&Object(i.a)(S,(function(e,a){return L.create(R(e,a))}))),w&&l.a.createElement(N,null,L.create(w)))}E.handledProps=["as","attached","basic","celled","children","className","collapsing","color","columns","compact","definition","fixed","footerRow","headerRow","headerRows","inverted","padded","renderBodyRow","selectable","singleLine","size","sortable","stackable","striped","structured","tableData","textAlign","unstackable","verticalAlign"],E.defaultProps={as:"table"},E.propTypes={},E.Body=p,E.Cell=v,E.Footer=N,E.Header=x,E.HeaderCell=A,E.Row=L;var k=E,R=t(147),C=t(2),F=function(e){return Object(C.jsxs)(k.Row,{verticalAlign:"top",children:[Object(C.jsx)(k.Cell,{children:e.date}),Object(C.jsx)(k.Cell,{children:Object(C.jsx)(R.a,{children:e.styles.map((function(e){return Object(C.jsxs)(R.a.Item,{children:[e.name," : ",e.count]},e.id)}))})}),Object(C.jsxs)(k.Cell,{children:["\u20ac",e.price.toFixed(2)]})]})},H=function(e){return Object(C.jsxs)(k,{children:[Object(C.jsx)(k.Header,{children:Object(C.jsxs)(k.Row,{children:[Object(C.jsx)(k.HeaderCell,{width:4,children:"Order Date"}),Object(C.jsx)(k.HeaderCell,{width:8,children:"Hurley Description"}),Object(C.jsx)(k.HeaderCell,{width:4,children:"Price"})]})}),Object(C.jsx)(k.Body,{children:e.orders.map((function(e){return Object(C.jsx)(F,{styles:e.chosenStyles,price:e.totalPrice,date:e.date},e.id)}))})]})},T=t(68),B=t(108),D=t(51);a.default=function(e){var a=Object(c.useContext)(D.a),t=Object(c.useState)({orders:[]}),l=Object(r.a)(t,2),n=l[0],i=l[1],d=Object(c.useState)({error:!1,errorMessage:null}),o=Object(r.a)(d,2),b=o[0],j=o[1],O=Object(c.useState)({isLoading:!0,ordersLoaded:!1,loadFailed:!1}),u=Object(r.a)(O,2),p=u[0],h=u[1];Object(c.useEffect)((function(){var e="/orders/"+a.userId;s.a.get(e,{headers:{Authorization:"Bearer "+a.token}}).then((function(e){i({orders:e.data.orders}),h({isLoading:!1,ordersLoaded:!0,loadFailed:p.loadFailed})})).catch((function(e){j({error:!0,errorMessage:e.response.data.message}),h({isLoading:!1,ordersLoaded:p.ordersLoaded,loadFailed:p.loadFailed})}))}),[]);var g=b.error?Object(C.jsx)(B.a,{error:b.errorMessage,onClear:function(){j({error:!1,errorMessage:null}),h({isLoading:p.isLoading,ordersLoaded:p.ordersLoaded,loadFailed:!0})}}):Object(C.jsx)(T.a,{active:p.isLoading});return p.ordersLoaded&&n.orders.length>0?g=Object(C.jsx)(H,{orders:n.orders}):p.loadFailed&&(g=Object(C.jsx)("p",{children:"We can't load your orders... maybe try creating one?"})),Object(C.jsx)("div",{children:g})}}}]);
//# sourceMappingURL=9.f631fc60.chunk.js.map