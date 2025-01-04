---
title: Sensor fusion visualization
date: 2022-05-23
description: Implementation of sensor fusion algorithm on IMU sensor from an Android device.
feature_img: img_name
grid_num: 9
---
{% set img_path =  img_src_path + '/' + title | slugify %}

Sensor fusion algorithms (SFAs) have painted this world around us. One of it's most important application is in estimating attitude(/orientation) of a body through an inertial measurement unit (IMU). An IMU generally consists of an accelerometer, gyroscope, and a magnetometer, all mounted on a single board. Output from every onboard sensor is subjected to bias and noise. One might argue that we could use a filter to remove noise. But, it should also be noted that filters attenuate noise, they do not eliminate it. There are a number of algorithms which can be used to find the best possible estimate of an orientation using an IMU. The best way to learn about them is by implementing them. The implementation calls for two things:

<ul class="list-disc list-inside">
    <li> Need of a sensor   </li>
    <li> A way to visualize the output and compare SFAs  </li>
</ul>

This project's aim is to fulfill the above implementation requirements.

<h2 class="text-2xl">How does it work?</h2>

An Android application is developed which transmits the output from the device's inbuilt accelerometer, gyroscope, and magnetometer (when needed). The data is transmitted as a string with comma separated values, wirelessly. Magnetometer values may or may not be transmitted based on user's choice. The raw data from accelerometer, gyroscope, and magnetometer has SI units as m/s^2, degrees or radians per second (user's choice) and micro-Tesla respectively.

<img src="{{img_path}}/app1.png" alt="android app ss" class="float-center  m-4 w-1/4  h-1/5">


A python-based application that runs on a PC is also developed. It acts as a server to which the client Android application transmits the data. Based on the orientation of the smartphone, a 3-D cube, rendered using PyOpenGL on a PyGame window, mimics the motion based on the fusion algorithm developed by the user.

<h2 class="text-2xl">Demo</h2>

<img src="{{img_path}}/demo.gif" alt="demo gif" class="float-center m-4  h-auto">

<h2 class="text-2xl">Grab the code</h2>

<ul class="list-disc list-inside">
    <li> Android app - <a href="https://github.com/meetm473/AndyIMU">AndyIMU</a>  </li>
    <li> Python app - <a href="https://github.com/meetm473/Cube-Visualization">Cube-Visualization</a>  </li>
</ul>
