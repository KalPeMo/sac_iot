const char* MQTT_BROKER_ADRESS = "192.168.0.106";
const uint16_t MQTT_PORT = 1883;
const char* MQTT_CLIENT_NAME = "ESPClient_1";

// Topics
const char* DEVICE_TYPE = "Light";
const char* DEVICE_ID = "0";
#define RELAY 14

extern bool read_fp;

extern int light;


WiFiClient espClient;
PubSubClient mqttClient(espClient);

void SuscribeMqtt()
{
  Serial.print("subscribed");
  mqttClient.subscribe("voting/enable");
  mqttClient.subscribe("voting/alert");
}

String payload;
void PublisMqtt(unsigned int data)
{
   payload = "";
   payload = String(data);
   mqttClient.publish("voting/identify/fingerprint", (char*)payload.c_str());
}

void PublisMqttString(char* topic, char* msg)
{
   mqttClient.publish(topic, msg);
}

String content = "";
void OnMqttReceived(char* topic, byte* payload, unsigned int length) 
{
   Serial.print("Received on ");
   Serial.print(topic);
   Serial.print(": ");

   content = "";   
   for (size_t i = 0; i < length; i++) {
      content.concat((char)payload[i]);
   }
   Serial.print(content);
   Serial.println();
  if(strcmp(topic, "voting/enable")==0){
    if((char)payload[0] == '0') {
      read_fp=true;
   }
   else if ((char)payload[0] == '1') {
      read_fp=false;
   }  
  }
  if(strcmp(topic, "voting/alert")==0){
    if((char)payload[0] == '0') {
      light=1;
   }
   else if ((char)payload[0] == '1') {
      light=0;
   }  
  }

}
