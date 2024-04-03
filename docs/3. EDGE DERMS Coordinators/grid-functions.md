---
sidebar_label: 'Grid Functions'
sidebar_position: 1
---

# Grid functions

The Grid Functions within the Open Source Edge DERMS (OSED) platform represent essential tools designed to address specific grid challenges and optimize grid performance. Currently, OSED incorporates two primary grid functions, with ongoing development towards the addition of a third function. The functions are presented in the following figure. 

![Grid Functions](../../static/img/edge-derms/grid-functions.svg)


## Day Ahead Coordination (DAC)
The DAC grid function facilitates a bidirectional interaction process between the EDGE DERMS Coordinators (EDCs) and building intelligence systems. Acting as a leader, the EDC initiates a Stackelberg game with building intelligence systems as followers. This iterative negotiation process aims to determine prices that minimize peak consumption for the following day, while also optimizing building costs. Utilizing a Model Predictive Control (MPC) optimization algorithm, building intelligence systems optimize individual building consumption, which is aggregated by the EDC. Subsequently, the EDC adjusts prices based on network constraints and peak consumption targets. This process continues iteratively until a predefined convergence criterion is met. 

![Grid Functions](../../static/img/edge-derms/dac.png)


While the current functionality focuses on day-ahead consumption optimization, the versatility of DAC extends beyond temporal constraints. Here's an overview of its extended capabilities:

**Temporal Flexibility:** DAC can be reconfigured to coordinate consumption across arbitrary timeframes, accommodating various grid scenarios. For instance, it can manage loads post-electricity supply cuts, regulate consumption during peak periods (e.g., between 16:00 and 21:00), or oversee electric vehicle recharge cycles within the same feeder.

**Tariff Optimization:** DAC enables optimization of arbitrary tariff profiles for day-ahead consumption. Currently, the DAC grid function supports three tariff types: flat, time-of-use, and shift consumption. Configuration parameters for time-of-use and shift consumption tariffs are conveyed as input parameters through the RESTful API exposed by the DAC grid function. The shift consumption tariff encourages load shifting by offering low prices during specific periods and high prices during others. These incentives prompt building intelligence systems to adjust their consumption patterns accordingly. The Grid Intelligence interacts with the DAC grid function within the EDC, configuring the desired tariff for users connected to that specific EDC. Once the EDC transfers the tariff, building intelligence systems optimize consumption in line with the transmitted tariff profile, ensuring harmony with user preferences and grid imperatives.

## Direct Load Control (DLC)
The DLC grid function equips the grid intelligence with tools for managing user flexibility and load control. These tools include:

**Request for Available Flexibility:** Aggregates available flexibility from all users and transfers it to the EDC for potential grid tasks.

**Simultaneous Adjustment of Thermostat Setpoints:** Allows the uniform adjustment of thermostat setpoints across all users over a predefined period, facilitating the creation of consumption peaks or reductions in consumption.

**Transfer of setpoints:** Enables building intelligence systems to transfer instantaneous or average consumption data to the EDC for analysis.

## XOR Grid Function (Under Development)
The XOR grid function introduces a spot market mechanism for flexibility exchange. EDCs offer an array of prices to users, who, in turn, respond with bids indicating their willingness to curtail consumption or provide production capacity at each price point. Using a combinatorial XOR process, EDCs select winning bids, which are then communicated to building intelligence systems. These systems are then tasked with providing the allocated flexibility within the specified interval.

