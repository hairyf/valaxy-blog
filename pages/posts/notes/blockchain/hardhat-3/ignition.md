---
title: Hardhat 3 Ignition 部署模块
categories:
  - Notes
  - BlockChain
  - Hardhat 3
tags:
  - Hardhat 3
date: 2025-05-15
---

Hardhat Ignition 用于在以太坊上部署智能合约的系统。它允许你定义要部署的智能合约实例，以及要在其上运行的任何操作。并通过接管部署和执行，Hardhat Ignition 可以让你专注于项目本身，而无需纠结于部署的细节。

在 Hardhat Ignition 中，部署是通过 Ignition 模块定义的。这些模块作为抽象层，帮助你描述要部署的系统。每个 Ignition 模块都封装了系统中的一组智能合约实例和操作。

可以将 Ignition 模块视为与 JavaScript 模块在概念上类似。在 JavaScript 中，您可以创建一个模块来对函数、类和值的定义进行分组，然后导出其中一些。在 Hardhat Ignition 中，您可以创建一个模块来对智能合约实例和操作的定义进行分组，然后导出其中一些合约。

创建模块并不会与以太坊网络进行交互。定义模块后，就可以使用 Hardhat Ignition 来部署它们。

<!-- more -->

我们将探索一个基本场景，其中我们部署一个简单的合约，然后运行部署后的初始化函数。

## 创建你的合约

将以下代码粘贴到 `contracts/Rocket.sol`：

内容包含一个名为的简单智能合约 Rocket，以及 `launch` 函数，我们将在部署后调用它。

## 创建部署模块

使用 JavaScript 或 TypeScript 在 `ignition/modules` 文件中定义。接下来创建该文件夹结构：

```bash
mkdir ignition
mkdir ignition/modules
```
并将以下代码粘贴到 `ignition/modules/Apollo.ts`。我们稍后会解释。

```ts
import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'

export default buildModule('Apollo', (m) => {
  const apollo = m.contract('Rocket', ['Saturn V'])

  m.call(apollo, 'launch', [])

  return { apollo }
})
```

我们可以看到，模块是通过调用 `buildModule` 函数创建的。它需要模块 ID，以及一个回调函数。而我们的模块将被标识为 `Apollo`，该标识将用于映射每一次部署的缓存操作。

回调函数是模块定义实际运行的内容。`m` 参数为 `ModuleBuilder` 实例，其中包含用于定义、配置、部署智能合约实例的方法。

当我们调用 `ModuleBuilder` 方法时，每个操作将会创建一个 `Future` 实例，该对象用于表现与现有合约实例交互所需运行的执行步骤。

在我们的模块中，我们通过调用调用 `m.contract` 和 `m.call` 方法创建了两个 `Future` 实例。第一个实例指示 Hardhat Ignition 部署一个 `Rocket` 合约实例，并将其指定 `"Saturn V"` 为唯一的构造函数参数。第二个实例指示我们打算执行已部署的 `Rocket` 实例中的 `launch` 函数，但不提供任何参数。

最后，我们返回一个 Future 实例（`Rocket` 合约实例的对象）以便其他模块和测试也可以访问它。

## 部署模块合约

现在我们的模块定义已经准备好了，让我们将其部署到本地的 Hardhat 节点。首先启动一个本地节点：

```bash
npx hardhat node
```

接下来，在 Hardhat 项目根目录的终端中运行：

```bash
npx hardhat ignition deploy ignition/modules/Apollo.ts --network localhost
```

Hardhat Ignition 将按照正确的顺序创建 `Future` 并执行我们定义的每个操作，并显示结果：

```bash
Hardhat Ignition 🚀

Deploying [ Apollo ]

Batch #1
  Executed Apollo#Rocket

Batch #2
  Executed Apollo#Rocket.launch

[ Apollo ] successfully deployed 🚀

Deployed Addresses

Apollo#Rocket - 0x5fbdb2315678afecb367f032d93f642f64180aa3
```

系统将创建一个 `ignition/deployments/chain-31337` 文件夹。其中包含有关部署的所有详细信息。Hardhat Ignition 会使用这些数据来恢复错误、恢复已修改的部署等等。

## 可视化模块操作

Hardhat Ignition 内置了一项 `visualize` 生成 HTML 报告的任务，该报告以可视化的方式展示模块部署过程的执行情况。这有助于调试和验证你对模块的理解是否与 Hardhat Ignition 的执行计划一致。

```bash
npx hardhat ignition visualize ./ignition/modules/Apollo.ts
Deployment visualization written to hardhat3-alpha/cache/visualization/index.html
```

## 处理错误

运行智能合约时，导致失败的原因有很多。Hardhat Ignition 根据错误类型使用不同的错误处理方法。

### 合约错误

与智能合约交互时，总会存在一些失败和回滚的可能性。Hardhat Ignition 使用两种策略来处理这些情况。

在捕获错误和恢复方面，Hardhat Ignition 首先会对每笔交易进行模拟。如果模拟失败，执行将停止。在这种情况下，您只需重新运行 Hardhat Ignition 即可继续部署。
如果模拟失败仍然存在，你可能需要考虑从日志中[删除之前的执行操作](https://hardhat.org/ignition/docs/guides/error-handling#wiping-a-previous-execution)，再次尝试。

### 清除之前的执行

Hardhat Ignition 使用日志记录其执行的每个执行步骤及其结果。这使得它可以在需要时恢复之前的执行。一旦 `Future` 开始执行，它就会被记录到日志中。

如果您的部署由于某个 `Future` 而失败，且你需要更改其定义来修复它，则需要从日志中清除该 `Future` 的先前执行。否则，Hardhat Ignition 将无法重新执行它。

你可以使用 `ignition wipe` 任务来实现此目的，该方法需要提供部署 ID 和 `Future` ID。

```bash
npx hardhat ignition wipe deploymentId futureId
```

### 网络相关错误

Hardhat Ignition 确保在面对网络相关错误时保持稳健。它能够处理一些棘手的情况，例如重新发送需要更新 Gas Price 的交易，或者 Hardhat Ignition 与网络之间的 nonce 值不匹配的情况。

然而，Hardhat Ignition 有时会遇到无法处理的错误。如果发生这种情况，您可以再次运行相同的命令，继续上次的部署。

## 修改现有模块

部署模块后可以对其进行更改。例如，如果我们想在已经部署的模块中添加一个新的 `Rocket` 合约实例：

**ignition/modules/Apollo.ts**

```ts{8,10,12}
import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'

export default buildModule('Apollo', (m) => {
  const apollo = m.contract('Rocket', ['Saturn V'])

  m.call(apollo, 'launch', [])

  const artemis = m.contract('Rocket', ['Artemis 2'], { id: 'artemis' })

  m.call(artemis, 'launch', [])

  return { apollo, artemis }
})
```

然后再次运行。Hardhat Ignition 将从上次中断的地方继续执行模块的新部分。

```bash
npx hardhat ignition deploy ignition/modules/Apollo.ts --network localhost
```

输出结果如下：

```bash
Batch #1
  Executed Apollo#artemis

Batch #2
  Executed Apollo#Apollo.artemis.launch

[ Apollo ] successfully deployed 🚀

Deployed Addresses

Apollo#Rocket - 0x5fbdb2315678afecb367f032d93f642f64180aa3
Apollo#artemis - 0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0
```

我们可以看到两个新批次执行模块的新部分，同时跳过以前已经部署和执行的操作。

## 部署参数定义

Ignition 可以通过模块 [Module parameters](https://hardhat.org/ignition/docs/guides/creating-modules#module-parameters)，在运行 `ignition deploy` 时，可以提供一个包含其参数值的文件，首先创建 `./ignition/parameters.json`，并添加以下内容：

```json
{
  "Apollo": {
    "name": "Saturn V"
  }
}
```

这将在运行 `Apollo` 模块时，提供 `name` 参数的值为 `Saturn V`。而你可以通过在模块中访问 `m.getParameter(name, defaultValue)` 来访问这些参数：

```ts
import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'

export default buildModule('Apollo', (m) => {
  const apollo = m.contract('Rocket', [m.getParameter('name')])

  m.call(apollo, 'launch', [])

  return { apollo }
})
```

要使用参数执行部署，您需要使用 `--parameters` 参数，如下所示：

```bash
npx hardhat ignition deploy ignition/modules/Apollo.ts --parameters ignition/parameters.json
```

要传递 `bigint`，可以将其编码为字符串。例如以下示例中的参数：

```json
{
  "MyModule": {
    "endowment": "1000000000000000000n" // 1 ETH in wei
  }
}
```
您还可以定义可供所有模块使用的全局参数：

```json
{
  "$global": {
    "shouldBeAllowed": true
  },
  "MyModule": {
    "shouldBeAllowed": false
  }
}
```

在上述示例中，`shouldBeAllowed: true` 参数将适用除了 `MyModule` 之外的所有模块。

## 测试模块使用

如果你想测试部署是否正确定义，或者您想使用 Ignition 模块来简化测试设置，则可以按照以下步骤进行操作：

在 Hardhat 3 中，ignition 主要通过 `network.connect` 方法，在连接网络后，则会提供 `ignition` 对象。该对象包含 `deploy` 方法和 `type` 属性。

- `type` 属性用于指示当前所使用的运行器类型。它是你安装 `ignition` 时所选择的运行器类型（`viem` 或 `ethers`）。
- `deploy` 方法用于部署你所定义在 `ignition/modules/*` 中的模块。

```ts
import { it } from 'node:test'
import { network } from 'hardhat'
import CounterModule from '../ignition/modules/Counter'

// ...
it('should set the start count to 0 by default', async () => {
  const { ignition } = await network.connect()
  const { counter } = await ignition.deploy(CounterModule)

  assert.equal(await counter.read.count(), 42)
})
```

`ignition.deploy` 的第二个参数为配置对象，其中 `parameters` 可用于提供[模块参数](https://hardhat.org/ignition/docs/guides/creating-modules#module-parameters)，你需要提供模块 ID 映射对应的参数值：

```ts
it('should allow setting the start count for new counters', async () => {
  const { counter } = await ignition.deploy(CounterModule, {
    parameters: {
      Counter: {
        startCount: 42,
      },
    },
  })

  assert.equal(await counter.count(), 42)
})
```

`ignition.deploy` 默认使用 Hardhat 网络配置数组中的第一个账号作为所有交易的发送者，您可以通过设置 `defaultSender` 选项来更改此设置：

```ts
const [senderClient] = await viem.getWalletClients()
const result = await hre.ignition.deploy(CounterModule, {
  defaultSender: senderClient.account.address,
})
```

## 模块依赖

在模块中部署模块时可以将其他模块作为子模块访问，并使用其生成的 `Future` 对象。为此，需要调用 `m.useModule` 并将模块对象作为 `buildModule` 参数返回：

```ts
const TokenModule = buildModule('TokenModule', (m) => {
  const token = m.contract('Token', ['My Token', 'TKN2', 18])

  return { token }
})

const TokenOwnerModule = buildModule('TokenOwnerModule', (m) => {
  const { token } = m.useModule(TokenModule)

  const owner = m.contract('TokenOwner', [token])
  m.call(token, 'transferOwnership', [owner])

  return { owner }
})
```

而 Ignition 将自动处理模块之间的依赖关系，并在部署时按正确的顺序执行它们。以及避免导致多次部署。

## 从不同账户部署和调用合约

例如，从特定帐户部署合约：

```ts
const token = m.contract('Token', ['My Token', 'TKN2', 18], { from: '0x....' })
```

你还可以使用 `m.getAccount(index)`，用于访问 Hardhat 网络配置数组中的帐户：

```ts
const account1 = m.getAccount(1)
const token = m.contract('Token', ['My Token', 'TKN2', 18], { from: account1 })
```
