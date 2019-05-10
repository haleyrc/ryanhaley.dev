---
layout: post
title: Master Method
---

A shortcut method for solving recurrences using three distinct cases.

Given $$T(n) = aT(\frac{n}{b}) + f(n)$$.

Case 1:
: If $$f(n) = O(n^{\log_{b} a-\epsilon})$$ for $$\epsilon > 0$$,
: \$$ \Rightarrow T(n) = \Theta(n^{\log_{b} a})\$$

Case 2:
: If $$f(n) = \Theta(n^{\log_{b} a})$$,
: \$$ \Rightarrow T(n) = \Theta(n^{\log_{b} a}\lg n) \$$

Case 3:
: If $$f(n) = \Omega(n^{\log_{b} a+\epsilon})$$ for $$\epsilon > 0$$
: and if $$af(\frac{n}{b} \leq cf(n)$$ for $$c < 1$$
: \$$ \Rightarrow T(n) = \Theta(f(n)) \$$
