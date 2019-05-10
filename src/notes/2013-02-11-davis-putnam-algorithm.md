---
layout: post
title: Davis-Putnam Algorithm
---

A backtracking algorithm for model-checking in propositional logic.

The algorithm proceeds by removing symbols iteratively and checking the model recursively.

Algorithm:
: If all clauses true, return true.
: If not, return false.
: If there are any pure symbols:
: * Return DPLL with the symbol replaced by its value
: If there are any unit clauses:
: * Return DPLL with the clause replaced by its value
: Get the first symbol:
: * Return either:
     - DPLL with the symbol set to true
     - DPLL with the symbol set to false
