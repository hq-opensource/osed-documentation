---
sidebar_label: 'DLC optimizer'
sidebar_position: 8
---

# DLC optimizer

The **DLC Optimizer** serves as an expert system of control for the technologies present within the building, emulating human decision-making capabilities to optimize energy usage. Currently employing a rule-based control system, the **DLC Optimizer** facilitates the execution of directives from the Direct Load Control (DLC) grid function while incorporating its own logic to enhance decision-making processes.

## Functionality
**Rule-Based Control:** The **DLC Optimizer** utilizes a rule-based control system to dictate the priorities and operational parameters of the technologies installed in the building. These rules decice how the technologies will be used ensuring efficient utilization of resources while considering user comfort and preferences.
**Integration with DLC Grid Function:** The **DLC Optimizer** can adapt its rules or actions according to the directives received from the EDGE DERMS Coordinator. The **Grid Service** interprets these orders and communicate them to the **DLC Optimizer**, which applies its own logic to fulfill them effectively.
**Dynamic Rule Evolution:** The rules embedded within the DLC control system are designed to be dynamic and adaptable. They can evolve based on feedback signals received from the EDGE DERMS Coordinator, allowing the **DLC Optimizer** to adjust its decision-making process in real-time according to changing conditions and priorities.
**Advanced Control Mechanisms:** While currently employing rule-based control, the **DLC Optimizer** has the flexibility to incorporate more sophisticated expert systems of control in the future. This could include mechanisms such as fuzzy logic or other advanced control techniques to further enhance decision-making capabilities.

## Data Publishing
Upon defining the control rules, the **DLC Optimizer** publishes the setpoints of the technologies' to the Influx Database. These setpoints are then retrieved by the **Device Gateway** and transmitted to the EDGE Actuators (EDGEX or Home Assistant) for implementation on the technologies of the building.

## Importance 
The **DLC Optimizer** module uses rule-based control to orchestrate the technologies within the building intelligence system to ensure efficient energy usage while adapting to dynamic operational requirements.






