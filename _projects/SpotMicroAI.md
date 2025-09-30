---
layout: page
title: SpotMicroAI:Learning-based gait modulation
description: Evaluationg sim-to-real transfer of simulation RL agents trained for gait modulations on a real world robot dog (Jake). Jake is build via 3D printing (personnally and with external help) and hobby electronics. 
img: assets/img/JakeSide_contrast.jpg
importance: 2
category: work
---

<figure id="myfig">
<figure id="mysubfig3" class=subfigure style="display: inline-block; width: 65%">
<img src="JakeRealPhoto_darkCrop.jpg" />
</figure>
<!-- <figcaption><b>Figure 1</b>IMU results of the same movement in simulation and on the real robot. In red are the results of the real robot and in blue are the results of the simulation. </figcaption> -->
</figure>

# Abstract
This project builds upon [D<sup>2</sup>-GMBC](https://sites.google.com/view/drgmbc) and researches the importance of Reinforcement Learning (RL) algorithm complexity to the sim-to-real gap of gait modulation methods for locomotion learning. Previous work in learning-based locomotion, has shown that more complex RL algorithms can increase robustness. At the same time, other works found that reducing the complexity of the model by reducing the observation space also decreases the sim-to-real gap. This project inspects the influence of the complexity of RL algorithms on the sim-to-real gap. To achieve this, the Soft Actor-Critic algorithm from [Haarnoja et al., 2018a](https://arxiv.org/abs/1812.11103) is applied to model the framework of D<sup>2</sup>-GMBC, and compared against ARS. We pretrain both algorithms in simulation and perform two evaluations on the real robot.

For more information see the report or GitHub repository:

<div class = "twobutton">
<button type="submit" onclick="window.open('Spotmicroai_report_LeonEshuijs.pdf')" class="button2">Report.</button>
<a href="https://github.com/watermeleon/spot_micro">
    <button  class="button2">GitHub repo</button>
</a>
</div>


# Experiment 1: simulation training
From the learning curves in Figure 1 we see that although the starting reward of SAC is much lower, it learns much faster than ARS. This is in line with our expectations since ARS only updates its policy once per episode and SAC after each episode step after the replay buffer is full enough. However, we see that ARS achieves a much higher reward than SAC and that the reward of ARS always increases over time. Both this non-decreasing reward and the much higher reward of ARS training are likely a result of the multiple rollouts, since ARS performs multiple training episodes in parallel.

<figure id="myfig">
<figure id="mysubfig1" class=subfigure style="display: inline-block; width: 45%">
<img src="SAC_training.png" /><figcaption class=subfigcaption>(a) SAC</figcaption>
</figure>
<figure id="mysubfig2" class=subfigure style="display: inline-block; width: 45%">
<img src="ARS_training.png" /><figcaption class=subfigcaption>(b) ARS </figcaption>
</figure>
<figcaption><strong>Figure 1</strong>  Training results in simulation</figcaption>
</figure>

Before the quality of the RL agents on the real robot can be inspected we first compare the IMU data between the simulation and the real robot. To achieve this comparison, we use IK to make the robot apply a roll in both directions followed by a pitch in both directions. In Figure 2 three of the eight measurements are displayed. As seen from the Figures, the roll and pitch measurements are similar to those in the simulation. The angular twist also follows the same values as the simulation, but already contains a lot more noise, especially in the z-direction. 

<figure id="myfig">
<figure id="mysubfig1" class=subfigure style="display: inline-block; width: 31%">
<img src="IMU_res/roll.png" /><figcaption class=subfigcaption>(a) Roll</figcaption>
</figure>
<figure id="mysubfig2" class=subfigure style="display: inline-block; width: 31%">
<img src="IMU_res/pitch.png" /><figcaption class=subfigcaption>(b)Pitch</figcaption>
</figure>
<figure id="mysubfig3" class=subfigure style="display: inline-block; width: 25%">
<img src="IMU_res/angular_twist_x.png" /><figcaption class=subfigcaption>(c) Angular twist: x-direction </figcaption>
</figure>
<figcaption><b>Figure 2</b>IMU results of the same movement in simulation and on the real robot. In red are the results of the real robot and in blue are the results of the simulation. </figcaption>
</figure>


# Experiment 2: traversal speed
From the table below we notice that neither of the agents was able to improve the forward walking speed above that of the baseline. When looking at the standard deviation we do note that the ARS agent has a more predictable walking speed, as indicated by the low standard deviation.
The SAC agent is significantly slower than the other two and has an average walking speed of 21 seconds per meter compared to the 15 seconds per meter of the other two models. 
However, the walking speed was only one part of the reward signal, so to evaluate the walking stability we need to inspect the quality of the walk itself.

<table class="styled-table">
    <thead>
    <tr>
        <div class="toptext">
        <th></th>
        <th>Mean</th>
        <th>Standard deviation</th>
        <th>Failed Runs</th>
        </div>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Baseline</td>
        <td>15.20</td>
        <td>2.56</td>
        <td>0</td>
    </tr>
    <tr>
        <td>ARS</td>
        <td>15.33</td>
        <td>0.94</td>
        <td>1</td>
    </tr>
    <tr>
        <td>SAC</td>
        <td>21.22</td>
        <td>1.47</td>
        <td>1</td>
    </tr>
    </tbody>
</table>



# Experiment 3: gait analysis
The ARS video shows adaptive behavior when the robot threatens to fall backward or forward. However, in the video it is also visible that the agent sometimes overcompensates, causing the body to swing from left to right or from front to back. Therefore we hypothesize that the reduced traversal time likely arises from the falling prevention behavior.


The SAC agent displays even more complex falling prevention behavior. In the video, this is visible when the roll or pitch becomes too high, causing the agent to stand still for a short term. Thus the agent can not only modify one or two legs based on the body angles but when the IMU values diverge significantly enough, the agent even seems to halt all movement. However, from the start of the SAC clip, we see this falling prevention can hinder the gait significantly since it has troubles with starting the gait. Yet, after the agent has achieved a stable gait, the SAC agent demonstrates significant adaptive behavior.



<!-- <div class="sacgif">
<img src="sac.gif" alt="This is an animated gif image, but it does not move"/>
<img src="ARS.gif" alt="This is an animated gif image, but it does not move"/>
</div> -->

<figure id="myfig">
<figure id="mysubfig1" class=subfigure style="display: inline-block; width: 45%">
<img src="sac.gif" /><figcaption class=subfigcaption>(a) SAC</figcaption>
</figure>
<figure id="mysubfig2" class=subfigure style="display: inline-block; width: 45%">
<img src="ARS.gif" /><figcaption class=subfigcaption>(b) ARS </figcaption>
</figure>
<figcaption><strong>Figure 1</strong>  Real world gait modulation using the two RL agents</figcaption>
</figure>

For the full video's see link below;
<div class ="ytvid">
 <iframe width="520" height="315"
src="https://www.youtube.com/embed/Ji8rXjD60mU">
</iframe> 
</div>