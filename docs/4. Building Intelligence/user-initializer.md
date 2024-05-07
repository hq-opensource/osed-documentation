---
sidebar_label: 'User initializer'
sidebar_position: 3
---

# User Initializer

The **User Initializer** is responsible for initializing user-related data upon system startup or reboot. Its primary function is to ensure that the necessary data is available for the other modules of the building intelligence (**Forecasters**, **Learners**, **Optimizers**, etc.). By validating existing data and generating synthetic data as needed, the **User Initializer** ensures the continuity of operations within the building intelligence. The purpose of the **User Initializer** is twofold:

1. Data Validation: Validate the existence of the required user data within the specified historical period.
2. Synthetic Data Generation: Generate synthetic data for any missing or incomplete data within the historical period, ensuring comprehensive data coverage for all the other modules of the building intelligence.

## Functionality

1. **Device Information Retrieval**: Utilizing the **Device Provider** component, the **User Initializer** obtains information about the types of devices installed in the building. This information is used to determine the specific types of data required for each technology present in the building.
2. **Database Validation**: After knowing the technologies present in the building, the **User Initializer** verifies the historical data in the database to determine if all the required data for each technology already exists in the database.
3. **Technology-Specific Data Generation**: If data for any of the technologies is missing or incomplete in the specified historical period, the **User Initializer** generates synthetic data to fill the gaps. Recognizing that each technology requires specific types of data, the **User Initializer** creates or validates the presence of technology-specific data. For example, smart thermostats may require comfort setpoints, power consumption, temperature readings, etc., while EVs may require charging schedules, state-of-charge preferences, etc. 
4. **Final Validation**: The **User Initializer** validates that all required data is complete for all the technologies present in the building before finishing its execution. 

## Importance
The **User Initializer** execution upon system startup guarantees the existence of up-to-date data. The data is required for other components of the building intelligence, such as **Forecasters**, **Learners**, and **Optimizers**. However, it is important to highlight that the **User Initializer** is only executed when the edge device is plugged in or rebooted. The functionalities of the **User Initializer** might need to be extended to make a constant validation of the database and fulfill gaps in the data whenever and wherever they are found. This work could be done in the future. 
