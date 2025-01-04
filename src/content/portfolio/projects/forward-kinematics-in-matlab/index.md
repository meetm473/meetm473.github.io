---
title: Forward Kinematics In MATLAB
date: 2020-08-01
description: A simple tool to visualize a bot using DH-parameters and observe the path of the end effector.
feature_img: img_name
grid_num: 5
---
{% set img_path =  img_src_path + '/' + title | slugify %}

Every rookie _robotics-enthusiast_ starts with forward position analysis of a serial manipulator. Forward kinematics has one of it's vital applications in simulation. What better way to learn it if not for simulating a manipulator from scratch!

I built this mini-simulation to understand forward kinematics in a better way. I learnt the theory from _**Introduction to Robotics, S.K. Saha**._ This book explains the concepts with very simple language and uses a software called _[RoboAnalyzer](http://www.roboanalyzer.com/)_ to visualize the concepts. The following GIF shows the output of my simulation in a MATLAB figure and simulation from the RoboAnalyzer:

<img src="{{img_path}}/rp.gif" alt="Comparing output from MATLAB simulation and RoboAnalyzer." class="float-center m-4  h-auto">


<h2 class="text-2xl mb-2">About the code</h2>

The code is pretty basic. First, you set the total number of links.

<div class="dark:bg-gray-100 bg-gray-800 p-4 rounded-lg">
<pre class="font-mono text-white dark:text-black">
%% DH Parameters and visualisation settings

numLinks = 2;
</pre>
</div>

Next, describe your manipulator with DH-parameters. The index corresponds to link number.

<div class="dark:bg-gray-100 bg-gray-800 p-4 rounded-lg">
<pre class="font-mono text-white dark:text-black">
%% Example set 1:

% Link 1 | Type: R
j_const_type(1) = 1;            % 1 -> corresponds to revolute joint type.
j_const(1) = 0;                 % b (in m)
jv_initial(1) = 0;              % theta(in deg)
jv_final(1) = 30;
a(1) = 0.2;                     % link length (in m)
alpha(1) = 45;                  % twist angle (in deg)
view_trajectory(1) = 0;         % set to '0' to NOT view the trajectory of end of the link
link_color(1) = 'g';            % color of the link

% Link 2 | Type: P
j_const_type(2) = 0;     % 0 -> corresponds to prismatic joint type.
j_const(2) = 0;          % theta (in deg)
jv_initial(2) = 0;       % b (in m)
jv_final(2) = 0.4;
a(2) = 0.2;              % link length (in m)
alpha(2) = 0;            % twist angle (in deg)
view_trajectory(2) = 1;  % set to '1' to view trajectory of end of the link
link_color(2) = 'r';
</pre>
</div>

Set the simulation parameters.

<div class="dark:bg-gray-100 bg-gray-800 p-4 rounded-lg">
<pre class="font-mono text-white dark:text-black">
%% Simulation parameters

numSteps = 60;           % number of steps to reach from initial to final
pause_time = 0.1;        % time interval between each step
</pre>
</div>


Done! I have added few example sets in the code. You may uncomment them to visualize different robots.

<h2 class="text-2xl mb-2">So the code isn't thaaat perfect</h2>

The code connects the beginning end _(#oxymoron)_ of a link connected to an R joint to the ending of the previous link. Now if the joint has an offset, i.e., _b_ is non-zero, then that offset is not visible in the plot. Therefore, the link length in such case might look a bit more elongated. If you find any other problem with code, let me know in the comments.

<h2 class="text-2xl mb-2">Grab the code</h2>

* [From MATLAB file exchange](https://in.mathworks.com/matlabcentral/fileexchange/78781-dh-parameter-visualization)
