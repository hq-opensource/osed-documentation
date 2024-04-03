---
sidebar_label: 'Introduction'
sidebar_position: 0
---

# EDGE DERMS Coordinators (EDCs)

The EDGE DERMS Coordinators (EDCs) play a crucial role in the architecture of the Open Source Edge DERMS (OSED) platform. Strategically linked to the periphery of the grid, they are virtually connected to strategic grid points such as substations, transformers, and feeders. The primary role of EDCs is to manage specific electric areas efficiently by deploying customized grid functions. In doing so, they address grid-related challenges in a temporally and geographically targeted manner, improving grid performance and reliability.

## Core Components
At their core, EDCs consist of three primary components:

**Grid Functions:** A curated selection of grid functions tailored to address specific grid challenges within the designated electric area.

**User Managers:** These modules facilitate the mapping of grid functions to specific users or consumer assets, ensuring efficient allocation and utilization of resources.

**Communication and Identification System:** This system enables bidirectional communication between EDGE devices and cloud-based EDCs, facilitating seamless data exchange and control commands transmission.

The comprehensive integration of these components empowers EDCs to effectively manage electric areas, optimize grid performance, and respond dynamically to evolving grid conditions. The following figure shows an example architecture of the three components.

![Example architecture of EDCs](../../static/img/edge-derms/edge-derms.svg)

In the subsequent sections, we delve into each component of the EDC architecture, elucidating their functionalities, interactions, and significance within the broader context of the OSED platform.

## Dynamic Deployment
One of the defining features of EDCs is their dynamic deployment capability, orchestrated by the Grid Intelligence component of the OSED platform. When the Grid Intelligence detects or predicts potential grid issues within a particular electric area, it initiates the creation of an EDC dedicated to managing that specific region. This adaptive approach ensures that resources are allocated precisely where they are needed most and avoid paying for cloud iddle services. 

## Cloud-Based Instances
It is important to note that EDCs are cloud-based instances, distinct from EDGE computing devices. As such, they operate within cloud environments, enabling scalability, flexibility, and centralized management. Consequently, the Grid Intelligence component must either coexist within the cloud or establish mechanisms for overseeing and coordinating EDC instances effectively.

