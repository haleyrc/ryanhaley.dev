---
layout: post
title: Bellman-Ford Algorithm
---

\$$ O(VE) \$$

Algorithm to find single-source shortest paths, as long as there is no negative weight cycle reachable from the source, in which case it returns *FALSE*.

Algorithm
: Initialize source distance to 0 and all others to $$\infty$$
: Set parent pointers to *NULL*
: Relax each edge once for each vertex in $$G$$ less 1
: If any vertex distance is greater than its parent's distance plus the edge weight between them, a negative weight cycle exists
: Otherwise return the parents and distances found
