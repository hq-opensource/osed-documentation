---
sidebar_label: 'Device Services'
sidebar_position: 3
---

# Device Services

EdgeX Foundry is structured around a flexible and scalable modular microservices architecture. Device Services are fundamental components that function as intermediaries between physical devices and the rest of the EdgeX platform. They manage device communication, transform raw data into utilizable formats, and forward this data to core services for extra processing.

## Key Functions of Device Services

Device Services in EdgeX Foundry fulfill several critical roles:

### Protocol Abstraction
Device services abstract the complexity of device-specific protocols, thus enabling communication with devices without the need for extensive knowledge of various communication protocols.

### Data Normalization
These services convert data received from devices into standardized formats dictated by EdgeX, enabling easier data integration and analysis across the platform.

### Command and Control
Device Services facilitate the sending of commands to devices, enabling remote control, and management of IoT devices.

## OSED's Application of Device Services

We've developed custom Device Services tailored to specific necessities, such as interfacing with IoT devices through various REST APIs.

### device-rest-go
This module leverages diverse REST APIs to interact with IoT devices. Notably versatile, it currently supports:
- Sensibo thermostats via the Sensibo REST API
- A proprietary REST API designed to work with eGauge modules installed in multiple households.

### device-zigbee2mqtt-go
This service permits EdgeX to supervise and retrieve data from IoT devices utilizing an MQTT broker connected to the open-source zigbee2mqtt project. We've integrated devices, including:
- SINOPE_TH1124ZB-G2 Thermostat
- SINOPE RM3250ZB Load Controller

## Learn More

For more detailed information about our Device Services, please refer to the README.md in our [project repository](https://gitlab.com/hydropersonal/poctes/edge/edgex).