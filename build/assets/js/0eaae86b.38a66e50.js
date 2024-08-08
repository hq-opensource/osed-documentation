"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9647],{3925:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=n(4848),r=n(8453);const o={sidebar_label:"Forecasters",sidebar_position:5},i="Forecasters",a={id:"Building Intelligence/forecasters",title:"Forecasters",description:"The Forecasters module makes the forecasts for the non-controllable energy consumption, occupancy patterns, and other required information within the building intelligence system. The Forecasters module uses the models that the Learners module created. The models are extracted directly form MongoDB. Moreover, the Forecasters modules can use external data sources to produce the required forecasts for the Optimizers and energy management strategies in the building.",source:"@site/docs/4. Building Intelligence/forecasters.md",sourceDirName:"4. Building Intelligence",slug:"/Building Intelligence/forecasters",permalink:"/docs/Building Intelligence/forecasters",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/4. Building Intelligence/forecasters.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Forecasters",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Learners",permalink:"/docs/Building Intelligence/learners"},next:{title:"Device Gateway",permalink:"/docs/Building Intelligence/device-gateway"}},c={},l=[{value:"Functionality",id:"functionality",level:2},{value:"Importance",id:"importance",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"forecasters",children:"Forecasters"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Forecasters"})," module makes the forecasts for the non-controllable energy consumption, occupancy patterns, and other required information within the building intelligence system. The ",(0,s.jsx)(t.strong,{children:"Forecasters"})," module uses the models that the ",(0,s.jsx)(t.strong,{children:"Learners"})," module created. The models are extracted directly form MongoDB. Moreover, the ",(0,s.jsx)(t.strong,{children:"Forecasters"})," modules can use external data sources to produce the required forecasts for the ",(0,s.jsx)(t.strong,{children:"Optimizers"})," and energy management strategies in the building."]}),"\n",(0,s.jsx)(t.h2,{id:"functionality",children:"Functionality"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Technology Identification:"})," The ",(0,s.jsx)(t.strong,{children:"Forecasters"})," module utilizes the ",(0,s.jsx)(t.strong,{children:"Device Provider"})," module to identify the technologies installed in the building. By accessing information about the types of devices present, the ",(0,s.jsx)(t.strong,{children:"Forecasters"})," module tailors its forecasting models to produce the required data of each technology."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Forecast Generation:"})," Using the models learned by the ",(0,s.jsx)(t.strong,{children:"Learners"})," module and incorporating external data sources where necessary, the ",(0,s.jsx)(t.strong,{children:"Forecasters"})," module generates forecasts for energy consumption and usage patterns of various building technologies. These forecasts are based on historical data, user preferences, and environmental factors. Currently, only the non-controllable loads forecasts is produced. The non-controllable loads forecast is produced using the ",(0,s.jsx)(t.a,{href:"https://facebook.github.io/prophet/docs/quick_start.html",children:"Prophet"})," package."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Data Storage:"})," The forecasts generated by the ",(0,s.jsx)(t.strong,{children:"Forecasters"})," module are stored in the InfluxDB, a time-series database. This allows other modules within the building intelligence system to access and utilize the forecasts for decision-making purposes. By centralizing forecast data in the InfluxDB, the system ensures consistency and accessibility across different components."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Forecasting Techniques:"})," The ",(0,s.jsx)(t.strong,{children:"Forecasters"})," module employs advanced forecasting techniques, such as Facebook Prophet, to generate accurate predictions of energy consumption and usage patterns. These techniques analyze historical data trends and seasonality to produce reliable forecasts, enabling proactive energy management and optimization."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"importance",children:"Importance"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Forecasters"})," module plays a crucial role in enhancing the efficiency and effectiveness of the building intelligence system. By generating accurate forecasts, it enables the system to anticipate future energy demand and adapt accordingly. These forecasts inform decision-making processes, allowing the system to optimize energy usage, minimize costs, and enhance user comfort and satisfaction."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(6540);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);