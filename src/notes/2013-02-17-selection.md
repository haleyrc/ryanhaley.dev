---
layout: post
title: Selection
---

The selection operation returns rows in a relation which satisfies the selection criterion specified with duplicates removed. The returns rows satisfy the original schema and can be the input to another operation. This operation is represented by the $$\sigma$$ symbol.

Example:

$$\sigma_{\text{weight}>30}(\text{Dog})$$

returns rows from the Dog relation where the weight attribute is greater than thirty.
