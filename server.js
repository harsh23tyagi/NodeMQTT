/**
 *
 * ~Created by @HarshTyagi
 *
 * This is the start file as mentioned in the package.json
 * Using nodemon as a developer dependency, so that the code gets reloaded as soon as we save changes in a file
 *
 * To Run the app:
 * Write this in terminal: npm run server
 * The above command will call the script mentioned in package.json under 'server', and will use nodemon to run the app
 *
 * In case you want to run the app without nodemon, you can use 'start' script with the similar npm command as follows:
 * npm run start
 *
 * Do check the package.json to install all the dependencies. There are certain dependencies not used, but could be used in future for validation purposes, if you want to extend the project
 *
 * After you run your app, you can run the following url's:
 *
 * localhost:5000/ --- Prints Hello World
 *
 * localhost:5000/route/test --- This will call the microservice example in Routes folder
 *
 * localhost:5000/mqtt/test --- This will call the publisherMain.js to publish to MQTT server
 *
 * The subscriber model is not created yet. can be done from the code mentioned in mqttClient.js
 * We are using the subscriber on raspberry pi itself which is a small python script
 */

const mongoose = require("mongoose");
const express = require("express");
const bodyparser = require("body-parser"); //to parse request body

//calling the routes
const microservice = require("./Routes/services");
const mqtt = require("./MQTT/publisherMain");

const app = express();

//body-parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//Main Page
app.get("/", (req, res) => res.send("Hello World"));

app.use("/route", microservice);

app.use("/mqtt", mqtt);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Serve running at port ${port}`));
