---
sidebar_label: 'List of Devices'
sidebar_position: 2
---

# List of devices
The middleware exposes a REST endpoint that returns a list of devices in the building. For now, only *climate* devices are supported. These devices **must** have an entity ID in the form of *tz_1*, *tz_2*, *tz_3* and so on (for *thermal zone 1*, *thermal zone 2*, etc.). It is a limitation of the building intelligence logic. The REST endpoint is exposed at the following URL:

```
GET http://middleware_host:8100/device/all
```

This endoint returns a JSON list of devices. Here is an example of output:

```json
[
  {
    "area_id": "cabanon_1",
    "configuration_url": "https://home.sensibo.com/",
    "config_entries": [
      "e02bfbc4e43e17c8e1ca885040329c99"
    ],
    "connections": [
      [
        "mac",
        "70:b8:f6:9e:9f:4c"
      ]
    ],
    "disabled_by": null,
    "entry_type": null,
    "hw_version": "esp32",
    "id": "f5619753a95e63efc5bd665d402228a7",
    "identifiers": [
      [
        "sensibo",
        "K9eVdQnz"
      ]
    ],
    "manufacturer": "Sensibo",
    "model": "airq",
    "name_by_user": null,
    "name": "cabanon 1",
    "serial_number": "Q202201026",
    "sw_version": "SKY40144",
    "via_device_id": null,
    "entity_id": "climate.tz_1"
  }
]
```

The *service-device-provider* from the Building Intelligence communicates with this endpoint to obtain the list of devices and uses it within the Building Intelligence logic to perform various optimizations or grid functions.

To obtain the list of devices, the *middleware* communicates with the Entity Registry and Device Registry of Home Assistant using WebSockets. It filters entity IDs list to keep only the entity IDs that begins with the following prefix: "climate.tz_". The service returns the raw content of the device registry output and adds a field *entity_id* containing the Entity ID.

For more info on the WebSockets Home Assistant API:
https://developers.home-assistant.io/docs/api/websocket/

For more info on the Device Registry Home Assistant component:
https://developers.home-assistant.io/docs/device_registry_index/

For more info on the Entity Registry Home Assistant component:
https://developers.home-assistant.io/docs/entity_registry_index/
