---
layout: post
title: Strongly Connected Components
---

\$$ \Theta(V + E) \$$

Algorithm to decompose a graph into a partition where each subgraph is fully connected ($$u$$ can get to $$v$$ and vice-versa).

Useful so that another algorithm can run on each subgraph in parallel and then combine the results in some meaningful way.

Algorithm
: Run DFS on a graph keeping track of finishing times
: Transpose the graph (invert the connections)
: Run DFS on tranposed graph, considering vertices in finishing time order
: Output the vertices of each tree in the DFS as a separate strongly connected component

[figure]

[figure]

[figure]
