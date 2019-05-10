---
layout: post
title: NP-Completeness
---

A method of categorizing problems by their tractibility (can we solve them "quickly") and verifiability (if we have a possible solution, can we check it "quickly").

Quickly in this context is means polynomial time.

Applies only to decision problems (Yes/No), but if we can transform an optimization problem into a decision in polynomial time, that's fine too. This is called _reduction_.

Use reduction in reverse to prove "hardness".

1. **P** -- We can solve it "quickly"
2. **NP** -- We can verify it "quickly"
3. **NP-hard** -- At least as hard as any other problem in NP
4. **NP-complete** -- NP-hard and in NP

Debate over whether P=NP. So far, probably not.

[figure]
