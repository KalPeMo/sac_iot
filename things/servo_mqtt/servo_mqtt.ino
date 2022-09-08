/***************************************************
  This is an example sketch for our optical Fingerprint sensor

  Designed specifically to work with the Adafruit BMP085 Breakout
  ----> http://www.adafruit.com/products/751

  These displays use TTL Serial to communicate, 2 pins are required to
  interface
  Adafruit invests time and resources providing this open source code,
  please support Adafruit and open-source hardware by purchasing
  products from Adafruit!

  Written by Limor Fried/Ladyada for Adafruit Industries.
  BSD license, all text above must be included in any redistribution
 ****************************************************/

//Library for Wifi connection (included with board info)
#include <WiFi.h>
// Library for MQTT connection (by Nick O'Leary)
#include <PubSubClient.h>


#include "config.h"
#include "mqtt.hpp"
#include "wifi_utils.hpp"
#include "mqtt_utils.hpp"

#include <ESP32Servo.h>
Servo myservo;  // create servo object to control a servo
// 16 servo objects can be created on the ESP32
 
int pos = 0;    // variable to store the servo position
// Recommended PWM GPIO pins on the ESP32 include 2,4,12-19,21-23,25-27,32-33 
int servoPin = 13;

bool actualOpen = false;
bool isOpen = false;
bool incoming = false;

int unknowncount = 0;

void setup()
{ 
  Serial.begin(9600);
  myservo.write(0);
  ConnectWiFi_STA(false);
  InitMqtt();
  ESP32PWM::allocateTimer(0);
  ESP32PWM::allocateTimer(1);
  ESP32PWM::allocateTimer(2);
  ESP32PWM::allocateTimer(3);
  myservo.setPeriodHertz(50);    // standard 50 hz servo
  myservo.attach(servoPin, 500, 2400); // attaches the servo on pin 18 to the servo object
  // using default min/max of 1000us and 2000us
  // different servos may require different min/max settings
  // for an accurate 0 to 180 sweep
}

void loop()                     // run over and over again
{
  HandleMqtt();
  if(incoming){
    if( isOpen && isOpen != actualOpen ){
        for (pos = 0; pos <= 180; pos += 1) { // goes from 0 degrees to 180 degrees
          // in steps of 1 degree
          myservo.write(pos);    // tell servo to go to position in variable 'pos'
          delay(15);             // waits 15ms for the servo to reach the position
      }
      Serial.print("1");
      actualOpen = isOpen;
      incoming = false;
    }else if(!isOpen && isOpen != actualOpen){
      for (pos = 180; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees
        myservo.write(pos);    // tell servo to go to position in variable 'pos'
        delay(15);             // waits 15ms for the servo to reach the position
       } 
       actualOpen = isOpen;
       Serial.print("0");
       incoming = false;
    }
  }
  
  delay(50);            //don't ned to run this at full speed.
}
