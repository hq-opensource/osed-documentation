---
sidebar_label: 'Introduction'
sidebar_position: 1
---

# OSED EdgeX Foundry Actuators
The EdgeX Foundry Actuators project utilizes the open-source EdgeX Foundry framework, specializing in Internet of Things (IoT) edge computing, and extends its capabilities to better suit our requirements.

## Our Application Services

![Naperon_Sommaire_EdgeX_POCTES_v0.3.svg](../../../static/img/edge-actuators/Naperon_Sommaire_EdgeX_POCTES_v0.3.svg)

### app-bi-gateway
This application service exports selected events or readings from the EdgeX data bus to the OSED Business Intelligence (BI) system, enhancing interaction and integration.

## Our Device Services
We've created a suite of custom Device Services designed to target specific needs, such as interacting with IoT devices through various REST APIs and diverse IoT devices.

### device-rest-go
This module interacts with IoT devices using a variety of REST APIs. It is highly adaptable and currently supports:
- Sensibo thermostats via the Sensibo REST API.
- In-house REST API that interfaces with eGauge modules installed in various households.

### device-zigbee2mqtt-go
This service allows EdgeX to control and read from IoT devices through an MQTT broker connected to the open-source zigbee2mqtt project. We've implemented the following devices:
- SINOPE_TH1124ZB-G2 Thermostat
- SINOPE RM3250ZB Load controller


Our current code serves as a proof of concept (POC) illustrating how our modules can be integrated into an EdgeX environment. Although our POC doesn't implement EdgeX's security features, rest assured that these modules can be seamlessly embedded into a secure EdgeX installation.

EdgeX Foundry is an open source project hosted under the Linux Foundation. This ensures it has strong support, governance and makes it part of a broader community that fosters open innovation and collaboration.

Notably, leading companies like Dell, Canonical, HP Enterprise, and Intel utilise and support EdgeX Foundry. Dell has used EdgeX in its IoT gateway project, and Canonical partnered with EdgeX to provide a secure, scalable platform for IoT applications. Also, HP Enterprise and Intel, as significant contributors, utilise EdgeX in their IoT solutions and gateway development respectively.

The tech stack for this project includes Docker and Docker Compose, GoLang, EdgeX Foundry, and zigbee2mqtt. We've simplified the startup process by providing scripts and docker-compose setups for smooth local development, using EdgeXCompose to generate the necessary docker-compose files and configurations.