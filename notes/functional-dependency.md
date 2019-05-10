---
author: "Ryan Haley"
date: "2013-02-17"
title: Functional Dependency
---

In relational algebra, a functional dependency exists between attribute $$X$$ and attribute $$Y$$ if, given a value for $$X$$, the value for $$Y$$ can be determined via a simple lookup in any tuple which contains the correct value for $$X$$. This implies that each value of $$X$$ corresponds to exactly one value of $$Y$$.

A complete list of functional dependencies can be inferred using a number of primary operations:

* **Reflexivity** - $$Y \subset X \Rightarrow X \rightarrow Y$$
* **Augmentation** - $$X \rightarrow Y \Rightarrow XZ \rightarrow YZ$$
* **Transitivity** - $$X \rightarrow Y \quad \& \quad Y \rightarrow Z \Rightarrow X \rightarrow Z$$
* **Decomposition** - $$X \rightarrow YZ \Rightarrow X \rightarrow Y$$
* **Union** - $$X \rightarrow Y \quad \& \quad X \rightarrow Z \Rightarrow X \rightarrow YZ$$
* **Pseudotransitivity** - $$X \rightarrow Y \quad \& \quad WY \rightarrow Z \Rightarrow WX \rightarrow Z$$
