"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7466],{246:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=t(4848),s=t(8453);const o={sidebar_label:"Communications",sidebar_position:3},a="Communications",r={id:"EDGE DERMS Coordinators/communications",title:"Communications",description:'In the context of the Open Source Edge DERMS (OSED) platform, "communications" refer to the vital exchange of data between the cloud and the edge computing systems. This communication is essential for coordinating grid functions, managing user interactions, and optimizing the usage of flexible loads.',source:"@site/docs/3. EDGE DERMS Coordinators/communications.md",sourceDirName:"3. EDGE DERMS Coordinators",slug:"/EDGE DERMS Coordinators/communications",permalink:"/docs/EDGE DERMS Coordinators/communications",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/3. EDGE DERMS Coordinators/communications.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Communications",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"User managers",permalink:"/docs/EDGE DERMS Coordinators/user-manager"},next:{title:"Introduction",permalink:"/docs/Building Intelligence/introduction"}},c={},d=[{value:"Astarte Integration",id:"astarte-integration",level:2},{value:"Secure Communication Channels",id:"secure-communication-channels",level:2},{value:"Five Layers of Security",id:"five-layers-of-security",level:2}];function m(e){const n={a:"a",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"communications",children:"Communications"}),"\n",(0,i.jsx)(n.p,{children:'In the context of the Open Source Edge DERMS (OSED) platform, "communications" refer to the vital exchange of data between the cloud and the edge computing systems. This communication is essential for coordinating grid functions, managing user interactions, and optimizing the usage of flexible loads.'}),"\n",(0,i.jsx)(n.h2,{id:"astarte-integration",children:"Astarte Integration"}),"\n",(0,i.jsxs)(n.p,{children:["OSED leverages ",(0,i.jsx)(n.a,{href:"https://docs.astarte-platform.org/",children:"Astarte"}),", a secure open-source IoT platform. OSED uses Astarte to manage the communication between the EDGE DERMS Coordinators (EDCs) and the edge computing systems where building intelligence resides. Astarte facilitates secure communication channels and user authentication, ensuring robust data transmission while maintaining stringent security measures."]}),"\n",(0,i.jsx)(n.h2,{id:"secure-communication-channels",children:"Secure Communication Channels"}),"\n",(0,i.jsx)(n.p,{children:"Each grid function within OSED employs two secure communication channels:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"EDC to User Communication Channel:"})," Enables communication from the EDC to the user, facilitating the transmission of grid function demands and instructions."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"User to EDC Communication Channel:"})," Allows users to respond to grid function demands and convey relevant information back to the EDC."]}),"\n",(0,i.jsx)(n.p,{children:"These channels are designed to restrict the types of information transmitted, enhancing security and minimizing the potential impact of compromised devices."}),"\n",(0,i.jsx)(n.h2,{id:"five-layers-of-security",children:"Five Layers of Security"}),"\n",(0,i.jsx)(n.p,{children:"OSED's communication system incorporates five layers of security:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"User Authentication:"})," Users must provide an ID and token obtained from the user manager of each grid function to authenticate themselves within the system."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Whitelisting:"})," Astarte whitelists devices on specific communication channels, ensuring that only authorized devices can access and interact with designated channels."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Unidirectional Message Flow:"})," Messages transmitted over communication channels are unidirectional, preventing bidirectional communication and reducing the attack surface."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Channel Restrictions:"})," Each communication channel imposes restrictions on the type and size of messages allowed, limiting communication to authorized message types."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"API Integration with User Managers:"})," Communication messages are linked to APIs exposed by user managers, enabling additional layers of verification before messages are accepted or processed by the EDC."]}),"\n",(0,i.jsx)(n.p,{children:"By incorporating these layers of security, OSED ensures the integrity and confidentiality of data exchanged between EDCs and edge computing systems, mitigating the risk of unauthorized access or data compromise."})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(6540);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);