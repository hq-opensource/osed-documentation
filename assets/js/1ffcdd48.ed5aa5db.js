"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[991],{156:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=i(4848),r=i(8453);const s={sidebar_label:"Grid Interpreter",sidebar_position:1},o="Grid Interpreter",a={id:"Building Intelligence/grid-interpreter",title:"Grid Interpreter",description:"The Grid Interpreter within the Open Source Edge DERMS (OSED) platform plays a pivotal role in facilitating communication between the Building Intelligence and the EDGE DERMS Coordinator (EDC), ensuring seamless interaction and response to grid demands. The Grid Interpreter functions are described here.",source:"@site/docs/4. Building Intelligence/grid-interpreter.md",sourceDirName:"4. Building Intelligence",slug:"/Building Intelligence/grid-interpreter",permalink:"/docs/Building Intelligence/grid-interpreter",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/4. Building Intelligence/grid-interpreter.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Grid Interpreter",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/Building Intelligence/introduction"},next:{title:"Device provider",permalink:"/docs/Building Intelligence/device-provider"}},d={},c=[{value:"Subscription management:",id:"subscription-management",level:2},{value:"Grid function interpretation",id:"grid-function-interpretation",level:2},{value:"Message transfer",id:"message-transfer",level:2},{value:"Importance",id:"importance",level:2}];function l(e){const t={a:"a",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"grid-interpreter",children:"Grid Interpreter"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Grid Interpreter"})," within the Open Source Edge DERMS (OSED) platform plays a pivotal role in facilitating communication between the Building Intelligence and the EDGE DERMS Coordinator (EDC), ensuring seamless interaction and response to grid demands. The ",(0,n.jsx)(t.strong,{children:"Grid Interpreter"})," functions are described here."]}),"\n",(0,n.jsx)(t.h2,{id:"subscription-management",children:"Subscription management:"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Grid Interpreter"})," establishes the communication between the Building Intelligence and the EDGE DERMS Coordinator (EDC) through Astarte. Its responsibilities include configuring the Building Intelligence to subscribe to specific communication channels provided by the EDC. This process entails setting up the necessary Astarte interface configuration files and ensuring that access is limited to authorized channels only."]}),"\n",(0,n.jsxs)(t.p,{children:["By effectively managing these subscriptions, the ",(0,n.jsx)(t.strong,{children:"Grid Interpreter"})," facilitates the transmission of relevant signals and updates from the EDC to the Building Intelligence. Additionally, it allows the Building Intelligence to transmit information back to the EDC as needed. As outlined in the ",(0,n.jsx)(t.a,{href:"/docs/EDGE%20DERMS%20Coordinators/communications",children:"communications"})," section, it's important to note that the channels used for receiving information from the EDC are distinct from those used to send information from the Building Intelligence to the EDC. This separation ensures clear, efficient and more secure communication between the two entities."]}),"\n",(0,n.jsx)(t.h2,{id:"grid-function-interpretation",children:"Grid function interpretation"}),"\n",(0,n.jsxs)(t.p,{children:["A key responsibility of the ",(0,n.jsx)(t.strong,{children:"Grid Interpreter"})," is to actively monitor the signals transmitted by the EDC and decipher their significance. Each signal corresponds to a specific grid function request initiated by the EDC. Therefore, it's imperative for the ",(0,n.jsx)(t.strong,{children:"Grid Interpreter"})," to identify which grid function was invoked."]}),"\n",(0,n.jsxs)(t.p,{children:["Upon recognizing the requested grid function, the ",(0,n.jsx)(t.strong,{children:"Grid Interpreter"})," proceeds to activate the corresponding services within the Building Intelligence. For instance, if the EDC signals the need for consumption optimization based on a specific tariff, the ",(0,n.jsx)(t.strong,{children:"Grid Interpreter"})," triggers the ",(0,n.jsx)(t.strong,{children:"Optimizer"})," tailored for that tariff within the Building Intelligence. Similarly, if the EDC requests a Day Ahead Coordination, the ",(0,n.jsx)(t.strong,{children:"Grid Interpreter"})," ensures that the appropriate day-ahead coordination ",(0,n.jsx)(t.strong,{children:"Optimizer"})," service is activated."]}),"\n",(0,n.jsx)(t.h2,{id:"message-transfer",children:"Message transfer"}),"\n",(0,n.jsxs)(t.p,{children:["In addition to interpreting incoming signals, the ",(0,n.jsx)(t.strong,{children:"Grid Interpreter"})," facilitates the regular transfer of essential information from the Building Intelligence to the EDC. This includes data such as total consumption or available flexibility measures, which are transmitted at predefined intervals. By providing timely updates to the EDC, the ",(0,n.jsx)(t.strong,{children:"Grid Interpreter"})," ensures that the building intelligence remains informed and responsive to dynamic grid conditions."]}),"\n",(0,n.jsx)(t.h2,{id:"importance",children:"Importance"}),"\n",(0,n.jsxs)(t.p,{children:["Overall, the ",(0,n.jsx)(t.strong,{children:"Grid Interpreter"})," serves as a vital intermediary between the Building Intelligence and the EDC, enabling efficient communication, real-time response to grid demands, and effective management of energy resources within the OSED platform."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var n=i(6540);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);