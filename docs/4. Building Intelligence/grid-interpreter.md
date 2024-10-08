---
sidebar_label: 'Grid Interpreter'
sidebar_position: 1
---

# Grid Interpreter

The **Grid Interpreter** within the Open Source Edge DERMS (OSED) platform plays a pivotal role in facilitating communication between the Building Intelligence and the EDGE DERMS Coordinator (EDC), ensuring seamless interaction and response to grid demands. The **Grid Interpreter** functions are described here.

## Subscription management:
The **Grid Interpreter** establishes the communication between the Building Intelligence and the EDGE DERMS Coordinator (EDC) through Astarte. Its responsibilities include configuring the Building Intelligence to subscribe to specific communication channels provided by the EDC. This process entails setting up the necessary Astarte interface configuration files and ensuring that access is limited to authorized channels only.

By effectively managing these subscriptions, the **Grid Interpreter** facilitates the transmission of relevant signals and updates from the EDC to the Building Intelligence. Additionally, it allows the Building Intelligence to transmit information back to the EDC as needed. As outlined in the [communications](../3.%20EDGE%20DERMS%20Coordinators/communications.md) section, it's important to note that the channels used for receiving information from the EDC are distinct from those used to send information from the Building Intelligence to the EDC. This separation ensures clear, efficient and more secure communication between the two entities.

## Grid function interpretation
A key responsibility of the **Grid Interpreter** is to actively monitor the signals transmitted by the EDC and decipher their significance. Each signal corresponds to a specific grid function request initiated by the EDC. Therefore, it's imperative for the **Grid Interpreter** to identify which grid function was invoked.

Upon recognizing the requested grid function, the **Grid Interpreter** proceeds to activate the corresponding services within the Building Intelligence. For instance, if the EDC signals the need for consumption optimization based on a specific tariff, the **Grid Interpreter** triggers the **Optimizer** tailored for that tariff within the Building Intelligence. Similarly, if the EDC requests a Day Ahead Coordination, the **Grid Interpreter** ensures that the appropriate day-ahead coordination **Optimizer** service is activated.

## Message transfer
In addition to interpreting incoming signals, the **Grid Interpreter** facilitates the regular transfer of essential information from the Building Intelligence to the EDC. This includes data such as total consumption or available flexibility measures, which are transmitted at predefined intervals. By providing timely updates to the EDC, the **Grid Interpreter** ensures that the building intelligence remains informed and responsive to dynamic grid conditions.


## Importance
Overall, the **Grid Interpreter** serves as a vital intermediary between the Building Intelligence and the EDC, enabling efficient communication, real-time response to grid demands, and effective management of energy resources within the OSED platform.






