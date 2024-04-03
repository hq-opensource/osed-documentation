---
sidebar_label: 'Communications'
sidebar_position: 3
---

# Communications 

In the context of the Open Source Edge DERMS (OSED) platform, "communications" refer to the vital exchange of data between the cloud and the edge computing systems. This communication is essential for coordinating grid functions, managing user interactions, and optimizing the usage of flexible loads.

## Astarte Integration
OSED leverages [Astarte](https://docs.astarte-platform.org/), a secure open-source IoT platform. OSED uses Astarte to manage the communication between the EDGE DERMS Coordinators (EDCs) and the edge computing systems where building intelligence resides. Astarte facilitates secure communication channels and user authentication, ensuring robust data transmission while maintaining stringent security measures.

## Secure Communication Channels
Each grid function within OSED employs two secure communication channels:

**EDC to User Communication Channel:** Enables communication from the EDC to the user, facilitating the transmission of grid function demands and instructions.

**User to EDC Communication Channel:** Allows users to respond to grid function demands and convey relevant information back to the EDC.

These channels are designed to restrict the types of information transmitted, enhancing security and minimizing the potential impact of compromised devices.

## Five Layers of Security
OSED's communication system incorporates five layers of security:

**User Authentication:** Users must provide an ID and token obtained from the user manager of each grid function to authenticate themselves within the system.

**Whitelisting:** Astarte whitelists devices on specific communication channels, ensuring that only authorized devices can access and interact with designated channels.

**Unidirectional Message Flow:** Messages transmitted over communication channels are unidirectional, preventing bidirectional communication and reducing the attack surface.

**Channel Restrictions:** Each communication channel imposes restrictions on the type and size of messages allowed, limiting communication to authorized message types.

**API Integration with User Managers:** Communication messages are linked to APIs exposed by user managers, enabling additional layers of verification before messages are accepted or processed by the EDC.

By incorporating these layers of security, OSED ensures the integrity and confidentiality of data exchanged between EDCs and edge computing systems, mitigating the risk of unauthorized access or data compromise.








