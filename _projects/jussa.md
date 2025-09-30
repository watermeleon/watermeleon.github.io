---
layout: page
title: 'But what is your honest answer? Aiding LLM-judges with honest alternatives using steering vectors'
description: We use steering vectors to obtain alternative, honest responses, helping external LLM-judges detect subtle instances of dishonest or manipulative behavior.
img: assets/img/jussa/auroc_models.png
importance: 1
# redirect: https://arxiv.org/abs/2505.17760
category: work
---

# Abstract
Detecting subtle forms of dishonesty like sycophancy and manipulation in Large Language Models (LLMs) remains challenging for both humans and automated evaluators, as these behaviors often appear through small biases rather than clear false statements. We introduce Judge Using Safety-Steered Alternatives (JUSSA), a novel framework that employs steering vectors not to improve model behavior directly, but to enhance LLM judges' evaluation capabilities. JUSSA applies steering vectors during inference to generate more honest alternatives, providing judges with contrastive examples that make subtle dishonest patterns easier to detect. While existing evaluation methods rely on black-box evaluation, JUSSA uses model internals to create targeted comparisons from single examples. We evaluate our method on sycophancy detection and introduce a new manipulation dataset covering multiple types of manipulation. Our results demonstrate that JUSSA effectively improves detection accuracy over single-response evaluation in various cases. Analysis across judge models reveals that JUSSA helps weaker judges on easier dishonesty detection tasks, and stronger judges on harder tasks. Layer-wise experiments show how dishonest prompts cause representations to diverge from honest ones in middle layers, revealing where steering interventions are most effective for generating contrastive examples. By demonstrating that steering vectors can enhance safety evaluation rather than just modify behavior, our work opens new directions for scalable model auditing as systems become increasingly sophisticated.

For more information see:
- This [LessWrong post](https://www.lesswrong.com/posts/JsyAdviSYCqgMvvmG/steering-vectors-can-help-llm-judges-detect-subtle) (about older version of the paper)
- The paper on [ArXiv](https://arxiv.org/abs/2505.17760)
- The [github repo](https://github.com/watermeleon/judge_with_steered_response)
