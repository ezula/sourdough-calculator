(this["webpackJsonpsourdough-app"]=this["webpackJsonpsourdough-app"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(15),s=n.n(c),l=(n(21),n(22),n(0));function i(e){var t=e.flour,n=void 0===t?0:t,r=e.water,a=void 0===r?0:r,c=e.sourdough,s=void 0===c?0:c,i=e.salt,o=void 0===i?0:i;return Object(l.jsxs)("div",{className:"ratios-container small-container",children:[Object(l.jsxs)("p",{children:["Mj\xf6l: ",n," g"]}),Object(l.jsxs)("p",{children:["Vatten: ",a," g"]}),Object(l.jsxs)("p",{children:["Surdeg: ",s," g ",Object(l.jsx)("span",{className:"small-text",children:"(10%)"})]}),Object(l.jsxs)("p",{children:["Salt: ",o," g"]})]})}var o=n(10),j=function(e,t){if("calc"===t.type){var n=t.flour,r=t.hydration,a=t.saltPercentage;return{water:Math.floor(n*r/100),sourdough:Math.floor(.1*n),salt:Math.floor(n*(a/100))}}throw new Error("Unsupported Action")},u={water:0,sourdough:0,salt:0};function d(){var e=a.a.useState("82"),t=Object(o.a)(e,2),n=t[0],r=t[1],c=a.a.useState("600"),s=Object(o.a)(c,2),d=s[0],h=s[1],b=a.a.useState("2"),x=Object(o.a)(b,2),O=x[0],m=x[1],g=a.a.useReducer(j,u),f=Object(o.a)(g,2),p=f[0],v=f[1],N=p.water,y=p.sourdough,k=p.salt;return a.a.useEffect((function(){v({type:"calc",flour:Number(d),hydration:Number(n),saltPercentage:Number(O)})}),[n,d,O]),Object(l.jsxs)("div",{className:"container small-container",children:[Object(l.jsx)("h1",{className:"center-text",children:"Surdegskalkylatorn"}),Object(l.jsx)("h3",{className:"center-text",children:"Ber\xe4kna m\xe4ngder genom att ange hydrering, m\xe4ngden mj\xf6l samt hur mycket salt."}),Object(l.jsxs)("form",{className:"content-form",children:[Object(l.jsx)("label",{htmlFor:"hydration",children:"Hydrering (%):"}),Object(l.jsx)("input",{id:"hydration",type:"number",onChange:function(e){return r(e.target.value)},value:n,placeholder:"Ange hydrering i procent",max:100,min:0}),Object(l.jsx)("label",{htmlFor:"flour",children:"Mj\xf6l (g):"}),Object(l.jsx)("input",{id:"flour",type:"number",onChange:function(e){return h(e.target.value)},value:d,placeholder:"Ange mj\xf6l i gram"}),Object(l.jsx)("label",{htmlFor:"salt",children:"Salt:"}),Object(l.jsxs)("div",{className:"salt-container",children:[Object(l.jsx)("input",{id:"salt",type:"range",min:"0",max:"10",step:"0.1",onChange:function(e){return m(e.target.value)},value:O}),Object(l.jsxs)("span",{children:[O,"%"]})]})]}),Object(l.jsx)(i,{flour:Number(d),water:N,sourdough:y,salt:k})]})}var h=n(9);function b(){return Object(l.jsxs)("div",{className:"container navbar",children:[Object(l.jsx)(h.b,{to:"/",children:"Hem"}),Object(l.jsx)("nav",{className:"nav-links",children:Object(l.jsx)(h.b,{to:"/about",children:"Kontakt"})})]})}function x(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("h3",{className:"center-text",children:"Kontaktinformation kommer snart."})})}function O(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("h2",{className:"center-text",children:"Ooops! Sidan du s\xf6ker finns inte h\xe4r."})})}function m(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("span",{children:"Copyright (C) Mikael Svens 2021."})})}var g=n(2);function f(){return Object(l.jsxs)(h.a,{children:[Object(l.jsx)(b,{}),Object(l.jsxs)(g.c,{children:[Object(l.jsx)(g.a,{exact:!0,path:"/",children:Object(l.jsx)(d,{})}),Object(l.jsx)(g.a,{path:"/other",children:Object(l.jsx)("div",{children:"Other"})}),Object(l.jsx)(g.a,{path:"/about",children:Object(l.jsx)(x,{})}),Object(l.jsx)(g.a,{path:"*",children:Object(l.jsx)(O,{})})]}),Object(l.jsx)(m,{})]})}var p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),p()}},[[32,1,2]]]);
//# sourceMappingURL=main.0c013305.chunk.js.map