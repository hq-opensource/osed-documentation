"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1374],{7396:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=t(4848),o=t(8453);const r={sidebar_label:"Grid Functions",sidebar_position:1},s="Grid functions",a={id:"EDGE DERMS Coordinators/grid-functions",title:"Grid functions",description:"The Grid Functions within the Open Source Edge DERMS (OSED) platform represent essential tools designed to address specific grid challenges and optimize grid performance. Currently, OSED incorporates two primary grid functions, with ongoing development towards the addition of a third function. The functions are presented in the following figure.",source:"@site/docs/3. EDGE DERMS Coordinators/grid-functions.md",sourceDirName:"3. EDGE DERMS Coordinators",slug:"/EDGE DERMS Coordinators/grid-functions",permalink:"/osed-documentation/docs/EDGE DERMS Coordinators/grid-functions",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/3. EDGE DERMS Coordinators/grid-functions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Grid Functions",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/osed-documentation/docs/EDGE DERMS Coordinators/introduction"},next:{title:"User managers",permalink:"/osed-documentation/docs/EDGE DERMS Coordinators/user-manager"}},d={},c=[{value:"Day Ahead Coordination (DAC)",id:"day-ahead-coordination-dac",level:2},{value:"Direct Load Control (DLC)",id:"direct-load-control-dlc",level:2},{value:"XOR Grid Function (Under Development)",id:"xor-grid-function-under-development",level:2}];function l(e){const i={h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"grid-functions",children:"Grid functions"}),"\n",(0,n.jsx)(i.p,{children:"The Grid Functions within the Open Source Edge DERMS (OSED) platform represent essential tools designed to address specific grid challenges and optimize grid performance. Currently, OSED incorporates two primary grid functions, with ongoing development towards the addition of a third function. The functions are presented in the following figure."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Grid Functions",src:t(2784).A+""})}),"\n",(0,n.jsx)(i.h2,{id:"day-ahead-coordination-dac",children:"Day Ahead Coordination (DAC)"}),"\n",(0,n.jsx)(i.p,{children:"The DAC grid function facilitates a bidirectional interaction process between the EDGE DERMS Coordinators (EDCs) and building intelligence systems. Acting as a leader, the EDC initiates a Stackelberg game with building intelligence systems as followers. This iterative negotiation process aims to determine prices that minimize peak consumption for the following day, while also optimizing building costs. Utilizing a Model Predictive Control (MPC) optimization algorithm, building intelligence systems optimize individual building consumption, which is aggregated by the EDC. Subsequently, the EDC adjusts prices based on network constraints and peak consumption targets. This process continues iteratively until a predefined convergence criterion is met."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Grid Functions",src:t(4743).A+"",width:"18452",height:"11459"})}),"\n",(0,n.jsx)(i.p,{children:"While the current functionality focuses on day-ahead consumption optimization, the versatility of DAC extends beyond temporal constraints. Here's an overview of its extended capabilities:"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Temporal Flexibility:"})," DAC can be reconfigured to coordinate consumption across arbitrary timeframes, accommodating various grid scenarios. For instance, it can manage loads post-electricity supply cuts, regulate consumption during peak periods (e.g., between 16:00 and 21:00), or oversee electric vehicle recharge cycles within the same feeder."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Tariff Optimization:"})," DAC enables optimization of arbitrary tariff profiles for day-ahead consumption. Currently, the DAC grid function supports three tariff types: flat, time-of-use, and shift consumption. Configuration parameters for time-of-use and shift consumption tariffs are conveyed as input parameters through the RESTful API exposed by the DAC grid function. The shift consumption tariff encourages load shifting by offering low prices during specific periods and high prices during others. These incentives prompt building intelligence systems to adjust their consumption patterns accordingly. The Grid Intelligence interacts with the DAC grid function within the EDC, configuring the desired tariff for users connected to that specific EDC. Once the EDC transfers the tariff, building intelligence systems optimize consumption in line with the transmitted tariff profile, ensuring harmony with user preferences and grid imperatives."]}),"\n",(0,n.jsx)(i.h2,{id:"direct-load-control-dlc",children:"Direct Load Control (DLC)"}),"\n",(0,n.jsx)(i.p,{children:"The DLC grid function equips the grid intelligence with tools for managing user flexibility and load control. These tools include:"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Request for Available Flexibility:"})," Aggregates available flexibility from all users and transfers it to the EDC for potential grid tasks."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Simultaneous Adjustment of Thermostat Setpoints:"})," Allows the uniform adjustment of thermostat setpoints across all users over a predefined period, facilitating the creation of consumption peaks or reductions in consumption."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Transfer of setpoints:"})," Enables building intelligence systems to transfer instantaneous or average consumption data to the EDC for analysis."]}),"\n",(0,n.jsx)(i.h2,{id:"xor-grid-function-under-development",children:"XOR Grid Function (Under Development)"}),"\n",(0,n.jsx)(i.p,{children:"The XOR grid function introduces a spot market mechanism for flexibility exchange. EDCs offer an array of prices to users, who, in turn, respond with bids indicating their willingness to curtail consumption or provide production capacity at each price point. Using a combinatorial XOR process, EDCs select winning bids, which are then communicated to building intelligence systems. These systems are then tasked with providing the allocated flexibility within the specified interval."})]})}function u(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},4743:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/dac-b919dbd418812cb3ac026b8e615e3b2a.png"},2784:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/grid-functions-32614db7ef98e373ec8dc27e81e42fd7.svg"},8453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>a});var n=t(6540);const o={},r=n.createContext(o);function s(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);