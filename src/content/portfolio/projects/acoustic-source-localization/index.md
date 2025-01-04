---
title: Acoustic Source Localization
date: 2021-01-12
description: Project on developing a simulation of source localization using passive SONAR.
feature_img: img_name
grid_num: 5
---
{% set img_path =  img_src_path + '/' + title | slugify %}


<h2 class="text-2xl mb-2">Problem Statement</h2>

With the proliferation of marine vessels for trade and military applications, the safety of territorial waters poses new challenges to the nation’s navy. Tracking foreign vessels without being exposed and alerting them is a critical challenge. Although active SONAR techniques exist which help in monitoring the surroundings, it has a major drawback of exposing the tracker to the tracked. Passive SONAR technique is employed to achieve the objective of stealth tracking. We wish to explore how this technology works, understand the limitations and build a better design in the future.

<h2 class="text-2xl mb-2">Objective</h2>

Our objective is to build a simulation tool to test acoustic source localization algorithms in terrestrial and underwater environments. Two algorithms are described in the project which locate an audio source. One of the algorithms works in 2-D while the other is built for 3-D. The results of the algorithms are compared with the actual values and the efficiency and limitation of the algorithms are presented. The simulation tool built as part of this project can be used during the design phase of a passive SONAR system.

<h2 class="text-2xl mb-2">Overview</h2>

The following presentation summarizes the work done and the findings obtained as a part of this project. The source code for the project can be found on [**Github**](https://github.com/vish897/Acoustic-source-localization).

<div class="w-1/2 h-1/2 max-w-full max-h-full mx-auto flex justify-center items-center">
  {% pdfembed img_path + '/acoustic-source-localization-ppt-team-spectrum.pdf', 'SIZED_CONTAINER' %}
</div>


