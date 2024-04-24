---
sidebar_label: 'Device control'
sidebar_position: 4
---

# Device control
Periodically, the middleware communicates with the *service-device-gateway* from the Building Intelligence in order to get the desired setpoint of each smart thermostat.

Here is an example:
```
GET http://service_device_gateway_host:8002/smart-thermostat/thermostat_id_1234/setpoint?date=2023-11-22T10:00:00Z
```
The result will be a JSON payload in the following form:
```json
{
    "date": "2023-11-22T10:00:00Z",
    "value": 20.2,
    "unit": "C"
}
```

Once the setpoint is read, it is applied. The *middleware* communicates with Home Assistant using the supervisor REST API. For instance, the set the temperature (i.e. setpoint) of a smart thermostat, the *middleware* invoques the following supervisor URL:

```
POST http://home_assistant_host:8123/api/services/climate/set_temperature
```

With the following JSON body as an example:

```json
{
    "entity_id": climate.tz_1,
    "temperature": 21.5
}
```