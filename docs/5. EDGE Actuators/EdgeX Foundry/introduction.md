---
sidebar_label: 'Introduction'
sidebar_position: 1
---
# OSED's EdgeX Foundry Actuators

Leveraging the robust open-source EdgeX Foundry framework, a notable pacesetter in Internet of Things (IoT) edge computing, OSED (Open Source EDGE DERMS) has crafted the pioneering EdgeX Foundry Actuators project. This undertaking amplifies the fundamental capabilities of the framework, generating solutions distinctly tailored for OSED's specific requirements.

EdgeX Foundry delivers a comprehensive solution for IoT device management. It carries out operations on data, which include harmonizing, transforming, and applying rules or filters. Moreover, it streamlines communication with external modules like Azure IoT Hub, REST API, and several others via a central platform.

Our platform is distinctly resilient, maintaining impeccable performance even during internet disruptions due to its internet-independent design. We have an integrated storage mechanism prepared to recover any missing data from the EdgeX data module, which will prove especially handy when the restoration module is inevitably introduced. This ensures data integrity during periods of internet disconnection.

## EdgeX Foundry

EdgeX Foundry, as a software framework, has been engineered to hasten the creation of symbiotic IoT solutions. Under the auspices of the Linux Foundation, this open-source initiative aims to build a universal middleware platform for industrial IoT and enterprise application realms.

Backed by industry behemoths such as Dell, Canonical, HP Enterprise, and Intel, EdgeX Foundry has been deeply ingrained in their operations. Dell has employed EdgeX to fuel their IoT gateway project, while Canonical offers a robust and scalable environment for IoT applications, working in tandem with EdgeX. HP Enterprise and Intel, substantial contributors, utilize EdgeX for their distinct IoT solutions and gateway improvements.

The unique edge offered by EdgeX Foundry lies in its flexible architecture, allowing seamless integration with a myriad of microservices, surpassing limits set by programming languages.

## Deep Dive into the Architectural Paradigm

At the core of the EdgeX Foundry framework lies a cluster of microservices furnished by an array of vendors. Collectively, these services enable the creation of a highly customized IoT solution to cater to an organization's precise needs.

Embedding our project into the EdgeX architecture, we advocate for specialized Application Services and Device Services, all fashioned to comply with our distinctive specifications.

![Naperon_Sommaire_EdgeX_POCTES_v0.3.svg](../../../static/img/edge-actuators/Naperon_Sommaire_EdgeX_POCTES_v0.3.svg)


## Learn More

For more detailed information about our Applications and Devices Services, please refer to the README.md in our [project repository](https://gitlab.com/hydropersonal/poctes/edge/edgex).

## Notice
At present, our code serves as a proof of concept, demonstrating how our modules can be integrated into an EdgeX environment. Although our example does not incorporate EdgeX's security features, we assure the seamless integration of these modules into a secure EdgeX installation.

The tech stack for this project includes Docker and Docker Compose, GoLang, EdgeX Foundry, and zigbee2mqtt.