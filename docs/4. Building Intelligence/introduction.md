---
sidebar_label: 'Introduction'
sidebar_position: 0
---

# Introduction

The building intelligence acts as the cognitive nucleus of the building management system, safeguarding and advocating for user interests and preferences. Its primary function revolves around comprehending and adjusting to the distinct requirements and behaviors of individual users, thereby optimizing energy management and fostering active participation in energy markets and demand response programs. The building intelligence is composed by the several microservices shown in the following figure: 

![Example architecture of EDCs](../../static/img/building-intelligence/building-intelligence.svg)


## Learning and adaptation
To effectively represent user interests, the building intelligence employs advanced learning algorithms to comprehend various aspects of user behavior. This includes understanding the thermal characteristics of the building, learning user trading preferences, such as energy storage allocation for grid interaction, and capturing occupancy schedules to adjust temperature setpoints accordingly. Moreover, with the presence of electric vehicles, the building intelligence learns usage patterns to optimize charging schedules and energy utilization.

## Forecasting capabilities
In addition to learning user preferences, the building intelligence is equipped with forecasting capabilities to anticipate future demands and conditions. It generates forecasts for electric demand, EV usage, weather patterns, occupancy, and more. By leveraging predictive insights, the building intelligence can proactively adapt energy management strategies to optimize efficiency and user comfort.

## Dynamic operation
The building intelligence is designed to operate dynamically, capable of initiating and reinitializing systems as needed. In scenarios such as power outages, the building intelligence seamlessly reboots and reconfigures devices, ensuring continuous operation and data integrity. This resilience enables uninterrupted service delivery and responsiveness to changing environmental conditions.

## Market interaction and demand response participation
One of the primary roles of the building intelligence is to facilitate user participation in energy markets. By understanding user preferences and elasticity to price changes, it negotiates with EDGE DERMS Coordinators (EDCs) on behalf of users, optimizing market interactions to maximize benefits while meeting user requirements. Moreover, the buildin intelligence can automate the participation of the users in traditional demand response programs.

## Centralized control and database management
As the central cognitive entity, the building intelligence orchestrates device schedules and manages databases to store and analyze data. It creates usage schedules for devices and maintains a repository of device data for algorithmic learning, forecasting, and operational management.

In summary, the building intelligence acts as an abstraction layer that encapsulates the intelligence necessary to manage and control building operations efficiently. Each aspect of its functionality contributes to optimizing energy usage, enhancing user comfort, and enabling participation in energy markets and demand response programs. In the following sections, we will delve into the specific services comprising the building intelligence, elucidating their roles and contributions to the overall system.