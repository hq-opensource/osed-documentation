---
sidebar_label: 'User managers'
sidebar_position: 2
---

# User managers

User Managers serve as a crucial component within the architecture of EDGE DERMS Coordinators (EDCs) in the Open Source Edge DERMS (OSED) platform. User Managers are instrumental in managing the complexity associated with identifying and communicating with users for each grid function. They handle user authentication, permission validation, and communication intricacies, allowing the grid functions to focus solely on the algorithmic aspects of generating specific requests. The OSED platform employs Astarte to manage this complexity efficiently. Additionally, User Managers utilize RedisDB and InfluxDB as databases to store information relevant to the operation of the grid functions they serve. The way they work is by exposing API endpoints to the Grid Functions and to the Astarte interface. Those APIs are consumed to broadcast messages, to save information on databases and so on. 

The following figure shows the architecture of the user managers.

![Grid Functions](../../static/img/edge-derms/user-managers.svg)


Here's an overview of some of the user managers responsibilities:

1. **User Database Management:** User Managers maintain a comprehensive database of users associated with each grid function managed by the EDC. This database enables the EDC to identify and communicate with relevant users for each specific grid function.

2. **User Authentication:** User Managers authenticate users attempting to connect with the EDC. Users must undergo authentication, and failure to authenticate results in rejection.

3. **Secure Communication Establishment:** User Managers establish secure communication channels with authenticated users. They ensure that broadcast messages are only delivered to authenticated users permitted to receive them.

4. **Communication of Grid Function Information:** User Managers relay relevant information regarding the grid function invoked by the EDC to the identified users.

5. **Await User Response:** User Managers wait for responses from users following the communication of grid function demands.

6. **Process User Responses:** Upon receiving user responses, User Managers process them accordingly. This may involve storing responses in databases, aggregating responses, or performing other processing tasks.

7. **Notification of Grid Function Status:** User Managers notify the grid function of the status of user responses, indicating whether users have successfully or unsuccessfully responded to the grid function demands.

It's essential to note that each grid function necessitates its own dedicated User Manager due to variations in behavior and communication requirements. As the OSED platform embraces modularity and scalability, separating User Managers by functional blocks from the outset streamlines system management and facilitates future expansions.