---
layout: post
title: Unification
---

A method in first order logic that uses substitutions to make two sentences appear identical.

Algorithm:

1. Take two variables $$x$$ and $$y$$ and $$\theta$$, the substitution so far
1. If $$\theta$$ is failure, return failure
1. If $$x=y$$, then we have a working substitution $$\theta$$ so return it
1. If $$x$$ is a variable, return the result of $$\text{UNIFY-VAR}(x,y,\theta)$$
1. If $$y$$ is a variable, return the result of $$\text{UNIFY-VAR}(y,x,\theta)$$
1. If $$x$$ and $$y$$ are compounds, unify the arguments of both with the unification of the operators
1. If $$x$$ and $$y$$ are lists, unify the first elements, then unify the results with the rest of the lists
1. Otherwise return failure


UNIFY-VAR Algorithm:

1. If $$\{\text{var}/\text{val}\}$$ is in the current substitution, unify $$\text{val}$$ and $$x$$
1. If $$\{x/\text{val}\}$$ is in the current substitution, unify $$\text{var}$$ and $$\text{val}$$
1. If $$\text{var}$$ occurs in $$x$$, return failure
1. Otherwise add $$\{\text{var}/x\}$$ to $$\theta$$ and return
