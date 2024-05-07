---
sidebar_label: 'Learners'
sidebar_position: 4
---

# Learners


The **Learners** module is responsible for learning user preferences within the building intelligence system. It understands and adapts to the unique preferences associated with each technology present in the user's environment. By using the information from the **Device Provider**, the **Learners** module identifies the technologies installed in the building and learns the models required to capture the user preferences of each technology (such as temperature setpoints, occupancy schedules, EV charging preferences, and occupancy). By learning these preferences and packaging them in mathematical models that are used by the other modules, the **Learners** module enhances the building intelligence system's ability to optimize energy usage.

## Functionality

1. **Preference Learning:** The **Learners** module is responsible for learning user preferences associated with different technologies present in the building. It employs machine learning algorithms to analyze historical data and identify patterns that represent user preferences.
   
2. **Thermal Dynamics Modeling:** Currently, the module focuses on learning the thermal dynamics of the home environment. This involves understanding the relationship between temperature setpoints, electric consumption of heaters, external temperature, and other variables. By modeling these dynamics, the **Learners** module enables the building intelligence to optimize temperature setpoints for demand response events or coordinate load consumption with other buildings.

3. **Saving the modules for Forecasting and Optimizing Support:** The learned models are saved in the MongoDB of the building intelligence. The models are utilized by the **Forecasters** module to generate accurate forecasts related to energy usage, occupancy patterns, and other relevant factors. The learned models are used as well for the different Optimizer modules to take the control decisions.

## Importance

The **Learners** module enhances the overall intelligence of the building system. By continuously learning and adapting to user preferences, it enables the system to operate more efficiently and effectively. The insights derived from the **Learners** module serve as the foundation for optimized energy usage and improved user comfort.


