---
sidebar_label: 'DAC optimizer'
sidebar_position: 7
---

# DAC optimizer

The **DAC Optimizer** supports the most advanced grid functions as demand optimization and consumption coordination between all users connected to the EDGE DERMS Coordinator. The **DAC Optimizer** leverages Model Predictive Control (MPC) to optimize the energy consumption across all available technologies within the building.

## Functionality
1. **Compatibility with multiple user tehnologies:** The **DAC Optimizer** module is capable of combining the controllable technologies that the user have and build every single time a custom MPC that reflects the particular conditions of each user. To do so, the **DAC Optimizer** uses the **Device Provider** to know which devices are available for each particular user. Afterwards, it builds the MPC formulation using the results of the **Forecasters** and **Learners** modules and by considering the operation modes and operational limits of each technology on the building. The objective and constraints of each formulation are currently tuned either for optimizing the consumption for a particular tariff or for the coordination of the consumption. However, any other application where the optimization of the consumption is required could be addedd in the future to the **DAC Optimizer** module.

2. **Model Predictive Control (MPC):** The **DAC Optimizer** employs MPC optimization, allowing for the optimization of energy consumption based on various objective functions and constraints. This includes optimizing consumption according to different tariff structures such as time-of-use or critical peak pricing, as well as optimizing consumption for demand response events.

3. **Proximal Algorithm:** Complementing the MPC optimization, the **DAC Optimizer** utilizes a proximal algorithm to ensure the convergence of a Stackelberg game. This game-theoretic approach allows the coordination of consumption among users connected to the same EDGE DERMS Coordinator (EDC), enabling coordination of consumption within a cluster of users. THe coordination could allow grid functions as the GRAP or respecting a peak consumption level at the EDC level. 

## Advantages
**Optimization of future consumption:** Since the optimization process occurs in advance, the **DAC Optimizer** provides insights into future energy consumption patterns. This proactive approach allows the EDC to have make a better planning and management of energy resources.
**Granular Optimization:** The **DAC Optimizer** can optimize energy consumption for various time frames, ranging from minutes to hours in advance. This flexibility enables targeted optimization to address specific needs or challenges, such as peak demand periods or extreme weather conditions.

## Data Publishing
Upon defining the control rules, the **DAC Optimizer** publishes the setpoints of the technologies' to the Influx Database. These setpoints are then retrieved by the **Device Gateway** and transmitted to the EDGE Actuators (EDGEX or Home Assistant) for implementation on the technologies of the building.

## Importance 
The **DAC Optimizer** optimizes the energy consumption in the presence of dynamic tariffs or when coordination of the consumption is required. Its advanced optimization capabilities, coupled with proactive planning and integration with other modules, enable efficient and effective management of energy resources.