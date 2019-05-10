---
layout: post
title: Dijkstra's Algorithm
---

$$O(V^2)$$ if an array is used

$$O(E\lg V)$$ if a bin min is used

$$O(V\lg V + E)$$ if a Fibonacci heap is used

Algorithm to find single-source shortest paths in a DAG with only positive edge weights.

Algorithm
: Initialize distances and parent pointers
: Until all vertices add
: * Find the vertex with minimum distance
: * Relax each edge incident on that vertex
