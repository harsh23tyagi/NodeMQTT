/*
~ Created By @HarshTyagi
~ This file was made to check the initial set up of mosquitto server to check the connection of the node app to the mosquitto
~ You can uncomment the code and play around in case you want to explore more
*/

//const mqtt = require("mqtt");
// console.log("hello");

// var mqtt = require("mqtt");
// var client = mqtt.connect("mqtt://test.mosquitto.org");

// client.on("connect", function() {
//   client.subscribe("mqtt/demo", function(err) {
//     if (!err) {
//       client.publish("mqtt/demo", "Hello mqtt");
//     }
//   });
// });

// client.on("message", (topic, message) => {
//   console.log(message.toString());
//   client.end();
// });
// var state = "closed";

// client.on("connect", () => {
//   client.publish("garage/connected", "true");
//   client.subscribe("garage/connected");
// });

// client.on("message", (topic, message) => {
//   if (topic == "garage/connected") {
//     connected = message.toString() === "true";
//   }
// });

// client.on('connect', function () {
//     client.subscribe('presence', function (err) {
//       if (!err) {
//         client.publish('presence', 'Hello mqtt')
//       }
//     });

//     client.on('message', function (topic, message) {
//         // message is Buffer
//         console.log(message.toString())
//         client.end()
//       });
//   })

//module.exports = router;
