---
sidebar_label: 'Device provider'
sidebar_position: 2
---

# Device provider

The **Device Provider** module is a microservice responsible for retrieving information about the devices installed in the building and making it available to other modules in the building intelligence as needed. By interfacing with the **EDGE Actuators** (Home Assistant and EDGEX), the Device Provider ensures that the modules of the building intelligence system have the uptodate information of the available devices in the building. This information is essential for various modules within the system, such as the **Learners**, **Forecasters**, and **Optimizers**, as it influences their operations.

## Functionality

1. **API Exposition:** The **Device Provider** exposes an API that allows other modules within the building intelligence system to access information about the available devices. When the **Initializers**, **Learners**, **Forecasters**, or **Optimizers** modules require information about the building's devices they will query the API os the **Device Provider** to obtain the data about the devices installed on the building.

2. **Device Information Retrieval:** After receiving the API call, the **Device Provider** module establishes the communication with the EDGE Actuator installed on the building, either **Home Assistant** or **EDGEX**. After stablishing the communication, the **Device Provider** retrieves the information about the devices installed in the building. This information may include details such as device type, model, capabilities, and status.

3. **Device Information Delivery:** After gathering the information of the devices from **Home Assistant** or **EDGEX**, the **Device Provider** builds the objects for the devices with their characteristics and communicates those objects to the module that is requesting the information.


## Importance

The Device Provider ensures that the building intelligence system remains up-to-date with the latest information about the building's devices. This is important because new devices could be added by the user or some devices could connect or disconnect from the home area network. Thus, by providing access to up-to-date device information through its API, the Device Provider enables other modules to make informed decisions based on the capabilities of the current installed devices.

