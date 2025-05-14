---
title: BitcoinJS - 比特币全服务钱包开发
categories:
  - Notes
  - BlockChain
  - Bitcoin
tags:
  - Bitcoin
date: 2022-08-21
---

比特币钱包涉及钱包程序或钱包文件，钱包程序可以创建公钥来收取比特币，同时使用相应的私钥来划掉这些比特币，钱包文件保存了私钥，以及为钱包程序保存了一些交易相关的信息。

- https://wenku.baidu.com/view/ea8d1377834d2b160b4e767f5acfa1c7aa00829f.html

收取，花掉比特币是钱包程序最基本的功能，但一个特定的钱包不必包含着两个功能，两个钱包程序能一起协调工作，一个负责分发公钥，用于来收取比特币，另外一个程序负责签名交易，来花掉这些比特币。

## 全服务钱包

最简单的钱包就是包含三个功能，它生成私钥，然后基于它生成相应的私钥，在需要时，分发这些公钥，监控在执行公钥的输出，创建，签名交易（用于花掉输出），广播签名后的交易。

全服务钱包的主要缺点是它们在连接互联网的设备上储存私钥，这种设备被入侵是常见的事情，因特网连接使得容易将私钥从被感染的设备发送给攻击者。

为了防盗，许多钱包程序为用户提供了可选项加密包含私钥的钱包文件。当私钥不被使用时，它可以提供保护，但是不能防范捕获的攻击从内存中读取解密方法。

<!-- more -->

![](https://pic.imgdb.cn/item/62ff272516f2c2beb109a996.png)

## 生成助记词

BIP39 是 [Bitcoin BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) 的实现，用于生成确定性密钥的助记符代码。

```ts
import * as bip39 from 'bip39'
const mnemonic = bip39.generateMnemonic()
```

## 助记词导入

那么可以这么理解，助记词即是私钥的另一种存在形式，你可以通过助记词，来推断出实际的私钥，从而推断出公钥、地址等

- `助记词 -> 私钥 -> 公钥 -> 公钥 + 路径 -> 地址`

那么我们使用 `bip32`、`bip39`、`bitcoinjs-lib` 来实现：

```ts
import * as bip39 from 'bip39'
import { BIP32Factory } from 'bip32'

const bip32 = BIP32Factory(ecc)

const seed = bip39.mnemonicToSeedSync(mnemonic)
const root = bip32.fromSeed(seed)

const keyPair = root.derivePath('m/44\'/0\'/0\'/0/0')
const privateKey = keyPair.privateKey
const publicKey = keyPair.publicKey
const address = bitcoin.payments.p2pkh({ pubkey: publicKey }).address
```

除此之外还能做到使用 `WIF`、`privateKey`、`publicKey` 来导入，每种导入都有不同的限制，比如使用 `privateKey` 则无法得知实际的助记词。

```ts
const keyPair = ECPair.fromWIF(wif, network)
const keyPair = ECPair.fromWIF(wif)
const keyPair = ECPair.fromPrivateKey(privateKey)
const keyPair = ECPair.fromPublicKey(publicKey)
```

## 查询信息

有两种办法查询员工比特币地址的余额、UTXO、交易等信息和广播：

- 使用自己的节点
- 使用第三方节点（服务）

这里出于简化考虑，我们使用第三方服务的测试节点来查询比特币的余额与 UTXO：

- https://blockstream.info/testnet/api

```ts
axios.defaults.baseURL = 'https://blockstream.info/testnet/api'
/**
 * 获取该地址的 utxo
 * @param address
 */
export async function getUtxos(address: string) {
  const response = await axios({
    url: `/address/${address}/utxo`
  })
  const data = (response.data as any[]) || []
  const utxos = data.map(async (utxo) => {
    const hex = await getTransaction(utxo.txid)
    return {
      ...utxo,
      nonWitnessUtxo: Buffer.from(hex, 'hex'),
      txId: utxo.txid
    }
  })
  return Promise.all(utxos)
}
/**
 * 获取交易 hex
 * @param txid
 */
export async function getTransaction(txid: string) {
  const { data: rowTx } = await axios({
    url: `/tx/${txid}/hex`
  })
  return (rowTx as string) || ''
}

/**
 * 将交易进行广播
 * @param hex
 */
export async function postBroadcast(hex: string) {
  const { data } = await axios({
    url: '/tx',
    method: 'POST',
    data: hex
  })
  return (data as string) || ''
}
/**
 * 根据地址获取额度
 * @param address
 * @returns
 */
export async function getBalance(address: string) {
  const { data } = await axios({ url: `/address/${address}` })
  return data.chain_stats.funded_txo_sum as string
}
```

## Coin Select 策略

进行交易之前，我们先了解一个概念，即 Coin Select 策略。

由于比特币采用的是 UTXO 模型，即使是同一个地址，其 BTC 也分散于不同的 UTXO。因此用户在花费比特币时，其钱包或者客户端就需要 UTXO Set 里寻找合适的 UTXO，拼凑出合适的交易。这个寻找 UTXO 的算法，就叫做 Coin select algorithm。

Coin Select 发生在用户想要花费比特币时，因此 Coin Select 的第一个目标就是最后挑选出来的 UTXO（也就是input）之和一定要大于或等于用户想要花费的比特币数量 + 手续费。但是符合要求的 UTXO 组合可能有非常多，因此第一个目标的基础上，第二个追求就是尽量减少交易的手续费。第三个目标就是这笔新创建的交易能够减少内存里 UTXO Set 的大小，这个目标要求 `sum(inputs.length) < sum(outputs.length)`。

- https://zhuanlan.zhihu.com/p/36030990

```ts
import coinselect from 'coinselect'
function calculateUtxo(utxo: any[], targets: any[], feeRate = 55) {
  let { inputs, outputs, fee } = coinselect(utxos, targets, feeRate)
  if (!inputs || !outputs) {
    console.log('Coinselect 未没有找到解决方案')
    inputs = utxos
    outputs = targets
  }
  else {
    console.log('Coinselect 已找到解决方案')
  }
  inputs = inputs.map(handleInput)
  const result = { inputs: inputs as any[], outputs: outputs as any[], fee }
  console.log('transaction data:', result)
  return result
}
```

## 进行交易

```ts
import * as bitcoin from 'bitcoinjs-lib'

// 一些固定参数
const wif = '...'
const addressFrom = '...'
const addressTo = '...'
const network = bitcoin.networks.testnet

const keyPair = ECPair.fromWIF(wif, bitcoin.networks.testnet)
const utxos = await getUtxos(options.from)

if (!utxos[0])
  console.log('from 不存在 utxo, 代表没有余额')

const targets = [
  { address: addressTo, value: Number(options.value) }
]

// 计算费用和输入输出
const { inputs, outputs, fee } = calculateUtxo(utxos, targets)

// 创建交易
const psbt = new bitcoin.Psbt({ network, maximumFeeRate: fee })
psbt.addInputs(inputs)
psbt.addOutputs(outputs)

// 签名所有输入
psbt.signAllInputs(keyPair)

// 确定所有输入
psbt.finalizeAllInputs()

// 提取交易 hax
const hex = psbt.extractTransaction().toHex()

// 进行广播操作
try {
  const txHex = await postBroadcast(hex)
  console.log(txHex)
}
catch (error: any) {
  console.log(error.response)
}
```
