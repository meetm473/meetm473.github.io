---
title: IMU Controlled Robotic Arm
date: 2020-08-03
description: Controlling a simulated 3 DOF robotic arm using IMU sensor from smartphone.
feature_img: img_name
grid_num: 8
---
{% set img_path =  img_src_path + '/' + title | slugify %}

_This project was a part of an online workshop on robotics, conducted during the CoVID-19 lock-down days._

<h2 class="text-2xl mb-2">Objective</h2>

To control a human-like arm using an inertial measurement unit (IMU).

<h2 class="text-2xl mb-2">Why would you want to do that?</h2>

CoVID-19 calls for remote operations. Certain procedures like medical surgeries are better performed with human hand. Technologies which track the motion of human arm and provide the feedback to the operator pave the way for building better equipment. This project aims to take a step towards understanding the technology.

<h2 class="text-2xl mb-2">The CAD</h2>

The design of the serial manipulator is a fairly simple one. It is not exactly anthropomorphic and has 3 degrees of freedom. Roll _(rotation about X axis)_, and pitch _(rotation about Y axis)_ rotation of the IMU is mapped to the universal joint (shoulder) while the yaw _(rotation about Z axis)_ is showcased in the motion of the revolute joint (body). The opening and closing of the gripper is possible due to a prismatic joint.


<img src="{{img_path}}/isometric.png" alt="Comparing output from MATLAB simulation and RoboAnalyzer." class="float-center m-4  h-auto">

Download the CAD model to build this robot from [**here**](https://github.com/meetm473/human_arm/tree/master/sw-files).

<h2 class="text-2xl mb-2">The Control</h2>

The software which was developed as a part of the _[sensor fusion visualization](https://cad2controlrobots.wordpress.com/portfolio/sensor-fusion-visualization/)_ project was used to control this robotic arm. The demonstration video showcases three control of this robotic arm in three ways:

<ul class="list-disc list-inside">
    <li>  Using keyboard control  </li>
    <li> IMU control - only android device  </li>
    <li> IMU control - android device attached to human arm  </li>
</ul>

<h2 class="text-2xl mb-2">Demo</h2>

https://youtu.be/uHyiQ96bHs0


<h2 class="text-2xl">Grab the code</h2>

<ul class="list-disc list-inside">
    <li> <a href="https://github.com/meetm473/human_arm">Github repository</a>  </li>
</ul>
