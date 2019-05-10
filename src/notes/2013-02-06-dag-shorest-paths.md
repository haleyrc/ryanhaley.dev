---
layout: post
title: DAG Shortest Paths
---

\$$ \Theta(V+E) \$$

Algorithm to find shortest paths in a DAG using a topological sort of the vertices and iterative relaxation of edge weights.

Algorithm
: Topologically sort the vertices
: Initialize the distance and parent values
: For each vertex in order
: * Relax each edge incident on the vertex
