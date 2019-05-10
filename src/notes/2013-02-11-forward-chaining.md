---
layout: post
title: Forward Chaining
---

An inference method in first-order logic which begins with the available data and uses the rules of the system to infer more data until the goal is found.

Example:

$$
\text{Croaks}(x) \wedge \text{EatFlies}(x) \Rightarrow \text{Frog}(x)\\
\text{Chirps}(x) \wedge \text{Sings}(x) \Rightarrow \text{Canary}(x)\\
\text{Frog}(x) \Rightarrow \text{Green}(x) \\
\text{Canary}(x) \Rightarrow \text{Yellow}(x) \\
\text{Croaks}(\text{Fritz})\\
\text{EatsFlies}(\text{Fritz})\\
$$

[figure]
