---
author: "Ryan Haley"
date: "2013-02-17"
title: Deletion Anomaly
---

A deletion anomaly occurs in a data scheme when information is lost when all references to an entity are removed without the object information being stored separately.

When designing a database, deletion anomalies can be avoided by storing entity information in a separate table from references to the entity, thus ensuring that the data about the object remains even when no other relation refers to it.
