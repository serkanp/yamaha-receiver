# hassio-ring-bridge

Yamaha Avr Receiver Bridge for Home Assistant written by Serkan Polat

The bridge can be used to automatically get features on avr.


## Installation

1) In Home Assistant go to `Supervisor` > `Add-on Store` > dots top-right > `Repositories` and add the repository URL `https://serkanp@bitbucket.org/serkanp/hassio-yamaha-receiver`.
2) Click on `Yamaha Receiver` > `INSTALL` > Wait for a few min, as Docker container with NodeJS webservice is built locally.
4) Click on `START` after enabling `Watchdog` and optionally `Auto update`. Click on `LOGS` and `REFRESH` to see everything is working as expected.

## Sensor

Add the following to `configuration.yaml` of Home Assistant and restart:

```yaml
sensor:
  - platform: rest
    name: yamaha_receiver
    resource: http://127.0.0.1:8090/yamaha
    value_template: '{{ value_json.mode }}'
```

For lovelace

```yaml
type: entities
entities:
  - entity: sensor.yamaha_receiver
    name: Yamaha Receiver
    icon: 'hass:shield'
```

## Service

Add the following to `configuration.yaml` of Home Assistant and restart:

```yaml
rest_command:
  ring_location_mode:
    url: http://127.0.1:8090/yamaha
    method: POST
    payload: '{"mode": "{{ mode }}"}'
    content_type:  'application/json; charset=utf-8'
```
