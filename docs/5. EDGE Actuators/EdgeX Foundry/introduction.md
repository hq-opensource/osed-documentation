---
sidebar_label: 'Introduction'
sidebar_position: 1
---
# OSED's EdgeX Foundry Actuators: Catalysing Transformation in IoT Edge Computing

Capitalizing on the open-source EdgeX Foundry framework's power, a remarkable leader in Internet of Things (IoT) edge computing, OSED developed the ground-breaking EdgeX Foundry Actuators project. This venture enhances the framework's core capabilities, creating solutions specifically tailored to OSED's unique needs.

EdgeX Foundry offers an encompassing solution for IoT devices management. It executes data operations, including harmonization, transformation, and the application of rules or filters. Further, it simplifies communication with external modules such as Azure IoT Hub, REST API, and many more - and all from a centralized platform.

Distinctly resilient, our platform operates flawlessly even amid internet outages. It's possible, thanks to its internet-independent design. We have an integrated storage mechanism ready to retrieve any missing data from the EdgeX data module, which will be particularly useful when the restoration module is expectedly introduced—ensuring data integrity during periods of internet disconnection.

## Transcending Boundaries with EdgeX Foundry

EdgeX Foundry, as a software framework, was designed to expedite the development of symbiotic IoT solutions. Encouraging collaboration under the Linux Foundation, this open-source initiative aims to create a universal middleware platform for industrial IoT and enterprise application domains.

Adopted by industry giants like Dell, Canonical, HP Enterprise, and Intel, EdgeX Foundry has been deeply integrated into their operations. Dell employed EdgeX to propel their IoT gateway project. Concurrently, Canonical, in collaboration with EdgeX, offers a secure and scalable environment for IoT applications. HP Enterprise and Intel, who are major contributors, make use of EdgeX for their individual IoT solutions and gateway enhancements.

EdgeX Foundry's stand-out advantage lies in its flexible architecture, which facilitates seamless integration with a wide range of microservices, transcending boundaries imposed by programming languages.

## An Insight into the Architectural Paradigm

At the heart of the EdgeX Foundry framework lies a batch of microservices, provided by a variety of vendors. Taken together, these services enable creating an IoT solution highly customized to accommodate an organization's specific needs.

Incorporating into the EdgeX architecture, our project advocates for specialized Application Services and Device Services, all shaped to fit our unique specifications.

![Naperon_Sommaire_EdgeX_POCTES_v0.3.svg](../../../static/img/edge-actuators/Naperon_Sommaire_EdgeX_POCTES_v0.3.svg)

## Device Services

We've formulated a range of custom Device Services aiming at specific needs, such as interfacing with IoT devices through various REST APIs along with different IoT devices.

### device-rest-go
This module communicates with IoT devices utilizing diverse REST APIs. It is strikingly versatile, currently supporting:
- Sensibo thermostats via the Sensibo REST API
- An in-house REST API working with eGauge modules installed in numerous households.

### device-zigbee2mqtt-go
This service enables EdgeX to oversee and retrieve data from IoT devices through an MQTT broker connected to the open-source zigbee2mqtt project. We've implemented devices such as:
- SINOPE_TH1124ZB-G2 Thermostat
- SINOPE RM3250ZB Load controller

## Application Services
The Application Services are in charge of managing sensor data. They govern different stages of data processing, such as filtering, altering and transferring to external services, or tools. They efficiently derive value from the data obtained from various devices and serve as a medium enabling use-cases driven by the analyzed data. This might involve triggering an alert when certain conditions are met or storing the data in a time-series database for subsequent examination.

### app-bi-gateway
This application service serves as a bridge between the IoT devices managed by the EdgeX foundation platform and an Building Intelligence module. By deploying an execution loop and a data transformation pipeline, the application absorbs, processes, and transmits IoT data. It communicates with devices through the EdgeX message bus and is capable of synchronising settings with smart devices. The design of this application underscores scalability and supports easy device metadata retrieval and data type conversions, thanks to its emphasis on universal tags and a well-organised, modular structure. Consequently, it enhances the interaction and integration with the OSED Building Intelligence (BI) system.

## Notice
Currently, our code serves as a proof of concept, illustrating how our modules could be integrated into an EdgeX environment. Although our example does not implement EdgeX's security features, we ensure that these modules can be smoothly implemented into a secure EdgeX installation.

The tech stack for this project comprises Docker and Docker Compose, GoLang, EdgeX Foundry, and zigbee2mqtt.