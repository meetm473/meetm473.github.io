---
title: Simple Mars Rover
date: 2020-07-20
description: A rocker-bogie mechanism based rover model simulated in Gazebo and teleoperated using ROS.
feature_img: img_name
grid_num: 2
---
{% set img_path =  img_src_path + '/' + title | slugify %}

I have built this rover to experiment with different things in simulation in the future. The Gazebo world is designed to match the Martian atmospheric conditions as close as possible. I have referred to [**this**](https://grabcad.com/library/nasa-designed-rocker-bogie-rover-1) model from GrabCAD for modeling the bot.

<h2 class="text-2xl">Drawings</h2>

<div class="grid grid-cols-2 gap-4">

<img src="{{img_path}}/base.png" alt="Rover-base drawing" class="float-center m-4  h-auto">

<img src="{{img_path}}/spacer.png" alt="rover-spacer drawing" class="float-center m-4  h-auto">

<img src="{{img_path}}/rockera.png" alt="rover leg-1 drawing" class="float-center m-4  h-auto">

<img src="{{img_path}}/rockerb.png" alt="rover leg-2 drawing" class="float-center m-4  h-auto">

</div>

<h2 class="text-2xl">Model</h2>

<img src="{{img_path}}/rover_sw.png" alt="model views" class="float-center m-4 w-1/2.5 h-auto">

You can download the SolidWorks part files and the assembly of this robot from [here](https://github.com/meetm473/rover/tree/master/sw-files).

<h2 class="text-2xl">Demo</h2>

https://youtu.be/kVbvIy9HTEk 

<h2 class="text-2xl">Grab the code</h2>

<ul class="list-disc list-inside">
    <li> <a href="https://github.com/meetm473/rover">Visualization repository</a>  </li>
    <li> <a href="https://github.com/meetm473/rover_control">Control repository</a>  </li>
</ul>
