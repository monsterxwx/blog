## 介绍

[pnpm.js.org](https://pnpm.js.org/installation/)

pnpm 是 Node.js 的替代包管理器。它是 npm 的直接替代品，但速度更快、效率更高。

为什么效率更高？当您安装软件包时，我们会将其保存在您机器上的全局存储中，然后我们会从中创建一个硬链接，而不是进行复制。对于模块的每个版本，磁盘上只保留一个副本。例如，当使用 npm 或 yarn 时，如果您有 100 个使用 lodash 的包，则磁盘上将有 100 个 lodash 副本。

pnpm 可让您节省数 GB 的磁盘空间！

pnpm 拥有 Yarn 超过 npm 的所有附加功能：

- 安全: 与 yarn 一样，pnpm 有一个包含所有已安装包校验和的特殊文件，用于在执行代码之前验证每个已安装包的完整性。

- 离线模式: pnpm 将所有下载的包 tarball 保存在本地注册表镜像中。当包在本地可用时，它从不发出请求。使用该--offline 参数可以完全禁止 HTTP 请求。

- 速度: pnpm 不仅比 npm 快，而且比 yarn 快。无论是冷缓存还是热缓存，它都比 yarn 快。yarn 从缓存中复制文件，而 pnpm 只是从全局存储中链接它们。

## 全局安装

```Shell
npm install pnpm -g
```

## 设置源

查看源

```Shell
pnpm config get registry 
```

淘宝源

```Shell
pnpm config set registry https://registry.npmmirror.com/
```

原镜像

```Shell
pnpm config set registry https://registry.npmjs.org/
```

## 源切换工具nrm

安装

```Shell
npm install -g nrm
```

查看源

```Shell
nrm ls
```

测试源反应时间

```Shell
nrm test npm
```

切换源

```Shell
nrm use taobao
```

增加定制源:用于安装公司内部资源

```Shell
nrm add mynpm http://192.168.100.46:6666
```

删除源

```Shell
nrm del mynpm
```

## 使用

```Shell
pnpm install 包  // 
pnpm i 包
pnpm add 包    // -S  默认写入dependencies
pnpm add -D    // -D devDependencies
pnpm add -g    // 全局安装
```

## 移除

```Shell
pnpm remove 包                            //移除包
pnpm remove 包 --global                   //移除全局包
```

## 更新

```Shell
pnpm up                //更新所有依赖项
pnpm upgrade 包        //更新包
pnpm upgrade 包 --global   //更新全局包
```

## 设置存储路径

```Shell
pnpm config set store-dir /path/to/.pnpm-store
```

## 禁止使用脚本解决方法

```Shell
# 以管理员身份运行power shell
set-executionpolicy remotesigned
```

## npm常用命令

- npm init(生成package.json说明书文件)

    - npm init -y(可以跳过向导，快速生成)

- npm install

    - 一次性把dependencies选项中的依赖项全部安装

    - 简写（npm i）

- npm install 包名

    - 只下载

    - 简写（npm i 包名）

- npm install --save 包名

    - 下载并且保存依赖项（package.json文件中的dependencies选项）

    - 简写（npm i  包名）

- npm uninstall 包名

    - 只删除，如果有依赖项会依然保存

    - 简写（npm un 包名）

- npm uninstall --save 包名

    - 删除的同时也会把依赖信息全部删除

    - 简写（npm un 包名）

- npm help

    - 查看使用帮助

- npm 命令 --help

    - 查看具体命令的使用帮助（npm uninstall --help）

