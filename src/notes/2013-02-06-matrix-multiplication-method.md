---
layout: post
title: Matrix Multiplication Method for All-Pairs Shortest Paths
---

\$$\Theta(n^3\lg n)\$$

Algorithm for computing shortest paths between all pairs of vertices in a DAG using repeated squaring of the weight matrix.

Instead of using the sum of terms in the $$\text{row}~x~\text{col}$$ calculation, take only the minimum value of $$\text{row}_i~x~\text{col}_i$$.

Algorithm
: Initialize $$L^{(m)}$$ as the weight matrix with $$m=1$$
: While $$m$$ less than $$\text{num}(\text{rows})-1$$:
: * Compute $$L^{(2m)}$$ as the matrix "product" of $$L^{(m)}$$ with itself
: Return the last matrix obtained
