---
author: "Ryan Haley"
date: "2013-02-17"
title: Set Division
---

A set operation which returns a result relation consists of rows for which attributes in the first relation are present with all attributes in the second. The operation returns only the attributes from the first relation less those in the second.

Example:

If $$R$$ contains attributes $$A_1$$ and $$A_2$$ and S contains attribute $$B_1$$ with values similar to those in $$A_2$$, then:

$$R \div S$$

returns a relation with attribute $$A_1$$ with rows where $$A_1$$ is present in combination with all values in $$B_1$$ in the original relation $$R$$.
