---
layout: post
title: Decision Tree Learning
---

A method of learning which involves creating a tree of decision nodes based around attribute values.

Algorithm:

Takes *examples*, *attributes*, and *parent examples*

1. If no more *examples*, return the majority decision from the *parent examples*
2. If all *examples* classify the same, return the classification
3. If no more *attributes*, return the majority decision of the *examples*
4. Otherwise:
    1. Pick the most "important" *attribute
    2. Create a new tree rooted with the *attribute*
    3. Partition the *examples* by *attribute* value
    4. Create subtrees for each *attribute* value using recursion
    5. Return the tree
