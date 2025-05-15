---
title: Hardhat 3 Ignition 可升级合约
categories:
  - Notes
  - BlockChain
  - Hardhat 3
tags:
  - Hardhat 3
date: 2025-05-15
---

在开发智能合约时，一般我们会使用可升级代理模式，以便将来升级合约。官网中例子重点描述了 [TransparentUpgradeableProxy](https://docs.openzeppelin.com/contracts/5.x/api/proxy#TransparentUpgradeableProxy) 如何在 Ignition 中使用，而我们不单单使用它，我们还将探索 [UUPS](https://docs.openzeppelin.com/contracts/5.x/api/proxy#UUPS) 以及 [BeaconProxy](https://docs.openzeppelin.com/contracts/5.x/api/proxy#BeaconProxy) 在 Hardhat 3 Ignition 中的使用方式。

<!-- more -->

在开始之前，请确保项目中安装了 OpenZeppelin Contracts 库。你可以使用任意包管理工具安装它：

```bash
pnpm add @openzeppelin/contracts @openzeppelin/contracts-upgradeable
```

## 基本的合约内容

让我们看一下我们将要部署和交互的合同。

首先，在我们的 `contracts` 中，创建一个名为 `Demo.sol` 的文件：

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// A contrived example of a contract that can be upgraded
contract Demo {
  function version() public pure returns (string memory) {
    return "1.0.0";
  }
}
```

这是我们将要升级的合约。它是一个返回版本字符串的简单合约。

让我们继续在新文件 `DemoV2.sol` 中创建此合同的升级版本

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// A contrived example of a contract that can be upgraded
contract DemoV2 {
  string public name;

  function version() public pure returns (string memory) {
    return "2.0.0";
  }

  function setName(string memory _name) public {
    name = _name;
  }
}
```

除了更新版本字符串之外，我们还添加了一个 `name` 状态变量和一个 `setName` 函数允许设置 `name` 字段的值。稍后升级代理时，我们将使用这个函数。

最后，我们将创建一个名为 `Proxies.sol` 的文件来导入我们的代理合约。这个文件看起来与其他文件略有不同：

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/proxy/transparent/ProxyAdmin.sol";
import "@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol";
```

因为我们使用的是 OpenZeppelin 代理合约，所以我们需要在这里导入它们，以确保 Hardhat 知道如何编译它们。这将确保它们的内容可供稍后在我们编写 Ignition 模块时使用。

## 编写 Ignition 模块

> TODO:https://hardhat.org/ignition/docs/guides/upgradeable-proxies#writing-our-ignition-modules

### 第一部分：部署我们的代理

> TODO

### 第二部分：与我们的代理交互

> TODO

### 第三部分：升级我们的代理合约，并使用初始化函数

> TODO

### 第四部分：与升级后的代理进行交互

> TODO

## 测试 Ignition 模块

> TODO:https://hardhat.org/ignition/docs/guides/upgradeable-proxies#testing-our-ignition-modules

## 使用 UUPS 代理合约

> TODO

## 使用 BeaconProxy 代理合约

> TODO
