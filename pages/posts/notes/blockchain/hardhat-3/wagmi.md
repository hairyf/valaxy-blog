---
title: Hardhat 3 与 wagmi
categories:
  - Notes
  - BlockChain
  - Hardhat 3
tags:
  - Hardhat 3
date: 2025-05-16
---

wagmi 是一个用于与以太坊区块链进行交互的库。它提供了一组 React/Vue Hooks 和组件，使得在前端应用中与以太坊智能合约进行交互变得更加简单和高效。Hardhat 是一个用于以太坊开发的 JavaScript 环境，提供了编译、测试和部署智能合约的工具。而如何将两个工具配合使用，并提供一流的 TypeScript 支持？

<!-- more -->

wagmi 提供了 [@wagmi/cli](https://wagmi.sh/cli/getting-started) 为此支持，它非常简单，通过读取 hardhat 中的 artifacts 目录，以及已部署的 json 地址，从而生成 wagmi 的代码，为此，它还提供了 wagmi/codegen 等工具用于快速创建方法，同时不单单支持 hardhat，还支持其他数据源，如 truffle 和 foundry，也可手动填写。

但它仅仅支持 wagmi，有很多项目还在用着 ethers，迁移 wagmi 是一个巨大的工作，而 ethers6 尽管生态系统和 TypeScript 没有那么完善，但它仍然是一个可行的选择，并且有着广泛的使用。

我为此制作了 [etherlib-generator](https://github.com/hairyf/etherlib-generator)，从不同的配置文件中提取信息，并生成相应的工具代码，不仅仅支持 wagmi，还额外支持 viem、ethers。这将减少在旧项目中不同库之间切换的成本。

1. 创建配置文件

在项目根目录中创建 `etherlib.config.ts` 文件

```ts
import { defineConfig } from 'etherlib-generator'
import { hardhat, viem } from 'etherlib-generator/plugins'

import { erc20Abi } from 'viem'
import { mainnet } from 'viem/chains'

export default defineConfig({
  // Output directory for generated code
  output: 'src/generated',

  // Manually add contract ABIs
  fragments: {},
  // Manually add contract addresses
  addresses: {},
  // Manually add chain networks
  chains: {},

  plugins: [
    // Collect configs(deployedAddress, network, fragments) from Hardhat
    hardhat(),
    // Generate code for viem
    viem(), // or ethers()
  ],
})
```

2. 生成代码

```bash
npx etherlib generate
```

3. 使用生成的代码（viem）

在您的应用程序中导入并使用生成的代码：

```ts
import { connection, chains, client, getContractCounter } from './src/generated'

// Indicate chain(only query)
connection.connect(chains.ethereum)

// Indicate chain and account(metamask/eip-1193)
connection.connect(chains.ethereum, { type: 'eip-1193', value: window.ethereum })

// Indicate chain and account(provideKey)
connection.connect(chains.ethereum, { type: 'provideKey', value: 'your-private-key' })

const blockNumber = await client.getBlockNumber()

// Use the generated contract functions

// auto find chain address, client
const counter = getContractCounter()
// or manually set the address and client
const counter = getContractCounter({
  address: '0xYourContractAddress',
  client: createPublicClient({/* ... */}), // or { client, wallet }
})

// Call contract functions
const num = await counter.read.x()
```

`connection` 表示当前使用的会话，通过 `connection.connect()` 方法进行连接，并指定所使用的链和账号，将作用于全局使用，而无需手动创建 `client/wallet`，也不需要后续使用合约时传入配置信息。

`connection` 基于 `proxy` 实现，`proxy` 是一个特殊的对象，它允许你通过 `proxy` 在运行时动态更新配置。这使得你可以在不同的环境中使用相同的合约实例，而无需每次都重新创建它们。

```ts
import { client, getContractCounter } from './src/generated'

const counter = getContractCounter()

client.proxy.update(createPublicClient({/* ethereum */}))
const ethereumBlockNumber = await client.getBlockNumber()
counter.read.x() // call ethereum counter contract

client.proxy.update(createPublicClient({/* sepolia */}))
const sepoliaBlockNumber = await client.getBlockNumber()
counter.read.x() // call sepolia counter contract

// Updating the chain will help contracts automatically find the correct contract address
chain.proxy.update(chains.sepolia)
// find chains.sepolia.contracts.Counter.address
const counter = getContractCounter()
```

## Hardhat 3 扩展配置

通过导入 `etherlib-generator/hardhat-network` 扩展 `networks` 字段，以便引用 Hardhat 配置中的网络信息。

```ts
/// <reference types="etherlib-generator/hardhat-network" />

import type { HardhatUserConfig } from 'hardhat/config'

const config: HardhatUserConfig = {
  networks: {
    sepolia: {
      type: 'http',
      chainType: 'l1',
      url: 'Your RPC URL',
      chainId: 11155111,
      accounts: [configVariable('SEPOLIA_PRIVATE_KEY')],
      // more options...
      icon: 'https://sepolia.dev/icon.svg',
      name: 'Sepolia',
      testnet: true,
      currency: {
        name: 'Sepolia Ether',
        symbol: 'ETH',
        decimals: 18,
      },
      contracts: {
        USDT: '0x..',
      },
      explorer: {
        name: 'Sepolia Etherscan',
        url: '...',
        api: '...',
      },
    },
  },
}

export default config
```