(this["webpackJsonpurban-octo-umbrella"]=this["webpackJsonpurban-octo-umbrella"]||[]).push([[0],{49:function(e,t,c){},50:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(20),s=c.n(a),r=(c(49),c(5)),j=(c(50),c(7)),l=c(60),o=c(64),b=c(66),d=c(65),h=c(34),O=c(61),x=c(22),u=c(35),p=c(33),m=c(37),v=c(38),g=c(36),f=c(16),y=c(62),I=c(18),S=c(19),k=c(31),N=c.n(k),C=c(43),F=c(15),T=c(0);var w=Object(F.b)()((function(e){var t=e.dispatch,c=Object(r.f)(),a=new AbortController,s=i.a.createRef(),k=Object(n.useState)(!1),F=Object(j.a)(k,2),w=F[0],P=F[1],A=Object(n.useState)(void 0),z=Object(j.a)(A,2),E=z[0],L=z[1],H=Object(n.useState)(void 0),M=Object(j.a)(H,2),q=M[0],B=M[1],D=Object(n.useState)(void 0),R=Object(j.a)(D,2),$=R[0],_=R[1],G=Object(n.useState)(void 0),V=Object(j.a)(G,2),U=V[0],W=V[1],Y=Object(n.useState)(void 0),Z=Object(j.a)(Y,2),J=Z[0],K=Z[1],Q=Object(n.useState)(""),X=Object(j.a)(Q,2),ee=X[0],te=X[1],ce=Object(n.useState)(void 0),ne=Object(j.a)(ce,2),ie=ne[0],ae=ne[1],se=Object(n.useState)(void 0),re=Object(j.a)(se,2),je=re[0],le=re[1],oe=Object(n.useState)(void 0),be=Object(j.a)(oe,2),de=be[0],he=be[1],Oe=Object(n.useState)(void 0),xe=Object(j.a)(Oe,2),ue=xe[0],pe=xe[1],me=Object(n.useState)(""),ve=Object(j.a)(me,2),ge=ve[0],fe=ve[1],ye=Object(n.useState)(void 0),Ie=Object(j.a)(ye,2),Se=Ie[0],ke=Ie[1],Ne=Object(n.useState)(!1),Ce=Object(j.a)(Ne,2),Fe=Ce[0],Te=Ce[1],we=Object(n.useState)(!1),Pe=Object(j.a)(we,2),Ae=Pe[0],ze=Pe[1],Ee=Object(n.useState)(!1),Le=Object(j.a)(Ee,2),He=Le[0],Me=Le[1],qe=Object(n.useState)(!1),Be=Object(j.a)(qe,2),De=Be[0],Re=Be[1],$e=Object(n.useState)(!1),_e=Object(j.a)($e,2),Ge=_e[0],Ve=_e[1],Ue=Object(n.useState)(""),We=Object(j.a)(Ue,2),Ye=We[0],Ze=We[1],Je=Object(n.useState)(0),Ke=Object(j.a)(Je,2),Qe=Ke[0],Xe=Ke[1];Object(n.useEffect)((function(){return tt(),function(){a.abort()}}));var et=function(e){if(!e)return e;var t=e.replace(/[^\d]/g,""),c=t.length;return c<4?t:c<7?"(".concat(t.slice(0,3),") ").concat(t.slice(3)):"(".concat(t.slice(0,3),") ").concat(t.slice(3,6),"-").concat(t.slice(6,10))},tt=function(){document.addEventListener("scroll",(function(){requestAnimationFrame((function(){ct()}))}))},ct=function(){var e=window.scrollY,t=window.innerHeight,c=nt()-t;Xe(Math.floor(e/c*100))},nt=function(){return Math.max(document.body.scrollHeight,document.body.offsetHeight,document.body.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight,document.documentElement.clientHeight)};return Object(T.jsx)("div",{children:Object(T.jsxs)(l.a,{as:o.a,className:"p-3",children:[Object(T.jsx)(b.a,{className:"fixed-top container",style:{padding:"0"},now:Qe}),Object(T.jsx)("h1",{children:"CSC 642 848 Fall 2021 Individual Assignment Leslie Zhou"}),Object(T.jsx)("h2",{children:"Data survey form"}),Object(T.jsxs)(d.a,{noValidate:!0,validated:w,onSubmit:function(e){var n=s.current.getValue();!1===e.currentTarget.checkValidity()||""===n?(e.preventDefault(),e.stopPropagation(),""===n&&alert("Please do the captcha")):(t({type:"FORM_SET_RESULT",payload:{fname:E,lname:q,title:$,heightFeet:U,heightInches:J,phone:ee,street:ie,apt:je,city:de,state:ue,zip:ge,email:Se,service1:Fe,service2:Ae,service3:He,service4:De,service5:Ge,budget:Ye}}),c("/result")),P(!0)},children:[Object(T.jsx)("br",{}),Object(T.jsx)(h.a,{className:"text-muted",children:"Personal information"}),Object(T.jsx)("hr",{className:"mt-0"}),Object(T.jsxs)(O.a,{className:"mb-3",children:[Object(T.jsxs)(x.a,{as:u.a,controlId:"lastName",children:[Object(T.jsx)(h.a,{children:Object(T.jsx)("b",{children:"Last name*"})}),Object(T.jsx)(p.a,{type:"name",required:!0,placeholder:"Enter your last name",size:"lg",onInput:function(e){return B(e.target.value)}}),Object(T.jsx)(p.a.Feedback,{type:"invalid",children:"Please enter a last name."})]}),Object(T.jsxs)(x.a,{as:u.a,controlId:"firstName",children:[Object(T.jsx)(h.a,{children:Object(T.jsx)("b",{children:"First name*"})}),Object(T.jsx)(p.a,{type:"name",required:!0,placeholder:"Enter your first name",size:"lg",onInput:function(e){return L(e.target.value)}}),Object(T.jsx)(p.a.Feedback,{type:"invalid",children:"Please enter a first name."})]})]}),Object(T.jsxs)(x.a,{className:"mb-3",controlId:"preferredTitle",children:[Object(T.jsx)(h.a,{children:Object(T.jsx)("b",{children:"Preferred title*"})}),Object(T.jsxs)(m.a,{size:"lg",required:!0,onChange:function(e){return _(e.target.value)},children:[Object(T.jsx)("option",{value:"",children:"Choose..."}),Object(T.jsx)("option",{children:"none"}),Object(T.jsx)("option",{children:"Student"}),Object(T.jsx)("option",{children:"Professor"}),Object(T.jsx)("option",{children:"Staff"}),Object(T.jsx)("option",{children:"Retired"})]}),Object(T.jsx)(p.a.Feedback,{type:"invalid",children:"Please select a valid preferred title."})]}),Object(T.jsxs)(x.a,{className:"mb-3",controlId:"height",children:[Object(T.jsx)(h.a,{children:Object(T.jsx)("b",{children:"Height"})}),Object(T.jsxs)(O.a,{children:[Object(T.jsx)(u.a,{children:Object(T.jsx)(v.a,{label:"Feet",children:Object(T.jsx)(p.a,{type:"number",min:3,max:8,placeholder:"5",onInput:function(e){return W(e.target.value)}})})}),Object(T.jsx)(u.a,{children:Object(T.jsx)(v.a,{label:"Inches",children:Object(T.jsx)(p.a,{type:"number",min:0,max:11,placeholder:"5",onInput:function(e){return K(e.target.value)}})})})]})]}),Object(T.jsx)("br",{}),Object(T.jsx)(h.a,{className:"text-muted",children:"Contact information"}),Object(T.jsx)("hr",{className:"mt-0"}),Object(T.jsxs)(x.a,{controlId:"phone",children:[Object(T.jsx)(h.a,{children:Object(T.jsx)("b",{children:"Phone"})}),Object(T.jsx)("br",{}),Object(T.jsxs)(O.a,{children:[Object(T.jsx)(u.a,{md:"4",children:Object(T.jsx)(p.a,{type:"tel",value:ee,placeholder:"(555) 555-5555",onInput:function(e){return te(et(e.target.value.toString()))},size:"lg"})}),Object(T.jsxs)(u.a,{md:"8",children:[Object(T.jsx)(N.a,{min:1e9,max:9999999999,value:isNaN(parseInt(ee.toString().replace(/\D/g,"")))?5555555555:parseInt(ee.toString().replace(/\D/g,"")),onInput:function(e){return te(et(e.target.value.toString()))},size:"lg"}),Object(T.jsx)(g.a,{className:"text-muted",children:"This slider is just a joke. Don't take points off for this."})]})]})]}),Object(T.jsxs)(d.a.Group,{className:"mb-3",controlId:"street",children:[Object(T.jsx)(d.a.Label,{children:Object(T.jsx)("b",{children:"Address*"})}),Object(T.jsx)(d.a.Control,{placeholder:"420 Blaze Ave",required:!0,size:"lg",onInput:function(e){return ae(e.target.value)}}),Object(T.jsx)(p.a.Feedback,{type:"invalid",children:"Please enter a valid address."})]}),Object(T.jsxs)(d.a.Group,{className:"mb-3",controlId:"apt",children:[Object(T.jsx)(d.a.Label,{children:Object(T.jsx)("b",{children:"Address 2"})}),Object(T.jsx)(d.a.Control,{placeholder:"Apartment, suite, etc.",size:"lg",onInput:function(e){return le(e.target.value)}})]}),Object(T.jsxs)(O.a,{className:"mb-3",children:[Object(T.jsxs)(d.a.Group,{as:u.a,controlId:"city",children:[Object(T.jsx)(d.a.Label,{children:Object(T.jsx)("b",{children:"City*"})}),Object(T.jsx)(d.a.Control,{placeholder:"San Francisco",required:!0,type:"city",size:"lg",onInput:function(e){return he(e.target.value)}}),Object(T.jsx)(p.a.Feedback,{type:"invalid",children:"Please enter a valid city."})]}),Object(T.jsxs)(d.a.Group,{as:u.a,controlId:"state",children:[Object(T.jsx)(d.a.Label,{children:Object(T.jsx)("b",{children:"State*"})}),Object(T.jsxs)(d.a.Select,{required:!0,size:"lg",onChange:function(e){return pe(e.target.value)},children:[Object(T.jsx)("option",{value:"",children:"Choose..."}),Object(T.jsx)("option",{children:"Alabama"}),Object(T.jsx)("option",{children:"Alaska"}),Object(T.jsx)("option",{children:"Arizona"}),Object(T.jsx)("option",{children:"Arkansas"}),Object(T.jsx)("option",{children:"California"}),Object(T.jsx)("option",{children:"Colorado"}),Object(T.jsx)("option",{children:"Connecticut"}),Object(T.jsx)("option",{children:"Delaware"}),Object(T.jsx)("option",{children:"Florida"}),Object(T.jsx)("option",{children:"Georgia"}),Object(T.jsx)("option",{children:"Hawaii"}),Object(T.jsx)("option",{children:"Idaho"}),Object(T.jsx)("option",{children:"Illinois"}),Object(T.jsx)("option",{children:"Indiana"}),Object(T.jsx)("option",{children:"Iowa"}),Object(T.jsx)("option",{children:"Kansas"}),Object(T.jsx)("option",{children:"Kentucky"}),Object(T.jsx)("option",{children:"Louisiana"}),Object(T.jsx)("option",{children:"Maine"}),Object(T.jsx)("option",{children:"Maryland"}),Object(T.jsx)("option",{children:"Massachusetts"}),Object(T.jsx)("option",{children:"Michigan"}),Object(T.jsx)("option",{children:"Minnesota"}),Object(T.jsx)("option",{children:"Mississippi"}),Object(T.jsx)("option",{children:"Missouri"}),Object(T.jsx)("option",{children:"Montana"}),Object(T.jsx)("option",{children:"Nebraska"}),Object(T.jsx)("option",{children:"Nevada"}),Object(T.jsx)("option",{children:"New Hampshire"}),Object(T.jsx)("option",{children:"New Jersey"}),Object(T.jsx)("option",{children:"New Mexico"}),Object(T.jsx)("option",{children:"New York"}),Object(T.jsx)("option",{children:"North Carolina"}),Object(T.jsx)("option",{children:"North Dakota"}),Object(T.jsx)("option",{children:"Ohio"}),Object(T.jsx)("option",{children:"Oklahoma"}),Object(T.jsx)("option",{children:"Oregon"}),Object(T.jsx)("option",{children:"Pennsylvania"}),Object(T.jsx)("option",{children:"Rhode Island"}),Object(T.jsx)("option",{children:"South Carolina"}),Object(T.jsx)("option",{children:"South Dakota"}),Object(T.jsx)("option",{children:"Tennessee"}),Object(T.jsx)("option",{children:"Texas"}),Object(T.jsx)("option",{children:"Utah"}),Object(T.jsx)("option",{children:"Vermont"}),Object(T.jsx)("option",{children:"Virginia"}),Object(T.jsx)("option",{children:"Washington"}),Object(T.jsx)("option",{children:"West Virginia"}),Object(T.jsx)("option",{children:"Wisconsin"}),Object(T.jsx)("option",{children:"Wyoming"})]}),Object(T.jsx)(p.a.Feedback,{type:"invalid",children:"Please select a state."})]}),Object(T.jsxs)(d.a.Group,{as:u.a,controlId:"zip",children:[Object(T.jsx)(d.a.Label,{children:Object(T.jsx)("b",{children:"ZIP code*"})}),Object(T.jsx)(d.a.Control,{type:"number",required:!0,value:ge,min:1e4,max:99999,size:"lg",onInput:function(e){return fe(e.target.value)}}),Object(T.jsx)(p.a.Feedback,{type:"invalid",children:"Please enter a valid zip."})]})]}),Object(T.jsxs)(x.a,{className:"mb-3",controlId:"email",children:[Object(T.jsx)(h.a,{children:Object(T.jsx)("b",{children:"Email*"})}),Object(T.jsx)(p.a,{required:!0,type:"email",size:"lg",placeholder:"ealderson@ecorp.com",onInput:function(e){return ke(e.target.value)}}),Object(T.jsx)(p.a.Feedback,{type:"invalid",children:"Please enter a valid email."})]}),Object(T.jsx)("br",{}),Object(T.jsx)(h.a,{className:"text-muted",children:"Services"}),Object(T.jsx)("hr",{className:"mt-0"}),Object(T.jsxs)(x.a,{className:"mb-3",controlId:"services",children:[Object(T.jsx)(h.a,{children:Object(T.jsx)("b",{children:"Check all services you require"})}),Object(T.jsx)(f.a,{type:"checkbox",id:"service-1",onClick:function(){return Te(!0!==Fe)},label:"Email"}),Object(T.jsx)(f.a,{type:"checkbox",id:"service-2",onClick:function(){return ze(!0!==Ae)},label:"Facebook"}),Object(T.jsx)(f.a,{type:"checkbox",id:"service-3",onClick:function(){return Me(!0!==He)},label:"Twitter"}),Object(T.jsx)(f.a,{type:"checkbox",id:"service-4",onClick:function(){return Re(!0!==De)},label:"Surface mail"}),Object(T.jsx)(f.a,{type:"checkbox",id:"service-5",onClick:function(){return Ve(!0!==Ge)},label:"Personal visit"})]}),Object(T.jsxs)(x.a,{className:"mb-3",controlId:"budget",children:[Object(T.jsx)(h.a,{children:Object(T.jsx)("b",{children:"Your monthly budget for services"})}),Object(T.jsx)(f.a,{type:"radio",id:"budget-1",name:"budge",onClick:function(e){return Ze(e.target.value)},value:"Less than $50",label:"Less than $50"}),Object(T.jsx)(f.a,{type:"radio",id:"budget-2",name:"budge",onClick:function(e){return Ze(e.target.value)},value:"Between $50 and $100",label:"Between $50 and $100"}),Object(T.jsx)(f.a,{type:"radio",id:"budget-3",name:"budge",onClick:function(e){return Ze(e.target.value)},value:"Above $100",label:"Above $100"})]}),Object(T.jsx)(x.a,{className:"mb-3",controlId:"terms",children:Object(T.jsxs)("div",{className:"form-check",children:[Object(T.jsx)(I.a,{type:"checkbox",style:{marginInlineEnd:".5em"},required:!0}),Object(T.jsxs)(S.a,{children:["I accept the ",Object(T.jsx)("a",{href:"https://youtu.be/cd2FZrBgUjA",target:"_blank",rel:"noreferrer",children:"Terms of service"}),"*"]}),Object(T.jsx)(p.a.Feedback,{type:"invalid",children:"You must agree before submitting."})]})}),Object(T.jsx)(x.a,{className:"mb-3",children:Object(T.jsx)(C.a,{ref:s,sitekey:"6LeBH0odAAAAABft0w8LG8ssPK6HEDAEvrc1V_nw"})}),Object(T.jsx)(y.a,{type:"submit",children:"Submit"})]})]})})})),P=c(63),A=Object(F.b)((function(e){return{fname:e.fname,lname:e.lname,title:e.title,heightFeet:e.heightFeet,heightInches:e.heightInches,phone:e.phone,street:e.street,apt:e.apt,city:e.city,state:e.state,zip:e.zip,email:e.email,service1:e.service1,service2:e.service2,service3:e.service3,service4:e.service4,service5:e.service5,budget:e.budget}}))((function(e){var t=e.fname,c=e.lname,i=e.title,a=e.heightFeet,s=e.heightInches,j=e.phone,b=e.street,d=e.apt,h=e.city,O=e.state,x=e.zip,u=(e.email,e.service1),p=e.service2,m=e.service3,v=e.service4,g=e.service5,f=e.budget,y=Object(r.f)();return Object(n.useEffect)((function(){""===t&&y("/")})),Object(T.jsx)("div",{children:Object(T.jsx)(l.a,{children:Object(T.jsx)(o.a,{children:Object(T.jsxs)(o.a.Body,{children:[Object(T.jsx)(o.a.Title,{children:Object(T.jsx)("h1",{children:"Result verification page Leslie Zhou"})}),Object(T.jsx)(o.a.Title,{children:"Name"}),Object(T.jsx)(o.a.Text,{children:"".concat(t," ").concat(c)}),Object(T.jsx)(o.a.Title,{children:"Preferred title"}),Object(T.jsx)(o.a.Text,{children:"".concat(i)}),a&&Object(T.jsxs)("div",{className:"mb-3",children:[Object(T.jsx)(o.a.Title,{children:"Height"}),Object(T.jsxs)(o.a.Text,{children:["".concat(a,"'"),s?" ".concat(s,'"'):' 0"']})]}),j&&Object(T.jsxs)("div",{className:"mb-3",children:[Object(T.jsx)(o.a.Title,{children:"Phone"}),Object(T.jsx)(o.a.Text,{children:"".concat(j)})]}),Object(T.jsx)(o.a.Title,{children:"Address"}),Object(T.jsxs)(o.a.Text,{children:["".concat(b),d&&", ".concat(d),Object(T.jsx)("br",{}),"".concat(h,", ").concat(O," ").concat(x)]}),Object(T.jsx)("div",{className:"mapouter",children:Object(T.jsx)("div",{className:"gmap_canvas",children:Object(T.jsx)("iframe",{title:"map",width:"100%",height:"500",id:"gmap_canvas",src:"https://maps.google.com/maps?q=".concat(b,"%2C%20").concat(h,"%2C%20").concat(O,"%20").concat(x,"&t=&z=11&ie=UTF8&iwloc=&output=embed"),frameBorder:"0",scrolling:"no",marginHeight:"0",marginWidth:"0"})})}),(u||p||m||v||g)&&Object(T.jsxs)("div",{className:"mb-3",children:[Object(T.jsx)(o.a.Title,{children:"Service required"}),Object(T.jsxs)(P.a,{children:[u&&Object(T.jsx)(P.a.Item,{children:"Email"}),p&&Object(T.jsx)(P.a.Item,{children:"Facebook"}),m&&Object(T.jsx)(P.a.Item,{children:"Twitter"}),v&&Object(T.jsx)(P.a.Item,{children:"Surface mail"}),g&&Object(T.jsx)(P.a.Item,{children:"Personal visit"})]})]}),f&&Object(T.jsxs)("div",{className:"mb-3",children:[Object(T.jsx)(o.a.Title,{children:"Monthly budget for services"}),Object(T.jsx)(o.a.Text,{children:f})]})]})})})})}));var z=function(){return Object(T.jsx)("div",{className:"App",children:Object(T.jsxs)(r.c,{children:[Object(T.jsx)(r.a,{exact:!0,path:"/",element:Object(T.jsx)(w,{})}),Object(T.jsx)(r.a,{path:"/result",element:Object(T.jsx)(A,{})})]})})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,67)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))},L=(c(57),c(58),c(28)),H=c(30),M={fname:"",lname:"",title:"",heightFeet:0,heightInches:0,phone:"",street:"",apt:"",city:"",state:"",zip:0,email:"",service1:!1,service2:!1,service3:!1,service4:!1,service5:!1,budget:""},q=c(41),B=Object(H.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;return"FORM_SET_RESULT"===c?n:e}),Object(H.a)(q.a));s.a.render(Object(T.jsx)(F.a,{store:B,children:Object(T.jsx)(L.a,{children:Object(T.jsx)(z,{})})}),document.getElementById("root")),E()}},[[59,1,2]]]);
//# sourceMappingURL=main.75179158.chunk.js.map