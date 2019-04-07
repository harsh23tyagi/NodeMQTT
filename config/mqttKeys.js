/**
 *
 * ~ Created by @HarshTyagi
 *
 * Declaring the client variable which connects to the MQTT broker
 * Currently using the local IP address of my laptop which is hosting the mosquitto broker
 *
 * We can change the connection string accordingly
 */

var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://192.168.0.24");
module.exports = {
  client: client
};
