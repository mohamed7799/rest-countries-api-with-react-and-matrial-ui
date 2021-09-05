(this["webpackJsonprest-countries-api-with-color-theme-switcher-app"]=this["webpackJsonprest-countries-api-with-color-theme-switcher-app"]||[]).push([[0],{102:function(e,t,n){},110:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),i=n.n(r),s=(n(102),n(29)),o=n(47),l=n(30),j=n(143),m=n(76),d=n.n(m),x=n(75),b=n.n(x),h=n(141),p=n(139),O=n(157),u=n(2),f=Object(p.a)((function(e){var t;return{header:(t={padding:"16px 0px",boxShadow:"0px 0px 5px 5px #8080801c"},Object(o.a)(t,e.breakpoints.down("xs"),{"& h1":{fontSize:18}}),Object(o.a)(t,"& button",{cursor:"pointer"}),t)}})),y=function(e){var t=e.darkMode,n=e.handleTheme,a=f();return Object(u.jsx)("header",{className:a.header,children:Object(u.jsx)(h.a,{children:Object(u.jsxs)(O.a,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[Object(u.jsx)(l.a,{variant:"h5",component:"h1",children:Object(u.jsx)(O.a,{fontWeight:"fontWeightBold",children:"Where in the world?"})}),Object(u.jsx)(j.a,{onClick:n,variant:"text",startIcon:t?Object(u.jsx)(b.a,{}):Object(u.jsx)(d.a,{}),children:t?"Light Mode":"Dark Mode"})]})})})},g=n(158),N=n(149),v=n(156),w=n(146),S=n(148),C=n(77),P=n.n(C),k=Object(p.a)((function(e){return Object(o.a)({form:{margin:"3.5rem 0px",display:"flex",justifyContent:"space-between",gap:"1rem","& > *":{boxShadow:"0px 0px 5px 3px #8080801c"}},noBorder:{border:"none"},search:{width:"40%"},formControl:{width:"20%",minWidth:120}},e.breakpoints.down("xs"),{form:{flexDirection:"column"},search:{width:"100%"},formControl:{width:"50%"}})})),A=function(){var e=k(),t=Object(a.useContext)(Z),n=t.regions,c=t.currentRegion,r=t.handleRegion,i=t.handleName,s=t.searchedCountries;return Object(u.jsx)(h.a,{children:Object(u.jsxs)("form",{className:e.form,action:"",children:[Object(u.jsx)(g.a,{value:s,onChange:i,InputProps:{startAdornment:Object(u.jsx)(S.a,{position:"start",children:Object(u.jsx)(P.a,{color:"action"})})},className:e.search,placeholder:"Search for a country",variant:"outlined"}),Object(u.jsx)(w.a,{className:e.formControl,children:Object(u.jsx)(v.a,{value:c,variant:"outlined",onChange:r,children:n.map((function(e){return Object(u.jsx)(N.a,{value:e,children:e},e)}))})})]})})},B=n(154),D=n(150),E=n(41),I=n(151),R=n(152),W=n(147),L=n(114),M=n(153),T=Object(p.a)({a:{textDecoration:"none"},media:{height:150},item:{paddingTop:"0px",paddingBottom:"0px"},inline:{display:"inline"}}),H=function(e){var t=e.country,n=T();return Object(u.jsx)(E.b,{className:n.a,to:"/detailes/".concat(t.name),children:Object(u.jsxs)(D.a,{children:[Object(u.jsx)(I.a,{className:n.media,image:t.flag}),Object(u.jsx)(R.a,{title:t.name}),Object(u.jsxs)(W.a,{component:"nav","aria-label":"secondary mailbox folders",children:[Object(u.jsx)(L.a,{className:n.item,children:Object(u.jsx)(M.a,{primary:Object(u.jsx)(l.a,{component:"span",className:n.inline,color:"textPrimary",children:"Population:"}),secondary:Object(u.jsx)(l.a,{component:"span",className:n.inline,color:"textSecondary",children:" ".concat(t.population)})})}),Object(u.jsx)(L.a,{className:n.item,children:Object(u.jsx)(M.a,{primary:Object(u.jsx)(l.a,{component:"span",className:n.inline,color:"textPrimary",children:"Region:"}),secondary:Object(u.jsx)(l.a,{component:"span",className:n.inline,color:"textSecondary",children:" ".concat(t.region)})})}),Object(u.jsx)(L.a,{className:n.item,children:Object(u.jsx)(M.a,{primary:Object(u.jsx)(l.a,{component:"span",className:n.inline,color:"textPrimary",children:"Capital:"}),secondary:Object(u.jsx)(l.a,{component:"span",className:n.inline,color:"textSecondary",children:" ".concat(t.capital)})})})]})]})})},J=function(e){var t=e.filterdCountries;return Object(u.jsx)(h.a,{children:Object(u.jsx)(B.a,{container:!0,spacing:4,children:t.map((function(e,t){return Object(u.jsx)(B.a,{item:!0,xs:12,sm:6,md:3,children:Object(u.jsx)(H,{country:e})},t)}))})})},z=Object(p.a)((function(){return{main:{}}})),q=function(){var e=Object(a.useContext)(Z).filterdCountries,t=z();return Object(u.jsxs)("section",{className:t.main,children:[Object(u.jsx)(A,{}),Object(u.jsx)(J,{filterdCountries:e})]})},F=n(79),G=n.n(F),K=n(11),Q=Object(p.a)((function(e){return{container:{marginTop:"3rem"},a:{textDecoration:"none"},root:{marginTop:"3rem",gap:"5rem"},img:{maxHeight:350,width:"100%"},list:{listStyle:"none",columns:2},item:{padding:0},inline:{display:"inline"}}})),U=function(){var e=Object(K.f)().name,t=Object(a.useState)(null),n=Object(s.a)(t,2),c=n[0],r=n[1];Object(a.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/name/".concat(e)).then((function(e){if(!e.ok)throw Error("there was an error");return e.json()})).then((function(e){r(e)}))}),[]);var i=Q();return Object(u.jsxs)(h.a,{className:i.container,children:[Object(u.jsx)(E.b,{className:i.a,to:"/rest-countries-api-with-react-and-matrial-ui",children:Object(u.jsx)(j.a,{variant:"outlined",startIcon:Object(u.jsx)(G.a,{}),children:"Back"})}),c&&Object(u.jsxs)(B.a,{className:i.root,container:!0,alignItems:"center",children:[Object(u.jsx)(B.a,{item:!0,sm:5,children:Object(u.jsx)("img",{className:i.img,srcSet:c[0].flag,alt:""})}),Object(u.jsx)(B.a,{item:!0,sm:5,children:Object(u.jsxs)("div",{children:[Object(u.jsx)(l.a,{variant:"h5",component:"h1",children:Object(u.jsx)(O.a,{fontWeight:"fontWeightBold",children:c[0].name})}),Object(u.jsxs)(B.a,{container:!0,children:[Object(u.jsx)(B.a,{item:!0,sm:6,xs:12,children:Object(u.jsxs)(W.a,{component:"nav","aria-label":"secondary mailbox folders",children:[Object(u.jsx)(L.a,{className:i.item,children:Object(u.jsx)(M.a,{primary:Object(u.jsx)(l.a,{component:"span",className:i.inline,color:"textPrimary",children:"Population:"}),secondary:Object(u.jsx)(l.a,{component:"span",className:i.inline,color:"textSecondary",children:" ".concat(c[0].population)})})}),Object(u.jsx)(L.a,{className:i.item,children:Object(u.jsx)(M.a,{primary:Object(u.jsx)(l.a,{component:"span",className:i.inline,color:"textPrimary",children:"Region:"}),secondary:Object(u.jsx)(l.a,{component:"span",className:i.inline,color:"textSecondary",children:" ".concat(c[0].region)})})}),Object(u.jsx)(L.a,{className:i.item,children:Object(u.jsx)(M.a,{primary:Object(u.jsx)(l.a,{component:"span",className:i.inline,color:"textPrimary",children:"Capital:"}),secondary:Object(u.jsx)(l.a,{component:"span",className:i.inline,color:"textSecondary",children:" ".concat(c[0].capital)})})}),Object(u.jsx)(L.a,{className:i.item,children:Object(u.jsx)(M.a,{primary:Object(u.jsx)(l.a,{component:"span",className:i.inline,color:"textPrimary",children:"nativeName:"}),secondary:Object(u.jsx)(l.a,{component:"span",className:i.inline,color:"textSecondary",children:" ".concat(c[0].nativeName)})})}),Object(u.jsx)(L.a,{className:i.item,children:Object(u.jsx)(M.a,{primary:Object(u.jsx)(l.a,{component:"span",className:i.inline,color:"textPrimary",children:"subregion:"}),secondary:Object(u.jsx)(l.a,{component:"span",className:i.inline,color:"textSecondary",children:" ".concat(c[0].subregion)})})})]})}),Object(u.jsx)(B.a,{item:!0,sm:6,xs:12,children:Object(u.jsxs)(W.a,{component:"nav","aria-label":"secondary mailbox folders",children:[Object(u.jsx)(L.a,{className:i.item,children:Object(u.jsx)(M.a,{primary:Object(u.jsx)(l.a,{component:"span",className:i.inline,color:"textPrimary",children:"currencies:"}),secondary:Object(u.jsx)(l.a,{component:"span",className:i.inline,color:"textSecondary",children:" ".concat(c[0].currencies[0].name)})})}),Object(u.jsx)(L.a,{className:i.item,children:Object(u.jsx)(M.a,{primary:Object(u.jsx)(l.a,{component:"span",className:i.inline,color:"textPrimary",children:"languages:"}),secondary:Object(u.jsx)(l.a,{component:"span",className:i.inline,color:"textSecondary",children:" ".concat(c[0].languages.map((function(e){return e.name})).join(","))})})}),Object(u.jsx)(L.a,{className:i.item,children:Object(u.jsx)(M.a,{primary:Object(u.jsx)(l.a,{component:"span",className:i.inline,color:"textPrimary",children:"topLevelDomain:"}),secondary:Object(u.jsx)(l.a,{component:"span",className:i.inline,color:"textSecondary",children:" ".concat(c[0].topLevelDomain[0])})})})]})})]})]})})]})]})},V=n(80),X=n(155),Y=n(113),Z=Object(a.createContext)();var $=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),i=Object(s.a)(r,2),o=i[0],l=i[1],j=Object(a.useState)(null),m=Object(s.a)(j,2),d=m[0],x=m[1],b=Object(a.useState)(""),h=Object(s.a)(b,2),p=h[0],O=h[1],f=Object(a.useState)("All"),g=Object(s.a)(f,2),N=g[0],v=g[1],w=Object(a.useState)(["All","Africa","Americas","Asia","Europe","Oceania"]),S=Object(s.a)(w,1)[0],C=Object(V.a)({palette:{type:n?"dark":"light"}});return Object(a.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/all").then((function(e){if(!e.ok)throw Error("there was an error");return e.json()})).then((function(e){l(e.slice(0,100)),x(e.slice(0,100))}))}),[]),Object(u.jsx)(X.a,{theme:C,children:Object(u.jsx)(Y.a,{children:Object(u.jsx)(E.a,{children:Object(u.jsxs)("div",{className:"App",style:{minHeight:"100vh"},children:[Object(u.jsx)(y,{darkMode:n,handleTheme:function(){c(!n)}}),o&&d&&Object(u.jsxs)(K.c,{children:[Object(u.jsx)(K.a,{exact:!0,path:"/rest-countries-api-with-react-and-matrial-ui",children:Object(u.jsx)(Z.Provider,{value:{searchedCountries:p,filterdCountries:d,currentRegion:N,regions:S,handleRegion:function(e){v(e.target.value),O("");var t=o.filter((function(t){return t.region===e.target.value}));"All"===e.target.value?x(o):x(t)},handleName:function(e){O(e.target.value);var t=o.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())}));""===e.target.value?x(o):x(t)}},children:Object(u.jsx)(q,{})})}),Object(u.jsx)(K.a,{path:"/detailes/:name",children:Object(u.jsx)(U,{})})]})]})})})})};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)($,{})}),document.getElementById("root"))}},[[110,1,2]]]);
//# sourceMappingURL=main.8c7e01d3.chunk.js.map