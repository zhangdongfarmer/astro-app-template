# 工作空间配置说明

本项目通过pnpm工作空间功能，引用了位于`../../mk-admin-antd/src-common/`目录下的本地包。

## 配置概述

1. 创建了`pnpm-workspace.yaml`文件，定义工作空间包含当前项目和外部包目录
2. 在`package.json`中添加了对外部包的依赖，使用`workspace:*`语法

## 已配置的外部包

已配置了以下外部包的引用:

- `@mk/utils` - 通用工具函数
- `@mk/storage` - 存储相关功能
- `@mk/hooks` - Vue Hooks 功能

## 使用方法

### 安装依赖

```bash
pnpm install
```

### 在代码中引用

```javascript
// 引入utils包
import { ... } from '@mk/utils';

// 引入storage包
import { ... } from '@mk/storage';

// 引入hooks包
import { ... } from '@mk/hooks';
```

## 注意事项

1. 使用前请确保外部包路径正确，且能被pnpm识别
2. 在导入时需了解每个包实际导出的内容，可以查看各包的`src/index.js`文件
3. 如需添加其他外部包，请在`package.json`中添加相应的依赖，格式为`"@mk/包名": "workspace:*"` 