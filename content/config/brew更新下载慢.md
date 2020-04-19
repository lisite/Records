---
title: "替换brew为国内的源"
# date: 2020-04-19T11:42:45+08:00
date: 2020-04-18T10:42:45
description: "不换不快"
draft: false
---

### 替换brew.git

$ cd "$(brew --repo)"

### 中国科大(brew.git)

$ git remote set-url origin https://mirrors.ustc.edu.cn/brew.git

### 清华大学(brew.git)

$ git remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git

### 替换homebrew-core.git

$ cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"

### 中国科大(homebrew-core.git)

$ git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git

### 清华大学(homebrew-core.git)

$ git remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git

### 替换homebrew-bottles

### 中国科大(homebrew-bottles)

$ echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.bash_profile
$ source ~/.bash_profile

### 清华大学(homebrew-bottles)

$ echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles' >> ~/.bash_profile
$ source ~/.bash_profile

### 应用生效

$ brew update
