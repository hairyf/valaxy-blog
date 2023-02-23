---
title: Typescript 版本升级后，AST 工具注释异常
date: 2022-02-23
categories:
  - Notes
  - Client
  - Other
tags: 
  - Typescript
---

起因是某项目使用了 Typescript 自带的 Compiler API 去生成对应的代码，在 `typescript@4.6.4` > `typescript@4.9.5` 升级时出现 `createInterfaceDeclaration` 参数异常（Invalid arguments）的情况。

<!-- more -->

```sh
TypeError: Invalid arguments
    at Object.createInterfaceDeclaration (...\node_modules\.pnpm\typescript@4.9.5\node_modules\typescript\lib\typescript.js:172145:19)
    at makeInterfaceDeclaration (...\src\helper\compiler\helper\ts-interface.ts:46:36)
    at ...\src\helper\compiler\ts-typings.ts:30:89
    at Array.map (<anonymous>)
    at createTSTypingsDeclaration (...\src\helper\compiler\ts-typings.ts:30:29)
    at tsCompiler (...\src\helper\compiler\index.ts:37:69)
    at ...\src\index.ts:52:52
    at ...\node_modules\.pnpm\p-pipe@3.1.0\node_modules\p-pipe\index.js:12:25
    at async Promise.all (index 0)
    at async openAPIWebClientGenerator (...\src\index.ts:59:3)
    at async actionApiGenerator (...\src\bin\action.ts:54:3)
```

## 错误排查

由于升级版本差异较大，所以排查错误花了比较多的时间，实际具体原因是 Typescript 在后续由于 `decorators` 参数的废弃，启动了强参数验证。

而 `factory.createInterfaceDeclaration` 也在其中，在 `typescript.js` 173993 行开始：

```js
factory.createInterfaceDeclaration = ts.buildOverload("createInterfaceDeclaration")
    .overload({
    0: function (modifiers, name, typeParameters, heritageClauses, members) {
        return createInterfaceDeclaration(modifiers, name, typeParameters, heritageClauses, members);
    },
    1: function (_decorators, modifiers, name, typeParameters, heritageClauses, members) {
        return createInterfaceDeclaration(modifiers, name, typeParameters, heritageClauses, members);
    },
})
    .bind({
    // 对应目前版本的验证
    0: function (_a) {
        var modifiers = _a[0], name = _a[1], typeParameters = _a[2], heritageClauses = _a[3], members = _a[4], other = _a[5];
        return (other === undefined) &&
            (modifiers === undefined || ts.every(modifiers, ts.isModifier)) &&
            (name === undefined || !ts.isArray(name)) &&
            (typeParameters === undefined || ts.isArray(typeParameters)) &&
            (heritageClauses === undefined || ts.every(heritageClauses, ts.isHeritageClause)) &&
            (members === undefined || ts.every(members, ts.isTypeElement));
    },
    // 对应旧版本的验证
    1: function (_a) {
        var decorators = _a[0], modifiers = _a[1], name = _a[2], typeParameters = _a[3], heritageClauses = _a[4], members = _a[5];
        return (decorators === undefined || ts.every(decorators, ts.isDecorator)) &&
            (modifiers === undefined || ts.isArray(modifiers)) &&
            (name === undefined || !ts.isArray(name)) &&
            (typeParameters === undefined || ts.every(typeParameters, ts.isTypeParameterDeclaration)) &&
            (heritageClauses === undefined || ts.every(heritageClauses, ts.isHeritageClause)) &&
            (members === undefined || ts.every(members, ts.isTypeElement));
    },
})
  // 对应旧版本验证注入废弃信息
  .deprecate({
    1: DISALLOW_DECORATORS
  })
  .finish();
```

可以看到 `createInterfaceDeclaration` 现在由 `ts.buildOverload` 构建，`buildOverload` 构建后，API 具有强验证类型，如果传入参数不正确，就会抛出错误。

部分源码：

```ts
export function createOverload<T extends OverloadDefinitions>(name: string, overloads: T, binder: OverloadBinders<T>, deprecations?: OverloadDeprecations<T>) {
    Object.defineProperty(call, "name", { ...Object.getOwnPropertyDescriptor(call, "name"), value: name });

    if (deprecations) {
        for (const key of Object.keys(deprecations)) {
            const index = +key as (keyof T & number);
            if (!isNaN(index) && hasProperty(overloads, `${index}`)) {
                overloads[index] = deprecate(overloads[index], { ...deprecations[index], name });
            }
        }
    }

    // 这里的 binder 可以看做是验证器
    const bind = createBinder(overloads, binder);
    return call as OverloadFunction<T>;

    function call(...args: OverloadParameters<T>) {
        const index = bind(args);
        const fn = index !== undefined ? overloads[index] : undefined;
        if (typeof fn === "function") {
            return fn(...args);
        }
        // 没有通过验证抛出异常 Invalid arguments
        throw new TypeError("Invalid arguments");
    }
}
function createBinder<T extends OverloadDefinitions>(overloads: T, binder: OverloadBinders<T>): OverloadBinder<T> {
    return args => {
        for (let i = 0; hasProperty(overloads, `${i}`) && hasProperty(binder, `${i}`); i++) {
            const fn = binder[i];
            // 判断是否通过验证
            if (fn(args)) {
                return i as OverloadKeys<T>;
            }
        }
    };
}
export function buildOverload(name: string): OverloadBuilder {
    return {
        overload: overloads => ({
            bind: binder => ({
                finish: () => createOverload(name, overloads, binder),
                deprecate: deprecations => ({
                    finish: () => createOverload(name, overloads, binder, deprecations)
                })
            })
        })
    };
}

```

## 问题原因

由于 Typescript Compiler API 不支持在接口（Interface）的属性上添加注释（Comment），之前的解决方案时在创建Interface 时在属性上方强塞入 Comment。

```ts
  // 导出标识符
  const exportModifier = factory.createModifier(ts.SyntaxKind.ExportKeyword)
  // 方法名称
  const interfaceName = factory.createIdentifier('MyInterface')
  return factory.createInterfaceDeclaration(
    [exportModifier],
    interfaceName,
    undefined,
    undefined,
    // 这里参数定义只能塞入 TypeElement，之前没有强验证可以通过
    [
      // 多行注释
      factory.createJSDocComment(
        ['1', '2', '3'].join('\n'),
        [],
      ),
      // 接口属性
      factory.createPropertySignature(
        // ...
      )
      // 单行注释
      ts.addSyntheticLeadingComment(
        factory.createIdentifier(''),
        ts.SyntaxKind.SingleLineCommentTrivia,
        ` ~~~`,
        false,
      ),
      // 接口属性
      factory.createPropertySignature(
        // ...
      )
    ],
  )
```

## 解决方法

由于 Typescript Compiler API 不支持注释的接入，那么如果该方法不能使用，添加注释就会变得很麻烦，实际原因是在传入后进入了 `buildOverload` 的逻辑。

```js
// 对 createInterfaceDeclaration 的 members 进行了验证
members === undefined || ts.every(members, ts.isTypeElement)
```

所以导致了这种方法无法通过参数的校验，目前没有特别好的方法直接对 `createInterfaceDeclaration` 源码进行修复，但我们可以对 `isTypeElement` 这个方法进行魔改，从而骗过 `createInterfaceDeclaration` 的参数验证。

```ts
const isTypeElement = ts.isTypeElement
ts.isTypeElement = function(node): node is ts.TypeElement {
  return isTypeElement(node) || ts.isJSDoc(node) || ts.isIdentifier(node) 
}
```