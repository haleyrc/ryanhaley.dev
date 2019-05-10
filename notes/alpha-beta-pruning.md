---
author: "Ryan Haley"
date: "2013-02-11"
title: Alpha-Beta Pruning
---

A method of removing nodes produced in minimax which can not produce moves better than already examined nodes.

Example:

[figure]

We don't need to consider the rest of the middle subtree because we can't do better than $$2$$, which is worse than the currest best of $$3$$ from the left subtree.
