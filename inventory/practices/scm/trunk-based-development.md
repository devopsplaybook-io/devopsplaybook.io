---
tags:
  - practices
  - practices_scm
title: Trunk-Based Development
layout: default.njk
---

## Principle

Trunk-based development is a version control management practice where developers merge small, frequent updates to a core “trunk” or main branch.

```mermaid
gitGraph
    commit
    commit
    branch feat/feat-a
    commit
    checkout main
    merge feat/feat-a
    commit
    branch feat/feat-b
    commit
    checkout main
    commit
    branch feat/feat-c
    commit
    checkout feat/feat-b
    commit
    checkout main
    merge feat/feat-b
    checkout feat/feat-c
    commit
    checkout main
    merge feat/feat-c
    commit
```

## Relationship with DevOps

Trunk-Based Development is relavant to DevOps because it focuses on enhancing continuous integration.

### Advantages

- Rapid Feedback and Collaboration: Trunk-based development encourages developers to integrate their changes frequently into the main branch. This promotes early feedback, facilitates collaboration, and reduces the likelihood of merge conflicts that can arise with long-lived feature branches.
- Continuous Integration: With trunk-based development, integration happens continuously, enabling developers to catch integration issues and conflicts early in the development process. This approach encourages a more stable and releasable codebase.
- Simplified Code Reviews: By working on smaller and focused changes, code reviews become more manageable and efficient. Reviewers can quickly understand the context of the changes, leading to faster and higher-quality feedback.
- Reduced Branch Management Overhead: Trunk-based development minimizes the overhead associated with managing multiple long-lived feature branches. Developers can focus on writing code rather than coordinating branch merges or resolving conflicts.
- Faster Time-to-Market: With frequent integration and faster feedback loops, trunk-based development enables faster delivery of features and bug fixes. It supports a continuous delivery approach by reducing the time between code changes and deployments.
- Encourages Small, Iterative Changes: Trunk-based development promotes a development style that encourages developers to make small, incremental changes. This approach supports agility, reduces the risk of introducing complex or error-prone changes, and makes it easier to roll back if necessary.
- Improved Codebase Stability: Frequent integration and continuous integration practices in trunk-based development help identify and resolve issues more quickly, leading to a more stable and maintainable codebase.

### Disadvantages

- Dependency on Continuous Integration: Trunk-based development heavily relies on continuous integration practices to ensure that frequent integrations do not introduce regressions or conflicts. If there are issues with the continuous integration system, it can hinder the development process.
- Potential for Unstable Main Branch: If proper testing and quality assurance practices are not in place, frequent integrations can introduce unstable or buggy code into the main branch. A robust automated testing strategy is crucial to mitigate this risk.
- Greater Need for Collaboration and Communication: Since multiple developers are continuously integrating their changes into the main branch, effective communication and collaboration become crucial. Team members need to coordinate closely to avoid conflicts and ensure a cohesive codebase.
- Challenges with Long-Running Changes: Trunk-based development may present challenges when working on longer-term, complex features that require significant development time. Breaking down such changes into smaller, mergeable units becomes essential to avoid blocking other work.
- Learning Curve for New Team Members: Trunk-based development can be more challenging for new team members or those unfamiliar with the codebase. Understanding the shared trunk and its conventions requires additional effort and documentation to onboard new developers effectively.

## Related DevOps Articles

## Reference

https://trunkbaseddevelopment.com/
