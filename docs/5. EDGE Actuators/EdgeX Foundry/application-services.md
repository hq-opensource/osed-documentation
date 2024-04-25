---
sidebar_label: 'Application Services'
sidebar_position: 2
---

# Application Services

EdgeX Foundry is structured around a flexible and scalable modular microservices architecture. Application Services are crucial components that act as intermediaries between the processed data from Device Services and external systems or other applications within the EdgeX ecosystem. They are responsible for processing data into formats suitable for specific business needs, and for forwarding this data to external endpoints, databases, or other applications.

## Key Functions of Application Services

Application Services in EdgeX Foundry fulfill several critical roles:

### Data Transformation
- These services take data processed by Device Services and transform it into formats that are suitable for analysis, storage, or further processing according to specific business rules or requirements.

### Data Export
- Application Services handle the export of data to external systems. This can include sending data to cloud platforms, local databases, or integrating with other enterprise systems, thereby enabling broader IoT ecosystem connectivity.

### Event Handling
- They are capable of responding to events in real-time, processing data as it comes in from Device Services. This allows for immediate action based on the data, such as triggering alerts or automating system responses.

### Customizable Workflows
- One of the key strengths of Application Services is their ability to be customized for specific use cases. Developers can write custom functions that fit the particular needs of their deployment, making EdgeX Foundry highly adaptable to varied scenarios.

## OSED's Application service

### app-bi-gateway
This application service functions as a liaison between the IoT devices managed by the EdgeX foundation platform and a Building Intelligence module. By deploying an execution loop and a data transformation pipeline, the application absorbs, processes, and transmits IoT data. It interacts with devices through the EdgeX message bus and is capable of syncing settings with smart devices. This application's design underlines scalability and facilitates effortless device metadata retrieval and data type conversions, attributing to its focus on universal tags and a well-structured, modular architecture. Consequently, it improves interaction and integration with the OSED Building Intelligence (BI) system.

## Learn More

For more detailed information about, please refer to the README.md in our [project repository](https://gitlab.com/hydropersonal/poctes/edge/edgex).