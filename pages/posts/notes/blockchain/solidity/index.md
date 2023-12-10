---
title: Solidity 智能合约语言
categories: 
  - Notes
  - BlockChain
  - Solidity
tags:
  - Solidity
date: 2023-12-10
---

智能合约是运行在链上的程序，合约开发者可以通过智能合约实现与链上资产/数据进行交互，用户可以通过自己的链上账户来调用合约，访问资产与数据。因为区块链保留区块历史记录的链式结构、去中心化、不可篡改等特征，智能合约相比传统应用来说能更公正、透明。

然而，因为智能合约需要与链进行交互，部署、数据写入等操作都会消耗一定费用，数据存储与变更成本也比较高，因此在设计合约时需要着重考虑资源的消耗。此外，常规智能合约一经部署就无法进行修改，因此，合约设计时也需要多考虑其安全性、可升级性与拓展性。

Solidity 是一门面向合约的、为实现智能合约而创建的高级编程语言，在 EVM 虚拟机上运行，语法整体类似于 Javascript，是目前最流行的智能合约语言，也是入门区块链与 Web3 所必须掌握的语言。针对上述的一些合约编写的问题，Solidity 也都有相对完善的解决方案支持。

<!-- more -->

## 开发/调试工具

与常规编程语言不同，Solidity 智能合约的开发往往无法直接通过一个 IDE 或本地环境进行方便的调试，而是需要与一个链上节点进行交互。开发调试往往也不会直接与主网（即真实资产、数据与业务所在的链）进行交互，否则需要承担高额手续费。

目前开发调试主要有以下几种方式与框架：

- [Hardhat](https://github.com/NomicFoundation/hardhat) (Javascript/Solidity) - 提供了非常丰富的插件系统，适合开发复杂的合约项目。
- [Truffle](https://github.com/trufflesuite/truffle) (JavaScript/Solidity) - 提供了完整的开发、测试、调试工具链，可以与本地或远程网络进行交互。
- [Brownie](https://github.com/eth-brownie/brownie) (Python/Solidity) - 以简洁的 Python 语法为调试和测试提供了便捷的工具链。


除了开发框架外，更好地进行调试还需要熟悉一些工具：

1. [Remix IDE](https://remix.ethereum.org/)。Remix 会提供完整的 IDE、编译工具、部署调试的测试节点环境、账户等，可以很方便地进行测试，Remix 还可以通过 MetaMask 插件与测试网、主网进行直接交互，部分生产环境也会使用它进行编译部署。
2. Remix IDE 对于语法提示等并不完善，因此，可以使用 Visual Studio Code 配合 Solidity 插件进行编写，有更好的体验。
3. MetaMask。一个常用的钱包应用，开发过程中可以通过浏览器插件与测试网、主网进行交互，方便开发者进行调试。

## 合约编译/部署

Solidity 合约是以 `.sol` 为后缀的文件，无法直接执行，需要编译为 EVM（Ethereum Virtual Machine）可识别的字节码才能在链上运行。

![](https://image.pseudoyu.com/images/compile_solidity.png)

编译完成后，由合约账户进行部署到链上，其他账户就可通过钱包与合约进行交互，实现链上业务逻辑。


## 基本数据类型

Solidity 的语法与 JavaScript 相似，因此对于熟悉 JavaScript 的开发人员来说，学习 Solidity 相对容易。且 Solidity 是一种静态类型语言，这能避免减少运行时的错误，并提供只能合约的安全性。

- `boolean` - 布尔类型，通过 `bool public boo = true;` 来定义，默认 `false`
- `int` - 整数类型，可指定 `int8 ~ int256`，通过 `int public int = 0;` 来定义，默认 `int256`
  > int 类型还可通过 `type(int).min|type(int).max` 查看类型最大/最小值
- `uint` - 非负整数类型，可指定 `unit8|16|256`，默认为 `unit256`，通过 `uint8 public u8 = 1;` 来定义，默认值为 `0`
- `address` - 地址类型，可通过 `address public addr = 0x...733c`，默认值为 `0x...0000`
- `bytes` - `byte[]` 的缩写，分为固定大小数组和可变数组，通过 `bytes1 a = 0xb5;` 来定义

## 枚举(Enum)

`Enum` 是枚举类型，可以通过以下语法来定义：

```solidity
enum Status {
  Unknown,
  Start,
  End,
  Pause
}
```

通过以下语法来进行使用与更新：

```solidity
// 实例化枚举类型
Status public status;

// 更新枚举值
function pause() public {
    status = Status.Pause;
}
```

## 数组(Array)

数组在 Solidity 语言中是一种存储同类元素的有序集合，通过 `uint[] public arr`; 来进行定义，在定义时还可以预先指定数组大小，如 `uint[10] public mySizeArr`;。

Solidity 中还可以在内存中创建数组，但是必须固定大小，如 `uint[] memory a = new uint[](5)`;。

数组类型有一些基本操作方法，如下：

```solidity
// 定义数组类型(长度 7)
uint[7] public arr;

// 添加数据
arr.push(7);

// 删除最后一个数据
arr.pop();

// 删除某个索引值数据
delete arr[1];

// 获取数组长度
uint len = arr.length;
```

## 映射(Mapping)

mapping 是一种映射类型，使用 `mapping(keyType => valueType)` 来定义，其中键需要是内置类型，如 `bytes|int|string` 或合约类型，而值可以是任何的类型，如嵌套 `mapping` 类型，需要注意的是，`mapping` 类型是不能被迭代遍历的，需要遍历则需要实现对应的索引。

```solidity
// 定义嵌套 mapping 类型
mapping(string => mapping(string => string)) nestedMap;

// 设置值
nestedMap[id][key] = "0707";

// 读取值
string value = nestedMap[id][key];

// 删除值
delete nestedMap[id][key];
```

## 结构(Struct)

**STRUCT**

`struct` 是结构类型，对于复杂业务，会经常需要定义自己的结构，将关联的数据组合起来，可以在合约内进行定义：

```solidity
contract Struct {
  struct Data {
  	string id;
  	string hash;
  }

  Data public data;

  // 添加数据
  function create(string calldata _id) public {
  	data = Data{id: _id, hash: "111222"};
  }

  // 更新数据
  function update(string _id) public {
  	// 查询数据
  	string id = data.id;

    // 更新
    data.hash = "222333"
  }
}
```

也可以单独文件定义所有需要的结构类型，由合约按需导入：

```solidity
// 'StructDeclaration.sol'

struct Data {
	string id;
	string hash;
}
```

在文件中导入并使用：

```solidity
// 'Struct.sol'

import "./StructDeclaration.sol"

contract Struct {
	Data public data;
}
```

## 变量|常量|Immutable

变量是 Solidity 中可改变值的一种数据结构，分为三种（local、state、global）变量

- `local` 变量定义在方法中，而不会储存在链上，如 `string var "Hello";`

- `state` 变量在方法之外定义，会储存在链上 `string public var`，写入值则需要发送交易，而读取值不会。

- `global` 变量则是提供了链信息的全局变量，如当前区块时间戳变量 `unit timestamp = block.timestamp;`，合约调用者的地址，`address sender = msg.sender;` 等

变量可以通过不同关键字进行声明，表示不同的储存位置。

- `storage` 储存在链中
- `memory` 储存在内存中，只有方法被调用才存在
- `calldata` 作为调用方法插入参数时存在

常量则是一种不可以改变值的变量，使用常量可以节约 gas 费用，我们可以通过以下方式来定义

```solidity
string public constant MY_CONSTANT = "0707"; 
```

`immutable` 则是一种特殊的类型，他的值可以在 `constructor` 中初始化，但不可再次改变，灵活使用这几种类型可以有效节省 gas 费并保障数据安全。

## 函数(Function)

在 Solidity 中，函数用来定义一些特定业务逻辑。函数分为不同的可见性，用户不同的关键字进行声明：

```solidity
// 任何合约都可调用
function publicFunction() public {}
// 仅允许在合约内部私有调用
function privateFunction() private {}
// 只有在继承的合约可调用
function internalFunction() internal {}
// 只有其他合约和账户可调用
function externalFunction() external {}
```

查询数据的合约函数也有不同的声明方式：

- `view` 可以读取变量，但不能更改
- `pure` 不可以读也不可以修改

```solidity
function getData() public view returns (uint) {
  // 执行读取数据的逻辑
  return publicVariable;
}

// 查询数据的函数声明为 pure，不可以读也不可以修改
function processData() public pure {
  // 执行处理数据的逻辑
}
```

### 函数修饰符

`modifier` 函数修饰符可以在函数运行前/后被调用，主要用来进行权限控制、对输入参数进行校验以及防止重入攻击等。这三种功能修饰符可以通过以下语法定义：

```solidity
modifier onlyOwner() {
	require(msg.sender == owner, "Not owner");
  _;
}

modifier validAddress(address _addr) {
	require(_addr != address(0), "Not valid address");
	_;
}

modifier noReentrancy() {
	require(!locked, "No reentrancy");
	locked = true;
	_;
	locked = false;
}
```

`_;` 则是一个特殊的标识符，用于指示修饰器在函数体的特定位置被替换。

使用函数修饰符则是需要在函数声明时添加对应修饰符，如：

```solidity
function changeOwner(address _newOwner) public onlyOwner validAddress(_newOwner) {
	owner = _newOwner;
}

function decrement(uint i) public noReentrancy {
	x -= i;

	if (i > 1) {
		decrement(i - 1);
	}
}
```

## 条件|循环结构

**条件**

使用 if、else if、else 关键字来实现条件逻辑：

```solidity
if (x < 10) {
	return 0;
} else if (x < 20) {
	return 1;
} else {
	return 2;
}
```

也可以使用简写的三元形式：

```solidity
x < 20 ? 1 : 2;
```

**循环**

使用 for、while、do while 关键字来实现循环逻辑，但是因为后两者容易达到 gas limit 边界值，所以基本上不用。

```solidity
// for
for (uint i = 0; i < 10; i++) {
	// 业务逻辑
}

// while
while (j < 10) {
	j++;
}
```

## 构造器(constructor)

contract 是 Solidity 中的关键字，用于定义合约（contract）。合约是 Solidity 中的主要构建块，用于定义和实现智能合约的行为和规则。

contract 中的 `constructor` 可以在创建合约的时候执行，主要用来初始化：

```solidity
constructor(string memory _name) {
	name = _name;
}
```

## 接口(Interface)

`Interface`，通过声明接口来进行合约交互，有以下要求：

不能实现任何方法
可以继承其他接口
所有方法都必须声明为 `external`
不能声明构造方法
不能声明状态变量

```solidity
contract Counter {
	uint public count;

	function increment() external {
		count += 1;
	}
}

interface ICounter {
  // ICounter 的上下文取决于 Counter 合约，所以可以直接返回上下文的值
	function count() external view returns (uint);
	function increment() external;
}
```

调用：

```solidity
contract MyContract {
	function incrementCounter(address _counter) external {
		ICounter(_counter).increment();
	}

	function getCount(address _counter) external view returns (uint) {
		return ICounter(_counter).count();
	}
}
```

通过调用 `MyContract` 的 `incrementCounter` 方法，并传入部署后的 `Counter` 地址，那么返回的实例调用 `increment` 则实际调用了 `Counter` 合约中的 `increment` 方法。

## 继承(is)

Solidity 合约支持继承，且可以同时继承多个，使用 `is` 关键字，函数可以进行重写，需要被继承的合约方法需要声明为 `virtual`，重写方法需要使用 `override` 关键字。

```solidity
// 定义父合约 A
contract A {
	function foo() public pure virtual returns (string memory) {
		return "A";
	}
}

// B 合约继承 A 合约并重写函数
contract B is A {
	function foo() public pure virtual override returns (string memory) {
		return "B";
	}
}

// D 合约继承 B、C 合约并重写函数
contract D is B, C {
	function foo() public override(B, C) returns (string memory) {
		return super.foo();
	}
}
```

有几点需要注意的是，继承顺序会影响业务逻辑，`state` 状态变量是不可以被继承的。

如果子合约想调用父合约，除了直接调用外，还可以通过 `super` 关键字来调用，如下：

```solidity
contract B is A {
	function foo() public virtual override {
    // 直接调用
		A.foo();
	}

	function bar() public virtual override {
    // 通过 super 关键字调用
		super.bar();
	}
}
```