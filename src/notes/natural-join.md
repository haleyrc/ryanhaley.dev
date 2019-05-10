---
author: "Ryan Haley"
date: "2013-02-17"
title: Natural Join
---

A method of combining two relations such that the attributes of each relation is present in the resulting relation and attributes which are present in both relations are equal.

Example:

If relation $$R$$ contains attributes $$A_1,A_2,A_3$$ and $$S$$ contains attributes $$A_2,A_3,A_4$$, then:

$$R \bowtie S$$

contains rows with attributes $$A_1,A_2,A_3,A_4,A_5$$ where $$A_2$$ and $$A_3$$ were equal in the relations $$R$$ and $$S$$.
