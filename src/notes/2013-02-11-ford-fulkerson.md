---
layout: post
title: Ford-Fulkerson Method
---

\$$ O(E\vert f^*\vert )\$$

Algorithm to find maximum flow in a network by repeated augmentation of paths in a residual network until no more augmenting paths exist.

Augmentation consists of increasing flow along a given path from source to a target (augmenting path) by a specified amount; in this case, the minimum unused capacity for any edge in the path.

[figure]

Example:
: [figure]
: [figure]
: No more augmenting paths so $$\vert f\vert = 23$$ (flow into sink).

Version used in example always picks shortest available augmenting path (Edmonds-Karp).
