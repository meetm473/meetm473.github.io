---
title: VIMAN
date: 2020-12-05
description: Developing a quadcopter simulator to implement 3 sensor-based Z-direction SLAM.
feature_img: img_name
grid_num: 1
---

{% set img_path =  img_src_path + '/' + title | slugify %}

<h2 class="text-2xl">Overview</h2>

<ul class="list-disc list-inside">
    <li> We have built a simulation environment for testing algorithm implementations on quadcopter in Gazebo.  </li>
    <li> Incorporated tele-operation and semi-autonomous functionality using altimeter, IMU, and camera.  </li>
    <li>Optimized Z-direction mapping using DBSCAN algorithm.</li>
</ul>

More information regarding the development process is documented in the [**website**](https://sites.google.com/view/project-viman/progress).

<h2 class="text-2xl">Few Snapshots of the Work Done</h2>

<img src="{{img_path}}/env.png" alt="env" class="float-center m-4  h-auto">

<h2 class="text-xl">Quadcopter hovering in the Gazebo world simulation environment over the ROS framework</h2>


<img src="{{img_path}}/open_sky_1.jpg" alt="open_sky_quad_copter" class="float-center m-4  h-auto">

<h2 class="text-xl">Quadcopter simulated in the Gazebo environment</h2>

<img src="{{img_path}}/motion_z_keyboard-1.gif" alt="demo gif" class="float-center m-4  h-auto">

<h2 class="text-xl">A simpler optimization algorithm is implemented to optimize the graph obtained: DBSCAN</h2>

<img src="{{img_path}}/unoptimized.png" alt="unoptimized" class="float-center m-4  h-auto">

<img src="{{img_path}}/optimized.png" alt="optimized" class="float-center m-4  h-auto">
