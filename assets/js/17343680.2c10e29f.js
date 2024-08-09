"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4833],{5809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=n(4848),s=n(8453);const r={slug:"lte-lab",title:"OSED deployment for the LTE Laboratory",authors:["juan"],tags:["OSED","LTE","Hydro-Qu\xe9bec"]},o=void 0,a={permalink:"/blog/lte-lab",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-08-06-lte-post.md",source:"@site/blog/2024-08-06-lte-post.md",title:"OSED deployment for the LTE Laboratory",description:"The Laboratoire des technologies de l\u2019\xe9nergie (LTE) from Shawinigan is one of the labs of the Institut de recherche d'Hydro-Qu\xe9bec. The LTE is at the forefront of energy research. The LTE houses multiple facilities dedicated to advancing technologies in Lithium Batteries, energy efficiency, and client applications. Their research spans electric vehicles, distributed generation, building controls, and more. The following image shows the buildings that belong to the LTE and few of the technologies that are deployed on each building.",date:"2024-08-06T00:00:00.000Z",tags:[{inline:!0,label:"OSED",permalink:"/blog/tags/osed"},{inline:!0,label:"LTE",permalink:"/blog/tags/lte"},{inline:!0,label:"Hydro-Qu\xe9bec",permalink:"/blog/tags/hydro-quebec"}],readingTime:2.675,hasTruncateMarker:!1,authors:[{name:"Juan Carlos Oviedo Cepeda",title:"Researcher, Hydro-Qu\xe9bec",url:"https://www.linkedin.com/in/jcoc/",imageURL:"https://avatars.githubusercontent.com/u/44776372?v=4",key:"juan"}],frontMatter:{slug:"lte-lab",title:"OSED deployment for the LTE Laboratory",authors:["juan"],tags:["OSED","LTE","Hydro-Qu\xe9bec"]},unlisted:!1},d={authorsImageUrls:[void 0]},l=[{value:"Deployment on the cloud",id:"deployment-on-the-cloud",level:2},{value:"Deployment on the EDGE",id:"deployment-on-the-edge",level:2},{value:"Tests executed",id:"tests-executed",level:2},{value:"LnBits integration",id:"lnbits-integration",level:2},{value:"Results",id:"results",level:2}];function c(e){const t={a:"a",h2:"h2",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://ici.radio-canada.ca/nouvelle/2065864/laboratoire-transition-energetique-shawinigan-electricte",children:"Laboratoire des technologies de l\u2019\xe9nergie"})," (LTE) from Shawinigan is one of the labs of the ",(0,i.jsx)(t.a,{href:"https://www.hydroquebec.com/innovation/en/technological-evolution/innovative-strength/",children:"Institut de recherche d'Hydro-Qu\xe9bec"}),". The LTE is at the forefront of energy research. The LTE houses multiple facilities dedicated to advancing technologies in Lithium Batteries, energy efficiency, and client applications. Their research spans electric vehicles, distributed generation, building controls, and more. The following image shows the buildings that belong to the LTE and few of the technologies that are deployed on each building."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"The LTE at Shawinigan",src:n(5786).A+"",width:"1923",height:"1088"})}),"\n",(0,i.jsx)(t.p,{children:"Recently, we embarked on an exciting project to deploy the OSED platform across six buildings within the LTE campus. Our objective was to create a cohesive, intelligent system capable of responding to grid demands that were transfered by an EDGE coordinator. Our hope was to enhance the building operations to reduce operational costs without sacrifizing comfort."}),"\n",(0,i.jsx)(t.h2,{id:"deployment-on-the-cloud",children:"Deployment on the cloud"}),"\n",(0,i.jsxs)(t.p,{children:["The cloud instances of the OSED platform were deployed using Kubernetes on AWS. Communication with the EDGE devices was facilitated by ",(0,i.jsx)(t.a,{href:"https://docs.astarte-platform.org/astarte/latest/001-intro_user.html",children:"Astarte"}),". A custom module was developed to leverage Astarte's capabilities for user authentication and secure communication channels. This module efficiently transferred grid function requests to the users, ensuring reliable and secure operations."]}),"\n",(0,i.jsx)(t.h2,{id:"deployment-on-the-edge",children:"Deployment on the EDGE"}),"\n",(0,i.jsx)(t.p,{children:"The EDGE instances were deployed across various devices, tailored to the specific needs of each building. The table below outlines the buildings, their respective EDGE devices, the building actuators utilized, and the technologies integrated on the building intelligence of each building:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Building"}),(0,i.jsx)(t.th,{children:"Hardware"}),(0,i.jsx)(t.th,{children:"Actuator"}),(0,i.jsx)(t.th,{children:"Technologies"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"House 1"}),(0,i.jsx)(t.td,{children:"Raspberry pi 4"}),(0,i.jsx)(t.td,{children:"EDGE X"}),(0,i.jsx)(t.td,{children:"Thermostats Sinope"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"House 2"}),(0,i.jsx)(t.td,{children:"Intel Mini PC"}),(0,i.jsx)(t.td,{children:"EDGE X"}),(0,i.jsx)(t.td,{children:"Thermostats Sinope"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"IoT laboratory 1"}),(0,i.jsx)(t.td,{children:"Raspberry pi 4"}),(0,i.jsx)(t.td,{children:"Home Assistant"}),(0,i.jsx)(t.td,{children:"Thermostats Sinope"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"IoT laboratory 2"}),(0,i.jsx)(t.td,{children:"Intel mini PC"}),(0,i.jsx)(t.td,{children:"Home Assistant"}),(0,i.jsx)(t.td,{children:"Thermostats Sinope, water heater, battery with Schneider inverter, EV charger V1G"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Shed 1"}),(0,i.jsx)(t.td,{children:"Raspberry pi 4"}),(0,i.jsx)(t.td,{children:"Home Assistant"}),(0,i.jsx)(t.td,{children:"Thermostats Sensibo"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Shed 2"}),(0,i.jsx)(t.td,{children:"Raspberry pi 4"}),(0,i.jsx)(t.td,{children:"Home Assistant"}),(0,i.jsx)(t.td,{children:"Thermostats Sensibo"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"While additional technologies are present in the buildings, they are not yet fully integrated into the system."}),"\n",(0,i.jsx)(t.h2,{id:"tests-executed",children:"Tests executed"}),"\n",(0,i.jsx)(t.p,{children:"Numerous tests were conducted during the winter of 2023-2024. These tests included the optimization of dynamic tariffs, participation in day-ahead markets, and direct control of devices. The results provided valuable insights into the system's performance under real-world conditions."}),"\n",(0,i.jsx)(t.h2,{id:"lnbits-integration",children:"LnBits integration"}),"\n",(0,i.jsxs)(t.p,{children:["We deployed an instance of an ",(0,i.jsx)(t.a,{href:"https://lnbits.cloud.lirei.io/wallet",children:"LNbits server"})," on the cloud to explore financial incentives for user participation. A grid function utilizing direct load control was developed, integrating with the LnBits server to manage wallets and payments. This setup enabled us to create financial rewards for users who participated in the grid function, adding an extra layer of engagement and motivation."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"The grafana interface",src:n(6394).A+"",width:"1180",height:"504"})}),"\n",(0,i.jsx)(t.h2,{id:"results",children:"Results"}),"\n",(0,i.jsx)(t.p,{children:"The laboratory tests demonstrated the effectiveness of the Building Intelligence system in responding to grid functions deployed by the EDGE Coordinators. However, the tests also highlighted the need for a more robust system to manage microservices on the EDGE (like snaps or small distributions of kubernetes). Additionally, systems for handling exceptions and unexpected behaviors are essential for ensuring stability and reliability."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"The grafana interface",src:n(2066).A+"",width:"1189",height:"1696"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},2066:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/grafana-fb9e8f71564cb75a44ee0b4ad18e7726.png"},6394:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/lnbits-b972e73bf3cb890be7dab5c56e012968.png"},5786:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/lab_lte_ready-c50f3ce6c0633935337277bfeb66e3a3.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(6540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);