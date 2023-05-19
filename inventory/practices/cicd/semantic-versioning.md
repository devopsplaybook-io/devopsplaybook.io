---
tags:
  - practices
  - practices_cicd
title: Immutable Builds
layout: default.njk
---

## Principles

Semantic versioning is a versioning scheme for software that provides a consistent and meaningful way to convey the nature and impact of changes in a release. It follows a three-part version number format: MAJOR.MINOR.PATCH. Each part has a specific meaning, and incrementing a part indicates the nature of the changes made to the software.

## Relationship with DevOps

Advantages

- Clear and meaningful versioning: Semantic versioning provides a clear and understandable way to communicate the significance of changes in a release. The MAJOR version indicates incompatible changes, the MINOR version represents backward-compatible additions or enhancements, and the PATCH version indicates backward-compatible bug fixes.
- Compatibility and dependency management: By explicitly indicating compatibility in version numbers, semantic versioning helps developers and users manage dependencies. It enables developers to specify acceptable version ranges for dependencies, ensuring that updates do not introduce incompatible changes.
- Consumer confidence and predictability: Semantic versioning provides consumers of a software library or package with confidence and predictability. They can understand the implications of updating to a newer version based on the versioning scheme, reducing the risk of unexpected behavior or breaking changes.
- Tooling and automation support: Semantic versioning is widely adopted and supported by various tools and automation processes. Dependency managers, package managers, and build systems often rely on semantic versioning to handle version resolution, dependency updates, and release management effectively.

Disadvantages

- Subjective interpretation: The meaning of "compatible" or "incompatible" changes can be subjective and interpreted differently by different developers or projects. There may be cases where the impact of a change is not clearly categorized as MAJOR, MINOR, or PATCH, leading to inconsistencies in versioning and potential confusion.
- Limited granularity: Semantic versioning uses a limited three-part numbering system, which may not provide enough granularity for some projects or software libraries. There may be situations where more fine-grained versioning is desired to reflect the complexity of changes or the maturity of the software.
- Lack of context: Semantic versioning does not convey the context or details of the changes made in a release. While it indicates the nature of the changes (incompatible, backward-compatible additions, or bug fixes), it doesn't provide specific information about the features, bug fixes, or security enhancements included in a release.
- Adoption challenges: Adopting semantic versioning requires discipline and adherence to the versioning rules across development teams and projects. It may take effort and time to establish a consistent versioning scheme and educate team members about its significance and usage.
