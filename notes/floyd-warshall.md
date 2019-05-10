---
author: "Ryan Haley"
date: "2013-02-11"
title: Floyd-Warshall Algorithm
---

\$$ \Theta(V^3) \$$

Dynamic programming algorithm to compute all-pairs shortest paths by making use of the observation that if the shortest path between two vertices doesn't go through some vertex, then the path can be found by considering the imaginary graph with that vertex removed. Otherwise, the path is equal to th shortest path to the intermediate vertex plus the path from the intermediate vertex to the destination.

Uses two matrices at each of $$n$$ steps where $$n$$ is the number of rows in the weight matrix: the distance matrix and a parents matrix.

Case 1 (doesn't use vertex $$k$$):
: [Figure]

Case 2 ($$p$$ goes through $$k$$):
: [figure]
