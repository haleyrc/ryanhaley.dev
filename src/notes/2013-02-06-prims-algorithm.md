---
layout: post
title: Prim's Algorithm
---

\$$O(E\lg V)\$$

$$O(E+V\lg V)$$ if Fibonacci heap used

Algorithm to create an MST by growing a single tree from an arbitrary root until all vertices in the graph are also in the tree.

At each step, add the edge with the lowest cost which is incident on any vertex currently in the tree, as long as it doesn't form a cycle.

We store edges in a priority-queue for fast minimum finding.

Example:
: [figure]
: [figure]
: [figure]
: [figure]
: [figure]
: [figure]
: [figure]

Final MST (cost 11):
: [figure]
