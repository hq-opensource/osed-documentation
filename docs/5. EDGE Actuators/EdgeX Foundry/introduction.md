---
sidebar_label: 'Introduction'
sidebar_position: 1
---
# OSED EdgeX Foundry Actuators
The EdgeX Foundry Actuators project utilizes the open-source EdgeX Foundry framework, specializing in Internet of Things (IoT) edge computing, and extends its capabilities to better suit our requirements.

## What is EdgeX Foundry
[EdgeX Foundry](https://docs.edgexfoundry.org/3.1/) is a software framework designed to facilitate the development of interoperable IoT (Internet of Things) solutions. It is an open source project hosted by the Linux Foundation that aims to create a common middleware platform for industrial IoT and enterprise applications.


Notably, leading companies like Dell, Canonical, HP Enterprise, and Intel utilise and support EdgeX Foundry. Dell has used EdgeX in its IoT gateway project, and Canonical partnered with EdgeX to provide a secure, scalable platform for IoT applications. Also, HP Enterprise and Intel, as significant contributors, utilise EdgeX in their IoT solutions and gateway development respectively.


The main advantage of adopting EdgeX Foundry is its highly flexible model which allows seamless integration with a wide variety of microservices, regardless of the programming language used.

## EdgeX Foundry Architecture
The core of the EdgeX Foundry framework consists of a selection of microservices offered by a variety of vendors. These services can be combined and used to create an IoT solution adapted to the specific needs of the company.

EdgeX Foundry follows a microservice design strategy, allowing each component to exist independently of the others. This offers considerable modularity and flexibility, so that developers can precisely choose the components they need for their IoT solution.

## Notre projet

Le rôle 



![Naperon_Sommaire_EdgeX_POCTES_v0.3.svg](../../../static/img/edge-actuators/Naperon_Sommaire_EdgeX_POCTES_v0.3.svg)

## Application Services
Application Services are responsible for processing the sensor data. They manage different stages of data processing like filtering, transformation, and transmission to external tools or services. They essentially extract value from data sensed from different devices and act as a channel to enable use-cases driven by processed data. For example, this could be alerting a system when certain conditions are met, or storing the data in a time-series database for future analysis.

### app-bi-gateway
This application service exports selected events or readings from the EdgeX data bus to the OSED Business Intelligence (BI) system, enhancing interaction and integration.

## Our "Device Services"
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


The tech stack for this project includes Docker and Docker Compose, GoLang, EdgeX Foundry, and zigbee2mqtt.