---
title: "Git工作流"
description: "Git flow, Github flow, Gitlab flow"
date: 2018-10-31T09:42:45+08:00
draft: false
---

### Git 工作流

通常 Git 的工作流程，采用的是功能驱动式开发。先有需求，再有功能分支或补丁分支。完成开发后，该分支就合并到主分支，然后删除分支。

广泛使用的工作流程有三种：

* Git flow
* Github flow
* Gitlab flow

Git flow 需要同时维护两个非常相似的分支 develop 和 master，比较适合具有较长版本发布周期的项目。
Github flow 只需要维护一个分支，根据新需求从 master 拉取新分支，合并上线后，再删除新分支。
Gitlab flow 在 master 分支以外，再建立不同的环境分支，通过不同环境的上下游关系合并新功能。