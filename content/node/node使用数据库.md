---
title: 'node如何更好的使用数据库'
description: "node如何更好的使用数据库"
slug: "tempus"
date: 2020-05-22T08:26:13-05:00
draft: false
---

### 与数据库交互有两种方法

 1. 使用数据库的原生查询语言（例如SQL）
 2. 使用对象数据模型（Object Data Model，简称 ODM）或对象关系模型（Object Relational Model，简称 ORM）。 ODM / ORM 能将网站中的数据表示为 JavaScript 对象，然后将它们映射到底层数据库。一些 ORM 只适用某些特定数据库，还有一些是普遍适用的。
    使用 SQL 或其它受到支持的查询语言才能达到最佳性能。ODM 通常慢一些，因为在对象和数据库格式之间存在一层用于映射的翻译代码，使它不一定会选用最高性能的数据库查询（尤其是普遍使用级别的 ODM，它必须在各类数据库功能方面做出更大的折衷）。

 > 使用 ORM 的好处是：程序员可以继续用 JavaScript 对象的思维而不用转向数据库语义的思维。 在（同一个或不同网站）使用不同数据库时尤为明显。使用 ORM 还可以更方便地对数据进行验证和检查

### ODM有很多 如何选择

#### NPM 站点上有许多 ODM / ORM 解决方案（另请参阅 NPM 站点上的 odm 和 orm 标签列表)

#### 以下是迄今几种流行的解决方案

1. Mongoose：一款为异步工作环境设计的 MongoDB 对象建模工具。
2. Waterline：从基于Express 的 Sails 框架中提取的 ORM。它提供了一套统一的 API 来访问众多不同的数据库，其中包括 Redis，mySQL，LDAP，MongoDB 和 Postgres。
3. Bookshelf：同时提供基于 promise 和传统回调两套接口，支持事务处理、渴求式/嵌套渴求式关系加载、多态关联，以及对一对一，一对多和多对多关系。支持 PostgreSQL、MySQL 和 SQLite3。
4. Objection：以尽可能简单的方式使用 SQL 和底层数据库引擎的全部功能（支持SQLite3、Postgres 和 MySQL）。
5. Sequelize：基于 promise 的 Node.js 版 ORM，它支持 PostgreSQL、MySQL、MariaDB、SQLite 和 MSSQL，并提供可靠的事务支持、关系、复本读取等功能。
6. Node ORM2：一款 Node.js 对象关系管理系统。支持 MySQL、SQLite 以及 Progress，可以帮助你用面向对象的方法操作数据库。
7. JugglingDB：一款 Node.js 版跨数据库的 ORM。它为多数流行数据库提供了统一接口，当前支持 MySQL、SQLite3、Postgres、MongoDB、Redis 和 js-memory-storage（自写引擎，仅供测试用）。
一般来说，选择解决方案应该考虑功能和“社区活跃度”（下载量、贡献数、bug 报告、文档质量，等）。在撰写本文时，Mongoose 是最受欢迎的 ODM，选用 MongoDB 数据库时，它是一个合理的选择。

👇

 [参考文献: https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Express_Nodejs/mongoose](https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Express_Nodejs/mongoose)