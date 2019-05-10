---
layout: post
title: Backward Chaining
---

An inference algorithm used in first-order logic which starts with a list of goals and works backwards, checking for rules to support the current hypothesis.

Example:

$$
\text{Croaks}(x) \wedge \text{EatsFlies}(x) \Rightarrow \text{Frog}(x)\\
\text{Chirps}(x) \wedge \text{Sings}(x) \Rightarrow \text{Canary}(x)\\
\text{Frog}(x) \Rightarrow \text{Green}(x)\\
\text{Canary}(x) \Rightarrow \text{Yellow}(x)
$$

[figure]

We bind variables the first time we encounter them and then use that binding throughout.
