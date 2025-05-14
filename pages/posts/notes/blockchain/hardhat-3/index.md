---
title: Hardhat 3 合约开发工具
categories:
  - Notes
  - BlockChain
  - Hardhat 3
tags:
  - Hardhat 3
date: 2025-05-14
---

Hardhat 是一个用于以太坊智能合约开发的 JavaScript / TypeScript 工具，提供了丰富的功能和插件生态系统。它允许开发者编译、测试、部署和调试智能合约。
Hardhat 3 是 Hardhat 的最新版本，目前处于 Alpha，带来了许多新特性和改进。

<!-- more -->

## 初始化

首先确保你已经安装了 Node.js 和 npm。然后使用以下命令安装 Hardhat 3：

```bash
mkdir hardhat3-alpha
cd hardhat3-alpha
pnpm init
```

然后初始化示例项目：

```bash
npx hardhat@next --init
```

1. 选择当前目录作为项目位置。
2. 为项目启用 ESM。
3. 将 Node Test Runner 和 Viem设置为测试设置。
4. 安装必要的依赖项。

> 这里会发现，Hardhat 3 使用了内置的 [Node.js test runner](https://nodejs.org/api/test.html)，据官网所述，内置的 Node.js 测试运行器速度很快，且不需要依赖，易于使用，并具有强大的输入功能。
> Hardhat 3 推荐使用它们，不过为了向后兼容，以及为了方便那些不想切换库的用户，Hardhat 也将继续支持 Mocha 和 Ethers.js。

## 案例项目

现在一切都应该设置好了。通过打印帮助信息来验证：

```bash
npx hardhat
```

运行该指令会打印出 hardhat 的帮助信息，显示可用的命令和选项。

该项目有一个基本的合约 `Counter` ，位于 `contracts/Counter.sol` 中。它是一个简单的计数器合约，具有增加、减少和获取当前计数的功能。

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Counter {
  uint public x;

  event Increment(uint by);

  function inc() public {
    x++;
    emit Increment(1);
  }

  function incBy(uint by) public {
    require(by > 0, "incBy: increment should be positive");
    x += by;
    emit Increment(by);
  }
}
```

该合约所暴露的两个方法 `inc` 和 `incBy` 用于增加计数器的值。`inc` 是自增，而 `incBy` 方法可以指定增加的值。

## Solidity 测试

在最新的 Hardhat 3 的描述中，Hardhat 3 全面支持编写与 Foundry 兼容的 Solidity 测试。可以编写单元测试、模糊测试和不变测试。，并使用以下测试库： [forge-std](https://github.com/foundry-rs/forge-std) 和 [prb-test](https://github.com/PaulRBerg/prb-test)。

所以我们会发现案例项目除了使用 TypeScript 进行测试外，还在合约中进行了测试，该内容位于 `contracts/Counter.t.sol` 中，这是 `Counter` 合约的测试文件。

```solidity
import { Counter } from "./Counter.sol";
import { Test } from "forge-std/Test.sol";

contract CounterTest is Test {
  Counter counter;

  function setUp() public {
    counter = new Counter();
  }

  function test_InitialValue() public view {
    require(counter.x() == 0, "Initial value should be 0");
  }

  function testFuzz_Inc(uint8 x) public {
    for (uint8 i = 0; i < x; i++) {
      counter.inc();
    }
    require(counter.x() == x, "Value after calling inc x times should be x");
  }

  function test_IncByZero() public {
      vm.expectRevert();
      counter.incBy(0);
  }
}
```

测试合约 `CounterTest` 将会被运行，其所有以 `test` 开头的函数都将会被执行，如果执行结果发生回滚，则该测试被视为失败。测试合约还可以包含一个 `setUp` 函数，该函数在每个测试运行之前都会被调用。Solidity 测试还可以使用作弊码（`cheatcodes`），例如 `vm.expectRevert()`，它会在调用合约时预期回滚。这是一个很强大的功能，可以帮助我们在 Solidity 编写更复杂的测试。

现在你可以通过运行 `npx hardhat test solidity` 来运行 Solidity 测试。你会看到测试的输出结果。

```bash
pnpm hardhat test solidity
Compiling your Solidity contracts
Compiled 1 Solidity file with solc 0.8.28 (evm target: cancun)
Running Solidity tests

Ran 3 tests for contracts/Counter.t.sol:CounterTest (v0.8.28)
✔ Passed: test_InitialValue() (duration: 0 ms, consumedGas: 7836)
✔ Passed: test_IncByZero() (duration: 0 ms, consumedGas: 9310)
✔ Passed: testFuzz_Inc(uint8) (duration: 55 ms, runs: 256, meanGas: 198626, medianGas: 98642)
✔ Suite Passed: 3 tests, 3 passed, 0 failed, 0 skipped (duration: 56 ms)

✔ Run Passed: 3 tests, 3 passed, 0 failed, 0 skipped (duration: 56 ms)
```

## TypeScript 测试

Hardhat 3 在支持 Solidity 测试后，目前依旧支持 TypeScript 测试，以下是官网的描述：

Solidity 测试非常适合单元测试，但在某些情况下它们会存在不足：

- **复杂测试**，通用语言比 Solidity 更舒适、更高效。
- **需要真实区块链行为**（例如区块和交易）的测试。虽然你可以使用作弊码来模拟，但模拟太多内容容易出错且难以维护。
- **端到端测试**，您可以在类似于生产的条件下测试已部署的合同。

为了处理这些情况，Hardhat 3 继续支持使用 TypeScript 或 JavaScript 编写测试。

示例项目包含一个 TypeScript 测试作为示例。`Counter` 合约会在值递增时发出一个 `Increment(uint by)` 事件。假设您要发送多笔交易，聚合所有发出的事件，并对结果进行断言。虽然这可以在 Solidity 中实现，但 TypeScript 使其更加便捷：

```typescript
describe('Counter', async () => {
  const { viem } = await network.connect()
  const publicClient = await viem.getPublicClient()

  it('The sum of the Increment events should match the current value', async () => {
    const vault = await viem.deployContract('Counter')

    // run a series of increments
    for (let i = 1n; i <= 10n; i++)
      await vault.write.incBy([i])

    const events = await publicClient.getContractEvents({
      address: vault.address,
      abi: vault.abi,
      eventName: 'Increment',
      fromBlock: 0n,
      strict: true,
    })

    // check that the aggregated events match the current value
    let total = 0n
    for (const event of events)
      total += event.args.by

    assert.equal(total, await vault.read.x())
  })
})
```

要在项目中运行 TypeScript 测试，请执行以下命令：

```bash
pnpm hardhat test node
```

要运行所有测试（Solidity 和 TypeScript），则使用以下 `test` 任务：

```bash
pnpm hardhat test
```

## 多链功能

Hardhat 2 使用一个与以太坊主网类似的单一网络，如今区块链网络多样化，现在已经不足以反映当今的生态系统。

安全帽 3 放弃了这一假设：

- 您可以选择想要交互的链的类型。
- 您可以同时管理与多个网络的连接。

## 链类型

Hardhat 3 引入了链类型的概念。您可以将链类型视为一条链及其测试网所共有的行为。初始版本支持三种链类型：

- `l1`，适用于以太坊主网及其测试网。
- `optimism`，适用于 OP 主网和 OP Sepolia。
- `generic`，对于不受支持的链的后备。

随着时间的推移，Hardhat 会逐步添加新的选项。

`scripts/send-op-tx.ts` 脚本演示了如何使用链类型：

```typescript
import { network } from 'hardhat'

const { viem } = await network.connect('hardhatOp', 'optimism')

console.log('Sending transaction using the OP chain type')

const publicClient = await viem.getPublicClient()
const [senderClient] = await viem.getWalletClients()

console.log('Sending 1 wei from', senderClient.account.address, 'to itself')

const l1Gas = await publicClient.estimateL1Gas({
  account: senderClient.account.address,
  to: senderClient.account.address,
  value: 1n,
})

console.log('Estimated L1 gas:', l1Gas)

console.log('Sending L2 transaction')
const tx = await senderClient.sendTransaction({
  to: senderClient.account.address,
  value: 1n,
})

await publicClient.waitForTransactionReceipt({ hash: tx })

console.log('Transaction sent successfully')
```

该脚本估算 L2 交易将产生的 L1 燃气费用。它使用 viem 的 [OP Stack](https://viem.sh/op-stack) 扩展，在配置了链类型为 optimism 的本地网络上。运行以下命令进行尝试：

```bash
pnpm hardhat run scripts/send-op-tx.ts
```
如果你将 chainType 更改为 `l1`，TypeScript 将无法编译，因为 `viem` 不支持 L1 链的 `estimateL1Gas` 方法。但不会影响使用，创建的实际网络以本地配置（`hardhat.config.ts`）为准。

## 网络管理器

在 Hardhat 2 中，任务在整个执行过程中始终使用单个固定的网络连接，无法更改此连接或创建新的连接。Hardhat 3 消除了这些限制。您可以在运行时创建连接、同时拥有多个连接，或在需要时关闭它们。

`scripts/check-predeploy.ts` 演示了该功能：

```typescript
import { network } from 'hardhat'

// address of the GasPriceOracle predeploy in OP Stack chains
const OP_GAS_PRICE_ORACLE = '0x420000000000000000000000000000000000000F'

async function mainnetExample() {
  const { viem } = await network.connect('hardhatMainnet', 'l1')

  const publicClient = await viem.getPublicClient()
  const gasPriceOracleCode = await publicClient.getCode({
    address: OP_GAS_PRICE_ORACLE,
  })

  console.log(
    'GasPriceOracle exists in l1 chain type?',
    gasPriceOracleCode !== undefined
  )
}

async function opExample() {
  const { viem } = await network.connect('hardhatOp', 'optimism')

  const publicClient = await viem.getPublicClient()
  const gasPriceOracleCode = await publicClient.getCode({
    address: OP_GAS_PRICE_ORACLE,
  })

  console.log(
    'GasPriceOracle exists in optimism chain type?',
    gasPriceOracleCode !== undefined
  )
}

await mainnetExample()
await opExample()
```

每个连接都会创建不同网络，并检查预部署（?）是否存在。

`network.connect` 函数返回一个网络连接，它是一个具有与网络相关的属性的对象：

- 它包含有关网络和与其交互的 EIP-1193 提供商的信息。
- 它提供插件添加的扩展，就像使用插件 `hardhat-viem` 时的辅助对象（`viem`）一样。

`network.connect` 接受两个可选参数：网络名称和链的类型。网络名称对应于 `hardhat.config.ts` 配置中的某个网络。链类型用于执行验证，并正确返回相应的 TypeScript 对象。
