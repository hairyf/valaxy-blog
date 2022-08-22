---
title: BitcoinJS - 比特币应用开发
categories: 
  - BlockChain
  - Bitcoin
tags:
  - Bitcoin
date: 2022-08-21
---

用于 node.js 和浏览器的 javascript 比特币工具库。用 TypeScript 编写。


## ECPair

它由两部分组成，生成助记符，并将其转换为二进制种子。这个种子稍后可以使用 BIP-0032 或类似的方法来生成确定性钱包。

ECPair 是指通过椭圆曲线算法生成钥匙对，简单点来说，它可以生成一个随机的密匙对：

```ts
import ECPairFactory from 'ecpair'
import * as bitcoin from 'bitcoinjs-lib'

const ECPair = ECPairFactory(ecc)
const keyPair = ECPair.makeRandom()
const wif = keyPair.toWIF()
const privateKey = keyPair.privateKey.toString('hex')
const publicKey = keyPair.publicKey.toString('hex')
// p2pkh 用于获取 address，和钱包其他信息
const address = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey }).address
```

这里出现了几个陌生的概念， `WIF`、`privateKey`、`publicKey`，这些都是些什么？

<!-- more -->

### privateKey

私钥是 `256` 位的二进制数，以 `64` 位 `hex` 显示，例如：

`bef05ca99c4bb9d17f9f164a5bffd48ee2f99f866a3621dd9a4be62412c28148`

> 简单来说，`privateKey` 就如同虚拟货币的钱包钥匙

### publicKey

同时私钥能生成公钥，而公钥与私钥是一一对应的。看到公钥就知道会有私钥预制对应，基于密码学这点轻易被验证。然而私钥是看不到的，没有办法用公钥反推出私钥。这样的机制既能保证私钥的安全性，也能证明其拥有私钥。钱包则私钥的容器，一般是通过有序文件或者简单的数据库来实现。

`{K = k * G} secp256k1` 标准的椭圆曲线，以私钥 `k` 为起点，将曲线上已定义的生成点 `G` 相乘获得另一点，也就是公钥 `K = (x, y)`


```java
K = bef05ca99c4bb9d17f9f164a5bffd48ee2f99f866a3621dd9a4be62412c28148 * G
x = c2a0eef93156029532c9b6d33dfd4d09abc3fa0454bc1580230682c9d197f974
y = 0ccafcd456bbac903010082d251b83f8d10013d49e75b1c681c2189c92955f35
```

公钥有两种格式，压缩与未压缩。坐标 `x` 对应两个 `y` 值，分别为奇数和偶数，因此可以将 `y` 压缩为一个字节：`02` 表示偶数，`03` 表示奇数。

- 未压缩的公钥：`04 + x + y`
- 已压缩的公钥：`02 + x` 或 `03 + x`

### WIF

WIF(Wallet import format) 钱包导入格式，(也被称为电子钱包的导出格式)是一种私有的 ESCDSA (椭圆曲线签名算法) 秘钥，意在使私钥更容易复制的方式。

### address

一个比特币地址或是一个简单地址，是一个 `26-35` 个字母或数字组成的标识符，以数字1或3开头，这代表了比特币支付的可能目的地。任何比特币的使用者不需要任何话费便可以生成地址。例如使用 Bitcoin Core 客户端，点击 “New Address“ 就会被分配一个地址。通过一个交易所账号或者在线钱包服务来获得比特币地址也是可能的。目前正被使用中的地址有 3 种格式：

- P2PKH 类型， 以数字 `1` 开头，  例如：`1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2`
- P2SH 类型，  以数字 `3` 开头，  例如：`3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy`
- Bech32 类型，以数字 `bc1` 开头，例如：`bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq`


## BIP39

BIP39 实际上是基于 BIP 协议迭代的新规范，主要是针对助记词方面的，因为私钥的特殊性，所以如果能使用一段文字来代替私钥就会方便记忆了，这就是 BIP39 协议的主要内容，按照英文为例,从常用的 2048 个单词当中挑选出来作为一个数组源，然后生成 `128-256` 位的随机数，这个随机数的长度始终应该是 32 的倍数，然后在随机数的末尾加上校验码，校验码取 SHA256 的前若干位，使得总位数位 `11` 的倍数，将随机数+校验码按照 11bit 位一组，得到范围位 0-2047 的 12 到 24 个整数，这些数可以一一对应到相对应的，就是我们的助记词了。

## 比特币网络（network）

比特币采用了基于互联网的 P2P （peer-to-peer）网络架构。 P2P 是指位于同一网络中的每台计算机都彼此对等，各个节点共同提供网络服务，不存在“特殊”节点。每个网络节点以“扁平（flat）”的拓扑结构相互连通。在 P2P 网络中不存在任何服务端（server）、中央化的服务、以及层级结构。 P2P 网络的节点之间交互运作、协同处理：每个节点在对外提供服务的同时也使用网络中其他节点所提供的服务。P2P 网络也因此具有可靠性、去中心化，以及开放性。

比特币 P2P 网络中的各个节点相互对等，但是根据所提供的功能不同，各个节点的分工也不尽相同。每个比特币节点都是路由、区块链数据库、挖矿、钱包服务的功能集合。一个比特币网络全节点包括四个功能：钱包、矿工、完整区块链、网络路由节点。

简单点来理解，这个是指比特币交易广播到的，以及维护公共区块链的电脑连接在一起形成的网络。有的时候，这个词也用于指代 miners 矿工。

## 测试网络（testnet）

Testnet 是用于测试的区块链，网络和货币的总称。 testnet 是一个功能齐全的在线 P2P 网络，包括钱包，测试比特币（testnet 币），挖矿以及类似主干网的所有其他功能。实际上它和主网只有两个区别：testnet 币是毫无价值的，挖掘难度足够低，任何人都可以相对容易地使用 testnet 币）。

## 事务与 UTXO

- https://zhuanlan.zhihu.com/p/110221444
