"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7541],{861:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=i(4848),s=i(8453);const r={sidebar_label:"Device Gateway",sidebar_position:6},a="Device Gateway",o={id:"Building Intelligence/device-gateway",title:"Device Gateway",description:"The Device Gateway module is a microservice written in Go acting as a bridge between the EDGE Actuators (Home Assistant and EDGEX) and the building intelligence. The Device Gateway ensures that the modules of the building intelligence system have the up-to-date metrics of the devices in the building. This information is essential for various modules within the system, such as the Learners, Forecasters, and Optimizers. It also provides instructions for the control of each devices (controlled by the building intelligence) installed in a building.",source:"@site/docs/4. Building Intelligence/device-gateway.md",sourceDirName:"4. Building Intelligence",slug:"/Building Intelligence/device-gateway",permalink:"/docs/Building Intelligence/device-gateway",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/4. Building Intelligence/device-gateway.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"Device Gateway",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Forecasters",permalink:"/docs/Building Intelligence/forecasters"},next:{title:"DAC optimizer",permalink:"/docs/Building Intelligence/dac-optimizer"}},c={},l=[{value:"Functionality",id:"functionality",level:2},{value:"Importance",id:"importance",level:2}];function d(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"device-gateway",children:"Device Gateway"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Device Gateway"})," module is a microservice written in ",(0,n.jsx)(t.a,{href:"https://go.dev/",children:"Go"})," acting as a bridge between the ",(0,n.jsx)(t.strong,{children:"EDGE Actuators"})," (Home Assistant and EDGEX) and the building intelligence. The ",(0,n.jsx)(t.strong,{children:"Device Gateway"})," ensures that the modules of the building intelligence system have the up-to-date metrics of the devices in the building. This information is essential for various modules within the system, such as the ",(0,n.jsx)(t.strong,{children:"Learners"}),", ",(0,n.jsx)(t.strong,{children:"Forecasters"}),", and ",(0,n.jsx)(t.strong,{children:"Optimizers"}),". It also provides instructions for the control of each devices (controlled by the building intelligence) installed in a building."]}),"\n",(0,n.jsx)(t.h2,{id:"functionality",children:"Functionality"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Measurements API:"})," The ",(0,n.jsx)(t.strong,{children:"Device Gateway"})," exposes an API that allows the ",(0,n.jsx)(t.strong,{children:"Edge Actuators"})," to periodically ",(0,n.jsx)(t.em,{children:"push"})," various measurements to the building intelligence. The ",(0,n.jsx)(t.strong,{children:"Device Gateway"})," saves all the values within the Building Intelligence own database (",(0,n.jsx)(t.a,{href:"https://www.influxdata.com/",children:"InfluxDB"}),"). These measurements may include the current temperature of each thermal zone, the accumulated energy consumption for each smart thermostat, the instant power consumption of the building, the temperature of the water in the water heater tank and so on. The ",(0,n.jsx)(t.strong,{children:"Learners"}),", ",(0,n.jsx)(t.strong,{children:"Forecasters"}),", or ",(0,n.jsx)(t.strong,{children:"Optimizers"})," modules then use these measurements in their algorithymns."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Control API:"})," The ",(0,n.jsx)(t.strong,{children:"Device Gateway"})," exposes an API that allows the ",(0,n.jsx)(t.strong,{children:"Edge Actuators"})," to query the building intelligence in order to control its devices based on instructions computed by the ",(0,n.jsx)(t.strong,{children:"Learners"}),", ",(0,n.jsx)(t.strong,{children:"Forecasters"}),", ",(0,n.jsx)(t.strong,{children:"Optimizers"})," modules or by direct control grid functions processed by the ",(0,n.jsx)(t.strong,{children:"Grid Interpreter"}),". These instructions may include the setpoints of the smart thermostats, to charge or discharge the batteries, to activate or deactivate the water heater and so on."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"importance",children:"Importance"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Device Gateway"})," ensures that realtime measurements of the various devices are saved in the building intelligence's database. These values are crucial to the various optimization algorithymns. They act as inputs of these computing modules. The ",(0,n.jsx)(t.strong,{children:"Device Gateway"})," is also very important for controlling each device in a building. Each device installed in the building needs to get its instruction set from this module."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var n=i(6540);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);