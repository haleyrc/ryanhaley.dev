---
author: "Ryan Haley"
date: "2013-02-11"
title: Heap
---

\$$ O(n\lg n) \$$

A data structure represented as a (nearly) complete binary tree, and which maintains one of two invariants. Either every node value is greater than its childrens' values (max-heap) or less than its childrens' (min-heap).

A max-heap is an efficient way of representing a priority-queue and a min-heap is useful for algorithms which perform EXTRACT-MIN.

Stored as an array with index relations:
[figure]

Maintain heap property by recursively swapping current value with the max (or min) of its children.

To return a sorted list frmo a max-heap (heapsort), swap the root with the last element, pop the last element into the sorted list, and reheapify from the root until heap is empty.
