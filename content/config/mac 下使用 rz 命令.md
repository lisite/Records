---
title: "mac 下使用 rz 命令"
description: "自己走过, 才知道路走不走的通"
date: 2020-04-19T10:07:59
draft: false
---


## rz和sz在MAC上的使用优化方案

> iTerm每次使用rz都会卡住

### 一、下载iTerm2

### 二、下载安装lrzsz

```bash
# 或者 brew install lrzsz
sudo brew install lrzsz

ln -s /usr/local/Cellar/lrzsz/0.12.20/bin/sz

ln -s /usr/local/Cellar/lrzsz/0.12.20/bin/rz

```

### 三、下载并安装automatic zmoderm for iTerm2

```bash
# 如果有wget报错, 则需要暗转wget (brew install wget)
cd /usr/local/bin

sudo wget https://github.com/supermason/iterm2-zmodem/blob/master/iterm2-recv-zmodem.sh

sudo wget https://github.com/supermason/iterm2-zmodem/blob/master/iterm2-send-zmodem.sh

udo chmod 777 /usr/local/bin/iterm2-*
```

### 四、添加配置

iTerm2 --> Profiles --> Open Profiles --> Edit Profiles --> Advanced（如下图的Advanced） --> Edit Trigger

然后使用如下配置:
| Regular expression | Action | Action |
| ------------------- | -------------------- | ------------------------------------ |
| \*\*B0100 | Run Silent Coprocess | /usr/local/bin/iterm2-send-zmodem.sh |
| \*\*B00000000000000 | Run Silent Coprocess | /usr/local/bin/iterm2-recv-zmodem.sh |

rz赶紧试试, 顺利实现上传!!
