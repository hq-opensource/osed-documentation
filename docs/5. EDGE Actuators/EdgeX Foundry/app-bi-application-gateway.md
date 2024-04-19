---
sidebar_label: 'BI application gateway'
sidebar_position: 2
---

# Intelligent Building Application Gateway

This application, designed in Go, forms a bridge between IoT devices managed by the EdgeX foundation platform and an Intelligent Building module. It incorporates an execution loop and a data transformation pipeline to take in, process, and relay IoT data. Device communication is facilitated through the EdgeX message bus, with the application also able to synchronize settings with smart devices. The design of the application leverages universal tags and promotes an organized, modular structure, enabling easy retrieval of device metadata, simplification of data type conversions, and scalability.

## Startup Sequence

Upon startup, the application establishes the required clients and enters into its primary execution loop. Here, it sequentially processes data through a series of operations, forming a pipeline. These operations convert raw data into a more digestible format, append labels to the device profile as tags, transmit this refined data to the Intelligent Building module, and update the set-point values for any included smart thermostats.

## Data Processing

The data processed by the application is structured as an 'Event', comprised of an array of 'Readings'. These 'Readings' represent individual data points collected from an IoT device. The application sifts through the 'Readings' in each 'Event', segmenting and categorizing data based on the labels such as Smart Thermostat or Consumption data.

For readings pertaining to smart thermostats, the program verifies if the resource name of the reading matches any of the predetermined smart thermostat resource names. If a match is found, the reading is appropriately transformed and dispatched to the Building Intelligence (BI) client through a specific API endpoint.

## Device Communication and Synchronization

Importantly, the application functions independently of device services, employing the EdgeX message bus to both read from and write to the devices. Connections between devices and their resources are created by attaching tags at the device profile and device configuration level. These tags, universally usable across all EdgeX device services, establish a standard language, thus simplifying subsequent interactions.

A key feature of the application is its ability to synchronize the settings of smart thermostats with the Building Intelligence (BI) module. Synchronization is executed at intervals defined by the device's settings.

## Utility Functions and Scalability

In addition to the core functionalities, the application provides several utility functions that aid in device metadata retrieval and data type conversions. These functions inadvertently play a key role in the conversion of raw reading data from devices into a format compatible with the Intelligent Building module.

Thanks to a structured, modular approach, the application supports easy scalability and efficiency, facilitating straightforward extensions for future device or data types.

## Conclusion

This comprehensive walkthrough of the code provides a deeper understanding of its capabilities and importance in the context of IoT and the EdgeX infrastructure.