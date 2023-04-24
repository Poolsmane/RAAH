# RAAH(An App which is used to provide pedestrain safety in flooded areas)
Category:- Smart Security : Emergency Response

It is a dedicated system to provide safety of pedestrian from potholes,manholes,construction areas,etc which are covered in floods and are not visible to the human eyes which are ultimately prone to accident and threat to human life.

We have made software as well as hardware approaches.

# Hardware:

The Arduino Uno is a popular microcontroller board that can be used for a wide variety of projects, including detecting and measuring the distance of potholes from a moving vehicle. One way to accomplish this is by using an ultrasonic sensor, which sends out sound waves and measures the time it takes for the waves to bounce back. By using this information, the distance between the sensor and the object can be calculated.

To use the Arduino Uno and ultrasonic sensor to detect potholes, you will need to attach the sensor to the vehicle in a way that allows it to point downwards towards the road surface. As the vehicle moves, the sensor will send out sound waves and measure the distance to the road surface. If the distance suddenly drops, it could indicate the presence of a pothole.

The data collected by the sensor can be transmitted to an app via Bluetooth or Wi-Fi. The app can then use this information to notify the driver of the pothole and mark the particular longitude and latitude of the pothole on a map API provided in the app. This information can be useful for other drivers as well, as they can be warned of the pothole and adjust their driving accordingly.

![image](https://user-images.githubusercontent.com/92935580/233885880-aad508b9-2b6f-4d74-a1f2-9d1c011210c2.png)


# Software:

This app, developed using Kotlin and Java, includes a login/logout page and uses sensor data to mark locations on a map within the app. The data is also saved into a database for real-time user access and future use by the Ministry of Road Transport and Highways (MoRTH). The database is visible to the government, allowing for improved road safety and more efficient road maintenance.

![image](https://user-images.githubusercontent.com/92935580/233886480-41850a24-f5c9-4dce-bbbc-a10d6bfd387c.png)
![image](https://user-images.githubusercontent.com/92935580/233886548-20d33c6b-2db1-4fbc-a597-50c5fed7ec00.png)
![image](https://user-images.githubusercontent.com/92935580/233886594-1e434b61-c027-45be-86ad-37bbfc7a6523.png)
![image](https://user-images.githubusercontent.com/92935580/233886646-4d09b0c4-335a-434f-a3e4-d6980ee1fa27.png)

In conclusion, the app based on Kotlin and Java is a useful tool for improving road safety and maintenance. By using sensor data to mark pothole locations on a map within the app, users can be alerted to potential hazards and the data can be used by MoRTH for further analysis. The inclusion of a login/logout page and database visibility to the government adds an additional layer of security and accountability to the app. Overall, this app has the potential to make a significant impact on road safety and efficiency.
