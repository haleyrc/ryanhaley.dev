---
author: "Ryan Haley"
date: "2013-02-11"
title: And-Elimination
---

An inference rule which states that if a conjunction evaluates to true, then each conjoined sentence can be assumed to be true.

Written:

$$ \frac{\alpha \wedge \beta}{\alpha} \quad \left(\frac{\alpha \wedge \beta}{\beta} \text{ also would be true} \right) $$

Example:
: Assume $$(\text{Snow} \wedge \text{Cold})$$ is true.
: Snow is true.
: Cold is true.
: $$ \frac{(\text{Snow} \wedge \text{Cold})}{\text{Snow}}, \frac{(\text{Snow} \wedge \text{Cold})}{\text{Cold}} $$
