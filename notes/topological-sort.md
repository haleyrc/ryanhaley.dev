---
author: "Ryan Haley"
date: "2013-02-06"
title: Topological Sort
---

\$$\Theta(V + E)\$$

A method of sorting the vertices of a directed acyclic graph (DAG) such that if an edge from $$u$$ to $$v$$ exists in the DAG, $$u$$ comes before $$v$$ in the sorted list.

Represents a "temporal" sorting so that vertices which "depend" on the values of other vertices are encountered after their dependencies.

Algorithm
: Perform a depth-first search with discovery and finishing times
: When a vertex "finishes", put on the front of the sorted list
