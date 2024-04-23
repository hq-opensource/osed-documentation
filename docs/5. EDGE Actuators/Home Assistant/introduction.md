---
sidebar_label: 'Introduction'
sidebar_position: 1
---

# Introduction
Home Assistant is an open source home automation software that supports a multitude of devices. It can be installed and run in a various ways, from Raspberry Pi micro computers to powerful workstations or simply using a Docker image. It is used to manage the devices of the building. All the communications with Home Assistant are handled via our custom *middleware* component. The following types of communications are used:

- Obtain the list of devices in the building
- Read various measurements (temperature, setpoint, consumption, etc.)
- Control devices (for now, only setpoints of smart thermostats is supported) 