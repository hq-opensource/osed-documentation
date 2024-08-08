"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1148],{6254:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=n(4848),i=n(8453);const o={sidebar_label:"List of Devices",sidebar_position:2},r="List of devices",c={id:"EDGE Actuators/Home Assistant/devices",title:"List of devices",description:"The middleware exposes a REST endpoint that returns a list of devices in the building. For now, only climate devices are supported. These devices must have an entity ID in the form of tz_1, tz_2, tz_3 and so on (for thermal zone 1, thermal zone 2, etc.). It is a limitation of the building intelligence logic. The REST endpoint is exposed at the following URL:",source:"@site/docs/5. EDGE Actuators/Home Assistant/devices.md",sourceDirName:"5. EDGE Actuators/Home Assistant",slug:"/EDGE Actuators/Home Assistant/devices",permalink:"/docs/EDGE Actuators/Home Assistant/devices",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/5. EDGE Actuators/Home Assistant/devices.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"List of Devices",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/EDGE Actuators/Home Assistant/introduction"},next:{title:"Measurements",permalink:"/docs/EDGE Actuators/Home Assistant/measurements"}},a={},d=[];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"list-of-devices",children:"List of devices"}),"\n",(0,s.jsxs)(t.p,{children:["The middleware exposes a REST endpoint that returns a list of devices in the building. For now, only ",(0,s.jsx)(t.em,{children:"climate"})," devices are supported. These devices ",(0,s.jsx)(t.strong,{children:"must"})," have an entity ID in the form of ",(0,s.jsx)(t.em,{children:"tz_1"}),", ",(0,s.jsx)(t.em,{children:"tz_2"}),", ",(0,s.jsx)(t.em,{children:"tz_3"})," and so on (for ",(0,s.jsx)(t.em,{children:"thermal zone 1"}),", ",(0,s.jsx)(t.em,{children:"thermal zone 2"}),", etc.). It is a limitation of the building intelligence logic. The REST endpoint is exposed at the following URL:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"GET http://middleware_host:8100/device/all\n"})}),"\n",(0,s.jsx)(t.p,{children:"This endoint returns a JSON list of devices. Here is an example of output:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'[\r\n  {\r\n    "area_id": "cabanon_1",\r\n    "configuration_url": "https://home.sensibo.com/",\r\n    "config_entries": [\r\n      "e02bfbc4e43e17c8e1ca885040329c99"\r\n    ],\r\n    "connections": [\r\n      [\r\n        "mac",\r\n        "70:b8:f6:9e:9f:4c"\r\n      ]\r\n    ],\r\n    "disabled_by": null,\r\n    "entry_type": null,\r\n    "hw_version": "esp32",\r\n    "id": "f5619753a95e63efc5bd665d402228a7",\r\n    "identifiers": [\r\n      [\r\n        "sensibo",\r\n        "K9eVdQnz"\r\n      ]\r\n    ],\r\n    "manufacturer": "Sensibo",\r\n    "model": "airq",\r\n    "name_by_user": null,\r\n    "name": "cabanon 1",\r\n    "serial_number": "Q202201026",\r\n    "sw_version": "SKY40144",\r\n    "via_device_id": null,\r\n    "entity_id": "climate.tz_1"\r\n  }\r\n]\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.em,{children:"service-device-provider"})," from the Building Intelligence communicates with this endpoint to obtain the list of devices and uses it within the Building Intelligence logic to perform various optimizations or grid functions."]}),"\n",(0,s.jsxs)(t.p,{children:["To obtain the list of devices, the ",(0,s.jsx)(t.em,{children:"middleware"}),' communicates with the Entity Registry and Device Registry of Home Assistant using WebSockets. It filters entity IDs list to keep only the entity IDs that begins with the following prefix: "climate.tz_". The service returns the raw content of the device registry output and adds a field ',(0,s.jsx)(t.em,{children:"entity_id"})," containing the Entity ID."]}),"\n",(0,s.jsxs)(t.p,{children:["For more info on the WebSockets Home Assistant API:\r\n",(0,s.jsx)(t.a,{href:"https://developers.home-assistant.io/docs/api/websocket/",children:"https://developers.home-assistant.io/docs/api/websocket/"})]}),"\n",(0,s.jsxs)(t.p,{children:["For more info on the Device Registry Home Assistant component:\r\n",(0,s.jsx)(t.a,{href:"https://developers.home-assistant.io/docs/device_registry_index/",children:"https://developers.home-assistant.io/docs/device_registry_index/"})]}),"\n",(0,s.jsxs)(t.p,{children:["For more info on the Entity Registry Home Assistant component:\r\n",(0,s.jsx)(t.a,{href:"https://developers.home-assistant.io/docs/entity_registry_index/",children:"https://developers.home-assistant.io/docs/entity_registry_index/"})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(6540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);