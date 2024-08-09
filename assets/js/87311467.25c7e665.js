"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1430],{3601:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=n(4848),o=n(8453);const r={sidebar_label:"Device control",sidebar_position:4},i="Device control",a={id:"EDGE Actuators/Home Assistant/control",title:"Device control",description:"Periodically, the middleware communicates with the service-device-gateway from the Building Intelligence in order to get the desired setpoint of each smart thermostat.",source:"@site/docs/5. EDGE Actuators/Home Assistant/control.md",sourceDirName:"5. EDGE Actuators/Home Assistant",slug:"/EDGE Actuators/Home Assistant/control",permalink:"/osed-documentation/docs/EDGE Actuators/Home Assistant/control",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/5. EDGE Actuators/Home Assistant/control.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Device control",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Measurements",permalink:"/osed-documentation/docs/EDGE Actuators/Home Assistant/measurements"},next:{title:"Management",permalink:"/osed-documentation/docs/Interfaces/management"}},c={},d=[];function l(e){const t={code:"code",em:"em",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"device-control",children:"Device control"}),"\n",(0,s.jsxs)(t.p,{children:["Periodically, the middleware communicates with the ",(0,s.jsx)(t.em,{children:"service-device-gateway"})," from the Building Intelligence in order to get the desired setpoint of each smart thermostat."]}),"\n",(0,s.jsx)(t.p,{children:"Here is an example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"GET http://service_device_gateway_host:8002/smart-thermostat/thermostat_id_1234/setpoint?date=2023-11-22T10:00:00Z\n"})}),"\n",(0,s.jsx)(t.p,{children:"The result will be a JSON payload in the following form:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\r\n    "date": "2023-11-22T10:00:00Z",\r\n    "value": 20.2,\r\n    "unit": "C"\r\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Once the setpoint is read, it is applied. The ",(0,s.jsx)(t.em,{children:"middleware"})," communicates with Home Assistant using the supervisor REST API. For instance, the set the temperature (i.e. setpoint) of a smart thermostat, the ",(0,s.jsx)(t.em,{children:"middleware"})," invoques the following supervisor URL:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"POST http://home_assistant_host:8123/api/services/climate/set_temperature\n"})}),"\n",(0,s.jsx)(t.p,{children:"With the following JSON body as an example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\r\n    "entity_id": climate.tz_1,\r\n    "temperature": 21.5\r\n}\n'})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(6540);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);