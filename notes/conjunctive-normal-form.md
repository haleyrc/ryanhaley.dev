---
author: "Ryan Haley"
date: "2013-02-11"
title: Conjunctive Normal Form
---

A form of logical clauses which consists only of a conjunction of separate clauses.

Any sentence of propositional logic can be converted to CNF.

How:

1. Eliminate $$\Leftrightarrow$$
: $$\alpha \Leftrightarrow \beta \rightarrow (\alpha \Rightarrow \beta) \wedge (\beta \Rightarrow \alpha)$$

2. Eliminate $$\Rightarrow$$
: $$\alpha \Rightarrow \beta \rightarrow \neg\alpha \vee \beta$$

3. Move $$\neg$$ inwards
: $$\neg(\neg\alpha) \rightarrow \alpha\\ \neg(\alpha \wedge \beta) \rightarrow (\neg\alpha \vee \neg\beta)\\ \neg(\alpha \vee \beta) \rightarrow (\neg\alpha \wedge \neg\beta)$$

4. Distribute $$\vee$$ over $$\wedge$$
: $$\alpha \vee (\beta \wedge \lambda) \rightarrow (\alpha \vee \beta) \wedge (\alpha \vee \lambda)$$
