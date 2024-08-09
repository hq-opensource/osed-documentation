"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7351],{7085:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"The OSED platform","href":"/osed-documentation/docs/intro","docId":"intro","unlisted":false},{"type":"link","label":"Architecture","href":"/osed-documentation/docs/architecture","docId":"architecture","unlisted":false},{"type":"link","label":"Grid Intelligence","href":"/osed-documentation/docs/grid-intelligence","docId":"grid-intelligence","unlisted":false},{"type":"category","label":"EDGE DERMS Coordinators","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/osed-documentation/docs/EDGE DERMS Coordinators/introduction","docId":"EDGE DERMS Coordinators/introduction","unlisted":false},{"type":"link","label":"Grid Functions","href":"/osed-documentation/docs/EDGE DERMS Coordinators/grid-functions","docId":"EDGE DERMS Coordinators/grid-functions","unlisted":false},{"type":"link","label":"User managers","href":"/osed-documentation/docs/EDGE DERMS Coordinators/user-manager","docId":"EDGE DERMS Coordinators/user-manager","unlisted":false},{"type":"link","label":"Communications","href":"/osed-documentation/docs/EDGE DERMS Coordinators/communications","docId":"EDGE DERMS Coordinators/communications","unlisted":false}]},{"type":"category","label":"Building Intelligence","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/osed-documentation/docs/Building Intelligence/introduction","docId":"Building Intelligence/introduction","unlisted":false},{"type":"link","label":"Grid Interpreter","href":"/osed-documentation/docs/Building Intelligence/grid-interpreter","docId":"Building Intelligence/grid-interpreter","unlisted":false},{"type":"link","label":"Device provider","href":"/osed-documentation/docs/Building Intelligence/device-provider","docId":"Building Intelligence/device-provider","unlisted":false},{"type":"link","label":"User initializer","href":"/osed-documentation/docs/Building Intelligence/user-initializer","docId":"Building Intelligence/user-initializer","unlisted":false},{"type":"link","label":"Learners","href":"/osed-documentation/docs/Building Intelligence/learners","docId":"Building Intelligence/learners","unlisted":false},{"type":"link","label":"Forecasters","href":"/osed-documentation/docs/Building Intelligence/forecasters","docId":"Building Intelligence/forecasters","unlisted":false},{"type":"link","label":"Device Gateway","href":"/osed-documentation/docs/Building Intelligence/device-gateway","docId":"Building Intelligence/device-gateway","unlisted":false},{"type":"link","label":"DAC optimizer","href":"/osed-documentation/docs/Building Intelligence/dac-optimizer","docId":"Building Intelligence/dac-optimizer","unlisted":false},{"type":"link","label":"DLC optimizer","href":"/osed-documentation/docs/Building Intelligence/dlc-optimizer","docId":"Building Intelligence/dlc-optimizer","unlisted":false},{"type":"link","label":"XOR optimizer","href":"/osed-documentation/docs/Building Intelligence/xor-optimizer","docId":"Building Intelligence/xor-optimizer","unlisted":false}]},{"type":"category","label":"EDGE Actuators","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/osed-documentation/docs/EDGE Actuators/introduction","docId":"EDGE Actuators/introduction","unlisted":false},{"type":"category","label":"EdgeX Foundry","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/osed-documentation/docs/EDGE Actuators/EdgeX Foundry/introduction","docId":"EDGE Actuators/EdgeX Foundry/introduction","unlisted":false},{"type":"link","label":"Application Services","href":"/osed-documentation/docs/EDGE Actuators/EdgeX Foundry/application-services","docId":"EDGE Actuators/EdgeX Foundry/application-services","unlisted":false},{"type":"link","label":"Device Services","href":"/osed-documentation/docs/EDGE Actuators/EdgeX Foundry/device-services","docId":"EDGE Actuators/EdgeX Foundry/device-services","unlisted":false}]},{"type":"category","label":"Home Assistant","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/osed-documentation/docs/EDGE Actuators/Home Assistant/introduction","docId":"EDGE Actuators/Home Assistant/introduction","unlisted":false},{"type":"link","label":"List of Devices","href":"/osed-documentation/docs/EDGE Actuators/Home Assistant/devices","docId":"EDGE Actuators/Home Assistant/devices","unlisted":false},{"type":"link","label":"Measurements","href":"/osed-documentation/docs/EDGE Actuators/Home Assistant/measurements","docId":"EDGE Actuators/Home Assistant/measurements","unlisted":false},{"type":"link","label":"Device control","href":"/osed-documentation/docs/EDGE Actuators/Home Assistant/control","docId":"EDGE Actuators/Home Assistant/control","unlisted":false}]}]},{"type":"category","label":"Interfaces","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Management","href":"/osed-documentation/docs/Interfaces/management","docId":"Interfaces/management","unlisted":false},{"type":"link","label":"Visualization","href":"/osed-documentation/docs/Interfaces/visualization","docId":"Interfaces/visualization","unlisted":false}]}]},"docs":{"architecture":{"id":"architecture","title":"Architecture","description":"The OSED platform is composed of multiple services and modules that live in the cloud or the EDGE. The services that operate on the cloud communicate with the services that operate in the EDGE using securized protocols. Moreover, OSED uses Astarte to register, manage and securely communicate with the EDGE devices. The following figure shows the relationships between the multiple components and the following sections of this documentation will explain in detail each of the components.","sidebar":"tutorialSidebar"},"Building Intelligence/dac-optimizer":{"id":"Building Intelligence/dac-optimizer","title":"DAC optimizer","description":"The DAC Optimizer supports the most advanced grid functions as demand optimization and consumption coordination between all users connected to the EDGE DERMS Coordinator. The DAC Optimizer leverages Model Predictive Control (MPC) to optimize the energy consumption across all available technologies within the building.","sidebar":"tutorialSidebar"},"Building Intelligence/device-gateway":{"id":"Building Intelligence/device-gateway","title":"Device Gateway","description":"The Device Gateway module is a microservice written in Go acting as a bridge between the EDGE Actuators (Home Assistant and EDGEX) and the building intelligence. The Device Gateway ensures that the modules of the building intelligence system have the up-to-date metrics of the devices in the building. This information is essential for various modules within the system, such as the Learners, Forecasters, and Optimizers. It also provides instructions for the control of each devices (controlled by the building intelligence) installed in a building.","sidebar":"tutorialSidebar"},"Building Intelligence/device-provider":{"id":"Building Intelligence/device-provider","title":"Device provider","description":"The Device Provider module is a microservice responsible for retrieving information about the devices installed in the building and making it available to other modules in the building intelligence as needed. By interfacing with the EDGE Actuators (Home Assistant and EDGEX), the Device Provider ensures that the modules of the building intelligence system have the uptodate information of the available devices in the building. This information is essential for various modules within the system, such as the Learners, Forecasters, and Optimizers, as it influences their operations.","sidebar":"tutorialSidebar"},"Building Intelligence/dlc-optimizer":{"id":"Building Intelligence/dlc-optimizer","title":"DLC optimizer","description":"The DLC Optimizer serves as an expert system of control for the technologies present within the building, emulating human decision-making capabilities to optimize energy usage. Currently employing a rule-based control system, the DLC Optimizer facilitates the execution of directives from the Direct Load Control (DLC) grid function while incorporating its own logic to enhance decision-making processes.","sidebar":"tutorialSidebar"},"Building Intelligence/forecasters":{"id":"Building Intelligence/forecasters","title":"Forecasters","description":"The Forecasters module makes the forecasts for the non-controllable energy consumption, occupancy patterns, and other required information within the building intelligence system. The Forecasters module uses the models that the Learners module created. The models are extracted directly form MongoDB. Moreover, the Forecasters modules can use external data sources to produce the required forecasts for the Optimizers and energy management strategies in the building.","sidebar":"tutorialSidebar"},"Building Intelligence/grid-interpreter":{"id":"Building Intelligence/grid-interpreter","title":"Grid Interpreter","description":"The Grid Interpreter within the Open Source Edge DERMS (OSED) platform plays a pivotal role in facilitating communication between the Building Intelligence and the EDGE DERMS Coordinator (EDC), ensuring seamless interaction and response to grid demands. The Grid Interpreter functions are described here.","sidebar":"tutorialSidebar"},"Building Intelligence/introduction":{"id":"Building Intelligence/introduction","title":"Introduction","description":"The building intelligence acts as the cognitive nucleus of the building management system, safeguarding and advocating for user interests and preferences. Its primary function revolves around comprehending and adjusting to the distinct requirements and behaviors of individual users, thereby optimizing energy management and fostering active participation in energy markets and demand response programs. The building intelligence is composed by the several microservices shown in the following figure:","sidebar":"tutorialSidebar"},"Building Intelligence/learners":{"id":"Building Intelligence/learners","title":"Learners","description":"The Learners module is responsible for learning user preferences within the building intelligence system. It understands and adapts to the unique preferences associated with each technology present in the user\'s environment. By using the information from the Device Provider, the Learners module identifies the technologies installed in the building and learns the models required to capture the user preferences of each technology (such as temperature setpoints, occupancy schedules, EV charging preferences, and occupancy). By learning these preferences and packaging them in mathematical models that are used by the other modules, the Learners module enhances the building intelligence system\'s ability to optimize energy usage.","sidebar":"tutorialSidebar"},"Building Intelligence/user-initializer":{"id":"Building Intelligence/user-initializer","title":"User Initializer","description":"The User Initializer is responsible for initializing user-related data upon system startup or reboot. Its primary function is to ensure that the necessary data is available for the other modules of the building intelligence (Forecasters, Learners, Optimizers, etc.). By validating existing data and generating synthetic data as needed, the User Initializer ensures the continuity of operations within the building intelligence. The purpose of the User Initializer is twofold:","sidebar":"tutorialSidebar"},"Building Intelligence/xor-optimizer":{"id":"Building Intelligence/xor-optimizer","title":"XOR optimizer","description":"","sidebar":"tutorialSidebar"},"EDGE Actuators/EdgeX Foundry/application-services":{"id":"EDGE Actuators/EdgeX Foundry/application-services","title":"Application Services","description":"EdgeX Foundry is structured around a flexible and scalable modular microservices architecture. Application Services are crucial components that act as intermediaries between the processed data from Device Services and external systems or other applications within the EdgeX ecosystem. They are responsible for processing data into formats suitable for specific business needs, and for forwarding this data to external endpoints, databases, or other applications.","sidebar":"tutorialSidebar"},"EDGE Actuators/EdgeX Foundry/device-services":{"id":"EDGE Actuators/EdgeX Foundry/device-services","title":"Device Services","description":"EdgeX Foundry is structured around a flexible and scalable modular microservices architecture. Device Services are fundamental components that function as intermediaries between physical devices and the rest of the EdgeX platform. They manage device communication, transform raw data into utilizable formats, and forward this data to core services for extra processing.","sidebar":"tutorialSidebar"},"EDGE Actuators/EdgeX Foundry/introduction":{"id":"EDGE Actuators/EdgeX Foundry/introduction","title":"OSED\'s EdgeX Foundry Actuators","description":"Leveraging the robust open-source EdgeX Foundry framework, a notable pacesetter in Internet of Things (IoT) edge computing, OSED (Open Source EDGE DERMS) has crafted the pioneering EdgeX Foundry Actuators project. This undertaking amplifies the fundamental capabilities of the framework, generating solutions distinctly tailored for OSED\'s specific requirements.","sidebar":"tutorialSidebar"},"EDGE Actuators/Home Assistant/control":{"id":"EDGE Actuators/Home Assistant/control","title":"Device control","description":"Periodically, the middleware communicates with the service-device-gateway from the Building Intelligence in order to get the desired setpoint of each smart thermostat.","sidebar":"tutorialSidebar"},"EDGE Actuators/Home Assistant/devices":{"id":"EDGE Actuators/Home Assistant/devices","title":"List of devices","description":"The middleware exposes a REST endpoint that returns a list of devices in the building. For now, only climate devices are supported. These devices must have an entity ID in the form of tz_1, tz_2, tz_3 and so on (for thermal zone 1, thermal zone 2, etc.). It is a limitation of the building intelligence logic. The REST endpoint is exposed at the following URL:","sidebar":"tutorialSidebar"},"EDGE Actuators/Home Assistant/introduction":{"id":"EDGE Actuators/Home Assistant/introduction","title":"Introduction","description":"Home Assistant is an open source home automation software that supports a multitude of devices. It can be installed and run in a various ways, from Raspberry Pi micro computers to powerful workstations or simply using a Docker image. It is used to manage the devices of the building. All the communications with Home Assistant are handled via our custom middleware component. The following types of communications are used:","sidebar":"tutorialSidebar"},"EDGE Actuators/Home Assistant/measurements":{"id":"EDGE Actuators/Home Assistant/measurements","title":"Measurements capture","description":"The middleware sends the following measurements periodically to the building intelligence through the service-device-gateway REST API. Here is the list of sent measurements with an example showing the use of the service-device-gateway REST API.","sidebar":"tutorialSidebar"},"EDGE Actuators/introduction":{"id":"EDGE Actuators/introduction","title":"Introduction","description":"The OSED platform has integrated two building actuators so far: Home Assistant and EDGE X. Both integrations are described on this section.","sidebar":"tutorialSidebar"},"EDGE DERMS Coordinators/communications":{"id":"EDGE DERMS Coordinators/communications","title":"Communications","description":"In the context of the Open Source Edge DERMS (OSED) platform, \\"communications\\" refer to the vital exchange of data between the cloud and the edge computing systems. This communication is essential for coordinating grid functions, managing user interactions, and optimizing the usage of flexible loads.","sidebar":"tutorialSidebar"},"EDGE DERMS Coordinators/grid-functions":{"id":"EDGE DERMS Coordinators/grid-functions","title":"Grid functions","description":"The Grid Functions within the Open Source Edge DERMS (OSED) platform represent essential tools designed to address specific grid challenges and optimize grid performance. Currently, OSED incorporates two primary grid functions, with ongoing development towards the addition of a third function. The functions are presented in the following figure.","sidebar":"tutorialSidebar"},"EDGE DERMS Coordinators/introduction":{"id":"EDGE DERMS Coordinators/introduction","title":"EDGE DERMS Coordinators (EDCs)","description":"The EDGE DERMS Coordinators (EDCs) play a crucial role in the architecture of the Open Source Edge DERMS (OSED) platform. Strategically linked to the periphery of the grid, they are virtually connected to strategic grid points such as substations, transformers, and feeders. The primary role of EDCs is to manage specific electric areas efficiently by deploying customized grid functions. In doing so, they address grid-related challenges in a temporally and geographically targeted manner, improving grid performance and reliability.","sidebar":"tutorialSidebar"},"EDGE DERMS Coordinators/user-manager":{"id":"EDGE DERMS Coordinators/user-manager","title":"User managers","description":"User Managers serve as a crucial component within the architecture of EDGE DERMS Coordinators (EDCs) in the Open Source Edge DERMS (OSED) platform. User Managers are instrumental in managing the complexity associated with identifying and communicating with users for each grid function. They handle user authentication, permission validation, and communication intricacies, allowing the grid functions to focus solely on the algorithmic aspects of generating specific requests. The OSED platform employs Astarte to manage this complexity efficiently. Additionally, User Managers utilize RedisDB and InfluxDB as databases to store information relevant to the operation of the grid functions they serve. The way they work is by exposing API endpoints to the Grid Functions and to the Astarte interface. Those APIs are consumed to broadcast messages, to save information on databases and so on.","sidebar":"tutorialSidebar"},"grid-intelligence":{"id":"grid-intelligence","title":"Grid Intelligence","description":"The Grid Intelligence refers to the management layer within the OSED ecosystem. The Grid Intelligence orchestrates the activities of the distributed EDGE DERMS Coordinators deployed across the distribution network. The grid intelligence refers to entities such as the Advanced Distribution Management Systems (ADMS), the Distributed Energy Resources Management Systems (DERMS), multiple aggregators, and Virtual Power Plants (VPPs) or others. At this moment it its not clear whch of those entieties will take the role of managing the EDGE DERMS Coordinators.","sidebar":"tutorialSidebar"},"Interfaces/management":{"id":"Interfaces/management","title":"Management","description":"Explain here how to access budi base","sidebar":"tutorialSidebar"},"Interfaces/visualization":{"id":"Interfaces/visualization","title":"Visualization","description":"To ensure an efficient visualization of the real-time and historical data of our buildings for the OSED (Open Source EDGE DERMS) project, we have chosen Grafana. Grafana is a robust open-source software that offers interactive analysis and visualization capabilities.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"The OSED platform","description":"In the dynamic landscape of modern energy systems, the demand for innovative solutions that seamlessly integrate with existing infrastructure while providing adaptability, scalability, and interoperability is ever-increasing. Recognizing this imperative, we embarked on the journey to develop the Open Source EDGE DERMS (OSED), where DERMS stands for Distributed Energy Resources Management System.","sidebar":"tutorialSidebar"}}}}')}}]);