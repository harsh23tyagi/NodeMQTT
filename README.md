# Node Application with MQTT protocol connected to a Raspberry Pi

~ Created by @HarshTyagi
~ Two segments to the application:
- Node Application
- Raspberry Pi: mqtt.py file in the above package should be removed from node application and put in RPi

~ Tech stack used:
- Node.js (with express)
- Python (for Creating subscriber in RPi)
- Mosquitto broker and clients
- Postman (To make Microservice requests, since we dont have a frontend to the node app)

## OBJECTIVE: To control the LED on Raspberry PI using Node application via URL/Microservices

### Read all the comments in the node application files and mqtt.py files for dependency setup and running the code

## Node Application

- Using express framework to create a node application
- You need to set up mosquitto broker and client on your laptop
- I am using VS Code editor and the additional dependencies are mentioned in package.json
- The main file is server.js which starts the code
- Running the mosquitto broker on laptop and using the IP address on a local network to connect the RPi to it

#### After installing mosquitto broker, you can check it in the terminal:

##### Go to ifconfig or ipconfig and get the IP address of your machine- using 192.168.0.24 for instance

Create a subscriber in one terminal:
- mosquitto_sub -h 192.168.0.24 -t "mqtt_topic"

Create a publisher in another terminal:
- mosquitto_sub -h 192.168.0.24 -t "mqtt_topic" -m "hello world"

You should see the output on the subscriber terminal:

##### PS: In windows, you might have to work on a derived terminal for mosquitto, which is on their website.MAC and linux can directly connect using the above commands

## Raspberry Pi Setup

### The 'mqtt.py' file in the above package should be removed from the node application and put in the RPi

- I am using Raspberry Pi 3
- The basic setup is: using the breadboard i have connected one LED with a resistor to pin 4(BCM notation) of RPi
- The Raspberry Pi LED setup can be followed from this video https://www.youtube.com/watch?v=OEilz2Cq_xY
- Install mosquitto broker and clients on Raspberry Pi
- Install paho for python 
- All the steps are mentioned clearly in comments in the file mqtt.py 
- remove mqtt.py from the node application and put it in the raspberry pi and run it

### Change the broker_address as your laptop's IP address in mqtt.py

## mqtt.py Working:
- if payload = 1 for topic 'mqtt/demo': the LED switches on
- if payload = 0 for topic 'mqtt/demo': the LED switches off
- if payload is anything else for topic 'mqtt/demo': the python code quits
# Running the App

The node module doesn't have a front end yet:

- You can use Postman for making a url request to publish data to broker which will control the LED on Raspberry Pi
eg. a post request:
https://192.168.0.24:5000/mqtt/test

- with json body to switch on:

      {
      topic: 'mqtt/demo',
      payload: 1
      }

- with json body to switch off:

      {
      topic: 'mqtt/demo',
      payload: 0
      }

