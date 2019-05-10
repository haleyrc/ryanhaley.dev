---
layout: post
title: Resolution
---

An inference rule which takes a set of known clauses and produces the logical result of them in combination.

Clauses can be single units for unit resolution.

$$ \frac{l_1 \vee \cdots \vee l_k, m_1 \vee \cdots \vee m_n}{l_1 \vee \cdots \vee l_{i-1} \vee l_{i+1} \vee \cdots \vee l_k \vee m_1 \vee \cdots \vee m_{j-1} \vee m_{j+1} \vee \cdots \vee m_n} $$

with $$l_i$$ and $$m_j$$ complimentary (can't both be true).

This works because a clause and its complement can't both be true, so the phrase is always true.

Example:
: It's either: spring, summer, winter, or fall.
: It is not fall.

$$ \frac{\text{Spring} \vee \text{Summer} \vee \text{Winter} \vee \text{Fall}, \neg\text{Fall}}{\text{Spring} \vee \text{Summer} \vee \text{Winter}} $$

(...$$\text{Fall} \vee \neg\text{Fall}$$... is meaningless).
