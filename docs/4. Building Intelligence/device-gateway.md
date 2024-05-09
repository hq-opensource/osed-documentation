---
sidebar_label: 'Device Gateway'
sidebar_position: 6
---

# Device Gateway

The **Device Gateway** module is a microservice written in [Go](https://go.dev/) acting as a bridge between the **EDGE Actuators** (Home Assistant and EDGEX) and the building intelligence. The **Device Gateway** ensures that the modules of the building intelligence system have the up-to-date metrics of the devices in the building. This information is essential for various modules within the system, such as the **Learners**, **Forecasters**, and **Optimizers**. It also provides instructions for the control of each devices (controlled by the building intelligence) installed in a building. 

## Functionality

1. **Measurements API:** The **Device Gateway** exposes an API that allows the **Edge Actuators** to periodically *push* various measurements to the building intelligence. The **Device Gateway** saves all the values within the Building Intelligence own database ([InfluxDB](https://www.influxdata.com/)). These measurements may include the current temperature of each thermal zone, the accumulated energy consumption for each smart thermostat, the instant power consumption of the building, the temperature of the water in the water heater tank and so on. The **Learners**, **Forecasters**, or **Optimizers** modules then use these measurements in their algorithymns.

2. **Control API:** The **Device Gateway** exposes an API that allows the **Edge Actuators** to query the building intelligence in order to control its devices based on instructions computed by the **Learners**, **Forecasters**, **Optimizers** modules or by direct control grid functions processed by the **Grid Interpreter**. These instructions may include the setpoints of the smart thermostats, to charge or discharge the batteries, to activate or deactivate the water heater and so on.


## Importance

The **Device Gateway** ensures that realtime measurements of the various devices are saved in the building intelligence's database. These values are crucial to the various optimization algorithymns. They act as inputs of these computing modules. The **Device Gateway** is also very important for controlling each device in a building. Each device installed in the building needs to get its instruction set from this module.