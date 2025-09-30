---
layout: page
title: 'Short-circuiting Shortcuts: Mechanistic Investigation of Shortcuts in Text Classification'
description: Mechanistic investigation of shortcuts in text classification with LLMs identifies attention heads that make premature predictions from shortcuts.calssification via reward scaling
img: assets/img/sc/sc_schem.png
importance: 1
redirect: https://aclanthology.org/2025.conll-1.8/
category: work
---

# Abstract
Reliance on spurious correlations (shortcuts) has been shown to underlie many of the successes of language models. Previous work focused on identifying the input elements that impact prediction. We investigate how shortcuts are actually processed within the model’s decision-making mechanism.We use actor names in movie reviews as controllable shortcuts with known impact on the outcome. We use mechanistic interpretability methods and identify specific attention heads that focus on shortcuts. These heads gear the model towards a label before processing the complete input, effectively making premature decisions that bypass contextual analysis. Based on these findings, we introduce Head-based Token Attribution (HTA), which traces intermediate decisions back to input tokens. We show that HTA is effective in detecting shortcuts in LLMs and enables targeted mitigation by selectively deactivating shortcut-related attention heads.