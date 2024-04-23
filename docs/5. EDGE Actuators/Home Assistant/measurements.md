---
sidebar_label: 'Measurements'
sidebar_position: 3
---

# Measurements capture
The middleware sends the following measurements periodically to the building intelligence through the *service-device-gateway* REST API. Here is the list of sent measurements with an example showing the use of the *service-device-gateway* REST API.

## Current smart thermostat setpoint
Here is an example:
```
PUT http://127.0.0.1:8002/smart-thermostat/thermostat_id_1234/setpoint
```
With the following body:
```
{
    "date": "2023-11-22T10:05:00Z",
    "value": 20.2,
    "unit": "C"
}
```

## Internal temperature of a smart thermostat
Here is an example:
```
PUT http://127.0.0.1:8002/smart-thermostat/thermostat_id_1234/internal-temperature
```
With the following body:
```
{
    "date": "2023-11-22T10:05:00Z",
    "value": 20.2,
    "unit": "C"
}
```

## Electric consumption of a smart thermostat
Here is an example:
```
PUT http://127.0.0.1:8002/smart-thermostat/thermostat_id_1234/consumption
```
With the following body:
```
{
    "date": "2023-11-22T10:05:00Z",
    "value": 10.2,
    "unit": "kWh"
}
```

## Total consumption of a building
Here is an example:
```
PUT http://127.0.0.1:8002/consumption/all
```
With the following body:
```
{
    "date": "2023-11-22T10:05:00Z",
    "value": 5.2,
    "unit": "kWh"
}
```

## Instantaneous consumption of a building
Here is an example:
```
PUT http://127.0.0.1:8002/consumption/realtime
```
With the following body:
```
{
    "date": "2023-11-22T10:05:00Z",
    "value": 5024.3,
    "unit": "W"
}
```
