# ~ Created by @HarshTyagi
# Put this python file on raspberry pi and run it after your node application is set up
# Install mosquitto client and mosquitto on raspberry pi using the command
# sudo apt-get update
# sudo apt-get install mosquitto mosquitto-clients

# the above commands will install mosquitto and client on raspberry pi

#install paho on rPi for MQTT with python
# use the following command:
# pip install paho-mqtt --user

import paho.mqtt.client as mqtt
import time
import RPi.GPIO as GPIO

broker_address = "192.168.0.24"
client = mqtt.Client("P1")
client.connect(broker_address)
def on_message(client, userdata, message):
    #print("message Received", str(message.payload.decode("utf-8")))
    #print("Topic: ", message.topic)
    #print("qos: ", message.qos)
    #print("message retain flag: ", message.retain)
    payload = 0
    try:
        payload = int(message.payload.decode('utf-8'))
        print(payload)
        ledCheck(payload)
    except err:
        print('invalid payload: ', err)

def ledCheck(payload):
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(4,GPIO.OUT)
    if payload == 1:
        GPIO.output(4,GPIO.HIGH)
        time.sleep(3)
        print("High pulse")



    elif payload == 0:
        GPIO.output(4,GPIO.LOW)
        print("Low pulse")
    else:
        client.loop_stop()
        GPIO.cleanup()
        print("Finished")
        quit()
    


client.publish("mqtt/demo", "Python ready")




client.subscribe("mqtt/demo",qos = 0)
client.on_message = on_message
client.loop_start()

#time.sleep(12)
#client.loop_stop()
                                                         
#print('Finished')
