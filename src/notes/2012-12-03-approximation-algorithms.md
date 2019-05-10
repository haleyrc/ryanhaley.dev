---
layout: post
title: Approximation Algorithms
---

Methods of approximating answers to NP-complete problems which are of interest in times which are practical. ("good enough")

The algorithm is a $$\rho(n)$$-approximation if the cost of the good-enough solution is within a factor $$\rho(n)$$ of the cost of the optimal solution.

Example: Vertex Cover
: \$$O(V+E)\$$
: Randomly choose an edge
: Add the end points to the cover list
: Remove edges incident on those vertices


Example: Travelling Salesman
: \$$\Theta(V^2)\$$
: Randomly choose a root
: Use Prim's to get the MST
: Preorder (PLR) the MST to get the cycle


Example: Set Covering
: \$$O(\vert X\vert\vert F\vert\times\text{min}(\vert X\vert,\vert F\vert))\$$
: $$X$$ is the points, $$F$$ are the sets
: Choose a set that covers the maximum number of uncovered points
: Add it to the collection
: Remove the newly covered points from the uncovered set
: Repeat until all points covered


Example: Subset Sums
: \$$O(n^2)\$$
: Start with a list $$\left<0\right>$$
: For each value in the set S
: * Add the value to each value in the list $$L$$ and append the sum to $$L$$, removing duplicates
: * Trim values which are "close" according to the definition of close as within $$\epsilon/2n$$ of any other value
: * Remove any items bigger than the target
: Return the largest value
