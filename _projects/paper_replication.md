---
layout: page
title: Paper Replication:Towards Visually Explaining Variational Autoencoders
description: 
img: assets/img/nuts.jpg
importance: 7
category: work
---

## Description
This report was submitted for the [ML reproducibility challange 2020](https://openreview.net/group?id=ML_Reproducibility_Challenge/2020). For the original paper and the full reproducibility report click one of the two buttons below:
<div class = "twobutton">
<a href="https://arxiv.org/abs/1911.07389">
    <button  class="button2">Original Paper</button>
</a>
<a href="https://openreview.net/forum?id=Lwb6qIpEW9-">
    <button  class="button2">Reproducibility report</button>
</a>
</div>
<hr>

# Reproducibility Summary

## Scope of Reproducibility

Using a modification of Grad-CAM, attention maps can be created for Variational Autoencoders, resulting in explainable generations. Using these attention maps, state-of-the-art anomaly detection and latent space disentanglement is reached.

## Methodology

We started the challenge using the author's code, but this only covered one experiment of the paper, namely anomaly detection for the MNIST dataset.  Therefore we added models, training and testing code for all other anomaly detection experiments, those on the UCSD-Ped1 and MVTec dataset, and also for the latent space disentanglement experiments. Some of these implementations were based on other existing repositories, whereas some were implemented completely by ourselves. We worked for four weeks full-time on reproducing the results with two GPUs available to use.


## Results
We were able to successfully generate attention maps using the method described by Liu et al. and could apply them to anomaly detection as well. For the MNIST experiments, this led to results that were similar to the paper. However, for the UCSD-Ped1 experiments, the author's explainable VAE model actually performed worse than our own baseline. Moreover, we were not able to support the author's claim that they achieve state-of-the-art on the MVTec dataset. Finally, for the latent space disentanglement, our found results were not as good as claimed by \citeauthor{liu2020towards}, but they still out-performed the set baseline, as was also claimed by the authors.


## What was easy

Running the initial implementation of the authors, since their code was relatively straightforward. We were able to generate attention maps and anomaly detections for the MNIST dataset using a Variational Autoencoder without too many difficulties. 

## What was difficult
The code of the authors covered only a small portion of the paper and extending this to the whole paper was very difficult, as the paper was not often very clear on the implementation details. Adding in certain metrics for evaluation turned out to be relatively hard as well.

## Communication with original authors
We contacted the authors by email, as provided in their paper and on Github, but were not answered. Another group within our course working on the same paper did get a response, that way we got some additional insights. 