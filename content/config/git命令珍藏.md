---
title: "Git命令珍藏"
date: 2018-10-10T17:07:59+08:00
draft: false
---

#### 以下是本人收藏的一些git并不常用到的命令

```bash
# 临时的保存
git stash  # 暂存
git stash list  # 暂存的列表
git stash pop  # 取回更改
git stash save "this is the tempory save" # 给暂存添加描述
git stash clear # 删除暂存的提交
git stash save --keep-index # 只暂存没有被暂存的文件


# 清晰直观的查看commits
git log --graph --pretty=one --abbrev-commit

# merge的时候不使用fast forward，以保证删除分支后，分支信息不丢失
git merge --no-ff -m "merge with no-ff" dev

# 查找事故责任人，在vscode中可以使用gitlens插件，达到追踪责任人的问题
git blame 

# 每隔X秒运行一次git pull
screen
for((i=1;i<=10000;i+=1)); do sleep X && git pull; done

# 忽略追踪文件中的变更
git update-index --assume-unchanged

# 将远程提交合并到自己的分支中
# 也可以使用git cherry-pick 来选择给定SHA值的提交，然后将其合并到当前分支中
git cherry-pick SHA-commit

# 应用来自于不相关的本地仓库的补丁（暂时没遇到此类需求，留着备用）
# 场景：将另一个不相关的本地仓库的提交补丁应用到当前仓库
git --git-dir=/.git format-patch -k -1 --stdout  | git am -3 -k

# 将子目录分隔为新的仓库（有遇到过这样的case，以下将是很好的解决方案）
git filter-branch --prune-empty --subdirectory-filter master

# 在解决合并冲突的时候使用某一种分析工具，比如vimdiff 
git config --global merge.tool vimdiff
```
